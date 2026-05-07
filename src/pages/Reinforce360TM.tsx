import React from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right';
import ArrowLeft from 'lucide-react/dist/esm/icons/arrow-left';
import Shield from 'lucide-react/dist/esm/icons/shield';
import Zap from 'lucide-react/dist/esm/icons/zap';
import Globe from 'lucide-react/dist/esm/icons/globe';
import BarChart3 from 'lucide-react/dist/esm/icons/bar-chart-3';
import Lock from 'lucide-react/dist/esm/icons/lock';
import Users from 'lucide-react/dist/esm/icons/users';
import TrendingUp from 'lucide-react/dist/esm/icons/trending-up';

const Reinforce360TM = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-reinforce-green-50 via-white to-reinforce-green-100">
      <Navbar />
      
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 pt-4">
        <motion.a
          href="/"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-200 border border-white/20"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">Back to CloudFirst</span>
        </motion.a>
      </div>
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-reinforce-green-600 via-reinforce-green-700 to-reinforce-green-800 text-white">
        <div className="absolute inset-0 bg-black/20">
          <div className="absolute inset-0 bg-gradient-to-r from-reinforce-green-900/20 via-transparent to-reinforce-green-900/20"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl lg:text-5xl font-bold mb-6"
              >
                reinforce360™
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl lg:text-2xl mb-8 max-w-2xl"
              >
                Advanced Security & Compliance Platform for Modern Cloud Operations
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-8"
              >
                <a 
                  href="https://reinforce360.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-reinforce-green-600 rounded-lg font-semibold hover:bg-reinforce-green-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Visit Official Website
                  <ArrowRight className="w-5 h-5" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise-Grade Cloud Solutions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Enterprise-Grade Cloud Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive security and compliance solutions designed for modern enterprises. Built to scale, trusted by industry leaders.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-8 border border-gray-100 hover:border-reinforce-green-200 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-reinforce-green-100 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-reinforce-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Advanced Security</h3>
              <p className="text-gray-600">Enterprise-grade protection with real-time threat detection and automated response capabilities.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-8 border border-gray-100 hover:border-reinforce-green-200 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI-Powered Analytics</h3>
              <p className="text-gray-600">Machine learning algorithms for intelligent insights and predictive analytics.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-8 border border-gray-100 hover:border-reinforce-green-200 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-reinforce-green-100 rounded-full flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-reinforce-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Global Scale</h3>
              <p className="text-gray-600">Worldwide infrastructure coverage with multi-region deployment capabilities.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Transform Your Cloud Infrastructure
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive cloud management solutions designed for enterprise needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {/* Infrastructure Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-8 border border-gray-100 hover:border-reinforce-green-200 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-reinforce-green-100 rounded-full flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-reinforce-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Infrastructure</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-reinforce-green-500 rounded-full mt-1 flex-shrink-0"></div>
                  <span>Automated cloud resource management</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-reinforce-green-500 rounded-full mt-1 flex-shrink-0"></div>
                  <span>Resource optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-reinforce-green-500 rounded-full mt-1 flex-shrink-0"></div>
                  <span>Auto-scaling</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-reinforce-green-500 rounded-full mt-1 flex-shrink-0"></div>
                  <span>Cost management</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-reinforce-green-500 rounded-full mt-1 flex-shrink-0"></div>
                  <span>Performance monitoring</span>
                </li>
              </ul>
            </motion.div>

            {/* Security Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-8 border border-gray-100 hover:border-reinforce-green-200 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Security</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-reinforce-green-500 rounded-full mt-1 flex-shrink-0"></div>
                  <span>Enterprise-grade protection</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-reinforce-green-500 rounded-full mt-1 flex-shrink-0"></div>
                  <span>Threat detection</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-reinforce-green-500 rounded-full mt-1 flex-shrink-0"></div>
                  <span>Access control</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-reinforce-green-500 rounded-full mt-1 flex-shrink-0"></div>
                  <span>Compliance monitoring</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-reinforce-green-500 rounded-full mt-1 flex-shrink-0"></div>
                  <span>Risk assessment</span>
                </li>
              </ul>
            </motion.div>

            {/* Analytics Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-8 border border-gray-100 hover:border-reinforce-green-200 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <BarChart3 className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Analytics</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-reinforce-green-500 rounded-full mt-1 flex-shrink-0"></div>
                  <span>Real-time insights and monitoring</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-reinforce-green-500 rounded-full mt-1 flex-shrink-0"></div>
                  <span>Performance metrics</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-reinforce-green-500 rounded-full mt-1 flex-shrink-0"></div>
                  <span>Cost analytics</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-reinforce-green-500 rounded-full mt-1 flex-shrink-0"></div>
                  <span>Usage tracking</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-reinforce-green-500 rounded-full mt-1 flex-shrink-0"></div>
                  <span>Custom dashboards</span>
                </li>
              </ul>
            </motion.div>

            {/* Global Scale Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-8 border border-gray-100 hover:border-reinforce-green-200 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-reinforce-green-100 rounded-full flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-reinforce-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Global Scale</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-reinforce-green-500 rounded-full mt-1 flex-shrink-0"></div>
                  <span>Worldwide infrastructure coverage</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-reinforce-green-500 rounded-full mt-1 flex-shrink-0"></div>
                  <span>Multi-region support</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-reinforce-green-500 rounded-full mt-1 flex-shrink-0"></div>
                  <span>Global deployment</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-reinforce-green-500 rounded-full mt-1 flex-shrink-0"></div>
                  <span>Edge computing</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-reinforce-green-500 rounded-full mt-1 flex-shrink-0"></div>
                  <span>CDN integration</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advanced Architecture Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Advanced Architecture
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Built on a modern, scalable architecture that adapts to your growing security needs. Cloud-native design with hybrid deployment options for maximum flexibility.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {/* Cloud-Native Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-8 border border-gray-100 hover:border-reinforce-green-200 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-reinforce-green-100 rounded-full flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-reinforce-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cloud-Native</h3>
              <p className="text-gray-600">Built for cloud scalability and reliability</p>
            </motion.div>

            {/* AI-Powered Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-8 border border-gray-100 hover:border-reinforce-green-200 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI-Powered</h3>
              <p className="text-gray-600">Machine learning for intelligent threat detection</p>
            </motion.div>

            {/* Zero Trust Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-8 border border-gray-100 hover:border-reinforce-green-200 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-reinforce-green-100 rounded-full flex items-center justify-center mb-6">
                <Lock className="w-8 h-8 text-reinforce-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Zero Trust</h3>
              <p className="text-gray-600">Never trust, always verify approach</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Security Modules Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Security Modules
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive security features to protect your cloud infrastructure
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {/* Tagging Solution */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-8 border border-gray-100 hover:border-reinforce-green-200 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Tagging Solution</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>Automated resource tagging</li>
                <li>Policy-based tagging</li>
                <li>Cost allocation by tags</li>
                <li>Compliance enforcement</li>
              </ul>
            </motion.div>

            {/* FinOps */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-8 border border-gray-100 hover:border-reinforce-green-200 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">FinOps</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>Financial operations integration</li>
                <li>Budget tracking and forecasting</li>
                <li>Cost optimization strategies</li>
              </ul>
            </motion.div>

            {/* Analytics & Integrations */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-8 border border-gray-100 hover:border-reinforce-green-200 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <BarChart3 className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Analytics & Integrations</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>Real-time monitoring and alerts</li>
                <li>Custom dashboard creation</li>
                <li>Third-party tool integrations</li>
                <li>Advanced reporting and insights</li>
              </ul>
            </motion.div>

            {/* MLOps Integration */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-8 border border-gray-100 hover:border-reinforce-green-200 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">MLOps Integration</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>Machine learning pipeline automation</li>
                <li>Model training and deployment</li>
                <li>Automated anomaly detection</li>
              </ul>
            </motion.div>

            {/* Resource Optimization */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-8 border border-gray-100 hover:border-reinforce-green-200 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-reinforce-green-100 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-reinforce-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Resource Optimization</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>Smart resource allocation</li>
                <li>Performance tuning</li>
                <li>Cost reduction algorithms</li>
              </ul>
            </motion.div>

            {/* Multi-Account Access */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-8 border border-gray-100 hover:border-reinforce-green-200 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-reinforce-green-100 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-reinforce-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Multi-Account Access</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>Cross-account management</li>
                <li>Role-based access control</li>
                <li>Audit trail and logging</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      </div>
  );
};

export default Reinforce360TM;
