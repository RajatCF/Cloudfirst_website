import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";

const services = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    title: "Workspace Migration & Setup",
    tag: "Migration",
    problem: "Migrating from legacy email or Microsoft 365 without a structured plan leads to data loss, broken calendars, and weeks of user chaos.",
    solution: "We migrate mailboxes, Drive files, calendars, and contacts using Google's migration tooling — with full data integrity checks, domain cutover planning, and user training included.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Security & Compliance Controls",
    tag: "Security",
    problem: "Default Workspace settings expose your organisation to phishing, data exfiltration, and non-compliance with GDPR and industry mandates.",
    solution: "We configure 2FA enforcement, context-aware access, DLP rules, drive sharing policies, audit logging, and Vault retention — aligning your Workspace to your compliance obligations.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: "Identity & Directory Management",
    tag: "Identity",
    problem: "Unmanaged user provisioning and offboarding creates orphaned accounts, data access gaps, and audit failures.",
    solution: "We implement automated user lifecycle management with SCIM provisioning, Google Directory Sync, SSO integration, and group-based access controls — so your identity processes are consistent and auditable.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Gmail & Meet Optimisation",
    tag: "Productivity",
    problem: "Misconfigured mail routing, spam filtering gaps, and poor Meet quality degrade daily communication and frustrate users.",
    solution: "We optimise mail routing, configure SPF/DKIM/DMARC, implement spam policies, tune Meet hardware compatibility, and configure bandwidth controls for reliable video collaboration.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "AppSheet & Apps Script Automation",
    tag: "Automation",
    problem: "Manual workflows and disconnected spreadsheets waste hours every week. Teams lack the tools to automate without writing complex code.",
    solution: "We build AppSheet no-code apps and Apps Script automations — connecting Sheets, Forms, Gmail, and Drive into streamlined workflows that save time and reduce errors.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "Ongoing Admin & Support",
    tag: "Managed Service",
    problem: "Workspace requires continuous licence management, user support, policy tuning, and admin work that distracts internal IT from strategic projects.",
    solution: "We act as your outsourced Workspace admin — handling user lifecycle, licence optimisation, policy updates, training, and tier-2 support so your team stays focused.",
  },
];

const stats = [
  { value: "Google Partner", label: "Authorised reseller & partner" },
  { value: "99.9%", label: "Workspace uptime SLA" },
  { value: "ISO 27001", label: "CloudFirst certified" },
  { value: "24/7", label: "Admin coverage" },
];

const capabilities = [
  { app: "Gmail", icon: "📧", use: "Enterprise email with 1TB+ storage, mail routing, and advanced spam protection" },
  { app: "Google Drive", icon: "📁", use: "Cloud-native document storage with granular sharing and DLP controls" },
  { app: "Google Meet", icon: "📹", use: "Video conferencing and meetings integrated with Calendar and Chat" },
  { app: "Google Chat", icon: "💬", use: "Team messaging, Spaces, and bot integrations for async collaboration" },
  { app: "Google Vault", icon: "🔒", use: "Data retention, eDiscovery, and audit for compliance and legal holds" },
  { app: "AppSheet", icon: "⚡", use: "No-code application platform built natively into Workspace" },
];

