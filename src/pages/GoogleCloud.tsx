import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Cloud, Code2, ShieldCheck, Database, BarChart3, Zap, Wrench, Globe, Lock, TrendingUp, CheckCircle2, Cpu, Layers, GitBranch } from "lucide-react";

const services = [
  {
    icon: Cloud,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20",
    title: "GCP Foundation & Landing Zone",
    tag: "Foundation",
    problem: "Starting on GCP without governance leads to sprawling projects, unconstrained spending, and unmanaged access from day one.",
    solution: "We design your GCP organisation hierarchy, folder structure, IAM policies, VPC architecture, and guardrails — giving you a secure, scalable foundation before the first workload lands.",
  },
  {
    icon: Layers,
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
    border: "border-cyan-400/20",
    title: "GKE & Kubernetes Engineering",
    tag: "Kubernetes",
    problem: "Running Kubernetes on GKE without hardened configurations leads to insecure clusters, runaway costs, and deployment failures.",
    solution: "We design, deploy, and operate production-grade GKE clusters — node pool tuning, autoscaling, Workload Identity, Anthos config, and CI/CD integration — so you get the power of Kubernetes without the operational burden.",
  },
  {
    icon: ShieldCheck,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/20",
    title: "GCP Security & Identity",
    tag: "Security",
    problem: "Default GCP permissions, open service accounts, and missing VPC controls create exploitable attack surfaces most teams never see.",
    solution: "We implement least-privilege IAM, Workload Identity Federation, VPC Service Controls, Security Command Center, and Cloud Armor — hardening your GCP environment against external and internal threats.",
  },
  {
    icon: Database,
    color: "text-violet-400",
    bg: "bg-violet-400/10",
    border: "border-violet-400/20",
    title: "Data & Analytics Platform",
    tag: "BigQuery · Dataflow",
    problem: "Poorly structured BigQuery datasets and unoptimised data pipelines cause query costs to spiral and analytics to lag behind business needs.",
    solution: "We architect modern data platforms on BigQuery, Dataflow, Pub/Sub, and Looker — with optimised schemas, partitioning strategies, pipeline automation, and governance controls.",
  },
  {
    icon: BarChart3,
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    border: "border-amber-400/20",
    title: "Cost Optimisation & FinOps",
    tag: "FinOps",
    problem: "GCP billing is complex. Without committed use discounts, right-sizing, and label-based allocation, costs grow faster than your revenue.",
    solution: "We conduct GCP cost audits, implement CUD and Spot VM strategies, enforce labelling policies, and build budget dashboards — giving you full visibility and measurable savings.",
  },
  {
    icon: Zap,
    color: "text-rose-400",
    bg: "bg-rose-400/10",
    border: "border-rose-400/20",
    title: "Cloud Run & Serverless",
    tag: "Serverless",
    problem: "Ad hoc serverless deployments without proper resource limits, cold start management, or observability result in unpredictable performance and costs.",
    solution: "We design Cloud Run, Cloud Functions, and App Engine workloads with proper concurrency limits, observability, secret management, and deployment pipelines — serverless done right.",
  },
  {
    icon: Wrench,
    color: "text-sky-400",
    bg: "bg-sky-400/10",
    border: "border-sky-400/20",
    title: "Managed GCP Operations",
    tag: "Managed Service",
    problem: "GCP environments require continuous tuning, security patching, quota management, and incident response that internal teams can't sustain alongside delivery.",
    solution: "We provide fully managed GCP operations — 24x7 monitoring, incident response, patch management, quota reviews, and proactive optimisation — as an extension of your engineering team.",
  },
];

const stats = [
  { value: "Google Premier", label: "Partner status", icon: Globe },
  { value: "99.99%", label: "GKE uptime SLA", icon: TrendingUp },
  { value: "3×", label: "Faster deployments", icon: Cpu },
  { value: "24 / 7", label: "Operations coverage", icon: Lock },
];

