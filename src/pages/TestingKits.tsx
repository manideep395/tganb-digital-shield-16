
import { Search, Clock, Shield, Smartphone, Zap, CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TestingKits = () => {
  const testingKits = [
    {
      name: "Drug Testing Kit",
      icon: Search,
      color: "from-blue-500 to-blue-600",
      features: [
        "Rapid drug screening tool",
        "Handheld, lightweight and compact device",
        "Analyser interprets and determines the test outcome, eliminating the subjectivity of visually interpreted results",
        "Sample collection in 60 seconds or less",
        "No timed collection; volume adequacy indicator turns blue when enough sample has been collected",
        "Results in 5 minutes"
      ]
    },
    {
      name: "Urine Testing Kit",
      icon: Shield,
      color: "from-green-500 to-green-600",
      features: [
        "Offers a high level of accuracy in detecting drug substances in urine samples",
        "Provides rapid and accurate results in a timely manner",
        "Easy to use and applicable in various testing environments",
        "Consistently delivers dependable and trustworthy results",
        "Accessible for testing needs at any time of the day"
      ]
    },
    {
      name: "Drager Drug Testing Kit",
      icon: Smartphone,
      color: "from-purple-500 to-purple-600",
      features: [
        "It can test the subjects for up to six substance classes simultaneously",
        "It can be used quickly and easily, and is suitable for flexible use applications such as roadside checks",
        "Test kit cannot be manipulated and is particularly hygienic to use",
        "It reliably detects even minute traces",
        "Can analyse the test result using your smartphone's camera and store the result for further use",
        "The results can be clearly logged, together with the personal data of the test subject and tester and information such as the date, time and geographic location",
        "Fast and sensitive drug analysis"
      ]
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
              Testing Kits & <span className="text-blue-600">Detection Methods</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced drug detection technology for accurate and rapid screening
            </p>
          </div>

          {/* Key Features Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center border border-blue-100">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 font-poppins">Rapid Results</h3>
              <p className="text-gray-600">Get accurate results in minutes, not hours</p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center border border-blue-100">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 font-poppins">High Accuracy</h3>
              <p className="text-gray-600">Reliable detection with minimal false positives</p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center border border-blue-100">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 font-poppins">Easy to Use</h3>
              <p className="text-gray-600">Simple operation with minimal training required</p>
            </div>
          </div>

          {/* Testing Kits Details */}
          <div className="space-y-12">
            {testingKits.map((kit, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl p-8 border border-blue-100">
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${kit.color} rounded-full flex items-center justify-center mr-6`}>
                    <kit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 font-poppins">{kit.name}</h2>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
                    <ul className="space-y-3">
                      {kit.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Applications</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-blue-600" />
                        <span className="text-gray-700">Law Enforcement</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Search className="w-4 h-4 text-blue-600" />
                        <span className="text-gray-700">Roadside Screening</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        <span className="text-gray-700">Workplace Testing</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-blue-600" />
                        <span className="text-gray-700">Emergency Response</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-3xl p-8 md:p-12 shadow-2xl mt-16">
            <div className="text-center">
              <Search className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">Advanced Detection Technology</h2>
              <p className="text-xl text-blue-200 mb-8 max-w-4xl mx-auto leading-relaxed">
                Our state-of-the-art testing kits ensure accurate and rapid drug detection, 
                supporting law enforcement and community safety initiatives across Telangana.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TestingKits;
