
import { Target, Users, Shield, Smartphone, Heart, CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MissionParivartana = () => {
  const pillars = [
    {
      title: "Awareness and Education",
      description: "Mission Parivartana conducts continuous awareness campaigns in schools, colleges, and public spaces to educate citizens, especially the youth, about the dangers of drug abuse and its social consequences.",
      icon: Target,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Community and Student Involvement",
      description: "The initiative empowers students, NSS/NCC volunteers, and local youth to become Anti-Drug Ambassadors, spreading awareness through cultural events, competitions, street plays, and digital media.",
      icon: Users,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Reporting and Enforcement Support",
      description: "Citizens are encouraged to report suspicious activities anonymously. Information is directed to the Narcotics Bureau for prompt action, ensuring community-led vigilance.",
      icon: Shield,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Rehabilitation and Reintegration",
      description: "Mission Parivartana also provides guidance and resources for individuals battling addiction by connecting them with certified rehabilitation centers, support groups, and medical professionals.",
      icon: Heart,
      color: "from-pink-500 to-pink-600"
    },
    {
      title: "Technology-Driven Monitoring",
      description: "Advanced analytics, cyber surveillance, and mobile-based outreach tools are used to identify drug hotspots, track illicit networks, and raise digital awareness.",
      icon: Smartphone,
      color: "from-orange-500 to-orange-600"
    }
  ];

  const collaborators = [
    "Educational Institutions",
    "NGOs and Civil Society",
    "Police and Law Enforcement Agencies",
    "Media and Digital Influencers",
    "Healthcare and Rehabilitation Providers"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <main className="py-12">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-poppins">
              Mission <span className="text-blue-600">Parivartana</span>
            </h1>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto mb-4">
              Towards a Drug-Free Telangana
            </p>
          </div>

          {/* Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-3xl p-8 shadow-2xl">
              <div className="text-center">
                <Target className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
                <h2 className="text-3xl font-bold mb-6 font-poppins">🧭 Vision</h2>
                <p className="text-lg leading-relaxed">
                  To build a drug-free, safe, and healthy society by empowering youth, educating communities, 
                  and enforcing proactive action against narcotics across Telangana through collective effort 
                  and responsible citizen participation.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-blue-100">
              <div className="text-center">
                <Shield className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-gray-900 mb-6 font-poppins">🎯 Mission</h2>
                <ul className="text-left space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    To eradicate drug abuse and trafficking through widespread awareness, preventive education, and strong legal enforcement.
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    To transform public mindset by engaging youth and communities in the fight against drugs.
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    To rehabilitate and reintegrate affected individuals into society with compassion and care.
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    To leverage technology and partnerships to strengthen anti-drug efforts across urban and rural areas.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="mb-16">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-blue-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center font-poppins">🔍 About the Initiative</h2>
              <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
                Mission Parivartana is a flagship anti-drug awareness and action campaign launched by the 
                Telangana State Anti-Narcotics Bureau (TG ANB). It embodies the spirit of transformation — 
                a shift from ignorance to awareness, from silence to action, and from risk to safety. 
                The mission aims to bring together government agencies, educational institutions, civil society, 
                and youth to create a united front against the menace of drugs.
              </p>
            </div>
          </div>

          {/* Core Pillars */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center font-poppins">🛡️ Core Pillars of the Mission</h2>
            <div className="space-y-6">
              {pillars.map((pillar, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-blue-100">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${pillar.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                      <pillar.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 font-poppins">✅ {pillar.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Collaboration */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="text-center">
                <Users className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">🤝 Collaboration for Impact</h2>
                <p className="text-xl text-green-200 mb-8">
                  Mission Parivartana thrives on partnerships. It collaborates with:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {collaborators.map((collaborator, index) => (
                    <div key={index} className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                      <p className="text-white font-medium">{collaborator}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="text-center">
              <Heart className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">📢 Join the Movement</h2>
              <p className="text-xl text-blue-200 mb-8 max-w-4xl mx-auto leading-relaxed">
                Whether you are a student, teacher, parent, professional, or social worker — you have a role to play. 
                Join Mission Parivartana and be the voice of change. Let's come together to build a future free from drugs and full of possibilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold px-8 py-3 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300">
                  Become an Ambassador
                </button>
                <a href="tel:8712671111" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold px-8 py-3 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300">
                  Report: 8712671111
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MissionParivartana;
