import { Link } from "react-router-dom";
import { Cloud, Mail, Phone, MapPin, ArrowRight, Linkedin, Twitter, Github } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-border/50">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute inset-0 dot-pattern opacity-10" />

      {/* Newsletter CTA strip */}
      <div className="relative z-10 border-b border-border/30">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-foreground font-display mb-1">Stay ahead in cloud</h3>
              <p className="text-muted-foreground text-sm">Get insights, case studies, and cloud tips delivered monthly.</p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-72 px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 backdrop-blur-sm"
              />
              <button className="btn-cta px-6 py-3 rounded-xl text-primary-foreground font-semibold text-sm whitespace-nowrap inline-flex items-center gap-2">
                Subscribe <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-5 group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-9 h-9 rounded-lg btn-cta flex items-center justify-center"
              >
                <Cloud className="w-5 h-5 text-primary-foreground" />
              </motion.div>
              <span className="text-lg font-bold text-foreground font-display tracking-tight">CloudFirst</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mb-6">
              Your trusted AWS Premier Partner for cloud transformation, migration, and managed services. Building the future of cloud infrastructure.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Github, href: "#" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-lg border border-border/50 bg-secondary/30 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold mb-5 text-xs uppercase tracking-[0.15em] text-muted-foreground">Solutions</h4>
            <ul className="space-y-3">
              {["Cloud Migration", "Cloud Security", "DevOps & CI/CD", "Managed Services", "Data & Analytics", "Multi-Cloud"].map((item) => (
                <li key={item}>
                  <Link
                    to="/solutions"
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-200 flex items-center gap-1 group"
                  >
                    <span className="w-0 group-hover:w-2 h-[1px] bg-primary transition-all duration-200" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-5 text-xs uppercase tracking-[0.15em] text-muted-foreground">Company</h4>
            <ul className="space-y-3">
              {[
                { label: "Solutions", path: "/solutions" },
                { label: "Insights", path: "/insights" },
                { label: "Careers", path: "/careers" },
                { label: "Contact Us", path: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-200 flex items-center gap-1 group"
                  >
                    <span className="w-0 group-hover:w-2 h-[1px] bg-primary transition-all duration-200" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-5 text-xs uppercase tracking-[0.15em] text-muted-foreground">Contact</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-3.5 h-3.5 text-primary" />
                </div>
                info@cloudfirst.com
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-3.5 h-3.5 text-primary" />
                </div>
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                </div>
                San Francisco, CA
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="section-divider mt-12 mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© 2026 CloudFirst Technology. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <span className="text-primary/60">AWS Partner Network Member</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
