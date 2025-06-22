
import { Users, Shield, Building, Network } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const TGANBStructureSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">TGANB Organizational Structure</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive organizational framework designed for effective narcotics control and enforcement
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Building className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Central Office</h3>
            <p className="text-gray-600 text-center text-sm">
              Headquarters coordinating state-wide anti-narcotics operations
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Network className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Regional Cells</h3>
            <p className="text-gray-600 text-center text-sm">
              Strategic regional units covering all districts of Telangana
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Special Units</h3>
            <p className="text-gray-600 text-center text-sm">
              Specialized teams for intelligence, operations, and enforcement
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Field Teams</h3>
            <p className="text-gray-600 text-center text-sm">
              Ground-level enforcement and community engagement teams
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-800 to-blue-800 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-6">Organizational Excellence</h3>
          <p className="text-xl mb-8 text-gray-200 max-w-4xl mx-auto">
            Our structured approach ensures efficient coordination, rapid response, 
            and comprehensive coverage across all levels of anti-narcotics operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate('/tganb-structure')}
              className="bg-white text-gray-800 hover:bg-gray-100 font-bold px-8 py-3 rounded-full text-lg"
            >
              View Detailed Structure
            </Button>
            <Button 
              onClick={() => navigate('/officers-directory')}
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-800 font-bold px-8 py-3 rounded-full text-lg"
            >
              Officers Directory
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TGANBStructureSection;
