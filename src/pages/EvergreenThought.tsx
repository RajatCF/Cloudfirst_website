import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';

const EvergreenThought = () => {
  return (
    <Layout>
      <div className="min-h-[70vh] bg-white">
        <section className="relative overflow-hidden bg-gradient-to-r from-teal-700 via-cyan-700 to-teal-800">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/30 blur-2xl" />
            <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/25 blur-2xl" />
          </div>
          <div className="relative max-w-7xl mx-auto px-6 py-14 lg:py-20 text-center">
            <h1 className="text-4xl md:text-5xl font-semibold text-white" style={{ fontFamily: "'Georgia', serif" }}>
              Evergreen Thought
            </h1>
            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-white/85">
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span className="opacity-60">›</span>
              <span className="text-white">Evergreen Thought</span>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>
                Evergreen Thought
              </h2>
              <div className="mt-5 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  An evergreen thought is a timeless idea that stays relevant no matter how the world changes. It can guide decisions, shape habits, and
                  bring clarity when there is too much noise.
                </p>
                <p>
                  One simple evergreen thought is: keep it simple. When we focus on what truly matters and remove distractions, communication becomes
                  clearer, work becomes calmer, and outcomes become stronger.
                </p>
                <p>
                  Another evergreen thought is: consistency beats intensity. Small actions done regularly compound into meaningful progress over time—at
                  work, in learning, and in life.
                </p>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md aspect-square rounded-full bg-gradient-to-br from-teal-50 via-cyan-50 to-white border border-slate-200 overflow-hidden flex items-center justify-center">
                <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-teal-200/50 blur-2xl" />
                <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-cyan-200/50 blur-2xl" />
                <img
                  src="/logo/og-green-tree.jpg"
                  alt="Evergreen thought"
                  className="relative z-10 w-2/3 h-2/3 object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default EvergreenThought;
