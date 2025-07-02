
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Users, BookOpen, Clock, MapPin } from 'lucide-react';
import { useContentData } from '@/hooks/useContentData';

const Trainings = () => {
  const { trainingData, isLoading } = useContentData();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
        <Header />
        <main className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading training programs...</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      <Header />
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Training Programs</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive training programs designed to enhance anti-narcotics capabilities and community awareness
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainingData.map((training) => (
              <Card key={training.id} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader>
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 bg-blue-100 text-blue-600">
                    Training Session
                  </div>
                  <CardTitle className="text-xl text-gray-800">{training.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{training.description}</p>
                  
                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{training.date}</span>
                    </div>
                    {training.time && (
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{training.time}</span>
                      </div>
                    )}
                    {training.location && (
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{training.location}</span>
                      </div>
                    )}
                    {training.instructor && (
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        <span>{training.instructor}</span>
                      </div>
                    )}
                    {training.capacity && (
                      <div className="flex items-center">
                        <BookOpen className="w-4 h-4 mr-2" />
                        <span>Capacity: {training.capacity} participants</span>
                      </div>
                    )}
                  </div>

                  {training.registration_link && (
                    <Button className="w-full mt-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                      <a href={training.registration_link} target="_blank" rel="noopener noreferrer">
                        Register Now
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {trainingData.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-xl text-gray-600">No training programs available at the moment.</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Trainings;
