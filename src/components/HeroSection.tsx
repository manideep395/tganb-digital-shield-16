
import { Button } from '@/components/ui/button';
import { Shield, Users, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import HeroScrollingBoxes from './HeroScrollingBoxes';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleExploreWork = () => {
    navigate('/news');
  };

  const handleReportCrime = () => {
    navigate('/drug-report-submission');
  };

  return (
    <section className="relative flex overflow-hidden bg-gradient-to-br from-green-400 via-darkslategrey-900 to-blue-700 font-poppins py-8">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-black-400/30 to-transparent rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-blue-400/30 to-transparent rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-lg animate-pulse delay-500"></div>
      </div>

      {/* Main Hero Content - 75% width */}
      <div className="w-3/4 flex items-center justify-center text-white relative z-10 px-4">
        <div className="max-w-4xl mx-auto space-y-3 animate-fade-in text-center">
          {/* Three Logos Row */}
          <div className="flex justify-center items-center space-x-8 mb-4">
            {/* Telangana Emblem - Left */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 to-black-600/30 rounded-full blur-md animate-pulse"></div>
              <img 
                src="/uploads/37f408d2-9357-4e1c-af91-05f171f00af2.png" 
                alt="Telangana Emblem" 
                className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-yellow-400 shadow-lg relative z-10"
              />
            </div>
            
            {/* TGANB Logo - Center (Main) */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-black-400 to-black-600 rounded-full blur-lg animate-pulse"></div>
              <div className="absolute -inset-2 border-2 border-black-900/50 rounded-full animate-spin"></div>
              <img 
                src="/uploads/cfe052e4-2276-4a1d-b6af-bc0ad7c3ccd4.png" 
                alt="TG ANB Logo" 
                className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-black-400 shadow-2xl relative z-10 hover:scale-110 transition-transform duration-300"
              />
            </div>
            
            {/* Telangana Police Logo - Right */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-blue-600/30 rounded-full blur-md animate-pulse delay-500"></div>
              <img 
                src="/uploads/db384303-58f4-497a-9043-3cb10d049cee.png" 
                alt="Telangana Police Logo" 
                className="w-12 h-12 md:w-16 md:h-16 shadow-lg relative z-10"
              />
            </div>
          </div>

          {/* Hero Content */}
          <h1 className="text-xl md:text-3xl font-bold font-poppins leading-tight">
            <span className="block text-black text-lg md:text-3xl mb-1">
              TELANGANA ANTI-NARCOTICS BUREAU
            </span>
            <span className="text-white text-lg md:text-2xl">
              Building a Drug-Free Telangana
            </span>
          </h1>
          
          <p className="text-sm md:text-base text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Dedicated to Combating Drug Abuse Through Enforcement, Awareness, and Community Empowerment
          </p>

          {/* Feature Icons */}
          <div className="flex justify-center items-center space-x-6 my-3">
            <div className="text-center transform hover:scale-110 transition-transform duration-300">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-full flex items-center justify-center mx-auto mb-1 border border-yellow-400/30">
                <Shield className="w-5 h-5 text-yellow-400" />
              </div>
              <span className="text-xs font-poppins">Protection</span>
            </div>
            <div className="text-center transform hover:scale-110 transition-transform duration-300">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-full flex items-center justify-center mx-auto mb-1 border border-yellow-400/30">
                <Users className="w-5 h-5 text-yellow-400" />
              </div>
              <span className="text-xs font-poppins">Community</span>
            </div>
            <div className="text-center transform hover:scale-110 transition-transform duration-300">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-full flex items-center justify-center mx-auto mb-1 border border-yellow-400/30">
                <Target className="w-5 h-5 text-yellow-400" />
              </div>
              <span className="text-xs font-poppins">Prevention</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 justify-center items-center">
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold font-poppins px-5 py-2 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300 text-sm border-2 border-yellow-400/50"
              onClick={handleExploreWork}
            >
              Explore Our Work
            </Button>
            <Button 
              size="sm" 
              variant="outline" 
              className="border-2 border-white text-blue-300 hover:bg-white hover:text-blue-900 font-bold font-poppins px-5 py-2 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300 text-sm bg-transparent"
              onClick={handleReportCrime}
            >
              Report Drug Crime
            </Button>
          </div>
        </div>
      </div>

      {/* Scrolling News and Announcements Boxes - 25% width */}
      <HeroScrollingBoxes />
    </section>
  );
};

export default HeroSection;
