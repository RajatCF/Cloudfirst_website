<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Youtube, Facebook, Instagram } from 'lucide-react';

const footerLinks = {
  services: [
    { label: 'Cloud Modernization', path: '/solutions' },
    { label: 'Data Intelligence', path: '/solutions' },
    { label: 'DevOps Automation', path: '/solutions' },
    { label: 'Security & Reliability', path: '/solutions' },
    { label: 'Cost Optimization', path: '/solutions' },
    { label: 'Managed Services', path: '/solutions' },
  ],
  company: [
    { label: 'About Us', path: '/about' },
    { label: 'Insights', path: '/insights' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Careers', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ],
  connect: [
    { label: 'LinkedIn', path: 'https://www.linkedin.com/company/cloudfirsttech/' },
    { label: 'YouTube', path: 'https://www.youtube.com/@cloudfirstin/?sub_confirmation=1' },
    { label: 'Facebook', path: 'https://www.facebook.com/cloudfirstindia' },
    { label: 'Instagram', path: 'https://www.instagram.com/cloudfirst.in' },
    { label: 'X (Twitter)', path: 'https://x.com/Cloudfirstindia' },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-navy-dark text-primary-foreground">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-6">
          <div className="lg:col-span-1 pr-8">
            <Link to="/" className="inline-block leading-none -mt-1">
              <img src="/cflogo.png" alt="CloudFirst logo" className="h-16 w-auto block" />
            </Link>
            <p className="mt-4 text-sm leading-relaxed opacity-60 max-w-xs">
              AI-native, engineering-led cloud consultancy helping enterprises modernize intelligently.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="https://www.linkedin.com/company/cloudfirsttech/" className="p-2 rounded-full border border-primary-foreground/20 hover:border-bright-blue hover:text-bright-blue transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://www.youtube.com/@cloudfirstin/?sub_confirmation=1" className="p-2 rounded-full border border-primary-foreground/20 hover:border-bright-blue hover:text-bright-blue transition-all">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="https://www.facebook.com/cloudfirstindia" className="p-2 rounded-full border border-primary-foreground/20 hover:border-bright-blue hover:text-bright-blue transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/cloudfirst.in" className="p-2 rounded-full border border-primary-foreground/20 hover:border-bright-blue hover:text-bright-blue transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://x.com/Cloudfirstindia" className="p-2 rounded-full border border-primary-foreground/20 hover:border-bright-blue hover:text-bright-blue transition-all">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold mb-6 opacity-40">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-sm opacity-60 hover:opacity-100 hover:text-bright-blue transition-all">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold mb-6 opacity-40">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-sm opacity-60 hover:opacity-100 hover:text-bright-blue transition-all">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold mb-6 opacity-40">Contact Details</h4>
            <div className="space-y-4 text-sm opacity-60">
              <div>
                <p className="font-semibold mb-1">Phone:</p>
                <p className="text-xs">+91-8448440769</p>
              </div>
              
              <div>
                <p className="font-semibold mb-1">E-mail:</p>
                <p className="text-xs">solutions@cloudfirst.in</p>
                <p className="text-xs">support@cloudfirst.in</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <h4 className="text-xs uppercase tracking-widest font-semibold mb-3 opacity-40">Partners</h4>
            <div className="w-full flex justify-center">
              <img
                src="/aws_advance partner logo.png"
                alt="AWS Advanced Partner"
                className="h-28 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-amber-300/50 shadow-[0_-1px_0_rgba(251,191,36,0.35)]">
          <p className="text-xs opacity-40">© 2026 CloudFirst. All rights reserved.</p>
          <div className="flex items-center gap-6 text-xs opacity-40">
            <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
=======
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
      {/* <div className="relative z-10 border-b border-border/30">
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
                className="flex-1 md:w-72 px-4 py-3 rounded-xl bg-secondary/50 border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <button className="btn-cta px-6 py-3 rounded-xl text-primary-foreground font-semibold text-sm whitespace-nowrap inline-flex items-center gap-2">
                Subscribe <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div> */}

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
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
                  className="w-9 h-9 rounded-lg border border-border bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
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
              {[ 
                { label: "Cloud Migration", path: "/solutions/cloud-migration" },
                { label: "VDI Solutions", path: "/solutions/vdi-solutions" },
                { label: "Cloud Data Analytics", path: "/solutions/cloud-data-analytics" },
                { label: "Managed Cloud Services", path: "/solutions/managed-cloud-services" }
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

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-5 text-xs uppercase tracking-[0.15em] text-muted-foreground">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", path: "/about-us" },
                { label: "Our Team", path: "/our-team" },
                { label: "Our Partner", path: "/our-partner" },
                { label: "Careers", path: "/careers" },
                { label: "Blog", path: "/blog" },
                { label: "Event", path: "/event" },
                { label: "Contact Us", path: "/contact" }
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

          {/* Industries */}
          <div>
            <h4 className="font-semibold mb-5 text-xs uppercase tracking-[0.15em] text-muted-foreground">Industries</h4>
            <ul className="space-y-3">
              {[
                { label: "Industries Home", path: "/industries" },
                { label: "Media & Entertainment", path: "/industries/media" },
                { label: "Healthcare", path: "/industries/healthcare" },
                { label: "Retail", path: "/industries/retail" },
                { label: "Manufacturing", path: "/industries/manufacturing" }
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
                <div>
                  solutions@cloudfirst.in<br />support@cloudfirst.in
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-3.5 h-3.5 text-primary" />
                </div>
                +91-8448440769
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
            <Link to="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
              <Link to="/terms-and-conditions" className="hover:text-foreground transition-colors">Terms & Conditions</Link>
            <span className="text-primary/60">AWS Partner Network Member</span>
>>>>>>> 9e022dd14cd080f8ce67e225b385dbcbf33097bd
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
