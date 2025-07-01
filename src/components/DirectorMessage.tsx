
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const DirectorMessage = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 font-poppins">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Leadership Messages
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Inspiring words from our distinguished leaders in the fight against narcotics
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* DGP Message - Left Side 50% */}
          <Card className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border-0">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4 mb-6">
                <img 
                  src="/uploads/f8dc5c1c-f04c-4da0-914e-58f74d4e9436.png" 
                  alt="DGP Telangana" 
                  className="w-16 h-16 rounded-full border-4 border-white/30 object-cover"
                />
                <div className="text-left">
                  <h3 className="text-xl font-bold text-white">Dr. Jitender</h3>
                  <p className="text-blue-200 text-sm">IPS, Director General of Police</p>
                  <p className="text-blue-200 text-xs">Telangana State</p>
                </div>
              </div>
              
              <div className="relative">
                <Quote className="w-8 h-8 text-blue-300 opacity-50 mb-4" />
                <blockquote className="text-base leading-relaxed text-left italic">
                  "The fight against narcotics requires unwavering commitment from every section of society. Through the Telangana Anti-Narcotics Bureau, we are not just enforcing the law, but building a foundation for a drug-free future. Our comprehensive approach combines strict enforcement with compassionate rehabilitation, ensuring that we address both the symptoms and root causes of this menace."
                </blockquote>
              </div>
            </CardContent>
          </Card>

          {/* Director Message - Right Side 50% */}
          <Card className="bg-gradient-to-br from-green-600 to-emerald-700 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border-0">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4 mb-6">
                <img 
                  src="/uploads/8f0c5105-a6c3-4812-85b3-0e1c39e29f3b.png" 
                  alt="Director TGANB" 
                  className="w-16 h-16 rounded-full border-4 border-white/30 object-cover"
                />
                <div className="text-left">
                  <h3 className="text-xl font-bold text-white">Shri. N. Prakash Reddy</h3>
                  <p className="text-green-200 text-sm">IPS, Director</p>
                  <p className="text-green-200 text-xs">Telangana Anti-Narcotics Bureau</p>
                </div>
              </div>
              
              <div className="relative">
                <Quote className="w-8 h-8 text-green-300 opacity-50 mb-4" />
                <blockquote className="text-base leading-relaxed text-left italic">
                  "Our mission extends beyond mere law enforcement. We are guardians of Telangana's future, working tirelessly to create a society where every individual can thrive free from the clutches of narcotics. Through innovative programs like Mission Parivartana and Operation Sankalp, we are transforming lives and communities, one intervention at a time."
                </blockquote>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DirectorMessage;
