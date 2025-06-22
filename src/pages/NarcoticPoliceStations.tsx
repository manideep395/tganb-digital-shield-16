
import { Shield, Phone, MapPin, Users, Scale } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NarcoticPoliceStations = () => {
  const policeStations = [
    {
      sno: "01",
      station: "Hyderabad",
      jurisdiction: "Hyderabad Commissionerate",
      nsho: "DSP HNPS",
      contact: "8712661759"
    },
    {
      sno: "02",
      station: "Cyberabad",
      jurisdiction: "Cyberabad Commissionerate, Sangareddy Dist.",
      nsho: "DSP CNPS",
      contact: "8712661708"
    },
    {
      sno: "03",
      station: "Rachakonda",
      jurisdiction: "Rachakonda Commissionerate, Nalgonda Dist., Suryapet Dist.",
      nsho: "DSP RKNPS",
      contact: "8712661714"
    },
    {
      sno: "04",
      station: "Warangal",
      jurisdiction: "Warangal Commissionerate, Khammam Commissionerate, Mulugu Dist., Jayashankar Bhupalapally Dist., Mahbubabad Dist., Badradri Kothagudem Dist.",
      nsho: "DSP WNPS",
      contact: "8712661711"
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
              Narcotic <span className="text-blue-600">Police Stations</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Dedicated police stations across Telangana for comprehensive anti-narcotics operations
            </p>
          </div>

          {/* Information Section */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="flex items-center justify-center mb-8">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Shield className="w-10 h-10 text-white" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-center mb-8 font-poppins">PS Information & Jurisdiction</h2>
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <p className="text-lg text-center leading-relaxed">
                  Narcotics Police stations function under the <span className="font-bold text-yellow-300">overall supervision and administrative control of Director, TSNAB</span> and functional control of respective commissioners of Police, who shall extend all the necessary support to the Narcotics Police Stations.
                </p>
              </div>
            </div>
          </div>

          {/* Police Stations Table */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center font-poppins">Police Stations Directory</h2>
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-blue-100">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                      <th className="px-6 py-4 text-left font-bold">S.NO</th>
                      <th className="px-6 py-4 text-left font-bold">NARCOTICS POLICE STATION</th>
                      <th className="px-6 py-4 text-left font-bold">JURISDICTION</th>
                      <th className="px-6 py-4 text-left font-bold">NSHO</th>
                      <th className="px-6 py-4 text-left font-bold">Contact Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {policeStations.map((station, index) => (
                      <tr key={index} className={`${index % 2 === 0 ? 'bg-blue-50' : 'bg-white'} hover:bg-blue-100 transition-colors`}>
                        <td className="px-6 py-4 font-bold text-blue-600 text-lg">{station.sno}</td>
                        <td className="px-6 py-4 font-bold text-gray-900">{station.station}</td>
                        <td className="px-6 py-4 text-gray-700">{station.jurisdiction}</td>
                        <td className="px-6 py-4 font-semibold text-blue-600">{station.nsho}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-2">
                            <Phone className="w-4 h-4 text-green-600" />
                            <span className="font-medium text-gray-900">{station.contact}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center font-poppins">Authority & Functions</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-50">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Scale className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center font-poppins">Legal Authority</h3>
                <p className="text-gray-600 text-center">
                  Exercise powers of a Police Station within the meaning of Section 2(s) of the Code of Criminal Procedure, 1973.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-50">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center font-poppins">Leadership</h3>
                <p className="text-gray-600 text-center">
                  An officer of the rank of Deputy Superintendent of Police is designated as the Station House Officer.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-50">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center font-poppins">Support System</h3>
                <p className="text-gray-600 text-center">
                  Commissioners of Police extend all necessary support to Narcotics Police Stations for effective operations.
                </p>
              </div>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-3xl p-8 shadow-2xl">
            <div className="text-center">
              <Phone className="w-16 h-16 text-white mx-auto mb-6 animate-pulse" />
              <h2 className="text-3xl font-bold mb-6 font-poppins">Emergency Helpline</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold mb-4 text-yellow-300">24/7 Drug Crime Reporting</h3>
                  <p className="text-3xl font-bold mb-2">1908</p>
                  <p className="text-gray-200">Immediate response for drug-related emergencies</p>
                </div>
                
                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold mb-4 text-yellow-300">TGANB Helpline</h3>
                  <p className="text-2xl font-bold mb-2">8712671111</p>
                  <p className="text-gray-200">Direct contact for narcotics information</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NarcoticPoliceStations;
