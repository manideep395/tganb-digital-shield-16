
import { MapPin, Phone, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const StationsInfoSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-teal-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Narcotics Control Network</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive coverage across Telangana with specialized narcotics police stations and regional control cells
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Narcotic Police Stations</h3>
            <p className="text-gray-600 text-center mb-6">
              Specialized police stations dedicated to narcotics enforcement across major cities and districts
            </p>
            <div className="text-center">
              <Button 
                onClick={() => navigate('/narcotic-police-stations')}
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 font-bold px-6 py-3 rounded-full"
              >
                View Locations
              </Button>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Regional Control Cells</h3>
            <p className="text-gray-600 text-center mb-6">
              Regional coordination centers ensuring comprehensive coverage and rapid response capabilities
            </p>
            <div className="text-center">
              <Button 
                onClick={() => navigate('/regional-narcotic-police-stations')}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 font-bold px-6 py-3 rounded-full"
              >
                Explore Network
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-800 to-blue-800 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2">Emergency</h4>
              <p className="text-2xl font-bold text-red-300">1908</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2">Stations</h4>
              <p className="text-2xl font-bold text-blue-300">15+</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2">Coverage</h4>
              <p className="text-2xl font-bold text-green-300">100%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StationsInfoSection;
