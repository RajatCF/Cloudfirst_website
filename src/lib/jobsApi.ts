import type { JobOpening } from "@/data/jobOpenings";

const JOBS_API_URL =
  import.meta.env.VITE_JOBS_API_URL ||
  "https://g0107kune7.execute-api.ap-south-1.amazonaws.com/jobs";

export interface ApiJob {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  experience?: string;
  requirements?: string[];
  responsibilities?: string[];
  benefits?: string[];
  skills?: string[];
  salary?: string;
  postedDate?: string;
  applicationDeadline?: string;
  isActive?: string | boolean;
}

const isJobActive = (job: ApiJob): boolean => {
  if (job.isActive === undefined || job.isActive === null || job.isActive === "") return true;
  if (typeof job.isActive === "boolean") return job.isActive;
  return job.isActive.toLowerCase() === "true";
};

export const mapApiJobToOpening = (job: ApiJob): JobOpening => ({
  id: job.id,
  title: job.title.trim(),
  team: job.department?.trim() || "General",
  location: job.location?.trim() || "—",
  type: job.type?.trim() || "Full-time",
  description: job.description?.trim() || "",
  requirements: job.requirements?.filter(Boolean) ?? [],
  responsibilities: job.responsibilities?.filter(Boolean) ?? [],
  benefits: job.benefits?.filter(Boolean) ?? [],
  experience: job.experience?.trim() || undefined,
  skills: job.skills?.filter(Boolean) ?? [],
  salary: job.salary?.trim() || undefined,
  postedDate: job.postedDate || undefined,
});

export const fetchJobOpenings = async (): Promise<JobOpening[]> => {
  const res = await fetch(JOBS_API_URL, {
    method: "GET",
    headers: { Accept: "application/json" },
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(text || `Failed to fetch jobs: ${res.status}`);
  }

  const data = (await res.json()) as ApiJob[] | { jobs?: ApiJob[] };
  const jobs = Array.isArray(data) ? data : data.jobs ?? [];

  return jobs.filter(isJobActive).map(mapApiJobToOpening);
};
