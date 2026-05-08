<<<<<<< HEAD
import Layout from '@/components/Layout';
import { ArrowRight, CreditCard, Heart, ShoppingCart, Gamepad2, Building2, Store, Truck, Cloud } from 'lucide-react';

const industries = [
  { name: 'FinTech', icon: CreditCard, features: ['Real-time fraud detection', 'Regulatory compliance', 'Payment optimization', 'Risk modeling'] },
  { name: 'Healthcare', icon: Heart, features: ['HIPAA-compliant cloud', 'Patient data analytics', 'Telehealth infrastructure', 'AI diagnostics'] },
  { name: 'E-commerce', icon: ShoppingCart, features: ['Auto-scaling platforms', 'Personalization engines', 'Inventory optimization', 'Multi-region CDN'] },
  { name: 'SaaS', icon: Cloud, features: ['Multi-tenant architecture', 'CI/CD pipelines', 'Usage-based billing', 'Performance monitoring'] },
  { name: 'Gaming', icon: Gamepad2, features: ['Low-latency infrastructure', 'Real-time matchmaking', 'Player analytics', 'Global distribution'] },
  { name: 'Enterprise', icon: Building2, features: ['Legacy modernization', 'Hybrid cloud strategy', 'Data governance', 'Change management'] },
  { name: 'Retail', icon: Store, features: ['Omnichannel platforms', 'Demand forecasting', 'Supply chain AI', 'Customer 360'] },
  { name: 'Logistics', icon: Truck, features: ['Route optimization', 'Fleet management', 'Real-time tracking', 'Predictive maintenance'] },
=======
import { ArrowRight, CheckCircle2, Sparkles, Building2, Shield, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const industries = [
  {
    icon: "🏦",
    title: "Finance & Banking",
    desc: "Secure, compliant cloud infrastructure designed for financial institutions — from core banking to fintech innovation.",
    gradient: "from-blue-500/10 to-indigo-500/10",
    borderColor: "border-blue-500/20",
    features: [
      "PCI-DSS & SOC 2 compliant architectures",
      "Real-time fraud detection with ML pipelines",
      "High-frequency trading infrastructure",
      "Disaster recovery & business continuity",
    ],
    stat: "99.999%",
    statLabel: "Uptime SLA",
  },
  {
    icon: "🏥",
    title: "Healthcare & Life Sciences",
    desc: "HIPAA-compliant cloud solutions that power EHR systems, telemedicine platforms, and research workloads.",
    gradient: "from-emerald-500/10 to-teal-500/10",
    borderColor: "border-emerald-500/20",
    features: [
      "HIPAA & HITRUST compliant environments",
      "Telemedicine & remote patient monitoring",
      "Genomics & research data pipelines",
      "Interoperable healthcare data exchange",
    ],
    stat: "40%",
    statLabel: "Cost Reduction",
  },
  {
    icon: "🛒",
    title: "Retail & E-Commerce",
    desc: "Scalable cloud platforms that handle peak traffic, personalize experiences, and optimize supply chains.",
    gradient: "from-amber-500/10 to-orange-500/10",
    borderColor: "border-amber-500/20",
    features: [
      "Auto-scaling for traffic spikes & flash sales",
      "AI-driven product recommendations",
      "Omnichannel inventory management",
      "Real-time customer analytics dashboards",
    ],
    stat: "3x",
    statLabel: "Faster Deployments",
  },
  {
    icon: "🏭",
    title: "Manufacturing & IoT",
    desc: "Smart factory solutions connecting edge devices, optimizing production, and enabling predictive maintenance.",
    gradient: "from-slate-500/10 to-zinc-500/10",
    borderColor: "border-slate-500/20",
    features: [
      "IoT device management at scale",
      "Predictive maintenance with AI/ML",
      "Digital twin simulations",
      "Supply chain visibility & optimization",
    ],
    stat: "60%",
    statLabel: "Less Downtime",
  },
  {
    icon: "🎬",
    title: "Media & Entertainment",
    desc: "Cloud-native content delivery, streaming infrastructure, and media processing at global scale.",
    gradient: "from-pink-500/10 to-rose-500/10",
    borderColor: "border-pink-500/20",
    features: [
      "Global CDN & streaming optimization",
      "Media transcoding & processing pipelines",
      "Content management & distribution",
      "Real-time audience analytics",
    ],
    stat: "10B+",
    statLabel: "Streams Delivered",
  },
  {
    icon: "🏛️",
    title: "Government & Public Sector",
    desc: "FedRAMP-authorized cloud environments that meet the strictest security and compliance requirements.",
    gradient: "from-violet-500/10 to-purple-500/10",
    borderColor: "border-violet-500/20",
    features: [
      "FedRAMP High & IL5 authorized",
      "Zero-trust security architectures",
      "Citizen services modernization",
      "Classified workload support",
    ],
    stat: "100%",
    statLabel: "Compliance Rate",
  },
  {
    icon: "🚚",
    title: "Logistics & Transportation",
    desc: "Real-time fleet management, route optimization, and supply chain visibility powered by the cloud.",
    gradient: "from-cyan-500/10 to-sky-500/10",
    borderColor: "border-cyan-500/20",
    features: [
      "Real-time fleet tracking & telematics",
      "AI-powered route optimization",
      "Warehouse automation integration",
      "Cross-border shipment visibility",
    ],
    stat: "25%",
    statLabel: "Fuel Savings",
  },
  {
    icon: "🎓",
    title: "Education & EdTech",
    desc: "Scalable learning platforms, secure student data management, and research computing infrastructure.",
    gradient: "from-green-500/10 to-lime-500/10",
    borderColor: "border-green-500/20",
    features: [
      "LMS hosting & scaling for peak enrollment",
      "Student data privacy & FERPA compliance",
      "High-performance research computing",
      "Virtual labs & collaboration tools",
    ],
    stat: "5M+",
    statLabel: "Students Served",
  },
];

const whyCloudFirst = [
  {
    icon: Shield,
    title: "Compliance-First Approach",
    desc: "Every solution is designed with industry-specific regulatory requirements built in from day one.",
  },
  {
    icon: Building2,
    title: "Industry Expertise",
    desc: "Our architects have deep domain knowledge with 10+ years of experience in your specific sector.",
  },
  {
    icon: TrendingUp,
    title: "Proven ROI",
    desc: "On average, our clients see 40% cost reduction and 3x faster time-to-market after cloud transformation.",
  },
>>>>>>> 9e022dd14cd080f8ce67e225b385dbcbf33097bd
];

const Industries = () => {
  return (
<<<<<<< HEAD
    <Layout>
      <section className="py-32 lg:py-40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-[700px] mb-20">
            <h1 className="section-title mb-6">industries we <span className="text-bright-blue">transform</span></h1>
            <p className="text-lg text-muted-foreground">Deep domain expertise meets cutting-edge cloud engineering across every vertical.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <div key={industry.name} className="card-lift p-8 rounded-2xl border border-border bg-card group cursor-pointer">
                  <Icon className="w-8 h-8 text-bright-blue mb-6" />
                  <h3 className="text-xl font-display font-bold mb-4">{industry.name}</h3>
                  <ul className="space-y-2">
                    {industry.features.map(f => (
                      <li key={f} className="text-sm text-muted-foreground flex items-center gap-2">
                        <ArrowRight className="w-3 h-3 text-bright-blue flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
=======
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="hero-bg-img pt-32 pb-24 lg:pt-44 lg:pb-32 relative overflow-hidden min-h-[70vh] flex items-center">
        <div className="hero-bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2144&auto=format&fit=crop')" }} />
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
              <Sparkles className="w-3.5 h-3.5" /> Industries We Serve
            </motion.span>
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black mb-6 font-display">
              Cloud solutions for <br />
              <span className="text-gradient">every industry</span>
            </h1>
            <p className="text-lg lg:text-xl max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.75)" }}>
              Purpose-built cloud architectures tailored to the unique challenges, compliance requirements, and goals of your sector.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="section-divider" />

      {/* Industries Grid */}
      <section className="py-28 relative">
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
              Explore by Industry
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-5 font-display">
              Tailored for your <span className="text-gradient">sector</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Deep expertise across 8 industries, delivering solutions that address your specific challenges.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 gap-8" staggerDelay={0.1}>
            {industries.map((ind) => (
              <StaggerItem key={ind.title}>
                <motion.div
                  whileHover={{ scale: 1.01, y: -4 }}
                  className={`card-glow rounded-2xl p-8 h-full relative overflow-hidden group border ${ind.borderColor}`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${ind.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <span className="text-4xl">{ind.icon}</span>
                        <div>
                          <h3 className="text-xl font-bold text-foreground font-display">{ind.title}</h3>
                          <p className="text-sm text-muted-foreground mt-1">{ind.desc}</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-6">
                      {ind.features.map((f) => (
                        <div key={f} className="flex items-start gap-2 text-sm text-foreground/80">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-5 border-t border-border">
                      <div>
                        <span className="text-3xl font-black text-gradient font-display">{ind.stat}</span>
                        <span className="text-sm text-muted-foreground ml-2">{ind.statLabel}</span>
                      </div>
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors group/link"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why CloudFirst */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-5 font-display">
              Why enterprises choose <span className="text-gradient">CloudFirst</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Industry-leading expertise combined with proven methodologies for measurable outcomes.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
            {whyCloudFirst.map((item) => (
              <StaggerItem key={item.title}>
                <motion.div
                  whileHover={{ scale: 1.03, y: -6 }}
                  className="card-glow rounded-2xl p-8 text-center h-full"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 font-display">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 perspective-grid opacity-10" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <AnimatedSection direction="zoom">
            <h2 className="text-4xl lg:text-6xl font-black text-foreground mb-6 font-display">
              Ready to transform your <span className="text-gradient">industry</span>?
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
              Let's discuss how CloudFirst can build a cloud strategy tailored to your sector's unique requirements.
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
                to="/solutions"
                className="btn-ghost inline-flex items-center gap-2 px-10 py-5 rounded-full font-bold text-lg"
              >
                View Solutions
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
>>>>>>> 9e022dd14cd080f8ce67e225b385dbcbf33097bd
  );
};

export default Industries;
