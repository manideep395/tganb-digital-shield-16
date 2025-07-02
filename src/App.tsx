
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { AdminProvider } from "@/contexts/AdminContext";
import { DatabaseAdminProvider } from "@/contexts/DatabaseAdminContext";
import Index from "./pages/Index";
import FAQs from "./pages/FAQs";
import Trainings from "./pages/Trainings";
import LearningResources from "./pages/LearningResources";
import Achievements from "./pages/Achievements";
import AntiDrugSoldierEnrollment from "./pages/AntiDrugSoldierEnrollment";
import CertificateVerification from "./pages/CertificateVerification";
import ShieldAIRiskAssessment from "./pages/ShieldAIRiskAssessment";
import DrugReportSubmission from "./pages/DrugReportSubmission";
import SecureDrugReportForm from "./components/SecureDrugReportForm";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminNews from "./pages/AdminNews";
import AdminAnnouncements from "./pages/AdminAnnouncements";
import AdminScrollingContent from "./pages/AdminScrollingContent";
import AdminTrainings from "./pages/AdminTrainings";
import AdminAchievements from "./pages/AdminAchievements";
import AdminCelebrityVideos from "./pages/AdminCelebrityVideos";
import AdminFAQs from "./pages/AdminFAQs";
import MissionParivartana from "./pages/MissionParivartana";
import PrahariClubs from "./pages/PrahariClubs";
import EventsCampaigns from "./pages/EventsCampaigns";
import RedirectionChatbot from "./components/RedirectionChatbot";

// T-RISING.AI Pages
import AboutRisingAI from "./pages/AboutRisingAI";
import AboutTRisingAI from "./pages/AboutTRisingAI";
import SahayAI from "./pages/SahayAI";
import AboutSahayAI from "./pages/AboutSahayAI";
import SahayAIChatbot from "./pages/SahayAIChatbot";
import ShieldAI from "./pages/ShieldAI";
import AboutShieldAI from "./pages/AboutShieldAI";
import UdayAI from "./pages/UdayAI";
import AboutUdayAI from "./pages/AboutUdayAI";
import UdayAIRecoveryPlanner from "./pages/UdayAIRecoveryPlanner";

// About Pages
import AboutTGANB from "./pages/AboutTGANB";
import AboutLogo from "./pages/AboutLogo";
import VisionMission from "./pages/VisionMission";
import DirectorsNote from "./pages/DirectorsNote";
import TganbStructure from "./pages/TganbStructure";
import StateCoordination from "./pages/StateCoordination";
import CentralCoordination from "./pages/CentralCoordination";
import TganbGo27 from "./pages/TganbGo27";

// Other Pages
import Contact from "./pages/Contact";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import Statistics from "./pages/Statistics";
import Education from "./pages/Education";
import Rehabilitation from "./pages/Rehabilitation";
import RehabilitationCenters from "./pages/RehabilitationCenters";
import AntiDrugCommittees from "./pages/AntiDrugCommittees";
import NarcoticPoliceStations from "./pages/NarcoticPoliceStations";
import RegionalNarcoticPoliceStations from "./pages/RegionalNarcoticPoliceStations";
import OfficersDirectory from "./pages/OfficersDirectory";
import OperationSankalp from "./pages/OperationSankalp";
import DrugTypes from "./pages/DrugTypes";
import TestingKits from "./pages/TestingKits";
import MythsFacts from "./pages/MythsFacts";

