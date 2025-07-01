
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const UdayAI = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 font-poppins">
      <Header />
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              About <span className="text-orange-600">Uday.AI</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              AI-Powered Recovery & Rehabilitation Companion by TG ANB
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                <span className="mr-3">🌅</span> What is Uday.AI?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-6">
                Uday.AI is a compassionate, AI-driven recovery and rehabilitation companion developed by the Telangana Anti-Narcotics Bureau (TG ANB) as part of the T-RISING.AI ecosystem. The name "Uday" means "sunrise" or "dawn" in Sanskrit, symbolizing hope, new beginnings, and the daily opportunity to rise above addiction.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                This intelligent system is designed to support individuals on their recovery journey by providing personalized daily schedules, motivational guidance, and practical recovery strategies tailored to each person's unique situation and progress.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                <span className="mr-3">🎯</span> Purpose of Uday.AI
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-6">
                Uday.AI's mission is to provide comprehensive support throughout the recovery process by:
              </p>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start space-x-3">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Creating personalized daily recovery schedules based on individual needs and progress</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Offering motivational support and encouragement during difficult moments</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Providing practical coping strategies for managing cravings and triggers</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Supporting family members and caregivers in understanding the recovery process</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Connecting users with professional resources when additional help is needed</span>
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
                    <h3 className="font-bold text-gray-800 dark:text-white mb-2">Daily Assessment</h3>
                    <p className="text-gray-600 dark:text-gray-300">Users complete a brief daily questionnaire about their mood, energy, challenges, and goals</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 dark:bg-orange-900/30 rounded-full w-8 h-8 flex items-center justify-center font-bold text-orange-600 dark:text-orange-400 flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-bold text-gray-800 dark:text-white mb-2">AI Analysis</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">The AI analyzes patterns across:</p>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 ml-4">
                      <li>Emotional state and mood patterns</li>
                      <li>Physical wellness indicators</li>
                      <li>Recovery goals and progress</li>
                      <li>Environmental and social factors</li>
                      <li>Past recovery attempts and successes</li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 dark:bg-orange-900/30 rounded-full w-8 h-8 flex items-center justify-center font-bold text-orange-600 dark:text-orange-400 flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-bold text-gray-800 dark:text-white mb-2">Personalized Recovery Plan</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">Based on the assessment, Uday.AI generates:</p>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 ml-4">
                      <li>Structured daily schedules (morning, afternoon, evening)</li>
                      <li>Specific activities tailored to current needs</li>
                      <li>Motivational messages and affirmations</li>
                      <li>Coping strategies for challenging moments</li>
                      <li>Progress tracking and celebration of milestones</li>
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
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-semibold">🌅 Daily Recovery Plans</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-600 dark:text-gray-300">Personalized schedules with morning, afternoon, and evening activities</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-semibold">💪 Motivational Support</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-600 dark:text-gray-300">AI-generated encouragement and positive affirmations</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-semibold">📊 Progress Tracking</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-600 dark:text-gray-300">Monitor recovery milestones and celebrate achievements</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-semibold">🎯 Personalized Activities</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-600 dark:text-gray-300">Activities tailored to individual needs, interests, and recovery stage</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-semibold">📱 Mobile-Friendly Interface</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-600 dark:text-gray-300">Easy-to-use interface accessible on any device</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-semibold">🔒 Complete Privacy</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-600 dark:text-gray-300">Anonymous and confidential - no personal data stored</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                <span className="mr-3">👥</span> Who Can Benefit from Uday.AI?
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🙋‍♂️</span>
                  <span className="text-gray-600 dark:text-gray-300">Individuals in early recovery</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🏥</span>
                  <span className="text-gray-600 dark:text-gray-300">People undergoing rehabilitation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">👨‍👩‍👧‍👦</span>
                  <span className="text-gray-600 dark:text-gray-300">Family members and supporters</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">👩‍⚕️</span>
                  <span className="text-gray-600 dark:text-gray-300">Counselors and therapists</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🤝</span>
                  <span className="text-gray-600 dark:text-gray-300">Support group facilitators</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">👮</span>
                  <span className="text-gray-600 dark:text-gray-300">TG ANB field officers</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Important Medical Disclaimer</h2>
              <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong>Uday.AI provides supportive guidance and is not a substitute for professional medical treatment.</strong> 
                  This AI-powered tool offers natural recovery tips and motivational support based on user inputs. 
                  It is designed to complement, not replace, professional addiction treatment, therapy, or medical care. 
                  If you are experiencing severe withdrawal symptoms, mental health crises, or other critical situations, 
                  please seek immediate help from qualified healthcare professionals or visit a rehabilitation center.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-2xl shadow-lg p-8 text-center">
              <h2 className="text-3xl font-bold mb-6 flex items-center justify-center">
                <span className="mr-3">🌅</span> Start Your Recovery Journey Today
              </h2>
              <p className="text-lg mb-6">
                Every sunrise brings new hope and the opportunity to grow stronger. Let Uday.AI be your companion 
                on the path to healing and recovery.
              </p>
              <div className="text-center">
                <Link to="/uday-ai-planner">
                  <Button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 text-lg font-bold">
                    🌅 Create My Recovery Plan
                  </Button>
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-orange-500 text-white rounded-2xl shadow-lg p-8 text-center">
              <h2 className="text-3xl font-bold mb-6 flex items-center justify-center">
                <span className="mr-3">✨</span> Rise Every Day Stronger
              </h2>
              <p className="text-lg mb-4">Recovery is a journey of courage, hope, and daily commitment.</p>
              <p className="text-lg mb-6">Take the first step towards healing with personalized AI guidance that understands your unique path.</p>
              <div className="bg-white/10 p-6 rounded-lg">
                <p className="text-lg italic">"Every morning is a new opportunity to choose recovery, growth, and hope."</p>
                <p className="text-sm mt-2">— Uday.AI Recovery Companion</p>
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
