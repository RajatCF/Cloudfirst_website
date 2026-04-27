import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";

const networkServices = [
  { title: "VPC Design & Segmentation", tag: "Networking", desc: "Multi-tier VPC architectures with public, private, and isolated subnets. Transit gateway hub-and-spoke for multi-account connectivity. Proper CIDR planning that scales." },
  { title: "Private Connectivity", tag: "Connectivity", desc: "PrivateLink, VPC peering, and dedicated interconnects to keep traffic off the public internet. Zero-trust network access (ZTNA) for hybrid and remote teams." },
  { title: "Global Load Balancing", tag: "Load Balancing", desc: "Layer 4 and Layer 7 load balancers with health checks, sticky sessions, and path-based routing. Cross-region active-active load balancing for global availability." },
  { title: "CDN Architecture", tag: "CDN", desc: "CloudFront, Cloudflare, or Fastly integration with origin shield, custom cache policies, signed URLs, and real-time analytics for content delivery at the edge." },
  { title: "DDoS Protection & WAF", tag: "Security", desc: "AWS Shield Advanced, Azure DDoS Protection, or Cloud Armor with custom WAF rules — geo-blocking, rate limiting, and bot mitigation built in." },
  { title: "DNS & Traffic Management", tag: "DNS", desc: "Route 53 or Azure Traffic Manager with health-check routing, latency-based routing, failover records, and private DNS zones for internal services." },
];

const NetworkingCdn: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f7f8fa]">
      <Navbar />

      {/* Hero — dark with sky blue accent */}
      <div className="w-full bg-[#0c1a2e] relative overflow-hidden pt-16 lg:pt-20">
        <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(ellipse at 75% 40%, #0284c7 0%, transparent 55%), radial-gradient(ellipse at 10% 80%, #0f172a 0%, transparent 50%)" }} />
        {/* Abstract network grid */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(#38bdf8 1px, transparent 1px), linear-gradient(90deg, #38bdf8 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="max-w-6xl mx-auto px-6 pt-24 pb-20 relative z-10">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-sky-300 border border-sky-400/30 bg-sky-400/10 rounded-full px-3 py-1 mb-5">Cloud Platforms</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5 max-w-3xl" style={{ fontFamily: "'Georgia', serif" }}>
            Fast, secure global delivery —<br />
            <span className="text-sky-400">from network to edge</span>
          </h1>
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl mb-10">
            Network architecture determines latency, availability, and security for every application you run. CloudFirst designs cloud networks and CDN strategies that keep traffic flowing — globally, reliably, and under your control.
          </p>
          <div className="flex flex-wrap gap-4">
            {[
              { v: "< 50ms", l: "Global edge latency" },
              { v: "99.99%", l: "Network uptime" },
              { v: "3 clouds", l: "AWS · Azure · GCP" },
              { v: "190+", l: "Edge PoPs" },
            ].map((s) => (
              <div key={s.l} className="bg-white/5 border border-white/10 rounded-xl px-5 py-3">
                <span className="text-sky-400 font-bold text-sm">{s.v}</span>
                <span className="text-white/40 text-xs ml-2">{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Georgia', serif" }}>Networking & CDN services</h2>
        <p className="text-gray-400 text-sm mb-10">End-to-end network design from your VPC to the global edge.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {networkServices.map((svc) => (
            <div key={svc.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:border-sky-200 hover:shadow-md transition-all">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-base font-bold text-gray-900">{svc.title}</h3>
                <span className="text-[11px] font-semibold text-sky-700 bg-sky-50 rounded px-2.5 py-1 flex-shrink-0 ml-3">{svc.tag}</span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">{svc.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Architecture visual */}
      <div className="bg-white border-y border-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-5" style={{ fontFamily: "'Georgia', serif" }}>Layers of a well-architected cloud network</h2>
            <div className="space-y-3">
              {[
                { layer: "Edge Layer", color: "bg-sky-500", desc: "CDN PoPs, WAF, DDoS protection, bot management" },
                { layer: "Load Balancing", color: "bg-blue-500", desc: "Global and regional load balancers, SSL termination, routing rules" },
                { layer: "Application Layer", color: "bg-indigo-500", desc: "Public-facing subnets, NAT gateways, internet-facing endpoints" },
                { layer: "Data Layer", color: "bg-violet-500", desc: "Private subnets, database endpoints, internal service mesh" },
                { layer: "Connectivity Layer", color: "bg-purple-500", desc: "VPN, Direct Connect, Transit Gateway, VPC peering" },
              ].map((l) => (
                <div key={l.layer} className="flex items-center gap-4 p-4 rounded-xl bg-gray-50">
                  <div className={`w-3 h-10 rounded-full ${l.color} flex-shrink-0`} />
                  <div>
                    <div className="text-sm font-bold text-gray-900">{l.layer}</div>
                    <div className="text-xs text-gray-500">{l.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80"
              alt="Cloud Networking"
              className="rounded-2xl shadow-xl w-full object-cover aspect-video"
            />
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-[#0c1a2e] rounded-2xl px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(ellipse at 90% 50%, #0284c7 0%, transparent 60%)" }} />
          <div className="relative z-10 max-w-lg">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-sky-400 mb-3">Free review</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3" style={{ fontFamily: "'Georgia', serif" }}>Review your network architecture</h2>
            <p className="text-white/60 text-sm leading-relaxed">We'll assess your current VPC design, identify latency and security issues, and recommend optimisations — at no cost.</p>
          </div>
          <div className="relative z-10 flex flex-col gap-3 flex-shrink-0">
            <button onClick={() => navigate("/contact")} className="px-7 py-3 bg-sky-500 hover:bg-sky-400 text-white text-sm font-bold rounded-lg transition-colors whitespace-nowrap">Book a network review →</button>
            <button onClick={() => navigate(-1)} className="text-xs text-white/40 hover:text-white/70 transition-colors text-center">← Back</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetworkingCdn;
