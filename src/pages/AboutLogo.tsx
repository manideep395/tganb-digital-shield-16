
import { Shield, Crown, Building, Wreath, Eagle, Award } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutLogo = () => {
  const logoElements = [
    {
      icon: Building,
      title: "Warangal Arch",
      description: "The Warangal Arch, a significant monument in Telangana, India, symbolizes the region's cultural and heritage. It is the main symbol in the Emblem of Telangana.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Crown,
      title: "The Lion",
      description: "The lion is a powerful and majestic creature. It is the symbol of strength, power, and courage.",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: Building,
      title: "Charminar",
      description: "Charminar is a historic monument located in Hyderabad, India. It is a prominent symbol of the city and has cultural and historical significance. Four minars signify the four cardinal directions – North, South, East, and West.",
      color: "from-gray-600 to-gray-700"
    },
    {
      icon: Wreath,
      title: "The Wreath",
      description: "A wreath is a circular arrangement of flowers, leaves, or branches, often used as a decorative element. It is a representation of faith.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Eagle,
      title: "The Eagle",
      description: "The eagle is a powerful and iconic symbol. The eagle is often seen as wise and inspirational. An icon of this majestic creature shown soaring in flight indicates that bureau is always pushing higher and striving to achieve.",
      color: "from-blue-500 to-blue-600"
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
              About Our <span className="text-blue-600">Logo</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the symbolism and meaning behind the TGANB emblem
            </p>
          </div>

          {/* Logo Display */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="flex flex-col items-center">
                <div className="relative mb-8">
                  <div className="w-40 h-40 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border-4 border-white/30">
                    <img 
                      src="/lovable-uploads/cfe052e4-2276-4a1d-b6af-bc0ad7c3ccd4.png" 
                      alt="TGANB Logo" 
                      className="w-32 h-32 object-contain"
                    />
                  </div>
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center animate-pulse">
                    <Award className="w-6 h-6 text-yellow-800" />
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 font-poppins">TG ANB Official Emblem</h2>
                <p className="text-xl text-blue-200 text-center max-w-2xl">
                  Every element of our logo represents our values, heritage, and unwavering commitment to protecting Telangana from drug menace.
                </p>
              </div>
            </div>
          </div>

          {/* Logo Elements */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center font-poppins">Symbolic Elements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {logoElements.map((element, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-50 group">
                  <div className={`w-16 h-16 bg-gradient-to-br ${element.color} rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <element.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center font-poppins">{element.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-center">{element.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Logo Significance */}
          <div className="mb-16">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-blue-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center font-poppins">Logo Significance</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-200">
                    <h3 className="text-xl font-bold text-blue-800 mb-3">Cultural Heritage</h3>
                    <p className="text-gray-700">
                      The integration of Warangal Arch and Charminar represents our deep connection to Telangana's rich cultural heritage and historical significance.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-6 border border-green-200">
                    <h3 className="text-xl font-bold text-green-800 mb-3">Strength & Courage</h3>
                    <p className="text-gray-700">
                      The lion symbolizes the unwavering strength and courage of our officers in the face of challenges and dangers.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 border border-yellow-200">
                    <h3 className="text-xl font-bold text-yellow-800 mb-3">Faith & Dedication</h3>
                    <p className="text-gray-700">
                      The wreath represents our faith in justice and our dedicated service to the people of Telangana.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200">
                    <h3 className="text-xl font-bold text-purple-800 mb-3">Aspiration & Excellence</h3>
                    <p className="text-gray-700">
                      The soaring eagle embodies our constant pursuit of excellence and our aspiration to reach greater heights in service.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="text-center">
              <Shield className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">Protecting Telangana's Future</h2>
              <p className="text-xl text-blue-200 mb-8 max-w-4xl mx-auto leading-relaxed">
                Every element of our emblem reminds us of our sacred duty to protect the citizens of Telangana 
                from the menace of drugs, preserving our cultural heritage while building a safer tomorrow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold px-8 py-3 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300">
                  Report Drug Crime
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold px-8 py-3 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300">
                  Contact TGANB
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

export default AboutLogo;
