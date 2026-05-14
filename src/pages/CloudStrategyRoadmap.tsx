import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";

const pillars = [
  { icon: "🎯", title: "Business Alignment", desc: "Cloud decisions mapped to revenue targets, growth milestones, and risk tolerance — not just technical preference." },
  { icon: "🔒", title: "Security & Governance", desc: "Policy frameworks, access controls, and compliance posture defined before workloads migrate or expand." },
  { icon: "⚙️", title: "Platform Engineering", desc: "Landing zones, automation, CI/CD, and developer experience foundations that scale with your team." },
  { icon: "📊", title: "Cost Predictability", desc: "FinOps practices, tagging strategy, and budget governance embedded from the start — not retrofitted later." },
];

const phases = [
  { phase: "Phase 1", title: "Discovery & Assessment", duration: "Weeks 1–2", items: ["Workload inventory", "Business goals workshop", "Current-state gap analysis", "Stakeholder interviews"] },
  { phase: "Phase 2", title: "Strategy Design", duration: "Weeks 3–4", items: ["Cloud operating model", "Platform architecture", "Migration sequencing", "Cost baseline modelling"] },
  { phase: "Phase 3", title: "Roadmap Build", duration: "Week 5", items: ["12–18 month initiative plan", "Prioritised quick wins", "Resource and budget estimates", "Risk and dependency map"] },
  { phase: "Phase 4", title: "Alignment & Handover", duration: "Week 6", items: ["Executive readout", "Engineering deep-dive", "Board-ready materials", "Implementation kickoff"] },
];

const CloudStrategyRoadmap: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-bright-blue/5">
      <Navbar />

      {/* Hero — dark indigo with purple glow, centered */}
      <div className="w-full bg-[#1e1b4b] relative overflow-hidden pt-16 lg:pt-20">
        <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(ellipse at 60% 40%, hsl(var(--bright-blue)) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, hsl(var(--light-blue)) 0%, transparent 50%)" }} />
        <div className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center relative z-10">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-light-blue border border-bright-blue/30 bg-bright-blue/10 rounded-full px-3 py-1 mb-5">Services</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5" style={{ fontFamily: "'Georgia', serif" }}>
            A cloud strategy that <span className="text-light-blue">actually gets executed</span>
          </h1>
          <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Most cloud strategies sit in a slide deck and gather dust. CloudFirst builds practical, prioritised roadmaps tied to real business outcomes — then stays with you to deliver them.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <button onClick={() => navigate("/contact")} className="px-7 py-3 bg-bright-blue hover:bg-bright-blue/90 text-white text-sm font-bold rounded-lg transition-colors">Start your roadmap →</button>
            <button onClick={() => navigate(-1)} className="px-7 py-3 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold rounded-lg transition-colors">← Back</button>
          </div>
        </div>
      </div>

      {/* Strategy pillars */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center" style={{ fontFamily: "'Georgia', serif" }}>Four pillars of a durable cloud strategy</h2>
        <p className="text-gray-400 text-sm mb-10 text-center">Every CloudFirst roadmap is built on these foundations — in balance, not in isolation.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((p) => (
            <div key={p.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center hover:shadow-md hover:border-bright-blue/25 transition-all">
              <div className="text-3xl mb-3">{p.icon}</div>
              <h3 className="text-sm font-bold text-gray-900 mb-2">{p.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Engagement phases — horizontal timeline */}
      <div className="bg-white border-y border-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Georgia', serif" }}>How we build your roadmap</h2>
          <p className="text-gray-400 text-sm mb-10">A structured 6-week engagement — from discovery to board-ready strategy.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            {phases.map((ph, i) => (
              <div key={ph.phase} className="relative">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-full bg-bright-blue text-white text-xs font-bold flex items-center justify-center flex-shrink-0">{i + 1}</div>
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-bright-blue">{ph.phase}</div>
                    <div className="text-xs text-gray-400">{ph.duration}</div>
                  </div>
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-3">{ph.title}</h3>
                <ul className="space-y-1.5">
                  {ph.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-gray-500">
                      <span className="w-1 h-1 rounded-full bg-light-blue flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What's included */}
      <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col lg:flex-row gap-12 items-center">
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-900 mb-5" style={{ fontFamily: "'Georgia', serif" }}>Everything you need to move</h2>
          <div className="space-y-4">
            {[
              { title: "Cloud operating model", desc: "Who owns what, how decisions are made, and how cloud ops integrate with your engineering and business teams." },
              { title: "Prioritised initiative backlog", desc: "Every initiative ranked by strategic value, effort, and dependency — ready to plan into sprints or quarters." },
              { title: "Budget and resource model", desc: "Cost projections, headcount needs, and tooling investments broken down by phase and initiative." },
              { title: "Board-ready presentation", desc: "A polished executive narrative explaining the why, what, and how of your cloud strategy." },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                <div className="w-5 h-5 rounded-full bg-bright-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-bright-blue" />
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900 mb-0.5">{item.title}</div>
                  <div className="text-xs text-gray-500 leading-relaxed">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
            alt="Cloud Strategy"
            className="rounded-2xl shadow-xl w-full object-cover aspect-video"
          />
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="bg-[#1e1b4b] rounded-2xl px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(ellipse at 90% 50%, hsl(var(--bright-blue)) 0%, transparent 60%)" }} />
          <div className="relative z-10 max-w-lg">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-light-blue mb-3">6-week engagement</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3" style={{ fontFamily: "'Georgia', serif" }}>Ready to build your roadmap?</h2>
            <p className="text-white/60 text-sm leading-relaxed">Start with a free 1-hour strategy call. We'll assess where you are and outline what a roadmap engagement looks like for your business.</p>
          </div>
          <div className="relative z-10 flex flex-col gap-3 flex-shrink-0">
            <button onClick={() => navigate("/contact")} className="px-7 py-3 bg-bright-blue hover:bg-bright-blue/90 text-white text-sm font-bold rounded-lg transition-colors whitespace-nowrap">Book a strategy call →</button>
            <button onClick={() => navigate(-1)} className="text-xs text-white/40 hover:text-white/70 transition-colors text-center">← Back</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudStrategyRoadmap;
