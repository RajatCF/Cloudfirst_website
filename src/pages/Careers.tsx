import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";

const values = [
  { icon: "🚀", title: "Deep technical craft", desc: "We care about doing things properly. Engineers here grow faster because they work on hard problems with smart people." },
  { icon: "🌍", title: "Global reach, human scale", desc: "We work with enterprise customers globally — but we're still small enough that your work has visible impact on the business." },
  { icon: "🧪", title: "Learn constantly", desc: "Generous training budget, certification support, and time set aside for learning. We expect everyone to grow every year." },
  { icon: "🤝", title: "Ownership culture", desc: "No micromanagement. You own your work, your customer relationships, and your professional development." },
];

const openRoles = [
  { team: "Engineering", title: "Senior Cloud Infrastructure Engineer", location: "Remote (UK/India)", type: "Full-time" },
  { team: "Engineering", title: "DevOps / Platform Engineer", location: "Remote (UK/India)", type: "Full-time" },
  { team: "Engineering", title: "Cloud Security Engineer", location: "Hybrid — London", type: "Full-time" },
  { team: "Architecture", title: "Principal Cloud Architect", location: "Hybrid — London or Remote", type: "Full-time" },
  { team: "Commercial", title: "Cloud Solutions Consultant", location: "Hybrid — London", type: "Full-time" },
];

const Careers: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero — light, human, image split */}
      <div className="bg-white pt-16 lg:pt-20 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-14 flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-gray-600 border border-gray-200 bg-gray-100 rounded-full px-3 py-1 mb-4">Company</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5" style={{ fontFamily: "'Georgia', serif" }}>
              Build the future of<br />
              <span className="text-blue-600">enterprise cloud</span>
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-xl">We're a team of cloud engineers, architects, and consultants who care deeply about craft. If you want to work on interesting problems with customers who are serious about their cloud journey — this is the place.</p>
            <div className="flex gap-3">
              <button onClick={() => navigate("/current-openings")} className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-lg transition-colors">View open roles →</button>
              <button onClick={() => navigate("/contact")} className="px-6 py-3 border border-gray-200 hover:border-gray-400 text-gray-700 text-sm font-semibold rounded-lg transition-colors">Unsolicited application</button>
            </div>
          </div>
          <div className="flex-1">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" alt="Team" className="rounded-2xl shadow-xl w-full object-cover aspect-video" />
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-gray-50 border-b border-gray-100 py-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[{ v: "80+", l: "Engineers globally" }, { v: "UK & India", l: "Our hubs" }, { v: "4.7/5", l: "Glassdoor rating" }, { v: "Remote first", l: "Work style" }].map(s => (
            <div key={s.l}><div className="text-2xl font-bold text-gray-900 mb-1" style={{ fontFamily: "'Georgia', serif" }}>{s.v}</div><div className="text-xs text-gray-400">{s.l}</div></div>
          ))}
        </div>
      </div>

      {/* Values */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-10 text-center" style={{ fontFamily: "'Georgia', serif" }}>What it's like to work here</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v) => (
            <div key={v.title} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:border-blue-100 hover:shadow-md transition-all">
              <div className="text-2xl mb-3">{v.icon}</div>
              <h3 className="text-sm font-bold text-gray-900 mb-2">{v.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Open roles */}
      <div className="bg-gray-50 border-y border-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>Current openings</h2>
            <button onClick={() => navigate("/current-openings")} className="text-sm text-blue-600 hover:text-blue-800 font-semibold">View all →</button>
          </div>
          <div className="space-y-3">
            {openRoles.map((role) => (
              <div key={role.title} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-blue-200 hover:shadow-md transition-all">
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-bold text-blue-600 bg-blue-50 border border-blue-100 rounded px-2 py-0.5 uppercase tracking-wider flex-shrink-0">{role.team}</span>
                  <div>
                    <div className="text-sm font-bold text-gray-900">{role.title}</div>
                    <div className="text-xs text-gray-400 mt-0.5">{role.location} · {role.type}</div>
                  </div>
                </div>
                <button onClick={() => navigate("/contact")} className="flex-shrink-0 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg transition-colors whitespace-nowrap">Apply →</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="rounded-2xl overflow-hidden relative">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80" alt="Office" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-blue-900/85" />
          <div className="relative z-10 px-8 py-14 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-lg">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3" style={{ fontFamily: "'Georgia', serif" }}>Don't see your role? Reach out anyway</h2>
              <p className="text-blue-100 text-sm leading-relaxed">We're always interested in exceptional cloud engineers, architects, and consultants. Send us your background and tell us where you want to go.</p>
            </div>
            <div className="flex flex-col gap-3 flex-shrink-0">
              <button onClick={() => navigate("/contact")} className="px-7 py-3 bg-white hover:bg-blue-50 text-blue-700 text-sm font-bold rounded-lg transition-colors whitespace-nowrap">Get in touch →</button>
              <button onClick={() => navigate(-1)} className="text-xs text-blue-200 hover:text-white transition-colors text-center">← Back</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
