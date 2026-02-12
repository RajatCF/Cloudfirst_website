import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Cloud } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Solutions", path: "/solutions" },
  { label: "Insights", path: "/insights" },
  { label: "Careers", path: "/careers" },
  { label: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 z-50 w-full flex justify-center px-4"
    >
      <nav className={`nav-floating rounded-full px-6 py-3 flex items-center gap-8 transition-all duration-300 w-full max-w-4xl ${isScrolled ? "shadow-lg" : ""}`}>
        <Link to="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="w-8 h-8 rounded-lg btn-cta flex items-center justify-center">
            <Cloud className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold text-primary-foreground">CloudFirst</span>
        </Link>

        {/* Desktop nav - centered */}
        <div className="hidden md:flex items-center gap-1 flex-1 justify-center">
          {navLinks.slice(0, -1).map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                location.pathname === link.path
                  ? "bg-primary/20 text-primary-foreground"
                  : "text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center flex-shrink-0">
          <Link
            to="/contact"
            className="btn-cta px-5 py-2 rounded-full text-sm font-semibold text-primary-foreground"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-primary-foreground p-2 ml-auto"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="nav-floating mt-2 rounded-2xl p-4 md:hidden absolute top-full left-4 right-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? "bg-primary/20 text-primary-foreground"
                    : "text-primary-foreground/70 hover:text-primary-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
