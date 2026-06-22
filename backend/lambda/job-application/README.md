# Job Application API (AWS Lambda)

This Lambda handles job application submissions from the Careers and Current Openings pages.

## What it does

1. Saves application details to DynamoDB (`CloudFirst-Jobs` table)
2. Sends HR an email with all applicant details and resume attachment
3. Sends the applicant a thank-you confirmation email

## Environment variables

| Variable | Description | Default |
|---|---|---|
| `APPLICATIONS_TABLE` | DynamoDB table name | `CloudFirst-Jobs` |
| `HR_EMAIL` | HR inbox for new applications | `rajat.sharma@cloudfirst.tech` (testing) |
| `FROM_EMAIL` | Verified SES sender address | `noreply@cloudfirst.tech` |

## DynamoDB table schema

- **Partition key:** `applicationId` (String)
- **Attributes:** name, email, phone, position, positionId, linkedin, message, resumeFileName, resumeContentType, source, ip, createdAt, status

## API Gateway route

Add a `POST /job-application` route on the existing API:

```
https://wefll4iita.execute-api.ap-south-1.amazonaws.com/dev/job-application
```

Enable CORS for `POST` and `OPTIONS`.

## Deploy steps

```bash
cd backend/lambda/job-application
npm install
zip -r function.zip index.mjs node_modules package.json
# Upload function.zip to AWS Lambda and attach API Gateway route
```

## Frontend

The React app posts to this endpoint from `src/lib/jobApplicationApi.ts`.
