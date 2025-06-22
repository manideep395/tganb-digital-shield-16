
import { Button } from '@/components/ui/button';
import { Shield, Users, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleExploreWork = () => {
    navigate('/news');
  };

  const handleReportCrime = () => {
    navigate('/drug-report-submission');
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 font-poppins">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-yellow-400/30 to-transparent rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-blue-400/30 to-transparent rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-lg animate-pulse delay-500"></div>
      </div>

      {/* 3D Animated Borders */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-4 left-4 w-32 h-32 border-4 border-yellow-400/30 rounded-full animate-spin"></div>
        <div className="absolute top-20 right-20 w-24 h-24 border-2 border-blue-400/40 rounded-lg animate-bounce"></div>
        <div className="absolute bottom-16 left-16 w-20 h-20 border-3 border-white/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-16 h-16 border-2 border-yellow-300/30 rotate-45 animate-spin"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/3 left-1/3 w-12 h-12 bg-gradient-to-r from-yellow-400/20 to-blue-400/20 rounded-lg animate-pulse transform rotate-12"></div>
        <div className="absolute top-2/3 right-1/3 w-8 h-8 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full animate-bounce delay-300"></div>
      </div>

      <div className="container mx-auto px-4 text-center text-white relative z-10">
        {/* Three Logos Row */}
        <div className="flex justify-center items-center space-x-12 mb-8 animate-fade-in">
          {/* Telangana Emblem - Left */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 to-yellow-600/30 rounded-full blur-md animate-pulse"></div>
            <img 
              src="/lovable-uploads/37f408d2-9357-4e1c-af91-05f171f00af2.png" 
              alt="Telangana Emblem" 
              className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-yellow-400 shadow-lg relative z-10"
            />
          </div>
          
          {/* TGANB Logo - Center (Main) */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full blur-lg animate-pulse"></div>
            <div className="absolute -inset-2 border-2 border-yellow-400/50 rounded-full animate-spin"></div>
            <img 
              src="/lovable-uploads/cfe052e4-2276-4a1d-b6af-bc0ad7c3ccd4.png" 
              alt="TG ANB Logo" 
              className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-yellow-400 shadow-2xl relative z-10 hover:scale-110 transition-transform duration-300"
            />
          </div>
          
          {/* Telangana Police Logo - Right */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-blue-600/30 rounded-full blur-md animate-pulse delay-500"></div>
            <img 
              src="/lovable-uploads/db384303-58f4-497a-9043-3cb10d049cee.png" 
              alt="Telangana Police Logo" 
              className="w-16 h-16 md:w-20 md:h-20 shadow-lg relative z-10"
            />
          </div>
        </div>

        {/* Hero Content */}
        <div className="max-w-4xl mx-auto space-y-4 animate-fade-in">
          <h1 className="text-2xl md:text-4xl font-bold font-poppins leading-tight">
            <span className="block text-yellow-400 text-lg md:text-2xl mb-2">
              TELANGANA ANTI-NARCOTICS BUREAU
            </span>
            <span className="text-white text-xl md:text-3xl">
              Building a Drug-Free Telangana
            </span>
          </h1>
          
          <p className="text-sm md:text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Dedicated to Combating Drug Abuse Through Enforcement, Awareness, and Community Empowerment
          </p>

          {/* Feature Icons */}
          <div className="flex justify-center items-center space-x-8 my-6">
            <div className="text-center transform hover:scale-110 transition-transform duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-full flex items-center justify-center mx-auto mb-2 border border-yellow-400/30">
                <Shield className="w-6 h-6 text-yellow-400" />
              </div>
              <span className="text-xs font-poppins">Protection</span>
            </div>
            <div className="text-center transform hover:scale-110 transition-transform duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-full flex items-center justify-center mx-auto mb-2 border border-yellow-400/30">
                <Users className="w-6 h-6 text-yellow-400" />
              </div>
              <span className="text-xs font-poppins">Community</span>
            </div>
            <div className="text-center transform hover:scale-110 transition-transform duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-full flex items-center justify-center mx-auto mb-2 border border-yellow-400/30">
                <Target className="w-6 h-6 text-yellow-400" />
              </div>
              <span className="text-xs font-poppins">Prevention</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold font-poppins px-6 py-3 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300 text-sm border-2 border-yellow-400/50"
              onClick={handleExploreWork}
            >
              Explore Our Work
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-blue-300 hover:bg-white hover:text-blue-900 font-bold font-poppins px-6 py-3 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300 text-sm bg-transparent"
              onClick={handleReportCrime}
            >
              Report Drug Crime
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
