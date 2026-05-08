<<<<<<< HEAD
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

// Brand Icons Components
const BrandIcons: Record<string, React.ReactNode> = {
aws: (
  <img
    src="/aws_logo.png"
    alt="AWS"
    className="w-10 h-10 object-contain"
  />
),
  azure: (
  <img
    src="/azure_img.png"
    alt="Azure"
    className="w-7 h-7 object-contain"
  />
),
  gcp: (
  <img
    src="/gcp_img.png"
    alt="GCP"
    className="w-7 h-7 object-contain"
  />
),
  google_workspace: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 3h8v8H3zm10 0h8v8h-8zm-10 10h8v8H3zm10 0h8v8h-8z"/>
    </svg>
  ),
  microsoft365: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <rect x="3" y="3" width="7" height="7" fill="#F25022"/>
      <rect x="14" y="3" width="7" height="7" fill="#7FBA00"/>
      <rect x="3" y="14" width="7" height="7" fill="#00A4EF"/>
      <rect x="14" y="14" width="7" height="7" fill="#FFB900"/>
    </svg>
  ),
};

type MenuKey = 'cloud-platforms' | 'solutions' | 'services' | 'resources' | 'company';

interface NavItem {
  label: string;
  path: string;
  dot?: string;
  icon?: string;
}

interface NavSection {
  heading: string;
  items: NavItem[];
}

interface MenuConfig {
  columns: NavSection[][];
  rightPanel?: NavSection;
}

const menuConfig: Record<MenuKey, MenuConfig> = {
  'cloud-platforms': {
    columns: [
      [
        {
          heading: 'Hyperscalers',
          items: [
            { label: 'Amazon Web Services', path: '/cloud-platforms/aws', icon: 'aws' },
            { label: 'Microsoft Azure', path: '/cloud-platforms/azure', icon: 'azure' },
            { label: 'Google Cloud', path: '/cloud-platforms/gcp', icon: 'gcp' },
          ],
        },
      ],
      [
        {
          heading: 'Add-ons',
          items: [
            { label: 'Cloud security', path: '/cloud-platforms/cloud-security' },
            { label: 'Backup & disaster recovery', path: '/cloud-platforms/backup-recovery' },
            { label: 'Networking & CDN', path: '/cloud-platforms/networking-cdn' },
          ],
        },
        {
          heading: 'Support tiers',
          items: [
            { label: 'Managed services', path: '/cloud-platforms/managed-services' },
            { label: '24x7 NOC support', path: '/cloud-platforms/noc-support' },
          ],
        },
      ],
    ],
  },
  solutions: {
    columns: [
      [
        {
          heading: 'By Need',
          items: [
            { label: 'Cloud migration', path: '/solutions/cloud-migration' },
            { label: 'Infrastructure modernisation', path: '/solutions/infrastructure-modernisation' },
            { label: 'Cost optimisation', path: '/solutions/cost-optimisation' },
            { label: 'Cloud security & compliance', path: '/solutions/cloud-security-compliance' },
            { label: 'DR on Cloud', path: '/solutions/dr-on-cloud' },
          ],
        },
      ],
      [
        {
          heading: 'By Industry',
          items: [
            { label: 'Startups & SMBs', path: '/industries/startups-smbs' },
            { label: 'Enterprise', path: '/industries/enterprise' },
            { label: 'Finance & BFSI', path: '/industries/finance-bfsi' },
            { label: 'Healthcare', path: '/industries/healthcare' },
            { label: 'Education', path: '/industries/education' },
          ],
        },
      ],
    ],
  },
  services: {
    columns: [
      [
        {
          heading: 'Consulting',
          items: [
            { label: 'Cloud strategy & roadmap', path: '/services/cloud-strategy' },
            { label: 'Architecture review', path: '/services/architecture-review' },
            { label: 'Migration planning', path: '/services/migration-planning' },
          ],
        },
      ],
      [
        {
          heading: 'Managed',
          items: [
            { label: 'Managed cloud operations', path: '/services/managed-cloud-operations' },
            { label: 'FinOps & billing management', path: '/services/finops' },
            { label: 'Security monitoring', path: '/services/security-monitoring' },
          ],
        },
      ],
    ],
  },
  resources: {
    columns: [
      [
        {
          heading: 'Workspace',
          items: [
            { label: 'Google Workspace', path: '/cloud-platforms/google-workspace', icon: 'google_workspace' },
            { label: 'Microsoft 365', path: '/cloud-platforms/microsoft-365', icon: 'microsoft365' },
          ],
        },
        {
          heading: 'Resources',
          items: [
            { label: 'Case studies', path: '/resources/case-studies' },
            { label: 'Blog & insights', path: '/blog' },
          ],
        },
      ],
      [
        {
          heading: '',
          items: [
            { label: 'CloudFirst Videos', path: '/videos' },
            { label: 'Life@CloudFirst', path: '/life-at-cloudfirst' },
            { label: 'Current Openings', path: '/current-openings' },
            { label: 'Work Benefits', path: '/work-benefits' },
            { label: 'Events', path: '/events' },
          ],
        },
      ],
    ],
  },
  company: {
    columns: [
      [
        {
          heading: '',
          items: [
            { label: 'About us', path: '/about' },
            { label: 'Our partners', path: '/company/partners' },
            { label: 'Careers', path: '/company/careers' },
            { label: 'Hiring', path: '/company/hiring' },
          ],
        },
      ],
      [
        {
          heading: '',
          items: [
            { label: 'Press & media', path: '/company/press-media' },
            { label: 'Contact us', path: '/contact' },
          ],
        },
      ],
    ],
  },
};

