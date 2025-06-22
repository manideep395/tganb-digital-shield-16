
import { Heart, Phone, MapPin, Users, Building, Stethoscope } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RehabilitationCenters = () => {
  const centers = [
    {
      sno: "1",
      name: "The Hyderabad Children and society",
      objective: "Orphanage",
      incharge: "Jeny Gupta",
      phone: "040-23513186, 23513344",
      address: "H. No.9-4-78 & 79, Radha Krishna Home, Birban, Nanal Nagar, Hyderabad."
    },
    {
      sno: "2",
      name: "Serenity Foundation Rehabilitation & Psychiatric Centre",
      objective: "Mental Illness and De-addiction Centre",
      incharge: "Chetan Manovidya",
      phone: "Contact via Center",
      address: "C1, Asha Officers Colony, Near Banjara Orchid, R K Puram, Trimulgherry, Secunderabad - 500015."
    },
    {
      sno: "3",
      name: "Suvidha Hospital and Rehabilitation Centre",
      objective: "Rehabilitates the persons who are addicted by alcohol and other substances",
      incharge: "Rakesh Reddy",
      phone: "7386898052, 7799888444",
      address: "Plot No.11, H/1, H No.6-3-347/11, Dwarakapuri, Punjagutta, Hyderabad-500082."
    },
    {
      sno: "4",
      name: "Binnova",
      objective: "Post of care",
      incharge: "Dr. Rohini Kumar",
      phone: "9030056101",
      address: "8-2-686/7/10, Sy. No.129/48, Road No.12, Banjara Hills, Hyderabad."
    },
    {
      sno: "5",
      name: "Wellknox",
      objective: "Post of care",
      incharge: "Jhon",
      phone: "9094099389",
      address: "Plot No.8-2-608/1/1, Road No.10, Behind Bakery, Banjara Hills, Hyderabad."
    },
    {
      sno: "6",
      name: "Flexitude",
      objective: "Post of care",
      incharge: "Harini Vemuri",
      phone: "7306885927",
      address: "No.1, Anand Banjara Colony, Road No.12, Banjara Hills"
    },
    {
      sno: "7",
      name: "Shishuvihar primary rehabilitation center",
      objective: "Specially aided children, woman, children, disabled and senior citizen",
      incharge: "Shankar",
      phone: "9346260229",
      address: "H. No. 8-3-222, Vengal Rao Nagar, beside Madhuranagar Metro Station Pillar No:C1468, Ameerpet, Hyderabad-500038."
    },
    {
      sno: "8",
      name: "Helping Hand De-Addiction Centre",
      objective: "De-addiction from alcohol or drugs",
      incharge: "P. Ramu",
      phone: "9849734135, 8341599660, 0870-2434135",
      address: "Circuit Guest House Road, near Kadai Restaurant, Hanamkonda-506001."
    },
    {
      sno: "9",
      name: "New Vision De-Addiction Centre",
      objective: "De-addiction from alcohol or drugs",
      incharge: "A. Surendar",
      phone: "9704142823",
      address: "Near D Mart, Adalath, Hanamkonda-506001."
    },
    {
      sno: "10",
      name: "Development Organization Village Environment (DOVE) IRCA-Integrated Rehabilitation Centre for Addiction",
      objective: "Provide intensive and extensive care for recovery from Drug addiction",
      incharge: "1)Chandra Shekar Reddy, Project Co-ordinator, 2)Devender, DOVE Maintenance",
      phone: "9676933982, 9494818171",
      address: "DOVE(IRCA) Centre, Teachers Colony, near Hanuman Mandir, Adilabad-504001"
    },
    {
      sno: "11",
      name: "Vision Integrated Rehabilitation Centre for Addiction (NGO)",
      objective: "For Alcohol Addicted Persons",
      incharge: "1) P. Abharna, 2)D.Vinesh",
      phone: "9908468003, 9705484255",
      address: "Near Indian Oil Filling Station, Narsapur X Roads, towards Medak Road, Medak-502313."
    },
    {
      sno: "12",
      name: "Govt. General Hospital, Suryapet",
      objective: "Treatment and counselling to people, who addicted to drugs",
      incharge: "Dr. V. Anil, Asst. Professor, GMC, Suryapet",
      phone: "9177772997",
      address: "Govt. General Hospital, Thallagadda, Suryapet-508213."
    }
  ];

  const categoryColors = [
    "from-blue-500 to-blue-600",
    "from-green-500 to-green-600", 
    "from-purple-500 to-purple-600",
    "from-red-500 to-red-600",
    "from-yellow-500 to-yellow-600",
    "from-indigo-500 to-indigo-600"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <main className="py-12">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-poppins">
              Rehabilitation <span className="text-blue-600">Centers</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Comprehensive rehabilitation and support centers across Telangana for recovery and wellness
            </p>
          </div>

          {/* Hero Banner */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="flex items-center justify-center mb-8">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Heart className="w-10 h-10 text-white" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-center mb-6 font-poppins">Hope, Healing & Recovery</h2>
              <p className="text-xl text-center leading-relaxed max-w-4xl mx-auto">
                Our network of rehabilitation centers provides comprehensive care, support, and treatment 
                for individuals struggling with addiction and their families.
              </p>
            </div>
          </div>

          {/* Statistics Cards */}
          <div className="mb-16">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white rounded-2xl shadow-xl p-6 text-center border border-blue-50">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-blue-600 mb-2">12</h3>
                <p className="text-gray-600 font-medium">Centers Available</p>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-6 text-center border border-green-50">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Stethoscope className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-green-600 mb-2">24/7</h3>
                <p className="text-gray-600 font-medium">Medical Support</p>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-6 text-center border border-purple-50">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-purple-600 mb-2">100%</h3>
                <p className="text-gray-600 font-medium">Confidential Care</p>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-6 text-center border border-red-50">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-red-600 mb-2">Multi</h3>
                <p className="text-gray-600 font-medium">Specialized Care</p>
              </div>
            </div>
          </div>

          {/* Centers Directory */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center font-poppins">Centers Directory</h2>
            <div className="space-y-6">
              {centers.map((center, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 border border-blue-50">
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 bg-gradient-to-br ${categoryColors[index % categoryColors.length]} rounded-full flex items-center justify-center`}>
                        <span className="text-white font-bold text-xl">{center.sno}</span>
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 font-poppins">{center.name}</h3>
                      
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <h4 className="font-semibold text-blue-600 mb-2">Objective:</h4>
                          <p className="text-gray-700 text-sm">{center.objective}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-green-600 mb-2">Center Incharge:</h4>
                          <p className="text-gray-700 text-sm">{center.incharge}</p>
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-start space-x-2">
                          <Phone className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold text-gray-900 text-sm">Phone:</h4>
                            <p className="text-gray-700 text-sm">{center.phone}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start space-x-2">
                          <MapPin className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold text-gray-900 text-sm">Address:</h4>
                            <p className="text-gray-700 text-sm">{center.address}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Emergency Support */}
          <div className="bg-gradient-to-r from-gray-900 to-blue-900 text-white rounded-3xl p-8 shadow-2xl">
            <h2 className="text-3xl font-bold text-center mb-8 font-poppins">Need Immediate Help?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-yellow-400">Emergency Helpline</h3>
                <p className="text-2xl font-bold mb-2">1908</p>
                <p className="text-gray-300">24/7 Crisis Support</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-yellow-400">Counseling Support</h3>
                <p className="text-gray-300">Professional guidance and<br />emotional support available</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-yellow-400">Family Support</h3>
                <p className="text-gray-300">Assistance and resources<br />for families affected</p>
              </div>
            </div>
            
            <div className="bg-blue-900/50 rounded-2xl p-6 mt-8 border border-blue-700">
              <h3 className="text-xl font-bold mb-3 text-blue-300 flex items-center justify-center">
                <Heart className="w-6 h-6 mr-2" />
                Recovery is Possible
              </h3>
              <p className="text-gray-300 leading-relaxed text-center">
                <strong>Remember:</strong> Seeking help is a sign of strength, not weakness. 
                Our rehabilitation centers are here to support you or your loved ones on the journey to recovery.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RehabilitationCenters;
