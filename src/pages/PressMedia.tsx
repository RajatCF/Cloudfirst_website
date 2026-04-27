import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";

const pressItems = [
  { type: "Press release", date: "Dec 2024", title: "CloudFirst achieves AWS Premier Partner status for second consecutive year", summary: "CloudFirst has been re-designated as an AWS Premier Consulting Partner — recognising continued growth in certified engineers, customer outcomes, and technical innovation.", outlet: "CloudFirst" },
  { type: "Media mention", date: "Nov 2024", title: "The Register: How BFSI companies are approaching cloud compliance in 2025", summary: "CloudFirst's Head of Architecture was featured in The Register's cloud compliance feature, sharing perspectives on DORA readiness and PCI DSS in cloud-native environments.", outlet: "The Register" },
  { type: "Award", date: "Oct 2024", title: "CloudFirst named in Clutch Top Cloud Consulting Companies 2024", summary: "Based on client reviews and delivery track record, CloudFirst was named in Clutch's global list of top cloud consulting companies for 2024.", outlet: "Clutch" },
  { type: "Press release", date: "Sep 2024", title: "CloudFirst opens new delivery centre in Bengaluru, India", summary: "CloudFirst has expanded its operations with a new 80-seat delivery centre in Bengaluru, increasing 24/7 NOC and managed operations capacity for customers globally.", outlet: "CloudFirst" },
  { type: "Media mention", date: "Jul 2024", title: "Computer Weekly: Cloud migration — what separates the successes from the failures", summary: "CloudFirst's CTO contributed to Computer Weekly's deep-dive on cloud migration success factors — drawing on 6 years of customer migration data.", outlet: "Computer Weekly" },
];

const typeColours: Record<string, string> = {
  "Press release": "text-blue-700 bg-blue-50 border-blue-100",
  "Media mention": "text-purple-700 bg-purple-50 border-purple-100",
  "Award": "text-amber-700 bg-amber-50 border-amber-100",
};

const PressMedia: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f7f8fa]">
      <Navbar />

      {/* Hero */}
      <div className="bg-white border-b border-gray-100 pt-16 lg:pt-20">
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-14 flex flex-col lg:flex-row items-end gap-8">
          <div className="flex-1">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-gray-600 border border-gray-200 bg-gray-100 rounded-full px-3 py-1 mb-4">Company</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4" style={{ fontFamily: "'Georgia', serif" }}>Press & media</h1>
            <p className="text-gray-500 text-lg leading-relaxed max-w-2xl">CloudFirst news, press releases, media appearances, and company announcements.</p>
          </div>
          <div className="flex-shrink-0">
            <button onClick={() => navigate("/contact")} className="px-5 py-2.5 bg-gray-900 hover:bg-gray-800 text-white text-sm font-bold rounded-lg transition-colors">Media enquiries →</button>
          </div>
        </div>
      </div>

      {/* Press items */}
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="space-y-4">
          {pressItems.map((item) => (
            <div key={item.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:border-gray-200 hover:shadow-md transition-all">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-[10px] font-bold border rounded px-2.5 py-1 uppercase tracking-wider ${typeColours[item.type]}`}>{item.type}</span>
                    <span className="text-xs text-gray-400">{item.date}</span>
                    <span className="text-xs text-gray-300">·</span>
                    <span className="text-xs text-gray-400">{item.outlet}</span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2" style={{ fontFamily: "'Georgia', serif" }}>{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.summary}</p>
                </div>
                <button className="flex-shrink-0 text-xs text-blue-600 hover:text-blue-800 font-semibold transition-colors whitespace-nowrap self-start">Read more →</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Media kit */}
      <div className="bg-white border-y border-gray-100 py-14">
        <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Georgia', serif" }}>Media kit</h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-lg">Journalists and media professionals can download our official logos, brand assets, executive headshots, and company fact sheet — all in one pack.</p>
            <button onClick={() => navigate("/contact")} className="px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white text-sm font-bold rounded-lg transition-colors">Request media kit →</button>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-3">
            {["Company logos", "Executive headshots", "Brand guidelines", "Fact sheet"].map(item => (
              <div key={item} className="bg-gray-50 rounded-xl border border-gray-100 p-4 text-center">
                <div className="text-xs font-semibold text-gray-700">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="bg-gray-900 rounded-2xl px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-lg">
            <h2 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "'Georgia', serif" }}>Press & media enquiries</h2>
            <p className="text-white/60 text-sm leading-relaxed">For interview requests, comment opportunities, or press releases, please get in touch with our communications team.</p>
          </div>
          <div className="flex flex-col gap-3 flex-shrink-0">
            <button onClick={() => navigate("/contact")} className="px-7 py-3 bg-white hover:bg-gray-100 text-gray-900 text-sm font-bold rounded-lg transition-colors whitespace-nowrap">Contact press team →</button>
            <button onClick={() => navigate(-1)} className="text-xs text-white/40 hover:text-white/70 transition-colors text-center">← Back</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressMedia;
