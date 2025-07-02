
import React, { useState } from 'react';
import { Shield, AlertTriangle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ShieldAIAssessmentPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    "How often do you encounter suspicious activities in your area?",
    "Have you noticed any unusual gatherings or meetings?",
    "Are there any abandoned or frequently visited locations that seem suspicious?",
    "Have you observed any unusual traffic patterns or vehicle activities?",
    "Do you feel safe in your neighborhood regarding drug-related activities?"
  ];

  const options = [
    ["Frequently", "Occasionally", "Rarely", "Never"],
    ["Yes, often", "Sometimes", "Rarely", "Never"],
    ["Yes, multiple", "Yes, one", "Not sure", "No"],
    ["Yes, very unusual", "Somewhat unusual", "Normal patterns", "Very quiet area"],
    ["Very unsafe", "Somewhat unsafe", "Neutral", "Safe", "Very safe"]
  ];

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const calculateRisk = () => {
    // Simple risk calculation based on answers
    const riskFactors = answers.filter(answer => 
      answer.includes('Frequently') || 
      answer.includes('often') || 
      answer.includes('multiple') || 
      answer.includes('unusual') ||
      answer.includes('unsafe')
    ).length;

    if (riskFactors >= 3) return 'HIGH';
    if (riskFactors >= 1) return 'MEDIUM';
    return 'LOW';
  };

  if (showResult) {
    const riskLevel = calculateRisk();
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50">
        <Header />
        
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-center">
                  <Shield className="w-8 h-8 mr-2" />
                  Risk Assessment Result
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className={`inline-flex items-center justify-center w-32 h-32 rounded-full mb-6 ${
                  riskLevel === 'HIGH' ? 'bg-red-100' :
                  riskLevel === 'MEDIUM' ? 'bg-yellow-100' : 'bg-green-100'
                }`}>
                  {riskLevel === 'HIGH' ? 
                    <AlertTriangle className="w-16 h-16 text-red-600" /> :
                    riskLevel === 'MEDIUM' ?
                    <AlertTriangle className="w-16 h-16 text-yellow-600" /> :
                    <CheckCircle className="w-16 h-16 text-green-600" />
                  }
                </div>
                
                <h2 className={`text-3xl font-bold mb-4 ${
                  riskLevel === 'HIGH' ? 'text-red-600' :
                  riskLevel === 'MEDIUM' ? 'text-yellow-600' : 'text-green-600'
                }`}>
                  {riskLevel} RISK LEVEL
                </h2>

                <div className="space-y-4 text-left bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg">Recommendations:</h3>
                  {riskLevel === 'HIGH' && (
                    <div className="space-y-2">
                      <p>• Contact TG ANB immediately: <strong>040-27852508</strong></p>
                      <p>• Report suspicious activities through drug report system</p>
                      <p>• Consider involving local police</p>
                      <p>• Stay vigilant and avoid suspicious areas</p>
                    </div>
                  )}
                  {riskLevel === 'MEDIUM' && (
                    <div className="space-y-2">
                      <p>• Monitor the situation closely</p>
                      <p>• Report any escalation to TG ANB: <strong>040-27852508</strong></p>
                      <p>• Stay connected with community watch groups</p>
                      <p>• Keep emergency contacts ready</p>
                    </div>
                  )}
                  {riskLevel === 'LOW' && (
                    <div className="space-y-2">
                      <p>• Continue regular community awareness</p>
                      <p>• Report any suspicious activities if they arise</p>
                      <p>• Participate in anti-drug campaigns</p>
                      <p>• Stay informed about drug prevention</p>
                    </div>
                  )}
                </div>

                <div className="mt-6 space-y-4">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    📞 Contact TG ANB: 040-27852508
                  </Button>
                  <Button variant="outline" className="w-full" onClick={() => window.location.reload()}>
                    Take Assessment Again
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Shield.AI Assessment</h1>
            <p className="text-gray-600">Community Safety Risk Assessment Tool</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>
                Question {currentQuestion + 1} of {questions.length}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-4">{questions[currentQuestion]}</h3>
                <div className="space-y-2">
                  {options[currentQuestion].map((option, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="w-full justify-start"
                      onClick={() => handleAnswer(option)}
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ShieldAIAssessmentPage;
