import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Cloud, Sparkles } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Solutions", path: "/solutions" },
  { label: "Industries", path: "/industries" },
  {
    label: "Insights",
    path: "/insights",
    dropdown: [
      { label: "Blog", path: "/blog" },
      { label: "Event", path: "/event" },
    ],
  },
  { label: "Careers", path: "/careers" },
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


  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  // Timer for delayed dropdown close
  let dropdownCloseTimer: NodeJS.Timeout | null = null;

  // Handlers to open/close dropdown with delay
  const handleDropdownEnter = (label: string) => {
    if (dropdownCloseTimer) clearTimeout(dropdownCloseTimer);
    setOpenDropdown(label);
  };
  const handleDropdownLeave = () => {
    dropdownCloseTimer = setTimeout(() => setOpenDropdown(null), 120);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-4 z-50 w-full flex justify-center px-4"
    >
      <nav
        className={`nav-floating rounded-full px-6 py-3 flex items-center gap-8 transition-all duration-500 w-full max-w-4xl ${
          isScrolled ? "shadow-lg py-2.5" : ""
        }`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 flex-shrink-0 group">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
            className="w-8 h-8 rounded-lg btn-cta flex items-center justify-center glow-pulse"
          >
            <Cloud className="w-4.5 h-4.5 text-primary-foreground" />
          </motion.div>
          <span className="text-lg font-bold text-foreground font-display tracking-tight">
            CloudFirst
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1 flex-1 justify-center">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => handleDropdownEnter(link.label)}
                onMouseLeave={handleDropdownLeave}
                tabIndex={0}
              >
                <button
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-1 ${location.pathname.startsWith(link.path) ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
                  tabIndex={-1}
                >
                  {link.label}
                  <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </button>
                <div
                  className={`absolute left-0 top-full mt-2 min-w-[140px] bg-white border border-border rounded-xl shadow-lg z-40 transition-all ${openDropdown === link.label ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                  onMouseEnter={() => handleDropdownEnter(link.label)}
                  onMouseLeave={handleDropdownLeave}
                >
                  {link.dropdown.map((sublink) => (
                    <Link
                      key={sublink.path}
                      to={sublink.path}
                      className={`block px-5 py-2 text-sm rounded-xl transition-colors ${location.pathname === sublink.path ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-secondary"}`}
                    >
                      {sublink.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.path}
                to={link.path}
                className="relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 group"
              >
                <span
                  className={`relative z-10 ${
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-muted-foreground group-hover:text-foreground"
                  }`}
                >
                  {link.label}
                </span>
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="navbar-active"
                    className="absolute inset-0 bg-primary/10 rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            )
          )}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3 flex-shrink-0">
          <Link
            to="/contact"
            className="btn-cta px-5 py-2 rounded-full text-sm font-semibold text-primary-foreground inline-flex items-center gap-2"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Contact Us
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground p-2 ml-auto"
        >
          <motion.div animate={{ rotate: mobileOpen ? 90 : 0 }} transition={{ duration: 0.2 }}>
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.div>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="nav-floating mt-2 rounded-2xl p-4 md:hidden absolute top-full left-4 right-4"
          >
            {navLinks.map((link, i) =>
              link.dropdown ? (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <div className="block px-4 py-3 rounded-xl text-sm font-medium transition-colors">
                    <span className="flex items-center gap-1">{link.label}
                      <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </span>
                    <div className="pl-3 mt-1">
                      {link.dropdown.map((sublink) => (
                        <Link
                          key={sublink.path}
                          to={sublink.path}
                          className={`block px-4 py-2 rounded-lg text-sm transition-colors ${location.pathname === sublink.path ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-secondary"}`}
                        >
                          {sublink.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      location.pathname === link.path
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
