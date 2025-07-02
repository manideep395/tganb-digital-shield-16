
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const RedirectionChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m here to help you navigate the website. You can ask me to go to different pages like "Go to FAQs", "Show me trainings", "Take me to achievements", etc.',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const pageRoutes = {
    'faqs': '/faqs',
    'faq': '/faqs',
    'questions': '/faqs',
    'trainings': '/trainings',
    'training': '/trainings',
    'learning': '/learning-resources',
    'achievements': '/achievements',
    'achievement': '/achievements',
    'news': '/',
    'home': '/',
    'report': '/drug-report',
    'drug report': '/drug-report',
    'submit report': '/drug-report',
    'anti drug soldier': '/anti-drug-soldiers',
    'soldier': '/anti-drug-soldiers',
    'certificate': '/certificate-verification',
    'verify certificate': '/certificate-verification',
    'shield ai': '/shield-ai',
    'risk assessment': '/shield-ai',
    'ai': '/shield-ai'
  };

  const findRoute = (text: string): string | null => {
    const lowerText = text.toLowerCase();
    
    for (const [keyword, route] of Object.entries(pageRoutes)) {
      if (lowerText.includes(keyword)) {
        return route;
      }
    }
    
    return null;
  };

  const getPageName = (route: string): string => {
    const pageNames: { [key: string]: string } = {
      '/faqs': 'FAQs',
      '/trainings': 'Trainings',
      '/learning-resources': 'Learning Resources',
      '/achievements': 'Achievements',
      '/': 'Home',
      '/drug-report': 'Drug Report Submission',
      '/anti-drug-soldiers': 'Anti-Drug Soldiers',
      '/certificate-verification': 'Certificate Verification',
      '/shield-ai': 'Shield AI Risk Assessment'
    };
    return pageNames[route] || 'the requested page';
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Process the message and find route
    const route = findRoute(inputValue);
    
    setTimeout(() => {
      let botResponse: string;
      
      if (route) {
        const pageName = getPageName(route);
        botResponse = `I'll take you to ${pageName}. Redirecting now...`;
        
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: botResponse,
          sender: 'bot',
          timestamp: new Date()
        };
        
        setMessages(prev => [...prev, botMessage]);
        
        // Navigate after a short delay
        setTimeout(() => {
          navigate(route);
          setIsOpen(false);
        }, 1500);
      } else {
        botResponse = `I can help you navigate to these pages:
        
• FAQs - Ask "go to faqs" or "show questions"
• Trainings - Say "show trainings" or "learning"
• Achievements - Ask "show achievements"
• Drug Report - Say "report drug" or "submit report"
• Anti-Drug Soldiers - Ask "soldier registration"
• Certificate Verification - Say "verify certificate"
• Shield AI - Ask "risk assessment" or "shield ai"
• Home - Say "go home"

What would you like to see?`;
        
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: botResponse,
          sender: 'bot',
          timestamp: new Date()
        };
        
        setMessages(prev => [...prev, botMessage]);
      }
    }, 500);

    setInputValue('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full w-14 h-14 bg-blue-600 hover:bg-blue-700 shadow-lg"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </Button>
      </div>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 w-80 h-96 bg-white rounded-lg shadow-2xl border z-50 flex flex-col">
          {/* Header */}
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bot className="w-5 h-5" />
              <span className="font-semibold">Navigation Assistant</span>
            </div>
            <Button
              onClick={() => setIsOpen(false)}
              variant="ghost"
              size="sm"
              className="text-white hover:bg-blue-700"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start space-x-2 ${
                  message.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {message.sender === 'bot' && (
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="w-3 h-3 text-blue-600" />
                  </div>
                )}
                <div
                  className={`max-w-xs p-3 rounded-lg text-sm whitespace-pre-line ${
                    message.sender === 'user'
                      ? 'bg-blue-600 text-white rounded-br-none'
                      : 'bg-gray-100 text-gray-800 rounded-bl-none'
                  }`}
                >
                  {message.text}
                </div>
                {message.sender === 'user' && (
                  <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-3 h-3 text-gray-600" />
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me to navigate anywhere..."
                className="flex-1"
              />
              <Button onClick={handleSendMessage} size="sm">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RedirectionChatbot;
