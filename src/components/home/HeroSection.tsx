import { useEffect, useState, useRef, Suspense, lazy } from 'react';
import gsap from 'gsap';

const Spline = lazy(() => import('@splinetool/react-spline'));

const STATS = [
  { value: '500+', label: 'Enterprise Clients' },
  { value: '99.99%', label: 'Uptime SLA' },
  { value: '24/7', label: 'Expert Support' },
  { value: '50+', label: 'Certifications' },
];

// ─────────────────────────────────────────────
// Aggressive watermark killer — runs repeatedly
// to catch dynamically injected DOM nodes
// ─────────────────────────────────────────────
function killSplineWatermark() {
  const selectors = [
    'a[href*="spline.design"]',
    'a[href*="splinetool"]',
    'a[href*="spline"]',
    '.spline-watermark',
    '[class*="watermark"]',
    '[id*="watermark"]',
    'a[target="_blank"][rel*="noopener"]',   // Spline uses this pattern
  ];

  selectors.forEach(sel => {
    document.querySelectorAll<HTMLElement>(sel).forEach(el => {
      // Only hide if it looks like the Spline badge
      const text = el.textContent?.toLowerCase() ?? '';
      const href = el.getAttribute('href') ?? '';
      if (
        text.includes('spline') ||
        href.includes('spline') ||
        el.closest('canvas') !== null ||
        el.tagName === 'A'
      ) {
        el.style.cssText +=
          'display:none!important;opacity:0!important;visibility:hidden!important;pointer-events:none!important;';
      }
    });
  });
}

