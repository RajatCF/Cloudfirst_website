import Layout from '@/components/Layout';
import HeroSection from '@/components/home/HeroSection';
import BreakingTheMold from '@/components/home/BreakingTheMold';
import ServicesGrid from '@/components/home/ServicesGrid';
import ClientLogos, { OurClientsLogos } from '@/components/home/ClientLogos';
import GoGlobal from '@/components/home/GoGlobal';
import PresidentialRecognition from '@/components/home/PresidentialRecognition';
import ScrollingTestimonials from '@/components/home/ScrollingTestimonials';
import NumbersStrip from '@/components/home/NumbersStrip';
import { Link } from 'react-router-dom';

const Index = () => {
  const Divider = () => (
    <div className="w-full">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
    </div>
  );

  const CampaignSection = () => (
    <section className="relative py-20 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-bright-blue/10 blur-[90px]" />
        <div className="absolute -bottom-28 -right-28 h-96 w-96 rounded-full bg-light-blue/10 blur-[100px]" />
      </div>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="relative mx-auto max-w-5xl rounded-3xl bg-gradient-to-br from-bright-blue/25 via-slate-200/40 to-light-blue/25 p-[1px] shadow-lg overflow-hidden">
          <div className="rounded-3xl bg-white/75 backdrop-blur-sm">
            <div className="px-6 sm:px-10 pt-10 pb-7 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-bright-blue/25 bg-bright-blue/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-bright-blue">
              Campaign
            </span>
            <h3
              className="mt-4 text-center text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Free{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-bright-blue to-light-blue">
                FinOps &amp; Security
              </span>{" "}
              Audit for Indian Startups
            </h3>
            <div className="mt-4 flex justify-center">
              <div className="h-1.5 w-24 rounded-full bg-gradient-to-r from-bright-blue to-light-blue opacity-80" />
            </div>
            <p className="mt-3 text-slate-600 max-w-3xl mx-auto">
              Reduce cloud spend, strengthen security posture, and get a clear action plan — built for fast-moving startup teams.
            </p>
          </div>

            <div className="px-4 sm:px-8 pb-10">
              <img
                src="https://cloudfirst-website-assets.s3.ap-south-1.amazonaws.com/All_image/campaign.jpg"
                alt="Free FinOps & Security Audit for Indian Startups"
                className="w-full rounded-2xl ring-1 ring-slate-200/80 shadow-md object-cover transition-transform duration-300 hover:scale-[1.01]"
                loading="lazy"
              />
              <div className="mt-6 flex justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-bright-blue to-light-blue text-white font-semibold px-7 py-3 transition-all duration-200 shadow-md shadow-bright-blue/15 ring-1 ring-bright-blue/20 hover:shadow-lg hover:shadow-bright-blue/20 hover:ring-bright-blue/30"
                >
                  Claim your free audit →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const sections = [
    { key: 'hero', node: <HeroSection isPageReady /> },
    { key: 'breaking', node: <BreakingTheMold /> },
    { key: 'goglobal', node: <GoGlobal /> },
    { key: 'presidential', node: <PresidentialRecognition /> },
    { key: 'services', node: <ServicesGrid /> },
    { key: 'trusted', node: <ClientLogos /> },
    { key: 'testimonials', node: <ScrollingTestimonials /> },
    { key: 'partners', node: <OurClientsLogos /> },
    { key: 'campaign', node: <CampaignSection /> },
    { key: 'numbers', node: <NumbersStrip /> },
  ];

  return (
    <Layout>
      {sections.map((s, idx) => (
        <div key={s.key}>
          {s.node}
          {idx !== sections.length - 1 ? <Divider /> : null}
        </div>
      ))}
    </Layout>
  );
};

export default Index;
