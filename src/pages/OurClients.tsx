import Layout from '@/components/Layout';
import { useNavigate } from 'react-router-dom';

const OurClients = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <section className="pt-28 pb-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>
            Client Spotlight
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl">
            A quick look at the brands and teams we proudly support across industries.
          </p>

          <div className="mt-10">
            <img
              src="https://cloudfirst-website-assets.s3.ap-south-1.amazonaws.com/All_image/Our_clients.png"
              alt="Our clients"
              className="w-full h-[520px] md:h-[680px] object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="bg-white border-y border-gray-100 py-14">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: "'Georgia', serif" }}>
            How we support our clients
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: "🏗️", title: "Cloud foundations", desc: "Secure landing zones, identity baselines, and scalable networking to start right." },
              { icon: "🚀", title: "Migration & modernisation", desc: "Plan and execute workload moves with minimal downtime and clear milestones." },
              { icon: "🛡️", title: "Security & compliance", desc: "Posture management, controls, and audits aligned to your risk and industry needs." },
              { icon: "📈", title: "Optimisation & FinOps", desc: "Continuous cost visibility and performance tuning to keep spend under control." },
            ].map((item) => (
              <div
                key={item.title}
                className="text-center p-5 rounded-xl border border-gray-50 hover:border-gray-100 hover:shadow-sm transition-all"
              >
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="text-sm font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <div className="bg-gray-900 rounded-2xl px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-lg">
              <h2 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "'Georgia', serif" }}>
                Work with CloudFirst
              </h2>
              <p className="text-white/60 text-sm leading-relaxed">
                Tell us what you’re trying to achieve — we’ll propose a clear plan, the right team, and measurable outcomes.
              </p>
            </div>
            <div className="flex flex-col gap-3 flex-shrink-0">
              <button
                onClick={() => navigate("/contact")}
                className="px-7 py-3 bg-white hover:bg-gray-100 text-gray-900 text-sm font-bold rounded-lg transition-colors whitespace-nowrap"
              >
                Talk to us →
              </button>
              <button
                onClick={() => navigate(-1)}
                className="text-xs text-white/40 hover:text-white/70 transition-colors text-center"
              >
                ← Back
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OurClients;
