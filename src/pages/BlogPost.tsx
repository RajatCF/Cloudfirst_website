import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, ArrowLeft } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const API_BASE_URL = "https://hor3mik7u1.execute-api.ap-south-1.amazonaws.com/Dev";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    setError(null);
    fetch(`${API_BASE_URL}/posts`)
      .then((res) => res.json())
      .then((data) => {
        const postsArr = Array.isArray(data.posts) ? data.posts : [];
        const found = postsArr.find((p: any, idx: number) => p.id === id || String(idx) === id);
        setPost(found || null);
      })
      .catch(() => setError("Failed to load blog post."))
      .finally(() => setLoading(false));
  }, [id]);

    // Utility to remove duplicate <h1> title from content
    function removeDuplicateTitle(content: string, title: string): string {
        if (!content || !title) return content;
        // Regex to match <h1>...</h1> containing the title (with or without span)
        const h1Regex = new RegExp(`<h1[^>]*>\\s*(<span[^>]*>)?\\s*${escapeRegExp(title)}\\s*(<\\/span>)?\\s*<\\/h1>`, 'i');
        return content.replace(h1Regex, '').trim();
    }

    // Escape regex special characters in title
    function escapeRegExp(str: string): string {
        return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-[#f6fafd] dark:from-background dark:to-[#0a1622] flex flex-col">
      <Navbar />
      <section className="container mx-auto px-4 md:px-8 pt-36 pb-16 flex-1">
        <div className="max-w-3xl mx-auto">
          <Link to="/blog" className="inline-flex items-center gap-2 text-primary font-semibold mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          {loading ? (
            <div className="flex justify-center py-32">
              <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : error ? (
            <div className="text-center py-32 text-red-600 text-lg font-semibold">{error}</div>
          ) : !post ? (
            <div className="text-center py-32 text-muted-foreground text-lg">Blog post not found.</div>
          ) : (
            <AnimatedSection className="bg-white/90 dark:bg-[#101624] rounded-3xl shadow-xl border border-border p-8 md:p-12">
              {post.coverImage && (
                <img src={post.coverImage || post.imagePath} alt={post.title} className="w-full h-64 object-cover object-center rounded-2xl mb-8" />
              )}
              <h1 className="text-3xl md:text-4xl font-black mb-4 font-display text-foreground drop-shadow-lg leading-tight">{post.title}</h1>
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-6">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.createdAt || post.date).toLocaleDateString()}</span>
                {post.author && <span className="ml-2">by {post.author}</span>}
              </div>
            <div className="prose prose-lg max-w-none text-foreground" 
              dangerouslySetInnerHTML={{ __html: removeDuplicateTitle(post.content, post.title) }} 
            />
            </AnimatedSection>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BlogPost;
