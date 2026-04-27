import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";

const partners = [
  { name: "Amazon Web Services", tier: "Premier Partner", logo: "☁️", color: "border-[#FF9900]/30 bg-[#FF9900]/5", tierColor: "text-[#b36a00] bg-[#FF9900]/10", desc: "CloudFirst is an AWS Premier Consulting Partner — the highest tier — with specialisms in migration, DevOps, and Well-Architected Framework reviews." },
  { name: "Google Cloud", tier: "Premier Partner", logo: "🌐", color: "border-blue-200 bg-blue-50/50", tierColor: "text-blue-700 bg-blue-50", desc: "Google Cloud Premier Partner with specialisms across Google Workspace, GCP Infrastructure, and Data & AI." },
  { name: "Microsoft Azure", tier: "Solutions Partner", logo: "🔷", color: "border-[#00a4ef]/30 bg-[#00a4ef]/5", tierColor: "text-[#006ba6] bg-[#00a4ef]/10", desc: "Microsoft Solutions Partner for Infrastructure and Digital & App Innovation with Azure Expert MSP designation." },
  { name: "HashiCorp / Terraform", tier: "Technology Partner", logo: "🟣", color: "border-purple-200 bg-purple-50/50", tierColor: "text-purple-700 bg-purple-50", desc: "Official HashiCorp technology partner — with certified practitioners delivering IaC at enterprise scale." },
  { name: "Datadog", tier: "Technology Partner", logo: "📊", color: "border-violet-200 bg-violet-50/50", tierColor: "text-violet-700 bg-violet-50", desc: "Datadog partner for observability — deploying full-stack monitoring, APM, and security signals for CloudFirst customers." },
  { name: "Palo Alto Networks", tier: "MSSP Partner", logo: "🛡️", color: "border-red-200 bg-red-50/50", tierColor: "text-red-700 bg-red-50", desc: "Prisma Cloud MSSP partner — providing cloud-native security posture management and workload protection." },
];

const OurPartners: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f7f8fa]">
      <Navbar />

      {/* Hero */}
      <div className="bg-white border-b border-gray-100 pt-16 lg:pt-20">
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-14 flex flex-col lg:flex-row items-end gap-8">
          <div className="flex-1">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-gray-600 border border-gray-200 bg-gray-100 rounded-full px-3 py-1 mb-4">Company</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4" style={{ fontFamily: "'Georgia', serif" }}>Our technology partners</h1>
            <p className="text-gray-500 text-lg leading-relaxed max-w-2xl">CloudFirst's partner ecosystem spans the world's leading cloud platforms, security vendors, and devops tooling — giving our customers access to the best technology and commercial terms in the market.</p>
          </div>
          <div className="flex-shrink-0 text-right">
            <div className="text-3xl font-bold text-gray-900 mb-0.5" style={{ fontFamily: "'Georgia', serif" }}>6+</div>
            <div className="text-xs text-gray-400">Technology partners</div>
          </div>
        </div>
      </div>

      {/* Partner cards */}
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {partners.map((p) => (
            <div key={p.name} className={`rounded-2xl border-2 p-6 ${p.color} bg-white hover:shadow-md transition-all`}>
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{p.logo}</span>
                <span className={`text-[10px] font-bold uppercase tracking-wider rounded-full px-2.5 py-1 ${p.tierColor}`}>{p.tier}</span>
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2" style={{ fontFamily: "'Georgia', serif" }}>{p.name}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Partner benefits */}
      <div className="bg-white border-y border-gray-100 py-14">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: "'Georgia', serif" }}>How our partnerships benefit customers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: "💰", title: "Commercial savings", desc: "Partner discounts, marketplace credits, and co-funding programmes reduce your net cloud spend." },
              { icon: "📞", title: "Escalation access", desc: "Direct lines to vendor engineering teams for rapid resolution of critical issues." },
              { icon: "🔬", title: "Beta access", desc: "Early access to unreleased services lets you innovate ahead of the market." },
              { icon: "🎓", title: "Training credits", desc: "Vendor-funded training credits for your internal teams through CloudFirst's partner allocations." },
            ].map(item => (
              <div key={item.title} className="text-center p-5 rounded-xl border border-gray-50 hover:border-gray-100 hover:shadow-sm transition-all">
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="text-sm font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="bg-gray-900 rounded-2xl px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-lg">
            <h2 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "'Georgia', serif" }}>Become a CloudFirst partner</h2>
            <p className="text-white/60 text-sm leading-relaxed">We work with ISVs, system integrators, and cloud technology vendors to bring better solutions to our customers.</p>
          </div>
          <div className="flex flex-col gap-3 flex-shrink-0">
            <button onClick={() => navigate("/contact")} className="px-7 py-3 bg-white hover:bg-gray-100 text-gray-900 text-sm font-bold rounded-lg transition-colors whitespace-nowrap">Partner enquiry →</button>
            <button onClick={() => navigate(-1)} className="text-xs text-white/40 hover:text-white/70 transition-colors text-center">← Back</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
