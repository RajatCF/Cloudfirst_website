import { Cloud, Server, Shield, Zap, Database, Globe, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const solutions = [
  {
    icon: Cloud,
    title: "Cloud Migration",
    desc: "Seamlessly migrate your on-premise workloads to AWS with our proven 6-phase methodology. Zero downtime, full data integrity.",
    features: ["Lift & Shift", "Re-platforming", "Re-architecting", "Hybrid Cloud"],
  },
  {
    icon: Shield,
    title: "Cloud Security",
    desc: "Enterprise-grade security posture management, compliance automation, and threat detection across your cloud estate.",
    features: ["IAM & Access Control", "Compliance (SOC2, HIPAA)", "Threat Detection", "Security Audits"],
  },
  {
    icon: Zap,
    title: "DevOps & Automation",
    desc: "Accelerate software delivery with CI/CD pipelines, infrastructure as code, and automated testing frameworks.",
    features: ["CI/CD Pipelines", "Infrastructure as Code", "Container Orchestration", "GitOps"],
  },
  {
    icon: Server,
    title: "Managed Services",
    desc: "24/7 monitoring, incident response, and optimization of your cloud infrastructure by certified AWS engineers.",
    features: ["24/7 Monitoring", "Cost Optimization", "Performance Tuning", "Incident Response"],
  },
  {
    icon: Database,
    title: "Data & Analytics",
    desc: "Build scalable data platforms with real-time analytics, data lakes, and machine learning pipelines on AWS.",
    features: ["Data Lakes", "Real-time Analytics", "ML Pipelines", "BI Dashboards"],
  },
  {
    icon: Globe,
    title: "Multi-Cloud & Hybrid",
    desc: "Design resilient architectures that span multiple cloud providers with unified management and governance.",
    features: ["Multi-Cloud Strategy", "Disaster Recovery", "Edge Computing", "Global CDN"],
  },
];

const Solutions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="hero-gradient pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 perspective-grid opacity-30" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Our Solutions
            </span>
            <h1 className="text-5xl lg:text-7xl font-black text-foreground mb-6">
              Cloud solutions for <br />
              <span className="text-gradient">every challenge</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From migration to managed services, we provide end-to-end cloud solutions tailored to your business needs.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.1} direction="scale">
                <div className="card-cloud rounded-2xl p-8 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <s.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">{s.desc}</p>
                  <ul className="space-y-2">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-4xl lg:text-5xl font-black text-primary-foreground mb-6">
              Ready to transform your cloud?
            </h2>
            <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto mb-10">
              Let's discuss your requirements and build a tailored cloud strategy.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-primary-foreground text-foreground font-bold text-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              Get Started <ArrowRight className="w-5 h-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Solutions;
