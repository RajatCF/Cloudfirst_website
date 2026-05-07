import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

// Lazy loaded components for better performance
const Index = lazy(() => import("./pages/Index"));
const Industries = lazy(() => import("./pages/Industries"));
const Solutions = lazy(() => import("./pages/Solutions"));
const Insights = lazy(() => import("./pages/Insights"));
const About = lazy(() => import("./pages/About"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const CloudMigration = lazy(() => import("./pages/CloudMigration"));
const DataAnalytic = lazy(() => import("./pages/DataAnalytic"));
const ManagedCloudService = lazy(() => import("./pages/ManagedCloudService"));
const CloudSecurity = lazy(() => import("./pages/CloudSecurity"));
const CloudDevOps = lazy(() => import("./pages/CloudDevOps"));
const ResourceEvents = lazy(() => import("./pages/ResourceEvents"));
const CurrentOpenings = lazy(() => import("./pages/CurrentOpenings"));
const AmazonWebServices = lazy(() => import("./pages/AmazonWebServices"));
const MicrosoftAzure = lazy(() => import("./pages/MicrosoftAzure"));
const GoogleCloud = lazy(() => import("./pages/GoogleCloud"));
const CloudPlatformSecurity = lazy(() => import("./pages/CloudPlatformSecurity"));
const BackupDisasterRecovery = lazy(() => import("./pages/BackupDisasterRecovery"));
const NetworkingCdn = lazy(() => import("./pages/NetworkingCdn"));
const GoogleWorkspace = lazy(() => import("./pages/GoogleWorkspace"));
const Microsoft365 = lazy(() => import("./pages/Microsoft365"));
const ManagedServices = lazy(() => import("./pages/ManagedServices"));
const NocSupport = lazy(() => import("./pages/NocSupport"));
const InfrastructureModernisation = lazy(() => import("./pages/InfrastructureModernisation"));
const CostOptimisation = lazy(() => import("./pages/CostOptimisation"));
const CloudSecurityCompliance = lazy(() => import("./pages/CloudSecurityCompliance"));
const StartupsSmbs = lazy(() => import("./pages/StartupsSmbs"));
const EnterpriseIndustry = lazy(() => import("./pages/EnterpriseIndustry"));
const FinanceBfsi = lazy(() => import("./pages/FinanceBfsi"));
const HealthcareIndustry = lazy(() => import("./pages/HealthcareIndustry"));
const EducationIndustry = lazy(() => import("./pages/EducationIndustry"));
const CloudStrategyRoadmap = lazy(() => import("./pages/CloudStrategyRoadmap"));
const ArchitectureReview = lazy(() => import("./pages/ArchitectureReview"));
const MigrationPlanning = lazy(() => import("./pages/MigrationPlanning"));
const ManagedCloudOperations = lazy(() => import("./pages/ManagedCloudOperations"));
const FinopsBillingManagement = lazy(() => import("./pages/FinopsBillingManagement"));
const SecurityMonitoring = lazy(() => import("./pages/SecurityMonitoring"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const BlogInsights = lazy(() => import("./pages/BlogInsights"));
const Whitepapers = lazy(() => import("./pages/Whitepapers"));
const MigrationGuides = lazy(() => import("./pages/MigrationGuides"));
const PartnerCertifications = lazy(() => import("./pages/PartnerCertifications"));
const CloudCostCalculator = lazy(() => import("./pages/CloudCostCalculator"));
const OurPartners = lazy(() => import("./pages/OurPartners"));
const Careers = lazy(() => import("./pages/Careers"));
const Hiring = lazy(() => import("./pages/Hiring"));
const PressMedia = lazy(() => import("./pages/PressMedia"));
const GoGlobalAward = lazy(() => import("./pages/GoGlobalAward"));
const Reinforce360TM = lazy(() => import("./pages/Reinforce360TM"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const CreateBlog = lazy(() => import("./pages/CreateBlog"));
const CloudFirstVideos = lazy(() => import("./pages/CloudFirstVideos"));
const LifeAtCloudFirst = lazy(() => import("./pages/LifeAtCloudFirst"));
const WorkBenefits = lazy(() => import("./pages/WorkBenefits"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Suspense fallback={<div>Loading...</div>}><Index /></Suspense>} />
          <Route path="/industries" element={<Suspense fallback={<div>Loading...</div>}><Industries /></Suspense>} />
          <Route path="/solutions" element={<Suspense fallback={<div>Loading...</div>}><Solutions /></Suspense>} />
          <Route path="/insights" element={<Suspense fallback={<div>Loading...</div>}><Insights /></Suspense>} />
          <Route path="/insights/events" element={<Suspense fallback={<div>Loading...</div>}><ResourceEvents /></Suspense>} />
          <Route path="/events" element={<Suspense fallback={<div>Loading...</div>}><ResourceEvents /></Suspense>} />
          <Route path="/about" element={<Suspense fallback={<div>Loading...</div>}><About /></Suspense>} />
          <Route path="/pricing" element={<Suspense fallback={<div>Loading...</div>}><Pricing /></Suspense>} />
          <Route path="/contact" element={<Suspense fallback={<div>Loading...</div>}><Contact /></Suspense>} />
          <Route path="/current-openings" element={<Suspense fallback={<div>Loading...</div>}><CurrentOpenings /></Suspense>} />
          {/* Service Detail Pages */}
          <Route path="/solutions/cloud-migration" element={<Suspense fallback={<div>Loading...</div>}><CloudMigration /></Suspense>} />
          <Route path="/solutions/data-analytic" element={<Suspense fallback={<div>Loading...</div>}><DataAnalytic /></Suspense>} />
          <Route path="/solutions/managed-cloud-service" element={<Suspense fallback={<div>Loading...</div>}><ManagedCloudService /></Suspense>} />
          <Route path="/solutions/cloud-security" element={<Suspense fallback={<div>Loading...</div>}><CloudSecurity /></Suspense>} />
          <Route path="/solutions/cloud-devops" element={<Suspense fallback={<div>Loading...</div>}><CloudDevOps /></Suspense>} />

          {/* Navbar Option Pages */}
          <Route path="/cloud-platforms/aws" element={<Suspense fallback={<div>Loading...</div>}><AmazonWebServices /></Suspense>} />
          <Route path="/cloud-platforms/azure" element={<Suspense fallback={<div>Loading...</div>}><MicrosoftAzure /></Suspense>} />
          <Route path="/cloud-platforms/gcp" element={<Suspense fallback={<div>Loading...</div>}><GoogleCloud /></Suspense>} />
          <Route path="/cloud-platforms/cloud-security" element={<Suspense fallback={<div>Loading...</div>}><CloudPlatformSecurity /></Suspense>} />
          <Route path="/cloud-platforms/backup-recovery" element={<Suspense fallback={<div>Loading...</div>}><BackupDisasterRecovery /></Suspense>} />
          <Route path="/cloud-platforms/networking-cdn" element={<Suspense fallback={<div>Loading...</div>}><NetworkingCdn /></Suspense>} />
          <Route path="/cloud-platforms/google-workspace" element={<Suspense fallback={<div>Loading...</div>}><GoogleWorkspace /></Suspense>} />
          <Route path="/cloud-platforms/microsoft-365" element={<Suspense fallback={<div>Loading...</div>}><Microsoft365 /></Suspense>} />
          <Route path="/cloud-platforms/managed-services" element={<Suspense fallback={<div>Loading...</div>}><ManagedServices /></Suspense>} />
          <Route path="/cloud-platforms/noc-support" element={<Suspense fallback={<div>Loading...</div>}><NocSupport /></Suspense>} />

          <Route path="/solutions/infrastructure-modernisation" element={<Suspense fallback={<div>Loading...</div>}><InfrastructureModernisation /></Suspense>} />
          <Route path="/solutions/cost-optimisation" element={<Suspense fallback={<div>Loading...</div>}><CostOptimisation /></Suspense>} />
          <Route path="/solutions/cloud-security-compliance" element={<Suspense fallback={<div>Loading...</div>}><CloudSecurityCompliance /></Suspense>} />

          <Route path="/industries/startups-smbs" element={<Suspense fallback={<div>Loading...</div>}><StartupsSmbs /></Suspense>} />
          <Route path="/industries/enterprise" element={<Suspense fallback={<div>Loading...</div>}><EnterpriseIndustry /></Suspense>} />
          <Route path="/industries/finance-bfsi" element={<Suspense fallback={<div>Loading...</div>}><FinanceBfsi /></Suspense>} />
          <Route path="/industries/healthcare" element={<Suspense fallback={<div>Loading...</div>}><HealthcareIndustry /></Suspense>} />
          <Route path="/industries/education" element={<Suspense fallback={<div>Loading...</div>}><EducationIndustry /></Suspense>} />

          <Route path="/services/cloud-strategy" element={<Suspense fallback={<div>Loading...</div>}><CloudStrategyRoadmap /></Suspense>} />
          <Route path="/services/architecture-review" element={<Suspense fallback={<div>Loading...</div>}><ArchitectureReview /></Suspense>} />
          <Route path="/services/migration-planning" element={<Suspense fallback={<div>Loading...</div>}><MigrationPlanning /></Suspense>} />
          <Route path="/services/managed-cloud-operations" element={<Suspense fallback={<div>Loading...</div>}><ManagedCloudOperations /></Suspense>} />
          <Route path="/services/finops" element={<Suspense fallback={<div>Loading...</div>}><FinopsBillingManagement /></Suspense>} />
          <Route path="/services/security-monitoring" element={<Suspense fallback={<div>Loading...</div>}><SecurityMonitoring /></Suspense>} />

          <Route path="/resources/case-studies" element={<Suspense fallback={<div>Loading...</div>}><CaseStudies /></Suspense>} />
          <Route path="/resources/blog-insights" element={<Suspense fallback={<div>Loading...</div>}><BlogInsights /></Suspense>} />
          <Route path="/resources/whitepapers" element={<Suspense fallback={<div>Loading...</div>}><Whitepapers /></Suspense>} />
          <Route path="/resources/migration-guides" element={<Suspense fallback={<div>Loading...</div>}><MigrationGuides /></Suspense>} />
          <Route path="/resources/partner-certifications" element={<Suspense fallback={<div>Loading...</div>}><PartnerCertifications /></Suspense>} />
          <Route path="/resources/cost-calculator" element={<Suspense fallback={<div>Loading...</div>}><CloudCostCalculator /></Suspense>} />

          <Route path="/company/partners" element={<Suspense fallback={<div>Loading...</div>}><OurPartners /></Suspense>} />
          <Route path="/company/careers" element={<Suspense fallback={<div>Loading...</div>}><Careers /></Suspense>} />
          <Route path="/company/hiring" element={<Suspense fallback={<div>Loading...</div>}><Hiring /></Suspense>} />
          <Route path="/company/press-media" element={<Suspense fallback={<div>Loading...</div>}><PressMedia /></Suspense>} />

          {/* Go Global Award Dedicated Page */}
          <Route path="/go-global-award" element={<Suspense fallback={<div>Loading...</div>}><GoGlobalAward /></Suspense>} />
          
          {/* Reinforce360TM Dedicated Page */}
          <Route path="/reinforce360tm" element={<Suspense fallback={<div>Loading...</div>}><Reinforce360TM /></Suspense>} />
          
          {/* Blog Pages */}
          <Route path="/blog" element={<Suspense fallback={<div>Loading...</div>}><Blog /></Suspense>} />
          <Route path="/blog/:id" element={<Suspense fallback={<div>Loading...</div>}><BlogPost /></Suspense>} />
          <Route path="/create-blog" element={<Suspense fallback={<div>Loading...</div>}><CreateBlog /></Suspense>} />
          
          {/* Videos Page */}
          <Route path="/videos" element={<Suspense fallback={<div>Loading...</div>}><CloudFirstVideos /></Suspense>} />
          
          {/* Life@CloudFirst Page */}
          <Route path="/life-at-cloudfirst" element={<Suspense fallback={<div>Loading...</div>}><LifeAtCloudFirst /></Suspense>} />
          
          {/* Current Openings Page */}
          <Route path="/current-openings" element={<Suspense fallback={<div>Loading...</div>}><CurrentOpenings /></Suspense>} />
          
          {/* Work Benefits Page */}
          <Route path="/work-benefits" element={<Suspense fallback={<div>Loading...</div>}><WorkBenefits /></Suspense>} />

          <Route path="*" element={<Suspense fallback={<div>Loading...</div>}><NotFound /></Suspense>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
