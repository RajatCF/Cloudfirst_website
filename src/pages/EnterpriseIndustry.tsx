import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";

const EnterpriseIndustry: React.FC = () => {
  const navigate = useNavigate();
  const challenges = [
    { challenge: "Multi-cloud complexity at scale", solution: "We design unified control planes with consistent governance, tagging, cost allocation, and security policies across AWS, Azure, and GCP — managed as one coherent estate." },
    { challenge: "Governance & shadow IT", solution: "Cloud landing zones with policy-as-code enforce guardrails at account and project level — preventing shadow IT while allowing teams to self-serve safely." },
    { challenge: "Enterprise procurement & licensing", solution: "We optimise complex enterprise agreements, committed use discounts, and reserved instance portfolios — typically unlocking 25–40% cost reduction on existing spend." },
    { challenge: "Migration at enterprise scale", solution: "Factory-model migrations moving 50–500 workloads at pace with minimal disruption, using wave planning, runbook automation, and 24/7 cutover support." },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <div className="relative h-[480px] overflow-hidden pt-16 lg:pt-20">
        <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80" alt="Enterprise" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1b4b]/95 via-[#0d1b4b]/75 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex items-end pb-14">
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-light-blue border border-bright-blue/30 bg-bright-blue/10 rounded-full px-3 py-1 mb-4">By Industry</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4" style={{ fontFamily: "'Georgia', serif" }}>Enterprise cloud —<br /><span className="text-light-blue">governed, optimised, scalable</span></h1>
            <p className="text-white/70 text-lg max-w-xl">Large organisations need cloud at scale with governance that doesn't slow teams down. CloudFirst delivers enterprise cloud programmes — from strategy through to managed operations.</p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-[#0d1b4b] py-8">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[{ v: "500+", l: "Workloads migrated" }, { v: "40%", l: "Cost optimised" }, { v: "Multi-cloud", l: "AWS, Azure, GCP" }, { v: "Enterprise SLA", l: "99.99% availability" }].map(s => (
            <div key={s.l}><div className="text-xl font-bold text-light-blue mb-0.5" style={{ fontFamily: "'Georgia', serif" }}>{s.v}</div><div className="text-xs text-white/50">{s.l}</div></div>
          ))}
        </div>
      </div>

      {/* Challenges */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Georgia', serif" }}>Enterprise cloud challenges — solved</h2>
        <p className="text-gray-400 text-sm mb-10">The challenges that emerge at enterprise scale, and our approach to solving them.</p>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-8" style={{ fontFamily: "'Georgia', serif" }}>Enterprise programmes we deliver</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: "🏗️", title: "Cloud landing zones", desc: "Enterprise-grade landing zones with IAM, networking, security guardrails, and billing hierarchy — deployed in days." },
              { icon: "🔄", title: "Large-scale migrations", desc: "Wave-based migration programmes that move your entire application estate to cloud without disrupting business operations." },
              { icon: "📐", title: "Cloud CoE enablement", desc: "Stand up your Cloud Centre of Excellence with governance models, tooling, training, and operating procedures." },
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
        <div className="bg-[#0d1b4b] rounded-2xl px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(ellipse at 90% 50%, hsl(var(--bright-blue)) 0%, transparent 60%)" }} />
          <div className="relative z-10 max-w-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3" style={{ fontFamily: "'Georgia', serif" }}>Ready to accelerate your enterprise cloud programme?</h2>
            <p className="text-white/60 text-sm leading-relaxed">Talk to our enterprise team about your cloud strategy, migration backlog, or multi-cloud governance requirements.</p>
          </div>
          <div className="relative z-10 flex flex-col gap-3 flex-shrink-0">
            <button onClick={() => navigate("/contact")} className="px-7 py-3 bg-bright-blue hover:bg-bright-blue/90 text-white text-sm font-bold rounded-lg transition-colors whitespace-nowrap">Talk to our enterprise team →</button>
            <button onClick={() => navigate(-1)} className="text-xs text-white/40 hover:text-white/70 transition-colors text-center">← Back</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseIndustry;
