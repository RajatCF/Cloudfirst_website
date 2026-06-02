import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FaqSection, { getFaqsByPath } from "@/components/FaqSection";

const capabilities = [
  { icon: "📊", title: "Cost visibility dashboards", desc: "Real-time spend dashboards broken down by team, product, environment, and service — so every stakeholder sees their cloud cost." },
  { icon: "🏷️", title: "Tagging strategy & enforcement", desc: "Mandatory tagging policies, automated tag remediation, and governance rules that ensure 100% of spend is attributable." },
  { icon: "📅", title: "Commitment management", desc: "Reserved Instance and Savings Plan portfolio management — coverage targets, renewal tracking, and utilisation optimisation." },
  { icon: "💳", title: "Budget alerts & controls", desc: "Team-level budgets with automated alerts at 50%, 80%, and 100% thresholds — with optional auto-remediation for runaway spend." },
  { icon: "📈", title: "Showback & chargeback", desc: "Allocate shared infrastructure costs to business units, products, or cost centres — enabling fair and transparent internal billing." },
  { icon: "🔮", title: "Forecasting & anomaly detection", desc: "ML-powered spend forecasting and anomaly alerts that catch unexpected charges before they appear on the invoice." },
];

const FinopsBillingManagement: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero — light indigo, split */}
      <div className="bg-gradient-to-br from-bright-blue/10 to-white border-b border-bright-blue/15">
        <div className="max-w-7xl mx-auto px-6 pt-28 pb-16 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-bright-blue bg-bright-blue/10 border border-bright-blue/20 rounded-full px-3 py-1 mb-5">Services</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5" style={{ fontFamily: "'Georgia', serif" }}>
              Cloud billing you can<br />
              <span className="text-bright-blue">understand and control</span>
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-xl">
              Cloud bills are long, complex, and often surprising. CloudFirst implements FinOps practices that give every team full visibility into what they're spending — and the controls to stay within budget without slowing down.
            </p>
            <div className="flex flex-wrap gap-3">
              <button onClick={() => navigate("/contact")} className="px-6 py-3 bg-bright-blue hover:bg-bright-blue/90 text-white text-sm font-semibold rounded-lg transition-colors">Set up FinOps →</button>
              <button onClick={() => navigate(-1)} className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-semibold rounded-lg transition-colors">← Back</button>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            {/* Mock billing dashboard card */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-bold text-gray-900">Monthly cloud spend</span>
                <span className="text-xs text-emerald-600 bg-emerald-50 rounded-full px-2 py-0.5 font-semibold">↓ 34% vs last month</span>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Georgia', serif" }}>$48,230</div>
              <div className="space-y-2">
                {[
                  { label: "Compute", pct: 42, color: "bg-indigo-500" },
                  { label: "Storage", pct: 22, color: "bg-blue-400" },
                  { label: "Database", pct: 19, color: "bg-violet-400" },
                  { label: "Network", pct: 17, color: "bg-sky-400" },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>{item.label}</span>
                      <span>{item.pct}%</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full">
                      <div className={`h-1.5 rounded-full ${item.color}`} style={{ width: `${item.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { v: "100%", l: "Spend attributed" },
                { v: "$0 surprise", l: "Anomalies caught early" },
              ].map((s) => (
                <div key={s.l} className="bg-bright-blue/10 border border-bright-blue/20 rounded-xl px-4 py-3">
                  <div className="text-lg font-bold text-bright-blue mb-0.5" style={{ fontFamily: "'Georgia', serif" }}>{s.v}</div>
                  <div className="text-[11px] text-gray-600">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Capabilities */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Georgia', serif" }}>FinOps capabilities</h2>
        <p className="text-gray-400 text-sm mb-10">Everything your finance and engineering teams need to take control of cloud spend.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {capabilities.map((cap) => (
            <div key={cap.title} className="flex gap-4 p-5 bg-gray-50 rounded-xl hover:bg-bright-blue/5 hover:border-bright-blue/20 border border-gray-100 transition-all">
              <span className="text-2xl flex-shrink-0 mt-0.5">{cap.icon}</span>
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-1.5">{cap.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{cap.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <FaqSection title="Frequently Asked Questions" faqs={getFaqsByPath("/services/finops")} className="bg-white" />

      {/* CTA */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="bg-bright-blue rounded-2xl px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3" style={{ fontFamily: "'Georgia', serif" }}>Get your first FinOps dashboard in 2 weeks</h2>
            <p className="text-white/85 text-sm leading-relaxed">We'll connect to your billing data, build your cost visibility dashboard, and implement tagging governance — with no disruption to your teams.</p>
          </div>
          <div className="flex flex-col gap-3 flex-shrink-0">
            <button onClick={() => navigate("/contact")} className="px-7 py-3 bg-white hover:bg-white/95 text-bright-blue text-sm font-bold rounded-lg transition-colors whitespace-nowrap">Start FinOps →</button>
            <button onClick={() => navigate(-1)} className="text-xs text-white/70 hover:text-white transition-colors text-center">← Back</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinopsBillingManagement;
