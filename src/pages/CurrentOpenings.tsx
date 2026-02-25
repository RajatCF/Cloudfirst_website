import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { MapPin, Clock, Briefcase, Calendar, DollarSign, Users, RefreshCw, X, Mail, Phone, User, CheckCircle} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// API Base URL
const API_BASE_URL = 'https://g0107kune7.execute-api.ap-south-1.amazonaws.com';

export interface JobPosting {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  experience: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  skills: string[];
  salary?: string;
  benefits: string[];
  applicationDeadline?: string;
  isActive: boolean | string;
  postedDate: string;
}

interface JobApplicationForm {
  name: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  coverLetter: string;
}

const CurrentOpenings = () => {
  const [jobs, setJobs] = useState<JobPosting[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState<JobPosting | null>(null);
  const [formData, setFormData] = useState<JobApplicationForm>({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    coverLetter: ''
  });
  const [formLoading, setFormLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [validationErrors, setValidationErrors] = useState<{[key: string]: string}>({});

  useEffect(() => {
    loadJobs();
  }, []);

  const loadJobs = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(`${API_BASE_URL}/jobs`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      });
      if (!response.ok) throw new Error(`Failed to load jobs: ${response.status}`);
      const jobsData = await response.json();
      const activeJobs = jobsData
        .map((job: any) => ({ ...job, isActive: job.isActive === 'true' || job.isActive === true }))
        .filter((job: JobPosting) => job.isActive === true);
      setJobs(activeJobs);
    } catch (err) {
      setError('Failed to load job openings. Please try again later.');
      console.error('Error loading jobs:', err);
    } finally {
      setLoading(false);
    }
  };

  const validateEmail = (email: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone: string): boolean => phone.replace(/\D/g, '').length >= 10 && phone.replace(/\D/g, '').length <= 15;
  const validateName = (name: string): boolean => /^[a-zA-Z\s'-]+$/.test(name) && name.trim().length >= 2;

  const validateForm = (): boolean => {
    const errors: {[key: string]: string} = {};
    if (!formData.name.trim()) errors.name = 'Full name is required';
    else if (!validateName(formData.name)) errors.name = 'Please enter a valid name (letters only)';
    if (!formData.email.trim()) errors.email = 'Email address is required';
    else if (!validateEmail(formData.email)) errors.email = 'Please enter a valid email address';
    if (!formData.phone.trim()) errors.phone = 'Phone number is required';
    else if (!validatePhone(formData.phone)) errors.phone = 'Please enter a valid phone number (10-15 digits)';
    if (!formData.experience.trim()) errors.experience = 'Experience is required';
    if (!formData.coverLetter.trim()) errors.coverLetter = 'Cover letter is required';
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const openApplicationForm = (job: JobPosting) => {
    setSelectedJob(job);
    setFormData(prev => ({ ...prev, position: job.title }));
    setShowApplicationForm(true);
    document.body.style.overflow = 'hidden';
  };

  const closeApplicationForm = () => {
    setShowApplicationForm(false);
    setSelectedJob(null);
    setFormData({ name: '', email: '', phone: '', position: '', experience: '', coverLetter: '' });
    setFormSubmitted(false);
    setValidationErrors({});
    document.body.style.overflow = 'unset';
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    let processedValue = value;
    switch (name) {
      case 'name': processedValue = value.replace(/[^a-zA-Z\s'-]/g, ''); break;
      case 'phone': processedValue = value.replace(/[^0-9\s+()-]/g, ''); break;
      case 'email': processedValue = value.toLowerCase().trim(); break;
    }
    setFormData(prev => ({ ...prev, [name]: processedValue }));
    if (validationErrors[name]) setValidationErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setFormLoading(true);
    try {
      const response = await fetch('https://wefll4iita.execute-api.ap-south-1.amazonaws.com/dev/send-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          mobile: formData.phone,
          position: formData.position,
          experience: formData.experience,
          message: formData.coverLetter,
          job_id: selectedJob?.id,
          type: 'job_application'
        }),
      });
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      setFormSubmitted(true);
      setTimeout(() => { closeApplicationForm(); }, 3000);
    } catch (error) {
      alert('Failed to submit application. Please try again.');
    } finally {
      setFormLoading(false);
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white text-black">
        {/* Hero Banner Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-cyan-100">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
                Current <span className="text-blue-500">Openings</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Join our team and help shape the future of cloud technology. 
                We're looking for passionate individuals ready to make an impact.
              </p>
              <div className="mt-8 flex items-center justify-center gap-4">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <Briefcase className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700 font-medium">
                    {loading ? '...' : `${jobs.length} Open Position${jobs.length !== 1 ? 's' : ''}`}
                  </span>
                </div>
                {!loading && (
                  <button
                    onClick={loadJobs}
                    className="flex items-center gap-2 bg-blue-100 hover:bg-blue-200 text-blue-700 px-4 py-2 rounded-full transition-colors"
                    title="Refresh job listings"
                  >
                    <RefreshCw className="w-4 h-4" />
                    Refresh
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeInUp}
            >
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Explore exciting career opportunities and be part of our innovative team driving the future of cloud technology.
              </p>
            </motion.div>

            {/* Job Listings */}
            {loading ? (
              <div className="flex items-center justify-center py-20">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                  <span className="text-gray-600 text-lg">Loading job openings...</span>
                </div>
              </div>
            ) : error ? (
              <div className="text-center py-20">
                <div className="bg-red-50 border border-red-200 rounded-lg p-8 max-w-md mx-auto">
                  <div className="text-red-600 text-lg font-medium mb-2">Oops! Something went wrong</div>
                  <p className="text-red-600 mb-4">{error}</p>
                  <button
                    onClick={loadJobs}
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                  >
                    Try Again
                  </button>
                </div>
              </div>
            ) : jobs.length === 0 ? (
              <div className="text-center py-20">
                <div className="bg-gray-50 rounded-lg p-12 max-w-md mx-auto">
                  <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-medium text-gray-900 mb-2">No Current Openings</h3>
                  <p className="text-gray-600 mb-6">
                    We don't have any open positions at the moment, but we're always looking for talented individuals.
                  </p>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    <Users className="w-5 h-5" />
                    Send Us Your Resume
                  </a>
                </div>
              </div>
            ) : (
              <div className="space-y-8">
                {jobs.map((job, index) => (
                  <motion.div
                    key={job.id}
                    className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { 
                        opacity: 1, 
                        y: 0,
                        transition: { delay: index * 0.1, duration: 0.6 }
                      }
                    }}
                  >
                    <div className="p-8">
                      {/* Job Header */}
                      <div className="flex flex-col lg:flex-row items-start justify-between gap-6 mb-6">
                        <div className="flex items-start gap-4 flex-1">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                            {job.title.split(' ').map(word => word[0]).join('').slice(0, 2)}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">{job.title}</h3>
                            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                <span>{job.location}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                <span>{job.experience}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Briefcase className="w-4 h-4" />
                                <span>{job.type}</span>
                              </div>
                              {job.salary && (
                                <div className="flex items-center gap-1">
                                  <DollarSign className="w-4 h-4" />
                                  <span>{job.salary}</span>
                                </div>
                              )}
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                <span>Posted {new Date(job.postedDate).toLocaleDateString()}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button 
                          onClick={() => openApplicationForm(job)}
                          className="w-full lg:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                          Apply Now
                        </button>
                      </div>

                      {/* Job Description */}
                      <div className="mb-6">
                        <p className="text-gray-700 leading-relaxed">{job.description}</p>
                      </div>

                      {/* Skills Tags */}
                      {job.skills && job.skills.length > 0 && (
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-gray-900 mb-3">Required Skills:</h4>
                          <div className="flex flex-wrap gap-2">
                            {job.skills.map((skill, idx) => (
                              <span
                                key={idx}
                                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Job Details */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {job.responsibilities && job.responsibilities.length > 0 && (
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Responsibilities:</h4>
                            <ul className="space-y-2 text-gray-600">
                              {job.responsibilities.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                                  <span className="text-sm">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        {job.requirements && job.requirements.length > 0 && (
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-3">Requirements:</h4>
                            <ul className="space-y-2 text-gray-600">
                              {job.requirements.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                                  <span className="text-sm">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>

                      {/* Benefits */}
                      {job.benefits && job.benefits.length > 0 && (
                        <div className="mt-6 pt-6 border-t border-gray-200">
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">What We Offer:</h4>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {job.benefits.map((benefit, idx) => (
                              <div
                                key={idx}
                                className="bg-green-50 text-green-800 px-3 py-2 rounded-lg text-sm font-medium text-center"
                              >
                                {benefit}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Application Deadline */}
                      {job.applicationDeadline && (
                        <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                          <p className="text-yellow-800 text-sm font-medium">
                            <Calendar className="w-4 h-4 inline mr-1" />
                            Application Deadline: {new Date(job.applicationDeadline).toLocaleDateString()}
                          </p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">Why Choose CloudFirst?</h2>
              <p className="text-gray-600 text-lg">Experience a workplace that values innovation, growth, and work-life balance</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: "🚀", title: "Innovation Culture", desc: "Work on cutting-edge technologies" },
                { icon: "🌍", title: "Remote-First", desc: "Flexible work arrangements" },
                { icon: "📈", title: "Growth Opportunities", desc: "Continuous learning and development" },
                { icon: "🎯", title: "Impact-Driven", desc: "Make a difference in cloud computing" }
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { 
                      opacity: 1, 
                      scale: 1,
                      transition: { delay: index * 0.1, duration: 0.6 }
                    }
                  }}
                >
                  <div className="text-3xl mb-3">{benefit.icon}</div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Application Modal */}
        {showApplicationForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <motion.div
              className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-xl">
                <h2 className="text-2xl font-semibold text-gray-900">Apply for {selectedJob?.title}</h2>
                <button
                  onClick={closeApplicationForm}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                {formSubmitted ? (
                  <motion.div
                    className="text-center py-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Application Submitted!</h3>
                    <p className="text-gray-600 mb-4">
                      Thank you for your interest in {selectedJob?.title}. We'll review your application and get back to you soon.
                    </p>
                    <p className="text-sm text-gray-500">This window will close automatically...</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name and Email Row */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          <User className="w-4 h-4 inline mr-1" />
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                            validationErrors.name ? 'border-red-500' : 'border-gray-300'
                          }`}
                          style={{ 
                            color: '#111827', 
                            backgroundColor: '#ffffff',
                            WebkitBoxShadow: '0 0 0 1000px #ffffff inset',
                            WebkitTextFillColor: '#111827'
                          }}
                          placeholder="Enter your full name"
                        />
                        {validationErrors.name && (
                          <p className="mt-1 text-sm text-red-600">{validationErrors.name}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          <Mail className="w-4 h-4 inline mr-1" />
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                            validationErrors.email ? 'border-red-500' : 'border-gray-300'
                          }`}
                          style={{ 
                            color: '#111827', 
                            backgroundColor: '#ffffff',
                            WebkitBoxShadow: '0 0 0 1000px #ffffff inset',
                            WebkitTextFillColor: '#111827'
                          }}
                          placeholder="your.email@company.com"
                        />
                        {validationErrors.email && (
                          <p className="mt-1 text-sm text-red-600">{validationErrors.email}</p>
                        )}
                      </div>
                    </div>

                    {/* Phone and Experience Row */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          <Phone className="w-4 h-4 inline mr-1" />
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                            validationErrors.phone ? 'border-red-500' : 'border-gray-300'
                          }`}
                          style={{ 
                            color: '#111827', 
                            backgroundColor: '#ffffff',
                            WebkitBoxShadow: '0 0 0 1000px #ffffff inset',
                            WebkitTextFillColor: '#111827'
                          }}
                          placeholder="+91 9876543210"
                        />
                        {validationErrors.phone && (
                          <p className="mt-1 text-sm text-red-600">{validationErrors.phone}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                          <Briefcase className="w-4 h-4 inline mr-1" />
                          Years of Experience *
                        </label>
                        <select
                          id="experience"
                          name="experience"
                          value={formData.experience}
                          onChange={handleInputChange}
                          required
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                            validationErrors.experience ? 'border-red-500' : 'border-gray-300'
                          }`}
                        style={{ color: '#030303ff', backgroundColor: '#ffffff' }}
                        >
                          <option value="">Select experience</option>
                          <option value="0-1 years">0-1 years</option>
                          <option value="1-3 years">1-3 years</option>
                          <option value="3-5 years">3-5 years</option>
                          <option value="5-8 years">5-8 years</option>
                          <option value="8+ years">8+ years</option>
                        </select>
                        {validationErrors.experience && (
                          <p className="mt-1 text-sm text-red-600">{validationErrors.experience}</p>
                        )}
                      </div>
                    </div>

                    {/* Position (read-only) */}
                    <div>
                      <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                        Applied Position
                      </label>
                      <input
                        type="text"
                        id="position"
                        name="position"
                        value={formData.position}
                        readOnly
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-700"
                      />
                    </div>

                    {/* Cover Letter */}
                    <div>
                      <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-2">
                        Cover Letter *
                      </label>
                      <textarea
                        id="coverLetter"
                        name="coverLetter"
                        value={formData.coverLetter}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none ${
                          validationErrors.coverLetter ? 'border-red-500' : 'border-gray-300'
                        }`}
                        style={{ color: '#111827', backgroundColor: '#ffffff' }}
                        placeholder="Tell us why you're interested in this position and how your experience makes you a great fit..."
                      />
                      {validationErrors.coverLetter && (
                        <p className="mt-1 text-sm text-red-600">{validationErrors.coverLetter}</p>
                      )}
                    </div>

                    {/* Form Actions */}
                    <div className="flex gap-4 pt-4">
                      <button
                        type="button"
                        onClick={closeApplicationForm}
                        className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={formLoading}
                        className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        {formLoading ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Submitting...
                          </>
                        ) : (
                          'Submit Application'
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default CurrentOpenings;
