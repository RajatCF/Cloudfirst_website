import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";

const posts = [
  { category: "FinOps", title: "5 ways enterprises are wasting money on cloud in 2024", author: "Rahul Sharma", date: "Dec 2024", readTime: "6 min", image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80", featured: true },
  { category: "Security", title: "Why zero-trust isn't just a buzzword for cloud-native teams", author: "Priya Nair", date: "Nov 2024", readTime: "8 min", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80", featured: false },
  { category: "AI/ML", title: "Building production-ready RAG pipelines on Vertex AI", author: "Vikram Kapoor", date: "Nov 2024", readTime: "10 min", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80", featured: false },
  { category: "Architecture", title: "When to use serverless and when not to — a practical guide", author: "Anika Gupta", date: "Oct 2024", readTime: "7 min", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80", featured: false },
  { category: "Migration", title: "Migration anti-patterns we see again and again (and how to avoid them)", author: "Rahul Sharma", date: "Oct 2024", readTime: "9 min", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80", featured: false },
  { category: "FinOps", title: "Committed use vs reserved instances: which should you choose?", author: "Priya Nair", date: "Sep 2024", readTime: "5 min", image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80", featured: false },
];

const catColors: Record<string, string> = {
  FinOps: "text-green-700 bg-green-50 border-green-100",
  Security: "text-red-700 bg-red-50 border-red-100",
  "AI/ML": "text-purple-700 bg-purple-50 border-purple-100",
  Architecture: "text-blue-700 bg-blue-50 border-blue-100",
  Migration: "text-teal-700 bg-teal-50 border-teal-100",
};

const categories = ["All", "FinOps", "Security", "AI/ML", "Architecture", "Migration"];

const BlogInsights: React.FC = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("All");
  const featured = posts.find(p => p.featured);
  const others = posts.filter(p => !p.featured && (active === "All" || p.category === active));

  return (
    <div className="min-h-screen bg-[#f7f8fa]">
      <Navbar />

      {/* Hero */}
      <div className="bg-white border-b border-gray-100 pt-16 lg:pt-20">
        <div className="max-w-6xl mx-auto px-6 pt-16 pb-10">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-orange-600 border border-orange-200 bg-orange-50 rounded-full px-3 py-1 mb-4">Resources</span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight" style={{ fontFamily: "'Georgia', serif" }}>Blog & insights</h1>
            <div className="flex flex-wrap gap-2">
              {categories.map(c => (
                <button key={c} onClick={() => setActive(c)} className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors ${active === c ? "bg-orange-500 text-white" : "bg-gray-100 text-gray-500 hover:bg-gray-200"}`}>{c}</button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Featured post */}
        {featured && (active === "All" || active === featured.category) && (
          <div className="mb-10">
            <div className="text-xs font-bold text-orange-600 uppercase tracking-wider mb-3">Featured</div>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-all flex flex-col md:flex-row">
              <img src={featured.image} alt={featured.title} className="w-full md:w-80 h-48 md:h-auto object-cover flex-shrink-0" />
              <div className="p-7 flex flex-col">
                <span className={`inline-block self-start text-[10px] font-bold border rounded px-2.5 py-1 mb-3 ${catColors[featured.category]}`}>{featured.category}</span>
                <h2 className="text-xl font-bold text-gray-900 mb-3 leading-snug flex-1" style={{ fontFamily: "'Georgia', serif" }}>{featured.title}</h2>
                <div className="flex items-center gap-3 text-xs text-gray-400 mt-auto">
                  <span>{featured.author}</span><span>·</span><span>{featured.date}</span><span>·</span><span>{featured.readTime} read</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {others.map(p => (
            <div key={p.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md hover:border-orange-200 transition-all flex flex-col cursor-pointer">
              <img src={p.image} alt={p.title} className="w-full h-40 object-cover" />
              <div className="p-5 flex-1 flex flex-col">
                <span className={`inline-block self-start text-[10px] font-bold border rounded px-2 py-0.5 mb-3 ${catColors[p.category]}`}>{p.category}</span>
                <h3 className="text-sm font-bold text-gray-900 mb-3 leading-snug flex-1" style={{ fontFamily: "'Georgia', serif" }}>{p.title}</h3>
                <div className="flex items-center gap-2 text-[11px] text-gray-400 mt-auto">
                  <span>{p.author}</span><span>·</span><span>{p.date}</span><span>·</span><span>{p.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter CTA */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="bg-[#1a1200] rounded-2xl px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(ellipse at 80% 50%, #ea580c 0%, transparent 60%)" }} />
          <div className="relative z-10 max-w-lg">
            <h2 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "'Georgia', serif" }}>Stay ahead of the cloud curve</h2>
            <p className="text-white/60 text-sm leading-relaxed">Monthly insights from CloudFirst engineers — no filler, no vendor noise. Just practical cloud guidance.</p>
          </div>
          <div className="relative z-10 flex flex-col gap-3 flex-shrink-0">
            <button onClick={() => navigate("/contact")} className="px-7 py-3 bg-orange-500 hover:bg-orange-400 text-white text-sm font-bold rounded-lg transition-colors whitespace-nowrap">Subscribe to newsletter →</button>
            <button onClick={() => navigate(-1)} className="text-xs text-white/40 hover:text-white/70 transition-colors text-center">← Back</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogInsights;
