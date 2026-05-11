import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";

const beforeAfter = [
  { before: "Manually provisioned VMs", after: "Infrastructure-as-Code with Terraform / Pulumi" },
  { before: "Manual deployments via SSH", after: "GitOps CI/CD pipelines (GitHub Actions, ArgoCD)" },
  { before: "Monolithic applications", after: "Containerised microservices on Kubernetes" },
  { before: "No auto-scaling", after: "Horizontal pod autoscaling with metrics-driven policies" },
  { before: "Manual runbooks for incidents", after: "Automated remediation with PagerDuty + runbook automation" },
  { before: "Siloed observability", after: "Unified observability: metrics, logs, traces in one platform" },
];

const InfrastructureModernisation: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f7f8fa]">
      <Navbar />

      {/* Hero — purple accent, split with image */}
      <div className="max-w-7xl mx-auto px-6 pt-28 pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-purple-600 bg-purple-50 border border-purple-100 rounded-full px-3 py-1 mb-5">Solutions</span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5" style={{ fontFamily: "'Georgia', serif" }}>
            From legacy infrastructure<br />
            <span className="text-purple-600">to cloud-native platform</span>
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-xl">
            Outdated infrastructure creates bottlenecks and hidden risks. CloudFirst Technology modernizes your environment by transitioning from rigid, manual systems to agile, automated cloud-native platforms—so your teams can move faster and scale without limits.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <button onClick={() => navigate("/contact")} className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold rounded-lg transition-colors">Start modernising →</button>
            <button onClick={() => navigate(-1)} className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-semibold rounded-lg transition-colors">← Back</button>
          </div>
        </div>
      </div>

      {/* Before / After */}
      <div className="bg-white border-y border-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Georgia', serif" }}>What modernisation actually looks like</h2>
          <p className="text-gray-400 text-sm mb-10">Concrete transformations — from where you are to where you need to be.</p>
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-4 mb-3">
              <div className="text-xs font-bold text-red-500 uppercase tracking-widest px-4">Before</div>
              <div className="text-xs font-bold text-emerald-600 uppercase tracking-widest px-4">After</div>
            </div>
            {beforeAfter.map((item) => (
              <div key={item.before} className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-red-50 rounded-xl p-4 border border-red-100">
                  <span className="w-2 h-2 rounded-full bg-red-400 flex-shrink-0" />
                  <span className="text-sm text-gray-600">{item.before}</span>
                </div>
                <div className="flex items-center gap-3 bg-emerald-50 rounded-xl p-4 border border-emerald-100">
                  <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-sm text-gray-700 font-medium">{item.after}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modernisation pillars */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-10" style={{ fontFamily: "'Georgia', serif" }}>Our modernisation approach</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: "⚙️", title: "Platform engineering", desc: "Internal developer platforms with self-service provisioning, golden paths, and automated guardrails — so engineers ship faster with fewer tickets." },
            { icon: "🔄", title: "CI/CD transformation", desc: "Replace manual deployment processes with GitOps pipelines, automated testing, and progressive delivery — feature flags, canary releases, blue/green deploys." },
            { icon: "📦", title: "Container adoption", desc: "Containerise your workloads with Docker, deploy on Kubernetes, and implement service mesh for security, observability, and traffic management." },
            { icon: "🔍", title: "Observability stack", desc: "Unified metrics (Prometheus), logging (Grafana Loki), and tracing (OpenTelemetry) — with dashboards and alerts your on-call team will actually use." },
            { icon: "🛡️", title: "Security hardening", desc: "Shift-left security with IaC scanning, image vulnerability scanning, RBAC, network policies, and secrets management baked into the platform." },
            { icon: "💰", title: "Cost governance", desc: "Namespace-level cost allocation, resource quotas, autoscaling policies, and spot/preemptible instance integration to keep infrastructure costs predictable." },
          ].map((p) => (
            <div key={p.title} className="bg-gray-50 rounded-xl p-5 hover:bg-purple-50 hover:border-purple-100 border border-gray-100 transition-all">
              <div className="text-2xl mb-3">{p.icon}</div>
              <h3 className="text-sm font-bold text-gray-900 mb-2">{p.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="bg-purple-600 rounded-2xl px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3" style={{ fontFamily: "'Georgia', serif" }}>Assess your modernisation readiness</h2>
            <p className="text-purple-100 text-sm leading-relaxed">We'll evaluate your current infrastructure, identify the highest-value modernisation opportunities, and build a phased plan your teams can execute.</p>
          </div>
          <div className="flex flex-col gap-3 flex-shrink-0">
            <button onClick={() => navigate("/contact")} className="px-7 py-3 bg-white hover:bg-purple-50 text-purple-700 text-sm font-bold rounded-lg transition-colors whitespace-nowrap">Book a free assessment →</button>
            <button onClick={() => navigate(-1)} className="text-xs text-purple-200 hover:text-white transition-colors text-center">← Back</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfrastructureModernisation;
