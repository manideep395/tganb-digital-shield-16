
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const OperationSankalp = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 font-poppins">
      <Header />
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="text-blue-600">Operation</span> Sankalp
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              A comprehensive initiative to combat drug trafficking and substance abuse in Telangana
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">About Operation Sankalp</h2>
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  Operation Sankalp is a strategic initiative launched by the Telangana Anti Narcotics Bureau 
                  to create a comprehensive framework for combating drug-related crimes and substance abuse 
                  across the state.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Key Objectives</h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 mb-6">
                  <li>Systematic identification and elimination of drug trafficking networks</li>
                  <li>Community-based awareness and prevention programs</li>
                  <li>Rehabilitation and support for substance abuse victims</li>
                  <li>Coordination between various law enforcement agencies</li>
                  <li>Intelligence gathering and data-driven operations</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Implementation Strategy</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  The operation involves multi-pronged approach including targeted raids, surveillance, 
                  community engagement, educational programs in schools and colleges, and collaboration 
                  with various stakeholders including parents, teachers, and community leaders.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Join the Mission</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  Be part of this crucial mission to create a drug-free Telangana. Your participation 
                  as an Anti-Drug Soldier can make a significant difference in our communities.
                </p>
              </div>

              <div className="text-center">
                <Button 
                  onClick={() => navigate('/anti-drug-soldier-enrollment')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
                >
                  Join Operation Sankalp
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

export default OperationSankalp;
