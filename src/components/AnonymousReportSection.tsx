
import { Button } from '@/components/ui/button';
import { Shield, Lock, Phone, AlertTriangle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AnonymousReportSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Anonymous Drug Reporting</h2>
            <p className="text-xl text-gray-600">
              Help us fight drug trafficking by reporting suspicious activities. Your identity will be completely protected.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Complete Anonymity</h3>
              <p className="text-gray-600 text-sm">Your identity is fully protected. No personal information is stored or shared.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Secure Reporting</h3>
              <p className="text-gray-600 text-sm">All reports are encrypted and processed through secure channels.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">24/7 Support</h3>
              <p className="text-gray-600 text-sm">Report any time through multiple channels - online, phone, or in person.</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Emergency Reporting</h3>
            <p className="mb-6 text-red-100">For immediate threats or ongoing drug activities</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => navigate('/drug-report-submission')}
                className="bg-white text-red-600 hover:bg-gray-100 font-bold px-8 py-3 rounded-full text-lg"
              >
                Submit Anonymous Report
              </Button>
              <Button 
                onClick={() => window.location.href = 'tel:1908'}
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-red-600 font-bold px-8 py-3 rounded-full text-lg"
              >
                Call 1908 Emergency
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnonymousReportSection;
