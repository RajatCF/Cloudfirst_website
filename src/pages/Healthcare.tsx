import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";

const Healthcare = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    {/* Brief: Hero Section */}
    <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 min-h-[60vh] flex items-center bg-gradient-to-br from-green-100 via-white to-emerald-100">
      <div className="container mx-auto px-6 text-center z-10">
        <AnimatedSection>
          <motion.span initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-8 bg-green-200 text-white">Healthcare & Life Sciences</motion.span>
          <motion.h1 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }} className="text-5xl lg:text-7xl font-black mb-6 font-display text-white">HIPAA-compliant cloud for healthcare</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.7 }} className="text-lg lg:text-xl max-w-2xl mx-auto text-white">Secure EHR, telemedicine, and research workloads with privacy-first cloud solutions.</motion.p>
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
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.7 }} className="text-lg text-muted-foreground mb-6">In the critical field of healthcare and life sciences, CloudFirst provides HIPAA-compliant cloud solutions that prioritize patient privacy, data security, and operational efficiency. Our platform enables healthcare providers, researchers, and life sciences companies to leverage advanced cloud technologies while maintaining the highest standards of compliance and care.</motion.p>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.7 }} className="text-lg text-muted-foreground">From telemedicine platforms to genomic research pipelines, we deliver scalable, secure infrastructure that supports innovation in patient care, medical research, and healthcare administration, ensuring that sensitive health data remains protected while enabling breakthrough discoveries and improved patient outcomes.</motion.p>
          </AnimatedSection>
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.4, duration: 0.7 }} className="relative">
            <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Healthcare technology" className="rounded-2xl shadow-2xl w-full h-96 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
    <div className="section-divider" />
    {/* Do you know? Facts Section */}
    <section className="py-24 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <motion.h2 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }} className="text-4xl lg:text-5xl font-black mb-6 font-display text-foreground">Do You Know?</motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.7 }} className="text-muted-foreground text-lg max-w-2xl mx-auto">Key insights into the healthcare industry's digital transformation and the role of cloud technology.</motion.p>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div whileHover={{ y: -10 }} initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.7 }} className="bg-white rounded-3xl p-8 shadow-xl border border-emerald-200 text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🏥</span>
            </div>
            <h3 className="font-bold text-2xl mb-4 text-emerald-900">30% of healthcare data</h3>
            <p className="text-muted-foreground">Unstructured data in healthcare systems requires advanced AI and cloud processing for meaningful insights and improved patient care.</p>
          </motion.div>
          <motion.div whileHover={{ y: -10 }} initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.7 }} className="bg-white rounded-3xl p-8 shadow-xl border border-emerald-200 text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🤖</span>
            </div>
            <h3 className="font-bold text-2xl mb-4 text-emerald-900">AI enhances diagnostics</h3>
            <p className="text-muted-foreground">Machine learning algorithms can detect patterns in medical imaging and patient data, assisting clinicians in faster and more accurate diagnoses.</p>
          </motion.div>
          <motion.div whileHover={{ y: -10 }} initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6, duration: 0.7 }} className="bg-white rounded-3xl p-8 shadow-xl border border-emerald-200 text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔒</span>
            </div>
            <h3 className="font-bold text-2xl mb-4 text-emerald-900">Data security paramount</h3>
            <p className="text-muted-foreground">Healthcare organizations handle sensitive patient information, requiring robust security measures and compliance with regulations like HIPAA.</p>
          </motion.div>
        </div>
      </div>
    </section>
    <div className="section-divider" />
    {/* How We Help? Section */}
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <motion.h2 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }} className="text-4xl lg:text-5xl font-black mb-6 font-display text-foreground">How CloudFirst Helps Healthcare</motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.7 }} className="text-muted-foreground text-lg max-w-2xl mx-auto">We empower healthcare providers and life sciences companies with secure, compliant cloud solutions that enhance patient care and accelerate medical research.</motion.p>
        </AnimatedSection>
        <div className="space-y-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.7 }}>
              <h3 className="text-3xl font-bold mb-6 text-emerald-900">Secure Patient Data Management</h3>
              <p className="text-muted-foreground mb-6">Our HIPAA-compliant cloud infrastructure ensures the highest levels of security and privacy for sensitive patient information. From electronic health records to genomic data, we provide scalable storage and processing capabilities that meet stringent regulatory requirements.</p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3"><span className="text-emerald-500 mt-1">•</span> End-to-end encryption and access controls</li>
                <li className="flex items-start gap-3"><span className="text-emerald-500 mt-1">•</span> Automated compliance monitoring and reporting</li>
                <li className="flex items-start gap-3"><span className="text-emerald-500 mt-1">•</span> Secure data sharing between healthcare providers</li>
                <li className="flex items-start gap-3"><span className="text-emerald-500 mt-1">•</span> Disaster recovery and business continuity solutions</li>
              </ul>
            </motion.div>
            <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.7 }} className="relative">
              <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Telemedicine consultation" className="rounded-2xl shadow-2xl w-full h-80 object-cover" />
            </motion.div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.6, duration: 0.7 }} className="relative">
              <img src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Medical research" className="rounded-2xl shadow-2xl w-full h-80 object-cover" />
            </motion.div>
            <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.8, duration: 0.7 }}>
              <h3 className="text-3xl font-bold mb-6 text-emerald-900">Accelerating Medical Research</h3>
              <p className="text-muted-foreground mb-6">Leverage our high-performance computing capabilities to process vast amounts of genomic and clinical data. Our cloud platform enables faster drug discovery, personalized medicine, and breakthrough research that can save lives.</p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3"><span className="text-emerald-500 mt-1">•</span> Scalable computing for genomic analysis</li>
                <li className="flex items-start gap-3"><span className="text-emerald-500 mt-1">•</span> AI-powered drug discovery platforms</li>
                <li className="flex items-start gap-3"><span className="text-emerald-500 mt-1">•</span> Secure collaboration tools for research teams</li>
                <li className="flex items-start gap-3"><span className="text-emerald-500 mt-1">•</span> Real-time data analytics for clinical trials</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
    <div className="section-divider" />
    {/* Capabilities Section */}
    <section className="py-24 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <motion.h2 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }} className="text-4xl lg:text-5xl font-black mb-6 font-display text-foreground">Capabilities for Healthcare</motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.7 }} className="text-muted-foreground text-lg max-w-2xl mx-auto">Our comprehensive healthcare capabilities ensure compliance, security, and innovation in medical technology.</motion.p>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div whileHover={{ scale: 1.05 }} initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.7 }} className="bg-white rounded-3xl p-8 shadow-xl border border-emerald-200 text-center group">
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-200 transition-colors">
              <span className="text-3xl">🔒</span>
            </div>
            <h3 className="font-bold text-xl mb-4 text-emerald-900">HIPAA Compliance</h3>
            <p className="text-muted-foreground">Built-in compliance frameworks, automated auditing, and security controls that meet and exceed HIPAA requirements for healthcare data protection.</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.7 }} className="bg-white rounded-3xl p-8 shadow-xl border border-emerald-200 text-center group">
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-200 transition-colors">
              <span className="text-3xl">🩺</span>
            </div>
            <h3 className="font-bold text-xl mb-4 text-emerald-900">Telemedicine Platforms</h3>
            <p className="text-muted-foreground">Secure video conferencing, remote monitoring, and patient engagement tools that enable virtual care delivery with enterprise-grade reliability.</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6, duration: 0.7 }} className="bg-white rounded-3xl p-8 shadow-xl border border-emerald-200 text-center group">
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-200 transition-colors">
              <span className="text-3xl">🧬</span>
            </div>
            <h3 className="font-bold text-xl mb-4 text-emerald-900">Genomic Data Processing</h3>
            <p className="text-muted-foreground">High-performance computing infrastructure optimized for processing large-scale genomic datasets, enabling faster research and personalized medicine.</p>
          </motion.div>
        </div>
      </div>
    </section>
    <div className="section-divider" />
    {/* Services Section */}
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <motion.h2 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }} className="text-4xl lg:text-5xl font-black mb-6 font-display text-foreground">Services for Healthcare</motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.7 }} className="text-muted-foreground text-lg max-w-2xl mx-auto">Specialized services designed to meet the unique challenges and opportunities in healthcare and life sciences.</motion.p>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div whileHover={{ y: -10 }} initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.7 }} className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 shadow-xl border border-emerald-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🏥</span>
              </div>
              <h3 className="text-2xl font-bold text-emerald-900">Clinical Data Management</h3>
            </div>
            <p className="text-muted-foreground mb-6">Comprehensive solutions for managing electronic health records, patient data, and clinical workflows with full compliance and interoperability.</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Secure EHR hosting and management</li>
              <li>• Interoperable data exchange platforms</li>
              <li>• Patient portal and engagement tools</li>
              <li>• Clinical decision support systems</li>
            </ul>
          </motion.div>
          <motion.div whileHover={{ y: -10 }} initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.7 }} className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 shadow-xl border border-emerald-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🔬</span>
              </div>
              <h3 className="text-2xl font-bold text-emerald-900">Research & Development Support</h3>
            </div>
            <p className="text-muted-foreground mb-6">Accelerate medical research and drug development with our cloud-based platforms for data analysis, collaboration, and computational biology.</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• High-performance computing for research</li>
              <li>• Secure data sharing for clinical trials</li>
              <li>• AI-powered drug discovery tools</li>
              <li>• Genomic sequencing and analysis pipelines</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default Healthcare;