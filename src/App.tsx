import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useNavigate, Navigate } from "react-router-dom";
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
const DROnCloud = lazy(() => import("./pages/DROnCloud"));
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
const CloudDataBackup = lazy(() => import("./pages/CloudDataBackup"));
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
const OurClients = lazy(() => import("./pages/OurClients"));
const Careers = lazy(() => import("./pages/Careers"));
const Hiring = lazy(() => import("./pages/Hiring"));
const PressMedia = lazy(() => import("./pages/PressMedia"));
const SupportPlans = lazy(() => import("./pages/SupportPlans"));
const GoGlobalAward = lazy(() => import("./pages/GoGlobalAward"));
const Reinforce360TM = lazy(() => import("./pages/Reinforce360TM"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const CreateBlog = lazy(() => import("./pages/CreateBlog"));
const CloudFirstVideos = lazy(() => import("./pages/CloudFirstVideos"));
const LifeAtCloudFirst = lazy(() => import("./pages/LifeAtCloudFirst"));
const WorkBenefits = lazy(() => import("./pages/WorkBenefits"));
const EvergreenThought = lazy(() => import("./pages/EvergreenThought"));
const OgGreenTreeReport = lazy(() => import("./pages/OgGreenTreeReport"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
 
const queryClient = new QueryClient();

const OgGreenTreeButton = () => {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate("/og-green-tree")}
      aria-label="Open OG Green Tree"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[60] w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-yellow-50 shadow-xl hover:shadow-2xl transition-all duration-200 flex items-center justify-center overflow-hidden ring-1 ring-yellow-200"
    >
      <img
        src="/logo/og-green-tree.jpg"
        alt="OG Green Tree"
        className="w-full h-full object-cover rounded-full"
        loading="lazy"
      />
    </button>
  );
};
 
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <OgGreenTreeButton />
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/events" element={<ResourceEvents />} />
            <Route path="/events" element={<ResourceEvents />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/current-openings" element={<CurrentOpenings />} />
            {/* Service Detail Pages */}
            <Route path="/solutions/cloud-migration" element={<CloudMigration />} />
            <Route path="/solutions/data-analytic" element={<DataAnalytic />} />
            <Route path="/solutions/managed-cloud-service" element={<ManagedCloudService />} />
            <Route path="/solutions/cloud-security" element={<CloudSecurity />} />
            <Route path="/solutions/cloud-devops" element={<CloudDevOps />} />
            <Route path="/solutions/dr-on-cloud" element={<DROnCloud />} />
 
            {/* Navbar Option Pages */}
            <Route path="/cloud-platforms/aws" element={<AmazonWebServices />} />
            <Route path="/cloud-platforms/azure" element={<MicrosoftAzure />} />
            <Route path="/cloud-platforms/gcp" element={<GoogleCloud />} />
            <Route path="/cloud-platforms/cloud-security" element={<CloudPlatformSecurity />} />
            <Route path="/cloud-platforms/backup-recovery" element={<BackupDisasterRecovery />} />
            <Route path="/cloud-platforms/networking-cdn" element={<NetworkingCdn />} />
            <Route path="/cloud-platforms/google-workspace" element={<GoogleWorkspace />} />
            <Route path="/cloud-platforms/microsoft-365" element={<Microsoft365 />} />
            <Route path="/cloud-platforms/managed-services" element={<ManagedServices />} />
            <Route path="/cloud-platforms/noc-support" element={<NocSupport />} />
 
            <Route path="/solutions/infrastructure-modernisation" element={<InfrastructureModernisation />} />
            <Route path="/solutions/cost-optimisation" element={<CostOptimisation />} />
            <Route path="/solutions/cloud-security-compliance" element={<CloudSecurityCompliance />} />
            <Route path="/solutions/cloud-data-backup" element={<CloudDataBackup />} />
 
            <Route path="/industries/startups-smbs" element={<StartupsSmbs />} />
            <Route path="/industries/enterprise" element={<EnterpriseIndustry />} />
            <Route path="/industries/finance-bfsi" element={<FinanceBfsi />} />
            <Route path="/industries/healthcare" element={<HealthcareIndustry />} />
            <Route path="/industries/education" element={<EducationIndustry />} />
 
            <Route path="/services/cloud-strategy" element={<CloudStrategyRoadmap />} />
            <Route path="/services/architecture-review" element={<ArchitectureReview />} />
            <Route path="/services/migration-planning" element={<MigrationPlanning />} />
            <Route path="/services/managed-cloud-operations" element={<ManagedCloudOperations />} />
            <Route path="/services/finops" element={<FinopsBillingManagement />} />
            <Route path="/services/security-monitoring" element={<SecurityMonitoring />} />
 
            <Route path="/resources/case-studies" element={<CaseStudies />} />
            <Route path="/resources/blog-insights" element={<BlogInsights />} />
            <Route path="/resources/whitepapers" element={<Whitepapers />} />
            <Route path="/resources/migration-guides" element={<MigrationGuides />} />
            <Route path="/resources/partner-certifications" element={<PartnerCertifications />} />
            <Route path="/resources/cost-calculator" element={<CloudCostCalculator />} />
 
            <Route path="/company/partners" element={<OurPartners />} />
            <Route path="/company/clients" element={<OurClients />} />
            <Route path="/company/careers" element={<Careers />} />
            <Route path="/company/hiring" element={<Hiring />} />
            <Route path="/company/press-media" element={<PressMedia />} />
            <Route path="/support-plans" element={<SupportPlans />} />
 
            {/* Go Global Award Dedicated Page */}
            <Route path="/go-global-award" element={<GoGlobalAward />} />
           
            {/* Reinforce360TM Dedicated Page */}
            <Route path="/reinforce360tm" element={<Reinforce360TM />} />
           
            {/* Blog Pages */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/admin/blog" element={<CreateBlog />} />
            <Route path="/create-blog" element={<Navigate to="/admin/blog" replace />} />
           
            {/* Videos Page */}
            <Route path="/videos" element={<CloudFirstVideos />} />
           
            {/* Life@CloudFirst Page */}
            <Route path="/life-at-cloudfirst" element={<LifeAtCloudFirst />} />
           
            {/* Current Openings Page */}
            <Route path="/current-openings" element={<CurrentOpenings />} />
           
            {/* Work Benefits Page */}
            <Route path="/work-benefits" element={<WorkBenefits />} />

            <Route path="/evergreen-thought" element={<EvergreenThought />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/og-green-tree" element={<OgGreenTreeReport />} />
 
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);
 
export default App;
 
 
