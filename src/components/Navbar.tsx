import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'services', path: '/solutions' },
  { label: 'industries', path: '/industries' },
  { label: 'insights', path: '/insights' },
  { label: 'join us', path: '/about' },
  { label: 'who we are', path: '/about' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/90 backdrop-blur-xl shadow-sm' : 'bg-background/70 backdrop-blur-md'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-0 font-display text-xl font-bold tracking-tight">
          <span className="text-foreground">cloud</span>
          <span className="text-foreground">first</span>
          <span className="text-bright-blue text-2xl leading-none">°</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.label} to={link.path} className="nav-link">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-muted transition-colors">
            <Search className="w-4 h-4 text-muted-foreground" />
          </button>
          <Link to="/contact" className="btn-primary text-sm !px-6 !py-2.5">
            Let's Connect
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border px-6 py-8 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className="block nav-link text-lg py-2"
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact" className="btn-primary text-sm !px-6 !py-2.5 mt-4 inline-block">
            Let's Connect
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
