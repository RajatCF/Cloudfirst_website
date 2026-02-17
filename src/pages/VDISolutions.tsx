import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";

const VDISolutions = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    {/* Hero Section */}
    <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 min-h-[60vh] flex items-center bg-gradient-to-br from-indigo-100 via-white to-blue-100">
      <div className="container mx-auto px-6 text-center z-10">
        <AnimatedSection>
          <motion.span initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-8 bg-indigo-200 text-black">VDI Solutions</motion.span>
          <motion.h1 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }} className="text-5xl lg:text-7xl font-black mb-6 font-display text-white">Virtual Desktop Infrastructure</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.7 }} className="text-lg lg:text-xl max-w-2xl mx-auto text-white">Secure, scalable, and flexible virtual desktop solutions that empower your workforce to work from anywhere, on any device.</motion.p>
        </AnimatedSection>
      </div>
      <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover z-0">
        <source src="/solution2.mp4" type="video/mp4" />
      </video>
    </section>
    <div className="section-divider" />

    {/* Key Features Grid */}
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <motion.h2 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }} className="text-4xl lg:text-5xl font-black mb-6 font-display text-black">Powerful VDI Features</motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.7 }} className="text-black text-lg max-w-2xl mx-auto">Experience the next generation of desktop virtualization with our comprehensive VDI solutions.</motion.p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div whileHover={{ y: -15, rotateY: 5 }} initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1, duration: 0.7 }} className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl p-8 shadow-xl border border-indigo-200 group">
            <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-200 transition-colors">
              <span className="text-3xl">🏠</span>
            </div>
            <h3 className="text-xl font-bold mb-4 text-black">Work from Anywhere</h3>
            <p className="text-black">Access your desktop environment securely from any location, on any device. Enable true remote work capabilities with enterprise-grade security.</p>
          </motion.div>

          <motion.div whileHover={{ y: -15, rotateY: -5 }} initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.7 }} className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl p-8 shadow-xl border border-indigo-200 group">
            <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-200 transition-colors">
              <span className="text-3xl">🔒</span>
            </div>
            <h3 className="text-xl font-bold mb-4 text-black">Enhanced Security</h3>
            <p className="text-black">Centralized data storage and access controls ensure your sensitive information stays protected. Multi-factor authentication and encryption included.</p>
          </motion.div>

          <motion.div whileHover={{ y: -15, rotateY: 5 }} initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3, duration: 0.7 }} className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl p-8 shadow-xl border border-indigo-200 group">
            <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-200 transition-colors">
              <span className="text-3xl">⚡</span>
            </div>
            <h3 className="text-xl font-bold mb-4 text-black">High Performance</h3>
            <p className="text-black">Optimized for speed and reliability with GPU acceleration, fast storage, and intelligent resource allocation for demanding applications.</p>
          </motion.div>

          <motion.div whileHover={{ y: -15, rotateY: -5 }} initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.7 }} className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl p-8 shadow-xl border border-indigo-200 group">
            <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-200 transition-colors">
              <span className="text-3xl">💰</span>
            </div>
            <h3 className="text-xl font-bold mb-4 text-black">Cost Efficiency</h3>
            <p className="text-black">Reduce hardware costs and IT overhead with centralized management. Pay only for what you use with flexible scaling options.</p>
          </motion.div>

          <motion.div whileHover={{ y: -15, rotateY: 5 }} initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5, duration: 0.7 }} className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl p-8 shadow-xl border border-indigo-200 group">
            <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-200 transition-colors">
              <span className="text-3xl">🔧</span>
            </div>
            <h3 className="text-xl font-bold mb-4 text-black">Easy Management</h3>
            <p className="text-black">Centralized administration and automated updates simplify IT management. Deploy, monitor, and maintain desktops from a single console.</p>
          </motion.div>

          <motion.div whileHover={{ y: -15, rotateY: -5 }} initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6, duration: 0.7 }} className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl p-8 shadow-xl border border-indigo-200 group">
            <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-200 transition-colors">
              <span className="text-3xl">📱</span>
            </div>
            <h3 className="text-xl font-bold mb-4 text-black">Device Flexibility</h3>
            <p className="text-black">Connect from Windows, Mac, iOS, Android, and more. Thin clients, zero clients, and repurposed PCs all work seamlessly.</p>
          </motion.div>
        </div>
      </div>
    </section>
    <div className="section-divider" />

    {/* Use Cases */}
    <section className="py-24 bg-gradient-to-br from-indigo-50 to-blue-50">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <motion.h2 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }} className="text-4xl lg:text-5xl font-black mb-6 font-display text-black">Perfect for Every Industry</motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.7 }} className="text-black text-lg max-w-2xl mx-auto">Discover how VDI solutions transform operations across different sectors.</motion.p>
        </AnimatedSection>

        <div className="space-y-12">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.7 }} className="flex flex-col lg:flex-row items-center gap-8 bg-white rounded-3xl p-8 shadow-xl">
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold mb-4 text-black">Healthcare</h3>
              <p className="text-black mb-4">Enable secure remote access to patient records and medical applications while maintaining HIPAA compliance. Support telemedicine and remote consultations.</p>
              <ul className="space-y-2 text-black">
                <li>• Secure access to EHR systems</li>
                <li>• HIPAA-compliant environments</li>
                <li>• Remote patient monitoring support</li>
              </ul>
            </div>
            <div className="lg:w-1/2">
              <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Healthcare VDI" className="rounded-2xl shadow-lg w-full h-48 object-cover" />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.7 }} className="flex flex-col lg:flex-row-reverse items-center gap-8 bg-white rounded-3xl p-8 shadow-xl">
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold mb-4 text-black">Financial Services</h3>
              <p className="text-black mb-4">Provide secure trading platforms and sensitive financial applications with enhanced security and compliance. Enable remote work for traders and analysts.</p>
              <ul className="space-y-2 text-black">
                <li>• Secure trading platforms</li>
                <li>• PCI DSS compliance</li>
                <li>• Remote access for financial professionals</li>
              </ul>
            </div>
            <div className="lg:w-1/2">
              <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Financial VDI" className="rounded-2xl shadow-lg w-full h-48 object-cover" />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6, duration: 0.7 }} className="flex flex-col lg:flex-row items-center gap-8 bg-white rounded-3xl p-8 shadow-xl">
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold mb-4 text-black">Education</h3>
              <p className="text-black mb-4">Deliver consistent learning environments across campuses and remote students. Enable BYOD policies while maintaining security and application control.</p>
              <ul className="space-y-2 text-black">
                <li>• Consistent learning environments</li>
                <li>• Remote learning support</li>
                <li>• Application and content control</li>
              </ul>
            </div>
            <div className="lg:w-1/2">
              <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Education VDI" className="rounded-2xl shadow-lg w-full h-48 object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    <div className="section-divider" />

    {/* Architecture */}
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <motion.h2 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }} className="text-4xl lg:text-5xl font-black mb-6 font-display text-black">VDI Architecture</motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.7 }} className="text-black text-lg max-w-2xl mx-auto">Our robust VDI infrastructure ensures high availability, performance, and security.</motion.p>
        </AnimatedSection>

        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.4, duration: 0.7 }} className="relative">
          <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="VDI Architecture" className="rounded-3xl shadow-2xl w-full h-96 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-3xl"></div>
          <div className="absolute bottom-8 left-8 text-white">
            <h3 className="text-2xl font-bold mb-2">Scalable Cloud Infrastructure</h3>
            <p className="text-lg opacity-90">Built on enterprise-grade cloud platforms with redundancy and high availability</p>
          </div>
        </motion.div>
      </div>
    </section>

    <Footer />
  </div>
);

export default VDISolutions;