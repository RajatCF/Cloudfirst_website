import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { Award } from "lucide-react";

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
      <div className="relative overflow-hidden rounded-3xl border border-gray-100 bg-gradient-to-br from-white via-blue-50/30 to-white shadow-sm">
        <div aria-hidden="true" className="pointer-events-none absolute -top-28 -left-28 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-28 -right-28 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />

        <div className="relative grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-8 items-center px-6 py-12 lg:px-12 lg:py-16">
          <div className="flex flex-col justify-between lg:pl-10">
            <div>
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-800 bg-gradient-to-r from-amber-50 to-white border border-amber-300/80 rounded-full px-3 py-1 shadow-sm">
                  <Award className="w-4 h-4 text-amber-700" />
                  Award Winner
                </span>
              </div>

              {/* Headline */}
              <h2 ref={headlineRef} className="text-4xl md:text-[2.75rem] font-bold leading-snug text-gray-900 mb-4" style={{ fontFamily: "'Georgia', serif" }}>
                Cloud Solutions Provider<br />
                of the{" "}
                <span
                  ref={yearRef}
                  className="inline-block tracking-wide bg-gradient-to-r from-blue-700 to-indigo-500 bg-clip-text text-transparent"
                >
                  Year
                </span>
              </h2>
              <div className="h-1 w-20 rounded-full bg-gradient-to-r from-blue-600/70 via-indigo-500/40 to-transparent mb-6" />

              {/* Body */}
              <p className="text-sm md:text-base text-gray-500 leading-relaxed max-w-lg mb-8">
                CloudFirst Technology Private Limited has been named winner in this prestigious category — a recognition of our commitment to delivering innovative cloud solutions that transform businesses across industries.
              </p>
            </div>

            {/* Stats + CTA */}
            <div className="flex justify-center items-center">
              <div className="flex flex-col items-center">
                <button
                  ref={buttonRef}
                  onClick={() => navigate("/go-global-award")}
                  className="inline-flex items-center gap-2 px-9 py-4 bg-gradient-to-r from-[#1a2e6e] to-blue-700 hover:to-indigo-600 text-white text-base font-semibold rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Read award details
                  <span className="text-base leading-none">→</span>
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-4">
            {/* Award image frame */}
            <div
              ref={awardFrameRef}
              className="w-[340px] h-[340px] sm:w-[380px] sm:h-[380px] rounded-3xl cursor-pointer hover:scale-[1.04] transition-transform duration-300 shadow-xl bg-gradient-to-br from-blue-200/60 via-white to-amber-200/40 p-[3px]"
              onClick={() => navigate("/go-global-award")}
            >
              <div className="w-full h-full bg-white rounded-[22px] flex items-center justify-center">
                <img
                  src="https://cloudfirst-website-assets.s3.ap-south-1.amazonaws.com/All_image/goglobal.jpg"
                  alt="Go Global Award 2025"
                  className="w-full h-full object-contain p-6 select-none"
                />
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-lg sm:text-xl font-bold text-blue-700" style={{ fontFamily: "'Georgia', serif" }}>
                Cloud Solutions Provider of the Year
              </h3>
              <p className="mt-1 text-sm text-gray-500">Westminster, London, United Kingdom</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GoGlobal;
