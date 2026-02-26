import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

const HeroSection = () => {
  // loader state controls whether we show the spinning letter animation
  const [loading, setLoading] = useState(true);
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
    const t = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(t);
  }, []);

  // run hero content animation once loader has completed
  useEffect(() => {
    if (!loading) {
      const tl = gsap.timeline();
      tl.fromTo(taglineRef.current, { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, ease: 'power2.out' });
      const letters = document.querySelectorAll('.hero-letter');
      tl.fromTo(letters, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.04, stagger: 0.03, ease: 'power2.out' });
      tl.fromTo(formRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }, '<0.5');
    }
  }, [loading]);

  const renderLetters = (text: string, className = '') => {
    return text.split('').map((letter, i) => (
      <span
        key={i}
        className={`hero-letter inline-block opacity-0 ${className} ${letter === ' ' ? 'mr-[0.25em]' : ''}`}
      >
        {letter === ' ' ? '\u00A0' : letter}
      </span>
    ));
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center z-50 bg-black">
          <div className="loader-wrapper w-full h-full flex items-center justify-center">
          <span className="loader-letter">C</span>
          <span className="loader-letter">L</span>
          <span className="loader-letter">O</span>
          <span className="loader-letter">U</span>
          <span className="loader-letter">D</span>
          <span className="loader-letter">F</span>
          <span className="loader-letter">I</span>
          <span className="loader-letter">R</span>
          <span className="loader-letter">S</span>
          <span className="loader-letter">T</span>

          <div className="loader"></div>
          <style>{`/* loader styles */
.loader-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-family: "Inter", sans-serif;
  font-size: 3rem;
  font-weight: 300;
  color: white;
  background-color: #000;
  user-select: none;
}

.loader {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 300px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background-color: transparent;
  animation: loader-rotate 2s linear infinite;
  z-index: 0;
}

@keyframes loader-rotate {
  0% {
    transform: translate(-50%, -50%) rotate(90deg);
    box-shadow:
      0 10px 20px 0 #fff inset,
      0 20px 30px 0 #ad5fff inset,
      0 60px 60px 0 #471eec inset;
  }
  50% {
    transform: translate(-50%, -50%) rotate(270deg);
    box-shadow:
      0 10px 20px 0 #fff inset,
      0 20px 10px 0 #d60a47 inset,
      0 40px 60px 0 #311e80 inset;
  }
  100% {
    transform: translate(-50%, -50%) rotate(450deg);
    box-shadow:
      0 10px 20px 0 #fff inset,
      0 20px 30px 0 #ad5fff inset,
      0 60px 60px 0 #471eec inset;
  }
}

.loader-letter {
  display: inline-block;
  opacity: 0.4;
  transform: translateY(0);
  animation: loader-letter-anim 2s infinite;
  z-index: 1;
  border-radius: 50ch;
  border: none;
}

.loader-letter:nth-child(1) {
  animation-delay: 0s;
}
.loader-letter:nth-child(2) {
  animation-delay: 0.1s;
}
.loader-letter:nth-child(3) {
  animation-delay: 0.2s;
}
.loader-letter:nth-child(4) {
  animation-delay: 0.3s;
}
.loader-letter:nth-child(5) {
  animation-delay: 0.4s;
}
.loader-letter:nth-child(6) {
  animation-delay: 0.5s;
}
.loader-letter:nth-child(7) {
  animation-delay: 0.6s;
}
.loader-letter:nth-child(8) {
  animation-delay: 0.7s;
}
.loader-letter:nth-child(9) {
  animation-delay: 0.8s;
}
.loader-letter:nth-child(10) {
  animation-delay: 0.9s;
}

@keyframes loader-letter-anim {
  0%,
  100% {
    opacity: 0.4;
    transform: translateY(0);
  }
  20% {
    opacity: 1;
    transform: scale(1.15);
  }
  40% {
    opacity: 0.7;
    transform: translateY(0);
  }
}
`}</style>
          </div>
        </div>
      )}
      {!loading && (
        <>      <div className="relative z-10 mx-auto px-6 lg:px-10 w-full py-32 lg:py-0 grid grid-cols-1 lg:grid-cols-2 gap-y-16 gap-x-16 xl:gap-x-32 2xl:gap-x-56 items-center lg:pl-24 max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-[1600px]">
        {/* Left: tagline + headline */}
        <div className="min-w-0 lg:max-w-[45%] xl:max-w-lg lg:pr-16">
          <div ref={taglineRef} className="mb-8 flex items-center gap-3 opacity-0">
            <span className="w-3 h-3 rounded-full bg-bright-blue" />
            <span className="w-12 h-0.5 bg-bright-blue" />
            <span className="text-xs uppercase tracking-[0.2em] font-medium text-muted-foreground">
              Securing Clouds. Empowering Trust.
            </span>
          </div>

          <div ref={headlineRef} className="hero-headline">
            <div className="break-words">{renderLetters('Cloud Security')}</div>
            <div className="break-words">{renderLetters('AI-Powered')}</div>
            <div className="break-words text-bright-blue">{renderLetters('Data Governance', 'text-bright-blue')}</div>
            <div className="break-words text-bright-blue">{renderLetters('Compliance First', 'text-bright-blue')}</div>
          </div>
        </div>

        {/* Right: quick contact form */}
        <div ref={formRef} className="mt-0 flex w-full justify-end min-w-0 items-start opacity-0">
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
              We’ll help you secure, govern, and optimize your cloud. Our experts respond within 24 hours.
            </p>
            <button type="submit" className="btn-primary w-full justify-center py-3">
              Send
            </button>
          </form>
        </div>
      </div>
        </>
      )}
    </section>
  );
};

export default HeroSection;
