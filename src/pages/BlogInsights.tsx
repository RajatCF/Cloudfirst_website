import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";

const API_URL = 'https://hor3mik7u1.execute-api.ap-south-1.amazonaws.com/Dev';
const BLOG_API_URL = `${API_URL}/cloudfirst-blog`;

type Blog = {
  PK?: string;
  SK?: string;
  EntityType?: string;
  postId?: string;
  title: string;
  author: string;
  content: string;
  readTime?: string;
  category: string;
  tags?: string[];
  imageUrl?: string;
  images?: string[];
  createdAt?: string;
  updatedAt?: string;
  status?: string;
};

const BlogInsights: React.FC = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState("All");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        
        const response = await fetch(`${BLOG_API_URL}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Blog Insights API Response:', data);
        
        // Handle the response structure from new API
        const blogsArray = data.data || data || [];
        setPosts(blogsArray);
        
      } catch (error: any) {
        console.error("Error fetching blogs for insights:", error);
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const catColors: Record<string, string> = {
    FinOps: "text-green-700 bg-green-50 border-green-100",
    Security: "text-red-700 bg-red-50 border-red-100",
    "AI/ML": "text-purple-700 bg-purple-50 border-purple-100",
    Architecture: "text-blue-700 bg-blue-50 border-blue-100",
    Migration: "text-teal-700 bg-teal-50 border-teal-100",
  };

  const categories = ["All", "FinOps", "Security", "AI/ML", "Architecture", "Migration"];

  const calculateReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const words = content.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getDefaultImage = () => {
    return "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop&auto=format";
  };

  const featured = posts.find(p => p.imageUrl && posts.indexOf(p) === 0);
  const others = posts.filter(p => !featured || (featured && p.postId !== featured.postId) || (active === "All" || p.category === active));

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center">
          <div className="text-center">
            <div className="relative flex justify-center items-center mb-4">
              <div className="animate-spin rounded-full h-20 w-20 border-4 border-blue-200"></div>
              <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-blue-600 absolute"></div>
            </div>
            <p className="text-xl text-gray-700 font-medium">Loading insights...</p>
            <p className="text-sm text-gray-500 mt-2">Fetching latest blog posts</p>
          </div>
        </div>
      </>
    );
  }

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
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-all flex flex-col md:flex-row cursor-pointer">
              <img src={featured.imageUrl || getDefaultImage()} alt={featured.title} className="w-full md:w-80 h-48 md:h-auto object-cover flex-shrink-0" />
              <div className="p-7 flex flex-col">
                <span className={`inline-block self-start text-[10px] font-bold border rounded px-2.5 py-1 mb-3 ${catColors[featured.category as keyof typeof catColors] || 'text-gray-700 bg-gray-50 border-gray-100'}`}>{featured.category}</span>
                <h2 className="text-xl font-bold text-gray-900 mb-3 leading-snug flex-1" style={{ fontFamily: "'Georgia', serif" }}>{featured.title}</h2>
                <div className="flex items-center gap-3 text-xs text-gray-400 mt-auto">
                  <span>{featured.author}</span><span>·</span><span>{formatDate(featured.createdAt || '')}</span><span>·</span><span>{featured.readTime || calculateReadTime(featured.content || '')}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {others.map(p => (
            <div key={p.postId} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md hover:border-orange-200 transition-all flex flex-col cursor-pointer">
              <img src={p.imageUrl || getDefaultImage()} alt={p.title} className="w-full h-40 object-cover" />
              <div className="p-5 flex-1 flex flex-col">
                <span className={`inline-block self-start text-[10px] font-bold border rounded px-2 py-0.5 mb-3 ${catColors[p.category as keyof typeof catColors] || 'text-gray-700 bg-gray-50 border-gray-100'}`}>{p.category}</span>
                <h3 className="text-sm font-bold text-gray-900 mb-3 leading-snug flex-1" style={{ fontFamily: "'Georgia', serif" }}>{p.title}</h3>
                <div className="flex items-center gap-2 text-[11px] text-gray-400 mt-auto">
                  <span>{p.author}</span><span>·</span><span>{formatDate(p.createdAt || '')}</span><span>·</span><span>{p.readTime || calculateReadTime(p.content || '')}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {posts.length === 0 && !loading && (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="text-2xl text-gray-400">📝</div>
            </div>
            <h3 className="text-xl font-medium text-gray-700 mb-2">No blog posts yet</h3>
            <p className="text-gray-500 mb-6">Start creating amazing content to see it here!</p>
            <button
              onClick={() => navigate('/create-blog')}
              className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-xl hover:bg-orange-600 transition-colors"
            >
              Create First Blog
            </button>
          </div>
        )}
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
