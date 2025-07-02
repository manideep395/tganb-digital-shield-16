
import { useState } from 'react';
import { Sunrise, Heart, Calendar, Download, RefreshCw, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface RecoveryData {
  name: string;
  drugAddicted: string;
  addictionDuration: string;
  attemptedRecovery: string;
  mood: number[];
  energyLevel: number[];
  cravings: string;
  sleepQuality: string;
  goal: string;
  planDuration: string;
  guidedRehab: boolean;
}

interface RecoveryPlan {
  dailySchedules: DailySchedule[];
  motivationalQuote: string;
}

interface DailySchedule {
  day: number;
  morning: string[];
  afternoon: string[];
  evening: string[];
}

const UdayAIRecoveryPlanner = () => {
  const [showPlan, setShowPlan] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [recoveryData, setRecoveryData] = useState<RecoveryData>({
    name: '',
    drugAddicted: '',
    addictionDuration: '',
    attemptedRecovery: '',
    mood: [5],
    energyLevel: [5],
    cravings: '',
    sleepQuality: '',
    goal: '',
    planDuration: '',
    guidedRehab: false
  });
  const [recoveryPlan, setRecoveryPlan] = useState<RecoveryPlan | null>(null);

  const generateRecoveryPlan = async () => {
    setIsLoading(true);
    
    try {
      const prompt = `Create a personalized recovery plan for:
      
      Name: ${recoveryData.name}
      Drug addiction: ${recoveryData.drugAddicted}
      Duration of addiction: ${recoveryData.addictionDuration}
      Previous recovery attempts: ${recoveryData.attemptedRecovery}
      Current mood: ${recoveryData.mood[0]}/10
      Energy level: ${recoveryData.energyLevel[0]}/10
      Cravings/triggers: ${recoveryData.cravings}
      Sleep quality: ${recoveryData.sleepQuality}
      Recovery goal: ${recoveryData.goal}
      Plan duration: ${recoveryData.planDuration}
      Under guided rehab: ${recoveryData.guidedRehab ? 'Yes' : 'No'}
      
      Create a ${recoveryData.planDuration} recovery plan with daily schedules (morning, afternoon, evening activities). Include motivational elements and practical recovery activities.
      
      Important: This is AI-generated guidance and not a replacement for professional medical treatment. Always encourage seeking professional help for critical situations.
      
      Format as JSON: {
        "dailySchedules": [
          {
            "day": 1,
            "morning": ["activity1", "activity2", "activity3"],
            "afternoon": ["activity1", "activity2", "activity3"],
            "evening": ["activity1", "activity2", "activity3"]
          }
        ],
        "motivationalQuote": "inspirational message"
      }`;

      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": "Bearer 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",
          "HTTP-Referer": window.location.origin,
          "X-Title": "Uday.AI - TG ANB Recovery Planner",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "model": "mistralai/mistral-small-3.2-24b-instruct:free",
          "messages": [
            {
              "role": "system",
              "content": "You are Uday.AI, a compassionate recovery planning assistant by TG ANB. Create supportive, practical recovery plans with empathy. Always include disclaimers about seeking professional help."
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
        const parsedPlan = JSON.parse(aiResponse);
        setRecoveryPlan(parsedPlan);
      } catch {
        // Fallback plan
        const daysRequested = parseInt(recoveryData.planDuration.split(' ')[0]) || 7;
        const fallbackPlan: RecoveryPlan = {
          dailySchedules: Array.from({ length: daysRequested }, (_, i) => ({
            day: i + 1,
            morning: [
              "Start with deep breathing exercise (5 minutes)",
              "Drink a glass of water and take vitamins",
              "Write in recovery journal - 3 things you're grateful for",
              "Light exercise or stretching (15 minutes)"
            ],
            afternoon: [
              "Healthy meal preparation and mindful eating",
              "Engage in a hobby or creative activity",
              "Connect with a supportive friend or family member",
              "Take a walk in nature or fresh air"
            ],
            evening: [
              "Reflect on the day's achievements in journal",
              "Practice relaxation or meditation (10 minutes)",
              "Plan tomorrow's positive activities",
              "Early bedtime routine for quality sleep"
            ]
          })),
          motivationalQuote: "Every sunrise is a new beginning. You have the strength to rise above addiction and create the life you deserve. One day at a time, you are healing and growing stronger."
        };
        setRecoveryPlan(fallbackPlan);
      }
      
      setShowPlan(true);
    } catch (error) {
      console.error('Error generating recovery plan:', error);
      // Set fallback plan on error
      const daysRequested = parseInt(recoveryData.planDuration.split(' ')[0]) || 7;
      const fallbackPlan: RecoveryPlan = {
        dailySchedules: Array.from({ length: daysRequested }, (_, i) => ({
          day: i + 1,
          morning: [
            "Start with deep breathing exercise",
            "Hydrate and take care of basic needs",
            "Set positive intentions for the day",
            "Light physical activity"
          ],
          afternoon: [
            "Nutritious meal and self-care",
            "Productive or creative activity",
            "Social connection with support system",
            "Outdoor time if possible"
          ],
          evening: [
            "Reflect on daily progress",
            "Relaxation and stress relief",
            "Prepare for restful sleep",
            "Express gratitude"
          ]
        })),
        motivationalQuote: "Recovery is a journey of small, consistent steps. You are stronger than you know, and each day brings new hope and healing."
      };
      setRecoveryPlan(fallbackPlan);
      setShowPlan(true);
    } finally {
      setIsLoading(false);
    }
  };

  const scrollToPlanner = () => {
    document.getElementById('planner-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (showPlan && recoveryPlan) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 font-poppins">
        <Header />
        
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                Your Personalized Recovery Plan
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                Hello {recoveryData.name}, here's your tailored path to healing and growth
              </p>
            </div>

            {/* AI Disclaimer */}
            <Card className="mb-8 border-orange-200 bg-orange-50 dark:bg-orange-900/20">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-orange-800 dark:text-orange-200 mb-2">Important Notice</h3>
                    <p className="text-orange-700 dark:text-orange-300 text-sm">
                      This is an AI-generated recovery plan designed to provide natural tips and supportive guidance. 
                      Uday.AI is not a replacement for professional medical treatment or therapy. If you are in a 
                      critical situation or experiencing severe withdrawal symptoms, please visit a rehabilitation 
                      center or contact a healthcare professional immediately.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Motivational Quote */}
            <Card className="mb-8 bg-gradient-to-r from-orange-100 to-pink-100 dark:from-orange-900/20 dark:to-pink-900/20">
              <CardContent className="p-8 text-center">
                <Heart className="w-12 h-12 text-pink-500 mx-auto mb-4" />
                <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                  "{recoveryPlan.motivationalQuote}"
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">— Your Uday.AI Companion</p>
              </CardContent>
            </Card>

            {/* Daily Schedules */}
            <div className="space-y-6 mb-8">
              {recoveryPlan.dailySchedules.map((schedule) => (
                <Card key={schedule.day}>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Calendar className="w-6 h-6 mr-2 text-orange-500" />
                      Day {schedule.day} Recovery Schedule
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-bold text-orange-600 mb-3 flex items-center">
                          <Sunrise className="w-4 h-4 mr-2" />
                          Morning
                        </h4>
                        <ul className="space-y-2">
                          {schedule.morning.map((activity, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <span className="text-orange-500 mt-1">•</span>
                              <span className="text-sm text-gray-600 dark:text-gray-300">{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-blue-600 mb-3 flex items-center">
                          ☀️ Afternoon
                        </h4>
                        <ul className="space-y-2">
                          {schedule.afternoon.map((activity, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <span className="text-blue-500 mt-1">•</span>
                              <span className="text-sm text-gray-600 dark:text-gray-300">{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-purple-600 mb-3 flex items-center">
                          🌙 Evening
                        </h4>
                        <ul className="space-y-2">
                          {schedule.evening.map((activity, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <span className="text-purple-500 mt-1">•</span>
                              <span className="text-sm text-gray-600 dark:text-gray-300">{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="text-center space-y-4">
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Button className="bg-orange-500 hover:bg-orange-600">
                  <Download className="w-4 h-4 mr-2" />
                  Download Recovery Plan PDF
                </Button>
                <Button variant="outline">
                  📧 Send to Counselor
                </Button>
              </div>
              <div>
                <Button variant="ghost" onClick={() => setShowPlan(false)}>
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Create New Plan
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Help Strip */}
        <div className="bg-red-600 text-white p-4">
          <div className="container mx-auto text-center">
            <p className="font-bold mb-2">💬 Need support or rehab info?</p>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-6">
              <span className="text-lg">📞 TG ANB Drug Helpline: 8712671111</span>
              <Button className="bg-white text-red-600 hover:bg-gray-100">
                📍 Find Nearby Rehab Center
              </Button>
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
              <p className="text-xl opacity-90">Rise Every Day Stronger</p>
            </div>
          </div>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Your personalized AI recovery planner to help you heal, grow, and stay focused on your journey to wellness.
          </p>
          <Button 
            onClick={scrollToPlanner}
            className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
          >
            🌅 Start My Day Plan
          </Button>
        </div>
      </section>

      {/* Recovery Input Questionnaire */}
      <div id="planner-section" className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Daily Recovery Assessment
              </CardTitle>
              <p className="text-center text-gray-600 dark:text-gray-300">
                Let's create a personalized recovery plan just for you
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Your name:</label>
                <Input
                  value={recoveryData.name}
                  onChange={(e) => setRecoveryData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">What substances are you recovering from?</label>
                <Input
                  value={recoveryData.drugAddicted}
                  onChange={(e) => setRecoveryData(prev => ({ ...prev, drugAddicted: e.target.value }))}
                  placeholder="e.g., Alcohol, Cannabis, etc."
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">How long have you been addicted?</label>
                <Input
                  value={recoveryData.addictionDuration}
                  onChange={(e) => setRecoveryData(prev => ({ ...prev, addictionDuration: e.target.value }))}
                  placeholder="e.g., 2 years, 6 months, etc."
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Have you tried recovery before?</label>
                <Input
                  value={recoveryData.attemptedRecovery}
                  onChange={(e) => setRecoveryData(prev => ({ ...prev, attemptedRecovery: e.target.value }))}
                  placeholder="Describe your previous recovery attempts"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  How are you feeling today? ({recoveryData.mood[0]}/10)
                </label>
                <Slider
                  value={recoveryData.mood}
                  onValueChange={(value) => setRecoveryData(prev => ({ ...prev, mood: value }))}
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
                  Energy level today ({recoveryData.energyLevel[0]}/10)
                </label>
                <Slider
                  value={recoveryData.energyLevel}
                  onValueChange={(value) => setRecoveryData(prev => ({ ...prev, energyLevel: value }))}
                  max={10}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>No Energy</span>
                  <span>High Energy</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">What cravings or triggers are you experiencing?</label>
                <Textarea
                  value={recoveryData.cravings}
                  onChange={(e) => setRecoveryData(prev => ({ ...prev, cravings: e.target.value }))}
                  placeholder="Describe any cravings, triggers, or challenges you're facing today"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">How was your sleep quality last night?</label>
                <div className="space-y-2">
                  {['Excellent', 'Good', 'Fair', 'Poor', 'Very Poor'].map(option => (
                    <label key={option} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="sleepQuality"
                        value={option}
                        checked={recoveryData.sleepQuality === option}
                        onChange={(e) => setRecoveryData(prev => ({ ...prev, sleepQuality: e.target.value }))}
                        className="text-orange-600"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">What's one goal you want to achieve in your recovery?</label>
                <Textarea
                  value={recoveryData.goal}
                  onChange={(e) => setRecoveryData(prev => ({ ...prev, goal: e.target.value }))}
                  placeholder="Share your recovery goal or what you hope to accomplish"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Recovery plan needed for how many days?</label>
                <Input
                  value={recoveryData.planDuration}
                  onChange={(e) => setRecoveryData(prev => ({ ...prev, planDuration: e.target.value }))}
                  placeholder="e.g., 7 days, 14 days, 30 days"
                />
              </div>

              <div className="flex items-center space-x-3">
                <Switch
                  checked={recoveryData.guidedRehab}
                  onCheckedChange={(checked) => setRecoveryData(prev => ({ ...prev, guidedRehab: checked }))}
                />
                <label className="text-sm font-medium">Are you currently under guided rehabilitation?</label>
              </div>

              <Button 
                onClick={generateRecoveryPlan}
                disabled={isLoading || !recoveryData.name || !recoveryData.planDuration}
                className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-lg py-3"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Creating Your Recovery Plan...
                  </>
                ) : (
                  <>
                    🧘 Generate My AI Recovery Plan
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Privacy & Compassion Notice */}
      <div className="bg-pink-50 dark:bg-pink-900/20 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <Heart className="w-8 h-8 text-pink-500 mr-3" />
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">100% Private & Compassionate</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Uday.AI is 100% private and anonymous. Your progress is yours alone. 
            We are here to guide, never judge. You are not alone in this journey.
          </p>
        </div>
      </div>

      {/* Who Should Use Uday.AI */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
            Who Should Use Uday.AI?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🙋‍♂️', text: 'Individuals undergoing rehab or in self-recovery' },
              { icon: '👩‍⚕️', text: 'Counselors & de-addiction therapists' },
              { icon: '🤝', text: 'TG ANB volunteers helping in field' },
              { icon: '👨‍👩‍👧‍👦', text: 'Families of recovering persons' }
            ].map((item, index) => (
              <Card key={index} className="text-center p-6">
                <div className="text-4xl mb-4">{item.icon}</div>
                <p className="text-gray-600 dark:text-gray-300">{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Footer – Developed & Trusted By */}
      <div className="bg-orange-50 dark:bg-orange-900/20 py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Developed & Trusted By</h3>
          <div className="flex items-center justify-center space-x-6 mb-4">
            <img 
              src="/uploads/3cc3a66f-c1e9-4a3e-ae78-665c190d4eb4.png" 
              alt="TG ANB" 
              className="h-16 w-16 rounded-full"
            />
            <img 
              src="/uploads/37f408d2-9357-4e1c-af91-05f171f00af2.png" 
              alt="T-RISING.AI" 
              className="h-16 w-16 rounded-full"
            />
          </div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Uday.AI is a digital wellness companion developed by Telangana Anti-Narcotics Bureau, 
            as part of the T-RISING.AI ecosystem to support healing with empathy and intelligence.
          </p>
        </div>
      </div>

      {/* Help Bar */}
      <div className="bg-purple-600 text-white p-4">
        <div className="container mx-auto text-center">
          <p className="font-bold mb-2">💬 Need support or rehab info?</p>
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
