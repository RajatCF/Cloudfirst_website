import { motion } from 'framer-motion';
import { MapPin, Clock, Briefcase, Calendar, DollarSign, Users } from 'lucide-react';
import Layout from '@/components/Layout';

// Mock job data for display
const mockJobs = [
  {
    id: '1',
    title: 'Senior Cloud Engineer',
    department: 'Engineering',
    location: 'Bangalore, India',
    type: 'Full-time' as const,
    experience: '3-5 years',
    description: 'We are looking for an experienced Cloud Engineer to join our dynamic team. You will be responsible for designing, implementing, and maintaining cloud infrastructure for our enterprise clients.',
    requirements: [
      'Bachelor\'s degree in Computer Science or related field',
      '3+ years of experience in cloud computing',
      'Strong knowledge of AWS, Azure, or GCP',
      'Experience with containerization and orchestration'
    ],
    responsibilities: [
      'Design and implement cloud solutions',
      'Monitor and optimize cloud infrastructure',
      'Collaborate with development teams',
      'Ensure security and compliance'
    ],
    skills: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Python', 'Terraform'],
    salary: '₹15-25 LPA',
    benefits: ['Health Insurance', 'Flexible Work Hours', 'Remote Work Option', 'Professional Development'],
    postedDate: '2024-01-15'
  },
  {
    id: '2',
    title: 'DevOps Engineer',
    department: 'Engineering',
    location: 'Mumbai, India',
    type: 'Full-time' as const,
    experience: '2-4 years',
    description: 'Join our DevOps team to automate and streamline our development and deployment processes. You will work with cutting-edge tools and technologies.',
    requirements: [
      'Bachelor\'s degree in IT or related field',
      '2+ years of DevOps experience',
      'Experience with CI/CD pipelines',
      'Knowledge of infrastructure as code'
    ],
    responsibilities: [
      'Build and maintain CI/CD pipelines',
      'Automate deployment processes',
      'Monitor system performance',
      'Collaborate with development teams'
    ],
    skills: ['Jenkins', 'GitLab CI', 'Ansible', 'Docker', 'Kubernetes', 'AWS'],
    salary: '₹12-20 LPA',
    benefits: ['Health Insurance', 'Flexible Work Hours', 'Training Programs', 'Performance Bonus'],
    postedDate: '2024-01-10'
  },
  {
    id: '3',
    title: 'Frontend Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time' as const,
    experience: '1-3 years',
    description: 'We are seeking a talented Frontend Developer to create amazing user experiences for our cloud management platform.',
    requirements: [
      'Bachelor\'s degree in Computer Science or related field',
      '1+ years of frontend development experience',
      'Strong knowledge of React and TypeScript',
      'Experience with modern CSS frameworks'
    ],
    responsibilities: [
      'Develop responsive web applications',
      'Collaborate with UX/UI designers',
      'Optimize application performance',
      'Write clean, maintainable code'
    ],
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'HTML5', 'CSS3'],
    salary: '₹8-15 LPA',
    benefits: ['Health Insurance', 'Remote Work', 'Flexible Schedule', 'Growth Opportunities'],
    postedDate: '2024-01-08'
  }
];

const CurrentOpenings = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <Layout>
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
                  {mockJobs.length} Open Position{mockJobs.length !== 1 ? 's' : ''}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          
          {/* Section Title */}
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
          <div className="space-y-8">
            {mockJobs.map((job, index) => (
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
                      disabled
                      className="w-full lg:w-auto bg-gray-400 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-lg cursor-not-allowed opacity-60"
                      title="Applications currently closed"
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
                </div>
              </motion.div>
            ))}
          </div>
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
            {[/* eslint-disable @typescript-eslint/no-unused-vars */
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
    </div>
    </Layout>
  );
};

export default CurrentOpenings;
