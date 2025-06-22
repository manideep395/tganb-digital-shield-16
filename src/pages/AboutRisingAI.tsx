
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, Shield, Sunrise } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutRisingAI = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 font-poppins overflow-hidden">
      <Header />
      
      {/* Main Content - Single Screen */}
      <main className="flex items-center justify-center min-h-screen py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <img 
                src="/lovable-uploads/cfe052e4-2276-4a1d-b6af-bc0ad7c3ccd4.png" 
                alt="TG ANB Logo" 
                className="h-16 w-16 rounded-full mr-4"
              />
              <div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
                  T-<span className="text-yellow-400">RISING</span>.AI
                </h1>
                <p className="text-xl md:text-2xl text-blue-200">
                  Telangana's AI Mission Against Drugs
                </p>
              </div>
            </div>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              Powered by Telangana Anti-Narcotics Bureau (TG ANB)
            </p>
          </motion.div>

          {/* Three AI Models Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Sahay.AI */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-full"
            >
              <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 h-full group">
                <CardContent className="p-8 text-center h-full flex flex-col justify-between">
                  <div>
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                      className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                      <MessageCircle className="w-10 h-10 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-4">Sahay.AI</h3>
                    <p className="text-blue-100 text-lg leading-relaxed mb-6">
                      Your 24x7 multilingual AI assistant for drug awareness and instant support.
                    </p>
                  </div>
                  <Button 
                    onClick={() => navigate('/sahay-ai-chat')}
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-6 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    💬 Chat Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Shield.AI */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-full"
            >
              <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 h-full group">
                <CardContent className="p-8 text-center h-full flex flex-col justify-between">
                  <div>
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                      className="w-20 h-20 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                      <Shield className="w-10 h-10 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-4">Shield.AI</h3>
                    <p className="text-blue-100 text-lg leading-relaxed mb-6">
                      Take a quick risk test and get AI-generated drug prevention tips.
                    </p>
                  </div>
                  <Button 
                    onClick={() => navigate('/shield-ai-assessment')}
                    className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-4 px-6 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    🛡️ Take Risk Test
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Uday.AI */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="h-full"
            >
              <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 h-full group">
                <CardContent className="p-8 text-center h-full flex flex-col justify-between">
                  <div>
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                      className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                      <Sunrise className="w-10 h-10 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-4">Uday.AI</h3>
                    <p className="text-blue-100 text-lg leading-relaxed mb-6">
                      Daily AI planner for recovery support and mental wellness guidance.
                    </p>
                  </div>
                  <Button 
                    onClick={() => navigate('/uday-ai-planner')}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-4 px-6 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    🌅 Plan Recovery
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Footer Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-center mb-3">
                <img 
                  src="/lovable-uploads/cfe052e4-2276-4a1d-b6af-bc0ad7c3ccd4.png" 
                  alt="TG ANB Logo" 
                  className="h-8 w-8 rounded-full mr-3"
                />
                <p className="text-white font-semibold">
                  Developed under T-RISING.AI by Telangana Anti-Narcotics Bureau
                </p>
              </div>
              <p className="text-blue-200 text-sm">
                Government of Telangana
              </p>
            </div>
          </motion.div>

          {/* Floating Background Elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-400/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-green-400/10 rounded-full blur-xl animate-pulse"></div>
        </div>
      </main>
    </div>
  );
};

export default AboutRisingAI;
