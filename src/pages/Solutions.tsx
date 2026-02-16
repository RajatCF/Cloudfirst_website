import { Cloud, Server, Shield, Zap, Database, Globe, ArrowRight, CheckCircle2, Sparkles, Layers, Brain, Cpu } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const solutions = [
  {
    icon: Cloud,
    title: "Cloud Migration",
    desc: "Seamlessly migrate your on-premise workloads to AWS with our proven 6-phase methodology. Zero downtime, full data integrity.",
    features: ["Lift & Shift", "Re-platforming", "Re-architecting", "Hybrid Cloud"],
    color: "from-blue-500/10 to-cyan-500/10",
    iconColor: "text-blue-600",
  },
  {
    icon: Shield,
    title: "Cloud Security",
    desc: "Enterprise-grade security posture management, compliance automation, and threat detection across your cloud estate.",
    features: ["IAM & Access Control", "Compliance (SOC2, HIPAA)", "Threat Detection", "Security Audits"],
    color: "from-emerald-500/10 to-green-500/10",
    iconColor: "text-emerald-600",
  },
  {
    icon: Zap,
    title: "DevOps & Automation",
    desc: "Accelerate software delivery with CI/CD pipelines, infrastructure as code, and automated testing frameworks.",
    features: ["CI/CD Pipelines", "Infrastructure as Code", "Container Orchestration", "GitOps"],
    color: "from-amber-500/10 to-orange-500/10",
    iconColor: "text-amber-600",
  },
  {
    icon: Server,
    title: "Managed Services",
    desc: "24/7 monitoring, incident response, and optimization of your cloud infrastructure by certified AWS engineers.",
    features: ["24/7 Monitoring", "Cost Optimization", "Performance Tuning", "Incident Response"],
    color: "from-purple-500/10 to-violet-500/10",
    iconColor: "text-purple-600",
  },
  {
    icon: Database,
    title: "Data & Analytics",
    desc: "Build scalable data platforms with real-time analytics, data lakes, and machine learning pipelines on AWS.",
    features: ["Data Lakes", "Real-time Analytics", "ML Pipelines", "BI Dashboards"],
    color: "from-pink-500/10 to-rose-500/10",
    iconColor: "text-pink-600",
  },
  {
    icon: Globe,
    title: "Multi-Cloud & Hybrid",
    desc: "Design resilient architectures that span multiple cloud providers with unified management and governance.",
    features: ["Multi-Cloud Strategy", "Disaster Recovery", "Edge Computing", "Global CDN"],
    color: "from-sky-500/10 to-indigo-500/10",
    iconColor: "text-sky-600",
  },
];

const industries = [
  { name: "Finance & Banking", icon: "🏦" },
  { name: "Healthcare", icon: "🏥" },
  { name: "Retail & E-Commerce", icon: "🛒" },
  { name: "Manufacturing", icon: "🏭" },
  { name: "Media & Entertainment", icon: "🎬" },
  { name: "Government", icon: "🏛️" },
];

const Solutions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="hero-bg-img pt-32 pb-24 lg:pt-44 lg:pb-32 relative overflow-hidden min-h-[70vh] flex items-center">
        <div className="hero-bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2068&auto=format&fit=crop')" }} />
        <div className="hero-bg-overlay" />
        <div className="absolute inset-0 perspective-grid opacity-10" />
        <div className="container mx-auto px-6 hero-content text-center">
          <AnimatedSection>
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="badge-hero inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-8"
            >
              <Sparkles className="w-3.5 h-3.5" /> Our Solutions
            </motion.span>
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black mb-6 font-display">
              Cloud solutions for <br />
              <span className="text-gradient">every challenge</span>
            </h1>
            <p className="text-lg lg:text-xl max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.75)" }}>
              From migration to managed services, we provide end-to-end cloud solutions engineered for the enterprise.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="section-divider" />

      {/* Solutions Grid */}
      <section className="py-28 relative">
        <div className="orb orb-cyan w-[400px] h-[400px] top-40 -right-40" />
        <div className="container mx-auto px-6 relative z-10">
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
            {solutions.map((s) => (
              <StaggerItem key={s.title}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="card-glow rounded-2xl p-8 h-full flex flex-col relative overflow-hidden group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="relative z-10 flex flex-col h-full">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-6`}>
                      <s.icon className={`w-6 h-6 ${s.iconColor}`} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{s.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">{s.desc}</p>
                    <ul className="space-y-2">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-foreground/80">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Industries */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
              Industries We Serve
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-5 font-display">
              Tailored for your <span className="text-gradient">industry</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Cloud solutions customized for the unique challenges of your sector.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4" staggerDelay={0.08}>
            {industries.map((ind) => (
              <StaggerItem key={ind.name}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="card-glass rounded-2xl p-6 text-center cursor-pointer group"
                >
                  <span className="text-3xl block mb-3">{ind.icon}</span>
                  <p className="text-sm font-medium text-foreground">{ind.name}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 perspective-grid opacity-10" />
        <motion.div
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="orb orb-blue w-[500px] h-[500px] top-0 left-1/2 -translate-x-1/2"
        />
        <div className="container mx-auto px-6 text-center relative z-10">
          <AnimatedSection direction="zoom">
            <h2 className="text-4xl lg:text-6xl font-black text-foreground mb-6 font-display">
              Ready to transform your <span className="text-gradient">cloud</span>?
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
              Let's discuss your requirements and build a tailored cloud strategy together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="btn-cta inline-flex items-center gap-2 px-10 py-5 rounded-full text-primary-foreground font-bold text-lg group"
              >
                Get Started
                <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </Link>
              <Link
                to="/contact"
                className="btn-ghost inline-flex items-center gap-2 px-10 py-5 rounded-full text-foreground font-bold text-lg"
              >
                Schedule a Call
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Solutions;
