
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
