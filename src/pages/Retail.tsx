import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";

const Retail = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    {/* Brief: Hero Section */}
    <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 min-h-[60vh] flex items-center bg-gradient-to-br from-orange-100 via-white to-amber-100">
      <div className="container mx-auto px-6 text-center z-10">
        <AnimatedSection>
          <motion.span initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-8 bg-amber-200 text-white">Retail & E-Commerce</motion.span>
          <motion.h1 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }} className="text-5xl lg:text-7xl font-black mb-6 font-display text-white">Transforming Retail with Cloud</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.7 }} className="text-lg lg:text-xl max-w-2xl mx-auto text-white">Empowering retailers with scalable infrastructure, real-time analytics, and AI-driven customer experiences.</motion.p>
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
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.7 }} className="text-lg text-muted-foreground mb-6">In the fast-paced world of retail and e-commerce, CloudFirst delivers the cloud infrastructure that enables seamless omnichannel experiences, real-time inventory management, and personalized customer engagement. Our platform helps retailers scale instantly during peak seasons, optimize supply chains, and leverage AI for better decision-making.</motion.p>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.7 }} className="text-lg text-muted-foreground">Whether you're a brick-and-mortar retailer expanding online, an e-commerce giant managing global operations, or a startup disrupting traditional retail models, CloudFirst provides the scalable, secure, and intelligent cloud solutions needed to thrive in today's competitive marketplace.</motion.p>
          </AnimatedSection>
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.4, duration: 0.7 }} className="relative">
            <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Retail operations" className="rounded-2xl shadow-2xl w-full h-96 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
    <div className="section-divider" />
    {/* Do you know? Facts Section */}
    <section className="py-24 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <motion.h2 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }} className="text-4xl lg:text-5xl font-black mb-6 font-display text-foreground">Do You Know?</motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.7 }} className="text-muted-foreground text-lg max-w-2xl mx-auto">Fascinating statistics about the retail industry's digital evolution and the impact of cloud technology.</motion.p>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div whileHover={{ y: -10 }} initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.7 }} className="bg-white rounded-3xl p-8 shadow-xl border border-orange-200 text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🛒</span>
            </div>
            <h3 className="font-bold text-2xl mb-4 text-orange-900">E-commerce growth</h3>
            <p className="text-muted-foreground">Online retail sales have grown exponentially, with mobile commerce accounting for over 50% of all e-commerce transactions globally.</p>
          </motion.div>
          <motion.div whileHover={{ y: -10 }} initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.7 }} className="bg-white rounded-3xl p-8 shadow-xl border border-orange-200 text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🤖</span>
            </div>
            <h3 className="font-bold text-2xl mb-4 text-orange-900">AI personalization</h3>
            <p className="text-muted-foreground">AI-driven product recommendations can increase conversion rates by up to 15%, with personalized shopping experiences becoming the new standard.</p>
          </motion.div>
          <motion.div whileHover={{ y: -10 }} initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6, duration: 0.7 }} className="bg-white rounded-3xl p-8 shadow-xl border border-orange-200 text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="font-bold text-2xl mb-4 text-orange-900">Peak scaling</h3>
            <p className="text-muted-foreground">Retailers experience 10x traffic spikes during major sales events, requiring cloud infrastructure that can scale instantly and cost-effectively.</p>
          </motion.div>
        </div>
      </div>
    </section>
    <div className="section-divider" />
    {/* How We Help? Section */}
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <motion.h2 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }} className="text-4xl lg:text-5xl font-black mb-6 font-display text-foreground">How CloudFirst Helps Retail</motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.7 }} className="text-muted-foreground text-lg max-w-2xl mx-auto">We enable retailers to deliver exceptional customer experiences, optimize operations, and drive growth through innovative cloud solutions.</motion.p>
        </AnimatedSection>
        <div className="space-y-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.7 }}>
              <h3 className="text-3xl font-bold mb-6 text-orange-900">Omnichannel Commerce Infrastructure</h3>
              <p className="text-muted-foreground mb-6">Create seamless shopping experiences across all channels with our scalable cloud infrastructure. From online stores to mobile apps and physical locations, we ensure consistent performance and real-time inventory synchronization.</p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3"><span className="text-orange-500 mt-1">•</span> Auto-scaling for peak traffic and flash sales</li>
                <li className="flex items-start gap-3"><span className="text-orange-500 mt-1">•</span> Real-time inventory management across channels</li>
                <li className="flex items-start gap-3"><span className="text-orange-500 mt-1">•</span> Unified customer data and profiles</li>
                <li className="flex items-start gap-3"><span className="text-orange-500 mt-1">•</span> Cloud-based POS and checkout systems</li>
              </ul>
            </motion.div>
            <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.7 }} className="relative">
              <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Omnichannel retail" className="rounded-2xl shadow-2xl w-full h-80 object-cover" />
            </motion.div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.6, duration: 0.7 }} className="relative">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Customer analytics" className="rounded-2xl shadow-2xl w-full h-80 object-cover" />
            </motion.div>
            <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.8, duration: 0.7 }}>
              <h3 className="text-3xl font-bold mb-6 text-orange-900">AI-Driven Customer Insights</h3>
              <p className="text-muted-foreground mb-6">Leverage advanced analytics and AI to understand customer behavior, predict trends, and deliver personalized experiences. Our platform provides actionable insights that drive revenue growth and customer loyalty.</p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3"><span className="text-orange-500 mt-1">•</span> AI-powered product recommendations</li>
                <li className="flex items-start gap-3"><span className="text-orange-500 mt-1">•</span> Real-time customer analytics dashboards</li>
                <li className="flex items-start gap-3"><span className="text-orange-500 mt-1">•</span> Predictive demand forecasting</li>
                <li className="flex items-start gap-3"><span className="text-orange-500 mt-1">•</span> Fraud detection and prevention</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
    <div className="section-divider" />
    {/* Capabilities Section */}
    <section className="py-24 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <motion.h2 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }} className="text-4xl lg:text-5xl font-black mb-6 font-display text-foreground">Capabilities for Retail</motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.7 }} className="text-muted-foreground text-lg max-w-2xl mx-auto">Our comprehensive retail capabilities enable seamless commerce, intelligent operations, and exceptional customer experiences.</motion.p>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div whileHover={{ scale: 1.05 }} initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.7 }} className="bg-white rounded-3xl p-8 shadow-xl border border-orange-200 text-center group">
            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors">
              <span className="text-3xl">🚀</span>
            </div>
            <h3 className="font-bold text-xl mb-4 text-orange-900">Auto-Scaling Infrastructure</h3>
            <p className="text-muted-foreground">Instantly scale computing resources to handle traffic spikes during sales events, ensuring optimal performance and cost efficiency.</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.7 }} className="bg-white rounded-3xl p-8 shadow-xl border border-orange-200 text-center group">
            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors">
              <span className="text-3xl">🎯</span>
            </div>
            <h3 className="font-bold text-xl mb-4 text-orange-900">AI Personalization</h3>
            <p className="text-muted-foreground">Deliver personalized shopping experiences with AI-driven product recommendations, dynamic pricing, and targeted marketing campaigns.</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6, duration: 0.7 }} className="bg-white rounded-3xl p-8 shadow-xl border border-orange-200 text-center group">
            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors">
              <span className="text-3xl">📊</span>
            </div>
            <h3 className="font-bold text-xl mb-4 text-orange-900">Real-Time Analytics</h3>
            <p className="text-muted-foreground">Gain instant insights into customer behavior, inventory levels, and sales performance with comprehensive analytics and reporting tools.</p>
          </motion.div>
        </div>
      </div>
    </section>
    <div className="section-divider" />
    {/* Services Section */}
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <motion.h2 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }} className="text-4xl lg:text-5xl font-black mb-6 font-display text-foreground">Services for Retail</motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.7 }} className="text-muted-foreground text-lg max-w-2xl mx-auto">Specialized services tailored for the retail industry's unique challenges and opportunities.</motion.p>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div whileHover={{ y: -10 }} initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.7 }} className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8 shadow-xl border border-orange-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🛍️</span>
              </div>
              <h3 className="text-2xl font-bold text-orange-900">E-Commerce Platform Development</h3>
            </div>
            <p className="text-muted-foreground mb-6">Build scalable, high-performance e-commerce platforms with integrated payment processing, inventory management, and customer engagement features.</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Custom e-commerce platform development</li>
              <li>• Payment gateway integration</li>
              <li>• Mobile commerce optimization</li>
              <li>• Multi-channel order management</li>
            </ul>
          </motion.div>
          <motion.div whileHover={{ y: -10 }} initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.7 }} className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8 shadow-xl border border-orange-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-2xl font-bold text-orange-900">Retail Analytics & Intelligence</h3>
            </div>
            <p className="text-muted-foreground mb-6">Transform retail data into actionable insights with advanced analytics, AI-driven forecasting, and comprehensive business intelligence solutions.</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Customer behavior analysis</li>
              <li>• Sales forecasting and optimization</li>
              <li>• Supply chain analytics</li>
              <li>• Performance dashboards and reporting</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default Retail;
