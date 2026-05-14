import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";

const savingsAreas = [
  { area: "Right-sizing", saving: "Up to 40%", icon: "📐", desc: "Most cloud workloads run on instances 2–3× larger than needed. We analyse utilisation data and right-size every resource with zero performance impact." },
  { area: "Commitment discounts", saving: "Up to 72%", icon: "📅", desc: "Reserved Instances, Savings Plans, and Committed Use Discounts offer massive savings — but only when purchased against the right baseline. We model and manage commitments for you." },
  { area: "Idle & orphaned resources", saving: "Up to 25%", icon: "🗑️", desc: "Unattached volumes, unused IPs, idle load balancers, and forgotten environments silently drain budgets. We find and eliminate them." },
  { area: "Storage tiering", saving: "Up to 60%", icon: "🪣", desc: "Infrequently accessed data stored in hot tiers costs far more than it needs to. We implement lifecycle policies that move data to the right tier automatically." },
  { area: "Data transfer optimisation", saving: "Up to 30%", icon: "🔄", desc: "Cross-region and internet egress charges are often the biggest surprise on cloud bills. We architect data flows to minimise transfer costs without impacting performance." },
  { area: "Architecture refactoring", saving: "Up to 50%", icon: "🏗️", desc: "Some workloads are fundamentally overprovisioned by design. We identify candidates for serverless, containerisation, or auto-scaling patterns that deliver sustained savings." },
];

const CostOptimisation: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-bright-blue/5">
      <Navbar />

      {/* Hero — emerald green savings focus */}
      <div className="w-full bg-gradient-to-br from-bright-blue/20 via-white to-white relative overflow-hidden pt-16 lg:pt-20 border-b border-bright-blue/10">
        <div className="max-w-6xl mx-auto px-6 pt-24 pb-20 relative z-10 flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-bright-blue border border-bright-blue/25 bg-bright-blue/10 rounded-full px-3 py-1 mb-5">Solutions</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5" style={{ fontFamily: "'Georgia', serif" }}>
              Spend less.<br />
              <span className="text-bright-blue">Get more.</span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-xl">
              The average organisation wastes 32% of its cloud budget. CloudFirst identifies where your money is going, implements FinOps practices that stick, and delivers measurable savings within 30 days.
            </p>
            <button onClick={() => navigate("/contact")} className="px-7 py-3 bg-bright-blue hover:bg-bright-blue/90 text-white text-sm font-bold rounded-lg transition-colors">Get a free cost audit →</button>
          </div>
          <div className="flex-1 flex flex-col gap-3">
            <div className="bg-white border border-bright-blue/15 rounded-xl p-5 shadow-sm">
              <div className="text-xs text-gray-500 mb-1">Average savings achieved</div>
              <div className="text-4xl font-bold text-bright-blue mb-1" style={{ fontFamily: "'Georgia', serif" }}>32–48%</div>
              <div className="text-xs text-gray-500">Reduction in monthly cloud spend within 90 days</div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { v: "$2.4M+", l: "Saved for customers in 2024" },
                { v: "< 30 days", l: "First savings realised" },
                { v: "3 clouds", l: "AWS · Azure · GCP" },
                { v: "Zero", l: "Performance regressions" },
              ].map((s) => (
                <div key={s.l} className="bg-white border border-bright-blue/10 rounded-xl px-4 py-3 shadow-sm">
                  <div className="text-lg font-bold text-gray-900 mb-0.5" style={{ fontFamily: "'Georgia', serif" }}>{s.v}</div>
                  <div className="text-[11px] text-gray-500">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Savings areas */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Georgia', serif" }}>Where we find savings</h2>
        <p className="text-gray-400 text-sm mb-10">Six proven optimisation areas — each with documented savings ranges across our customer base.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {savingsAreas.map((s) => (
            <div key={s.area} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:border-bright-blue/25 hover:shadow-md transition-all">
              <div className="flex items-start justify-between mb-4">
                <span className="text-2xl">{s.icon}</span>
                <span className="text-sm font-bold text-bright-blue bg-bright-blue/10 rounded-full px-3 py-1">{s.saving}</span>
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{s.area}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Process */}
      <div className="bg-white border-y border-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-10 text-center" style={{ fontFamily: "'Georgia', serif" }}>How we optimise your cloud costs</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Cost audit", desc: "We analyse 90 days of billing data, tag coverage, resource utilisation, and commitment usage across all accounts." },
              { step: "02", title: "Opportunity report", desc: "Every savings opportunity documented with estimated impact, implementation effort, and risk rating." },
              { step: "03", title: "Implement", desc: "Our engineers execute quick wins immediately and plan architectural changes with your team." },
              { step: "04", title: "Govern", desc: "FinOps dashboards, budget alerts, and tagging policies to prevent cost drift and maintain savings." },
            ].map((p) => (
              <div key={p.step}>
                <div className="text-5xl font-bold text-bright-blue/10 mb-3" style={{ fontFamily: "'Georgia', serif" }}>{p.step}</div>
                <h3 className="text-sm font-bold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-bright-blue rounded-2xl px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(ellipse at 90% 50%, hsl(var(--light-blue)) 0%, transparent 60%)" }} />
          <div className="relative z-10 max-w-lg">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-white/80 mb-3">Free audit</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3" style={{ fontFamily: "'Georgia', serif" }}>Find out what you're wasting this month</h2>
            <p className="text-white/60 text-sm leading-relaxed">We'll run a free cost audit against your cloud accounts and deliver a prioritised savings plan within 48 hours.</p>
          </div>
          <div className="relative z-10 flex flex-col gap-3 flex-shrink-0">
            <button onClick={() => navigate("/contact")} className="px-7 py-3 bg-white hover:bg-white/95 text-bright-blue text-sm font-bold rounded-lg transition-colors whitespace-nowrap">Get a free cost audit →</button>
            <button onClick={() => navigate(-1)} className="text-xs text-white/70 hover:text-white transition-colors text-center">← Back</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostOptimisation;
