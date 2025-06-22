import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';

const SahayAI = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 font-poppins">
      <Header />
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              About <span className="text-green-600">Sahay.AI</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              An AI-Powered Assistant by TG ANB for Drug Awareness & Support
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                <span className="mr-3">🧠</span> What is Sahay.AI?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-6">
                Sahay.AI is a smart, multilingual AI chatbot developed by the Telangana Anti-Narcotics Bureau (TG ANB) under the visionary initiative T-RISING.AI. It is designed to serve as a digital companion for individuals seeking awareness, support, and assistance related to drug abuse, prevention, and recovery.
              </p>
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  <span className="font-bold">"Sahay" (సహాయ్)</span> means Help or Support in Telugu and Hindi — reflecting the chatbot's mission to provide non-judgmental, accessible, and confidential support to citizens across Telangana, especially youth.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                <span className="mr-3">🎯</span> Purpose of Sahay.AI
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-6">
                Sahay.AI was built to bridge the gap between information and action in the fight against narcotics. It aims to:
              </p>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Raise awareness about the dangers and consequences of drug use</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Provide instant, AI-driven guidance and answers</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Connect individuals to official support systems, helplines, and rehab centers</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Assist students, parents, educators, and field officers in spreading anti-drug literacy</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                <span className="mr-3">🔹</span> Key Features of Sahay.AI
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                  <thead>
                    <tr className="bg-green-50 dark:bg-green-900/20">
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-bold text-gray-800 dark:text-white">Feature</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-bold text-gray-800 dark:text-white">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-semibold">🗣️ Multilingual Support</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-600 dark:text-gray-300">Supports English, Telugu, and Hindi, ensuring accessibility across Telangana</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-semibold">🤖 AI Chat-Based Interface</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-600 dark:text-gray-300">Users can freely ask questions related to drugs, addiction, symptoms, laws, or mental health</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-semibold">🕒 Available 24x7</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-600 dark:text-gray-300">Operates round the clock with instant responses</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-semibold">🧾 Anonymous & Secure</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-600 dark:text-gray-300">No personal data is collected unless explicitly consented</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-semibold">🏥 Resource Guidance</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-600 dark:text-gray-300">Provides verified information on rehabilitation centers, TG ANB helplines, and emergency contacts</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-semibold">🎓 Youth-Focused Design</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-600 dark:text-gray-300">Specially crafted prompts for students, teenagers, and college-goers</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-semibold">🔍 Keyword Intelligence</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-600 dark:text-gray-300">Recognizes slang or local terms related to drugs and offers accurate support</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-semibold">🧘 Motivational Content</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-600 dark:text-gray-300">Offers motivational quotes, mental health support, and positivity boosters</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                <span className="mr-3">🛡️</span> Who Can Use Sahay.AI?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">👨‍🎓</span>
                  <span className="text-gray-600 dark:text-gray-300">Students (high school, college)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">👪</span>
                  <span className="text-gray-600 dark:text-gray-300">Parents and guardians</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🧑‍🏫</span>
                  <span className="text-gray-600 dark:text-gray-300">Teachers and educators</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">👮‍♂️</span>
                  <span className="text-gray-600 dark:text-gray-300">Law enforcement and TG ANB field staff</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🏥</span>
                  <span className="text-gray-600 dark:text-gray-300">Health and rehab professionals</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🙍‍♂️</span>
                  <span className="text-gray-600 dark:text-gray-300">At-risk individuals and those seeking recovery</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                <span className="mr-3">🧭</span> How to Access Sahay.AI
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-4">
                Sahay.AI is accessible:
              </p>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300 mb-6">
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Through the official TG ANB website</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 mt-1">•</span>
                  <span>As part of the T-RISING.AI web suite</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Via mobile-optimized browsers (PWA version coming soon)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 mt-1">•</span>
                  <span>No app installation needed</span>
                </li>
              </ul>
              <div className="text-center">
                <Button 
                  onClick={() => window.location.href = '/sahay-ai-chat'}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg"
                >
                  💬 Chat with Sahay.AI
                </Button>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                <span className="mr-3">🔒</span> Privacy First
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                Sahay.AI does not store any personal data or identity information unless a user voluntarily chooses to share it. All conversations are encrypted and handled with strict confidentiality, in alignment with government data protection guidelines.
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl shadow-lg p-8 text-center">
              <h2 className="text-3xl font-bold mb-6 flex items-center justify-center">
                <span className="mr-3">🏛️</span> Built By TG ANB – Powered by Compassion & Intelligence
              </h2>
              <p className="text-lg mb-4">
                Sahay.AI is not just a chatbot—it's a symbol of technological compassion. Built by the Telangana Anti-Narcotics Bureau (TG ANB), Sahay.AI represents the use of cutting-edge AI for social good, public safety, and citizen well-being.
              </p>
              <div className="bg-white/10 p-6 rounded-lg mt-6">
                <h3 className="text-xl font-bold mb-4">🧩 Part of the T-RISING.AI Ecosystem</h3>
                <p className="mb-4">Sahay.AI is one of the three key AI systems built under T-RISING.AI:</p>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="bg-white/10 p-3 rounded">
                    <p className="font-bold">Sahay.AI</p>
                    <p>Chat-based awareness & support assistant</p>
                  </div>
                  <div className="bg-white/10 p-3 rounded">
                    <p className="font-bold">Shield.AI</p>
                    <p>Risk-based drug prevention tips generator</p>
                  </div>
                  <div className="bg-white/10 p-3 rounded">
                    <p className="font-bold">Uday.AI</p>
                    <p>AI recovery planner & daily support tool</p>
                  </div>
                </div>
                <p className="mt-4">Together, these tools offer a holistic AI-powered ecosystem for a drug-free Telangana.</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-2xl shadow-lg p-8 text-center">
              <h2 className="text-3xl font-bold mb-6 flex items-center justify-center">
                <span className="mr-3">📢</span> Join the Movement
              </h2>
              <p className="text-xl mb-4">With Sahay.AI, help is just a message away.</p>
              <p className="text-lg mb-2">Start the conversation. Empower yourself. Rise above addiction.</p>
              <div className="bg-white/10 p-6 rounded-lg mt-6">
                <p className="text-lg italic">"A safer society begins with one informed conversation."</p>
                <p className="text-sm mt-2">— Telangana Anti-Narcotics Bureau</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SahayAI;
