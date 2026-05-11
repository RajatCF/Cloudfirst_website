import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const PresidentialRecognition = () => {
  const [isVideoActive, setIsVideoActive] = useState(false);
  const [isImageOpen, setIsImageOpen] = useState(false);

  useEffect(() => {
    if (!isImageOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsImageOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isImageOpen]);

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
              <button
                type="button"
                onClick={() => setIsImageOpen(true)}
                aria-label="Open image"
                className="block w-full text-left"
              >
                <div className="bg-white p-3">
                  <img
                    src="/events/president_new_image.jpg"
                    alt="Presidential Recognition 2025"
                    className="w-full h-auto max-h-[640px] object-contain bg-white"
                    loading="lazy"
                  />
                </div>
              </button>
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
              >
                {!isVideoActive ? (
                  <div className="absolute inset-0">
                    <img
                      src="https://i.ytimg.com/vi/KB5p5EAYm4s/maxresdefault.jpg"
                      alt="Slovak–India Business Forum video thumbnail"
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = "https://i.ytimg.com/vi/KB5p5EAYm4s/hqdefault.jpg";
                      }}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
                    <button
                      type="button"
                      onClick={() => setIsVideoActive(true)}
                      aria-label="Play video"
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    >
                      <span className="flex items-center gap-3 rounded-full bg-black/70 px-5 py-3 text-white font-semibold shadow-lg">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <path d="M9 7l10 5-10 5V7z" fill="currentColor" />
                          </svg>
                        </span>
                        Play video
                      </span>
                    </button>
                  </div>
                ) : (
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/KB5p5EAYm4s?autoplay=1"
                    title="Slovak-India Business Forum Video"
                    className="absolute inset-0 w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {isImageOpen ? (
        <div
          className="fixed inset-0 z-[80] bg-black/70 px-4 py-8 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          onClick={() => setIsImageOpen(false)}
        >
          <div
            className="relative w-full max-w-6xl max-h-[90vh] rounded-2xl bg-white overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsImageOpen(false)}
              aria-label="Close"
              className="absolute right-3 top-3 z-10 rounded-full bg-black/70 text-white px-3 py-2 text-sm hover:bg-black/80 transition-colors"
            >
              Close
            </button>
            <div className="w-full h-full bg-white p-4">
              <img
                src="/events/president_new_image.jpg"
                alt="Presidential Recognition 2025"
                className="w-full h-full max-h-[calc(90vh-2rem)] object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default PresidentialRecognition;
