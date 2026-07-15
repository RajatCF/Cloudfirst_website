import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  buildBlogPath,
  getBlogSlug,
  resolveBlogIdFromParam,
} from "@/lib/blogUtils";
import {
  User,
  Clock,
  ArrowLeft,
  Calendar,
  BookOpen,
  Tag,
} from "lucide-react";

const API_URL = 'https://hor3mik7u1.execute-api.ap-south-1.amazonaws.com/Dev';
const BLOG_API_URL = `${API_URL}/cloudfirst-blog`;

type Blog = {
  PK: string;
  SK: string;
  EntityType: string;
  postId: string;
  title: string;
  slug?: string;
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
  const { slug: slugParam } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [allBlogs, setAllBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  const stripHtml = (html: string) => {
    const tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

  const calculateReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const words = stripHtml(content || '').trim().split(/\s+/).filter(Boolean).length;
    const minutes = Math.max(1, Math.ceil(words / wordsPerMinute));
    return `${minutes} min read`;
  };

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
      EntityType: scalarString(item?.EntityType) || scalarString(item?.entityType) || 'blog',
      postId: scalarString(item?.postId) || rawId,
      title: scalarString(item?.title) || scalarString(item?.post_title) || '',
      slug: scalarString(item?.slug) || undefined,
      author: scalarString(item?.author) || scalarString(item?.post_author) || '',
      content: scalarString(item?.content) || scalarString(item?.post_content) || scalarString(item?.body) || '',
      readTime:
        scalarString(item?.readTime) ||
        scalarString(item?.read_time) ||
        calculateReadTime(scalarString(item?.content) || scalarString(item?.post_content) || scalarString(item?.body) || ''),
      category: scalarString(item?.category) || scalarString(item?.post_category) || '',
      imageUrl: scalarString(item?.imageUrl) || scalarString(item?.featured_image) || scalarString(item?.featuredImage) || undefined,
      createdAt,
      updatedAt,
      status: scalarString(item?.status) || 'published',
    };
  };

  const tryParseJson = (value: any) => {
    if (typeof value !== 'string') return value;
    const trimmed = value.trim();
    if (!trimmed) return value;
    if (!(trimmed.startsWith('{') || trimmed.startsWith('['))) return value;
    try {
      return JSON.parse(trimmed);
    } catch {
      return value;
    }
  };

  const extractBlogPayload = (responseData: any) => {
    let data = tryParseJson(responseData);

    if (data && typeof data === 'object') {
      // Detail API returns Lambda proxy envelope: { statusCode, headers, body: { blog } | { error } }
      const statusCode = (data as any).statusCode;
      if (typeof statusCode === 'number' && 'body' in (data as object)) {
        if (statusCode >= 400) return null;
        const body = tryParseJson((data as any).body);
        data = body;
      } else if (typeof (data as any).body === 'string') {
        const parsedBody = tryParseJson((data as any).body);
        if (parsedBody && parsedBody !== (data as any).body) data = parsedBody;
      }

      if (data && typeof data === 'object') {
        const wrapped =
          (data as any).data ??
          (data as any).Item ??
          (data as any).blog;
        if (wrapped !== undefined) data = tryParseJson(wrapped);
      }
    }

    if (Array.isArray(data)) return data[0] ?? null;
    if (data && typeof data === 'object' && (data as any).error && !(data as any).title) {
      return null;
    }
    return data ?? null;
  };

  useEffect(() => {
    if (!slugParam) return;

    const fetchBlog = async () => {
      try {
        setLoading(true);
        setError("");

        const listResponse = await fetch(BLOG_API_URL, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        let blogsForLookup: Blog[] = [];
        if (listResponse.ok) {
          const listData = await listResponse.json();
          const blogsArray = listData.data || listData || [];
          blogsForLookup = blogsArray.map((item: unknown) => normalizeBlog(item));
          setAllBlogs(blogsForLookup);
        }

        const lookupSources = blogsForLookup.map((item) => ({
          title: item.title,
          slug: item.slug,
          id: item.postId || item.PK,
          postId: item.postId,
          PK: item.PK,
        }));

        const blogId = resolveBlogIdFromParam(slugParam, lookupSources);

        // Prefer the list item when available (includes full content) so a detail
        // API envelope/parse issue never blocks opening a known post.
        const fromList = blogId
          ? blogsForLookup.find((item) => item.postId === blogId)
          : blogsForLookup.find(
              (item) =>
                getBlogSlug({ title: item.title, slug: item.slug, id: item.postId, postId: item.postId, PK: item.PK }) ===
                slugParam,
            );

        if (fromList?.title || fromList?.content) {
          setBlog(fromList);
          // Still refresh from detail API when possible, but don't fail the page if it 404s.
        }

        if (!blogId && !fromList) {
          throw new Error("Blog not found");
        }

        if (blogId) {
          const response = await fetch(`${BLOG_API_URL}/${blogId}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          });

          const responseData = await response.json();
          const raw = extractBlogPayload(responseData);

          if (raw) {
            const normalized = normalizeBlog(raw);
            if (normalized.title || normalized.content) {
              setBlog(normalized);
              return;
            }
          }

          if (fromList?.title || fromList?.content) {
            return;
          }

          setError("Failed to load blog post");
          setBlog(null);
          return;
        }

        if (!fromList) {
          setError("Failed to load blog post");
          setBlog(null);
        }
      } catch (fetchError) {
        console.error("Error fetching blog:", fetchError);
        setError("Failed to load blog post");
        setBlog(null);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slugParam]);

  useEffect(() => {
    if (!blog || !slugParam) return;

    const canonicalPath = buildBlogPath(
      { title: blog.title, slug: blog.slug, id: blog.postId, postId: blog.postId, PK: blog.PK },
      allBlogs.map((item) => ({
        title: item.title,
        slug: item.slug,
        id: item.postId,
        postId: item.postId,
        PK: item.PK,
      })),
    );
    const canonicalSlug = canonicalPath.replace("/blog/", "");

    if (slugParam !== canonicalSlug) {
      navigate(canonicalPath, { replace: true });
    }
  }, [blog, slugParam, allBlogs, navigate]);

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
            <div className="text-left max-w-5xl">
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
                  <span>{formatDate(blog.createdAt) || '—'}</span>
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
        <section className="max-w-5xl lg:max-w-6xl mx-auto px-4 py-16">
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 md:p-12">
            
            {/* Featured Image */}
            {blog.imageUrl && (
              <div className="w-full rounded-2xl overflow-hidden mb-8 shadow-md bg-gray-50">
                <img 
                  src={blog.imageUrl}
                  alt={blog.title}
                  className="w-full h-auto block"
                />
              </div>
            )}
            
            {/* Article Body */}
            <article className="prose prose-lg max-w-none break-words">
              <div 
                className="text-gray-700 leading-relaxed font-light text-lg break-words"
                style={{ overflowWrap: 'anywhere', wordBreak: 'break-word' }}
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
                  <span>Published on {formatDate(blog.createdAt) || '—'}</span>
                  {blog.updatedAt !== blog.createdAt && (
                    <span>Updated on {formatDate(blog.updatedAt) || '—'}</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="max-w-5xl lg:max-w-6xl mx-auto px-4 pb-16">
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
