import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, ArrowLeft, ExternalLink, ChevronDown, Calendar, Users } from "lucide-react";
import Navbar from "../components/Navbar";


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
  "aws-summit-bengaluru": [
    "https://cloudfirst-website-assets.s3.ap-south-1.amazonaws.com/events/aws+summit+bengaluru/1000106663.jpg",
    "https://cloudfirst-website-assets.s3.ap-south-1.amazonaws.com/events/aws+summit+bengaluru/WhatsApp+Image+2026-04-24+at+06.57.58+(4).jpeg",
    "https://cloudfirst-website-assets.s3.ap-south-1.amazonaws.com/events/aws+summit+bengaluru/WhatsApp+Image+2026-04-24+at+06.57.58+(4).jpeg",
    "https://cloudfirst-website-assets.s3.ap-south-1.amazonaws.com/events/aws+summit+bengaluru/WhatsApp+Image+2026-04-24+at+06.57.58+(4).jpeg",
  ],
  "india-ai-impact-summit": [
    "https://cloudfirst-website-assets.s3.ap-south-1.amazonaws.com/events/india+Ai+impact+summit/IMG-20260216-WA0023+(1).jpg",
    "https://cloudfirst-website-assets.s3.ap-south-1.amazonaws.com/events/india+Ai+impact+summit/IMG-20260216-WA0025+(1).jpg",
    "https://cloudfirst-website-assets.s3.ap-south-1.amazonaws.com/events/india+Ai+impact+summit/IMG-20260216-WA0035+(1).jpg",
    "https://cloudfirst-website-assets.s3.ap-south-1.amazonaws.com/events/india+Ai+impact+summit/IMG-20260218-WA0016.jpg",
  ],
  "msme-startup-summit": [
    "https://cloudfirst-website-assets.s3.ap-south-1.amazonaws.com/events/msme+and++startup+innovation+summit/IMG_3389+(1).HEIC",
    "https://cloudfirst-website-assets.s3.ap-south-1.amazonaws.com/events/msme+and++startup+innovation+summit/IMG_3389+(1).HEIC",
    "https://cloudfirst-website-assets.s3.ap-south-1.amazonaws.com/events/msme+and++startup+innovation+summit/IMG_3389+(1).HEIC",
    "https://cloudfirst-website-assets.s3.ap-south-1.amazonaws.com/events/msme+and++startup+innovation+summit/IMG_3389+(1).HEIC",
    "https://cloudfirst-website-assets.s3.ap-south-1.amazonaws.com/events/msme+and++startup+innovation+summit/IMG_3389+(1).HEIC"
  ],
  "msme-summit-2026": [
    "/events/IMG_3389.jpg",
    "/events/IMG_3415.jpg",
    "/events/IMG_3454.jpg",
    "/events/IMG_3467.jpg"
  ]
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
  "aws-summit-bengaluru": {
    title: "AWS Summit Bengaluru 2026",
    description: "CloudFirst attended AWS Summit Bengaluru 2026, where the team explored the latest advancements in cloud technologies, AI-driven solutions, and connected with industry leaders.",
    date: "April 2026",
    location: "Bengaluru, India",
    attendees: "5000+",
    highlights: "Latest cloud technologies, AI-driven solutions, industry leader connections"
  },
  "india-ai-impact-summit": {
    title: "India AI Impact Summit 2026",
    description: "CloudFirst participated in the India AI Impact Summit 2026, bringing together global AI leaders to exchange ideas and drive innovation. The event opened up valuable networking opportunities, fostering meaningful connections across the AI ecosystem.",
    date: "February 2026",
    location: "India",
    attendees: "300+",
    highlights: "Global AI leaders, innovation exchange, valuable networking opportunities"
  },
  "msme-summit-2026": {
    title: "MSME Summit 2026",
    description: "Empowering Micro, Small and Medium Enterprises with digital transformation solutions and growth strategies",
    date: "April 2026",
    location: "India",
    attendees: "1000+",
    highlights: "Digital transformation, MSME empowerment, business growth strategies"
  }
};

