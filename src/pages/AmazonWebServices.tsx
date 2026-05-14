import Layout from "@/components/Layout";
import { ArrowRight, Zap, Database, Boxes, Layers, Code2, HardDrive, Shield, CheckCircle2, TrendingUp, Globe, Lock, Brain, Cpu } from "lucide-react";
import { Link } from "react-router-dom";

const awsManagedServices = [
  {
    name: "AWS Landing Zone & Governance",
    icon: Layers,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    description:
      "Design and implement multi-account AWS foundations with guardrails, networking, identity, tagging, and policies aligned to best practices.",
  },
  {
    name: "Cloud Migration & Modernisation",
    icon: Boxes,
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    border: "border-orange-400/20",
    description:
      "Plan and execute workload migrations, refactors, and platform modernisation with minimal downtime and a clear wave-based approach.",
  },
  {
    name: "24/7 Monitoring & Incident Response",
    icon: Zap,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/20",
    description:
      "Continuous observability, alert triage, on-call response, and post-incident RCA — so issues are resolved fast and don’t repeat.",
  },
  {
    name: "Security Hardening & Compliance",
    icon: Shield,
    color: "text-rose-400",
    bg: "bg-rose-400/10",
    border: "border-rose-400/20",
    description:
      "Strengthen your AWS security posture with best-practice controls, continuous improvements, and audit-ready operational processes.",
  },
  {
    name: "FinOps & Cost Optimisation",
    icon: TrendingUp,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20",
    description:
      "Rightsizing, commitment optimisation, cost allocation, and monthly reviews that reduce spend without sacrificing performance.",
  },
  {
    name: "Backup & Disaster Recovery",
    icon: HardDrive,
    color: "text-sky-400",
    bg: "bg-sky-400/10",
    border: "border-sky-400/20",
    description:
      "Design DR strategies, automate backups, test recovery plans, and ensure resilient operations aligned to your business RTO/RPO.",
  },
  {
    name: "DevOps & Infrastructure as Code",
    icon: Code2,
    color: "text-violet-400",
    bg: "bg-violet-400/10",
    border: "border-violet-400/20",
    description:
      "CI/CD pipelines, repeatable deployments, and automated provisioning using IaC to improve reliability, speed, and consistency.",
  },
  {
    name: "Database & Data Platform Operations",
    icon: Database,
    color: "text-indigo-400",
    bg: "bg-indigo-400/10",
    border: "border-indigo-400/20",
    description:
      "Operate and optimize data platforms on AWS with performance tuning, reliability improvements, and secure access controls.",
  },
];

const stats = [
  { value: "200+", label: "AWS Services", icon: Globe },
  { value: "99.99%", label: "Uptime SLA", icon: TrendingUp },
  { value: "ISO 27001", label: "Certified Partner", icon: Lock },
  { value: "24 / 7", label: "Managed Support", icon: CheckCircle2 },
];

const aiServices = [
  {
    name: "GenAI on AWS (Bedrock-ready)",
    logoSrc: "/logo/Bedrock.png",
    icon: Brain,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    description:
      "Design and deliver generative AI workloads on AWS with strong security, cost controls, and a clear path to production.",
  },
  {
    name: "Kiro",
    logoSrc: "/logo/kiro_51769_logo_1753086501_0boi4.avif",
    icon: Lock,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20",
    description:
      "Deploy and operationalise Keyrow on AWS with secure access controls and governance aligned to production requirements.",
  },
  {
    name: "MLOps, Model Ops & Observability",
    logoSrc: "/logo/mlops.webp",
    icon: Cpu,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/20",
    description:
      "Operationalize training, deployment, monitoring, and drift management so ML systems stay stable as data and usage change.",
  },
  {
    name: "AI Security, Governance & Compliance",
    logoSrc: "/logo/ai.png",
    icon: Shield,
    color: "text-rose-400",
    bg: "bg-rose-400/10",
    border: "border-rose-400/20",
    description:
      "Threat modeling, access control, logging, and policy guardrails for AI workloads aligned to compliance requirements.",
  },
];

