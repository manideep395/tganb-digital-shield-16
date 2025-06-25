
import { Shield, Target, Users, Award } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const DirectorsNote = () => {
  const achievements = [
    { icon: Shield, title: 'Combat Operations', description: 'Leading comprehensive anti-drug operations across Telangana' },
    { icon: Target, title: 'Intelligence Network', description: 'Building grass-root level intelligence systems' },
    { icon: Users, title: 'Coordination', description: 'Seamless collaboration with all stakeholders' },
    { icon: Award, title: 'Legal Authority', description: 'Exercising full police powers under CrPC 1973' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <main className="py-12">
        <div className="container mx-auto px-4">
          {/* Hero Section with Director Info */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-green-800 to-blue-900 text-white rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <img 
                    src="/uploads/image.png" 
                    alt="Sri. Sandeep Shandilya IPS" 
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-yellow-400 object-cover shadow-2xl"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h1 className="text-3xl md:text-5xl font-bold mb-4 font-poppins">Sri. Sandeep Shandilya IPS</h1>
                  <p className="text-xl md:text-2xl text-yellow-300 font-semibold mb-2">Director, TG ANB</p>
                  <p className="text-lg text-blue-200">Telangana Anti-Narcotics Bureau</p>
                </div>
              </div>
            </div>
          </div>

          {/* Director's Message */}
          <div className="mb-16">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-blue-100">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center font-poppins">Director's Message</h2>
              
              <div className="prose prose-lg max-w-none">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-8 border border-blue-200">
                  <h3 className="text-2xl font-bold text-blue-800 mb-4">Our Mission</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    The mission of TG Anti Narcotics Bureau is to combat Drug trafficking comprehensively including 
                    <span className="font-bold text-blue-600"> cultivation, production, transportation, smuggling, sale, purchase, possession or consumption</span> of narcotic drugs and psychotropic substances in the state of Telangana.
                  </p>
                </div>

                <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                  <p>
                    The Telangana State Anti-Narcotics Bureau (TGNAB) serves as a 'Secretariat' for the state Anti-Narcotics Task force. 
                    It shall exercise powers of a Police Station within the meaning of section 2 (s) of the code of Criminal Procedure, 1973 
                    including powers to register, investigate and prosecute cases related to drug trafficking.
                  </p>

                  <p>
                    TGANB can also take up investigation of narcotic drugs and medical drugs cases from other units on the instructions 
                    of Director General of Police, Telangana State.
                  </p>

                  <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 border border-red-200">
                    <h3 className="text-2xl font-bold text-red-700 mb-4">Our Foundation: Courage - Commitment - Combat</h3>
                    <p>
                      TGANB is coping with the challenges posed by drug offenders despite its limited manpower as part of the TGNAB motto 
                      <span className="font-bold text-red-600"> 'Courage-Commitment-Combat'</span>. On these three pillars, the work and mandate of TGNAB is based.
                    </p>
                  </div>

                  <p>
                    Since its inception, TGNAB has generated grass root level intelligence, leading to detection and disruption of organized drug trafficking groups. 
                    It has also been coordinating with Commissioners/Superintendents of Police of all the Commissionerate/Districts including other stakeholders in the state.
                  </p>

                  <p>
                    As Telangana's nodal point with national bureaus viz. <span className="font-bold text-blue-600">NCB, CNB, IB, customs etc.</span> 
                    we work to overcome the challenges which are ahead in future to tackle with this drug menace.
                  </p>

                  <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-8 border border-green-200">
                    <h3 className="text-2xl font-bold text-green-700 mb-4">Our Commitment to Excellence</h3>
                    <p>
                      TGNAB has been following the guidelines of Ministry of Home Affairs (MHA), Narcotics Control Bureau (NCB) 
                      and Government of Telangana for the neutralization of narcotics in the state, besides anticipating changes 
                      in criminal strategies and tactics.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Focus Areas */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center font-poppins">Our Key Focus Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((item, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-50">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center font-poppins">{item.title}</h3>
                  <p className="text-gray-600 text-center">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">Join Our Mission</h2>
              <p className="text-xl md:text-2xl text-blue-200 mb-8 max-w-4xl mx-auto leading-relaxed">
                Together, we can build a drug-free Telangana where every citizen can realize their full potential 
                without the shadow of substance abuse threatening our communities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold px-8 py-3 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300">
                  Report Drug Crime
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold px-8 py-3 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DirectorsNote;
