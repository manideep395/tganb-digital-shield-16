
import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sunrise, Calendar, Heart, Target, Clock, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AboutUdayAI = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 font-poppins">
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
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="inline-block mb-6"
              >
                <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center text-white text-4xl">
                  🌅
                </div>
              </motion.div>
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                About <span className="text-orange-600">Uday.AI</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Your personalized AI recovery companion for structured healing and daily motivation
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <Card className="backdrop-blur-sm bg-white/90 shadow-xl border-0 rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-orange-600 flex items-center">
                    <Heart className="mr-3" />
                    Recovery Journey Support
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Uday.AI is designed to support individuals in their recovery journey with personalized 
                    daily schedules, motivational content, and progress tracking. Each day brings new hope 
                    and structured support for sustainable recovery.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Through daily assessments and AI-generated plans, Uday.AI adapts to your needs, 
                    providing the right balance of structure, motivation, and flexibility for successful recovery.
                  </p>
                </CardContent>
              </Card>

              <div className="grid grid-cols-2 gap-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-orange-100 to-amber-100 p-6 rounded-2xl text-center"
                >
                  <Calendar className="w-12 h-12 text-orange-600 mx-auto mb-3" />
                  <h3 className="font-bold text-gray-800">Daily Planning</h3>
                  <p className="text-sm text-gray-600">Structured recovery schedules</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-amber-100 to-yellow-100 p-6 rounded-2xl text-center"
                >
                  <Target className="w-12 h-12 text-amber-600 mx-auto mb-3" />
                  <h3 className="font-bold text-gray-800">Goal Setting</h3>
                  <p className="text-sm text-gray-600">Personalized recovery targets</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-yellow-100 to-lime-100 p-6 rounded-2xl text-center"
                >
                  <Clock className="w-12 h-12 text-yellow-600 mx-auto mb-3" />
                  <h3 className="font-bold text-gray-800">Progress Tracking</h3>
                  <p className="text-sm text-gray-600">Monitor your journey</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-lime-100 to-green-100 p-6 rounded-2xl text-center"
                >
                  <Star className="w-12 h-12 text-lime-600 mx-auto mb-3" />
                  <h3 className="font-bold text-gray-800">Motivation</h3>
                  <p className="text-sm text-gray-600">Daily inspiration and support</p>
                </motion.div>
              </div>
            </div>

            <Card className="backdrop-blur-sm bg-white/90 shadow-xl border-0 rounded-2xl mb-12">
              <CardHeader>
                <CardTitle className="text-2xl text-orange-600">Daily Recovery Components</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Morning Routine</h4>
                        <p className="text-gray-600 text-sm">Structured start with meditation and goal setting</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Wellness Activities</h4>
                        <p className="text-gray-600 text-sm">Physical exercise and mental health practices</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Social Connection</h4>
                        <p className="text-gray-600 text-sm">Building healthy relationships and support networks</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-lime-500 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Skill Development</h4>
                        <p className="text-gray-600 text-sm">Learning new coping strategies and life skills</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Evening Reflection</h4>
                        <p className="text-gray-600 text-sm">Daily progress review and gratitude practice</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Crisis Support</h4>
                        <p className="text-gray-600 text-sm">24/7 access to emergency resources and guidance</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <Button 
                onClick={() => navigate('/uday-ai-planner')}
                className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all"
              >
                <Sunrise className="mr-3" />
                Start Your Recovery Plan
              </Button>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutUdayAI;
