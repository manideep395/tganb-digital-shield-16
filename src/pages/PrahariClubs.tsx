
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const PrahariClubs = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 font-poppins">
      <Header />
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="text-blue-600">Prahari</span> Clubs
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              Student-led initiatives for drug-free educational institutions
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">About Prahari Clubs</h2>
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  Prahari Clubs are student-led organizations established in educational institutions 
                  across Telangana to promote drug awareness and create a supportive environment 
                  for substance-free living among youth.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Objectives</h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 mb-6">
                  <li>Peer-to-peer education and awareness programs</li>
                  <li>Creating drug-free zones in educational institutions</li>
                  <li>Organizing anti-drug campaigns and events</li>
                  <li>Providing support to at-risk students</li>
                  <li>Building leadership skills among youth</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Activities</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  Prahari Clubs organize various activities including awareness sessions, 
                  cultural programs, sports events, and counseling sessions. They work closely 
                  with school administration and TGANB to ensure effective implementation of 
                  anti-drug initiatives.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Join the Movement</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  Become a Prahari Club member and lead the change in your institution. 
                  Your active participation can inspire others and create a lasting impact.
                </p>
              </div>

              <div className="text-center">
                <Button 
                  onClick={() => navigate('/anti-drug-soldier-enrollment')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
                >
                  Join Prahari Clubs
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

export default PrahariClubs;
