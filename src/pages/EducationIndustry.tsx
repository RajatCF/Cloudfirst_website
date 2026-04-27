import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";

const EducationIndustry: React.FC = () => {
  const navigate = useNavigate();
  const challenges = [
    { challenge: "Budget constraints & cost predictability", solution: "Education discount programmes with AWS, GCP, and Azure combined with FinOps practices cut cloud costs by 30–50% while improving service quality for students and staff." },
    { challenge: "Massive seasonal traffic spikes", solution: "Auto-scaling architecture handles exam season traffic spikes (10–100x normal load) without over-provisioning — paying only for what you use." },
    { challenge: "Student data privacy (FERPA, GDPR)", solution: "Data governance frameworks, consent management, and data residency controls keep student PII compliant with education privacy regulations globally." },
    { challenge: "Legacy LMS & SIS integration", solution: "API integration layers connect legacy learning management and student information systems to modern cloud services without disruptive rip-and-replace migrations." },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero with education image */}
      <div className="relative h-[480px] overflow-hidden pt-16 lg:pt-20">
        <img src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1600&q=80" alt="Education" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-sky-900/92 via-sky-900/70 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex items-end pb-14">
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-sky-300 border border-sky-400/30 bg-sky-400/10 rounded-full px-3 py-1 mb-4">By Industry</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4" style={{ fontFamily: "'Georgia', serif" }}>Education cloud —<br /><span className="text-sky-300">affordable, scalable, student-first</span></h1>
            <p className="text-white/70 text-lg max-w-xl">From universities to EdTech platforms, CloudFirst builds cloud infrastructure that handles academic scale, protects student data, and keeps costs within education budgets.</p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-sky-700 py-8">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[{ v: "50%", l: "Avg cost reduction" }, { v: "100x", l: "Exam peak scalability" }, { v: "FERPA", l: "Privacy compliant" }, { v: "Google for Edu", l: "Workspace partner" }].map(s => (
            <div key={s.l}><div className="text-xl font-bold text-white mb-0.5" style={{ fontFamily: "'Georgia', serif" }}>{s.v}</div><div className="text-xs text-sky-100">{s.l}</div></div>
          ))}
        </div>
      </div>

      {/* Challenges */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Georgia', serif" }}>Education cloud challenges — solved</h2>
        <p className="text-gray-400 text-sm mb-10">The challenges unique to educational institutions and EdTech platforms, with our approach to each.</p>
        <div className="space-y-4">
          {challenges.map((c) => (
            <div key={c.challenge} className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-gray-100">
              <div className="bg-red-50 p-6 flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-red-400 flex-shrink-0 mt-1.5" />
                <div><div className="text-xs font-bold text-red-500 uppercase tracking-wider mb-1">Challenge</div><p className="text-sm text-gray-700 font-medium">{c.challenge}</p></div>
              </div>
              <div className="bg-sky-50 p-6 flex items-start gap-3">
                <svg className="w-4 h-4 text-sky-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                <div><div className="text-xs font-bold text-sky-600 uppercase tracking-wider mb-1">Our solution</div><p className="text-sm text-gray-600 leading-relaxed">{c.solution}</p></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Use cases */}
      <div className="bg-gray-50 border-y border-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8" style={{ fontFamily: "'Georgia', serif" }}>What we build for education</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: "🎓", title: "Digital learning platforms", desc: "Cloud-native LMS infrastructure and EdTech platforms that scale to hundreds of thousands of concurrent learners." },
              { icon: "📊", title: "Student analytics & AI", desc: "Early intervention analytics, personalised learning recommendations, and course completion prediction models." },
              { icon: "🔒", title: "Secure research environments", desc: "Secure cloud environments for academic research with data governance, access controls, and compliance documentation." },
            ].map((u) => (
              <div key={u.title} className="bg-white rounded-xl border border-gray-100 p-6 text-center shadow-sm">
                <div className="text-3xl mb-3">{u.icon}</div>
                <h3 className="text-sm font-bold text-gray-900 mb-2">{u.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-sky-700 rounded-2xl px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3" style={{ fontFamily: "'Georgia', serif" }}>Build a better digital campus</h2>
            <p className="text-sky-100 text-sm leading-relaxed">Talk to CloudFirst about your institution's cloud strategy — from Google Workspace rollout to full cloud migration and managed operations.</p>
          </div>
          <div className="flex flex-col gap-3 flex-shrink-0">
            <button onClick={() => navigate("/contact")} className="px-7 py-3 bg-white hover:bg-sky-50 text-sky-700 text-sm font-bold rounded-lg transition-colors whitespace-nowrap">Talk to a specialist →</button>
            <button onClick={() => navigate(-1)} className="text-xs text-sky-200 hover:text-white transition-colors text-center">← Back</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationIndustry;
