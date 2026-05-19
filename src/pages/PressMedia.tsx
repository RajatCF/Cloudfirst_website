import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";

const pressItems = [
  {
    type: "Award",
    date: "Feb 2026",
    title: "CloudFirst Technology wins Cloud Solutions Provider of the Year at Go Global Awards 2025",
    summary: "Coverage of CloudFirst’s recognition at the Go Global Awards 2025.",
    outlet: "ANI News",
    href: "https://www.aninews.in/news/business/cloudfirst-technology-wins-cloud-solutions-provider-of-the-year-at-go-global-awards-202520260211182923/",
  },
  {
    type: "Award",
    date: "Feb 2026",
    title: "CloudFirst Technology wins Cloud Solutions Provider of the Year at Go Global Awards 2025",
    summary: "Coverage of CloudFirst’s recognition at the Go Global Awards 2025.",
    outlet: "The Wire",
    href: "https://thewire.in/ptiprnews/cloudfirst-technology-wins-cloud-solutions-provider-of-the-year-at-go-global-awards-2025",
  },
  {
    type: "Press release",
    date: "Nov 2024",
    title: "CloudFirst Technology Private Limited announces the launch of CloudFirst AI Factory",
    summary: "Announcement of the CloudFirst AI Factory launch and its focus on real-time AI solutions.",
    outlet: "Business Standard",
    href: "https://www.business-standard.com/content/specials/cloudfirst-technology-private-limited-announces-the-launch-of-cloudfirst-ai-factory-124110601801_1.html",
  },
  {
    type: "Media mention",
    date: "2024",
    title: "Visionary companies in India",
    summary: "Brand Connect feature highlighting CloudFirst in Forbes India.",
    outlet: "Forbes India",
    href: "https://www.forbesindia.com/article/upfront/brand-connect/visionary-companies-in-india/2988312/1",
  },
  {
    type: "Press release",
    date: "2025",
    title: "CloudFirst Technology Private Limited nominated for Go Global Awards 2025",
    summary: "Coverage of CloudFirst’s nomination for the Go Global Awards 2025.",
    outlet: "International Trade Council",
    href: "https://tradecouncil.org/cloudfirst-technology-private-limited-nominated-for-go-global-awards-2025/",
  },
];

const typeColours: Record<string, string> = {
  "Press release": "text-blue-700 bg-blue-50 border-blue-100",
  "Media mention": "text-purple-700 bg-purple-50 border-purple-100",
  "Award": "text-amber-700 bg-amber-50 border-amber-100",
};

const getDomain = (url: string) => {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
};

const PressMedia: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f7f8fa]">
      <Navbar />

      {/* Hero */}
      <div className="relative overflow-hidden border-b border-gray-100 pt-16 lg:pt-20 bg-gradient-to-br from-sky-50 via-white to-blue-50">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(ellipse at 15% 30%, rgba(56,189,248,0.32) 0%, transparent 55%), radial-gradient(ellipse at 85% 25%, rgba(59,130,246,0.22) 0%, transparent 55%), radial-gradient(ellipse at 80% 85%, rgba(14,165,233,0.18) 0%, transparent 60%)",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-14 flex flex-col lg:flex-row items-end gap-8">
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
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:border-gray-200 hover:shadow-md transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-28 h-20 rounded-xl border border-gray-100 bg-gray-50 flex items-center justify-center overflow-hidden flex-shrink-0">
                    <img
                      src={`https://logo.clearbit.com/${getDomain(item.href)}`}
                      alt={item.outlet}
                      className="w-full h-full object-contain p-3"
                      loading="lazy"
                      onError={(e) => {
                        const domain = getDomain(item.href);
                        e.currentTarget.src = domain ? `https://www.google.com/s2/favicons?domain=${domain}&sz=256` : "";
                      }}
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                      <span className={`text-[10px] font-bold border rounded px-2.5 py-1 uppercase tracking-wider ${typeColours[item.type]}`}>{item.type}</span>
                      <span className="text-xs text-gray-400">{item.date}</span>
                      <span className="text-xs text-gray-300">·</span>
                      <span className="text-xs text-gray-400">{item.outlet}</span>
                    </div>
                    <h3 className="text-base font-bold text-gray-900 mb-2" style={{ fontFamily: "'Georgia', serif" }}>{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.summary}</p>
                  </div>
                </div>

                <span className="flex-shrink-0 text-xs text-blue-600 hover:text-blue-800 font-semibold transition-colors whitespace-nowrap self-start">
                  Read more →
                </span>
              </div>
            </a>
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
