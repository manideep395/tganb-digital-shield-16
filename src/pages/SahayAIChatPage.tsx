
import React, { useState } from 'react';
import { MessageCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SahayAIChatPage = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! I'm Sahay.AI, your support companion. How can I help you today?", isBot: true }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = { text: inputMessage, isBot: false };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    setInputMessage('');

    // Simulate AI response
    setTimeout(() => {
      const botResponse = { 
        text: "Thank you for reaching out. I'm here to provide support and guidance. If you're experiencing difficulties, remember that help is available through TG ANB helpline: 8712671111", 
        isBot: true 
      };
      setMessages(prev => [...prev, botResponse]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Sahay.AI Chat</h1>
            <p className="text-gray-600">Your compassionate AI companion for support and guidance</p>
          </div>

          <Card className="h-96 mb-4">
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat with Sahay.AI
              </CardTitle>
            </CardHeader>
            <CardContent className="h-80 overflow-y-auto">
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div key={index} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
                    <div className={`max-w-xs p-3 rounded-lg ${
                      message.isBot 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {message.text}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 p-3 rounded-lg">
                      <div className="animate-pulse">Sahay.AI is typing...</div>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <div className="flex space-x-2">
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type your message..."
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <Button onClick={handleSendMessage} disabled={isLoading}>
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SahayAIChatPage;
