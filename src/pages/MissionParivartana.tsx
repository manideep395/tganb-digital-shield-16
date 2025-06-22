
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const MissionParivartana = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 font-poppins">
      <Header />
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="text-blue-600">Mission</span> Parivartana
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              Transforming lives through rehabilitation and reintegration programs
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">About Mission Parivartana</h2>
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  Mission Parivartana represents our commitment to transformation and positive change 
                  in the lives of individuals affected by substance abuse. This comprehensive program 
                  focuses on rehabilitation, counseling, and successful reintegration into society.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Core Components</h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 mb-6">
                  <li>Medical detoxification and treatment programs</li>
                  <li>Psychological counseling and therapy sessions</li>
                  <li>Skill development and vocational training</li>
                  <li>Family counseling and support systems</li>
                  <li>Follow-up and aftercare services</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Our Approach</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  We believe in a holistic approach that addresses not just the addiction but the 
                  underlying causes and circumstances. Our programs are designed to restore dignity, 
                  rebuild confidence, and provide sustainable pathways to recovery.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Be Part of the Change</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  Join us in this transformative mission. Your support as an Anti-Drug Soldier 
                  helps us reach more individuals and families in need of assistance.
                </p>
              </div>

              <div className="text-center">
                <Button 
                  onClick={() => navigate('/anti-drug-soldier-enrollment')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
                >
                  Join Mission Parivartana
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MissionParivartana;
