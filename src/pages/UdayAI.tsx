
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const UdayAI = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 font-poppins">
      <Header />
      
      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              About <span className="text-orange-600">Uday.AI</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              AI-Powered Recovery Support & Professional Referral System by TG ANB
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                <span className="mr-3">🌅</span> What is Uday.AI?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-4">
                Uday.AI is a compassionate, AI-driven recovery support system developed by the Telangana Anti-Narcotics Bureau (TG ANB) as part of the T-RISING.AI ecosystem. The name "Uday" means "sunrise" or "dawn" in Sanskrit, symbolizing hope, new beginnings, and the daily opportunity to seek professional help for recovery.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                This intelligent system is designed to connect individuals with appropriate professional resources including rehabilitation centers, hospitals, specialists, and counselors based on their specific needs and situation.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                <span className="mr-3">🎯</span> Purpose of Uday.AI
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-4">
                Uday.AI's mission is to provide professional referrals and connect individuals with appropriate resources by:
              </p>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start space-x-3">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Recommending appropriate rehabilitation centers based on individual needs</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Connecting users with qualified medical professionals and specialists</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Providing contact information for professional counselors and therapists</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Guiding family members to appropriate support resources</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Facilitating connections with professional treatment facilities</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                <span className="mr-3">🧠</span> How Does Uday.AI Work?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 dark:bg-orange-900/30 rounded-full w-8 h-8 flex items-center justify-center font-bold text-orange-600 dark:text-orange-400 flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-bold text-gray-800 dark:text-white mb-2">Assessment</h3>
                    <p className="text-gray-600 dark:text-gray-300">Users share their situation, needs, and location preferences</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 dark:bg-orange-900/30 rounded-full w-8 h-8 flex items-center justify-center font-bold text-orange-600 dark:text-orange-400 flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-bold text-gray-800 dark:text-white mb-2">AI Analysis</h3>
                    <p className="text-gray-600 dark:text-gray-300">The AI analyzes requirements and matches with appropriate professional resources</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 dark:bg-orange-900/30 rounded-full w-8 h-8 flex items-center justify-center font-bold text-orange-600 dark:text-orange-400 flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-bold text-gray-800 dark:text-white mb-2">Professional Referrals</h3>
                    <p className="text-gray-600 dark:text-gray-300">Provides contact information and details of recommended professionals, centers, and specialists</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                <span className="mr-3">🔹</span> Key Features of Uday.AI
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                  <thead>
                    <tr className="bg-orange-50 dark:bg-orange-900/20">
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-bold text-gray-800 dark:text-white">Feature</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-bold text-gray-800 dark:text-white">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-semibold">🏥 Professional Referrals</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-600 dark:text-gray-300">Connect with qualified medical professionals and specialists</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-semibold">🏢 Treatment Centers</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-600 dark:text-gray-300">Recommendations for appropriate rehabilitation and treatment facilities</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-semibold">👩‍⚕️ Specialist Matching</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-600 dark:text-gray-300">AI-powered matching with appropriate counselors and therapists</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-semibold">📍 Location-Based</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-600 dark:text-gray-300">Find professional resources near your location</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-semibold">📱 Easy Access</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-600 dark:text-gray-300">Simple interface accessible on any device</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-semibold">🔒 Privacy Focused</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-600 dark:text-gray-300">Confidential consultation and referral process</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Important Medical Disclaimer</h2>
              <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong>Uday.AI provides referrals to professional resources and is not a substitute for professional medical treatment.</strong> 
                  This AI-powered tool connects users with qualified professionals, treatment centers, and specialists. 
                  It does not provide medical advice, treatment schedules, or recovery plans. 
                  Always consult with qualified healthcare professionals for medical guidance and treatment decisions.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-2xl shadow-lg p-6 text-center">
              <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
                <span className="mr-3">🌅</span> Connect with Professional Help Today
              </h2>
              <p className="text-lg mb-4">
                Every sunrise brings new hope and the opportunity to connect with professional support. Let Uday.AI help you find the right resources for your recovery journey.
              </p>
              <div className="text-center">
                <Link to="/uday-ai-planner">
                  <Button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 text-lg font-bold">
                    🌅 Find Professional Help
                  </Button>
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-orange-500 text-white rounded-2xl shadow-lg p-6 text-center">
              <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
                <span className="mr-3">✨</span> Professional Support Awaits
              </h2>
              <p className="text-lg mb-4">Recovery is a journey that requires professional guidance and support.</p>
              <p className="text-lg mb-4">Take the first step towards healing by connecting with qualified professionals who understand your path.</p>
              <div className="bg-white/10 p-4 rounded-lg">
                <p className="text-lg italic">"Every morning is a new opportunity to seek professional help and guidance."</p>
                <p className="text-sm mt-2">— Uday.AI Professional Referral System</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default UdayAI;
