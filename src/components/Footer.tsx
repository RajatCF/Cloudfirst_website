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
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-3">
          {/* Brand */}
          <div className="lg:col-span-1 pr-8">
            <Link to="/" className="font-display text-xl font-bold tracking-tight inline-flex items-center">
              <img src="/cflogo.png" alt="CloudFirst logo" className="h-16 w-auto inline-block" />
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

          {/* Services */}
          <div className="pl-4">
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

          {/* Office Locations */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold mb-6 opacity-40">Office Locations</h4>
            <div className="space-y-4 text-sm opacity-60">
              <div>
                <p className="font-semibold mb-2">Mumbai-India :</p>
                <p className="text-xs leading-relaxed">3rd Floor, Chintamani Plaza, Andheri East, Mumbai-400099</p>
              </div>
              
              <div>
                <p className="font-semibold mb-2">Delhi NCR-India :</p>
                <p className="text-xs leading-relaxed">The i-THUM Sector 62, Noida-201309</p>
              </div>
              
              <div>
                <p className="font-semibold mb-2">Bengaluru-India :</p>
                <p className="text-xs leading-relaxed">1st Floor, Brigade Tech Park, B Block, Whitefield Road, Bengaluru–560066</p>
              </div>
              
              <div>
                <p className="font-semibold mb-1">USA :</p>
                <p className="text-xs leading-relaxed">2055 Limestone Rd STE 200-C Wilmington, DE 19808 United States</p>
              </div>
            </div>
          </div>

          {/* Contact Details */}
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

          {/* Partners - Far Right */}
          <div className="flex flex-col justify-center">
            <h4 className="text-xs uppercase tracking-widest font-semibold mb-4 opacity-40">Partners</h4>
            <img 
              src="/aws_advance partner logo.png" 
              alt="AWS Advanced Partner" 
              className="h-40 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
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
