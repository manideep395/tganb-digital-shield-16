
import { Suspense, lazy } from 'react';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { AdminProvider } from '@/contexts/AdminContext';
import { DatabaseAdminProvider } from '@/contexts/DatabaseAdminContext';
import NavigationChatAssistant from '@/components/NavigationChatAssistant';

import Index from './pages/Index';
import AboutTGANB from './pages/AboutTGANB';
import SahayAIChatbot from './pages/SahayAIChatbot';
import UdayAI from './pages/UdayAI';
import AboutUdayAI from './pages/AboutUdayAI';
import UdayAIRecoveryPlanner from './pages/UdayAIRecoveryPlanner';
import ShieldAI from './pages/ShieldAI';
import AboutShieldAI from './pages/AboutShieldAI';
import ShieldAIRiskAssessment from './pages/ShieldAIRiskAssessment';
import AboutTRisingAI from './pages/AboutTRisingAI';
import News from './pages/News';
import NewsDetail from './pages/NewsDetail';
import Contact from './pages/Contact';
import OfficersDirectory from './pages/OfficersDirectory';
import RehabilitationCenters from './pages/RehabilitationCenters';
import MissionParivartana from './pages/MissionParivartana';
import OperationSankalp from './pages/OperationSankalp';
import Trainings from './pages/Trainings';
import Education from './pages/Education';
import AntiDrugSoldierEnrollment from './pages/AntiDrugSoldierEnrollment';
import DrugReportSubmission from './pages/DrugReportSubmission';
import CertificateVerification from './pages/CertificateVerification';
import VisionMission from './pages/VisionMission';
import DirectorsNote from './pages/DirectorsNote';
import Statistics from './pages/Statistics';
import FAQs from './pages/FAQs';
import LearningResources from './pages/LearningResources';
import EventsCampaigns from './pages/EventsCampaigns';
import MythsFacts from './pages/MythsFacts';
import DrugTypes from './pages/DrugTypes';
import TestingKits from './pages/TestingKits';
import Achievements from './pages/Achievements';
import NarcoticPoliceStations from './pages/NarcoticPoliceStations';
import RegionalNarcoticPoliceStations from './pages/RegionalNarcoticPoliceStations';
import TganbStructure from './pages/TganbStructure';
import StateCoordination from './pages/StateCoordination';
import CentralCoordination from './pages/CentralCoordination';
import AntiDrugCommittees from './pages/AntiDrugCommittees';
import PrahariClubs from './pages/PrahariClubs';
import TganbGo27 from './pages/TganbGo27';
import AboutLogo from './pages/AboutLogo';
import Rehabilitation from './pages/Rehabilitation';
import SahayAI from './pages/SahayAI';
import AboutSahayAI from './pages/AboutSahayAI';
import AboutRisingAI from './pages/AboutRisingAI';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AdminProvider>
          <DatabaseAdminProvider>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/about-tganb" element={<AboutTGANB />} />
                  <Route path="/sahay-ai-chat" element={<SahayAIChatbot />} />
                  <Route path="/uday-ai" element={<UdayAI />} />
                  <Route path="/about-uday-ai" element={<AboutUdayAI />} />
                  <Route path="/uday-ai-planner" element={<UdayAIRecoveryPlanner />} />
                  <Route path="/shield-ai" element={<ShieldAI />} />
                  <Route path="/about-shield-ai" element={<AboutShieldAI />} />
                  <Route path="/shield-ai-risk-assessment" element={<ShieldAIRiskAssessment />} />
                  <Route path="/about-t-rising-ai" element={<AboutTRisingAI />} />
                  <Route path="/news" element={<News />} />
                  <Route path="/news/:id" element={<NewsDetail />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/officers-directory" element={<OfficersDirectory />} />
                  <Route path="/rehabilitation-centers" element={<RehabilitationCenters />} />
                  <Route path="/mission-parivartana" element={<MissionParivartana />} />
                  <Route path="/operation-sankalp" element={<OperationSankalp />} />
                  <Route path="/trainings" element={<Trainings />} />
                  <Route path="/education" element={<Education />} />
                  <Route path="/anti-drug-soldier-enrollment" element={<AntiDrugSoldierEnrollment />} />
                  <Route path="/drug-report-submission" element={<DrugReportSubmission />} />
                  <Route path="/certificate-verification" element={<CertificateVerification />} />
                  <Route path="/vision-mission" element={<VisionMission />} />
                  <Route path="/directors-note" element={<DirectorsNote />} />
                  <Route path="/statistics" element={<Statistics />} />
                  <Route path="/faqs" element={<FAQs />} />
                  <Route path="/learning-resources" element={<LearningResources />} />
                  <Route path="/events-campaigns" element={<EventsCampaigns />} />
                  <Route path="/myths-facts" element={<MythsFacts />} />
                  <Route path="/drug-types" element={<DrugTypes />} />
                  <Route path="/testing-kits" element={<TestingKits />} />
                  <Route path="/achievements" element={<Achievements />} />
                  <Route path="/narcotic-police-stations" element={<NarcoticPoliceStations />} />
                  <Route path="/regional-narcotic-police-stations" element={<RegionalNarcoticPoliceStations />} />
                  <Route path="/tganb-structure" element={<TganbStructure />} />
                  <Route path="/state-coordination" element={<StateCoordination />} />
                  <Route path="/central-coordination" element={<CentralCoordination />} />
                  <Route path="/anti-drug-committees" element={<AntiDrugCommittees />} />
                  <Route path="/prahari-clubs" element={<PrahariClubs />} />
                  <Route path="/tganb-go-27" element={<TganbGo27 />} />
                  <Route path="/about-logo" element={<AboutLogo />} />
                  <Route path="/rehabilitation" element={<Rehabilitation />} />
                  <Route path="/sahay-ai" element={<SahayAI />} />
                  <Route path="/about-sahay-ai" element={<AboutSahayAI />} />
                  <Route path="/about-rising-ai" element={<AboutRisingAI />} />
                </Routes>
                <NavigationChatAssistant />
              </BrowserRouter>
            </TooltipProvider>
          </DatabaseAdminProvider>
        </AdminProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
