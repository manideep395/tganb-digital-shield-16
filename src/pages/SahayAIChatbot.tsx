
import { useState } from 'react';
import { Send, Bot, User, Shield, Heart, Phone, MapPin, Globe, Lock } from 'lucide-react';
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

const SahayAIChatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm Sahay.AI, your 24x7 digital anti-drug assistant. How can I help you today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [language, setLanguage] = useState('EN');

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

    try {
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": "Bearer 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",
          "HTTP-Referer": window.location.origin,
          "X-Title": "Sahay.AI - TG ANB",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "model": "mistralai/mistral-small-3.2-24b-instruct:free",
          "messages": [
            {
              "role": "system",
              "content": "You are Sahay.AI, a compassionate AI assistant developed by Telangana Anti-Narcotics Bureau (TG ANB). Your role is to provide support, awareness, and guidance about drug abuse prevention and recovery. Be empathetic, informative, and always encourage seeking professional help when needed. Keep responses concise but helpful."
            },
            {
              "role": "user",
              "content": inputText
            }
          ]
        })
      });

      const data = await response.json();
      const aiResponse = data.choices?.[0]?.message?.content || "I'm here to help you. Could you please rephrase your question?";

      const aiMessage: Message = {
        id: messages.length + 2,
        text: aiResponse,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage: Message = {
        id: messages.length + 2,
        text: "I'm sorry, I'm having trouble connecting right now. Please try again or contact our helpline at 8712671111.",
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const scrollToChat = () => {
    document.getElementById('chat-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:to-gray-800 font-poppins">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <img 
              src="/lovable-uploads/3cc3a66f-c1e9-4a3e-ae78-665c190d4eb4.png" 
              alt="TG ANB Logo" 
              className="h-16 w-16 mr-4 rounded-full border-2 border-white"
            />
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-2">Sahay.AI</h1>
              <p className="text-xl opacity-90">Your 24x7 Digital Anti-Drug Assistant</p>
            </div>
          </div>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            An AI-powered companion by TG ANB to help you rise above addiction and find the support you need.
          </p>
          <Button 
            onClick={scrollToChat}
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
          >
            Start Chatting
          </Button>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Chat Interface */}
          <div className="lg:col-span-2">
            <div id="chat-section" className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <img 
                      src="/lovable-uploads/3cc3a66f-c1e9-4a3e-ae78-665c190d4eb4.png" 
                      alt="Sahay.AI" 
                      className="h-10 w-10 rounded-full border-2 border-white"
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
                  </div>
                  <div>
                    <h3 className="font-bold">Sahay.AI</h3>
                    <p className="text-sm opacity-90">Always here to help</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <select 
                    value={language} 
                    onChange={(e) => setLanguage(e.target.value)}
                    className="bg-white/10 border border-white/20 rounded px-2 py-1 text-sm"
                  >
                    <option value="EN">EN</option>
                    <option value="TE">TE</option>
                    <option value="HI">HI</option>
                  </select>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="h-96 overflow-y-auto p-4 bg-gray-50 dark:bg-gray-900">
                {messages.map((message) => (
                  <div key={message.id} className={`mb-4 flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
                    <div className={`flex items-start space-x-2 max-w-xs lg:max-w-md ${message.isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${message.isUser ? 'bg-blue-600' : 'bg-green-600'}`}>
                        {message.isUser ? <User className="w-4 h-4 text-white" /> : <Bot className="w-4 h-4 text-white" />}
                      </div>
                      <div className={`px-4 py-2 rounded-lg ${message.isUser ? 'bg-blue-600 text-white' : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-white border'}`}>
                        <p className="text-sm">{message.text}</p>
                        <p className={`text-xs mt-1 ${message.isUser ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400'}`}>
                          {message.timestamp.toLocaleTimeString()}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center">
                        <Bot className="w-4 h-4 text-white" />
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
                    placeholder="Ask me anything about drug awareness, support, or rehab help..."
                    className="flex-1"
                    disabled={isLoading}
                  />
                  <Button 
                    onClick={sendMessage} 
                    disabled={isLoading || !inputText.trim()}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Info Panel */}
          <div className="space-y-6">
            {/* What Can Sahay.AI Help With */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                <Heart className="w-5 h-5 mr-2 text-red-500" />
                What Can Sahay.AI Help You With?
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-center space-x-3">
                  <Shield className="w-4 h-4 text-blue-500" />
                  <span>Effects of substances</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Shield className="w-4 h-4 text-blue-500" />
                  <span>Legal awareness & NDPS Act</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Heart className="w-4 h-4 text-red-500" />
                  <span>Coping strategies</span>
                </li>
                <li className="flex items-center space-x-3">
                  <User className="w-4 h-4 text-green-500" />
                  <span>Help for friends/family</span>
                </li>
                <li className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-purple-500" />
                  <span>Nearest rehab centers</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Heart className="w-4 h-4 text-pink-500" />
                  <span>Mental wellness & stress support</span>
                </li>
              </ul>
            </div>

            {/* Privacy Note */}
            <div className="bg-green-50 dark:bg-green-900/20 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                <Lock className="w-5 h-5 mr-2 text-green-600" />
                Confidential & Safe
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Sahay.AI does not store any personal data. Your conversations are private, secure, and meant only to help.
              </p>
            </div>

            {/* Powered By */}
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                <Globe className="w-5 h-5 mr-2 text-blue-600" />
                Powered By
              </h3>
              <div className="flex items-center space-x-3 mb-3">
                <img 
                  src="/lovable-uploads/3cc3a66f-c1e9-4a3e-ae78-665c190d4eb4.png" 
                  alt="TG ANB" 
                  className="h-10 w-10 rounded-full"
                />
                <img 
                  src="/lovable-uploads/37f408d2-9357-4e1c-af91-05f171f00af2.png" 
                  alt="Telangana" 
                  className="h-10 w-10 rounded-full"
                />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Developed by Telangana Anti-Narcotics Bureau as part of the T-RISING.AI mission — AI for a Drug-Free Telangana.
              </p>
            </div>
          </div>
        </div>

        {/* Emergency Helpline Strip */}
        <div className="mt-8 bg-red-600 text-white rounded-xl shadow-lg p-6">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Emergency Help Available 24x7</h3>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="font-bold">TG ANB Helpline: 8712671111</span>
              </div>
              <Button className="bg-white text-red-600 hover:bg-gray-100">
                <MapPin className="w-4 h-4 mr-2" />
                Find Nearest Rehab Center
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SahayAIChatbot;
