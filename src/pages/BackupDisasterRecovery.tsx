import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";

const services = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7M4 7c0-2 1-3 3-3h10c2 0 3 1 3 3M4 7h16M9 11h6" />
      </svg>
    ),
    title: "Automated Cloud Backups",
    tag: "Backup",
    problem: "Manual backup processes are inconsistent, untested, and fail exactly when you need them most.",
    solution: "We design and automate backup schedules across VMs, databases, and file systems — with encryption, versioning, and cross-region replication built in from day one.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Disaster Recovery Planning",
    tag: "DR Strategy",
    problem: "Without a tested DR plan, an outage becomes a crisis with no clear owner, no timeline, and no playbook.",
    solution: "We architect RTO and RPO-aligned DR strategies — warm standby, pilot light, or multi-site active-active — and document step-by-step runbooks your team can execute under pressure.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "DR Testing & Validation",
    tag: "Testing",
    problem: "A backup that has never been restored is just an assumption. Most businesses discover failures during the actual disaster.",
    solution: "We run scheduled DR drills — non-disruptive failover tests, restore validations, and chaos engineering — and produce test reports that prove your recovery works before you need it.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
    title: "Multi-Region & Multi-Cloud Replication",
    tag: "Replication",
    problem: "Single-region deployments are a single point of failure. One cloud provider outage takes your business offline.",
    solution: "We implement geo-redundant replication across AWS, Azure, and GCP regions — ensuring your critical workloads survive provider-level outages, zone failures, and network partitions.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "Rapid Failover & Failback",
    tag: "Failover",
    problem: "Slow failover means extended downtime. Manual failback leaves teams scrambling for hours after an incident.",
    solution: "We engineer automated failover pipelines with DNS switching, load balancer re-routing, and database promotion — bringing your environment back online in minutes, not hours.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Compliance & Audit Readiness",
    tag: "ISO · GDPR · BCDR",
    problem: "Regulators and enterprise customers expect documented, tested continuity plans — not spreadsheets and good intentions.",
    solution: "We align your backup and DR controls to ISO 22301, ISO 27001, GDPR, and industry-specific BCDR requirements — producing audit-ready evidence and policy documentation.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
    title: "Continuous Monitoring & Alerting",
    tag: "Monitoring",
    problem: "Backup failures are silent until it's too late. Teams discover broken schedules only when a restore is urgently needed.",
    solution: "We instrument your backup estate with health dashboards, failure alerts, and SLA reporting — giving you a real-time view of backup coverage, RPO compliance, and restore readiness.",
  },
];

const stats = [
  { value: "< 15 min", label: "Target RTO for critical systems" },
  { value: "< 1 hr", label: "Recovery Point Objective" },
  { value: "99.99%", label: "Backup success rate" },
  { value: "3 clouds", label: "AWS · Azure · GCP" },
];

const drTiers = [
  {
    tier: "Backup & Restore",
    rto: "Hours",
    rpo: "Hours",
    cost: "Lowest",
    best: "Non-critical workloads, archival data",
    color: "bg-gray-50 border-gray-200",
    badge: "text-gray-600 bg-gray-100",
  },
  {
    tier: "Pilot Light",
    rto: "30–60 min",
    rpo: "Minutes",
    cost: "Low",
    best: "Internal tools, staging environments",
    color: "bg-blue-50 border-blue-200",
    badge: "text-blue-700 bg-blue-100",
  },
  {
    tier: "Warm Standby",
    rto: "5–30 min",
    rpo: "Seconds",
    cost: "Medium",
    best: "Business-critical applications",
    color: "bg-amber-50 border-amber-200",
    badge: "text-amber-700 bg-amber-100",
  },
  {
    tier: "Multi-Site Active-Active",
    rto: "< 1 min",
    rpo: "Near zero",
    cost: "Highest",
    best: "Revenue-critical, always-on platforms",
    color: "bg-emerald-50 border-emerald-200",
    badge: "text-emerald-700 bg-emerald-100",
  },
];

