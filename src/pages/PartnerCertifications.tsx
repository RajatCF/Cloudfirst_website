import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";

const certs = [
  { vendor: "AWS", name: "AWS Premier Consulting Partner", badge: "bg-[#FF9900]/10 border-[#FF9900]/30 text-[#b36a00]", desc: "Highest tier of the AWS Partner Network — recognising advanced technical capability and customer success track record.", specialisms: ["Migration", "DevOps", "Well-Architected"] },
  { vendor: "Google Cloud", name: "Google Cloud Premier Partner", badge: "bg-blue-50 border-blue-200 text-blue-700", desc: "Google Cloud's top-tier partner designation — awarded for Google Cloud certifications, customer outcomes, and technical expertise.", specialisms: ["Infrastructure", "Google Workspace", "Data & AI"] },
  { vendor: "Microsoft", name: "Microsoft Solutions Partner", badge: "bg-[#00a4ef]/10 border-[#00a4ef]/30 text-[#006ba6]", desc: "Microsoft Solutions Partner for Infrastructure and Digital & App Innovation — with Azure Expert MSP designation.", specialisms: ["Azure", "Microsoft 365", "Security"] },
  { vendor: "VMware", name: "VMware Cloud Verified Partner", badge: "bg-gray-50 border-gray-200 text-gray-700", desc: "Verified capability in VMware Cloud deployments — including VMware on AWS and vSphere-based cloud migrations.", specialisms: ["Cloud Migration", "VMC on AWS"] },
];

const individualCerts = [
  { vendor: "AWS", count: "45+", colour: "text-[#FF9900]" },
  { vendor: "Google Cloud", count: "30+", colour: "text-blue-600" },
  { vendor: "Azure", count: "25+", colour: "text-[#00a4ef]" },
  { vendor: "Kubernetes", count: "12+", colour: "text-purple-600" },
  { vendor: "Security", count: "8+", colour: "text-red-600" },
  { vendor: "FinOps", count: "6+", colour: "text-green-600" },
];

const PartnerCertifications: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f7f8fa]">
      <Navbar />

      {/* Hero */}
      <div className="bg-white border-b border-gray-100 pt-16 lg:pt-20">
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-600 border border-blue-200 bg-blue-50 rounded-full px-3 py-1 mb-4">Resources</span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4" style={{ fontFamily: "'Georgia', serif" }}>Partner certifications</h1>
          <p className="text-gray-500 text-lg leading-relaxed max-w-2xl">CloudFirst holds the highest partner tier with AWS, Google Cloud, and Microsoft — backed by 120+ individual certifications across our engineering teams.</p>
        </div>
      </div>

      {/* Partner tier cards */}
      <div className="max-w-6xl mx-auto px-6 py-14">
        <h2 className="text-xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Georgia', serif" }}>Cloud vendor partnerships</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
          {certs.map((c) => (
            <div key={c.name} className={`bg-white rounded-2xl border-2 p-6 ${c.badge.includes("border-[#FF9900]") ? "border-[#FF9900]/30" : c.badge.includes("border-blue") ? "border-blue-200" : c.badge.includes("border-[#00a4ef]") ? "border-[#00a4ef]/30" : "border-gray-200"} shadow-sm hover:shadow-md transition-all`}>
              <div className={`inline-block text-[11px] font-bold uppercase tracking-wider border rounded-full px-3 py-1 mb-4 ${c.badge}`}>{c.vendor}</div>
              <h3 className="text-base font-bold text-gray-900 mb-2" style={{ fontFamily: "'Georgia', serif" }}>{c.name}</h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-4">{c.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {c.specialisms.map(s => <span key={s} className="text-[10px] text-gray-500 bg-gray-100 rounded px-2 py-0.5">{s}</span>)}
              </div>
            </div>
          ))}
        </div>

        {/* Individual certs */}
        <h2 className="text-xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Georgia', serif" }}>Individual engineer certifications</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-14">
          {individualCerts.map((ic) => (
            <div key={ic.vendor} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 text-center hover:border-blue-100 hover:shadow-md transition-all">
              <div className={`text-2xl font-bold mb-1 ${ic.colour}`} style={{ fontFamily: "'Georgia', serif" }}>{ic.count}</div>
              <div className="text-xs text-gray-500">{ic.vendor}</div>
            </div>
          ))}
        </div>

        {/* Why it matters */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-5" style={{ fontFamily: "'Georgia', serif" }}>Why our partner status matters to you</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Faster resolutions", desc: "Premier partner status gives us direct escalation paths to AWS, Google, and Microsoft engineering teams — meaning your issues get resolved faster." },
              { title: "Exclusive roadmap access", desc: "We participate in private betas and get early access to new services — so you benefit from the latest cloud capabilities before they're generally available." },
              { title: "Better commercial terms", desc: "Our partner tier unlocks customer discount programmes, marketplace credits, and co-sell agreements that translate to direct cost savings for your organisation." },
            ].map(item => (
              <div key={item.title}>
                <h3 className="text-sm font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="bg-blue-600 rounded-2xl px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-lg">
            <h2 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "'Georgia', serif" }}>Work with a certified cloud partner</h2>
            <p className="text-blue-100 text-sm leading-relaxed">Our certifications reflect real expertise. Let's put them to work for your cloud environment.</p>
          </div>
          <div className="flex flex-col gap-3 flex-shrink-0">
            <button onClick={() => navigate("/contact")} className="px-7 py-3 bg-white hover:bg-blue-50 text-blue-700 text-sm font-bold rounded-lg transition-colors whitespace-nowrap">Talk to a certified expert →</button>
            <button onClick={() => navigate(-1)} className="text-xs text-blue-200 hover:text-white transition-colors text-center">← Back</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerCertifications;
