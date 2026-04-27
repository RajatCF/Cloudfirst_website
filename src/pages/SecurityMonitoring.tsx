import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";

const detectionCapabilities = [
  { icon: "🔍", title: "Log aggregation & SIEM", desc: "Centralise logs from all cloud services, applications, and network devices into a unified SIEM with correlation rules tuned to your environment." },
  { icon: "⚡", title: "Real-time threat detection", desc: "ML-powered anomaly detection identifies deviations from baseline behaviour — unusual API calls, privilege escalation, lateral movement." },
  { icon: "🚨", title: "Alerting & escalation", desc: "Tiered alerting with defined severity levels, on-call routing, and escalation policies — so the right person is reached in seconds, not minutes." },
  { icon: "🛡️", title: "Vulnerability management", desc: "Continuous scanning of workloads, container images, and IaC templates to surface exploitable vulnerabilities before attackers do." },
  { icon: "🔐", title: "Identity threat detection", desc: "Detect compromised credentials, impossible travel, suspicious OAuth grants, and privilege abuse across cloud IAM and SaaS applications." },
  { icon: "📋", title: "Compliance reporting", desc: "Automated evidence collection and continuous compliance dashboards for SOC 2, ISO 27001, PCI DSS, and GDPR." },
];

const metrics = [
  { value: "< 5 min", label: "Mean time to detect (MTTD)" },
  { value: "< 15 min", label: "Mean time to respond (MTTR)" },
  { value: "99.9%", label: "Monitoring uptime" },
  { value: "24/7", label: "SOC coverage" },
];

const SecurityMonitoring: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0a0f1e]">
      <Navbar />

      {/* Hero — dark slate with orange glow */}
      <div className="relative overflow-hidden pt-16 lg:pt-20">
        <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(ellipse at 80% 30%, #ea580c 0%, transparent 50%), radial-gradient(ellipse at 10% 80%, #1e40af 0%, transparent 50%)" }} />
        <div className="max-w-6xl mx-auto px-6 pt-24 pb-20 relative z-10">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-orange-300 border border-orange-400/30 bg-orange-400/10 rounded-full px-3 py-1 mb-5">Services</span>
          <div className="flex flex-col lg:flex-row items-start gap-12">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5" style={{ fontFamily: "'Georgia', serif" }}>
                See every threat.<br />
                <span className="text-orange-400">Respond before damage.</span>
              </h1>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Most breaches aren't detected for days — sometimes months. CloudFirst's 24/7 security monitoring gives you eyes across your entire cloud estate, with real-time detection and rapid response that stops threats at the perimeter, not the post-mortem.
              </p>
              <button onClick={() => navigate("/contact")} className="px-7 py-3 bg-orange-500 hover:bg-orange-400 text-white text-sm font-bold rounded-lg transition-colors">Get a monitoring demo →</button>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-3">
              {metrics.map((m) => (
                <div key={m.label} className="bg-white/5 border border-white/10 rounded-xl px-5 py-5">
                  <div className="text-2xl font-bold text-orange-400 mb-1" style={{ fontFamily: "'Georgia', serif" }}>{m.value}</div>
                  <div className="text-xs text-white/50">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Detection capabilities */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "'Georgia', serif" }}>What we monitor and detect</h2>
        <p className="text-white/40 text-sm mb-10">Full-spectrum visibility across your cloud, identity, and application layers.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {detectionCapabilities.map((cap) => (
            <div key={cap.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-orange-500/30 hover:bg-white/8 transition-all">
              <div className="text-2xl mb-3">{cap.icon}</div>
              <h3 className="text-sm font-bold text-white mb-2">{cap.title}</h3>
              <p className="text-xs text-white/50 leading-relaxed">{cap.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Threat response workflow */}
      <div className="border-t border-white/10 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-xl font-bold text-white mb-10 text-center" style={{ fontFamily: "'Georgia', serif" }}>How we respond to incidents</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { step: "Detect", icon: "🔍", desc: "Signal triggered by SIEM correlation or ML anomaly detection" },
              { step: "Triage", icon: "⚖️", desc: "Analyst confirms threat, assigns severity, and begins investigation" },
              { step: "Contain", icon: "🛑", desc: "Immediate containment — isolate resource, revoke credential, block IP" },
              { step: "Remediate", icon: "🔧", desc: "Root cause identified, fix applied, and evidence preserved" },
              { step: "Report", icon: "📄", desc: "Incident report delivered with timeline, impact, and prevention recommendations" },
            ].map((s, i) => (
              <div key={s.step} className="text-center">
                <div className="w-10 h-10 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-lg mx-auto mb-3">{s.icon}</div>
                <div className="text-xs font-bold text-orange-400 uppercase tracking-wider mb-2">{s.step}</div>
                <p className="text-xs text-white/40 leading-relaxed">{s.desc}</p>
                {i < 4 && <div className="hidden md:block absolute" />}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-lg">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-orange-400 mb-3">Free assessment</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3" style={{ fontFamily: "'Georgia', serif" }}>Get a free threat exposure review</h2>
            <p className="text-white/50 text-sm leading-relaxed">We'll assess your current monitoring coverage, identify detection gaps, and show you what a threat actor could do in your environment today.</p>
          </div>
          <div className="flex flex-col gap-3 flex-shrink-0">
            <button onClick={() => navigate("/contact")} className="px-7 py-3 bg-orange-500 hover:bg-orange-400 text-white text-sm font-bold rounded-lg transition-colors whitespace-nowrap">Book a threat review →</button>
            <button onClick={() => navigate(-1)} className="text-xs text-white/40 hover:text-white/70 transition-colors text-center">← Back</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityMonitoring;
