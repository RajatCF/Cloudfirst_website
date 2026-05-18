import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useEffect, useMemo, useState } from 'react';

const S3_IMAGE_BASE = 'https://cloudfirst-website-assets.s3.ap-south-1.amazonaws.com/S3_image/';
const CSR_IMAGE_1 = `${S3_IMAGE_BASE}1.png`;
const CSR_IMAGE_3 = `${S3_IMAGE_BASE}3.png`;
const CSR_IMAGE_4 = `${S3_IMAGE_BASE}4.png`;
const CSR_IMAGE_5 = `${S3_IMAGE_BASE}5.png`;

const overviewCardImages: Record<string, string[]> = {
  festivals: [
    '/cloudfirts_festivals/Holi Vibes.png',
    '/cloudfirts_festivals/Christmas Post.png',
    '/cloudfirts_festivals/WhatsApp Image 2026-03-11 at 12.06.34 (1).jpeg',
  ],
  csr: [CSR_IMAGE_1, CSR_IMAGE_3, CSR_IMAGE_4, CSR_IMAGE_5],
  offsites: [
    '/cloudfirst_offsite/Image (2).jpg',
    '/cloudfirst_offsite/Image (3).jpg',
    '/cloudfirst_offsite/Image (4).jpg',
    '/cloudfirst_offsite/image_neww.jpeg',
  ],
};

const MotionImageCarousel = ({
  images,
  alt,
  fit = 'cover',
}: {
  images: string[];
  alt: string;
  fit?: 'cover' | 'contain';
}) => {
  const shouldReduceMotion = useReducedMotion();
  const slides = useMemo(() => images.filter(Boolean), [images]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) return;
    if (slides.length <= 1) return;
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 2600);
    return () => window.clearInterval(id);
  }, [shouldReduceMotion, slides.length]);

  const current = slides[index] ?? slides[0];
  if (!current) return null;

  return (
    <div className="absolute inset-0">
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={encodeURI(current)}
          alt={alt}
          loading="lazy"
          className={`absolute inset-0 w-full h-full ${fit === 'contain' ? 'object-contain bg-white' : 'object-cover'}`}
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 1.06 }}
          animate={
            shouldReduceMotion
              ? { opacity: 1 }
              : {
                  opacity: 1,
                  scale: [1.04, 1.12, 1.04],
                  x: [0, -10, 0],
                  y: [0, -6, 0],
                }
          }
          exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : {
                  opacity: { duration: 0.45, ease: 'easeOut' },
                  scale: { duration: 10, ease: 'easeInOut', repeat: Infinity },
                  x: { duration: 10, ease: 'easeInOut', repeat: Infinity },
                  y: { duration: 10, ease: 'easeInOut', repeat: Infinity },
                }
          }
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      </AnimatePresence>
    </div>
  );
};

