import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Youtube, Facebook, Instagram } from 'lucide-react';

const footerLinks = {
  services: [
    { label: 'Cloud Modernization', path: '/solutions/infrastructure-modernisation' },
    { label: 'Data Intelligence', path: '/solutions/data-analytic' },
    { label: 'DevOps Automation', path: '/solutions/cloud-devops' },
    { label: 'Security & Reliability', path: '/solutions/cloud-security' },
    { label: 'Cost Optimization', path: '/solutions/cost-optimisation' },
    { label: 'Managed Services', path: '/solutions/managed-cloud-service' },
  ],
  company: [
    { label: 'About Us', path: '/about' },
    { label: 'Insights', path: '/insights' },
    { label: 'Pricing', path: '/pricing' },
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
  return (
    <footer className="bg-navy-dark text-primary-foreground">
      <div className="w-full max-w-none mx-auto px-6 sm:px-10 lg:px-20 py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-6">
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block leading-none -mt-1">
              <img src="/cflogo.png" alt="CloudFirst logo" className="h-20 w-auto block" />
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

          <div className="flex flex-col items-center">
            <h4 className="text-xs uppercase tracking-widest font-semibold mb-4 opacity-40 text-center">Partners</h4>
            <div className="grid grid-cols-3 items-center justify-items-center gap-x-6">
              {[
                { src: '/aws_advance partner logo.png', alt: 'AWS Advanced Partner' },
                { src: '/logo/microsoft_logo.png', alt: 'Microsoft Partner' },
                { src: '/logo/GCP_image.png', alt: 'Google Cloud Partner' },
              ].map((partner) => (
                <div
                  key={partner.alt}
                  className="h-28 w-28 rounded-full bg-white shadow-lg ring-1 ring-black/5 flex items-center justify-center p-4 transition-transform duration-300 hover:scale-[1.03]"
                >
                  <img
                    src={partner.src}
                    alt={partner.alt}
                    className="w-full h-full object-contain"
                    style={partner.alt === 'Google Cloud Partner' ? { filter: 'brightness(1.25) contrast(1.08)' } : undefined}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-amber-300/50 shadow-[0_-1px_0_rgba(251,191,36,0.35)]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs opacity-40">© 2026 CloudFirst. All rights reserved.</p>
            <div className="flex items-center gap-6 text-xs opacity-40">
              <Link to="/evergreen-thought" className="hover:opacity-100 hover:text-bright-blue transition-all">
                Evergreen Thought
              </Link>
              <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
              <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
