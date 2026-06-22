import { useEffect, useRef, useState } from "react";
import { Loader2, Upload, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { JobOpening } from "@/data/jobOpenings";
import { submitJobApplication } from "@/lib/jobApplicationApi";

const ACCEPTED_RESUME_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
const MAX_RESUME_SIZE_MB = 5;

const EXPERIENCE_OPTIONS = [
  "Fresher",
  "0-1 years",
  "1-3 years",
  "3-5 years",
  "5-8 years",
  "8+ years",
];

interface JobApplicationDialogProps {
  job: JobOpening | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const initialForm = {
  name: "",
  email: "",
  phone: "",
  experience: "",
  linkedin: "",
  message: "",
};

const JobDescriptionBlock = ({ job }: { job: JobOpening }) => (
  <div className="space-y-4 text-sm border border-gray-100 rounded-lg bg-gray-50 p-4">
    {job.description ? (
      <div>
        <h4 className="font-semibold text-gray-900 mb-2">Job Description</h4>
        <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">{job.description}</p>
      </div>
    ) : null}

    {job.requirements && job.requirements.length > 0 && (
      <div>
        <h4 className="font-semibold text-gray-900 mb-1.5">Requirements</h4>
        <ul className="list-disc list-inside text-gray-600 space-y-0.5">
          {job.requirements.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    )}

    {job.responsibilities && job.responsibilities.length > 0 && (
      <div>
        <h4 className="font-semibold text-gray-900 mb-1.5">Responsibilities</h4>
        <ul className="list-disc list-inside text-gray-600 space-y-0.5">
          {job.responsibilities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    )}

    {job.benefits && job.benefits.length > 0 && (
      <div>
        <h4 className="font-semibold text-gray-900 mb-1.5">Benefits</h4>
        <ul className="list-disc list-inside text-gray-600 space-y-0.5">
          {job.benefits.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    )}

    {job.contactEmail ? (
      <p className="text-gray-500 text-xs">
        Interested candidates may also share their resume at{" "}
        <a href={`mailto:${job.contactEmail}`} className="text-bright-blue hover:underline font-medium">
          {job.contactEmail}
        </a>
      </p>
    ) : null}
  </div>
);

const JobApplicationDialog = ({ job, open, onOpenChange }: JobApplicationDialogProps) => {
  const [form, setForm] = useState(initialForm);
  const [resume, setResume] = useState<File | null>(null);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [applicationId, setApplicationId] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    window.__lenis?.stop();
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const handleWheel = (event: WheelEvent) => {
      const container = scrollContainerRef.current;
      if (!container) return;

      const target = event.target as Node | null;
      if (target && container.contains(target)) return;

      event.preventDefault();
    };

    document.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      document.removeEventListener("wheel", handleWheel);
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      window.__lenis?.start();
    };
  }, [open]);

  const resetState = () => {
    setForm(initialForm);
    setResume(null);
    setError("");
    setIsSubmitting(false);
    setIsSuccess(false);
    setApplicationId("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleOpenChange = (nextOpen: boolean) => {
    if (!nextOpen) resetState();
    onOpenChange(nextOpen);
  };

  const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!ACCEPTED_RESUME_TYPES.includes(file.type)) {
      setError("Please upload a PDF or Word document (.pdf, .doc, .docx).");
      e.target.value = "";
      return;
    }

    if (file.size > MAX_RESUME_SIZE_MB * 1024 * 1024) {
      setError(`Resume must be smaller than ${MAX_RESUME_SIZE_MB}MB.`);
      e.target.value = "";
      return;
    }

    setError("");
    setResume(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!job || isSubmitting) return;

    if (!form.name.trim() || !form.email.trim() || !form.phone.trim() || !form.experience) {
      setError("Please fill in all required fields.");
      return;
    }

    if (!resume) {
      setError("Please upload your resume.");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const result = await submitJobApplication({
        name: form.name,
        email: form.email,
        mobile: form.phone,
        experience: form.experience,
        jobId: job.id,
        position: job.title,
        linkedin: form.linkedin,
        message: form.message,
        resume,
      });
      setApplicationId(result.applicationId);
      setIsSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!job) return null;

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-xl max-h-[90vh] flex flex-col overflow-hidden p-0 gap-0 sm:rounded-lg">
        <div
          ref={scrollContainerRef}
          className="flex-1 overflow-y-auto overscroll-contain p-6"
          onWheel={(e) => e.stopPropagation()}
        >
          {isSuccess ? (
            <div className="py-6 text-center">
              <div className="w-14 h-14 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4 text-2xl">
                ✓
              </div>
              <DialogHeader className="text-center">
                <DialogTitle className="text-xl">Application Submitted</DialogTitle>
                <DialogDescription className="text-base pt-2">
                  Thank you for applying! If you get shortlisted, we will reach out to you soon.
                  {applicationId ? (
                    <span className="block mt-2 text-sm text-gray-500">
                      Reference ID: {applicationId}
                    </span>
                  ) : null}
                </DialogDescription>
              </DialogHeader>
              <Button className="mt-6 w-full" onClick={() => handleOpenChange(false)}>
                Close
              </Button>
            </div>
          ) : (
            <>
              <DialogHeader>
                <DialogTitle>Apply for {job.title}</DialogTitle>
                <DialogDescription>
                  {job.team} · {job.location} · {job.type}
                </DialogDescription>
              </DialogHeader>

              <JobDescriptionBlock job={job} />

              <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="apply-name">Full Name *</Label>
                  <Input
                    id="apply-name"
                    value={form.name}
                    onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="apply-email">Email *</Label>
                  <Input
                    id="apply-email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="apply-phone">Phone Number *</Label>
                  <Input
                    id="apply-phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="apply-experience">Experience *</Label>
                  <Select
                    value={form.experience}
                    onValueChange={(value) => setForm((prev) => ({ ...prev, experience: value }))}
                    required
                  >
                    <SelectTrigger id="apply-experience">
                      <SelectValue placeholder="Select your experience" />
                    </SelectTrigger>
                    <SelectContent>
                      {EXPERIENCE_OPTIONS.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="apply-position">Position Applied For</Label>
                  <Input id="apply-position" value={job.title} disabled className="bg-gray-50" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="apply-linkedin">LinkedIn Profile</Label>
                  <Input
                    id="apply-linkedin"
                    type="url"
                    value={form.linkedin}
                    onChange={(e) => setForm((prev) => ({ ...prev, linkedin: e.target.value }))}
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="apply-message">Cover Letter / Message</Label>
                  <Textarea
                    id="apply-message"
                    value={form.message}
                    onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                    placeholder="Tell us why you're a great fit for this role..."
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="apply-resume">Resume *</Label>
                  <div
                    className="border-2 border-dashed border-gray-200 rounded-lg p-4 text-center hover:border-bright-blue/50 transition-colors cursor-pointer"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <input
                      ref={fileInputRef}
                      id="apply-resume"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      onChange={handleResumeChange}
                    />
                    {resume ? (
                      <div className="flex items-center justify-center gap-2 text-sm text-gray-700">
                        <span className="font-medium truncate max-w-[240px]">{resume.name}</span>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setResume(null);
                            if (fileInputRef.current) fileInputRef.current.value = "";
                          }}
                          className="text-gray-400 hover:text-red-500"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <>
                        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-600">Click to upload resume</p>
                        <p className="text-xs text-gray-400 mt-1">PDF, DOC, DOCX — max {MAX_RESUME_SIZE_MB}MB</p>
                      </>
                    )}
                  </div>
                </div>

                {error && (
                  <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
                    {error}
                  </p>
                )}

                <Button type="submit" className="w-full bg-bright-blue hover:bg-bright-blue/90" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Apply Now"
                  )}
                </Button>
              </form>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default JobApplicationDialog;
