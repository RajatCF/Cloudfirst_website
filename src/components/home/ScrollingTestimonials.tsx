import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface Testimonial {
  quote: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      'Their Microsoft solutions brought automation and smarter workflows that eliminated years of manual tasks, and the efficiency gains were visible almost immediately. Our teams are now focused on work that truly moves the needle.',
    company: 'Cygnett Hotels',
  },
  {
    quote:
      'CloudFirst Technology delivered an enterprise-level Google Workspace setup that fit our budget perfectly. As we grew, they grew with us, always patient, transparent, and genuinely invested in our success.',
    company: 'Lendingkart',
  },
  {
    quote:
      'We have been with CloudFirst Technology for years now, and the relationship only gets better with time. They have been a consistent, dependable presence through every phase of our growth. Their global recognition and certifications reflect the quality and professionalism they bring to every engagement.',
    company: 'CJ Darcl Logistics',
  },
  {
    quote:
      'Within just a few months, they optimized our Google Workspace setup, cutting costs significantly without compromising performance.',
    company: 'Limeroad',
  },
  {
    quote:
      'Migrating to Google Workspace was seamless, thanks to their hands-on support and deep expertise. The team at CloudFirst truly understands what modern businesses need to stay ahead.',
    company: 'GoKwik',
  },
  {
    quote:
      'CloudFirst implemented a well-architected framework aligned with best practices, strengthening our cloud posture and ensuring operational resilience. Their expertise gave us complete peace of mind.',
    company: 'Fretron',
  },
  {
    quote:
      'As a leadership team, we needed a cloud partner we could trust completely. CloudFirst Technology exceeded our expectations at every level. The execution was flawless and the results spoke for themselves.',
    company: 'Cybermarine',
  },
  {
    quote:
      'With Reinforce360, CloudFirst provided us with continuous cloud monitoring, proactive security reinforcement, and performance optimization. The structured approach ensured our infrastructure remained secure, compliant, and cost-efficient at all times. Reinforce360 has added an extra layer of confidence to our cloud operations.',
    company: 'Vaarta.ai',
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