const AmazonWebServices = () => {
  return (
    <Layout>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[#0a0e1a]">
        {/* Ambient glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -left-32 h-[600px] w-[600px] rounded-full bg-amber-500/10 blur-[120px]" />
          <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-orange-600/10 blur-[100px]" />
        </div>

        <div className="relative max-w-[1200px] mx-auto px-6 lg:px-10 pt-16 pb-0">
          <div className="grid items-center gap-12 lg:grid-cols-2 py-16 lg:py-24">
            {/* Left — copy */}
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-amber-400">
                Cloud Platforms
              </span>

              <h1
                className="mt-6 mb-5 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Amazon Web{" "}
                <span className="text-amber-400">Services</span>
              </h1>

              <p className="text-white/60 text-lg leading-relaxed max-w-lg mb-8">
                CloudFirst's AWS-certified team designs, migrates, and manages cloud infrastructure so you can ship faster, reduce costs, and scale with confidence.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-black text-sm font-bold rounded-lg transition-colors"
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
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-amber-500/20 via-transparent to-orange-500/15 blur-2xl" />

              {/* Main image frame */}
              <div className="relative w-full max-w-xs lg:max-w-sm">
                <img
                  src="/aws_advance partner logo.png"
                  alt="AWS Advanced Partner"
                  className="w-full h-44 sm:h-52 lg:h-56 object-contain"
                />
              </div>
            </div>
          </div>

          {/* Stats strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5 mb-0">
            {stats.map(({ value, label, icon: Icon }) => (
              <div key={label} className="bg-[#0d1220] px-6 py-5 flex items-center gap-4">
                <div className="h-9 w-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-amber-400" />
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
              Offload AWS complexity to certified experts
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              AWS Managed Cloud Services simplify the day-to-day management of your cloud infrastructure. CloudFirst&apos;s engineers handle monitoring, optimisation, patching, and incident response — so you can concentrate on delivering value to your customers.
            </p>
          </div>
        </div>
      </section>

      {/* ── Services grid ── */}
      <section className="bg-[#f7f8fa]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-16">
          <div className="flex items-end justify-between mb-10 gap-6 flex-wrap">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-600">What we deliver</span>
              <h2 className="mt-2 text-2xl md:text-3xl font-bold text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>
                Key AWS services
              </h2>
            </div>
            <p className="text-gray-400 text-sm max-w-xs">
              A snapshot of the managed capabilities CloudFirst delivers on AWS for customers.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {awsManagedServices.map(({ name, icon: Icon, color, bg, border, description }) => (
              <article
                key={name}
                className="group relative bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 overflow-hidden"
              >
                {/* Top accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 ${bg} opacity-0 group-hover:opacity-100 transition-opacity`} />
                <div className={`inline-flex items-center justify-center h-10 w-10 rounded-xl ${bg} border ${border} mb-4`}>
                  <Icon className={`w-5 h-5 ${color}`} />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
              </article>
            ))}

            {/* "More services" card */}
            <article className="relative bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-white/20 mb-4">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">Custom service coverage</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Need something specific on AWS? We tailor delivery to your workloads, security requirements, and operating model.
                </p>
              </div>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-1.5 text-white text-sm font-semibold hover:gap-2.5 transition-all"
              >
                Talk to an AWS expert <ArrowRight className="w-4 h-4" />
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-gray-100 bg-gradient-to-br from-amber-50 via-white to-orange-50">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-amber-400/15 blur-[80px]" />
          <div className="absolute -bottom-28 -right-28 h-96 w-96 rounded-full bg-orange-400/15 blur-[90px]" />
        </div>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-16">
          <div className="flex items-end justify-between mb-10 gap-6 flex-wrap">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-600">AI & GenAI</span>
              <h2 className="mt-2 text-2xl md:text-3xl font-bold text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>
                AI services on AWS
              </h2>
            </div>
            <p className="text-gray-400 text-sm max-w-xs">
              From LLM applications to governance — delivered with production-grade engineering and operational rigor.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {aiServices.map(({ name, logoSrc, icon: Icon, color, bg, border, description }) => (
              <article
                key={name}
                className="group relative bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 overflow-hidden"
              >
                <div className={`absolute top-0 left-0 right-0 h-0.5 ${bg} opacity-0 group-hover:opacity-100 transition-opacity`} />
                <div className={`relative inline-flex items-center justify-center h-12 w-12 rounded-xl ${bg} border ${border} mb-4`}>
                  {logoSrc ? (
                    <img
                      src={logoSrc}
                      alt={name}
                      className={
                        logoSrc.toLowerCase().includes('bedrock')
                          ? "absolute inset-0 w-full h-full object-contain scale-[1.7]"
                          : "absolute inset-0 w-full h-full object-contain p-1"
                      }
                      loading="lazy"
                      onError={(e) => {
                        const src = e.currentTarget.getAttribute('src') ?? '';
                        if (!src.toLowerCase().includes('/logo/ai.')) {
                          e.currentTarget.style.display = 'none';
                          return;
                        }

                        const step = e.currentTarget.dataset.fallbackStep ?? '0';
                        const next =
                          step === '0'
                            ? '/logo/ai.webp'
                            : step === '1'
                              ? '/logo/ai.jpg'
                              : step === '2'
                                ? '/logo/ai-security-governance.webp'
                                : '';

                        if (!next) {
                          e.currentTarget.style.display = 'none';
                          return;
                        }

                        e.currentTarget.dataset.fallbackStep = String(Number(step) + 1);
                        e.currentTarget.src = next;
                      }}
                    />
                  ) : (
                    <Icon className={`w-5 h-5 ${color}`} />
                  )}
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-black text-sm font-bold rounded-lg transition-colors"
            >
              Talk to an AI architect <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300/70 hover:border-gray-400 text-gray-900 text-sm font-semibold rounded-lg transition-colors bg-white/70 backdrop-blur-sm"
            >
              Request an AI roadmap
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why AWS with CloudFirst ── */}
      <section className="bg-white border-t border-gray-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-amber-100 via-transparent to-orange-50 blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden border border-gray-100 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
                  alt="Cloud data centre"
                  className="w-full h-64 lg:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-900/30 via-transparent to-transparent" />
                {/* Overlay chip */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-lg bg-white/95 backdrop-blur-sm px-3 py-2 shadow-md">
                  <TrendingUp className="w-4 h-4 text-amber-500" />
                  <span className="text-xs font-bold text-gray-800">AWS Well-Architected Review included</span>
                </div>
              </div>
            </div>

            {/* Copy */}
            <div className="order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-600">Why CloudFirst for AWS</span>
              <h2 className="mt-3 text-2xl md:text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Georgia', serif" }}>
                AWS expertise that goes beyond the console
              </h2>
              <div className="space-y-4">
                {[
                  { title: "AWS Advanced Tier Partner", body: "Verified technical credentials across compute, data, security, and migration." },
                  { title: "Cost-first architecture", body: "Every design decision is evaluated for cost impact. Customers save an average of 35% vs. self-managed setups." },
                  { title: "24/7 proactive monitoring", body: "Our NOC watches your environment round the clock — responding before issues become outages." },
                  { title: "Compliance-ready", body: "ISO 27001, SOC 2, and GDPR-aligned practices baked into every managed engagement." },
                ].map(({ title, body }) => (
                  <div key={title} className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
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
      <section className="relative overflow-hidden bg-white border-t border-gray-100">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-amber-500/12 blur-[80px]" />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-6 lg:px-10 py-16 text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-amber-600 mb-4">Get started</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Georgia', serif" }}>
            Ready to modernize on AWS?
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto mb-8">
            Get a tailored AWS managed services roadmap aligned to your workloads, security goals, and growth plans.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-amber-500 hover:bg-amber-400 text-black text-sm font-bold rounded-lg transition-colors"
            >
              Talk to an AWS architect <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-gray-300 hover:border-gray-400 text-gray-700 text-sm font-medium rounded-lg transition-colors bg-white"
            >
              Explore all services
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AmazonWebServices;
