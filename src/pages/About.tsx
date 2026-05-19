import Layout from '@/components/Layout';
import { Globe, Award, Users, TrendingUp, ShieldCheck, Lightbulb, Heart, Star, ArrowRight, Linkedin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const S3_IMAGE_BASE = 'https://cdn.cloudfirst.tech/S3_image/';

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

const leadershipLinks = [
  { label: "YouTube video", href: "https://www.youtube.com/watch?v=_5K0VRnATqs" },
  {
    label: "Medium article",
    href: "https://medium.com/@ashishsrivastava_41825/cloudfirsts-expertise-in-cloud-security-aab0cd396a49",
  },
  { label: "Corporate Connect Global", href: "https://corporateconnectglobal.com/cloudfirst-technology-pvt-ltd/" },
  { label: "Innovative Zone India", href: "https://innovativezoneindia.com/cloudfirst-technology-private-limited/" },
  {
    label: "Insights Success",
    href: "https://www.insightssuccess.in/cloudfirst-technology-private-limited-elevating-your-biz-into-the-future-virtual-verse/",
  },
];

const perspectiveTypeColours: Record<string, string> = {
  Video: "text-purple-700 bg-purple-50 border-purple-100",
  Article: "text-blue-700 bg-blue-50 border-blue-100",
};

const getDomain = (url: string) => {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
};

const getPerspectiveType = (url: string) => {
  const u = url.toLowerCase();
  if (u.includes("youtube.com") || u.includes("youtu.be")) return "Video";
  return "Article";
};

const About = () => {
  const { hash } = useLocation();
  const showLeadership = hash === '#our-leadership';

  return (
    <Layout>
      {!showLeadership && (
        <section className="relative overflow-hidden border-b border-gray-100 bg-gradient-to-br from-sky-50 via-white to-blue-50">
          <div
            className="absolute inset-0 opacity-60"
            style={{
              background:
                "radial-gradient(ellipse at 15% 30%, rgba(56,189,248,0.32) 0%, transparent 55%), radial-gradient(ellipse at 85% 25%, rgba(59,130,246,0.22) 0%, transparent 55%), radial-gradient(ellipse at 80% 85%, rgba(14,165,233,0.18) 0%, transparent 60%)",
            }}
          />

          <div className="relative max-w-[1200px] mx-auto px-6 lg:px-10 py-20 md:py-24">
            <div className="max-w-4xl text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Georgia', serif" }}>
                About CloudFirst
              </h2>
              <div className="space-y-6 text-gray-800 leading-relaxed text-lg md:text-xl">
                <p>
                  CloudFirst Technology® Private Limited—an ISO 27001:2013 and ISO 9001:2015 certified company—is empowering its client base by leveraging information technology resources.
                </p>
                <p>
                  The company encompasses experience and expertise in catering to international clients from the US, Canada, Dubai, Singapore, and many more, and has also undertaken several Indian government projects.
                </p>
                <p>
                  CloudFirst Technology® is a workforce of skilled and passionate professionals who align their future with company and client success. Leverage our pioneering spirit, innovation, and excellence on your journey towards growth.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {showLeadership && (
        <>
          <section id="our-leadership" className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-700 via-teal-600 to-sky-700" />
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: "url('https://cdn.cloudfirst.tech/All_image/New_world_map.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="absolute inset-0 bg-black/10" />
            <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-20 text-center text-white">
              <h1 className="text-3xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Georgia', serif" }}>
                Our leadership
              </h1>
              <div className="flex justify-center">
                <div className="rounded-full border border-white/30 bg-white/10 px-4 py-2">
                  <Breadcrumb>
                    <BreadcrumbList className="text-white/80">
                      <BreadcrumbItem>
                        <BreadcrumbLink asChild className="text-white/80 hover:text-white">
                          <Link to="/">Home</Link>
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator className="text-white/70" />
                      <BreadcrumbItem>
                        <BreadcrumbPage className="text-white">Our leadership</BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white border-b border-gray-100">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
              <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10 items-center">
                <div className="overflow-hidden w-full max-w-sm md:max-w-md mx-auto">
                  <div className="h-[420px] md:h-[520px] w-full">
                    <img
                      src="https://cdn.cloudfirst.tech/All_image/Our_leadership.png"
                      alt="Our leadership"
                      className="w-full h-full object-cover object-[50%_35%]"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80";
                      }}
                    />
                  </div>
                  <div className="mt-4 flex justify-center">
                    <a
                      href="https://www.linkedin.com/in/cloudfirstashish/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </a>
                  </div>
                </div>

                <div>
                  <div className="space-y-5 text-gray-700 leading-relaxed text-[18px]">
                    <div className="space-y-1">
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Ashish Srivastava
                      </h2>
                      <div className="text-blue-600 font-medium">Founder &amp; CTO</div>
                    </div>
                    <p>
                      CloudFirst Technology® is redefining the future of IT and cloud innovation under the dynamic leadership of Ashish Srivastava. Based in Mumbai, Ashish is a technology visionary with over 15 years of experience transforming the IT landscape across both the public and private sectors. He is recognized for pioneering projects in AI, cloud infrastructure, security, and digital transformation, serving international clients from the US to Australia and delivering high-impact solutions to numerous Indian government ministries.
                    </p>
                    <p>
                      Ashish&apos;s expertise spans strategic leadership, hands-on IT services delivery, and cutting-edge research and development. His unique approach blends a deep passion for technological advancement with an unwavering commitment to social impact—driving initiatives that advance education, health, rural empowerment, and digital literacy. As a result, CloudFirst is not just a technology provider but a dedicated partner in empowering organizations to adapt, secure, and thrive in the digital era.
                    </p>
                    <p>
                      He is also an active member of the Business Council for Innovation and Technology. Notably, he participated in an insightful and interactive session with the Hon&apos;ble President of India, Smt. Droupadi Murmu, held in Bratislava, Slovakia.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {!showLeadership && (
        <section className="bg-white border-b border-gray-100">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="flex items-center justify-center">
                <div className="w-full max-w-xl">
                  <img src="https://cdn.cloudfirst.tech/All_image/about_us2.jpg" alt="Our vision and mission" className="w-full h-auto" loading="lazy" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                </div>
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Georgia', serif" }}>
                  <span className="text-blue-600">Our Vision</span> & <span className="text-pink-600">Mission</span>
                </h2>
                <div className="h-1 w-16 bg-gradient-to-r from-blue-600 to-pink-600 rounded-full mb-6" />

                <div className="text-gray-700 leading-relaxed text-[15px] space-y-4">
                  <p>
                    Our core vision is to be a positive contributor in our client's success by providing Information Technology services that produces consistent excellent results.
                  </p>
                  <p>And yes, we are always dedicated and believe in:</p>
                  <ul className="space-y-2">
                    <li>Building Technology that changes everything.</li>
                    <li>
                      To respond to industry's needs for Information Technology services using creativity, flexibility and technical expertise in performing simple or complex analyses and services with total focus on customer satisfaction and quality workmanship
                    </li>
                    <li>Total focus on customer satisfaction and quality workmanship in every deliverable.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {!showLeadership ? (
        <section className="bg-[#f7f8fa] border-b border-gray-100">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 items-start lg:items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Milestones & journey</span>
                <h2 className="mt-2 text-4xl md:text-5xl font-bold text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>
                  Our Journey
                </h2>
                <div className="mt-3 text-base md:text-lg font-semibold text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>
                  Building the Future with Cloud-First Innovation
                </div>
                <div className="mt-5 space-y-4 text-gray-700 leading-[1.7] text-[15px] max-w-2xl">
                  <p>
                    Since its inception, CloudFirst Technology has been committed to helping businesses embrace digital transformation through scalable, secure, and future-ready cloud solutions.
                  </p>
                  <p>
                    From enabling seamless cloud adoption and modern workplace transformation to delivering advanced cloud security, AI, and infrastructure solutions, our journey has been driven by innovation, reliability, and customer success.
                  </p>
                  <p>
                    Today, CloudFirst Technology works with leading cloud ecosystems including Google Cloud, AWS, and Microsoft technologies, supporting organizations in building resilient digital operations and accelerating business growth.
                  </p>
                  <p>
                    Our milestones reflect more than growth, they represent the partnerships we’ve built, the businesses we’ve empowered, and our continued commitment to shaping the future of cloud and digital transformation.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 self-center justify-self-center w-full max-w-xl lg:mt-6">
                {[
                  { value: "7000+", label: "Customers" },
                  { value: "16+", label: "Years of building" },
                  { value: "50+", label: "Awards and Certificates" },
                  { value: "50+", label: "Services" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-gray-200 bg-white p-7 sm:p-8 shadow-sm text-center flex flex-col items-center justify-center h-[168px] sm:h-[176px] lg:h-[184px]"
                  >
                    <div
                      className="text-5xl lg:text-6xl font-bold text-blue-700 leading-none"
                      style={{ fontFamily: "'Georgia', serif" }}
                    >
                      {item.value}
                    </div>
                    <div className="mt-3 text-[15px] font-medium text-gray-900 leading-snug max-w-[12rem]">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="bg-[#f7f8fa] border-b border-gray-100">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr_1fr] gap-6 items-center">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-6">
                {[
                  {
                    src: "https://gragwebsite.s3.ap-south-1.amazonaws.com/London+Pics/1750014704224.jpeg",
                    alt: "London image",
                  },
                  {
                    src: "https://gragwebsite.s3.ap-south-1.amazonaws.com/Dubai+Pics/WhatsApp+Image+2025-04-24+at+6.25.05+PM.jpeg",
                    alt: "Dubai image",
                  },
                  {
                    src: "https://gragwebsite.s3.ap-south-1.amazonaws.com/London+Pics/Slovakia+Pics/1000001380.jpeg",
                    alt: "Slovakia image",
                  },
                ].map((item, index) => (
                  <div key={`${item.src}-${index}`} className="rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden">
                    <div className="aspect-[4/3] w-full bg-slate-100">
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.src = "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80";
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden">
                <div className="aspect-[4/5] w-full bg-white p-3 md:p-4">
                  <img
                    src={`${S3_IMAGE_BASE}president_new_image.jpg`}
                    alt="Presidential image"
                    className="w-full h-full object-contain"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80";
                    }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-6">
                {[
                  {
                    src: `${S3_IMAGE_BASE}1763897496613.jpg`,
                    alt: "Leadership collage image 1",
                  },
                  {
                    src: `${S3_IMAGE_BASE}1763897495547+(1)+(1).jpg`,
                    alt: "Leadership collage image 2",
                  },
                  {
                    src: `${S3_IMAGE_BASE}IMG-20260218-WA0023+(1).jpg`,
                    alt: "Leadership collage image 3",
                  },
                ].map((item, index) => (
                  <div key={`${item.src}-${index}`} className="rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden">
                    <div className="aspect-[4/3] w-full bg-slate-100">
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.src = "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80";
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {showLeadership && (
        <section className="bg-white border-b border-gray-100">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-600" style={{ fontFamily: "'Georgia', serif" }}>
                Founder’s Perspective
              </h2>
            </div>

            <div className="space-y-10 max-w-4xl mx-auto">
              <div className="space-y-4">
                {leadershipLinks.filter((l) => getPerspectiveType(l.href) === "Article").map((link) => {
                  const domain = getDomain(link.href);
                  const type = getPerspectiveType(link.href);
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="block bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:border-gray-200 hover:shadow-md transition-all"
                    >
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div className="flex items-start gap-4 flex-1">
                          <div className="w-16 h-12 rounded-xl border border-gray-100 bg-gray-50 flex items-center justify-center overflow-hidden flex-shrink-0">
                            <img
                              src={domain ? `https://logo.clearbit.com/${domain}` : ""}
                              alt=""
                              className="w-full h-full object-contain p-2"
                              loading="lazy"
                              onError={(e) => {
                                const fallbackDomain = getDomain(link.href);
                                e.currentTarget.src = fallbackDomain ? `https://www.google.com/s2/favicons?domain=${fallbackDomain}&sz=256` : "";
                              }}
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3 flex-wrap">
                              <span className={`text-[10px] font-bold border rounded px-2.5 py-1 uppercase tracking-wider ${perspectiveTypeColours[type]}`}>
                                {type}
                              </span>
                              {domain ? <span className="text-xs text-gray-400">{domain}</span> : null}
                            </div>
                            <h3 className="text-base font-bold text-gray-900 mb-1" style={{ fontFamily: "'Georgia', serif" }}>
                              {link.label}
                            </h3>
                          </div>
                        </div>
                        <span className="flex-shrink-0 text-xs text-blue-600 hover:text-blue-800 font-semibold transition-colors whitespace-nowrap self-start">
                          Read more →
                        </span>
                      </div>
                    </a>
                  );
                })}
              </div>

              <div className="space-y-4">
                {leadershipLinks.filter((l) => getPerspectiveType(l.href) === "Video").map((link) => {
                  const domain = getDomain(link.href);
                  const type = getPerspectiveType(link.href);
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="block bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:border-gray-200 hover:shadow-md transition-all"
                    >
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div className="flex items-start gap-4 flex-1">
                          <div className="w-16 h-12 rounded-xl border border-gray-100 bg-gray-50 flex items-center justify-center overflow-hidden flex-shrink-0">
                            <img
                              src={domain ? `https://logo.clearbit.com/${domain}` : ""}
                              alt=""
                              className="w-full h-full object-contain p-2"
                              loading="lazy"
                              onError={(e) => {
                                const fallbackDomain = getDomain(link.href);
                                e.currentTarget.src = fallbackDomain ? `https://www.google.com/s2/favicons?domain=${fallbackDomain}&sz=256` : "";
                              }}
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3 flex-wrap">
                              <span className={`text-[10px] font-bold border rounded px-2.5 py-1 uppercase tracking-wider ${perspectiveTypeColours[type]}`}>
                                {type}
                              </span>
                              {domain ? <span className="text-xs text-gray-400">{domain}</span> : null}
                            </div>
                            <h3 className="text-base font-bold text-gray-900 mb-1" style={{ fontFamily: "'Georgia', serif" }}>
                              {link.label}
                            </h3>
                          </div>
                        </div>
                        <span className="flex-shrink-0 text-xs text-blue-600 hover:text-blue-800 font-semibold transition-colors whitespace-nowrap self-start">
                          Read more →
                        </span>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {!showLeadership && (
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
      )}

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
              to="/company/careers"
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
