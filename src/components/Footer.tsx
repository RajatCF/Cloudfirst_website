import { Link } from "react-router-dom";
import { Cloud, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="section-dark text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg btn-cta flex items-center justify-center">
                <Cloud className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold">CloudFirst</span>
            </Link>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Your trusted AWS partner for cloud transformation, migration, and managed services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/40">Company</h4>
            <ul className="space-y-3">
              {["Solutions", "Insights", "Careers", "Contact Us"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(/\s/g, "-").replace("us", "")}`}
                    className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/40">Services</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/60">
              <li>Cloud Migration</li>
              <li>DevOps & CI/CD</li>
              <li>Cloud Security</li>
              <li>Managed Services</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/40">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/60">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" /> info@cloudfirst.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" /> +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> San Francisco, CA
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/40">
          <p>© 2026 CloudFirst. All rights reserved.</p>
          <p className="mt-2 md:mt-0">AWS Partner Network Member</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
