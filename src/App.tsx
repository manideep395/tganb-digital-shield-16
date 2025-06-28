import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import AboutTGANB from './pages/AboutTGANB';
import VisionMission from './pages/VisionMission';
import DirectorMessage from './pages/DirectorMessage';
import AboutLogo from './pages/AboutLogo';
import OfficersDirectory from './pages/OfficersDirectory';
import CentralCoordination from './pages/CentralCoordination';
import StateCoordination from './pages/StateCoordination';
import TGANBGO27 from './pages/TGANBGO27';
import TGANBStructure from './pages/TGANBStructure';
import AboutTRisingAI from './pages/AboutTRisingAI';
import AboutSahayAI from './pages/AboutSahayAI';
import AboutShieldAI from './pages/AboutShieldAI';
import AboutUdayAI from './pages/AboutUdayAI';
import NarcoticPoliceStations from './pages/NarcoticPoliceStations';
import RegionalNarcoticControlCells from './pages/RegionalNarcoticControlCells';
import RehabilitationCenters from './pages/RehabilitationCenters';
import MissionParivartana from './pages/MissionParivartana';
import OperationSankalp from './pages/OperationSankalp';
import PrahariClubs from './pages/PrahariClubs';
import AntiDrugCommittees from './pages/AntiDrugCommittees';
import EventsCampaigns from './pages/EventsCampaigns';
import TestingKits from './pages/TestingKits';
import Education from './pages/Education';
import MythsFacts from './pages/MythsFacts';
import FAQs from './pages/FAQs';
import AntiDrugSoldierEnrollment from './pages/AntiDrugSoldierEnrollment';
import CertificateVerification from './pages/CertificateVerification';
import DrugReportSubmission from './pages/DrugReportSubmission';
import Trainings from './pages/Trainings';
import Statistics from './pages/Statistics';
import Achievements from './pages/Achievements';
import News from './pages/News';
import Contact from './pages/Contact';
import NewsDetail from './pages/NewsDetail';
import { QueryClient } from 'react-query';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import AdminNews from './pages/AdminNews';
import AdminAnnouncements from './pages/AdminAnnouncements';
import AdminTrainings from './pages/AdminTrainings';
import AdminAchievements from './pages/AdminAchievements';
import AdminCelebrityVideos from './pages/AdminCelebrityVideos';
import AdminFAQs from './pages/AdminFAQs';
import AdminScrollingData from './pages/AdminScrollingData';
import { AdminProvider } from './contexts/AdminContext';

function App() {
  return (
    <AdminProvider>
      <QueryClient>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about-tganb" element={<AboutTGANB />} />
            <Route path="/vision-mission" element={<VisionMission />} />
            <Route path="/directors-note" element={<DirectorMessage />} />
            <Route path="/about-logo" element={<AboutLogo />} />
            <Route path="/officers-directory" element={<OfficersDirectory />} />
            <Route path="/central-coordination" element={<CentralCoordination />} />
            <Route path="/state-coordination" element={<StateCoordination />} />
            <Route path="/tganb-go-27" element={<TGANBGO27 />} />
            <Route path="/tganb-structure" element={<TGANBStructure />} />
            <Route path="/about-t-rising-ai" element={<AboutTRisingAI />} />
            <Route path="/about-sahay-ai" element={<AboutSahayAI />} />
            <Route path="/about-shield-ai" element={<AboutShieldAI />} />
            <Route path="/about-uday-ai" element={<AboutUdayAI />} />
            <Route path="/narcotic-police-stations" element={<NarcoticPoliceStations />} />
            <Route path="/regional-narcotic-police-stations" element={<RegionalNarcoticControlCells />} />
            <Route path="/rehabilitation-centers" element={<RehabilitationCenters />} />
            <Route path="/mission-parivartana" element={<MissionParivartana />} />
            <Route path="/operation-sankalp" element={<OperationSankalp />} />
            <Route path="/prahari-clubs" element={<PrahariClubs />} />
            <Route path="/anti-drug-committees" element={<AntiDrugCommittees />} />
            <Route path="/events-campaigns" element={<EventsCampaigns />} />
            <Route path="/testing-kits" element={<TestingKits />} />
            <Route path="/education" element={<Education />} />
            <Route path="/myths-facts" element={<MythsFacts />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/anti-drug-soldier-enrollment" element={<AntiDrugSoldierEnrollment />} />
            <Route path="/certificate-verification" element={<CertificateVerification />} />
            <Route path="/drug-report-submission" element={<DrugReportSubmission />} />
            <Route path="/trainings" element={<Trainings />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/news/:newsId" element={<NewsDetail />} />
            
            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/news" element={<AdminNews />} />
            <Route path="/admin/announcements" element={<AdminAnnouncements />} />
            <Route path="/admin/trainings" element={<AdminTrainings />} />
            <Route path="/admin/achievements" element={<AdminAchievements />} />
            <Route path="/admin/celebrity-videos" element={<AdminCelebrityVideos />} />
            <Route path="/admin/faqs" element={<AdminFAQs />} />
            <Route path="/admin/scrolling-data" element={<AdminScrollingData />} />
          </Routes>
        </BrowserRouter>
      </QueryClient>
    </AdminProvider>
  );
}

export default App;
