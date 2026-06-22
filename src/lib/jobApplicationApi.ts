const JOB_APPLICATION_API_URL =
  import.meta.env.VITE_JOB_APPLICATION_API_URL ||
  "https://wefll4iita.execute-api.ap-south-1.amazonaws.com/dev/send-contact";

export interface JobApplicationPayload {
  type: "job_application";
  name: string;
  email: string;
  mobile: string;
  linkedin?: string;
  message?: string;
  experience?: string;
  job_id?: string;
  position?: string;
  resumeFileName: string;
  resumeContentType: string;
  resumeBase64: string;
  source?: string;
}

export interface JobApplicationResponse {
  message: string;
  applicationId: string;
}

export const fileToBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      if (typeof result !== "string") {
        reject(new Error("Failed to read resume file"));
        return;
      }
      const base64 = result.split(",")[1];
      if (!base64) {
        reject(new Error("Failed to encode resume file"));
        return;
      }
      resolve(base64);
    };
    reader.onerror = () => reject(new Error("Failed to read resume file"));
    reader.readAsDataURL(file);
  });

export const submitJobApplication = async (input: {
  name: string;
  email: string;
  mobile: string;
  experience?: string;
  jobId?: string;
  position?: string;
  linkedin?: string;
  message?: string;
  resume: File;
}): Promise<JobApplicationResponse> => {
  const resumeBase64 = await fileToBase64(input.resume);

  const payload: JobApplicationPayload = {
    type: "job_application",
    name: input.name.trim(),
    email: input.email.trim(),
    mobile: input.mobile.trim(),
    linkedin: input.linkedin?.trim() || "",
    message: input.message?.trim() || "",
    experience: input.experience?.trim() || "",
    job_id: input.jobId || "",
    position: input.position?.trim() || "",
    resumeFileName: input.resume.name,
    resumeContentType: input.resume.type || "application/pdf",
    resumeBase64,
    source: "cloudfirst.tech",
  };

  const res = await fetch(JOB_APPLICATION_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = (await res.json().catch(() => null)) as
    | JobApplicationResponse
    | { message?: string; error?: string; errors?: string[] }
    | null;

  if (!res.ok) {
    const details = data?.error || data?.errors?.join(", ");
    throw new Error(details || data?.message || `Request failed: ${res.status}`);
  }

  return {
    message: data?.message || "Application submitted successfully",
    applicationId: (data as JobApplicationResponse)?.applicationId || "",
  };
};
