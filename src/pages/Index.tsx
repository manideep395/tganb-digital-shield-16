
import HeroSection from '../components/HeroSection';
import AnnouncementTicker from '../components/AnnouncementTicker';
import AboutTGANB from '../components/AboutTGANB';
import TRisingAIHighlight from '../components/TRisingAIHighlight';
import DirectorMessage from '../components/DirectorMessage';
import InitiativesHighlight from '../components/InitiativesHighlight';
import InitiativesSlider from '../components/InitiativesSlider';
import NewsEvents from '../components/NewsEvents';
import AnimatedMetrics from '../components/AnimatedMetrics';
import AwarenessPrograms from '../components/AwarenessPrograms';
import CelebrityCampaigns from '../components/CelebrityCampaigns';
import ContactSection from '../components/ContactSection';
import Gallery from '../components/Gallery';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AnnouncementTicker />
      <AboutTGANB />
      <TRisingAIHighlight />
      <DirectorMessage />
      <InitiativesHighlight />
      <NewsEvents />
      <AnimatedMetrics />
      <AwarenessPrograms />
      <CelebrityCampaigns />
      <Gallery />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
