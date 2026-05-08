import React, { useState, useEffect, useRef } from 'react';

const NumbersStrip = () => {
  const [counts, setCounts] = useState({
    projects: 0,
    customers: 0,
    teamMembers: 0,
    resolvedTickets: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const stripRef = useRef<HTMLDivElement>(null);

  const statistics = [
    { value: "300+", label: "Projects", count: counts.projects },
    { value: "4000+", label: "Customers", count: counts.customers },
    { value: "50+", label: "Team Members", count: counts.teamMembers },
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

            animateCount(300, 'projects', 2000);
            animateCount(4000, 'customers', 2500);
            animateCount(50, 'teamMembers', 1500);
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
    <section ref={stripRef} className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {statistics.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                {stat.count}{stat.value.includes('+') && '+'}
              </div>
              <div className="text-sm md:text-base lg:text-lg font-medium opacity-90">
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
