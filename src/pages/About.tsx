import Layout from '@/components/Layout';
import { CheckCircle2, Globe, Award, Users, TrendingUp, ShieldCheck, Lightbulb, Heart, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const stats = [
  { value: "ISO 27001", label: "Information Security", icon: ShieldCheck },
  { value: "ISO 9001", label: "Quality Management", icon: Award },
  { value: "5+ Countries", label: "International clients", icon: Globe },
  { value: "Govt. Projects", label: "Indian public sector", icon: Star },
];

const values = [
  {
    icon: Lightbulb,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    title: "Pioneering Spirit",
    desc: "We embrace emerging technologies early and build practices around them — so our clients are always ahead, never catching up.",
  },
  {
    icon: TrendingUp,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    title: "Innovation First",
    desc: "Every engagement starts with a blank canvas. We design solutions that fit your exact context, not templates from the last client.",
  },
  {
    icon: Heart,
    color: "text-rose-500",
    bg: "bg-rose-500/10",
    border: "border-rose-500/20",
    title: "Client Success",
    desc: "Our professionals align their personal growth with your success. When you win, we win — and that's not a tagline, it's how we hire.",
  },
  {
    icon: ShieldCheck,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    title: "Quality & Security",
    desc: "ISO 27001:2013 and ISO 9001:2015 certified. Every delivery is backed by a quality management system with zero compromise on security.",
  },
  {
    icon: Globe,
    color: "text-violet-500",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    title: "Global Reach",
    desc: "We serve clients across the US, Canada, Australia, New Zealand, and India — bringing global perspective to every local challenge.",
  },
  {
    icon: Users,
    color: "text-sky-500",
    bg: "bg-sky-500/10",
    border: "border-sky-500/20",
    title: "People-Powered",
    desc: "Skilled and passionate professionals who project their futures alongside client success. Not just a team — a shared mission.",
  },
];

const milestones = [
  {
    year: "2015",
    title: "Founded with a cloud-first mindset",
    desc: "Started with a mission to modernize how teams build, operate, and scale on the cloud.",
    icon: Star,
  },
  {
    year: "2018",
    title: "Enterprise-grade delivery standards",
    desc: "Strengthened delivery practices and governance to support high-impact programs.",
    icon: Award,
  },
  {
    year: "2021",
    title: "Expanded across markets",
    desc: "Scaled services across multiple regions while keeping engineering quality consistent.",
    icon: Globe,
  },
  {
    year: "2024",
    title: "AI + cloud acceleration",
    desc: "Evolved into modern cloud and AI execution with measurable business outcomes.",
    icon: TrendingUp,
  },
];

const About = () => {
  return (
    <Layout>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[#07111f]">
        {/* Ambient glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 -left-40 h-[640px] w-[640px] rounded-full bg-blue-700/10 blur-[130px]" />
          <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-indigo-700/10 blur-[110px]" />
        </div>

        <div className="relative max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-2 py-16 lg:py-24">
            {/* Left */}
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-blue-400 mb-6">
                About CloudFirst®
              </span>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Technology that{" "}
                <span className="text-blue-400">powers your cloud journey</span>
              </h1>
              <p className="text-white/60 text-lg leading-relaxed max-w-lg mb-8">
                CloudFirst Technology® Private Limited is an ISO 27001:2013 and ISO 9001:2015 certified company empowering clients globally through cutting-edge IT services — from US and Australia to Indian government projects.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-400 text-white text-sm font-bold rounded-lg transition-colors"
                >
                  Work with us <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/careers"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 hover:border-white/40 text-white/80 text-sm font-medium rounded-lg transition-colors"
                >
                  Join the team
                </Link>
              </div>
            </div>

            {/* Right — image with floating badges */}
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-500/20 via-transparent to-indigo-500/15 blur-2xl" />
              <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80"
                  alt="CloudFirst team collaborating"
                  className="w-full h-72 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07111f]/70 via-transparent to-transparent" />
              </div>

              {/* Floating badge — top left */}
              <div className="absolute -top-4 -left-4 flex items-center gap-2 rounded-xl bg-[#0d1a2e] border border-blue-500/30 px-4 py-2.5 shadow-xl backdrop-blur-sm">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span className="text-xs font-semibold text-white">ISO 27001:2013 Certified</span>
              </div>

              {/* Floating badge — bottom right */}
              <div className="absolute -bottom-4 -right-4 rounded-xl bg-[#0d1a2e] border border-white/10 px-4 py-3 shadow-xl backdrop-blur-sm">
                <div className="text-xs text-white/50 mb-0.5">Markets served</div>
                <div className="text-xl font-bold text-blue-400" style={{ fontFamily: "'Georgia', serif" }}>Trusted across 5+ countries</div>
              </div>

              {/* Floating badge — bottom left */}
              <div className="absolute bottom-8 -left-5 rounded-xl bg-[#0d1a2e] border border-emerald-500/20 px-3 py-2 shadow-xl backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-medium text-white">ISO 9001:2015 Certified</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5 mb-0">
            {stats.map(({ value, label, icon: Icon }) => (
              <div key={label} className="bg-[#0a1628] px-6 py-5 flex items-center gap-4">
                <div className="h-9 w-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <div className="text-lg font-bold text-white" style={{ fontFamily: "'Georgia', serif" }}>{value}</div>
                  <div className="text-xs text-white/40">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white border-b border-gray-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-16">
          <div className="rounded-2xl overflow-hidden">
            <img
              src="/About_us.png"
              alt="About CloudFirst"
              className="w-full h-[520px] md:h-[620px] object-cover contrast-125 brightness-95"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80";
              }}
            />
          </div>
        </div>
      </section>

      <section id="our-leadership" className="bg-white border-b border-gray-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-16">
          <div className="rounded-2xl overflow-hidden">
            <img
              src="/Our_leadership.png"
              alt="Our leadership"
              className="w-full h-[520px] md:h-[620px] object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ── Vision & Mission ── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-16">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Purpose</span>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>
              Our vision & mission
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Vision card */}
            <div className="relative bg-[#07111f] rounded-2xl p-8 overflow-hidden">
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-blue-600/15 blur-[60px]" />
              </div>
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center h-11 w-11 rounded-xl bg-blue-500/15 border border-blue-500/25 mb-5">
                  <Star className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "'Georgia', serif" }}>Our Vision</h3>
                <p className="text-white/60 text-[15px] leading-relaxed">
                  To be a positive contributor in our client's success by providing Information Technology services that produce consistent, excellent results — every engagement, every time.
                </p>
              </div>
            </div>

            {/* Mission card */}
            <div className="relative bg-[#07111f] rounded-2xl p-8 overflow-hidden">
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full bg-indigo-600/15 blur-[60px]" />
              </div>
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center h-11 w-11 rounded-xl bg-indigo-500/15 border border-indigo-500/25 mb-5">
                  <Lightbulb className="w-5 h-5 text-indigo-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "'Georgia', serif" }}>Our Mission</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                    <span className="text-white/60 text-[15px] leading-relaxed">Building Technology that changes everything.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                    <span className="text-white/60 text-[15px] leading-relaxed">Responding to industry needs using creativity, flexibility and technical expertise — from simple analyses to complex transformations.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                    <span className="text-white/60 text-[15px] leading-relaxed">Total focus on customer satisfaction and quality workmanship in every deliverable.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f8fa] border-b border-gray-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-16">
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Milestones & journey</span>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>
              Our milestones
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden">
              <div className="aspect-[16/10] w-full bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center">
                <div className="mx-8 w-full rounded-2xl border-2 border-dashed border-blue-200/70 bg-white/70 px-6 py-10 text-center">
                  <div className="text-sm font-semibold text-gray-900 mb-1">Milestones image</div>
                  <div className="text-sm text-gray-500">Add your journey graphic here</div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white shadow-sm p-6 md:p-8">
              <div className="relative">
                <div className="absolute left-[18px] top-2 bottom-2 w-px bg-gradient-to-b from-blue-200 via-indigo-200 to-transparent" />
                <div className="space-y-6">
                  {milestones.map(({ year, title, desc, icon: Icon }) => (
                    <div key={year} className="relative pl-12">
                      <div className="absolute left-0 top-0">
                        <div className="h-9 w-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                          <Icon className="w-4 h-4 text-blue-600" />
                        </div>
                      </div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-xs font-bold tracking-widest text-blue-600">{year}</span>
                        <span className="h-1 w-1 rounded-full bg-blue-300" />
                        <h3 className="text-base font-bold text-gray-900">{title}</h3>
                      </div>
                      <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="bg-[#f7f8fa]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-16">
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">What drives us</span>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>
              Our core values
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {values.map(({ icon: Icon, color, bg, border, title, desc }) => (
              <article
                key={title}
                className="group relative bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 overflow-hidden"
              >
                <div className={`absolute top-0 left-0 right-0 h-0.5 ${bg} opacity-0 group-hover:opacity-100 transition-opacity`} />
                <div className={`inline-flex items-center justify-center h-10 w-10 rounded-xl ${bg} border ${border} mb-4`}>
                  <Icon className={`w-5 h-5 ${color}`} />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden bg-[#07111f]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
          <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-blue-600/10 blur-[80px]" />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-6 lg:px-10 py-16 text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-400 mb-4">Let's grow together</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Georgia', serif" }}>
            Ready to experience the CloudFirst difference?
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto mb-8">
            Leverage our pioneering spirit, innovation, and excellence on your journey towards growth.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-500 hover:bg-blue-400 text-white text-sm font-bold rounded-lg transition-colors"
            >
              Get in touch <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/careers"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 hover:border-white/40 text-white/70 text-sm font-medium rounded-lg transition-colors"
            >
              View open roles
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
