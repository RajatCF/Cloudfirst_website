import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

const HeroSection = () => {
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const taglineRef = useRef(null);
  const headlineRef = useRef(null);
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thanks for getting in touch!');
    setForm({ name: '', email: '', message: '' });
  };

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!loading && window.innerWidth >= 1024) {
      const tl = gsap.timeline();
      tl.fromTo(taglineRef.current, { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8 });
      const letters = document.querySelectorAll('.hero-letter');
      tl.fromTo(letters, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.04, stagger: 0.03 });
      tl.fromTo(formRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '<0.5');
    }
  }, [loading]);

  const renderLetters = (text, className = '') => {
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
    <section className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 lg:px-10 py-12 lg:py-32 overflow-hidden bg-background">
      
      {/* LOADER */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center z-50 bg-black">
          <div className="loader-wrapper w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 flex items-center justify-center mx-auto">
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

            <style>{`
              .loader-wrapper {
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 100%;
                font-family: "Inter", sans-serif;
                font-size: clamp(1.5rem, 4vw, 3rem);
                font-weight: 300;
                color: white;
                background-color: #000;
                user-select: none;
              }
              .loader {
                position: absolute;
                top: 50%;
                left: 50%;
                width: clamp(150px, 40vw, 300px);
                height: clamp(150px, 40vw, 300px);
                transform: translate(-50%, -50%);
                border-radius: 50%;
                background-color: transparent;
                animation: loader-rotate 2s linear infinite;
                z-index: 0;
              }
              @keyframes loader-rotate {
                0% { transform: translate(-50%, -50%) rotate(90deg); box-shadow: 0 10px 20px 0 #fff inset, 0 20px 30px 0 #ad5fff inset, 0 60px 60px 0 #471eec inset; }
                50% { transform: translate(-50%, -50%) rotate(270deg); box-shadow: 0 10px 20px 0 #fff inset, 0 20px 10px 0 #d60a47 inset, 0 40px 60px 0 #311e80 inset; }
                100% { transform: translate(-50%, -50%) rotate(450deg); box-shadow: 0 10px 20px 0 #fff inset, 0 20px 30px 0 #ad5fff inset, 0 60px 60px 0 #471eec inset; }
              }
              .loader-letter {
                display: inline-block;
                opacity: 0.4;
                animation: loader-letter-anim 2s infinite;
                z-index: 1;
              }
              .loader-letter:nth-child(1) { animation-delay: 0s; }
              .loader-letter:nth-child(2) { animation-delay: 0.1s; }
              .loader-letter:nth-child(3) { animation-delay: 0.2s; }
              .loader-letter:nth-child(4) { animation-delay: 0.3s; }
              .loader-letter:nth-child(5) { animation-delay: 0.4s; }
              .loader-letter:nth-child(6) { animation-delay: 0.5s; }
              .loader-letter:nth-child(7) { animation-delay: 0.6s; }
              .loader-letter:nth-child(8) { animation-delay: 0.7s; }
              .loader-letter:nth-child(9) { animation-delay: 0.8s; }
              .loader-letter:nth-child(10) { animation-delay: 0.9s; }
              @keyframes loader-letter-anim {
                0%,100% { opacity:0.4; }
                20% { opacity:1; transform: scale(1.15); }
                40% { opacity:0.7; }
              }
            `}</style>
          </div>
        </div>
      )}

      {!loading && (
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start px-4 sm:px-6 lg:px-10">

          {/* LEFT SIDE */}
          <div className="w-full lg:max-w-lg flex flex-col pt-8 lg:pt-0 mx-auto text-center lg:text-left">
            
            <div ref={taglineRef} className="flex items-center gap-3 opacity-0">
              <span className="w-3 h-3 rounded-full bg-bright-blue" />
              <span className="w-12 h-0.5 bg-bright-blue" />
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-muted-foreground">
                Securing Clouds. Empowering Trust.
              </span>
            </div>

            <div
              ref={headlineRef}
              className="hero-headline flex flex-col gap-8 lg:gap-12 mt-12 lg:mt-16"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight">
                {renderLetters('Cloud Security')}
              </div>

              <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight">
                {renderLetters('AI-Powered')}
              </div>

              <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight text-bright-blue">
                {renderLetters('Data Governance', 'text-bright-blue')}
              </div>

              <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight text-bright-blue">
                {renderLetters('Compliance First', 'text-bright-blue')}
              </div>
            </div>
          </div>

          {/* FORM SIDE */}
          <div ref={formRef} className="w-full max-w-md lg:max-w-lg mx-auto lg:mx-0 opacity-0">
            <form onSubmit={handleSubmit} className="space-y-4 p-6 w-full">
              
              <div className="text-center mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-bright-blue">
                  Have A Question?
                </h3>
                <p className="text-sm text-muted-foreground">
                  for more information
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1">
                  Name
                </label>
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
                <label className="block text-sm font-medium text-muted-foreground mb-1">
                  Email
                </label>
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
                <label className="block text-sm font-medium text-muted-foreground mb-1">
                  Message
                </label>
                <textarea
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-bright-blue transition-all resize-none h-24 sm:h-28"
                  placeholder="Your message"
                  required
                />
              </div>

              <p className="text-xs text-muted-foreground">
                We'll help you secure, govern, and optimize your cloud.
                Our experts respond within 24 hours.
              </p>

              <button
                type="submit"
                className="btn-primary w-full justify-center py-3"
              >
                Send
              </button>

            </form>
          </div>

        </div>
      )}
    </section>
  );
};

export default HeroSection;