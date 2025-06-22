import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Index from "./pages/Index";
import About from "./pages/AboutTGANB";
import Contact from "./pages/Contact";
import VisionMission from "./pages/VisionMission";
import AntiDrugCommittees from "./pages/AntiDrugCommittees";
import AboutLogo from "./pages/AboutLogo";
import DirectorsNote from "./pages/DirectorsNote";
import OfficersDirectory from "./pages/OfficersDirectory";
import CentralCoordination from "./pages/CentralCoordination";
import StateCoordination from "./pages/StateCoordination";
import TganbGo27 from "./pages/TganbGo27";
import TganbStructure from "./pages/TganbStructure";
import AboutTRisingAI from "./pages/AboutTRisingAI";
import AboutSahayAI from "./pages/AboutSahayAI";
import AboutShieldAI from "./pages/AboutShieldAI";
import AboutUdayAI from "./pages/AboutUdayAI";
import NarcoticPoliceStations from "./pages/NarcoticPoliceStations";
import RegionalNarcoticPoliceStations from "./pages/RegionalNarcoticPoliceStations";
import RehabilitationCenters from "./pages/RehabilitationCenters";
import MissionParivartana from "./pages/MissionParivartana";
import OperationSankalp from "./pages/OperationSankalp";
import PrahariClubs from "./pages/PrahariClubs";
import EventsCampaigns from "./pages/EventsCampaigns";
import TestingKits from "./pages/TestingKits";
import Education from "./pages/Education";
import MythsFacts from "./pages/MythsFacts";
import FAQs from "./pages/FAQs";
import AntiDrugSoldierEnrollment from "./pages/AntiDrugSoldierEnrollment";
import CertificateVerification from "./pages/CertificateVerification";
import DrugReportSubmission from "./pages/DrugReportSubmission";
import LearningResources from "./pages/LearningResources";
import Statistics from "./pages/Statistics";
import Achievements from "./pages/Achievements";
import News from "./pages/News";
import NotFound from "./pages/NotFound";
import AboutRisingAI from "./pages/AboutRisingAI";
import SahayAI from "./pages/SahayAI";
import ShieldAI from "./pages/ShieldAI";
import UdayAI from "./pages/UdayAI";
import SahayAIChatbot from "./pages/SahayAIChatbot";
import ShieldAIRiskAssessment from "./pages/ShieldAIRiskAssessment";
import UdayAIRecoveryPlanner from "./pages/UdayAIRecoveryPlanner";
import Rehabilitation from "./pages/Rehabilitation";
import DrugTypes from "./pages/DrugTypes";
import Trainings from "./pages/Trainings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about-tganb" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/vision-mission" element={<VisionMission />} />
            <Route path="/anti-drug-committees" element={<AntiDrugCommittees />} />
            <Route path="/about-logo" element={<AboutLogo />} />
            <Route path="/directors-note" element={<DirectorsNote />} />
            <Route path="/officers-directory" element={<OfficersDirectory />} />
            <Route path="/central-coordination" element={<CentralCoordination />} />
            <Route path="/state-coordination" element={<StateCoordination />} />
            <Route path="/tganb-go-27" element={<TganbGo27 />} />
            <Route path="/tganb-structure" element={<TganbStructure />} />
            <Route path="/about-t-rising-ai" element={<AboutTRisingAI />} />
            <Route path="/about-sahay-ai" element={<AboutSahayAI />} />
            <Route path="/about-shield-ai" element={<AboutShieldAI />} />
            <Route path="/about-uday-ai" element={<AboutUdayAI />} />
            <Route path="/narcotic-police-stations" element={<NarcoticPoliceStations />} />
            <Route path="/regional-narcotic-police-stations" element={<RegionalNarcoticPoliceStations />} />
            <Route path="/rehabilitation-centers" element={<RehabilitationCenters />} />
            <Route path="/mission-parivartana" element={<MissionParivartana />} />
            <Route path="/operation-sankalp" element={<OperationSankalp />} />
            <Route path="/prahari-clubs" element={<PrahariClubs />} />
            <Route path="/events-campaigns" element={<EventsCampaigns />} />
            <Route path="/testing-kits" element={<TestingKits />} />
            <Route path="/education" element={<Education />} />
            <Route path="/myths-facts" element={<MythsFacts />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/anti-drug-soldier-enrollment" element={<AntiDrugSoldierEnrollment />} />
            <Route path="/certificate-verification" element={<CertificateVerification />} />
            <Route path="/drug-report-submission" element={<DrugReportSubmission />} />
            <Route path="/sahay-ai-chat" element={<SahayAIChatbot />} />
            <Route path="/shield-ai-assessment" element={<ShieldAIRiskAssessment />} />
            <Route path="/uday-ai-planner" element={<UdayAIRecoveryPlanner />} />
            <Route path="/trainings" element={<Trainings />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
