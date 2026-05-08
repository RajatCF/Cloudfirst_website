import Layout from '@/components/Layout';
import HeroSection from '@/components/home/HeroSection';
import BreakingTheMold from '@/components/home/BreakingTheMold';
import ServicesGrid from '@/components/home/ServicesGrid';
import ClientLogos from '@/components/home/ClientLogos';
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

  return (
    <Layout>
      <HeroSection />
      <Divider />
      <BreakingTheMold />
      <Divider />
      <GoGlobal />
      <Divider />
      <PresidentialRecognition />
      <Divider />
      <ServicesGrid />
      <Divider />
      <ClientLogos />
      <Divider />
      <ScrollingTestimonials />
      <Divider />
      <NumbersStrip />
    </Layout>
  );
};

export default Index;
