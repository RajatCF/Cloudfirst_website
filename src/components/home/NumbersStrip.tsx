import React, { useState, useEffect, useRef } from 'react';

const NumbersStrip = () => {
  const [counts, setCounts] = useState({
    customers: 0,
    years: 0,
    awards: 0,
    resolvedTickets: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const stripRef = useRef<HTMLDivElement>(null);

  const statistics = [
    { value: "1500+", label: "Customers", count: counts.customers },
    { value: "16+", label: "Years of building", count: counts.years },
    { value: "50+", label: "Awards and Certificates", count: counts.awards },
    { value: "3245", label: "Resolved Tickets", count: counts.resolvedTickets }
  ];

  useEffect(() => {
    if (hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            // Animate counts
            const animateCount = (target: number, key: keyof typeof counts, duration: number) => {
              let current = 0;
              const increment = target / (duration / 16); // 60fps
              const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                  current = target;
                  clearInterval(timer);
                }
                setCounts(prev => ({ ...prev, [key]: Math.floor(current) }));
              }, 16);
            };

            animateCount(1500, 'customers', 2500);
            animateCount(16, 'years', 1500);
            animateCount(50, 'awards', 1500);
            animateCount(3245, 'resolvedTickets', 3000);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (stripRef.current) {
      observer.observe(stripRef.current);
    }

    return () => {
      if (stripRef.current) {
        observer.unobserve(stripRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section ref={stripRef} className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 py-8 sm:py-10 md:py-12">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-4 gap-4 sm:gap-8 md:gap-12 items-center">
          {statistics.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2 whitespace-nowrap">
                {stat.count}{stat.value.includes('+') && '+'}
              </div>
              <div className="text-[11px] sm:text-sm md:text-base lg:text-lg font-medium opacity-90 leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NumbersStrip;
