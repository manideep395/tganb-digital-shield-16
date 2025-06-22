
import { Heart, MapPin, Phone, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const RehabilitationSection = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Heart,
      title: "Comprehensive Care",
      description: "Medical, psychological, and social rehabilitation services"
    },
    {
      icon: Users,
      title: "Expert Staff",
      description: "Qualified doctors, counselors, and support staff"
    },
    {
      icon: MapPin,
      title: "Accessible Locations",
      description: "Rehabilitation centers across Telangana districts"
    },
    {
      icon: Phone,
      title: "24/7 Support",
      description: "Round-the-clock assistance and emergency care"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Rehabilitation Centers</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive rehabilitation and recovery support for individuals and families affected by substance abuse
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{feature.title}</h3>
              <p className="text-gray-600 text-center text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">Need Help or Support?</h3>
            <p className="text-xl mb-8 text-purple-100">
              Our rehabilitation centers provide comprehensive care and support for recovery. 
              Take the first step towards a drug-free life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => navigate('/rehabilitation-centers')}
                className="bg-white text-purple-600 hover:bg-gray-100 font-bold px-8 py-3 rounded-full text-lg border-0"
              >
                Find Rehabilitation Centers
              </Button>
              <Button 
                onClick={() => window.location.href = 'tel:1908'}
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 font-bold px-8 py-3 rounded-full text-lg"
              >
                Emergency Support: 1908
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RehabilitationSection;
