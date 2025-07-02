
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster"
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import { DatabaseAdminProvider } from "./contexts/DatabaseAdminContext";
import AdminNews from "./pages/AdminNews";
import AdminAnnouncements from "./pages/AdminAnnouncements";
import AdminScrollingContent from "./pages/AdminScrollingContent";
import AdminTrainings from "./pages/AdminTrainings";
import AdminAchievements from "./pages/AdminAchievements";
import AdminCelebrityVideos from "./pages/AdminCelebrityVideos";
import AdminFAQs from "./pages/AdminFAQs";
import AdminDrugReports from "./pages/AdminDrugReports";
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
                      <AdminNews />
                    </ProtectedRoute>
                  } />
                  <Route path="/admin/announcements" element={
                    <ProtectedRoute>
                      <AdminAnnouncements />
                    </ProtectedRoute>
                  } />
                  <Route path="/admin/scrolling-content" element={
                    <ProtectedRoute>
                      <AdminScrollingContent />
                    </ProtectedRoute>
                  } />
                  <Route path="/admin/trainings" element={
                    <ProtectedRoute>
                      <AdminTrainings />
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
                  <Route path="/admin/faqs" element={
                    <ProtectedRoute>
                      <AdminFAQs />
                    </ProtectedRoute>
                  } />
                  <Route path="/admin/drug-reports" element={
                    <ProtectedRoute>
                      <AdminDrugReports />
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
