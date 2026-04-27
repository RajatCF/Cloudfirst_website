import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";

const StartupsSmbs: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero with gradient overlay — vivid violet */}
      <div className="relative overflow-hidden pt-16 lg:pt-20">
        <img src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1600&q=80" alt="Startups" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/95 via-purple-900/80 to-pink-900/60" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-violet-300 border border-violet-400/30 bg-violet-400/10 rounded-full px-3 py-1 mb-5">By Industry</span>
          <div className="flex flex-col lg:flex-row items-start gap-10">
            <div className="flex-1 max-w-xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5" style={{ fontFamily: "'Georgia', serif" }}>
                Cloud for startups & SMBs —<br /><span className="text-violet-300">move fast, stay lean</span>
              </h1>
              <p className="text-white/70 text-lg leading-relaxed mb-8">You don't need an enterprise cloud team. You need a cloud partner that moves as fast as you do — helping you build right from day one so you're not paying to fix tech debt at Series B.</p>
              <button onClick={() => navigate("/contact")} className="px-7 py-3 bg-violet-500 hover:bg-violet-400 text-white text-sm font-bold rounded-lg transition-colors">Get cloud-ready →</button>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-3">
              {[
                { v: "AWS/GCP credits", l: "Startup programme access" },
                { v: "< 4 weeks", l: "Cloud-ready timeline" },
                { v: "Pay-as-you-grow", l: "No upfront commitments" },
                { v: "Fractional CTO", l: "Cloud architecture guidance" },
              ].map((s) => (
                <div key={s.l} className="bg-white/10 border border-white/20 rounded-xl p-4 backdrop-blur-sm">
                  <div className="text-sm font-bold text-violet-200 mb-1" style={{ fontFamily: "'Georgia', serif" }}>{s.v}</div>
                  <div className="text-xs text-white/50">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* What we offer startups */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Georgia', serif" }}>What we offer growing companies</h2>
        <p className="text-gray-400 text-sm mb-10">Startup-friendly packages designed to deliver production-grade infrastructure without the enterprise overhead.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { icon: "🚀", title: "Cloud foundation fast-track", desc: "VPC, IAM, CI/CD, monitoring, and basic DR — all set up in under 4 weeks, right from the start." },
            { icon: "💸", title: "Startup credits management", desc: "We help you apply for and maximise AWS Activate, GCP for Startups, and Microsoft for Startups credit programmes." },
            { icon: "📦", title: "IaC from day one", desc: "Terraform-managed infrastructure means you avoid the manual click-ops trap and can onboard new engineers safely." },
            { icon: "🔍", title: "FinOps for lean teams", desc: "Cost alerts, reserved instance planning, and monthly reviews keep your burn rate predictable as you scale." },
            { icon: "🔐", title: "Security without friction", desc: "Basic security guardrails, secret management, and vulnerability scanning — without slowing down your sprint velocity." },
            { icon: "📈", title: "Scale-ready architecture", desc: "We design for 100x growth from the start — so your architecture doesn't become the bottleneck that halts your Series A." },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:border-violet-200 hover:shadow-md transition-all">
              <div className="text-2xl mb-3">{item.icon}</div>
              <h3 className="text-sm font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Growth journey */}
      <div className="bg-gradient-to-br from-violet-50 to-white border-y border-violet-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-10 text-center" style={{ fontFamily: "'Georgia', serif" }}>Your cloud journey with CloudFirst</h2>
          <div className="flex flex-col md:flex-row gap-4">
            {[
              { stage: "Pre-seed / MVP", desc: "Cloud foundation, CI/CD pipeline, basic monitoring, startup credits", badge: "bg-violet-100 text-violet-700" },
              { stage: "Seed / Growth", desc: "Production hardening, security baseline, cost governance, auto-scaling", badge: "bg-purple-100 text-purple-700" },
              { stage: "Series A+", desc: "Multi-region, DR, compliance readiness, team onboarding & runbooks", badge: "bg-pink-100 text-pink-700" },
              { stage: "Scale-up", desc: "Managed operations, FinOps programme, enterprise governance", badge: "bg-rose-100 text-rose-700" },
            ].map((phase, i) => (
              <div key={phase.stage} className="flex-1 text-center p-5 bg-white rounded-xl border border-gray-100 shadow-sm relative">
                {i < 3 && <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 text-gray-300 text-lg">›</div>}
                <span className={`inline-block text-[11px] font-bold px-2.5 py-1 rounded-full mb-3 ${phase.badge}`}>{phase.stage}</span>
                <p className="text-xs text-gray-500 leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-br from-violet-700 to-purple-800 rounded-2xl px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3" style={{ fontFamily: "'Georgia', serif" }}>Start your cloud journey right</h2>
            <p className="text-white/70 text-sm leading-relaxed">Tell us where you are and where you're heading. We'll help you build a cloud foundation that grows with your business.</p>
          </div>
          <div className="flex flex-col gap-3 flex-shrink-0">
            <button onClick={() => navigate("/contact")} className="px-7 py-3 bg-white hover:bg-violet-50 text-violet-700 text-sm font-bold rounded-lg transition-colors whitespace-nowrap">Book a free cloud review →</button>
            <button onClick={() => navigate(-1)} className="text-xs text-white/50 hover:text-white/80 transition-colors text-center">← Back</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupsSmbs;
