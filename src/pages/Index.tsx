import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { ArrowRight, Cloud, Shield, Zap, Server, Database, Globe, ChevronRight, CheckCircle2, Play, Sparkles, Layers, Lock, BarChart3, Cpu, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection, { ParallaxSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const services = [
  { icon: Cloud, title: "Cloud Migration", desc: "Seamlessly migrate your workloads to AWS with zero downtime strategies and proven methodology.", color: "from-blue-500/20 to-cyan-500/20", iconColor: "text-blue-400" },
  { icon: Shield, title: "Cloud Security", desc: "Enterprise-grade security architecture, compliance frameworks, and 24/7 threat detection.", color: "from-emerald-500/20 to-green-500/20", iconColor: "text-emerald-400" },
  { icon: Zap, title: "DevOps & CI/CD", desc: "Automate deployments with modern DevOps pipelines, GitOps workflows, and IaC best practices.", color: "from-amber-500/20 to-orange-500/20", iconColor: "text-amber-400" },
  { icon: Server, title: "Managed Services", desc: "24/7 monitoring, optimization, and management of your cloud infrastructure by certified engineers.", color: "from-purple-500/20 to-violet-500/20", iconColor: "text-purple-400" },
  { icon: Database, title: "Data & Analytics", desc: "Build scalable data lakes, real-time analytics, and ML pipelines on AWS.", color: "from-pink-500/20 to-rose-500/20", iconColor: "text-pink-400" },
  { icon: Globe, title: "Multi-Cloud Strategy", desc: "Design resilient architectures across multiple cloud providers with unified governance.", color: "from-sky-500/20 to-indigo-500/20", iconColor: "text-sky-400" },
];

const stats = [
  { value: 500, suffix: "+", label: "Projects Delivered" },
  { value: 99.9, suffix: "%", label: "Uptime SLA" },
  { value: 200, suffix: "+", label: "Cloud Engineers" },
  { value: 50, suffix: "+", label: "Enterprise Clients" },
];

const testimonials = [
  {
    quote: "CloudFirst transformed our infrastructure. We reduced costs by 40% while improving performance across the board.",
    name: "Sarah Chen",
    role: "CTO, TechVista",
    gradient: "from-blue-600 to-cyan-600",
  },
  {
    quote: "Their AWS expertise is unmatched. The migration was seamless and our team was up and running in days, not months.",
    name: "James Rodriguez",
    role: "VP Engineering, DataFlow",
    gradient: "from-violet-600 to-purple-600",
  },
  {
    quote: "Managing multiple cloud environments has never been easier. The platform scales effortlessly with our growing business needs.",
    name: "Emily Park",
    role: "Director of IT, ScaleUp Inc",
    gradient: "from-emerald-600 to-teal-600",
  },
];

const partners = ["AWS", "Kubernetes", "Terraform", "Docker", "Datadog", "Jenkins", "GitHub", "Grafana"];

const capabilities = [
  { icon: Layers, title: "Infrastructure as Code", desc: "Terraform, CloudFormation, Pulumi" },
  { icon: Lock, title: "Zero Trust Security", desc: "IAM, VPC, WAF, GuardDuty" },
  { icon: BarChart3, title: "Cost Optimization", desc: "FinOps, Reserved Instances, Spot" },
  { icon: Cpu, title: "AI/ML Pipelines", desc: "SageMaker, Bedrock, Lambda" },
  { icon: Eye, title: "Observability", desc: "CloudWatch, Prometheus, Grafana" },
  { icon: Sparkles, title: "Generative AI", desc: "RAG, LLM Integration, Agents" },
];

// Animated counter hook
const useCounter = (end: number, duration: number = 2000, start: boolean = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end * 10) / 10);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, start]);
  return count;
};

