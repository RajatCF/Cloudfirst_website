import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { ArrowLeft, Save, Upload, Eye, Clock, User, Tag, FileText, X, Edit2, Trash2, Plus } from 'lucide-react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { slugify } from '../lib/blogUtils';

const API_URL = 'https://hor3mik7u1.execute-api.ap-south-1.amazonaws.com/Dev';
const BLOG_API_URL = `${API_URL}/cloudfirst-blog`;
const BLOG_CREATE_URL = `${API_URL}/cloudfirst-blogs`;
 
interface BlogFormData {
  title: string;
  author: string;
  content: string;
  category: string;
  tags: string[];
  imageUrl: string;
  images: string[];
  status: string;
}

interface BlogItem extends Partial<BlogFormData> {
  id?: string;
  postId?: string;
  PK?: string;
  createdAt?: string;
}
 
const CreateBlog: React.FC = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [blogs, setBlogs] = useState<BlogItem[]>([]);
  const [blogsLoading, setBlogsLoading] = useState(false);
  const [editingBlog, setEditingBlog] = useState<BlogItem | null>(null);
  const [showBlogList, setShowBlogList] = useState(true);
 
  const ADMIN_PASSWORD = (import.meta.env.VITE_BLOG_ADMIN_PASSWORD ?? '').trim();
 
  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordError('');
    if (!ADMIN_PASSWORD) {
      setPasswordError('Admin password is not configured.');
      setPassword('');
      return;
    }
   
    if (password.trim() === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      fetchBlogs();
    } else {
      setPasswordError('Incorrect password. Please try again.');
      setPassword('');
    }
  };
 
  const fetchBlogs = async () => {
    try {
      setBlogsLoading(true);
      setError('');
     
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
      console.log('API Response in CreateBlog:', data);
 
      // Handle the response structure from new API
      const blogsArray = data.data || data || [];
      console.log('Blogs array:', blogsArray);
     
      setBlogs(blogsArray);
    } catch (error: unknown) {
      console.error('Error fetching blogs:', error);
      setError('Failed to load blogs');
      setBlogs([]);
    } finally {
      setBlogsLoading(false);
    }
  };
 
  const handleDeleteBlog = async (blogId: string) => {
    if (!window.confirm('Are you sure you want to delete this blog?')) {
      return;
    }
 
    try {
      const response = await fetch(`${API_URL}/cloudfirst-blog/${blogId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
 
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
 
      setSuccess('Blog deleted successfully');
      fetchBlogs();
      setTimeout(() => setSuccess(''), 3000);
    } catch (error: unknown) {
      console.error('Error deleting blog:', error);
      setError('Failed to delete blog');
    }
  };
 
  const handleEditBlog = (blog: BlogItem) => {
    const { inner } = unwrapAlignedContent(blog.content || '');
    setEditingBlog(blog);
    setFormData({
      title: blog.title,
      author: blog.author,
      content: inner,
      category: blog.category,
      tags: blog.tags || [],
      imageUrl: blog.imageUrl || '',
      images: blog.images || [],
      status: blog.status || 'published'
    });
    setShowBlogList(false);
  };
 
  const handleCancelEdit = () => {
    setEditingBlog(null);
    setFormData({
      title: '',
      author: '',
      content: '',
      category: 'technology',
      tags: [],
      imageUrl: '',
      images: [],
      status: 'published'
    });
    setShowBlogList(true);
  };
 
  const handleUpdateBlog = async (blogId: string, blogData: Partial<BlogFormData>) => {
    try {
      const response = await fetch(`${BLOG_API_URL}/${blogId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(blogData)
      });
 
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
 
      const result = await response.json();
      console.log('Blog updated successfully:', result);
      return result;
    } catch (error: unknown) {
      console.error('Error updating blog:', error);
      throw error;
    }
  };
 
  const [formData, setFormData] = useState<BlogFormData>({
    title: '',
    author: '',
    content: '',
    category: 'technology',
    tags: [],
    imageUrl: '',
    images: [],
    status: 'published'
  });
 
  const [categories, setCategories] = useState<string[]>([
    'technology',
    'cloud computing',
    'aws',
    'azure',
    'google cloud',
    'devops',
    'security',
    'migration',
    'case study',
    'industry insights',
    'company news',
    'tutorial'
  ]);

  const [availableTags, setAvailableTags] = useState<string[]>([
    'tech', 'aws', 'azure', 'gcp', 'cloud', 'devops', 'security',
    'migration', 'case study', 'tutorial', 'news', 'insights'
  ]);

  const [newCategory, setNewCategory] = useState('');
  const [newTag, setNewTag] = useState('');
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const categoryDropdownRef = useRef<HTMLDivElement | null>(null);
  const quillRef = useRef<ReactQuill | null>(null);

  const unwrapAlignedContent = (html: string) => {
    const trimmed = html.trim();
    const match = trimmed.match(/^<div\s+data-cf-align="(left|center|right|justify)"[^>]*>([\s\S]*)<\/div>$/i);
    if (!match) return { align: 'left' as const, inner: html };
    return { align: match[1].toLowerCase() as 'left' | 'center' | 'right' | 'justify', inner: match[2] };
  };

  const applyHeadingToSelectionOnly = (headerValue: false | 2 | 3) => {
    const quill = quillRef.current?.getEditor();
    if (!quill) return;

    quill.focus();
    const range = quill.getSelection(true);
    if (!range) return;

    if (range.length === 0) {
      quill.formatLine(range.index, 1, 'header', headerValue, 'user');
      return;
    }

    const start = range.index;
    const end = range.index + range.length;
    const [startLine, startOffset] = quill.getLine(start);
    const [endLine, endOffset] = quill.getLine(end);

    if (!startLine || !endLine) {
      quill.formatLine(range.index, range.length, 'header', headerValue, 'user');
      return;
    }

    if (startLine !== endLine) {
      quill.formatLine(range.index, range.length, 'header', headerValue, 'user');
      return;
    }

    const lineStartIndex = quill.getIndex(startLine);
    const lineTextLength = Math.max(0, startLine.length() - 1);
    const selectionStartsAtLineStart = startOffset === 0;
    const selectionEndsAtLineEnd = endOffset === lineTextLength;

    if (selectionStartsAtLineStart && selectionEndsAtLineEnd) {
      quill.formatLine(lineStartIndex, 1, 'header', headerValue, 'user');
      return;
    }

    if (endOffset < lineTextLength) {
      quill.insertText(lineStartIndex + endOffset, '\n', 'user');
    }
    if (startOffset > 0) {
      quill.insertText(lineStartIndex + startOffset, '\n', 'user');
    }

    const formattedLineIndex = lineStartIndex + startOffset + (startOffset > 0 ? 1 : 0);
    quill.formatLine(formattedLineIndex, 1, 'header', headerValue, 'user');
  };

  const addCategory = () => {
    const next = newCategory.trim();
    if (!next) return;
    setCategories(prev => (prev.includes(next) ? prev : [...prev, next]));
    setFormData(prev => ({ ...prev, category: next }));
    setNewCategory('');
  };

  const addTag = () => {
    const next = newTag.trim();
    if (!next) return;
    setAvailableTags(prev => (prev.includes(next) ? prev : [...prev, next]));
    setFormData(prev => (prev.tags.includes(next) ? prev : { ...prev, tags: [...prev.tags, next] }));
    setNewTag('');
  };

  const removeCategoryValue = (target: string) => {
    const trimmed = target.trim();
    if (!trimmed) return;
    setCategories(prev => {
      if (prev.length <= 1) return prev;
      const remaining = prev.filter(c => c !== trimmed);
      setFormData(current => ({
        ...current,
        category: current.category === trimmed ? (remaining[0] || '') : current.category,
      }));
      return remaining;
    });
  };

  const removeTag = (tag: string) => {
    setAvailableTags(prev => prev.filter(t => t !== tag));
    setFormData(prev => ({ ...prev, tags: prev.tags.filter(t => t !== tag) }));
  };

  useEffect(() => {
    if (!isCategoryOpen) return;
    const onMouseDown = (e: MouseEvent) => {
      const el = categoryDropdownRef.current;
      if (!el) return;
      if (el.contains(e.target as Node)) return;
      setIsCategoryOpen(false);
    };
    document.addEventListener('mousedown', onMouseDown);
    return () => document.removeEventListener('mousedown', onMouseDown);
  }, [isCategoryOpen]);

  useEffect(() => {
    if (!categories.includes(formData.category) && categories.length > 0) {
      setFormData(prev => ({ ...prev, category: categories[0] }));
    }
  }, [categories]);
 
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
 
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // Convert image to base64 for storage and display
        const base64String = reader.result as string;
        setFormData(prev => ({
          ...prev,
          imageUrl: base64String,
          images: [base64String] // Add to images array as well
        }));
      };
      reader.readAsDataURL(file);
    }
  };
 
  const handleTagChange = (tag: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.includes(tag)
        ? prev.tags.filter(t => t !== tag)
        : [...prev.tags, tag]
    }));
  };
 
  const calculateReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const text = stripHtml(content);
    const words = text.trim().split(/\s+/).filter(Boolean).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
  };
 
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    setSuccess('');
 
    try {
      const nowIso = new Date().toISOString();
      const blogData = {
        title: formData.title,
        slug: slugify(formData.title),
        content: formData.content,
        author: formData.author,
        tags: formData.tags,
        category: formData.category,
        imageUrl: formData.imageUrl,
        images: formData.images,
        status: formData.status,
        createdAt: editingBlog?.createdAt || nowIso,
        updatedAt: nowIso,
      };
 
      let response;
      if (editingBlog) {
        // Update existing blog
        response = await fetch(`${API_URL}/cloudfirst-blog/${editingBlog.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(blogData)
        });
        setSuccess('Blog updated successfully!');
      } else {
        // Create new blog
        response = await fetch(`${BLOG_CREATE_URL}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(blogData)
        });
        setSuccess('Blog created successfully!');
      }
 
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
 
      const result = await response.json();
      console.log('Blog operation successful:', result);
     
      // Reset form and fetch blogs
      handleCancelEdit();
      fetchBlogs();
      setTimeout(() => setSuccess(''), 3000);
 
    } catch (error: unknown) {
      const err = error as { message?: string };
      console.error('Error submitting blog:', err);
      setError(err?.message || 'Failed to submit blog. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
 
  const stripHtml = (html: string) => {
    const tmp = document.createElement('DIV');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };
 
  // Password Protection Overlay
  if (!isAuthenticated) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center pt-20">
          <div className="max-w-md w-full mx-4">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Save className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Authentication Required</h2>
                <p className="text-gray-600">Enter password to access blog creation</p>
              </div>
 
              <form onSubmit={handlePasswordSubmit}>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder=""
                    required
                  />
                </div>
 
                {passwordError && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl mb-4">
                    {passwordError}
                  </div>
                )}
 
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white font-medium py-3 rounded-xl hover:bg-blue-700 transition-colors"
                >
                  Access Blog Creation
                </button>
              </form>
 
              <div className="mt-6 text-center">
                <button
                  onClick={() => navigate('/blog')}
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Back to Blogs
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
 
  if (showPreview) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-20">
          <div className="max-w-4xl mx-auto px-4 py-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-bold text-gray-900">Blog Preview</h1>
                <button
                  onClick={() => setShowPreview(false)}
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Editor
                </button>
              </div>
 
              <div className="prose prose-lg max-w-none">
                <div className="mb-4">
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                    {formData.category}
                  </span>
                </div>
               
                <h2 className="text-4xl font-light text-gray-900 mb-4 leading-tight">
                  {formData.title || 'Untitled Blog'}
                </h2>
               
                <div className="flex items-center gap-6 text-gray-500 text-sm mb-6">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{formData.author || 'Anonymous'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{calculateReadTime(formData.content)}</span>
                  </div>
                </div>
               
                {formData.imageUrl && (
                  <div className="mb-6">
                    <img
                      src={formData.imageUrl}
                      alt="Featured"
                      className="w-full h-64 object-cover rounded-xl"
                    />
                  </div>
                )}
               
                <div className="text-gray-700 leading-relaxed">
                  {formData.content ? (
                    <div dangerouslySetInnerHTML={{ __html: formData.content }} />
                  ) : (
                    <p className="text-gray-400">No content yet...</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
 
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-20">
        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => navigate('/blog')}
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Blogs
                </button>
                <h1 className="text-3xl font-bold text-gray-900">Blog Management</h1>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => {
                    handleCancelEdit();
                    setShowBlogList(!showBlogList);
                  }}
                  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors"
                >
                  {showBlogList ? (
                    <>
                      <Plus className="w-4 h-4" />
                      Create New Blog
                    </>
                  ) : (
                    <>
                      <FileText className="w-4 h-4" />
                      View All Blogs
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
 
          {/* Blog List Section */}
          {showBlogList && (
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">All Blogs</h2>
                <div className="text-sm text-gray-600">
                  Total: <span className="font-semibold text-gray-900">{blogs.length}</span> {blogs.length === 1 ? 'blog' : 'blogs'}
                </div>
              </div>
             
              {blogsLoading ? (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-200 border-t-blue-600 mx-auto mb-4"></div>
                  <p className="text-gray-600">Loading blogs...</p>
                </div>
              ) : blogs.length === 0 ? (
                <div className="text-center py-8">
                  <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-600">No blogs found. Create your first blog!</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-medium text-gray-700">Title</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-700">Author</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-700">Category</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-700">Created</th>
                        <th className="text-right py-3 px-4 font-medium text-gray-700">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {blogs.map((blog) => (
                        <tr key={blog.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-3">
                              {blog.imageUrl && (
                                <img
                                  src={blog.imageUrl}
                                  alt={blog.title}
                                  className="w-12 h-12 object-cover rounded-lg"
                                />
                              )}
                              <span className="font-medium text-gray-900">{blog.title}</span>
                            </div>
                          </td>
                          <td className="py-3 px-4 text-gray-600">{blog.author}</td>
                          <td className="py-3 px-4">
                            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
                              {blog.category}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              blog.status === 'published'
                                ? 'bg-green-100 text-green-700'
                                : 'bg-yellow-100 text-yellow-700'
                            }`}>
                              {blog.status || 'published'}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-gray-600 text-sm">
                            {new Date(blog.createdAt).toLocaleDateString()}
                          </td>
                          <td className="py-3 px-4 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <button
                                onClick={() => handleEditBlog(blog)}
                                className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors"
                                title="Edit"
                              >
                                <Edit2 className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => handleDeleteBlog(blog.id)}
                                className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors"
                                title="Delete"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}
 
          {/* Error and Success Messages */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl mb-6">
              {error}
            </div>
          )}
         
          {success && (
            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl mb-6">
              {success}
            </div>
          )}
 
          {/* Blog Creation/Edit Form */}
          {!showBlogList && (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  {editingBlog ? 'Edit Blog' : 'Create New Blog'}
                </h2>
                {editingBlog && (
                  <button
                    type="button"
                    onClick={handleCancelEdit}
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
                  >
                    <X className="w-4 h-4" />
                    Cancel Edit
                  </button>
                )}
              </div>
             
              <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Title */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <FileText className="w-4 h-4 inline mr-2" />
                  Blog Title *
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter an engaging title for your blog..."
                />
              </div>
 
              {/* Author */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <User className="w-4 h-4 inline mr-2" />
                  Author Name *
                </label>
                <input
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your name..."
                />
              </div>
 
              {/* Category */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Tag className="w-4 h-4 inline mr-2" />
                  Category *
                </label>
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <div ref={categoryDropdownRef} className="relative flex-1">
                      <button
                        type="button"
                        onClick={() => setIsCategoryOpen(prev => !prev)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white flex items-center justify-between"
                        aria-haspopup="listbox"
                        aria-expanded={isCategoryOpen}
                      >
                        <span className={formData.category ? 'text-gray-900' : 'text-gray-400'}>
                          {formData.category || 'Select category'}
                        </span>
                        <span className="text-gray-400">▾</span>
                      </button>

                      {isCategoryOpen ? (
                        <div className="absolute z-20 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg max-h-56 overflow-auto">
                          {categories.map(cat => {
                            const isSelected = cat === formData.category;
                            return (
                              <div key={cat} className={`flex items-center justify-between px-2 ${isSelected ? 'bg-blue-50' : 'hover:bg-gray-50'}`}>
                                <button
                                  type="button"
                                  onClick={() => {
                                    setFormData(prev => ({ ...prev, category: cat }));
                                    setIsCategoryOpen(false);
                                  }}
                                  className="flex-1 text-left px-2 py-2 text-sm text-gray-700"
                                  role="option"
                                  aria-selected={isSelected}
                                >
                                  {cat}
                                </button>
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    removeCategoryValue(cat);
                                  }}
                                  disabled={categories.length <= 1}
                                  className="p-2 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                  aria-label={`Remove category ${cat}`}
                                  title="Remove"
                                >
                                  <X className="w-4 h-4 text-gray-500" />
                                </button>
                              </div>
                            );
                          })}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={newCategory}
                      onChange={(e) => setNewCategory(e.target.value)}
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Add new category"
                    />
                    <button
                      type="button"
                      onClick={addCategory}
                      className="px-4 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors"
                      aria-label="Add category"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
 
              {/* Tags */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Tag className="w-4 h-4 inline mr-2" />
                  Tags
                </label>
                <div className="flex flex-wrap gap-2 mb-3">
                  {availableTags.map(tag => {
                    const selected = formData.tags.includes(tag);
                    return (
                      <div
                        key={tag}
                        className={`flex items-center rounded-full overflow-hidden transition-colors ${
                          selected ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        <button
                          type="button"
                          onClick={() => handleTagChange(tag)}
                          className="px-3 py-1 text-sm"
                        >
                          {tag}
                        </button>
                        <button
                          type="button"
                          onClick={() => removeTag(tag)}
                          className={`px-2 py-1 ${selected ? 'hover:bg-blue-700' : 'hover:bg-gray-300'}`}
                          aria-label={`Remove tag ${tag}`}
                        >
                          <X className={`w-3 h-3 ${selected ? 'text-white' : 'text-gray-500'}`} />
                        </button>
                      </div>
                    );
                  })}
                </div>
                <div className="flex gap-2 mb-3">
                  <input
                    type="text"
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Create new tag"
                  />
                  <button
                    type="button"
                    onClick={addTag}
                    className="px-4 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors"
                    aria-label="Add tag"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                {formData.tags.length > 0 && (
                  <div className="text-sm text-gray-600">
                    Selected tags: {formData.tags.join(', ')}
                  </div>
                )}
              </div>
 
              {/* Image Upload */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Upload className="w-4 h-4 inline mr-2" />
                  Featured Image (Optional)
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="image-upload"
                  />
                  <label
                    htmlFor="image-upload"
                    className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-xl hover:bg-gray-200 cursor-pointer transition-colors"
                  >
                    <Upload className="w-4 h-4" />
                    Choose Image
                  </label>
                  {formData.imageUrl && (
                    <div className="flex items-center gap-4">
                      <img
                        src={formData.imageUrl}
                        alt="Preview"
                        className="w-16 h-16 object-cover rounded-lg border border-gray-200"
                      />
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span>Image uploaded</span>
                        <button
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, imageUrl: '', images: [] }))}
                          className="text-red-500 hover:text-red-700"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
 
              {/* Content */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <FileText className="w-4 h-4 inline mr-2" />
                  Blog Content *
                </label>
                <div className="border border-gray-300 rounded-xl focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent bg-white">
                  <div className="flex flex-wrap items-center gap-2 p-3 border-b border-gray-200 bg-gray-50">
                    <select
                      className="h-9 px-3 rounded-lg bg-white border border-gray-200 text-sm text-gray-700 min-w-[140px]"
                      defaultValue=""
                      onChange={(e) => {
                        const v = (e.target as HTMLSelectElement).value;
                        if (v === '2') applyHeadingToSelectionOnly(2);
                        else if (v === '3') applyHeadingToSelectionOnly(3);
                        else applyHeadingToSelectionOnly(false);
                        (e.target as HTMLSelectElement).value = '';
                      }}
                    >
                      <option value="">Paragraph</option>
                      <option value="2">Heading 2</option>
                      <option value="3">Heading 3</option>
                    </select>

                    <div
                      id="cf-quill-toolbar"
                      className="ql-toolbar ql-snow flex flex-wrap items-center gap-2 p-0 border-0 bg-transparent"
                    >
                      <button type="button" className="ql-bold px-3 py-1.5 rounded-lg bg-white border border-gray-200 hover:bg-gray-100 text-sm font-semibold" />
                      <button type="button" className="ql-italic px-3 py-1.5 rounded-lg bg-white border border-gray-200 hover:bg-gray-100 text-sm italic font-medium" />
                      <button type="button" className="ql-underline px-3 py-1.5 rounded-lg bg-white border border-gray-200 hover:bg-gray-100 text-sm underline font-medium" />

                      <button type="button" className="ql-list px-3 py-1.5 rounded-lg bg-white border border-gray-200 hover:bg-gray-100 text-sm font-medium text-gray-700" value="bullet" />
                      <button type="button" className="ql-list px-3 py-1.5 rounded-lg bg-white border border-gray-200 hover:bg-gray-100 text-sm font-medium text-gray-700" value="ordered" />

                      <button type="button" className="ql-link px-3 py-1.5 rounded-lg bg-white border border-gray-200 hover:bg-gray-100 text-sm font-medium text-gray-700" />

                      <button type="button" className="ql-blockquote px-3 py-1.5 rounded-lg bg-white border border-gray-200 hover:bg-gray-100 text-sm font-medium text-gray-700" />

                      <select className="ql-align h-9 px-3 rounded-lg bg-white border border-gray-200 text-sm" defaultValue="">
                        <option value="" />
                        <option value="center" />
                        <option value="right" />
                        <option value="justify" />
                      </select>

                      <select className="ql-color h-9 px-3 rounded-lg bg-white border border-gray-200 text-sm" />

                      <button type="button" className="ql-clean px-3 py-1.5 rounded-lg bg-white border border-gray-200 hover:bg-gray-100 text-sm font-medium text-gray-700">
                        Clear
                      </button>
                    </div>
                  </div>
                  <ReactQuill
                    ref={quillRef}
                    theme="snow"
                    value={formData.content}
                    onChange={(value) => setFormData(prev => ({ ...prev, content: value }))}
                    modules={{
                      toolbar: {
                        container: '#cf-quill-toolbar',
                      },
                      clipboard: { matchVisual: false },
                    }}
                    formats={[
                      'header',
                      'bold',
                      'italic',
                      'underline',
                      'list',
                      'bullet',
                      'blockquote',
                      'link',
                      'align',
                      'color',
                    ]}
                    className="cf-quill-editor"
                    style={{ minHeight: 320 }}
                    placeholder="Write your blog content here..."
                  />
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  You can use HTML tags for formatting. Estimated read time: {calculateReadTime(formData.content)}
                </p>
              </div>
 
              {/* Status */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Status
                </label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="published">Published</option>
                  <option value="draft">Draft</option>
                </select>
              </div>
            </div>
 
            {/* Form Actions */}
            <div className="flex items-center justify-between pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={() => navigate('/blog')}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
             
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => setShowPreview(true)}
                  className="flex items-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-xl hover:bg-gray-200 transition-colors"
                >
                  <Eye className="w-4 h-4" />
                  Preview
                </button>
               
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Save className="w-4 h-4" />
                  {isSubmitting ? (editingBlog ? 'Updating...' : 'Creating...') : (editingBlog ? 'Update Blog' : 'Create Blog')}
                </button>
              </div>
            </div>
          </form>
          )}
        </div>
      </div>
    </>
  );
};
 
export default CreateBlog;
