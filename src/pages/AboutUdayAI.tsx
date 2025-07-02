
import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sunrise, Heart, Target, Clock, Star, Users, Phone, MapPin } from 'lucide-react';
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
                Your AI-powered recovery consultation assistant that connects you with professional help and guidance
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <Card className="backdrop-blur-sm bg-white/90 shadow-xl border-0 rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-orange-600 flex items-center">
                    <Heart className="mr-3" />
                    Professional Recovery Guidance
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Uday.AI is designed to assess your recovery needs and connect you with appropriate professional 
                    resources. Rather than creating plans, it focuses on providing expert consultation recommendations 
                    and connecting you with qualified rehabilitation centers, counselors, and medical professionals.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Through intelligent assessment, Uday.AI evaluates your situation and provides immediate guidance 
                    on whom to consult, what type of professional help you need, and how to access the right resources for your recovery journey.
                  </p>
                </CardContent>
              </Card>

              <div className="grid grid-cols-2 gap-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-orange-100 to-amber-100 p-6 rounded-2xl text-center"
                >
                  <Users className="w-12 h-12 text-orange-600 mx-auto mb-3" />
                  <h3 className="font-bold text-gray-800">Expert Consultation</h3>
                  <p className="text-sm text-gray-600">Connect with professionals</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-amber-100 to-yellow-100 p-6 rounded-2xl text-center"
                >
                  <Target className="w-12 h-12 text-amber-600 mx-auto mb-3" />
                  <h3 className="font-bold text-gray-800">Risk Assessment</h3>
                  <p className="text-sm text-gray-600">Evaluate recovery needs</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-yellow-100 to-lime-100 p-6 rounded-2xl text-center"
                >
                  <MapPin className="w-12 h-12 text-yellow-600 mx-auto mb-3" />
                  <h3 className="font-bold text-gray-800">Center Referrals</h3>
                  <p className="text-sm text-gray-600">Find nearby facilities</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-lime-100 to-green-100 p-6 rounded-2xl text-center"
                >
                  <Phone className="w-12 h-12 text-lime-600 mx-auto mb-3" />
                  <h3 className="font-bold text-gray-800">Immediate Support</h3>
                  <p className="text-sm text-gray-600">24/7 consultation guidance</p>
                </motion.div>
              </div>
            </div>

            <Card className="backdrop-blur-sm bg-white/90 shadow-xl border-0 rounded-2xl mb-12">
              <CardHeader>
                <CardTitle className="text-2xl text-orange-600">How Uday.AI Helps You</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Instant Risk Assessment</h4>
                        <p className="text-gray-600 text-sm">AI evaluates your situation and determines the level of professional intervention needed</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Professional Matching</h4>
                        <p className="text-gray-600 text-sm">Connects you with appropriate specialists, counselors, and treatment centers</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Consultation Guidance</h4>
                        <p className="text-gray-600 text-sm">Provides specific advice on what questions to ask and what to expect</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-lime-500 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Resource Directory</h4>
                        <p className="text-gray-600 text-sm">Access to comprehensive database of rehabilitation centers and professionals</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Family Support Guidance</h4>
                        <p className="text-gray-600 text-sm">Advice for family members on how to support recovery journey</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Emergency Resources</h4>
                        <p className="text-gray-600 text-sm">Immediate access to crisis intervention and emergency support</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-sm bg-white/90 shadow-xl border-0 rounded-2xl mb-12">
              <CardHeader>
                <CardTitle className="text-2xl text-orange-600">Professional Consultation Areas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Medical Professionals</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Addiction Medicine Specialists</li>
                      <li>• Psychiatrists</li>
                      <li>• General Physicians</li>
                    </ul>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Counseling Services</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Licensed Counselors</li>
                      <li>• Family Therapists</li>
                      <li>• Group Therapy Leaders</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Treatment Centers</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Inpatient Facilities</li>
                      <li>• Outpatient Programs</li>
                      <li>• Specialized Clinics</li>
                    </ul>
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
                Get Professional Consultation Guidance
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
