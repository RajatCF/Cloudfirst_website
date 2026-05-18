import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
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
const AdvertisingMarketingIndustry = lazy(() => import("./pages/AdvertisingMarketingIndustry"));
const ManufacturingIndustry = lazy(() => import("./pages/ManufacturingIndustry"));
const SportsIndustry = lazy(() => import("./pages/SportsIndustry"));
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

const SectionThemeController = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const root = document.documentElement;

    const sectionKey = (() => {
      if (pathname.startsWith("/cloud-platforms/google-workspace")) return "resources";
      if (pathname.startsWith("/cloud-platforms/microsoft-365")) return "resources";
      if (pathname.startsWith("/cloud-platforms")) return "cloud-platforms";
      if (pathname.startsWith("/solutions") || pathname.startsWith("/industries")) return "solutions";
      if (pathname.startsWith("/services")) return "services";
      if (
        pathname.startsWith("/resources") ||
        pathname.startsWith("/blog") ||
        pathname.startsWith("/videos") ||
        pathname.startsWith("/life-at-cloudfirst") ||
        pathname.startsWith("/current-openings") ||
        pathname.startsWith("/events") ||
        pathname.startsWith("/work-benefits")
      )
        return "resources";
      if (
        pathname.startsWith("/company") ||
        pathname.startsWith("/about") ||
        pathname.startsWith("/contact") ||
        pathname.startsWith("/support-plans") ||
        pathname.startsWith("/privacy-policy") ||
        pathname.startsWith("/terms-of-service") ||
        pathname.startsWith("/go-global-award") ||
        pathname.startsWith("/reinforce360tm")
      )
        return "company";
      return "default";
    })();

    const themeBySection: Record<
      string,
      { brightBlue: string; lightBlue: string; primary: string; ring: string }
    > = {
      "cloud-platforms": {
        brightBlue: "216 100% 50%",
        lightBlue: "216 100% 68%",
        primary: "216 100% 50%",
        ring: "216 100% 50%",
      },
      solutions: {
        brightBlue: "28 95% 55%",
        lightBlue: "28 95% 70%",
        primary: "28 95% 55%",
        ring: "28 95% 55%",
      },
      services: {
        brightBlue: "142 70% 45%",
        lightBlue: "142 70% 70%",
        primary: "142 70% 45%",
        ring: "142 70% 45%",
      },
      resources: {
        brightBlue: "330 80% 60%",
        lightBlue: "330 80% 75%",
        primary: "330 80% 60%",
        ring: "330 80% 60%",
      },
      company: {
        brightBlue: "204 90% 55%",
        lightBlue: "204 90% 72%",
        primary: "204 90% 55%",
        ring: "204 90% 55%",
      },
      default: {
        brightBlue: "216 100% 50%",
        lightBlue: "216 100% 68%",
        primary: "216 100% 50%",
        ring: "216 100% 50%",
      },
    };

    const theme = themeBySection[sectionKey] ?? themeBySection.default;
    root.style.setProperty("--bright-blue", theme.brightBlue);
    root.style.setProperty("--light-blue", theme.lightBlue);
    root.style.setProperty("--primary", theme.primary);
    root.style.setProperty("--ring", theme.ring);
  }, [pathname]);

  return null;
};
 
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SectionThemeController />
        <ScrollToTop />
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
            <Route path="/industries/advertising-marketing" element={<AdvertisingMarketingIndustry />} />
            <Route path="/industries/manufacturing" element={<ManufacturingIndustry />} />
            <Route path="/industries/sports" element={<SportsIndustry />} />
 
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
 
 
