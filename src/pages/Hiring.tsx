import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";

const tracks = [
  {
    track: "Cloud Engineering",
    icon: "⚙️",
    colour: "bg-blue-50 border-blue-200",
    roles: [
      { title: "Senior Cloud Infrastructure Engineer", location: "Remote UK/India", open: true },
      { title: "DevOps / Platform Engineer", location: "Remote UK/India", open: true },
      { title: "Cloud Security Engineer", location: "Hybrid — London", open: true },
      { title: "Site Reliability Engineer", location: "Remote", open: false },
    ],
  },
  {
    track: "Architecture & Consulting",
    icon: "🏗️",
    colour: "bg-purple-50 border-purple-200",
    roles: [
      { title: "Principal Cloud Architect", location: "Hybrid — London", open: true },
      { title: "Cloud Solutions Architect", location: "Remote UK/India", open: true },
      { title: "Cloud Solutions Consultant", location: "Hybrid — London", open: true },
    ],
  },
  {
    track: "Operations & Support",
    icon: "📡",
    colour: "bg-teal-50 border-teal-200",
    roles: [
      { title: "NOC Engineer (24/7)", location: "India", open: true },
      { title: "Cloud Operations Engineer", location: "Remote India", open: false },
    ],
  },
  {
    track: "Commercial & Strategy",
    icon: "💼",
    colour: "bg-amber-50 border-amber-200",
    roles: [
      { title: "Account Executive — Enterprise", location: "London", open: true },
      { title: "Pre-sales Engineer", location: "Hybrid — London", open: false },
    ],
  },
];

const Hiring: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f7f8fa]">
      <Navbar />

      {/* Hero */}
      <div className="bg-white border-b border-gray-100 pt-16 lg:pt-20">
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-gray-600 border border-gray-200 bg-gray-100 rounded-full px-3 py-1 mb-4">Company</span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4" style={{ fontFamily: "'Georgia', serif" }}>We're hiring cloud talent</h1>
          <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mb-8">CloudFirst is growing across engineering, architecture, and commercial tracks. We hire people who are genuinely passionate about cloud, move fast, and take ownership.</p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-blue-50 border border-blue-100 rounded-xl px-5 py-3 text-center">
              <div className="text-xl font-bold text-blue-700" style={{ fontFamily: "'Georgia', serif" }}>9</div>
              <div className="text-xs text-gray-500">Open roles</div>
            </div>
            <div className="bg-green-50 border border-green-100 rounded-xl px-5 py-3 text-center">
              <div className="text-xl font-bold text-green-700" style={{ fontFamily: "'Georgia', serif" }}>4</div>
              <div className="text-xs text-gray-500">Teams hiring</div>
            </div>
            <div className="bg-purple-50 border border-purple-100 rounded-xl px-5 py-3 text-center">
              <div className="text-xl font-bold text-purple-700" style={{ fontFamily: "'Georgia', serif" }}>Remote</div>
              <div className="text-xs text-gray-500">Friendly policy</div>
            </div>
          </div>
        </div>
      </div>

      {/* Role tracks */}
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tracks.map((track) => (
            <div key={track.track} className={`rounded-2xl border-2 p-6 ${track.colour}`}>
              <div className="flex items-center gap-2 mb-5">
                <span className="text-xl">{track.icon}</span>
                <h2 className="text-base font-bold text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>{track.track}</h2>
              </div>
              <div className="space-y-2.5">
                {track.roles.map((role) => (
                  <div key={role.title} className="flex items-center justify-between bg-white rounded-xl border border-gray-100 px-4 py-3">
                    <div>
                      <div className="text-sm font-semibold text-gray-900">{role.title}</div>
                      <div className="text-xs text-gray-400 mt-0.5">{role.location}</div>
                    </div>
                    {role.open ? (
                      <button onClick={() => navigate("/contact")} className="text-xs px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors whitespace-nowrap">Apply</button>
                    ) : (
                      <span className="text-[10px] text-gray-400 bg-gray-100 rounded px-2 py-1">Closed</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Process */}
      <div className="bg-white border-y border-gray-100 py-14">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: "'Georgia', serif" }}>Our hiring process</h2>
          <div className="flex flex-col md:flex-row gap-4">
            {[
              { n: "01", t: "Application review", d: "We review every application within 5 business days — no automated filtering." },
              { n: "02", t: "Intro call", d: "30-min call with a hiring manager to discuss your background and the role." },
              { n: "03", t: "Technical assessment", d: "A practical, relevant technical task — no trick questions or algorithm puzzles." },
              { n: "04", t: "Team interview", d: "Meet the team you'd be working with. We want you to evaluate us too." },
            ].map((step) => (
              <div key={step.n} className="flex-1 text-center p-5 bg-gray-50 rounded-xl">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center mx-auto mb-3">{step.n}</div>
                <h3 className="text-sm font-bold text-gray-900 mb-1">{step.t}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="bg-gray-900 rounded-2xl px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-lg">
            <h2 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "'Georgia', serif" }}>Not finding the right fit? Tell us anyway</h2>
            <p className="text-white/60 text-sm leading-relaxed">We're always interested in meeting strong cloud practitioners. Send us your CV and the kind of work you want to do.</p>
          </div>
          <div className="flex flex-col gap-3 flex-shrink-0">
            <button onClick={() => navigate("/contact")} className="px-7 py-3 bg-white hover:bg-gray-100 text-gray-900 text-sm font-bold rounded-lg transition-colors whitespace-nowrap">Send speculative application →</button>
            <button onClick={() => navigate(-1)} className="text-xs text-white/40 hover:text-white/70 transition-colors text-center">← Back</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hiring;