const HeroSection = () => {
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const taglineRef  = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const subRef      = useRef<HTMLParagraphElement>(null);
  const ctaRef      = useRef<HTMLDivElement>(null);
  const statsRef    = useRef<HTMLDivElement>(null);
  const formRef     = useRef<HTMLDivElement>(null);
  const splineWrapRef = useRef<HTMLDivElement>(null);
  const mutationObserverRef = useRef<MutationObserver | null>(null);

  // ── Watermark removal via MutationObserver ──────────────────────────────
  // This is the most reliable approach: watches for any new DOM nodes added
  // by Spline after load and hides them immediately.
  useEffect(() => {
    killSplineWatermark(); // initial pass

    mutationObserverRef.current = new MutationObserver(() => {
      killSplineWatermark();
    });

    mutationObserverRef.current.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['style', 'class'],
    });

    // Belt-and-suspenders: also poll for the first 5 s after mount
    const intervals: ReturnType<typeof setInterval>[] = [];
    [300, 600, 1000, 1500, 2000, 3000, 5000].forEach(delay => {
      intervals.push(setTimeout(killSplineWatermark, delay));
    });

    return () => {
      mutationObserverRef.current?.disconnect();
      intervals.forEach(clearTimeout);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (loading) return;
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo(taglineRef.current,  { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 })
      .fromTo(headlineRef.current, { y: 40,  opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.2')
      .fromTo(subRef.current,      { y: 25,  opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, '-=0.4')
      .fromTo(ctaRef.current,      { y: 25,  opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.3')
      .fromTo(statsRef.current,    { y: 15,  opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.3')
      .fromTo(formRef.current,     { x: 50,  opacity: 0 }, { x: 0, opacity: 1, duration: 0.9 }, '-=0.8');
  }, [loading]);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: '#0c0e1a' }}
    >
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
          0%   { box-shadow: 0 0 0 0 transparent, 0 0 60px 18px rgba(99,102,241,0.30),  0 0 120px 40px rgba(59,130,246,0.18); }
          50%  { box-shadow: 0 0 0 0 transparent, 0 0 80px 28px rgba(124,58,237,0.28),  0 0 160px 60px rgba(99,102,241,0.14); }
          100% { box-shadow: 0 0 0 0 transparent, 0 0 60px 18px rgba(99,102,241,0.30),  0 0 120px 40px rgba(59,130,246,0.18); }
        }
        ::placeholder { color: #64748b; }
      `}</style>

      {/* ── SPLINE 3D BACKGROUND ──────────────────────────────────────── */}
      {/*
        overflow:hidden clips anything that escapes the bounds.
        position:relative + z-index let us stack the mask overlay on top.
        pointerEvents:none ensures the 3D scene doesn't steal mouse events
        from the main content.
      */}
      <div
        ref={splineWrapRef}
        className="spline-scene-wrap absolute inset-0 z-0"
        style={{ overflow: 'hidden', pointerEvents: 'none', position: 'absolute' }}
      >
        <Suspense fallback={null}>
          <Spline
            scene="https://prod.spline.design/MJWPwGj3VI4In3wS/scene.splinecode"
            style={{ width: '100%', height: '100%', display: 'block' }}
            onLoad={() => {
              // Extra pass right after Spline signals it has loaded
              killSplineWatermark();
              setTimeout(killSplineWatermark, 200);
              setTimeout(killSplineWatermark, 800);
            }}
          />
        </Suspense>

        {/*
          ── PIXEL-PERFECT CORNER MASK ──────────────────────────────────
          This is the nuclear option: a color-matched box that sits
          exactly where the "Built with Spline" badge appears.
          It covers all responsive breakpoints by being large enough
          (220 × 56 px) and anchored to bottom-right.
          Since the section bg is #0c0e1a this is completely invisible.
        */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: 240,      // wider than the badge on any screen
            height: 60,      // taller than the badge on any screen
            background: '#0c0e1a',
            zIndex: 9999,
            pointerEvents: 'none',
          }}
        />
        {/* Also mask bottom-left in case Spline ever moves it */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: 240,
            height: 60,
            background: '#0c0e1a',
            zIndex: 9999,
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* Gradient overlay — left readable, right clear for 3D */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            'linear-gradient(110deg, rgba(12,14,26,0.82) 0%, rgba(12,14,26,0.42) 50%, rgba(12,14,26,0.00) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* ── LOADER ──────────────────────────────────────────────────────── */}
      {loading && (
        <div
          className="absolute inset-0 flex items-center justify-center z-50"
          style={{ background: '#0c0e1a' }}
        >
          <div className="relative flex items-center justify-center" style={{ width: 240, height: 240 }}>
            <div
              style={{
                position: 'absolute', top: '50%', left: '50%',
                width: 200, height: 200,
                transform: 'translate(-50%,-50%)',
                borderRadius: '50%',
                animation: 'loader-ring 2.2s ease-in-out infinite',
              }}
            />
            <div
              className="relative z-10 flex gap-0.5"
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 800, fontSize: '1.5rem',
                letterSpacing: '0.1em', color: '#a5b4fc',
              }}
            >
              {'CLOUDFIRST'.split('').map((c, i) => (
                <span key={i} style={{ opacity: 0.2, animation: `loader-cf 2s ${i * 0.08}s infinite` }}>
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── MAIN CONTENT ────────────────────────────────────────────────── */}
      {!loading && (
        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20 lg:py-28">
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
                  color: '#93c5fd',
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
                  <span style={{
                    background: 'linear-gradient(130deg, #60a5fa 0%, #818cf8 50%, #c084fc 100%)',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                  }}>
                    Cloud Security
                  </span>
                  <br />
                  <span style={{
                    background: 'linear-gradient(130deg, #818cf8 0%, #c084fc 100%)',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
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
                style={{ fontSize: '1.05rem', lineHeight: 1.75, color: '#cbd5e1', maxWidth: 480 }}
              >
                Enterprise-grade cloud security, compliance automation, and AI-driven data
                governance — trusted by 500+ organizations worldwide.
              </p>

              {/* CTAs */}
              <div
                ref={ctaRef}
                className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start opacity-0"
              >
                <a
                  href="/contact"
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
                  Get Started Free
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300"
                  style={{
                    border: '1.5px solid rgba(129,140,248,0.30)',
                    color: '#a5b4fc',
                    background: 'rgba(129,140,248,0.06)',
                    letterSpacing: '0.02em',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(129,140,248,0.14)';
                    (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)';
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 20px rgba(129,140,248,0.20)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(129,140,248,0.06)';
                    (e.currentTarget as HTMLAnchorElement).style.transform = '';
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = '';
                  }}
                >
                  See How It Works
                </a>
              </div>

              {/* Stats */}
              <div ref={statsRef} className="grid grid-cols-2 sm:grid-cols-4 gap-3 opacity-0">
                {STATS.map(s => (
                  <div
                    key={s.label}
                    style={{
                      padding: '12px 14px', borderRadius: 14,
                      background: 'rgba(255,255,255,0.08)',
                      border: '1px solid rgba(255,255,255,0.15)',
                      backdropFilter: 'blur(16px)',
                      WebkitBackdropFilter: 'blur(16px)',
                      boxShadow: '0 2px 12px rgba(0,0,0,0.25)',
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
                    <div style={{ fontSize: '0.72rem', fontWeight: 500, color: '#e2e8f0', marginTop: 2 }}>
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
                background: 'rgba(255,255,255,0.10)',
                border: '1px solid rgba(255,255,255,0.22)',
                backdropFilter: 'blur(40px) saturate(180%)',
                WebkitBackdropFilter: 'blur(40px) saturate(180%)',
                boxShadow: [
                  '0 8px 32px rgba(0,0,0,0.30)',
                  '0 32px 64px rgba(0,0,0,0.20)',
                  'inset 0 1px 0 rgba(255,255,255,0.22)',
                  'inset 0 -1px 0 rgba(255,255,255,0.06)',
                ].join(', '),
              }}>
                {/* Header */}
                <div style={{ marginBottom: 28 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                    <div style={{
                      width: 8, height: 8, borderRadius: '50%',
                      background: 'linear-gradient(135deg,#6366f1,#7c3aed)',
                      boxShadow: '0 0 10px rgba(99,102,241,0.6)',
                    }} />
                    <span style={{
                      fontSize: '0.68rem', fontWeight: 700,
                      letterSpacing: '0.16em', textTransform: 'uppercase', color: '#93c5fd',
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
                  <p style={{ fontSize: '0.84rem', color: '#cbd5e1', marginTop: 6 }}>
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
                    <p style={{ fontWeight: 700, fontSize: '1rem', color: '#93c5fd' }}>Message sent!</p>
                    <p style={{ fontSize: '0.84rem', color: '#cbd5e1' }}>Our team will reach out shortly.</p>
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
                          color: '#e2e8f0', marginBottom: 6,
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
                            background: 'rgba(255,255,255,0.07)',
                            border: '1.5px solid rgba(255,255,255,0.12)',
                            color: '#f1f5f9',
                            backdropFilter: 'blur(8px)',
                            boxSizing: 'border-box',
                          }}
                          onFocus={e => {
                            e.currentTarget.style.border = '1.5px solid rgba(129,140,248,0.60)';
                            e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
                            e.currentTarget.style.boxShadow = '0 0 0 3px rgba(129,140,248,0.12)';
                          }}
                          onBlur={e => {
                            e.currentTarget.style.border = '1.5px solid rgba(255,255,255,0.12)';
                            e.currentTarget.style.background = 'rgba(255,255,255,0.07)';
                            e.currentTarget.style.boxShadow = 'none';
                          }}
                        />
                      </div>
                    ))}

                    <div>
                      <label style={{
                        display: 'block', fontSize: '0.75rem', fontWeight: 600,
                        color: '#e2e8f0', marginBottom: 6,
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
                          background: 'rgba(255,255,255,0.07)',
                          border: '1.5px solid rgba(255,255,255,0.12)',
                          color: '#f1f5f9',
                          backdropFilter: 'blur(8px)',
                          resize: 'none', boxSizing: 'border-box',
                        }}
                        onFocus={e => {
                          e.currentTarget.style.border = '1.5px solid rgba(129,140,248,0.60)';
                          e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
                          e.currentTarget.style.boxShadow = '0 0 0 3px rgba(129,140,248,0.12)';
                        }}
                        onBlur={e => {
                          e.currentTarget.style.border = '1.5px solid rgba(255,255,255,0.12)';
                          e.currentTarget.style.background = 'rgba(255,255,255,0.07)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      />
                    </div>

                    <button
                      type="submit"
                      style={{
                        width: '100%', padding: '13px',
                        borderRadius: 14, fontWeight: 700,
                        fontSize: '0.875rem', letterSpacing: '0.03em',
                        border: 'none', cursor: 'pointer',
                        background: 'linear-gradient(135deg, #2563eb 0%, #6d28d9 100%)',
                        color: '#fff',
                        boxShadow: '0 6px 24px rgba(79,70,229,0.40)',
                        transition: 'all 0.25s',
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)';
                        (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 12px 36px rgba(79,70,229,0.55)';
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLButtonElement).style.transform = '';
                        (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 6px 24px rgba(79,70,229,0.40)';
                      }}
                    >
                      Send Message →
                    </button>

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