
import { MapPin, Phone, Shield, Users } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RegionalNarcoticPoliceStations = () => {
  const regionalStations = [
    {
      sno: "1",
      cell: "RNCC, Warangal",
      jurisdiction: ["1. Mulugu", "2. Jayashanker Bhupalapally", "3. Mahabubabad"],
      officer: "DSP RNCC",
      contact: "8712661711"
    },
    {
      sno: "2", 
      cell: "RNCC, Mahabubnagar",
      jurisdiction: ["1. Mahabubnagar", "2. Jogulamba Gadwal", "3. Wanaparthy", "4. Narayanapet", "5. Nagar kurnool"],
      officer: "DSP RNCC",
      contact: "8712661706"
    },
    {
      sno: "3",
      cell: "RNCC, Sangareddy",
      jurisdiction: ["1. Siddipet Commissionerate", "2. Sangareddy", "3. Medak", "4. Vikarabad"],
      officer: "DSP RNCC", 
      contact: "8712661706"
    },
    {
      sno: "4",
      cell: "RNCC, Nizamabad",
      jurisdiction: ["1. Nizamabad Commissionerate", "2. Kamareddy", "3. Nirmal", "4. Adilabad"],
      officer: "DSP RNCC",
      contact: "8712661704"
    },
    {
      sno: "5",
      cell: "RNCC, Karimnagar", 
      jurisdiction: ["1. Karimnagar Commissionerate", "2. Ramagundam Commissionerate", "3. Komarambeem Asifabad", "4. Rajanna Siricilla", "5. Jagityal"],
      officer: "DSP RNCC",
      contact: "8712661755"
    },
    {
      sno: "6",
      cell: "RNCC, Khammam",
      jurisdiction: ["1. Kammam Commissionerate", "2. BhadradriKothagudem", "3. Suryapet", "4. Nalgonda"],
      officer: "DSP RNCC",
      contact: "8712661713"
    },
    {
      sno: "7",
      cell: "RNCC, Railways",
      jurisdiction: ["1. GRP Secunderabad"],
      officer: "DSP RNCC",
      contact: "8712661712"
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
              Regional Narcotic <span className="text-blue-600">Control Cells</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Strategic regional units ensuring comprehensive narcotics control across all districts of Telangana
            </p>
          </div>

          {/* Information Banner */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="flex items-center justify-center mb-8">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <MapPin className="w-10 h-10 text-white" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-center mb-6 font-poppins">Regional Network Coverage</h2>
              <p className="text-xl text-center leading-relaxed max-w-4xl mx-auto">
                Our Regional Narcotics Control Cells provide comprehensive coverage across Telangana, 
                ensuring no area is left unprotected from drug trafficking activities.
              </p>
            </div>
          </div>

          {/* Regional Stations Table */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center font-poppins">RNCC Directory</h2>
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-blue-100">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-green-600 to-green-700 text-white">
                      <th className="px-6 py-4 text-left font-bold">S No</th>
                      <th className="px-6 py-4 text-left font-bold">REGIONAL NARCOTICS CONTROL CELL</th>
                      <th className="px-6 py-4 text-left font-bold">JURISDICTION</th>
                      <th className="px-6 py-4 text-left font-bold">RNCC OFFICERS</th>
                      <th className="px-6 py-4 text-left font-bold">CONTACT DETAILS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {regionalStations.map((station, index) => (
                      <tr key={index} className={`${index % 2 === 0 ? 'bg-green-50' : 'bg-white'} hover:bg-green-100 transition-colors`}>
                        <td className="px-6 py-4 font-bold text-green-600 text-lg">{station.sno}</td>
                        <td className="px-6 py-4 font-bold text-gray-900">{station.cell}</td>
                        <td className="px-6 py-4">
                          <div className="space-y-1">
                            {station.jurisdiction.map((area, idx) => (
                              <div key={idx} className="text-gray-700 text-sm">{area}</div>
                            ))}
                          </div>
                        </td>
                        <td className="px-6 py-4 font-semibold text-green-600">{station.officer}</td>
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

          {/* Key Features Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center font-poppins">RNCC Capabilities</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-green-50">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center font-poppins">Regional Coverage</h3>
                <p className="text-gray-600 text-center">
                  Strategic placement ensures comprehensive coverage of all districts and commissionerates in Telangana.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-green-50">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center font-poppins">Expert Leadership</h3>
                <p className="text-gray-600 text-center">
                  Each RNCC is led by experienced DSP-rank officers with specialized narcotics enforcement training.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-green-50">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center font-poppins">Coordinated Operations</h3>
                <p className="text-gray-600 text-center">
                  Seamless coordination between regional cells ensures effective intelligence sharing and joint operations.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-r from-gray-900 to-blue-900 text-white rounded-3xl p-8 shadow-2xl">
            <h2 className="text-3xl font-bold text-center mb-8 font-poppins">Report to Your Regional Cell</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-yellow-400">Emergency Reporting</h3>
                <p className="text-2xl font-bold mb-2">1908</p>
                <p className="text-gray-300">24/7 State-wide emergency helpline</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-yellow-400">Find Your RNCC</h3>
                <p className="text-gray-300">Contact the RNCC covering your district<br />for local narcotics concerns</p>
              </div>
            </div>
            
            <div className="bg-green-900/50 rounded-2xl p-6 mt-8 border border-green-700">
              <h3 className="text-xl font-bold mb-3 text-green-300 flex items-center justify-center">
                <Shield className="w-6 h-6 mr-2" />
                Complete District Coverage
              </h3>
              <p className="text-gray-300 leading-relaxed text-center">
                Every district in Telangana is covered by our Regional Narcotics Control Cells, 
                ensuring prompt response and effective enforcement throughout the state.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RegionalNarcoticPoliceStations;
