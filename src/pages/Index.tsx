import Layout from '@/components/Layout';
import HeroSection from '@/components/home/HeroSection';
import BreakingTheMold from '@/components/home/BreakingTheMold';
import ServicesGrid from '@/components/home/ServicesGrid';
import ClientLogos, { OurClientsLogos } from '@/components/home/ClientLogos';
import GoGlobal from '@/components/home/GoGlobal';
import PresidentialRecognition from '@/components/home/PresidentialRecognition';
import ScrollingTestimonials from '@/components/home/ScrollingTestimonials';
import NumbersStrip from '@/components/home/NumbersStrip';

const Index = () => {
  const Divider = () => (
    <div className="w-full">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
    </div>
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
