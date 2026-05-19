import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
 
const STATS = [
  { value: '7000+', label: 'Enterprise Clients' },
  { value: '99.99%', label: 'Uptime SLA' },
  { value: '24/7', label: 'Expert Support' },
  { value: '50+', label: 'Certifications' },
];
 
// ─────────────────────────────────────────────
// Aggressive watermark killer — runs repeatedly
// to catch dynamically injected DOM nodes
// ─────────────────────────────────────────────
type HeroSectionProps = {
  isPageReady: boolean;
};
 
const HeroSection = ({ isPageReady }: HeroSectionProps) => {
  const [form, setForm] = useState({ name: '', email: '', phoneCca2: 'IN', phoneNumber: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  type CountryOption = { cca2: string; name: string; dial: string; flagUrl: string };
  const fallbackPhoneCountries = [
    { cca2: 'IN', name: 'India', dial: '+91', flagUrl: 'https://flagcdn.com/w40/in.png' },
    { cca2: 'US', name: 'United States', dial: '+1', flagUrl: 'https://flagcdn.com/w40/us.png' },
    { cca2: 'GB', name: 'United Kingdom', dial: '+44', flagUrl: 'https://flagcdn.com/w40/gb.png' },
    { cca2: 'AE', name: 'United Arab Emirates', dial: '+971', flagUrl: 'https://flagcdn.com/w40/ae.png' },
    { cca2: 'SG', name: 'Singapore', dial: '+65', flagUrl: 'https://flagcdn.com/w40/sg.png' },
  ];
  const [phoneCountries, setPhoneCountries] = useState(fallbackPhoneCountries);
  const [phoneCountriesLoaded, setPhoneCountriesLoaded] = useState(false);
  const [isPhoneCountryOpen, setIsPhoneCountryOpen] = useState(false);
 
  const taglineRef    = useRef<HTMLDivElement>(null);
  const headlineRef   = useRef<HTMLDivElement>(null);
  const cloudRef      = useRef<HTMLSpanElement>(null);
  const cloudBurstRef = useRef<HTMLSpanElement>(null);
  const cloudTextRef  = useRef<HTMLSpanElement>(null);
  const cloudIconRef  = useRef<SVGSVGElement>(null);
  const planeRef      = useRef<HTMLSpanElement>(null);
  const subRef        = useRef<HTMLParagraphElement>(null);
  const ctaRef        = useRef<HTMLDivElement>(null);
  const statsRef      = useRef<HTMLDivElement>(null);
  const statRefs      = useRef<HTMLDivElement[]>([]);
  const formRef       = useRef<HTMLDivElement>(null);
  const phoneCountryRef = useRef<HTMLDivElement>(null);
 
  statRefs.current = [];
  const selectedPhoneCountry = phoneCountries.find((c) => c.cca2 === form.phoneCca2) ?? phoneCountries[0];
 
  const getPublicIp = async () => {
    try {
      const controller = new AbortController();
      const timeoutId = window.setTimeout(() => controller.abort(), 1500);
      const res = await fetch('https://api.ipify.org?format=json', { signal: controller.signal });
      window.clearTimeout(timeoutId);
      if (!res.ok) return '';
      const data = (await res.json()) as { ip?: unknown };
      return typeof data.ip === 'string' ? data.ip : '';
    } catch {
      return '';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    setSubmitError('');

    const timestamp = new Date().toISOString();
    const source = typeof window !== 'undefined' ? window.location.hostname || 'cloudfirst.tech' : 'cloudfirst.tech';
    const ip = await getPublicIp();

    try {
      const res = await fetch('https://wefll4iita.execute-api.ap-south-1.amazonaws.com/dev/send-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phoneNumber,
          message: form.message,
          source,
          timestamp,
          ip,
        }),
      });

      if (!res.ok) {
        const text = await res.text().catch(() => '');
        throw new Error(text || `Request failed: ${res.status}`);
      }

      setSubmitted(true);
      setForm({ name: '', email: '', phoneCca2: 'IN', phoneNumber: '', message: '' });
      setTimeout(() => setSubmitted(false), 4000);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Failed to send message');
    } finally {
      setIsSubmitting(false);
    }
  };
 
  useEffect(() => {
    const controller = new AbortController();
    fetch('https://restcountries.com/v3.1/all?fields=name,idd,cca2,flags', { signal: controller.signal })
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(`Failed to load countries: ${r.status}`))))
      .then((data: unknown) => {
        const toCountryOption = (value: unknown): CountryOption | null => {
          if (!value || typeof value !== 'object') return null;
          const v = value as {
            cca2?: unknown;
            name?: { common?: unknown } | unknown;
            flags?: { png?: unknown; svg?: unknown } | unknown;
            idd?: { root?: unknown; suffixes?: unknown } | unknown;
          };
          const cca2 = typeof v.cca2 === 'string' ? v.cca2.toUpperCase() : '';
          const name =
            typeof (v.name as { common?: unknown } | undefined)?.common === 'string'
              ? (v.name as { common: string }).common
              : '';
          const flagUrl = `https://flagcdn.com/w40/${cca2.toLowerCase()}.png`;
          const idd = v.idd as { root?: unknown; suffixes?: unknown } | undefined;
          const root = typeof idd?.root === 'string' ? idd.root : '';
          const suffixes = Array.isArray(idd?.suffixes) ? idd?.suffixes : [];
          const suffix = typeof suffixes?.[0] === 'string' ? suffixes[0] : '';
          const dial = root ? `${root}${suffix}` : '';
          if (!cca2 || !name || !dial) return null;
          return { cca2, name, dial, flagUrl };
        };
 
        const next = (Array.isArray(data) ? data : [])
          .map(toCountryOption)
          .filter((v): v is CountryOption => Boolean(v));
        next.sort((a, b) => a.name.localeCompare(b.name));
        if (next.length) setPhoneCountries(next);
        setPhoneCountriesLoaded(true);
      })
      .catch(() => {
        setPhoneCountriesLoaded(true);
      });
    return () => controller.abort();
  }, []);
 
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      const t = e.target as Node | null;
      if (!t) return;
      if (!phoneCountryRef.current?.contains(t)) setIsPhoneCountryOpen(false);
    };
    document.addEventListener('mousedown', onDown);
    return () => document.removeEventListener('mousedown', onDown);
  }, []);
 
  useEffect(() => {
    if (!isPageReady) return;
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    const headlineSpans = headlineRef.current?.querySelectorAll('span');
 
    tl.fromTo(taglineRef.current,  { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 })
      .fromTo(headlineRef.current, { y: 40,  opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.2');
 
    if (headlineSpans && headlineSpans.length) {
      tl.fromTo(
        headlineSpans,
        { scale: 0.92, opacity: 0, y: 20 },
        { scale: 1, opacity: 1, y: 0, duration: 0.85, stagger: 0.1, ease: 'back.out(1.4)' },
        '-=0.55'
      );
    }
 
    if (cloudRef.current && cloudBurstRef.current && cloudTextRef.current) {
      gsap.set(cloudTextRef.current, { opacity: 0, scale: 0.65, y: 12 });
      tl.fromTo(
        cloudBurstRef.current,
        { opacity: 1, scale: 0.75, filter: 'blur(0px)' },
        { opacity: 0.92, scale: 1.15, filter: 'blur(1px)', duration: 0.55, ease: 'power2.out' },
        '+=0.1'
      ).fromTo(
        cloudTextRef.current,
        { opacity: 0, scale: 0.65, y: 12 },
        { opacity: 1, scale: 1, y: 0, duration: 0.7, ease: 'back.out(1.5)' },
        '-=0.2'
      );
 
      gsap.to(cloudBurstRef.current, {
        duration: 1.4,
        scale: 1.05,
        opacity: 0.7,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });
 
      gsap.to(cloudTextRef.current, {
        duration: 1.6,
        y: -2,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });
    }
 
    if (cloudIconRef.current) {
      gsap.to(cloudIconRef.current, {
        duration: 1.4,
        x: 6,
        y: -4,
        opacity: 0.95,
        scale: 1.08,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });
    }
 
    if (planeRef.current) {
      gsap.set(planeRef.current, { display: 'none' });
    }
 
    tl.fromTo(subRef.current,      { y: 25,  opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, '-=0.4')
      .fromTo(ctaRef.current,      { y: 25,  opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.3')
      .fromTo(statRefs.current,    { y: 25,  opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 }, '-=0.3')
      .fromTo(formRef.current,     { x: 50,  opacity: 0 }, { x: 0, opacity: 1, duration: 0.9 }, '-=0.8');
  }, [isPageReady]);
 
  return (
    <section
      className="relative min-h-[46vh] flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://cdn.cloudfirst.tech/S3_image/final_hero_image.png')" }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      {/* ─────────────────────────────────────────────────────────────────
          GLOBAL CSS WATERMARK SUPPRESSION
          Covers every known selector pattern Spline has ever used,
          plus a universal bottom-right corner mask as final fallback.
      ──────────────────────────────────────────────────────────────────── */}
      <style>{`
        /* ── Spline link / badge selectors ── */
        a[href*="spline.design"],
        a[href*="splinetool"],
        a[href*="app.spline"],
        .spline-watermark,
        .spline-watermark__container,
        [class*="watermark"],
        [id*="watermark"],
        [class*="spline-badge"],
        [id*="spline-badge"] {
          display: none !important;
          opacity: 0 !important;
          visibility: hidden !important;
          pointer-events: none !important;
          width: 0 !important;
          height: 0 !important;
          overflow: hidden !important;
        }
 
        /* ── Hide any absolute/fixed anchor inside the Spline wrapper ── */
        .spline-scene-wrap a {
          display: none !important;
          pointer-events: none !important;
        }
 
        /* ── Spline canvas container overflow clip ── */
        .spline-scene-wrap canvas {
          display: block;
        }
 
        /* ── Loader letter animation ── */
        @keyframes loader-cf {
          0%,100% { opacity: 0.2; transform: translateY(0); }
          30%      { opacity: 1;   transform: translateY(-5px); }
          60%      { opacity: 0.5; transform: translateY(0); }
        }
        @keyframes loader-ring {
          0%   { box-shadow: 0 0 0 0 transparent, 0 0 60px 18px rgba(59,130,246,0.30),  0 0 120px 40px rgba(59,130,246,0.18); }
          50%  { box-shadow: 0 0 0 0 transparent, 0 0 80px 28px rgba(165,180,252,0.28), 0 0 160px 60px rgba(59,130,246,0.14); }
          100% { box-shadow: 0 0 0 0 transparent, 0 0 60px 18px rgba(59,130,246,0.30), 0 0 120px 40px rgba(165,180,252,0.18); }
        }
        ::placeholder { color: #64748b; }
      `}</style>
 
     
 
      {/* ── MAIN CONTENT ────────────────────────────────────────────────── */}
      {isPageReady && (
        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-10 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
 
            {/* ── LEFT: COPY ── */}
            <div className="flex flex-col gap-7 text-center lg:text-left">
 
              {/* Eyebrow */}
              <div
                ref={taglineRef}
                className="flex items-center gap-2.5 justify-center lg:justify-start opacity-0"
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: '#93c5fd', boxShadow: '0 0 10px rgba(147,197,253,0.9)' }}
                />
                <span style={{
                  fontSize: '0.68rem', fontWeight: 700,
                  letterSpacing: '0.18em', textTransform: 'uppercase',
                  color: '#ffffff',
                }}>
                  Securing Clouds · Empowering Trust
                </span>
              </div>
 
              {/* Headline */}
              <div ref={headlineRef} className="opacity-0">
                <h1 style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)',
                  fontWeight: 900, lineHeight: 1.05,
                  letterSpacing: '-0.02em', color: '#ffffff',
                }}>
                  <span
                    ref={cloudRef}
                    style={{
                      position: 'relative',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      minWidth: 118,
                      padding: '0 10px',
                    }}
                  >
                    <span
                      ref={cloudBurstRef}
                      style={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        width: 92,
                        height: 64,
                        transform: 'translate(-50%, -50%)',
                        zIndex: 1,
                        pointerEvents: 'none',
                        opacity: 0.95,
                      }}
                    >
                      <svg width="92" height="64" viewBox="0 0 92 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 40C9.715 40 3 33.285 3 25s6.715-15 15-15c1.373 0 2.706.188 4 .545C24.89 5.48 30.7 1 37.875 1 45.675 1 52.353 6.262 54.784 13.05 60.74 13.874 65 18.796 65 24c0 .03-.002.06-.002.091C72.761 25.191 79 31.548 79 39c0 8.284-6.716 15-15 15H18Z" fill="rgba(148,163,184,0.18)" />
                      </svg>
                    </span>
                    <span
                      ref={cloudTextRef}
                      style={{
                        display: 'inline-block',
                        position: 'relative',
                        zIndex: 2,
                        fontWeight: 900,
                        color: '#ffffff',
                      }}
                    >
                      Cloud
                    </span>
                  </span> Security
                  <br />
                  <span style={{
                    color: '#ffffff',
                  }}>
                    &amp; AI-Powered
                  </span>
                  <br />
                  <span style={{ color: '#ffffff' }}>Governance</span>
                </h1>
              </div>
 
              {/* Sub */}
              <p
                ref={subRef}
                className="opacity-0"
                style={{ fontSize: '1.05rem', lineHeight: 1.75, color: '#ffffff', maxWidth: 480 }}
              >
                Enterprise-grade cloud security, compliance automation, and AI-driven data
                governance — trusted by 7000+ organizations worldwide.
              </p>
 
              {/* CTAs */}
              <div
                ref={ctaRef}
                className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start opacity-0"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, #2563eb, #6d28d9)',
                    color: '#fff',
                    boxShadow: '0 6px 24px rgba(79,70,229,0.35)',
                    letterSpacing: '0.02em',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)';
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 12px 36px rgba(79,70,229,0.5)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.transform = '';
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 6px 24px rgba(79,70,229,0.35)';
                  }}
                >
                  Get Started
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300"
                  style={{
                    border: '1.5px solid rgba(255,255,255,0.40)',
                    color: '#ffffff',
                    background: 'rgba(255,255,255,0.10)',
                    letterSpacing: '0.02em',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.20)';
                    (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)';
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 20px rgba(255,255,255,0.15)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.10)';
                    (e.currentTarget as HTMLAnchorElement).style.transform = '';
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = '';
                  }}
                >
                  See How It Works
                </Link>
              </div>
 
              {/* Stats */}
              <div ref={statsRef} className="grid grid-cols-2 sm:grid-cols-4 gap-3 opacity-0">
                {STATS.map(s => (
                  <div
                    key={s.label}
                    ref={el => { if (el) statRefs.current.push(el); }}
                    style={{
                      padding: '12px 14px', borderRadius: 14,
                      background: 'rgba(255,255,255,0.95)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      boxShadow: '0 10px 24px rgba(0,0,0,0.2)',
                    }}
                  >
                    <div style={{
                      fontFamily: 'Space Grotesk, sans-serif',
                      fontWeight: 800, fontSize: '1.3rem',
                      background: 'linear-gradient(135deg, #60a5fa, #c084fc)',
                      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                    }}>
                      {s.value}
                    </div>
                    <div style={{ fontSize: '0.72rem', fontWeight: 500, color: '#475569', marginTop: 2 }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
 
            {/* ── RIGHT: GLASSMORPHISM CONTACT CARD ── */}
            <div ref={formRef} className="w-full max-w-md mx-auto lg:mx-0 lg:ml-auto opacity-0">
              <div style={{
                borderRadius: 28,
                padding: '36px 32px',
                background: 'rgba(255,255,255,0.18)',
                border: '1px solid rgba(255,255,255,0.25)',
                backdropFilter: 'blur(12px) saturate(180%)',
                WebkitBackdropFilter: 'blur(12px) saturate(180%)',
                boxShadow: [
                  '0 8px 32px rgba(0,0,0,0.15)',
                  '0 0 0 1px rgba(255,255,255,0.2)',
                  'inset 0 1px 0 rgba(255,255,255,0.3)',
                ].join(', '),
              }}>
                {/* Header */}
                <div style={{ marginBottom: 28 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                    <div style={{
                      width: 8, height: 8, borderRadius: '50%',
                      background: 'linear-gradient(135deg,#a5b4fc,#3b82f6)',
                      boxShadow: '0 0 10px rgba(165,180,252,0.6)',
                    }} />
                    <span style={{
                      fontSize: '0.68rem', fontWeight: 700,
                      letterSpacing: '0.16em', textTransform: 'uppercase', color: '#ffffff',
                    }}>
                      Quick Connect
                    </span>
                  </div>
                  <h3 style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontWeight: 900, fontSize: '1.5rem', color: '#ffffff', lineHeight: 1.2,
                  }}>
                    Talk to an Expert
                  </h3>
                  <p style={{ fontSize: '0.84rem', color: '#e2e8f0', marginTop: 6 }}>
                    We respond within 24 hours
                  </p>
                </div>
 
                {submitted ? (
                  <div style={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center',
                    gap: 14, padding: '36px 0', textAlign: 'center',
                  }}>
                    <div style={{
                      width: 52, height: 52, borderRadius: '50%',
                      background: 'rgba(99,102,241,0.12)',
                      border: '1.5px solid rgba(99,102,241,0.3)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M4 12l6 6L20 6" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <p style={{ fontWeight: 700, fontSize: '1rem', color: '#ffffff' }}>Message sent!</p>
                    <p style={{ fontSize: '0.84rem', color: '#e2e8f0' }}>Our team will reach out shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    {[
                      { label: 'Name',       type: 'text',  key: 'name',  placeholder: 'Your full name' },
                      { label: 'Work Email', type: 'email', key: 'email', placeholder: 'you@company.com' },
                    ].map(f => (
                      <div key={f.key}>
                        <label style={{
                          display: 'block', fontSize: '0.75rem', fontWeight: 600,
                          color: '#ffffff', marginBottom: 6,
                        }}>
                          {f.label}
                        </label>
                        <input
                          type={f.type}
                          value={form[f.key as keyof typeof form]}
                          onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                          placeholder={f.placeholder}
                          required
                          style={{
                            width: '100%', padding: '11px 16px',
                            borderRadius: 12, fontSize: '0.875rem',
                            outline: 'none', transition: 'all 0.2s',
                            background: '#f8fafc',
                            border: '1.5px solid rgba(148,163,184,0.28)',
                            color: '#0f172a',
                            boxSizing: 'border-box',
                          }}
                          onFocus={e => {
                            e.currentTarget.style.border = '1.5px solid rgba(99,102,241,0.60)';
                            e.currentTarget.style.background = '#ffffff';
                            e.currentTarget.style.boxShadow = '0 0 0 3px rgba(99,102,241,0.12)';
                          }}
                          onBlur={e => {
                            e.currentTarget.style.border = '1.5px solid rgba(148,163,184,0.28)';
                            e.currentTarget.style.background = '#f8fafc';
                            e.currentTarget.style.boxShadow = 'none';
                          }}
                        />
                      </div>
                    ))}
 
                    <div>
                      <label style={{
                        display: 'block', fontSize: '0.75rem', fontWeight: 600,
                        color: '#ffffff', marginBottom: 6,
                      }}>
                        Phone Number
                      </label>
                      <div ref={phoneCountryRef} style={{ position: 'relative' }}>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            width: '100%',
                            borderRadius: 12,
                            background: '#f8fafc',
                            border: '1.5px solid rgba(148,163,184,0.28)',
                            overflow: 'hidden',
                            transition: 'all 0.2s',
                            boxSizing: 'border-box',
                          }}
                          onFocusCapture={(e) => {
                            const el = e.currentTarget as HTMLDivElement;
                            el.style.border = '1.5px solid rgba(99,102,241,0.60)';
                            el.style.background = '#ffffff';
                            el.style.boxShadow = '0 0 0 3px rgba(99,102,241,0.12)';
                          }}
                          onBlurCapture={(e) => {
                            const el = e.currentTarget as HTMLDivElement;
                            el.style.border = '1.5px solid rgba(148,163,184,0.28)';
                            el.style.background = '#f8fafc';
                            el.style.boxShadow = 'none';
                          }}
                        >
                          <button
                            type="button"
                            onClick={() => setIsPhoneCountryOpen((v) => !v)}
                            aria-label="Select country"
                            style={{
                              height: 44,
                              padding: '0 10px 0 12px',
                              border: 'none',
                              outline: 'none',
                              background: 'transparent',
                              color: '#0f172a',
                              fontSize: '0.875rem',
                              fontWeight: 700,
                              cursor: 'pointer',
                              boxSizing: 'border-box',
                              borderRight: '1px solid rgba(148,163,184,0.20)',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: 8,
                              userSelect: 'none',
                            }}
                          >
                            {selectedPhoneCountry.flagUrl ? (
                              <img
                                src={selectedPhoneCountry.flagUrl}
                                alt=""
                                width={18}
                                height={14}
                                style={{ width: 18, height: 14, borderRadius: 2, display: 'block' }}
                                loading="lazy"
                              />
                            ) : (
                              <span aria-hidden="true" style={{ width: 18, textAlign: 'center' }}>🏳️</span>
                            )}
                            <span style={{ whiteSpace: 'nowrap' }}>
                              {selectedPhoneCountry.cca2} {selectedPhoneCountry.dial}
                            </span>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6 9l6 6 6-6" stroke="#334155" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </button>
 
                          <input
                            type="tel"
                            value={form.phoneNumber}
                            onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })}
                            placeholder="Phone number"
                            required
                            style={{
                              flex: 1,
                              padding: '11px 14px',
                              border: 'none',
                              outline: 'none',
                              background: 'transparent',
                              color: '#0f172a',
                              fontSize: '0.875rem',
                              boxSizing: 'border-box',
                            }}
                          />
                        </div>
 
                        {isPhoneCountryOpen && (
                          <div
                            style={{
                              position: 'absolute',
                              left: 0,
                              top: 'calc(100% + 8px)',
                              width: 'min(520px, 100%)',
                              maxHeight: 260,
                              overflowY: 'auto',
                              background: '#ffffff',
                              border: '1px solid rgba(148,163,184,0.35)',
                              borderRadius: 14,
                              boxShadow: '0 18px 60px rgba(0,0,0,0.20)',
                              zIndex: 50,
                              padding: 6,
                            }}
                          >
                            {phoneCountries.map((c) => (
                              <button
                                key={`${c.cca2}-${c.dial}`}
                                type="button"
                                onClick={() => {
                                  setForm({ ...form, phoneCca2: c.cca2 });
                                  setIsPhoneCountryOpen(false);
                                }}
                                style={{
                                  width: '100%',
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: 10,
                                  padding: '10px 10px',
                                  borderRadius: 12,
                                  border: 'none',
                                  cursor: 'pointer',
                                  background: c.cca2 === form.phoneCca2 ? 'rgba(99,102,241,0.10)' : 'transparent',
                                  color: '#0f172a',
                                  textAlign: 'left',
                                }}
                                onMouseEnter={(e) => {
                                  (e.currentTarget as HTMLButtonElement).style.background = 'rgba(148,163,184,0.10)';
                                }}
                                onMouseLeave={(e) => {
                                  (e.currentTarget as HTMLButtonElement).style.background = c.cca2 === form.phoneCca2 ? 'rgba(99,102,241,0.10)' : 'transparent';
                                }}
                              >
                                {c.flagUrl ? (
                                  <img
                                    src={c.flagUrl}
                                    alt=""
                                    width={18}
                                    height={14}
                                    style={{ width: 18, height: 14, borderRadius: 2, display: 'block', flexShrink: 0 }}
                                    loading="lazy"
                                  />
                                ) : (
                                  <span aria-hidden="true" style={{ width: 18, textAlign: 'center' }}>🏳️</span>
                                )}
                                <span style={{ flex: 1, fontWeight: 600, fontSize: '0.875rem' }}>{c.name}</span>
                                <span style={{ fontWeight: 700, fontSize: '0.875rem', color: '#334155' }}>{c.dial}</span>
                              </button>
                            ))}
                            {!phoneCountriesLoaded && (
                              <div style={{ padding: 10, fontSize: '0.85rem', color: '#64748b' }}>Loading countries…</div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
 
                    <div>
                      <label style={{
                        display: 'block', fontSize: '0.75rem', fontWeight: 600,
                        color: '#ffffff', marginBottom: 6,
                      }}>
                        Message
                      </label>
                      <textarea
                        value={form.message}
                        onChange={e => setForm({ ...form, message: e.target.value })}
                        placeholder="How can we help you?"
                        required
                        rows={3}
                        style={{
                          width: '100%', padding: '11px 16px',
                          borderRadius: 12, fontSize: '0.875rem',
                          outline: 'none', transition: 'all 0.2s',
                          background: '#f8fafc',
                          border: '1.5px solid rgba(148,163,184,0.28)',
                          color: '#0f172a',
                          resize: 'none', boxSizing: 'border-box',
                        }}
                        onFocus={e => {
                          e.currentTarget.style.border = '1.5px solid rgba(99,102,241,0.60)';
                          e.currentTarget.style.background = '#ffffff';
                          e.currentTarget.style.boxShadow = '0 0 0 3px rgba(99,102,241,0.12)';
                        }}
                        onBlur={e => {
                          e.currentTarget.style.border = '1.5px solid rgba(148,163,184,0.28)';
                          e.currentTarget.style.background = '#f8fafc';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      />
                    </div>
 
                    <div style={{ position: 'relative', overflow: 'visible', width: '100%' }}>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        style={{
                          position: 'relative',
                          overflow: 'visible',
                          width: '100%', padding: '13px',
                          borderRadius: 14, fontWeight: 700,
                          fontSize: '0.875rem', letterSpacing: '0.03em',
                          border: 'none',
                          cursor: isSubmitting ? 'not-allowed' : 'pointer',
                          background: 'linear-gradient(135deg, #2563eb 0%, #6d28d9 100%)',
                          color: '#fff',
                          boxShadow: '0 6px 24px rgba(79,70,229,0.40)',
                          transition: 'all 0.25s',
                          opacity: isSubmitting ? 0.7 : 1,
                        }}
                      onMouseEnter={e => {
                        if (isSubmitting) return;
                        (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)';
                        (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 12px 36px rgba(79,70,229,0.55)';
                      }}
                      onMouseLeave={e => {
                        if (isSubmitting) return;
                        (e.currentTarget as HTMLButtonElement).style.transform = '';
                        (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 6px 24px rgba(79,70,229,0.40)';
                      }}
                    >
                      <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, position: 'relative', zIndex: 1 }}>
                        {isSubmitting ? 'Sending…' : 'Send Message'}
                      </span>
                      <span
                        ref={planeRef}
                        style={{
                          position: 'absolute',
                          top: '50%',
                          right: 18,
                          width: 20,
                          height: 20,
                          transform: 'translateY(-50%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          zIndex: 0,
                        }}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2 12L22 2L15 22L11 14L2 12Z" fill="white" />
                          <path d="M2 12L11 14L15 22L22 2L2 12Z" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </button>
                    </div>
                    {submitError ? (
                      <p style={{ textAlign: 'center', fontSize: '0.78rem', color: '#fecaca', fontWeight: 600 }}>
                        {submitError}
                      </p>
                    ) : null}
 
                    <p style={{ textAlign: 'center', fontSize: '0.73rem', color: '#94a3b8' }}>
                      No spam · We'll help secure &amp; optimise your cloud
                    </p>
                  </form>
                )}
              </div>
            </div>
 
          </div>
        </div>
      )}
 
    </section>
  );
};
 
 
export default HeroSection;
 
 
