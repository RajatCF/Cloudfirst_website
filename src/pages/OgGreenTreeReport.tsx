import { useMemo, useState } from "react";
import Layout from "@/components/Layout";
import {
  Leaf,
  Zap,
  MessageSquare,
  BarChart3,
  Droplets,
  Globe2,
  Cpu,
} from "lucide-react";
 
const OgGreenTreeReport = () => {
  const [model, setModel] = useState("gpt4");
  const [region, setRegion] = useState("india");
  const [prompts, setPrompts] = useState(100);
  const [tokensPerPrompt, setTokensPerPrompt] = useState(1200);
 
  // REALISTIC INDUSTRY ESTIMATED MODEL FACTORS
  const MODEL_FACTORS = {
    gpt4: {
      name: "GPT-4",
      energyPerMillionTokens: 0.35,
    },
    claude: {
      name: "Claude",
      energyPerMillionTokens: 0.28,
    },
    gemini: {
      name: "Gemini",
      energyPerMillionTokens: 0.22,
    },
    llama3: {
      name: "Llama 3",
      energyPerMillionTokens: 0.18,
    },
  };
 
  // REGION FACTORS
  const REGION_FACTORS = {
    india: {
      name: "India",
      carbonIntensity: 0.71,
      waterIntensity: 2.1,
    },
    usa: {
      name: "United States",
      carbonIntensity: 0.39,
      waterIntensity: 1.8,
    },
    germany: {
      name: "Germany",
      carbonIntensity: 0.42,
      waterIntensity: 1.5,
    },
    singapore: {
      name: "Singapore",
      carbonIntensity: 0.48,
      waterIntensity: 1.9,
    },
  };
 
  const calculations = useMemo(() => {
    const totalTokens = prompts * tokensPerPrompt;
 
    const energyKwh =
      (totalTokens / 1_000_000) *
      MODEL_FACTORS[model as keyof typeof MODEL_FACTORS]
        .energyPerMillionTokens;
 
    const carbonKg =
      energyKwh *
      REGION_FACTORS[region as keyof typeof REGION_FACTORS]
        .carbonIntensity;
 
    const waterLiters =
      energyKwh *
      REGION_FACTORS[region as keyof typeof REGION_FACTORS]
        .waterIntensity;
 
    const energyWh = energyKwh * 1000;
    const carbonGrams = carbonKg * 1000;
 
    // GREEN SCORE
    let sustainabilityScore = 95;
 
    if (carbonKg > 1) sustainabilityScore = 80;
    if (carbonKg > 5) sustainabilityScore = 65;
    if (carbonKg > 10) sustainabilityScore = 45;
 
    return {
      totalTokens,
      energyKwh,
      energyWh,
      carbonKg,
      carbonGrams,
      waterLiters,
      sustainabilityScore,
    };
  }, [model, region, prompts, tokensPerPrompt]);
 
  const comparisonData = useMemo(() => {
    return [
      1,
      10,
      100,
      1000,
    ].map((count) => {
      const totalTokens = count * tokensPerPrompt;
 
      const energyKwh =
        (totalTokens / 1_000_000) *
        MODEL_FACTORS[model as keyof typeof MODEL_FACTORS]
          .energyPerMillionTokens;
 
      const carbonKg =
        energyKwh *
        REGION_FACTORS[region as keyof typeof REGION_FACTORS]
          .carbonIntensity;
 
      return {
        prompts: count,
        carbonGrams: carbonKg * 1000,
        energyWh: energyKwh * 1000,
      };
    });
  }, [model, region, tokensPerPrompt]);
 
  return (
    <Layout>
      <section className="bg-[#fafafa] min-h-screen">
        <div className="max-w-[1250px] mx-auto px-6 lg:px-10 py-12 lg:py-16">
          {/* HEADER */}
          <div className="flex flex-col lg:flex-row gap-8 justify-between">
            <div>
              <h1
                className="mt-6 text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                AI Sustainability Dashboard
              </h1>
 
              <p className="mt-4 text-gray-600 max-w-2xl text-lg">
                Realistic sustainability estimations based on AI model usage,
                token consumption, energy intensity, regional carbon grid data,
                and cooling water requirements.
              </p>
            </div>
 
            {/* MAIN CARBON CARD */}
            <div className="w-full lg:w-[320px]">
              <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                  Estimated Carbon Impact
                </div>
 
                <div className="mt-4 flex items-end gap-2">
                  <div
                    className="text-5xl font-bold text-gray-900"
                    style={{ fontFamily: "'Georgia', serif" }}
                  >
                    {calculations.carbonGrams.toFixed(2)}
                  </div>
 
                  <div className="pb-2 text-sm font-semibold text-gray-500">
                    g CO₂e
                  </div>
                </div>
 
                <div className="mt-4 h-3 rounded-full bg-gray-100 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-emerald-500"
                    style={{
                      width: `${calculations.sustainabilityScore}%`,
                    }}
                  />
                </div>
 
                <div className="mt-2 text-sm text-gray-600">
                  Sustainability Score:{" "}
                  <span className="font-bold text-emerald-700">
                    {calculations.sustainabilityScore}/100
                  </span>
                </div>
              </div>
            </div>
          </div>
 
          {/* CONTROLS */}
          <div className="mt-10 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {/* MODEL */}
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-2 block">
                  AI Model
                </label>
 
                <select
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  className="w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:border-emerald-500"
                >
                  {Object.entries(MODEL_FACTORS).map(([key, value]) => (
                    <option key={key} value={key}>
                      {value.name}
                    </option>
                  ))}
                </select>
              </div>
 
              {/* REGION */}
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-2 block">
                  Region
                </label>
 
                <select
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  className="w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:border-emerald-500"
                >
                  {Object.entries(REGION_FACTORS).map(([key, value]) => (
                    <option key={key} value={key}>
                      {value.name}
                    </option>
                  ))}
                </select>
              </div>
 
              {/* PROMPTS */}
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-2 block">
                  Number of Prompts
                </label>
 
                <input
                  type="number"
                  value={prompts}
                  onChange={(e) => setPrompts(Number(e.target.value))}
                  className="w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:border-emerald-500"
                />
              </div>
 
              {/* TOKENS */}
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-2 block">
                  Tokens Per Prompt
                </label>
 
                <input
                  type="number"
                  value={tokensPerPrompt}
                  onChange={(e) =>
                    setTokensPerPrompt(Number(e.target.value))
                  }
                  className="w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:border-emerald-500"
                />
              </div>
            </div>
          </div>
 
          {/* METRIC CARDS */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {/* PROMPTS */}
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="h-11 w-11 rounded-2xl bg-blue-50 flex items-center justify-center">
                  <MessageSquare className="h-5 w-5 text-blue-600" />
                </span>
 
                <div className="text-sm font-semibold text-gray-700">
                  Prompts
                </div>
              </div>
 
              <div
                className="mt-5 text-4xl font-bold text-gray-900"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                {prompts.toLocaleString()}
              </div>
            </div>
 
            {/* TOKENS */}
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="h-11 w-11 rounded-2xl bg-violet-50 flex items-center justify-center">
                  <BarChart3 className="h-5 w-5 text-violet-600" />
                </span>
 
                <div className="text-sm font-semibold text-gray-700">
                  Tokens
                </div>
              </div>
 
              <div
                className="mt-5 text-4xl font-bold text-gray-900"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                {calculations.totalTokens.toLocaleString()}
              </div>
            </div>
 
            {/* ENERGY */}
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="h-11 w-11 rounded-2xl bg-amber-50 flex items-center justify-center">
                  <Zap className="h-5 w-5 text-amber-600" />
                </span>
 
                <div className="text-sm font-semibold text-gray-700">
                  Energy
                </div>
              </div>
 
              <div
                className="mt-5 text-4xl font-bold text-gray-900"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                {calculations.energyWh.toFixed(2)}
              </div>
 
              <div className="text-sm text-gray-500 mt-1">Wh</div>
            </div>
 
            {/* CARBON */}
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="h-11 w-11 rounded-2xl bg-emerald-50 flex items-center justify-center">
                  <Leaf className="h-5 w-5 text-emerald-600" />
                </span>
 
                <div className="text-sm font-semibold text-gray-700">
                  Carbon
                </div>
              </div>
 
              <div
                className="mt-5 text-4xl font-bold text-gray-900"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                {calculations.carbonGrams.toFixed(2)}
              </div>
 
              <div className="text-sm text-gray-500 mt-1">g CO₂e</div>
            </div>
 
            {/* WATER */}
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="h-11 w-11 rounded-2xl bg-cyan-50 flex items-center justify-center">
                  <Droplets className="h-5 w-5 text-cyan-600" />
                </span>
 
                <div className="text-sm font-semibold text-gray-700">
                  Water
                </div>
              </div>
 
              <div
                className="mt-5 text-4xl font-bold text-gray-900"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                {calculations.waterLiters.toFixed(2)}
              </div>
 
              <div className="text-sm text-gray-500 mt-1">Liters</div>
            </div>
          </div>
 
          {/* COMPARISON */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* LEFT */}
            <div className="lg:col-span-2 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2
                className="text-2xl font-bold text-gray-900"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Estimated Impact by Prompt Volume
              </h2>
 
              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                {comparisonData.map((item) => (
                  <div
                    key={item.prompts}
                    className="rounded-2xl border border-gray-100 p-5"
                  >
                    <div className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                      {item.prompts.toLocaleString()} prompts
                    </div>
 
                    <div
                      className="mt-3 text-3xl font-bold text-gray-900"
                      style={{ fontFamily: "'Georgia', serif" }}
                    >
                      {item.carbonGrams.toFixed(1)}
                    </div>
 
                    <div className="text-sm text-gray-500 mt-1">
                      g CO₂e
                    </div>
 
                    <div className="mt-3 text-xs text-gray-500">
                      {item.energyWh.toFixed(2)} Wh energy
                    </div>
                  </div>
                ))}
              </div>
            </div>
 
            {/* RIGHT */}
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2
                className="text-2xl font-bold text-gray-900"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Environmental Factors
              </h2>
 
              <div className="mt-6 space-y-5">
                <div className="flex justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <Cpu className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-700 font-medium">
                      Model Energy
                    </span>
                  </div>
 
                  <span className="text-gray-900 font-semibold">
                    {
                      MODEL_FACTORS[
                        model as keyof typeof MODEL_FACTORS
                      ].energyPerMillionTokens
                    }{" "}
                    kWh / 1M
                  </span>
                </div>
 
                <div className="flex justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <Globe2 className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-700 font-medium">
                      Carbon Grid
                    </span>
                  </div>
 
                  <span className="text-gray-900 font-semibold">
                    {
                      REGION_FACTORS[
                        region as keyof typeof REGION_FACTORS
                      ].carbonIntensity
                    }{" "}
                    kg/kWh
                  </span>
                </div>
 
                <div className="flex justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <Droplets className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-700 font-medium">
                      Water Intensity
                    </span>
                  </div>
 
                  <span className="text-gray-900 font-semibold">
                    {
                      REGION_FACTORS[
                        region as keyof typeof REGION_FACTORS
                      ].waterIntensity
                    }{" "}
                    L/kWh
                  </span>
                </div>
              </div>
 
              <div className="mt-8 rounded-2xl bg-emerald-50 border border-emerald-100 p-4">
                <div className="text-sm font-semibold text-emerald-800">
                  Sustainability Insight
                </div>
 
                <p className="mt-2 text-sm text-emerald-700 leading-relaxed">
                  Using smaller models, reducing token output, and selecting
                  greener regions can significantly reduce AI carbon emissions
                  and cooling water consumption.
                </p>
              </div>
            </div>
          </div>
 
          {/* DISCLAIMER */}
          <div className="mt-8 text-sm text-gray-500 leading-relaxed">
            * Values shown are estimated using public sustainability research,
            AI inference benchmarks, regional carbon intensity datasets, and
            datacenter cooling assumptions. Actual environmental impact may vary
            based on infrastructure, hardware, model optimization, and cloud
            provider efficiency.
          </div>
        </div>
      </section>
    </Layout>
  );
};
 
export default OgGreenTreeReport;
 
