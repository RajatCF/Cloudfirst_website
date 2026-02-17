import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";

const CloudDataAnalytics = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    {/* Hero Section */}
    <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 min-h-[60vh] flex items-center bg-gradient-to-br from-cyan-100 via-white to-teal-100">
      <div className="container mx-auto px-6 text-center z-10">
        <AnimatedSection>
          <motion.span initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-8 bg-cyan-200 text-white">Data Analytics</motion.span>
          <motion.h1 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }} className="text-5xl lg:text-7xl font-black mb-6 font-display text-white">Cloud Data Analytics Services</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.7 }} className="text-lg lg:text-xl max-w-2xl mx-auto text-white">Transform your data into actionable insights with our comprehensive cloud analytics platform. Harness the power of big data, AI, and machine learning.</motion.p>
        </AnimatedSection>
      </div>
      <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover z-0">
        <source src="/solution2.mp4" type="video/mp4" />
      </video>
    </section>
    <div className="section-divider" />

    {/* Analytics Capabilities */}
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <motion.h2 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }} className="text-4xl lg:text-5xl font-black mb-6 font-display text-foreground">Advanced Analytics Capabilities</motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.7 }} className="text-muted-foreground text-lg max-w-2xl mx-auto">Unlock the full potential of your data with our comprehensive analytics suite.</motion.p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.7 }}>
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-cyan-50 to-teal-50 rounded-3xl p-8 border border-cyan-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl">📊</span>
                  </div>
                  <h3 className="text-xl font-bold text-cyan-900">Real-time Analytics</h3>
                </div>
                <p className="text-muted-foreground">Process and analyze streaming data in real-time to make instant decisions and respond to changing conditions immediately.</p>
              </div>

              <div className="bg-gradient-to-r from-cyan-50 to-teal-50 rounded-3xl p-8 border border-cyan-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <h3 className="text-xl font-bold text-cyan-900">Machine Learning</h3>
                </div>
                <p className="text-muted-foreground">Leverage AI and machine learning algorithms to discover patterns, predict trends, and automate decision-making processes.</p>
              </div>

              <div className="bg-gradient-to-r from-cyan-50 to-teal-50 rounded-3xl p-8 border border-cyan-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl">📈</span>
                  </div>
                  <h3 className="text-xl font-bold text-cyan-900">Predictive Analytics</h3>
                </div>
                <p className="text-muted-foreground">Forecast future trends and behaviors using historical data and statistical modeling to drive proactive business strategies.</p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.7 }}>
            <div className="bg-gradient-to-br from-cyan-100 to-teal-100 rounded-3xl p-8 h-full flex items-center">
              <div className="text-center w-full">
                <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <span className="text-6xl">📊</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-900">Data Visualization</h3>
                <p className="text-muted-foreground mb-6">Transform complex data into beautiful, interactive visualizations that make insights accessible to all stakeholders.</p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-white/80 rounded-xl p-4">
                    <div className="text-2xl font-bold text-cyan-900 mb-1">500M+</div>
                    <div className="text-muted-foreground">Data Points Processed</div>
                  </div>
                  <div className="bg-white/80 rounded-xl p-4">
                    <div className="text-2xl font-bold text-cyan-900 mb-1">99.9%</div>
                    <div className="text-muted-foreground">Uptime SLA</div>
                  </div>
                  <div className="bg-white/80 rounded-xl p-4">
                    <div className="text-2xl font-bold text-cyan-900 mb-1">&lt;1s</div>
                    <div className="text-muted-foreground">Query Response</div>
                  </div>
                  <div className="bg-white/80 rounded-xl p-4">
                    <div className="text-2xl font-bold text-cyan-900 mb-1">24/7</div>
                    <div className="text-muted-foreground">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    <div className="section-divider" />

    {/* Data Sources */}
    <section className="py-24 bg-gradient-to-br from-cyan-50 to-teal-50">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <motion.h2 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }} className="text-4xl lg:text-5xl font-black mb-6 font-display text-foreground">Connect Any Data Source</motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.7 }} className="text-muted-foreground text-lg max-w-2xl mx-auto">Integrate data from diverse sources for comprehensive analytics and unified insights.</motion.p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div whileHover={{ scale: 1.05, y: -5 }} initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1, duration: 0.7 }} className="bg-white rounded-2xl p-6 shadow-lg border border-cyan-200 text-center">
            <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">💾</span>
            </div>
            <h3 className="font-bold text-lg mb-2 text-cyan-900">Databases</h3>
            <p className="text-muted-foreground text-sm">SQL, NoSQL, data warehouses, and legacy systems</p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05, y: -5 }} initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.7 }} className="bg-white rounded-2xl p-6 shadow-lg border border-cyan-200 text-center">
            <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🌐</span>
            </div>
            <h3 className="font-bold text-lg mb-2 text-cyan-900">Web & APIs</h3>
            <p className="text-muted-foreground text-sm">REST APIs, webhooks, and streaming data sources</p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05, y: -5 }} initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3, duration: 0.7 }} className="bg-white rounded-2xl p-6 shadow-lg border border-cyan-200 text-center">
            <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">📱</span>
            </div>
            <h3 className="font-bold text-lg mb-2 text-cyan-900">Mobile & IoT</h3>
            <p className="text-muted-foreground text-sm">Sensor data, mobile apps, and IoT device streams</p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05, y: -5 }} initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.7 }} className="bg-white rounded-2xl p-6 shadow-lg border border-cyan-200 text-center">
            <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">📄</span>
            </div>
            <h3 className="font-bold text-lg mb-2 text-cyan-900">Files & Documents</h3>
            <p className="text-muted-foreground text-sm">CSV, JSON, XML, and unstructured text data</p>
          </motion.div>
        </div>
      </div>
    </section>
    <div className="section-divider" />

    {/* Use Cases */}
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <motion.h2 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }} className="text-4xl lg:text-5xl font-black mb-6 font-display text-foreground">Analytics Use Cases</motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.7 }} className="text-muted-foreground text-lg max-w-2xl mx-auto">See how organizations leverage our analytics platform to drive business value.</motion.p>
        </AnimatedSection>

        <div className="space-y-8">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }} className="bg-gradient-to-r from-cyan-50 to-teal-50 rounded-3xl p-8 border border-cyan-200">
            <div className="flex flex-col lg:flex-row items-center gap-6">
              <div className="lg:w-1/3">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Retail Analytics" className="rounded-2xl shadow-lg w-full h-32 object-cover" />
              </div>
              <div className="lg:w-2/3">
                <h3 className="text-2xl font-bold mb-3 text-cyan-900">Retail Customer Insights</h3>
                <p className="text-muted-foreground mb-4">Analyze customer behavior, purchase patterns, and preferences to personalize marketing campaigns and optimize inventory management.</p>
                <div className="flex gap-4 text-sm">
                  <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full">Personalization</span>
                  <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full">Inventory Optimization</span>
                  <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full">Customer Segmentation</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.7 }} className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-3xl p-8 border border-teal-200">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-6">
              <div className="lg:w-1/3">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Financial Analytics" className="rounded-2xl shadow-lg w-full h-32 object-cover" />
              </div>
              <div className="lg:w-2/3">
                <h3 className="text-2xl font-bold mb-3 text-teal-900">Financial Risk Assessment</h3>
                <p className="text-muted-foreground mb-4">Use predictive analytics to assess credit risk, detect fraudulent transactions, and optimize investment portfolios with real-time market data.</p>
                <div className="flex gap-4 text-sm">
                  <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full">Fraud Detection</span>
                  <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full">Risk Modeling</span>
                  <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full">Portfolio Optimization</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.7 }} className="bg-gradient-to-r from-cyan-50 to-teal-50 rounded-3xl p-8 border border-cyan-200">
            <div className="flex flex-col lg:flex-row items-center gap-6">
              <div className="lg:w-1/3">
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Manufacturing Analytics" className="rounded-2xl shadow-lg w-full h-32 object-cover" />
              </div>
              <div className="lg:w-2/3">
                <h3 className="text-2xl font-bold mb-3 text-cyan-900">Manufacturing Optimization</h3>
                <p className="text-muted-foreground mb-4">Monitor equipment performance, predict maintenance needs, and optimize production processes using IoT sensor data and machine learning.</p>
                <div className="flex gap-4 text-sm">
                  <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full">Predictive Maintenance</span>
                  <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full">Quality Control</span>
                  <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full">Process Optimization</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default CloudDataAnalytics;