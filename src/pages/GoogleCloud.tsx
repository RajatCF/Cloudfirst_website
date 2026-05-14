import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Cloud, Code2, ShieldCheck, Database, Wrench, Globe, Lock, TrendingUp, CheckCircle2, Cpu, Layers, GitBranch, HardDrive, Brain } from "lucide-react";

const stats = [
  { value: "Google Premier", label: "Partner status", icon: Globe },
  { value: "99.99%", label: "GKE uptime SLA", icon: TrendingUp },
  { value: "3×", label: "Faster deployments", icon: Cpu },
  { value: "24 / 7", label: "Operations coverage", icon: Lock },
];

const aiServices = [
  {
    title: "Google Gemini (AI Studio)",
    logoSrc: "/logo/gemini.png",
    icon: Brain,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    description:
      "Enable Gemini with secure access patterns, governance, and practical use cases that accelerate teams without risking data exposure.",
  },
  {
    title: "Google Workspace Studio",
    logoSrc: "/logo/google_workspace.png",
    icon: Code2,
    color: "text-sky-600",
    bg: "bg-sky-600/10",
    border: "border-sky-600/20",
    description:
      "Design and automate Workspace workflows with secure integrations, approvals, and governance — tailored to your teams and processes.",
  },
  {
    title: "Vertex AI, MLOps & LLMOps",
    logoSrc: "/logo/Vertex-AI.png",
    icon: GitBranch,
    color: "text-emerald-600",
    bg: "bg-emerald-600/10",
    border: "border-emerald-600/20",
    description:
      "Operationalize models with repeatable pipelines, deployment standards, monitoring, and drift management on Google Cloud.",
  },
  {
    title: "LLM Apps & RAG on Google Cloud",
    logoSrc: "/llm_logo.webp",
    icon: Database,
    color: "text-indigo-600",
    bg: "bg-indigo-600/10",
    border: "border-indigo-600/20",
    description:
      "Build RAG applications connected to enterprise knowledge with evaluation, observability, and cost controls baked in.",
  },
];

const capabilities = [
  { app: "GCP Foundation & Landing Zone", icon: Layers, color: "text-blue-500", bg: "bg-blue-50", use: "Organisation, folders/projects, IAM, networking, and guardrails to start secure and scale cleanly" },
  { app: "Migration & Modernisation", icon: Cloud, color: "text-cyan-600", bg: "bg-cyan-50", use: "Workload migration planning and execution with operational readiness and minimal downtime" },
  { app: "24/7 Managed Operations", icon: Wrench, color: "text-emerald-600", bg: "bg-emerald-50", use: "Monitoring, incident response, patching, quota reviews, and proactive optimisation" },
  { app: "Security & Compliance", icon: ShieldCheck, color: "text-sky-600", bg: "bg-sky-50", use: "Harden posture with least-privilege IAM, network controls, and continuous improvements" },
  { app: "FinOps & Cost Optimisation", icon: TrendingUp, color: "text-amber-600", bg: "bg-amber-50", use: "Cost allocation, CUD strategy, rightsizing, and monthly reviews to reduce spend" },
  { app: "Backup & Disaster Recovery", icon: HardDrive, color: "text-violet-600", bg: "bg-violet-50", use: "Backup strategy, DR design, recovery testing, and resilience aligned to business RTO/RPO" },
];

