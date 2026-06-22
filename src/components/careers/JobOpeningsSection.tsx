import { useState } from "react";
import { Briefcase, MapPin, Clock, ChevronRight, Loader2, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";
import type { JobOpening } from "@/data/jobOpenings";
import { useJobOpenings } from "@/hooks/useJobOpenings";
import JobApplicationDialog from "@/components/careers/JobApplicationDialog";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const JobDetailsLists = ({ job }: { job: JobOpening }) => (
  <div className="mt-5 space-y-4 text-sm border-t border-gray-100 pt-5">
    {job.requirements && job.requirements.length > 0 && (
      <div>
        <h4 className="font-semibold text-gray-900 mb-2">Requirements</h4>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          {job.requirements.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    )}

    {job.responsibilities && job.responsibilities.length > 0 && (
      <div>
        <h4 className="font-semibold text-gray-900 mb-2">Responsibilities</h4>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          {job.responsibilities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    )}

    {job.benefits && job.benefits.length > 0 && (
      <div>
        <h4 className="font-semibold text-gray-900 mb-2">Benefits</h4>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          {job.benefits.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    )}

    {job.contactEmail ? (
      <p className="text-gray-500 text-xs pt-1">
        Interested candidates may also share their resume at{" "}
        <a href={`mailto:${job.contactEmail}`} className="text-bright-blue hover:underline font-medium">
          {job.contactEmail}
        </a>
      </p>
    ) : null}
  </div>
);

interface JobOpeningsSectionProps {
  variant?: "full" | "compact";
  showHeader?: boolean;
  className?: string;
}

const JobOpeningsSection = ({
  variant = "full",
  showHeader = true,
  className = "",
}: JobOpeningsSectionProps) => {
  const { data: jobOpenings = [], isLoading, isError, error, refetch, isFetching } = useJobOpenings();
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleApply = (job: JobOpening) => {
    setSelectedJob(job);
    setDialogOpen(true);
  };

  if (isLoading) {
    return (
      <div className={`flex flex-col items-center justify-center py-16 text-gray-500 ${className}`}>
        <Loader2 className="w-8 h-8 animate-spin text-bright-blue mb-3" />
        <p className="text-sm">Loading current openings...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className={`bg-white rounded-2xl border border-red-100 shadow-sm p-8 sm:p-10 text-center ${className}`}>
        <p className="text-red-600 font-medium mb-2">Unable to load job openings</p>
        <p className="text-sm text-gray-500 mb-4">
          {error instanceof Error ? error.message : "Something went wrong"}
        </p>
        <button
          type="button"
          onClick={() => refetch()}
          disabled={isFetching}
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-bright-blue rounded-lg hover:bg-bright-blue/90 disabled:opacity-60"
        >
          <RefreshCw className={`w-4 h-4 ${isFetching ? "animate-spin" : ""}`} />
          Try again
        </button>
      </div>
    );
  }

  if (jobOpenings.length === 0) {
    return (
      <div className={`bg-white rounded-2xl border border-gray-200 shadow-lg p-8 sm:p-10 text-center ${className}`}>
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">No current opening</h2>
        <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
          Please check back later for new opportunities.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className={className}>
        {showHeader && variant === "full" && (
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
          >
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Explore exciting career opportunities and be part of our innovative team driving the future of cloud
              technology.
            </p>
            <div className="mt-6 flex items-center justify-center">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
                <Briefcase className="w-5 h-5 text-bright-blue" />
                <span className="text-gray-700 font-medium">
                  {jobOpenings.length} open position{jobOpenings.length !== 1 ? "s" : ""}
                </span>
              </div>
            </div>
          </motion.div>
        )}

        {showHeader && variant === "compact" && (
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>
              Current openings
            </h2>
            <span className="text-sm text-gray-500">
              {jobOpenings.length} role{jobOpenings.length !== 1 ? "s" : ""} available
            </span>
          </div>
        )}

        <div className={variant === "full" ? "max-w-4xl mx-auto space-y-4" : "space-y-3"}>
          {jobOpenings.map((job, index) => (
            <motion.div
              key={job.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: index * 0.05, duration: 0.5 },
                },
              }}
              className="group bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-bright-blue/30 transition-all duration-300"
            >
              <div className="p-5 sm:p-6">
                <div
                  className={`flex flex-col ${variant === "compact" ? "md:flex-row md:items-start" : "lg:flex-row lg:items-start"} justify-between gap-4`}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-[10px] font-bold text-bright-blue bg-blue-50 border border-blue-100 rounded px-2 py-0.5 uppercase tracking-wider">
                        {job.team}
                      </span>
                      <span className="text-[10px] font-medium text-gray-500 bg-gray-50 border border-gray-100 rounded px-2 py-0.5">
                        {job.type}
                      </span>
                      {job.experience ? (
                        <span className="text-[10px] font-medium text-gray-500 bg-gray-50 border border-gray-100 rounded px-2 py-0.5">
                          {job.experience.toLowerCase() === "fresher"
                            ? "Fresher"
                            : `${job.experience}+ yrs exp`}
                        </span>
                      ) : null}
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-bright-blue transition-colors">
                      {job.title}
                    </h3>

                    <div className="flex flex-wrap items-center gap-4 mt-2.5 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {job.type}
                      </span>
                    </div>

                    {variant === "full" ? <JobDetailsLists job={job} /> : null}
                  </div>

                  <button
                    type="button"
                    onClick={() => handleApply(job)}
                    className={`flex-shrink-0 inline-flex items-center justify-center gap-1.5 px-5 py-2.5 bg-bright-blue hover:bg-bright-blue/90 text-white text-sm font-semibold rounded-lg transition-colors whitespace-nowrap ${
                      variant === "compact" ? "text-xs px-4 py-2" : ""
                    }`}
                  >
                    Apply Now
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <JobApplicationDialog job={selectedJob} open={dialogOpen} onOpenChange={setDialogOpen} />
    </>
  );
};

export default JobOpeningsSection;
