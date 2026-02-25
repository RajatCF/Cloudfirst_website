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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
