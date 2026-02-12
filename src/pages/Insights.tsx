import { ArrowRight, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";
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

const Insights = () => {
  const featured = articles[0];
  const rest = articles.slice(1);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="hero-gradient pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 perspective-grid opacity-30" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Insights & Blog
            </span>
            <h1 className="text-5xl lg:text-7xl font-black text-foreground mb-6">
              Cloud <span className="text-gradient">insights</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert perspectives on cloud architecture, DevOps, security, and emerging technologies.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="card-cloud rounded-2xl p-10 lg:p-14 relative overflow-hidden">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">{featured.category}</span>
              <h2 className="text-3xl lg:text-4xl font-black text-foreground mb-4">{featured.title}</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mb-6">{featured.excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <span className="flex items-center gap-1"><User className="w-4 h-4" /> {featured.author}</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {featured.readTime}</span>
                <span>{featured.date}</span>
              </div>
              <button className="btn-cta inline-flex items-center gap-2 px-6 py-3 rounded-full text-primary-foreground font-semibold text-sm">
                Read More <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((a, i) => (
              <AnimatedSection key={a.title} delay={i * 0.1} direction="scale">
                <div className="card-cloud rounded-2xl p-8 h-full flex flex-col cursor-pointer group">
                  <span className="inline-block w-fit px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">{a.category}</span>
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{a.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">{a.excerpt}</p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{a.author}</span>
                    <span>·</span>
                    <span>{a.readTime}</span>
                  </div>
                </div>
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
