
import { useState } from 'react';
import { Send, Bot, X, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const NavigationChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I can help you navigate to any page on the TG ANB website. Just ask me where you want to go!",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Navigation mapping
  const navigationMap: { [key: string]: string } = {
    'home': '/',
    'about': '/about-tganb',
    'sahay ai': '/sahay-ai-chat',
    'uday ai': '/uday-ai-planner',
    'shield ai': '/shield-ai',
    'news': '/news',
    'contact': '/contact',
    'officers': '/officers-directory',
    'rehabilitation': '/rehabilitation-centers',
    'mission parivartana': '/mission-parivartana',
    'operation sankalp': '/operation-sankalp',
    'training': '/trainings',
    'education': '/education',
    'anti drug soldier': '/anti-drug-soldier-enrollment',
    'report drug': '/drug-report-submission',
    'certificate': '/certificate-verification',
    'vision mission': '/vision-mission',
    'director': '/directors-note',
    'statistics': '/statistics',
    'faqs': '/faqs'
  };

  const findMatchingRoute = (query: string): string | null => {
    const lowerQuery = query.toLowerCase();
    
    for (const [key, route] of Object.entries(navigationMap)) {
      if (lowerQuery.includes(key) || key.includes(lowerQuery)) {
        return route;
      }
    }
    
    return null;
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    const matchedRoute = findMatchingRoute(inputText);
    
    setTimeout(() => {
      let responseText = '';
      
      if (matchedRoute) {
        responseText = `I found that page for you! Redirecting you now...`;
        const aiMessage: Message = {
          id: messages.length + 2,
          text: responseText,
          isUser: false,
          timestamp: new Date()
        };
        
        setMessages(prev => [...prev, aiMessage]);
        
        setTimeout(() => {
          navigate(matchedRoute);
          setIsOpen(false);
        }, 1000);
      } else {
        responseText = `I couldn't find a specific page for "${inputText}". Try asking about: Home, About, Sahay AI, Uday AI, Shield AI, News, Contact, Officers, Rehabilitation, Training, Education, Anti-Drug Soldier, Report Drug, Certificate, Vision Mission, Director's Note, Statistics, or FAQs.`;
        
        const aiMessage: Message = {
          id: messages.length + 2,
          text: responseText,
          isUser: false,
          timestamp: new Date()
        };
        
        setMessages(prev => [...prev, aiMessage]);
      }
      
      setIsLoading(false);
    }, 500);

    setInputText('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 h-96 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col z-50">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-3 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bot className="w-5 h-5" />
              <span className="font-semibold text-sm">Navigation Assistant</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-6 h-6 flex items-center justify-center hover:bg-white/20 rounded"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                  message.isUser 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white'
                }`}>
                  {message.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-3 border-t dark:border-gray-700">
            <div className="flex space-x-2">
              <Input
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Where do you want to go?"
                className="flex-1 text-sm"
                disabled={isLoading}
              />
              <Button
                onClick={handleSendMessage}
                disabled={isLoading || !inputText.trim()}
                size="sm"
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavigationChatAssistant;
