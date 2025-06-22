
import { Button } from '@/components/ui/button';
import { Award, Shield, Users, UserCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AntiDrugSoldierSection = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: UserCheck,
      title: "Join the Movement",
      description: "Become a certified Anti-Drug Soldier and help create a drug-free society",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Award,
      title: "Certificate Generation",
      description: "Receive official certification for your contribution to the anti-narcotics mission",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Shield,
      title: "Community Protection",
      description: "Play an active role in protecting your community from drug-related activities",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Users,
      title: "Network Building",
      description: "Connect with like-minded individuals committed to the anti-drug cause",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Anti-Drug Soldier Program</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of citizens in the fight against drugs and become a certified Anti-Drug Soldier
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mb-4 mx-auto`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{feature.title}</h3>
              <p className="text-gray-600 text-center text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            onClick={() => navigate('/anti-drug-soldier-enrollment')}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-bold px-8 py-4 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all"
          >
            Enroll as Anti-Drug Soldier
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AntiDrugSoldierSection;
