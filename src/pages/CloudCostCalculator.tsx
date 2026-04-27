import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";

const CloudCostCalculator: React.FC = () => {
  const navigate = useNavigate();
  const [vms, setVms] = useState(10);
  const [storage, setStorage] = useState(5);
  const [transfer, setTransfer] = useState(2);

  // Simple rough estimate: $0.10/hr per VM + $0.023/GB storage + $0.09/GB transfer
  const vmCost = vms * 0.10 * 730;
  const storageCost = storage * 1000 * 0.023;
  const transferCost = transfer * 1000 * 0.09;
  const total = vmCost + storageCost + transferCost;
  const optimised = total * 0.62; // ~38% savings with optimisation

  return (
    <div className="min-h-screen bg-[#f7f8fa]">
      <Navbar />

      {/* Hero */}
      <div className="bg-white border-b border-gray-100 pt-16 lg:pt-20">
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-600 border border-emerald-200 bg-emerald-50 rounded-full px-3 py-1 mb-4">Resources</span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4" style={{ fontFamily: "'Georgia', serif" }}>Cloud cost estimator</h1>
          <p className="text-gray-500 text-lg leading-relaxed max-w-2xl">Get a rough estimate of your cloud infrastructure costs — and how much CloudFirst's optimisation programme could save you.</p>
        </div>
      </div>

      {/* Calculator */}
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Inputs */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            <h2 className="text-lg font-bold text-gray-900 mb-6" style={{ fontFamily: "'Georgia', serif" }}>Your infrastructure</h2>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold text-gray-700">Virtual machines / compute instances</label>
                  <span className="text-sm font-bold text-emerald-600">{vms}</span>
                </div>
                <input type="range" min={1} max={200} value={vms} onChange={e => setVms(Number(e.target.value))} className="w-full accent-emerald-600" />
                <div className="flex justify-between text-xs text-gray-400 mt-1"><span>1</span><span>200</span></div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold text-gray-700">Storage (TB)</label>
                  <span className="text-sm font-bold text-emerald-600">{storage} TB</span>
                </div>
                <input type="range" min={1} max={50} value={storage} onChange={e => setStorage(Number(e.target.value))} className="w-full accent-emerald-600" />
                <div className="flex justify-between text-xs text-gray-400 mt-1"><span>1 TB</span><span>50 TB</span></div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold text-gray-700">Outbound data transfer (TB/mo)</label>
                  <span className="text-sm font-bold text-emerald-600">{transfer} TB</span>
                </div>
                <input type="range" min={0} max={20} value={transfer} onChange={e => setTransfer(Number(e.target.value))} className="w-full accent-emerald-600" />
                <div className="flex justify-between text-xs text-gray-400 mt-1"><span>0</span><span>20 TB</span></div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <h2 className="text-lg font-bold text-gray-900 mb-5" style={{ fontFamily: "'Georgia', serif" }}>Estimated monthly cost</h2>
              <div className="space-y-3 mb-5">
                <div className="flex justify-between text-sm"><span className="text-gray-500">Compute ({vms} VMs)</span><span className="font-semibold">${vmCost.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span></div>
                <div className="flex justify-between text-sm"><span className="text-gray-500">Storage ({storage} TB)</span><span className="font-semibold">${storageCost.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span></div>
                <div className="flex justify-between text-sm"><span className="text-gray-500">Data transfer ({transfer} TB)</span><span className="font-semibold">${transferCost.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span></div>
                <div className="border-t border-gray-100 pt-3 flex justify-between">
                  <span className="text-sm font-bold text-gray-900">Estimated total</span>
                  <span className="text-lg font-bold text-gray-900">${total.toLocaleString(undefined, { maximumFractionDigits: 0 })}/mo</span>
                </div>
              </div>
            </div>
            <div className="bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-8">
              <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-2">With CloudFirst optimisation</div>
              <div className="text-3xl font-bold text-emerald-700 mb-1" style={{ fontFamily: "'Georgia', serif" }}>${optimised.toLocaleString(undefined, { maximumFractionDigits: 0 })}/mo</div>
              <div className="text-sm text-emerald-600 mb-4">Potential saving: <span className="font-bold">${(total - optimised).toLocaleString(undefined, { maximumFractionDigits: 0 })}/mo</span> (est. 38% reduction)</div>
              <p className="text-xs text-emerald-700/70 leading-relaxed">Based on right-sizing, reserved instance planning, storage tiering, and commitment optimisation. Actual savings vary by workload.</p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-gray-400 mt-6">* This is a rough estimate for illustrative purposes only. Actual cloud costs depend on your specific workload configuration, region, and usage patterns. Contact us for a detailed FinOps assessment.</p>
      </div>

      {/* CTA */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="bg-emerald-700 rounded-2xl px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-lg">
            <h2 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "'Georgia', serif" }}>Want a real FinOps assessment?</h2>
            <p className="text-emerald-100 text-sm leading-relaxed">CloudFirst's FinOps team will analyse your actual cloud bills, identify waste, and build a detailed savings roadmap — typically uncovering 25–45% in reduction opportunities.</p>
          </div>
          <div className="flex flex-col gap-3 flex-shrink-0">
            <button onClick={() => navigate("/contact")} className="px-7 py-3 bg-white hover:bg-emerald-50 text-emerald-700 text-sm font-bold rounded-lg transition-colors whitespace-nowrap">Request a FinOps review →</button>
            <button onClick={() => navigate(-1)} className="text-xs text-emerald-200 hover:text-white transition-colors text-center">← Back</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudCostCalculator;
