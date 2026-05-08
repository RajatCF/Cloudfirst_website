import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Cloud, Shield, BarChart3, GitBranch, DollarSign, Settings } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  { category: 'Infrastructure', icon: Cloud, title: 'Cloud Modernization', badge: '✨ AI-native', path: '/solutions/infrastructure-modernisation' },
  { category: 'Security', icon: Shield, title: 'Security & Reliability', badge: '✨ AI-native', path: '/solutions/cloud-security-compliance' },
  { category: 'Data', icon: BarChart3, title: 'Data Intelligence', badge: '✨ AI-native', path: '/solutions/data-analytic' },
  { category: 'Engineering', icon: GitBranch, title: 'DevOps Automation', badge: '✨ AI-native', path: '/solutions/cloud-devops' },
  { category: 'FinOps', icon: DollarSign, title: 'Cost Optimization', badge: '✨ AI-native', path: '/solutions/cost-optimisation' },
  { category: 'Operations', icon: Settings, title: 'Managed Services', badge: '✨ AI-native', path: '/cloud-platforms/managed-services' },
];

const ServicesGrid = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.service-card-anim', { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, stagger: 0.1, duration: 0.6, ease: 'power2.out',
        scrollTrigger: { trigger: gridRef.current, start: 'top 75%' }
      });

      gsap.to('.service-icon', {
        duration: 1.0,
        y: -8,
        x: 5,
        rotation: 8,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        stagger: 0.08,
      });
    }, gridRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="py-32 lg:py-40 bg-background">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="mb-16">
          <h2 className="section-title">Our Intelligent Cloud Services</h2>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link key={service.title} to={service.path} className="block">
                <div className="service-card service-card-anim group cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 border-r border-b border-border">
                  <div className="flex items-center justify-between mb-6">
                    <span className="service-category text-xs uppercase tracking-widest text-muted-foreground font-medium">
                      {service.category}
                    </span>
                    <span className="text-xs px-3 py-1 rounded-full bg-bright-blue/10 text-bright-blue font-medium">
                      {service.badge}
                    </span>
                  </div>
                  <Icon className="service-icon inline-block w-8 h-8 text-bright-blue mb-6 transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="text-2xl lg:text-3xl font-display font-bold leading-tight">
                    {service.title}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
