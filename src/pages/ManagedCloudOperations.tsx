import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";

const operationsAreas = [
  { title: "Proactive monitoring", desc: "24/7 observability across compute, storage, network, and application layers — with alert fatigue reduction and intelligent noise suppression.", icon: "📡" },
  { title: "Patch & update management", desc: "Scheduled OS patching, security updates, and dependency management across all workloads — with rollback capability and zero-downtime windows.", icon: "🔧" },
  { title: "Incident response", desc: "On-call engineers responding to severity-1 incidents within 15 minutes, with structured war-room process, RCA reports, and post-incident reviews.", icon: "🚨" },
  { title: "Capacity management", desc: "Proactive capacity forecasting, auto-scaling tuning, and pre-emptive resource adjustments to prevent performance degradation before users notice.", icon: "📈" },
  { title: "Change management", desc: "Every change follows a documented process — risk assessment, approval workflow, change window, and rollback plan. No surprise outages from uncontrolled changes.", icon: "🔄" },
  { title: "Cost governance", desc: "Monthly cost reviews, rightsizing recommendations, commitment optimisation, and spend forecasting — keeping your cloud bill predictable and optimised.", icon: "💰" },
];

const ManagedCloudOperations: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f7f8fa]">
      <Navbar />

      {/* Hero — cyan/teal dark */}
      <div className="w-full bg-[#042f2e] relative overflow-hidden pt-16 lg:pt-20">
        <div className="absolute inset-0 opacity-40" style={{ background: "radial-gradient(ellipse at 75% 30%, #0891b2 0%, transparent 55%), radial-gradient(ellipse at 15% 80%, #065f46 0%, transparent 50%)" }} />
        <div className="max-w-6xl mx-auto px-6 pt-24 pb-20 relative z-10">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-cyan-300 border border-cyan-400/30 bg-cyan-400/10 rounded-full px-3 py-1 mb-5">Services</span>
          <div className="flex flex-col lg:flex-row items-start gap-12">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5" style={{ fontFamily: "'Georgia', serif" }}>
                Your cloud operations team —<br />
                <span className="text-cyan-400">without the overhead</span>
              </h1>
              <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-xl">
                Running cloud operations in-house requires specialised skills across monitoring, patching, incidents, and cost governance. CloudFirst provides a fully managed operations function that keeps your cloud running at its best — so your engineers focus on product.
              </p>
              <button onClick={() => navigate("/contact")} className="px-7 py-3 bg-cyan-500 hover:bg-cyan-400 text-white text-sm font-bold rounded-lg transition-colors">Explore managed ops →</button>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-3">
              {[
                { v: "< 15 min", l: "P1 incident response" },
                { v: "99.95%", l: "Managed uptime SLA" },
                { v: "24/7/365", l: "Operations coverage" },
                { v: "40%", l: "Avg cost reduction" },
              ].map((s) => (
                <div key={s.l} className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <div className="text-2xl font-bold text-cyan-400 mb-1" style={{ fontFamily: "'Georgia', serif" }}>{s.v}</div>
                  <div className="text-xs text-white/50">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* What's included */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Georgia', serif" }}>What's included in managed operations</h2>
        <p className="text-gray-400 text-sm mb-10">A complete cloud operations function — monitoring, patching, incidents, changes, cost, and capacity.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {operationsAreas.map((area) => (
            <div key={area.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:border-cyan-200 hover:shadow-md transition-all">
              <div className="text-2xl mb-3">{area.icon}</div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{area.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{area.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* How it works + image */}
      <div className="bg-white border-y border-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
              alt="Cloud Operations"
              className="rounded-2xl shadow-xl w-full object-cover aspect-video"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-5" style={{ fontFamily: "'Georgia', serif" }}>How we onboard your environment</h2>
            <div className="space-y-4">
              {[
                { n: "01", t: "Environment discovery", d: "We map your cloud accounts, workloads, dependencies, and existing monitoring in week one." },
                { n: "02", t: "Baseline & runbooks", d: "We establish performance baselines, alert thresholds, and document runbooks for every critical workload." },
                { n: "03", t: "Monitoring rollout", d: "Our observability stack is deployed alongside your existing tooling — zero disruption to operations." },
                { n: "04", t: "Steady-state ops", d: "Full 24/7 managed operations begins with weekly reporting, monthly reviews, and quarterly planning sessions." },
              ].map((item) => (
                <div key={item.n} className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-7 h-7 rounded-full bg-cyan-600 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">{item.n}</div>
                  <div>
                    <div className="text-sm font-bold text-gray-900 mb-0.5">{item.t}</div>
                    <div className="text-xs text-gray-500 leading-relaxed">{item.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-[#042f2e] rounded-2xl px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-40" style={{ background: "radial-gradient(ellipse at 90% 50%, #0891b2 0%, transparent 60%)" }} />
          <div className="relative z-10 max-w-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3" style={{ fontFamily: "'Georgia', serif" }}>Start managed operations in 2 weeks</h2>
            <p className="text-white/60 text-sm leading-relaxed">We onboard fast. Most customers have 24/7 monitoring and incident response in place within 10 business days.</p>
          </div>
          <div className="relative z-10 flex flex-col gap-3 flex-shrink-0">
            <button onClick={() => navigate("/contact")} className="px-7 py-3 bg-cyan-500 hover:bg-cyan-400 text-white text-sm font-bold rounded-lg transition-colors whitespace-nowrap">Talk to our ops team →</button>
            <button onClick={() => navigate(-1)} className="text-xs text-white/40 hover:text-white/70 transition-colors text-center">← Back</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagedCloudOperations;
