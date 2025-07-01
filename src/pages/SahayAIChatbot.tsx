
import { useState } from 'react';
import { Send, Bot, User } from 'lucide-react';
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

  // Function to format AI response text
  const formatMessage = (text: string) => {
    // Split by numbered lists first
    let formattedText = text.replace(/(\d+\.\s)/g, '\n$1');
    
    // Handle bold text conversion
    formattedText = formattedText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Handle line breaks after colons
    formattedText = formattedText.replace(/:\s/g, ':\n');
    
    // Convert newlines to proper line breaks
    formattedText = formattedText.replace(/\n/g, '<br/>');
    
    return formattedText;
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

    try {
      const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyDit5Xy8Vrya6Gul7OD2PCEANZL4hPzNNk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `You are Sahay.AI, a compassionate AI assistant developed by Telangana Anti-Narcotics Bureau (TG ANB). Your role is to provide support, awareness, and guidance about drug abuse prevention and recovery. Be empathetic, informative, and always encourage seeking professional help when needed. Keep responses concise but helpful. User's message: ${inputText}`
                }
              ]
            }
          ]
        })
      });

      const data = await response.json();
      const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || "I'm here to help you. Could you please rephrase your question?";

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:to-gray-800 font-poppins">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <img 
              src="/uploads/3cc3a66f-c1e9-4a3e-ae78-665c190d4eb4.png" 
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
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Main Chat Interface */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <img 
                    src="/uploads/3cc3a66f-c1e9-4a3e-ae78-665c190d4eb4.png" 
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
                      {message.isUser ? (
                        <p className="text-sm">{message.text}</p>
                      ) : (
                        <div 
                          className="text-sm" 
                          dangerouslySetInnerHTML={{ __html: formatMessage(message.text) }}
                        />
                      )}
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

          {/* Powered By Section - Centered */}
          <div className="mt-8 text-center">
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
                Developed as part of T-RISING.AI — AI for a Drug-Free Telangana
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SahayAIChatbot;
