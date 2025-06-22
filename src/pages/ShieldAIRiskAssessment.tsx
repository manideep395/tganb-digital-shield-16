
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Shield, Download, User, MapPin, Calendar, Clock } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import jsPDF from 'jspdf';
import { generateAIPDF } from '../utils/pdfGenerator';

interface FormData {
  name: string;
  age: string;
  location: string;
  phone: string;
}

const ShieldAIRiskAssessment = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    age: '',
    location: '',
    phone: ''
  });
  const [showPersonalInfo, setShowPersonalInfo] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, any>>({});
  const [showResults, setShowResults] = useState(false);
  const [riskScore, setRiskScore] = useState(0);
  const [riskLevel, setRiskLevel] = useState('');

  const questions = [
    {
      id: 1,
      category: "Emotional Wellbeing",
      question: "How often do you feel stressed or overwhelmed?",
      type: "scale",
      options: ["Never", "Rarely", "Sometimes", "Often", "Always"]
    },
    {
      id: 2,
      category: "Emotional Wellbeing", 
      question: "Do you often feel lonely or isolated?",
      type: "scale",
      options: ["Never", "Rarely", "Sometimes", "Often", "Always"]
    },
    {
      id: 3,
      category: "Peer Influence",
      question: "Have you ever been offered drugs by friends or acquaintances?",
      type: "radio",
      options: ["Never", "Once", "Few times", "Multiple times", "Regularly"]
    },
    {
      id: 4,
      category: "Peer Influence",
      question: "How would you describe your friend circle's attitude towards substances?",
      type: "radio", 
      options: ["Strongly against", "Generally avoid", "Mixed views", "Accepting", "Encouraging"]
    },
    {
      id: 5,
      category: "Environmental",
      question: "How easily accessible are drugs in your area?",
      type: "radio",
      options: ["Not accessible", "Rarely seen", "Sometimes visible", "Easily available", "Very common"]
    },
    {
      id: 6,
      category: "Environmental",
      question: "Have you witnessed drug use in your neighborhood?",
      type: "radio", 
      options: ["Never", "Rarely", "Occasionally", "Frequently", "Daily"]
    },
    {
      id: 7,
      category: "Behavioral",
      question: "How do you typically handle stress or difficult situations?",
      type: "checkbox",
      options: ["Talk to friends/family", "Exercise/sports", "Listen to music", "Avoid the situation", "Use substances", "Seek professional help"]
    },
    {
      id: 8,
      category: "Awareness",
      question: "How much do you know about the effects of different drugs?",
      type: "radio",
      options: ["Very knowledgeable", "Somewhat aware", "Basic knowledge", "Limited knowledge", "No knowledge"]
    }
  ];

  const handlePersonalInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.age && formData.location) {
      setShowPersonalInfo(false);
    }
  };

  const handleAnswer = (questionId: number, answer: any) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const calculateRisk = () => {
    let score = 0;
    Object.entries(answers).forEach(([questionId, answer]) => {
      const qId = parseInt(questionId);
      const question = questions.find(q => q.id === qId);
      
      if (question?.type === 'scale' || question?.type === 'radio') {
        const answerIndex = question.options.indexOf(answer);
        score += answerIndex * (100 / (question.options.length - 1));
      } else if (question?.type === 'checkbox' && Array.isArray(answer)) {
        if (answer.includes('Use substances')) score += 80;
        if (answer.includes('Avoid the situation')) score += 40;
        if (answer.includes('Talk to friends/family') || answer.includes('Seek professional help')) score -= 20;
      }
    });

    const avgScore = score / questions.length;
    setRiskScore(Math.round(avgScore));
    
    if (avgScore < 30) setRiskLevel('Low');
    else if (avgScore < 60) setRiskLevel('Moderate');
    else setRiskLevel('High');
    
    setShowResults(true);
  };

  const generatePDFReport = async () => {
    const detailedRecommendations = [
      "Build Strong Support Networks: Cultivate relationships with positive, supportive friends and family members who encourage healthy choices and provide emotional support during challenging times.",
      "Develop Healthy Coping Mechanisms: Learn and practice stress management techniques such as deep breathing, meditation, regular exercise, creative activities, or talking to trusted individuals.",
      "Increase Drug Awareness Education: Stay informed about the risks, effects, and consequences of different substances. Knowledge empowers better decision-making and helps recognize dangerous situations.",
      "Create Safe Environmental Boundaries: Identify and avoid high-risk locations, situations, or social groups where substance use is common or encouraged.",
      "Establish Clear Personal Goals: Set short-term and long-term objectives for your education, career, and personal growth to maintain focus and motivation.",
      "Practice Assertive Communication: Develop skills to confidently say 'no' to peer pressure and communicate your boundaries clearly without feeling guilty or isolated.",
      "Engage in Positive Activities: Participate in sports, hobbies, volunteering, or community activities that provide fulfillment and connect you with like-minded individuals.",
      "Monitor Mental Health: Pay attention to your emotional well-being and seek professional help if experiencing persistent sadness, anxiety, or other mental health concerns.",
      "Build Decision-Making Skills: Practice evaluating potential consequences before making choices, especially in social situations involving peer pressure.",
      "Maintain Open Communication: Keep honest dialogue with trusted adults, counselors, or family members who can provide guidance and support when needed."
    ];

    const riskAnalysis = [
      `Based on your assessment, your overall risk level is ${riskLevel} (${riskScore}%).`,
      "This evaluation considers multiple factors including emotional wellbeing, peer influence, environmental exposure, and behavioral patterns.",
      "Your responses indicate specific areas where focused prevention strategies can be most effective.",
      "Regular self-assessment and implementing personalized prevention strategies can significantly reduce risk factors over time."
    ];

    const config = {
      title: 'Shield.AI Risk Assessment Report',
      userDetails: formData,
      content: riskAnalysis,
      recommendations: detailedRecommendations,
      riskLevel,
      riskScore
    };

    try {
      const pdf = await generateAIPDF(config);
      pdf.save(`Shield_AI_Risk_Assessment_${formData.name.replace(/\s+/g, '_')}.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  if (showPersonalInfo) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <Header />
        <main className="py-8">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl mx-auto"
            >
              <div className="text-center mb-8">
                <div className="inline-block mb-4 relative">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center relative">
                    <Shield className="w-12 h-12 text-white" />
                    <img 
                      src="/lovable-uploads/cfe052e4-2276-4a1d-b6af-bc0ad7c3ccd4.png" 
                      alt="TG ANB Logo" 
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full"
                    />
                  </div>
                </div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  Shield.AI Risk Assessment
                </h1>
                <p className="text-xl text-gray-600">
                  Please provide your details to begin the assessment
                </p>
              </div>

              <Card className="backdrop-blur-sm bg-white/90 shadow-2xl border-0">
                <CardHeader>
                  <CardTitle className="text-center text-blue-600">Personal Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handlePersonalInfoSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="age">Age *</Label>
                        <Input
                          id="age"
                          type="number"
                          value={formData.age}
                          onChange={(e) => setFormData(prev => ({...prev, age: e.target.value}))}
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="location">Location/City *</Label>
                      <Input
                        id="location"
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData(prev => ({...prev, location: e.target.value}))}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({...prev, phone: e.target.value}))}
                        className="mt-1"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                      Begin Assessment
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <Header />
        <main className="py-8">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-4xl mx-auto"
            >
              <Card className="backdrop-blur-sm bg-white/90 shadow-2xl border-0">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl text-blue-600 mb-4">
                    Your Risk Assessment Report
                  </CardTitle>
                  <div className={`inline-flex items-center px-6 py-3 rounded-full text-white font-bold text-xl ${
                    riskLevel === 'High' ? 'bg-red-500' : 
                    riskLevel === 'Moderate' ? 'bg-orange-500' : 'bg-green-500'
                  }`}>
                    <div className="relative mr-2">
                      <Shield className="w-6 h-6" />
                      <img 
                        src="/lovable-uploads/cfe052e4-2276-4a1d-b6af-bc0ad7c3ccd4.png" 
                        alt="TG ANB Logo" 
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
                      />
                    </div>
                    {riskLevel} Risk ({riskScore}%)
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-gray-800">Assessment Summary</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Based on your responses, Shield.AI has analyzed your risk factors across emotional, 
                        social, and environmental categories. This assessment helps identify areas where 
                        you can strengthen your defenses against substance-related risks.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-gray-800">Personalized Tips</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start space-x-2">
                          <span className="text-blue-500 mt-1">•</span>
                          <span>Build strong, positive peer relationships</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-blue-500 mt-1">•</span>
                          <span>Develop healthy stress management techniques</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-blue-500 mt-1">•</span>
                          <span>Stay informed about drug risks and consequences</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="text-center pt-6 border-t">
                    <Button 
                      onClick={generatePDFReport}
                      className="bg-blue-600 hover:bg-blue-700 mr-4"
                    >
                      <Download className="mr-2" />
                      Download Report
                    </Button>
                    <Button 
                      onClick={() => window.location.reload()}
                      variant="outline"
                    >
                      Take Assessment Again
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Header />
      <main className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Risk Assessment Questionnaire</h1>
              <Progress value={(currentQuestion / questions.length) * 100} className="w-full max-w-md mx-auto" />
              <p className="mt-2 text-gray-600">Question {currentQuestion + 1} of {questions.length}</p>
            </div>

            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="mb-8"
            >
              <Card className="backdrop-blur-sm bg-white/90 shadow-xl border-0">
                <CardHeader>
                  <div className="text-sm text-blue-600 font-medium">
                    {questions[currentQuestion].category}
                  </div>
                  <CardTitle className="text-xl">
                    {questions[currentQuestion].question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {questions[currentQuestion].options.map((option, index) => (
                      <motion.div
                        key={option}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-blue-50 cursor-pointer transition-all"
                        onClick={() => handleAnswer(questions[currentQuestion].id, option)}
                      >
                        <input
                          type="radio"
                          name={`question-${questions[currentQuestion].id}`}
                          value={option}
                          checked={answers[questions[currentQuestion].id] === option}
                          onChange={() => handleAnswer(questions[currentQuestion].id, option)}
                          className="text-blue-600"
                        />
                        <label className="flex-1 cursor-pointer">{option}</label>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <div className="flex justify-between">
              <Button
                onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                disabled={currentQuestion === 0}
                variant="outline"
              >
                Previous
              </Button>
              
              {currentQuestion === questions.length - 1 ? (
                <Button
                  onClick={calculateRisk}
                  disabled={!answers[questions[currentQuestion].id]}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Generate Report
                </Button>
              ) : (
                <Button
                  onClick={() => setCurrentQuestion(currentQuestion + 1)}
                  disabled={!answers[questions[currentQuestion].id]}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Next
                </Button>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ShieldAIRiskAssessment;
