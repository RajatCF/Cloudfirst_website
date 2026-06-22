import { useQuery } from "@tanstack/react-query";
import { jobOpenings } from "@/data/jobOpenings";

export const useJobOpenings = () =>
  useQuery({
    queryKey: ["job-openings"],
    queryFn: async () => jobOpenings,
    staleTime: 5 * 60 * 1000,
  });
