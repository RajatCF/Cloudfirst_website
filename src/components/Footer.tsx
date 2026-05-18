import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Youtube, Facebook, Instagram, ChevronDown } from 'lucide-react';

const footerLinks = {
  services: [
    { label: 'Cloud Modernization', path: '/solutions/infrastructure-modernisation' },
    { label: 'Data Intelligence', path: '/solutions/data-analytic' },
    { label: 'DevOps Automation', path: '/solutions/cloud-devops' },
    { label: 'Security & Reliability', path: '/solutions/cloud-security' },
    { label: 'Cost Optimization', path: '/solutions/cost-optimisation' },
    { label: 'Managed Services', path: '/solutions/managed-cloud-service' },
  ],
  industries: [
    { label: 'Startups & SMBs', path: '/industries/startups-smbs' },
    { label: 'Enterprise', path: '/industries/enterprise' },
    { label: 'Finance & BFSI', path: '/industries/finance-bfsi' },
    { label: 'Healthcare', path: '/industries/healthcare' },
    { label: 'Education', path: '/industries/education' },
    { label: 'Advertising & marketing', path: '/industries/advertising-marketing' },
    { label: 'Manufacturing', path: '/industries/manufacturing' },
    { label: 'Sports', path: '/industries/sports' },
  ],
  company: [
    { label: 'About Us', path: '/about' },
    { label: 'Insights', path: '/insights' },
    { label: 'Support Plans', path: '/support-plans' },
    { label: 'Careers', path: '/company/careers' },
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
  const [mobileExpanded, setMobileExpanded] = useState<'services' | 'industries' | 'company' | null>(null);

  return (
    <footer className="bg-navy-dark text-primary-foreground">
      <div className="w-full max-w-none mx-auto px-4 sm:px-6 lg:px-20 py-14 lg:py-16">
        <div className="sm:hidden space-y-8">
          <div>
            <Link to="/" className="inline-block leading-none -mt-1">
              <img src="/cflogo.png" alt="CloudFirst logo" className="h-16 w-auto block" />
            </Link>
            <p className="mt-4 text-sm leading-relaxed opacity-60 max-w-xs">
              AI-native, engineering-led cloud consultancy helping enterprises modernize intelligently.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://www.linkedin.com/company/cloudfirsttech/"
                className="p-2 rounded-full border border-primary-foreground/20 hover:border-bright-blue hover:text-bright-blue transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@cloudfirstin/?sub_confirmation=1"
                className="p-2 rounded-full border border-primary-foreground/20 hover:border-bright-blue hover:text-bright-blue transition-all"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/cloudfirstindia"
                className="p-2 rounded-full border border-primary-foreground/20 hover:border-bright-blue hover:text-bright-blue transition-all"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/cloudfirst.in"
                className="p-2 rounded-full border border-primary-foreground/20 hover:border-bright-blue hover:text-bright-blue transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/Cloudfirstindia"
                className="p-2 rounded-full border border-primary-foreground/20 hover:border-bright-blue hover:text-bright-blue transition-all"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="border-t border-primary-foreground/10 pt-6">
            <button
              type="button"
              className="w-full flex items-center justify-between py-3"
              onClick={() => setMobileExpanded(mobileExpanded === 'services' ? null : 'services')}
            >
              <span className="text-xs uppercase tracking-widest font-semibold opacity-40">Services</span>
              <ChevronDown
                className={`w-4 h-4 opacity-60 transition-transform duration-200 ${
                  mobileExpanded === 'services' ? 'rotate-180' : ''
                }`}
              />
            </button>
            {mobileExpanded === 'services' && (
              <ul className="space-y-3 pb-4">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <Link to={link.path} className="block text-sm opacity-60 hover:opacity-100 hover:text-bright-blue transition-all">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="border-t border-primary-foreground/10 pt-6">
            <button
              type="button"
              className="w-full flex items-center justify-between py-3"
              onClick={() => setMobileExpanded(mobileExpanded === 'industries' ? null : 'industries')}
            >
              <span className="text-xs uppercase tracking-widest font-semibold opacity-40">Industries</span>
              <ChevronDown
                className={`w-4 h-4 opacity-60 transition-transform duration-200 ${
                  mobileExpanded === 'industries' ? 'rotate-180' : ''
                }`}
              />
            </button>
            {mobileExpanded === 'industries' && (
              <ul className="space-y-3 pb-4">
                {footerLinks.industries.map((link) => (
                  <li key={link.label}>
                    <Link to={link.path} className="block text-sm opacity-60 hover:opacity-100 hover:text-bright-blue transition-all">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="border-t border-primary-foreground/10 pt-6">
            <button
              type="button"
              className="w-full flex items-center justify-between py-3"
              onClick={() => setMobileExpanded(mobileExpanded === 'company' ? null : 'company')}
            >
              <span className="text-xs uppercase tracking-widest font-semibold opacity-40">Company</span>
              <ChevronDown
                className={`w-4 h-4 opacity-60 transition-transform duration-200 ${
                  mobileExpanded === 'company' ? 'rotate-180' : ''
                }`}
              />
            </button>
            {mobileExpanded === 'company' && (
              <ul className="space-y-3 pb-4">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link to={link.path} className="block text-sm opacity-60 hover:opacity-100 hover:text-bright-blue transition-all">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

        </div>

        <div className="hidden sm:flex justify-center">
          <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10">
          <div className="md:col-span-1">
            <Link to="/" className="inline-block leading-none -mt-1">
              <img src="/cflogo.png" alt="CloudFirst logo" className="h-16 sm:h-20 w-auto block" />
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
                  <Link to={link.path} className="block text-sm opacity-60 hover:opacity-100 hover:text-bright-blue transition-all">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold mb-6 opacity-40">Industries</h4>
            <ul className="space-y-3">
              {footerLinks.industries.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="block text-sm opacity-60 hover:opacity-100 hover:text-bright-blue transition-all">
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
                  <Link to={link.path} className="block text-sm opacity-60 hover:opacity-100 hover:text-bright-blue transition-all">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-amber-300/50 shadow-[0_-1px_0_rgba(251,191,36,0.35)]">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4">
            <p className="text-xs opacity-40">© 2026 CloudFirst. All rights reserved.</p>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs opacity-40">
              <Link to="/evergreen-thought" className="hover:opacity-100 hover:text-bright-blue transition-all">
                Evergreen Thought
              </Link>
              <Link to="/privacy-policy" className="hover:opacity-100 hover:text-bright-blue transition-all">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="hover:opacity-100 hover:text-bright-blue transition-all">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
