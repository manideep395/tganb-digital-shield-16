
import { Shield, Users, Eye, Heart, BookOpen, CheckCircle, Target, Award } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrahariClubs = () => {
  const objectives = [
    {
      title: "Student Empowerment & Peer Leadership",
      description: "Prahari Clubs identify and train student volunteers to lead anti-drug campaigns, report peer vulnerabilities, and promote healthy lifestyles through positive peer influence.",
      icon: Users,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Awareness & Engagement Activities",
      description: "From debates and essay competitions to street plays, flash mobs, and digital campaigns — these clubs drive interactive and creative engagement within institutions on the harmful effects of drugs.",
      icon: BookOpen,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Institutional Vigilance",
      description: "Students are encouraged to act as the first responders — alerting authorities confidentially if they notice suspicious activity, substance abuse, or vulnerable students needing support.",
      icon: Eye,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Mental Health & Counseling Integration",
      description: "Prahari Clubs act as a bridge between students and professional help, promoting openness to seek counseling, psychological assistance, and rehabilitation guidance when needed.",
      icon: Heart,
      color: "from-pink-500 to-pink-600"
    },
    {
      title: "Collaboration with Enforcement & Health Units",
      description: "Each Prahari Club is part of a larger network supported by district-level Narcotics Officers, Excise Inspectors, psychologists, and ANB's mobile teams that conduct surprise checks, training, and interventions.",
      icon: Shield,
      color: "from-orange-500 to-orange-600"
    }
  ];

  const activities = [
    "Interactive awareness sessions with tracker dog demos",
    "Anti-drug pledge ceremonies and school rallies",
    "Sports kit and wellness kit distribution",
    "Exhibitions, quizzes, and essay contests on drug prevention",
    "Digital poster design, social media campaigns, and cultural events"
  ];

  const partners = [
    "School and College Managements",
    "Department of School & Higher Education",
    "National Service Scheme (NSS) and NCC Units",
    "Health and Family Welfare Department",
    "Child Protection and Mental Wellness NGOs"
  ];

  const impact = [
    { number: "22,000+", label: "Prahari Clubs established across Telangana" },
    { number: "Lakhs", label: "Students reached through awareness activities" },
    { number: "Several", label: "Drug risk instances reported from institutions" },
    { number: "Sustainable", label: "Student-led model of vigilance and awareness" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <main className="py-12">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-poppins">
              Prahari <span className="text-blue-600">Clubs</span>
            </h1>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto mb-4">
              Guardians of a Drug-Free Future
            </p>
          </div>

          {/* Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-3xl p-8 shadow-2xl">
              <div className="text-center">
                <Target className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
                <h2 className="text-3xl font-bold mb-6 font-poppins">🧭 Vision</h2>
                <p className="text-lg leading-relaxed">
                  To cultivate a vigilant, informed, and resilient student community that actively resists drug abuse, 
                  safeguards their peers, and contributes to building a drug-free Telangana through awareness, 
                  leadership, and proactive participation.
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
                    To instill anti-drug values in students through structured awareness programs, peer leadership, and interactive activities.
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    To develop a generation of youth ambassadors who are trained to identify, prevent, and report drug-related threats.
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    To integrate schools and colleges as the first line of defense through student-led initiatives.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="mb-16">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-blue-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center font-poppins">🔍 About the Initiative</h2>
              <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto mb-6">
                Prahari Clubs (meaning "Guardians") are student-led anti-drug awareness and vigilance units established 
                by the Telangana State Anti-Narcotics Bureau (TG ANB) in over 22,000 high-risk educational institutions 
                across the state. These clubs serve as grassroots watchposts within schools and colleges, empowering 
                students to become Anti-Drug Ambassadors and peer leaders.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
                Each club is guided by a faculty mentor and supported by ANB officers, psychologists, and trained 
                law enforcement teams. Through Prahari Clubs, TG ANB aims to make every student not just a beneficiary 
                of awareness, but a torchbearer of transformation.
              </p>
            </div>
          </div>

          {/* Core Objectives */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center font-poppins">🛡️ Core Objectives of Prahari Clubs</h2>
            <div className="space-y-6">
              {objectives.map((objective, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-blue-100">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${objective.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                      <objective.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 font-poppins">✅ {objective.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{objective.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Activities */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="text-center">
                <BookOpen className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">📚 Activities Conducted Under Prahari Clubs</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {activities.map((activity, index) => (
                    <div key={index} className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-left">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <CheckCircle className="w-4 h-4 text-green-800" />
                        </div>
                        <p className="text-white">{activity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Partnerships */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center font-poppins">🤝 Partnerships for Success</h2>
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-blue-100">
              <p className="text-lg text-gray-700 mb-6 text-center">
                Prahari Clubs are enabled through active support from:
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {partners.map((partner, index) => (
                  <div key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 border border-blue-200">
                    <div className="flex items-center space-x-3">
                      <Users className="w-6 h-6 text-blue-600" />
                      <p className="text-gray-700 font-medium">{partner}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Impact */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="text-center mb-8">
                <Award className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">🌟 Impact So Far</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {impact.map((stat, index) => (
                  <div key={index} className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">{stat.number}</div>
                    <div className="text-purple-200">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="text-center">
              <Shield className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">📢 Be a Prahari – Be the Change</h2>
              <p className="text-xl text-blue-200 mb-8 max-w-4xl mx-auto leading-relaxed">
                Every student has the power to protect their peers and society. Join the Prahari movement in your 
                school or college and stand as a guardian of change. Speak up. Act responsibly. Lead the way 
                towards a drug-free Telangana.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold px-8 py-3 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300">
                  Start a Prahari Club
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

export default PrahariClubs;
