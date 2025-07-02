
import { useState } from 'react';
import { Sunrise, AlertTriangle, CheckCircle, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface AssessmentData {
  name: string;
  age: string;
  substanceUsed: string;
  usageDuration: string;
  lastUsed: string;
  mood: number[];
  socialSupport: number[];
  healthStatus: string;
  previousTreatment: string;
  motivation: number[];
  livingSituation: string;
}

const UdayAIRecoveryPlanner = () => {
  const [showAssessment, setShowAssessment] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [assessmentData, setAssessmentData] = useState<AssessmentData>({
    name: '',
    age: '',
    substanceUsed: '',
    usageDuration: '',
    lastUsed: '',
    mood: [5],
    socialSupport: [5],
    healthStatus: '',
    previousTreatment: '',
    motivation: [5],
    livingSituation: ''
  });
  const [riskResult, setRiskResult] = useState<{level: string, recommendations: string[]}>({
    level: '',
    recommendations: []
  });

  const calculateRiskLevel = () => {
    setIsLoading(true);
    
    // Risk calculation based on multiple factors
    let riskScore = 0;
    
    // Age factor
    const age = parseInt(assessmentData.age);
    if (age < 18) riskScore += 2;
    else if (age < 25) riskScore += 1;
    
    // Duration factor
    if (assessmentData.usageDuration.includes('year')) riskScore += 2;
    else if (assessmentData.usageDuration.includes('month')) riskScore += 1;
    
    // Last used factor
    if (assessmentData.lastUsed.includes('today') || assessmentData.lastUsed.includes('yesterday')) riskScore += 3;
    else if (assessmentData.lastUsed.includes('week')) riskScore += 2;
    
    // Mood and support factors
    if (assessmentData.mood[0] <= 3) riskScore += 2;
    if (assessmentData.socialSupport[0] <= 3) riskScore += 2;
    if (assessmentData.motivation[0] <= 3) riskScore += 1;
    
    // Health status
    if (assessmentData.healthStatus.includes('poor') || assessmentData.healthStatus.includes('bad')) riskScore += 2;
    
    // Determine risk level and recommendations
    let level = '';
    let recommendations: string[] = [];
    
    if (riskScore >= 8) {
      level = 'CRITICAL';
      recommendations = [
        'Immediate professional intervention required',
        'Contact TG ANB rehabilitation center: 040-27852508',
        'Consider inpatient treatment program',
        'Medical detoxification may be necessary',
        'Family counseling strongly recommended',
        'Emergency support: Call 100 if in crisis'
      ];
    } else if (riskScore >= 5) {
      level = 'HIGH';
      recommendations = [
        'Professional counseling strongly recommended',
        'Contact addiction specialist immediately',
        'Join support groups or NA/AA meetings',
        'Consider outpatient treatment program',
        'Regular medical check-ups needed',
        'TG ANB Helpline: 8712671111'
      ];
    } else if (riskScore >= 3) {
      level = 'MODERATE';
      recommendations = [
        'Consult addiction counselor soon',
        'Participate in community support programs',
        'Regular health monitoring advised',
        'Family support is crucial',
        'Consider joining recovery support groups',
        'Contact local rehabilitation center for guidance'
      ];
    } else {
      level = 'LOW';
      recommendations = [
        'Continue current positive efforts',
        'Maintain regular counseling sessions',
        'Stay connected with support network',
        'Focus on healthy lifestyle choices',
        'Regular follow-ups with healthcare provider',
        'Participate in community wellness programs'
      ];
    }
    
    setTimeout(() => {
      setRiskResult({ level, recommendations });
      setShowResult(true);
      setIsLoading(false);
    }, 2000);
  };

  const scrollToAssessment = () => {
    setShowAssessment(true);
    setTimeout(() => {
      document.getElementById('assessment-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  if (showResult) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 font-poppins">
        <Header />
        
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                Uday.AI Risk Assessment Result
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                {assessmentData.name}, here's your personalized risk assessment
              </p>
            </div>

            {/* Risk Level Display */}
            <Card className={`mb-8 border-2 ${
              riskResult.level === 'CRITICAL' ? 'border-red-500 bg-red-50' :
              riskResult.level === 'HIGH' ? 'border-orange-500 bg-orange-50' :
              riskResult.level === 'MODERATE' ? 'border-yellow-500 bg-yellow-50' :
              'border-green-500 bg-green-50'
            }`}>
              <CardContent className="p-8 text-center">
                <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full mb-6 ${
                  riskResult.level === 'CRITICAL' ? 'bg-red-200' :
                  riskResult.level === 'HIGH' ? 'bg-orange-200' :
                  riskResult.level === 'MODERATE' ? 'bg-yellow-200' :
                  'bg-green-200'
                }`}>
                  {riskResult.level === 'LOW' ? 
                    <CheckCircle className={`w-12 h-12 text-green-600`} /> :
                    <AlertTriangle className={`w-12 h-12 ${
                      riskResult.level === 'CRITICAL' ? 'text-red-600' :
                      riskResult.level === 'HIGH' ? 'text-orange-600' :
                      'text-yellow-600'
                    }`} />
                  }
                </div>
                
                <h2 className={`text-4xl font-bold mb-4 ${
                  riskResult.level === 'CRITICAL' ? 'text-red-600' :
                  riskResult.level === 'HIGH' ? 'text-orange-600' :
                  riskResult.level === 'MODERATE' ? 'text-yellow-600' :
                  'text-green-600'
                }`}>
                  {riskResult.level} RISK
                </h2>
                
                <p className="text-lg text-gray-700 mb-6">
                  {riskResult.level === 'CRITICAL' ? 'Immediate professional help is strongly recommended' :
                   riskResult.level === 'HIGH' ? 'Professional support is highly recommended' :
                   riskResult.level === 'MODERATE' ? 'Consider seeking professional guidance' :
                   'Continue your positive recovery journey'}
                </p>
              </CardContent>
            </Card>

            {/* Recommendations */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">Recommended Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {riskResult.recommendations.map((recommendation, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                      <span className="font-bold text-blue-600 mt-1">{index + 1}.</span>
                      <span className="text-gray-700">{recommendation}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contacts */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-800">
                    <Phone className="w-6 h-6 mr-2" />
                    Emergency Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold">TG ANB Helpline</p>
                      <p className="text-2xl font-bold text-blue-600">8712671111</p>
                    </div>
                    <div>
                      <p className="font-semibold">Emergency Services</p>
                      <p className="text-xl font-bold text-red-600">100</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-green-50 border-green-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-green-800">
                    <MapPin className="w-6 h-6 mr-2" />
                    Find Help Nearby
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      📍 Locate Rehabilitation Centers
                    </Button>
                    <Button variant="outline" className="w-full">
                      👥 Find Support Groups
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Action Buttons */}
            <div className="text-center space-y-4">
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Button className="bg-orange-500 hover:bg-orange-600" size="lg">
                  📞 Call TG ANB Now: 8712671111
                </Button>
                <Button variant="outline" size="lg" onClick={() => window.location.reload()}>
                  🔄 Take Assessment Again
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 font-poppins">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <Sunrise className="w-16 h-16 mr-4" />
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-2">Uday.AI</h1>
              <p className="text-xl opacity-90">Recovery Risk Assessment</p>
            </div>
          </div>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Your AI-powered risk assessment tool to understand your recovery needs and get personalized recommendations for professional help.
          </p>
          <Button 
            onClick={scrollToAssessment}
            className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
          >
            🧠 Start Risk Assessment
          </Button>
        </div>
      </section>

      {/* Assessment Form */}
      {showAssessment && (
        <div id="assessment-section" className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  Recovery Risk Assessment
                </CardTitle>
                <p className="text-center text-gray-600 dark:text-gray-300">
                  Please answer honestly to get accurate recommendations
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Your name:</label>
                    <Input
                      value={assessmentData.name}
                      onChange={(e) => setAssessmentData(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Your age:</label>
                    <Input
                      value={assessmentData.age}
                      onChange={(e) => setAssessmentData(prev => ({ ...prev, age: e.target.value }))}
                      placeholder="Enter your age"
                      type="number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">What substance(s) are you concerned about?</label>
                  <Input
                    value={assessmentData.substanceUsed}
                    onChange={(e) => setAssessmentData(prev => ({ ...prev, substanceUsed: e.target.value }))}
                    placeholder="e.g., Alcohol, Cannabis, etc."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">How long have you been using?</label>
                  <Input
                    value={assessmentData.usageDuration}
                    onChange={(e) => setAssessmentData(prev => ({ ...prev, usageDuration: e.target.value }))}
                    placeholder="e.g., 2 years, 6 months, etc."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">When did you last use?</label>
                  <Input
                    value={assessmentData.lastUsed}
                    onChange={(e) => setAssessmentData(prev => ({ ...prev, lastUsed: e.target.value }))}
                    placeholder="e.g., today, yesterday, 1 week ago, etc."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    How would you rate your current mood? ({assessmentData.mood[0]}/10)
                  </label>
                  <Slider
                    value={assessmentData.mood}
                    onValueChange={(value) => setAssessmentData(prev => ({ ...prev, mood: value }))}
                    max={10}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>Very Low</span>
                    <span>Excellent</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    How much family/social support do you have? ({assessmentData.socialSupport[0]}/10)
                  </label>
                  <Slider
                    value={assessmentData.socialSupport}
                    onValueChange={(value) => setAssessmentData(prev => ({ ...prev, socialSupport: value }))}
                    max={10}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>No Support</span>
                    <span>Strong Support</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">How is your overall health?</label>
                  <Textarea
                    value={assessmentData.healthStatus}
                    onChange={(e) => setAssessmentData(prev => ({ ...prev, healthStatus: e.target.value }))}
                    placeholder="Describe your physical and mental health status"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Have you tried treatment before?</label>
                  <Textarea
                    value={assessmentData.previousTreatment}
                    onChange={(e) => setAssessmentData(prev => ({ ...prev, previousTreatment: e.target.value }))}
                    placeholder="Describe any previous treatment or recovery attempts"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    How motivated are you to recover? ({assessmentData.motivation[0]}/10)
                  </label>
                  <Slider
                    value={assessmentData.motivation}
                    onValueChange={(value) => setAssessmentData(prev => ({ ...prev, motivation: value }))}
                    max={10}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>Not Motivated</span>
                    <span>Very Motivated</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Describe your living situation:</label>
                  <Textarea
                    value={assessmentData.livingSituation}
                    onChange={(e) => setAssessmentData(prev => ({ ...prev, livingSituation: e.target.value }))}
                    placeholder="Where do you live? Who do you live with? Is it supportive for recovery?"
                  />
                </div>

                <Button 
                  onClick={calculateRiskLevel}
                  disabled={isLoading || !assessmentData.name || !assessmentData.substanceUsed}
                  className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-lg py-3"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Analyzing Risk Level...
                    </>
                  ) : (
                    <>
                      🧠 Get My Risk Assessment
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* Who Should Use Uday.AI */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
            Who Should Use Uday.AI Risk Assessment?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🙋‍♂️', text: 'Individuals concerned about substance use' },
              { icon: '👨‍👩‍👧‍👦', text: 'Family members seeking guidance' },
              { icon: '👩‍⚕️', text: 'Healthcare workers doing assessments' },
              { icon: '🤝', text: 'Community volunteers helping others' }
            ].map((item, index) => (
              <Card key={index} className="text-center p-6">
                <div className="text-4xl mb-4">{item.icon}</div>
                <p className="text-gray-600 dark:text-gray-300">{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-yellow-50 dark:bg-yellow-900/20 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <AlertTriangle className="w-8 h-8 text-yellow-600 mr-3" />
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">Important Disclaimer</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Uday.AI provides risk assessment guidance only and is not a substitute for professional medical advice, 
            diagnosis, or treatment. Always consult with qualified healthcare professionals for addiction treatment.
          </p>
        </div>
      </div>

      {/* Help Bar */}
      <div className="bg-purple-600 text-white p-4">
        <div className="container mx-auto text-center">
          <p className="font-bold mb-2">💬 Need immediate support?</p>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-6">
            <span className="text-lg">📞 TG ANB Drug Helpline: 8712671111</span>
            <Button className="bg-white text-purple-600 hover:bg-gray-100">
              📍 Find Nearby Rehab Center
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default UdayAIRecoveryPlanner;
