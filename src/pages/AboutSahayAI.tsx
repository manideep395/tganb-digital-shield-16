
import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, Heart, Shield, Clock, Users, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AboutSahayAI = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 font-poppins">
      <Header />
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block mb-6"
              >
                <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white text-4xl">
                  🤝
                </div>
              </motion.div>
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                About <span className="text-green-600">Sahay.AI</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Your compassionate AI counselor providing 24/7 multilingual support and guidance
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <Card className="backdrop-blur-sm bg-white/90 shadow-xl border-0 rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-green-600 flex items-center">
                    <Heart className="mr-3" />
                    Mission & Purpose
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Sahay.AI is designed to be your trusted digital companion in the fight against substance abuse. 
                    Built with empathy and intelligence, it provides immediate support, guidance, and resources 
                    when you need them most.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Whether you're seeking information, struggling with cravings, or need someone to talk to, 
                    Sahay.AI is available 24/7 to provide compassionate assistance in your preferred language.
                  </p>
                </CardContent>
              </Card>

              <div className="grid grid-cols-2 gap-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-green-100 to-emerald-100 p-6 rounded-2xl text-center"
                >
                  <Clock className="w-12 h-12 text-green-600 mx-auto mb-3" />
                  <h3 className="font-bold text-gray-800">24/7 Available</h3>
                  <p className="text-sm text-gray-600">Always here when you need support</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-emerald-100 to-teal-100 p-6 rounded-2xl text-center"
                >
                  <Globe className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                  <h3 className="font-bold text-gray-800">Multilingual</h3>
                  <p className="text-sm text-gray-600">English, Telugu, Hindi support</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-teal-100 to-cyan-100 p-6 rounded-2xl text-center"
                >
                  <Shield className="w-12 h-12 text-teal-600 mx-auto mb-3" />
                  <h3 className="font-bold text-gray-800">Anonymous</h3>
                  <p className="text-sm text-gray-600">Complete privacy protection</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-cyan-100 to-blue-100 p-6 rounded-2xl text-center"
                >
                  <Users className="w-12 h-12 text-cyan-600 mx-auto mb-3" />
                  <h3 className="font-bold text-gray-800">Expert Guidance</h3>
                  <p className="text-sm text-gray-600">Professional counseling support</p>
                </motion.div>
              </div>
            </div>

            <Card className="backdrop-blur-sm bg-white/90 shadow-xl border-0 rounded-2xl mb-12">
              <CardHeader>
                <CardTitle className="text-2xl text-green-600">Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Crisis Intervention</h4>
                        <p className="text-gray-600 text-sm">Immediate support during critical moments</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Resource Directory</h4>
                        <p className="text-gray-600 text-sm">Connects you to rehabilitation centers and helplines</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Educational Content</h4>
                        <p className="text-gray-600 text-sm">Learn about drug effects and coping strategies</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Emotional Support</h4>
                        <p className="text-gray-600 text-sm">Compassionate conversations when you need them</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <Button 
                onClick={() => navigate('/sahay-ai-chat')}
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all"
              >
                <MessageCircle className="mr-3" />
                Start Chatting with Sahay.AI
              </Button>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutSahayAI;
