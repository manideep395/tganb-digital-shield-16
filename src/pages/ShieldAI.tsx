
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';

const ShieldAI = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 font-poppins">
      <Header />
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              About <span className="text-blue-600">Shield.AI</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              AI-Driven Drug Prevention Engine by TG ANB
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                <span className="mr-3">🔍</span> What is Shield.AI?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-6">
                Shield.AI is an intelligent, questionnaire-based drug prevention system developed by the Telangana Anti-Narcotics Bureau (TG ANB) under the broader T-RISING.AI initiative. It is designed to act as a proactive digital shield—helping individuals assess their risk levels related to drug exposure and receive personalized tips to stay safe, aware, and drug-free.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                It empowers users with real-time prevention strategies, using AI algorithms that analyze behavioral, emotional, and social patterns—especially in students and young adults.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                <span className="mr-3">🎯</span> Purpose of Shield.AI
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-6">
                Shield.AI's mission is to prevent drug abuse before it starts by:
              </p>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start space-x-3">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Detecting early risk indicators through anonymous questionnaires</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Offering customized preventive advice and awareness tips</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Encouraging self-reflection among youth</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Supporting parents, educators, and institutions in identifying vulnerable individuals</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Enabling timely intervention and guidance without stigma</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                <span className="mr-3">🧠</span> How Does Shield.AI Work?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full w-8 h-8 flex items-center justify-center font-bold text-blue-600 dark:text-blue-400 flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-bold text-gray-800 dark:text-white mb-2">Simple Questionnaire</h3>
                    <p className="text-gray-600 dark:text-gray-300">The user answers a simple, confidential questionnaire (10–15 questions)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full w-8 h-8 flex items-center justify-center font-bold text-blue-600 dark:text-blue-400 flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-bold text-gray-800 dark:text-white mb-2">AI Analysis</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">The AI model analyzes patterns across:</p>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 ml-4">
                      <li>Peer influence</li>
                      <li>Emotional state</li>
                      <li>Family environment</li>
                      <li>Social behaviors</li>
                      <li>Curiosity or prior exposure</li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full w-8 h-8 flex items-center justify-center font-bold text-blue-600 dark:text-blue-400 flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-bold text-gray-800 dark:text-white mb-2">Personalized Results</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">Based on the profile, Shield.AI generates:</p>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 ml-4">
                      <li>A risk level score (Low, Moderate, High)</li>
                      <li>Tailored prevention tips</li>
                      <li>Optional recommendations for counseling or helpline support</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                <span className="mr-3">🔹</span> Key Features of Shield.AI
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                  <thead>
                    <tr className="bg-blue-50 dark:bg-blue-900/20">
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-bold text-gray-800 dark:text-white">Feature</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-bold text-gray-800 dark:text-white">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-semibold">🧪 Behavioral Risk Analysis</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-600 dark:text-gray-300">AI identifies early signs of curiosity, peer pressure, or emotional distress</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-semibold">🧠 Instant Prevention Tips</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-600 dark:text-gray-300">Offers personalized advice to stay away from harmful substances</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-semibold">📊 Risk-Level Report</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-600 dark:text-gray-300">Generates a clear and understandable score (Low / Moderate / High)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-semibold">👩‍🏫 Student & Youth Friendly</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-600 dark:text-gray-300">Designed for easy use in schools, colleges, and awareness campaigns</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-semibold">📱 Mobile-Optimized Interface</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-600 dark:text-gray-300">Works smoothly on smartphones and desktops without the need for installation</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-semibold">🔒 Anonymous & Private</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-600 dark:text-gray-300">No personal information is required; results are shown instantly without tracking</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                <span className="mr-3">👥</span> Who Can Use Shield.AI?
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🎓</span>
                  <span className="text-gray-600 dark:text-gray-300">School and college students</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">👪</span>
                  <span className="text-gray-600 dark:text-gray-300">Parents and guardians</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🧑‍🏫</span>
                  <span className="text-gray-600 dark:text-gray-300">Teachers, principals, and academic counselors</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">👮</span>
                  <span className="text-gray-600 dark:text-gray-300">Police officers and outreach workers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🏢</span>
                  <span className="text-gray-600 dark:text-gray-300">Corporate and hostel managements conducting awareness drives</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                <span className="mr-3">📍</span> Applications & Impact
              </h2>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start space-x-3">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Early identification of high-risk behavior without human bias</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Educational institutions can use it during orientation and anti-drug weeks</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Can assist TG ANB field units in community outreach programs</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Offers a data-driven foundation for awareness programs and policy planning (anonymous, aggregated data)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Confidentiality Commitment</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                Shield.AI is built with complete privacy and data safety in mind. No names, numbers, or personal identifiers are collected or stored. The tool is created to support, not monitor or penalize.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl shadow-lg p-8 text-center">
              <h2 className="text-3xl font-bold mb-6 flex items-center justify-center">
                <span className="mr-3">🛠️</span> Built by TG ANB for Preventive Public Safety
              </h2>
              <p className="text-lg mb-6">
                Developed entirely by the Telangana Anti-Narcotics Bureau (TG ANB), Shield.AI represents the next step in preventive public safety through AI technology. It combines law enforcement insight with machine learning to reach citizens before addiction begins.
              </p>
              <div className="text-center">
                <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-bold">
                  🔗 Launch Shield.AI Questionnaire Now
                </Button>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-2xl shadow-lg p-8 text-center">
              <h2 className="text-3xl font-bold mb-6 flex items-center justify-center">
                <span className="mr-3">✨</span> Take the First Step — Shield Yourself
              </h2>
              <p className="text-lg mb-4">Shield.AI helps you understand and prevent, not judge or label.</p>
              <p className="text-lg mb-6">Start the quick self-check now and receive free, confidential guidance that could change your future.</p>
              <div className="bg-white/10 p-6 rounded-lg">
                <p className="text-lg italic">"Prevention is not just a strategy—it's a responsibility."</p>
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

export default ShieldAI;
