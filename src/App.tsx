import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster"
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import DatabaseAdminProvider from "./contexts/DatabaseAdminContext";
import News from "./pages/admin/News";
import EditNews from "./pages/admin/EditNews";
import CreateNews from "./pages/admin/CreateNews";
import Announcements from "./pages/admin/Announcements";
import CreateAnnouncement from "./pages/admin/CreateAnnouncement";
import EditAnnouncement from "./pages/admin/EditAnnouncement";
import ScrollingContent from "./pages/admin/ScrollingContent";
import CreateScrollingContent from "./pages/admin/CreateScrollingContent";
import EditScrollingContent from "./pages/admin/EditScrollingContent";
import Trainings from "./pages/admin/Trainings";
import CreateTraining from "./pages/admin/CreateTraining";
import EditTraining from "./pages/admin/EditTraining";
import Achievements from "./pages/admin/Achievements";
import CreateAchievement from "./pages/admin/CreateAchievement";
import EditAchievement from "./pages/admin/EditAchievement";
import CelebrityVideos from "./pages/admin/CelebrityVideos";
import CreateCelebrityVideo from "./pages/admin/CreateCelebrityVideo";
import EditCelebrityVideo from "./pages/admin/EditCelebrityVideo";
import FAQs from "./pages/admin/FAQs";
import CreateFAQ from "./pages/admin/CreateFAQ";
import EditFAQ from "./pages/admin/EditFAQ";
import DrugReports from "./pages/admin/DrugReports";
import SecurityWrapper from './components/SecurityWrapper';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SecurityWrapper>
        <BrowserRouter>
          <AuthProvider>
            <DatabaseAdminProvider>
              <div className="min-h-screen bg-background font-sans antialiased">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/admin/login" element={<AdminLogin />} />
                  <Route path="/admin/dashboard" element={
                    <ProtectedRoute>
                      <AdminDashboard />
                    </ProtectedRoute>
                  } />
                  <Route path="/admin/news" element={
                    <ProtectedRoute>
                      <News />
                    </ProtectedRoute>
                  } />
                  <Route path="/admin/news/edit/:id" element={
                    <ProtectedRoute>
                      <EditNews />
                    </ProtectedRoute>
                  } />
                  <Route path="/admin/news/create" element={
                    <ProtectedRoute>
                      <CreateNews />
                    </ProtectedRoute>
                  } />
                  <Route path="/admin/announcements" element={
                    <ProtectedRoute>
                      <Announcements />
                    </ProtectedRoute>
                  } />
                  <Route path="/admin/announcements/create" element={
                    <ProtectedRoute>
                      <CreateAnnouncement />
                    </ProtectedRoute>
                  } />
                  <Route path="/admin/announcements/edit/:id" element={
                    <ProtectedRoute>
                      <EditAnnouncement />
                    </ProtectedRoute>
                  } />
                  <Route path="/admin/scrolling-content" element={
                    <ProtectedRoute>
                      <ScrollingContent />
                    </ProtectedRoute>
                  } />
                  <Route path="/admin/scrolling-content/create" element={
                    <ProtectedRoute>
                      <CreateScrollingContent />
                    </ProtectedRoute>
                  } />
                  <Route path="/admin/scrolling-content/edit/:id" element={
                    <ProtectedRoute>
                      <EditScrollingContent />
                    </ProtectedRoute>
                  } />
                  <Route path="/admin/trainings" element={
                    <ProtectedRoute>
                      <Trainings />
                    </ProtectedRoute>
                  } />
                  <Route path="/admin/trainings/create" element={
                    <ProtectedRoute>
                      <CreateTraining />
                    </ProtectedRoute>
                  } />
                  <Route path="/admin/trainings/edit/:id" element={
                    <ProtectedRoute>
                      <EditTraining />
                    </ProtectedRoute>
                  } />
                  <Route path="/admin/achievements" element={
                    <ProtectedRoute>
                      <Achievements />
                    </ProtectedRoute>
                  } />
                  <Route path="/admin/achievements/create" element={
                    <ProtectedRoute>
                      <CreateAchievement />
                    </ProtectedRoute>
                  } />
                  <Route path="/admin/achievements/edit/:id" element={
                    <ProtectedRoute>
                      <EditAchievement />
                    </ProtectedRoute>
                  } />
                  <Route path="/admin/celebrity-videos" element={
                    <ProtectedRoute>
                      <CelebrityVideos />
                    </ProtectedRoute>
                  } />
                  <Route path="/admin/celebrity-videos/create" element={
                    <ProtectedRoute>
                      <CreateCelebrityVideo />
                    </ProtectedRoute>
                  } />
                  <Route path="/admin/celebrity-videos/edit/:id" element={
                    <ProtectedRoute>
                      <EditCelebrityVideo />
                    </ProtectedRoute>
                  } />
                  <Route path="/admin/faqs" element={
                    <ProtectedRoute>
                      <FAQs />
                    </ProtectedRoute>
                  } />
                  <Route path="/admin/faqs/create" element={
                    <ProtectedRoute>
                      <CreateFAQ />
                    </ProtectedRoute>
                  } />
                  <Route path="/admin/faqs/edit/:id" element={
                    <ProtectedRoute>
                      <EditFAQ />
                    </ProtectedRoute>
                  } />
                  <Route path="/admin/drug-reports" element={
                    <ProtectedRoute>
                      <DrugReports />
                    </ProtectedRoute>
                  } />
                </Routes>
                <Toaster />
              </div>
            </DatabaseAdminProvider>
          </AuthProvider>
        </BrowserRouter>
      </SecurityWrapper>
    </QueryClientProvider>
  );
}

export default App;
