import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";

const services = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Tenant Setup & Migration",
    tag: "Migration",
    problem: "Migrating to Microsoft 365 without a strategy leads to data loss, permission errors, and weeks of user confusion.",
    solution: "We architect your tenant from scratch or migrate from legacy systems — mailboxes, files, SharePoint, Teams — with zero downtime, full permission mapping, and user training.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: "Azure AD & Identity Management",
    tag: "Identity",
    problem: "Weak identity controls and no SSO mean password sprawl, account takeovers, and help desk overload.",
    solution: "We configure Azure AD with conditional access policies, MFA enforcement, SSO integration, and privileged identity management — so only authenticated users reach your apps.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "Security & Compliance",
    tag: "Security",
    problem: "Default Microsoft 365 settings leave your tenant exposed to phishing, data leaks, and non-compliance.",
    solution: "We implement Microsoft Defender, DLP policies, sensitivity labels, retention rules, and audit logging — aligning to GDPR, ISO 27001, and your industry requirements.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "SharePoint & Teams Governance",
    tag: "Governance",
    problem: "Unmanaged Teams and SharePoint sprawl creates permission chaos, orphaned content, and compliance gaps.",
    solution: "We design naming conventions, lifecycle policies, guest access controls, and approval workflows — keeping collaboration structured without blocking productivity.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Exchange Online Optimization",
    tag: "Exchange",
    problem: "Mailbox size limits, spam floods, and mail flow issues disrupt business and frustrate users daily.",
    solution: "We configure mail flow rules, shared mailboxes, archive policies, and advanced threat protection — ensuring reliable, secure email at scale.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Power Platform Integration",
    tag: "Automation",
    problem: "Manual workflows and disconnected apps waste time. Teams build shadow IT solutions that create security risks.",
    solution: "We build Power Automate flows, Power Apps, and Power BI dashboards — automating repetitive tasks and surfacing business insights without custom code.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "Ongoing Management & Support",
    tag: "Managed Service",
    problem: "Microsoft 365 requires continuous tuning, license optimization, and user support that internal teams can't sustain.",
    solution: "We provide managed admin services — monitoring, patching, license reviews, user onboarding, and tier-2 support — so your team focuses on the business, not the tenant.",
  },
];

const stats = [
  { value: "250M+", label: "Active M365 users globally" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "ISO 27001", label: "CloudFirst certified" },
  { value: "24/7", label: "Support coverage" },
];

const capabilities = [
  {
    app: "Exchange Online",
    icon: "📧",
    use: "Enterprise email, calendaring, and contacts with 100GB mailboxes",
  },
  {
    app: "SharePoint Online",
    icon: "📁",
    use: "Document management, intranets, and team sites",
  },
  {
    app: "Microsoft Teams",
    icon: "💬",
    use: "Chat, meetings, voice, and persistent collaboration workspaces",
  },
  {
    app: "OneDrive for Business",
    icon: "☁️",
    use: "Personal cloud storage with 1TB+ per user",
  },
  {
    app: "Power Platform",
    icon: "⚡",
    use: "Low-code automation (Power Automate, Power Apps, Power BI)",
  },
  {
    app: "Microsoft Defender",
    icon: "🛡️",
    use: "Advanced threat protection across email, endpoints, and identity",
  },
];

