import { useState } from 'react';
import Layout from '@/components/Layout';
import Carousel from '@/components/Carousel';

const categories = ['All', 'FinOps', 'DevOps', 'Security', 'AI/ML', 'Cloud', 'Data'];

const articles = [
  { title: 'The Rise of FinOps: Why Every Enterprise Needs Cost Intelligence', category: 'FinOps', date: 'Feb 20, 2026', readTime: '5 min', excerpt: 'How AI-driven cost analytics are transforming cloud financial management.' },
  { title: 'Zero-Trust Architecture in Multi-Cloud Environments', category: 'Security', date: 'Feb 18, 2026', readTime: '8 min', excerpt: 'Building defense-in-depth across AWS, Azure, and GCP.' },
  { title: 'GitOps at Scale: Lessons from 100 Deployments', category: 'DevOps', date: 'Feb 15, 2026', readTime: '6 min', excerpt: 'Practical patterns for managing infrastructure as code across teams.' },
  { title: 'LLMs in Production: A Platform Engineer\'s Guide', category: 'AI/ML', date: 'Feb 12, 2026', readTime: '10 min', excerpt: 'From prototype to production with enterprise-grade LLM infrastructure.' },
  { title: 'Kubernetes Cost Optimization: Beyond Right-Sizing', category: 'FinOps', date: 'Feb 10, 2026', readTime: '7 min', excerpt: 'Advanced strategies for reducing K8s spend without sacrificing performance.' },
  { title: 'The Modern Data Stack on Cloud-Native Infrastructure', category: 'Data', date: 'Feb 8, 2026', readTime: '9 min', excerpt: 'Building scalable data pipelines with serverless architectures.' },
  { title: 'Cloud Migration Anti-Patterns to Avoid', category: 'Cloud', date: 'Feb 5, 2026', readTime: '6 min', excerpt: 'Common mistakes enterprises make during cloud transformation.' },
  { title: 'AI-Powered Incident Response: The Next Frontier', category: 'DevOps', date: 'Feb 3, 2026', readTime: '5 min', excerpt: 'How machine learning is revolutionizing on-call operations.' },
  { title: 'Securing AI Workloads in the Enterprise', category: 'Security', date: 'Jan 30, 2026', readTime: '8 min', excerpt: 'Best practices for securing LLM pipelines and model endpoints.' },
  { title: 'Multi-Cloud Networking: A Practical Approach', category: 'Cloud', date: 'Jan 28, 2026', readTime: '7 min', excerpt: 'Connecting workloads across providers with minimal latency.' },
  { title: 'The Death of Lift-and-Shift', category: 'Cloud', date: 'Jan 25, 2026', readTime: '4 min', excerpt: 'Why re-platforming is the new standard for cloud migration.' },
  { title: 'Real-Time ML Feature Stores on Kubernetes', category: 'AI/ML', date: 'Jan 22, 2026', readTime: '11 min', excerpt: 'Building low-latency feature serving infrastructure for production ML.' },
];

const Insights = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const filtered = activeCategory === 'All' ? articles : articles.filter(a => a.category === activeCategory);
  const carouselItems = articles.slice(0, 4);

  
  return (
    <Layout>
      <section className="py-32 lg:py-40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-[700px] mb-12">
            <h1 className="section-title mb-6">insights & <span className="text-bright-blue">perspectives</span></h1>
            <p className="text-lg text-muted-foreground">Deep dives into cloud, AI, and modern engineering practices.</p>
          </div>

          {/* Carousel */}
          <Carousel
            items={carouselItems.map((a, i) => ({
              ...a,
              type: a.category === 'FinOps' ? 'case study' : 'news',
              image: [
                'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
              ][i % 4]
            }))}
          />

          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat ? 'bg-bright-blue text-primary-foreground' : 'bg-muted text-muted-foreground hover:text-foreground'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filtered.map((article, i) => (
              <div
                key={i}
                className="card-lift h-[220px] sm:h-[230px] p-6 rounded-2xl border border-border bg-card cursor-pointer group flex flex-col"
              >
                <span className="inline-block w-fit px-3 py-1 rounded-full text-xs font-medium bg-bright-blue/10 text-bright-blue mb-4">
                  {article.category}
                </span>
                <h3
                  className="text-lg font-display font-bold mb-3 group-hover:text-bright-blue transition-colors leading-snug"
                  style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {article.title}
                </h3>
                <p
                  className="text-sm text-muted-foreground leading-relaxed"
                  style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {article.excerpt}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Insights;
