
import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Search, BarChart, FileText, Users, Brain } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AboutShieldAI = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 font-poppins">
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
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="inline-block mb-6"
              >
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white text-4xl">
                  🛡️
                </div>
              </motion.div>
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                About <span className="text-blue-600">Shield.AI</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Advanced AI-powered risk assessment for drug prevention and early intervention
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <Card className="backdrop-blur-sm bg-white/90 shadow-xl border-0 rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600 flex items-center">
                    <Brain className="mr-3" />
                    How Shield.AI Works
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Shield.AI uses advanced behavioral analysis and machine learning algorithms to assess 
                    individual risk factors for substance abuse. Through a comprehensive questionnaire, 
                    it evaluates emotional, social, and environmental factors.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    The system provides personalized risk assessments and tailored prevention strategies 
                    to help individuals, families, and counselors take proactive steps against drug abuse.
                  </p>
                </CardContent>
              </Card>

              <div className="grid grid-cols-2 gap-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-blue-100 to-indigo-100 p-6 rounded-2xl text-center"
                >
                  <Search className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-bold text-gray-800">Risk Analysis</h3>
                  <p className="text-sm text-gray-600">Comprehensive behavioral assessment</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-indigo-100 to-purple-100 p-6 rounded-2xl text-center"
                >
                  <BarChart className="w-12 h-12 text-indigo-600 mx-auto mb-3" />
                  <h3 className="font-bold text-gray-800">Detailed Reports</h3>
                  <p className="text-sm text-gray-600">Professional assessment reports</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-purple-100 to-pink-100 p-6 rounded-2xl text-center"
                >
                  <FileText className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-bold text-gray-800">Prevention Tips</h3>
                  <p className="text-sm text-gray-600">Personalized prevention strategies</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-pink-100 to-red-100 p-6 rounded-2xl text-center"
                >
                  <Users className="w-12 h-12 text-pink-600 mx-auto mb-3" />
                  <h3 className="font-bold text-gray-800">Early Intervention</h3>
                  <p className="text-sm text-gray-600">Identify risks before problems start</p>
                </motion.div>
              </div>
            </div>

            <Card className="backdrop-blur-sm bg-white/90 shadow-xl border-0 rounded-2xl mb-12">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600">Assessment Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-blue-50 rounded-xl">
                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                      💭
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">Emotional Wellbeing</h4>
                    <p className="text-gray-600 text-sm">Stress levels, isolation, coping mechanisms</p>
                  </div>
                  <div className="text-center p-4 bg-indigo-50 rounded-xl">
                    <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                      👥
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">Social Environment</h4>
                    <p className="text-gray-600 text-sm">Peer influence, social pressures, support systems</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-xl">
                    <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                      🏘️
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">Environmental Factors</h4>
                    <p className="text-gray-600 text-sm">Accessibility, community exposure, safety</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <Button 
                onClick={() => navigate('/shield-ai-assessment')}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all"
              >
                <Shield className="mr-3" />
                Take Risk Assessment
              </Button>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutShieldAI;
