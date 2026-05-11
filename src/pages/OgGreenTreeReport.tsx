import { useMemo, useState } from "react";
import Layout from "@/components/Layout";
import { Leaf, Zap, MessageSquare, BarChart3 } from "lucide-react";

const OgGreenTreeReport = () => {
  const [aiRequests, setAiRequests] = useState(1200);
  const [avgTokensPerRequest, setAvgTokensPerRequest] = useState(800);

  const metrics = useMemo(() => {
    const tokensTotal = aiRequests * avgTokensPerRequest;
    const energyKwh = (tokensTotal / 1_000_000) * 0.18;
    const carbonKg = energyKwh * 0.55;
    const carbonGrams = carbonKg * 1000;

    const grade = carbonKg < 0.5 ? "A" : carbonKg < 1.25 ? "B" : carbonKg < 2.5 ? "C" : "D";
    const gradeLabel =
      grade === "A" ? "Excellent" : grade === "B" ? "Good" : grade === "C" ? "Average" : "High";

    return {
      tokensTotal,
      energyKwh,
      carbonKg,
      carbonGrams,
      grade,
      gradeLabel,
    };
  }, [aiRequests, avgTokensPerRequest]);

  return (
    <Layout>
      <section className="bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-12 lg:py-16">
          <div className="flex items-start gap-6 flex-col lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-800">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white ring-1 ring-emerald-200 overflow-hidden">
                  <img src="/logo/og-green-tree.jpg" alt="OG Green Tree" className="h-full w-full object-cover" />
                </span>
                OG Green Tree • Carbon Report (Demo)
              </div>
              <h1 className="mt-6 text-3xl md:text-4xl font-bold text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>
                Your AI Carbon Footprint
              </h1>
              <p className="mt-3 text-gray-600 max-w-2xl">
                A quick demo report showing estimated energy use and carbon emissions based on your AI usage.
              </p>
            </div>

            <div className="w-full lg:w-auto">
              <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-emerald-50 via-white to-sky-50 px-6 py-5">
                <div className="text-xs font-semibold uppercase tracking-widest text-gray-500">Report card</div>
                <div className="mt-2 flex items-end gap-3">
                  <div className="text-4xl font-bold text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>
                    {metrics.grade}
                  </div>
                  <div className="pb-1 text-sm font-semibold text-gray-700">{metrics.gradeLabel}</div>
                </div>
                <div className="mt-2 text-xs text-gray-500">Based on demo estimation.</div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 border border-blue-100">
                  <MessageSquare className="h-5 w-5 text-blue-600" />
                </span>
                <div className="text-sm font-semibold text-gray-900">AI Requests</div>
              </div>
              <div className="text-3xl font-bold text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>
                {aiRequests.toLocaleString()}
              </div>
              <div className="mt-1 text-xs text-gray-500">Total requests counted in this report</div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 border border-violet-100">
                  <BarChart3 className="h-5 w-5 text-violet-600" />
                </span>
                <div className="text-sm font-semibold text-gray-900">Tokens</div>
              </div>
              <div className="text-3xl font-bold text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>
                {Math.round(metrics.tokensTotal).toLocaleString()}
              </div>
              <div className="mt-1 text-xs text-gray-500">Estimated total tokens</div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 border border-amber-100">
                  <Zap className="h-5 w-5 text-amber-700" />
                </span>
                <div className="text-sm font-semibold text-gray-900">Energy</div>
              </div>
              <div className="text-3xl font-bold text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>
                {metrics.energyKwh.toFixed(2)} <span className="text-base font-semibold text-gray-500">kWh</span>
              </div>
              <div className="mt-1 text-xs text-gray-500">Estimated compute energy</div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 border border-emerald-100">
                  <Leaf className="h-5 w-5 text-emerald-700" />
                </span>
                <div className="text-sm font-semibold text-gray-900">Carbon</div>
              </div>
              <div className="text-3xl font-bold text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>
                {metrics.carbonGrams.toFixed(0)} <span className="text-base font-semibold text-gray-500">g CO₂e</span>
              </div>
              <div className="mt-1 text-xs text-gray-500">Estimated emissions</div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: "'Georgia', serif" }}>
                Adjust demo inputs
              </h2>
              <p className="text-sm text-gray-600 mb-6">
                Change the numbers to preview how the report updates.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">AI requests</label>
                  <input
                    type="number"
                    min={0}
                    value={aiRequests}
                    onChange={(e) => setAiRequests(Number(e.target.value || 0))}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">Average tokens per request</label>
                  <input
                    type="number"
                    min={0}
                    value={avgTokensPerRequest}
                    onChange={(e) => setAvgTokensPerRequest(Number(e.target.value || 0))}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  />
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-gray-50 via-white to-gray-50 p-6 shadow-sm">
              <h2 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: "'Georgia', serif" }}>
                How it’s calculated
              </h2>
              <div className="mt-4 space-y-3 text-sm text-gray-600">
                <div className="flex items-start justify-between gap-4">
                  <span className="font-semibold text-gray-700">Tokens → Energy</span>
                  <span className="text-right">0.18 kWh / 1M tokens</span>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <span className="font-semibold text-gray-700">Energy → CO₂e</span>
                  <span className="text-right">0.55 kg / kWh</span>
                </div>
                <div className="pt-2 border-t border-gray-200 text-xs text-gray-500">
                  Demo numbers only. Replace with your real tracking later.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OgGreenTreeReport;

