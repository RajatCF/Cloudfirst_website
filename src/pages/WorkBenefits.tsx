import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Award, Heart, Shield, Clock, BookOpen, Home, Trophy, Baby, Stethoscope, Laptop, Gift, Users, Target, Zap, TrendingUp, Brain, MessageCircle } from 'lucide-react';
import Layout from '@/components/Layout';

const WorkBenefits = () => {
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

  const benefitSections = [
    {
      title: "Rewards & Recognition Programs",
      subtitle: "Celebrating your efforts, big and small.",
      icon: Trophy,
      color: "from-yellow-400 via-orange-500 to-red-500",
      bgPattern: "bg-gradient-to-br from-yellow-50 to-orange-50",
      bullets: [
        "Recognize and reward outstanding contributions across teams.",
        "Foster a culture of appreciation and motivation.",
        "Encourage continuous growth and high performance."
      ],
      benefits: [
        {
          title: "Instant Award",
          description: "Receive immediate recognition for exceptional work or contributions that make a difference in real time.",
          icon: Zap
        },
        {
          title: "Monthly Award",
          description: "Outstanding performers are celebrated every month, highlighting achievements and inspiring peers.",
          icon: Trophy
        },
        {
          title: "Quarterly Award",
          description: "Quarterly awards recognize consistent excellence and dedication, creating milestones to be proud of.",
          icon: Target
        },
        {
          title: "Incentives",
          description: "Special incentives and bonuses reward exceptional performance and align with business goals, motivating continuous success.",
          icon: Gift
        }
      ]
    },
    {
      title: "Parental Support",
      subtitle: "Supporting you and your family every step of the way.",
      icon: Baby,
      color: "from-pink-400 via-purple-500 to-indigo-500",
      bgPattern: "bg-gradient-to-br from-pink-50 to-purple-50",
      bullets: [
        "Comprehensive maternity and paternity benefits to ease transition into parenthood.",
        "Flexible policies to balance work and family responsibilities.",
        "A supportive environment that values your well-being and family life."
      ],
      benefits: [
        {
          title: "Maternity Benefits",
          description: "Extended leave and flexible schedules help new mothers recover and bond with their child, without added stress.",
          icon: Heart
        },
        {
          title: "Paternity Benefits",
          description: "Dedicated leave and support for fathers, so you can be present for your family while maintaining your career growth.",
          icon: Users
        }
      ]
    },
    {
      title: "Health Insurance",
      subtitle: "Comprehensive coverage for you and Your loved ones.",
      icon: Shield,
      color: "from-blue-400 via-teal-500 to-blue-500",
      bgPattern: "bg-gradient-to-br from-blue-50 to-blue-50",
      bullets: [
        "Company-sponsored health plans to keep you and your family protected.",
        "Access to quality medical care without financial stress.",
        "Wellness-focused policies that prioritize preventive care and overall well-being."
      ],
      benefits: [
        {
          title: "Company Sponsored Health Coverage",
          description: "Our health insurance plans cover both employees and their families, ensuring peace of mind and access to top-notch medical services whenever needed.",
          icon: Stethoscope
        }
      ]
    },
    {
      title: "Work-Life Balance",
      subtitle: "Empowering you to grow, learn, and recharge.",
      icon: Clock,
      color: "from-blue-400 via-indigo-500 to-purple-500",
      bgPattern: "bg-gradient-to-br from-blue-50 to-indigo-50",
      bullets: [
        "Flexible programs and policies to balance work responsibilities with personal life.",
        "Opportunities to learn and grow while maintaining a healthy routine.",
        "A supportive environment that values productivity without burnout."
      ],
      benefits: [
        {
          title: "Learning & Development Programs",
          description: "Continuous learning opportunities to enhance skills, broaden knowledge, and advance your career.",
          icon: BookOpen
        },
        {
          title: "Company-Sponsored Certifications",
          description: "Access to sponsored courses and certifications that help you stay ahead in your field.",
          icon: Award
        },
        {
          title: "Paid Time Off",
          description: "Generous leave policies to rest, recharge, and spend quality time with family and friends.",
          icon: Clock
        },
        {
          title: "Work From Home (Conditional)",
          description: "Flexible work-from-home options designed to support productivity while maintaining work-life balance.",
          icon: Home
        }
      ]
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-white">
      {/* Hero Banner Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background with geometric shapes */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-100">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-orange-200 rounded-full transform translate-x-1/4 -translate-y-1/4 opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-red-200 rounded-full transform -translate-x-1/4 translate-y-1/4 opacity-30"></div>
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-white rounded-full opacity-40"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-gray-900 z-10"
            >
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-orange-200/50 backdrop-blur-sm rounded-full text-sm font-medium text-gray-800 mb-4">
                  💼 Your Career, Our Priority
                </span>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                  Together We
                  <span className="block text-orange-600">Thrive</span>
                </h1>
              </div>
              
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                At CloudFirst, we're more than a tech company—we're a team that grows together. Here, your ideas are heard, your skills are valued, and every day brings a chance to learn, innovate, and make a real impact. We believe in supporting our people, celebrating wins, and building a workplace where everyone belongs.
              </p>
            </motion.div>

            {/* Right Content - Image/Visual */}
            <motion.div
              className="relative"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.8, delay: 0.2 }
                }
              }}
            >
              {/* Main illustration area */}
              <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white/40">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: Trophy, label: "Awards & Recognition", value: "12+", color: "text-orange-600" },
                    { icon: Shield, label: "Health & Wellness", value: "100%", color: "text-blue-600" },
                    { icon: Clock, label: "Work Flexibility", value: "24/7", color: "text-blue-600" },
                    { icon: BookOpen, label: "Learning Programs", value: "50+", color: "text-purple-600" }
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/40"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.8)" }}
                    >
                      <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                      <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                      <div className="text-gray-600 text-xs leading-tight">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Floating elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center"
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Gift className="w-6 h-6 text-white" />
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-6 -left-6 w-16 h-16 bg-red-400 rounded-full flex items-center justify-center"
                  animate={{ y: [5, -5, 5] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                >
                  <Heart className="w-8 h-8 text-white" />
                </motion.div>
              </div>

              {/* Additional floating cards */}
              <motion.div
                className="absolute -top-4 -left-8 bg-white rounded-xl p-4 shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Shield className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Health First</div>
                    <div className="text-xs text-gray-600">Complete coverage</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-8 -right-8 bg-white rounded-xl p-4 shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Laptop className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Remote Ready</div>
                    <div className="text-xs text-gray-600">Work anywhere</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Sections */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
          >
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-medium mb-6">
              🎯 Complete Benefits Package
            </div>
            <h2 className="text-5xl md:text-6xl font-semibold mb-8 text-gray-900">
              Why You'll Love
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Working Here
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're committed to creating an environment where our people can thrive, grow, and feel valued every day. Here's a glimpse of benefits that make CloudFirst a great place to build your career.
            </p>
          </motion.div>

          <div className="space-y-32">
            {benefitSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                className="relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={{
                  hidden: { opacity: 0, y: 80 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: sectionIndex * 0.1, duration: 0.8 }
                  }
                }}
              >
                {/* Section Container with alternating layout */}
                <div className={`${section.bgPattern} rounded-3xl overflow-hidden ${sectionIndex % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                  <div className="relative lg:flex lg:items-center lg:min-h-[600px]">
                    
                    {/* Section Header - Left Side */}
                    <div className="lg:w-1/2 p-8 lg:p-16">
                      <div className="max-w-lg">
                        <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${section.color} text-white mb-8 shadow-lg`}>
                          <section.icon className="w-10 h-10" />
                        </div>
                        
                        <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                          {section.title}
                        </h3>
                        
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                          {section.subtitle}
                        </p>

                        <div className="space-y-4">
                          {section.bullets.map((bullet, index) => (
                            <div key={index} className="flex items-center gap-3">
                              <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${section.color}`}></div>
                              <span className="text-gray-700 font-medium">{bullet}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Benefits Grid - Right Side */}
                    <div className="lg:w-1/2 p-8 lg:p-16">
                      <div className="space-y-4">
                        {section.benefits.map((benefit, benefitIndex) => (
                          <motion.div
                            key={benefit.title}
                            className="group bg-white rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-transparent hover:scale-[1.02]"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            variants={{
                              hidden: { opacity: 0, x: 30 },
                              visible: { 
                                opacity: 1, 
                                x: 0,
                                transition: { delay: (sectionIndex * 0.1) + (benefitIndex * 0.1), duration: 0.6 }
                              }
                            }}
                          >
                            <div className="flex items-start gap-4">
                              <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-r ${section.color} text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                <benefit.icon className="w-5 h-5" />
                              </div>
                              
                              <div className="flex-1">
                                <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                                  {benefit.title}
                                </h4>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                  {benefit.description}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className={`absolute top-4 right-4 w-32 h-32 bg-gradient-to-r ${section.color} rounded-full opacity-10 blur-3xl`}></div>
                    <div className={`absolute bottom-4 left-4 w-24 h-24 bg-gradient-to-r ${section.color} rounded-full opacity-10 blur-2xl`}></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CloudFirst Family Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background with animated gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-100">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-white bg-opacity-5" 
                 style={{
                   backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)',
                   backgroundSize: '30px 30px'
                 }}>
            </div>
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <motion.div
            className="text-center text-gray-900"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
          >
            {/* Badge */}
            <div className="inline-block px-6 py-3 bg-orange-200/60 backdrop-blur-sm rounded-full text-sm font-medium text-gray-800 mb-8">
              🚀 Start Your Journey Today
            </div>

            <h2 className="text-5xl md:text-6xl font-semibold mb-8 leading-tight">
              Join CloudFirst
              <span className="block text-orange-600">Family</span>
            </h2>
            
            <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
              We're always looking for passionate, talented people to help us innovate and grow. At CloudFirst, you'll find opportunities to learn, collaborate, and make a real impact every day. Come be a part of a team that values your skills and your voice.
            </p>

            {/* Action Button */}
            <div className="flex justify-center mb-16">
              <Link to="/contact">
                <motion.button 
                  className="group px-10 py-5 bg-orange-600 text-white rounded-2xl font-bold text-lg hover:bg-orange-700 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center justify-center gap-3">
                    <Users className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                    Contact Us
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  </span>
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Floating decorative elements */}
          <motion.div
            className="absolute top-20 left-10 w-20 h-20 bg-orange-300 rounded-full opacity-20"
            animate={{ y: [-10, 10, -10], rotate: [0, 180, 360] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
        <motion.div
            className="absolute bottom-20 right-10 w-16 h-16 bg-red-300 rounded-full opacity-20"
            animate={{ y: [10, -10, 10], rotate: [360, 180, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        <motion.div
            className="absolute top-1/2 right-20 w-12 h-12 bg-orange-400 rounded-full opacity-20"
            animate={{ x: [-5, 5, -5], y: [-5, 5, -5] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </div>
      </section>

      {/* Grow, Learn, and Succeed Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
          >
            <div className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full text-sm font-medium mb-6">
              🌟 The CloudFirst Advantage
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold mb-8 text-gray-900">
              Grow, Learn, and
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Succeed
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At CloudFirst, we provide resources, guidance, and opportunities to help you excel in your career. Explore programs and initiatives designed to enhance your skills, foster collaboration, and celebrate achievements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Career Growth",
                description: "We support your professional journey with mentorship, clear growth paths, and challenging projects.",
                features: ["Individual development plans tailored to your goals", "Regular performance reviews and feedback", "Opportunities for internal promotions", "Leadership training programs"],
                icon: TrendingUp,
                color: "from-blue-500 to-indigo-600",
                bgColor: "from-blue-50 to-indigo-50"
              },
              {
                title: "Learning Programs",
                description: "Continuous learning is at the heart of CloudFirst. We provide access to courses and workshops to keep your skills sharp.",
                features: ["Technical and soft skill training", "Access to online learning platforms", "Sponsored certifications and workshops", "Knowledge-sharing sessions with experts"],
                icon: Brain,
                color: "from-green-500 to-teal-600",
                bgColor: "from-green-50 to-teal-50"
              },
              {
                title: "Employee Engagement",
                description: "We believe in building a collaborative and inclusive environment where everyone feels valued and connected.",
                features: ["Team-building events and activities", "Recognition programs for achievements", "Open communication and feedback channels", "Health, wellness, and social initiatives"],
                icon: MessageCircle,
                color: "from-purple-500 to-pink-600",
                bgColor: "from-purple-50 to-pink-50"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className={`group relative bg-gradient-to-br ${feature.bgColor} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 hover:scale-105 overflow-hidden`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: index * 0.2, duration: 0.8 }
                  }
                }}
              >
                {/* Background decoration */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} rounded-full opacity-10 transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700`}></div>
                
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {feature.description}
                </p>

                {/* Features list */}
                <div className="space-y-3">
                  {feature.features.map((item, idx) => (
                    <motion.div 
                      key={idx}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.1 }}
                      transition={{ delay: (index * 0.2) + (idx * 0.1) }}
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.color} group-hover:scale-150 transition-transform duration-300`}></div>
                      <span className="text-sm text-gray-700 font-medium">{item}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Hover effect arrow */}
                <motion.div
                  className={`absolute bottom-6 right-6 w-10 h-10 rounded-full bg-gradient-to-r ${feature.color} text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300`}
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="text-lg">→</span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
    </Layout>
  );
};

export default WorkBenefits;
