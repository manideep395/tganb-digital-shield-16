
import Header from '../components/Header';
import Footer from '../components/Footer';
import { trainingData } from '../data/trainingData';
import { Calendar, MapPin, Users, Image } from 'lucide-react';

const LearningResources = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-poppins">
              <span className="text-blue-600">Trainings</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Comprehensive training programs conducted by TGANB to enhance officer capabilities in anti-narcotics operations
            </p>
          </div>

          <div className="grid gap-8">
            {trainingData.map((training) => (
              <div key={training.id} className="bg-white rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="grid md:grid-cols-4 gap-6 p-6">
                  {/* Training Image Placeholder */}
                  <div className="md:col-span-1">
                    <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center">
                      {training.photo ? (
                        <img 
                          src={training.photo} 
                          alt={`Training ${training.id}`}
                          className="w-full h-full object-cover rounded-xl"
                        />
                      ) : (
                        <div className="text-center">
                          <Image className="w-12 h-12 text-blue-400 mx-auto mb-2" />
                          <p className="text-xs text-blue-600 font-medium">Image will be added</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Training Details */}
                  <div className="md:col-span-3 space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                        Training #{training.id}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 leading-tight">
                      {training.name}
                    </h3>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Calendar className="w-4 h-4 text-green-600" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-700">Date</p>
                          <p className="text-sm text-gray-600">{training.date}</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-4 h-4 text-purple-600" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-700">Venue</p>
                          <p className="text-sm text-gray-600">{training.place}</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Users className="w-4 h-4 text-orange-600" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-700">Participants</p>
                          <p className="text-sm text-gray-600">{training.nominatedOfficers}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Stats */}
          <div className="mt-16 grid md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white text-center">
              <h3 className="text-2xl font-bold mb-2">{trainingData.length}</h3>
              <p className="text-blue-100">Total Training Sessions</p>
            </div>
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white text-center">
              <h3 className="text-2xl font-bold mb-2">1000+</h3>
              <p className="text-green-100">Officers Trained</p>
            </div>
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-white text-center">
              <h3 className="text-2xl font-bold mb-2">50+</h3>
              <p className="text-purple-100">Training Hours</p>
            </div>
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 text-white text-center">
              <h3 className="text-2xl font-bold mb-2">15+</h3>
              <p className="text-orange-100">Training Venues</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default LearningResources;
