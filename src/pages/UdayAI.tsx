
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
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                <span className="mr-3">🌅</span> What is Uday.AI?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-6">
                Uday.AI is a compassionate, AI-driven recovery support system developed by the Telangana Anti-Narcotics Bureau (TG ANB) as part of the T-RISING.AI ecosystem. The name "Uday" means "sunrise" or "dawn" in Sanskrit, symbolizing hope, new beginnings, and the opportunity to seek professional help for recovery.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                This intelligent system is designed to connect individuals with appropriate healthcare professionals, rehabilitation centers, and specialists based on their specific needs and situation.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                <span className="mr-3">🎯</span> Purpose of Uday.AI
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-6">
                Uday.AI's mission is to provide professional referrals and guidance by:
              </p>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start space-x-3">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Recommending appropriate rehabilitation centers based on individual needs</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Connecting users with qualified addiction specialists and counselors</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Providing contact information for nearby hospitals with addiction treatment facilities</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Offering guidance on which type of professional help is most suitable</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Supporting family members in finding the right resources for their loved ones</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                <span className="mr-3">🧠</span> How Does Uday.AI Work?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 dark:bg-orange-900/30 rounded-full w-8 h-8 flex items-center justify-center font-bold text-orange-600 dark:text-orange-400 flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-bold text-gray-800 dark:text-white mb-2">Assessment & Understanding</h3>
                    <p className="text-gray-600 dark:text-gray-300">Users share their situation, location, and specific needs through a simple conversation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 dark:bg-orange-900/30 rounded-full w-8 h-8 flex items-center justify-center font-bold text-orange-600 dark:text-orange-400 flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-bold text-gray-800 dark:text-white mb-2">AI Analysis & Matching</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">The AI analyzes the information to identify the most suitable professional help based on:</p>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 ml-4">
                      <li>Type and severity of addiction</li>
                      <li>Geographic location and accessibility</li>
                      <li>Preferred language and cultural considerations</li>
                      <li>Insurance coverage and financial situation</li>
                      <li>Previous treatment history (if any)</li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 dark:bg-orange-900/30 rounded-full w-8 h-8 flex items-center justify-center font-bold text-orange-600 dark:text-orange-400 flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-bold text-gray-800 dark:text-white mb-2">Professional Referrals</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">Based on the assessment, Uday.AI provides:</p>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 ml-4">
                      <li>Contact details of recommended rehabilitation centers</li>
                      <li>Information about qualified addiction specialists</li>
                      <li>Hospital details with addiction treatment departments</li>
                      <li>Counselor and therapist recommendations</li>
                      <li>Support group contacts in the local area</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
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
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-semibold">🏥 Rehabilitation Center Referrals</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-600 dark:text-gray-300">Find the best rehabilitation centers based on location and treatment type</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-semibold">👨‍⚕️ Specialist Connections</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-600 dark:text-gray-300">Connect with qualified addiction specialists and psychiatrists</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-semibold">🏨 Hospital Recommendations</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-600 dark:text-gray-300">Find nearby hospitals with addiction treatment facilities</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-semibold">📞 Contact Information</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-600 dark:text-gray-300">Get direct contact details, addresses, and appointment booking information</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-semibold">🌐 24/7 Availability</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-600 dark:text-gray-300">Access professional referrals anytime, anywhere</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-semibold">🔒 Complete Privacy</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-600 dark:text-gray-300">Anonymous consultations with confidential referrals</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Important Disclaimer</h2>
              <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong>Uday.AI is a referral and guidance system, not a treatment provider.</strong> 
                  This AI-powered tool connects you with qualified healthcare professionals and treatment facilities. 
                  It does not provide medical treatment, therapy, or create recovery schedules. All treatment decisions 
                  should be made in consultation with qualified healthcare professionals. If you are experiencing a 
                  medical emergency or crisis, please contact emergency services immediately or call our helpline at 1908.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-2xl shadow-lg p-8 text-center">
              <h2 className="text-3xl font-bold mb-6 flex items-center justify-center">
                <span className="mr-3">🌅</span> Get Professional Help Today
              </h2>
              <p className="text-lg mb-6">
                Take the first step towards recovery by connecting with qualified professionals who can guide your journey.
              </p>
              <div className="text-center">
                <Link to="/uday-ai-planner">
                  <Button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 text-lg font-bold">
                    🏥 Find Professional Help
                  </Button>
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-orange-500 text-white rounded-2xl shadow-lg p-8 text-center">
              <h2 className="text-3xl font-bold mb-6 flex items-center justify-center">
                <span className="mr-3">✨</span> Professional Support Available
              </h2>
              <p className="text-lg mb-4">Recovery is possible with the right professional guidance and support.</p>
              <p className="text-lg mb-6">Let Uday.AI connect you with qualified healthcare professionals in your area.</p>
              <div className="bg-white/10 p-6 rounded-lg">
                <p className="text-lg italic">"Recovery begins with reaching out to those who can help."</p>
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
