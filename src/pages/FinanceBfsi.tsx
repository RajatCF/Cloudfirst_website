import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";

const FinanceBfsi: React.FC = () => {
  const navigate = useNavigate();
  const challenges = [
    { challenge: "Regulatory compliance (PCI DSS, FCA, RBI)", solution: "We build cloud environments with pre-mapped controls for financial regulators — audit trails, data residency, encryption standards, and documented evidence packages." },
    { challenge: "Core banking & trading latency", solution: "Ultra-low latency architecture using dedicated connectivity, placement groups, and optimised network paths to meet sub-millisecond trading and payment processing requirements." },
    { challenge: "Fraud detection at scale", solution: "Real-time ML inference pipelines on GCP Vertex AI or AWS SageMaker processing millions of transactions per second — with model governance and drift monitoring." },
    { challenge: "Business continuity & DR", solution: "Multi-region active-active architectures with RPO near zero and RTO under 5 minutes — tested quarterly and documented to satisfy regulators." },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero with dark finance image */}
      <div className="relative h-[480px] overflow-hidden pt-16 lg:pt-20">
        <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1600&q=80" alt="Finance" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1000]/95 via-[#1a1000]/75 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex items-end pb-14">
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-light-blue border border-bright-blue/30 bg-bright-blue/10 rounded-full px-3 py-1 mb-4">By Industry</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4" style={{ fontFamily: "'Georgia', serif" }}>Finance & BFSI cloud —<br /><span className="text-light-blue">regulated, resilient, fast</span></h1>
            <p className="text-white/70 text-lg max-w-xl">Financial services demand the highest security, lowest latency, and strictest compliance. CloudFirst architects cloud platforms purpose-built for banks, insurers, and fintech companies.</p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-[#1a1000] py-8">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[{ v: "PCI DSS L1", l: "Compliant environments" }, { v: "< 1ms", l: "Trading latency target" }, { v: "RPO ~0", l: "Near-zero data loss" }, { v: "RBI/FCA", l: "Regulatory aligned" }].map(s => (
            <div key={s.l}><div className="text-xl font-bold text-light-blue mb-0.5" style={{ fontFamily: "'Georgia', serif" }}>{s.v}</div><div className="text-xs text-white/50">{s.l}</div></div>
          ))}
        </div>
      </div>

      {/* Challenges */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Georgia', serif" }}>Financial services cloud challenges — solved</h2>
        <p className="text-gray-400 text-sm mb-10">The regulatory and technical challenges specific to BFSI, and how we address them.</p>
        <div className="space-y-4">
          {challenges.map((c) => (
            <div key={c.challenge} className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-gray-100">
              <div className="bg-red-50 p-6 flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-red-400 flex-shrink-0 mt-1.5" />
                <div><div className="text-xs font-bold text-red-500 uppercase tracking-wider mb-1">Challenge</div><p className="text-sm text-gray-700 font-medium">{c.challenge}</p></div>
              </div>
              <div className="bg-bright-blue/5 p-6 flex items-start gap-3">
                <svg className="w-4 h-4 text-bright-blue flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                <div><div className="text-xs font-bold text-bright-blue uppercase tracking-wider mb-1">Our solution</div><p className="text-sm text-gray-600 leading-relaxed">{c.solution}</p></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Use cases */}
      <div className="bg-gray-50 border-y border-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8" style={{ fontFamily: "'Georgia', serif" }}>BFSI use cases we deliver</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: "💳", title: "Payment processing platforms", desc: "Highly available, PCI-compliant payment infrastructure with multi-region redundancy and real-time fraud detection." },
              { icon: "📊", title: "Risk & analytics platforms", desc: "Cloud-native risk modelling, stress testing, and regulatory reporting on BigQuery or Azure Synapse." },
              { icon: "🏦", title: "Core banking modernisation", desc: "Migrate legacy core banking systems to cloud-native architecture with zero-downtime cutover and regulatory sign-off." },
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

      {/* CTA */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-[#1a1000] rounded-2xl px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(ellipse at 90% 50%, hsl(var(--bright-blue)) 0%, transparent 60%)" }} />
          <div className="relative z-10 max-w-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3" style={{ fontFamily: "'Georgia', serif" }}>Talk to a BFSI cloud specialist</h2>
            <p className="text-white/60 text-sm leading-relaxed">Tell us about your regulatory environment and workload requirements. We'll outline an architecture approach aligned to your compliance obligations.</p>
          </div>
          <div className="relative z-10 flex flex-col gap-3 flex-shrink-0">
            <button onClick={() => navigate("/contact")} className="px-7 py-3 bg-bright-blue hover:bg-bright-blue/90 text-white text-sm font-bold rounded-lg transition-colors whitespace-nowrap">Talk to a specialist →</button>
            <button onClick={() => navigate(-1)} className="text-xs text-white/40 hover:text-white/70 transition-colors text-center">← Back</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinanceBfsi;
