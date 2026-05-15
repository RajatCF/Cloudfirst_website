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
    <section ref={sectionRef} className="bg-white text-gray-900 py-32 lg:py-40">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Image Space */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="w-full">
              <img
                src="/cloud-computing.gif"
                alt="reinforce360 platform dashboard"
                className="w-full h-auto rounded-lg object-contain"
                onError={(e) => {
                  console.log('Image failed to load:', '/cloud-computing.gif');
                  // Fallback to original image if new one fails
                  e.currentTarget.src = "/src/assets/images/bg_img_reinfo.jpg";
                }}
              />
            </div>
          </div>

          {/* Content */}
          <div className="mold-content">
            <h2 className="section-title mb-10">
              <span className="bg-gradient-to-r from-bright-blue via-blue-400 to-purple-400 bg-clip-text text-transparent">
                reinforce360
              </span>
            </h2>
            <div className="space-y-6 text-base leading-relaxed opacity-70">
              <p>
                reinforce360 is designed to meet the complex and evolving needs of modern cloud operations. It delivers a unified platform that integrates cost governance, resource optimization, and intelligent automation, helping organizations operate more efficiently, securely, and sustainably in the cloud.
              </p>
              <p>
                This platform goes beyond traditional cloud management tools by combining AI-powered analytics, automated tagging compliance, and real-time cost control into a single, seamless experience.
              </p>
              <p>
                reinforce360 doesn't just cut costs, it cuts carbon. Reduced cloud spend means fewer active instances, lower data center energy draw, and a measurably smaller environmental footprint. As ESG accountability becomes non-negotiable, reinforce360 transforms cloud efficiency into a sustainability advantage. Less consumption, less waste, less impact on the planet, all without compromising performance. It's not just smarter cloud management; it's responsible innovation at scale. Every dollar saved is a step toward a greener digital future.
              </p>
            </div>
            <div className="mt-12 pt-8 border-t border-primary-foreground/10">
              <a 
                href="/reinforce360tm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 bg-gradient-to-r from-bright-blue to-blue-600 text-white hover:from-blue-600 hover:to-purple-600 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Explore Product
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreakingTheMold;
