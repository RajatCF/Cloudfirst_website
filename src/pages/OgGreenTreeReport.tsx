import { useMemo } from "react";
import Layout from "@/components/Layout";
import { Leaf, Zap, MessageSquare, BarChart3 } from "lucide-react";

const OgGreenTreeReport = () => {
  const assumptions = useMemo(() => {
    const tokensPerPrompt = 800;
    const energyKwhPerMillionTokens = 0.18;
    const carbonKgPerKwh = 0.55;
    return { tokensPerPrompt, energyKwhPerMillionTokens, carbonKgPerKwh };
  }, []);

  const rows = useMemo(() => {
    const promptCounts = [1, 10, 100, 1000];
    return promptCounts.map((prompts) => {
      const tokensTotal = prompts * assumptions.tokensPerPrompt;
      const energyKwh = (tokensTotal / 1_000_000) * assumptions.energyKwhPerMillionTokens;
      const energyWh = energyKwh * 1000;
      const carbonKg = energyKwh * assumptions.carbonKgPerKwh;
      const carbonGrams = carbonKg * 1000;

      return {
        prompts,
        tokensTotal,
        energyWh,
        carbonGrams,
      };
    });
  }, [assumptions]);

  const perPrompt = rows[0];

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
                OG Green Tree • Carbon Report
              </div>
              <h1 className="mt-6 text-3xl md:text-4xl font-bold text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>
                AI carbon per prompt
              </h1>
              <p className="mt-3 text-gray-600 max-w-2xl">
                Estimated emissions based on token usage assumptions. Results vary by model, infrastructure, and grid carbon intensity.
              </p>
            </div>

            <div className="w-full lg:w-auto">
              <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-emerald-50 via-white to-sky-50 px-6 py-5">
                <div className="text-xs font-semibold uppercase tracking-widest text-gray-500">Estimated per prompt</div>
                <div className="mt-2 flex items-end gap-2">
                  <div className="text-4xl font-bold text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>
                    {perPrompt.carbonGrams.toFixed(2)}
                  </div>
                  <div className="pb-1 text-sm font-semibold text-gray-700">g CO₂e</div>
                </div>
                <div className="mt-2 text-xs text-gray-500">Assuming ~{assumptions.tokensPerPrompt} tokens per prompt.</div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 border border-blue-100">
                  <MessageSquare className="h-5 w-5 text-blue-600" />
                </span>
                <div className="text-sm font-semibold text-gray-900">Prompts</div>
              </div>
              <div className="text-3xl font-bold text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>
                1
              </div>
              <div className="mt-1 text-xs text-gray-500">Single prompt estimate</div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 border border-violet-100">
                  <BarChart3 className="h-5 w-5 text-violet-600" />
                </span>
                <div className="text-sm font-semibold text-gray-900">Tokens</div>
              </div>
              <div className="text-3xl font-bold text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>
                {perPrompt.tokensTotal.toLocaleString()}
              </div>
              <div className="mt-1 text-xs text-gray-500">Estimated tokens per prompt</div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 border border-amber-100">
                  <Zap className="h-5 w-5 text-amber-700" />
                </span>
                <div className="text-sm font-semibold text-gray-900">Energy</div>
              </div>
              <div className="text-3xl font-bold text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>
                {perPrompt.energyWh.toFixed(2)} <span className="text-base font-semibold text-gray-500">Wh</span>
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
                {perPrompt.carbonGrams.toFixed(2)} <span className="text-base font-semibold text-gray-500">g CO₂e</span>
              </div>
              <div className="mt-1 text-xs text-gray-500">Estimated emissions</div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-gray-900 mb-4" style={{ fontFamily: "'Georgia', serif" }}>
                Estimated CO₂e by number of prompts
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {rows.map((row) => (
                  <div key={row.prompts} className="rounded-2xl border border-gray-100 bg-white p-4">
                    <div className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                      {row.prompts.toLocaleString()} prompt{row.prompts === 1 ? "" : "s"}
                    </div>
                    <div className="mt-2 text-2xl font-bold text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>
                      {row.carbonGrams >= 1 ? row.carbonGrams.toFixed(1) : row.carbonGrams.toFixed(3)}
                      <span className="ml-1 text-sm font-semibold text-gray-500">g</span>
                    </div>
                    <div className="mt-2 text-xs text-gray-500">
                      {row.tokensTotal.toLocaleString()} tokens • {row.energyWh.toFixed(2)} Wh
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-gray-50 via-white to-gray-50 p-6 shadow-sm">
              <h2 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: "'Georgia', serif" }}>
                Assumptions
              </h2>
              <div className="mt-4 space-y-3 text-sm text-gray-600">
                <div className="flex items-start justify-between gap-4">
                  <span className="font-semibold text-gray-700">Tokens per prompt</span>
                  <span className="text-right">~{assumptions.tokensPerPrompt}</span>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <span className="font-semibold text-gray-700">Tokens → Energy</span>
                  <span className="text-right">{assumptions.energyKwhPerMillionTokens.toFixed(2)} kWh / 1M tokens</span>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <span className="font-semibold text-gray-700">Energy → CO₂e</span>
                  <span className="text-right">{assumptions.carbonKgPerKwh.toFixed(2)} kg / kWh</span>
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