const LifeAtCloudFirst = () => {
  const [activeCategory, setActiveCategory] = useState<string>('festivals');
  const [viewMode, setViewMode] = useState<'overview' | 'gallery'>('overview');
  const fadeInUp = {
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

  const photoCategories = useMemo(() => {
    const categories = [
      {
        key: 'festivals',
        label: 'Festivals',
        photos: [
          { src: '/cloudfirts_festivals/Holi Vibes.png', title: 'Celebration' },
          { src: '/cloudfirts_festivals/Christmas Post.png', title: 'Celebration' },
          { src: '/cloudfirts_festivals/WhatsApp Image 2026-03-11 at 12.06.34 (1).jpeg', title: 'Celebration' },
        ],
      },
      {
        key: 'csr',
        label: 'CSR and Social Activities',
        photos: [
          { src: CSR_IMAGE_1, title: 'CSR Drive' },
          { src: CSR_IMAGE_3, title: 'CSR Drive' },
          { src: CSR_IMAGE_4, title: 'CSR Drive' },
          { src: CSR_IMAGE_5, title: 'CSR Drive' },
        ],
      },
      {
        key: 'offsites',
        label: 'Offsites & Retreats',
        photos: [
          { src: '/cloudfirst_offsite/Image (2).jpg', title: 'Offsite' },
          { src: '/cloudfirst_offsite/Image (3).jpg', title: 'Offsite' },
          { src: '/cloudfirst_offsite/Image (4).jpg', title: 'Offsite' },
          { src: '/cloudfirst_offsite/image_neww.jpeg', title: 'Offsite' },
        ],
      },
    ];

    const normalized = categories.map((c) => ({
      ...c,
      photos: c.photos.filter((p) => !p.src.toLowerCase().endsWith('.heic')),
    }));

    const safeDefault = normalized.some((c) => c.key === activeCategory) ? activeCategory : 'festivals';
    if (safeDefault !== activeCategory) setActiveCategory(safeDefault);
    return normalized;
  }, [activeCategory]);

  const activePhotos = useMemo(() => {
    return photoCategories.find((c) => c.key === activeCategory)?.photos ?? [];
  }, [photoCategories, activeCategory]);

  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      
      {/* Hero Banner Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-bright-blue/10 to-light-blue/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Life@<span className="text-bright-blue">CloudFirst</span>
            </h1>
            <p className="text-xl text-gray-800 mb-8 max-w-3xl mx-auto">
              Join a team of passionate innovators building the future of cloud technology and creating lasting impact together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/current-openings"
                className="px-8 py-3 bg-bright-blue text-white rounded-lg hover:bg-bright-blue/90 transition-colors text-center"
              >
                Explore Careers
              </Link>
              
            </div>
          </motion.div>

          
          
        </div>
      </section>

      {/* YouTube Video Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">Experience Our Culture</h2>
            <p className="text-gray-600 text-lg">See what makes CloudFirst a great place to work</p>
          </motion.div>

          <motion.div
            className="relative rounded-2xl overflow-hidden shadow-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
          >
            <div className="relative aspect-video bg-gray-900">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/083dGhbYsKE?autoplay=0&mute=0&rel=0"
                title="Life at CloudFirst - Company Culture Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full rounded-2xl"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Team in Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">Our Team in Action</h2>
            <p className="text-gray-600 text-lg">Explore celebrations, CSR initiatives, and offsites & retreats</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
            className="max-w-6xl mx-auto"
          >
            {viewMode === 'overview' ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    key: 'festivals',
                    title: 'Celebrations',
                    subtitle: 'Diwali, Holi, Independence Day, Women’s Day and more',
                  },
                  {
                    key: 'offsites',
                    title: 'Offsite & Retreats',
                    subtitle: 'Team outings, offsites, and retreats',
                  },
                  {
                    key: 'csr',
                    title: 'CSR & Social Activities',
                    subtitle: 'Community initiatives and social impact drives',
                  },
                ].map((card) => {
                  const images = overviewCardImages[card.key] ?? [];
                  const fit = card.key === 'csr' ? 'contain' : 'cover';
                  return (
                    <button
                      key={card.key}
                      type="button"
                      onClick={() => {
                        setActiveCategory(card.key);
                        setViewMode('gallery');
                      }}
                      className="group rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-lg hover:shadow-2xl transition-all text-left"
                    >
                      <div className="relative h-64 bg-gray-50 overflow-hidden">
                        <MotionImageCarousel images={images} alt={card.title} fit={fit} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                          <div className="text-xl font-bold">{card.title}</div>
                          <div className="mt-1 text-sm text-white/80">{card.subtitle}</div>
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="inline-flex items-center gap-2 text-sm font-semibold text-bright-blue">
                          View photos <span className="transition-transform group-hover:translate-x-0.5">→</span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between gap-4 mb-10">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">
                      {activeCategory === 'festivals'
                        ? 'Celebrations'
                        : activeCategory === 'offsites'
                        ? 'Offsite & Retreats'
                        : 'CSR & Social Activities'}
                    </h3>
                    <p className="mt-2 text-gray-600">
                      Explore moments from this category.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setViewMode('overview')}
                    className="px-5 py-2.5 rounded-full text-sm font-semibold border border-gray-200 bg-white hover:border-bright-blue/30 hover:text-bright-blue transition-colors"
                  >
                    ← Back
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {activePhotos.map((photo) => (
                    <div
                      key={`${activeCategory}-${photo.src}`}
                      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 text-left"
                    >
                      <div className="relative h-72 overflow-hidden bg-gray-50">
                        <img
                          src={encodeURI(photo.src)}
                          alt={photo.title}
                          className={`w-full h-full object-cover transition-transform duration-300 hover:scale-105 ${
                            activeCategory === 'csr' && photo.src === CSR_IMAGE_1 ? 'object-top' : ''
                          }`}
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </div>
                    </div>
                  ))}
                  {activePhotos.length === 0 ? (
                    <div className="sm:col-span-2 lg:col-span-3 text-center text-gray-500">
                      No images available in this category.
                    </div>
                  ) : null}
                </div>
              </>
            )}
          </motion.div>
        </div>
      </section>

      {/* Employee Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-bright-blue/10 to-light-blue/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">Hear From Our Employees</h2>
            <p className="text-gray-600 text-lg">Discover what makes CloudFirst a great place to work through the voices of our team</p>
          </motion.div>

          {/* Employee Video Section */}
          <motion.div
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
          >
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <p className="text-gray-600">Hear directly from our team about their journey at CloudFirst</p>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-gray-900">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/eqULIVq3K2I?autoplay=0&mute=0&rel=0"
                  title="Employee Experiences at CloudFirst"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full rounded-2xl"
                ></iframe>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Ankit Pal",
                position: "Software Developer",
                quote: "As a Software Developer at CloudFirst, I get to work on real-world cloud solutions with a team that values clean engineering, ownership, and continuous learning. The environment is collaborative and supportive, which helps me grow my technical skills while delivering impactful work for clients.",
                avatar: "AP",
                bgColor: "bg-bright-blue"
              },
              {
                name: "Deepika Verma",
                position: "Senior HR Executive",
                quote: "As a Senior HR Executive at CloudFirst, I'm proud to be part of a culture that truly values people, collaboration, and growth. The environment here is positive and inclusive, where every individual is encouraged to learn, contribute, and thrive. It's a workplace that genuinely supports both professional development and personal well-being",
                avatar: "DV",
                bgColor: "bg-bright-blue"
              },
              {
                name: "Pragya Raghuvanshi",
                position: "Partner Manager",
                quote: "As a Partner Manager at CloudFirst, I've experienced a culture built on trust, collaboration, and innovation. The work environment is energetic and supportive, empowering us to build strong partnerships and drive meaningful growth. It's a place where teamwork and continuous learning truly fuel success.",
                avatar: "PR",
                bgColor: "bg-bright-blue"
              },
            ].map((employee, index) => (
              <motion.div
                key={employee.name}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: index * 0.1, duration: 0.6 }
                  }
                }}
              >
                {/* Quote Icon */}
                <div className="text-4xl text-bright-blue/30 mb-4">"</div>
                
                {/* Quote Text */}
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  {employee.quote}
                </p>
                
                {/* Employee Info */}
                <div className="flex items-center">
                  <div className={`w-12 h-12 ${employee.bgColor} rounded-full flex items-center justify-center text-white font-bold text-lg mr-4`}>
                    {employee.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{employee.name}</h4>
                    <p className="text-sm text-gray-500">{employee.position}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
          >
            <p className="text-gray-600 mb-6">Ready to join our amazing team?</p>
            <Link
              to="/current-openings"
              className="inline-flex items-center px-8 py-3 bg-bright-blue text-white rounded-lg hover:bg-bright-blue/90 transition-colors"
            >
              View Open Positions
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Culture & Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">Why Choose CloudFirst?</h2>
            <p className="text-gray-600 text-lg">Experience a workplace that values innovation, growth, and work-life balance</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🚀",
                title: "Innovation Culture",
                description: "Work on cutting-edge technologies and shape the future of cloud computing with industry-leading tools and methodologies."
              },
              {
                icon: "🌍",
                title: "Remote-First",
                description: "Work from anywhere with flexible schedules, global collaboration opportunities, and comprehensive remote work support."
              },
              {
                icon: "📈",
                title: "Growth Opportunities",
                description: "Continuous learning, professional certifications, mentorship programs, and clear career advancement paths."
              },
              {
                icon: "🎯",
                title: "Impact-Driven",
                description: "Your work directly impacts clients' success and drives meaningful business outcomes for enterprises worldwide."
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: index * 0.1, duration: 0.6 }
                  }
                }}
              >
                <div className="text-4xl mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default LifeAtCloudFirst;
