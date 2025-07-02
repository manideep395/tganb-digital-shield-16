
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Brain, Users, Lock, Target, Lightbulb, MessageCircle, Shield, Sunrise } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutTRisingAI = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white font-poppins text-gray-900">
      <Header />
      
      {/* Hero Section - Compact */}
      <section className="py-8 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-4">
              <img 
                src="/uploads/cfe052e4-2276-4a1d-b6af-bc0ad7c3ccd4.png" 
                alt="TG ANB Logo" 
                className="h-12 w-12 rounded-full mr-3 border-2 border-blue-200"
              />
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-1">
                  T-<span className="text-orange-600">RISING</span>.AI
                </h1>
                <p className="text-lg text-blue-700">
                  Telangana's AI-Powered Anti-Drug Initiative
                </p>
              </div>
            </div>
          </motion.div>

          {/* T-RISING.AI Meaning - Compact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto mt-6"
          >
            <Card className="bg-white border border-blue-200 shadow-sm">
              <CardContent className="p-6 text-center">
                <h2 className="text-xl font-semibold mb-4 text-blue-900">T-RISING.AI Stands For:</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <Heart className="w-4 h-4 text-red-500" />
                    <span><strong>R</strong>ecovery</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Target className="w-4 h-4 text-orange-500" />
                    <span><strong>I</strong>ntervention</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-green-500" />
                    <span><strong>S</strong>upport</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Brain className="w-4 h-4 text-blue-500" />
                    <span><strong>I</strong>ntelligence</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Lightbulb className="w-4 h-4 text-yellow-500" />
                    <span><strong>N</strong>urturing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded flex items-center justify-center text-xs">🌅</div>
                    <span><strong>G</strong>rowth</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Introduction - Compact */}
      <section className="py-6 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="bg-white border border-gray-200 shadow-sm">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-3 flex items-center text-blue-900">
                  <span className="mr-3">🌐</span> Overview
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  T-RISING.AI is an advanced, AI-powered digital initiative by the Telangana Anti-Narcotics Bureau (TG ANB) to create a safer, drug-free society through responsible AI implementation. This platform provides 24×7 AI support, personalized prevention strategies, and structured recovery assistance for citizens of Telangana.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2 text-blue-900">Mission Statement</h3>
                  <p className="text-blue-800">
                    To empower society with intelligent digital tools that provide real-time support in combating drug abuse, enabling timely prevention, and facilitating guided recovery journeys.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Three AI Models - Compact Grid */}
      <section className="py-6">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6"
          >
            <h2 className="text-2xl font-semibold mb-2 text-blue-900">
              The 3 AI Solutions
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Three specialized AI models addressing Awareness, Prevention, and Recovery stages of anti-drug intervention.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {/* Sahay.AI */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="bg-white border border-green-200 hover:shadow-md transition-shadow h-full">
                <CardContent className="p-5 text-center h-full flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <MessageCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Sahay.AI</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      24×7 multilingual AI chatbot for instant drug awareness support and guidance.
                    </p>
                    <div className="text-xs text-gray-500 mb-4">
                      • Anonymous assistance<br/>
                      • Multi-language support<br/>
                      • Rehabilitation guidance
                    </div>
                  </div>
                  <Button 
                    onClick={() => navigate('/sahay-ai-chat')}
                    className="w-full bg-green-600 hover:bg-green-700 text-white text-sm py-2"
                  >
                    💬 Chat Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Shield.AI */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-white border border-blue-200 hover:shadow-md transition-shadow h-full">
                <CardContent className="p-5 text-center h-full flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Shield className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Shield.AI</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      AI-powered risk assessment system with personalized prevention recommendations.
                    </p>
                    <div className="text-xs text-gray-500 mb-4">
                      • Anonymous risk assessment<br/>
                      • Personalized prevention tips<br/>
                      • Early intervention alerts
                    </div>
                  </div>
                  <Button 
                    onClick={() => navigate('/shield-ai-assessment')}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm py-2"
                  >
                    🛡️ Take Assessment
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Uday.AI */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="bg-white border border-purple-200 hover:shadow-md transition-shadow h-full">
                <CardContent className="p-5 text-center h-full flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Sunrise className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Uday.AI</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Daily AI planner for recovery support and personalized rehabilitation assistance.
                    </p>
                    <div className="text-xs text-gray-500 mb-4">
                      • Daily recovery planning<br/>
                      • Mental health check-ins<br/>
                      • Motivational support
                    </div>
                  </div>
                  <Button 
                    onClick={() => navigate('/uday-ai-planner')}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white text-sm py-2"
                  >
                    🌅 Start Planning
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Privacy & Impact - Compact */}
      <section className="py-6 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="bg-white border border-gray-200 shadow-sm">
                <CardContent className="p-5">
                  <h3 className="text-lg font-semibold mb-3 flex items-center text-blue-900">
                    <Lock className="mr-2 text-blue-600" />
                    Privacy & Security
                  </h3>
                  <p className="text-sm text-gray-700">
                    All T-RISING.AI tools prioritize data privacy, user anonymity, and safety. No user-identifiable information is stored without explicit consent. TG ANB ensures secure, encrypted handling of all AI interactions.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-200 shadow-sm">
                <CardContent className="p-5">
                  <h3 className="text-lg font-semibold mb-3 text-blue-900">
                    <span className="mr-2">🎯</span> Impact Goals
                  </h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Reduce youth exposure to drugs through AI-powered awareness</li>
                    <li>• Provide free AI-based support to every citizen</li>
                    <li>• Build an AI-supported frontline against narcotic threats</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Compact */}
      <section className="py-6">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-none">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">
                  🌟 Join the T-RISING.AI Mission
                </h2>
                <p className="text-blue-100 mb-4 text-sm">
                  "Technology for Prevention. Intelligence for Recovery. Support for All."
                  <br/>
                  <span className="text-xs">— Telangana Anti-Narcotics Bureau</span>
                </p>
                
                <div className="flex flex-wrap justify-center gap-3">
                  <Button 
                    onClick={() => navigate('/about-rising-ai')}
                    className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-2 text-sm"
                  >
                    Explore All Tools
                  </Button>
                  <Button 
                    onClick={() => navigate('/contact')}
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-blue-600 px-6 py-2 text-sm"
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
