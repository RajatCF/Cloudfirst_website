import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
 
 
import { Brain, User, Clock, ArrowRight, BookOpen, Search } from "lucide-react";
 
const API_URL = 'https://hor3mik7u1.execute-api.ap-south-1.amazonaws.com/Dev';
const BLOG_API_URL = `${API_URL}/cloudfirst-blog`;
 
type Blog = {
  PK?: string;
  SK?: string;
  EntityType?: string;
  postId?: string;
  id?: string;
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
 
// Default images for blogs without featured images
const techImages = [
  '1677442136019-21780ecad995',
  '1558494949-ef010cbdcc31',
  '1504384308090-c894fdcc538d',
  '1519389950473-47ba0277781c',
  '1498050108023-c5249f4df085',
  '1498050208025-a513f7df099b'
];
 
// Default image if no imageUrl provided
const getDefaultImage = () => {
  return "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop&auto=format";
};
 
const Blogs: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState<string>("");
  const [displayCount, setDisplayCount] = useState(6); // Show 6 blogs initially
  const navigate = useNavigate();
 
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        setError("");
       
        // Add timeout to prevent infinite loading
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
       
        const response = await fetch(`${BLOG_API_URL}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          signal: controller.signal
        });
 
        clearTimeout(timeoutId);
 
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
 
        const data = await response.json();
        console.log('API Response:', data);
 
        // Handle the response structure from new API
        const blogsArray = data.data || data || [];

        const unwrapDdbValue = (value: any): any => {
          if (!value || typeof value !== 'object' || Array.isArray(value)) return value;
          if (Object.prototype.hasOwnProperty.call(value, 'S')) return value.S;
          if (Object.prototype.hasOwnProperty.call(value, 'N')) return value.N;
          if (Object.prototype.hasOwnProperty.call(value, 'BOOL')) return value.BOOL;
          if (Object.prototype.hasOwnProperty.call(value, 'NULL')) return null;
          if (Object.prototype.hasOwnProperty.call(value, 'L') && Array.isArray(value.L)) return value.L.map(unwrapDdbValue);
          if (Object.prototype.hasOwnProperty.call(value, 'M') && value.M && typeof value.M === 'object') {
            const out: Record<string, any> = {};
            for (const [k, v] of Object.entries(value.M)) out[k] = unwrapDdbValue(v);
            return out;
          }
          return value;
        };

        const scalarString = (value: any): string => {
          const unwrapped = unwrapDdbValue(value);
          if (typeof unwrapped === 'string') return unwrapped;
          if (typeof unwrapped === 'number' || typeof unwrapped === 'boolean') return String(unwrapped);
          return '';
        };

        const normalizeDateValue = (value: unknown) => {
          const s = scalarString(value);
          if (!s) return '';
          if (/^\d+$/.test(s)) return new Date(Number(s)).toISOString();
          if (typeof value === 'number') return new Date(value).toISOString();
          if (typeof value === 'string') return value;
          return '';
        };

        const calculateReadTime = (content: string) => {
          const wordsPerMinute = 200;
          const words = stripHtml(content || '').trim().split(/\s+/).filter(Boolean).length;
          const minutes = Math.max(1, Math.ceil(words / wordsPerMinute));
          return `${minutes} min read`;
        };

        const normalizeBlog = (raw: any): Blog => {
          const item = unwrapDdbValue(raw);
          const rawId =
            scalarString(item?.id) ||
            scalarString(item?.postId) ||
            scalarString(item?.PK) ||
            scalarString(item?.SK) ||
            '';
          const createdAt =
            normalizeDateValue(
              item?.createdAt ??
                item?.created_at ??
                item?.post_date ??
                item?.postDate ??
                item?.createdOn ??
                item?.created ??
                item?.timestamp ??
                ''
            ) || '';
          const updatedAt =
            normalizeDateValue(
              item?.updatedAt ??
                item?.updated_at ??
                item?.updated ??
                item?.modifiedAt ??
                item?.modified_at ??
                createdAt
            ) || createdAt || '';

          return {
            PK: scalarString(item?.PK),
            SK: scalarString(item?.SK),
            EntityType: scalarString(item?.EntityType) || scalarString(item?.entityType),
            postId: scalarString(item?.postId) || rawId,
            id: scalarString(item?.id) || rawId,
            title: scalarString(item?.title) || scalarString(item?.post_title) || '',
            author: scalarString(item?.author) || scalarString(item?.post_author) || '',
            content: scalarString(item?.content) || scalarString(item?.post_content) || scalarString(item?.body) || '',
            readTime:
              scalarString(item?.readTime) ||
              scalarString(item?.read_time) ||
              calculateReadTime(
                scalarString(item?.content) || scalarString(item?.post_content) || scalarString(item?.body) || ''
              ),
            category: scalarString(item?.category) || scalarString(item?.post_category) || '',
            tags: unwrapDdbValue(item?.tags),
            imageUrl: scalarString(item?.imageUrl) || scalarString(item?.featured_image) || scalarString(item?.featuredImage),
            images: unwrapDdbValue(item?.images),
            createdAt,
            updatedAt,
            status: scalarString(item?.status),
          };
        };
       
        // Log the first blog to check ID fields
        if (blogsArray.length > 0) {
          console.log('First blog ID fields:', {
            PK: blogsArray[0].PK,
            postId: blogsArray[0].postId,
            id: blogsArray[0].id
          });
        }
       
        setBlogs(blogsArray.map((b: any) => normalizeBlog(b)));
       
        // If no blogs found, set empty array but don't show error
        if (blogsArray.length === 0) {
          console.log('No blogs found, showing empty state');
        }
       
      } catch (error: unknown) {
        const err = error as { name?: string; message?: string };
        console.error("Error fetching blogs:", err);
       
        if (err?.name === 'AbortError') {
          setError("Request timed out. Please check your connection and try again.");
        } else if ((err?.message || '').includes('NetworkError') || (err?.message || '').includes('Failed to fetch')) {
          setError("Network error. Please check your internet connection.");
        } else {
          setError("Failed to load blogs. Please try again later.");
        }
       
        // Set empty array as fallback
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    };
 
    fetchBlogs();
  }, []);
 
  // Helper function to strip HTML tags from content
  const stripHtml = (html: string) => {
    const tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };
 
  const truncateContent = (content: string, maxLength: number = 120) => {
    const plainText = stripHtml(content);
    return plainText.length > maxLength ? plainText.substring(0, maxLength) + "..." : plainText;
  };
 
  const filteredBlogs = blogs.filter(blog =>
    (blog.title || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
    stripHtml(blog.content || '').toLowerCase().includes(searchTerm.toLowerCase())
  );
 
  // Sort by creation date (newest first)
  const safeTime = (dateString?: string) => {
    if (!dateString) return 0;
    const t = new Date(dateString).getTime();
    return Number.isNaN(t) ? 0 : t;
  };
  const sortedBlogs = [...filteredBlogs].sort((a, b) => safeTime(b.createdAt) - safeTime(a.createdAt));
 
  // Featured blog is most recent
  const featuredBlog = sortedBlogs[0];
  const remainingBlogs = sortedBlogs.slice(1);
  const blogsToShow = remainingBlogs.slice(0, displayCount);
  const hasMoreBlogs = remainingBlogs.length > displayCount;
 
 
  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    const d = new Date(dateString);
    if (Number.isNaN(d.getTime())) return '';
    return d.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
 
  // Generate random views for display purposes
  // const getRandomViews = () => Math.floor(Math.random() * 1000) + 100;
 
  if (loading) {
    return (
      <>
        <Navbar />
        <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center font-sans pt-20">
          <div className="text-center max-w-md mx-auto px-4">
            <div className="relative mb-6 flex justify-center items-center">
              <div className="animate-spin rounded-full h-20 w-20 border-4 border-blue-200"></div>
              <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-blue-600 absolute"></div>
            </div>
            <h2 className="text-2xl text-gray-800 font-medium mb-2">Loading Articles</h2>
            <p className="text-gray-600 mb-4">Fetching the latest content from our blog...</p>
            <div className="flex items-center justify-center space-x-2">
              <div className="animate-bounce h-2 w-2 bg-blue-600 rounded-full"></div>
              <div className="animate-bounce h-2 w-2 bg-blue-600 rounded-full" style={{ animationDelay: '0.1s' }}></div>
              <div className="animate-bounce h-2 w-2 bg-blue-600 rounded-full" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </div>
        </div>
      </>
    );
  }
 
  // Retry function
  const retryFetch = () => {
    setError("");
    setLoading(true);
    // Trigger useEffect by changing a dependency or call fetchBlogs directly
    window.location.reload();
  };
 
  if (error) {
    return (
      <>
        <Navbar />
        <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center font-sans pt-20">
          <div className="text-center max-w-md mx-auto px-4">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Oops! Something went wrong</h2>
            <p className="text-gray-600 mb-6">{error}</p>
            <div className="space-y-3">
              <button
                onClick={retryFetch}
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors duration-200 font-medium"
              >
                Try Again
              </button>
              <button
                onClick={() => navigate('/')}
                className="w-full px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors duration-200 font-medium"
              >
                Go to Homepage
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
 
  return (
    <>
      <Navbar />
      <div className="font-sans w-full bg-gradient-to-br from-gray-50 via-white to-blue-50 min-h-screen">
       
        {/* Hero Banner Section */}
        <section
          className="relative w-full h-[400px] md:h-[600px] overflow-hidden flex items-center justify-center"
          style={{
            backgroundImage: "url('https://aifactory-assets.s3.ap-south-1.amazonaws.com/productsImg/productbg.jpg')",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
          <div className="relative container mx-auto px-4 text-center text-white z-10 max-w-xl">
            <h1 className="text-4xl md:text-5xl font-sans bg-gradient-to-r from-light-blue via-white to-bright-blue bg-clip-text text-transparent drop-shadow-xl mb-4 tracking-tight">
              CloudFirst Blogs
            </h1>
            <p className="text-lg md:text-xl font-sans font-light mx-auto max-w-md drop-shadow-lg mb-8">
              Discover our mission, vision, and the dedicated team powering CloudFirst's innovations.
            </p>
           
         
          </div>
        </section>
 
        {/* Search Section */}
        <section className="max-w-7xl mx-auto px-4 py-8">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-bright-blue/30 focus:border-transparent"
            />
          </div>
        </section>
 
        {/* Featured Article */}
        {featuredBlog && (
          <section className="max-w-7xl mx-auto px-4 mb-16">
            <div className="w-full bg-gradient-to-br from-bright-blue/10 via-white to-light-blue/10 rounded-3xl p-8 border border-bright-blue/15 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-bright-blue/10 text-bright-blue px-3 py-1 rounded-full text-xs font-medium">
                      Featured Article
                    </span>
                    <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
                      {featuredBlog.category}
                    </span>
                  </div>
                 
                  <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 leading-tight">
                    {featuredBlog.title}
                  </h3>
                 
                  <div className="text-gray-600 text-lg mb-6 leading-relaxed font-light">
                    <p>{truncateContent(featuredBlog.content, 200)}</p>
                  </div>
                 
                  <div className="flex items-center gap-6 text-gray-500 text-sm mb-6">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{featuredBlog.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{featuredBlog.readTime}</span>
                    </div>
                    {/* <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      <span>{getRandomViews().toLocaleString()}</span>
                    </div> */}
                  </div>
                 
                  <button
                    onClick={() => navigate(`/blog/${featuredBlog.id || featuredBlog.postId || featuredBlog.PK}`)}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-bright-blue to-light-blue text-white font-medium px-8 py-3 rounded-xl hover:from-bright-blue hover:to-light-blue transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Read Full Article <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
               
                <div className="relative">
                  <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={featuredBlog.imageUrl || getDefaultImage()}
                      alt="Featured Article"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-bright-blue to-light-blue rounded-full flex items-center justify-center shadow-lg">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
 
        {/* Recent Posts */}
        <section className="max-w-7xl mx-auto px-4 pb-20">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-bright-blue" />
              <h2 className="text-3xl font-light text-gray-800">Latest Articles</h2>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-sm text-gray-500">{remainingBlogs.length} articles found</div>
            </div>
          </div>
 
          {blogsToShow.length > 0 ? (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogsToShow.map((blog) => (
                  <article
                    key={blog.id || blog.postId || blog.PK}
                    className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group hover:scale-105"
                  >
                    <div className="h-48 bg-gradient-to-br from-bright-blue/10 to-light-blue/10 relative overflow-hidden">
                      <img
                        src={blog.imageUrl || getDefaultImage()}
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                          {blog.category}
                        </span>
                      </div>
                    </div>
                   
                    <div className="p-6">
                      <h3 className="text-xl font-medium text-gray-900 mb-3 leading-tight group-hover:text-bright-blue transition-colors">
                        {blog.title}
                      </h3>
 
                      <div className="text-gray-600 text-sm mb-4 leading-relaxed font-light">
                        <p>{truncateContent(blog.content, 100)}</p>
                      </div>
 
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <User className="w-3 h-3" />
                            <span>{blog.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{blog.readTime}</span>
                          </div>
                        </div>
                      </div>
 
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-gray-500">
                          {formatDate(blog.createdAt) || '—'}
                        </div>
 
                        <button
                          onClick={() => navigate(`/blog/${blog.id || blog.postId || blog.PK}`)}
                          className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center gap-1 transition-all duration-300 hover:gap-2"
                        >
                          Read More <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
 
              {/* Load More Button */}
              <div className="text-center mt-12">
                <button
                  onClick={() => hasMoreBlogs && setDisplayCount(prev => prev + 6)}
                  disabled={!hasMoreBlogs}
                  className={`inline-flex items-center gap-2 font-medium px-8 py-3 rounded-xl transition-all duration-300 transform shadow-lg ${
                    hasMoreBlogs
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 hover:scale-105 hover:shadow-xl cursor-pointer'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Load More Articles <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-sm text-gray-500 mt-3">
                  Showing {blogsToShow.length} of {remainingBlogs.length} articles
                  {!hasMoreBlogs && remainingBlogs.length > 0 && ' (All articles shown)'}
                  {remainingBlogs.length === 0 && ' (No articles to display)'}
                </p>
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-medium text-gray-700 mb-2">
                {blogs.length === 0 ? 'No blogs yet' : 'No articles found'}
              </h3>
              <p className="text-gray-500 mb-6">
                {blogs.length === 0
                  ? 'Check back soon for new posts.'
                  : 'Try adjusting your search terms'
                }
              </p>
            </div>
          )}
        </section>
      </div>
 
     
     
    </>
  );
};
 
export default Blogs;
 
 
