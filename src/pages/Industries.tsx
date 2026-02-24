import Layout from '@/components/Layout';
import { ArrowRight, CreditCard, Heart, ShoppingCart, Gamepad2, Building2, Store, Truck, Cloud } from 'lucide-react';

const industries = [
  { name: 'FinTech', icon: CreditCard, features: ['Real-time fraud detection', 'Regulatory compliance', 'Payment optimization', 'Risk modeling'] },
  { name: 'Healthcare', icon: Heart, features: ['HIPAA-compliant cloud', 'Patient data analytics', 'Telehealth infrastructure', 'AI diagnostics'] },
  { name: 'E-commerce', icon: ShoppingCart, features: ['Auto-scaling platforms', 'Personalization engines', 'Inventory optimization', 'Multi-region CDN'] },
  { name: 'SaaS', icon: Cloud, features: ['Multi-tenant architecture', 'CI/CD pipelines', 'Usage-based billing', 'Performance monitoring'] },
  { name: 'Gaming', icon: Gamepad2, features: ['Low-latency infrastructure', 'Real-time matchmaking', 'Player analytics', 'Global distribution'] },
  { name: 'Enterprise', icon: Building2, features: ['Legacy modernization', 'Hybrid cloud strategy', 'Data governance', 'Change management'] },
  { name: 'Retail', icon: Store, features: ['Omnichannel platforms', 'Demand forecasting', 'Supply chain AI', 'Customer 360'] },
  { name: 'Logistics', icon: Truck, features: ['Route optimization', 'Fleet management', 'Real-time tracking', 'Predictive maintenance'] },
];

const Industries = () => {
  return (
    <Layout>
      <section className="py-32 lg:py-40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-[700px] mb-20">
            <h1 className="section-title mb-6">industries we <span className="text-bright-blue">transform</span></h1>
            <p className="text-lg text-muted-foreground">Deep domain expertise meets cutting-edge cloud engineering across every vertical.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <div key={industry.name} className="card-lift p-8 rounded-2xl border border-border bg-card group cursor-pointer">
                  <Icon className="w-8 h-8 text-bright-blue mb-6" />
                  <h3 className="text-xl font-display font-bold mb-4">{industry.name}</h3>
                  <ul className="space-y-2">
                    {industry.features.map(f => (
                      <li key={f} className="text-sm text-muted-foreground flex items-center gap-2">
                        <ArrowRight className="w-3 h-3 text-bright-blue flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Industries;
