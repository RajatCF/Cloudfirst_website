import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'services', path: '/solutions' },
  { label: 'industries', path: '/industries' },
  { label: 'insights', path: '/insights', hasDropdown: true },
  { label: 'join us', path: '/current-openings' },
  { label: 'who we are', path: '/about' },
];

const insightsDropdown = [
  { title: 'Blog', path: '/insights/blog', desc: 'Latest articles, thought leadership, and company news.' },
  { title: 'Events', path: '/insights/events', desc: 'Upcoming and past events, conferences, and webinars.' },
  { title: 'Case Studies', path: '/insights/case-studies', desc: 'Success stories and real-world impact from our clients.' },
  { title: 'News', path: '/insights/news', desc: 'Press releases, media coverage, and announcements.' },
  { title: 'Webinars', path: '/insights/webinars', desc: 'On-demand and live webinars with industry experts.' },
  { title: 'Join With Us', path: '/current-openings', desc: 'Explore job openings and apply to join our team.' },
];

// mega menu data
const megaServices = [
  { title: 'Cloud Migration', desc: 'Seamless migration of workloads and data to the cloud for agility and scale.', path: '/solutions/cloud-migration' },
  { title: 'Data Analytic', desc: 'Unlock insights and drive decisions with advanced analytics and data solutions.', path: '/solutions/data-analytic' },
  { title: 'Managed Cloud Service', desc: 'End-to-end management and optimization of your cloud environment.', path: '/solutions/managed-cloud-service' },
  { title: 'CLOUD SECURITY', desc: 'Comprehensive security solutions to protect your cloud assets and data.', path: '/solutions/cloud-security' },
  { title: 'Cloud DevOps', desc: 'Accelerate development and operations with modern DevOps practices in the cloud.', path: '/solutions/cloud-devops' },
];

const megaIndustries = [
  { title: 'Cloud Migration', desc: 'Seamless migration of workloads and data to the cloud for agility and scale.', path: '/solutions/cloud-migration' },
  { title: 'Data Analytic', desc: 'Unlock insights and drive decisions with advanced analytics and data solutions.', path: '/solutions/data-analytic' },
  { title: 'Managed Cloud Service', desc: 'End-to-end management and optimization of your cloud environment.', path: '/solutions/managed-cloud-service' },
  { title: 'CLOUD SECURITY', desc: 'Comprehensive security solutions to protect your cloud assets and data.', path: '/solutions/cloud-security' },
  { title: 'Cloud DevOps', desc: 'Accelerate development and operations with modern DevOps practices in the cloud.', path: '/solutions/cloud-devops' },
  { title: 'telecommunication, media, entertainment & gaming', desc: 'Engineering the future of connectivity, content, and play.' },
  { title: 'manufacturing, industrials & construction', desc: 'Predictive Maintenance. AI Visual Quality. Synchronous Supply Chains.' },
  { title: 'technology, software & services', desc: 'Predictive Revenue Engines. Refactored Delivery. Synchronous Growth.' },
  { title: 'natural resources, energy & utilities', desc: 'Autonomous Grids. Zero-Trust Asset Security. Real-time Yield Optimization.' },
  { title: 'public sector & education', desc: 'Autonomous Adjudication. Student Success. Agentic Governance.' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoverTarget, setHoverTarget] = useState<null | 'services' | 'industries' | 'insights'>(null);
  const hideTimeout = useRef<number | null>(null);

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
        {/* desktop links + hover zone */}
        <div
          className="hidden lg:flex items-center gap-8 relative group/nav-hover"
          onMouseEnter={() => {
            if (hideTimeout.current) clearTimeout(hideTimeout.current);
          }}
          onMouseLeave={() => {
            hideTimeout.current = window.setTimeout(() => setHoverTarget(null), 800);
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className="nav-link"
              onMouseEnter={() => {
                if (hideTimeout.current) clearTimeout(hideTimeout.current);
                if (link.label === 'services' || link.label === 'industries' || link.label === 'insights') {
                  setHoverTarget(link.label as 'services' | 'industries' | 'insights');
                }
              }}
            >
              {link.label}
            </Link>
          ))}

          {/* mega menu overlay */}
          {/* always render dropdown for animation; visibility controlled via opacity */}
          <div
            className={`fixed left-10 right-10 top-[var(--nav-height,64px)] w-auto bg-gradient-to-b from-[#669bbc] to-white text-foreground py-10 overflow-x-hidden z-40 px-4 lg:px-0 rounded-b-2xl shadow-2xl backdrop-blur-sm transition-opacity duration-200 ${
              hoverTarget ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
            onMouseEnter={() => {
              if (hideTimeout.current) clearTimeout(hideTimeout.current);
            }}
          >
            <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-4 gap-10">
              <div className="col-span-3">
                {hoverTarget === 'services' ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {megaServices.map(item => (
                      <Link
                        key={item.title}
                        to={item.path}
                        className="block space-y-2 py-2 px-4 rounded hover:bg-bright-blue/10 transition-colors"
                      >
                        <div className="text-sm font-semibold text-foreground">
                          {item.title}
                        </div>
                        <div className="text-xs text-muted-foreground leading-snug">
                          {item.desc}
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : hoverTarget === 'industries' ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {megaIndustries.map(item => (
                      <div key={item.title} className="space-y-2">
                        <div className="text-sm uppercase font-semibold leading-tight text-foreground">
                          {item.title}
                        </div>
                        <div className="text-xs text-muted-foreground leading-snug">
                          {item.desc}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : hoverTarget === 'insights' ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {insightsDropdown.map(item => (
                      <div key={item.title} className="py-2 px-4 rounded hover:bg-bright-blue/10 transition-colors">
                        <a href={item.path} className="block text-base font-semibold mb-1 text-foreground">
                          {item.title}
                        </a>
                        <div className="text-xs text-muted-foreground leading-snug">
                          {item.desc}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
              {/* right panel */}
              <div className="hidden lg:block">
                <h4 className="text-lg font-semibold mb-4">
                  Proud to be a trusted partner for Xtelify with Google Cloud
                </h4>
                <p className="text-sm mb-4">
                  Helping Xtelify (erstwhile Airtel Digital) migrate to Google Cloud was both an exciting opportunity and a big responsibility. Hear directly from Hitesh Bhatia, AVP Engineering at Xtelify, on how this partnership unfolded.
                </p>
                <button className="btn-primary text-sm">
                  Watch here <span className="ml-2">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="hidden lg:flex items-center gap-4">
          {/* <button className="p-2 rounded-full hover:bg-muted transition-colors">
            <Search className="w-4 h-4 text-muted-foreground" />
          </button> */}
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
