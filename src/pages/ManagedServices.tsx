import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";

const cloudPlatforms = [
  {
    name: "AWS Managed Services",
    logo: "/aws_advance partner logo.png",
    alt: "AWS Advanced Partner",
    path: "/cloud-platforms/aws",
    badge: "text-amber-700 bg-amber-50 border-amber-200",
    card: "bg-white border-amber-200",
    description: "Landing zones, migrations, monitoring, cost optimisation, and security hardening for AWS environments.",
  },
  {
    name: "Azure Managed Services",
    logo: "/microsoft_new_logo.png",
    alt: "Microsoft Solutions Partner",
    path: "/cloud-platforms/azure",
    badge: "text-sky-700 bg-sky-50 border-sky-200",
    card: "bg-white border-sky-200",
    description: "Azure foundations, governance, operational excellence, incident response, and compliance-led delivery.",
  },
  {
    name: "Google Cloud Managed Services",
    logo: "/logo/new_GCI.png",
    alt: "Google Cloud Partner",
    path: "/cloud-platforms/gcp",
    badge: "text-emerald-700 bg-emerald-50 border-emerald-200",
    card: "bg-white border-emerald-200",
    description: "GCP architecture, migrations, SRE practices, security posture, and continuous optimisation.",
  },
];

const ManagedServices: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f7f8fa]">
      <Navbar />

      {/* Hero — centered, navy/teal */}
      <div className="w-full bg-[#0d1b4b] relative overflow-hidden pt-16 lg:pt-20">
        <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(ellipse at 60% 40%, #0891b2 0%, transparent 60%)" }} />
        <div className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center relative z-10">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-teal-300 border border-teal-400/30 bg-teal-400/10 rounded-full px-3 py-1 mb-5">Managed Services</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5" style={{ fontFamily: "'Georgia', serif" }}>
            Managed services that<br />
            <span className="text-teal-400">scale with your business</span>
          </h1>
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Proactive monitoring, regular reviews, and certified cloud engineers — delivered with an operating model that fits your team and workloads.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-10">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-gray-600">Cloud platforms</span>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>
              Managed services across AWS, Azure &amp; Google Cloud
            </h2>
          </div>
          <p className="text-gray-500 text-sm max-w-md">
            Explore how we deliver reliable, secure, and cost-optimised operations across your preferred cloud platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cloudPlatforms.map((p) => (
            <div key={p.name} className={`rounded-2xl border-2 p-6 flex flex-col ${p.card}`}>
              <div className={`inline-flex items-center gap-2 self-start text-[11px] font-bold uppercase tracking-wider border rounded px-2.5 py-1 mb-5 ${p.badge}`}>
                <span>Managed</span>
              </div>
              <div className="h-14 w-full bg-white rounded-xl border border-gray-100 flex items-center justify-center px-4 mb-5 overflow-hidden">
                <img src={p.logo} alt={p.alt} className="h-10 w-auto object-contain" loading="lazy" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: "'Georgia', serif" }}>{p.name}</h3>
              <p className="text-sm text-gray-600 leading-relaxed flex-1">{p.description}</p>
              <button
                type="button"
                onClick={() => navigate(p.path)}
                className="mt-6 w-full py-3 rounded-lg text-sm font-bold transition-colors bg-gray-900 hover:bg-gray-800 text-white"
              >
                Explore services →
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* What's always included */}
      <div className="bg-white border-y border-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: "'Georgia', serif" }}>Included in every engagement</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: "☁️", title: "Multi-cloud support", desc: "AWS, Azure, and GCP — managed under a single service agreement." },
              { icon: "📋", title: "Monthly reporting", desc: "Detailed ops, cost, and security reports delivered every month." },
              { icon: "🔐", title: "Security baseline", desc: "CIS benchmark compliance checks and monthly security posture reviews." },
              { icon: "🤝", title: "Customer success", desc: "A dedicated customer success manager for strategic planning and escalation." },
            ].map((item) => (
              <div key={item.title} className="text-center p-5">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-sm font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-[#0d1b4b] rounded-2xl px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(ellipse at 90% 50%, #0891b2 0%, transparent 60%)" }} />
          <div className="relative z-10 max-w-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3" style={{ fontFamily: "'Georgia', serif" }}>Not sure which tier is right?</h2>
            <p className="text-white/60 text-sm leading-relaxed">Talk to us. We'll assess your environment, understand your team's capacity, and recommend the right level of managed support.</p>
          </div>
          <div className="relative z-10 flex flex-col gap-3 flex-shrink-0">
            <button onClick={() => navigate("/contact")} className="px-7 py-3 bg-teal-400 hover:bg-teal-300 text-[#0d1b4b] text-sm font-bold rounded-lg transition-colors whitespace-nowrap">Talk to us →</button>
            <button onClick={() => navigate(-1)} className="text-xs text-white/40 hover:text-white/70 transition-colors text-center">← Back</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagedServices;
