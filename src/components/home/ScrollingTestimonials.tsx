import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface Testimonial {
  quote: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      'Scaling collaboration across teams became significantly easier after implementing Google Workspace with CloudFirst Technology. The transition was smooth, well-managed, and aligned perfectly with our operational needs.',
    company: 'Lendingkart',
  },
  {
    quote:
      'Our infrastructure modernization journey was simplified through CloudFirst Technology’s expertise across Google Workspace and AWS. The team ensured a secure, scalable, and future-ready setup for our growing business.',
    company: 'GoKwik',
  },
  {
    quote:
      'With CloudFirst team\'s guidance on Google Cloud best practices, we achieved stronger infrastructure performance, improved scalability, and greater operational stability.',
    company: 'Fretron',
  },
  {
    quote:
      'Operational workflows became more streamlined and efficient with CloudFirst’s optimized Google Workspace environment, helping our teams collaborate better with reduced complexity.',
    company: 'Limeroad',
  },
  {
    quote:
      'A dependable Azure environment was critical for our operations, and they delivered it with strong security, flexibility, and consistent support throughout the engagement.',
    company: 'Cybermarine',
  },
  {
    quote:
      'CloudFirst Technology enabled a more connected and productive work environment through a reliable Google Workspace implementation that supported teams across multiple locations.',
    company: 'CJ Darcl Logistics',
  },
];

const ScrollingTestimonials = () => {
  const shouldReduceMotion = useReducedMotion();
  const marqueeItems = React.useMemo(() => [...testimonials, ...testimonials], []);

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by leading companies worldwide for their cloud transformation journey
          </p>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent" />

          {shouldReduceMotion ? (
            <div className="overflow-x-auto pb-4">
              <div className="flex gap-6 min-w-max px-4">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={`${testimonial.company}-${index}`}
                    className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-5 sm:p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 min-w-[280px] max-w-[280px] sm:min-w-[340px] sm:max-w-[340px] lg:min-w-[420px] lg:max-w-[420px] min-h-[240px] sm:min-h-[280px] flex flex-col"
                  >
                    <div className="text-left flex flex-col flex-1">
                      <p className="text-gray-900 leading-relaxed text-base sm:text-lg" style={{ fontFamily: 'Georgia, serif' }}>
                        {'“'}
                        {testimonial.quote}
                        {'”'}
                      </p>
                      <div
                        className="mt-auto pt-5 sm:pt-6 text-blue-600 font-semibold text-base sm:text-lg text-left"
                        style={{ fontFamily: 'Georgia, serif' }}
                      >
                        — {testimonial.company}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="overflow-hidden">
              <motion.div
                className="flex gap-6 w-max px-4 py-2"
                animate={{ x: ['-50%', '0%'] }}
                transition={{
                  ease: 'linear',
                  duration: 55,
                  repeat: Infinity,
                }}
              >
                {marqueeItems.map((testimonial, index) => (
                  <div
                    key={`${testimonial.company}-${index}`}
                    className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-5 sm:p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 min-w-[280px] max-w-[280px] sm:min-w-[340px] sm:max-w-[340px] lg:min-w-[420px] lg:max-w-[420px] min-h-[240px] sm:min-h-[280px] flex flex-col"
                  >
                    <div className="text-left flex flex-col flex-1">
                      <p className="text-gray-900 leading-relaxed text-base sm:text-lg" style={{ fontFamily: 'Georgia, serif' }}>
                        {'“'}
                        {testimonial.quote}
                        {'”'}
                      </p>
                      <div
                        className="mt-auto pt-5 sm:pt-6 text-blue-600 font-semibold text-base sm:text-lg text-left"
                        style={{ fontFamily: 'Georgia, serif' }}
                      >
                        — {testimonial.company}
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          )}
        </div>
      </div>

    </section>
  );
};

export default ScrollingTestimonials;
