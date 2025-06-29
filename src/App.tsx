
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
import SecureAdminLogin from "./components/SecureAdminLogin";
import ProtectedRoute from "./components/ProtectedRoute";

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
            </Routes>
          </DatabaseAdminProvider>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
