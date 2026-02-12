import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Cloud, Shield, Zap, Server, Database, Globe, ChevronRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import heroImage from "@/assets/hero-cloud.png";

const services = [
  { icon: Cloud, title: "Cloud Migration", desc: "Seamlessly migrate your workloads to AWS with zero downtime strategies." },
  { icon: Shield, title: "Cloud Security", desc: "Enterprise-grade security architecture and compliance frameworks." },
  { icon: Zap, title: "DevOps & CI/CD", desc: "Automate deployments with modern DevOps pipelines and best practices." },
  { icon: Server, title: "Managed Services", desc: "24/7 monitoring, optimization, and management of your cloud infrastructure." },
  { icon: Database, title: "Data & Analytics", desc: "Build scalable data lakes and real-time analytics on AWS." },
  { icon: Globe, title: "Multi-Cloud Strategy", desc: "Design resilient architectures across multiple cloud providers." },
];

const stats = [
  { value: "500+", label: "Projects Delivered" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "200+", label: "Cloud Engineers" },
  { value: "50+", label: "Enterprise Clients" },
];

const testimonials = [
  {
    quote: "CloudFirst transformed our infrastructure. We reduced costs by 40% while improving performance across the board.",
    name: "Sarah Chen",
    role: "CTO, TechVista",
  },
  {
    quote: "Their AWS expertise is unmatched. The migration was seamless and our team was up and running in days, not months.",
    name: "James Rodriguez",
    role: "VP Engineering, DataFlow",
  },
  {
    quote: "Managing multiple cloud environments has never been easier. The platform scales effortlessly with our growing business needs.",
    name: "Emily Park",
    role: "Director of IT, ScaleUp Inc",
  },
];

const partners = ["AWS", "Kubernetes", "Terraform", "Docker", "Datadog", "Jenkins", "GitHub", "Grafana"];

const Index = () => {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
        {/* Grid pattern */}
        <div className="absolute inset-0 perspective-grid opacity-40" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                  <Cloud className="w-4 h-4" /> AWS Partner
                </span>
                <h1 className="text-5xl lg:text-7xl font-black leading-[1.05] tracking-tight text-foreground mb-6">
                  Cloud solutions{" "}
                  <br />
                  made{" "}
                  <span className="text-gradient">simple</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
                  Stop managing infrastructure headaches. Built for teams who need reliable, scalable, and secure cloud solutions.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact" className="btn-cta inline-flex items-center gap-2 px-8 py-4 rounded-full text-primary-foreground font-semibold text-base">
                    Book a Consultation <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link to="/solutions" className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-border bg-card font-semibold text-base hover:bg-secondary transition-colors">
                    Explore Solutions
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Hero Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="card-cloud rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl btn-cta flex items-center justify-center">
                  <Cloud className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">Free Cloud Assessment</h3>
                  <p className="text-sm text-muted-foreground">Get your personalized report</p>
                </div>
              </div>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <input
                  type="email"
                  placeholder="Work Email"
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
                <button
                  type="submit"
                  className="w-full btn-cta py-3.5 rounded-xl text-primary-foreground font-semibold text-sm"
                >
                  Get Free Assessment →
                </button>
              </form>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-40 h-40 rounded-full bg-primary/5 animate-float blur-2xl" />
        <div className="absolute bottom-10 left-10 w-60 h-60 rounded-full bg-primary/5 animate-float-delayed blur-3xl" />
      </section>

      {/* Partner logos marquee */}
      <section className="py-12 border-b border-border overflow-hidden">
        <div className="container mx-auto px-6 mb-6">
          <p className="text-center text-sm text-muted-foreground font-medium uppercase tracking-wider">Trusted Technology Partners</p>
        </div>
        <div className="flex animate-marquee">
          {[...partners, ...partners].map((p, i) => (
            <div key={i} className="flex-shrink-0 mx-10 px-6 py-3 rounded-xl bg-secondary/50 text-muted-foreground font-semibold text-sm">
              {p}
            </div>
          ))}
        </div>
      </section>

      {/* Services Grid - Attendflow style */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-4">
              The Cloud Operating System
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Everything you need to build, deploy, and scale on the cloud.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.1} direction="scale">
                <div className="card-cloud rounded-2xl p-8 h-full group cursor-pointer">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
                      <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                    </div>
                  </div>
                  <service.icon className="w-8 h-8 text-primary/40" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Perspective grid section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="absolute inset-0 perspective-grid opacity-30" />
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center">
            <h2 className="text-5xl lg:text-7xl font-black text-foreground">Less complexity</h2>
            <p className="text-2xl text-muted-foreground mt-4">More innovation</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-black text-gradient mb-2">{stat.value}</div>
                  <div className="text-muted-foreground text-sm font-medium">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why CloudFirst - Attendflow purple/blue section adapted to blue */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary-foreground/20 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-primary-foreground/10 blur-3xl" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <AnimatedSection>
            <h2 className="text-4xl lg:text-6xl font-black text-primary-foreground mb-6">
              Built by cloud engineers ✨
            </h2>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto mb-10">
              Our team has tackled real cloud challenges at companies of all sizes. Every solution is designed to solve real problems that exist today.
            </p>
            <Link
              to="/solutions"
              className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-primary-foreground text-foreground font-bold text-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              See Why ✨
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Hero image section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <h2 className="text-4xl font-black text-foreground mb-4">
                Use what's working and <span className="text-gradient">optimize it</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Build cloud architectures that match your business success, or leverage our pre-built templates and best practices.
              </p>
              <ul className="space-y-3">
                {["Auto-scaling infrastructure", "Cost optimization dashboards", "Security compliance automation"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <img src={heroImage} alt="Cloud infrastructure visualization" className="rounded-2xl shadow-lg w-full" />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials - Attendflow style colored cards */}
      <section className="section-dark py-24">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-primary-foreground mb-4">
              Trusted by teams who sleep better at night
            </h2>
            <p className="text-primary-foreground/60 text-lg">
              Join enterprises who've transformed their cloud infrastructure.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => {
              const colors = [
                "bg-gradient-to-br from-blue-500 to-cyan-500",
                "bg-gradient-to-br from-primary to-blue-400",
                "bg-gradient-to-br from-sky-500 to-blue-600",
              ];
              return (
                <AnimatedSection key={t.name} delay={i * 0.15}>
                  <div className={`${colors[i]} rounded-2xl p-8 h-full flex flex-col justify-between`}>
                    <p className="text-primary-foreground text-lg font-medium leading-relaxed mb-8">"{t.quote}"</p>
                    <div>
                      <p className="text-primary-foreground font-bold">{t.name}</p>
                      <p className="text-primary-foreground/70 text-sm">{t.role}</p>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-5xl lg:text-7xl font-black text-foreground mb-4">
              It's time for your <br />
              cloud to say <span className="text-gradient">'let's go'</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
              Get started with CloudFirst in under 30 minutes. Your infrastructure deserves a reliable partner.
            </p>
            <Link
              to="/contact"
              className="btn-cta inline-flex items-center gap-2 px-10 py-5 rounded-full text-primary-foreground font-bold text-lg"
            >
              Start Your Journey <ArrowRight className="w-5 h-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
