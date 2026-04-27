import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";

const papers = [
  { topic: "Security", title: "Zero-trust cloud security for regulated industries", desc: "A technical guide to implementing zero-trust network architecture on AWS, Azure, and GCP — with framework mappings to ISO 27001, SOC 2, and NIST.", pages: "28 pages", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80" },
  { topic: "FinOps", title: "The enterprise FinOps maturity model", desc: "How to move from reactive cloud cost management to proactive financial governance — with maturity framework, KPIs, and implementation roadmap.", pages: "22 pages", image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80" },
  { topic: "Migration", title: "Cloud migration factory: scaling to 100 workloads/month", desc: "How CloudFirst's migration factory model enables large enterprises to migrate at speed — automation tooling, wave planning, and governance at scale.", pages: "18 pages", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80" },
  { topic: "Architecture", title: "Cloud-native application architecture patterns", desc: "Practical reference architecture patterns for microservices, event-driven systems, and serverless workloads across the major cloud platforms.", pages: "35 pages", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80" },
  { topic: "Compliance", title: "Cloud compliance in financial services: a regulatory mapping guide", desc: "How to map PCI DSS, FCA, DORA, and RBI compliance requirements to AWS, Azure, and GCP native controls — with a controls evidence matrix.", pages: "30 pages", image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80" },
  { topic: "AI/ML", title: "Building ML platforms on cloud: from experimentation to production", desc: "A guide to building production-ready ML platforms on Vertex AI, SageMaker, and Azure ML — governance, MLOps, and cost management.", pages: "25 pages", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80" },
];

const topicColors: Record<string, string> = {
  Security: "text-red-700 bg-red-50 border-red-100",
  FinOps: "text-green-700 bg-green-50 border-green-100",
  Migration: "text-teal-700 bg-teal-50 border-teal-100",
  Architecture: "text-blue-700 bg-blue-50 border-blue-100",
  Compliance: "text-amber-700 bg-amber-50 border-amber-100",
  "AI/ML": "text-purple-700 bg-purple-50 border-purple-100",
};

const Whitepapers: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f7f8fa]">
      <Navbar />

      {/* Hero */}
      <div className="bg-white border-b border-gray-100 pt-16 lg:pt-20">
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-14 flex flex-col lg:flex-row items-end gap-8">
          <div className="flex-1">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-purple-600 border border-purple-200 bg-purple-50 rounded-full px-3 py-1 mb-4">Resources</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4" style={{ fontFamily: "'Georgia', serif" }}>Whitepapers & technical guides</h1>
            <p className="text-gray-500 text-lg leading-relaxed max-w-2xl">In-depth technical content from CloudFirst architects — designed to help cloud practitioners and decision-makers navigate complex cloud challenges.</p>
          </div>
          <div className="flex-shrink-0 flex flex-col gap-1 text-right">
            <div className="text-3xl font-bold text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>6+</div>
            <div className="text-xs text-gray-400">Technical publications</div>
          </div>
        </div>
      </div>

      {/* Papers grid */}
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {papers.map((p) => (
            <div key={p.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md hover:border-purple-200 transition-all flex flex-col">
              <div className="relative h-36 overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className={`absolute top-3 left-3 text-[10px] font-bold border rounded px-2.5 py-1 ${topicColors[p.topic]}`}>{p.topic}</span>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-sm font-bold text-gray-900 mb-2 leading-snug flex-1" style={{ fontFamily: "'Georgia', serif" }}>{p.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-4">{p.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">{p.pages}</span>
                  <button onClick={() => navigate("/contact")} className="text-xs text-purple-600 hover:text-purple-800 font-semibold transition-colors">Download →</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="bg-purple-700 rounded-2xl px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-lg">
            <h2 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "'Georgia', serif" }}>Want custom research for your organisation?</h2>
            <p className="text-purple-100 text-sm leading-relaxed">We can produce bespoke cloud architecture assessments, compliance mapping reports, and FinOps analysis for your specific environment.</p>
          </div>
          <div className="flex flex-col gap-3 flex-shrink-0">
            <button onClick={() => navigate("/contact")} className="px-7 py-3 bg-white hover:bg-purple-50 text-purple-700 text-sm font-bold rounded-lg transition-colors whitespace-nowrap">Request a custom report →</button>
            <button onClick={() => navigate(-1)} className="text-xs text-purple-200 hover:text-white transition-colors text-center">← Back</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whitepapers;
