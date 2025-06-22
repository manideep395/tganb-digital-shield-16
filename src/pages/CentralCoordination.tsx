
import { Shield, Users, Share2, FileSearch, Database, Zap } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CentralCoordination = () => {
  const centralAgencies = [
    {
      name: "NCB",
      fullName: "Narcotics Control Bureau",
      icon: Shield,
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "DRI",
      fullName: "Directorate of Revenue Intelligence",
      icon: FileSearch,
      color: "from-green-500 to-green-600"
    },
    {
      name: "IB",
      fullName: "Intelligence Bureau",
      icon: Database,
      color: "from-purple-500 to-purple-600"
    },
    {
      name: "FRRO",
      fullName: "Foreigners Regional Registration Office",
      icon: Users,
      color: "from-orange-500 to-orange-600"
    },
    {
      name: "ED",
      fullName: "Enforcement Directorate",
      icon: Zap,
      color: "from-red-500 to-red-600"
    },
    {
      name: "Customs",
      fullName: "Customs Department",
      icon: Share2,
      color: "from-teal-500 to-teal-600"
    }
  ];

  const coordinationActivities = [
    {
      title: "Joint Operations",
      description: "Joint operations in co-ordination with central and state agencies.",
      icon: Users,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Data Sharing",
      description: "Sharing of data on old cases and habitual offenders between central and state agencies and following 'controlled delivery' technique to arrest the receiver.",
      icon: Database,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Information Exchange",
      description: "Exchange of information about the emerging trends in the drug trafficking.",
      icon: Share2,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Forensic Access",
      description: "Access to the Interrogation Reports and Forensic data of the mobile phones etc.",
      icon: FileSearch,
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Technological Support",
      description: "Technological support from NCB for setting up of forensic and technical Ex: Software, tools, gadgets, scanners, rapid drug testing kits, etc.",
      icon: Zap,
      color: "from-red-500 to-red-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <main className="py-12">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-poppins">
              Central <span className="text-blue-600">Coordination</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strengthening anti-narcotics efforts through strategic partnerships with central agencies
            </p>
          </div>

          {/* Central Agencies Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center font-poppins">Central Agencies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {centralAgencies.map((agency, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-50">
                  <div className={`w-16 h-16 bg-gradient-to-br ${agency.color} rounded-full flex items-center justify-center mb-6 mx-auto`}>
                    <agency.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 text-center font-poppins">{agency.name}</h3>
                  <p className="text-gray-600 text-center text-sm">{agency.fullName}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Coordination Activities */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center font-poppins">Coordination Activities</h2>
            <div className="space-y-6">
              {coordinationActivities.map((activity, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-blue-100">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${activity.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                      <activity.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 font-poppins">{activity.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{activity.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="text-center">
              <Shield className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">United Against Drugs</h2>
              <p className="text-xl text-blue-200 mb-8 max-w-4xl mx-auto leading-relaxed">
                Through coordinated efforts with central agencies, we strengthen our fight against drug trafficking 
                and ensure effective law enforcement across all levels of government.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CentralCoordination;