const Microsoft365: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-bright-blue/5">
      <Navbar />

      {/* Hero */}
      <div className="w-full bg-[#0d1b4b] relative overflow-hidden pt-16 lg:pt-20">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              "radial-gradient(ellipse at 80% 40%, hsl(var(--bright-blue)) 0%, transparent 55%), radial-gradient(ellipse at 10% 80%, hsl(var(--light-blue)) 0%, transparent 50%)",
          }}
        />
        <div className="max-w-6xl mx-auto px-6 pt-24 pb-20 relative z-10">
          <div className="flex items-center gap-2 mb-5">
            <span className="text-xs font-semibold uppercase tracking-widest text-light-blue border border-bright-blue/30 bg-bright-blue/10 rounded-full px-3 py-1">Resources</span>
            <span className="text-white/30 text-xs">·</span>
            <span className="text-xs text-white/40 font-medium">Microsoft 365</span>
          </div>
          <h1
            className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5 max-w-3xl"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Microsoft 365 that{" "}
            <span className="text-light-blue">works for your business</span>, not against it
          </h1>
          <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl mb-10">
            Most organisations deploy Microsoft 365 and inherit default settings that create security gaps, governance nightmares, and user frustration. CloudFirst designs, migrates, secures, and manages your M365 tenant the right way from day one.
          </p>

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
            Why Microsoft 365 deployments fail
          </h2>
          <div className="relative">
            <img
              src="https://cdn.cloudfirst.tech/S3_image/Microsoft_Office_365_logo.png"
              alt="Microsoft 365"
              className="absolute -right-56 -top-12 w-40 h-40 object-contain opacity-100"
            />
            <p className="text-gray-500 text-[15px] leading-relaxed mb-3 relative z-10">
              Microsoft 365 is powerful — but its flexibility is a trap. Without governance, you inherit Teams sprawl, mailbox bloat, and external sharing that violates compliance policies. Without security hardening, you're exposed to phishing, ransomware, and privilege escalation. Without proper identity architecture, SSO never happens.
            </p>
            <p className="text-gray-500 text-[15px] leading-relaxed relative z-10">
              CloudFirst has deployed and managed Microsoft 365 for enterprises across industries. We know the gotchas, hidden settings, and policies that prevent chaos. We don't just license you — we architect, secure, and operate your tenant as a strategic platform.
            </p>
          </div>
        </div>
      </div>

      {/* Capabilities grid */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <h2
          className="text-xl font-bold text-gray-900 mb-2"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          What's in Microsoft 365
        </h2>
        <p className="text-gray-400 text-sm mb-8">
          A unified platform for productivity, collaboration, and security — when configured correctly.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {capabilities.map((c) => (
            <div
              key={c.app}
              className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 hover:shadow-md hover:border-bright-blue/20 transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{c.icon}</span>
                <h3 className="text-sm font-bold text-gray-900">{c.app}</h3>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">{c.use}</p>
            </div>
          ))}
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
          <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">7 service areas</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:border-bright-blue/20 transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 bg-bright-blue/10 text-bright-blue rounded-xl flex items-center justify-center flex-shrink-0">
                  {svc.icon}
                </div>
                <span className="text-[11px] font-semibold text-bright-blue bg-bright-blue/10 rounded px-2.5 py-1">
                  {svc.tag}
                </span>
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-3">{svc.title}</h3>
              <div className="flex items-start gap-2 mb-3">
                <span className="mt-0.5 w-4 h-4 flex-shrink-0 rounded-full bg-red-50 flex items-center justify-center">
                  <span className="block w-1.5 h-1.5 rounded-full bg-red-400" />
                </span>
                <p className="text-xs text-gray-400 leading-relaxed">{svc.problem}</p>
              </div>
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

      {/* Process strip */}
      <div className="bg-white border-y border-gray-100 py-14">
        <div className="max-w-6xl mx-auto px-6">
          <h2
            className="text-xl font-bold text-gray-900 mb-10 text-center"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Our Microsoft 365 engagement process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Assess", desc: "We audit your current setup (or design from scratch), identify gaps, and define your governance, security, and identity requirements." },
              { step: "02", title: "Architect", desc: "We design tenant structure, licensing plan, identity integration, security baseline, and governance policies tailored to your business." },
              { step: "03", title: "Deploy", desc: "We migrate mailboxes, files, and users — or configure greenfield tenants — with zero downtime, full documentation, and user training." },
              { step: "04", title: "Manage", desc: "We provide ongoing admin, monitoring, optimization, and support so your Microsoft 365 environment stays secure and efficient." },
            ].map((p) => (
              <div key={p.step}>
                <div className="text-4xl font-bold text-bright-blue/20 mb-3" style={{ fontFamily: "'Georgia', serif" }}>
                  {p.step}
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Use cases */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2
          className="text-xl font-bold text-gray-900 mb-8"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          Common scenarios we solve
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              scenario: "Legacy migration",
              desc: "Moving from on-premise Exchange, G Suite, or outdated systems to Microsoft 365 with no data loss or downtime.",
            },
            {
              scenario: "Security hardening",
              desc: "Locking down an existing M365 tenant with conditional access, DLP, and threat protection after a near-miss or audit finding.",
            },
            {
              scenario: "Managed service",
              desc: "Outsourcing day-to-day admin — user provisioning, license optimization, support tickets — so your IT team focuses on strategy.",
            },
          ].map((u) => (
            <div key={u.scenario} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <h3 className="text-sm font-bold text-gray-900 mb-2">{u.scenario}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{u.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="bg-[#0d1b4b] rounded-2xl px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-20"
            style={{ background: "radial-gradient(ellipse at 90% 50%, hsl(var(--bright-blue)) 0%, transparent 60%)" }}
          />
          <div className="relative z-10 max-w-lg">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-light-blue mb-3">
              Free assessment
            </span>
            <h2
              className="text-2xl md:text-3xl font-bold text-white mb-3 leading-snug"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Get your Microsoft 365 security scorecard
            </h2>
            <p className="text-white/60 text-sm leading-relaxed">
              We'll audit your tenant configuration, security posture, and governance gaps — and deliver a prioritised action plan within 48 hours. No cost, no commitment.
            </p>
          </div>
          <div className="relative z-10 flex flex-col gap-3 flex-shrink-0">
            <button
              onClick={() => navigate("/contact")}
              className="inline-flex items-center gap-2 px-7 py-3 bg-bright-blue hover:bg-bright-blue/90 text-white text-sm font-bold rounded-lg transition-colors duration-200 whitespace-nowrap"
            >
              Request a tenant audit →
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

export default Microsoft365;
