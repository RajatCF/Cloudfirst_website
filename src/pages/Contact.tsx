import { useState } from "react";
import { Mail, Phone, MapPin, Send, Sparkles, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  const contactItems = [
    { icon: Mail, label: "Email", value: "info@cloudfirst.com" },
    { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
    { icon: MapPin, label: "Office", value: "123 Cloud Street\nSan Francisco, CA 94105" },
  ];

  const inputClasses =
    "w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30 transition-all";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="hero-bg-img pt-32 pb-24 lg:pt-44 lg:pb-32 relative overflow-hidden min-h-[55vh] flex items-center">
        <div className="hero-bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')" }} />
        <div className="hero-bg-overlay" />
        <div className="absolute inset-0 perspective-grid opacity-10" />
        <div className="container mx-auto px-6 hero-content text-center">
          <AnimatedSection>
            <span className="badge-hero inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-8">
              <MessageSquare className="w-3.5 h-3.5" /> Contact Us
            </span>
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black mb-6 font-display">
              Let's <span className="text-gradient">connect</span>
            </h1>
            <p className="text-lg lg:text-xl max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.75)" }}>
              Ready to start your cloud journey? Get in touch and we'll respond within 24 hours.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="section-divider" />

      {/* Contact Form + Info */}
      <section className="py-28">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <AnimatedSection direction="left">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 font-display">Get in Touch</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Whether you're exploring cloud options or ready to start a project, our team is here to help.
                  </p>
                </div>

                <div className="space-y-5">
                  {contactItems.map((item) => (
                    <motion.div
                      key={item.label}
                      whileHover={{ x: 6 }}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:border-primary/40 transition-colors">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-sm">{item.label}</p>
                        <p className="text-muted-foreground text-sm whitespace-pre-line">{item.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Mini map placeholder */}
                <div className="card-glow rounded-2xl p-6 mt-8">
                  <div className="aspect-video rounded-xl bg-secondary/50 border border-border flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-8 h-8 text-primary mx-auto mb-2 opacity-50" />
                      <p className="text-xs text-muted-foreground">San Francisco, CA</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection direction="right" className="lg:col-span-2">
              <motion.form
                onSubmit={handleSubmit}
                className="card-glow rounded-3xl p-8 lg:p-10 relative overflow-hidden"
              >
                <div className="absolute inset-0 dot-pattern opacity-5" />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-8">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-bold text-foreground font-display">Send us a message</h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 block">Full Name</label>
                      <input
                        type="text"
                        className={inputClasses}
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 block">Work Email</label>
                      <input
                        type="email"
                        className={inputClasses}
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 block">Company</label>
                      <input
                        type="text"
                        className={inputClasses}
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        placeholder="Company Inc."
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 block">Phone</label>
                      <input
                        type="tel"
                        className={inputClasses}
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>
                  <div className="mb-5">
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 block">Service Interested In</label>
                    <select
                      className={inputClasses}
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                    >
                      <option value="">Select a service</option>
                      <option>Cloud Migration</option>
                      <option>Cloud Security</option>
                      <option>DevOps & Automation</option>
                      <option>Managed Services</option>
                      <option>Data & Analytics</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="mb-8">
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 block">Message</label>
                    <textarea
                      rows={4}
                      className={`${inputClasses} resize-none`}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your cloud needs..."
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="btn-cta w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-primary-foreground font-semibold"
                  >
                    Send Message <Send className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.form>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
