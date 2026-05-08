import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";

const Manufacturing = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    {/* Brief: Hero Section */}
    <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 min-h-[60vh] flex items-center bg-gradient-to-br from-blue-100 via-white to-indigo-100">
      <div className="container mx-auto px-6 text-center z-10">
        <AnimatedSection>
          <motion.span initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-8 bg-blue-200 text-white">Manufacturing & Industry</motion.span>
          <motion.h1 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }} className="text-5xl lg:text-7xl font-black mb-6 font-display text-white">Smart Manufacturing with Cloud</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.7 }} className="text-lg lg:text-xl max-w-2xl mx-auto text-white">Revolutionizing industrial operations with IoT, AI, and cloud-powered smart factories.</motion.p>
        </AnimatedSection>
      </div>
      <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover z-0">
        <source src="/solution2.mp4" type="video/mp4" />
      </video>
    </section>
    <div className="section-divider" />
    {/* Brief Section with Image */}
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <motion.h2 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }} className="text-4xl lg:text-5xl font-black mb-6 font-display text-foreground">Brief Overview</motion.h2>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.7 }} className="text-lg text-muted-foreground mb-6">In the era of Industry 4.0, CloudFirst empowers manufacturers with cloud-native solutions that enable smart factories, predictive maintenance, and data-driven decision making. Our platform integrates IoT sensors, AI analytics, and scalable cloud infrastructure to optimize production processes and reduce operational costs.</motion.p>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.7 }} className="text-lg text-muted-foreground">Whether you're managing complex supply chains, implementing digital twins, or transitioning to smart manufacturing, CloudFirst provides the secure, scalable, and intelligent cloud foundation needed to stay competitive in the global manufacturing landscape.</motion.p>
          </AnimatedSection>
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.4, duration: 0.7 }} className="relative">
            <img src="https://images.unsplash.com/photo-1565465295423-68c959ca6628?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Smart manufacturing" className="rounded-2xl shadow-2xl w-full h-96 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
    <div className="section-divider" />
    {/* Do you know? Facts Section */}
    <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <motion.h2 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }} className="text-4xl lg:text-5xl font-black mb-6 font-display text-foreground">Do You Know?</motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.7 }} className="text-muted-foreground text-lg max-w-2xl mx-auto">Key insights into the manufacturing industry's digital transformation and the power of smart technologies.</motion.p>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div whileHover={{ y: -10 }} initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.7 }} className="bg-white rounded-3xl p-8 shadow-xl border border-blue-200 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🏭</span>
            </div>
            <h3 className="font-bold text-2xl mb-4 text-blue-900">Industry 4.0 adoption</h3>
            <p className="text-muted-foreground">Smart factories using IoT and AI can reduce operational costs by up to 30% while improving production efficiency and product quality.</p>
          </motion.div>
          <motion.div whileHover={{ y: -10 }} initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.7 }} className="bg-white rounded-3xl p-8 shadow-xl border border-blue-200 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔧</span>
            </div>
            <h3 className="font-bold text-2xl mb-4 text-blue-900">Predictive maintenance</h3>
            <p className="text-muted-foreground">AI-powered predictive maintenance can reduce unplanned downtime by 30-50% and extend equipment lifespan through proactive servicing.</p>
          </motion.div>
          <motion.div whileHover={{ y: -10 }} initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6, duration: 0.7 }} className="bg-white rounded-3xl p-8 shadow-xl border border-blue-200 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="font-bold text-2xl mb-4 text-blue-900">Data-driven decisions</h3>
            <p className="text-muted-foreground">Manufacturers using real-time data analytics can improve production planning, reduce waste, and respond faster to market demands.</p>
          </motion.div>
        </div>
      </div>
    </section>
    <div className="section-divider" />
    {/* How We Help? Section */}
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <motion.h2 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }} className="text-4xl lg:text-5xl font-black mb-6 font-display text-foreground">How CloudFirst Helps Manufacturing</motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.7 }} className="text-muted-foreground text-lg max-w-2xl mx-auto">We enable manufacturers to build smart factories, optimize operations, and drive innovation through advanced cloud technologies.</motion.p>
        </AnimatedSection>
        <div className="space-y-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.7 }}>
              <h3 className="text-3xl font-bold mb-6 text-blue-900">IoT-Enabled Smart Factories</h3>
              <p className="text-muted-foreground mb-6">Transform traditional manufacturing facilities into smart factories with IoT sensors, real-time monitoring, and automated processes. Our cloud platform connects all your equipment and systems for comprehensive visibility and control.</p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3"><span className="text-blue-500 mt-1">•</span> IoT sensor integration and data collection</li>
                <li className="flex items-start gap-3"><span className="text-blue-500 mt-1">•</span> Real-time production monitoring and analytics</li>
                <li className="flex items-start gap-3"><span className="text-blue-500 mt-1">•</span> Automated quality control and defect detection</li>
                <li className="flex items-start gap-3"><span className="text-blue-500 mt-1">•</span> Energy consumption optimization</li>
              </ul>
            </motion.div>
            <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.7 }} className="relative">
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Smart factory" className="rounded-2xl shadow-2xl w-full h-80 object-cover" />
            </motion.div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.6, duration: 0.7 }} className="relative">
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Digital twin" className="rounded-2xl shadow-2xl w-full h-80 object-cover" />
            </motion.div>
            <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.8, duration: 0.7 }}>
              <h3 className="text-3xl font-bold mb-6 text-blue-900">Digital Twins & Simulation</h3>
              <p className="text-muted-foreground mb-6">Create virtual replicas of your physical assets and processes to test scenarios, optimize performance, and predict outcomes before implementation. Our digital twin technology enables safer experimentation and faster innovation.</p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3"><span className="text-blue-500 mt-1">•</span> Virtual factory simulation and modeling</li>
                <li className="flex items-start gap-3"><span className="text-blue-500 mt-1">•</span> Process optimization through simulation</li>
                <li className="flex items-start gap-3"><span className="text-blue-500 mt-1">•</span> Predictive maintenance modeling</li>
                <li className="flex items-start gap-3"><span className="text-blue-500 mt-1">•</span> Supply chain digital twin integration</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
    <div className="section-divider" />
    {/* Capabilities Section */}
    <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <motion.h2 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }} className="text-4xl lg:text-5xl font-black mb-6 font-display text-foreground">Capabilities for Manufacturing</motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.7 }} className="text-muted-foreground text-lg max-w-2xl mx-auto">Our comprehensive manufacturing capabilities enable smart production, predictive operations, and data-driven innovation.</motion.p>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div whileHover={{ scale: 1.05 }} initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.7 }} className="bg-white rounded-3xl p-8 shadow-xl border border-blue-200 text-center group">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
              <span className="text-3xl">🔮</span>
            </div>
            <h3 className="font-bold text-xl mb-4 text-blue-900">Predictive Analytics</h3>
            <p className="text-muted-foreground">AI-powered analytics that predict equipment failures, optimize production schedules, and identify efficiency improvements before issues arise.</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.7 }} className="bg-white rounded-3xl p-8 shadow-xl border border-blue-200 text-center group">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
              <span className="text-3xl">🌐</span>
            </div>
            <h3 className="font-bold text-xl mb-4 text-blue-900">IoT Integration</h3>
            <p className="text-muted-foreground">Seamlessly connect and manage IoT devices across your manufacturing ecosystem with secure, scalable cloud infrastructure and real-time data processing.</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6, duration: 0.7 }} className="bg-white rounded-3xl p-8 shadow-xl border border-blue-200 text-center group">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
              <span className="text-3xl">⚙️</span>
            </div>
            <h3 className="font-bold text-xl mb-4 text-blue-900">MES & ERP Integration</h3>
            <p className="text-muted-foreground">Integrate manufacturing execution systems and ERP platforms with cloud-native solutions for unified operations and real-time decision making.</p>
          </motion.div>
        </div>
      </div>
    </section>
    <div className="section-divider" />
    {/* Services Section */}
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <motion.h2 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }} className="text-4xl lg:text-5xl font-black mb-6 font-display text-foreground">Services for Manufacturing</motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.7 }} className="text-muted-foreground text-lg max-w-2xl mx-auto">Specialized services designed to accelerate your digital manufacturing transformation and optimize industrial operations.</motion.p>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div whileHover={{ y: -10 }} initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.7 }} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 shadow-xl border border-blue-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🏗️</span>
              </div>
              <h3 className="text-2xl font-bold text-blue-900">Smart Factory Implementation</h3>
            </div>
            <p className="text-muted-foreground mb-6">End-to-end smart factory deployment including IoT infrastructure, data analytics platforms, and automated production systems.</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• IoT sensor network design and deployment</li>
              <li>• Cloud-based SCADA and MES systems</li>
              <li>• AI-powered quality control systems</li>
              <li>• Automated production line optimization</li>
            </ul>
          </motion.div>
          <motion.div whileHover={{ y: -10 }} initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.7 }} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 shadow-xl border border-blue-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-2xl font-bold text-blue-900">Manufacturing Intelligence</h3>
            </div>
            <p className="text-muted-foreground mb-6">Advanced analytics and business intelligence solutions for manufacturing operations, including predictive maintenance and production optimization.</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Predictive maintenance platforms</li>
              <li>• Production performance analytics</li>
              <li>• Supply chain optimization</li>
              <li>• Energy management and sustainability</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default Manufacturing;