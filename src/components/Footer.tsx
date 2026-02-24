import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Github } from 'lucide-react';

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
    { label: 'LinkedIn', path: '#' },
    { label: 'Twitter', path: '#' },
    { label: 'GitHub', path: '#' },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-navy-dark text-primary-foreground">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="font-display text-xl font-bold tracking-tight inline-flex items-center">
              cloudfirst<span className="text-bright-blue text-2xl">°</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed opacity-60 max-w-xs">
              AI-native, engineering-led cloud consultancy helping enterprises modernize intelligently.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="p-2 rounded-full border border-primary-foreground/20 hover:border-bright-blue hover:text-bright-blue transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-full border border-primary-foreground/20 hover:border-bright-blue hover:text-bright-blue transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-full border border-primary-foreground/20 hover:border-bright-blue hover:text-bright-blue transition-all">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
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

          {/* Company */}
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

          {/* Connect */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold mb-6 opacity-40">Offices</h4>
            <ul className="space-y-3 text-sm opacity-60">
              <li>San Francisco, CA</li>
              <li>New York, NY</li>
              <li>London, UK</li>
            </ul>
            <p className="text-sm opacity-60 mt-6">hello@cloudfirst.io</p>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs opacity-40">© 2026 CloudFirst. All rights reserved.</p>
          <div className="flex items-center gap-6 text-xs opacity-40">
            <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
