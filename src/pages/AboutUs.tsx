import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle } from "lucide-react";

const features = [
  "Certified cloud architects and engineers with deep domain expertise",
  "End-to-end cloud migration and modernization services",
  "Proven track record with Fortune 500s, startups, and public sector",
  "24/7 managed support and proactive monitoring",
  "Security-first approach and compliance with global standards",
  "Tailored solutions for every industry and business size",
];

const services = [
  {
    title: "Cloud Migration",
    desc: "Seamless migration of workloads, applications, and data to the cloud with minimal disruption.",
    icon: "cloud",
  },
  {
    title: "Managed Cloud Services",
    desc: "24/7 monitoring, optimization, and support for your cloud infrastructure.",
    icon: "settings",
  },
  {
    title: "Cloud Security & Compliance",
    desc: "Implementing best-in-class security practices and ensuring regulatory compliance.",
    icon: "shield",
  },
  {
    title: "DevOps & Automation",
    desc: "Accelerating software delivery with CI/CD pipelines, infrastructure as code, and automation.",
    icon: "zap",
  },
  {
    title: "Cloud-Native Development",
    desc: "Building scalable, resilient applications using microservices, containers, and serverless technologies.",
    icon: "code",
  },
  {
    title: "Consulting & Training",
    desc: "Expert guidance and training to help your teams succeed in the cloud.",
    icon: "users",
  },
];

const aboutImgUrl = "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80";

const AboutUs = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    {/* Hero Section - with CTA + counters */}
    <section className="relative flex items-center justify-center min-h-[64vh] bg-gradient-to-br from-sky-50 via-white to-sky-100 overflow-hidden pt-8">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[560px] h-[560px] bg-blue-300/25 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[460px] h-[460px] bg-primary/15 rounded-full blur-2xl" />
      </div>
      <div className="container mx-auto px-6 z-10 text-center">
        <AnimatedSection>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 bg-blue-200 text-primary">About Us</span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 font-display text-black drop-shadow-md">We build, migrate & manage cloud platforms that scale</h1>
          <p className="text-base md:text-lg max-w-3xl mx-auto text-muted-foreground font-medium mb-8">CloudFirst helps enterprises and startups accelerate cloud adoption — from strategy and migration to managed operations and innovation.</p>
          <div className="flex items-center justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg shadow hover:shadow-lg transition">Contact Sales</Link>
            <a href="#what-we-do" className="inline-flex items-center gap-2 border border-border bg-white text-foreground px-5 py-3 rounded-lg hover:bg-secondary/50 transition">What we do</a>
          </div>

          {/* Counters */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">+500</div>
              <div>Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">24/7</div>
              <div>Support & Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">AWS Premier</div>
              <div>Partner</div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section> 

    {/* About CloudFirst - split image/text */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="text-3xl font-bold mb-4 text-black">About CloudFirst</h2>
          <p className="mb-6 text-lg text-muted-foreground">CloudFirst Technology Private Limited is a leading provider of comprehensive cloud solutions, specializing in cloud migration, digital transformation, managed services, and cloud-native application development. As an AWS Premier Partner, we empower businesses of all sizes to leverage the full potential of the cloud, ensuring seamless migration, robust security, and ongoing optimization. Our expertise spans across AWS, Microsoft Azure, Google Cloud, and hybrid environments, making us the trusted partner for organizations seeking agility, scalability, and innovation.</p>
          <div className="flex gap-4">
            <Link to="/contact" className="btn-cta px-6 py-3 rounded-xl">Talk to an expert</Link>
            <a href="#" className="px-6 py-3 rounded-xl border border-border text-sm">Download brochure</a>
          </div>
        </div>

        <div className="order-1 lg:order-2 flex justify-center">
          <div className="w-full max-w-[520px] rounded-3xl overflow-hidden shadow-2xl">
            <img src={aboutImgUrl} alt="About CloudFirst" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>

    {/* Why Choose Us - feature cards */}
    <section className="py-20 bg-gradient-to-br from-sky-50 via-white to-sky-100">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-8">
          <h3 className="text-sm font-semibold uppercase text-black tracking-wider">Why choose CloudFirst</h3>
          <h2 className="text-3xl font-bold mt-3">Trusted by enterprises and innovators</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <div key={i} className="p-6 bg-white rounded-2xl shadow-md flex gap-4 items-start">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">{i + 1}</div>
              <div>
                <div className="font-semibold">{f}</div>
                <div className="text-sm text-muted-foreground mt-1">Proven methodology, tailored delivery, and measurable ROI.</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Our Vision - quote style */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="bg-gradient-to-r from-primary/5 via-white to-primary/5 rounded-3xl p-12 shadow-lg flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-black mb-4">Our Vision</h3>
            <blockquote className="text-lg text-muted-foreground italic">"To be the most trusted cloud transformation partner, enabling organizations to innovate, scale, and thrive in a digital-first world."</blockquote>
          </div>
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-xl shadow"> <div className="text-sm text-muted-foreground">Avg. migration time</div><div className="text-lg font-bold">3–6 months</div></div>
              <div className="p-4 bg-white rounded-xl shadow"> <div className="text-sm text-muted-foreground">SLA</div><div className="text-lg font-bold">99.95%</div></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* What We Do - cards */}
    <section id="what-we-do" className="py-20 bg-gradient-to-br from-sky-50 via-white to-sky-100">
      <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-black">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-start hover:translate-y-[-4px] transition-transform">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-2xl">{service.icon === "cloud" ? "☁️" : service.icon === "settings" ? "⚙️" : service.icon === "shield" ? "🛡️" : service.icon === "zap" ? "⚡" : service.icon === "code" ? "💻" : "👥"}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-lg shadow hover:shadow-lg transition">Get a free assessment</Link>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default AboutUs;
