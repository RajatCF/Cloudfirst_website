import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

type MenuKey = 'cloud-platforms' | 'solutions' | 'services' | 'resources' | 'company';

interface NavItem {
  label: string;
  path: string;
  dot?: string;
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
            { label: 'Amazon Web Services', path: '/cloud-platforms/aws', dot: '#f59e0b' },
            { label: 'Microsoft Azure', path: '/cloud-platforms/azure', dot: '#2563eb' },
            { label: 'Google Cloud', path: '/cloud-platforms/gcp', dot: '#2563eb' },
          ],
        },
        {
          heading: 'Workspace',
          items: [
            { label: 'Google Workspace', path: '/cloud-platforms/google-workspace', dot: '#22c55e' },
            { label: 'Microsoft 365', path: '/cloud-platforms/microsoft-365', dot: '#f97316' },
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
          heading: '',
          items: [
            { label: 'Case studies', path: '/resources/case-studies' },
            { label: 'Blog & insights', path: '/resources/blog-insights' },
            { label: 'Whitepapers', path: '/resources/whitepapers' },
            { label: 'Migration guides', path: '/resources/migration-guides' },
          ],
        },
      ],
      [
        {
          heading: '',
          items: [
            { label: 'Partner certifications', path: '/resources/partner-certifications' },
            { label: 'Cloud cost calculator', path: '/resources/cost-calculator' },
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
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-between h-16 lg:h-20">
        <Link to="/" className="flex items-center gap-0 flex-shrink-0">
          <img src="/cf-tp.png" alt="CloudFirst logo" className="h-16 w-auto" />
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
            className={`fixed left-10 right-10 top-16 lg:top-20 bg-gradient-to-b from-[#669bbc] to-white text-foreground rounded-b-2xl shadow-2xl backdrop-blur-sm transition-all duration-200 z-40 ${
              activeMenu ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-1'
            }`}
            onMouseEnter={() => {
              if (hideTimeout.current) clearTimeout(hideTimeout.current);
            }}
            onMouseLeave={handleMouseLeave}
          >
            {currentData && (
              <div className="max-w-[1400px] mx-auto px-10 py-8">
                <div className="flex gap-12">
                  <div
                    className={`grid gap-10 flex-1 ${
                      currentData.columns.length === 1
                        ? 'grid-cols-1 max-w-xs'
                        : currentData.columns.length === 2
                        ? 'grid-cols-2'
                        : 'grid-cols-3'
                    }`}
                  >
                    {currentData.columns.map((sections, colIdx) => (
                      <div key={colIdx} className="space-y-7">
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
                                    {item.dot && (
                                      <span
                                        className="w-2 h-2 rounded-full flex-shrink-0"
                                        style={{ backgroundColor: item.dot }}
                                      />
                                    )}
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
                    <div className="w-48 flex-shrink-0 border-l border-foreground/10 pl-10">
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
                                {item.dot && (
                                  <span
                                    className="w-2 h-2 rounded-full flex-shrink-0"
                                    style={{ backgroundColor: item.dot }}
                                  />
                                )}
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
