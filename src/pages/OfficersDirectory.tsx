
import { Phone, Mail, MapPin, User, Shield } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const OfficersDirectory = () => {
  const officers = [
    {
      sno: "1",
      name: "Sri. Sandeep Shandilya",
      rank: "ADG",
      posting: "Director",
      phone: "8712661700"
    },
    {
      sno: "",
      name: "Sri. Dr.Y.Sai Sekhar, SP (Headquarters)",
      rank: "",
      posting: "",
      phone: "8712661701"
    },
    {
      sno: "1",
      name: "P.Krishnamurthy",
      rank: "Addl.SP",
      posting: "Administration",
      phone: "8712661703"
    },
    {
      sno: "2",
      name: "Therli Shivannaidu",
      rank: "DSP",
      posting: "Investigation & Legal Wing",
      phone: "8712661758"
    },
    {
      sno: "",
      name: "Parikala Venkateshwarlu",
      rank: "Inspector",
      posting: "",
      phone: "8712661748"
    },
    {
      sno: "3",
      name: "Pakkurthi Shankar Yadav",
      rank: "DSP",
      posting: "Documentation & Training",
      phone: "8712661705"
    },
    {
      sno: "",
      name: "Karuna Prasad Godice",
      rank: "Inspector",
      posting: "",
      phone: "8712661736"
    },
    {
      sno: "4",
      name: "Nagelli Buchaiah",
      rank: "DSP",
      posting: "Administration Wing",
      phone: "8712661709"
    },
    {
      sno: "5",
      name: "K.Deepak Chandra",
      rank: "DSP",
      posting: "Logistics Wing",
      phone: "8712661707"
    }
  ];

  const westRegionOfficers = [
    {
      sno: "",
      name: "Sri. K.C.S.Raghuvir, SP-West",
      rank: "",
      posting: "",
      phone: "8712661900"
    },
    {
      sno: "1",
      name: "Kandukuri Narsing Rao",
      rank: "DSP",
      posting: "Hyderabad NPS (1. Hyderabad Commissionerate)",
      phone: "8712661759"
    },
    {
      sno: "",
      name: "P.Rajashekar",
      rank: "Inspector",
      posting: "",
      phone: "8712661732"
    },
    {
      sno: "",
      name: "Penugondla Rajesh",
      rank: "Inspector",
      posting: "",
      phone: "8712661733"
    },
    {
      sno: "2",
      name: "Chemarla Harichandra Reddy",
      rank: "DSP",
      posting: "Cyberabad NPS (1.Cyberabad Commissionerate, 2.Sangareddy Dist)",
      phone: "8712661708"
    },
    {
      sno: "",
      name: "Gogula Gopi",
      rank: "Inspector",
      posting: "",
      phone: "8712661740"
    }
  ];

  const eastRegionOfficers = [
    {
      sno: "",
      name: "Sri .A.Bhaskar, SP-East",
      rank: "",
      posting: "",
      phone: "8712661800"
    },
    {
      sno: "1",
      name: "Bachalkura Ramesh",
      rank: "DSP",
      posting: "Rachakonda NPS (1.Rachakonda Commissionerate, 2.Nalgonda Dist, 3. Suryapet Dist)",
      phone: "8712661714"
    },
    {
      sno: "",
      name: "Dugyala Ram Prasad",
      rank: "Inspector",
      posting: "",
      phone: "8712661746"
    },
    {
      sno: "",
      name: "Kuduru Praveen Kumar",
      rank: "Inspector",
      posting: "",
      phone: "8712661745"
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
              Officers & <span className="text-blue-600">Directory</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet our dedicated team of officers working tirelessly to combat drug trafficking in Telangana
            </p>
          </div>

          {/* Director Section */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-center mb-8 font-poppins">Leadership</h2>
              <div className="max-w-4xl mx-auto">
                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-yellow-300 mb-2">Sri. Sandeep Shandilya</h3>
                    <p className="text-xl text-blue-200 mb-4">Additional Director General (ADG) - Director</p>
                    <div className="flex items-center justify-center space-x-2 text-white">
                      <Phone className="w-5 h-5" />
                      <span className="text-lg font-medium">8712661700</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Headquarters Officers */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center font-poppins">Headquarters Officers</h2>
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-blue-100">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                      <th className="px-6 py-4 text-left font-bold">S.No</th>
                      <th className="px-6 py-4 text-left font-bold">Name of Officer</th>
                      <th className="px-6 py-4 text-left font-bold">Rank</th>
                      <th className="px-6 py-4 text-left font-bold">Place of Posting</th>
                      <th className="px-6 py-4 text-left font-bold">Phone Number</th>
                    </tr>
                  </thead>
                  <tbody>
                    {officers.map((officer, index) => (
                      <tr key={index} className={`${index % 2 === 0 ? 'bg-blue-50' : 'bg-white'} hover:bg-blue-100 transition-colors`}>
                        <td className="px-6 py-4 font-medium">{officer.sno}</td>
                        <td className="px-6 py-4 font-semibold text-gray-900">{officer.name}</td>
                        <td className="px-6 py-4 text-blue-600 font-medium">{officer.rank}</td>
                        <td className="px-6 py-4">{officer.posting}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-2">
                            <Phone className="w-4 h-4 text-green-600" />
                            <span className="font-medium">{officer.phone}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* West Region */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center font-poppins">West Region Officers</h2>
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-blue-100">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-green-600 to-green-700 text-white">
                      <th className="px-6 py-4 text-left font-bold">S.No</th>
                      <th className="px-6 py-4 text-left font-bold">Name of Officer</th>
                      <th className="px-6 py-4 text-left font-bold">Rank</th>
                      <th className="px-6 py-4 text-left font-bold">Place of Posting</th>
                      <th className="px-6 py-4 text-left font-bold">Phone Number</th>
                    </tr>
                  </thead>
                  <tbody>
                    {westRegionOfficers.map((officer, index) => (
                      <tr key={index} className={`${index % 2 === 0 ? 'bg-green-50' : 'bg-white'} hover:bg-green-100 transition-colors`}>
                        <td className="px-6 py-4 font-medium">{officer.sno}</td>
                        <td className="px-6 py-4 font-semibold text-gray-900">{officer.name}</td>
                        <td className="px-6 py-4 text-green-600 font-medium">{officer.rank}</td>
                        <td className="px-6 py-4">{officer.posting}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-2">
                            <Phone className="w-4 h-4 text-green-600" />
                            <span className="font-medium">{officer.phone}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* East Region */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center font-poppins">East Region Officers</h2>
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-blue-100">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-purple-600 to-purple-700 text-white">
                      <th className="px-6 py-4 text-left font-bold">S.No</th>
                      <th className="px-6 py-4 text-left font-bold">Name of Officer</th>
                      <th className="px-6 py-4 text-left font-bold">Rank</th>
                      <th className="px-6 py-4 text-left font-bold">Place of Posting</th>
                      <th className="px-6 py-4 text-left font-bold">Phone Number</th>
                    </tr>
                  </thead>
                  <tbody>
                    {eastRegionOfficers.map((officer, index) => (
                      <tr key={index} className={`${index % 2 === 0 ? 'bg-purple-50' : 'bg-white'} hover:bg-purple-100 transition-colors`}>
                        <td className="px-6 py-4 font-medium">{officer.sno}</td>
                        <td className="px-6 py-4 font-semibold text-gray-900">{officer.name}</td>
                        <td className="px-6 py-4 text-purple-600 font-medium">{officer.rank}</td>
                        <td className="px-6 py-4">{officer.posting}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-2">
                            <Phone className="w-4 h-4 text-green-600" />
                            <span className="font-medium">{officer.phone}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-gray-900 to-blue-900 text-white rounded-3xl p-8 shadow-2xl">
            <h2 className="text-3xl font-bold text-center mb-8 font-poppins">Contact Information</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-yellow-400">Emergency Helpline</h3>
                <p className="text-2xl font-bold mb-2">1908</p>
                <p className="text-gray-300">24/7 Drug Crime Reporting</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-yellow-400">Email</h3>
                <p className="text-lg font-bold mb-2">tsnabho-hyd@tspolice.gov.in</p>
                <p className="text-gray-300">Official Communication</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-yellow-400">Address</h3>
                <p className="text-gray-300">TG ANB Office, Lakdikapul,<br />Hyderabad, Telangana - 500004</p>
              </div>
            </div>
          </div>

          {/* Note for Editors */}
          <div className="mt-16">
            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-3xl p-8">
              <div className="text-center">
                <User className="w-16 h-16 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-yellow-800 mb-4 font-poppins">Editor's Note</h3>
                <p className="text-lg text-yellow-700">
                  This directory is maintained for easy editing and updates. Officer details can be modified as needed 
                  to reflect current postings and contact information.
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

export default OfficersDirectory;
