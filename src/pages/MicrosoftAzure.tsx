import Layout from "@/components/Layout";
import { ArrowRight, Server, Database, Boxes, AppWindow, ShieldCheck, CheckCircle2, TrendingUp, Globe, Lock, Cpu } from "lucide-react";
import { Link } from "react-router-dom";

const azureManagedServices = [
  {
    name: "Azure Managed Virtual Machines",
    icon: Server,
    color: "text-sky-400",
    bg: "bg-sky-400/10",
    border: "border-sky-400/20",
    description:
      "Fully managed VMs optimised for performance, security, and reliability — patching, backups, and monitoring all handled for you.",
  },
  {
    name: "Azure Managed Databases",
    icon: Database,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20",
    description:
      "Managed database services with built-in high availability, automated backups, and expert-led performance tuning.",
  },
  {
    name: "Azure Managed Kubernetes",
    icon: Boxes,
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
    border: "border-cyan-400/20",
    description:
      "Production-grade AKS clusters with managed upgrades, autoscaling, and 24/7 monitoring by certified Azure engineers.",
  },
  {
    name: "Azure Managed Applications",
    icon: AppWindow,
    color: "text-indigo-400",
    bg: "bg-indigo-400/10",
    border: "border-indigo-400/20",
    description:
      "Fully managed application services covering patching, scaling, and availability so your teams ship faster.",
  },
  {
    name: "Azure Managed Security",
    icon: ShieldCheck,
    color: "text-violet-400",
    bg: "bg-violet-400/10",
    border: "border-violet-400/20",
    description:
      "End-to-end Azure security management — IAM, network security, Defender for Cloud, and threat response included.",
  },
];

const stats = [
  { value: "Azure Expert", label: "MSP Status", icon: Globe },
  { value: "99.99%", label: "Uptime SLA", icon: TrendingUp },
  { value: "ISO 27001", label: "Certified", icon: Lock },
  { value: "24 / 7", label: "NOC Support", icon: Cpu },
];

