import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Cloud, Shield, Zap, Server, Database, Globe, ChevronRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection, { ParallaxSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
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
  
  // Parallax for hero
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(heroScroll, [0, 1], [0, 150]);
  const heroOpacity = useTransform(heroScroll, [0, 0.8], [1, 0]);

  // Perspective zoom section
  const perspectiveRef = useRef(null);
  const { scrollYProgress: perspScroll } = useScroll({ target: perspectiveRef, offset: ["start end", "end start"] });
  const perspScale = useTransform(perspScroll, [0, 0.5, 1], [0.7, 1, 1.1]);
  const perspOpacity = useTransform(perspScroll, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="hero-gradient relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="absolute inset-0 perspective-grid opacity-40" />
        
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              >
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
                >
                  <Cloud className="w-4 h-4" /> AWS Partner
                </motion.span>
                <h1 className="text-5xl lg:text-7xl font-black leading-[1.05] tracking-tight text-foreground mb-6">
                  <motion.span
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="block"
                  >
                    Cloud solutions
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="block"
                  >
                    made <span className="text-gradient">simple</span>
                  </motion.span>
                </h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed"
                >
                  Stop managing infrastructure headaches. Built for teams who need reliable, scalable, and secure cloud solutions.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.55 }}
                  className="flex flex-wrap gap-4"
                >
                  <Link to="/contact" className="btn-cta inline-flex items-center gap-2 px-8 py-4 rounded-full text-primary-foreground font-semibold text-base">
                    Book a Consultation <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link to="/solutions" className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-border bg-card font-semibold text-base hover:bg-secondary transition-colors">
                    Explore Solutions
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            {/* Hero Form */}
            <motion.div
              initial={{ opacity: 0, x: 60, rotateY: -8 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
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
                {[
                  { key: "name", placeholder: "Full Name", type: "text" },
                  { key: "email", placeholder: "Work Email", type: "email" },
                  { key: "company", placeholder: "Company Name", type: "text" },
                ].map((field, idx) => (
                  <motion.div
                    key={field.key}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
                  >
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                      value={formData[field.key as keyof typeof formData]}
                      onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                    />
                  </motion.div>
                ))}
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  type="submit"
                  className="w-full btn-cta py-3.5 rounded-xl text-primary-foreground font-semibold text-sm"
                >
                  Get Free Assessment →
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>

        {/* Decorative floating elements */}
        <motion.div
          animate={{ y: [-10, 10, -10], x: [-5, 5, -5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-10 w-40 h-40 rounded-full bg-primary/5 blur-2xl"
        />
        <motion.div
          animate={{ y: [10, -15, 10], x: [5, -5, 5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-10 w-60 h-60 rounded-full bg-primary/5 blur-3xl"
        />
      </section>

      {/* Partner logos marquee */}
      <AnimatedSection className="py-12 border-b border-border overflow-hidden">
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
      </AnimatedSection>

      {/* Services Grid */}
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

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.12}>
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <div className="card-cloud rounded-2xl p-8 h-full group cursor-pointer">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                      <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                    </div>
                  </div>
                  <service.icon className="w-8 h-8 text-primary/40" />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Perspective zoom section - like AttendFlow's "Less work" */}
      <section ref={perspectiveRef} className="py-32 lg:py-48 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="absolute inset-0 perspective-grid opacity-30" />
        {/* Animated perspective rectangles */}
        <div className="absolute inset-0 flex items-center justify-center">
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              style={{ scale: perspScale }}
              className="absolute border border-primary/15 rounded-xl"
              initial={{ width: `${40 + i * 15}%`, height: `${30 + i * 15}%` }}
            />
          ))}
        </div>
        <motion.div
          style={{ scale: perspScale, opacity: perspOpacity }}
          className="container mx-auto px-6 relative z-10"
        >
          <div className="text-center">
            <h2 className="text-5xl lg:text-8xl font-black text-foreground">Less complexity</h2>
            <p className="text-2xl lg:text-3xl text-muted-foreground mt-4 font-medium">More innovation</p>
          </div>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.15}>
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-black text-gradient mb-2">{stat.value}</div>
                  <div className="text-muted-foreground text-sm font-medium">{stat.label}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why CloudFirst */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary-foreground/20 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-primary-foreground/10 blur-3xl"
        />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <AnimatedSection direction="zoom">
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

      {/* Image + text section */}
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
              <StaggerContainer className="space-y-3" staggerDelay={0.1}>
                {["Auto-scaling infrastructure", "Cost optimization dashboards", "Security compliance automation"].map((item) => (
                  <StaggerItem key={item}>
                    <div className="flex items-center gap-3 text-foreground">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>{item}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </AnimatedSection>
            <ParallaxSection speed={0.2}>
              <AnimatedSection direction="right">
                <img src={heroImage} alt="Cloud infrastructure visualization" className="rounded-2xl shadow-lg w-full" />
              </AnimatedSection>
            </ParallaxSection>
          </div>
        </div>
      </section>

      {/* Testimonials */}
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

          <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.15}>
            {testimonials.map((t, i) => {
              const colors = [
                "bg-gradient-to-br from-blue-500 to-cyan-500",
                "bg-gradient-to-br from-primary to-blue-400",
                "bg-gradient-to-br from-sky-500 to-blue-600",
              ];
              return (
                <StaggerItem key={t.name}>
                  <div className={`${colors[i]} rounded-2xl p-8 h-full flex flex-col justify-between`}>
                    <p className="text-primary-foreground text-lg font-medium leading-relaxed mb-8">"{t.quote}"</p>
                    <div>
                      <p className="text-primary-foreground font-bold">{t.name}</p>
                      <p className="text-primary-foreground/70 text-sm">{t.role}</p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">
          <AnimatedSection direction="zoom">
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
