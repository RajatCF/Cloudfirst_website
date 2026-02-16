import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { ArrowRight, Cloud, Shield, Zap, Server, Database, Globe, ChevronRight, CheckCircle2, Play, Sparkles, Layers, Lock, BarChart3, Cpu, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection, { ParallaxSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

// Carousel component for testimonials
const TestimonialCarousel = ({ testimonials, direction = "left" }) => {
  const [index, setIndex] = useState(0);
  // Auto-advance every 3.5s
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  // Slide direction
  const variants = {
    enter: (dir) => ({
      x: dir === "left" ? 300 : -300,
      opacity: 0,
      position: "absolute"
    }),
    center: { x: 0, opacity: 1, position: "relative" },
    exit: (dir) => ({
      x: dir === "left" ? -300 : 300,
      opacity: 0,
      position: "absolute"
    })
  };

  return (
    <div className="relative flex justify-center items-center mb-10 min-h-[220px]">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ x: { type: "spring", stiffness: 60, damping: 20 }, opacity: { duration: 0.3 } }}
          className={`w-full max-w-xl mx-auto bg-gradient-to-br ${testimonials[index].gradient} rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden shadow-lg`}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
          <div className="relative z-10">
            <p className="text-primary-foreground text-lg font-medium leading-relaxed mb-8">
              "{testimonials[index].quote}"
            </p>
            <div>
              <p className="text-primary-foreground font-bold">{testimonials[index].name}</p>
              <p className="text-primary-foreground/70 text-sm">{testimonials[index].role}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2.5 h-2.5 rounded-full border border-white/40 ${i === index ? "bg-white/80" : "bg-white/30"}`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const services = [
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    desc: "Design, deploy, and scale secure cloud environments on AWS, Azure, or GCP.",
    color: "from-blue-500/10 to-cyan-500/10",
    iconColor: "text-blue-600",
    badge: "AWS | Azure | GCP"
  },
  {
    icon: Shield,
    title: "Cloud Security & Compliance",
    desc: "Protect your workloads with advanced security, IAM, and compliance automation.",
    color: "from-emerald-500/10 to-green-500/10",
    iconColor: "text-emerald-600",
    badge: "SOC2 | ISO | IAM"
  },
  {
    icon: Zap,
    title: "DevOps Automation",
    desc: "CI/CD pipelines, GitOps, and infrastructure as code for rapid, reliable releases.",
    color: "from-amber-500/10 to-orange-500/10",
    iconColor: "text-amber-600",
    badge: "Terraform | GitHub Actions"
  },
  {
    icon: Server,
    title: "Managed Cloud Services",
    desc: "24/7 monitoring, patching, and optimization by certified cloud engineers.",
    color: "from-purple-500/10 to-violet-500/10",
    iconColor: "text-purple-600",
    badge: "SRE | Monitoring"
  },
  {
    icon: Database,
    title: "Data & AI Solutions",
    desc: "Modern data lakes, analytics, and AI/ML pipelines for actionable insights.",
    color: "from-pink-500/10 to-rose-500/10",
    iconColor: "text-pink-600",
    badge: "BigQuery | ML | ETL"
  },
  {
    icon: Globe,
    title: "Multi-Cloud & Hybrid",
    desc: "Unified management and seamless connectivity across clouds and on-premises.",
    color: "from-sky-500/10 to-indigo-500/10",
    iconColor: "text-sky-600",
    badge: "Hybrid | VPN | DR"
  },
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
          className="absolute w-1 h-1 rounded-full bg-primary/20"
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
      className="absolute top-20 right-[15%] w-32 h-32 border border-primary/8 rounded-2xl"
    />
    <motion.div
      animate={{ rotate: -360 }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      className="absolute bottom-40 left-[10%] w-24 h-24 border border-cyan-500/8 rounded-full"
    />
    <motion.div
      animate={{ rotate: 360, scale: [1, 1.2, 1] }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      className="absolute top-1/3 left-[5%] w-16 h-16 border border-purple-500/8 rounded-lg"
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
      <section ref={heroRef} className="relative overflow-hidden min-h-screen flex items-center">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/bg-video.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/30" />

        {/* Subtle animated particles over video */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-[2]">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-white/20"
              style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
              animate={{ y: [0, -40, 0], opacity: [0, 0.6, 0] }}
              transition={{ duration: 4 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 5 }}
            />
          ))}
        </div>

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="container mx-auto px-6 relative z-10 py-32 lg:py-44">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* LEFT — Text Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-xl"
              >
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur text-xs font-semibold text-white/90 mb-7 shadow-sm"
                >
                  <Cloud className="w-4 h-4 text-cyan-300" />
                  Enterprise Cloud Experts
                </motion.div>

                {/* Heading */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6 font-display text-white drop-shadow-lg">
                  <span className="block">Modern Cloud</span>
                  <span className="block">Solutions for</span>
                  <span className="block text-gradient bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent">Ambitious Teams</span>
                </h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-base md:text-lg text-white/80 max-w-md mb-8 leading-relaxed font-medium"
                >
                  Accelerate innovation, reduce risk, and scale with confidence. Trusted by leading enterprises worldwide.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.65 }}
                  className="flex flex-wrap gap-4"
                >
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-400 text-white font-semibold text-base shadow-lg hover:scale-105 transition-transform"
                  >
                    <ArrowRight className="w-5 h-5" />
                    Book Consultation
                  </Link>
                  <Link
                    to="/solutions"
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white/20 bg-white/10 backdrop-blur text-white font-semibold text-base hover:bg-white/20 transition-all"
                  >
                    Explore Solutions
                  </Link>
                </motion.div>

                {/* Trusted by */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="mt-12 flex items-center gap-5"
                >
                  <div className="flex -space-x-2">
                    {["from-blue-400 to-blue-600", "from-cyan-400 to-teal-600", "from-violet-400 to-purple-600", "from-amber-400 to-orange-600", "from-rose-400 to-pink-600"].map((grad, i) => (
                      <div key={i} className={`w-8 h-8 rounded-full border-2 border-white/20 bg-gradient-to-br ${grad} flex items-center justify-center text-xs font-bold text-white shadow-md`}>
                        {String.fromCharCode(65 + i)}
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center gap-1 mb-0.5">
                      {[1,2,3,4,5].map((i) => (
                        <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      ))}
                    </div>
                    <p className="text-xs text-white/60 font-medium">Trusted by 50+ enterprises</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* RIGHT — Glass Form */}
            <motion.div
              initial={{ opacity: 0, x: 80, rotateY: -8 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Outer glow */}
              <div className="absolute -inset-4 rounded-3xl blur-2xl opacity-60" />

              {/* Glass card */}
              <div className="relative rounded-3xl bg-white/[0.10] backdrop-blur-2xl border border-white/[0.15] p-10 lg:p-12 shadow-2xl shadow-black/20 min-w-[320px] max-w-md mx-auto">
                {/* Top shimmer line */}
                <div className="absolute top-0 left-8 right-8 h-[1.5px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />

                <div className="flex items-center gap-3 mb-8">
                  <Cloud className="w-8 h-8 text-cyan-300" />
                  <div>
                    <h3 className="font-bold text-white text-lg tracking-tight">Request a Cloud Assessment</h3>
                    <p className="text-xs text-white/60">Get a tailored roadmap for your business</p>
                  </div>
                </div>

                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 gap-4">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full px-5 py-3 rounded-xl bg-white/15 border border-white/15 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-400/40 focus:border-blue-400/30 transition-all font-medium"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      autoComplete="name"
                    />
                    <input
                      type="email"
                      placeholder="Work Email"
                      className="w-full px-5 py-3 rounded-xl bg-white/15 border border-white/15 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-400/40 focus:border-blue-400/30 transition-all font-medium"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      autoComplete="email"
                    />
                    <input
                      type="text"
                      placeholder="Company Name"
                      className="w-full px-5 py-3 rounded-xl bg-white/15 border border-white/15 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-400/40 focus:border-blue-400/30 transition-all font-medium"
                      value={formData.company}
                      onChange={e => setFormData({ ...formData, company: e.target.value })}
                      autoComplete="organization"
                    />
                    <textarea
                      placeholder="Tell us about your cloud needs..."
                      rows={3}
                      className="w-full px-5 py-3 rounded-xl bg-white/15 border border-white/15 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-400/40 focus:border-blue-400/30 transition-all font-medium resize-none"
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500 text-white font-semibold text-base shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 relative overflow-hidden group hover:scale-[1.03] transition-transform"
                  >
                    <span className="relative">Get Free Assessment</span>
                    <ArrowRight className="w-5 h-5 relative" />
                  </button>
                </form>

                {/* Bottom trust indicator */}
                <div className="mt-7 flex items-center justify-center gap-2 text-white/40 text-xs">
                  <Lock className="w-4 h-4" />
                  <span>256-bit SSL encrypted • No spam, ever</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom fade to page bg */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
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
        {/* Modern animated logo carousel */}
        <div className="relative w-full overflow-x-hidden">
          <div className="flex gap-10 animate-marquee group items-center py-2">
            {[
              'acunetic.png',
              'aws-logo.png',
              'backupify.png',
              'big-cloud.png',
              'cisco-meraki.png',
             
              'google-cloud-logo.png',
              'microsoft_azure-logo.png',
              'my.png',
              'netmagic-logo.png',
              'path-logo.png',
              'redif.png',
              'wma.png',
            ].concat([
              'acunetic.png',
              'aws-logo.png',
              'backupify.png',
              'big-cloud.png',
              'cisco-meraki.png',
              
              'google-cloud-logo.png',
              'microsoft_azure-logo.png',
              'my.png',
              'netmagic-logo.png',
              'path-logo.png',
              'redif.png',
              'wma.png',
            ]).map((logo, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex items-center justify-center h-16 w-36 bg-white/10 rounded-2xl shadow-md border border-white/10 mx-2 transition-transform duration-300 hover:scale-105 hover:shadow-lg group-hover:opacity-80"
              >
                <img
                  src={`/logo/${logo}`}
                  alt={logo.replace(/[-_]/g, ' ').replace(/\.png$/, '')}
                  className="h-10 max-w-[120px] object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          {/* Fade overlays for edge fade effect */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-background via-background/80 to-transparent z-10" />
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
          {/* Fixed 2 row × 5 column grid */}
          <div className="grid grid-rows-2 grid-cols-5 gap-6">
            {/* Tall card in col 2, spans both rows */}
            {(() => {
              const Icon = services[1].icon;
              return (
                <div
                  className="rounded-2xl p-8 h-full relative overflow-hidden border border-border shadow-lg bg-[#F6F3FF] row-span-2 flex flex-col justify-between"
                  style={{ gridRow: '1 / span 2', gridColumn: 2 }}
                >
                  {/* Decorative background icon */}
                  <Shield className="absolute right-4 bottom-4 w-20 h-20 text-emerald-100 opacity-30 z-0" />
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 bg-white/50 shadow-lg">
                        <Icon className={`w-9 h-9 ${services[1].iconColor}`} />
                      </div>
                      <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center bg-white/60">
                        <ChevronRight className="w-4 h-4 text-muted-foreground" />
                      </div>
                    </div>
                    <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold mb-2">{services[1].badge}</span>
                    <h3 className="text-2xl font-bold text-foreground mb-3">{services[1].title}</h3>
                    <p className="text-muted-foreground text-base leading-relaxed">{services[1].desc}</p>
                  </div>
                  <div className="flex items-center gap-3 mt-8 z-10">
                    <Lock className="w-7 h-7 text-emerald-400 bg-white/70 rounded-lg p-1" />
                    <span className="text-emerald-700 font-medium text-sm">Continuous Compliance</span>
                  </div>
                </div>
              );
            })()}
            {/* Tall card in col 4, spans both rows */}
            {(() => {
              const Icon = services[3].icon;
              return (
                <div
                  className="rounded-2xl p-8 h-full relative overflow-hidden border border-border shadow-lg bg-[#F6F3FF] row-span-2 flex flex-col justify-between"
                  style={{ gridRow: '1 / span 2', gridColumn: 4 }}
                >
                  {/* Decorative background icon */}
                  <Server className="absolute right-4 bottom-4 w-20 h-20 text-purple-100 opacity-30 z-0" />
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 bg-white/50 shadow-lg">
                        <Icon className={`w-9 h-9 ${services[3].iconColor}`} />
                      </div>
                      <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center bg-white/60">
                        <ChevronRight className="w-4 h-4 text-muted-foreground" />
                      </div>
                    </div>
                    <span className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-semibold mb-2">{services[3].badge}</span>
                    <h3 className="text-2xl font-bold text-foreground mb-3">{services[3].title}</h3>
                    <p className="text-muted-foreground text-base leading-relaxed">{services[3].desc}</p>
                  </div>
                  <div className="flex items-center gap-3 mt-8 z-10">
                    <BarChart3 className="w-7 h-7 text-purple-400 bg-white/70 rounded-lg p-1" />
                    <span className="text-purple-700 font-medium text-sm">Proactive Monitoring</span>
                  </div>
                </div>
              );
            })()}
            {/* Small cards for remaining cells */}
            {/* Row 1, Col 1 */}
            {(() => {
              const Icon = services[0].icon;
              return (
                <div
                  className="rounded-2xl p-8 h-full relative overflow-hidden border border-border shadow-lg bg-[#F6F3FF]"
                  style={{ gridRow: 1, gridColumn: 1 }}
                >
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-white/40">
                        <Icon className={`w-7 h-7 ${services[0].iconColor}`} />
                      </div>
                      <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center bg-white/60">
                        <ChevronRight className="w-4 h-4 text-muted-foreground" />
                      </div>
                    </div>
                    <div className="mb-2">
                      <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold mb-2">{services[0].badge}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{services[0].title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{services[0].desc}</p>
                  </div>
                </div>
              );
            })()}
            {/* Row 1, Col 3 */}
            {(() => {
              const Icon = services[2].icon;
              return (
                <div
                  className="rounded-2xl p-8 h-full relative overflow-hidden border border-border shadow-lg bg-[#F6F3FF]"
                  style={{ gridRow: 1, gridColumn: 3 }}
                >
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-white/40">
                        <Icon className={`w-7 h-7 ${services[2].iconColor}`} />
                      </div>
                      <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center bg-white/60">
                        <ChevronRight className="w-4 h-4 text-muted-foreground" />
                      </div>
                    </div>
                    <div className="mb-2">
                      <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-semibold mb-2">{services[2].badge}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{services[2].title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{services[2].desc}</p>
                  </div>
                </div>
              );
            })()}
            {/* Row 1, Col 5 (placeholder) */}
            <div
              className="rounded-2xl p-8 h-full relative overflow-hidden border border-dashed border-border shadow-lg bg-[#F6F3FF] flex items-center justify-center text-muted-foreground"
              style={{ gridRow: 1, gridColumn: 5 }}
            >
              <span className="text-lg font-semibold">Coming Soon</span>
            </div>
            {/* Row 2, Col 1 */}
            {(() => {
              const Icon = services[5].icon;
              return (
                <div
                  className="rounded-2xl p-8 h-full relative overflow-hidden border border-border shadow-lg bg-[#F6F3FF]"
                  style={{ gridRow: 2, gridColumn: 1 }}
                >
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-white/40">
                        <Icon className={`w-7 h-7 ${services[5].iconColor}`} />
                      </div>
                      <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center bg-white/60">
                        <ChevronRight className="w-4 h-4 text-muted-foreground" />
                      </div>
                    </div>
                    <div className="mb-2">
                      <span className="inline-block px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-semibold mb-2">{services[5].badge}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{services[5].title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{services[5].desc}</p>
                  </div>
                </div>
              );
            })()}
            {/* Row 2, Col 3 */}
            {/* Row 2, Col 3 (placeholder) */}
            <div
              className="rounded-2xl p-8 h-full relative overflow-hidden border border-dashed border-border shadow-lg bg-[#F6F3FF] flex flex-col items-center justify-center text-muted-foreground"
              style={{ gridRow: 2, gridColumn: 3 }}
            >
              <Cpu className="w-10 h-10 mb-2 text-sky-400" />
              <span className="text-lg font-semibold">AI Cloud Integrations</span>
            </div>
            {/* Row 2, Col 5 */}
            {/* Row 2, Col 5 (placeholder) */}
            <div
              className="rounded-2xl p-8 h-full relative overflow-hidden border border-dashed border-border shadow-lg bg-[#F6F3FF] flex flex-col items-center justify-center text-muted-foreground"
              style={{ gridRow: 2, gridColumn: 5 }}
            >
              <Layers className="w-10 h-10 mb-2 text-indigo-400" />
              <span className="text-lg font-semibold">Cloud Marketplace</span>
            </div>
          </div>
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
              className="absolute border border-black/20 rounded-3xl"
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
              <div className="aspect-video bg-black flex items-center justify-center relative">
                {/* Real video demo */}
                <video
                  src="/bg2.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Optional: overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />
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
                      <p className="text-2xl font-bold text-emerald-600 font-display">99.99%</p>
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
                        <Shield className="w-4 h-4 text-emerald-600" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Security Score</p>
                        <p className="text-sm font-bold text-foreground">98/100</p>
                      </div>
                    </div>
                    <div className="flex-1 card-glass rounded-xl p-4 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                        <Zap className="w-4 h-4 text-amber-600" />
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

      {/* ===== TESTIMONIALS (Carousel Redesign) ===== */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/50 to-transparent" />
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

          {/* Carousel Row 1 */}
          <TestimonialCarousel testimonials={testimonials} direction="left" />
          {/* Carousel Row 2 */}
          <TestimonialCarousel testimonials={testimonials} direction="right" />
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
