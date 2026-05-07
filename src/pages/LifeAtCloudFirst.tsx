import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LifeAtCloudFirst = () => {
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

  // Team photos data
  const teamPhotos = [
    {
      src: "/Life at cloudfirst/annual-ofsite-visits-at0cloudfirst.jfif",
      title: "Annual Offsite Visits",
      description: "Team building and strategic planning sessions"
    },
    {
      src: "/Life at cloudfirst/christmas at cloudfirst.jfif",
      title: "Christmas Celebration",
      description: "Festive celebrations with the CloudFirst family"
    },
    {
      src: "/Life at cloudfirst/diwali celebration at cloudfirst.jfif",
      title: "Diwali Celebration",
      description: "Festival of lights celebration at CloudFirst"
    },
    {
      src: "/Life at cloudfirst/holi-celebration-at-acloudfirst.jfif",
      title: "Holi Celebration",
      description: "Colorful Holi festivities with the team"
    },
    {
      src: "/Life at cloudfirst/independence-day-celebration-at-cloudfirst.jfif",
      title: "Independence Day",
      description: "Patriotic celebrations at CloudFirst"
    },
    {
      src: "/Life at cloudfirst/makar sankranti at cloudfirst.jfif",
      title: "Makar Sankranti",
      description: "Traditional festival celebration"
    },
    {
      src: "/Life at cloudfirst/charity-work-at-cloudfirst.jfif",
      title: "Charity Work",
      description: "Giving back to the community together"
    },
    {
      src: "/Life at cloudfirst/paso.jpeg",
      title: "Diwali Celebration",
      description: "Festival of lights celebration at CloudFirst" 
    },
    {
      src: "/Life at cloudfirst/productLaunch.jpeg",
      title: "Product Launch",
      description: "Launching new ideas with passion."
    }
  ];

  // Custom arrow components
  const CustomPrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#8b5cf6",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          zIndex: 10,
          opacity: 0.8,
          transition: "opacity 0.3s"
        }}
        onClick={onClick}
        onMouseEnter={(e) => e.currentTarget.style.opacity = "1"}
        onMouseLeave={(e) => e.currentTarget.style.opacity = "0.8"}
      />
    );
  };

  const CustomNextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#8b5cf6",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          zIndex: 10,
          opacity: 0.8,
          transition: "opacity 0.3s"
        }}
        onClick={onClick}
        onMouseEnter={(e) => e.currentTarget.style.opacity = "1"}
        onMouseLeave={(e) => e.currentTarget.style.opacity = "0.8"}
      />
    );
  };

  // Carousel settings
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
    lazyLoad: 'ondemand' as const,
    swipe: true,
    swipeToSlide: true,
    touchThreshold: 10,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          swipe: true,
          swipeToSlide: true,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          swipe: true,
          swipeToSlide: true,
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      
      {/* Hero Banner Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-pink-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Life@<span className="text-purple-600">CloudFirst</span>
            </h1>
            <p className="text-xl text-gray-800 mb-8 max-w-3xl mx-auto">
              Join a team of passionate innovators building the future of cloud technology and creating lasting impact together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/current-openings"
                className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-center"
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
                src="https://www.youtube.com/embed/EOqDV-QgyaM?si=iDZmZT8jpbFio3lm"
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

      {/* Team Photos Carousel Section */}
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
            <p className="text-gray-600 text-lg">Celebrating moments, festivals, and achievements together</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
            className="team-carousel"
          >
            <Slider {...carouselSettings}>
              {teamPhotos.map((photo, index) => (
                <div key={index} className="px-2">
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="relative h-80 overflow-hidden">
                      <img
                        src={photo.src}
                        alt={photo.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        onError={(e) => {
                          console.log('Image failed to load:', photo.src);
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <h3 className="text-lg font-bold mb-1">{photo.title}</h3>
                        <p className="text-xs opacity-90">{photo.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </motion.div>
        </div>
      </section>

      {/* Employee Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-pink-50">
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
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Employee Experiences</h3>
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
                name: "Akash Singh",
                position: "Digital Marketing Specialist",
                quote: "As a Digital Marketing Specialist at CloudFirst, I've found an inspiring culture that values creativity, teamwork, and growth. The environment is supportive and dynamic, encouraging new ideas and continuous learning. It's a place where you truly grow both professionally and personally",
                avatar: "AS",
                bgColor: "bg-purple-500"
              },
              {
                name: "Deepika Verma",
                position: "Senior HR Executive",
                quote: "As a Senior HR Executive at CloudFirst, I'm proud to be part of a culture that truly values people, collaboration, and growth. The environment here is positive and inclusive, where every individual is encouraged to learn, contribute, and thrive. It's a workplace that genuinely supports both professional development and personal well-being",
                avatar: "DV",
                bgColor: "bg-blue-500"
              },
              {
                name: "Pragya Raghuvanshi",
                position: "Partner Manager",
                quote: "As a Partner Manager at CloudFirst, I've experienced a culture built on trust, collaboration, and innovation. The work environment is energetic and supportive, empowering us to build strong partnerships and drive meaningful growth. It's a place where teamwork and continuous learning truly fuel success.",
                avatar: "PR",
                bgColor: "bg-pink-500"
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
                <div className="text-4xl text-purple-300 mb-4">"</div>
                
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
              className="inline-flex items-center px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
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
