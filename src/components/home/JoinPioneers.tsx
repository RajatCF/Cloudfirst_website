import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "We've been using Untitled to kick start every new project and can't imagine working without it.",
    name: 'Lana Steiner',
    role: 'Designer, Layers',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=60',
  },
  {
    quote: "Our workflow is 3x faster after adopting CloudFirst — game changer!",
    name: 'Mark Dorian',
    role: 'CTO, Projectify',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=60',
  },
];

const JoinPioneers = () => {
  const [idx, setIdx] = useState(0);
  const { quote, name, role, image } = testimonials[idx];

  return (
    <section className="py-32 lg:py-40 bg-background">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* left text slider */}
        <div className="text-center lg:text-left">
          <div className="flex justify-center lg:justify-start mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-5 h-5 text-amber-400" />
            ))}
          </div>
          <p className="text-3xl lg:text-4xl font-bold leading-tight">{quote}</p>
          <div className="mt-8 flex items-center justify-center lg:justify-start gap-6">
            <button onClick={() => setIdx((idx - 1 + testimonials.length) % testimonials.length)} className="p-2 rounded-full hover:bg-muted transition">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={() => setIdx((idx + 1) % testimonials.length)} className="p-2 rounded-full hover:bg-muted transition">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* right image with overlay card */}
        <div className="relative w-full h-[400px] flex items-center justify-center">
          <img src={image} alt={name} className="w-full h-full object-cover rounded-lg" />
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-md p-4 rounded-xl w-3/4 flex items-center justify-between">
            <div>
              <div className="font-semibold">{name}</div>
              <div className="text-sm text-muted-foreground">{role}</div>
            </div>
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 text-amber-400" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinPioneers;
