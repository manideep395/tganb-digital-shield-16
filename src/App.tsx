
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
import AboutSahayAI from "./pages/AboutSahayAI";
import AboutShieldAI from "./pages/AboutShieldAI";
import AboutUdayAI from "./pages/AboutUdayAI";

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
              <Route path="/about-logo" element={<AboutLogo />} />
              <Route path="/officers-directory" element={<OfficersDirectory />} />
              <Route path="/central-coordination" element={<CentralCoordination />} />
              <Route path="/state-coordination" element={<StateCoordination />} />
              <Route path="/tganb-go-27" element={<TganbGo27 />} />
              <Route path="/tganb-structure" element={<TganbStructure />} />
              <Route path="/about-t-rising-ai" element={<AboutRisingAI />} />
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
              <Route path="/certificate-verification" element={<CertificateVerification />} />
              <Route path="/report-drug-activity" element={<DrugReportSubmission />} />
              
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
            </Routes>
          </DatabaseAdminProvider>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
