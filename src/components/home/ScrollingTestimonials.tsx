import React from 'react';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  name: string;
  designation: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "As a leadership team, we needed a cloud partner we could trust completely. CloudFirst Technology exceeded our expectations at every level. The execution was flawless and results spoke for themselves.",
    name: "Head",
    designation: "Cybermarine",
  },
  {
    quote: "Migrating to Google Workspace was seamless, thanks to their hands-on support and deep expertise. The team at CloudFirst Technology truly understands what modern businesses need to stay ahead.",
    name: "Assistant Manager - IT",
    designation: "LimeRoad",
  },
  {
    quote: "Their Microsoft solutions brought automation and smarter workflows that eliminated years of manual tasks, and the efficiency gains were visible almost immediately. Our teams are now focused on work that truly moves the needle.",
    name: "General Manager - IT",
    designation: "Cygnett Hotels",
  }
];

const ScrollingTestimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by leading companies worldwide for their cloud transformation journey
          </p>
        </div>

        {/* Simple 3 Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-center">
                <p className="text-gray-900 leading-relaxed mb-6 text-lg" style={{ fontFamily: 'Georgia, serif' }}>
                  "{testimonial.quote}"
                </p>
                <div className="text-blue-600 font-semibold text-lg" style={{ fontFamily: 'Georgia, serif' }}>
                  {testimonial.name}
                </div>
                <div className="text-blue-600 font-medium text-base mt-1" style={{ fontFamily: 'Georgia, serif' }}>
                  {testimonial.designation}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

          </section>
  );
};

export default ScrollingTestimonials;
