import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import Index from "./pages/Index";
import Industries from "./pages/Industries";
import Solutions from "./pages/Solutions";
import Insights from "./pages/Insights";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import CloudMigration from "./pages/CloudMigration";
import DataAnalytic from "./pages/DataAnalytic";
import ManagedCloudService from "./pages/ManagedCloudService";
import CloudSecurity from "./pages/CloudSecurity";
import CloudDevOps from "./pages/CloudDevOps";
import ResourceEvents from "./pages/ResourceEvents";
import CurrentOpenings from "./pages/CurrentOpenings";
import AmazonWebServices from "./pages/AmazonWebServices";
import MicrosoftAzure from "./pages/MicrosoftAzure";
import GoogleCloud from "./pages/GoogleCloud";
import CloudPlatformSecurity from "./pages/CloudPlatformSecurity";
import BackupDisasterRecovery from "./pages/BackupDisasterRecovery";
import NetworkingCdn from "./pages/NetworkingCdn";
import GoogleWorkspace from "./pages/GoogleWorkspace";
import Microsoft365 from "./pages/Microsoft365";
import ManagedServices from "./pages/ManagedServices";
import NocSupport from "./pages/NocSupport";
import InfrastructureModernisation from "./pages/InfrastructureModernisation";
import CostOptimisation from "./pages/CostOptimisation";
import CloudSecurityCompliance from "./pages/CloudSecurityCompliance";
import StartupsSmbs from "./pages/StartupsSmbs";
import EnterpriseIndustry from "./pages/EnterpriseIndustry";
import FinanceBfsi from "./pages/FinanceBfsi";
import HealthcareIndustry from "./pages/HealthcareIndustry";
import EducationIndustry from "./pages/EducationIndustry";
import CloudStrategyRoadmap from "./pages/CloudStrategyRoadmap";
import ArchitectureReview from "./pages/ArchitectureReview";
import MigrationPlanning from "./pages/MigrationPlanning";
import ManagedCloudOperations from "./pages/ManagedCloudOperations";
import FinopsBillingManagement from "./pages/FinopsBillingManagement";
import SecurityMonitoring from "./pages/SecurityMonitoring";
import CaseStudies from "./pages/CaseStudies";
import BlogInsights from "./pages/BlogInsights";
import Whitepapers from "./pages/Whitepapers";
import MigrationGuides from "./pages/MigrationGuides";
import PartnerCertifications from "./pages/PartnerCertifications";
import CloudCostCalculator from "./pages/CloudCostCalculator";
import OurPartners from "./pages/OurPartners";
import Careers from "./pages/Careers";
import Hiring from "./pages/Hiring";

import PressMedia from "./pages/PressMedia";
import GoGlobalAward from "./pages/GoGlobalAward";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/events" element={<ResourceEvents />} />
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
          <Route path="/company/careers" element={<Careers />} />
          <Route path="/company/hiring" element={<Hiring />} />
          <Route path="/company/press-media" element={<PressMedia />} />

          {/* Go Global Award Dedicated Page */}
          <Route path="/go-global-award" element={<GoGlobalAward />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
