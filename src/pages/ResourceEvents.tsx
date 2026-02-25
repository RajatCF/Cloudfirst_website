import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { MapPin,  ArrowLeft, ExternalLink, ChevronDown } from "lucide-react";
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

const ResourceEvents = () => {
  const [selectedEvent, setSelectedEvent] = useState<keyof typeof images | null>(null);
  const [index, setIndex] = useState(-1); // For tab gallery
  const [eventIndex, setEventIndex] = useState(-1); // For event gallery
  const [activeTab, setActiveTab] = useState<string>('overview'); // Changed back to 'overview' to show event cards by default
  const [selectedYear, setSelectedYear] = useState<string>('2025'); // New state for year selection
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // New state for dropdown

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.dropdown-container')) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isDropdownOpen]);

  // Years data with events
  const yearlyEvents = {
    '2025': [
      {
        id: 'ashish-sir-president-2025',
        title: 'Presidential Recognition 2025',
        description: 'Special recognition and meeting with dignitaries',
        date: '2025',
        location: 'India',
        attendees: 'CloudFirst Leadership',
        images: [
          "https://cloudfirst-website-assets.s3.ap-south-1.amazonaws.com/events/AshishSirWithPresident.jpg"
        ]
      }
    ],
    '2024': [
      {
        id: 'mumbai-event-2024',
        title: 'Mumbai Business Event 2024',
        description: 'Strategic business meetings and networking in Mumbai',
        date: '2024',
        location: 'Mumbai, India',
        attendees: '100+',
        images: [
          "https://cloudfirst-website-assets.s3.ap-south-1.amazonaws.com/events/2023/mumbai-event.jpg",
          "https://cloudfirst-website-assets.s3.ap-south-1.amazonaws.com/events/2024/mumbai-event-2024.jpg"
        ]
      },
      {
        id: 'yotta-visit-2024',
        title: 'Yotta Data Centers Visit 2024',
        description: 'Strategic partnership visit to Yotta Data Centers',
        date: '2024',
        location: 'India',
        attendees: 'CloudFirst Leadership',
        images: [
          "https://cloudfirst-website-assets.s3.ap-south-1.amazonaws.com/events/2024/yotta-visit.jpg"
        ]
      }
    ],
    '2023': [
      {
        id: 'go-global-award-2023',
        title: 'Go Global Award 2023',
        description: 'Recognition for global business expansion and excellence',
        date: '2023',
        location: 'India',
        attendees: 'CloudFirst Leadership',
        images: [
          "https://cloudfirst-website-assets.s3.ap-south-1.amazonaws.com/events/2023/go-global-award-2023.jpg"
        ]
      },
      {
        id: 'assocham5-2023',
        title: 'ASSOCHAM Business Summit 2023',
        description: 'Participating in ASSOCHAM business and industry summit',
        date: '2023',
        location: 'India',
        attendees: '200+',
        images: [
          "https://cloudfirst-website-assets.s3.ap-south-1.amazonaws.com/events/2023/assocham5.webp"
        ]
      },
      {
        id: 'nataji-event-2023',
        title: 'Netaji Subhas Chandra Bose Event 2023',
        description: 'Cultural and commemorative event honoring national heritage',
        date: '2023',
        location: 'India',
        attendees: '100+',
        images: [
          "https://cloudfirst-website-assets.s3.ap-south-1.amazonaws.com/events/2023/nataji-event.webp",
          "https://cloudfirst-website-assets.s3.ap-south-1.amazonaws.com/events/2023/nataji-event.webp"
        ]
      },
      {
        id: 'aws2023',
        title: 'AWS Conference 2023',
        description: 'Annual AWS technology conference and networking',
        date: '2023',
        location: 'India',
        attendees: '300+',
        images: [
          "https://cloudfirst-website-assets.s3.ap-south-1.amazonaws.com/events/2023/aws2023.webp"
        ]
      },
      {
        id: 'techsparks-2023',
        title: 'TechSparks 2023',
        description: 'Technology innovation summit and startup ecosystem event',
        date: '2023',
        location: 'India',
        attendees: '250+',
        images: [
          "https://cloudfirst-website-assets.s3.ap-south-1.amazonaws.com/events/2023/techsparks.webp"
        ]
      },
      {
        id: 'aws-gpai-2023',
        title: 'AWS GPAI Summit 2023',
        description: 'Global Partnership on AI and AWS technology summit',
        date: '2023',
        location: 'India',
        attendees: '150+',
        images: [
          "https://cloudfirst-website-assets.s3.ap-south-1.amazonaws.com/events/2023/aws-gpai.webp"
        ]
      }
    ],
    '2022': [
      {
        id: 'microsoft-meeting-2022',
        title: 'Microsoft 365 Meeting',
        description: 'Strategic partnership meeting with Microsoft for Office 365 solutions',
        date: '2022',
        location: 'India',
        attendees: 'CloudFirst & Microsoft Teams',
        images: [
          "https://cloudfirst-website-assets.s3.ap-south-1.amazonaws.com/events/2022/microsoft.webp"
        ]
      }
    ],
    '2021': [
      {
        id: 'assocham-datacenter-2021',
        title: '2nd ASSOCHAM India Smart Datacentres & Cloud Infrastructure Summit 2021',
        description: 'CloudFirst Technology was a proud partner of 2nd ASSOCHAM "India Smart Datacentres & Cloud Infrastructure Summit 2021" organized on 29th September 2021. We are happy to inform that Anupriya Patel, Hon\'ble Minister of State for Commerce and Industry of India was Chief Guest on the above occasion and he delivered the keynote address.',
        date: 'September 29, 2021',
        location: 'India',
        attendees: '200+',
        images: [
          "https://cloudfirst-website-assets.s3.ap-south-1.amazonaws.com/events/2021/assocham2.webp"
        ]
      }
    ],
    '2020': [
      {
        id: 'assocham-foundation-2020',
        title: 'ASSOCHAM Foundation Week 2020 & ASSOCHAM celebrated completion of 100 years',
        description: 'We are Invited to attend ASSOCHAM Foundation Week 2020 on 19th December, 2020. We are happy to inform that Shri Narendra Modi, Hon\'ble Prime Minister of India as Chief Guest on the above occasion and he delivered the keynote address the Indian and Global industry. One of India\'s most distinguished business leader and a dedicated philanthropist, Mr. Ratan Tata receiveed the prestigious – \'ASSOCHAM Enterprise of the Century Award\' on behalf of TATA Group by Hon\'ble Prime Minister Shri Narendra Modi.',
        date: 'December 19, 2020',
        location: 'India',
        attendees: '500+',
        images: [
          "https://cloudfirst-website-assets.s3.ap-south-1.amazonaws.com/events/2020/assocham-foundation.webp"
        ]
      }
    ],
    '2019': [
      {
        id: 'business-summit-2019',
        title: 'Business Summit 2019',
        description: 'Strategic business networking and industry partnerships',
        date: '2019',
        location: 'India',
        attendees: '150+',
        images: [
          "https://cloudfirst-website-assets.s3.ap-south-1.amazonaws.com/events/2019/business-submmit.webp"
        ]
      },
      {
        id: 'aws-summit-2019',
        title: 'AWS Summit 2019',
        description: 'Participating in AWS flagship cloud computing summit',
        date: '2019',
        location: 'India',
        attendees: '300+',
        images: [
          "https://cloudfirst-website-assets.s3.ap-south-1.amazonaws.com/events/2019/aws.webp"
        ]
      },
      {
        id: 'exhibitions-2019',
        title: 'Technology Exhibitions 2019',
        description: 'Showcasing cloud solutions at technology exhibitions',
        date: '2019',
        location: 'Various Locations',
        attendees: '200+',
        images: [
          "https://cloudfirst-website-assets.s3.ap-south-1.amazonaws.com/events/2019/exhibitions.webp"
        ]
      }
    ]
  };

  // Type definition for event items
  // type EventItem = typeof yearlyEvents[keyof typeof yearlyEvents][0];

  // Event tabs configuration - updated
  const eventTabs = [
    { id: 'overview', label: 'Event Overview', isDefault: true },
    { id: 'events', label: 'Events' },
    { id: 'dubai', label: 'Dubai Business Summit' },
    { id: 'london', label: 'London Tech Conference' },
    { id: 'slovakia', label: 'Slovak-India Business Forum' },
    { id: 'csr', label: 'Corporate Social Responsibility' },
    { id: 'scaleup', label: 'ScaleUp Masterclass With Girish Mathrubootham' }
  ];

  // Dummy images for new tabs (you can replace these later)
  const tabImages = {
    csr: [
      "https://cloudfirst-website-assets.s3.ap-south-1.amazonaws.com/events/csr/csr.webp"
    ],
    scaleup: [
      "https://cloudfirst-website-assets.s3.ap-south-1.amazonaws.com/events/masterclass/masterclass.webp"
    ]
  };

  // Get current images based on active tab
  const getCurrentImages = () => {
    if (activeTab === 'overview') return null;
    if (activeTab === 'events') return null; // Events tab shows yearly events, not images
    if (activeTab in images) return images[activeTab as keyof typeof images];
    if (activeTab in tabImages) return tabImages[activeTab as keyof typeof tabImages];
    return [];
  };

  const getCurrentDetails = () => {
    if (activeTab in eventDetails) return eventDetails[activeTab as keyof typeof eventDetails];
    
    // Default details for new tabs
    const defaultDetails = {
      csr: {
        title: "Corporate Social Responsibility",
        description: "Our commitment to giving back to the community",
        date: "Ongoing",
        location: "Various Communities",
        attendees: "CloudFirst Team & Communities",
        highlights: "Community service and social impact initiatives"
      },
      scaleup: {
        title: "ScaleUp Masterclass With Girish Mathrubootham",
        description: "Learning from industry leaders and scaling strategies",
        date: "Recent",
        location: "India",
        attendees: "50+",
        highlights: "Entrepreneurship insights and scaling strategies"
      }
    };

    return defaultDetails[activeTab as keyof typeof defaultDetails] || eventDetails.dubai;
  };

  // Tab Navigation Component
  const renderTabNavigation = () => (
    <div className="bg-white shadow-sm border-b sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center py-4 gap-2">
          {eventTabs.map((tab) => (
            tab.id === 'events' ? (
              // Events dropdown
              <div key={tab.id} className="relative dropdown-container">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 border flex items-center gap-2 ${
                    activeTab === 'events'
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white border-blue-500 shadow-lg'
                      : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  {tab.label}
                  <ChevronDown 
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isDropdownOpen ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                
                {/* Dropdown menu */}
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                    <div className="py-2">
                      {Object.keys(yearlyEvents).map((year) => (
                        <button
                          key={year}
                          onClick={() => {
                            if (year === '2025') {
                              // For 2025, show event overview instead
                              setActiveTab('overview');
                            } else {
                              setSelectedYear(year);
                              setActiveTab('events');
                            }
                            setIsDropdownOpen(false);
                          }}
                          className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                            selectedYear === year
                              ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-500'
                              : 'text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          {year}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              // Regular tabs
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setSelectedEvent(null); // Reset selected event when changing tabs
                }}
                className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 border ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white border-blue-500 shadow-lg'
                    : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                }`}
              >
                {tab.label}
              </button>
            )
          ))}
        </div>
      </div>
    </div>
  );

  // Render yearly events based on selected year
  const renderYearlyEvents = () => {
    const events = yearlyEvents[selectedYear as keyof typeof yearlyEvents] || [];
    
    // For year 2025, show card layout like event overview
    if (selectedYear === '2025') {
      return (
        <div className="max-w-7xl mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-semibold text-gray-900 mb-4">Events {selectedYear}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our events and activities from {selectedYear}
            </p>
          </motion.div>

          {events.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event, idx) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
                  onClick={() => setIndex(idx)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={event.images[0]}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-xl font-bold mb-1">{event.title}</h3>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="w-4 h-4 mr-2" />
                        {event.location}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-blue-600">
                        {event.images.length} {event.images.length === 1 ? 'photo' : 'photos'}
                      </span>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">📅</div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No Events Found</h3>
              <p className="text-gray-500">No events are available for {selectedYear}.</p>
            </div>
          )}

          {/* Lightbox for 2025 events */}
          <Lightbox
            open={index >= 0}
            close={() => setIndex(-1)}
            slides={events.flatMap(event => event.images).map((src) => ({ src }))}
            index={index}
          />
        </div>
      );
    }

    // For other years, show gallery layout
    // Collect all images from events for the selected year
    const allImages: string[] = [];
    events.forEach(event => {
      allImages.push(...event.images);
    });
    
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-gray-900 mb-4">
            Events {selectedYear}
          </h2>
          <p className="text-gray-600 text-lg">
            Explore our events and activities from {selectedYear}
          </p>
        </div>

        {allImages.length > 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Event Gallery ({allImages.length} photos)</h2>
            
            {/* Dynamic grid layout based on number of images */}
            <div className={`grid gap-4 ${
              allImages.length === 1 
                ? 'grid-cols-1 justify-items-center' 
                : allImages.length === 2 
                ? 'grid-cols-1 md:grid-cols-2' 
                : allImages.length === 3 
                ? 'grid-cols-1 md:grid-cols-3' 
                : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
            }`}>
              {allImages.map((src, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className={`group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer ${
                    allImages.length === 1 ? 'max-w-md mx-auto' : ''
                  }`}
                  onClick={() => setIndex(idx)}
                >
                  <img
                    src={src}
                    alt={`${selectedYear} event ${idx + 1}`}
                    className="w-full h-64 object-contain group-hover:scale-110 transition-transform duration-500 bg-gray-50"
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

            {/* Lightbox for year gallery */}
            <Lightbox
              open={index >= 0}
              close={() => setIndex(-1)}
              slides={allImages.map((src) => ({ src }))}
              index={index}
            />
          </motion.div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">📅</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No Events Found</h3>
            <p className="text-gray-500">No events are available for {selectedYear}.</p>
          </div>
        )}
      </div>
    );
  };

  // Render tab-specific image gallery
  const renderTabGallery = () => {
    const imgs = getCurrentImages();
    const details = getCurrentDetails();

    if (!imgs || imgs.length === 0) return null;

    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Event Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{details.title}</h1>
          <p className="text-lg text-gray-600 mb-6">{details.description}</p>
        </motion.div>

        {/* Photo Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Event Gallery ({imgs.length} photos)</h2>
          
          {/* Dynamic grid layout based on number of images */}
          <div className={`grid gap-4 justify-items-center ${
            imgs.length === 1 
              ? 'grid-cols-1' 
              : imgs.length === 2 
              ? 'grid-cols-1 md:grid-cols-2' 
              : imgs.length === 3 
              ? 'grid-cols-1 md:grid-cols-3' 
              : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
          }`}>
            {imgs.map((src, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer ${
                  imgs.length === 1 ? 'max-w-md w-full' : 'w-full'
                }`}
                onClick={() => setIndex(idx)}
              >
                <img
                  src={src}
                  alt={`${activeTab} highlight ${idx + 1}`}
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

        {/* Lightbox for tab gallery */}
        <Lightbox
          open={index >= 0}
          close={() => setIndex(-1)}
          slides={imgs.map((src) => ({ src }))}
          index={index}
        />
      </div>
    );
  };

  const renderEventCards = () => (
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
                {/* <div className="flex items-center text-sm opacity-90">
                  <Calendar className="w-4 h-4 mr-1" />
                  {details.date}
                </div> */}
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-gray-600 mb-4 line-clamp-2">{details.description}</p>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="w-4 h-4 mr-2" />
                  {details.location}
                </div>
                {/* <div className="flex items-center text-sm text-gray-500">
                  <Users className="w-4 h-4 mr-2" />
                  {details.attendees} attendees
                </div> */}
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

  const renderGallery = () => {
    if (!selectedEvent) return null;
    
    const imgs = images[selectedEvent];
    const details = eventDetails[selectedEvent];

    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Back Button & Event Header */}
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
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{details.title}</h1>
            <p className="text-lg text-gray-600 mb-6">{details.description}</p>
          </div>
        </motion.div>

        {/* Photo Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Event Gallery ({imgs.length} photos)</h2>
          
          {/* Dynamic grid layout based on number of images */}
          <div className={`grid gap-4 justify-items-center ${
            imgs.length === 1 
              ? 'grid-cols-1' 
              : imgs.length === 2 
              ? 'grid-cols-1 md:grid-cols-2' 
              : imgs.length === 3 
              ? 'grid-cols-1 md:grid-cols-3' 
              : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
          }`}>
            {imgs.map((src, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer ${
                  imgs.length === 1 ? 'max-w-md w-full' : 'w-full'
                }`}
                onClick={() => setEventIndex(idx)}
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

        {/* Lightbox */}
        <Lightbox
          open={eventIndex >= 0}
          close={() => setEventIndex(-1)}
          slides={imgs.map((src) => ({ src }))}
          index={eventIndex}
        />
      </div>
    );
  };

  return (
    <>
      <Navbar />
      {/* Hero Section */}
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

      {/* Tab Navigation */}
      {renderTabNavigation()}

      {/* Main Content */}
      <div className="min-h-screen bg-gray-50">
        {/* Show original gallery view when clicking on event cards */}
        {selectedEvent ? (
          renderGallery()
        ) : (
          <>
            {/* Show event cards overview by default, or tab-specific gallery, or yearly events */}
            {activeTab === 'overview' ? (
              renderEventCards()
            ) : activeTab === 'events' ? (
              renderYearlyEvents()
            ) : (
              renderTabGallery()
            )}
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ResourceEvents;
