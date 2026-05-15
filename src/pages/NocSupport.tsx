import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";

const NocSupport: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0f0f0f]">
      <Navbar />

      {/* Hero — dark charcoal with amber glow */}
      <div className="relative overflow-hidden pt-16 lg:pt-20">
        <div className="absolute inset-0 opacity-25" style={{ background: "radial-gradient(ellipse at 70% 30%, #0284c7 0%, transparent 50%), radial-gradient(ellipse at 20% 80%, #1e3a5f 0%, transparent 50%)" }} />
        <div className="max-w-6xl mx-auto px-6 pt-24 pb-20 relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-sky-300 border border-sky-400/30 bg-sky-400/10 rounded-full px-3 py-1 mb-5">Support Tiers</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5" style={{ fontFamily: "'Georgia', serif" }}>
              Always-on monitoring.<br />
              <span className="text-sky-400">Zero missed incidents.</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-xl">
              Your cloud doesn't sleep — and neither does our NOC. CloudFirst's 24x7 Network Operations Centre watches your entire cloud estate, responds to incidents in minutes, and keeps your SLAs intact around the clock.
            </p>
            <button onClick={() => navigate("/contact")} className="px-7 py-3 bg-sky-500 hover:bg-sky-400 text-black text-sm font-bold rounded-lg transition-colors">Activate NOC support →</button>
          </div>
          {/* Live clock visualization */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 rounded-full border-4 border-sky-400/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl font-bold text-sky-400 mb-1" style={{ fontFamily: "'Georgia', serif" }}>24/7</div>
                  <div className="text-sm text-white/50">Live NOC coverage</div>
                  <div className="flex gap-1 justify-center mt-3">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div key={i} className={`w-1.5 h-4 rounded-full ${i % 3 === 0 ? "bg-sky-400" : "bg-white/20"}`} style={{ animationDelay: `${i * 0.1}s` }} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 rounded-full border border-sky-400/10" style={{ transform: "scale(1.15)" }} />
              <div className="absolute inset-0 rounded-full border border-sky-400/5" style={{ transform: "scale(1.3)" }} />
            </div>
          </div>
        </div>
      </div>

      {/* NOC metrics */}
      <div className="border-t border-white/10 py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { v: "< 5 min", l: "Alert to acknowledgement" },
            { v: "< 15 min", l: "P1 incident response" },
            { v: "99.9%", l: "SLA achievement rate" },
            { v: "8 zones", l: "Global coverage" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <div className="text-2xl font-bold text-sky-400 mb-1" style={{ fontFamily: "'Georgia', serif" }}>{s.v}</div>
              <div className="text-xs text-white/40">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* NOC capabilities */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-xl font-bold text-white mb-8" style={{ fontFamily: "'Georgia', serif" }}>What our NOC covers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            { icon: "📡", title: "Infrastructure monitoring", desc: "CPU, memory, disk, and network metrics across all cloud resources — with dynamic baselines that adapt to your traffic patterns." },
            { icon: "🔗", title: "Application health checks", desc: "Synthetic transaction monitoring, endpoint availability, latency tracking, and error rate monitoring for all customer-facing services." },
            { icon: "🛡️", title: "Security event monitoring", desc: "Real-time analysis of security logs, IAM events, network flows, and threat intelligence feeds — with immediate escalation for critical findings." },
            { icon: "📊", title: "Database & storage monitoring", desc: "Query performance, connection pool saturation, replication lag, backup success, and storage utilisation across all data tiers." },
            { icon: "🔔", title: "Alert management", desc: "Intelligent alert deduplication, noise suppression, and enrichment — so your on-call receives meaningful, actionable notifications, not alert storms." },
            { icon: "📝", title: "Incident documentation", desc: "Every incident logged with timeline, impact assessment, root cause analysis, and prevention recommendations — audit-ready and shareable." },
          ].map((cap) => (
            <div key={cap.title} className="flex gap-4 bg-white/5 border border-white/10 rounded-xl p-5 hover:border-sky-500/30 transition-all">
              <span className="text-2xl flex-shrink-0">{cap.icon}</span>
              <div>
                <h3 className="text-sm font-bold text-white mb-1.5">{cap.title}</h3>
                <p className="text-xs text-white/50 leading-relaxed">{cap.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Incident severity */}
      <div className="border-t border-white/10 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-xl font-bold text-white mb-8" style={{ fontFamily: "'Georgia', serif" }}>Incident severity & response</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { sev: "P1 Critical", color: "border-red-500 bg-red-500/10", badge: "bg-red-500 text-white", resp: "15 min", desc: "Complete service outage or data loss risk" },
              { sev: "P2 High", color: "border-orange-500 bg-orange-500/10", badge: "bg-orange-500 text-white", resp: "30 min", desc: "Significant degradation affecting users" },
              { sev: "P3 Medium", color: "border-yellow-500 bg-yellow-500/10", badge: "bg-yellow-500 text-black", resp: "2 hrs", desc: "Partial degradation with workaround available" },
              { sev: "P4 Low", color: "border-gray-500 bg-gray-500/10", badge: "bg-gray-500 text-white", resp: "8 hrs", desc: "Minor issue with minimal user impact" },
            ].map((s) => (
              <div key={s.sev} className={`rounded-xl border p-5 ${s.color}`}>
                <span className={`inline-block text-[11px] font-bold px-2.5 py-1 rounded mb-3 ${s.badge}`}>{s.sev}</span>
                <div className="text-xl font-bold text-white mb-1" style={{ fontFamily: "'Georgia', serif" }}>{s.resp}</div>
                <div className="text-xs text-white/40">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-6xl mx-auto px-6 py-12 pb-16">
        <div className="bg-sky-500/10 border border-sky-500/20 rounded-2xl px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3" style={{ fontFamily: "'Georgia', serif" }}>Never miss another incident</h2>
            <p className="text-white/50 text-sm leading-relaxed">Talk to our NOC team about activating 24/7 monitoring and incident response for your cloud environment.</p>
          </div>
          <div className="flex flex-col gap-3 flex-shrink-0">
            <button onClick={() => navigate("/contact")} className="px-7 py-3 bg-sky-500 hover:bg-sky-400 text-black text-sm font-bold rounded-lg transition-colors whitespace-nowrap">Activate 24/7 NOC →</button>
            <button onClick={() => navigate(-1)} className="text-xs text-white/40 hover:text-white/70 transition-colors text-center">← Back</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NocSupport;
