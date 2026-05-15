import React, { useState, useEffect, useRef } from 'react';

const NumbersStrip = () => {
  const [counts, setCounts] = useState({
    customers: 0,
    years: 0,
    awards: 0,
    services: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const stripRef = useRef<HTMLDivElement>(null);

  const statistics = [
    { value: "7000+", label: "Customers", count: counts.customers, isStatic: false },
    { value: "16+", label: "Years of building", count: counts.years, isStatic: false },
    { value: "50+", label: "Awards and Certificates", count: counts.awards, isStatic: false },
    { value: "50+", label: "Services", count: counts.services, isStatic: false }
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

            animateCount(7000, 'customers', 2500);
            animateCount(16, 'years', 1500);
            animateCount(50, 'awards', 1500);
            animateCount(50, 'services', 1800);
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
    <section ref={stripRef} className="relative overflow-hidden py-10 sm:py-12 md:py-14">
      <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB] via-[#4F46E5] to-[#9333EA]" />
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.35),transparent_45%),radial-gradient(circle_at_80%_25%,rgba(255,255,255,0.22),transparent_40%),radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.18),transparent_55%)] pointer-events-none" />
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="rounded-3xl border border-white/15 bg-white/5 backdrop-blur-md shadow-[0_24px_60px_-32px_rgba(0,0,0,0.65)] px-6 sm:px-8 lg:px-10 py-8 sm:py-9">
          <div className="text-center text-white mb-7 sm:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">
              Your Trusted Cloud Transformation Partner
            </h2>
            <p className="mt-2 text-sm sm:text-base md:text-lg text-white/90 max-w-3xl mx-auto">
              Empowering organizations with secure, scalable, and future-ready cloud solutions.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-3 sm:gap-5 md:gap-6 items-stretch">
            {statistics.map((stat, index) => (
              <div
                key={index}
                className="text-center text-white rounded-2xl border border-white/15 bg-white/10 px-3 sm:px-4 py-4 sm:py-5 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.6)] transition-transform duration-200 hover:-translate-y-0.5"
              >
                <div className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2 whitespace-nowrap">
                  <>
                    {stat.count}
                    {stat.value.includes('+') && '+'}
                  </>
                </div>
                <div className="text-[11px] sm:text-sm md:text-base lg:text-lg font-medium opacity-90 leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NumbersStrip;
