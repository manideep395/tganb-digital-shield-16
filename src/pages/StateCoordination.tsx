
import { Building, TreePine, Sprout, Wine, GraduationCap, Users, ShieldCheck, Heart } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const StateCoordination = () => {
  const departments = [
    {
      title: "Dept. of Social Welfare, TS, Hyderabad",
      description: "Coordinating in the matter of drug-related issues and providing aid to the drug addicts with the support of Rehabilitation centers, maintenance of Detention centers, etc.",
      icon: Heart,
      color: "from-pink-500 to-pink-600"
    },
    {
      title: "Dept. of Forest, TS, Hyderabad",
      description: "Establishing mechanisms for sharing information and intelligence related to illegal drug cultivation or trafficking. Engage with local communities residing near or within forest areas. Assess the environmental impact of illegal drug cultivation in forested regions. This involves evaluating damage to flora and fauna, soil degradation, and water pollution. Focus on remote and inaccessible forest lands that are used for Ganja/ Poppy cultivation. Identifying the persons involved in the Ganja/Poppy cultivation.",
      icon: TreePine,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Dept. of Agriculture",
      description: "Collaboration on monitoring and assessing crop cultivation patterns within agricultural areas. Usage of satellite imagery, aerial surveys, and ground patrols to identify and monitor illegal drug cultivation sites Technical assistance through expertise in crop identification, soil analysis, and agricultural practices Identifying the lands used for Ganja / Poppy cultivation.",
      icon: Sprout,
      color: "from-amber-500 to-amber-600"
    },
    {
      title: "Dept. of State Excise",
      description: "In coordination, creating the awareness among the people of Telangana on the evil effects of consumption of alcoholic products and also distillation of liquor and also encourage the establishment of Drug De-addiction centers. Utilize the expertise of the excise department to audit and assess the tax compliance of businesses dealing in controlled substances. Real-time coordination between Police and State Excise during raids Information exchange about the drug peddlers.",
      icon: Wine,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Dept. of Education",
      description: "Working together to establish support services within schools, such as counselling and rehabilitation programs, to assist students who are struggling with narcotic substance abuse issues. Formation of Anti–Drug Committees similar to Anti-Ragging committees in educational institutions and conducting orientation programs, counselling sessions, awareness programs, educating about the ill effects of drugs and encouraging peer policing among students against drug usage.",
      icon: GraduationCap,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "All Police units & District Collectors in the State of Telangana",
      description: "State Level & District Level NCORD committee meetings are being conducted under the chairmanship of Chief Secretary to Government and District Collectors, respectively, with the stakeholders concerned on a quarterly basis and the minutes of the meetings are uploaded to the NCORD portal designed by the NCB regularly.",
      icon: ShieldCheck,
      color: "from-red-500 to-red-600"
    },
    {
      title: "Drug Control Administration",
      description: "Enforcing the Pharmacy Act 1948 licensing conditions strictly. Vigilance on the pharmacists. Controlling the easy availability of restricted drugs. Prevention of giving drugs over the medical shop counters without a prescription. Preventing the indiscriminate sale and misuse of sedative drugs. To conduct joint raids by drug inspectors and police.",
      icon: Building,
      color: "from-teal-500 to-teal-600"
    },
    {
      title: "State Health and Family Welfare Department, TS, Hyderabad",
      description: "This bureau acts in accordance with the NCB for the establishment of De-addiction and rehabilitation centers in the vulnerable districts identified by the NCB. Alternative livelihood to the persons/ jail released for bringing attitudinal change. Reformation programs/ schemes. The Department for Empowerment of Persons with Disabilities, Senior Citizens and Transgender Persons recruited 'Community Educators' to conduct various awareness programs in vulnerable places and educational institutions in the state. (www.wdsc.telangana.gov.in)",
      icon: Users,
      color: "from-indigo-500 to-indigo-600"
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
              State <span className="text-blue-600">Coordination</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Collaborative efforts with state departments to combat drug menace across Telangana
            </p>
          </div>

          {/* Departments Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {departments.map((dept, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 border border-blue-50">
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${dept.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                    <dept.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 font-poppins">{dept.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{dept.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Statistics Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-3xl p-8 md:p-12 shadow-2xl mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">Coordinated Impact</h2>
              <p className="text-xl text-blue-200 max-w-4xl mx-auto leading-relaxed">
                Through seamless coordination with state departments, we ensure comprehensive coverage 
                and effective implementation of anti-drug policies across all sectors.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">8</div>
                <div className="text-blue-200">Departments</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">33</div>
                <div className="text-blue-200">Districts</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
                <div className="text-blue-200">Coordination</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">100%</div>
                <div className="text-blue-200">Coverage</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-blue-100">
            <div className="text-center">
              <Users className="w-16 h-16 text-blue-600 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-poppins">Multi-Department Synergy</h2>
              <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                Our success in combating drugs stems from the coordinated efforts of multiple state departments, 
                each contributing their unique expertise and resources to create a unified defense against narcotics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold px-8 py-3 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300">
                  Join the Fight
                </button>
                <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold px-8 py-3 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300">
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

export default StateCoordination;
