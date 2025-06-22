
import { Shield, Target, Users, Award, Eye, BookOpen } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutTGANB = () => {
  const features = [
    { icon: Shield, title: 'Combat Drug Trafficking', description: 'Comprehensive approach to combat cultivation, production, transportation, and smuggling' },
    { icon: Target, title: 'Intelligence Operations', description: 'Grass root level intelligence leading to detection and disruption of organized groups' },
    { icon: Users, title: 'Coordination', description: 'Coordinating with Commissioners and Superintendents across all districts' },
    { icon: Award, title: 'Legal Authority', description: 'Powers of Police Station under Criminal Procedure Code, 1973' },
    { icon: Eye, title: 'Investigation', description: 'Register, investigate and prosecute cases related to drug trafficking' },
    { icon: BookOpen, title: 'Guidelines Compliance', description: 'Following MHA, NCB, and Government of Telangana guidelines' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <main className="py-12">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-poppins">
              About <span className="text-blue-600">TG ANB</span>
            </h1>
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-3xl shadow-2xl">
                <h2 className="text-2xl font-bold mb-4 font-poppins">Our Foundation</h2>
                <p className="text-lg leading-relaxed">
                  <span className="font-bold text-yellow-300">Passion, commitment, and a lot of hard work.</span> 
                  {" "}These are the pillars upon which the Telangana State Anti-Narcotics Bureau stands, 
                  dedicated to creating a drug-free Telangana through unwavering determination and strategic action.
                </p>
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="mb-16">
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-blue-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center font-poppins">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
                The mission of the TS Anti-Narcotics Bureau is to combat drug trafficking comprehensively, 
                including <span className="font-bold text-blue-600">cultivation, production, transportation, smuggling, sale, purchase, possession, or consumption</span> of narcotic drugs and psychotropic substances in the state of Telangana.
              </p>
            </div>
          </div>

          {/* Key Features Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center font-poppins">Our Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-50">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center font-poppins">{feature.title}</h3>
                  <p className="text-gray-600 text-center">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Authority & Powers */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-gray-900 to-blue-900 text-white rounded-3xl p-8 shadow-2xl">
              <h2 className="text-3xl font-bold mb-6 text-center font-poppins">Legal Authority & Powers</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-yellow-400">Secretariat Function</h3>
                  <p className="leading-relaxed">
                    The Telangana State Anti-Narcotics Bureau (TSNAB) serves as a 'Secretariat' for the state Anti-Narcotics Task force, 
                    exercising the powers of a Police Station within the meaning of section 2(s) of the Code of Criminal Procedure, 1973.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-yellow-400">Investigation Powers</h3>
                  <p className="leading-relaxed">
                    TSNAB has comprehensive powers to register, investigate and prosecute cases related to drug trafficking. 
                    It can also take up investigations from other units on the instructions of the Director General of Police, Telangana State.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Motto Section */}
          <div className="mb-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 font-poppins">Our Motto</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-red-600 mb-3">COURAGE</h3>
                  <p className="text-gray-700">Facing challenges with unwavering bravery</p>
                </div>
                <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-blue-600 mb-3">COMMITMENT</h3>
                  <p className="text-gray-700">Dedicated service to the people of Telangana</p>
                </div>
                <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-green-600 mb-3">COMBAT</h3>
                  <p className="text-gray-700">Active fight against drug trafficking</p>
                </div>
              </div>
            </div>
          </div>

          {/* Coordination & Network */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-blue-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center font-poppins">Our Network & Coordination</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Since its inception, TSNAB has generated grass root level intelligence, leading to the detection and disruption of organized drug trafficking groups. 
              It has been coordinating with Commissioners/Superintendents of Police of all the Commissionerate/Districts, including other stakeholders in the state.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              As Telangana's nodal point with national bureaus including <span className="font-bold text-blue-600">NCB, CNB, IB, Customs</span>, 
              TSNAB works to overcome future challenges in tackling the drug menace, following guidelines of the Ministry of Home Affairs (MHA), 
              the Narcotics Control Bureau (NCB), and the Government of Telangana.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutTGANB;
