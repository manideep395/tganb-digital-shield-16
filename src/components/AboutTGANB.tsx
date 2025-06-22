
import { Button } from '@/components/ui/button';

const AboutTGANB = () => {
  const features = [
    { icon: "🛡️", title: "Investigation", description: "Thorough investigation of drug-related crimes" },
    { icon: "📢", title: "Awareness", description: "Public education and awareness campaigns" },
    { icon: "🤝", title: "Coordination", description: "Inter-agency coordination and collaboration" },
    { icon: "🎓", title: "Education", description: "Educational programs in institutions" },
    { icon: "🚔", title: "Law Enforcement", description: "Strict enforcement of anti-drug laws" },
    { icon: "👥", title: "Community", description: "Community engagement and support" },
    { icon: "🏫", title: "Institutions", description: "Partnership with educational institutions" },
    { icon: "🌟", title: "Prevention", description: "Prevention programs and initiatives" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">About TG ANB</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The Telangana Anti-Narcotics Bureau (TG ANB) works under the Telangana State Police Department 
                  to coordinate, investigate, and raise awareness around drug-related crimes. We work closely with 
                  educational institutions, NGOs, and the public to build a drug-free society.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300"
                  >
                    <div className="bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition-shadow duration-300">
                      <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                      </div>
                      <h3 className="font-bold text-gray-800 text-sm mb-1">{feature.title}</h3>
                      <p className="text-xs text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button 
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-full px-8"
              >
                Learn More
              </Button>
            </div>

            {/* TG ANB Logo */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                <img 
                  src="/lovable-uploads/cfe052e4-2276-4a1d-b6af-bc0ad7c3ccd4.png" 
                  alt="TG ANB Logo" 
                  className="w-80 h-80 rounded-full shadow-2xl transform hover:scale-105 transition-transform duration-500 relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTGANB;
