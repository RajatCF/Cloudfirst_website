import Layout from '@/components/Layout';
import HeroSection from '@/components/home/HeroSection';
import BreakingTheMold from '@/components/home/BreakingTheMold';
import ServicesGrid from '@/components/home/ServicesGrid';
import ClientLogos, { OurClientsLogos } from '@/components/home/ClientLogos';
import GoGlobal from '@/components/home/GoGlobal';
import PresidentialRecognition from '@/components/home/PresidentialRecognition';
import ScrollingTestimonials from '@/components/home/ScrollingTestimonials';
import NumbersStrip from '@/components/home/NumbersStrip';
import { useEffect, useMemo, useState } from 'react';

const Index = () => {
  const Divider = () => (
    <div className="w-full">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
    </div>
  );

  const [isPageLoading, setIsPageLoading] = useState(true);
  const [revealStep, setRevealStep] = useState(-1);

  const sections = useMemo(
    () => [
      { key: 'hero', node: <HeroSection isPageReady={!isPageLoading} /> },
      { key: 'breaking', node: <BreakingTheMold /> },
      { key: 'goglobal', node: <GoGlobal /> },
      { key: 'presidential', node: <PresidentialRecognition /> },
      { key: 'services', node: <ServicesGrid /> },
      { key: 'trusted', node: <ClientLogos /> },
      { key: 'testimonials', node: <ScrollingTestimonials /> },
      { key: 'partners', node: <OurClientsLogos /> },
      { key: 'numbers', node: <NumbersStrip /> },
    ],
    [isPageLoading]
  );

  useEffect(() => {
    const done = () => setIsPageLoading(false);
    if (document.readyState === 'complete') {
      done();
      return;
    }
    window.addEventListener('load', done);
    return () => window.removeEventListener('load', done);
  }, []);

  useEffect(() => {
    if (isPageLoading) {
      setRevealStep(-1);
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }

    document.body.style.overflow = '';
    setRevealStep(0);
    let current = 0;
    const id = window.setInterval(() => {
      current += 1;
      setRevealStep(current);
      if (current >= sections.length - 1) window.clearInterval(id);
    }, 140);
    return () => window.clearInterval(id);
  }, [isPageLoading, sections.length]);

  return (
    <Layout>
      <style>{`
        @keyframes home-loader-cf {
          0%,100% { opacity: 0.2; transform: translateY(0); }
          30%      { opacity: 1;   transform: translateY(-5px); }
          60%      { opacity: 0.5; transform: translateY(0); }
        }
        @keyframes home-loader-ring {
          0%   { box-shadow: 0 0 0 0 transparent, 0 0 60px 18px rgba(59,130,246,0.30),  0 0 120px 40px rgba(59,130,246,0.18); }
          50%  { box-shadow: 0 0 0 0 transparent, 0 0 80px 28px rgba(165,180,252,0.28), 0 0 160px 60px rgba(59,130,246,0.14); }
          100% { box-shadow: 0 0 0 0 transparent, 0 0 60px 18px rgba(59,130,246,0.30), 0 0 120px 40px rgba(165,180,252,0.18); }
        }
      `}</style>

      {sections.map((s, idx) => (
        <div
          key={s.key}
          className="will-change-transform"
          style={{
            opacity: revealStep >= idx ? 1 : 0,
            transform: revealStep >= idx ? 'translateY(0px)' : 'translateY(18px)',
            transition: 'opacity 700ms ease, transform 700ms ease',
          }}
        >
          {s.node}
          {idx !== sections.length - 1 ? <Divider /> : null}
        </div>
      ))}

      {isPageLoading ? (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center"
          style={{ background: 'linear-gradient(135deg, #e2e8f0 0%, #dbeafe 25%, #e0e7ff 50%, #fce7f3 75%, #f1f5f9 100%)' }}
        >
          <div className="relative flex items-center justify-center" style={{ width: 260, height: 260 }}>
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: 210,
                height: 210,
                transform: 'translate(-50%,-50%)',
                borderRadius: '50%',
                animation: 'home-loader-ring 2.2s ease-in-out infinite',
              }}
            />
            <div
              className="relative z-10 flex gap-0.5"
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 800,
                fontSize: '1.6rem',
                letterSpacing: '0.1em',
                color: '#a5b4fc',
              }}
            >
              {'CLOUDFIRST'.split('').map((c, i) => (
                <span key={i} style={{ opacity: 0.2, animation: `home-loader-cf 2s ${i * 0.08}s infinite` }}>
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </Layout>
  );
};

export default Index;
