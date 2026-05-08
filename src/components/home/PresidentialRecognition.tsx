import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PresidentialRecognition = () => {
  const [isVideoActive, setIsVideoActive] = useState(false);

  return (
    <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative p-2"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-white">
              <img
                src="https://cloudfirst-website-assets.s3.ap-south-1.amazonaws.com/events/AshishSirWithPresident.jpg"
                alt="Presidential Recognition 2025"
                className="w-full h-[280px] sm:h-[340px] lg:h-[360px] object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="flex flex-col justify-center p-2"
          >
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-5">
              <span className="text-sky-500">Slovak–India</span>{' '}
              <span className="text-gray-700">Business Forum in</span>
              <br />
              <span className="text-sky-500">Bratislava</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed">
              <p>
                As the CTO of CloudFirst Technology®, I had the honor of attending the Slovak-India Business Forum in Bratislava, inaugurated by the Hon&apos;ble President of India, Smt. Droupadi Murmu.
              </p>
              <p>
                I had the opportunity to share key talking points on &quot;Business Opportunities in India&quot;, offering my perspective on the country&apos;s dynamic and evolving business landscape.
              </p>
              <p>
                A major focus was on Amrit Kaal—a visionary 25-year journey from 2022 to 2047, as envisioned by our Hon&apos;ble Prime Minister, Shri Narendra Modi. This era marks a transformative phase for India, filled with opportunities for innovation, investment, and global collaboration.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20"
        >
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 mb-16">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
          </div>

          <div className="text-center mb-10">
            <h3 className="text-3xl sm:text-4xl font-bold leading-tight">
              <span className="text-sky-500">Slovak–India Business Forum</span>{' '}
              <span className="text-purple-600">Video</span>
            </h3>
            <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-3xl mx-auto">
              Watch the highlights from the Slovak-India Business Forum in Bratislava, inaugurated by the Hon&apos;ble President of India.
            </p>
          </div>

          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white">
              <div
                className="aspect-video relative"
                onMouseLeave={() => setIsVideoActive(false)}
              >
                {!isVideoActive && (
                  <button
                    type="button"
                    onClick={() => setIsVideoActive(true)}
                    onTouchStart={() => setIsVideoActive(true)}
                    className="absolute inset-0 w-full h-full flex items-center justify-center bg-black/10 backdrop-blur-[1px] text-white font-semibold"
                  >
                    <span className="px-5 py-3 rounded-full bg-black/60">
                      Click to play video
                    </span>
                  </button>
                )}
                <iframe
                  src="https://www.youtube.com/embed/KB5p5EAYm4s"
                  title="Slovak-India Business Forum Video"
                  className={`absolute inset-0 w-full h-full border-0 ${isVideoActive ? '' : 'pointer-events-none'}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PresidentialRecognition;
