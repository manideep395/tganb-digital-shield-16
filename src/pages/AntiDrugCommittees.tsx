
import { Users, AlertTriangle, Phone, Mail, Shield, BookOpen, MessageSquare } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AntiDrugCommittees = () => {
  const guidelines = [
    {
      icon: Users,
      title: "Committee Formation",
      description: "Constitute a committee of at least 5 members to be known as the Anti-drug Committee, headed by the Head of the Institution and consisting of representatives of civil and police administration, NGOs involved in youth activities, faculty members, parents, students and non-teaching staff."
    },
    {
      icon: AlertTriangle,
      title: "Warning Systems",
      description: "The institutions shall erect suitable warning hoardings/bill boards/banners in prominent places within the campus, to exhort the students not to indulge in drugs consumption."
    },
    {
      icon: MessageSquare,
      title: "Pre-Academic Meetings",
      description: "Before the commencement of the academic session in any institution, the Head of the institution shall convene and address a meeting of various functionaries/agencies, such as Hostel Wardens, representatives of students, parents/guardians, faculty, district administration including the Police."
    },
    {
      icon: BookOpen,
      title: "Legal Education",
      description: "The institution shall give wide publicity among students, through various means, about the laws relating to drugs and the catastrophic consequences of drug consumption."
    },
    {
      icon: Shield,
      title: "Awareness Programs",
      description: "The Committee should conduct events like Anti-Drugs workshops, seminars, orientation programs, counselling awareness programs, educating students about the ill effects of drugs, sessions, encouraging peer policing among students against drugs."
    },
    {
      icon: Phone,
      title: "Reporting System",
      description: "The Committee shall inform the local police if anyone is found or reasonably believed to be indulging in the consumption, possession, sale or purchase of Narcotic and psychotropic drugs."
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
              Anti-Drug <span className="text-blue-600">Committees</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Educational institutions leading the fight against drug abuse through structured committees and awareness programs
            </p>
          </div>

          {/* Introduction */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="flex items-center justify-center mb-8">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                  <Users className="w-10 h-10 text-white" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 font-poppins">ADCs: Protecting Our Youth</h2>
              <div className="max-w-4xl mx-auto text-center">
                <p className="text-xl md:text-2xl leading-relaxed">
                  Anti-Drug Committees (ADCs) are <span className="font-bold text-yellow-300">on par with the Anti-Ragging Committees (ARCs) and Anti-Ragging Squads (ARSs)</span> in educational institutions, viz., colleges, universities, etc., educate youth on the ill effects of drug usage and legal consequences, as <span className="font-bold text-yellow-300">youngsters are the most vulnerable group.</span>
                </p>
              </div>
            </div>
          </div>

          {/* Guidelines Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center font-poppins">Formation Guidelines</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {guidelines.map((guideline, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-50">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <guideline.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center font-poppins">{guideline.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-center">{guideline.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Responsibilities Section */}
          <div className="mb-16">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-blue-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center font-poppins">Key Responsibilities</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Educational Programs</h3>
                      <p className="text-gray-600">Conduct workshops, seminars, orientation programs, and counselling sessions to educate students about drug dangers.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Peer Monitoring</h3>
                      <p className="text-gray-600">Encourage peer policing among students against drugs and create a supportive environment for reporting.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Legal Awareness</h3>
                      <p className="text-gray-600">Provide comprehensive information about drug laws and their catastrophic consequences.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Reporting Protocol</h3>
                      <p className="text-gray-600">Inform local police about any suspected drug-related activities on campus immediately.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold">5</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Campus Safety</h3>
                      <p className="text-gray-600">Implement systems and checks to eradicate narcotics from within and around premises.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold">6</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Multi-stakeholder Coordination</h3>
                      <p className="text-gray-600">Engage with district administration, police, NGOs, parents, and students for comprehensive action.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-gray-900 to-blue-900 text-white rounded-3xl p-8 md:p-12 shadow-2xl">
            <h2 className="text-3xl font-bold text-center mb-8 font-poppins">Report Drug Activities</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-yellow-400">Emergency Helpline</h3>
                <p className="text-2xl font-bold mb-2">8712671111</p>
                <p className="text-gray-300">24/7 Available for reporting drug-related information</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-yellow-400">Email Report</h3>
                <p className="text-lg font-bold mb-2">tsnabho-hyd@tspolice.gov.in</p>
                <p className="text-gray-300">Send detailed information via secure email</p>
              </div>
            </div>
            
            <div className="bg-red-900/50 rounded-2xl p-6 mt-8 border border-red-700">
              <h3 className="text-xl font-bold mb-3 text-red-300 flex items-center">
                <Shield className="w-6 h-6 mr-2" />
                Confidentiality Guaranteed
              </h3>
              <p className="text-gray-300 leading-relaxed">
                <strong>Important:</strong> All information regarding Narcotic Drugs and Psychotropic Substances shall be kept confidential 
                as it is classified information and cannot be disclosed to any person or authority. Your identity will be protected.
              </p>
            </div>
          </div>

          {/* Institutional Responsibility */}
          <div className="mt-16">
            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-3xl p-8 md:p-12">
              <div className="text-center">
                <AlertTriangle className="w-16 h-16 text-yellow-600 mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-yellow-800 mb-6 font-poppins">Institutional Accountability</h2>
                <p className="text-xl text-yellow-700 leading-relaxed max-w-4xl mx-auto">
                  It is hereby notified that it shall be the <strong>overall responsibility of the colleges and other equivalent educational institutions and their management</strong> to put in place other systems and checks to eradicate the menace of Narcotic Drugs from within and around their premises.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AntiDrugCommittees;
