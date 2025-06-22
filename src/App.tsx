
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'sonner';
import { ThemeProvider } from './contexts/ThemeContext';

import Index from './pages/Index';
import AboutTGANB from './pages/AboutTGANB';
import VisionMission from './pages/VisionMission';
import AntiDrugCommittees from './pages/AntiDrugCommittees';
import AboutLogo from './pages/AboutLogo';
import DirectorsNote from './pages/DirectorsNote';
import OfficersDirectory from './pages/OfficersDirectory';
import CentralCoordination from './pages/CentralCoordination';
import StateCoordination from './pages/StateCoordination';
import TganbGo27 from './pages/TganbGo27';
import TganbStructure from './pages/TganbStructure';
import NarcoticPoliceStations from './pages/NarcoticPoliceStations';
import RegionalNarcoticPoliceStations from './pages/RegionalNarcoticPoliceStations';
import RehabilitationCenters from './pages/RehabilitationCenters';
import MissionParivartana from './pages/MissionParivartana';
import OperationSankalp from './pages/OperationSankalp';
import PrahariClubs from './pages/PrahariClubs';
import EventsCampaigns from './pages/EventsCampaigns';
import TestingKits from './pages/TestingKits';
import Education from './pages/Education';
import MythsFacts from './pages/MythsFacts';
import FAQs from './pages/FAQs';
import Statistics from './pages/Statistics';
import Achievements from './pages/Achievements';
import News from './pages/News';
import Contact from './pages/Contact';
import SahayAI from './pages/SahayAI';
import SahayAIChatbot from './pages/SahayAIChatbot';
import ShieldAI from './pages/ShieldAI';
import ShieldAIRiskAssessment from './pages/ShieldAIRiskAssessment';
import UdayAI from './pages/UdayAI';
import UdayAIRecoveryPlanner from './pages/UdayAIRecoveryPlanner';
import Rehabilitation from './pages/Rehabilitation';
import LearningResources from './pages/LearningResources';
import DrugTypes from './pages/DrugTypes';
import NotFound from './pages/NotFound';
import AboutRisingAI from './pages/AboutRisingAI';
import AboutSahayAI from './pages/AboutSahayAI';
import AboutShieldAI from './pages/AboutShieldAI';
import AboutUdayAI from './pages/AboutUdayAI';
import AntiDrugSoldierEnrollment from './pages/AntiDrugSoldierEnrollment';
import CertificateVerification from './pages/CertificateVerification';
import DrugReportSubmission from './pages/DrugReportSubmission';

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about-tganb" element={<AboutTGANB />} />
            <Route path="/vision-mission" element={<VisionMission />} />
            <Route path="/anti-drug-committees" element={<AntiDrugCommittees />} />
            <Route path="/about-logo" element={<AboutLogo />} />
            <Route path="/directors-note" element={<DirectorsNote />} />
            <Route path="/officers-directory" element={<OfficersDirectory />} />
            <Route path="/central-coordination" element={<CentralCoordination />} />
            <Route path="/state-coordination" element={<StateCoordination />} />
            <Route path="/tganb-go-27" element={<TganbGo27 />} />
            <Route path="/tganb-structure" element={<TganbStructure />} />
            <Route path="/about-rising-ai" element={<AboutRisingAI />} />
            <Route path="/about-sahay-ai" element={<AboutSahayAI />} />
            <Route path="/about-shield-ai" element={<AboutShieldAI />} />
            <Route path="/about-uday-ai" element={<AboutUdayAI />} />
            <Route path="/narcotic-police-stations" element={<NarcoticPoliceStations />} />
            <Route path="/regional-narcotic-police-stations" element={<RegionalNarcoticPoliceStations />} />
            <Route path="/rehabilitation-centers" element={<RehabilitationCenters />} />
            <Route path="/mission-parivartana" element={<MissionParivartana />} />
            <Route path="/operation-sankalp" element={<OperationSankalp />} />
            <Route path="/prahari-clubs" element={<PrahariClubs />} />
            <Route path="/events-campaigns" element={<EventsCampaigns />} />
            <Route path="/testing-kits" element={<TestingKits />} />
            <Route path="/education" element={<Education />} />
            <Route path="/myths-facts" element={<MythsFacts />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/sahay-ai" element={<SahayAI />} />
            <Route path="/sahay-ai-chat" element={<SahayAIChatbot />} />
            <Route path="/shield-ai" element={<ShieldAI />} />
            <Route path="/shield-ai-assessment" element={<ShieldAIRiskAssessment />} />
            <Route path="/uday-ai" element={<UdayAI />} />
            <Route path="/uday-ai-planner" element={<UdayAIRecoveryPlanner />} />
            <Route path="/rehabilitation" element={<Rehabilitation />} />
            <Route path="/learning-resources" element={<LearningResources />} />
            <Route path="/drug-types" element={<DrugTypes />} />
            <Route path="/anti-drug-soldier-enrollment" element={<AntiDrugSoldierEnrollment />} />
            <Route path="/certificate-verification" element={<CertificateVerification />} />
            <Route path="/drug-report-submission" element={<DrugReportSubmission />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
