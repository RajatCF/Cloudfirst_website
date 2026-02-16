import { ArrowRight, Clock, User, Sparkles, TrendingUp, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const articles = [
  {
    category: "Cloud Strategy",
    title: "Why Multi-Cloud is the Future of Enterprise Architecture",
    excerpt: "Explore how leading enterprises are leveraging multi-cloud strategies to improve resilience and reduce vendor lock-in.",
    author: "Alex Turner",
    date: "Feb 10, 2026",
    readTime: "5 min read",
    featured: true,
    gradient: "from-blue-600/30 to-cyan-600/30",
  },
  {
    category: "AWS",
    title: "Top 10 AWS Cost Optimization Strategies for 2026",
    excerpt: "Practical tips to reduce your AWS bill by up to 40% without compromising performance or security.",
    author: "Priya Sharma",
    date: "Feb 5, 2026",
    readTime: "7 min read",
  },
  {
    category: "DevOps",
    title: "GitOps: The Modern Approach to Infrastructure Management",
    excerpt: "Learn how GitOps is transforming the way teams manage and deploy infrastructure at scale.",
    author: "Marcus Johnson",
    date: "Jan 28, 2026",
    readTime: "6 min read",
  },
  {
    category: "Security",
    title: "Zero Trust Architecture on AWS: A Complete Guide",
    excerpt: "Implementing zero trust security across your AWS infrastructure with practical examples and best practices.",
    author: "Sarah Chen",
    date: "Jan 20, 2026",
    readTime: "8 min read",
  },
  {
    category: "Migration",
    title: "Database Migration to AWS RDS: Lessons Learned",
    excerpt: "Real-world lessons from migrating 50+ databases to AWS RDS across multiple enterprise clients.",
    author: "David Kim",
    date: "Jan 15, 2026",
    readTime: "6 min read",
  },
  {
    category: "AI/ML",
    title: "Building ML Pipelines on AWS SageMaker",
    excerpt: "Step-by-step guide to building production-ready machine learning pipelines using AWS SageMaker.",
    author: "Emily Park",
    date: "Jan 10, 2026",
    readTime: "9 min read",
  },
];

const categoryColors: Record<string, string> = {
  "Cloud Strategy": "border-blue-500/30 text-blue-600 bg-blue-500/10",
  "AWS": "border-amber-500/30 text-amber-600 bg-amber-500/10",
  "DevOps": "border-green-500/30 text-green-600 bg-green-500/10",
  "Security": "border-red-500/30 text-red-600 bg-red-500/10",
  "Migration": "border-purple-500/30 text-purple-600 bg-purple-500/10",
  "AI/ML": "border-pink-500/30 text-pink-600 bg-pink-500/10",
};

const Insights = () => {
  const featured = articles[0];
  const rest = articles.slice(1);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="hero-bg-img pt-32 pb-24 lg:pt-44 lg:pb-32 relative overflow-hidden min-h-[60vh] flex items-center">
        <div className="hero-bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop')" }} />
        <div className="hero-bg-overlay" />
        <div className="absolute inset-0 perspective-grid opacity-10" />
        <div className="container mx-auto px-6 hero-content text-center">
          <AnimatedSection>
            <span className="badge-hero inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-8">
              <BookOpen className="w-3.5 h-3.5" /> Insights & Blog
            </span>
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black mb-6 font-display">
              Cloud <span className="text-gradient">insights</span>
            </h1>
            <p className="text-lg lg:text-xl max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.75)" }}>
              Expert perspectives on cloud architecture, DevOps, security, and emerging technologies.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="section-divider" />

      {/* Featured Article */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="card-glow rounded-3xl p-10 lg:p-16 relative overflow-hidden group cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${featured.gradient} opacity-30 group-hover:opacity-50 transition-opacity duration-500`} />
              <div className="absolute inset-0 dot-pattern opacity-10" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${categoryColors[featured.category]}`}>
                    {featured.category}
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-amber-500/30 text-amber-600 bg-amber-500/10 text-xs font-semibold">
                    <TrendingUp className="w-3 h-3" /> Featured
                  </span>
                </div>
                <h2 className="text-3xl lg:text-5xl font-black text-foreground mb-5 font-display">{featured.title}</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mb-8">{featured.excerpt}</p>
                <div className="flex items-center gap-6 text-sm text-muted-foreground mb-8">
                  <span className="flex items-center gap-2"><User className="w-4 h-4" /> {featured.author}</span>
                  <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {featured.readTime}</span>
                  <span>{featured.date}</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="btn-cta inline-flex items-center gap-2 px-8 py-4 rounded-full text-primary-foreground font-semibold"
                >
                  Read Article <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="pb-28">
        <div className="container mx-auto px-6">
          <AnimatedSection className="mb-12">
            <h3 className="text-2xl font-bold text-foreground font-display">Latest Articles</h3>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((a, i) => (
              <AnimatedSection key={a.title} delay={i * 0.08} direction="scale">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="card-glow rounded-2xl p-8 h-full flex flex-col cursor-pointer group relative overflow-hidden"
                >
                  <div className="relative z-10 flex flex-col h-full">
                    <span className={`inline-block w-fit px-3 py-1 rounded-full text-xs font-semibold border mb-5 ${categoryColors[a.category] || "border-primary/30 text-primary bg-primary/10"}`}>
                      {a.category}
                    </span>
                    <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors font-display">{a.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">{a.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{a.author}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {a.readTime}</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Insights;
