import Layout from '@/components/Layout';
import { Linkedin } from 'lucide-react';

const timeline = [
  { year: '2020', title: 'Founded', desc: 'CloudFirst launched with a mission to bring AI-native consulting to the enterprise.' },
  { year: '2021', title: 'First 50 Clients', desc: 'Expanded across FinTech and Healthcare verticals with 100% client retention.' },
  { year: '2022', title: 'Global Expansion', desc: 'Opened offices in New York and London, growing to 150+ engineers.' },
  { year: '2023', title: 'AI-Native Pivot', desc: 'Integrated generative AI into every service offering and internal tool.' },
  { year: '2024', title: '500+ Engagements', desc: 'Reached half a thousand successful cloud transformations worldwide.' },
  { year: '2025', title: 'Industry Leader', desc: 'Named a leader in cloud consultancy by Forrester and Gartner.' },
];

const team = [
  { name: 'Sarah Chen', role: 'CEO & Co-Founder', bio: 'Ex-Google Cloud, 15 years in enterprise transformation.' },
  { name: 'Marcus Williams', role: 'CTO', bio: 'Former AWS principal engineer, Kubernetes contributor.' },
  { name: 'Priya Sharma', role: 'VP Engineering', bio: 'Led platform teams at Netflix and Stripe.' },
  { name: 'James O\'Brien', role: 'Head of AI', bio: 'PhD in ML, ex-DeepMind research scientist.' },
  { name: 'Aisha Patel', role: 'Head of FinOps', bio: 'Created FinOps practices at 3 Fortune 500 companies.' },
  { name: 'David Kim', role: 'Head of Security', bio: 'CISO background, ISO 27001 and SOC2 specialist.' },
];

const partners = ['Amazon Web Services', 'Microsoft Azure', 'Google Cloud', 'HashiCorp', 'Datadog', 'Snowflake'];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-32 lg:py-40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-[800px]">
            <h1 className="section-title mb-6">who <span className="text-bright-blue">we are</span></h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              CloudFirst is an AI-native, engineering-led cloud consultancy. We don't just advise—we build, deploy, and scale alongside your team.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-navy-dark text-primary-foreground py-32 lg:py-40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <h2 className="section-title mb-16">our <span className="text-light-blue">journey</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {timeline.map(item => (
              <div key={item.year} className="border-l-2 border-bright-blue/30 pl-6">
                <span className="text-bright-blue font-display font-bold text-2xl">{item.year}</span>
                <h3 className="text-xl font-display font-bold mt-2 mb-2">{item.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-32 lg:py-40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <h2 className="section-title mb-16">leadership <span className="text-bright-blue">team</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map(member => (
              <div key={member.name} className="card-lift p-8 rounded-2xl border border-border bg-card">
                <div className="w-16 h-16 rounded-full bg-muted mb-6 flex items-center justify-center">
                  <span className="font-display font-bold text-xl text-bright-blue">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-display font-bold">{member.name}</h3>
                <p className="text-sm text-bright-blue font-medium mt-1">{member.role}</p>
                <p className="text-sm text-muted-foreground mt-3">{member.bio}</p>
                <a href="#" className="inline-flex mt-4 text-muted-foreground hover:text-bright-blue transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="bg-light-blue py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-2xl font-display font-bold mb-12">Trusted Technology Partners</h2>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            {partners.map(partner => (
              <span key={partner} className="text-sm font-medium text-muted-foreground tracking-wide uppercase">{partner}</span>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
