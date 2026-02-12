import { MapPin, ArrowRight, Briefcase, Users, Heart, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const perks = [
  { icon: Heart, title: "Health & Wellness", desc: "Comprehensive health, dental, and vision coverage for you and your family." },
  { icon: Zap, title: "Learning Budget", desc: "$3,000 annual learning budget for courses, certifications, and conferences." },
  { icon: Users, title: "Remote-First", desc: "Work from anywhere. We're a distributed team across 15+ countries." },
  { icon: Briefcase, title: "Equity", desc: "Stock options so you share in CloudFirst's growth and success." },
];

const openings = [
  { title: "Senior AWS Solutions Architect", department: "Engineering", location: "Remote", type: "Full-time" },
  { title: "Cloud Security Engineer", department: "Security", location: "Remote", type: "Full-time" },
  { title: "DevOps Engineer", department: "Engineering", location: "San Francisco, CA", type: "Full-time" },
  { title: "Technical Account Manager", department: "Customer Success", location: "New York, NY", type: "Full-time" },
  { title: "Data Platform Engineer", department: "Data", location: "Remote", type: "Full-time" },
  { title: "Frontend Developer", department: "Product", location: "Remote", type: "Full-time" },
];

const Careers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="hero-gradient pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 perspective-grid opacity-30" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Join Our Team
            </span>
            <h1 className="text-5xl lg:text-7xl font-black text-foreground mb-6">
              Build the future of <br />
              <span className="text-gradient">cloud computing</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join a team of passionate cloud engineers solving complex infrastructure challenges for enterprises worldwide.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Perks */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-black text-foreground mb-4">Why work at CloudFirst?</h2>
            <p className="text-muted-foreground text-lg">We invest in our people as much as our technology.</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((perk, i) => (
              <AnimatedSection key={perk.title} delay={i * 0.1}>
                <div className="card-cloud rounded-2xl p-8 text-center h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <perk.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{perk.title}</h3>
                  <p className="text-sm text-muted-foreground">{perk.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-secondary/50">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-black text-foreground mb-4">Open Positions</h2>
            <p className="text-muted-foreground text-lg">Find your next role at CloudFirst.</p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto space-y-4">
            {openings.map((job, i) => (
              <AnimatedSection key={job.title} delay={i * 0.08}>
                <div className="card-cloud rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer group">
                  <div>
                    <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">{job.title}</h3>
                    <div className="flex items-center gap-3 mt-1 text-sm text-muted-foreground">
                      <span>{job.department}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{job.location}</span>
                      <span>·</span>
                      <span>{job.type}</span>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
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

export default Careers;