const GoogleWorkspace: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f7f8fa]">
      <Navbar />

      {/* Hero */}
      <div className="w-full bg-[#0d1b4b] relative overflow-hidden pt-16 lg:pt-20">
        <div
          className="absolute inset-0 opacity-20"
          style={{ background: "radial-gradient(ellipse at 80% 40%, #4285f4 0%, transparent 55%), radial-gradient(ellipse at 10% 80%, #34a853 0%, transparent 50%)" }}
        />
        <div className="max-w-6xl mx-auto px-6 pt-24 pb-20 relative z-10">
          <div className="flex items-center gap-2 mb-5">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-300 border border-blue-400/30 bg-blue-400/10 rounded-full px-3 py-1">Cloud Platforms</span>
            <span className="text-white/30 text-xs">·</span>
            <span className="text-xs text-white/40 font-medium">Google Workspace</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5 max-w-3xl">
            Google Workspace that{" "}
            <span className="text-blue-400">actually works for your team</span>
          </h1>
          <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl mb-10">
            Most organisations deploy Google Workspace and accept the defaults — then struggle with security gaps, unmanaged sharing, and no identity governance. CloudFirst migrates, secures, and manages your Workspace tenant so collaboration is productive and compliant from day one.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-white/5 border border-white/10 rounded-xl px-4 py-4">
                <div className="text-2xl font-bold text-white mb-1">{s.value}</div>
                <div className="text-xs text-white/50 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Workspace deployments underdeliver</h2>
          <div className="relative">
            <img
              src="/google_workspace.png"
              alt="Google Workspace"
              className="absolute right-0 w-64 h-64 object-contain opacity-100"
              style={{ marginRight: '-300px', top: '-40px' }}
            />
            <div className="relative z-10">
              <p className="text-gray-500 text-[15px] leading-relaxed mb-3">
                Google Workspace is designed for collaboration — but without proper governance, it becomes a liability. Files are shared publicly by accident. Offboarded employees retain access. Phishing emails reach inboxes. Compliance audits fail on missing retention policies.
              </p>
              <p className="text-gray-500 text-[15px] leading-relaxed">
                CloudFirst has deployed and managed Google Workspace for organisations across healthcare, finance, education, and technology. We know the settings that matter, the pitfalls to avoid, and how to make Workspace the productivity backbone your business needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Capabilities grid */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-xl font-bold text-gray-900 mb-2">What's in Google Workspace</h2>
        <p className="text-gray-400 text-sm mb-8">A deeply integrated productivity suite — powerful when configured correctly.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {capabilities.map((c) => (
            <div key={c.app} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 hover:shadow-md hover:border-blue-100 transition-all duration-200">
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
          <h2 className="text-xl font-bold text-gray-900 mb-8">How we help</h2>
          <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">6 service areas</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((svc) => (
            <div key={svc.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:border-blue-100 transition-all duration-200">
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 bg-blue-50 text-blue-700 rounded-xl flex items-center justify-center flex-shrink-0">{svc.icon}</div>
                <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 rounded px-2.5 py-1">{svc.tag}</span>
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-3">{svc.title}</h3>
              <div className="flex items-start gap-2 mb-3">
                <span className="mt-0.5 w-4 h-4 flex-shrink-0 rounded-full bg-red-50 flex items-center justify-center"><span className="block w-1.5 h-1.5 rounded-full bg-red-400" /></span>
                <p className="text-xs text-gray-400 leading-relaxed">{svc.problem}</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-0.5 w-4 h-4 flex-shrink-0 rounded-full bg-emerald-50 flex items-center justify-center"><span className="block w-1.5 h-1.5 rounded-full bg-emerald-500" /></span>
                <p className="text-xs text-gray-600 leading-relaxed">{svc.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Process strip */}
      <div className="bg-white border-y border-gray-100 py-14">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-10 text-center">Our Workspace engagement process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Assess", desc: "We audit your current environment — existing email system, identity provider, compliance requirements, and user needs — to design the right migration plan." },
              { step: "02", title: "Configure", desc: "We configure your Workspace tenant with security baseline, identity settings, sharing policies, and mail flow rules before any user is moved." },
              { step: "03", title: "Migrate", desc: "We execute your mailbox and data migration with phased cutover, user communication, and parallel run periods to ensure zero business disruption." },
              { step: "04", title: "Manage", desc: "We provide ongoing Workspace administration, user support, licence management, and continuous security hardening as part of your operations." },
            ].map((p) => (
              <div key={p.step}>
                <div className="text-4xl font-bold text-gray-100 mb-3">{p.step}</div>
                <h3 className="text-sm font-bold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Use cases */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-xl font-bold text-gray-900 mb-8">Common scenarios we solve</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { scenario: "Microsoft 365 to Workspace migration", desc: "Moving from Exchange and SharePoint to Gmail and Drive with zero data loss, calendar continuity, and user onboarding support." },
            { scenario: "Security hardening after incident", desc: "Locking down an exposed Workspace tenant with context-aware access, DLP policies, and audit logging after a phishing incident or compliance finding." },
            { scenario: "Managed admin service", desc: "Outsourcing day-to-day Workspace administration — user lifecycle, licence reviews, support tickets — so your IT team focuses on higher-value work." },
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
          <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(ellipse at 90% 50%, #4285f4 0%, transparent 60%)" }} />
          <div className="relative z-10 max-w-lg">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">Free assessment</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-snug">Get your Workspace security scorecard</h2>
            <p className="text-white/60 text-sm leading-relaxed">We'll audit your Workspace configuration, identify sharing and security gaps, and deliver a prioritised remediation plan — no cost, no commitment.</p>
          </div>
          <div className="relative z-10 flex flex-col gap-3 flex-shrink-0">
            <button onClick={() => navigate("/contact")} className="inline-flex items-center gap-2 px-7 py-3 bg-blue-400 hover:bg-blue-300 text-[#0d1b4b] text-sm font-bold rounded-lg transition-colors duration-200 whitespace-nowrap">Request a Workspace audit →</button>
            <button onClick={() => navigate(-1)} className="text-xs text-white/40 hover:text-white/70 transition-colors duration-150 text-center">← Back</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleWorkspace;
