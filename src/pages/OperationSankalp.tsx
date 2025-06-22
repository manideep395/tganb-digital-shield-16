
import { Target, Users, Star, Calendar, CheckCircle, Megaphone } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const OperationSankalp = () => {
  const pillars = [
    {
      title: "Celebrity & Influencer Involvement",
      description: "Renowned film stars and cultural icons are lending their voices and presence at public events to broaden reach and add emotional impact",
      icon: Star,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Youth Mobilization",
      description: "Student bodies like NSS conduct 'Anti‑Drug Soldier Campaigns' during Operation Sankalp Week (21–26 June 2025), engaging young leaders to champion anti-drug messaging",
      icon: Users,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Statewide Awareness Events",
      description: "Mobilization activities include street plays, rallies, workshops, and multimedia campaigns across urban and rural Telangana, all with a unified 'Say No. Say Now' theme",
      icon: Megaphone,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Cross‑Sector Collaboration",
      description: "Brings together TGANB, MAA, TASK, Civil Force Trust, NSS volunteers, and state officials—including those from the Department for Empowerment of Persons with Disabilities—for coordinated outreach",
      icon: CheckCircle,
      color: "from-orange-500 to-orange-600"
    }
  ];

  const partners = [
    "Movie Artists Association (MAA) – creative outreach and star ambassadors",
    "Telangana Academy for Skill and Knowledge (TASK) – youth mobilization and training",
    "Civil Force Trust – ground logistics & volunteer coordination",
    "NSS/NCC chapters – school & college-based anti-drug teams",
    "DEPWD and other government departments – institutional outreach and inclusion"
  ];

  const involvement = [
    {
      title: "Students & Youth Clubs",
      description: "Join the NSS Anti‑Drug Soldier Campaign, participate in events, and spread messages in your communities.",
      action: "Join Campaign"
    },
    {
      title: "Schools & Colleges",
      description: "Host street plays, film screenings, and talks featuring celebrities and trained facilitators.",
      action: "Host Events"
    },
    {
      title: "General Public",
      description: "Attend public rallies, pledge against drug use, and share campaign content online using #SayNoSayNow.",
      action: "Take Pledge"
    },
    {
      title: "Civil Society & NGOs",
      description: "Partner with TGANB across villages and districts for sustained community mobilization.",
      action: "Partner with Us"
    }
  ];

  const timeline = [
    {
      date: "11 June 2025",
      title: "Launch Event",
      description: "Launch event in Hyderabad led by TGANB Director Sandeep Shandilya, with dignitaries—including Dr Madala Ravi (MAA VP), SP P Seetharama, and DEPWD Director Shailaja—formalizing the campaign"
    },
    {
      date: "21–26 June 2025",
      title: "Operation Sankalp Week",
      description: "Youth-focused events, community outreach, and 'say-no' rallies across the state"
    },
    {
      date: "Ongoing",
      title: "Sustained Momentum",
      description: "Regular workshops, media campaigns, and celebrity engagement to sustain momentum and spread awareness"
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
              Operation <span className="text-blue-600">Sankalp</span>
            </h1>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto mb-4">
              Say No. Say Now. A Drug‑Free Telangana
            </p>
          </div>

          {/* Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-3xl p-8 shadow-2xl">
              <div className="text-center">
                <Target className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
                <h2 className="text-3xl font-bold mb-6 font-poppins">🧭 Vision</h2>
                <p className="text-lg leading-relaxed">
                  To harness the influence of cinema, youth groups, and community institutions in creating 
                  a vibrant, proactive front against drug abuse—fostering a healthier and drug-free Telangana.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-blue-100">
              <div className="text-center">
                <Megaphone className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-gray-900 mb-6 font-poppins">🎯 Mission</h2>
                <ul className="text-left space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    To amplify anti-drug awareness through powerful cultural voices and youth engagement across Telangana.
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    To unite influencers, civil societies, educational bodies, and government agencies in a bold campaign against narcotics.
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    To motivate every citizen to take a stand—saying NO to drugs today.
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
                Operation Sankalp is a high-visibility, multi‑stakeholder campaign spearheaded by Telangana Anti‑Narcotics Bureau (TGANB) 
                and launched on 11 June 2025 in Hyderabad. The initiative brings together the Movie Artists Association (MAA), 
                Telangana Academy for Skill and Knowledge (TASK), and Civil Force Trust to raise public consciousness about the dangers of drug use.
              </p>
            </div>
          </div>

          {/* Core Pillars */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center font-poppins">🛡️ Core Pillars</h2>
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

          {/* Partners */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="text-center">
                <Users className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">🤝 Collaboration for Impact</h2>
                <p className="text-xl text-green-200 mb-8">Partners involved:</p>
                <div className="space-y-4">
                  {partners.map((partner, index) => (
                    <div key={index} className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-left">
                      <p className="text-white">{partner}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center font-poppins">🗓️ Operation Sankalp Timeline</h2>
            <div className="space-y-6">
              {timeline.map((event, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 border border-blue-100">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-blue-600 font-semibold mb-2">{event.date}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 font-poppins">{event.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{event.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Get Involved */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center font-poppins">📢 Get Involved</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {involvement.map((item, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-blue-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-poppins">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                    {item.action}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="text-center">
              <Star className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">#SayNoSayNow</h2>
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold text-yellow-400">Commitment</div>
                  <div className="text-sm text-blue-200">A pledge by every Telangana citizen to stand against drugs</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold text-yellow-400">Solidarity</div>
                  <div className="text-sm text-blue-200">When stars, students, and society unite—change happens</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold text-yellow-400">Action</div>
                  <div className="text-sm text-blue-200">Not just talk—rallies, campaigns, trainings, and daily vigilance</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold text-yellow-400">Hope</div>
                  <div className="text-sm text-blue-200">Protecting our youth, empowering communities — together we win</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold px-8 py-3 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300">
                  Join Operation Sankalp
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

export default OperationSankalp;