// Particle background component
const ParticleField = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Floating geometric shapes
const FloatingShapes = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute top-20 right-[15%] w-32 h-32 border border-primary/10 rounded-2xl"
    />
    <motion.div
      animate={{ rotate: -360 }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      className="absolute bottom-40 left-[10%] w-24 h-24 border border-cyan-500/10 rounded-full"
    />
    <motion.div
      animate={{ rotate: 360, scale: [1, 1.2, 1] }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      className="absolute top-1/3 left-[5%] w-16 h-16 border border-purple-500/10 rounded-lg"
    />
  </div>
);

const Index = () => {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });
  const [activeService, setActiveService] = useState(0);

  // Parallax for hero
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(heroScroll, [0, 1], [0, 200]);
  const heroOpacity = useTransform(heroScroll, [0, 0.8], [1, 0]);

  // Perspective zoom section
  const perspectiveRef = useRef(null);
  const { scrollYProgress: perspScroll } = useScroll({ target: perspectiveRef, offset: ["start end", "end start"] });
  const perspScale = useTransform(perspScroll, [0, 0.5, 1], [0.6, 1, 1.05]);
  const perspOpacity = useTransform(perspScroll, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  // Stats counter
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });

  // Mouse parallax for hero
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouseX.set((e.clientX - window.innerWidth / 2) * 0.02);
      mouseY.set((e.clientY - window.innerHeight / 2) * 0.02);
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* ===== HERO SECTION ===== */}
      <section ref={heroRef} className="hero-gradient relative overflow-hidden pt-32 pb-24 lg:pt-44 lg:pb-36 min-h-screen flex items-center">
        <div className="absolute inset-0 perspective-grid opacity-20" />
        <ParticleField />
        <FloatingShapes />

        {/* Glowing orbs */}
        <motion.div
          style={{ x: springX, y: springY }}
          className="orb orb-blue w-[500px] h-[500px] -top-40 -right-40"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="orb orb-purple w-[400px] h-[400px] bottom-0 left-0"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="orb orb-cyan w-[300px] h-[300px] top-1/2 left-1/3"
        />

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-8 backdrop-blur-sm"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                  </span>
                  AWS Premier Partner
                </motion.div>

                {/* Main heading */}
                <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black leading-[0.95] tracking-tight text-foreground mb-8 font-display">
                  <motion.span
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="block"
                  >
                    Cloud solutions
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="block"
                  >
                    made{" "}
                    <span className="text-gradient relative">
                      simple
                      <motion.span
                        className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-cyan-400 rounded-full"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                      />
                    </span>
                  </motion.span>
                </h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-lg lg:text-xl text-muted-foreground max-w-lg mb-10 leading-relaxed"
                >
                  Stop managing infrastructure headaches. Built for teams who need reliable, scalable, and secure cloud solutions.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.65 }}
                  className="flex flex-wrap gap-4"
                >
                  <Link
                    to="/contact"
                    className="btn-cta inline-flex items-center gap-2 px-8 py-4 rounded-full text-primary-foreground font-semibold text-base group"
                  >
                    Book a Consultation
                    <motion.span
                      className="inline-block"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.span>
                  </Link>
                  <Link
                    to="/solutions"
                    className="btn-ghost inline-flex items-center gap-2 px-8 py-4 rounded-full text-foreground font-semibold text-base"
                  >
                    Explore Solutions
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            {/* Hero Form */}
            <motion.div
              initial={{ opacity: 0, x: 80, rotateY: -10 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="card-glass rounded-2xl p-8 relative"
            >
              {/* Animated border glow */}
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-primary/50 via-cyan-500/50 to-purple-500/50 opacity-20 blur-sm" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="w-10 h-10 rounded-xl btn-cta flex items-center justify-center"
                  >
                    <Cloud className="w-5 h-5 text-primary-foreground" />
                  </motion.div>
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
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + idx * 0.12 }}
                    >
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        className="w-full px-4 py-3.5 rounded-xl bg-secondary/50 border border-border/50 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all backdrop-blur-sm"
                        value={formData[field.key as keyof typeof formData]}
                        onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                      />
                    </motion.div>
                  ))}
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.96 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full btn-cta py-4 rounded-xl text-primary-foreground font-semibold text-sm"
                  >
                    Get Free Assessment →
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ===== PARTNER LOGOS MARQUEE ===== */}
      <div className="section-divider" />
      <section className="py-14 relative overflow-hidden">
        <div className="container mx-auto px-6 mb-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-xs text-muted-foreground font-medium uppercase tracking-[0.2em]"
          >
            Trusted Technology Partners
          </motion.p>
        </div>
        <div className="flex animate-marquee">
          {[...partners, ...partners, ...partners].map((p, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-6 px-8 py-3 rounded-full border border-border/50 bg-secondary/30 text-muted-foreground font-semibold text-sm backdrop-blur-sm hover:border-primary/30 hover:text-foreground transition-all duration-300"
            >
              {p}
            </div>
          ))}
        </div>
      </section>
      <div className="section-divider" />

      {/* ===== SERVICES GRID ===== */}
      <section className="py-28 relative">
        <div className="orb orb-blue w-[400px] h-[400px] top-0 right-0" />
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center mb-20">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5" /> What We Do
            </span>
            <h2 className="text-4xl lg:text-6xl font-black text-foreground mb-5 font-display">
              The Cloud Operating System
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Everything you need to build, deploy, and scale on the cloud — engineered for the enterprise.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {services.map((service, idx) => (
              <StaggerItem key={service.title}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="card-glow rounded-2xl p-8 h-full group cursor-pointer relative overflow-hidden"
                >
                  {/* Background gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}>
                        <service.icon className={`w-6 h-6 ${service.iconColor}`} />
                      </div>
                      <div className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                        <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== PERSPECTIVE ZOOM "Less Complexity" ===== */}
      <section ref={perspectiveRef} className="py-40 lg:py-56 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        {/* Animated perspective rectangles */}
        <div className="absolute inset-0 flex items-center justify-center">
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              style={{ scale: perspScale }}
              className="absolute border border-primary/10 rounded-3xl"
              initial={{ width: `${35 + i * 15}%`, height: `${25 + i * 15}%` }}
            />
          ))}
        </div>
        <motion.div
          style={{ scale: perspScale, opacity: perspOpacity }}
          className="container mx-auto px-6 relative z-10"
        >
          <div className="text-center">
            <h2 className="text-6xl lg:text-9xl font-black text-foreground font-display">
              Less <span className="text-gradient">complexity</span>
            </h2>
            <p className="text-2xl lg:text-4xl text-muted-foreground mt-6 font-medium font-display">
              More innovation
            </p>
          </div>
        </motion.div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="py-24 relative" ref={statsRef}>
        <div className="section-divider mb-24" />
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => {
              const count = useCounter(stat.value, 2000, statsInView);
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  className="text-center group"
                >
                  <div className="text-5xl lg:text-6xl font-black text-gradient stat-glow mb-3 font-display">
                    {stat.value % 1 !== 0 ? count.toFixed(1) : Math.floor(count)}
                    {stat.suffix}
                  </div>
                  <div className="text-muted-foreground text-sm font-medium tracking-wide uppercase">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
        <div className="section-divider mt-24" />
      </section>

      {/* ===== CAPABILITIES GRID ===== */}
      <section className="py-28 relative overflow-hidden">
        <div className="orb orb-purple w-[500px] h-[500px] -top-60 -left-40" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
                Capabilities
              </span>
              <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-6 font-display">
                Engineered for the <span className="text-gradient">modern cloud</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Our cloud engineers bring deep expertise across the full AWS ecosystem and beyond. We build architectures that match your business growth.
              </p>
              <Link
                to="/solutions"
                className="btn-cta inline-flex items-center gap-2 px-8 py-4 rounded-full text-primary-foreground font-semibold text-base"
              >
                Explore All Solutions <ArrowRight className="w-5 h-5" />
              </Link>
            </AnimatedSection>

            <StaggerContainer className="grid grid-cols-2 gap-4" staggerDelay={0.08}>
              {capabilities.map((cap) => (
                <StaggerItem key={cap.title}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="card-glass rounded-2xl p-6 text-center group cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                      <cap.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-bold text-foreground text-sm mb-1">{cap.title}</h4>
                    <p className="text-muted-foreground text-xs">{cap.desc}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* ===== VIDEO / DEMO SECTION ===== */}
      <section className="py-28 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
              <Play className="w-3.5 h-3.5" /> See It In Action
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-5 font-display">
              Cloud infrastructure, <span className="text-gradient">visualized</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Watch how CloudFirst transforms complex cloud deployments into seamless experiences.
            </p>
          </AnimatedSection>

          <AnimatedSection direction="zoom">
            <div className="card-glow rounded-3xl overflow-hidden relative group max-w-5xl mx-auto">
              <div className="aspect-video bg-gradient-to-br from-secondary to-background flex items-center justify-center relative">
                {/* Cloud infrastructure animated visualization */}
                <div className="absolute inset-0 dot-pattern opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Central node */}
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="w-20 h-20 rounded-2xl bg-primary/20 border border-primary/40 flex items-center justify-center glow-pulse"
                    >
                      <Cloud className="w-10 h-10 text-primary" />
                    </motion.div>
                    {/* Orbiting nodes */}
                    {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                      <motion.div
                        key={i}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 15 + i * 2, repeat: Infinity, ease: "linear" }}
                        className="absolute top-1/2 left-1/2"
                        style={{ width: `${140 + i * 30}px`, height: `${140 + i * 30}px`, marginLeft: `-${(140 + i * 30) / 2}px`, marginTop: `-${(140 + i * 30) / 2}px` }}
                      >
                        <div
                          className="absolute w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center"
                          style={{ top: 0, left: '50%', marginLeft: '-16px' }}
                        >
                          {[Server, Database, Shield, Globe, Zap, Layers][i] && (() => {
                            const Icon = [Server, Database, Shield, Globe, Zap, Layers][i];
                            return <Icon className="w-4 h-4 text-primary/60" />;
                          })()}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                {/* Play button overlay */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="absolute z-20 w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center cursor-pointer glow-pulse"
                >
                  <Play className="w-8 h-8 text-primary-foreground ml-1" />
                </motion.div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== "BUILT BY CLOUD ENGINEERS" CTA SECTION ===== */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/10 to-primary/5" />
        <div className="absolute inset-0 perspective-grid opacity-10" />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="orb orb-blue w-[600px] h-[600px] top-0 left-1/4"
        />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <AnimatedSection direction="zoom">
            <h2 className="text-5xl lg:text-7xl font-black text-foreground mb-6 font-display">
              Built by cloud engineers{" "}
              <motion.span
                animate={{ rotate: [0, 15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block"
              >
                ✨
              </motion.span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12">
              Our team has tackled real cloud challenges at companies of all sizes. Every solution is designed to solve real problems that exist today.
            </p>
            <Link
              to="/solutions"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-foreground text-background font-bold text-lg hover:shadow-xl transition-all hover:-translate-y-1 group"
            >
              See Why
              <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== USE WHAT'S WORKING ===== */}
      <section className="py-28 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
                Optimization
              </span>
              <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-5 font-display">
                Use what's working and{" "}
                <span className="text-gradient">optimize it</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Build cloud architectures that match your business success, or leverage our pre-built templates and best practices.
              </p>
              <StaggerContainer className="space-y-4" staggerDelay={0.1}>
                {["Auto-scaling infrastructure", "Cost optimization dashboards", "Security compliance automation", "Real-time monitoring & alerts"].map((item) => (
                  <StaggerItem key={item}>
                    <div className="flex items-center gap-3 text-foreground group">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="card-glow rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                <div className="relative z-10 space-y-4">
                  {/* Mock dashboard cards */}
                  <div className="flex gap-4">
                    <div className="flex-1 card-glass rounded-xl p-4">
                      <p className="text-xs text-muted-foreground mb-1">Monthly Cost</p>
                      <p className="text-2xl font-bold text-gradient font-display">-40%</p>
                      <div className="mt-2 h-1 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "60%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="h-full bg-gradient-to-r from-primary to-cyan-400 rounded-full"
                        />
                      </div>
                    </div>
                    <div className="flex-1 card-glass rounded-xl p-4">
                      <p className="text-xs text-muted-foreground mb-1">Uptime</p>
                      <p className="text-2xl font-bold text-emerald-400 font-display">99.99%</p>
                      <div className="mt-2 h-1 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "99%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.7 }}
                          className="h-full bg-gradient-to-r from-emerald-500 to-green-400 rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="card-glass rounded-xl p-4">
                    <p className="text-xs text-muted-foreground mb-2">Performance Metrics</p>
                    <div className="flex gap-2 items-end h-16">
                      {[30, 50, 40, 70, 60, 80, 75, 90, 85, 95, 88, 92].map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${h}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: i * 0.05 }}
                          className="flex-1 bg-gradient-to-t from-primary/80 to-cyan-400/80 rounded-sm"
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-1 card-glass rounded-xl p-4 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                        <Shield className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Security Score</p>
                        <p className="text-sm font-bold text-foreground">98/100</p>
                      </div>
                    </div>
                    <div className="flex-1 card-glass rounded-xl p-4 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                        <Zap className="w-4 h-4 text-amber-400" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Deploy Speed</p>
                        <p className="text-sm font-bold text-foreground">3x faster</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
              Testimonials
            </span>
            <h2 className="text-4xl lg:text-6xl font-black text-foreground mb-5 font-display">
              Trusted by teams who{" "}
              <span className="text-gradient">sleep better</span> at night
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Join enterprises who've transformed their cloud infrastructure.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.12}>
            {testimonials.map((t) => (
              <StaggerItem key={t.name}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className={`bg-gradient-to-br ${t.gradient} rounded-2xl p-8 h-full flex flex-col justify-between relative overflow-hidden group`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="relative z-10">
                    <p className="text-primary-foreground text-lg font-medium leading-relaxed mb-8">
                      "{t.quote}"
                    </p>
                    <div>
                      <p className="text-primary-foreground font-bold">{t.name}</p>
                      <p className="text-primary-foreground/70 text-sm">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 perspective-grid opacity-10" />
        <ParticleField />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="orb orb-blue w-[500px] h-[500px] top-0 left-1/2 -translate-x-1/2"
        />
        <div className="container mx-auto px-6 text-center relative z-10">
          <AnimatedSection direction="zoom">
            <h2 className="text-5xl lg:text-8xl font-black text-foreground mb-6 font-display">
              It's time for your <br />
              cloud to say{" "}
              <span className="text-gradient">'let's go'</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12">
              Get started with CloudFirst in under 30 minutes. Your infrastructure deserves a reliable partner.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="btn-cta inline-flex items-center gap-2 px-10 py-5 rounded-full text-primary-foreground font-bold text-lg group"
              >
                Start Your Journey
                <motion.span
                  className="inline-block"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </Link>
              <Link
                to="/solutions"
                className="btn-ghost inline-flex items-center gap-2 px-10 py-5 rounded-full text-foreground font-bold text-lg"
              >
                View Solutions
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
