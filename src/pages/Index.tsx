
import Header from '../components/Header';
import AnnouncementTicker from '../components/AnnouncementTicker';
import HeroSection from '../components/HeroSection';
import InitiativesSlider from '../components/InitiativesSlider';
import DirectorMessage from '../components/DirectorMessage';
import AboutTGANB from '../components/AboutTGANB';
import CelebrityCampaigns from '../components/CelebrityCampaigns';
import SocialMediaFeed from '../components/SocialMediaFeed';
import AnimatedMetrics from '../components/AnimatedMetrics';
import NewsEvents from '../components/NewsEvents';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 font-poppins dark:from-gray-900 dark:to-gray-800">
      <Header />
      <AnnouncementTicker />
      <main className="relative">
        <HeroSection />
        <InitiativesSlider />
        <DirectorMessage />
        <AboutTGANB />
        <div className="py-4">
          <CelebrityCampaigns />
        </div>
        <SocialMediaFeed />
        <AnimatedMetrics />
        <NewsEvents />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
