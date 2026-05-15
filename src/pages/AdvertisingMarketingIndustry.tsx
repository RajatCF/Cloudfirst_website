import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";

const AdvertisingMarketingIndustry: React.FC = () => {
  const navigate = useNavigate();
  const challenges = [
    {
      challenge: "Campaign traffic spikes",
      solution:
        "We build auto-scaling, CDN-accelerated platforms that absorb sudden traffic bursts without over-provisioning and without degrading user experience.",
    },
    {
      challenge: "Attribution & measurement complexity",
      solution:
        "We implement event pipelines, clean-room friendly analytics patterns, and governed data models for accurate reporting across channels.",
    },
    {
      challenge: "Customer data privacy & consent",
      solution:
        "Consent-aware data architecture with encryption, access controls, and audit trails keeps customer data protected and compliant with global privacy requirements.",
    },
    {
      challenge: "MarTech integration sprawl",
      solution:
        "We integrate your CRM, CDP, ad platforms, and BI stack with secure APIs and reliable orchestration so data flows cleanly end to end.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="relative h-[480px] overflow-hidden pt-16 lg:pt-20">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80"
          alt="Advertising and marketing"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-950/90 via-fuchsia-950/65 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex items-end pb-14">
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-light-blue border border-bright-blue/30 bg-bright-blue/10 rounded-full px-3 py-1 mb-4">
              By Industry
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4" style={{ fontFamily: "'Georgia', serif" }}>
              Advertising &amp; marketing cloud —<br />
              <span className="text-light-blue">faster campaigns, cleaner data</span>
            </h1>
            <p className="text-white/70 text-lg max-w-xl">
              Launch faster, measure better, and scale confidently. CloudFirst modernizes marketing platforms with secure data foundations, analytics, and automation.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-bright-blue py-8">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { v: "10x", l: "Peak traffic handling" },
            { v: "Minutes", l: "Faster deployments" },
            { v: "Governed", l: "Attribution models" },
            { v: "Secure", l: "Customer data flows" },
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
          Marketing cloud challenges — solved
        </h2>
        <p className="text-gray-400 text-sm mb-10">Common growth and measurement challenges, and our approach to each.</p>
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
            What we build for marketing teams
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: "📈", title: "Attribution-ready data layer", desc: "Event ingestion, identity resolution patterns, and a governed analytics model for reporting." },
              { icon: "⚡", title: "Campaign landing platforms", desc: "Fast, scalable landing stacks with CDN, caching, and observability to keep conversions high." },
              { icon: "🔐", title: "Privacy & security controls", desc: "Consent-aware data collection, encryption, and access controls across your MarTech stack." },
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
              Build a modern marketing platform
            </h2>
            <p className="text-white/85 text-sm leading-relaxed">
              Talk to CloudFirst about scaling your customer data, analytics, and marketing operations securely.
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

export default AdvertisingMarketingIndustry;

