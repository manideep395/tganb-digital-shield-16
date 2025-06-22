
import { Button } from '@/components/ui/button';
import { Target, Users, Shield, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const InitiativesHighlight = () => {
  const navigate = useNavigate();

  const initiatives = [
    {
      title: 'Mission Parivartana',
      description: 'Comprehensive transformation program for addiction recovery and rehabilitation',
      icon: Target,
      color: 'from-blue-500 to-blue-600',
      href: '/mission-parivartana'
    },
    {
      title: 'Operation Sankalp',
      description: 'Strategic enforcement operations targeting drug trafficking networks',
      icon: Shield,
      color: 'from-red-500 to-red-600',
      href: '/operation-sankalp'
    },
    {
      title: 'Prahari Clubs',
      description: 'Community vigilance groups for grassroots anti-drug awareness',
      icon: Users,
      color: 'from-green-500 to-green-600',
      href: '/prahari-clubs'
    }
  ];

  const handleInitiative = (href: string) => {
    navigate(href);
  };

  return (
    <section className="py-8 bg-gradient-to-br from-blue-50 to-indigo-50 font-poppins">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Key Initiatives
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive programs designed to combat drug abuse through prevention, enforcement, and community engagement
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {initiatives.map((initiative, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${initiative.color} rounded-full flex items-center justify-center mb-4`}>
                <initiative.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {initiative.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                {initiative.description}
              </p>
              <Button
                onClick={() => handleInitiative(initiative.href)}
                className={`w-full bg-gradient-to-r ${initiative.color} hover:opacity-90 text-white font-semibold rounded-full`}
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InitiativesHighlight;
