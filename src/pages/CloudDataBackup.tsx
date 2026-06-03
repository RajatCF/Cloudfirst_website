import Layout from "@/components/Layout";
import { ArrowRight, CheckCircle2, ShieldCheck, HardDrive, RefreshCcw, BellRing, Scale } from "lucide-react";
import { Link } from "react-router-dom";
import FaqSection, { getFaqsByPath } from "@/components/FaqSection";

const highlights = [
  {
    title: "Automated Backups",
    icon: HardDrive,
    body: "Policy-driven backups for VMs, databases, SaaS and files — with encryption, retention, and immutable options.",
  },
  {
    title: "Ransomware Readiness",
    icon: ShieldCheck,
    body: "Harden backup posture with least-privilege access, separation of duties, and recovery plans you can execute under pressure.",
  },
  {
    title: "Restore Testing",
    icon: RefreshCcw,
    body: "Scheduled restore drills and validation so you’re never discovering broken backups during an incident.",
  },
  {
    title: "Compliance & Retention",
    icon: Scale,
    body: "Retention policies, audit trails, and documentation aligned to internal controls and external compliance requirements.",
  },
  {
    title: "Monitoring & Alerting",
    icon: BellRing,
    body: "Dashboards and alerts for failed jobs, RPO gaps, and coverage visibility — with actionable reporting.",
  },
  {
    title: "Operational Excellence",
    icon: CheckCircle2,
    body: "Runbooks, SLAs, and continuous improvement to keep backups reliable as your cloud evolves.",
  },
];

const CloudDataBackup = () => {
  return (
    <Layout>
      <section className="relative overflow-hidden bg-[#07111f]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 -left-40 h-[640px] w-[640px] rounded-full bg-bright-blue/10 blur-[130px]" />
          <div className="absolute top-0 right-0 h-[520px] w-[520px] rounded-full bg-light-blue/10 blur-[120px]" />
        </div>

        <div className="relative max-w-[1200px] mx-auto px-6 lg:px-10 py-20 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-bright-blue/30 bg-bright-blue/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-light-blue">
                Solutions
              </span>
              <h1
                className="mt-6 mb-5 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Cloud Data{" "}
                <span className="text-light-blue">Backup</span>
              </h1>
              <p className="text-white/60 text-lg leading-relaxed max-w-xl mb-8">
                Backups that are not tested are not backups — they’re assumptions. CloudFirst designs, automates, and validates
                cloud backup programs that keep your data recoverable, compliant, and resilient.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-bright-blue hover:bg-bright-blue/90 text-white text-sm font-bold rounded-lg transition-colors"
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

            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-bright-blue/15 via-transparent to-light-blue/10 blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1200&q=80"
                  alt="Cloud data backup"
                  className="w-full h-72 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07111f]/75 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bright-blue/5">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-16">
          <div className="flex items-end justify-between mb-10 gap-6 flex-wrap">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-bright-blue">What we deliver</span>
              <h2 className="mt-2 text-2xl md:text-3xl font-bold text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>
                A complete cloud backup program
              </h2>
            </div>
            <p className="text-gray-400 text-sm max-w-xs">
              Built for reliability, security, and auditability — aligned to your RTO/RPO goals and operating model.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {highlights.map(({ title, icon: Icon, body }) => (
              <article
                key={title}
                className="group relative bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-bright-blue/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-bright-blue/10 border border-bright-blue/20 mb-4">
                  <Icon className="w-5 h-5 text-bright-blue" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FaqSection title="Frequently Asked Questions" faqs={getFaqsByPath("/solutions/cloud-data-backup")} className="bg-white" />

      <section className="relative overflow-hidden bg-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bright-blue/20 to-transparent" />
          <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-bright-blue/10 blur-[90px]" />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-6 lg:px-10 py-16 text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-bright-blue mb-4">Get started</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Georgia', serif" }}>
            Want a backup posture review?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            Get clarity on backup coverage, RPO gaps, restore readiness, and the controls needed to stay resilient and compliant.
          </p>
          <div className="flex justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-bright-blue hover:bg-bright-blue/90 text-white text-sm font-bold rounded-lg transition-colors"
            >
              Request assessment <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CloudDataBackup;
