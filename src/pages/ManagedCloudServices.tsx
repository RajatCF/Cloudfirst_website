import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";

const ManagedCloudServices = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    {/* Hero Section */}
    <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 min-h-[60vh] flex items-center bg-gradient-to-br from-emerald-100 via-white to-green-100">
      <div className="container mx-auto px-6 text-center z-10">
        <AnimatedSection>
          <motion.span initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-8 bg-emerald-200 text-white">Managed Services</motion.span>
          <motion.h1 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }} className="text-5xl lg:text-7xl font-black mb-6 font-display text-white">Managed Cloud Services</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.7 }} className="text-lg lg:text-xl max-w-2xl mx-auto text-white">Focus on your business while we handle your cloud infrastructure. Comprehensive management, monitoring, and support services for optimal cloud performance.</motion.p>
        </AnimatedSection>
      </div>
      <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover z-0">
        <source src="/solution2.mp4" type="video/mp4" />
      </video>
    </section>
    <div className="section-divider" />

    {/* Service Overview */}
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <motion.h2 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }} className="text-4xl lg:text-5xl font-black mb-6 font-display text-foreground">Complete Cloud Management</motion.h2>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.7 }} className="text-lg text-muted-foreground mb-6">Our managed cloud services provide end-to-end infrastructure management, allowing your team to focus on core business objectives while we ensure optimal performance, security, and reliability.</motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.7 }} className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-emerald-50 rounded-xl">
                <div className="text-3xl font-bold text-emerald-900 mb-1">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime SLA</div>
              </div>
              <div className="text-center p-4 bg-emerald-50 rounded-xl">
                <div className="text-3xl font-bold text-emerald-900 mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
              <div className="text-center p-4 bg-emerald-50 rounded-xl">
                <div className="text-3xl font-bold text-emerald-900 mb-1">&lt;15min</div>
                <div className="text-sm text-muted-foreground">Response Time</div>
              </div>
              <div className="text-center p-4 bg-emerald-50 rounded-xl">
                <div className="text-3xl font-bold text-emerald-900 mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Certifications</div>
              </div>
            </motion.div>
          </AnimatedSection>
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.4, duration: 0.7 }}>
            <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Cloud management dashboard" className="rounded-3xl shadow-2xl w-full" />
          </motion.div>
        </div>
      </div>
    </section>
    <div className="section-divider" />

    {/* Service Components */}
    <section className="py-24 bg-gradient-to-br from-emerald-50 to-green-50">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <motion.h2 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }} className="text-4xl lg:text-5xl font-black mb-6 font-display text-foreground">Comprehensive Service Portfolio</motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.7 }} className="text-muted-foreground text-lg max-w-2xl mx-auto">Everything you need for complete cloud infrastructure management.</motion.p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div whileHover={{ y: -10, scale: 1.02 }} initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1, duration: 0.7 }} className="bg-white rounded-3xl p-8 shadow-xl border border-emerald-200">
            <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-3xl">🔍</span>
            </div>
            <h3 className="text-xl font-bold mb-4 text-emerald-900">24/7 Monitoring</h3>
            <p className="text-muted-foreground mb-4">Continuous monitoring of your cloud infrastructure with proactive alerting and automated remediation.</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Real-time performance monitoring</li>
              <li>• Automated incident response</li>
              <li>• Capacity planning and forecasting</li>
            </ul>
          </motion.div>

          <motion.div whileHover={{ y: -10, scale: 1.02 }} initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.7 }} className="bg-white rounded-3xl p-8 shadow-xl border border-emerald-200">
            <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-3xl">🛡️</span>
            </div>
            <h3 className="text-xl font-bold mb-4 text-emerald-900">Security Management</h3>
            <p className="text-muted-foreground mb-4">Comprehensive security management including threat detection, compliance monitoring, and access control.</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Security posture assessment</li>
              <li>• Threat detection and response</li>
              <li>• Compliance automation</li>
            </ul>
          </motion.div>

          <motion.div whileHover={{ y: -10, scale: 1.02 }} initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3, duration: 0.7 }} className="bg-white rounded-3xl p-8 shadow-xl border border-emerald-200">
            <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-3xl">⚡</span>
            </div>
            <h3 className="text-xl font-bold mb-4 text-emerald-900">Performance Optimization</h3>
            <p className="text-muted-foreground mb-4">Continuous optimization of cloud resources for maximum performance and cost efficiency.</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Resource utilization analysis</li>
              <li>• Cost optimization strategies</li>
              <li>• Performance tuning</li>
            </ul>
          </motion.div>

          <motion.div whileHover={{ y: -10, scale: 1.02 }} initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.7 }} className="bg-white rounded-3xl p-8 shadow-xl border border-emerald-200">
            <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-3xl">🔄</span>
            </div>
            <h3 className="text-xl font-bold mb-4 text-emerald-900">Backup & Recovery</h3>
            <p className="text-muted-foreground mb-4">Automated backup solutions and disaster recovery planning to ensure business continuity.</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Automated backup scheduling</li>
              <li>• Disaster recovery testing</li>
              <li>• Data retention policies</li>
            </ul>
          </motion.div>

          <motion.div whileHover={{ y: -10, scale: 1.02 }} initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5, duration: 0.7 }} className="bg-white rounded-3xl p-8 shadow-xl border border-emerald-200">
            <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-3xl">📈</span>
            </div>
            <h3 className="text-xl font-bold mb-4 text-emerald-900">Capacity Planning</h3>
            <p className="text-muted-foreground mb-4">Strategic capacity planning and scaling recommendations based on usage patterns and growth projections.</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Usage trend analysis</li>
              <li>• Auto-scaling configuration</li>
              <li>• Future capacity forecasting</li>
            </ul>
          </motion.div>

          <motion.div whileHover={{ y: -10, scale: 1.02 }} initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6, duration: 0.7 }} className="bg-white rounded-3xl p-8 shadow-xl border border-emerald-200">
            <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-3xl">📞</span>
            </div>
            <h3 className="text-xl font-bold mb-4 text-emerald-900">Expert Support</h3>
            <p className="text-muted-foreground mb-4">Dedicated technical support from certified cloud experts available 24/7 for all your cloud needs.</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• 24/7 technical support</li>
              <li>• Certified cloud architects</li>
              <li>• Emergency response team</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
    <div className="section-divider" />

    {/* Service Levels */}
  
    <div className="section-divider" />

    {/* Testimonials */}
    <section className="py-24 bg-gradient-to-br from-emerald-50 to-green-50">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <motion.h2 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }} className="text-4xl lg:text-5xl font-black mb-6 font-display text-foreground">Trusted by Organizations Worldwide</motion.h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.7 }} className="bg-white rounded-3xl p-8 shadow-xl border border-emerald-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-emerald-900">T</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-emerald-900">TechCorp Solutions</h3>
                <p className="text-muted-foreground">Fortune 500 Technology Company</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">"CloudFirst's managed services have transformed our cloud operations. Their 24/7 monitoring and proactive management have reduced our incident response time by 80%."</p>
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400">
                ★★★★★
              </div>
              <span className="text-sm text-muted-foreground">Sarah Johnson, CTO</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.7 }} className="bg-white rounded-3xl p-8 shadow-xl border border-emerald-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-emerald-900">H</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-emerald-900">HealthFirst Medical</h3>
                <p className="text-muted-foreground">Healthcare Provider Network</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">"The peace of mind that comes with CloudFirst's managed services is invaluable. Their compliance expertise and security management keep our patient data safe and our systems running smoothly."</p>
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400">
                ★★★★★
              </div>
              <span className="text-sm text-muted-foreground">Dr. Michael Chen, CIO</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default ManagedCloudServices;