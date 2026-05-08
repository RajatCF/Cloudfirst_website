<<<<<<< HEAD
import React from 'react';
import Layout from '@/components/Layout';

const CloudMigration = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-br from-blue-50 to-white min-h-screen">
        {/* Hero Section */}
        <section className="relative flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4 md:px-12 pt-20 pb-12 md:pb-24">
          <div className="flex-1 text-center md:text-left z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold text-navy mb-6 leading-tight">
              Seamless <span className="text-bright-blue">Cloud Migration</span>
            </h1>
            <p className="text-lg md:text-2xl text-muted-foreground mb-8 max-w-xl">
              Seamlessly migrate your workloads and data to the cloud with minimal disruption. At CloudFirst Technology, our experts ensure secure, high-performance, and cost-optimized transitions across AWS, Azure, and Google Cloud
            </p>
            <a href="/contact" className="btn-primary text-lg px-8 py-3 shadow-lg inline-block">Start Your Migration</a>
          </div>
          <div className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0">
            <img
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
              alt="Cloud Migration Hero"
              className="rounded-2xl shadow-2xl w-full max-w-md md:max-w-lg border-4 border-bright-blue/10"
            />
          </div>
          <svg className="absolute top-0 right-0 w-64 h-64 opacity-10 -z-1 hidden md:block" viewBox="0 0 400 400" fill="none"><circle cx="200" cy="200" r="200" fill="#3B82F6" /></svg>
        </section>

        {/* Features Section */}
        <section className="max-w-6xl mx-auto px-4 md:px-0 py-12 md:py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Migration Benefits</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-xl transition">
              <span className="text-4xl mb-4">💰</span>
              <h3 className="font-semibold text-xl mb-2">Cost Savings</h3>
              <p className="text-muted-foreground">Lower infrastructure and operational costs with pay-as-you-go cloud models.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-xl transition">
              <span className="text-4xl mb-4">⚡</span>
              <h3 className="font-semibold text-xl mb-2">Performance</h3>
              <p className="text-muted-foreground">Leverage scalable, high-performance resources that grow with your business.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-xl transition">
              <span className="text-4xl mb-4">🔒</span>
              <h3 className="font-semibold text-xl mb-2">Security</h3>
              <p className="text-muted-foreground">Built-in cloud security and compliance features protect your data during and after migration.</p>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-bright-blue/5 py-16">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Our Migration Process</h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-bright-blue/10 flex items-center justify-center mb-3 text-2xl">1</div>
                <h4 className="font-semibold mb-1">Assess</h4>
                <p className="text-sm text-muted-foreground">Evaluate current infrastructure and dependencies.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-bright-blue/10 flex items-center justify-center mb-3 text-2xl">2</div>
                <h4 className="font-semibold mb-1">Plan</h4>
                <p className="text-sm text-muted-foreground">Design migration strategy and timeline.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-bright-blue/10 flex items-center justify-center mb-3 text-2xl">3</div>
                <h4 className="font-semibold mb-1">Execute</h4>
                <p className="text-sm text-muted-foreground">Migrate systems with minimal downtime.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-bright-blue/10 flex items-center justify-center mb-3 text-2xl">4</div>
                <h4 className="font-semibold mb-1">Optimize</h4>
                <p className="text-sm text-muted-foreground">Fine-tune for cost, performance, and security.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="max-w-5xl mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Customer Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-md p-8">
              <p className="text-lg mb-4">“CloudFirst Technology made our cloud migration seamless and disruption-free. Their expertise ensured a secure transition with improved performance—our users didn’t experience a single interruption.”</p>
              <div className="flex items-center gap-3">
                <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Client" className="w-10 h-10 rounded-full" />
                <div>
                  <div className="font-semibold">Sneha P., CIO</div>
                  <div className="text-xs text-muted-foreground">Healthcare Provider</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-8">
              <p className="text-lg mb-4">“We cut our infrastructure costs by 45% after the migration, and performance improved dramatically.”</p>
              <div className="flex items-center gap-3">
                <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="Client" className="w-10 h-10 rounded-full" />
                <div>
                  <div className="font-semibold">Raj M., CTO</div>
                  <div className="text-xs text-muted-foreground">Retail Enterprise</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CloudMigration;
=======
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";

