
import { useState } from 'react';
import { Calendar, MapPin, Users, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const EventsCampaigns = () => {
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null);

  const events = [
    {
      date: "12-02-2024",
      title: "Anti Drug Summit 2024",
      initiative: "General Awareness",
      location: "BITS Pilani College, Hyderabad",
      description: "Today an Anti Drug Summit 2024 was held at BITS Pilani College, Hyd and Sri.Sandeep Shandilya IPS,( Director TSNAB) has shared valuable information about Drug Abuse and Illicit trafficking in Telangana and requested every individual to Kindly inform any information related Drugs to 8712671111.",
      organizations: ["TSNAB", "BITS Pilani"]
    },
    {
      date: "12-02-2024",
      title: "State-level Consultation on Child Protection",
      initiative: "Child Protection",
      location: "National Institute of Micro, Small, and Medium Enterprises (ni-msme), Yousufguda, Hyderabad",
      description: "Telangana State Commission for Protection of Child Rights (TSCPCR), Women Development & Child Welfare (WD&CW) Department, and Child of India Foundation co-organized a state-level consultation on the prevention of Drug abuse, online abuse, and sexual abuse of children. Sri Aggadi Bhaskar SP, TSNAB and P Srinivasa Rao Insp, TSNAB attended the event and addressed them.",
      organizations: ["TSCPCR", "WD&CW Department", "Child of India Foundation", "TSNAB"]
    },
    {
      date: "02-02-2024",
      title: "Mission Parivartana Awareness Program",
      initiative: "Mission Parivartana",
      location: "Sreyas Institute of Engineering & Technology, Hyderabad",
      description: "Under Mission Parivartana, an awareness program was conducted at Sreyas Institute of Engineering & Technology, Hyd. This session was conducted to educate students on how students can be impact by drug consumption and understand the serious consequences of drug usage. The awareness program was held by the Telangana anti-narcotics bureau and community educators and was attended by Sri Aggadi Bhaskar SP,TSNAB. The agenda of this program was to create awareness about drug demand reduction for a drug-free society and a drug-free generation.",
      organizations: ["TSNAB", "Community Educators", "Sreyas Institute"]
    }
  ];

  const toggleExpand = (index: number) => {
    setExpandedEvent(expandedEvent === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <main className="py-12">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-poppins">
              Events & <span className="text-blue-600">Campaigns</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive awareness initiatives and community engagement programs across Telangana
            </p>
          </div>

          {/* Events List */}
          <div className="max-w-4xl mx-auto space-y-6">
            {events.map((event, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden">
                <div 
                  className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => toggleExpand(index)}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="flex items-center gap-2 text-blue-600 font-semibold">
                          <Calendar className="w-4 h-4" />
                          <span>{event.date}</span>
                        </div>
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                          {event.initiative}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-2 font-poppins">
                        {event.title}
                      </h3>
                      
                      <div className="flex items-center gap-2 text-gray-600 mb-3">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-gray-600">
                        <Users className="w-4 h-4" />
                        <span className="text-sm">{event.organizations.join(', ')}</span>
                      </div>
                    </div>
                    
                    <button className="ml-4 p-2 hover:bg-gray-100 rounded-full transition-colors">
                      {expandedEvent === index ? (
                        <ChevronUp className="w-5 h-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      )}
                    </button>
                  </div>
                </div>
                
                {expandedEvent === index && (
                  <div className="px-6 pb-6 border-t border-gray-100">
                    <div className="pt-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Event Details</h4>
                      <p className="text-gray-700 leading-relaxed">{event.description}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-3xl p-8 md:p-12 shadow-2xl mt-16">
            <div className="text-center">
              <Calendar className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">Join Our Mission</h2>
              <p className="text-xl text-blue-200 mb-8 max-w-4xl mx-auto leading-relaxed">
                Be part of our ongoing efforts to create awareness and build a drug-free Telangana. 
                Contact us to organize events in your community or institution.
              </p>
              <div className="flex items-center justify-center gap-2 text-yellow-400 font-semibold">
                <span>Get Involved</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default EventsCampaigns;
