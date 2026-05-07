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
    <section className="max-w-[1400px] mx-auto px-6 lg:px-10">
      {/* Accent bar */}
      <div className="h-1 w-full rounded-t-2xl" style={{ background: "linear-gradient(90deg, #1a2e6e 0%, #1565c0 40%, #f5a623 100%)" }} />

      <div className="bg-white rounded-b-2xl border border-blue-100 shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1px_420px]">

          {/* Left: Content */}
          <div className="flex flex-col justify-between p-10">
            <div>
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xs font-semibold uppercase tracking-widest text-amber-700 bg-amber-50 border border-amber-300 rounded-full px-3 py-1">
                  Award Winner
                </span>
                <span className="text-xs text-gray-400 font-medium">2025 Go Global Awards</span>
              </div>

              {/* Headline */}
              <h2 ref={headlineRef} className="text-3xl md:text-[2.5rem] font-bold leading-snug text-gray-900 mb-4" style={{ fontFamily: "'Georgia', serif" }}>
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
            <div>
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

          {/* Divider */}
          <div className="hidden md:block bg-blue-100" />

          {/* Right: Award Visual */}
          <div className="bg-gray-50 flex flex-col items-center justify-center gap-5 p-8">
            {/* Award image frame */}
            <div
              ref={awardFrameRef}
              className="w-64 h-64 bg-white rounded-2xl border border-gray-200 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300 shadow-lg"
              onClick={() => navigate("/go-global-award")}
            >
              <img
                src="/goglobal.jpg"
                alt="Go Global Award 2025"
                className="w-full h-full object-contain p-6 select-none"
              />
            </div>

            {/* Award name */}
            <div className="text-center">
              <p className="text-xs font-semibold text-gray-500 leading-relaxed">
                Go Global Awards<br />2025
              </p>
            </div>

            {/* Category pill */}
            <span className="text-[11px] font-medium text-blue-800 bg-blue-50 rounded px-3 py-1 text-center leading-snug">
              Cloud Solutions Provider of the Year
            </span>

            {/* Recipient */}
            <div className="text-center">
              <p className="text-[11px] text-gray-400 leading-relaxed">
                Presented to<br />
                <span className="text-xs font-semibold text-gray-700">CloudFirst Technology Pvt. Ltd.</span>
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GoGlobal;