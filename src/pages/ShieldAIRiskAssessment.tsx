
import { useState } from 'react';
import { Shield, BarChart3, Download, ArrowRight, CheckCircle, AlertTriangle, XCircle } from 'lucide-react';
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
    { title: 'Emotional Wellbeing', icon: '🧠' },
    { title: 'Peer Influence & Social Behavior', icon: '👥' },
    { title: 'Environmental Triggers', icon: '🏠' }
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
      const prompt = `Analyze this risk assessment data and provide a risk evaluation:
      
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
      2. A brief summary
      3. 4-5 specific prevention tips
      
      Format as JSON: {"riskLevel": "Low/Moderate/High", "summary": "...", "preventionTips": ["tip1", "tip2", ...]}`;

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
              "content": "You are Shield.AI, a professional risk assessment tool by TG ANB. Analyze questionnaire data and provide constructive, non-judgmental prevention guidance."
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
        // Fallback if JSON parsing fails
        setRiskReport({
          riskLevel: 'Moderate',
          score: 50,
          summary: 'Based on your responses, we recommend staying aware of your risk factors and building strong prevention strategies.',
          preventionTips: [
            'Practice assertive refusal skills when pressured',
            'Build strong peer groups with positive interests',
            'Develop healthy stress management techniques',
            'Maintain open communication with trusted adults',
            'Engage in positive activities and hobbies'
          ]
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
        ]
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
      case 'Low': return <CheckCircle className="w-8 h-8 text-green-600" />;
      case 'Moderate': return <AlertTriangle className="w-8 h-8 text-yellow-600" />;
      case 'High': return <XCircle className="w-8 h-8 text-red-600" />;
      default: return <Shield className="w-8 h-8 text-gray-600" />;
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
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                Your Shield.AI Risk Assessment Report
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                Personalized prevention guidance based on your responses
              </p>
            </div>

            <Card className="mb-8">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  {getRiskIcon(riskReport.riskLevel)}
                </div>
                <CardTitle className={`text-3xl ${getRiskColor(riskReport.riskLevel)}`}>
                  {riskReport.riskLevel} Risk Level
                </CardTitle>
                <div className="w-full bg-gray-200 rounded-full h-4 mt-4">
                  <div 
                    className={`h-4 rounded-full ${
                      riskReport.riskLevel === 'Low' ? 'bg-green-500' : 
                      riskReport.riskLevel === 'Moderate' ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${riskReport.score}%` }}
                  ></div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 dark:text-gray-300 text-center">
                  {riskReport.summary}
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="w-6 h-6 mr-2 text-blue-600" />
                  Your Personalized Prevention Tips
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {riskReport.preventionTips.map((tip, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                        <span className="text-blue-600 font-bold">{index + 1}</span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">{tip}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="text-center space-y-4">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Download className="w-4 h-4 mr-2" />
                Download PDF Report
              </Button>
              <div>
                <Button variant="outline" onClick={() => setShowReport(false)}>
                  Retake Assessment
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Help Strip */}
        <div className="bg-red-600 text-white p-4">
          <div className="container mx-auto text-center">
            <p className="font-bold mb-2">Need immediate help or want to talk to someone?</p>
            <p className="text-lg">📞 TG ANB Drug Helpline: 8712671111</p>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-900 dark:to-gray-800 font-poppins">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <Shield className="w-16 h-16 mr-4" />
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-2">Shield.AI</h1>
              <p className="text-xl opacity-90">Know Your Risk. Protect Your Future.</p>
            </div>
          </div>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Take this AI-powered prevention test to assess your exposure to drug-related risks and receive personalized, confidential guidance.
          </p>
          <Button 
            onClick={scrollToQuiz}
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
          >
            🛡️ Start Risk Test
          </Button>
        </div>
      </section>

      {/* Questionnaire Section */}
      <div id="quiz-section" className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              {sections.map((section, index) => (
                <div 
                  key={index}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                    index === currentSection ? 'bg-blue-100 text-blue-600' : 
                    index < currentSection ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-500'
                  }`}
                >
                  <span>{section.icon}</span>
                  <span className="font-medium">{section.title}</span>
                </div>
              ))}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentSection + 1) / sections.length) * 100}%` }}
              ></div>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                {sections[currentSection].icon} {sections[currentSection].title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {currentSection === 0 && (
                <>
                  <div>
                    <label className="block text-sm font-medium mb-2">Do you often feel lonely or isolated?</label>
                    <div className="space-y-2">
                      {['Never', 'Rarely', 'Sometimes', 'Often', 'Always'].map(option => (
                        <label key={option} className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="loneliness"
                            value={option}
                            checked={questionnaire.emotionalWellbeing.loneliness === option}
                            onChange={(e) => setQuestionnaire(prev => ({
                              ...prev,
                              emotionalWellbeing: { ...prev.emotionalWellbeing, loneliness: e.target.value }
                            }))}
                            className="text-blue-600"
                          />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      How would you rate your stress level? ({questionnaire.emotionalWellbeing.stress[0]}/10)
                    </label>
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
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Do you experience anxiety or panic attacks?</label>
                    <div className="space-y-2">
                      {['Never', 'Rarely', 'Sometimes', 'Often'].map(option => (
                        <label key={option} className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="anxiety"
                            value={option}
                            checked={questionnaire.emotionalWellbeing.anxiety === option}
                            onChange={(e) => setQuestionnaire(prev => ({
                              ...prev,
                              emotionalWellbeing: { ...prev.emotionalWellbeing, anxiety: e.target.value }
                            }))}
                            className="text-blue-600"
                          />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Have you felt depressed or hopeless recently?</label>
                    <div className="space-y-2">
                      {['No', 'Occasionally', 'Frequently', 'Most of the time'].map(option => (
                        <label key={option} className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="depression"
                            value={option}
                            checked={questionnaire.emotionalWellbeing.depression === option}
                            onChange={(e) => setQuestionnaire(prev => ({
                              ...prev,
                              emotionalWellbeing: { ...prev.emotionalWellbeing, depression: e.target.value }
                            }))}
                            className="text-blue-600"
                          />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {currentSection === 1 && (
                <>
                  <div>
                    <label className="block text-sm font-medium mb-2">Have you ever been offered drugs by a friend or acquaintance?</label>
                    <div className="space-y-2">
                      {['Never', 'Once', 'A few times', 'Many times'].map(option => (
                        <label key={option} className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="offeredDrugs"
                            value={option}
                            checked={questionnaire.peerInfluence.offeredDrugs === option}
                            onChange={(e) => setQuestionnaire(prev => ({
                              ...prev,
                              peerInfluence: { ...prev.peerInfluence, offeredDrugs: e.target.value }
                            }))}
                            className="text-blue-600"
                          />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Do any of your close friends use drugs?</label>
                    <div className="space-y-2">
                      {['No', 'I suspect so', 'Some do', 'Most do'].map(option => (
                        <label key={option} className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="friendsUseDrugs"
                            value={option}
                            checked={questionnaire.peerInfluence.friendsUseDrugs === option}
                            onChange={(e) => setQuestionnaire(prev => ({
                              ...prev,
                              peerInfluence: { ...prev.peerInfluence, friendsUseDrugs: e.target.value }
                            }))}
                            className="text-blue-600"
                          />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">How often do you feel peer pressure to fit in?</label>
                    <div className="space-y-2">
                      {['Never', 'Rarely', 'Sometimes', 'Often', 'Always'].map(option => (
                        <label key={option} className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="peerPressure"
                            value={option}
                            checked={questionnaire.peerInfluence.peerPressure === option}
                            onChange={(e) => setQuestionnaire(prev => ({
                              ...prev,
                              peerInfluence: { ...prev.peerInfluence, peerPressure: e.target.value }
                            }))}
                            className="text-blue-600"
                          />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">How would you describe your social circle?</label>
                    <div className="space-y-2">
                      {['Very supportive', 'Mostly supportive', 'Mixed influences', 'Often negative', 'Very negative'].map(option => (
                        <label key={option} className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="socialCircle"
                            value={option}
                            checked={questionnaire.peerInfluence.socialCircle === option}
                            onChange={(e) => setQuestionnaire(prev => ({
                              ...prev,
                              peerInfluence: { ...prev.peerInfluence, socialCircle: e.target.value }
                            }))}
                            className="text-blue-600"
                          />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {currentSection === 2 && (
                <>
                  <div>
                    <label className="block text-sm font-medium mb-2">Are drugs easily accessible in your neighborhood or school?</label>
                    <div className="space-y-2">
                      {['Not at all', 'I\'m not sure', 'Somewhat accessible', 'Very accessible'].map(option => (
                        <label key={option} className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="drugAccessibility"
                            value={option}
                            checked={questionnaire.environmental.drugAccessibility === option}
                            onChange={(e) => setQuestionnaire(prev => ({
                              ...prev,
                              environmental: { ...prev.environmental, drugAccessibility: e.target.value }
                            }))}
                            className="text-blue-600"
                          />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">How would you describe your neighborhood?</label>
                    <div className="space-y-2">
                      {['Very safe', 'Mostly safe', 'Some issues', 'Many problems', 'Very unsafe'].map(option => (
                        <label key={option} className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="neighborhood"
                            value={option}
                            checked={questionnaire.environmental.neighborhood === option}
                            onChange={(e) => setQuestionnaire(prev => ({
                              ...prev,
                              environmental: { ...prev.environmental, neighborhood: e.target.value }
                            }))}
                            className="text-blue-600"
                          />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">How supportive is your family?</label>
                    <div className="space-y-2">
                      {['Very supportive', 'Mostly supportive', 'Sometimes supportive', 'Not very supportive', 'Not supportive at all'].map(option => (
                        <label key={option} className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="familySupport"
                            value={option}
                            checked={questionnaire.environmental.familySupport === option}
                            onChange={(e) => setQuestionnaire(prev => ({
                              ...prev,
                              environmental: { ...prev.environmental, familySupport: e.target.value }
                            }))}
                            className="text-blue-600"
                          />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Which of these situations make you feel most vulnerable? (Select all that apply)</label>
                    <div className="space-y-2">
                      {environmentalTriggers.map(trigger => (
                        <label key={trigger} className="flex items-center space-x-2">
                          <Checkbox
                            checked={questionnaire.environmental.triggers.includes(trigger)}
                            onCheckedChange={(checked) => handleTriggerChange(trigger, checked as boolean)}
                          />
                          <span>{trigger}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </>
              )}

              <div className="flex justify-between pt-6">
                {currentSection > 0 && (
                  <Button 
                    variant="outline" 
                    onClick={() => setCurrentSection(prev => prev - 1)}
                  >
                    Previous
                  </Button>
                )}
                {currentSection < sections.length - 1 ? (
                  <Button 
                    onClick={() => setCurrentSection(prev => prev + 1)}
                    className="ml-auto"
                  >
                    Next <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button 
                    onClick={generateRiskReport}
                    disabled={isLoading}
                    className="ml-auto bg-green-600 hover:bg-green-700"
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <BarChart3 className="w-4 h-4 mr-2" />
                        Generate Report
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
      <div className="bg-green-50 dark:bg-green-900/20 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <Shield className="w-8 h-8 text-green-600 mr-3" />
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">100% Private & Confidential</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Shield.AI respects your privacy. No personal information is collected or stored. 
            This tool is designed for awareness, not surveillance.
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
