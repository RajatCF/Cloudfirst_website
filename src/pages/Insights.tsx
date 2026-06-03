import { useState } from 'react';
import Layout from '@/components/Layout';

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

const featuredImages = [
  'https://cloudfirst-website-assets.s3.ap-south-1.amazonaws.com/All_image/insights/image1.jpg',
  'https://cloudfirst-website-assets.s3.ap-south-1.amazonaws.com/All_image/insights/image2.jpg',
  'https://cloudfirst-website-assets.s3.ap-south-1.amazonaws.com/All_image/insights/image3.jpg',
  'https://cloudfirst-website-assets.s3.ap-south-1.amazonaws.com/All_image/insights/image4.jpg',
  'https://cloudfirst-website-assets.s3.ap-south-1.amazonaws.com/All_image/insights/image5.jpg',
];

const Insights = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const filtered = activeCategory === 'All' ? articles : articles.filter(a => a.category === activeCategory);
  const featured = articles.slice(0, 4).map((a, idx) => ({ ...a, image: featuredImages[idx % featuredImages.length] }));
  const visibleCards = filtered.slice(0, 6);

  const getTagClassName = (category: string) => {
    const key = category.toLowerCase();
    if (key.includes('finops')) return 'bg-amber-50 text-amber-700 border border-amber-100';
    if (key.includes('devops')) return 'bg-sky-50 text-sky-700 border border-sky-100';
    if (key.includes('security')) return 'bg-emerald-50 text-emerald-700 border border-emerald-100';
    if (key.includes('ai/ml') || key.includes('ai')) return 'bg-violet-50 text-violet-700 border border-violet-100';
    if (key.includes('cloud')) return 'bg-blue-50 text-blue-700 border border-blue-100';
    if (key.includes('data')) return 'bg-indigo-50 text-indigo-700 border border-indigo-100';
    return 'bg-gray-50 text-gray-700 border border-gray-100';
  };

  
  return (
    <Layout>
      <section className="py-32 lg:py-40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-[700px] mb-12">
            <h1 className="section-title mb-6">insights & <span className="text-bright-blue">perspectives</span></h1>
            <p className="text-lg text-muted-foreground">Deep dives into cloud, AI, and modern engineering practices.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {featured.map((item, idx) => (
              <div
                key={`${item.title}-${idx}`}
                className="rounded-2xl overflow-hidden border border-border bg-card shadow-lg"
              >
                <div className="relative h-48 md:h-56">
                  <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-white/15 border border-white/20">
                      {item.category}
                    </span>
                    <div className="mt-3 text-lg md:text-xl font-semibold leading-snug">
                      {item.title}
                    </div>
                    <div className="mt-2 text-sm text-white/85 leading-relaxed">
                      {item.excerpt}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleCards.map((article, i) => (
              <div
                key={i}
                className="card-lift h-[220px] sm:h-[230px] p-6 rounded-2xl border border-border bg-card cursor-pointer group flex flex-col"
              >
                <span className={`inline-block w-fit px-3 py-1 rounded-full text-xs font-semibold mb-4 ${getTagClassName(article.category)}`}>
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
