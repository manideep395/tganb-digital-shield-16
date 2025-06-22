
import { Button } from '@/components/ui/button';
import { ArrowDown, Shield, Users, Target } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-yellow-400/30 to-transparent rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-blue-400/30 to-transparent rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-lg animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 text-center text-white relative z-10">
        {/* Hero Content */}
        <div className="max-w-5xl mx-auto space-y-4 animate-fade-in">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full blur-lg animate-pulse"></div>
              <Shield className="w-16 h-16 text-yellow-400 relative z-10 animate-bounce" />
            </div>
          </div>
          
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold font-poppins leading-tight mb-3">
            <span className="block text-yellow-400 text-lg md:text-2xl animate-pulse mb-2">
              TELANGANA ANTI-NARCOTICS BUREAU
            </span>
            <span className="text-white text-xl md:text-3xl lg:text-4xl">
              Building a Drug-Free Telangana
            </span>
          </h1>
          
          <p className="text-sm md:text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed mb-6">
            Dedicated to Combating Drug Abuse Through Enforcement, Awareness, and Community Empowerment
          </p>

          {/* Feature Icons */}
          <div className="flex justify-center items-center space-x-8 mb-8">
            <div className="text-center transform hover:scale-110 transition-transform duration-300">
              <Shield className="w-8 h-8 text-yellow-400 mx-auto mb-1" />
              <span className="text-xs font-poppins">Protection</span>
            </div>
            <div className="text-center transform hover:scale-110 transition-transform duration-300">
              <Users className="w-8 h-8 text-yellow-400 mx-auto mb-1" />
              <span className="text-xs font-poppins">Community</span>
            </div>
            <div className="text-center transform hover:scale-110 transition-transform duration-300">
              <Target className="w-8 h-8 text-yellow-400 mx-auto mb-1" />
              <span className="text-xs font-poppins">Prevention</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold font-poppins px-6 py-3 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300 text-sm"
            >
              Explore Our Work
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold font-poppins px-6 py-3 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300 text-sm"
            >
              Report Drug Crime
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-white/70" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
