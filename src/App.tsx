
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutTGANB from "./pages/AboutTGANB";
import VisionMission from "./pages/VisionMission";
import AntiDrugCommittees from "./pages/AntiDrugCommittees";
import DirectorsNote from "./pages/DirectorsNote";
import OfficersDirectory from "./pages/OfficersDirectory";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about-tganb" element={<AboutTGANB />} />
          <Route path="/vision-mission" element={<VisionMission />} />
          <Route path="/anti-drug-committees" element={<AntiDrugCommittees />} />
          <Route path="/directors-note" element={<DirectorsNote />} />
          <Route path="/officers-directory" element={<OfficersDirectory />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
