
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

  const handleAntiDrugEnrollment = () => {
    navigate('/anti-drug-soldier-enrollment');
  };

  return (
    <section className="relative flex flex-col lg:flex-row overflow-hidden bg-gradient-to-br from-green-400 via-darkslategrey-900 to-blue-700 font-poppins py-4 md:py-6 min-h-[450px] md:min-h-[500px]">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-black-400/30 to-transparent rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-blue-400/30 to-transparent rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-lg animate-pulse delay-500"></div>
      </div>

      {/* Tiger Mascot and Enrollment Section - Consistent 25% width */}
      <div className="w-full lg:w-1/4 flex flex-col items-center justify-start p-2 md:p-4 relative z-10 order-2 lg:order-1">
        <div 
          className="cursor-pointer hover:scale-105 transition-transform duration-300 mb-3 -mt-2 lg:-mt-8"
          onClick={handleAntiDrugEnrollment}
        >
          <img 
            src="/uploads/550efe74-a996-423b-a425-8a3656a2e477.png" 
            alt="Anti-Drug Tiger Mascot" 
            className="w-32 md:w-48 lg:w-56 xl:w-64 h-auto drop-shadow-2xl transform scale-90 md:scale-100"
          />
        </div>
        <Button 
          onClick={handleAntiDrugEnrollment}
          className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold px-3 md:px-6 py-2 md:py-3 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300 text-xs md:text-sm w-full max-w-xs"
        >
          Enroll as Anti-Drug Soldier
        </Button>
      </div>

      {/* Main Hero Content - Consistent 50% width */}
      <div className="w-full lg:w-1/2 flex items-center justify-center text-white relative z-10 p-4 order-1 lg:order-2">
        <div className="max-w-3xl mx-auto space-y-2 md:space-y-4 animate-fade-in text-center">
          {/* Three Logos Row */}
          <div className="flex justify-center items-center space-x-3 md:space-x-6 mb-3 md:mb-6">
            {/* Telangana Emblem - Left */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 to-black-600/30 rounded-full blur-md animate-pulse"></div>
              <img 
                src="/uploads/37f408d2-9357-4e1c-af91-05f171f00af2.png" 
                alt="Telangana Emblem" 
                className="w-8 h-8 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full border-2 border-yellow-400 shadow-lg relative z-10"
              />
            </div>
            
            {/* TGANB Logo - Center (Main) */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-black-400 to-black-600 rounded-full blur-lg animate-pulse"></div>
              <div className="absolute -inset-2 border-2 border-black-900/50 rounded-full animate-spin"></div>
              <img 
                src="/uploads/cfe052e4-2276-4a1d-b6af-bc0ad7c3ccd4.png" 
                alt="TG ANB Logo" 
                className="w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full border-4 border-black-400 shadow-2xl relative z-10 hover:scale-110 transition-transform duration-300"
              />
            </div>
            
            {/* Telangana Police Logo - Right */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-blue-600/30 rounded-full blur-md animate-pulse delay-500"></div>
              <img 
                src="/uploads/db384303-58f4-497a-9043-3cb10d049cee.png" 
                alt="Telangana Police Logo" 
                className="w-8 h-8 md:w-12 md:h-12 lg:w-14 lg:h-14 shadow-lg relative z-10"
              />
            </div>
          </div>

          {/* Hero Content - Centered */}
          <div className="flex flex-col items-center text-center px-2">
            <h1 className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold font-poppins leading-tight mb-2 md:mb-4">
              <span className="block text-black text-base md:text-xl lg:text-2xl xl:text-3xl mb-2">
                TELANGANA ANTI-NARCOTICS BUREAU
              </span>
              <span className="text-white text-sm md:text-lg lg:text-xl xl:text-2xl">
                Building a Drug-Free Telangana
              </span>
            </h1>
            
            <p className="text-xs md:text-sm lg:text-base xl:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed px-2 mb-4 md:mb-6">
              Dedicated to Combating Drug Abuse Through Enforcement, Awareness, and Community Empowerment
            </p>

            {/* Feature Icons - Centered */}
            <div className="flex justify-center items-center space-x-4 md:space-x-8 my-3 md:my-4">
              <div className="text-center transform hover:scale-110 transition-transform duration-300">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-full flex items-center justify-center mx-auto mb-1 border border-yellow-400/30">
                  <Shield className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" />
                </div>
                <span className="text-xs md:text-sm font-poppins">Protection</span>
              </div>
              <div className="text-center transform hover:scale-110 transition-transform duration-300">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-full flex items-center justify-center mx-auto mb-1 border border-yellow-400/30">
                  <Users className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" />
                </div>
                <span className="text-xs md:text-sm font-poppins">Community</span>
              </div>
              <div className="text-center transform hover:scale-110 transition-transform duration-300">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-full flex items-center justify-center mx-auto mb-1 border border-yellow-400/30">
                  <Target className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" />
                </div>
                <span className="text-xs md:text-sm font-poppins">Prevention</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-2">
              <Button 
                size="default" 
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold font-poppins px-4 md:px-6 py-2 md:py-3 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300 text-sm md:text-base border-2 border-yellow-400/50 w-full sm:w-auto"
                onClick={handleExploreWork}
              >
                Explore Our Work
              </Button>
              <Button 
                size="default" 
                variant="outline" 
                className="border-2 border-white text-blue-300 hover:bg-white hover:text-blue-900 font-bold font-poppins px-4 md:px-6 py-2 md:py-3 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300 text-sm md:text-base bg-transparent w-full sm:w-auto"
                onClick={handleReportCrime}
              >
                Report Drug Crime
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling News and Announcements Boxes - Consistent 25% width across all devices */}
      <div className="w-full lg:w-1/4 order-3">
        <HeroScrollingBoxes />
      </div>
    </section>
  );
};

export default HeroSection;
