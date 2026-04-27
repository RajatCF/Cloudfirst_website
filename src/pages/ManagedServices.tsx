import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";

const tiers = [
  {
    name: "Essentials",
    price: "From £2,500/mo",
    badge: "text-gray-700 bg-gray-100 border-gray-200",
    card: "bg-white border-gray-200",
    features: [
      "Business-hours monitoring (8am–6pm)",
      "Monthly cost & performance review",
      "Patch management (scheduled)",
      "Up to 3 cloud accounts",
      "Email & ticket support",
      "4hr response SLA",
    ],
    best: "Internal tools, dev/test environments",
  },
  {
    name: "Professional",
    price: "From £6,500/mo",
    badge: "text-blue-700 bg-blue-50 border-blue-200",
    card: "bg-blue-50 border-blue-200",
    features: [
      "24/7 monitoring & alerting",
      "Weekly ops review",
      "Incident response (P1/P2)",
      "Up to 10 cloud accounts",
      "Slack + phone support",
      "1hr P1 response SLA",
    ],
    best: "Business-critical applications",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    badge: "text-purple-700 bg-purple-50 border-purple-200",
    card: "bg-white border-purple-200",
    features: [
      "24/7/365 dedicated NOC",
      "Daily ops reviews on-demand",
      "War-room incident management",
      "Unlimited cloud accounts",
      "Named CSM + on-site support",
      "15min P1 response SLA",
    ],
    best: "Enterprise & regulated workloads",
  },
];

const ManagedServices: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f7f8fa]">
      <Navbar />

      {/* Hero — centered, navy/teal */}
      <div className="w-full bg-[#0d1b4b] relative overflow-hidden pt-16 lg:pt-20">
        <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(ellipse at 60% 40%, #0891b2 0%, transparent 60%)" }} />
        <div className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center relative z-10">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-teal-300 border border-teal-400/30 bg-teal-400/10 rounded-full px-3 py-1 mb-5">Support Tiers</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5" style={{ fontFamily: "'Georgia', serif" }}>
            Managed services that<br />
            <span className="text-teal-400">scale with your business</span>
          </h1>
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Choose the level of managed support that matches your operational maturity and business criticality. Every tier includes proactive monitoring, regular reviews, and certified cloud engineers.
          </p>
        </div>
      </div>

      {/* Tier cards */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div key={tier.name} className={`rounded-2xl border-2 p-7 flex flex-col ${tier.card} ${tier.highlight ? "shadow-xl scale-[1.02] relative" : ""}`}>
              {tier.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-blue-600 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">Most popular</span>
                </div>
              )}
              <div className={`inline-block self-start text-[11px] font-bold uppercase tracking-wider border rounded px-2.5 py-1 mb-4 ${tier.badge}`}>{tier.name}</div>
              <div className="text-2xl font-bold text-gray-900 mb-1" style={{ fontFamily: "'Georgia', serif" }}>{tier.price}</div>
              <div className="text-xs text-gray-500 mb-6">Best for: {tier.best}</div>
              <ul className="space-y-2.5 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-teal-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <button onClick={() => navigate("/contact")} className={`mt-7 w-full py-3 rounded-lg text-sm font-bold transition-colors ${tier.highlight ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-gray-900 hover:bg-gray-800 text-white"}`}>
                Get started →
              </button>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-gray-400 mt-6">All prices exclude VAT. Custom pricing available for multi-year commitments.</p>
      </div>

      {/* What's always included */}
      <div className="bg-white border-y border-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: "'Georgia', serif" }}>Included in every tier</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: "☁️", title: "Multi-cloud support", desc: "AWS, Azure, and GCP — managed under a single service agreement." },
              { icon: "📋", title: "Monthly reporting", desc: "Detailed ops, cost, and security reports delivered every month." },
              { icon: "🔐", title: "Security baseline", desc: "CIS benchmark compliance checks and monthly security posture reviews." },
              { icon: "🤝", title: "Customer success", desc: "A dedicated customer success manager for strategic planning and escalation." },
            ].map((item) => (
              <div key={item.title} className="text-center p-5">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-sm font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-[#0d1b4b] rounded-2xl px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(ellipse at 90% 50%, #0891b2 0%, transparent 60%)" }} />
          <div className="relative z-10 max-w-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3" style={{ fontFamily: "'Georgia', serif" }}>Not sure which tier is right?</h2>
            <p className="text-white/60 text-sm leading-relaxed">Talk to us. We'll assess your environment, understand your team's capacity, and recommend the right level of managed support.</p>
          </div>
          <div className="relative z-10 flex flex-col gap-3 flex-shrink-0">
            <button onClick={() => navigate("/contact")} className="px-7 py-3 bg-teal-400 hover:bg-teal-300 text-[#0d1b4b] text-sm font-bold rounded-lg transition-colors whitespace-nowrap">Talk to us →</button>
            <button onClick={() => navigate(-1)} className="text-xs text-white/40 hover:text-white/70 transition-colors text-center">← Back</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagedServices;
