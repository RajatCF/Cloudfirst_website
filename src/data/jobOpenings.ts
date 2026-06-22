export interface JobOpening {
  id: string;
  title: string;
  team: string;
  location: string;
  type: string;
  description: string;
  requirements?: string[];
  responsibilities?: string[];
  benefits?: string[];
  experience?: string;
  skills?: string[];
  salary?: string;
  postedDate?: string;
  contactEmail?: string;
}

export const jobOpenings: JobOpening[] = [
  {
    id: "sales-cloud-services-aws-azure-gcp",
    title: "Sales - Cloud Services (AWS, Azure & GCP)",
    team: "Sales",
    location: "Noida, Bangalore, Mumbai",
    type: "Full-time",
    description:
      "Drive cloud adoption by identifying prospects and pitching AWS, Azure, and GCP solutions. Help organizations transform their infrastructure while building long-term client relationships.",
    requirements: [
      "Excellent communication skills.",
      "Basic knowledge of AWS, Azure, or GCP.",
      "Immediate/Early joiners preferred.",
      "Strong interest in IT Sales.",
    ],
    responsibilities: [
      "Generate leads through cold calling, emails, and networking.",
      "Identify prospects and pitch Cloud solutions (AWS, Azure & GCP).",
      "Manage the sales cycle from lead generation to closure.",
      "Build client relationships and achieve sales targets.",
    ],
    benefits: ["Day Shift", "5 Days Working", "Incentives & Growth Opportunities"],
    contactEmail: "hrd@cloudfirst.tech",
  },
  {
    id: "sales-fresher-bangalore",
    title: "Sales - Fresher",
    team: "Sales",
    location: "Bangalore",
    type: "Full-time",
    experience: "Fresher",
    description:
      "Start your career in IT sales with CloudFirst. Learn to identify prospects, pitch cloud solutions, and grow into a full-cycle sales professional.",
    requirements: [
      "Fresh graduate or up to 1 year of experience.",
      "Excellent verbal and written communication skills.",
      "Strong interest in technology and IT sales.",
      "Willingness to learn about AWS, Azure, and GCP.",
      "Immediate joiners preferred.",
    ],
    responsibilities: [
      "Support lead generation through cold calling, emails, and networking.",
      "Assist in identifying prospects and pitching cloud solutions.",
      "Learn the sales cycle from lead generation to closure.",
      "Build and maintain client relationships under senior guidance.",
    ],
    benefits: ["Day Shift", "5 Days Working", "Training & Growth Opportunities"],
    contactEmail: "hrd@cloudfirst.tech",
  },
  {
    id: "ai-research-intern-fresher-bangalore",
    title: "AI Research Intern - Fresher",
    team: "Research & Innovation",
    location: "Bangalore",
    type: "Internship",
    experience: "Fresher",
    description:
      "Join our research team to explore AI and machine learning applications in cloud and enterprise solutions. Ideal for fresh graduates passionate about AI.",
    requirements: [
      "Fresh graduate in Computer Science, AI, ML, or related field.",
      "Basic understanding of Python and ML concepts.",
      "Strong analytical and problem-solving skills.",
      "Eagerness to learn and contribute to research projects.",
      "Available for internship duration (3–6 months).",
    ],
    responsibilities: [
      "Assist in AI/ML research and experimentation.",
      "Support data collection, preprocessing, and model evaluation.",
      "Document findings and contribute to internal research reports.",
      "Collaborate with engineering teams on proof-of-concept projects.",
    ],
    benefits: ["Flexible Hours", "Mentorship", "Certificate on Completion", "Pre-placement Opportunity"],
    contactEmail: "hrd@cloudfirst.tech",
  },
];
