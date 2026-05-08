import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { AlertTriangle, Bug, FileSearch, KeyRound, Network, ShieldCheck, Siren } from "lucide-react";

const frameworks = [
  { name: "ISO 27001", desc: "Information security management system" },
  { name: "SOC 2 Type II", desc: "Trust service criteria for cloud" },
  { name: "GDPR", desc: "EU data protection regulation" },
  { name: "PCI DSS", desc: "Payment card industry standards" },
  { name: "HIPAA", desc: "Healthcare data privacy" },
  { name: "NIST CSF", desc: "Cybersecurity framework" },
  { name: "CIS Benchmarks", desc: "Cloud configuration standards" },
  { name: "ISO 22301", desc: "Business continuity management" },
];

const controls = [
  { category: "Identity & Access", items: ["Least-privilege IAM policies", "MFA enforcement across all accounts", "Privileged access management (PAM)", "Service account hygiene and rotation"] },
  { category: "Data Protection", items: ["Encryption at rest (AES-256)", "TLS 1.3 in transit enforcement", "Key management and rotation", "Data classification and labelling"] },
  { category: "Network Security", items: ["VPC segmentation and micro-segmentation", "Web application firewall (WAF) rules", "DDoS protection layer", "Private endpoint enforcement"] },
  { category: "Threat Detection", items: ["SIEM integration and correlation rules", "Anomaly detection and alerting", "Vulnerability scanning schedule", "Penetration test programme"] },
];

const securityChallenges = [
  {
    title: "Misconfigurations & Drift",
    tag: "CSPM",
    icon: FileSearch,
    color: "text-red-600",
    bg: "bg-red-50",
    problem: "Public buckets, open security groups, and ad hoc changes create silent exposure over time.",
    solution: "We baseline against CIS benchmarks, continuously scan for drift, and implement auto-remediation for low-risk findings.",
    tools: ["CIS Benchmarks", "CSPM scanning", "Policy-as-code guardrails", "IaC drift detection"],
  },
  {
    title: "Identity Sprawl & Over-Privilege",
    tag: "IAM",
    icon: KeyRound,
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    problem: "Broad roles, long-lived keys, and unmanaged service accounts increase blast radius.",
    solution: "We enforce least privilege, central identity, short-lived credentials, and privileged access workflows.",
    tools: ["SSO & MFA", "PAM", "Key rotation", "Workload identity / federation"],
  },
  {
    title: "Network Exposure",
    tag: "Zero Trust",
    icon: Network,
    color: "text-sky-600",
    bg: "bg-sky-50",
    problem: "Flat networks and internet-exposed services make lateral movement easy after initial access.",
    solution: "We segment networks, implement private access patterns, and harden ingress/egress with layered controls.",
    tools: ["Micro-segmentation", "Private endpoints", "WAF", "DDoS protection"],
  },
  {
    title: "Vulnerabilities & Supply Chain Risk",
    tag: "CNAPP",
    icon: Bug,
    color: "text-amber-600",
    bg: "bg-amber-50",
    problem: "Unpatched VMs, container images, and dependencies introduce exploit paths into production.",
    solution: "We build continuous scanning into CI/CD, prioritize fixes by risk, and validate with controlled testing.",
    tools: ["SCA & dependency scanning", "Container scanning", "Vulnerability management", "Patch automation"],
  },
  {
    title: "Detection Gaps & Slow Response",
    tag: "SIEM/SOAR",
    icon: AlertTriangle,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    problem: "Noisy alerts without context cause fatigue; real incidents get missed.",
    solution: "We centralize logs, tune detections, correlate signals, and run incident response playbooks.",
    tools: ["SIEM integration", "Detection engineering", "Alert tuning", "IR runbooks"],
  },
  {
    title: "Ransomware Recovery",
    tag: "Recovery",
    icon: Siren,
    color: "text-rose-600",
    bg: "bg-rose-50",
    problem: "Encryption events can spread fast; without immutable backups and tested restores, recovery becomes guesswork.",
    solution: "We implement immutable backup patterns, isolate recovery environments, and run restore drills to validate RTO/RPO.",
    tools: ["Immutable backups", "Backup encryption", "Snapshot locking", "Restore validation drills"],
  },
];

const solutionsChallenges = [
  ...securityChallenges.filter((c) => c.title === "Ransomware Recovery"),
  ...securityChallenges.filter((c) => c.title !== "Ransomware Recovery"),
];

