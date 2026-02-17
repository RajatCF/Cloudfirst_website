import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Solutions from "./pages/Solutions";
import Insights from "./pages/Insights";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Industries from "./pages/Industries";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Event from "./pages/Event";
import NotFound from "./pages/NotFound";
import MediaEntertainment from "./pages/MediaEntertainment";
import Healthcare from "./pages/Healthcare";
import Retail from "./pages/Retail";
import Manufacturing from "./pages/Manufacturing";
import CloudMigration from "./pages/CloudMigration";
import VDISolutions from "./pages/VDISolutions";
import CloudDataAnalytics from "./pages/CloudDataAnalytics";
import ManagedCloudServices from "./pages/ManagedCloudServices";
import AboutUs from "./pages/AboutUs";
import OurTeam from "./pages/OurTeam";
import OurPartner from "./pages/OurPartner";
import TermsConditions from "./pages/TermsConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const queryClient = new QueryClient();


import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/cloud-migration" element={<CloudMigration />} />
          <Route path="/solutions/vdi-solutions" element={<VDISolutions />} />
          <Route path="/solutions/cloud-data-analytics" element={<CloudDataAnalytics />} />
          <Route path="/solutions/managed-cloud-services" element={<ManagedCloudServices />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/our-partner" element={<OurPartner />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/media" element={<MediaEntertainment />} />
          <Route path="/industries/healthcare" element={<Healthcare />} />
          <Route path="/industries/retail" element={<Retail />} />
          <Route path="/industries/manufacturing" element={<Manufacturing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/event" element={<Event />} />
          <Route path="/terms-and-conditions" element={<TermsConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
