import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";

const HealthcareIndustry: React.FC = () => {
  const navigate = useNavigate();
  const challenges = [
    { challenge: "HIPAA & data residency", solution: "We architect compliant cloud environments with data residency controls, audit logging, and BAA-ready configurations for AWS, Azure, and GCP." },
    { challenge: "Legacy EHR integration", solution: "We design HL7 FHIR-compatible integration layers and secure API gateways that connect legacy EHR systems to modern cloud platforms." },
    { challenge: "Availability of critical systems", solution: "Healthcare systems cannot go down. We implement multi-region redundancy, automated failover, and 99.99% uptime SLAs for patient-facing workloads." },
    { challenge: "Medical imaging storage costs", solution: "DICOM image storage on hot tiers is expensive. We implement intelligent tiering and lifecycle policies that cut storage costs by up to 60%." },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero with image overlay */}
      <div className="relative h-[480px] overflow-hidden pt-16 lg:pt-20">
        <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80" alt="Healthcare" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 via-green-900/70 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex items-end pb-14">
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-green-300 border border-green-400/30 bg-green-400/10 rounded-full px-3 py-1 mb-4">By Industry</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4" style={{ fontFamily: "'Georgia', serif" }}>Healthcare cloud —<br /><span className="text-green-300">secure, compliant, available</span></h1>
            <p className="text-white/70 text-lg max-w-xl">Patient data demands the highest security and availability. CloudFirst builds and operates healthcare cloud platforms that meet HIPAA, ISO 27001, and clinical reliability requirements.</p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-green-600 py-8">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[{ v: "HIPAA Ready", l: "Compliant architecture" }, { v: "99.99%", l: "Clinical system uptime" }, { v: "60%", l: "Storage cost reduction" }, { v: "24/7", l: "Clinical ops support" }].map(s => (
            <div key={s.l}><div className="text-xl font-bold text-white mb-0.5" style={{ fontFamily: "'Georgia', serif" }}>{s.v}</div><div className="text-xs text-green-100">{s.l}</div></div>
          ))}
        </div>
      </div>

      {/* Challenges & solutions */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Georgia', serif" }}>Healthcare cloud challenges — solved</h2>
        <p className="text-gray-400 text-sm mb-10">The cloud problems specific to healthcare, and exactly how we solve them.</p>
        <div className="space-y-4">
          {challenges.map((c) => (
            <div key={c.challenge} className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-gray-100">
              <div className="bg-red-50 p-6 flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-red-400 flex-shrink-0 mt-1.5" />
                <div><div className="text-xs font-bold text-red-500 uppercase tracking-wider mb-1">Challenge</div><p className="text-sm text-gray-700 font-medium">{c.challenge}</p></div>
              </div>
              <div className="bg-green-50 p-6 flex items-start gap-3">
                <svg className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                <div><div className="text-xs font-bold text-green-600 uppercase tracking-wider mb-1">Our solution</div><p className="text-sm text-gray-600 leading-relaxed">{c.solution}</p></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Use cases */}
      <div className="bg-gray-50 border-y border-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8" style={{ fontFamily: "'Georgia', serif" }}>What we build for healthcare</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: "🏥", title: "Clinical data platforms", desc: "Secure, HIPAA-compliant data lakes for patient records, clinical trials data, and population health analytics." },
              { icon: "📱", title: "Telehealth infrastructure", desc: "Scalable video consultation platforms, patient portals, and mobile health apps with end-to-end encryption." },
              { icon: "🧬", title: "Genomics & research", desc: "High-performance compute environments for genomic analysis, ML model training, and clinical research workloads." },
            ].map((u) => (
              <div key={u.title} className="bg-white rounded-xl border border-gray-100 p-6 text-center shadow-sm">
                <div className="text-3xl mb-3">{u.icon}</div>
                <h3 className="text-sm font-bold text-gray-900 mb-2">{u.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-green-700 rounded-2xl px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3" style={{ fontFamily: "'Georgia', serif" }}>Build a compliant healthcare cloud</h2>
            <p className="text-green-100 text-sm leading-relaxed">Talk to a CloudFirst healthcare cloud specialist about your environment and compliance requirements.</p>
          </div>
          <div className="flex flex-col gap-3 flex-shrink-0">
            <button onClick={() => navigate("/contact")} className="px-7 py-3 bg-white hover:bg-green-50 text-green-700 text-sm font-bold rounded-lg transition-colors whitespace-nowrap">Talk to a specialist →</button>
            <button onClick={() => navigate(-1)} className="text-xs text-green-200 hover:text-white transition-colors text-center">← Back</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthcareIndustry;
