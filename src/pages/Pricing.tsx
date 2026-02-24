import Layout from '@/components/Layout';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const tiers = [
  {
    name: 'Starter',
    price: '$2,999',
    period: '/month',
    desc: 'Perfect for startups and small teams beginning their cloud journey.',
    features: ['Cloud architecture review', 'Infrastructure as Code setup', 'Basic CI/CD pipeline', 'Monthly reporting', '8x5 support', '1 cloud provider'],
    cta: 'Get Started',
    featured: false,
  },
  {
    name: 'Growth',
    price: '$7,999',
    period: '/month',
    desc: 'For scaling companies that need robust cloud infrastructure and DevOps.',
    features: ['Everything in Starter', 'Multi-cloud strategy', 'Advanced CI/CD & GitOps', 'Cost optimization', 'Security hardening', '24/7 support', 'Dedicated engineer', 'Quarterly business review'],
    cta: 'Start Growing',
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    desc: 'For large organizations with complex, mission-critical cloud needs.',
    features: ['Everything in Growth', 'Custom AI/ML solutions', 'Full managed operations', 'Compliance & governance', 'Executive dashboard', 'On-site team option', 'SLA guarantees', 'Strategic roadmap'],
    cta: 'Contact Sales',
    featured: false,
  },
];

const Pricing = () => {
  return (
    <Layout>
      <section className="py-32 lg:py-40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-center max-w-[600px] mx-auto mb-20">
            <h1 className="section-title mb-6">simple, transparent <span className="text-bright-blue">pricing</span></h1>
            <p className="text-lg text-muted-foreground">No hidden fees. Scale up or down as your needs evolve.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {tiers.map(tier => (
              <div
                key={tier.name}
                className={`card-lift rounded-2xl p-8 lg:p-10 border ${
                  tier.featured
                    ? 'border-bright-blue bg-navy-dark text-primary-foreground scale-105 shadow-2xl'
                    : 'border-border bg-card'
                }`}
              >
                {tier.featured && (
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-bright-blue text-primary-foreground mb-4">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-display font-bold">{tier.name}</h3>
                <div className="mt-4 mb-2">
                  <span className="text-4xl font-display font-bold">{tier.price}</span>
                  <span className={`text-sm ${tier.featured ? 'opacity-60' : 'text-muted-foreground'}`}>{tier.period}</span>
                </div>
                <p className={`text-sm mb-8 ${tier.featured ? 'opacity-60' : 'text-muted-foreground'}`}>{tier.desc}</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <Check className={`w-4 h-4 flex-shrink-0 ${tier.featured ? 'text-bright-blue' : 'text-green-500'}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`arrow-slide w-full justify-center ${tier.featured ? 'btn-primary' : 'btn-outline'}`}
                >
                  {tier.cta}
                  <ArrowRight className="w-4 h-4 arrow-icon" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
