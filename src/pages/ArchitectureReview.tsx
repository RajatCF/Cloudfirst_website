import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";

const reviewAreas = [
  { icon: "🏗️", title: "Compute & Resource Design", desc: "VM sizing, instance families, reserved capacity planning, and multi-region placement for resilience and performance." },
  { icon: "🔐", title: "Identity & Access Management", desc: "IAM policies, privilege escalation paths, service account hygiene, and federated identity configurations." },
  { icon: "🌐", title: "Network Topology", desc: "VPC design, peering, transit gateways, firewall rules, private endpoints, and ingress/egress exposure." },
  { icon: "💾", title: "Storage & Data Architecture", desc: "Object storage lifecycle policies, database engine selection, backup coverage, and data tiering strategies." },
  { icon: "📈", title: "Observability & Monitoring", desc: "Logging coverage, alerting thresholds, tracing gaps, dashboard quality, and on-call runbook completeness." },
  { icon: "💰", title: "Cost & Efficiency", desc: "Idle resources, oversized instances, missing savings plans, untagged spend, and cross-region data transfer costs." },
];

const deliverables = [
  { title: "Architecture findings report", desc: "Documented assessment of current state — risks, gaps, and anti-patterns across all review domains." },
  { title: "Prioritised remediation backlog", desc: "Issues ranked by severity, effort, and business impact — ready to import into your sprint or project board." },
  { title: "Reference architecture", desc: "Target-state diagrams showing recommended design patterns for your workloads and constraints." },
  { title: "Executive summary", desc: "A concise brief for leadership covering risks, investment priorities, and expected outcomes." },
];

const ArchitectureReview: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero — split layout */}
      <div className="max-w-7xl mx-auto px-6 pt-28 pb-16 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-100 rounded-full px-3 py-1 mb-5">Services</span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5" style={{ fontFamily: "'Georgia', serif" }}>
            Know exactly what's wrong —<br />
            <span className="text-blue-600">before it becomes a crisis</span>
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-xl">
            CloudFirst engineers review your cloud architecture against battle-tested best practices — finding security gaps, performance risks, and cost inefficiencies before your next incident does.
          </p>
          <div className="flex flex-wrap gap-3">
            <button onClick={() => navigate("/contact")} className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors">Book a review →</button>
            <button onClick={() => navigate(-1)} className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-semibold rounded-lg transition-colors">← Back</button>
          </div>
        </div>
        <div className="flex-1 flex justify-center lg:justify-end">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
            alt="Architecture Review"
            className="rounded-2xl shadow-2xl w-full max-w-lg object-cover aspect-video"
          />
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-gray-50 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "48 hrs", label: "Typical review turnaround" },
            { value: "150+", label: "Reviews delivered" },
            { value: "Free", label: "Initial scoping call" },
            { value: "3 clouds", label: "AWS · Azure · GCP" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-bold text-gray-900 mb-1" style={{ fontFamily: "'Georgia', serif" }}>{s.value}</div>
              <div className="text-xs text-gray-500">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* What we review */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Georgia', serif" }}>What we review</h2>
        <p className="text-gray-400 text-sm mb-10">Six critical domains — every gap documented, every risk quantified.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviewAreas.map((area) => (
            <div key={area.title} className="flex gap-4 p-5 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors group">
              <span className="text-2xl flex-shrink-0 mt-0.5">{area.icon}</span>
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-1.5 group-hover:text-blue-700 transition-colors">{area.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{area.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Deliverables */}
      <div className="bg-gray-50 border-y border-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Georgia', serif" }}>What you get</h2>
          <p className="text-gray-400 text-sm mb-10">Actionable output — not a 100-page slide deck.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {deliverables.map((d, i) => (
              <div key={d.title} className="flex gap-4 bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center flex-shrink-0 text-sm font-bold">{String(i + 1).padStart(2, "0")}</div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900 mb-1">{d.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-10" style={{ fontFamily: "'Georgia', serif" }}>How a review works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { step: "01", title: "Kickoff call", desc: "We align on scope, access requirements, and business context — typically 45 minutes with your tech lead." },
            { step: "02", title: "Access & discovery", desc: "Read-only access to your cloud console. We run automated discovery alongside manual inspection." },
            { step: "03", title: "Analysis", desc: "Our engineers analyse findings against security, reliability, cost, and operational excellence frameworks." },
            { step: "04", title: "Readout", desc: "We present findings, walk through the remediation backlog, and answer questions from your team." },
          ].map((p) => (
            <div key={p.step}>
              <div className="text-5xl font-bold text-blue-50 mb-3" style={{ fontFamily: "'Georgia', serif" }}>{p.step}</div>
              <h3 className="text-sm font-bold text-gray-900 mb-2">{p.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="bg-blue-600 rounded-2xl px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3" style={{ fontFamily: "'Georgia', serif" }}>Start with a free scoping call</h2>
            <p className="text-blue-100 text-sm leading-relaxed">Tell us about your environment and we'll scope the right review — at no cost and no commitment required.</p>
          </div>
          <div className="flex flex-col gap-3 flex-shrink-0">
            <button onClick={() => navigate("/contact")} className="px-7 py-3 bg-white hover:bg-blue-50 text-blue-600 text-sm font-bold rounded-lg transition-colors whitespace-nowrap">Book a free review →</button>
            <button onClick={() => navigate(-1)} className="text-xs text-blue-200 hover:text-white transition-colors text-center">← Back</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchitectureReview;