const navLinks: { label: string; key: MenuKey }[] = [
  { label: 'Cloud platforms', key: 'cloud-platforms' },
  { label: 'Solutions', key: 'solutions' },
  { label: 'Services', key: 'services' },
  { label: 'Resources', key: 'resources' },
  { label: 'Company', key: 'company' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<MenuKey | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<MenuKey | null>(null);
  const hideTimeout = useRef<number | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveMenu(null);
  }, [location]);

  const handleMouseEnter = (key: MenuKey) => {
    if (hideTimeout.current) clearTimeout(hideTimeout.current);
    setActiveMenu(key);
  };

  const handleMouseLeave = () => {
    hideTimeout.current = window.setTimeout(() => setActiveMenu(null), 150);
  };

  const currentData = activeMenu ? menuConfig[activeMenu] : null;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/90 backdrop-blur-xl shadow-sm' : 'bg-background/70 backdrop-blur-md'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-between h-20 lg:h-24">
        <Link to="/" className="flex items-center gap-0 flex-shrink-0">
          <img src="/cf-tp.png" alt="CloudFirst logo" className="h-24 w-auto" />
        </Link>

        <div className="hidden lg:flex items-center gap-1 relative" onMouseLeave={handleMouseLeave}>
          {navLinks.map((link) => (
            <button
              key={link.key}
              className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-md transition-colors hover:text-primary ${
                activeMenu === link.key ? 'text-primary' : 'text-foreground'
              }`}
              onMouseEnter={() => handleMouseEnter(link.key)}
            >
              {link.label}
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeMenu === link.key ? 'rotate-180' : ''
                }`}
              />
            </button>
          ))}

          <div
            // className={`absolute left-1/2 -translate-x-1/2 top-full mt-2 w-auto min-w-max bg-gradient-to-b from-[#669bbc] to-white text-foreground rounded-b-2xl shadow-2xl backdrop-blur-sm transition-all duration-200 z-40 ${
            //   activeMenu ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-1'
            // }`}
            className={`absolute left-0 top-full mt-2 w-full bg-gradient-to-b from-[#669bbc] to-white text-foreground rounded-b-2xl shadow-2xl backdrop-blur-sm transition-all duration-200 z-40 ${
  activeMenu ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-1'
}`}
            onMouseEnter={() => {
              if (hideTimeout.current) clearTimeout(hideTimeout.current);
            }}
            onMouseLeave={handleMouseLeave}
          >
            {currentData && (
              <div className="px-8 py-6">
                <div className="flex gap-10">
                  <div
                    className={`grid gap-8 flex-1 ${
                      currentData.columns.length === 1
                        ? 'grid-cols-1 max-w-xs'
                        : currentData.columns.length === 2
                        ? 'grid-cols-2 max-w-2xl'
                        : 'grid-cols-3'
                    }`}
                  >
                    {currentData.columns.map((sections, colIdx) => (
                      <div key={colIdx} className="space-y-5">
                        {sections.map((section) => (
                          <div key={section.heading || colIdx}>
                            {section.heading && (
                              <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-3">
                                {section.heading}
                              </div>
                            )}
                            <ul className="space-y-2.5">
                              {section.items.map((item) => (
                                <li key={item.label}>
                                  <Link
                                    to={item.path}
                                    className="flex items-center gap-2.5 text-sm font-medium text-foreground hover:text-primary transition-colors group"
                                    onClick={() => setActiveMenu(null)}
                                  >
                                    {item.icon ? (
                                      <span className="w-4 h-4 flex-shrink-0 inline-flex items-center justify-center text-foreground group-hover:text-primary transition-colors">
                                        {BrandIcons[item.icon]}
                                      </span>
                                    ) : item.dot ? (
                                      <span
                                        className="w-2 h-2 rounded-full flex-shrink-0"
                                        style={{ backgroundColor: item.dot }}
                                      />
                                    ) : null}
                                    <span className="group-hover:translate-x-0.5 transition-transform duration-150">
                                      {item.label}
                                    </span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>

                  {currentData.rightPanel && (
                    <div className="w-48 flex-shrink-0 border-l border-foreground/15 pl-8">
                      <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-3">
                        {currentData.rightPanel.heading}
                      </div>
                      <ul className="space-y-2.5">
                        {currentData.rightPanel.items.map((item) => (
                          <li key={item.label}>
                            <Link
                              to={item.path}
                              className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors group"
                              onClick={() => setActiveMenu(null)}
                            >
                              <span className="text-muted-foreground group-hover:text-primary transition-colors">•</span>
                              <span className="group-hover:translate-x-0.5 transition-transform duration-150">
                                {item.label}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <Link to="/contact" className="btn-primary text-sm !px-6 !py-2.5">
            Let's Connect
          </Link>
        </div>

        <button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border px-6 py-6 space-y-1 max-h-[80vh] overflow-y-auto">
          {navLinks.map((link) => {
            const data = menuConfig[link.key];
            const isExpanded = mobileExpanded === link.key;
            const allSections = [...data.columns.flat(), ...(data.rightPanel ? [data.rightPanel] : [])];
            return (
              <div key={link.key} className="border-b border-border last:border-b-0">
                <button
                  className="flex items-center justify-between w-full py-3.5 text-base font-medium text-foreground"
                  onClick={() => setMobileExpanded(isExpanded ? null : link.key)}
                >
                  {link.label}
                  <ChevronDown
                    className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isExpanded && (
                  <div className="pb-5 space-y-5 pl-2">
                    {allSections.map((section, idx) => (
                      <div key={section.heading || idx}>
                        {section.heading && (
                          <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">
                            {section.heading}
                          </div>
                        )}
                        <ul className="space-y-2.5">
                          {section.items.map((item) => (
                            <li key={item.label}>
                              <Link
                                to={item.path}
                                className="flex items-center gap-2.5 text-sm text-foreground/80 hover:text-foreground transition-colors"
                              >
                                {item.icon ? (
                                  <span className="w-4 h-4 flex-shrink-0 inline-flex items-center justify-center text-foreground/80 hover:text-foreground transition-colors">
                                    {BrandIcons[item.icon]}
                                  </span>
                                ) : item.dot ? (
                                  <span
                                    className="w-2 h-2 rounded-full flex-shrink-0"
                                    style={{ backgroundColor: item.dot }}
                                  />
                                ) : null}
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
          <div className="pt-5">
            <Link to="/contact" className="btn-primary text-sm !px-6 !py-2.5 inline-block">
              Let's Connect
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
=======
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Cloud, Sparkles } from "lucide-react";

const navLinks = [
  
  {
    label: "Solutions",
    path: "/solutions",
    dropdown: [
      { label: "Cloud Migration", path: "/solutions/cloud-migration" },
      { label: "VDI Solutions", path: "/solutions/vdi-solutions" },
      { label: "Cloud Data Analytics", path: "/solutions/cloud-data-analytics" },
      { label: "Managed Cloud Services", path: "/solutions/managed-cloud-services" },
    ],
  },
  {
    label: "Industries",
    path: "/industries",
    dropdown: [
      { label: "Media & Entertainment", path: "/industries/media" },
      { label: "Healthcare", path: "/industries/healthcare" },
      { label: "Retail", path: "/industries/retail" },
      { label: "Manufacturing", path: "/industries/manufacturing" },
    ],
  },
  {
    label: "Insights",
    path: "/insights",
    dropdown: [
      { label: "Blog", path: "/blog" },
      { label: "Event", path: "/event" },
    ],
  },
  {
    label: "About",
    path: "/about-us",
    dropdown: [
      { label: "About Us", path: "/about-us" },
      { label: "Our Team", path: "/our-team" },
      { label: "Our Partner", path: "/our-partner" },
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
                  aria-expanded={openDropdown === link.label}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-1 ${location.pathname.startsWith(link.path) ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
                  tabIndex={-1}
                >
                  {link.label}
                  <svg className={`w-3 h-3 ml-1 transform transition-transform duration-200 ${openDropdown === link.label ? "rotate-90" : "rotate-0"}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <div
                  className={`absolute left-0 top-full mt-2 min-w-[200px] bg-white border border-border rounded-xl shadow-lg z-40 transition-all ${openDropdown === link.label ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                  onMouseEnter={() => handleDropdownEnter(link.label)}
                  onMouseLeave={handleDropdownLeave}
                >
                  {link.dropdown.map((sublink) => (
                    <Link
                      key={sublink.path}
                      to={sublink.path}
                      className={`block px-5 py-2 text-sm rounded-xl transition-colors whitespace-nowrap ${location.pathname === sublink.path ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-secondary"}`}
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
                      <svg className="w-3 h-3 ml-1 transform rotate-90" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
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
>>>>>>> 9e022dd14cd080f8ce67e225b385dbcbf33097bd
