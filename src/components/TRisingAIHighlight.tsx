
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
    navigate('/about-rising-ai');
  };

  const handleAISolution = (href: string) => {
    navigate(href);
  };

  return (
    <section className="py-8 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 font-poppins">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-8 h-8 text-purple-600 mr-2" />
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              T-RISING.AI
            </h2>
            <Sparkles className="w-8 h-8 text-pink-600 ml-2" />
          </div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Revolutionary AI-powered solutions transforming drug addiction prevention, intervention, and recovery
          </p>
        </div>

        {/* AI Solutions Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {aiSolutions.map((solution, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-full flex items-center justify-center mb-4 mx-auto`}>
                <solution.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 text-center mb-3">
                {solution.name}
              </h3>
              <p className="text-gray-600 text-center mb-4 text-sm">
                {solution.description}
              </p>
              <Button
                onClick={() => handleAISolution(solution.href)}
                className={`w-full bg-gradient-to-r ${solution.color} hover:opacity-90 text-white font-semibold rounded-full`}
              >
                Explore {solution.name}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">
            Experience the Future of Drug Prevention
          </h3>
          <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
            Discover how our AI-powered ecosystem is revolutionizing the fight against drug abuse through cutting-edge technology and compassionate care.
          </p>
          <Button
            onClick={handleLearnMore}
            className="bg-white text-purple-600 hover:bg-gray-100 font-bold px-8 py-3 rounded-full text-lg"
          >
            Learn More About T-RISING.AI
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TRisingAIHighlight;