// Import the correct page components
import SahayAIChatPage from "./pages/SahayAIChatPage";
import ShieldAIAssessmentPage from "./pages/ShieldAIAssessmentPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <AdminProvider>
            <DatabaseAdminProvider>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/faqs" element={<FAQs />} />
                <Route path="/trainings" element={<Trainings />} />
                <Route path="/learning-resources" element={<LearningResources />} />
                <Route path="/achievements" element={<Achievements />} />
                <Route path="/anti-drug-soldiers" element={<AntiDrugSoldierEnrollment />} />
                <Route path="/anti-drug-soldier-enrollment" element={<AntiDrugSoldierEnrollment />} />
                <Route path="/certificate-verification" element={<CertificateVerification />} />
                <Route path="/shield-ai" element={<ShieldAIRiskAssessment />} />
                <Route path="/drug-report" element={<DrugReportSubmission />} />
                <Route path="/drug-report-submission" element={<DrugReportSubmission />} />
                <Route path="/secure-drug-report" element={<SecureDrugReportForm />} />
                <Route path="/mission-parivartana" element={<MissionParivartana />} />
                <Route path="/prahari-clubs" element={<PrahariClubs />} />
                <Route path="/events-campaigns" element={<EventsCampaigns />} />
                
                {/* T-RISING.AI Routes */}
                <Route path="/about-rising-ai" element={<AboutRisingAI />} />
                <Route path="/about-t-rising-ai" element={<AboutTRisingAI />} />
                <Route path="/sahay-ai" element={<SahayAI />} />
                <Route path="/about-sahay-ai" element={<AboutSahayAI />} />
                <Route path="/sahay-ai-chatbot" element={<SahayAIChatbot />} />
                <Route path="/shield-ai-about" element={<AboutShieldAI />} />
                <Route path="/uday-ai" element={<UdayAI />} />
                <Route path="/about-uday-ai" element={<AboutUdayAI />} />
                <Route path="/uday-ai-planner" element={<UdayAIRecoveryPlanner />} />
                
                {/* Use the original SahayAIChatbot for both routes */}
                <Route path="/sahay-ai-chat" element={<SahayAIChatbot />} />
                <Route path="/shield-ai-assessment" element={<ShieldAIAssessmentPage />} />
                
                {/* About Routes */}
                <Route path="/about-tganb" element={<AboutTGANB />} />
                <Route path="/about-logo" element={<AboutLogo />} />
                <Route path="/vision-mission" element={<VisionMission />} />
                <Route path="/directors-note" element={<DirectorsNote />} />
                <Route path="/tganb-structure" element={<TganbStructure />} />
                <Route path="/state-coordination" element={<StateCoordination />} />
                <Route path="/central-coordination" element={<CentralCoordination />} />
                <Route path="/tganb-go-27" element={<TganbGo27 />} />
                
                {/* Other Routes */}
                <Route path="/contact" element={<Contact />} />
                <Route path="/news" element={<News />} />
                <Route path="/news/:id" element={<NewsDetail />} />
                <Route path="/statistics" element={<Statistics />} />
                <Route path="/education" element={<Education />} />
                <Route path="/rehabilitation" element={<Rehabilitation />} />
                <Route path="/rehabilitation-centers" element={<RehabilitationCenters />} />
                <Route path="/anti-drug-committees" element={<AntiDrugCommittees />} />
                <Route path="/narcotic-police-stations" element={<NarcoticPoliceStations />} />
                <Route path="/regional-narcotic-police-stations" element={<RegionalNarcoticPoliceStations />} />
                <Route path="/officers-directory" element={<OfficersDirectory />} />
                <Route path="/operation-sankalp" element={<OperationSankalp />} />
                <Route path="/drug-types" element={<DrugTypes />} />
                <Route path="/testing-kites" element={<TestingKits />} />
                <Route path="/myths-facts" element={<MythsFacts />} />
                
                {/* Admin Routes */}
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="/admin/news" element={<AdminNews />} />
                <Route path="/admin/announcements" element={<AdminAnnouncements />} />
                <Route path="/admin/scrolling" element={<AdminScrollingContent />} />
                <Route path="/admin/trainings" element={<AdminTrainings />} />
                <Route path="/admin/achievements" element={<AdminAchievements />} />
                <Route path="/admin/videos" element={<AdminCelebrityVideos />} />
                <Route path="/admin/faqs" element={<AdminFAQs />} />
              </Routes>
              <RedirectionChatbot />
            </DatabaseAdminProvider>
          </AdminProvider>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
