import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BreakingTheMold = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.mold-content > *', { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, stagger: 0.15, duration: 0.7, ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-navy-dark text-primary-foreground py-32 lg:py-40">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Geometric Pattern */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-80 h-80">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="absolute border rounded-lg"
                  style={{
                    borderColor: `hsl(216, 100%, ${50 + i * 5}%, ${0.15 + i * 0.1})`,
                    width: `${100 - i * 15}%`,
                    height: `${100 - i * 15}%`,
                    top: `${i * 7.5}%`,
                    left: `${i * 7.5}%`,
                    transform: `rotate(${i * 8}deg)`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="mold-content">
            <h2 className="section-title mb-10">
              breaking the <span className="text-light-blue">mold</span>
            </h2>
            <div className="space-y-6 text-base leading-relaxed opacity-70">
              <p>
                Traditional consultancies sell slide decks. We ship production-grade infrastructure. Every engagement starts with AI-driven analysis and ends with automated, scalable systems.
              </p>
              <p>
                Our engineers don't just advise—they build alongside your team, embedding modern practices that outlast any consulting engagement.
              </p>
              <p>
                From Day One, we prioritize outcomes over hours billed. Our success is measured by your velocity, reliability, and cost efficiency.
              </p>
            </div>
            <div className="flex items-center gap-12 mt-12 pt-8 border-t border-primary-foreground/10">
              <div>
                <div className="text-3xl font-display font-bold text-bright-blue">10x</div>
                <div className="text-sm opacity-50 mt-1">Faster Implementation</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-bright-blue">100%</div>
                <div className="text-sm opacity-50 mt-1">AI-Powered Solutions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreakingTheMold;
