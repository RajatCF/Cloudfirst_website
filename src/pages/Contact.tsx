import { useCallback, useEffect, useRef, useState } from 'react';
import Layout from '@/components/Layout';
import { Send, MapPin, Phone, Mail, Calendar } from 'lucide-react';

const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));

const corporateOffice = {
  flagCode: 'in',
  heading: 'Bengaluru',
  lines: [
    'CloudFirst Technology Pvt. Ltd.',
    'Awfis Sabari complex , Residencial road , MG Road , Bengaluru,  - 560025',
  ],
};

const regionalOffices = ['Mumbai', 'Delhi NCR', 'Hyderabad', 'Kolkata'];

const internationalOffices = [
  {
    flagCode: 'ae',
    heading: 'Dubai, UAE',
    lines: [
      'Gate Avenue, Zone D – Level 1,',
      "Al Mustaqbal St, Zaa'beel Second, DIFC,",
      'Dubai, United Arab Emirates',
      '+971 58 575 1693',
    ],
  },

  {
    flagCode: 'us',
    heading: 'United States',
    lines: ['2055 Limestone Rd, STE 200-C,', 'Wilmington, DE 19808,', 'United States', '+91-844 844 0769'],
  },
  {
    flagCode: 'sg',
    heading: 'Singapore',
    lines: ['10 Anson Road, International Plaza,', '079903, Singapore', '+91-844 844 0769'],
  },
    {
    flagCode: 'gb',
    heading: 'London, UK',
    lines: ['gragAI FACTORY LTD', '20 WENLOCKROAD', 'LONDON N1 7GU', 'United Kingdom'],
  },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitError, setSubmitError] = useState<string>('');
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [inlineMapZoom, setInlineMapZoom] = useState(1);
  const [inlineMapPan, setInlineMapPan] = useState({ x: 0, y: 0 });
  const [inlineIsPanning, setInlineIsPanning] = useState(false);
  const inlinePanRef = useRef<{ startX: number; startY: number; originX: number; originY: number } | null>(null);
  const inlineGestureRef = useRef<{ startX: number; startY: number; moved: boolean } | null>(null);

  const [modalMapZoom, setModalMapZoom] = useState(1);
  const [modalMapPan, setModalMapPan] = useState({ x: 0, y: 0 });
  const [modalIsPanning, setModalIsPanning] = useState(false);
  const modalPanRef = useRef<{ startX: number; startY: number; originX: number; originY: number } | null>(null);

  const inlineMapInteractionRef = useRef<HTMLDivElement | null>(null);
  const modalMapInteractionRef = useRef<HTMLDivElement | null>(null);

  const inlineZoomBy = useCallback((delta: number) => {
    setInlineMapZoom((z) => clamp(Number((z + delta).toFixed(2)), 1, 4));
  }, []);

  const resetInlineMapView = useCallback(() => {
    setInlineMapZoom(1);
    setInlineMapPan({ x: 0, y: 0 });
  }, []);

  const modalZoomBy = useCallback((delta: number) => {
    setModalMapZoom((z) => clamp(Number((z + delta).toFixed(2)), 1, 4));
  }, []);

  const resetModalMapView = useCallback(() => {
    setModalMapZoom(1);
    setModalMapPan({ x: 0, y: 0 });
  }, []);

  useEffect(() => {
    const el = inlineMapInteractionRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();
      inlineZoomBy(e.deltaY < 0 ? 0.2 : -0.2);
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, [inlineZoomBy]);

  useEffect(() => {
    if (!isMapOpen) return;
    const el = modalMapInteractionRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();
      modalZoomBy(e.deltaY < 0 ? 0.2 : -0.2);
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, [isMapOpen, modalZoomBy]);

  useEffect(() => {
    if (!isMapOpen) return;
    resetModalMapView();
  }, [isMapOpen]);

  useEffect(() => {
    if (!isMapOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMapOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isMapOpen]);

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
    setSubmitStatus('idle');
    setSubmitError('');

    const timestamp = new Date().toISOString();
    const source ='cloudfirst.tech' 
    const ip = await getPublicIp();
    const message =
      form.company.trim().length > 0 ? `${form.message}\n\nCompany: ${form.company}` : form.message;

    try {
      const res = await fetch('https://wefll4iita.execute-api.ap-south-1.amazonaws.com/dev/send-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          message,
          source,
          timestamp,
          ip,
        }),
      });

      if (!res.ok) {
        const text = await res.text().catch(() => '');
        throw new Error(text || `Request failed: ${res.status}`);
      }

      setSubmitStatus('success');
      setForm({ name: '', email: '', phone: '', company: '', message: '' });
    } catch (err) {
      setSubmitStatus('error');
      setSubmitError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <section className="relative overflow-hidden pt-10 lg:pt-12 pb-16 lg:pb-20 bg-gradient-to-br from-sky-50 via-white to-blue-50">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(ellipse at 15% 30%, rgba(56,189,248,0.32) 0%, transparent 55%), radial-gradient(ellipse at 85% 25%, rgba(59,130,246,0.22) 0%, transparent 55%), radial-gradient(ellipse at 80% 85%, rgba(14,165,233,0.18) 0%, transparent 60%)",
          }}
        />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="mb-10">
            <h1 className="section-title mb-4">let's build <span className="text-bright-blue">together</span></h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Ready to modernize your cloud infrastructure? Let's start a conversation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-stretch">
            <div className="h-full min-h-[560px] lg:min-h-[620px] rounded-2xl border border-cyan-400/35 bg-gradient-to-br from-cyan-50 via-white to-blue-50 shadow-sm p-8 lg:p-10 flex flex-col">
              <h2 className="text-2xl font-display font-bold mb-8">Our Global Presence</h2>

              <div className="space-y-10">
                <div>
                  <div className="flex gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <img
                          src={`https://flagcdn.com/24x18/${corporateOffice.flagCode}.png`}
                          alt=""
                          className="w-6 h-[18px] flex-shrink-0 rounded-sm object-cover"
                          loading="lazy"
                        />
                        <h3 className="font-display font-bold">{corporateOffice.heading}</h3>
                      </div>
                      <div className="mt-1 space-y-0.5">
                        {corporateOffice.lines.map((line) => (
                          <p key={line} className="text-sm text-muted-foreground">
                            {line}
                          </p>
                        ))}
                      </div>
                      <div className="mt-4 flex flex-col gap-2">
                        <a
                          href="mailto:solutions@cloudfirst.in"
                          className="flex items-center gap-3 text-sm text-muted-foreground hover:text-bright-blue transition-colors"
                        >
                          <Mail className="w-4 h-4" /> solutions@cloudfirst.in
                        </a>
                        <a
                          href="tel:+918448440769"
                          className="flex items-center gap-3 text-sm text-muted-foreground hover:text-bright-blue transition-colors"
                        >
                          <Phone className="w-4 h-4" /> +91-8448440769
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">Regional Offices</div>
                  <div className="flex gap-4">
                    <MapPin className="w-5 h-5 text-bright-blue flex-shrink-0 mt-1" />
                    <div className="flex flex-wrap gap-2">
                      {regionalOffices.map((city) => (
                        <span
                          key={city}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-white/70 border border-cyan-400/20 text-gray-800"
                        >
                          {city}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">International Offices</div>
                  <div className="space-y-6">
                    {internationalOffices.map((office) => (
                      <div key={office.heading} className="flex gap-4">
                        <img
                          src={`https://flagcdn.com/24x18/${office.flagCode}.png`}
                          alt=""
                          className="w-6 h-[18px] flex-shrink-0 mt-1 rounded-sm object-cover"
                          loading="lazy"
                        />
                        <div>
                          <h3 className="font-display font-bold">{office.heading}</h3>
                          <div className="mt-1 space-y-0.5">
                            {office.lines.map((line) => (
                              <p key={line} className="text-sm text-muted-foreground">
                                {line}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-12">
                <div className="p-6 rounded-2xl border border-cyan-400/25 bg-white/70 text-center">
                  <Calendar className="w-8 h-8 text-bright-blue mx-auto mb-3" />
                  <p className="font-display font-bold mb-1">Schedule a Call</p>
                  <p className="text-sm text-muted-foreground">Book a 30-minute discovery call with our team.</p>
                </div>
              </div>
            </div>

            <div className="h-full min-h-[560px] lg:min-h-[620px] rounded-2xl border border-violet-400/30 bg-gradient-to-br from-violet-50 via-white to-fuchsia-50 shadow-sm p-8 lg:p-10 flex flex-col">
              <h2 className="text-2xl font-display font-bold mb-8">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/80 border border-violet-300/60 focus:outline-none focus:ring-2 focus:ring-violet-500/25 transition-all"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/80 border border-violet-300/60 focus:outline-none focus:ring-2 focus:ring-violet-500/25 transition-all"
                    placeholder="you@company.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/80 border border-violet-300/60 focus:outline-none focus:ring-2 focus:ring-violet-500/25 transition-all"
                    placeholder="Your phone number"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Company</label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={e => setForm({ ...form, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/80 border border-violet-300/60 focus:outline-none focus:ring-2 focus:ring-violet-500/25 transition-all"
                    placeholder="Your company"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-white/80 border border-violet-300/60 focus:outline-none focus:ring-2 focus:ring-violet-500/25 transition-all resize-none"
                    placeholder="Tell us about your project..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full justify-center disabled:opacity-60 disabled:pointer-events-none"
                >
                  Send Message <Send className="w-4 h-4" />
                </button>
                {submitStatus === 'success' ? (
                  <div className="text-sm text-emerald-700 font-medium">
                    Thank you! We&apos;ll be in touch within 24 hours.
                  </div>
                ) : null}
                {submitStatus === 'error' ? (
                  <div className="text-sm text-red-600 font-medium">
                    Failed to send message{submitError ? `: ${submitError}` : ''}.
                  </div>
                ) : null}
              </form>
              <div className="mt-8 flex-1 min-h-40 sm:min-h-48 rounded-2xl overflow-hidden border border-violet-300/30 bg-white/70">
                <div className="relative w-full h-full min-h-40 sm:min-h-48">
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => inlineZoomBy(0.2)}
                      className="h-8 px-2.5 rounded-lg bg-white text-gray-900 shadow-md hover:bg-gray-50 transition-colors text-sm font-semibold"
                      aria-label="Zoom in"
                    >
                      +
                    </button>
                    <button
                      type="button"
                      onClick={() => inlineZoomBy(-0.2)}
                      className="h-8 px-2.5 rounded-lg bg-white text-gray-900 shadow-md hover:bg-gray-50 transition-colors text-sm font-semibold"
                      aria-label="Zoom out"
                    >
                      −
                    </button>
                    <button
                      type="button"
                      onClick={resetInlineMapView}
                      className="h-8 px-2.5 rounded-lg bg-white text-gray-900 shadow-md hover:bg-gray-50 transition-colors text-sm font-semibold"
                      aria-label="Reset zoom"
                    >
                      Reset
                    </button>
                  </div>
                  <div className="absolute top-3 right-3 z-10">
                    <button
                      type="button"
                      onClick={() => setIsMapOpen(true)}
                      className="h-8 px-3 rounded-lg bg-white text-gray-900 shadow-md hover:bg-gray-50 transition-colors text-sm font-semibold"
                      aria-label="Open map in full screen"
                    >
                      Open
                    </button>
                  </div>
                  <div
                    ref={inlineMapInteractionRef}
                    className={`absolute inset-0 overscroll-contain ${inlineIsPanning ? 'cursor-grabbing' : 'cursor-grab'}`}
                    style={{ touchAction: 'none' }}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      inlineGestureRef.current = { startX: e.clientX, startY: e.clientY, moved: false };
                      inlinePanRef.current = { startX: e.clientX, startY: e.clientY, originX: inlineMapPan.x, originY: inlineMapPan.y };
                      setInlineIsPanning(true);
                    }}
                    onMouseMove={(e) => {
                      if (!inlinePanRef.current) return;
                      if (inlineGestureRef.current) {
                        const dx = e.clientX - inlineGestureRef.current.startX;
                        const dy = e.clientY - inlineGestureRef.current.startY;
                        if (Math.abs(dx) > 5 || Math.abs(dy) > 5) inlineGestureRef.current.moved = true;
                      }
                      const dx = e.clientX - inlinePanRef.current.startX;
                      const dy = e.clientY - inlinePanRef.current.startY;
                      setInlineMapPan({ x: inlinePanRef.current.originX + dx, y: inlinePanRef.current.originY + dy });
                    }}
                    onMouseUp={() => {
                      if (inlineGestureRef.current && !inlineGestureRef.current.moved) setIsMapOpen(true);
                      inlineGestureRef.current = null;
                      inlinePanRef.current = null;
                      setInlineIsPanning(false);
                    }}
                    onMouseLeave={() => {
                      inlineGestureRef.current = null;
                      inlinePanRef.current = null;
                      setInlineIsPanning(false);
                    }}
                    onTouchStart={(e) => {
                      const t = e.touches[0];
                      if (!t) return;
                      inlineGestureRef.current = { startX: t.clientX, startY: t.clientY, moved: false };
                      inlinePanRef.current = { startX: t.clientX, startY: t.clientY, originX: inlineMapPan.x, originY: inlineMapPan.y };
                      setInlineIsPanning(true);
                    }}
                    onTouchMove={(e) => {
                      const t = e.touches[0];
                      if (!t || !inlinePanRef.current) return;
                      if (inlineGestureRef.current) {
                        const dx = t.clientX - inlineGestureRef.current.startX;
                        const dy = t.clientY - inlineGestureRef.current.startY;
                        if (Math.abs(dx) > 5 || Math.abs(dy) > 5) inlineGestureRef.current.moved = true;
                      }
                      const dx = t.clientX - inlinePanRef.current.startX;
                      const dy = t.clientY - inlinePanRef.current.startY;
                      setInlineMapPan({ x: inlinePanRef.current.originX + dx, y: inlinePanRef.current.originY + dy });
                    }}
                    onTouchEnd={() => {
                      if (inlineGestureRef.current && !inlineGestureRef.current.moved) setIsMapOpen(true);
                      inlineGestureRef.current = null;
                      inlinePanRef.current = null;
                      setInlineIsPanning(false);
                    }}
                    onTouchCancel={() => {
                      inlineGestureRef.current = null;
                      inlinePanRef.current = null;
                      setInlineIsPanning(false);
                    }}
                  >
                    <img
                      src="https://cloudfirst-website-assets.s3.ap-south-1.amazonaws.com/All_image/mapp.png"
                      alt="Map"
                      className="absolute inset-0 w-full h-full object-cover select-none"
                      style={{
                        transform: `translate(${inlineMapPan.x}px, ${inlineMapPan.y}px) scale(${inlineMapZoom})`,
                        transformOrigin: 'center',
                      }}
                      draggable={false}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {isMapOpen ? (
        <div
          className="fixed inset-0 z-[60] bg-black/70 flex items-center justify-center p-4"
          onClick={() => setIsMapOpen(false)}
        >
          <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => setIsMapOpen(false)}
              className="absolute -top-3 -right-3 z-20 h-10 w-10 rounded-full bg-white text-gray-900 shadow-md hover:bg-gray-50 transition-colors"
              aria-label="Close map"
            >
              ×
            </button>
            <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
              <button
                type="button"
                onClick={() => modalZoomBy(0.2)}
                className="h-9 px-3 rounded-lg bg-white text-gray-900 shadow-md hover:bg-gray-50 transition-colors text-sm font-semibold"
                aria-label="Zoom in"
              >
                +
              </button>
              <button
                type="button"
                onClick={() => modalZoomBy(-0.2)}
                className="h-9 px-3 rounded-lg bg-white text-gray-900 shadow-md hover:bg-gray-50 transition-colors text-sm font-semibold"
                aria-label="Zoom out"
              >
                −
              </button>
              <button
                type="button"
                onClick={resetModalMapView}
                className="h-9 px-3 rounded-lg bg-white text-gray-900 shadow-md hover:bg-gray-50 transition-colors text-sm font-semibold"
                aria-label="Reset zoom"
              >
                Reset
              </button>
            </div>
            <div className="w-full h-[75vh] sm:h-[80vh] max-h-[85vh] rounded-2xl bg-white overflow-hidden">
              <div
                className={`relative w-full h-full ${modalIsPanning ? 'cursor-grabbing' : 'cursor-grab'}`}
                ref={modalMapInteractionRef}
                style={{ touchAction: 'none' }}
                onMouseDown={(e) => {
                  e.preventDefault();
                  modalPanRef.current = { startX: e.clientX, startY: e.clientY, originX: modalMapPan.x, originY: modalMapPan.y };
                  setModalIsPanning(true);
                }}
                onMouseMove={(e) => {
                  if (!modalPanRef.current) return;
                  const dx = e.clientX - modalPanRef.current.startX;
                  const dy = e.clientY - modalPanRef.current.startY;
                  setModalMapPan({ x: modalPanRef.current.originX + dx, y: modalPanRef.current.originY + dy });
                }}
                onMouseUp={() => {
                  modalPanRef.current = null;
                  setModalIsPanning(false);
                }}
                onMouseLeave={() => {
                  modalPanRef.current = null;
                  setModalIsPanning(false);
                }}
                onTouchStart={(e) => {
                  const t = e.touches[0];
                  if (!t) return;
                  modalPanRef.current = { startX: t.clientX, startY: t.clientY, originX: modalMapPan.x, originY: modalMapPan.y };
                  setModalIsPanning(true);
                }}
                onTouchMove={(e) => {
                  const t = e.touches[0];
                  if (!t || !modalPanRef.current) return;
                  const dx = t.clientX - modalPanRef.current.startX;
                  const dy = t.clientY - modalPanRef.current.startY;
                  setModalMapPan({ x: modalPanRef.current.originX + dx, y: modalPanRef.current.originY + dy });
                }}
                onTouchEnd={() => {
                  modalPanRef.current = null;
                  setModalIsPanning(false);
                }}
                onTouchCancel={() => {
                  modalPanRef.current = null;
                  setModalIsPanning(false);
                }}
              >
                <img
                  src="https://cloudfirst-website-assets.s3.ap-south-1.amazonaws.com/All_image/mapp.png"
                  alt="Map"
                  className="absolute inset-0 w-full h-full object-contain select-none"
                  style={{ transform: `translate(${modalMapPan.x}px, ${modalMapPan.y}px) scale(${modalMapZoom})`, transformOrigin: 'center' }}
                  draggable={false}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </Layout>
  );
};

export default Contact;
