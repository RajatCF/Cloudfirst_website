import Layout from "@/components/Layout";
import { ArrowRight, Zap, Database, Boxes, Layers, Code2, HardDrive, Shield, CheckCircle2, TrendingUp, Globe, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const awsManagedServices = [
  {
    name: "AWS Lambda",
    icon: Zap,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    description:
      "Serverless compute that scales automatically in response to requests — no server management, pay only for what you use.",
  },
  {
    name: "Amazon RDS",
    icon: Database,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20",
    description:
      "Fully managed relational database handling backups, patching, and failover so your team focuses on building, not maintenance.",
  },
  {
    name: "Amazon ECS",
    icon: Boxes,
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    border: "border-orange-400/20",
    description:
      "High-performance container orchestration for Docker workloads, with fully managed infrastructure for flexible deployment.",
  },
  {
    name: "AWS Elastic Beanstalk",
    icon: Layers,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/20",
    description:
      "Deploy multi-language applications without worrying about capacity, load balancing, or scaling — all handled for you.",
  },
  {
    name: "AWS CloudFormation",
    icon: Code2,
    color: "text-violet-400",
    bg: "bg-violet-400/10",
    border: "border-violet-400/20",
    description:
      "Define your entire infrastructure as code with declarative templates for consistent, repeatable provisioning at any scale.",
  },
  {
    name: "Amazon S3",
    icon: HardDrive,
    color: "text-sky-400",
    bg: "bg-sky-400/10",
    border: "border-sky-400/20",
    description:
      "Industry-leading object storage with unlimited scalability, 99.999999999% durability, and fine-grained access controls.",
  },
  {
    name: "AWS CloudTrail",
    icon: Shield,
    color: "text-rose-400",
    bg: "bg-rose-400/10",
    border: "border-rose-400/20",
    description:
      "Complete API audit trail for security analysis, compliance reporting, and resource change tracking across your AWS estate.",
  },
];

const stats = [
  { value: "200+", label: "AWS Services", icon: Globe },
  { value: "99.99%", label: "Uptime SLA", icon: TrendingUp },
  { value: "ISO 27001", label: "Certified Partner", icon: Lock },
  { value: "24 / 7", label: "Managed Support", icon: CheckCircle2 },
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
              <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80"
                  alt="AWS cloud infrastructure"
                  className="w-full h-72 lg:h-96 object-cover"
                />
                {/* Gradient overlay for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a]/70 via-transparent to-transparent" />
              </div>

              {/* Floating badge — top left */}
              <div className="absolute -top-4 -left-4 flex items-center gap-2 rounded-xl bg-[#13192e] border border-amber-500/30 px-4 py-2.5 shadow-xl backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-xs font-semibold text-white">AWS Advanced Partner</span>
              </div>

              {/* Floating badge — bottom right */}
              <div className="absolute -bottom-4 -right-4 rounded-xl bg-[#13192e] border border-white/10 px-4 py-3 shadow-xl backdrop-blur-sm">
                <div className="text-xs text-white/50 mb-0.5">Avg. cost savings</div>
                <div className="text-xl font-bold text-amber-400" style={{ fontFamily: "'Georgia', serif" }}>35 %</div>
              </div>

              {/* Floating badge — bottom left */}
              <div className="absolute bottom-8 -left-5 rounded-xl bg-[#13192e] border border-emerald-500/20 px-3 py-2 shadow-xl backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-medium text-white">Migration complete</span>
                </div>
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
            <div className="relative">
              <img
                src="/aws_advance partner logo.png"
                alt="AWS"
                className="absolute -right-56 -top-12 w-40 h-40 object-contain opacity-100"
              />
              <p className="text-gray-500 text-lg leading-relaxed relative z-10">
                AWS Managed Cloud Services simplify the day-to-day management of your cloud infrastructure. CloudFirst's engineers handle monitoring, optimisation, patching, and incident response — so you can concentrate on delivering value to your customers.
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
              <span className="text-xs font-bold uppercase tracking-widest text-amber-600">What we manage</span>
              <h2 className="mt-2 text-2xl md:text-3xl font-bold text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>
                Key AWS managed services
              </h2>
            </div>
            <p className="text-gray-400 text-sm max-w-xs">
              A sample of the 200+ AWS services CloudFirst architects and operates for customers.
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
                <h3 className="text-base font-bold text-white mb-2">+ 190 more AWS services</h3>
                <p className="text-white/80 text-sm leading-relaxed">From AI/ML to IoT, security, and edge computing — CloudFirst manages it all.</p>
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
      <section className="relative overflow-hidden bg-[#0a0e1a]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
          <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-amber-500/10 blur-[80px]" />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-6 lg:px-10 py-16 text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-amber-400 mb-4">Get started</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Georgia', serif" }}>
            Ready to modernize on AWS?
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto mb-8">
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

export default AmazonWebServices;
