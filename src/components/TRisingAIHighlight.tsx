
import { Button } from '@/components/ui/button';
import { Brain, Shield, Heart, ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TRisingAIHighlight = () => {
  const navigate = useNavigate();

  const aiSolutions = [
    {
      name: 'Sahay AI',
      description: 'AI-powered counseling and support for individuals struggling with addiction',
      icon: Heart,
      color: 'from-green-500 to-emerald-500',
      href: '/sahay-ai'
    },
    {
      name: 'Shield AI',
      description: 'Advanced risk assessment and early intervention system',
      icon: Shield,
      color: 'from-blue-500 to-indigo-500',
      href: '/shield-ai'
    },
    {
      name: 'Uday AI',
      description: 'Comprehensive recovery planning and rehabilitation assistance',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      href: '/uday-ai'
    }
  ];

  const handleLearnMore = () => {
    navigate('/about-t-rising-ai');
  };

  const handleAISolution = (href: string) => {
    navigate(href);
  };

  return (
    <section className="py-6 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 font-poppins">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center mb-3">
            <Sparkles className="w-6 h-6 text-purple-600 mr-2" />
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              T-RISING.AI
            </h2>
            <Sparkles className="w-6 h-6 text-pink-600 ml-2" />
          </div>
          <p className="text-base text-gray-700 max-w-3xl mx-auto">
            Revolutionary AI-powered solutions transforming drug addiction prevention, intervention, and recovery
          </p>
        </div>

        {/* AI Solutions Grid */}
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {aiSolutions.map((solution, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${solution.color} rounded-full flex items-center justify-center mb-3 mx-auto`}>
                <solution.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 text-center mb-2">
                {solution.name}
              </h3>
              <p className="text-gray-600 text-center mb-3 text-sm">
                {solution.description}
              </p>
              <Button
                onClick={() => handleAISolution(solution.href)}
                className={`w-full bg-gradient-to-r ${solution.color} hover:opacity-90 text-white font-semibold rounded-full py-2 text-sm`}
              >
                Explore {solution.name}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-6 text-white">
          <h3 className="text-xl font-bold mb-3">
            Experience the Future of Drug Prevention
          </h3>
          <p className="text-purple-100 mb-4 max-w-2xl mx-auto text-sm">
            Discover how our AI-powered ecosystem is revolutionizing the fight against drug abuse through cutting-edge technology and compassionate care.
          </p>
          <Button
            onClick={handleLearnMore}
            className="bg-white text-purple-600 hover:bg-gray-100 font-bold px-6 py-2 rounded-full"
          >
            Learn More About T-RISING.AI
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TRisingAIHighlight;
