import Layout from '@/components/Layout';
import HeroSection from '@/components/home/HeroSection';
import SubHeroSection from '@/components/home/SubHeroSection';
import BreakingTheMold from '@/components/home/BreakingTheMold';
import ServicesGrid from '@/components/home/ServicesGrid';
import JoinPioneers from '@/components/home/JoinPioneers';
import ClientLogos from '@/components/home/ClientLogos';
import ContactSection from '@/components/home/ContactSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <SubHeroSection />
      <BreakingTheMold />
      <ServicesGrid />
      <ClientLogos />
      <JoinPioneers />
      <ContactSection />
    </Layout>
  );
};

export default Index;
