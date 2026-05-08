<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { 
 
  User, 
  Clock, 
  
  ArrowLeft, 
  Calendar,
  BookOpen,
  
  Tag
} from "lucide-react";

const API_URL = 'https://hor3mik7u1.execute-api.ap-south-1.amazonaws.com/Dev';
const BLOG_API_URL = `${API_URL}/cloudfirst-blog`;

type Blog = {
  PK: string;
  SK: string;
  EntityType: string;
  postId: string;
  title: string;
  author: string;
  content: string;
  readTime: string;
  category: string;
  imageUrl?: string;
  createdAt: string;
  updatedAt: string;
  status: string;
};

const BlogsPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;
    
    const fetchBlogById = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${BLOG_API_URL}/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const responseData = await response.json();
        console.log('Blog API Response:', responseData);
        console.log('Response structure:', JSON.stringify(responseData, null, 2));
        
        // Handle the response structure from new API
        // Your API returns data directly, not wrapped in 'data' property
        const blogData = responseData;
        console.log('Extracted blogData:', blogData);
        console.log('Root ID:', blogData.id);
        
        // Map API response fields to component expected fields
        if (blogData) {
          // Set postId from root id field for component compatibility
          blogData.postId = blogData.id;
          
          // API already returns imageUrl field directly
          // No need to map featured_image anymore
          
          // Map post_date to createdAt if needed
          if (blogData.post_date && !blogData.createdAt) {
            blogData.createdAt = blogData.post_date;
          }
        }
        setBlog(blogData);
      } catch (error) {
        console.error("Error fetching blog:", error);
        setError("Failed to load blog post");
        setBlog(null);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogById();
  }, [id]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

 

  // Default image if no imagePath provided
  const getDefaultImage = () => {
    return "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop&auto=format";
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center font-sans pt-20">
          <div className="text-center">
            <div className="relative flex justify-center items-center mb-4">
              <div className="animate-spin rounded-full h-20 w-20 border-4 border-blue-200"></div>
              <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-blue-600 absolute"></div>
            </div>
            <p className="text-xl text-gray-700 font-medium">Loading article...</p>
            <p className="text-sm text-gray-500 mt-2">Preparing content for you</p>
          </div>
        </div>
      </>
    );
  }

  if (error || !blog) {
    return (
      <>
        <Navbar />
        <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center font-sans pt-20">
          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-red-500" />
            </div>
            <h2 className="text-2xl font-light text-gray-800 mb-2">Article Not Found</h2>
            <p className="text-gray-600 mb-6">
              {error || "The article you're looking for doesn't exist or has been removed."}
            </p>
            <button
              onClick={() => navigate('/blog')}
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="font-sans w-full bg-gradient-to-br from-gray-50 via-white to-blue-50 min-h-screen">
        
        {/* Hero Banner Section */}
        <section className="relative w-full h-[60vh] bg-gradient-to-br from-blue-100 via-white to-purple-100 overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: `url('${blog.imageUrl || getDefaultImage()}')` 
            }}
          ></div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/80 to-purple-50/60"></div>
          
          {/* Animated Background Elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 w-32 h-32 border border-blue-300 rounded-full animate-pulse"></div>
            <div className="absolute bottom-32 right-20 w-24 h-24 border border-purple-300 rounded-full animate-bounce delay-300"></div>
            <div className="absolute top-1/2 right-1/3 w-16 h-16 border border-cyan-300 rounded-full animate-pulse delay-700"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 max-w-5xl mx-auto px-4 h-full flex items-center">
            <div className="text-left max-w-4xl">
              {/* Back Button */}
              <button
                onClick={() => navigate('/blog')}
                className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-6 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm font-medium">Back to Blog</span>
              </button>
              
              {/* Category Badge */}
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                  <Tag className="w-4 h-4" />
                  {blog.category}
                </span>
              </div>
              
              {/* Title */}
              <h1 className="text-4xl md:text-6xl font-light text-gray-900 mb-6 leading-tight">
                {blog.title}
              </h1>
              
              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  <span className="font-medium">{blog.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{formatDate(blog.createdAt)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{blog.readTime}</span>
                </div>
                
              </div>
              
             
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="max-w-4xl mx-auto px-4 py-16">
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 md:p-12">
            
            {/* Featured Image */}
            {blog.imageUrl && (
              <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-8 shadow-md">
                <img 
                  src={blog.imageUrl}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            
            {/* Article Body */}
            <article className="prose prose-lg max-w-none">
              <div 
                className="text-gray-700 leading-relaxed font-light text-lg"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            </article>

            {/* Article Footer */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                
                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{blog.author}</h4>
                  
                  </div>
                </div>

              
               
              </div>

              {/* Published/Updated Info */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Published on {formatDate(blog.createdAt)}</span>
                  {blog.updatedAt !== blog.createdAt && (
                    <span>Updated on {formatDate(blog.updatedAt)}</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="max-w-4xl mx-auto px-4 pb-16">
          <div className="flex justify-center">
            <button
              onClick={() => navigate('/blog')}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to All Articles
            </button>
          </div>
        </section>
      </div>

      
    </>
  );
};

export default BlogsPost;
=======
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

    // Extract the first <img src="..."> from HTML content (returns {src, cleanedContent})
    function extractFirstImageFromHtml(content: string): { src: string | null; cleaned: string } {
        if (!content) return { src: null, cleaned: content };
        const imgRegex = /<img[^>]+src=\"([^\"']+)\"[^>]*>/i;
        const match = content.match(imgRegex);
        if (!match) return { src: null, cleaned: content };
        const src = match[1];
        // remove only the first matched <img ...> tag
        const cleaned = content.replace(imgRegex, '').trim();
        return { src, cleaned };
    }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-[#f6fafd] dark:from-background dark:to-[#0a1622] flex flex-col">
      <Navbar />
      <section className="container mx-auto px-4 md:px-8 pt-36 pb-16 flex-1">
        <div className="max-w-6xl mx-auto">
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
                  {/* show cover: prefer post.coverImage -> post.imagePath -> first <img> inside content */}
              {(() => {
                const rawContent = post.content || "";
                const { src: firstImgSrc, cleaned } = extractFirstImageFromHtml(rawContent);
                const coverSrc = post.coverImage || post.imagePath || firstImgSrc;
                return (
                  <>
                    {coverSrc && (
                      <img src={coverSrc} alt={post.title} className="w-full h-64 object-cover object-center rounded-2xl mb-8" />
                    )}
                    <h1 className="text-3xl md:text-4xl font-black mb-4 font-display text-foreground drop-shadow-lg leading-tight">{post.title}</h1>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-6">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.createdAt || post.date).toLocaleDateString()}</span>
                      {post.author && <span className="ml-2">by {post.author}</span>}
                    </div>
                    <div className="prose prose-lg max-w-none text-foreground" 
                      dangerouslySetInnerHTML={{ __html: removeDuplicateTitle(cleaned, post.title) }} 
                    />
                    {/* Bottom back-link (same as top) */}
                    <div className="mt-8">
                      <Link to="/blog" className="inline-flex items-center gap-2 text-primary font-semibold">
                        <ArrowLeft className="w-4 h-4" /> Back to Blog
                      </Link>
                    </div>
                  </>
                );
              })() }
            </AnimatedSection>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BlogPost;
>>>>>>> 9e022dd14cd080f8ce67e225b385dbcbf33097bd
