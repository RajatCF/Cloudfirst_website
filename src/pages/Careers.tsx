import { MapPin, ArrowRight, Briefcase, Users, Heart, Zap, Sparkles, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const perks = [
  { icon: Heart, title: "Health & Wellness", desc: "Comprehensive health, dental, and vision coverage for you and your family.", color: "from-rose-500/20 to-pink-500/20 border-rose-500/20" },
  { icon: Zap, title: "Learning Budget", desc: "$3,000 annual learning budget for courses, certifications, and conferences.", color: "from-amber-500/20 to-yellow-500/20 border-amber-500/20" },
  { icon: Users, title: "Remote-First", desc: "Work from anywhere. We're a distributed team across 15+ countries.", color: "from-blue-500/20 to-cyan-500/20 border-blue-500/20" },
  { icon: Briefcase, title: "Equity", desc: "Stock options so you share in CloudFirst's growth and success.", color: "from-green-500/20 to-emerald-500/20 border-green-500/20" },
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
      <section className="hero-gradient pt-32 pb-24 lg:pt-44 lg:pb-32 relative overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 perspective-grid opacity-15" />
        <motion.div
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="orb orb-cyan w-[500px] h-[500px] -top-40 -left-40"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="orb orb-purple w-[400px] h-[400px] -bottom-20 right-0"
        />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-wider mb-8">
              <Rocket className="w-3.5 h-3.5" /> Join Our Team
            </span>
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black text-foreground mb-6 font-display">
              Build the future of <br />
              <span className="text-gradient">cloud computing</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
              Join a team of passionate cloud engineers solving complex infrastructure challenges for enterprises worldwide.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="section-divider" />

      {/* Perks */}
      <section className="py-28">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-4 font-display">Why work at <span className="text-gradient">CloudFirst</span>?</h2>
            <p className="text-muted-foreground text-lg">We invest in our people as much as our technology.</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((perk, i) => (
              <AnimatedSection key={perk.title} delay={i * 0.1} direction="scale">
                <motion.div
                  whileHover={{ scale: 1.05, y: -8 }}
                  className="card-glow rounded-2xl p-8 text-center h-full relative overflow-hidden group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${perk.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center mx-auto mb-5">
                      <perk.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2 font-display">{perk.title}</h3>
                    <p className="text-sm text-muted-foreground">{perk.desc}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Open Positions */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-10" />
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5" /> Open Positions
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-4 font-display">Find your next role</h2>
            <p className="text-muted-foreground text-lg">Explore opportunities to grow your career at CloudFirst.</p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto space-y-4">
            {openings.map((job, i) => (
              <AnimatedSection key={job.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ scale: 1.02, x: 8 }}
                  className="card-glow rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer group"
                >
                  <div>
                    <h3 className="font-bold text-foreground group-hover:text-primary transition-colors font-display">{job.title}</h3>
                    <div className="flex items-center gap-3 mt-2 text-sm text-muted-foreground flex-wrap">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border border-border bg-secondary/50 text-xs">{job.department}</span>
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{job.location}</span>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-xs">{job.type}</span>
                    </div>
                  </div>
                  <motion.div whileHover={{ x: 4 }}>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                  </motion.div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 relative overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="orb orb-blue w-[400px] h-[400px] top-0 left-1/4"
        />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <AnimatedSection>
            <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-6 font-display">
              Don't see the right role?
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
              We're always looking for talented people. Send us your resume and we'll keep you in mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="btn-cta inline-flex items-center gap-2 px-8 py-4 rounded-full text-primary-foreground font-semibold"
                >
                  Get in Touch <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