const GoogleCloud: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f7f8fa]">
      <Navbar />

      {/* ── Hero ── */}
      <div className="w-full bg-[#0a1628] relative overflow-hidden pt-16 lg:pt-20">
        {/* Ambient glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 -left-40 h-[640px] w-[640px] rounded-full bg-blue-600/12 blur-[130px]" />
          <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-emerald-600/10 blur-[110px]" />
        </div>

        <div className="max-w-6xl mx-auto px-6 py-16 lg:py-24 relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left — copy */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <span className="text-xs font-semibold uppercase tracking-widest text-blue-300 border border-blue-400/30 bg-blue-400/10 rounded-full px-3 py-1">
                  Cloud Platforms
                </span>
                <span className="text-white/30 text-xs">·</span>
                <span className="text-xs text-white/40 font-medium">Google Cloud</span>
              </div>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Build faster on{" "}
                <span className="text-blue-400">Google Cloud</span>
              </h1>
              <p className="text-white/60 text-lg leading-relaxed max-w-lg mb-8">
                Raw GCP capability without structure leads to insecure environments, runaway costs, and engineering bottlenecks. CloudFirst architects, secures, and operates GCP so your teams can ship without limits.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => navigate("/contact")}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-400 text-white text-sm font-bold rounded-lg transition-colors"
                >
                  Talk to a GCP expert →
                </button>
                <button
                  onClick={() => navigate(-1)}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 hover:border-white/40 text-white/70 text-sm font-medium rounded-lg transition-colors"
                >
                  ← Back
                </button>
              </div>
            </div>

            {/* Right — image with floating badges */}
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-500/20 via-transparent to-emerald-500/15 blur-2xl" />
              <div className="relative w-full max-w-xs lg:max-w-sm">
                <img
                  src="/logo/new_GCI.png"
                  alt="Google Cloud Partner"
                  className="w-full h-44 sm:h-52 lg:h-56 object-contain"
                />
              </div>
            </div>
          </div>

          {/* Stats strip */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
            {stats.map(({ value, label, icon: Icon }) => (
              <div key={label} className="bg-[#0d1a2e] px-6 py-5 flex items-center gap-4">
                <div className="h-9 w-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <div className="text-lg font-bold text-white" style={{ fontFamily: "'Georgia', serif" }}>{value}</div>
                  <div className="text-xs text-white/40">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Intro ── */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Georgia', serif" }}>
              Why GCP projects stall without the right architecture
            </h2>
            <div>
              <p className="text-gray-500 text-[15px] leading-relaxed mb-3">
                Google Cloud moves fast and rewards teams who understand its primitives deeply. But most organisations onboard GCP reactively — spinning up projects, assigning broad IAM roles, and copying patterns from the internet — and wonder why costs spike, security posture scores are low, and deployments remain unreliable.
              </p>
              <p className="text-gray-500 text-[15px] leading-relaxed">
                CloudFirst brings deep GCP engineering expertise across GKE, BigQuery, networking, security, and serverless. We've designed and operated GCP environments for startups shipping AI products and enterprises running regulated financial workloads.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Capabilities grid ── */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">What we deliver</span>
          <h2 className="mt-2 text-2xl font-bold text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>Key Google Cloud services</h2>
          <p className="text-gray-400 text-sm mt-1">A snapshot of the managed capabilities CloudFirst delivers on Google Cloud.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {capabilities.map(({ app, icon: Icon, color, bg, use }) => (
            <div key={app} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 hover:shadow-md hover:border-blue-100 transition-all duration-200">
              <div className="flex items-center gap-3 mb-3">
                <div className={`h-9 w-9 rounded-lg ${bg} flex items-center justify-center flex-shrink-0`}>
                  <Icon className={`w-4 h-4 ${color}`} />
                </div>
                <h3 className="text-sm font-bold text-gray-900">{app}</h3>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">{use}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden border-y border-gray-100 bg-gradient-to-br from-blue-50 via-white to-emerald-50">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-blue-500/12 blur-[80px]" />
          <div className="absolute -bottom-28 -right-28 h-96 w-96 rounded-full bg-emerald-500/12 blur-[90px]" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 py-16">
          <div className="flex items-end justify-between mb-10 gap-6 flex-wrap">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">AI & GenAI</span>
              <h2 className="mt-2 text-2xl font-bold text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>
                AI services on Google Cloud
              </h2>
            </div>
            <p className="text-gray-400 text-sm max-w-xs">
              Gemini, LLM applications, and operational AI — delivered with secure-by-design architecture and measurable outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {aiServices.map(({ title, logoSrc, icon: Icon, color, bg, border, description }) => (
              <div
                key={title}
                className="group relative bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 overflow-hidden"
              >
                <div className={`absolute top-0 left-0 right-0 h-0.5 ${bg} opacity-0 group-hover:opacity-100 transition-opacity`} />
                <div className={`relative inline-flex items-center justify-center h-12 w-12 rounded-xl ${bg} border ${border} mb-4`}>
                  <Icon
                    data-fallback-icon="true"
                    className={`w-5 h-5 ${color}`}
                    style={{ opacity: logoSrc ? 0 : 1 }}
                  />
                  {logoSrc ? (
                    <img
                      src={logoSrc}
                      alt={title}
                      className={
                        logoSrc.toLowerCase().includes('llm')
                          ? "absolute inset-0 w-full h-full object-contain scale-[1.55]"
                          : "absolute inset-0 w-full h-full object-contain p-1"
                      }
                      loading="lazy"
                      onError={(e) => {
                        const src = (e.currentTarget.getAttribute('src') ?? '').toLowerCase();
                        const step = Number(e.currentTarget.dataset.fallbackStep ?? '0');

                        const candidates = src.includes('gemini')
                          ? ['/logo/gemini.png', '/logo/gemini.webp', '/logo/gemini.jpg', '/gemini.png', '/Gemini.png']
                          : src.includes('vertex')
                            ? ['/logo/Vertex-AI.png', '/logo/vertex.png', '/logo/vertex.webp', '/logo/vertex.jpg', '/Vertex-AI.png', '/vertex.png', '/Vertex.png']
                            : src.includes('workspace')
                              ? ['/logo/google_workspace.png', '/logo/google workspace.png', '/google_workspace.png', '/google workspace.png']
                              : src.includes('llm')
                                ? ['/llm_logo.webp', '/logo/llm_logo.webp']
                                : [];

                        const next = candidates[step + 1];
                        if (!next) {
                          const iconEl = e.currentTarget.parentElement?.querySelector('[data-fallback-icon="true"]') as HTMLElement | null;
                          if (iconEl) iconEl.style.opacity = '1';
                          e.currentTarget.style.display = 'none';
                          return;
                        }

                        e.currentTarget.dataset.fallbackStep = String(step + 1);
                        e.currentTarget.src = next;
                      }}
                    />
                  ) : null}
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <button
              onClick={() => navigate("/contact")}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-400 text-white text-sm font-bold rounded-lg transition-colors"
            >
              Talk to an AI expert →
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300/70 hover:border-gray-400 text-gray-900 text-sm font-semibold rounded-lg transition-colors bg-white/70 backdrop-blur-sm"
            >
              Request an AI roadmap
            </button>
          </div>
        </div>
      </div>

      {/* ── Process strip ── */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-xl font-bold text-gray-900 mb-10 text-center" style={{ fontFamily: "'Georgia', serif" }}>Our GCP engagement process</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { step: "01", title: "Discover", desc: "We assess your existing GCP footprint or design from scratch — understanding workloads, cost targets, security requirements, and delivery goals." },
            { step: "02", title: "Architect", desc: "We design your GCP landing zone, network topology, IAM model, and service architecture — producing a blueprint your teams can build from." },
            { step: "03", title: "Build", desc: "Our engineers implement the foundation, migrate workloads, instrument observability, and establish CI/CD pipelines with full documentation." },
            { step: "04", title: "Operate", desc: "Ongoing managed operations — monitoring, patching, cost reviews, security scanning, and proactive improvements — as part of your team." },
          ].map((p) => (
            <div key={p.step} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
              <div className="text-4xl font-bold text-blue-500/70 mb-3" style={{ fontFamily: "'Georgia', serif" }}>{p.step}</div>
              <h3 className="text-sm font-bold text-gray-900 mb-2">{p.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Use cases + Why GCP image ── */}
      <div className="bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-blue-100 via-transparent to-emerald-50 blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden border border-gray-100 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80"
                  alt="GCP data platform"
                  className="w-full h-64 lg:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-lg bg-white/95 backdrop-blur-sm px-3 py-2 shadow-md">
                  <TrendingUp className="w-4 h-4 text-blue-500" />
                  <span className="text-xs font-bold text-gray-800">GCP Well-Architected review included</span>
                </div>
              </div>
            </div>

            {/* Use cases */}
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Common scenarios</span>
              <h2 className="mt-3 text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Georgia', serif" }}>
                Real problems we solve on GCP
              </h2>
              <div className="space-y-4">
                {[
                  { title: "GCP migration from AWS or Azure", body: "Moving workloads with minimal downtime, optimised architecture, and proper IAM and VPC design from the start." },
                  { title: "GKE platform engineering", body: "Building a production-grade Kubernetes platform with GitOps, security policies, autoscaling, and observability baked in." },
                  { title: "BigQuery data platform", body: "Migrating analytics to a modern BigQuery-based data lakehouse with optimised query costs and governed access." },
                  { title: "GCP cost recovery", body: "Identifying over-provisioned resources, implementing CUDs and Spot VMs, and establishing budget guardrails." },
                ].map(({ title, body }) => (
                  <div key={title} className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-bold text-gray-900">{title}</div>
                      <div className="text-sm text-gray-500 mt-0.5">{body}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="relative overflow-hidden bg-white border-t border-gray-100">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-blue-600/12 blur-[80px]" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 py-16 text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">Free assessment</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Georgia', serif" }}>
            Get a free GCP architecture review
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto mb-8">
            Our GCP engineers will assess your current environment, identify security gaps and cost inefficiencies, and deliver a prioritised action plan within 48 hours.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => navigate("/contact")}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-500 hover:bg-blue-400 text-white text-sm font-bold rounded-lg transition-colors"
            >
              Book a GCP review →
            </button>
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-gray-300 hover:border-gray-400 text-gray-700 text-sm font-medium rounded-lg transition-colors bg-white"
            >
              ← Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleCloud;
