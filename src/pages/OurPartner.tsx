import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const partnerLogos = [
  "/logo/aws-logo.png",
  "/logo/microsoft_azure-logo.png",
  "/logo/google-cloud-logo.png",
  "/logo/cisco-meraki.png",
  "/logo/netmagic-logo.png",
  "/logo/backupify.png",
  "/logo/acunetic.png",
  "/logo/big-cloud.png",
  
  "/logo/my.png",
  "/logo/path-logo.png",
  "/logo/redif.png",
  "/logo/wma.png",
];

const OurPartner = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <section className="relative flex items-center justify-center min-h-[56vh] bg-gradient-to-br from-violet-50 via-white to-violet-100 overflow-hidden pt-10">
      <div className="container mx-auto px-6 text-center z-10">
        <AnimatedSection>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 bg-violet-200 text-foreground">Our Partners</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">Trusted by leading cloud and technology partners</h1>
          <p className="max-w-2xl mx-auto text-muted-foreground mb-6">We partner with global cloud providers and ISVs to deliver end-to-end solutions and joint customer success.</p>
          <div className="flex items-center justify-center gap-4">
            <Link to="/contact" className="px-6 py-3 rounded-lg bg-primary text-white">Contact Partnerships</Link>
            <Link to="/solutions" className="px-6 py-3 rounded-lg border border-border">Our solutions</Link>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <h3 className="text-2xl font-semibold mb-6">Our partner ecosystem</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
          {partnerLogos.map((src, i) => (
            <div key={i} className="flex items-center justify-center bg-muted/10 rounded-xl p-6 shadow-sm">
              <img src={src} alt={`partner-${i}`} className="max-h-12 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-gradient-to-br from-violet-50 via-white to-violet-100">
      <div className="container mx-auto px-6 max-w-4xl">
        <h3 className="text-2xl font-semibold mb-4">Partner program & benefits</h3>
        <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
          <li>Co-selling & go-to-market support</li>
          <li>Technical enablement and certified trainings</li>
          <li>Access to engineering & deployment resources</li>
          <li>Joint marketing and lead-sharing programs</li>
        </ul>
        <div className="mt-8 text-center">
          <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg">Become a partner</Link>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default OurPartner;
