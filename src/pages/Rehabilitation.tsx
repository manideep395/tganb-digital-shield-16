
import { Heart, Brain, Users, ArrowRight, CheckCircle, Shield } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Rehabilitation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <main className="py-12">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-poppins">
              Drug <span className="text-blue-600">Rehabilitation</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              A comprehensive approach to recovery and restoration for individuals affected by substance abuse
            </p>
          </div>

          {/* Definition Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-3xl p-8 md:p-12 shadow-2xl mb-16">
            <div className="text-center">
              <Heart className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">What is Rehabilitation?</h2>
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm mb-6">
                <p className="text-xl leading-relaxed italic">
                  "A set of interventions designed to optimize functioning and reduce disability 
                  in individuals with health conditions in interaction with their environment."
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <CheckCircle className="w-8 h-8 text-yellow-400 mb-3" />
                  <p className="text-blue-200">It is the restoration of the ability to function</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <Users className="w-8 h-8 text-yellow-400 mb-3" />
                  <p className="text-blue-200">It is to support an addict to achieve maximum function and independence</p>
                </div>
              </div>
            </div>
          </div>

          {/* WHO Definition */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-blue-100 mb-16">
            <div className="flex items-center mb-6">
              <Shield className="w-12 h-12 text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-900 font-poppins">WHO Definition</h2>
            </div>
            <div className="bg-blue-50 rounded-2xl p-6 border-l-4 border-blue-600">
              <p className="text-lg text-gray-700 italic">
                "The combined and coordinated use of Medical, Social, Educational and Vocational measures 
                for training the individual to the highest level of functional ability"
              </p>
            </div>
          </div>

          {/* Drug Rehabilitation Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center font-poppins">Understanding Drug Rehabilitation</h2>
            
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-blue-100 mb-8">
              <div className="flex items-center mb-6">
                <Brain className="w-12 h-12 text-purple-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900 font-poppins">The Process</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Drug rehabilitation is the process of medical or psychotherapeutic treatment for dependency 
                on psychoactive substances such as alcohol, prescription drugs, and street drugs such as 
                cannabis, cocaine, heroin, amphetamines, etc.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-gray-900">Primary Goals:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Enable the patient to confront substance dependence</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Make an addict free from addiction to alcohol and street drugs</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Know the underlying cause behind a person becoming an addict</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-gray-900">Treatment Includes:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <ArrowRight className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Medication for depression or other disorders</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <ArrowRight className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Counselling by experts</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <ArrowRight className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Sharing of experience with other addicts</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Facts */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-poppins">Treatment Duration</h3>
              <p className="text-gray-700 mb-4">
                Treatment can be a long process and the duration is dependent upon the patient's needs 
                and history of substance use.
              </p>
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-blue-800 font-semibold">
                  Research shows that most patients need at least three months of treatment, 
                  and longer durations are associated with better outcomes.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-poppins">Treatment Approach</h3>
              <p className="text-gray-700 mb-4">
                Traditional addiction treatment is based primarily on counselling, which forms 
                the foundation of recovery.
              </p>
              <div className="bg-green-50 rounded-lg p-4">
                <p className="text-green-800 font-semibold">
                  Rehabilitation helps to create positive thinking in the addict and improves their quality of life.
                </p>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-blue-100 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center font-poppins">Benefits of Rehabilitation</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <Brain className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Mental Health</h3>
                <p className="text-gray-600 text-sm">Creates positive thinking and mental clarity</p>
              </div>
              
              <div className="text-center p-6 bg-green-50 rounded-xl">
                <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Risk Awareness</h3>
                <p className="text-gray-600 text-sm">Educates about risk factors due to addiction</p>
              </div>
              
              <div className="text-center p-6 bg-purple-50 rounded-xl">
                <Heart className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Quality of Life</h3>
                <p className="text-gray-600 text-sm">Improves overall quality of life and relationships</p>
              </div>
              
              <div className="text-center p-6 bg-yellow-50 rounded-xl">
                <Users className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Social Impact</h3>
                <p className="text-gray-600 text-sm">Understanding impact on social and professional life</p>
              </div>
              
              <div className="text-center p-6 bg-red-50 rounded-xl">
                <CheckCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Side Effects</h3>
                <p className="text-gray-600 text-sm">Education about various side effects of drug abuse</p>
              </div>
              
              <div className="text-center p-6 bg-indigo-50 rounded-xl">
                <ArrowRight className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Personal Growth</h3>
                <p className="text-gray-600 text-sm">Understanding impact on personal life and relationships</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="text-center">
              <Heart className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">Start Your Journey to Recovery</h2>
              <p className="text-xl text-blue-200 mb-8 max-w-4xl mx-auto leading-relaxed">
                Recovery is possible. Our comprehensive rehabilitation programs provide the support, 
                guidance, and medical care needed for successful recovery and long-term sobriety.
              </p>
              <button className="bg-yellow-500 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition-colors">
                Find Help Now
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Rehabilitation;
