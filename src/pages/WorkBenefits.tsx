import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Clock, Trophy, Baby, Users, TrendingUp, Brain, MessageCircle } from 'lucide-react';
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
      highlights: [
        "Instant Award",
        "Monthly Award",
        "Quarterly Award",
        "Incentives"
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
      highlights: [
        "Maternity Benefits",
        "Paternity Benefits"
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
      highlights: [
        "Company Sponsored Health Coverage"
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
      highlights: [
        "Learning & Development",
        "Company Certifications",
        "Paid Time Off",
        "Work From Home (Conditional)"
      ]
    }
  ];

  const healthCheckupImages = [
    "/work_benefits/IMG_2276.jpg",
    "/work_benefits/IMG_2303.jpg",
    "/work_benefits/IMG_2309.jpg",
    "/work_benefits/IMG_2316.jpg",
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-white">
        <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-100">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-orange-200 rounded-full transform translate-x-1/4 -translate-y-1/4 opacity-30"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-red-200 rounded-full transform -translate-x-1/4 translate-y-1/4 opacity-30"></div>
            <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-white rounded-full opacity-40"></div>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-center text-gray-900"
            >
              <span className="inline-block px-4 py-2 bg-orange-200/50 backdrop-blur-sm rounded-full text-sm font-medium text-gray-800 mb-6">
                💼 Work Benefits
              </span>
              <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
                Benefits at
                <span className="block text-orange-600">CloudFirst</span>
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                A quick view of the core benefits we offer to support your health, growth, and work-life balance.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
                Work Benefits Overview
              </h2>
              <p className="mt-3 text-lg text-gray-600 max-w-3xl mx-auto">
                Four key areas, grouped in one place.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {benefitSections.map((section, idx) => (
                <motion.div
                  key={section.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6, delay: idx * 0.08 }
                    }
                  }}
                  className={`${section.bgPattern} rounded-3xl p-8 border border-gray-100 shadow-sm`}
                >
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-r ${section.color} text-white mb-6 shadow-sm`}>
                    <section.icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{section.title}</h3>
                  <p className="text-gray-600">{section.subtitle}</p>

                  <div className="mt-6 space-y-3">
                    {section.bullets.map((bullet) => (
                      <div key={bullet} className="flex items-start gap-3">
                        <div className={`mt-2 w-2 h-2 rounded-full bg-gradient-to-r ${section.color}`}></div>
                        <span className="text-gray-700">{bullet}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {section.highlights.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-white/70 border border-white/40 text-gray-800"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-100">
            <div className="absolute inset-0 opacity-30">
              <div
                className="absolute inset-0 bg-white bg-opacity-5"
                style={{
                  backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)',
                  backgroundSize: '30px 30px'
                }}
              ></div>
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
              <div className="mb-12">
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-base sm:text-lg font-bold text-white bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 shadow-md border border-white/30">
                  <span className="text-lg sm:text-xl">🩺</span>
                  <span>Health Checkups</span>
                </div>
                <p className="mt-3 text-gray-700 max-w-2xl mx-auto leading-relaxed">
                  A glimpse of our health initiatives and wellness drives for the team.
                </p>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {healthCheckupImages.map((src, index) => (
                    <motion.div
                      key={src}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.6, delay: index * 0.06 }}
                      className="group rounded-2xl overflow-hidden border border-white/70 bg-white/60 shadow-sm hover:shadow-lg transition-all"
                    >
                      <img
                        src={src}
                        alt="Health checkup"
                        className="w-full h-64 md:h-72 object-cover group-hover:scale-[1.02] transition-transform duration-500"
                        loading="lazy"
                        decoding="async"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="inline-block px-6 py-3 bg-orange-200/60 backdrop-blur-sm rounded-full text-sm font-medium text-gray-800 mb-8">
                🚀 Start Your Journey Today
              </div>

              <h2 className="text-5xl md:text-6xl font-semibold mb-8 leading-tight">
                Join CloudFirst
              </h2>

              <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
                We're always looking for passionate, talented people to help us innovate and grow. At CloudFirst, you'll find opportunities to learn, collaborate, and make a real impact every day. Come be a part of a team that values your skills and your voice.
              </p>

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

            <div className="absolute top-20 left-10 w-20 h-20 bg-orange-300 rounded-full opacity-20" />
            <div className="absolute bottom-20 right-10 w-16 h-16 bg-red-300 rounded-full opacity-20" />
            <div className="absolute top-1/2 right-20 w-12 h-12 bg-orange-400 rounded-full opacity-20" />
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeInUp}
            >
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
                  features: [
                    "Individual development plans tailored to your goals",
                    "Regular performance reviews and feedback",
                    "Opportunities for internal promotions",
                    "Leadership training programs"
                  ],
                  icon: TrendingUp,
                  color: "from-blue-500 to-indigo-600",
                  bgColor: "from-blue-50 to-indigo-50"
                },
                {
                  title: "Learning Programs",
                  description: "Continuous learning is at the heart of CloudFirst. We provide access to courses and workshops to keep your skills sharp.",
                  features: [
                    "Technical and soft skill training",
                    "Access to online learning platforms",
                    "Sponsored certifications and workshops",
                    "Knowledge-sharing sessions with experts"
                  ],
                  icon: Brain,
                  color: "from-green-500 to-teal-600",
                  bgColor: "from-green-50 to-teal-50"
                },
                {
                  title: "Employee Engagement",
                  description: "We believe in building a collaborative and inclusive environment where everyone feels valued and connected.",
                  features: [
                    "Team-building events and activities",
                    "Recognition programs for achievements",
                    "Open communication and feedback channels",
                    "Health, wellness, and social initiatives"
                  ],
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
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} rounded-full opacity-10 transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700`}
                  ></div>

                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{feature.description}</p>

                  <div className="space-y-3">
                    {feature.features.map((item, idx) => (
                      <div
                        key={item}
                        className="flex items-center gap-3"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.color} group-hover:scale-150 transition-transform duration-300`}></div>
                        <span className="text-sm text-gray-700 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>

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
