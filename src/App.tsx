import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from './contexts/ThemeContext';
import Index from "./pages/Index";
import AboutTGANB from "./pages/AboutTGANB";
import VisionMission from "./pages/VisionMission";
import Initiatives from "./pages/Initiatives";
import Awareness from "./pages/Awareness";
import Trainings from "./pages/Trainings";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import SahayAI from "./pages/SahayAI";
import ShieldAI from "./pages/ShieldAI";
import UdayAI from "./pages/UdayAI";
import NotFound from "./pages/NotFound";
import AboutSahayAI from "./pages/AboutSahayAI";
import AboutShieldAI from "./pages/AboutShieldAI";
import AboutUdayAI from "./pages/AboutUdayAI";
import SahayAIChat from "./pages/SahayAIChat";
import ShieldAIAssessment from "./pages/ShieldAIAssessment";
import UdayAIPlanner from "./pages/UdayAIPlanner";
import AboutRisingAI from "./pages/AboutRisingAI";
import AboutTRisingAI from "./pages/AboutTRisingAI";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about-tganb" element={<AboutTGANB />} />
            <Route path="/vision-mission" element={<VisionMission />} />
            <Route path="/initiatives" element={<Initiatives />} />
            <Route path="/awareness" element={<Awareness />} />
            <Route path="/trainings" element={<Trainings />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/sahay-ai" element={<SahayAI />} />
            <Route path="/shield-ai" element={<ShieldAI />} />
            <Route path="/uday-ai" element={<UdayAI />} />
            <Route path="/about-sahay-ai" element={<AboutSahayAI />} />
            <Route path="/about-shield-ai" element={<AboutShieldAI />} />
            <Route path="/about-uday-ai" element={<AboutUdayAI />} />
            <Route path="/sahay-ai-chat" element={<SahayAIChat />} />
            <Route path="/shield-ai-assessment" element={<ShieldAIAssessment />} />
            <Route path="/uday-ai-planner" element={<UdayAIPlanner />} />
            <Route path="/about-rising-ai" element={<AboutRisingAI />} />
            <Route path="/about-t-rising-ai" element={<AboutTRisingAI />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
