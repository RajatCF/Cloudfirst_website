import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Play } from 'lucide-react';
import Layout from '@/components/Layout';

const CloudFirstVideos = () => {
  const fadeInUp: Variants = {
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

  // YouTube video URLs from your HTML
  const youtubeVideos = [
    {
      id: "jZUid6W4MBk",
      title: "ASSOCHAM India Summit - Making India a Global Data Hub",
      description: "A proud partner of 2nd Annual ASSOCHAM India summit on \"Datacentres & Cloud Infrastructure Summit\" with theme \"Making India a Global Data Hub\".",
      featured: true
    },
    {
      id: "26y-MEXLB1s",
      title: "CloudFirst Technology Solutions"
    },
    {
      id: "i4Iv7gpbaYU", 
      title: "Cloud Infrastructure Overview"
    },
    {
      id: "28tTHZPQGxQ",
      title: "Digital Transformation Journey"
    },
    {
      id: "HXz927hzQkM",
      title: "Enterprise Cloud Solutions"
    },
    {
      id: "-csE7RLy5OQ",
      title: "Cloud Security Best Practices"
    },
    {
      id: "7VZau9gRCFw",
      title: "Modern Cloud Architecture"
    }
  ];

 


  return (
    <Layout>
      <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50 to-pink-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              CloudFirst<span className="text-red-600">@Videos</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
             Watch CloudFirst in action, from thought leadership sessions and industry summits to product demos and technology insights. Stay informed and inspired with curated videos that showcase our expertise in cloud, data centre, and digital transformation solutions.
            </p>
            
          </motion.div>

         
        </div>
      </section>

      {/* Featured YouTube Videos Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          

          {/* Featured Video Section */}
          <motion.div
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
          >
            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-center mb-6">
                  {/* <p className="text-lg text-gray-700 leading-relaxed">
                    {youtubeVideos[0].description}
                  </p> */}
                </div>
                
                {/* Featured Video Embed */}
                <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${youtubeVideos[0].id}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  ></iframe>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Regular Videos Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
          >
            {youtubeVideos.slice(1).map((video, index) => (
              <motion.div
                key={video.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      duration: 0.6, 
                      delay: index * 0.1,
                      ease: "easeOut" as const
                    }
                  }
                }}
              >
                <div className="relative aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  ></iframe>
                </div>
                
                {video.title && (
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {video.title}
                    </h3>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* See More Videos Button */}
          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
          >
            <a
              href="https://www.youtube.com/channel/UCsMraXp-RnQ9c7orJXXoBhQ"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg"
            >
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                <Play className="w-5 h-5" />
              </div>
              <span className="text-lg">See More Videos</span>
              <div className="w-2 h-2 bg-white rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </motion.div>
        </div>
      </section>

    

   
    </div>
    </Layout>
  );
};

export default CloudFirstVideos;
