
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';

const UdayAI = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 font-poppins">
      <Header />
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              About <span className="text-purple-600">Uday.AI</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              A Personalized Recovery Planner by TG ANB for a Brighter Tomorrow
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                <span className="mr-3">🔍</span> What is Uday.AI?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-6">
                Uday.AI is an advanced AI-powered recovery support system developed by the Telangana Anti-Narcotics Bureau (TG ANB) as part of the T-RISING.AI initiative. Named after the Sanskrit word "Uday" (ఉదయ్ / उदय) meaning "rise" or "new beginning", Uday.AI is designed to guide individuals through the complex journey of drug recovery with compassion, structure, and intelligent daily planning.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                It serves as a personal digital recovery coach, generating day-to-day schedules, wellness tips, mental health reflections, and relapse prevention strategies tailored to each user's progress and emotional state.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                <span className="mr-3">🎯</span> Purpose of Uday.AI
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-6">
                Uday.AI aims to support and sustain the recovery process by:
              </p>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start space-x-3">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>Providing AI-generated recovery routines and lifestyle adjustments</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>Reducing chances of relapse through timely and contextual advice</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>Supporting rehabilitation centers, NGOs, and families with guided assistance</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>Promoting emotional resilience, mental strength, and positive habits</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>Creating a bridge between technology and healing</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                <span className="mr-3">🧠</span> How Does Uday.AI Work?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 dark:bg-purple-900/30 rounded-full w-8 h-8 flex items-center justify-center font-bold text-purple-600 dark:text-purple-400 flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-bold text-gray-800 dark:text-white mb-2">Daily Input Questionnaire</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">The user answers a brief daily input questionnaire:</p>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 ml-4">
                      <li>Mood</li>
                      <li>Energy level</li>
                      <li>Cravings or stress levels</li>
                      <li>Sleep quality</li>
                      <li>Social or environmental triggers</li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 dark:bg-purple-900/30 rounded-full w-8 h-8 flex items-center justify-center font-bold text-purple-600 dark:text-purple-400 flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-bold text-gray-800 dark:text-white mb-2">AI-Generated Planning</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">Based on the input, Uday.AI generates:</p>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 ml-4">
                      <li>A personalized day plan (morning to night)</li>
                      <li>Recovery tasks (hydration, meditation, journaling, rehab goals)</li>
                      <li>Motivational content, mental health support, and tips</li>
                      <li>Optional weekly summary for a counselor or support system</li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 dark:bg-purple-900/30 rounded-full w-8 h-8 flex items-center justify-center font-bold text-purple-600 dark:text-purple-400 flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-bold text-gray-800 dark:text-white mb-2">Adaptive Learning</h3>
                    <p className="text-gray-600 dark:text-gray-300">Recovery tips evolve over time as the system learns the user's emotional and behavioral patterns.</p>
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
                    <tr className="bg-purple-50 dark:bg-purple-900/20">
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-bold text-gray-800 dark:text-white">Feature</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-bold text-gray-800 dark:text-white">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-semibold">📅 AI-Powered Daily Planner</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-600 dark:text-gray-300">Generates morning-to-night schedule with mental, physical, and emotional tasks</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-semibold">🧘 Holistic Wellness Tips</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-600 dark:text-gray-300">Focuses on mindfulness, meditation, hydration, and social connection</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-semibold">🔁 Dynamic Adjustment</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-600 dark:text-gray-300">Adapts plans based on mood and daily feedback</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-semibold">📈 Recovery Progress Tracker</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-600 dark:text-gray-300">Optional weekly logs and motivational badges</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-semibold">🧠 Cognitive Behavioral Insights</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-600 dark:text-gray-300">Offers guidance based on proven psychological strategies</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-semibold">🔒 Confidential and Offline Ready</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-600 dark:text-gray-300">Works anonymously; no login needed; offline-first (PWA compatible)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                <span className="mr-3">👥</span> Who is Uday.AI For?
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🧍‍♂️</span>
                  <span className="text-gray-600 dark:text-gray-300">Individuals in recovery</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🏥</span>
                  <span className="text-gray-600 dark:text-gray-300">Patients at rehab centers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">👨‍👩‍👧</span>
                  <span className="text-gray-600 dark:text-gray-300">Families of recovering individuals</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🧑‍⚕️</span>
                  <span className="text-gray-600 dark:text-gray-300">Counselors, de-addiction specialists</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">👮</span>
                  <span className="text-gray-600 dark:text-gray-300">TG ANB field units supporting victims of addiction</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                <span className="mr-3">🔐</span> Your Recovery, Your Privacy
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-4">
                Uday.AI is designed with zero tracking and 100% confidentiality.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                All user input is processed anonymously and never stored or shared unless the user opts to export a report for their therapist or rehab center.
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl shadow-lg p-8 text-center">
              <h2 className="text-3xl font-bold mb-6 flex items-center justify-center">
                <span className="mr-3">🛠️</span> Built by TG ANB — Technology for Healing
              </h2>
              <p className="text-lg mb-6">
                Uday.AI is a homegrown AI tool developed by the Telangana Anti-Narcotics Bureau with a singular vision:
              </p>
              <div className="bg-white/10 p-6 rounded-lg mb-6">
                <p className="text-xl font-bold">To help individuals not just survive addiction—but truly rise above it.</p>
              </div>
              <p className="text-lg">
                The system combines clinical psychology, behavioral science, and machine learning to offer personalized care, available 24x7, without stigma or shame.
              </p>
            </div>

            <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-2xl shadow-lg p-8 text-center">
              <h2 className="text-3xl font-bold mb-6 flex items-center justify-center">
                <span className="mr-3">🌈</span> Every Day is a New Uday
              </h2>
              <p className="text-lg mb-4">Recovery is not a one-time event — it's a journey.</p>
              <p className="text-lg mb-6">With Uday.AI by your side, every morning is a fresh opportunity to heal, grow, and rise.</p>
              <div className="bg-white/10 p-6 rounded-lg mb-6">
                <p className="text-lg italic">"Hope is the first step. Uday.AI helps with the rest."</p>
                <p className="text-sm mt-2">— Telangana Anti-Narcotics Bureau</p>
              </div>
              <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 text-lg font-bold">
                🔗 Start Using Uday.AI Now
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default UdayAI;
