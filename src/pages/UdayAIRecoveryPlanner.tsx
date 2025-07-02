
import { useState } from 'react';
import { Send, Bot, User, Sunrise } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const UdayAIRecoveryPlanner = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm Uday.AI, your recovery consultation assistant. I'll help assess your situation and connect you with the right professional help. Let me know about your current situation and I'll guide you to appropriate specialists and treatment centers.",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentApiKeyIndex, setCurrentApiKeyIndex] = useState(0);

  // Get all available API keys from environment variables
  const getApiKeys = () => {
    const keys = [];
    for (let i = 1; i <= 10; i++) {
      const key = import.meta.env[`VITE_GEMINI_API_KEY_${i}`];
      if (key && key.trim() && key !== '') {
        keys.push(key);
      }
    }
    console.log(`Found ${keys.length} API keys configured for Uday.AI`);
    return keys;
  };

  const sendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    const apiKeys = getApiKeys();
    if (apiKeys.length === 0) {
      console.error('No API keys found in environment variables');
      const errorMessage: Message = {
        id: messages.length + 2,
        text: "I'm sorry, no API keys are configured. Please contact support at 1908 or 8712671111.",
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
      setIsLoading(false);
      return;
    }

    let attempts = 0;
    let success = false;

    while (attempts < apiKeys.length && !success) {
      const currentKey = apiKeys[currentApiKeyIndex];
      console.log(`Attempting API call with key index ${currentApiKeyIndex + 1}`);
      
      try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${currentKey}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `You are Uday.AI, a recovery consultation assistant developed by Telangana Anti-Narcotics Bureau (TG ANB). Your role is to:

1. Assess the user's recovery situation and risk level (Low, Medium, High)
2. Recommend appropriate professional consultations (medical doctors, psychiatrists, counselors, therapists)
3. Suggest suitable rehabilitation centers and treatment facilities
4. Provide guidance on what questions to ask professionals
5. Offer immediate support resources and emergency contacts

IMPORTANT GUIDELINES:
- DO NOT create recovery plans or daily schedules
- Focus on professional consultation recommendations
- Assess risk level and urgency of professional intervention needed
- Recommend specific types of professionals to consult
- Suggest rehabilitation centers based on needs assessment
- Always include TG ANB helpline numbers: 1908 (Emergency) or 8712671111 (General Contact)

User's message: ${inputText}`
                  }
                ]
              }
            ]
          })
        });

        if (response.ok) {
          const data = await response.json();
          let aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || "I'm here to help you find professional support. Could you please share more details about your situation?";
          
          // Ensure correct contact numbers in response
          aiResponse = aiResponse.replace(/(?:contact|call|reach).{0,50}(?:\d{10,}|\d{3,4}[-\s]?\d{3,4}[-\s]?\d{3,4})/gi, 
            'contact TG ANB at 1908 (Emergency) or 8712671111');

          const aiMessage: Message = {
            id: messages.length + 2,
            text: aiResponse,
            isUser: false,
            timestamp: new Date()
          };

          setMessages(prev => [...prev, aiMessage]);
          success = true;
          console.log('API call successful');
        } else {
          throw new Error(`HTTP ${response.status}`);
        }
      } catch (error) {
        console.error(`API Key ${currentApiKeyIndex + 1} failed:`, error);
        attempts++;
        setCurrentApiKeyIndex((prev) => (prev + 1) % apiKeys.length);
        
        if (attempts >= apiKeys.length) {
          const errorMessage: Message = {
            id: messages.length + 2,
            text: "I'm sorry, I'm having trouble connecting right now. For immediate professional consultation guidance, please contact our helpline at 1908 (Emergency) or 8712671111 (General Contact).",
            isUser: false,
            timestamp: new Date()
          };
          setMessages(prev => [...prev, errorMessage]);
        }
      }
    }

    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 dark:from-gray-900 dark:to-gray-800 font-poppins">
      <Header />
      
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-r from-orange-600 to-amber-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-4xl mr-4">
              🌅
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-2">Uday.AI</h1>
              <p className="text-xl opacity-90">Recovery Consultation Assistant</p>
            </div>
          </div>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Get professional consultation guidance and connect with appropriate recovery specialists and treatment centers.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-6">
        <div className="max-w-4xl mx-auto">
          {/* Main Chat Interface */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-orange-600 to-amber-600 text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center text-2xl">
                    🌅
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <h3 className="font-bold">Uday.AI</h3>
                  <p className="text-sm opacity-90">Professional Consultation Guidance</p>
                </div>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="h-96 overflow-y-auto p-4 bg-gray-50 dark:bg-gray-900">
              {messages.map((message) => (
                <div key={message.id} className={`mb-4 flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex items-start space-x-2 max-w-xs lg:max-w-md ${message.isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${message.isUser ? 'bg-orange-600' : 'bg-amber-600'}`}>
                      {message.isUser ? <User className="w-4 h-4 text-white" /> : <Sunrise className="w-4 h-4 text-white" />}
                    </div>
                    <div className={`px-4 py-2 rounded-lg ${message.isUser ? 'bg-orange-600 text-white' : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-white border'}`}>
                      <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                      <p className={`text-xs mt-1 ${message.isUser ? 'text-orange-100' : 'text-gray-500 dark:text-gray-400'}`}>
                        {message.timestamp.toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-amber-600 flex items-center justify-center">
                      <Sunrise className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-white dark:bg-gray-800 border px-4 py-2 rounded-lg">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t dark:border-gray-700">
              <div className="flex space-x-2">
                <Input
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Describe your situation for professional consultation guidance..."
                  className="flex-1"
                  disabled={isLoading}
                />
                <Button 
                  onClick={sendMessage} 
                  disabled={isLoading || !inputText.trim()}
                  className="bg-orange-600 hover:bg-orange-700"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Powered By Section */}
          <div className="mt-6 text-center">
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gray-200/50 dark:border-gray-700/50">
              <div className="flex items-center justify-center mb-3">
                <img 
                  src="/uploads/3cc3a66f-c1e9-4a3e-ae78-665c190d4eb4.png" 
                  alt="TG ANB" 
                  className="h-8 w-8 rounded-full mr-3"
                />
                <img 
                  src="/uploads/37f408d2-9357-4e1c-af91-05f171f00af2.png" 
                  alt="Telangana" 
                  className="h-8 w-8 rounded-full"
                />
              </div>
              <p className="font-semibold text-gray-800 dark:text-white mb-1">
                Powered by Telangana Anti-Narcotics Bureau
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Professional Recovery Consultation Guidance — AI for Recovery Support
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default UdayAIRecoveryPlanner;
