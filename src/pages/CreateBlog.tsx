import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { ArrowLeft, Save, Upload, Eye, Clock, User, Tag, FileText, X } from 'lucide-react';

const API_URL = 'https://hor3mik7u1.execute-api.ap-south-1.amazonaws.com/Dev';
const BLOG_API_URL = `${API_URL}/cloudfirst-blogs`;

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

const CreateBlog: React.FC = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  
  // Set your password here
  const ADMIN_PASSWORD = 'cloudfirst123';
  
  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordError('');
    
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      setPasswordError('Incorrect password. Please try again.');
      setPassword('');
    }
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
    } catch (error: any) {
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

  const categories = [
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
  ];

  const availableTags = [
    'tech', 'aws', 'azure', 'gcp', 'cloud', 'devops', 'security', 
    'migration', 'case study', 'tutorial', 'news', 'insights'
  ];

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
    const words = content.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    setSuccess('');

    try {
      // Calculate read time based on content
      const calculatedReadTime = calculateReadTime(formData.content);
      
      const blogData = {
        title: formData.title,
        content: formData.content,
        author: formData.author,
        tags: formData.tags,
        category: formData.category,
        imageUrl: formData.imageUrl,
        images: formData.images
      };

      const response = await fetch(`${BLOG_API_URL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(blogData)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Blog created successfully:', result);
      
      setSuccess('Blog created successfully! Redirecting to blog page...');
      
      // Redirect to blog page after 2 seconds
      setTimeout(() => {
        navigate('/blog');
      }, 2000);

    } catch (error: any) {
      console.error('Error creating blog:', error);
      setError(error.message || 'Failed to create blog. Please try again.');
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
                    placeholder="Enter admin password"
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
        <div className="max-w-4xl mx-auto px-4 py-8">
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
                <h1 className="text-3xl font-bold text-gray-900">Create New Blog</h1>
              </div>
              <button
                onClick={() => setShowPreview(true)}
                className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-xl hover:bg-gray-200 transition-colors"
              >
                <Eye className="w-4 h-4" />
                Preview
              </button>
            </div>
          </div>

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

          {/* Blog Creation Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8">
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
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              {/* Tags */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Tag className="w-4 h-4 inline mr-2" />
                  Tags
                </label>
                <div className="flex flex-wrap gap-2 mb-3">
                  {availableTags.map(tag => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => handleTagChange(tag)}
                      className={`px-3 py-1 rounded-full text-sm transition-colors ${
                        formData.tags.includes(tag)
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
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
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleInputChange}
                  required
                  rows={12}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Write your blog content here... (HTML supported)"
                />
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
                  {isSubmitting ? 'Creating...' : 'Create Blog'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateBlog;
