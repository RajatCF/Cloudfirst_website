import React from "react";

const GoGlobalAward: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f7f8fa] to-[#e9eafc] pb-16">
      {/* Header Section */}
      <div className="w-full bg-gradient-to-r from-[#7b6cf6] to-[#6e8efb] py-12 px-4 text-center rounded-b-3xl shadow-lg mb-12">
        <div className="max-w-5xl mx-auto">
          <span className="inline-block bg-white/30 text-white font-semibold px-5 py-1 rounded-full text-sm mb-4 tracking-wide backdrop-blur">PRESS RELEASE</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">CloudFirst Technology Wins Go Global Awards</h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-white/90 text-base font-medium">
            <span className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              November 4, 2025
            </span>
            <span className="hidden md:inline-block">|</span>
            <span className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 12.414a4 4 0 10-1.414 1.414l4.243 4.243a1 1 0 001.414-1.414z" />
              </svg>
              London, United Kingdom
            </span>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-8">

        {/* Main Article */}
        <div className="flex-1 bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8 md:mb-0">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            <div className="flex-shrink-0 flex justify-center items-center">
              <img src="/goglobal.jpg" alt="Go Global Award" className="w-64 h-auto rounded-xl shadow-lg" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-navy-dark mb-4 leading-tight">
                CloudFirst Technology Private Limited is thrilled to announce its victory as the winner in the prestigious{" "}
                <span className="text-[#7b6cf6]">Cloud Solutions Provider of the Year</span> category at the{" "}
                <span className="text-[#7b6cf6]">2025 Go Global Awards</span>.
              </h2>
              <p className="text-lg text-navy mb-4 font-medium">
                This recognition underscores CloudFirst's commitment to delivering innovative cloud solutions that transform businesses across industries.
              </p>
            </div>
          </div>

          <div className="prose max-w-none text-navy-dark">
            <blockquote className="border-l-4 border-[#7b6cf6] bg-[#f3f0fd] px-6 py-4 mb-6 text-lg font-medium text-[#5a4bb7]">
              <span className="text-2xl font-bold text-[#b3a6f6] mr-2">"</span>
              CloudFirst Technology Private Limited exemplifies the caliber of innovation and leadership that the Go Global Awards aim to celebrate,{" "}
              <b>said Ranjani Rangan, Director at the International Trade Council.</b> Their dedication to advancing AI and cloud technologies sets a benchmark for industry peers and showcases the transformative impact these solutions can have in driving global business growth.
            </blockquote>

            <p className="mb-4">
              Founded by <b className="text-[#7b6cf6]">Ashish Srivastava</b>, CloudFirst Technology Private Limited specializes in providing cutting-edge cloud solutions, IT services, and digital transformation programs. The company is renowned for its <b className="text-[#7b6cf6]">GRAG AI Factory</b>, a hub dedicated to developing real-time AI solutions that solve complex challenges. Certified to <b>ISO 27001:2013</b> and <b>ISO 9001:2015</b>, CloudFirst is recognized for its quality, robust engineering, and operational excellence, helping organizations leverage a Cloud First approach to achieve competitive advantage.
            </p>

            <p className="mb-4">
              The Cloud Solutions Provider of the Year category is a perfect fit for CloudFirst, as the company has consistently pushed the boundaries of what cloud technology can achieve. By focusing on AI advancements and real-time solutions, CloudFirst empowers businesses to optimize their operations and realize measurable outcomes. This award highlights the company's role as a leader in the cloud solutions space, driving innovation that meets the demands of a rapidly evolving digital landscape.
            </p>

            <blockquote className="border-l-4 border-[#7b6cf6] bg-[#f3f0fd] px-6 py-4 mb-6 text-lg font-medium text-[#5a4bb7]">
              <span className="text-2xl font-bold text-[#b3a6f6] mr-2">"</span>
              <b>Being named the winner at the Go Global Awards is a testament to the hard work and innovation of the CloudFirst team,</b>{" "}
              <span className="text-[#7b6cf6]">said Ashish Srivastava, CEO of CloudFirst Technology Private Limited.</span> We are honored to be recognized among such distinguished peers and remain committed to delivering exceptional cloud solutions that empower businesses worldwide.
            </blockquote>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full md:w-96 flex-shrink-0">
          <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-navy-dark mb-4 border-b pb-2 border-[#7b6cf6]">About the Award</h3>
            <ul className="text-base text-navy space-y-2">
              <li><b>Category:</b> Cloud Solutions Provider of the Year</li>
              <li><b>Event:</b> 2025 Go Global Awards</li>
              <li><b>Date:</b> November 4, 2025</li>
              <li><b>Location:</b> London, UK</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-navy-dark mb-4 border-b pb-2 border-[#7b6cf6]">Company Highlights</h3>
            <ul className="text-base text-navy space-y-2">
              <li><b>Founder:</b> Ashish Srivastava</li>
              <li><b>Specialty:</b> Cloud Solutions & AI</li>
              <li><b>Innovation Hub:</b> GRAG AI Factory</li>
              <li><b>Certifications:</b> ISO 27001:2013, ISO 9001:2015</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-[#7b6cf6] to-[#6e8efb] rounded-2xl shadow-xl p-6 text-center">
            <h4 className="text-lg font-bold text-white mb-2">Learn More About CloudFirst</h4>
            <p className="text-white/90 mb-4">Discover how we can transform your business with innovative cloud solutions.</p>
            <a href="/contact" className="inline-block px-6 py-2 bg-white text-[#7b6cf6] font-semibold rounded-full shadow hover:bg-[#edeaff] transition-colors duration-200">
              Contact Us
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default GoGlobalAward;