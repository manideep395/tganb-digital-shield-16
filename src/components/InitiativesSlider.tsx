
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const InitiativesSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const initiatives = [
    {
      title: "Operation Clean State",
      description: "Comprehensive drug enforcement operations across Telangana",
      icon: "🚔",
      color: "from-red-500 to-red-600"
    },
    {
      title: "Youth Against Drugs",
      description: "Empowering young minds to stay drug-free",
      icon: "🎓",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Voices Against Drugs",
      description: "Community-driven awareness campaigns",
      icon: "📢",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Drug Seizure Dashboard",
      description: "Real-time tracking of drug seizures and arrests",
      icon: "📊",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Campus Outreach",
      description: "Educational programs in schools and colleges",
      icon: "🏫",
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Celebrity Campaigns",
      description: "Star-powered awareness messages",
      icon: "⭐",
      color: "from-pink-500 to-pink-600"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(initiatives.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(initiatives.length / 3)) % Math.ceil(initiatives.length / 3));
  };

  return (
    <section className="py-20 bg-gradient-to-r from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">TG ANB Initiatives</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive programs designed to combat drug abuse and build a safer Telangana
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(initiatives.length / 3) }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-3 gap-8 px-4">
                    {initiatives.slice(slideIndex * 3, (slideIndex + 1) * 3).map((initiative, index) => (
                      <div
                        key={index}
                        className="group cursor-pointer transform hover:scale-105 transition-all duration-300"
                      >
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                          <div className={`h-4 bg-gradient-to-r ${initiative.color}`}></div>
                          <div className="p-8 text-center">
                            <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                              {initiative.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">
                              {initiative.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                              {initiative.description}
                            </p>
                            <Button 
                              className="mt-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-full px-6"
                              size="sm"
                            >
                              Learn More
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white shadow-lg hover:shadow-xl rounded-full"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white shadow-lg hover:shadow-xl rounded-full"
            onClick={nextSlide}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(initiatives.length / 3) }).map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-blue-600 w-8' : 'bg-gray-300'
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
