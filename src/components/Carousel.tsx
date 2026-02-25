import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselItem {
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  image?: string;
  type?: string; // e.g. 'case study', 'news'
}

interface CarouselProps {
  items: CarouselItem[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [active, setActive] = React.useState(0);

  const prev = () => setActive(a => (a === 0 ? items.length - 1 : a - 1));
  const next = () => setActive(a => (a === items.length - 1 ? 0 : a + 1));

  return (
    <div className="relative flex flex-col items-center py-16">
      {/* Timeline indicator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-1 h-12 bg-bright-blue" />
        <div className="w-10 h-10 rounded-full border-4 border-bright-blue bg-background flex items-center justify-center">
          <div className="w-4 h-4 rounded-full bg-bright-blue" />
        </div>
      </div>
      {/* Carousel */}
      <div className="flex items-center justify-center mt-16 w-full">
        <button onClick={prev} className="mr-4 p-2 rounded-full bg-muted hover:bg-bright-blue/10 transition">
          <ChevronLeft className="w-6 h-6 text-bright-blue" />
        </button>
        <div className="relative flex items-center justify-center w-[900px] h-[340px]">
          {items.map((item, i) => {
            // compute shortest distance around circular array
            let offset = i - active;
            if (offset > items.length / 2) offset -= items.length;
            if (offset < -items.length / 2) offset += items.length;
            if (Math.abs(offset) > 3) return null; // only render a few around active

            const baseX = 240; // horizontal shift per card
            const translateX = offset * baseX;
            const scale = offset === 0 ? 1 : 0.9;
            const opacity = Math.max(0, 1 - Math.abs(offset) * 0.4);
            const blur = Math.abs(offset) * 2;
            const zIndex = 100 - Math.abs(offset);

            return (
              <div
                key={i}
                className="absolute top-0 left-1/2 transition-all duration-500"
                style={{
                  transform: `translateX(${translateX}px) scale(${scale})`,
                  opacity,
                  filter: `blur(${blur}px)`,
                  zIndex,
                }}
              >
                <div className="w-[480px] h-[320px] rounded-2xl overflow-hidden shadow-lg bg-card relative flex flex-col justify-end">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-60"
                    />
                  )}
                  <div className="relative z-10 p-6">
                    {item.type && (
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-bright-blue/10 text-bright-blue mb-4">
                        {item.type}
                      </span>
                    )}
                    <h3 className="text-lg font-display font-bold mb-3 text-white">
                      {item.title.length > 80 ? item.title.slice(0, 80) + '...' : item.title}
                    </h3>
                    <p className="text-sm text-white mb-4 leading-relaxed">
                      {item.excerpt.length > 80 ? item.excerpt.slice(0, 80) + '...' : item.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-white">
                      <span>{item.date}</span>
                      <span className="flex items-center gap-1">
                        <span>{item.readTime}</span>
                      </span>
                    </div>
                    <button className="mt-4 btn-primary w-fit px-6 py-2">Read more →</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <button onClick={next} className="ml-4 p-2 rounded-full bg-muted hover:bg-bright-blue/10 transition">
          <ChevronRight className="w-6 h-6 text-bright-blue" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
