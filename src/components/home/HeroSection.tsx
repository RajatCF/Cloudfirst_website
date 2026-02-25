import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const HeroSection = () => {
  const circlesRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

   const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // simple mock submit
    alert('Thanks for getting in touch!');
    setForm({ name: '', email: '', message: '' });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // grow circles sequentially
      tl.fromTo('.hero-circle-1', { scale: 0 }, { scale: 18, duration: 1.8, ease: 'power3.out' });
      tl.fromTo('.hero-circle-2', { scale: 0 }, { scale: 9, duration: 1.6, ease: 'power3.out' }, '<0.1');
      tl.fromTo('.hero-circle-3', { scale: 0 }, { scale: 2.2, duration: 1.4, ease: 'power3.out' }, '<0.1');
      tl.fromTo('.hero-circle-4', { scale: 0 }, { scale: 1, duration: 1.2, ease: 'power3.out' }, '<0.1');

      // single ring pulse
      tl.fromTo('.hero-ring', { scale: 0, opacity: 0.6 }, { scale: 2, opacity: 0, duration: 1.5, ease: 'power1.out' }, '-=1');

      // fade all circles + ring out to reveal headline
      tl.to('.hero-circle-1, .hero-circle-2, .hero-circle-3, .hero-circle-4, .hero-ring', { opacity: 0, duration: 0.8, delay: 0.3 });

      // animate tagline and headline
      tl.fromTo(taglineRef.current, { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, ease: 'power2.out' });
      const letters = document.querySelectorAll('.hero-letter');
      tl.fromTo(letters, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.04, stagger: 0.03, ease: 'power2.out' });

      // slide the form up from below
      tl.fromTo(formRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }, '<0.5');
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
      {/* Circles (only on large screens) */}
      <div className="absolute left-[15%] top-1/2 -translate-y-1/2 pointer-events-none hidden lg:block">
        <div className="hero-circle-1 absolute w-20 h-20 rounded-full -translate-x-1/2 -translate-y-1/2" style={{ background: 'hsl(222, 47%, 38%)' }} />
        <div className="hero-circle-2 absolute w-20 h-20 rounded-full -translate-x-1/2 -translate-y-1/2" style={{ background: 'hsl(216, 100%, 40%)' }} />
        <div className="hero-circle-3 absolute w-20 h-20 rounded-full -translate-x-1/2 -translate-y-1/2" style={{ background: 'hsl(216, 100%, 50%)' }} />
        <div className="hero-circle-4 absolute w-20 h-20 rounded-full -translate-x-1/2 -translate-y-1/2 bg-background" />
        {/* expanding ring */}
        <div className="hero-ring w-40 h-40" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto px-6 lg:px-10 w-full py-32 lg:py-0 grid grid-cols-1 lg:grid-cols-2 gap-y-16 gap-x-16 xl:gap-x-32 2xl:gap-x-56 items-center lg:pl-24 max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-[1600px]">
        {/* Left: tagline + headline */}
        <div className="min-w-0 lg:max-w-[45%] xl:max-w-lg lg:pr-16">
          <div ref={taglineRef} className="mb-8 flex items-center gap-3 opacity-0">
            <span className="w-3 h-3 rounded-full bg-bright-blue" />
            <span className="w-12 h-0.5 bg-bright-blue" />
            <span className="text-xs uppercase tracking-[0.2em] font-medium text-muted-foreground">
              Beyond Consulting. Beyond Execution.
            </span>
          </div>

          <div ref={headlineRef} className="hero-headline">
            <div className="break-words">{renderLetters('Cloud-Native,')}</div>
            <div className="break-words">{renderLetters('Architecture-Led')}</div>
            <div className="break-words text-bright-blue">{renderLetters('Enterprise-Grade', 'text-bright-blue')}</div>
            <div className="break-words text-bright-blue">{renderLetters('Consultancy', 'text-bright-blue')}</div>
          </div>
        </div>

        {/* Right: quick contact form */}
        <div ref={formRef} className="mt-0 opacity-0 flex w-full justify-end min-w-0 items-start">
          <form onSubmit={handleSubmit} className="space-y-4 p-6 w-full max-w-md">
            {/* header */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-bright-blue"> Have A Question? </h3>
              <p className="text-sm text-muted-foreground">for more information</p>
            </div>

            {/* inputs */}
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-1">Name</label>
              <input
                type="text"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-full border border-border focus:outline-none focus:ring-2 focus:ring-bright-blue transition-all"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-1">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-full border border-border focus:outline-none focus:ring-2 focus:ring-bright-blue transition-all"
                placeholder="you@company.com"
                required
              />
            </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1">Message</label>
                <textarea
                  value={form.message || ''}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-bright-blue transition-all resize-none"
                  placeholder="Your message"
                  rows={4}
                  required
                />
              </div>

            {/* footer text + button */}
            <p className="text-xs text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button type="submit" className="btn-primary w-full justify-center py-3">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
