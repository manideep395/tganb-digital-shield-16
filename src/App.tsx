
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutTGANB from "./pages/AboutTGANB";
import VisionMission from "./pages/VisionMission";
import AntiDrugCommittees from "./pages/AntiDrugCommittees";
import AboutLogo from "./pages/AboutLogo";
import DirectorsNote from "./pages/DirectorsNote";
import OfficersDirectory from "./pages/OfficersDirectory";
import CentralCoordination from "./pages/CentralCoordination";
import StateCoordination from "./pages/StateCoordination";
import NarcoticPoliceStations from "./pages/NarcoticPoliceStations";
import RegionalNarcoticPoliceStations from "./pages/RegionalNarcoticPoliceStations";
import RehabilitationCenters from "./pages/RehabilitationCenters";
import MissionParivartana from "./pages/MissionParivartana";
import OperationSankalp from "./pages/OperationSankalp";
import PrahariClubs from "./pages/PrahariClubs";
import EventsCampaigns from "./pages/EventsCampaigns";
import TestingKits from "./pages/TestingKits";
import FAQs from "./pages/FAQs";
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
          <Route path="/about-logo" element={<AboutLogo />} />
          <Route path="/directors-note" element={<DirectorsNote />} />
          <Route path="/officers-directory" element={<OfficersDirectory />} />
          <Route path="/central-coordination" element={<CentralCoordination />} />
          <Route path="/state-coordination" element={<StateCoordination />} />
          <Route path="/narcotic-police-stations" element={<NarcoticPoliceStations />} />
          <Route path="/regional-narcotic-police-stations" element={<RegionalNarcoticPoliceStations />} />
          <Route path="/rehabilitation-centers" element={<RehabilitationCenters />} />
          <Route path="/mission-parivartana" element={<MissionParivartana />} />
          <Route path="/operation-sankalp" element={<OperationSankalp />} />
          <Route path="/prahari-clubs" element={<PrahariClubs />} />
          <Route path="/events-campaigns" element={<EventsCampaigns />} />
          <Route path="/testing-kits" element={<TestingKits />} />
          <Route path="/faqs" element={<FAQs />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
