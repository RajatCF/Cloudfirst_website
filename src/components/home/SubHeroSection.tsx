import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Add CSS for all background animations
const backgroundAnimations = `
  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  @keyframes float1 {
    0%, 100% { transform: translate(0, 0) scale(1); }
    25% { transform: translate(100px, -50px) scale(1.1); }
    50% { transform: translate(-50px, 100px) scale(0.9); }
    75% { transform: translate(-100px, -30px) scale(1.05); }
  }
  
  @keyframes float2 {
    0%, 100% { transform: translate(0, 0) scale(1); }
    33% { transform: translate(-80px, 60px) scale(0.95); }
    66% { transform: translate(120px, -40px) scale(1.15); }
  }
  
  @keyframes float3 {
    0%, 100% { transform: translate(0, 0) scale(1); }
    20% { transform: translate(-60px, -80px) scale(1.1); }
    40% { transform: translate(80px, 40px) scale(0.9); }
    60% { transform: translate(-40px, 60px) scale(1.05); }
    80% { transform: translate(60px, -60px) scale(0.95); }
  }
  
  @keyframes particle1 {
    0% { transform: translate(0, 0); opacity: 0; }
    10% { opacity: 0.6; }
    90% { opacity: 0.6; }
    100% { transform: translate(300px, -200px); opacity: 0; }
  }
  
  @keyframes particle2 {
    0% { transform: translate(0, 0); opacity: 0; }
    10% { opacity: 0.5; }
    90% { opacity: 0.5; }
    100% { transform: translate(-250px, 180px); opacity: 0; }
  }
  
  @keyframes particle3 {
    0% { transform: translate(0, 0); opacity: 0; }
    10% { opacity: 0.4; }
    90% { opacity: 0.4; }
    100% { transform: translate(280px, -150px); opacity: 0; }
  }
  
  @keyframes particle4 {
    0% { transform: translate(0, 0); opacity: 0; }
    10% { opacity: 0.5; }
    90% { opacity: 0.5; }
    100% { transform: translate(-200px, 200px); opacity: 0; }
  }
  
  @keyframes particle5 {
    0% { transform: translate(0, 0); opacity: 0; }
    10% { opacity: 0.6; }
    90% { opacity: 0.6; }
    100% { transform: translate(320px, -180px); opacity: 0; }
  }
  
  @keyframes wave1 {
    0%, 100% { transform: translateY(0) scaleY(1); }
    50% { transform: translateY(-20px) scaleY(1.2); }
  }
  
  @keyframes wave2 {
    0%, 100% { transform: translateY(0) scaleY(1); }
    50% { transform: translateY(-15px) scaleY(1.1); }
  }
  
  @keyframes rotate1 {
    0% { transform: rotate(0deg) scale(1); }
    50% { transform: rotate(180deg) scale(1.2); }
    100% { transform: rotate(360deg) scale(1); }
  }
  
  @keyframes rotate2 {
    0% { transform: rotate(0deg) scale(1); }
    50% { transform: rotate(-180deg) scale(0.8); }
    100% { transform: rotate(-360deg) scale(1); }
  }
  
  @keyframes rotate3 {
    0% { transform: rotate(0deg) translateX(0); }
    25% { transform: rotate(90deg) translateX(20px); }
    50% { transform: rotate(180deg) translateX(0); }
    75% { transform: rotate(270deg) translateX(-20px); }
    100% { transform: rotate(360deg) translateX(0); }
  }
  
  @keyframes triangle1 {
    0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.25; }
    25% { transform: translate(30px, -20px) rotate(90deg); opacity: 0.4; }
    50% { transform: translate(-20px, 30px) rotate(180deg); opacity: 0.3; }
    75% { transform: translate(-30px, -10px) rotate(270deg); opacity: 0.35; }
  }
  
  @keyframes triangle2 {
    0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.2; }
    33% { transform: translate(-25px, 25px) rotate(120deg); opacity: 0.3; }
    66% { transform: translate(25px, -15px) rotate(240deg); opacity: 0.25; }
  }
  
  @keyframes hexagon1 {
    0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); opacity: 0.2; }
    20% { transform: translate(15px, -10px) rotate(72deg) scale(1.1); opacity: 0.3; }
    40% { transform: translate(-10px, 15px) rotate(144deg) scale(0.9); opacity: 0.25; }
    60% { transform: translate(-15px, -10px) rotate(216deg) scale(1.05); opacity: 0.28; }
    80% { transform: translate(10px, -5px) rotate(288deg) scale(0.95); opacity: 0.22; }
  }
  
  @keyframes dot1 {
    0%, 100% { transform: scale(1); opacity: 0.6; }
    50% { transform: scale(1.5); opacity: 0.2; }
  }
  
  @keyframes lightning1 {
    0%, 100% { transform: scaleY(0); opacity: 0; }
    10% { transform: scaleY(1); opacity: 0.8; }
    15% { transform: scaleY(0.5); opacity: 0.4; }
    20% { transform: scaleY(1); opacity: 0.6; }
    25% { transform: scaleY(0); opacity: 0; }
  }
  
  @keyframes lightning2 {
    0%, 100% { transform: scaleY(0); opacity: 0; }
    12% { transform: scaleY(1); opacity: 0.7; }
    18% { transform: scaleY(0.3); opacity: 0.3; }
    24% { transform: scaleY(1); opacity: 0.5; }
    30% { transform: scaleY(0); opacity: 0; }
  }
`;

