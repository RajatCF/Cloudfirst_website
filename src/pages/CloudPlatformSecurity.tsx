import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";

const services = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: "Identity & Access Management",
    tag: "IAM",
    problem: "Overprivileged accounts and weak identity controls are the #1 entry point for cloud breaches.",
    solution: "We design and enforce least-privilege IAM policies, MFA, role-based access controls, and federated identity across AWS, Azure, and GCP — so only the right people reach the right resources.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Zero Trust Architecture",
    tag: "Zero Trust",
    problem: "Perimeter-based security fails in the cloud. Attackers who get inside move freely.",
    solution: "We architect Zero Trust networks with micro-segmentation, continuous verification, and device posture checks — ensuring no implicit trust is granted to any user, device, or workload.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Threat Detection & SIEM",
    tag: "Detection",
    problem: "Most breaches go undetected for months. Without visibility, you can't respond in time.",
    solution: "We deploy and tune SIEM pipelines, cloud-native threat detection (GuardDuty, Defender, Chronicle), and 24/7 alerting with actionable runbooks — cutting mean-time-to-detect from months to minutes.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: "Compliance & Auditing",
    tag: "ISO · SOC2 · GDPR",
    problem: "Compliance gaps expose you to fines, lost contracts, and failed audits at the worst moments.",
    solution: "We map your cloud environment to ISO 27001, SOC 2, GDPR, and PCI-DSS controls, run gap assessments, and produce audit-ready evidence packs — so you pass first time, every time.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    title: "Cloud Posture Management",
    tag: "CSPM",
    problem: "Misconfigured storage buckets, open ports, and public snapshots silently expose your data.",
    solution: "Our CSPM practice continuously scans your cloud estate for misconfigurations, benchmarks against CIS controls, and auto-remediates low-risk findings before attackers find them first.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "Data Encryption & DLP",
    tag: "Data Protection",
    problem: "Unencrypted data at rest and in transit is an open invitation — and a compliance violation.",
    solution: "We implement end-to-end encryption strategies, key management (KMS/HSM), and Data Loss Prevention policies that classify, monitor, and block sensitive data from leaving your environment.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    title: "Incident Response",
    tag: "IR & Recovery",
    problem: "When a breach happens, every minute of confusion costs money, data, and reputation.",
    solution: "We build and test cloud-specific IR playbooks, run tabletop exercises, and provide on-call retainer support — so your team knows exactly what to do when (not if) an incident occurs.",
  },
];

const stats = [
  { value: "99.9%", label: "Threat detection accuracy" },
  { value: "<15 min", label: "Mean time to alert" },
  { value: "ISO 27001", label: "Certified practice" },
  { value: "3 clouds", label: "AWS · Azure · GCP" },
];

const CloudPlatformSecurity: React.FC = () => {
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
              "radial-gradient(ellipse at 80% 40%, #1565c0 0%, transparent 55%), radial-gradient(ellipse at 10% 80%, #0f4c2a 0%, transparent 50%)",
          }}
        />
        <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
          <div className="flex items-center gap-2 mb-5">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-300 border border-blue-400/30 bg-blue-400/10 rounded-full px-3 py-1">
              Cloud Platforms
            </span>
            <span className="text-white/30 text-xs">·</span>
            <span className="text-xs text-white/40 font-medium">Security</span>
          </div>
          <h1
            className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5 max-w-3xl"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Cloud Security that{" "}
            <span className="text-emerald-400">protects</span> without slowing you down
          </h1>
          <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl mb-10">
            Most cloud environments are secured after the fact. We build security in from day one — continuous hardening, identity controls, threat detection, and incident readiness across AWS, Azure, and GCP.
          </p>

          {/* Stats row */}
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
            The problem with cloud security today
          </h2>
          <p className="text-gray-500 text-[15px] leading-relaxed mb-3">
            Cloud adoption moves fast — security rarely keeps up. Misconfigurations, over-permissioned identities, and gaps in monitoring leave organizations exposed without realising it. 94% of organisations have experienced a cloud security incident in the past year.
          </p>
          <p className="text-gray-500 text-[15px] leading-relaxed">
            CloudFirst embeds security at every layer of your cloud estate. We don't just audit and report — we implement, automate, and operate the controls that keep you protected continuously.
          </p>
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
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 bg-blue-50 text-blue-700 rounded-xl flex items-center justify-center flex-shrink-0">
                  {svc.icon}
                </div>
                <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 rounded px-2.5 py-1">
                  {svc.tag}
                </span>
              </div>

              <h3 className="text-base font-bold text-gray-900 mb-3">{svc.title}</h3>

              {/* Problem */}
              <div className="flex items-start gap-2 mb-3">
                <span className="mt-0.5 w-4 h-4 flex-shrink-0 rounded-full bg-red-50 flex items-center justify-center">
                  <span className="block w-1.5 h-1.5 rounded-full bg-red-400" />
                </span>
                <p className="text-xs text-gray-400 leading-relaxed">{svc.problem}</p>
              </div>

              {/* Solution */}
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

      {/* How we work — process strip */}
      <div className="bg-white border-y border-gray-100 py-14">
        <div className="max-w-6xl mx-auto px-6">
          <h2
            className="text-xl font-bold text-gray-900 mb-10 text-center"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Our security engagement process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Assess", desc: "We audit your current cloud posture — IAM, network, logging, and compliance — and produce a risk-ranked findings report." },
              { step: "02", title: "Design", desc: "We architect the controls and tooling that close your highest-risk gaps first, aligned to your cloud provider and compliance targets." },
              { step: "03", title: "Implement", desc: "Our engineers deploy, configure, and test every control in your environment — with full documentation and handover." },
              { step: "04", title: "Operate", desc: "We provide ongoing monitoring, quarterly reviews, and incident response retainer so your posture improves continuously." },
            ].map((p) => (
              <div key={p.step} className="relative">
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
            style={{
              background: "radial-gradient(ellipse at 90% 50%, #1565c0 0%, transparent 60%)",
            }}
          />
          <div className="relative z-10 max-w-lg">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-3">
              Free assessment
            </span>
            <h2
              className="text-2xl md:text-3xl font-bold text-white mb-3 leading-snug"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Know your cloud security risk in 48 hours
            </h2>
            <p className="text-white/60 text-sm leading-relaxed">
              Our security engineers will review your cloud environment and deliver a prioritised risk report — no commitment, no cost.
            </p>
          </div>
          <div className="relative z-10 flex flex-col gap-3 flex-shrink-0">
            <button
              onClick={() => navigate("/contact")}
              className="inline-flex items-center gap-2 px-7 py-3 bg-emerald-400 hover:bg-emerald-300 text-[#0d1b4b] text-sm font-bold rounded-lg transition-colors duration-200 whitespace-nowrap"
            >
              Book a free security assessment
              <span>→</span>
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

export default CloudPlatformSecurity;