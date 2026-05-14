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
            { label: 'Cloud data backup', path: '/solutions/cloud-data-backup' },
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
            { label: 'Blog & insights', path: '/blog' },
            { label: 'Case studies', path: '/resources/case-studies' },
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
            { label: 'Events', path: '/events' },
            { label: 'Work Benefits', path: '/work-benefits' },
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
            { label: 'Our leadership', path: '/about#our-leadership' },
            { label: 'Contact us', path: '/contact' },
          ],
        },
      ],
      [
        {
          heading: '',
          items: [
            { label: 'Our partners', path: '/company/partners' },
            { label: 'Our clients', path: '/company/clients' },
            { label: 'Press & media', path: '/company/press-media' },
            { label: 'Careers', path: '/company/careers' },
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
  const navRef = useRef<HTMLElement | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileExpanded(null);
    setActiveMenu(null);
  }, [location]);

  const handleMouseEnter = (key: MenuKey) => {
    if (hideTimeout.current) {
      clearTimeout(hideTimeout.current);
      hideTimeout.current = null;
    }
    setActiveMenu(key);
  };

  const handleMouseLeave = () => {
    if (hideTimeout.current) {
      clearTimeout(hideTimeout.current);
      hideTimeout.current = null;
    }
    hideTimeout.current = window.setTimeout(() => setActiveMenu(null), 150);
  };

  const currentData = activeMenu ? menuConfig[activeMenu] : null;
  const dropdownOpen = Boolean(activeMenu && currentData);

  useEffect(() => {
    if (!dropdownOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveMenu(null);
    };

    const onMouseDown = (e: MouseEvent) => {
      if (!navRef.current) return;
      if (navRef.current.contains(e.target as Node)) return;
      setActiveMenu(null);
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('mousedown', onMouseDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('mousedown', onMouseDown);
    };
  }, [dropdownOpen]);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/90 backdrop-blur-xl shadow-sm' : 'bg-background/70 backdrop-blur-md'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between h-20 lg:h-24">
        <Link to="/" className="flex items-center gap-0 flex-shrink-0">
          <img src="/cf-tp.png" alt="CloudFirst logo" className="h-14 sm:h-16 lg:h-24 w-auto" />
        </Link>

        <div className="hidden lg:flex flex-1 items-center justify-center relative" onMouseLeave={handleMouseLeave}>
          <div className="flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.key}
                className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-md transition-colors hover:text-primary ${
                  activeMenu === link.key ? 'text-primary' : 'text-foreground'
                }`}
                onMouseEnter={() => handleMouseEnter(link.key)}
                onClick={() => {
                  if (hideTimeout.current) {
                    clearTimeout(hideTimeout.current);
                    hideTimeout.current = null;
                  }
                  setActiveMenu((prev) => (prev === link.key ? null : link.key));
                }}
              >
                {link.label}
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeMenu === link.key ? 'rotate-180' : ''
                  }`}
                />
              </button>
            ))}
          </div>

          <div
            className={`absolute left-0 right-0 top-full text-foreground rounded-b-2xl shadow-2xl backdrop-blur-sm transition-all duration-200 z-[60] ${
              dropdownOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-1'
            }`}
            onMouseEnter={() => {
              if (hideTimeout.current) {
                clearTimeout(hideTimeout.current);
                hideTimeout.current = null;
              }
            }}
            onMouseLeave={handleMouseLeave}
          >
            {currentData && (
              <div className="bg-gradient-to-b from-[#669bbc] to-white rounded-b-2xl">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-6">
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
              </div>
            )}
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <Link to="/contact" className="btn-primary text-sm !px-6 !py-2.5">
            Contact us
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
        <div className="lg:hidden bg-background border-t border-border px-4 sm:px-6 py-6 space-y-1 max-h-[80vh] overflow-y-auto">
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
                                onClick={() => setMobileOpen(false)}
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
              Contact us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
