
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Brain, Users, Lock, Target, Lightbulb } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutTRisingAI = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 font-poppins text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-8">
              <img 
                src="/lovable-uploads/cfe052e4-2276-4a1d-b6af-bc0ad7c3ccd4.png" 
                alt="TG ANB Logo" 
                className="h-20 w-20 rounded-full mr-6 border-4 border-white/30"
              />
              <div>
                <h1 className="text-5xl md:text-7xl font-bold mb-4">
                  T-<span className="text-yellow-400">RISING</span>.AI
                </h1>
                <p className="text-2xl md:text-3xl text-blue-200 mb-2">
                  Telangana's AI-Powered Platform
                </p>
                <p className="text-xl text-blue-300">
                  for Drug Awareness, Prevention, and Recovery
                </p>
              </div>
            </div>
          </motion.div>

          {/* T-RISING.AI Meaning */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold mb-6 text-yellow-400">T-RISING.AI stands for:</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-lg">
                  <div className="flex items-center space-x-3">
                    <Heart className="w-6 h-6 text-red-400" />
                    <span><strong>R</strong>ecovery</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Target className="w-6 h-6 text-orange-400" />
                    <span><strong>I</strong>ntervention</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-6 h-6 text-green-400" />
                    <span><strong>S</strong>upport</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Brain className="w-6 h-6 text-blue-400" />
                    <span><strong>I</strong>ntelligence</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Lightbulb className="w-6 h-6 text-yellow-400" />
                    <span><strong>N</strong>urturing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded flex items-center justify-center text-xs font-bold">🌅</div>
                    <span><strong>G</strong>rowth</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <Card className="bg-white/10 backdrop-blur-md border-white/20 mb-8">
              <CardContent className="p-8">
                <h2 className="text-4xl font-bold mb-6 flex items-center text-white">
                  <span className="mr-4">🌐</span> Introduction
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-white">
                  T-RISING.AI is an advanced, AI-powered digital initiative developed by the Telangana Anti-Narcotics Bureau (TG ANB) to create a safer, healthier, and drug-free society through the responsible use of Artificial Intelligence. This intelligent platform is designed to serve the citizens of Telangana—especially youth and vulnerable individuals—by offering 24x7 AI support, personalized prevention strategies, and structured recovery plans.
                </p>
                <p className="text-lg leading-relaxed text-white">
                  This initiative reflects TG ANB's commitment to technological innovation in public safety and citizen well-being.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-8">
                <h2 className="text-4xl font-bold mb-6 flex items-center text-white">
                  <span className="mr-4">🎯</span> Mission of T-RISING.AI
                </h2>
                <p className="text-lg leading-relaxed text-white">
                  To empower society with intelligent digital tools that provide real-time support in combating drug abuse, enabling timely prevention, and facilitating guided recovery journeys—strengthening the collective fight against narcotics in Telangana.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* 3 Pillars Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-8 text-white">
              🤖 The 3 Pillars of T-RISING.AI
            </h2>
            <p className="text-xl text-blue-200 max-w-4xl mx-auto">
              T-RISING.AI comprises three specialized AI models, each uniquely developed to address a specific stage of the anti-drug journey: Awareness, Prevention, and Recovery.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Sahay.AI */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="bg-gradient-to-br from-blue-800/30 to-blue-900/30 backdrop-blur-md border-blue-600/30 h-full">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-700 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">🤝</span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">Sahay.AI</h3>
                    <p className="text-lg font-semibold text-white">The AI Chat Companion</p>
                    <p className="text-sm italic text-white">Your digital friend, always ready to help.</p>
                  </div>
                  
                  <p className="text-white mb-6">
                    Sahay.AI is an empathetic, multilingual AI chatbot built to provide instant support, information, and guidance on drug-related queries, awareness tips, and rehabilitation options.
                  </p>

                  <div className="space-y-3 mb-6">
                    <h4 className="font-bold text-white">🔹 Key Features:</h4>
                    <ul className="space-y-2 text-sm text-white">
                      <li>• 24x7 anonymous assistance</li>
                      <li>• Conversational interface supporting English, Telugu, and Hindi</li>
                      <li>• Explains drug effects, legal consequences, and coping strategies</li>
                      <li>• Directs users to nearest rehabilitation centers and helplines</li>
                      <li>• Built for both public users and officers on field duty</li>
                    </ul>
                  </div>

                  <Button 
                    onClick={() => navigate('/sahay-ai-chat')}
                    className="w-full bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900"
                  >
                    Try Sahay.AI
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Shield.AI */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="bg-gradient-to-br from-blue-800/30 to-blue-900/30 backdrop-blur-md border-blue-600/30 h-full">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-700 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">🛡️</span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">Shield.AI</h3>
                    <p className="text-lg font-semibold text-white">AI-Based Drug Prevention Engine</p>
                    <p className="text-sm italic text-white">Stopping it before it starts.</p>
                  </div>
                  
                  <p className="text-white mb-6">
                    Shield.AI is a questionnaire-based prevention system powered by intelligent algorithms. It detects behavioral, environmental, and psychological risk factors to provide customized drug prevention tips.
                  </p>

                  <div className="space-y-3 mb-6">
                    <h4 className="font-bold text-white">🔹 Key Features:</h4>
                    <ul className="space-y-2 text-sm text-white">
                      <li>• Anonymous survey for students, youth, and at-risk individuals</li>
                      <li>• AI-generated prevention tips based on risk profile</li>
                      <li>• Early intervention flagging for parents or counselors (optional)</li>
                      <li>• Perfect for education institutions and awareness campaigns</li>
                    </ul>
                  </div>

                  <Button 
                    onClick={() => navigate('/shield-ai-assessment')}
                    className="w-full bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900"
                  >
                    Try Shield.AI
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Uday.AI */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Card className="bg-gradient-to-br from-blue-800/30 to-blue-900/30 backdrop-blur-md border-blue-600/30 h-full">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-700 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">🌅</span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">Uday.AI</h3>
                    <p className="text-lg font-semibold text-white">Personalized Recovery Planner</p>
                    <p className="text-sm italic text-white">A new dawn begins with every step.</p>
                  </div>
                  
                  <p className="text-white mb-6">
                    Uday.AI supports individuals already in recovery or rehabilitation. By collecting daily self-assessments and inputs, it generates a personalized daily schedule, mental health check-ins, and motivational support.
                  </p>

                  <div className="space-y-3 mb-6">
                    <h4 className="font-bold text-white">🔹 Key Features:</h4>
                    <ul className="space-y-2 text-sm text-white">
                      <li>• Daily planning for nutrition, hydration, therapy, and rest</li>
                      <li>• Personalized recovery tasks with reminders</li>
                      <li>• Emotional support content and mental tracking</li>
                      <li>• Works offline (in PWA) and integrates with rehab center monitoring</li>
                    </ul>
                  </div>

                  <Button 
                    onClick={() => navigate('/uday-ai-planner')}
                    className="w-full bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900"
                  >
                    Try Uday.AI
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Privacy & Ethics Section */}
      <section className="py-16 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-8">
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-8">
                <h2 className="text-4xl font-bold mb-6 flex items-center text-white">
                  <Lock className="mr-4 text-blue-400" />
                  Privacy & Data Ethics
                </h2>
                <p className="text-lg leading-relaxed text-white">
                  All tools under T-RISING.AI are designed with data privacy, user anonymity, and safety as top priorities. No user-identifiable information is stored without explicit consent. TG ANB ensures secure, encrypted handling of all AI interactions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-8">
                <h2 className="text-4xl font-bold mb-6 flex items-center text-white">
                  <span className="mr-4">🛠️</span> Developed By
                </h2>
                <p className="text-lg leading-relaxed text-white">
                  T-RISING.AI is proudly developed by the Telangana Anti-Narcotics Bureau (TG ANB), in collaboration with young technologists, student innovators, and social welfare departments—representing a synergy of technology, public service, and citizen engagement.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-8">
                <h2 className="text-4xl font-bold mb-6 flex items-center text-white">
                  <span className="mr-4">📍</span> Impact Goals
                </h2>
                <div className="grid md:grid-cols-2 gap-6 text-lg text-white">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">🌱</span>
                    <span>Reduce youth exposure to drugs through awareness & tech</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">🧠</span>
                    <span>Empower every citizen with free access to AI-based help</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">🛡️</span>
                    <span>Build an AI-supported frontline against narcotic threats in Telangana</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-gradient-to-r from-blue-600/20 to-blue-600/20 backdrop-blur-md border-blue-400/30">
              <CardContent className="p-12">
                <h2 className="text-5xl font-bold mb-8 flex items-center justify-center text-white">
                  <span className="mr-4">🌟</span> Join the Mission
                </h2>
                <div className="space-y-4 text-2xl font-bold mb-8 text-white">
                  <p>Together, let's rise above drugs.</p>
                  <p>Together, let's rise with T-RISING.AI.</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8">
                  <p className="text-2xl italic mb-4 text-white">
                    "Technology for Prevention. Intelligence for Recovery. Support for All."
                  </p>
                  <p className="text-lg font-semibold text-white">
                    — Telangana Anti-Narcotics Bureau
                  </p>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                  <Button 
                    onClick={() => navigate('/about-rising-ai')}
                    className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 px-8 py-4 text-lg"
                  >
                    Explore All AI Tools
                  </Button>
                  <Button 
                    onClick={() => navigate('/contact')}
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg"
                  >
                    Contact Us
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutTRisingAI;