const capabilities = [
  { app: "Google Kubernetes Engine", icon: Layers, color: "text-blue-500", bg: "bg-blue-50", use: "Managed Kubernetes for containerised workloads at scale" },
  { app: "BigQuery", icon: BarChart3, color: "text-emerald-600", bg: "bg-emerald-50", use: "Serverless data warehouse for analytics at petabyte scale" },
  { app: "Cloud Run", icon: Zap, color: "text-orange-500", bg: "bg-orange-50", use: "Fully managed serverless container runtime" },
  { app: "Cloud Spanner", icon: Globe, color: "text-violet-500", bg: "bg-violet-50", use: "Globally distributed relational database with horizontal scaling" },
  { app: "Vertex AI", icon: GitBranch, color: "text-pink-500", bg: "bg-pink-50", use: "Unified ML platform for training, tuning, and serving AI models" },
  { app: "Cloud Armor", icon: ShieldCheck, color: "text-sky-500", bg: "bg-sky-50", use: "DDoS protection and WAF for GCP-hosted applications" },
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
              <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=900&q=80"
                  alt="Google Cloud infrastructure"
                  className="w-full h-72 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/70 via-transparent to-transparent" />
              </div>

              {/* Floating badge — top left */}
              <div className="absolute -top-4 -left-4 flex items-center gap-2 rounded-xl bg-[#0f1e38] border border-blue-500/30 px-4 py-2.5 shadow-xl backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-xs font-semibold text-white">Google Premier Partner</span>
              </div>

              {/* Floating badge — bottom right */}
              <div className="absolute -bottom-4 -right-4 rounded-xl bg-[#0f1e38] border border-white/10 px-4 py-3 shadow-xl backdrop-blur-sm">
                <div className="text-xs text-white/50 mb-0.5">Avg. cost savings</div>
                <div className="text-xl font-bold text-emerald-400" style={{ fontFamily: "'Georgia', serif" }}>30 %</div>
              </div>

              {/* Floating badge — bottom left */}
              <div className="absolute bottom-8 -left-5 rounded-xl bg-[#0f1e38] border border-emerald-500/20 px-3 py-2 shadow-xl backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-medium text-white">GCP architecture review</span>
                </div>
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
            <div className="relative">
              <img
                src="/gcp_img.png"
                alt="Google Cloud"
                className="absolute -right-56 -top-12 w-40 h-40 object-contain opacity-100"
              />
              <div className="relative z-10">
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
      </div>

      {/* ── Capabilities grid ── */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Core services</span>
          <h2 className="mt-2 text-2xl font-bold text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>Key GCP services we specialise in</h2>
          <p className="text-gray-400 text-sm mt-1">Deep engineering expertise across Google Cloud's most critical products.</p>
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

      {/* ── Services grid ── */}
      <div className="bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="flex items-end justify-between mb-10 gap-6 flex-wrap">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">What we do</span>
              <h2 className="mt-2 text-2xl font-bold text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>7 GCP practice areas</h2>
            </div>
            <p className="text-gray-400 text-sm max-w-xs">Every engagement addresses a real problem with a specific, measurable solution.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {services.map(({ icon: Icon, color, bg, border, title, tag, problem, solution }) => (
              <article key={title} className="group relative bg-[#f7f8fa] rounded-2xl border border-gray-100 p-6 hover:shadow-md hover:border-blue-100 transition-all duration-200 overflow-hidden">
                <div className={`absolute top-0 left-0 right-0 h-0.5 ${bg} opacity-0 group-hover:opacity-100 transition-opacity`} />
                <div className="flex items-start justify-between mb-4">
                  <div className={`inline-flex items-center justify-center h-10 w-10 rounded-xl ${bg} border ${border}`}>
                    <Icon className={`w-5 h-5 ${color}`} />
                  </div>
                  <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 border border-blue-100 rounded-full px-2.5 py-1">{tag}</span>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-3">{title}</h3>
                <div className="flex items-start gap-2 mb-3">
                  <span className="mt-1 w-3.5 h-3.5 flex-shrink-0 rounded-full bg-red-100 flex items-center justify-center">
                    <span className="block w-1.5 h-1.5 rounded-full bg-red-400" />
                  </span>
                  <p className="text-xs text-gray-400 leading-relaxed">{problem}</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-1 w-3.5 h-3.5 flex-shrink-0 rounded-full bg-emerald-100 flex items-center justify-center">
                    <span className="block w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  </span>
                  <p className="text-xs text-gray-600 leading-relaxed">{solution}</p>
                </div>
              </article>
            ))}
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
              <div className="text-4xl font-bold text-gray-100 mb-3" style={{ fontFamily: "'Georgia', serif" }}>{p.step}</div>
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
      <div className="relative overflow-hidden bg-[#0a1628]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
          <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-blue-600/10 blur-[80px]" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 py-16 text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-400 mb-4">Free assessment</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Georgia', serif" }}>
            Get a free GCP architecture review
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto mb-8">
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
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 hover:border-white/40 text-white/70 text-sm font-medium rounded-lg transition-colors"
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
