import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import Layout from '@/components/Layout';

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
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-bright-blue/10 to-light-blue/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Current <span className="text-bright-blue">Openings</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join our team and help shape the future of cloud technology. 
              We're looking for passionate individuals ready to make an impact.
            </p>
            <div className="mt-8 flex items-center justify-center">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Briefcase className="w-5 h-5 text-bright-blue" />
                <span className="text-gray-700 font-medium">Upcoming roles will be posted soon</span>
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

          <motion.div
            className="max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
          >
            <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8 sm:p-10 text-center">
              <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">Upcoming Jobs</h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
                We’re updating our careers page. New roles will be listed here soon.
              </p>
              <div className="mt-8">
                <button
                  type="button"
                  disabled
                  className="inline-flex items-center justify-center bg-gray-400 text-white font-semibold px-8 py-3.5 rounded-lg transition-all duration-300 shadow-lg cursor-not-allowed opacity-60"
                  title="Applications currently closed"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </motion.div>
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
    </div>
    </Layout>
  );
};

export default CurrentOpenings;
