import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";

const guides = [
  { category: "AWS", title: "AWS migration readiness assessment guide", desc: "A step-by-step guide to assessing your current estate's migration readiness using AWS MRA and CloudFirst's scoring framework.", readTime: "12 min read", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80" },
  { category: "Azure", title: "On-premise to Azure: planning your first migration wave", desc: "How to identify, prioritise, and plan your first migration wave — from dependency mapping to cutover communication.", readTime: "15 min read", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80" },
  { category: "GCP", title: "VMware to Google Cloud migration playbook", desc: "Complete playbook for migrating VMware vSphere workloads to GCP Compute Engine using Migrate for Compute Engine.", readTime: "20 min read", image: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=800&q=80" },
  { category: "Database", title: "Oracle to Cloud SQL / RDS migration guide", desc: "How to migrate Oracle databases to managed cloud equivalents — schema conversion, data migration, and cutover strategies.", readTime: "18 min read", image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=80" },
  { category: "Windows", title: "Windows Server lift-and-shift to Azure guide", desc: "Detailed guide for lifting Windows Server 2012/2016 workloads to Azure IaaS with minimal downtime using Azure Migrate.", readTime: "14 min read", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80" },
  { category: "Kubernetes", title: "Migrating microservices to managed Kubernetes (EKS/GKE/AKS)", desc: "From Docker Compose to production Kubernetes — containerisation, HELM charts, GitOps, and rollout strategies.", readTime: "25 min read", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80" },
];

const categories = ["All", "AWS", "Azure", "GCP", "Database", "Windows", "Kubernetes"];

const MigrationGuides: React.FC = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? guides : guides.filter(g => g.category === active);

  return (
    <div className="min-h-screen bg-[#f7f8fa]">
      <Navbar />

      {/* Hero */}
      <div className="bg-white border-b border-gray-100 pt-16 lg:pt-20">
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-teal-600 border border-teal-200 bg-teal-50 rounded-full px-3 py-1 mb-4">Resources</span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4" style={{ fontFamily: "'Georgia', serif" }}>Cloud migration guides</h1>
          <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mb-8">Practical, step-by-step guides for planning and executing cloud migrations — written by CloudFirst cloud architects based on real customer engagements.</p>
          <div className="flex flex-wrap gap-2">
            {categories.map(c => (
              <button key={c} onClick={() => setActive(c)} className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors ${active === c ? "bg-teal-600 text-white" : "bg-gray-100 text-gray-500 hover:bg-gray-200"}`}>{c}</button>
            ))}
          </div>
        </div>
      </div>

      {/* Guides */}
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((g) => (
            <div key={g.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md hover:border-teal-200 transition-all flex">
              <img src={g.image} alt={g.title} className="w-36 object-cover flex-shrink-0" />
              <div className="p-5 flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold text-teal-700 bg-teal-50 border border-teal-100 rounded px-2 py-0.5 uppercase tracking-wider">{g.category}</span>
                  <span className="text-[10px] text-gray-400">{g.readTime}</span>
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-2 leading-snug" style={{ fontFamily: "'Georgia', serif" }}>{g.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed flex-1">{g.desc}</p>
                <button onClick={() => navigate("/contact")} className="mt-4 self-start text-xs text-teal-600 hover:text-teal-800 font-semibold transition-colors">Download guide →</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="bg-teal-700 rounded-2xl px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-lg">
            <h2 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "'Georgia', serif" }}>Planning a migration?</h2>
            <p className="text-teal-100 text-sm leading-relaxed">Speak with a CloudFirst migration architect — we'll assess your environment and build a practical migration plan.</p>
          </div>
          <div className="flex flex-col gap-3 flex-shrink-0">
            <button onClick={() => navigate("/contact")} className="px-7 py-3 bg-white hover:bg-teal-50 text-teal-700 text-sm font-bold rounded-lg transition-colors whitespace-nowrap">Talk to a migration specialist →</button>
            <button onClick={() => navigate(-1)} className="text-xs text-teal-200 hover:text-white transition-colors text-center">← Back</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MigrationGuides;
