
import { Eye, Target, Shield, Heart, Globe, Users } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const VisionMission = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <main className="py-12">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-poppins">
              Vision & <span className="text-blue-600">Mission</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our guiding principles that drive every action towards a drug-free Telangana
            </p>
          </div>

          {/* Vision Section */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="flex items-center justify-center mb-8">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                  <Eye className="w-10 h-10 text-white" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 font-poppins">Our Vision</h2>
              <div className="max-w-4xl mx-auto text-center">
                <p className="text-xl md:text-2xl leading-relaxed font-medium">
                  TGNAB envisions a <span className="font-bold text-yellow-300">Drug-free, Healthier and Productive</span> Telangana State 
                  through enhanced coordination of drug trafficking control efforts among Central, State and local agencies.
                </p>
              </div>
              
              {/* Vision Elements */}
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <Heart className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Drug-Free</h3>
                  <p className="text-blue-100">Complete elimination of drug trafficking</p>
                </div>
                <div className="text-center">
                  <Users className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Healthier</h3>
                  <p className="text-blue-100">Promoting wellness and mental health</p>
                </div>
                <div className="text-center">
                  <Globe className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Productive</h3>
                  <p className="text-blue-100">Building a thriving and prosperous state</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mission Section */}
          <div className="mb-16">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-blue-100">
              <div className="flex items-center justify-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                  <Target className="w-10 h-10 text-white" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900 font-poppins">Our Mission</h2>
              <div className="max-w-4xl mx-auto text-center mb-12">
                <p className="text-xl md:text-2xl leading-relaxed text-gray-700">
                  To combat drug trafficking comprehensively, including <span className="font-bold text-green-600">production, transportation, sale, purchase and consumption</span> of narcotics in the state of Telangana, through intelligence, coordination and technology.
                </p>
              </div>

              {/* Mission Pillars */}
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border border-green-200">
                  <Shield className="w-12 h-12 text-green-600 mb-4" />
                  <h3 className="text-xl font-bold text-green-800 mb-3">Intelligence</h3>
                  <p className="text-green-700">Advanced intelligence gathering and analysis to stay ahead of criminal networks</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
                  <Users className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-blue-800 mb-3">Coordination</h3>
                  <p className="text-blue-700">Seamless collaboration between agencies at all levels for maximum impact</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200">
                  <Globe className="w-12 h-12 text-purple-600 mb-4" />
                  <h3 className="text-xl font-bold text-purple-800 mb-3">Technology</h3>
                  <p className="text-purple-700">Leveraging cutting-edge technology for efficient operations and investigations</p>
                </div>
              </div>
            </div>
          </div>

          {/* Motto Section */}
          <div className="bg-gradient-to-r from-gray-900 via-red-900 to-gray-900 text-white rounded-3xl p-8 md:p-12 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-poppins">Our Motto</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-red-400">COURAGE</h3>
                <p className="text-gray-300 leading-relaxed">
                  The bravery to face dangerous criminals and challenging situations with unwavering determination. 
                  Our officers demonstrate courage in every operation, protecting society from the drug menace.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-blue-400">COMMITMENT</h3>
                <p className="text-gray-300 leading-relaxed">
                  Dedicated service to the people of Telangana with integrity and professionalism. 
                  Our commitment drives us to work tirelessly for a safer, drug-free society.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-green-400">COMBAT</h3>
                <p className="text-gray-300 leading-relaxed">
                  Active and strategic fight against drug trafficking networks. 
                  We combat the drug menace through coordinated operations, intelligence, and enforcement.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <p className="text-xl text-yellow-300 font-bold">
                "On these three pillars, the work and mandate of TGNAB are based."
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default VisionMission;
