
import { Shield, Users, Eye, BookOpen } from 'lucide-react';

const AboutTGANB = () => {
  const features = [
    { icon: Shield, title: 'Investigation', description: 'Comprehensive drug crime investigation' },
    { icon: Users, title: 'Awareness', description: 'Public education and outreach programs' },
    { icon: BookOpen, title: 'Coordination', description: 'Multi-agency collaboration efforts' },
    { icon: Eye, title: 'Prevention', description: 'Proactive prevention strategies' }
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-poppins mb-3">
            About TG ANB
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto font-poppins leading-relaxed">
            The Telangana Anti-Narcotics Bureau (TG ANB) works under the Telangana State Police Department to coordinate, investigate, and raise awareness around drug-related crimes. We work closely with educational institutions, NGOs, and the public to build a drug-free society.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="mx-auto w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-3">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-sm font-bold text-gray-900 font-poppins mb-1">{feature.title}</h3>
              <p className="text-xs text-gray-600 font-poppins">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-full font-poppins text-sm font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutTGANB;
