import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const HeroSection = () => {
  const circlesRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Circles animation
      gsap.fromTo('.hero-circle-1', { scale: 0 }, { scale: 18, duration: 1.8, ease: 'power3.out' });
      gsap.fromTo('.hero-circle-2', { scale: 0 }, { scale: 9, duration: 1.6, ease: 'power3.out', delay: 0.1 });
      gsap.fromTo('.hero-circle-3', { scale: 0 }, { scale: 2.2, duration: 1.4, ease: 'power3.out', delay: 0.2 });
      gsap.fromTo('.hero-circle-4', { scale: 0 }, { scale: 1, duration: 1.2, ease: 'power3.out', delay: 0.3 });

      // Tagline slide in
      gsap.fromTo(taglineRef.current, { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, delay: 0.8, ease: 'power2.out' });

      // Headline letter-by-letter
      const letters = document.querySelectorAll('.hero-letter');
      gsap.fromTo(letters, { opacity: 0, y: 20 }, {
        opacity: 1, y: 0, duration: 0.04, stagger: 0.03, delay: 1.2, ease: 'power2.out'
      });
    }, circlesRef);

    return () => ctx.revert();
  }, []);

  const renderLetters = (text: string, className = '') => {
    return text.split('').map((letter, i) => (
      <span key={i} className={`hero-letter inline-block opacity-0 ${className} ${letter === ' ' ? 'mr-[0.25em]' : ''}`}>
        {letter === ' ' ? '\u00A0' : letter}
      </span>
    ));
  };

  return (
    <section ref={circlesRef} className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Circles */}
      <div className="absolute left-[15%] top-1/2 -translate-y-1/2 pointer-events-none">
        <div className="hero-circle-1 absolute w-20 h-20 rounded-full -translate-x-1/2 -translate-y-1/2" style={{ background: 'hsl(222, 47%, 38%)' }} />
        <div className="hero-circle-2 absolute w-20 h-20 rounded-full -translate-x-1/2 -translate-y-1/2" style={{ background: 'hsl(216, 100%, 40%)' }} />
        <div className="hero-circle-3 absolute w-20 h-20 rounded-full -translate-x-1/2 -translate-y-1/2" style={{ background: 'hsl(216, 100%, 50%)' }} />
        <div className="hero-circle-4 absolute w-20 h-20 rounded-full -translate-x-1/2 -translate-y-1/2 bg-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 w-full py-32 lg:py-0">
        {/* Tagline */}
        <div ref={taglineRef} className="mb-8 flex items-center gap-3 opacity-0">
          <span className="w-3 h-3 rounded-full bg-bright-blue" />
          <span className="w-12 h-0.5 bg-bright-blue" />
          <span className="text-xs uppercase tracking-[0.2em] font-medium text-muted-foreground">
            Beyond Consulting. Beyond Execution.
          </span>
        </div>

        {/* Headline */}
        <div ref={headlineRef} className="hero-headline">
          <div>{renderLetters('AI-native,')}</div>
          <div>{renderLetters('engineering-led')}</div>
          <div className="text-bright-blue">{renderLetters('modern tech', 'text-bright-blue')}</div>
          <div className="text-bright-blue">{renderLetters('consultancy', 'text-bright-blue')}</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
