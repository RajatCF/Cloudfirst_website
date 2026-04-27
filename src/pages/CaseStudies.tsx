import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";

const studies = [
  { industry: "Finance", title: "How a leading NBFC cut cloud costs by 42% while improving uptime", image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80", challenge: "Sprawling AWS account with uncontrolled spend and multiple P1 incidents per month.", result: "42% cost reduction, 99.98% uptime over 12 months, PCI DSS compliance achieved.", tags: ["AWS", "FinOps", "Compliance"] },
  { industry: "Healthcare", title: "HIPAA-compliant cloud platform for a multi-hospital network", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80", challenge: "On-premise EHR infrastructure failing to scale and unable to meet data residency requirements.", result: "Fully HIPAA-compliant GCP deployment, 60% faster EHR load times, zero data residency violations.", tags: ["GCP", "Healthcare", "Compliance"] },
  { industry: "EdTech", title: "100x exam peak scalability for an online learning platform", image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=80", challenge: "Platform crashed during national exams — 500k concurrent users caused total outage.", result: "Auto-scaling architecture handles 1M+ concurrent users with zero downtime during peak.", tags: ["AWS", "Education", "Auto-scaling"] },
  { industry: "Enterprise", title: "Cloud landing zone for a 10,000-employee manufacturing group", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80", challenge: "150 siloed AWS accounts, no governance, shadow IT, and ballooning cloud spend.", result: "Unified landing zone, 35% cost reduction, full tagging compliance, and self-service account vending.", tags: ["AWS", "Enterprise", "Governance"] },
  { industry: "Startup", title: "Series A fintech went from MVP to production in 6 weeks", image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&q=80", challenge: "Scaling from prototype to PCI-compliant production with a 3-person engineering team.", result: "Production-grade GCP deployment, PCI DSS Level 1 readiness, £180K in startup credits secured.", tags: ["GCP", "Startup", "Compliance"] },
  { industry: "Retail", title: "Zero-downtime Black Friday for a UK e-commerce retailer", image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80", challenge: "Previous year's Black Friday caused 4-hour outage costing £2M in lost revenue.", result: "100% availability during peak, 3x traffic handled, no engineering incidents over the 4-day period.", tags: ["AWS", "E-commerce", "Resilience"] },
];

const allTags = ["All", "AWS", "GCP", "Finance", "Healthcare", "Education", "Enterprise", "Startup", "Compliance", "FinOps"];

const CaseStudies: React.FC = () => {
  const navigate = useNavigate();
  const [activeTag, setActiveTag] = useState("All");

  const filtered = activeTag === "All" ? studies : studies.filter(s => s.tags.includes(activeTag));

  return (
    <div className="min-h-screen bg-[#f7f8fa]">
      <Navbar />

      {/* Hero */}
      <div className="bg-white border-b border-gray-100 pt-16 lg:pt-20">
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-600 border border-blue-200 bg-blue-50 rounded-full px-3 py-1 mb-4">Resources</span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4" style={{ fontFamily: "'Georgia', serif" }}>Customer case studies</h1>
          <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mb-8">Real outcomes from real customers. See how CloudFirst has helped organisations across industries cut costs, improve reliability, and accelerate cloud adoption.</p>
          {/* Filter tags */}
          <div className="flex flex-wrap gap-2">
            {allTags.map(tag => (
              <button key={tag} onClick={() => setActiveTag(tag)} className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors ${activeTag === tag ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-500 hover:bg-gray-200"}`}>{tag}</button>
            ))}
          </div>
        </div>
      </div>

      {/* Studies grid */}
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((s) => (
            <div key={s.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md hover:border-blue-200 transition-all flex flex-col">
              <img src={s.image} alt={s.title} className="w-full h-44 object-cover" />
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[11px] font-bold text-blue-600 bg-blue-50 border border-blue-100 rounded px-2 py-0.5 uppercase tracking-wider">{s.industry}</span>
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-3 leading-snug flex-1" style={{ fontFamily: "'Georgia', serif" }}>{s.title}</h3>
                <div className="text-xs text-gray-500 mb-2"><span className="font-semibold text-gray-700">Challenge: </span>{s.challenge}</div>
                <div className="text-xs text-emerald-700 font-medium bg-emerald-50 rounded-lg p-2 mt-auto"><span className="font-bold">Result: </span>{s.result}</div>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {s.tags.map(t => <span key={t} className="text-[10px] text-gray-400 bg-gray-100 rounded px-2 py-0.5">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="bg-blue-600 rounded-2xl px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-lg">
            <h2 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "'Georgia', serif" }}>Want results like these?</h2>
            <p className="text-blue-100 text-sm leading-relaxed">Tell us about your challenge. We'll outline how CloudFirst can help — no commitment required.</p>
          </div>
          <div className="flex flex-col gap-3 flex-shrink-0">
            <button onClick={() => navigate("/contact")} className="px-7 py-3 bg-white hover:bg-blue-50 text-blue-700 text-sm font-bold rounded-lg transition-colors whitespace-nowrap">Talk to us →</button>
            <button onClick={() => navigate(-1)} className="text-xs text-blue-200 hover:text-white transition-colors text-center">← Back</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
