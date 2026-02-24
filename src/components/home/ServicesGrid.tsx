import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Cloud, Shield, BarChart3, GitBranch, DollarSign, Settings } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  { category: 'Infrastructure', icon: Cloud, title: 'Cloud Platform Modernization', badge: '✨ AI-native' },
  { category: 'Security', icon: Shield, title: 'Security & Reliability', badge: '✨ AI-native' },
  { category: 'Data', icon: BarChart3, title: 'Data Intelligence', badge: '✨ AI-native' },
  { category: 'Engineering', icon: GitBranch, title: 'DevOps Automation', badge: '✨ AI-native' },
  { category: 'FinOps', icon: DollarSign, title: 'Cost Optimization', badge: '✨ AI-native' },
  { category: 'Operations', icon: Settings, title: 'Managed Services', badge: '✨ AI-native' },
];

const ServicesGrid = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.service-card-anim', { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, stagger: 0.1, duration: 0.6, ease: 'power2.out',
        scrollTrigger: { trigger: gridRef.current, start: 'top 75%' }
      });
    }, gridRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="py-32 lg:py-40 bg-background">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="mb-16">
          <h2 className="section-title">our AI-native services</h2>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-border">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="service-card service-card-anim">
                <div className="flex items-center justify-between mb-6">
                  <span className="service-category text-xs uppercase tracking-widest text-muted-foreground font-medium">
                    {service.category}
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full bg-bright-blue/10 text-bright-blue font-medium">
                    {service.badge}
                  </span>
                </div>
                <Icon className="service-icon w-8 h-8 text-bright-blue mb-6" />
                <h3 className="text-2xl lg:text-3xl font-display font-bold leading-tight">
                  {service.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
