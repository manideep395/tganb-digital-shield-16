
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const EventsCampaigns = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 font-poppins">
      <Header />
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="text-blue-600">Events &</span> Campaigns
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              Join our awareness campaigns and community events for a drug-free Telangana
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Our Campaigns</h2>
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  TGANB organizes various awareness campaigns and events throughout the year 
                  to educate the public about the dangers of drug abuse and promote healthy 
                  lifestyle choices among all age groups.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Types of Events</h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 mb-6">
                  <li>School and college awareness programs</li>
                  <li>Community outreach events</li>
                  <li>Anti-drug rallies and marches</li>
                  <li>Cultural programs with anti-drug messages</li>
                  <li>Sports events promoting healthy living</li>
                  <li>Rehabilitation center visits</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Get Involved</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  We welcome volunteers and participants for our events and campaigns. 
                  Your involvement helps spread awareness and makes our initiatives more 
                  impactful in reaching diverse communities across Telangana.
                </p>

                <div className="text-center bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Join Our Mission</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Be part of our events and campaigns. Enroll as an Anti-Drug Soldier 
                    and help us create a stronger, drug-free community.
                  </p>
                  <Button 
                    onClick={() => navigate('/anti-drug-soldier-enrollment')}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
                  >
                    Get Involved
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default EventsCampaigns;
