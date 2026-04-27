import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";

const waves = [
  { wave: "Wave 1", title: "Quick wins & low-risk workloads", desc: "Dev/test environments, web servers, and stateless apps. Build team confidence and establish operational patterns before moving critical workloads." },
  { wave: "Wave 2", title: "Business applications", desc: "Internal tools, CRM, ERP integrations, and business-critical apps. Dependency mapping and data migration planning are critical at this stage." },
  { wave: "Wave 3", title: "Core & regulated workloads", desc: "Production databases, regulated systems, and customer-facing platforms. Requires thorough DR planning, compliance validation, and cutover rehearsal." },
  { wave: "Wave 4", title: "Decommission & optimise", desc: "Legacy infrastructure retired, on-premise footprint reduced, and cloud-native optimisation applied to migrated workloads." },
];

const readinessChecks = [
  "Workload inventory and dependency map complete",
  "RTO / RPO defined for each workload",
  "Target cloud architecture reviewed and approved",
  "Network connectivity and security baseline in place",
  "Migration tooling selected and tested",
  "Rollback plan documented for each wave",
  "Data migration strategy validated",
  "User communication and training plan ready",
];

const MigrationPlanning: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero — split with teal accent */}
      <div className="max-w-7xl mx-auto px-6 pt-28 pb-16 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-teal-600 bg-teal-50 border border-teal-100 rounded-full px-3 py-1 mb-5">Services</span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5" style={{ fontFamily: "'Georgia', serif" }}>
            Move to cloud<br />
            <span className="text-teal-600">without the risk</span>
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-xl">
            Failed migrations happen when teams underestimate complexity and overestimate speed. CloudFirst builds phased migration plans with dependency mapping, rollback strategies, and proven wave sequencing — so your move to cloud is predictable, not painful.
          </p>
          <div className="flex flex-wrap gap-3">
            <button onClick={() => navigate("/contact")} className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold rounded-lg transition-colors">Plan my migration →</button>
            <button onClick={() => navigate(-1)} className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-semibold rounded-lg transition-colors">← Back</button>
          </div>
        </div>
        <div className="flex-1 flex justify-end">
          <img
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
            alt="Cloud Migration"
            className="rounded-2xl shadow-2xl w-full max-w-lg object-cover aspect-video"
          />
        </div>
      </div>

      {/* Stats */}
      <div className="bg-teal-600 py-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "200+", label: "Migrations completed" },
            { value: "0", label: "Data loss incidents" },
            { value: "3 clouds", label: "AWS · Azure · GCP" },
            { value: "< 4 hrs", label: "Avg cutover window" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-bold text-white mb-1" style={{ fontFamily: "'Georgia', serif" }}>{s.value}</div>
              <div className="text-xs text-teal-100">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Migration waves */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Georgia', serif" }}>Wave-based migration approach</h2>
        <p className="text-gray-400 text-sm mb-10">Not everything moves at once. We sequence workloads by risk and dependency to minimise disruption at every stage.</p>
        <div className="space-y-4">
          {waves.map((w, i) => (
            <div key={w.wave} className="flex gap-5 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-teal-200 hover:bg-teal-50/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-700 flex flex-col items-center justify-center flex-shrink-0">
                <span className="text-[10px] font-bold uppercase tracking-wider">W{i + 1}</span>
              </div>
              <div>
                <div className="text-[11px] font-semibold text-teal-600 uppercase tracking-wider mb-1">{w.wave}</div>
                <h3 className="text-base font-bold text-gray-900 mb-1.5">{w.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{w.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Readiness checklist */}
      <div className="bg-gray-50 border-y border-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row gap-12 items-start">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Georgia', serif" }}>Migration readiness checklist</h2>
            <p className="text-gray-400 text-sm mb-8">Eight things that must be true before your first workload moves.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {readinessChecks.map((check) => (
                <div key={check} className="flex items-start gap-3 bg-white rounded-lg p-3 border border-gray-100">
                  <div className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">{check}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <h3 className="text-lg font-bold text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>Why migrations fail</h3>
            {[
              { issue: "No dependency map", impact: "Hidden coupling causes cascade failures during cutover." },
              { issue: "Missing rollback plan", impact: "Teams freeze during incidents with no documented path back." },
              { issue: "Single-wave approach", impact: "Everything moves at once — maximising blast radius when something goes wrong." },
              { issue: "Skipping performance testing", impact: "Workloads perform differently in cloud; testing before go-live prevents production surprises." },
            ].map((f) => (
              <div key={f.issue} className="bg-white rounded-xl p-4 border border-gray-100">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-red-400 flex-shrink-0" />
                  <span className="text-sm font-bold text-gray-900">{f.issue}</span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed pl-4">{f.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-teal-600 rounded-2xl px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3" style={{ fontFamily: "'Georgia', serif" }}>Get a free migration readiness assessment</h2>
            <p className="text-teal-100 text-sm leading-relaxed">We'll assess your current environment, identify blockers, and produce a recommended wave plan — no commitment required.</p>
          </div>
          <div className="flex flex-col gap-3 flex-shrink-0">
            <button onClick={() => navigate("/contact")} className="px-7 py-3 bg-white hover:bg-teal-50 text-teal-700 text-sm font-bold rounded-lg transition-colors whitespace-nowrap">Book an assessment →</button>
            <button onClick={() => navigate(-1)} className="text-xs text-teal-200 hover:text-white transition-colors text-center">← Back</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MigrationPlanning;
