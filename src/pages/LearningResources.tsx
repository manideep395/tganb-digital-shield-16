
import { Download, Play, BookOpen, Award, Users } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { learningResourcesData } from '../data/learningResourcesData';

const LearningResources = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <main className="py-12">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-poppins">
              Learning <span className="text-blue-600">Resources</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive educational materials and certification programs for anti-drug awareness
            </p>
          </div>

          {/* Features Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center border border-blue-100">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 font-poppins">Study Materials</h3>
              <p className="text-gray-600">Comprehensive guides and documents for drug awareness education</p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center border border-blue-100">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 font-poppins">Certification Center</h3>
              <p className="text-gray-600">Take quizzes and earn certificates in anti-drug awareness</p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center border border-blue-100">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 font-poppins">Interactive Learning</h3>
              <p className="text-gray-600">Engage with interactive content and community learning</p>
            </div>
          </div>

          {/* Learning Resources */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center font-poppins">Available Resources</h2>
            <div className="grid gap-6">
              {learningResourcesData.map((resource, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-blue-100">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div className="flex-grow mb-4 md:mb-0">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 font-poppins">{resource.title}</h3>
                      <p className="text-gray-600 mb-4">{resource.description}</p>
                      <div className="flex items-center space-x-4">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          Educational Material
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex space-x-3">
                      <button 
                        onClick={() => window.open(resource.downloadLink, '_blank')}
                        className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors font-semibold"
                      >
                        <Download className="w-4 h-4" />
                        <span>Download</span>
                      </button>
                      <button 
                        onClick={() => window.open(resource.downloadLink, '_blank')}
                        className="flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors font-semibold"
                      >
                        <Play className="w-4 h-4" />
                        <span>View</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certification Center */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="text-center">
              <Award className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">Certification Center</h2>
              <p className="text-xl text-blue-200 mb-8 max-w-4xl mx-auto leading-relaxed">
                Test your knowledge and earn certificates in anti-drug awareness. Our comprehensive quiz system 
                will assess your understanding and provide official certification upon successful completion.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <h3 className="font-bold text-yellow-400 mb-2">Interactive Quizzes</h3>
                  <p className="text-sm text-blue-200">Multiple choice questions covering all aspects of drug awareness</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <h3 className="font-bold text-yellow-400 mb-2">Instant Results</h3>
                  <p className="text-sm text-blue-200">Get immediate feedback and detailed explanations</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <h3 className="font-bold text-yellow-400 mb-2">Official Certificate</h3>
                  <p className="text-sm text-blue-200">Download your certificate upon successful completion</p>
                </div>
              </div>
              <button className="bg-yellow-500 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition-colors">
                Start Certification Quiz
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default LearningResources;
