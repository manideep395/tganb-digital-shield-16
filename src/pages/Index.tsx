
import HeroSection from '../components/HeroSection';
import DatabaseScrollingTicker from '../components/DatabaseScrollingTicker';
import AboutTGANB from '../components/AboutTGANB';
import TRisingAIHighlight from '../components/TRisingAIHighlight';
import DirectorMessage from '../components/DirectorMessage';
import InitiativesHighlight from '../components/InitiativesHighlight';
import AnimatedMetrics from '../components/AnimatedMetrics';
import AntiDrugSoldierSection from '../components/AntiDrugSoldierSection';
import AnonymousReportSection from '../components/AnonymousReportSection';
import StatisticsSection from '../components/StatisticsSection';
import StationsInfoSection from '../components/StationsInfoSection';
import RehabilitationSection from '../components/RehabilitationSection';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutTGANB />
      <TRisingAIHighlight />
      <DirectorMessage />
      <InitiativesHighlight />
      <AnimatedMetrics />
      <AntiDrugSoldierSection />
      <AnonymousReportSection />
      <StatisticsSection />
      <StationsInfoSection />
      <RehabilitationSection />
      <DatabaseScrollingTicker />
      <Footer />
    </div>
  );
};

export default Index;
