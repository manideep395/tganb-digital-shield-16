
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutRisingAI = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 font-poppins">
      <Header />
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              About <span className="text-blue-600">T-RISING.AI</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              Telangana's AI-Powered Platform for Drug Awareness, Prevention, and Recovery
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                <span className="mr-3">🌐</span> Introduction
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-6">
                T-RISING.AI is an advanced, AI-powered digital initiative developed by the Telangana Anti-Narcotics Bureau (TG ANB) to create a safer, healthier, and drug-free society through the responsible use of Artificial Intelligence. This intelligent platform is designed to serve the citizens of Telangana—especially youth and vulnerable individuals—by offering 24x7 AI support, personalized prevention strategies, and structured recovery plans.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">T-RISING.AI stands for:</h3>
                <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">Recovery • Intervention • Support • Intelligence • Nurturing • Growth</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                <span className="mr-3">🎯</span> Mission of T-RISING.AI
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-4">
                To empower society with intelligent digital tools that provide real-time support in combating drug abuse, enabling timely prevention, and facilitating guided recovery journeys—strengthening the collective fight against narcotics in Telangana.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                This initiative reflects TG ANB's commitment to technological innovation in public safety and citizen well-being.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 flex items-center">
                <span className="mr-3">🤖</span> The 3 Pillars of T-RISING.AI
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-8">
                T-RISING.AI comprises three specialized AI models, each uniquely developed to address a specific stage of the anti-drug journey: Awareness, Prevention, and Recovery.
              </p>

              <div className="grid md:grid-cols-1 gap-8">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                    1️⃣ Sahay.AI – The AI Chat Companion
                  </h3>
                  <p className="text-lg font-semibold text-green-600 dark:text-green-400 mb-4">Your digital friend, always ready to help.</p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    Sahay.AI is an empathetic, multilingual AI chatbot built to provide instant support, information, and guidance on drug-related queries, awareness tips, and rehabilitation options.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-bold text-gray-800 dark:text-white">🔹 Key Features:</h4>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                      <li>24x7 anonymous assistance</li>
                      <li>Conversational interface supporting English, Telugu, and Hindi</li>
                      <li>Explains drug effects, legal consequences, and coping strategies</li>
                      <li>Directs users to nearest rehabilitation centers and helplines</li>
                      <li>Built for both public users and officers on field duty</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                    2️⃣ Shield.AI – AI-Based Drug Prevention Engine
                  </h3>
                  <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-4">Stopping it before it starts.</p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    Shield.AI is a questionnaire-based prevention system powered by intelligent algorithms. It detects behavioral, environmental, and psychological risk factors to provide customized drug prevention tips.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-bold text-gray-800 dark:text-white">🔹 Key Features:</h4>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                      <li>Anonymous survey for students, youth, and at-risk individuals</li>
                      <li>AI-generated prevention tips based on risk profile</li>
                      <li>Early intervention flagging for parents or counselors (optional)</li>
                      <li>Perfect for education institutions and awareness campaigns</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                    3️⃣ Uday.AI – Personalized Recovery Planner
                  </h3>
                  <p className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-4">A new dawn begins with every step.</p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    Uday.AI supports individuals already in recovery or rehabilitation. By collecting daily self-assessments and inputs, it generates a personalized daily schedule, mental health check-ins, and motivational support.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-bold text-gray-800 dark:text-white">🔹 Key Features:</h4>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                      <li>Daily planning for nutrition, hydration, therapy, and rest</li>
                      <li>Personalized recovery tasks with reminders</li>
                      <li>Emotional support content and mental tracking</li>
                      <li>Works offline (in PWA) and integrates with rehab center monitoring</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                <span className="mr-3">🔒</span> Privacy & Data Ethics
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                All tools under T-RISING.AI are designed with data privacy, user anonymity, and safety as top priorities. No user-identifiable information is stored without explicit consent. TG ANB ensures secure, encrypted handling of all AI interactions.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                <span className="mr-3">🛠️</span> Developed By
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                T-RISING.AI is proudly developed by the Telangana Anti-Narcotics Bureau (TG ANB), in collaboration with young technologists, student innovators, and social welfare departments—representing a synergy of technology, public service, and citizen engagement.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                <span className="mr-3">📍</span> Impact Goals
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🌱</span>
                  <span className="text-gray-600 dark:text-gray-300">Reduce youth exposure to drugs through awareness & tech</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🧠</span>
                  <span className="text-gray-600 dark:text-gray-300">Empower every citizen with free access to AI-based help</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🛡️</span>
                  <span className="text-gray-600 dark:text-gray-300">Build an AI-supported frontline against narcotic threats in Telangana</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl shadow-lg p-8 text-center">
              <h2 className="text-3xl font-bold mb-6 flex items-center justify-center">
                <span className="mr-3">🌟</span> Join the Mission
              </h2>
              <p className="text-xl mb-4">Together, let's rise above drugs.</p>
              <p className="text-xl mb-6">Together, let's rise with T-RISING.AI.</p>
              <div className="bg-white/10 p-6 rounded-lg">
                <p className="text-lg italic">"Technology for Prevention. Intelligence for Recovery. Support for All."</p>
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

export default AboutRisingAI;
