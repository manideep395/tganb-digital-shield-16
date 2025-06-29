
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { DatabaseAdminProvider } from "./contexts/DatabaseAdminContext";
import Index from "./pages/Index";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminNews from "./pages/AdminNews";
import AdminAnnouncements from "./pages/AdminAnnouncements";
import AdminAchievements from "./pages/AdminAchievements";
import AdminCelebrityVideos from "./pages/AdminCelebrityVideos";
import AdminScrollingContent from "./pages/AdminScrollingContent";
import AdminScrollingData from "./pages/AdminScrollingData";
import AdminFAQs from "./pages/AdminFAQs";
import AdminTrainings from "./pages/AdminTrainings";
import AdminDrugReports from "./pages/AdminDrugReports";
import SecureAdminLogin from "./components/SecureAdminLogin";
import ProtectedRoute from "./components/ProtectedRoute";
import About from "./pages/AboutTGANB";
import Contact from "./pages/Contact";
import Achievements from "./pages/Achievements";
import Trainings from "./pages/Trainings";
import FAQs from "./pages/FAQs";
import Statistics from "./pages/Statistics";
import DirectorsNote from "./pages/DirectorsNote";
import VisionMission from "./pages/VisionMission";
import TganbStructure from "./pages/TganbStructure";
import Education from "./pages/Education";
import Rehabilitation from "./pages/Rehabilitation";
import AntiDrugSoldierEnrollment from "./pages/AntiDrugSoldierEnrollment";
import CertificateVerification from "./pages/CertificateVerification";
import DrugReportSubmission from "./pages/DrugReportSubmission";
import AboutLogo from "./pages/AboutLogo";
import OfficersDirectory from "./pages/OfficersDirectory";
import CentralCoordination from "./pages/CentralCoordination";
import StateCoordination from "./pages/StateCoordination";
import TganbGo27 from "./pages/TganbGo27";
import AboutRisingAI from "./pages/AboutRisingAI";
import AboutTRisingAI from "./pages/AboutTRisingAI";
import AboutSahayAI from "./pages/AboutSahayAI";
import AboutShieldAI from "./pages/AboutShieldAI";
import AboutUdayAI from "./pages/AboutUdayAI";
import AntiDrugCommittees from "./pages/AntiDrugCommittees";
import DrugTypes from "./pages/DrugTypes";
import EventsCampaigns from "./pages/EventsCampaigns";
import LearningResources from "./pages/LearningResources";
import MissionParivartana from "./pages/MissionParivartana";
import MythsFacts from "./pages/MythsFacts";
import NarcoticPoliceStations from "./pages/NarcoticPoliceStations";
import NotFound from "./pages/NotFound";
import OperationSankalp from "./pages/OperationSankalp";
import PrahariClubs from "./pages/PrahariClubs";
import RegionalNarcoticPoliceStations from "./pages/RegionalNarcoticPoliceStations";
import RehabilitationCenters from "./pages/RehabilitationCenters";
import SahayAI from "./pages/SahayAI";
import SahayAIChatbot from "./pages/SahayAIChatbot";
import ShieldAI from "./pages/ShieldAI";
import ShieldAIRiskAssessment from "./pages/ShieldAIRiskAssessment";
import TestingKits from "./pages/TestingKits";
import UdayAI from "./pages/UdayAI";
import UdayAIRecoveryPlanner from "./pages/UdayAIRecoveryPlanner";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <DatabaseAdminProvider>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/news" element={<News />} />
              <Route path="/news/:slug" element={<NewsDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/about-tganb" element={<About />} />
              <Route path="/about-logo" element={<AboutLogo />} />
              <Route path="/officers-directory" element={<OfficersDirectory />} />
              <Route path="/central-coordination" element={<CentralCoordination />} />
              <Route path="/state-coordination" element={<StateCoordination />} />
              <Route path="/tganb-go-27" element={<TganbGo27 />} />
              <Route path="/tganb-structure" element={<TganbStructure />} />
              <Route path="/about-rising-ai" element={<AboutRisingAI />} />
              <Route path="/about-t-rising-ai" element={<AboutTRisingAI />} />
              <Route path="/about-sahay-ai" element={<AboutSahayAI />} />
              <Route path="/about-shield-ai" element={<AboutShieldAI />} />
              <Route path="/about-uday-ai" element={<AboutUdayAI />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/trainings" element={<Trainings />} />
              <Route path="/faqs" element={<FAQs />} />
              <Route path="/statistics" element={<Statistics />} />
              <Route path="/directors-note" element={<DirectorsNote />} />
              <Route path="/vision-mission" element={<VisionMission />} />
              <Route path="/structure" element={<TganbStructure />} />
              <Route path="/education" element={<Education />} />
              <Route path="/rehabilitation" element={<Rehabilitation />} />
              <Route path="/anti-drug-soldier" element={<AntiDrugSoldierEnrollment />} />
              <Route path="/anti-drug-soldier-enrollment" element={<AntiDrugSoldierEnrollment />} />
              <Route path="/certificate-verification" element={<CertificateVerification />} />
              <Route path="/report-drug-activity" element={<DrugReportSubmission />} />
              <Route path="/drug-report-submission" element={<DrugReportSubmission />} />
              <Route path="/anti-drug-committees" element={<AntiDrugCommittees />} />
              <Route path="/drug-types" element={<DrugTypes />} />
              <Route path="/events-campaigns" element={<EventsCampaigns />} />
              <Route path="/learning-resources" element={<LearningResources />} />
              <Route path="/mission-parivartana" element={<MissionParivartana />} />
              <Route path="/myths-facts" element={<MythsFacts />} />
              <Route path="/narcotic-police-stations" element={<NarcoticPoliceStations />} />
              <Route path="/operation-sankalp" element={<OperationSankalp />} />
              <Route path="/prahari-clubs" element={<PrahariClubs />} />
              <Route path="/regional-narcotic-police-stations" element={<RegionalNarcoticPoliceStations />} />
              <Route path="/rehabilitation-centers" element={<RehabilitationCenters />} />
              <Route path="/sahay-ai" element={<SahayAI />} />
              <Route path="/sahay-ai-chatbot" element={<SahayAIChatbot />} />
              <Route path="/sahay-ai-chat" element={<SahayAIChatbot />} />
              <Route path="/shield-ai" element={<ShieldAI />} />
              <Route path="/shield-ai-risk-assessment" element={<ShieldAIRiskAssessment />} />
              <Route path="/shield-ai-assessment" element={<ShieldAIRiskAssessment />} />
              <Route path="/testing-kits" element={<TestingKits />} />
              <Route path="/uday-ai" element={<UdayAI />} />
              <Route path="/uday-ai-recovery-planner" element={<UdayAIRecoveryPlanner />} />
              <Route path="/uday-ai-planner" element={<UdayAIRecoveryPlanner />} />
              
              {/* Admin Routes */}
              <Route path="/admin/login" element={<SecureAdminLogin />} />
              <Route path="/admin/dashboard" element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              } />
              <Route path="/admin/news" element={
                <ProtectedRoute>
                  <AdminNews />
                </ProtectedRoute>
              } />
              <Route path="/admin/announcements" element={
                <ProtectedRoute>
                  <AdminAnnouncements />
                </ProtectedRoute>
              } />
              <Route path="/admin/achievements" element={
                <ProtectedRoute>
                  <AdminAchievements />
                </ProtectedRoute>
              } />
              <Route path="/admin/celebrity-videos" element={
                <ProtectedRoute>
                  <AdminCelebrityVideos />
                </ProtectedRoute>
              } />
              <Route path="/admin/scrolling-content" element={
                <ProtectedRoute>
                  <AdminScrollingContent />
                </ProtectedRoute>
              } />
              <Route path="/admin/scrolling-data" element={
                <ProtectedRoute>
                  <AdminScrollingData />
                </ProtectedRoute>
              } />
              <Route path="/admin/faqs" element={
                <ProtectedRoute>
                  <AdminFAQs />
                </ProtectedRoute>
              } />
              <Route path="/admin/trainings" element={
                <ProtectedRoute>
                  <AdminTrainings />
                </ProtectedRoute>
              } />
              <Route path="/admin/drug-reports" element={
                <ProtectedRoute>
                  <AdminDrugReports />
                </ProtectedRoute>
              } />
              
              {/* 404 Route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </DatabaseAdminProvider>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