const eventThumbnails = {
  dubai: "https://gragwebsite.s3.ap-south-1.amazonaws.com/Dubai+Pics/WhatsApp+Image+2025-04-24+at+6.25.05+PM.jpeg",
  london: "https://gragwebsite.s3.ap-south-1.amazonaws.com/London+Pics/1750014704224.jpeg",
  slovakia: "https://gragwebsite.s3.ap-south-1.amazonaws.com/London+Pics/Slovakia+Pics/1000001380.jpeg",
  "aws-summit-bengaluru": "https://cloudfirst-website-assets.s3.ap-south-1.amazonaws.com/events/aws+summit+bengaluru/1000106663.jpg",
  "india-ai-impact-summit": "https://cloudfirst-website-assets.s3.ap-south-1.amazonaws.com/events/india+Ai+impact+summit/IMG-20260216-WA0023+(1).jpg",
  "msme-summit-2026": "/events/IMG_3389.jpg"
};

const ResourceEvents = () => {
  const [selectedEvent, setSelectedEvent] = useState<keyof typeof images | null>(null);
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
    '2026': [
      {
        id: 'msme-summit-2026',
        title: 'MSME Summit 2026',
        description: 'Empowering Micro, Small and Medium Enterprises with digital transformation solutions and growth strategies.',
        date: 'April 2026',
        location: 'India',
        attendees: '1000+',
        images: [
          "/events/IMG_3389.jpg",
          "/events/IMG_3415.jpg",
          "/events/IMG_3454.jpg",
          "/events/IMG_3467.jpg"
        ]
      },
      {
        id: 'aws-summit-bengaluru-2026',
        title: 'AWS Summit Bengaluru 2026',
        description: 'CloudFirst attended AWS Summit Bengaluru 2026, exploring the latest advancements in cloud technologies and AI-driven solutions.',
        date: 'April 2026',
        location: 'Bengaluru, India',
        attendees: '5000+',
        images: [
          "https://cloudfirst-website-assets.s3.ap-south-1.amazonaws.com/events/aws+summit+bengaluru/1000106663.jpg",
          "https://cloudfirst-website-assets.s3.ap-south-1.amazonaws.com/events/aws+summit+bengaluru/WhatsApp+Image+2026-04-24+at+06.57.58+(4).jpeg",
          "https://cloudfirst-website-assets.s3.ap-south-1.amazonaws.com/events/aws+summit+bengaluru/WhatsApp+Image+2026-04-24+at+06.57.58+(4).jpeg",
          "https://cloudfirst-website-assets.s3.ap-south-1.amazonaws.com/events/aws+summit+bengaluru/WhatsApp+Image+2026-04-24+at+06.57.58+(4).jpeg"
        ]
      },
      {
        id: 'india-ai-impact-summit-2026',
        title: 'India AI Impact Summit 2026',
        description: 'CloudFirst participated in bringing together global AI leaders to exchange ideas and drive innovation.',
        date: 'February 2026',
        location: 'India',
        attendees: '300+',
        images: [
          "https://cloudfirst-website-assets.s3.ap-south-1.amazonaws.com/events/india+Ai+impact+summit/IMG-20260216-WA0023+(1).jpg",
          "https://cloudfirst-website-assets.s3.ap-south-1.amazonaws.com/events/india+Ai+impact+summit/IMG-20260216-WA0025+(1).jpg",
          "https://cloudfirst-website-assets.s3.ap-south-1.amazonaws.com/events/india+Ai+impact+summit/IMG-20260218-WA0016.jpg"
        ]
      }
    ],
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

  const allowedYears = ['2021', '2022', '2023', '2024', '2025'];

  useEffect(() => {
    if (!allowedYears.includes(selectedYear)) setSelectedYear('2025');
  }, [selectedYear]);

  // Event tabs configuration - updated with 2026 events
  const eventTabs = [
    { id: 'overview', label: 'Event Overview', isDefault: true },
    { id: 'events', label: 'Events' },
    { id: 'aws-summit-bengaluru', label: 'AWS Summit Bengaluru' },
    { id: 'india-ai-impact-summit', label: 'India AI Impact Summit' },
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
                      ? 'bg-gradient-to-r from-bright-blue to-light-blue text-white border-bright-blue/30 shadow-lg'
                      : 'bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 border-gray-200 hover:from-bright-blue/5 hover:to-light-blue/5'
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
                      {allowedYears.map((year) => (
                        <button
                          key={year}
                          onClick={() => {
                            setSelectedYear(year);
                            setActiveTab('events');
                            setIsDropdownOpen(false);
                          }}
                          className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                            selectedYear === year
                              ? 'bg-gradient-to-r from-bright-blue/10 to-light-blue/10 text-bright-blue border-r-2 border-bright-blue'
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
                    ? 'bg-gradient-to-r from-bright-blue to-light-blue text-white border-bright-blue/30 shadow-lg'
                    : 'bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 border-gray-200 hover:from-bright-blue/5 hover:to-light-blue/5'
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
    const gridColsClass =
      events.length === 1
        ? "grid-cols-1"
        : events.length === 2
        ? "grid-cols-1 md:grid-cols-2"
        : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
    const gridMaxWidthClass = events.length <= 2 ? "max-w-5xl mx-auto" : "";
    
    return (
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-semibold bg-gradient-to-r from-bright-blue to-light-blue bg-clip-text text-transparent mb-4">Events {selectedYear}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our events and activities from {selectedYear}
          </p>
        </motion.div>

        {events.length > 0 ? (
          <div className={`${gridMaxWidthClass} grid ${gridColsClass} gap-8 justify-items-center`}>
            {events.map((event, idx) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group w-full max-w-md bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={event.images[0]}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
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
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-2" />
                      {event.date}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium bg-gradient-to-r from-bright-blue to-light-blue bg-clip-text text-transparent">
                      {event.images.length} {event.images.length === 1 ? 'photo' : 'photos'}
                    </span>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-bright-blue transition-colors" />
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
          className="bg-gradient-to-br from-white to-bright-blue/5 rounded-2xl shadow-xl p-8 mb-8 border border-bright-blue/15"
        >
          <h1 className="text-3xl font-bold bg-gradient-to-r from-bright-blue to-light-blue bg-clip-text text-transparent mb-4">{details.title}</h1>
          <p className="text-lg text-gray-700 mb-6">{details.description}</p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center text-sm text-gray-600 bg-white px-4 py-2 rounded-full shadow-sm">
              <Calendar className="w-4 h-4 mr-2 text-bright-blue" />
              {details.date}
            </div>
            <div className="flex items-center text-sm text-gray-600 bg-white px-4 py-2 rounded-full shadow-sm">
              <MapPin className="w-4 h-4 mr-2 text-bright-blue" />
              {details.location}
            </div>
            <div className="flex items-center text-sm text-gray-600 bg-white px-4 py-2 rounded-full shadow-sm">
              <Users className="w-4 h-4 mr-2 text-bright-blue" />
              {details.attendees} attendees
            </div>
          </div>
        </motion.div>

        {/* Photo Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold bg-gradient-to-r from-bright-blue to-light-blue bg-clip-text text-transparent mb-6 text-center">Event Gallery ({imgs.length} photos)</h2>
          
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
                className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 ${
                  imgs.length === 1 ? 'max-w-2xl w-full' : 'w-full'
                }`}
              >
                <img
                  src={src}
                  alt={`${activeTab} highlight ${idx + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500 bg-gray-50"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    );
  };

  const renderEventCards = () => {
  const featuredEvents = [
    {
      id: 'london',
      title: 'London Tech Week',
      description: 'Europe\'s largest technology festival participation',
      thumbnail: eventThumbnails['london'],
      date: 'June 2024',
      location: 'London, UK'
    },
    {
      id: 'dubai',
      title: 'CloudFirst Dubai Summit',
      description: 'Annual technology conference showcasing cloud innovations',
      thumbnail: eventThumbnails['dubai'],
      date: 'April 2024',
      location: 'Dubai, UAE'
    },
    {
      id: 'slovakia',
      title: 'Slovakia Innovation Hub',
      description: 'Exploring Central European market opportunities',
      thumbnail: eventThumbnails['slovakia'],
      date: 'March 2024',
      location: 'Bratislava, Slovakia'
    },
    {
      id: 'aws-summit-bengaluru',
      title: 'AWS Summit Bengaluru 2026',
      description: 'Exploring latest cloud technologies and AI-driven solutions',
      thumbnail: eventThumbnails['aws-summit-bengaluru'],
      date: 'April 2026',
      location: 'Bengaluru, India'
    },
    {
      id: 'india-ai-impact-summit',
      title: 'India AI Impact Summit 2026',
      description: 'Global AI leaders exchange ideas and drive innovation',
      thumbnail: eventThumbnails['india-ai-impact-summit'],
      date: 'February 2026',
      location: 'India'
    },
    {
      id: 'msme-summit-2026',
      title: 'MSME Summit 2026',
      description: 'Empowering Micro, Small and Medium Enterprises with digital transformation solutions and growth strategies',
      thumbnail: eventThumbnails['msme-summit-2026'],
      date: 'April 2026',
      location: 'India'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-semibold bg-gradient-to-r from-bright-blue to-light-blue bg-clip-text text-transparent mb-4">Our Event Journey</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Join us through our remarkable journey of conferences, summits, and networking events across the globe.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredEvents.map((event, idx) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer border border-gray-100"
            onClick={() => {
              setSelectedEvent(event.id as keyof typeof images);
              setActiveTab(event.id);
            }}
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={event.thumbnail}
                alt={event.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
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
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-2" />
                  {event.date}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium bg-gradient-to-r from-bright-blue to-light-blue bg-clip-text text-transparent">
                  View Gallery
                </span>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-bright-blue transition-colors" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

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
            className="flex items-center text-bright-blue hover:text-bright-blue/80 font-medium mb-6 group transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Events
          </button>
          
          <div className="bg-gradient-to-br from-white to-bright-blue/5 rounded-2xl shadow-xl p-8 mb-8 border border-bright-blue/15">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-bright-blue to-light-blue bg-clip-text text-transparent mb-4">{details.title}</h1>
            <p className="text-lg text-gray-700 mb-6">{details.description}</p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center text-sm text-gray-600 bg-white px-4 py-2 rounded-full shadow-sm">
                <Calendar className="w-4 h-4 mr-2 text-bright-blue" />
                {details.date}
              </div>
              <div className="flex items-center text-sm text-gray-600 bg-white px-4 py-2 rounded-full shadow-sm">
                <MapPin className="w-4 h-4 mr-2 text-bright-blue" />
                {details.location}
              </div>
              <div className="flex items-center text-sm text-gray-600 bg-white px-4 py-2 rounded-full shadow-sm">
                <Users className="w-4 h-4 mr-2 text-bright-blue" />
                {details.attendees} attendees
              </div>
            </div>
          </div>
        </motion.div>

        {/* Photo Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold bg-gradient-to-r from-bright-blue to-light-blue bg-clip-text text-transparent mb-6 text-center">Event Gallery ({imgs.length} photos)</h2>
          
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
                className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 ${
                  imgs.length === 1 ? 'max-w-2xl w-full' : 'w-full'
                }`}
              >
                <img
                  src={src}
                  alt={`${selectedEvent} highlight ${idx + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500 bg-gray-50"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    );
  };

  const heroBannerImages = [
    "/events/events_banner/image%20(4).jpg",
    "/events/events_banner/image%20(5).jpg",
    "/events/events_banner/image%20(6).jpg",
    "https://gragwebsite.s3.ap-south-1.amazonaws.com/Dubai+Pics/WhatsApp+Image+2025-04-24+at+8.05.32+PM.jpeg",
    "/events/events_banner/image%20(8).jpg",
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-28 min-h-[540px] md:min-h-[620px] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-6 pt-28 opacity-85">
            {heroBannerImages.map((src, idx) => (
              <div
                key={src}
                className={`rounded-2xl overflow-hidden shadow-lg border border-white/10 ${
                  idx === 0 ? "translate-y-6" : idx === 1 ? "-translate-y-4" : idx === 2 ? "translate-y-10" : idx === 3 ? "-translate-y-10" : "translate-y-4"
                }`}
              >
                <img
                  src={src}
                  alt="Event banner"
                  className="h-full w-full object-cover"
                  loading={idx < 2 ? "eager" : "lazy"}
                  decoding="async"
                />
              </div>
            ))}
          </div>
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
          <div className="absolute inset-0 bg-cyan-900/40" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 text-center text-white pt-28 md:pt-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-6 py-6 md:px-10 md:py-8">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-white">Events & Highlights</span>
              </h1>
              <div className="flex items-center justify-center mb-6">
                <div className="inline-flex items-center gap-2 rounded-md bg-white/90 px-4 py-2 text-xs font-medium text-gray-700">
                  <span>Home</span>
                  <span className="text-gray-400">›</span>
                  <span>Events</span>
                </div>
              </div>
              <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90">
                Explore moments, conferences, and milestones where CloudFirst made an impact.
                Discover our journey through event photos and highlights.
              </p>
            </div>
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
    </>
  );
};

export default ResourceEvents;
