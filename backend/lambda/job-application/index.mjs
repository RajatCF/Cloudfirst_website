import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";
import { SESClient, SendRawEmailCommand } from "@aws-sdk/client-ses";
import { randomUUID } from "crypto";

const ddb = DynamoDBDocumentClient.from(new DynamoDBClient({}));
const ses = new SESClient({});

const TABLE_NAME = process.env.APPLICATIONS_TABLE || "CloudFirst-Jobs";
const HR_EMAIL = process.env.HR_EMAIL || "rajat.sharma@cloudfirst.tech";
const FROM_EMAIL = process.env.FROM_EMAIL || "noreply@cloudfirst.tech";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST,OPTIONS",
};

const json = (statusCode, body) => ({
  statusCode,
  headers: { "Content-Type": "application/json", ...corsHeaders },
  body: JSON.stringify(body),
});

const buildRawEmail = ({ to, subject, text, attachment }) => {
  const boundary = `----=_Part_${Date.now()}`;
  const lines = [
    `From: CloudFirst Careers <${FROM_EMAIL}>`,
    `To: ${to}`,
    `Subject: ${subject}`,
    "MIME-Version: 1.0",
    `Content-Type: multipart/mixed; boundary="${boundary}"`,
    "",
    `--${boundary}`,
    "Content-Type: text/plain; charset=UTF-8",
    "Content-Transfer-Encoding: 7bit",
    "",
    text,
  ];

  if (attachment?.base64 && attachment?.fileName) {
    lines.push(
      `--${boundary}`,
      `Content-Type: ${attachment.contentType || "application/octet-stream"}; name="${attachment.fileName}"`,
      "Content-Transfer-Encoding: base64",
      `Content-Disposition: attachment; filename="${attachment.fileName}"`,
      "",
      attachment.base64,
    );
  }

  lines.push(`--${boundary}--`);
  return Buffer.from(lines.join("\r\n"));
};

export const handler = async (event) => {
  if (event.requestContext?.http?.method === "OPTIONS" || event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers: corsHeaders, body: "" };
  }

  try {
    const body = typeof event.body === "string" ? JSON.parse(event.body) : event.body;
    const {
      name,
      email,
      phone,
      position,
      positionId,
      linkedin = "",
      message = "",
      resumeFileName,
      resumeContentType,
      resumeBase64,
      source = "cloudfirst.tech",
      timestamp,
      ip = "",
    } = body || {};

    if (!name || !email || !phone || !position || !positionId || !resumeFileName || !resumeBase64) {
      return json(400, { message: "Missing required fields" });
    }

    const applicationId = randomUUID();
    const createdAt = timestamp || new Date().toISOString();

    await ddb.send(
      new PutCommand({
        TableName: TABLE_NAME,
        Item: {
          applicationId,
          name,
          email,
          phone,
          position,
          positionId,
          linkedin,
          message,
          resumeFileName,
          resumeContentType: resumeContentType || "application/octet-stream",
          source,
          ip,
          createdAt,
          status: "new",
        },
      }),
    );

    const hrText = [
      "New job application received",
      "",
      `Application ID: ${applicationId}`,
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Position: ${position}`,
      `Position ID: ${positionId}`,
      linkedin ? `LinkedIn: ${linkedin}` : "",
      message ? `Message: ${message}` : "",
      `Source: ${source}`,
      `Submitted: ${createdAt}`,
      ip ? `IP: ${ip}` : "",
      "",
      "Resume is attached to this email.",
    ]
      .filter(Boolean)
      .join("\n");

    await ses.send(
      new SendRawEmailCommand({
        RawMessage: {
          Data: buildRawEmail({
            to: HR_EMAIL,
            subject: `New Application: ${position} — ${name}`,
            text: hrText,
            attachment: {
              fileName: resumeFileName,
              contentType: resumeContentType,
              base64: resumeBase64,
            },
          }),
        },
      }),
    );

    const applicantText = [
      `Dear ${name},`,
      "",
      "Thank you for applying to CloudFirst!",
      "",
      `We have received your application for the position of ${position}.`,
      "If you get shortlisted, we will reach out to you soon.",
      "",
      "Best regards,",
      "CloudFirst HR Team",
    ].join("\n");

    await ses.send(
      new SendRawEmailCommand({
        RawMessage: {
          Data: buildRawEmail({
            to: email,
            subject: "Thank you for applying to CloudFirst",
            text: applicantText,
          }),
        },
      }),
    );

    return json(200, { message: "Application submitted successfully", applicationId });
  } catch (error) {
    console.error("Job application error:", error);
    return json(500, { message: "Failed to submit application" });
  }
};
