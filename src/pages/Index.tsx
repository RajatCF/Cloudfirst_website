import Layout from '@/components/Layout';
import HeroSection from '@/components/home/HeroSection';
import SubHeroSection from '@/components/home/SubHeroSection';
import BreakingTheMold from '@/components/home/BreakingTheMold';
import ServicesGrid from '@/components/home/ServicesGrid';
import JoinPioneers from '@/components/home/JoinPioneers';
import ClientLogos from '@/components/home/ClientLogos';
import ContactSection from '@/components/home/ContactSection';
import GoGlobal from '@/components/home/GoGlobal';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <SubHeroSection />
      <BreakingTheMold />
      <GoGlobal />
      <ServicesGrid />
      <ClientLogos />
      <JoinPioneers />
      <ContactSection />
      
    </Layout>
  );
};

export default Index;
