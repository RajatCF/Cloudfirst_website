import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";

const MediaEntertainment = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    {/* Brief: Hero Section */}
    <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 min-h-[60vh] flex items-center bg-gradient-to-br from-pink-100 via-white to-rose-100">
      <div className="container mx-auto px-6 text-center z-10">
        <AnimatedSection>
          <motion.span initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-8 bg-pink-200 text-white">Media & Entertainment</motion.span>
          <motion.h1 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }} className="text-5xl lg:text-7xl font-black mb-6 font-display text-white">Empowering Media with Cloud</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.7 }} className="text-lg lg:text-xl max-w-2xl mx-auto text-white">Delivering seamless streaming, content management, and real-time analytics for creators and distributors worldwide.</motion.p>
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
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.7 }} className="text-lg text-muted-foreground mb-6">In the dynamic world of media and entertainment, CloudFirst empowers creators, broadcasters, and distributors with cutting-edge cloud solutions. Our platform enables seamless content creation, global distribution, and personalized audience engagement. From live streaming events to AI-driven content recommendations, we provide the infrastructure and tools needed to thrive in the digital age.</motion.p>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.7 }} className="text-lg text-muted-foreground">Whether you're a filmmaker producing blockbuster movies, a streamer reaching millions, or a content creator building your brand, CloudFirst's scalable cloud technology ensures your media reaches the right audience at the right time, with unparalleled quality and efficiency.</motion.p>
          </AnimatedSection>
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.4, duration: 0.7 }} className="relative">
            <img src="https://images.unsplash.com/photo-1489599735734-79b4d4c4b5b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Media production studio" className="rounded-2xl shadow-2xl w-full h-96 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
    <div className="section-divider" />
    {/* Do you know? Facts Section */}
    <section className="py-24 bg-gradient-to-br from-pink-50 to-rose-50">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <motion.h2 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }} className="text-4xl lg:text-5xl font-black mb-6 font-display text-foreground">Do You Know?</motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.7 }} className="text-muted-foreground text-lg max-w-2xl mx-auto">Fascinating facts about the media and entertainment industry that highlight the transformative power of cloud technology.</motion.p>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div whileHover={{ y: -10 }} initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.7 }} className="bg-white rounded-3xl p-8 shadow-xl border border-pink-200 text-center">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📹</span>
            </div>
            <h3 className="font-bold text-2xl mb-4 text-pink-900">80% of internet traffic</h3>
            <p className="text-muted-foreground">Video content dominates global internet usage, with streaming services accounting for the majority of data consumption worldwide.</p>
          </motion.div>
          <motion.div whileHover={{ y: -10 }} initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.7 }} className="bg-white rounded-3xl p-8 shadow-xl border border-pink-200 text-center">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🤖</span>
            </div>
            <h3 className="font-bold text-2xl mb-4 text-pink-900">AI-Powered Recommendations</h3>
            <p className="text-muted-foreground">Artificial intelligence analyzes viewer preferences to deliver personalized content suggestions, increasing engagement by up to 50%.</p>
          </motion.div>
          <motion.div whileHover={{ y: -10 }} initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6, duration: 0.7 }} className="bg-white rounded-3xl p-8 shadow-xl border border-pink-200 text-center">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌍</span>
            </div>
            <h3 className="font-bold text-2xl mb-4 text-pink-900">Global Reach</h3>
            <p className="text-muted-foreground">Cloud infrastructure enables media companies to instantly scale their content delivery to millions of viewers across the globe simultaneously.</p>
          </motion.div>
        </div>
      </div>
    </section>
    <div className="section-divider" />
    {/* How We Help? Section */}
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <motion.h2 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }} className="text-4xl lg:text-5xl font-black mb-6 font-display text-foreground">How CloudFirst Helps Media & Entertainment</motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.7 }} className="text-muted-foreground text-lg max-w-2xl mx-auto">We enable creators, broadcasters, and distributors to deliver high-quality content, optimize workflows, and engage audiences globally through innovative cloud solutions.</motion.p>
        </AnimatedSection>
        <div className="space-y-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.7 }}>
              <h3 className="text-3xl font-bold mb-6 text-pink-900">Streaming Infrastructure</h3>
              <p className="text-muted-foreground mb-6">Our robust streaming infrastructure ensures your content reaches audiences worldwide with minimal latency and maximum quality. From live events to on-demand streaming, we handle the heavy lifting so you can focus on creating amazing content.</p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3"><span className="text-pink-500 mt-1">•</span> Global CDN for ultra-low latency delivery</li>
                <li className="flex items-start gap-3"><span className="text-pink-500 mt-1">•</span> Automated media transcoding and processing</li>
                <li className="flex items-start gap-3"><span className="text-pink-500 mt-1">•</span> Real-time analytics and audience insights</li>
                <li className="flex items-start gap-3"><span className="text-pink-500 mt-1">•</span> Scalable infrastructure for peak viewing times</li>
              </ul>
            </motion.div>
            <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.7 }} className="relative">
              <img src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Streaming infrastructure" className="rounded-2xl shadow-2xl w-full h-80 object-cover" />
            </motion.div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.6, duration: 0.7 }} className="relative">
              <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Creator tools" className="rounded-2xl shadow-2xl w-full h-80 object-cover" />
            </motion.div>
            <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.8, duration: 0.7 }}>
              <h3 className="text-3xl font-bold mb-6 text-pink-900">Creator Tools & Collaboration</h3>
              <p className="text-muted-foreground mb-6">Empower your creative team with cloud-based tools that facilitate seamless collaboration and efficient workflows. From scriptwriting to post-production, our platform supports every stage of content creation.</p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3"><span className="text-pink-500 mt-1">•</span> Cloud-based video editing and collaboration</li>
                <li className="flex items-start gap-3"><span className="text-pink-500 mt-1">•</span> AI-powered content analysis and recommendations</li>
                <li className="flex items-start gap-3"><span className="text-pink-500 mt-1">•</span> Secure digital rights management</li>
                <li className="flex items-start gap-3"><span className="text-pink-500 mt-1">•</span> Integrated monetization and distribution platforms</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
    <div className="section-divider" />
    {/* Capabilities Section */}
    <section className="py-24 bg-gradient-to-br from-pink-50 to-rose-50">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <motion.h2 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }} className="text-4xl lg:text-5xl font-black mb-6 font-display text-foreground">Capabilities for Media & Entertainment</motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.7 }} className="text-muted-foreground text-lg max-w-2xl mx-auto">Our comprehensive suite of capabilities empowers media companies to innovate, scale, and deliver exceptional experiences.</motion.p>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div whileHover={{ scale: 1.05 }} initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.7 }} className="bg-white rounded-3xl p-8 shadow-xl border border-pink-200 text-center group">
            <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-pink-200 transition-colors">
              <span className="text-3xl">🎬</span>
            </div>
            <h3 className="font-bold text-xl mb-4 text-pink-900">Cloud Video Processing</h3>
            <p className="text-muted-foreground">Automated transcoding, intelligent editing, and seamless delivery pipelines that handle any format or resolution with lightning-fast processing speeds.</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.7 }} className="bg-white rounded-3xl p-8 shadow-xl border border-pink-200 text-center group">
            <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-pink-200 transition-colors">
              <span className="text-3xl">🎯</span>
            </div>
            <h3 className="font-bold text-xl mb-4 text-pink-900">AI Content Intelligence</h3>
            <p className="text-muted-foreground">Advanced AI algorithms analyze content to provide personalized recommendations, automated tagging, and predictive analytics for optimal audience engagement.</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6, duration: 0.7 }} className="bg-white rounded-3xl p-8 shadow-xl border border-pink-200 text-center group">
            <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-pink-200 transition-colors">
              <span className="text-3xl">🚀</span>
            </div>
            <h3 className="font-bold text-xl mb-4 text-pink-900">Global Distribution</h3>
            <p className="text-muted-foreground">Instant scaling to millions of viewers worldwide with our distributed network of edge locations, ensuring consistent quality and minimal latency globally.</p>
          </motion.div>
        </div>
      </div>
    </section>
    <div className="section-divider" />
    {/* Services Section */}
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <motion.h2 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }} className="text-4xl lg:text-5xl font-black mb-6 font-display text-foreground">Services for Media & Entertainment</motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.7 }} className="text-muted-foreground text-lg max-w-2xl mx-auto">Explore our specialized services designed specifically for the media and entertainment industry.</motion.p>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div whileHover={{ y: -10 }} initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.7 }} className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-8 shadow-xl border border-pink-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">📺</span>
              </div>
              <h3 className="text-2xl font-bold text-pink-900">Live Event Streaming</h3>
            </div>
            <p className="text-muted-foreground mb-6">Deliver unforgettable live experiences with our high-quality, low-latency streaming solutions. From concerts to sports events, we ensure your audience gets the best possible viewing experience.</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Ultra-low latency streaming technology</li>
              <li>• Global CDN integration for worldwide reach</li>
              <li>• Real-time analytics and interactive features</li>
              <li>• Multi-platform broadcasting capabilities</li>
            </ul>
          </motion.div>
          <motion.div whileHover={{ y: -10 }} initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.7 }} className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-8 shadow-xl border border-pink-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-2xl font-bold text-pink-900">Content Management & Monetization</h3>
            </div>
            <p className="text-muted-foreground mb-6">Maximize your content's value with our comprehensive management and monetization platform. Protect your intellectual property while optimizing revenue streams.</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Secure digital rights management (DRM)</li>
              <li>• Multi-channel monetization strategies</li>
              <li>• Cloud-based content storage and delivery</li>
              <li>• Advanced analytics for revenue optimization</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default MediaEntertainment;
