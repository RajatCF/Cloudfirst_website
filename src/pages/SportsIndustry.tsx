import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";

const SportsIndustry: React.FC = () => {
  const navigate = useNavigate();
  const challenges = [
    {
      challenge: "Live event traffic surges",
      solution:
        "We design highly scalable architectures for match-day peaks with CDN, caching, and auto-scaling that maintains performance under pressure.",
    },
    {
      challenge: "Low-latency fan experiences",
      solution:
        "Edge delivery and optimized APIs keep apps responsive for real-time scores, highlights, and interactive experiences.",
    },
    {
      challenge: "Ticketing security and fraud",
      solution:
        "We implement secure identity, bot protection, and monitoring to protect ticketing flows and reduce fraudulent activity.",
    },
    {
      challenge: "Data platforms for performance analytics",
      solution:
        "Unified data platforms power analytics for team performance, fan engagement, and sponsorship reporting with governance built in.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="relative h-[480px] overflow-hidden pt-16 lg:pt-20">
        <img
          src="https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1600&q=80"
          alt="Sports"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/90 via-indigo-950/65 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex items-end pb-14">
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-light-blue border border-bright-blue/30 bg-bright-blue/10 rounded-full px-3 py-1 mb-4">
              By Industry
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4" style={{ fontFamily: "'Georgia', serif" }}>
              Sports cloud —<br />
              <span className="text-light-blue">match-day scale, always-on experiences</span>
            </h1>
            <p className="text-white/70 text-lg max-w-xl">
              CloudFirst builds secure, scalable platforms for sports organizations to power live events, ticketing, fan engagement, and data-driven performance analytics.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-bright-blue py-8">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { v: "Match-day", l: "Auto-scale peaks" },
            { v: "Low", l: "Latency delivery" },
            { v: "Secure", l: "Ticketing flows" },
            { v: "Unified", l: "Data platforms" },
          ].map((s) => (
            <div key={s.l}>
              <div className="text-xl font-bold text-white mb-0.5" style={{ fontFamily: "'Georgia', serif" }}>
                {s.v}
              </div>
              <div className="text-xs text-white/80">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Georgia', serif" }}>
          Sports cloud challenges — solved
        </h2>
        <p className="text-gray-400 text-sm mb-10">Reliability, speed, and security for modern sports experiences.</p>
        <div className="space-y-4">
          {challenges.map((c) => (
            <div key={c.challenge} className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-gray-100">
              <div className="bg-red-50 p-6 flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-red-400 flex-shrink-0 mt-1.5" />
                <div>
                  <div className="text-xs font-bold text-red-500 uppercase tracking-wider mb-1">Challenge</div>
                  <p className="text-sm text-gray-700 font-medium">{c.challenge}</p>
                </div>
              </div>
              <div className="bg-bright-blue/5 p-6 flex items-start gap-3">
                <svg className="w-4 h-4 text-bright-blue flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <div className="text-xs font-bold text-bright-blue uppercase tracking-wider mb-1">Our solution</div>
                  <p className="text-sm text-gray-600 leading-relaxed">{c.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 border-y border-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8" style={{ fontFamily: "'Georgia', serif" }}>
            What we build for sports organizations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: "🎟️", title: "Ticketing reliability", desc: "Secure, bot-resistant flows with monitoring and scalable backends." },
              { icon: "📣", title: "Fan engagement apps", desc: "Fast APIs, push workflows, and edge delivery for interactive experiences." },
              { icon: "📊", title: "Analytics platforms", desc: "Governed data foundations for performance insights and sponsor reporting." },
            ].map((u) => (
              <div key={u.title} className="bg-white rounded-xl border border-gray-100 p-6 text-center shadow-sm">
                <div className="text-3xl mb-3">{u.icon}</div>
                <h3 className="text-sm font-bold text-gray-900 mb-2">{u.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-bright-blue to-light-blue rounded-2xl px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3" style={{ fontFamily: "'Georgia', serif" }}>
              Build match-day ready platforms
            </h2>
            <p className="text-white/85 text-sm leading-relaxed">
              Talk to CloudFirst about secure ticketing, live event scale, and modern fan experiences.
            </p>
          </div>
          <div className="flex flex-col gap-3 flex-shrink-0">
            <button
              onClick={() => navigate("/contact")}
              className="px-7 py-3 bg-white hover:bg-white/95 text-bright-blue text-sm font-bold rounded-lg transition-colors whitespace-nowrap"
            >
              Talk to a specialist →
            </button>
            <button onClick={() => navigate(-1)} className="text-xs text-white/70 hover:text-white transition-colors text-center">
              ← Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportsIndustry;