const BackupDisasterRecovery: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f7f8fa]">
      <Navbar />

      {/* Hero */}
      <div className="w-full bg-[#0d1b4b] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              "radial-gradient(ellipse at 80% 40%, #1565c0 0%, transparent 55%), radial-gradient(ellipse at 10% 80%, #155e4a 0%, transparent 50%)",
          }}
        />
        <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
          <div className="flex items-center gap-2 mb-5">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-300 border border-blue-400/30 bg-blue-400/10 rounded-full px-3 py-1">
              Cloud Platforms
            </span>
            <span className="text-white/30 text-xs">·</span>
            <span className="text-xs text-white/40 font-medium">Backup & Disaster Recovery</span>
          </div>
          <h1
            className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5 max-w-3xl"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Recover from anything —{" "}
            <span className="text-emerald-400">in minutes, not days</span>
          </h1>
          <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl mb-10">
            Downtime costs an average of $5,600 per minute. CloudFirst designs, implements, and continuously validates backup and disaster recovery strategies that protect your business from ransomware, outages, and human error.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-white/5 border border-white/10 rounded-xl px-4 py-4">
                <div
                  className="text-2xl font-bold text-white mb-1"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  {s.value}
                </div>
                <div className="text-xs text-white/50 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="max-w-3xl">
          <h2
            className="text-2xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Why most DR plans fail when it matters
          </h2>
          <p className="text-gray-500 text-[15px] leading-relaxed mb-3">
            Nearly 60% of businesses that suffer a major data loss event shut down within six months. The cause is rarely the disaster itself — it's the absence of a tested, documented, and automated recovery process.
          </p>
          <p className="text-gray-500 text-[15px] leading-relaxed">
            CloudFirst builds backup and DR into your cloud architecture from the start. We define your RTO and RPO targets, design the right recovery tier for each workload, automate the failover, and test it on a schedule — so you're never discovering gaps during an incident.
          </p>
        </div>
      </div>

      {/* DR Tier Comparison */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <h2
          className="text-xl font-bold text-gray-900 mb-2"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          Choosing the right recovery tier
        </h2>
        <p className="text-gray-400 text-sm mb-8">
          Not every workload needs the same protection level. We match each system to the right DR pattern.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {drTiers.map((t) => (
            <div
              key={t.tier}
              className={`rounded-2xl border p-5 ${t.color}`}
            >
              <span className={`inline-block text-[11px] font-semibold rounded px-2.5 py-1 mb-3 ${t.badge}`}>
                {t.tier}
              </span>
              <div className="space-y-2 mb-4">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-gray-400 font-medium">RTO</span>
                  <p className="text-sm font-bold text-gray-800">{t.rto}</p>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-gray-400 font-medium">RPO</span>
                  <p className="text-sm font-bold text-gray-800">{t.rpo}</p>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-gray-400 font-medium">Relative cost</span>
                  <p className="text-sm font-bold text-gray-800">{t.cost}</p>
                </div>
              </div>
              <div className="border-t border-black/5 pt-3">
                <span className="text-[10px] uppercase tracking-wider text-gray-400 font-medium">Best for</span>
                <p className="text-xs text-gray-600 leading-relaxed mt-0.5">{t.best}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Services grid */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="flex items-center justify-between mb-8">
          <h2
            className="text-xl font-bold text-gray-900"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            How we help
          </h2>
          <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">7 practice areas</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:border-blue-100 transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 bg-blue-50 text-blue-700 rounded-xl flex items-center justify-center flex-shrink-0">
                  {svc.icon}
                </div>
                <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 rounded px-2.5 py-1">
                  {svc.tag}
                </span>
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-3">{svc.title}</h3>
              <div className="flex items-start gap-2 mb-3">
                <span className="mt-0.5 w-4 h-4 flex-shrink-0 rounded-full bg-red-50 flex items-center justify-center">
                  <span className="block w-1.5 h-1.5 rounded-full bg-red-400" />
                </span>
                <p className="text-xs text-gray-400 leading-relaxed">{svc.problem}</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-0.5 w-4 h-4 flex-shrink-0 rounded-full bg-emerald-50 flex items-center justify-center">
                  <span className="block w-1.5 h-1.5 rounded-full bg-emerald-500" />
                </span>
                <p className="text-xs text-gray-600 leading-relaxed">{svc.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Process strip */}
      <div className="bg-white border-y border-gray-100 py-14">
        <div className="max-w-6xl mx-auto px-6">
          <h2
            className="text-xl font-bold text-gray-900 mb-10 text-center"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Our engagement process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discover", desc: "We inventory your workloads, classify criticality, and define RTO/RPO targets for each system in collaboration with your team." },
              { step: "02", title: "Design", desc: "We select the right DR tier per workload, design the backup architecture, and produce a detailed implementation blueprint." },
              { step: "03", title: "Implement", desc: "Our engineers deploy backup policies, replication, failover automation, and monitoring — fully documented and handed over." },
              { step: "04", title: "Validate", desc: "We run scheduled DR drills, produce test evidence, and refine runbooks continuously as your environment evolves." },
            ].map((p) => (
              <div key={p.step}>
                <div className="text-4xl font-bold text-gray-100 mb-3" style={{ fontFamily: "'Georgia', serif" }}>
                  {p.step}
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-[#0d1b4b] rounded-2xl px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-20"
            style={{ background: "radial-gradient(ellipse at 90% 50%, #1565c0 0%, transparent 60%)" }}
          />
          <div className="relative z-10 max-w-lg">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-3">
              Free assessment
            </span>
            <h2
              className="text-2xl md:text-3xl font-bold text-white mb-3 leading-snug"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Know your recovery readiness in 48 hours
            </h2>
            <p className="text-white/60 text-sm leading-relaxed">
              Our engineers will assess your current backup coverage, identify single points of failure, and deliver a prioritised remediation plan — no commitment required.
            </p>
          </div>
          <div className="relative z-10 flex flex-col gap-3 flex-shrink-0">
            <button
              onClick={() => navigate("/contact")}
              className="inline-flex items-center gap-2 px-7 py-3 bg-emerald-400 hover:bg-emerald-300 text-[#0d1b4b] text-sm font-bold rounded-lg transition-colors duration-200 whitespace-nowrap"
            >
              Book a free DR assessment →
            </button>
            <button
              onClick={() => navigate(-1)}
              className="text-xs text-white/40 hover:text-white/70 transition-colors duration-150 text-center"
            >
              ← Back
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default BackupDisasterRecovery;