const MicrosoftAzure = () => {
  return (
    <Layout>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[#060c1f]">
        {/* Ambient glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 -left-40 h-[640px] w-[640px] rounded-full bg-sky-600/12 blur-[130px]" />
          <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-700/12 blur-[110px]" />
        </div>

        <div className="relative max-w-[1200px] mx-auto px-6 lg:px-10 pt-16 pb-0">
          <div className="grid items-center gap-12 lg:grid-cols-2 py-16 lg:py-24">
            {/* Left — copy */}
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-sky-400">
                Cloud Platforms
              </span>

              <h1
                className="mt-6 mb-5 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Microsoft{" "}
                <span className="text-sky-400">Azure</span>
              </h1>

              <p className="text-white/60 text-lg leading-relaxed max-w-lg mb-8">
                CloudFirst's Azure-certified engineers design, migrate, and fully manage your Azure environment — so you focus on business outcomes, not infrastructure operations.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-sky-500 hover:bg-sky-400 text-white text-sm font-bold rounded-lg transition-colors"
                >
                  Talk to our team <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 hover:border-white/40 text-white/80 text-sm font-medium rounded-lg transition-colors"
                >
                  Back to Home
                </Link>
              </div>
            </div>

            {/* Right — image with floating badges */}
            <div className="relative flex items-center justify-center">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-sky-500/20 via-transparent to-blue-600/15 blur-2xl" />

              {/* Main image frame */}
              <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80"
                  alt="Microsoft Azure cloud infrastructure"
                  className="w-full h-72 lg:h-96 object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#060c1f]/70 via-transparent to-transparent" />
              </div>

              {/* Floating badge — top left */}
              <div className="absolute -top-4 -left-4 flex items-center gap-2 rounded-xl bg-[#0d1530] border border-sky-500/30 px-4 py-2.5 shadow-xl backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
                <span className="text-xs font-semibold text-white">Azure Expert MSP</span>
              </div>

              {/* Floating badge — bottom right */}
              <div className="absolute -bottom-4 -right-4 rounded-xl bg-[#0d1530] border border-white/10 px-4 py-3 shadow-xl backdrop-blur-sm">
                <div className="text-xs text-white/50 mb-0.5">Customers migrated</div>
                <div className="text-xl font-bold text-sky-400" style={{ fontFamily: "'Georgia', serif" }}>150 +</div>
              </div>

              {/* Floating badge — bottom left */}
              <div className="absolute bottom-8 -left-5 rounded-xl bg-[#0d1530] border border-emerald-500/20 px-3 py-2 shadow-xl backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-medium text-white">Zero-downtime migration</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5 mb-0">
            {stats.map(({ value, label, icon: Icon }) => (
              <div key={label} className="bg-[#0a1228] px-6 py-5 flex items-center gap-4">
                <div className="h-9 w-9 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-sky-400" />
                </div>
                <div>
                  <div className="text-lg font-bold text-white" style={{ fontFamily: "'Georgia', serif" }}>{value}</div>
                  <div className="text-xs text-white/40">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Intro blurb ── */}
      <section className="bg-[#f7f8fa] border-b border-gray-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-14">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Georgia', serif" }}>
              Let Azure experts handle your cloud operations
            </h2>
            <div className="relative">
              <img
                src="/azure_img.png"
                alt="Microsoft Azure"
                className="absolute -right-56 -top-12 w-40 h-40 object-contain opacity-100"
              />
              <p className="text-gray-500 text-lg leading-relaxed relative z-10">
                Azure Managed Cloud Services take the operational burden off your team. CloudFirst's certified engineers manage your VMs, databases, containers, applications, and security posture — ensuring optimal performance, compliance, and cost efficiency every day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services grid ── */}
      <section className="bg-[#f7f8fa]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-16">
          <div className="flex items-end justify-between mb-10 gap-6 flex-wrap">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-sky-600">What we manage</span>
              <h2 className="mt-2 text-2xl md:text-3xl font-bold text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>
                Key Azure managed services
              </h2>
            </div>
            <p className="text-gray-400 text-sm max-w-xs">
              Core Azure services CloudFirst operates and optimises for your environment.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {azureManagedServices.map(({ name, icon: Icon, color, bg, border, description }) => (
              <article
                key={name}
                className="group relative bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 overflow-hidden"
              >
                <div className={`absolute top-0 left-0 right-0 h-0.5 ${bg} opacity-0 group-hover:opacity-100 transition-opacity`} />
                <div className={`inline-flex items-center justify-center h-10 w-10 rounded-xl ${bg} border ${border} mb-4`}>
                  <Icon className={`w-5 h-5 ${color}`} />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
              </article>
            ))}

            {/* "More services" card */}
            <article className="relative bg-gradient-to-br from-sky-500 to-blue-700 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-white/20 mb-4">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">Full Azure portfolio coverage</h3>
                <p className="text-white/80 text-sm leading-relaxed">From AI services and IoT to analytics, DevOps, and hybrid cloud — we manage it all.</p>
              </div>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-1.5 text-white text-sm font-semibold hover:gap-2.5 transition-all"
              >
                Get full service list <ArrowRight className="w-4 h-4" />
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* ── Why CloudFirst for Azure ── */}
      <section className="bg-white border-t border-gray-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-sky-100 via-transparent to-blue-50 blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden border border-gray-100 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80"
                  alt="Azure operations centre"
                  className="w-full h-64 lg:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-sky-900/30 via-transparent to-transparent" />
                {/* Overlay chip */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-lg bg-white/95 backdrop-blur-sm px-3 py-2 shadow-md">
                  <TrendingUp className="w-4 h-4 text-sky-500" />
                  <span className="text-xs font-bold text-gray-800">Azure Well-Architected review included</span>
                </div>
              </div>
            </div>

            {/* Copy */}
            <div className="order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-widest text-sky-600">Why CloudFirst for Azure</span>
              <h2 className="mt-3 text-2xl md:text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Georgia', serif" }}>
                Azure expertise that delivers real outcomes
              </h2>
              <div className="space-y-4">
                {[
                  { title: "Azure Expert MSP", body: "Microsoft's highest managed services designation — verified across migrations, security, and modern work." },
                  { title: "Cost-optimised architecture", body: "Reserved instances, right-sizing, and FinOps practices that consistently reduce Azure bills by 25–40%." },
                  { title: "Proactive security posture", body: "Microsoft Defender for Cloud, Sentinel SIEM, and continuous compliance monitoring included." },
                  { title: "Hybrid & multi-cloud ready", body: "Arc-enabled management spanning on-premises, Azure, and other clouds in a single pane of glass." },
                ].map(({ title, body }) => (
                  <div key={title} className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" />
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
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden bg-[#060c1f]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-500/40 to-transparent" />
          <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-sky-600/10 blur-[80px]" />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-6 lg:px-10 py-16 text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-sky-400 mb-4">Get started</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Georgia', serif" }}>
            Build and scale confidently on Azure
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto mb-8">
            Partner with CloudFirst to plan, implement, and manage your Azure environment with security, reliability, and operational excellence at the centre.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-sky-500 hover:bg-sky-400 text-white text-sm font-bold rounded-lg transition-colors"
            >
              Talk to an Azure architect <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 hover:border-white/40 text-white/70 text-sm font-medium rounded-lg transition-colors"
            >
              Explore all services
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MicrosoftAzure;