const CloudSecurityCompliance: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f7f8fa]">
      <Navbar />

      {/* Hero — dark red/slate */}
      <div className="w-full bg-[#1a0a0a] relative overflow-hidden pt-16 lg:pt-20">
        <div className="absolute inset-0 opacity-40" style={{ background: "radial-gradient(ellipse at 70% 30%, #991b1b 0%, transparent 55%), radial-gradient(ellipse at 20% 80%, #1e1b4b 0%, transparent 50%)" }} />
        <div className="max-w-6xl mx-auto px-6 pt-24 pb-20 relative z-10 flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-red-300 border border-red-400/30 bg-red-400/10 rounded-full px-3 py-1 mb-5">Solutions</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5" style={{ fontFamily: "'Georgia', serif" }}>
              Security posture &<br />
              <span className="text-red-400">compliance — by design</span>
            </h1>
            <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-xl">
              Compliance is not a checkbox exercise — it's an architecture decision. CloudFirst embeds security controls and compliance evidence into your cloud platform, so audits become routine rather than emergencies.
            </p>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-3">
            {[
              { v: "98%", l: "Avg security score improvement" },
              { v: "< 48h", l: "First audit report turnaround" },
              { v: "8+", l: "Frameworks supported" },
              { v: "Zero", l: "Audit failures for our customers" },
            ].map((s) => (
              <div key={s.l} className="bg-white/5 border border-white/10 rounded-xl p-5">
                <div className="text-2xl font-bold text-white mb-1" style={{ fontFamily: "'Georgia', serif" }}>{s.v}</div>
                <div className="text-xs text-white/50">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Compliance frameworks */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Georgia', serif" }}>Frameworks we align to</h2>
        <p className="text-gray-400 text-sm mb-8">We map your cloud controls to the frameworks your customers, regulators, and auditors expect.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {frameworks.map((f) => (
            <div key={f.name} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 text-center hover:border-red-200 hover:shadow-md transition-all">
              <div className="text-base font-bold text-gray-900 mb-1">{f.name}</div>
              <div className="text-xs text-gray-500">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Security controls — 2x2 grid */}
      <div className="bg-white border-y border-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Georgia', serif" }}>Security control domains</h2>
          <p className="text-gray-400 text-sm mb-10">Controls implemented, documented, and mapped to your chosen compliance framework.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {controls.map((c) => (
              <div key={c.category} className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  {c.category}
                </h3>
                <ul className="space-y-2">
                  {c.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-gray-600">
                      <svg className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between mb-10 gap-6 flex-wrap">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-red-600">Cloud security</span>
            <h2 className="mt-2 text-2xl font-bold text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>
              Common problems
            </h2>
          </div>
          <p className="text-gray-400 text-sm max-w-xs">
            The most common risks we see across AWS, Azure, and Google Cloud.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {securityChallenges.map(({ title, tag, icon: Icon, color, bg, problem }) => (
            <div
              key={title}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:border-red-200 transition-all duration-200"
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className={`h-10 w-10 rounded-xl ${bg} border border-black/5 flex items-center justify-center flex-shrink-0`}>
                  <Icon className={`w-5 h-5 ${color}`} />
                </div>
                <span className="text-[11px] font-semibold text-red-700 bg-red-50 border border-red-100 rounded-full px-2.5 py-1">
                  {tag}
                </span>
              </div>

              <h3 className="text-base font-bold text-gray-900 mb-3">{title}</h3>

              <div className="flex items-start gap-2">
                <span className="mt-0.5 w-4 h-4 flex-shrink-0 rounded-full bg-red-50 flex items-center justify-center">
                  <span className="block w-1.5 h-1.5 rounded-full bg-red-400" />
                </span>
                <p className="text-xs text-gray-400 leading-relaxed">{problem}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="flex items-end justify-between mb-10 gap-6 flex-wrap">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-red-600">Cloud security</span>
              <h2 className="mt-2 text-2xl font-bold text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>
                Solutions & tools
              </h2>
            </div>
            <p className="text-gray-400 text-sm max-w-xs">
              The controls, processes, and tooling we use to reduce risk and recover fast.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {solutionsChallenges.map(({ title, tag, icon: Icon, color, bg, solution, tools }) => (
              <div
                key={title}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:border-red-200 transition-all duration-200"
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className={`h-10 w-10 rounded-xl ${bg} border border-black/5 flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-5 h-5 ${color}`} />
                  </div>
                  <span className="text-[11px] font-semibold text-red-700 bg-red-50 border border-red-100 rounded-full px-2.5 py-1">
                    {tag}
                  </span>
                </div>

                <h3 className="text-base font-bold text-gray-900 mb-3">{title}</h3>

                <div className="flex items-start gap-2 mb-4">
                  <span className="mt-0.5 w-4 h-4 flex-shrink-0 rounded-full bg-emerald-50 flex items-center justify-center">
                    <span className="block w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  </span>
                  <p className="text-xs text-gray-600 leading-relaxed">{solution}</p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                  {tools.map((t) => (
                    <span key={t} className="text-[11px] font-semibold text-gray-700 bg-gray-50 border border-gray-100 rounded-full px-2.5 py-1">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How it works */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-10" style={{ fontFamily: "'Georgia', serif" }}>Our compliance engagement</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { step: "01", title: "Gap assessment", desc: "We baseline your current controls against your target framework and produce a gap register with risk ratings." },
            { step: "02", title: "Control implementation", desc: "We implement missing technical controls in your cloud environment — with full documentation and evidence collection." },
            { step: "03", title: "Policy & process", desc: "We produce the policy documents, runbooks, and evidence artefacts your auditor will request." },
            { step: "04", title: "Audit support", desc: "We participate in auditor interviews, respond to information requests, and resolve findings with your audit team." },
          ].map((p) => (
            <div key={p.step}>
              <div className="text-5xl font-bold text-red-50 mb-3" style={{ fontFamily: "'Georgia', serif" }}>{p.step}</div>
              <h3 className="text-sm font-bold text-gray-900 mb-2">{p.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="bg-[#1a0a0a] rounded-2xl px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-40" style={{ background: "radial-gradient(ellipse at 90% 50%, #991b1b 0%, transparent 60%)" }} />
          <div className="relative z-10 max-w-lg">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-red-400 mb-3">Free gap assessment</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3" style={{ fontFamily: "'Georgia', serif" }}>Know your compliance gaps in 48 hours</h2>
            <p className="text-white/60 text-sm leading-relaxed">We'll assess your cloud environment against your target framework and deliver a prioritised control remediation plan.</p>
          </div>
          <div className="relative z-10 flex flex-col gap-3 flex-shrink-0">
            <button onClick={() => navigate("/contact")} className="px-7 py-3 bg-red-500 hover:bg-red-400 text-white text-sm font-bold rounded-lg transition-colors whitespace-nowrap">Request a gap assessment →</button>
            <button onClick={() => navigate(-1)} className="text-xs text-white/40 hover:text-white/70 transition-colors text-center">← Back</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudSecurityCompliance;
