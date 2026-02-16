
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// ...existing code...

// ...all your event, images, and tab data from your provided code
// (copying all the eventDetails, images, yearlyEvents, etc. as in your code)

// (Insert all the code you provided for ResourceEvents here, but wrap with Navbar and Footer)


// --- ResourceEvents component code starts here ---


import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, ArrowLeft, ExternalLink } from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const images = {
  dubai: [
    "https://gragwebsite.s3.ap-south-1.amazonaws.com/Dubai+Pics/WhatsApp+Image+2025-04-24+at+6.22.46+PM+(1).jpeg",
    "https://gragwebsite.s3.ap-south-1.amazonaws.com/Dubai+Pics/WhatsApp+Image+2025-04-24+at+6.23.00+PM+(1).jpeg",
    "https://gragwebsite.s3.ap-south-1.amazonaws.com/Dubai+Pics/WhatsApp+Image+2025-04-24+at+6.25.04+PM.jpeg",
    "https://gragwebsite.s3.ap-south-1.amazonaws.com/Dubai+Pics/WhatsApp+Image+2025-04-24+at+6.25.05+PM.jpeg",
    "https://gragwebsite.s3.ap-south-1.amazonaws.com/Dubai+Pics/WhatsApp+Image+2025-04-24+at+6.25.06+PM.jpeg",
    "https://gragwebsite.s3.ap-south-1.amazonaws.com/Dubai+Pics/WhatsApp+Image+2025-04-24+at+6.25.12+PM.jpeg",
    "https://gragwebsite.s3.ap-south-1.amazonaws.com/Dubai+Pics/WhatsApp+Image+2025-04-24+at+6.35.34+PM.jpeg",
    "https://gragwebsite.s3.ap-south-1.amazonaws.com/Dubai+Pics/WhatsApp+Image+2025-04-24+at+8.05.32+PM.jpeg",
    "https://gragwebsite.s3.ap-south-1.amazonaws.com/Dubai+Pics/WhatsApp+Image+2025-04-24+at+8.05.36+PM.jpeg",
    "https://gragwebsite.s3.ap-south-1.amazonaws.com/Dubai+Pics/WhatsApp+Image+2025-04-24+at+8.05.56+PM.jpeg",
  ],
  london: [
    "https://gragwebsite.s3.ap-south-1.amazonaws.com/London+Pics/1750014704224.jpeg",
    "https://gragwebsite.s3.ap-south-1.amazonaws.com/London+Pics/Ashish+sir's+LTW+Pic.jpg",
    "https://gragwebsite.s3.ap-south-1.amazonaws.com/London+Pics/IMG-20250612-WA0001.jpg",
  ],
  slovakia: [
    "https://gragwebsite.s3.ap-south-1.amazonaws.com/London+Pics/Slovakia+Pics/1000001380.jpeg",
    "https://gragwebsite.s3.ap-south-1.amazonaws.com/London+Pics/Slovakia+Pics/1744912521330.jpg",
    "https://gragwebsite.s3.ap-south-1.amazonaws.com/London+Pics/Slovakia+Pics/Solvakia+image.jpg",
  ],
};

const eventDetails = {
  dubai: {
    title: "CloudFirst Dubai Summit ",
    description: "Annual technology conference showcasing cloud innovations and networking opportunities",
    date: "April 2024",
    location: "Dubai, UAE",
    attendees: "200+",
    highlights: "Keynote speeches, product launches, and strategic partnerships"
  },
  london: {
    title: "London Tech Week ",
    description: "Participating in Europe's largest technology festival with industry leaders",
    date: "June 2024", 
    location: "London, UK",
    attendees: "150+",
    highlights: "Panel discussions, tech demos, and client meetings"
  },
  slovakia: {
    title: "Slovakia Innovation Hub",
    description: "Exploring opportunities in Central European markets and partnerships",
    date: "March 2024",
    location: "Bratislava, Slovakia", 
    attendees: "80+",
    highlights: "Market research, partnership meetings, and cultural exchange"
  },
};

const eventThumbnails = {
  dubai: "https://gragwebsite.s3.ap-south-1.amazonaws.com/Dubai+Pics/WhatsApp+Image+2025-04-24+at+6.25.05+PM.jpeg",
  london: "https://gragwebsite.s3.ap-south-1.amazonaws.com/London+Pics/1750014704224.jpeg",
  slovakia: "https://gragwebsite.s3.ap-south-1.amazonaws.com/London+Pics/Slovakia+Pics/Solvakia+image.jpg",
};

// ...existing code for yearlyEvents, eventTabs, tabImages, all render functions, and the main component logic from your message...



const Event = () => {
  const [selectedEvent, setSelectedEvent] = useState<keyof typeof images | null>(null);
  const [galleryIndex, setGalleryIndex] = useState(-1);

  // Hero Section
  const hero = (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3')] bg-cover bg-center opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Events & <span className="text-blue-300">Highlights</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90">
            Explore the moments, conferences, and milestones where CloudFirst made an impact. 
            Discover our journey through event photos and highlights.
          </p>
        </motion.div>
      </div>
    </section>
  );

  // Card overview
  const overview = (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-semibold text-gray-900 mb-4">Our Event Journey</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover CloudFirst's global presence through our participation in major technology events, 
          conferences, and strategic meetings worldwide.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(eventDetails).map(([key, details], idx) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
            onClick={() => setSelectedEvent(key as keyof typeof images)}
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={eventThumbnails[key as keyof typeof eventThumbnails]}
                alt={details.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-xl font-bold mb-1">{details.title}</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4 line-clamp-2">{details.description}</p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="w-4 h-4 mr-2" />
                  {details.location}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-blue-600">
                  {images[key as keyof typeof images].length} photos
                </span>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  // Gallery for selected event
  const gallery = selectedEvent ? (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <button
          onClick={() => setSelectedEvent(null)}
          className="flex items-center text-blue-600 hover:text-blue-800 font-medium mb-6 group transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Events
        </button>
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{eventDetails[selectedEvent].title}</h1>
          <p className="text-lg text-gray-600 mb-6">{eventDetails[selectedEvent].description}</p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Event Gallery ({images[selectedEvent].length} photos)</h2>
        <div className={`grid gap-4 justify-items-center ${
          images[selectedEvent].length === 1 
            ? 'grid-cols-1' 
            : images[selectedEvent].length === 2 
            ? 'grid-cols-1 md:grid-cols-2' 
            : images[selectedEvent].length === 3 
            ? 'grid-cols-1 md:grid-cols-3' 
            : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
        }`}>
          {images[selectedEvent].map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className={`group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer ${
                images[selectedEvent].length === 1 ? 'max-w-md w-full' : 'w-full'
              }`}
              onClick={() => setGalleryIndex(idx)}
            >
              <img
                src={src}
                alt={`${selectedEvent} highlight ${idx + 1}`}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm rounded-full p-3">
                  <ExternalLink className="w-5 h-5 text-gray-800" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <Lightbox
        open={galleryIndex >= 0}
        close={() => setGalleryIndex(-1)}
        slides={images[selectedEvent].map((src) => ({ src }))}
        index={galleryIndex}
      />
    </div>
  ) : null;

  return (
    <>
      <Navbar />
      {hero}
      <div className="min-h-screen bg-gray-50">
        {selectedEvent ? gallery : overview}
      </div>
      <Footer />
    </>
  );
};

export default Event;