const CloudMigration = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    {/* Hero Section */}
    <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 min-h-[60vh] flex items-center bg-gradient-to-br from-purple-100 via-white to-violet-100">
      <div className="container mx-auto px-6 text-center z-10">
        <AnimatedSection>
          <motion.span initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-8 bg-purple-200 text-white">Cloud Migration</motion.span>
          <motion.h1 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }} className="text-5xl lg:text-7xl font-black mb-6 font-display text-white">Seamless Cloud Migration</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.7 }} className="text-lg lg:text-xl max-w-2xl mx-auto text-white">Transform your business with our expert cloud migration services. Move to the cloud securely, efficiently, and with minimal disruption.</motion.p>
        </AnimatedSection>
      </div>
      <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover z-0">
        <source src="/solution2.mp4" type="video/mp4" />
      </video>
    </section>
    <div className="section-divider" />

    {/* Migration Process Timeline */}
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <motion.h2 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }} className="text-4xl lg:text-5xl font-black mb-6 font-display text-foreground">Our Migration Process</motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.7 }} className="text-muted-foreground text-lg max-w-2xl mx-auto">A proven, step-by-step approach to ensure your cloud migration is successful and optimized for performance.</motion.p>
        </AnimatedSection>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-200 to-violet-200 hidden md:block"></div>

          <div className="space-y-16">
            {/* Step 1 */}
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.7 }} className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2 md:pr-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-4">
                  <span className="text-2xl font-bold text-purple-900">1</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-purple-900">Assessment & Planning</h3>
                <p className="text-muted-foreground mb-4">We conduct a comprehensive assessment of your current infrastructure, applications, and data. Our experts create a detailed migration plan tailored to your business needs and timeline.</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Infrastructure analysis and dependency mapping</li>
                  <li>• Cost-benefit analysis and ROI projections</li>
                  <li>• Risk assessment and mitigation strategies</li>
                  <li>• Migration roadmap and timeline development</li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Assessment planning" className="rounded-2xl shadow-2xl w-full h-64 object-cover" />
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.7 }} className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="md:w-1/2 md:pl-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-4">
                  <span className="text-2xl font-bold text-purple-900">2</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-purple-900">Migration Execution</h3>
                <p className="text-muted-foreground mb-4">Our team executes the migration using industry-best practices and automated tools. We ensure data integrity, minimal downtime, and seamless transition to the cloud.</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Automated migration tools and scripts</li>
                  <li>• Phased migration approach for minimal disruption</li>
                  <li>• Real-time monitoring and progress tracking</li>
                  <li>• Data validation and integrity checks</li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Migration execution" className="rounded-2xl shadow-2xl w-full h-64 object-cover" />
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6, duration: 0.7 }} className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2 md:pr-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-4">
                  <span className="text-2xl font-bold text-purple-900">3</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-purple-900">Optimization & Support</h3>
                <p className="text-muted-foreground mb-4">Post-migration, we optimize your cloud environment for performance, security, and cost-efficiency. Our ongoing support ensures you get the most out of your cloud investment.</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Performance tuning and cost optimization</li>
                  <li>• Security hardening and compliance</li>
                  <li>• 24/7 monitoring and support</li>
                  <li>• Training and knowledge transfer</li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Optimization support" className="rounded-2xl shadow-2xl w-full h-64 object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
    <div className="section-divider" />

    {/* Benefits Section */}
    <section className="py-24 bg-gradient-to-br from-purple-50 to-violet-50">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <motion.h2 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }} className="text-4xl lg:text-5xl font-black mb-6 font-display text-foreground">Why Choose CloudFirst Migration</motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.7 }} className="text-muted-foreground text-lg max-w-2xl mx-auto">Experience the advantages of our comprehensive cloud migration services.</motion.p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div whileHover={{ y: -10, scale: 1.05 }} initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.7 }} className="bg-white rounded-3xl p-6 shadow-xl border border-purple-200 text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">⚡</span>
            </div>
            <h3 className="font-bold text-lg mb-3 text-purple-900">Faster Time-to-Value</h3>
            <p className="text-muted-foreground text-sm">Accelerate your digital transformation with our proven migration methodologies and automated tools.</p>
          </motion.div>

          <motion.div whileHover={{ y: -10, scale: 1.05 }} initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.7 }} className="bg-white rounded-3xl p-6 shadow-xl border border-purple-200 text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🛡️</span>
            </div>
            <h3 className="font-bold text-lg mb-3 text-purple-900">Enhanced Security</h3>
            <p className="text-muted-foreground text-sm">Migrate to enterprise-grade cloud security with advanced encryption, compliance, and threat protection.</p>
          </motion.div>

          <motion.div whileHover={{ y: -10, scale: 1.05 }} initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6, duration: 0.7 }} className="bg-white rounded-3xl p-6 shadow-xl border border-purple-200 text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">💰</span>
            </div>
            <h3 className="font-bold text-lg mb-3 text-purple-900">Cost Optimization</h3>
            <p className="text-muted-foreground text-sm">Reduce infrastructure costs with scalable cloud resources and our optimization expertise.</p>
          </motion.div>

          <motion.div whileHover={{ y: -10, scale: 1.05 }} initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.8, duration: 0.7 }} className="bg-white rounded-3xl p-6 shadow-xl border border-purple-200 text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🔄</span>
            </div>
            <h3 className="font-bold text-lg mb-3 text-purple-900">Scalability & Flexibility</h3>
            <p className="text-muted-foreground text-sm">Scale resources on-demand and adapt quickly to changing business requirements.</p>
          </motion.div>
        </div>
      </div>
    </section>
    <div className="section-divider" />

    {/* Case Studies */}
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <motion.h2 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }} className="text-4xl lg:text-5xl font-black mb-6 font-display text-foreground">Success Stories</motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.7 }} className="text-muted-foreground text-lg max-w-2xl mx-auto">See how we've helped organizations successfully migrate to the cloud.</motion.p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div whileHover={{ scale: 1.02 }} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }} className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-3xl p-8 shadow-xl border border-purple-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-purple-900">F</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-purple-900">Financial Services Company</h3>
                <p className="text-muted-foreground">Migrated 500+ applications in 6 months</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">"CloudFirst's migration services helped us modernize our infrastructure while maintaining 99.9% uptime. The cost savings have been substantial."</p>
            <div className="flex gap-4 text-sm text-purple-700">
              <span>• 40% cost reduction</span>
              <span>• 99.9% uptime</span>
              <span>• Enhanced security</span>
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.7 }} className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-3xl p-8 shadow-xl border border-purple-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-purple-900">H</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-purple-900">Healthcare Provider</h3>
                <p className="text-muted-foreground">HIPAA-compliant migration of patient data</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">"The team's expertise in healthcare compliance made our migration seamless. We now have better patient care capabilities and improved data security."</p>
            <div className="flex gap-4 text-sm text-purple-700">
              <span>• HIPAA compliant</span>
              <span>• 50% faster data access</span>
              <span>• Improved patient outcomes</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default CloudMigration;
>>>>>>> 9e022dd14cd080f8ce67e225b385dbcbf33097bd
