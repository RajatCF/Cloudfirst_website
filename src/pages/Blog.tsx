import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const API_BASE_URL = "https://hor3mik7u1.execute-api.ap-south-1.amazonaws.com/Dev";

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  author?: string;
  createdAt: string;
  coverImage?: string;
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE_URL}/posts`);
      if (!res.ok) throw new Error("Failed to fetch blog posts");
      const data = await res.json();
      // The API returns { posts: [...] }
      const postsArr = Array.isArray(data.posts) ? data.posts : [];
      // Map API fields to BlogPost interface
      setPosts(
        postsArr.map((post: any, idx: number) => ({
          id: post.id || idx.toString(),
          title: post.title || "Untitled",
          content: post.content || "",
          author: post.author || post.createdBy || "",
          createdAt: post.createdAt || post.date || new Date().toISOString(),
          coverImage: post.coverImage || post.imagePath || undefined,
        }))
      );
    } catch (err) {
      setError("Failed to load blog posts. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-[#f6fafd] dark:from-background dark:to-[#0a1622] flex flex-col">
      <Navbar />
      {/* Hero Section (matches site style) */}
      <section className="relative overflow-hidden min-h-[60vh] flex items-center justify-center bg-gradient-to-tr from-primary/5 to-cyan-100/10 dark:from-background dark:to-[#0a1622]">
        {/* Decorative Gradient & Image */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-gradient-to-tr from-primary/30 to-cyan-400/10 blur-3xl opacity-60 rounded-full" />
        </div>
        {/* Blog hero image removed for clarity and to avoid empty/404 image */}
        <AnimatedSection className="relative z-10 text-left max-w-2xl px-6 py-16 md:py-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/10 bg-primary/10 text-primary font-semibold text-xs mb-6 shadow-sm">
            <Calendar className="w-4 h-4" />
            CloudFirst Blog
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4 font-display text-foreground drop-shadow-lg leading-tight">Insights, Stories & Updates</h1>
          <p className="text-muted-foreground text-lg max-w-xl mb-4">Stay ahead in cloud, tech, and innovation with our expert articles and news.</p>
        </AnimatedSection>
      </section>

      {/* Blog Grid */}
      <section className="container mx-auto px-4 md:px-8 pb-24 flex-1">
        {loading ? (
          <div className="flex justify-center py-32">
            <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : error ? (
          <div className="text-center py-32 text-red-600 text-lg font-semibold">{error}</div>
        ) : posts.length === 0 ? (
          <div className="text-center py-32 text-muted-foreground text-lg">No blog posts found.</div>
        ) : (
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: i * 0.07, duration: 0.6, type: "spring" }}
                className="group relative bg-white/90 dark:bg-[#101624] rounded-3xl shadow-xl border border-border overflow-hidden flex flex-col hover:scale-[1.025] hover:shadow-2xl transition-all duration-300"
              >
                {post.coverImage && (
                  <div className="relative w-full h-56 overflow-hidden">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                )}
                <div className="p-7 flex flex-col flex-1">
                  <h2 className="text-2xl font-bold mb-2 text-foreground font-display group-hover:text-primary transition-colors duration-200 line-clamp-2">
                    {post.title}
                  </h2>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                    {post.author && <span className="ml-2">by {post.author}</span>}
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-4" dangerouslySetInnerHTML={{ __html: post.content }} />
                  <div className="mt-auto pt-2">
                    <a
                      href={`/blog/${post.id}`}
                      className="inline-block px-5 py-2 rounded-full bg-primary text-primary-foreground font-semibold text-sm shadow hover:bg-primary/90 transition-all"
                    >
                      Read More
                    </a>
                  </div>
                </div>
                <div className="absolute left-0 top-0 w-full h-2 bg-gradient-to-r from-primary/70 to-cyan-400/40 opacity-70" />
              </motion.div>
            ))}
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
};

export default Blog;
