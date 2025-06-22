
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const InitiativesSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const initiatives = [
    "Operation Clean State - Comprehensive drug enforcement operations across Telangana",
    "Youth Against Drugs - Empowering young minds to stay drug-free through education",
    "Voices Against Drugs - Community-driven awareness campaigns and public engagement",
    "Drug Seizure Dashboard - Real-time tracking of drug seizures and arrest statistics",
    "Campus Outreach - Educational programs in schools and colleges statewide",
    "Celebrity Campaigns - Star-powered awareness messages for maximum impact"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % initiatives.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-8 bg-gradient-to-r from-blue-600 to-purple-600 font-poppins">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">TG ANB Initiatives</h2>
        </div>

        <div className="relative overflow-hidden bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
          <div className="flex transition-transform duration-1000 ease-in-out"
               style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {initiatives.map((initiative, index) => (
              <div key={index} className="w-full flex-shrink-0 text-center">
                <p className="text-lg md:text-xl text-white font-medium leading-relaxed px-4">
                  {initiative}
                </p>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-4 space-x-2">
            {initiatives.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-yellow-400 w-6' : 'bg-white/50'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InitiativesSlider;
