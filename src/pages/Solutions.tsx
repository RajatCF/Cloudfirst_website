import { useState } from 'react';
import Layout from '@/components/Layout';
import { Check } from 'lucide-react';

const solutions = [
  {
    id: 'cloud',
    label: 'Cloud Migration',
    title: 'Seamless Cloud Migration',
    desc: 'Move workloads to the cloud with zero downtime using AI-driven migration planning.',
    features: ['Automated dependency mapping', 'Zero-downtime migration', 'Cost projection modeling', 'Hybrid cloud support', 'Rollback strategies', 'Performance benchmarking'],
  },
  {
    id: 'devops',
    label: 'DevOps',
    title: 'DevOps Transformation',
    desc: 'Automate your entire software delivery lifecycle from commit to production.',
    features: ['CI/CD pipeline design', 'Infrastructure as Code', 'GitOps workflows', 'Automated testing', 'Release management', 'Observability setup'],
  },
  {
    id: 'security',
    label: 'Security',
    title: 'Cloud Security & Compliance',
    desc: 'Enterprise-grade security posture with continuous compliance monitoring.',
    features: ['Zero-trust architecture', 'Compliance automation', 'Threat detection', 'Identity management', 'Security audits', 'Incident response'],
  },
  {
    id: 'cost',
    label: 'Cost Optimization',
    title: 'FinOps & Cost Management',
    desc: 'Reduce cloud spend by 30-60% with AI-powered cost intelligence.',
    features: ['Spend analytics', 'Right-sizing recommendations', 'Reserved instance planning', 'Anomaly detection', 'Chargeback models', 'Waste elimination'],
  },
  {
    id: 'multicloud',
    label: 'Multi-Cloud',
    title: 'Multi-Cloud Strategy',
    desc: 'Leverage the best of every cloud provider with unified management.',
    features: ['Provider evaluation', 'Workload placement', 'Unified monitoring', 'Cross-cloud networking', 'Data sovereignty', 'Vendor lock-in prevention'],
  },
  {
    id: 'managed',
    label: 'Managed Services',
    title: '24/7 Managed Operations',
    desc: 'Let our engineers manage your infrastructure so you can focus on building.',
    features: ['24/7 monitoring', 'Incident management', 'Patch management', 'Performance tuning', 'Capacity planning', 'SLA guarantees'],
  },
];

const Solutions = () => {
  const [active, setActive] = useState(solutions[0].id);
  const activeSolution = solutions.find(s => s.id === active)!;

  return (
    <Layout>
      <section className="py-32 lg:py-40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-[700px] mb-16">
            <h1 className="section-title mb-6">solutions that <span className="text-bright-blue">deliver</span></h1>
            <p className="text-lg text-muted-foreground">Enterprise-grade solutions built with AI at the core.</p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-16 border-b border-border pb-4">
            {solutions.map(s => (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  active === s.id ? 'bg-bright-blue text-primary-foreground' : 'bg-muted text-muted-foreground hover:text-foreground'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">{activeSolution.title}</h2>
              <p className="text-lg text-muted-foreground">{activeSolution.desc}</p>
            </div>
            <div>
              <ul className="space-y-4">
                {activeSolution.features.map(f => (
                  <li key={f} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-green-600" />
                    </div>
                    <span className="text-base">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Solutions;
