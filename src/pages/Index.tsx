
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import AnnouncementTicker from '../components/AnnouncementTicker';
import HeroSection from '../components/HeroSection';
import InitiativesSlider from '../components/InitiativesSlider';
import DirectorMessage from '../components/DirectorMessage';
import AboutTGANB from '../components/AboutTGANB';
import CelebrityCampaigns from '../components/CelebrityCampaigns';
import AwarenessPrograms from '../components/AwarenessPrograms';
import AnimatedMetrics from '../components/AnimatedMetrics';
import Gallery from '../components/Gallery';
import NewsEvents from '../components/NewsEvents';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <AnnouncementTicker />
      <main className="relative">
        <HeroSection />
        <InitiativesSlider />
        <DirectorMessage />
        <AboutTGANB />
        <CelebrityCampaigns />
        <AwarenessPrograms />
        <AnimatedMetrics />
        <Gallery />
        <NewsEvents />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
