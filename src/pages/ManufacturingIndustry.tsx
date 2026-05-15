import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";

const ManufacturingIndustry: React.FC = () => {
  const navigate = useNavigate();
  const challenges = [
    {
      challenge: "OT/IT connectivity and security",
      solution:
        "We build secure network segmentation, identity controls, and logging pipelines to connect plants to cloud safely without exposing critical systems.",
    },
    {
      challenge: "IoT data volume and reliability",
      solution:
        "Stream ingestion pipelines and durable storage patterns collect sensor data at scale with guaranteed delivery and clear cost controls.",
    },
    {
      challenge: "Predictive maintenance and analytics",
      solution:
        "We implement data platforms and ML workflows for predictive maintenance to reduce downtime and improve asset utilization.",
    },
    {
      challenge: "Supply chain visibility",
      solution:
        "Unified dashboards and event-driven integrations across ERP, MES, and logistics systems provide real-time visibility and faster decisions.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="relative h-[480px] overflow-hidden pt-16 lg:pt-20">
        <img
          src="https://images.unsplash.com/photo-1581091215367-59ab6b28c3d4?auto=format&fit=crop&w=1600&q=80"
          alt="Manufacturing"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/65 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex items-end pb-14">
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-light-blue border border-bright-blue/30 bg-bright-blue/10 rounded-full px-3 py-1 mb-4">
              By Industry
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4" style={{ fontFamily: "'Georgia', serif" }}>
              Manufacturing cloud —<br />
              <span className="text-light-blue">connected plants, resilient operations</span>
            </h1>
            <p className="text-white/70 text-lg max-w-xl">
              CloudFirst modernizes manufacturing technology with secure OT connectivity, IoT data platforms, and analytics that improve uptime and productivity.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-bright-blue py-8">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { v: "Secure", l: "OT connectivity" },
            { v: "Real-time", l: "Factory telemetry" },
            { v: "Lower", l: "Unplanned downtime" },
            { v: "Visible", l: "Supply chain signals" },
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
          Manufacturing cloud challenges — solved
        </h2>
        <p className="text-gray-400 text-sm mb-10">The constraints of plants and production environments, handled with cloud-native patterns.</p>
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
            What we build for manufacturing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: "🏭", title: "IoT data platforms", desc: "Streaming ingestion, storage, and governance for sensor and production telemetry." },
              { icon: "🛠️", title: "Predictive maintenance", desc: "Analytics and ML workflows that reduce downtime and improve reliability." },
              { icon: "📦", title: "Supply chain dashboards", desc: "Unified visibility across production, inventory, and logistics with event-driven updates." },
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
              Modernize manufacturing operations
            </h2>
            <p className="text-white/85 text-sm leading-relaxed">
              Talk to CloudFirst about secure factory connectivity, IoT data platforms, and resilient cloud operations.
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

export default ManufacturingIndustry;

