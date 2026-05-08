import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

const GoGlobal: React.FC = () => {
  const navigate = useNavigate();
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const yearRef = useRef<HTMLSpanElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const awardFrameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

    if (headlineRef.current) {
      timeline.fromTo(
        headlineRef.current,
        { opacity: 0, y: 40, scale: 0.94 },
        { opacity: 1, y: 0, scale: 1, duration: 0.9, ease: "power4.out" }
      );
    }

    if (yearRef.current) {
      timeline.fromTo(
        yearRef.current,
        { scale: 0.82, opacity: 0, y: 10 },
        { scale: 1, opacity: 1, y: 0, duration: 0.7, ease: "elastic.out(1, 0.8)" },
        "-=0.55"
      );

      gsap.to(yearRef.current, {
        y: -8,
        x: 6,
        rotation: 1.4,
        scale: 1.08,
        duration: 0.9,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    }

    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        scale: 1.08,
        boxShadow: "0 24px 60px rgba(26,46,110,0.24)",
        duration: 1.1,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    }

    if (awardFrameRef.current) {
      gsap.to(awardFrameRef.current, {
        y: -8,
        rotation: 0.6,
        duration: 1.2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    }
  }, []);

  return (
    <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-10 items-center">
          <div className="flex flex-col justify-between">
            <div>
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xs font-semibold uppercase tracking-widest text-amber-700 bg-amber-50 border border-amber-300 rounded-full px-3 py-1">
                  Award Winner
                </span>
                <span className="text-xs text-gray-400 font-medium">2025 Go Global Awards</span>
              </div>

              {/* Headline */}
              <h2 ref={headlineRef} className="text-4xl md:text-[2.75rem] font-bold leading-snug text-gray-900 mb-4" style={{ fontFamily: "'Georgia', serif" }}>
                Cloud Solutions Provider<br />
                of the{" "}
                <span ref={yearRef} className="text-blue-700 inline-block tracking-wide">Year</span>
              </h2>

              {/* Body */}
              <p className="text-sm md:text-base text-gray-500 leading-relaxed max-w-lg mb-8">
                CloudFirst Technology Private Limited has been named winner in this prestigious category — a recognition of our commitment to delivering innovative cloud solutions that transform businesses across industries.
              </p>
            </div>

            {/* Stats + CTA */}
            <div className="flex justify-center items-center">
              <div className="flex flex-col items-center">
                <div className="flex gap-8 mb-7">
                  <div className="flex flex-col">
                    <span className="text-xl font-bold text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>2025</span>
                    <span className="text-[11px] uppercase tracking-wider text-gray-400 font-medium">Edition</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl font-bold text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>Global</span>
                    <span className="text-[11px] uppercase tracking-wider text-gray-400 font-medium">Reach</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl font-bold text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>1st</span>
                    <span className="text-[11px] uppercase tracking-wider text-gray-400 font-medium">Category Winner</span>
                  </div>
                </div>

                <button
                  ref={buttonRef}
                  onClick={() => navigate("/go-global-award")}
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#1a2e6e] hover:bg-blue-700 text-white text-sm font-semibold rounded-md transition-all duration-200"
                >
                  Read award details
                  <span className="text-base leading-none">→</span>
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-3">
            {/* Award image frame */}
            <div
              ref={awardFrameRef}
              className="w-[340px] h-[340px] sm:w-[380px] sm:h-[380px] bg-white rounded-2xl flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300 shadow-lg"
              onClick={() => navigate("/go-global-award")}
            >
              <img
                src="/goglobal.jpg"
                alt="Go Global Award 2025"
                className="w-full h-full object-contain p-5 select-none"
              />
            </div>

            {/* Award name */}
            <div className="text-center">
              <p className="text-sm font-semibold text-gray-500 leading-relaxed">
                Go Global Awards<br />2025
              </p>
            </div>

            {/* Category pill */}
            <span className="text-sm font-medium text-blue-800 bg-blue-50 rounded px-3 py-1 text-center leading-snug">
              Cloud Solutions Provider of the Year
            </span>

            {/* Recipient */}
            <div className="text-center">
              <p className="text-sm text-gray-400 leading-relaxed">
                Presented to<br />
                <span className="text-sm font-semibold text-gray-700">CloudFirst Technology Pvt. Ltd.</span>
              </p>
            </div>
          </div>

      </div>
    </section>
  );
};

export default GoGlobal;
