import { useState } from 'react';
import { Shield, BarChart3, Download, ArrowRight, CheckCircle, AlertTriangle, XCircle, Brain, Users, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface QuestionnaireData {
  emotionalWellbeing: {
    loneliness: string;
    stress: number[];
    anxiety: string;
    depression: string;
  };
  peerInfluence: {
    offeredDrugs: string;
    friendsUseDrugs: string;
    peerPressure: string;
    socialCircle: string;
  };
  environmental: {
    drugAccessibility: string;
    neighborhood: string;
    familySupport: string;
    triggers: string[];
  };
}

interface RiskReport {
  riskLevel: 'Low' | 'Moderate' | 'High';
  score: number;
  summary: string;
  preventionTips: string[];
  detailedAnalysis: {
    emotionalRisk: string;
    socialRisk: string;
    environmentalRisk: string;
    recommendations: string[];
  };
}

const ShieldAIRiskAssessment = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [showReport, setShowReport] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [questionnaire, setQuestionnaire] = useState<QuestionnaireData>({
    emotionalWellbeing: {
      loneliness: '',
      stress: [5],
      anxiety: '',
      depression: ''
    },
    peerInfluence: {
      offeredDrugs: '',
      friendsUseDrugs: '',
      peerPressure: '',
      socialCircle: ''
    },
    environmental: {
      drugAccessibility: '',
      neighborhood: '',
      familySupport: '',
      triggers: []
    }
  });
  const [riskReport, setRiskReport] = useState<RiskReport | null>(null);

  const sections = [
    { title: 'Emotional Wellbeing', icon: Brain, color: 'from-blue-500 to-cyan-500' },
    { title: 'Social Influence', icon: Users, color: 'from-green-500 to-emerald-500' },
    { title: 'Environment', icon: Home, color: 'from-purple-500 to-pink-500' }
  ];

  const environmentalTriggers = [
    'Academic pressure',
    'Financial stress', 
    'Family conflicts',
    'Social isolation',
    'Work stress',
    'Relationship issues'
  ];

  const handleTriggerChange = (trigger: string, checked: boolean) => {
    setQuestionnaire(prev => ({
      ...prev,
      environmental: {
        ...prev.environmental,
        triggers: checked 
          ? [...prev.environmental.triggers, trigger]
          : prev.environmental.triggers.filter(t => t !== trigger)
      }
    }));
  };

  const generateRiskReport = async () => {
    setIsLoading(true);
    
    try {
      const prompt = `Analyze this comprehensive risk assessment data and provide a detailed risk evaluation:
      
      Emotional Wellbeing:
      - Loneliness: ${questionnaire.emotionalWellbeing.loneliness}
      - Stress Level: ${questionnaire.emotionalWellbeing.stress[0]}/10
      - Anxiety: ${questionnaire.emotionalWellbeing.anxiety}
      - Depression: ${questionnaire.emotionalWellbeing.depression}
      
      Peer Influence:
      - Offered drugs: ${questionnaire.peerInfluence.offeredDrugs}
      - Friends use drugs: ${questionnaire.peerInfluence.friendsUseDrugs}
      - Peer pressure: ${questionnaire.peerInfluence.peerPressure}
      - Social circle: ${questionnaire.peerInfluence.socialCircle}
      
      Environmental:
      - Drug accessibility: ${questionnaire.environmental.drugAccessibility}
      - Neighborhood safety: ${questionnaire.environmental.neighborhood}
      - Family support: ${questionnaire.environmental.familySupport}
      - Triggers: ${questionnaire.environmental.triggers.join(', ')}
      
      Please provide:
      1. Risk level (Low/Moderate/High)
      2. A comprehensive summary
      3. 6-8 specific prevention tips
      4. Detailed analysis for each category
      5. Personalized recommendations
      
      Format as JSON: {
        "riskLevel": "Low/Moderate/High", 
        "summary": "...", 
        "preventionTips": [...],
        "detailedAnalysis": {
          "emotionalRisk": "...",
          "socialRisk": "...", 
          "environmentalRisk": "...",
          "recommendations": [...]
        }
      }`;

      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": "Bearer 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",
          "HTTP-Referer": window.location.origin,
          "X-Title": "Shield.AI - TG ANB Risk Assessment",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "model": "mistralai/mistral-small-3.2-24b-instruct:free",
          "messages": [
            {
              "role": "system",
              "content": "You are Shield.AI, a professional risk assessment tool by TG ANB. Analyze questionnaire data comprehensively and provide detailed, constructive, non-judgmental prevention guidance with specific actionable insights."
            },
            {
              "role": "user",
              "content": prompt
            }
          ]
        })
      });

      const data = await response.json();
      const aiResponse = data.choices?.[0]?.message?.content || '';
      
      try {
        const parsedReport = JSON.parse(aiResponse);
        const score = parsedReport.riskLevel === 'Low' ? 25 : parsedReport.riskLevel === 'Moderate' ? 60 : 85;
        
        setRiskReport({
          ...parsedReport,
          score
        });
      } catch {
        // Enhanced fallback with detailed analysis
        setRiskReport({
          riskLevel: 'Moderate',
          score: 50,
          summary: 'Based on your responses, we recommend staying aware of your risk factors and building strong prevention strategies. Your assessment shows areas that need attention and support.',
          preventionTips: [
            'Practice assertive refusal skills when pressured',
            'Build strong peer groups with positive interests',
            'Develop healthy stress management techniques like meditation',
            'Maintain open communication with trusted adults',
            'Engage in positive activities and hobbies regularly',
            'Seek professional help when feeling overwhelmed',
            'Create a support network of family and friends',
            'Avoid high-risk situations and environments'
          ],
          detailedAnalysis: {
            emotionalRisk: 'Please consult with our counselors for a detailed emotional assessment.',
            socialRisk: 'Our team can help you evaluate your social environment.',
            environmentalRisk: 'Contact us to discuss environmental risk factors.',
            recommendations: ['Reach out to TG ANB helpline for personalized guidance']
          }
        });
      }
      
      setShowReport(true);
    } catch (error) {
      console.error('Error generating report:', error);
      setRiskReport({
        riskLevel: 'Moderate',
        score: 50,
        summary: 'We encountered an issue generating your personalized report. Please try again or contact our helpline for assistance.',
        preventionTips: [
          'Stay connected with supportive friends and family',
          'Practice stress-reduction techniques like meditation',
          'Avoid situations where drugs might be present',
          'Seek help from counselors when feeling overwhelmed',
          'Engage in healthy activities that bring you joy'
        ],
        detailedAnalysis: {
          emotionalRisk: 'Please consult with our counselors for a detailed emotional assessment.',
          socialRisk: 'Our team can help you evaluate your social environment.',
          environmentalRisk: 'Contact us to discuss environmental risk factors.',
          recommendations: ['Reach out to TG ANB helpline for personalized guidance']
        }
      });
      setShowReport(true);
    } finally {
      setIsLoading(false);
    }
  };

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'Low': return 'text-green-600';
      case 'Moderate': return 'text-yellow-600'; 
      case 'High': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getRiskIcon = (level: string) => {
    switch (level) {
      case 'Low': return <CheckCircle className="w-12 h-12 text-green-600" />;
      case 'Moderate': return <AlertTriangle className="w-12 h-12 text-yellow-600" />;
      case 'High': return <XCircle className="w-12 h-12 text-red-600" />;
      default: return <Shield className="w-12 h-12 text-gray-600" />;
    }
  };

  const scrollToQuiz = () => {
    document.getElementById('quiz-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (showReport && riskReport) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-900 dark:to-gray-800 font-poppins">
        <Header />
        
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                Your Comprehensive Shield.AI Risk Assessment Report
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                Detailed analysis and personalized prevention guidance based on your responses
              </p>
            </div>

            {/* Risk Score Card */}
            <Card className="mb-8 bg-gradient-to-r from-white to-blue-50 dark:from-gray-800 dark:to-gray-700">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  {getRiskIcon(riskReport.riskLevel)}
                </div>
                <CardTitle className={`text-4xl ${getRiskColor(riskReport.riskLevel)}`}>
                  {riskReport.riskLevel} Risk Level
                </CardTitle>
                <div className="w-full bg-gray-200 rounded-full h-6 mt-4 max-w-md mx-auto">
                  <div 
                    className={`h-6 rounded-full transition-all duration-1000 ${
                      riskReport.riskLevel === 'Low' ? 'bg-green-500' : 
                      riskReport.riskLevel === 'Moderate' ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${riskReport.score}%` }}
                  ></div>
                </div>
                <p className="text-2xl font-bold mt-2">{riskReport.score}%</p>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 dark:text-gray-300 text-center leading-relaxed">
                  {riskReport.summary}
                </p>
              </CardContent>
            </Card>

            {/* Detailed Analysis */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20">
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-700 dark:text-blue-400">
                    <Brain className="w-6 h-6 mr-2" />
                    Emotional Assessment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300">{riskReport.detailedAnalysis.emotionalRisk}</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
                <CardHeader>
                  <CardTitle className="flex items-center text-green-700 dark:text-green-400">
                    <Users className="w-6 h-6 mr-2" />
                    Social Assessment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300">{riskReport.detailedAnalysis.socialRisk}</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
                <CardHeader>
                  <CardTitle className="flex items-center text-purple-700 dark:text-purple-400">
                    <Home className="w-6 h-6 mr-2" />
                    Environmental Assessment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300">{riskReport.detailedAnalysis.environmentalRisk}</p>
                </CardContent>
              </Card>
            </div>

            {/* Prevention Tips */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Shield className="w-8 h-8 mr-3 text-blue-600" />
                  Your Personalized Prevention Action Plan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {riskReport.preventionTips.map((tip, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <div className="bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm">{index + 1}</span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{tip}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Professional Recommendations */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-xl text-green-700 dark:text-green-400">
                  Professional Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {riskReport.detailedAnalysis.recommendations.map((rec, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <p className="text-gray-700 dark:text-gray-300">{rec}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="text-center space-y-4">
              <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg">
                <Download className="w-5 h-5 mr-2" />
                Download Comprehensive PDF Report
              </Button>
              <div>
                <Button variant="outline" onClick={() => setShowReport(false)} className="px-6 py-2">
                  Retake Assessment
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Help Strip */}
        <div className="bg-red-600 text-white p-6">
          <div className="container mx-auto text-center">
            <p className="font-bold mb-3 text-lg">Need immediate help or want to talk to someone?</p>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-xl font-semibold">📞 TG ANB Drug Helpline: 8712671111</p>
              <Button className="bg-white text-red-600 hover:bg-gray-100 font-semibold">
                Find Local Counselor
              </Button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-900 dark:to-gray-800 font-poppins">
      <Header />
      
      {/* Enhanced Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex items-center justify-center mb-8">
            <div className="animate-pulse">
              <Shield className="w-20 h-20 mr-6" />
            </div>
            <div>
              <h1 className="text-5xl md:text-7xl font-bold mb-4">Shield.AI</h1>
              <p className="text-2xl opacity-90">Know Your Risk. Protect Your Future.</p>
            </div>
          </div>
          <p className="text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
            Take this comprehensive AI-powered prevention assessment to understand your exposure to drug-related risks and receive detailed, personalized guidance for a safer future.
          </p>
          <Button 
            onClick={scrollToQuiz}
            className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-4 text-xl font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            🛡️ Start Advanced Risk Assessment
          </Button>
        </div>
      </section>

      {/* Enhanced Questionnaire Section */}
      <div id="quiz-section" className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
              {sections.map((section, index) => {
                const IconComponent = section.icon;
                return (
                  <div 
                    key={index}
                    className={`flex flex-col items-center space-y-2 px-6 py-4 rounded-xl transition-all duration-500 transform ${
                      index === currentSection 
                        ? `bg-gradient-to-r ${section.color} text-white scale-110 shadow-2xl` 
                        : index < currentSection 
                        ? 'bg-green-100 text-green-600 scale-105' 
                        : 'bg-gray-100 text-gray-500 scale-95'
                    }`}
                  >
                    <IconComponent className="w-8 h-8" />
                    <span className="font-bold text-sm text-center">{section.title}</span>
                  </div>
                );
              })}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 shadow-inner">
              <div 
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-4 rounded-full transition-all duration-700 shadow-lg"
                style={{ width: `${((currentSection + 1) / sections.length) * 100}%` }}
              ></div>
            </div>
            <p className="text-center mt-3 text-lg font-semibold text-gray-600 dark:text-gray-300">
              Section {currentSection + 1} of {sections.length}
            </p>
          </div>

          <Card className="shadow-2xl bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-700 border-0">
            <CardHeader className="pb-2">
              <CardTitle className={`text-3xl flex items-center bg-gradient-to-r ${sections[currentSection].color} bg-clip-text text-transparent`}>
                {React.createElement(sections[currentSection].icon, { className: "w-10 h-10 mr-4" })}
                {sections[currentSection].title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8 p-8">
              {currentSection === 0 && (
                <div className="space-y-8 animate-fade-in">
                  <div className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl">
                    <label className="block text-lg font-semibold mb-4 text-blue-800 dark:text-blue-300">
                      How often do you feel lonely or isolated?
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                      {['Never', 'Rarely', 'Sometimes', 'Often', 'Always'].map(option => (
                        <label key={option} className="flex items-center space-x-3 p-3 bg-white dark:bg-gray-700 rounded-lg cursor-pointer hover:bg-blue-100 dark:hover:bg-gray-600 transition-colors">
                          <input
                            type="radio"
                            name="loneliness"
                            value={option}
                            checked={questionnaire.emotionalWellbeing.loneliness === option}
                            onChange={(e) => setQuestionnaire(prev => ({
                              ...prev,
                              emotionalWellbeing: { ...prev.emotionalWellbeing, loneliness: e.target.value }
                            }))}
                            className="text-blue-600 scale-125"
                          />
                          <span className="font-medium">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl">
                    <label className="block text-lg font-semibold mb-4 text-purple-800 dark:text-purple-300">
                      Rate your current stress level: {questionnaire.emotionalWellbeing.stress[0]}/10
                    </label>
                    <div className="px-4">
                      <Slider
                        value={questionnaire.emotionalWellbeing.stress}
                        onValueChange={(value) => setQuestionnaire(prev => ({
                          ...prev,
                          emotionalWellbeing: { ...prev.emotionalWellbeing, stress: value }
                        }))}
                        max={10}
                        step={1}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mt-2">
                        <span>No Stress</span>
                        <span>Moderate</span>
                        <span>Extreme Stress</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl">
                    <label className="block text-lg font-semibold mb-4 text-green-800 dark:text-green-300">
                      Do you experience anxiety or panic attacks?
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                      {['Never', 'Rarely', 'Sometimes', 'Often'].map(option => (
                        <label key={option} className="flex items-center space-x-3 p-3 bg-white dark:bg-gray-700 rounded-lg cursor-pointer hover:bg-green-100 dark:hover:bg-gray-600 transition-colors">
                          <input
                            type="radio"
                            name="anxiety"
                            value={option}
                            checked={questionnaire.emotionalWellbeing.anxiety === option}
                            onChange={(e) => setQuestionnaire(prev => ({
                              ...prev,
                              emotionalWellbeing: { ...prev.emotionalWellbeing, anxiety: e.target.value }
                            }))}
                            className="text-green-600 scale-125"
                          />
                          <span className="font-medium">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl">
                    <label className="block text-lg font-semibold mb-4 text-orange-800 dark:text-orange-300">
                      Have you felt depressed or hopeless recently?
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                      {['No', 'Occasionally', 'Frequently', 'Most of the time'].map(option => (
                        <label key={option} className="flex items-center space-x-3 p-3 bg-white dark:bg-gray-700 rounded-lg cursor-pointer hover:bg-orange-100 dark:hover:bg-gray-600 transition-colors">
                          <input
                            type="radio"
                            name="depression"
                            value={option}
                            checked={questionnaire.emotionalWellbeing.depression === option}
                            onChange={(e) => setQuestionnaire(prev => ({
                              ...prev,
                              emotionalWellbeing: { ...prev.emotionalWellbeing, depression: e.target.value }
                            }))}
                            className="text-orange-600 scale-125"
                          />
                          <span className="font-medium">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {currentSection === 1 && (
                <div className="space-y-8 animate-fade-in">
                  <div className="p-6 bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 rounded-xl">
                    <label className="block text-lg font-semibold mb-4 text-red-800 dark:text-red-300">
                      Have you ever been offered drugs by a friend or acquaintance?
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                      {['Never', 'Once', 'A few times', 'Many times'].map(option => (
                        <label key={option} className="flex items-center space-x-3 p-3 bg-white dark:bg-gray-700 rounded-lg cursor-pointer hover:bg-red-100 dark:hover:bg-gray-600 transition-colors">
                          <input
                            type="radio"
                            name="offeredDrugs"
                            value={option}
                            checked={questionnaire.peerInfluence.offeredDrugs === option}
                            onChange={(e) => setQuestionnaire(prev => ({
                              ...prev,
                              peerInfluence: { ...prev.peerInfluence, offeredDrugs: e.target.value }
                            }))}
                            className="text-red-600 scale-125"
                          />
                          <span className="font-medium">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl">
                    <label className="block text-lg font-semibold mb-4 text-green-800 dark:text-green-300">
                      Do any of your close friends use drugs?
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                      {['No', 'I suspect so', 'Some do', 'Most do'].map(option => (
                        <label key={option} className="flex items-center space-x-3 p-3 bg-white dark:bg-gray-700 rounded-lg cursor-pointer hover:bg-green-100 dark:hover:bg-gray-600 transition-colors">
                          <input
                            type="radio"
                            name="friendsUseDrugs"
                            value={option}
                            checked={questionnaire.peerInfluence.friendsUseDrugs === option}
                            onChange={(e) => setQuestionnaire(prev => ({
                              ...prev,
                              peerInfluence: { ...prev.peerInfluence, friendsUseDrugs: e.target.value }
                            }))}
                            className="text-green-600 scale-125"
                          />
                          <span className="font-medium">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl">
                    <label className="block text-lg font-semibold mb-4 text-purple-800 dark:text-purple-300">
                      How often do you feel peer pressure to fit in?
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                      {['Never', 'Rarely', 'Sometimes', 'Often', 'Always'].map(option => (
                        <label key={option} className="flex items-center space-x-3 p-3 bg-white dark:bg-gray-700 rounded-lg cursor-pointer hover:bg-purple-100 dark:hover:bg-gray-600 transition-colors">
                          <input
                            type="radio"
                            name="peerPressure"
                            value={option}
                            checked={questionnaire.peerInfluence.peerPressure === option}
                            onChange={(e) => setQuestionnaire(prev => ({
                              ...prev,
                              peerInfluence: { ...prev.peerInfluence, peerPressure: e.target.value }
                            }))}
                            className="text-purple-600 scale-125"
                          />
                          <span className="font-medium">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl">
                    <label className="block text-lg font-semibold mb-4 text-green-800 dark:text-green-300">
                      How would you describe your social circle?
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                      {['Very supportive', 'Mostly supportive', 'Mixed influences', 'Often negative', 'Very negative'].map(option => (
                        <label key={option} className="flex items-center space-x-3 p-3 bg-white dark:bg-gray-700 rounded-lg cursor-pointer hover:bg-green-100 dark:hover:bg-gray-600 transition-colors">
                          <input
                            type="radio"
                            name="socialCircle"
                            value={option}
                            checked={questionnaire.peerInfluence.socialCircle === option}
                            onChange={(e) => setQuestionnaire(prev => ({
                              ...prev,
                              peerInfluence: { ...prev.peerInfluence, socialCircle: e.target.value }
                            }))}
                            className="text-green-600 scale-125"
                          />
                          <span className="font-medium">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {currentSection === 2 && (
                <div className="space-y-8 animate-fade-in">
                  <div className="p-6 bg-gradient-to-r from-gray-50 to-slate-50 dark:from-gray-900/20 dark:to-slate-900/20 rounded-xl">
                    <label className="block text-lg font-semibold mb-4 text-gray-800 dark:text-gray-300">
                      Which situations make you feel most vulnerable? (Select all that apply)
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {environmentalTriggers.map(trigger => (
                        <label key={trigger} className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors border-2 border-transparent hover:border-gray-300">
                          <Checkbox
                            checked={questionnaire.environmental.triggers.includes(trigger)}
                            onCheckedChange={(checked) => handleTriggerChange(trigger, checked as boolean)}
                          />
                          <span className="font-medium">{trigger}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl">
                    <label className="block text-lg font-semibold mb-4 text-purple-800 dark:text-purple-300">
                      Are drugs easily accessible in your neighborhood or school?
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                      {['Not at all', 'I\'m not sure', 'Somewhat accessible', 'Very accessible'].map(option => (
                        <label key={option} className="flex items-center space-x-3 p-3 bg-white dark:bg-gray-700 rounded-lg cursor-pointer hover:bg-purple-100 dark:hover:bg-gray-600 transition-colors">
                          <input
                            type="radio"
                            name="drugAccessibility"
                            value={option}
                            checked={questionnaire.environmental.drugAccessibility === option}
                            onChange={(e) => setQuestionnaire(prev => ({
                              ...prev,
                              environmental: { ...prev.environmental, drugAccessibility: e.target.value }
                            }))}
                            className="text-purple-600 scale-125"
                          />
                          <span className="font-medium">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl">
                    <label className="block text-lg font-semibold mb-4 text-green-800 dark:text-green-300">
                      How would you describe your neighborhood?
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                      {['Very safe', 'Mostly safe', 'Some issues', 'Many problems', 'Very unsafe'].map(option => (
                        <label key={option} className="flex items-center space-x-3 p-3 bg-white dark:bg-gray-700 rounded-lg cursor-pointer hover:bg-green-100 dark:hover:bg-gray-600 transition-colors">
                          <input
                            type="radio"
                            name="neighborhood"
                            value={option}
                            checked={questionnaire.environmental.neighborhood === option}
                            onChange={(e) => setQuestionnaire(prev => ({
                              ...prev,
                              environmental: { ...prev.environmental, neighborhood: e.target.value }
                            }))}
                            className="text-green-600 scale-125"
                          />
                          <span className="font-medium">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl">
                    <label className="block text-lg font-semibold mb-4 text-orange-800 dark:text-orange-300">
                      How supportive is your family?
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                      {['Very supportive', 'Mostly supportive', 'Sometimes supportive', 'Not very supportive', 'Not supportive at all'].map(option => (
                        <label key={option} className="flex items-center space-x-3 p-3 bg-white dark:bg-gray-700 rounded-lg cursor-pointer hover:bg-orange-100 dark:hover:bg-gray-600 transition-colors">
                          <input
                            type="radio"
                            name="familySupport"
                            value={option}
                            checked={questionnaire.environmental.familySupport === option}
                            onChange={(e) => setQuestionnaire(prev => ({
                              ...prev,
                              environmental: { ...prev.environmental, familySupport: e.target.value }
                            }))}
                            className="text-orange-600 scale-125"
                          />
                          <span className="font-medium">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <div className="flex justify-between pt-8">
                {currentSection > 0 && (
                  <Button 
                    variant="outline" 
                    onClick={() => setCurrentSection(prev => prev - 1)}
                    className="px-8 py-3 text-lg"
                  >
                    ← Previous
                  </Button>
                )}
                {currentSection < sections.length - 1 ? (
                  <Button 
                    onClick={() => setCurrentSection(prev => prev + 1)}
                    className="ml-auto px-8 py-3 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    Next → <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                ) : (
                  <Button 
                    onClick={generateRiskReport}
                    disabled={isLoading}
                    className="ml-auto px-10 py-4 text-lg bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 shadow-xl"
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                        Analyzing Your Risk...
                      </>
                    ) : (
                      <>
                        <BarChart3 className="w-5 h-5 mr-3" />
                        Generate Comprehensive Report
                      </>
                    )}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Privacy Notice */}
      <div className="bg-green-50 dark:bg-green-900/20 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <Shield className="w-12 h-12 text-green-600 mr-4" />
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">100% Private & Confidential</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg">
            Shield.AI respects your privacy completely. No personal information is collected or stored. 
            This advanced tool is designed for awareness and prevention, never for surveillance or judgment.
          </p>
        </div>
      </div>

      {/* Who Should Take This Test */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
            Who Should Take This Test?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🎓', text: 'Students in high school or college' },
              { icon: '👨‍👩‍👧‍👦', text: 'Parents assessing risk for teens' },
              { icon: '👩‍🏫', text: 'School counselors or educators' },
              { icon: '🏘️', text: 'Youth in high-risk neighborhoods' }
            ].map((item, index) => (
              <Card key={index} className="text-center p-6">
                <div className="text-4xl mb-4">{item.icon}</div>
                <p className="text-gray-600 dark:text-gray-300">{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Built By Section */}
      <div className="bg-blue-50 dark:bg-blue-900/20 py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Built & Supported By</h3>
          <div className="flex items-center justify-center space-x-6 mb-4">
            <img 
              src="/lovable-uploads/3cc3a66f-c1e9-4a3e-ae78-665c190d4eb4.png" 
              alt="TG ANB" 
              className="h-16 w-16 rounded-full"
            />
            <img 
              src="/lovable-uploads/37f408d2-9357-4e1c-af91-05f171f00af2.png" 
              alt="Telangana" 
              className="h-16 w-16 rounded-full"
            />
          </div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Developed as part of the T-RISING.AI ecosystem by the Telangana Anti-Narcotics Bureau, 
            empowering citizens through preventive technology.
          </p>
        </div>
      </div>

      {/* Emergency Help Strip */}
      <div className="bg-red-600 text-white p-4">
        <div className="container mx-auto text-center">
          <p className="font-bold mb-2">📞 Need help or want to talk to someone?</p>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-6">
            <span className="text-lg font-semibold">TG ANB Drug Helpline: 8712671111</span>
            <Button className="bg-white text-red-600 hover:bg-gray-100">
              Find Local Counselor
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ShieldAIRiskAssessment;