const line1Text = 'We help enterprises';
const line2Text = 'modernize intelligently';

const SubHeroSection = () => {
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const workBtnRef = useRef<HTMLAnchorElement>(null);
  const contactBtnRef = useRef<HTMLAnchorElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ 
        defaults: { ease: 'power3.out' },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'bottom 30%',
          toggleActions: 'play none none none',
          once: true
        }
      });

      // Animate first line word from left screen edge with enhanced effects
      const line1WordElements = line1Ref.current?.querySelectorAll('.word') || [];
      line1WordElements.forEach((word, index) => {
        tl.fromTo(
          word,
          { x: -window.innerWidth, opacity: 0, rotation: -15, scale: 0.5 },
          { x: 0, opacity: 1, rotation: 0, scale: 1, duration: 1.0, ease: 'back.out(1.7)' },
          index * 0.3
        );
      });
      
      // Animate second line word from right screen edge with enhanced effects
      const line2WordElements = line2Ref.current?.querySelectorAll('.word') || [];
      line2WordElements.forEach((word, index) => {
        tl.fromTo(
          word,
          { x: window.innerWidth, opacity: 0, rotation: 15, scale: 0.5 },
          { x: 0, opacity: 1, rotation: 0, scale: 1, duration: 1.0, ease: 'back.out(1.7)' },
          line1WordElements.length * 0.3 + index * 0.3 - 0.3
        );
      });

      tl.fromTo(
          subtitleRef.current,
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.65'
        )
        .fromTo(
          [workBtnRef.current, contactBtnRef.current],
          { opacity: 0, y: 24, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.12 },
          '-=0.55'
        );

      // Button hover animations (not scroll-triggered)
      gsap.to(workBtnRef.current, {
        scale: 1.05,
        y: -2,
        boxShadow: '0 22px 60px rgba(59,130,246,0.22)',
        duration: 1.2,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });

      gsap.to(contactBtnRef.current, {
        y: -1.5,
        boxShadow: '0 18px 48px rgba(59,130,246,0.14)',
        duration: 1.5,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>{backgroundAnimations}</style>
      <section ref={sectionRef} className="relative py-32 lg:py-40 overflow-hidden" style={{
        background: 'linear-gradient(135deg, #e0e7ff 0%, #f0e6ff 25%, #fce7f3 50%, #e6f3ff 75%, #e0e7ff 100%)',
        backgroundSize: '400% 400%',
        animation: 'gradientShift 8s ease infinite'
      }}>
      {/* Animated background overlay */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating gradient orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full filter blur-3xl opacity-30" style={{
          animation: 'float1 15s ease-in-out infinite'
        }}></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-300 to-purple-300 rounded-full filter blur-3xl opacity-30" style={{
          animation: 'float2 18s ease-in-out infinite',
          animationDelay: '3s'
        }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-pink-300 to-blue-300 rounded-full filter blur-3xl opacity-30" style={{
          animation: 'float3 20s ease-in-out infinite',
          animationDelay: '6s'
        }}></div>
        
        {/* Moving particles */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-purple-400 rounded-full opacity-60" style={{
          animation: 'particle1 12s linear infinite'
        }}></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400 rounded-full opacity-50" style={{
          animation: 'particle2 15s linear infinite',
          animationDelay: '2s'
        }}></div>
        <div className="absolute bottom-32 left-32 w-5 h-5 bg-pink-400 rounded-full opacity-40" style={{
          animation: 'particle3 18s linear infinite',
          animationDelay: '4s'
        }}></div>
        <div className="absolute top-60 left-1/2 w-3 h-3 bg-purple-300 rounded-full opacity-50" style={{
          animation: 'particle4 14s linear infinite',
          animationDelay: '1s'
        }}></div>
        <div className="absolute bottom-20 right-1/3 w-4 h-4 bg-blue-300 rounded-full opacity-60" style={{
          animation: 'particle5 16s linear infinite',
          animationDelay: '3s'
        }}></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-10 right-10 w-16 h-16 border-4 border-purple-300 opacity-30" style={{
          animation: 'rotate1 20s linear infinite'
        }}></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 border-4 border-blue-300 opacity-25" style={{
          animation: 'rotate2 15s linear infinite reverse',
          animationDelay: '3s'
        }}></div>
        <div className="absolute top-1/3 left-1/4 w-20 h-20 border-4 border-pink-300 opacity-20" style={{
          animation: 'rotate3 25s linear infinite',
          animationDelay: '5s'
        }}></div>
        
        {/* Triangle shapes */}
        <div className="absolute top-20 right-1/3 w-0 h-0 opacity-25" style={{
          borderLeft: '30px solid transparent',
          borderRight: '30px solid transparent',
          borderBottom: '52px solid rgba(147, 51, 234, 0.3)',
          animation: 'triangle1 18s ease-in-out infinite'
        }}></div>
        <div className="absolute bottom-40 left-1/3 w-0 h-0 opacity-20" style={{
          borderLeft: '25px solid transparent',
          borderRight: '25px solid transparent',
          borderBottom: '43px solid rgba(59, 130, 246, 0.3)',
          animation: 'triangle2 22s ease-in-out infinite',
          animationDelay: '4s'
        }}></div>
        
        {/* Hexagon shapes */}
        <div className="absolute top-1/4 right-1/4 opacity-20" style={{
          width: '40px',
          height: '22px',
          background: 'rgba(236, 72, 153, 0.3)',
          position: 'relative',
          animation: 'hexagon1 16s ease-in-out infinite'
        }}>
          <div style={{
            position: 'absolute',
            top: '-11px',
            left: '0',
            width: '0',
            height: '0',
            borderLeft: '20px solid transparent',
            borderRight: '20px solid transparent',
            borderBottom: '11px solid rgba(236, 72, 153, 0.3)'
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '-11px',
            left: '0',
            width: '0',
            height: '0',
            borderLeft: '20px solid transparent',
            borderRight: '20px solid transparent',
            borderTop: '11px solid rgba(236, 72, 153, 0.3)'
          }}></div>
        </div>
        
        {/* Dotted patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-15">
          <div className="absolute top-10 left-10 w-2 h-2 bg-purple-400 rounded-full" style={{
            animation: 'dot1 3s ease-in-out infinite'
          }}></div>
          <div className="absolute top-10 left-20 w-2 h-2 bg-purple-400 rounded-full" style={{
            animation: 'dot1 3s ease-in-out infinite 0.2s'
          }}></div>
          <div className="absolute top-10 left-30 w-2 h-2 bg-purple-400 rounded-full" style={{
            animation: 'dot1 3s ease-in-out infinite 0.4s'
          }}></div>
          <div className="absolute top-20 left-10 w-2 h-2 bg-purple-400 rounded-full" style={{
            animation: 'dot1 3s ease-in-out infinite 0.6s'
          }}></div>
          <div className="absolute top-20 left-20 w-2 h-2 bg-purple-400 rounded-full" style={{
            animation: 'dot1 3s ease-in-out infinite 0.8s'
          }}></div>
          <div className="absolute top-20 left-30 w-2 h-2 bg-purple-400 rounded-full" style={{
            animation: 'dot1 3s ease-in-out infinite 1s'
          }}></div>
        </div>
        
        {/* Wave shapes */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-200 to-transparent opacity-20" style={{
          animation: 'wave1 8s ease-in-out infinite'
        }}></div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-blue-200 to-transparent opacity-15" style={{
          animation: 'wave2 10s ease-in-out infinite',
          animationDelay: '2s'
        }}></div>
        
        {/* Lightning/Electric effects */}
        <div className="absolute top-1/2 left-10 w-1 h-20 bg-gradient-to-b from-transparent via-purple-300 to-transparent opacity-40" style={{
          animation: 'lightning1 4s ease-in-out infinite'
        }}></div>
        <div className="absolute top-1/3 right-20 w-1 h-16 bg-gradient-to-b from-transparent via-blue-300 to-transparent opacity-35" style={{
          animation: 'lightning2 5s ease-in-out infinite',
          animationDelay: '2s'
        }}></div>
      </div>
      <div className="max-w-[800px] mx-auto px-6 lg:px-10 text-center">
        <div className="relative z-10">
          <h2 className="text-center mb-6 max-w-[1000px] mx-auto" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 900, color: '#1e293b', lineHeight: 1.2 }}>
            <div 
              ref={line1Ref}
              style={{ display: 'block', marginBottom: '0.5rem' }}
            >
              {line1Text.split(' ').map((word, index) => (
                <span
                  key={`line1-${index}`}
                  className="word"
                  style={{ display: 'inline-block', opacity: 0, marginRight: '0.2em' }}
                >
                  {word}
                </span>
              ))}
            </div>
            <div 
              ref={line2Ref}
              style={{ display: 'block' }}
            >
              {line2Text.split(' ').map((word, index) => (
                <span
                  key={`line2-${index}`}
                  className="word"
                  style={{ display: 'inline-block', opacity: 0, marginRight: '0.2em' }}
                >
                  {word}
                </span>
              ))}
            </div>
          </h2>
          <p ref={subtitleRef} className="text-lg text-gray-700 leading-relaxed max-w-[600px] mx-auto mb-12" style={{ opacity: 0.9 }}>
          with AI at the core, transforming cloud, data, and operations into competitive advantages.
        </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link ref={workBtnRef} to="/solutions" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              explore our work
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link ref={contactBtnRef} to="/contact" className="inline-flex items-center px-8 py-4 rounded-full font-semibold text-gray-700 border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300">
              get in touch
            </Link>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default SubHeroSection;
