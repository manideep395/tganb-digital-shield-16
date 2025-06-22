
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FileText, ExternalLink, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TganbGo27 = () => {
  const handlePdfOpen = () => {
    window.open('https://drive.google.com/file/d/1RqZpsWAfyT-0nUv3GQeqnNSg-FB5cInB/view?usp=sharing', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-poppins">
              <span className="text-blue-600">TGANB GO 27</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Official Government Order establishing the Telangana Anti-Narcotics Bureau
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl border border-blue-100 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-white text-center">
                <FileText className="w-16 h-16 mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-2">Government Order 27</h2>
                <p className="text-blue-100">Telangana Anti-Narcotics Bureau - Official Documentation</p>
              </div>

              <div className="p-8">
                <div className="text-center mb-8">
                  <div className="bg-blue-50 rounded-xl p-6 mb-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Official Document</h3>
                    <p className="text-gray-600 mb-6">
                      This document contains the official Government Order that established the 
                      Telangana Anti-Narcotics Bureau and outlines its organizational structure, 
                      powers, and responsibilities.
                    </p>
                    
                    <div className="flex justify-center space-x-4">
                      <Button 
                        onClick={handlePdfOpen}
                        className="bg-blue-600 hover:bg-blue-700 text-white flex items-center space-x-2"
                        size="lg"
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span>View Document</span>
                      </Button>
                      
                      <Button 
                        onClick={handlePdfOpen}
                        variant="outline"
                        className="border-blue-600 text-blue-600 hover:bg-blue-50 flex items-center space-x-2"
                        size="lg"
                      >
                        <Download className="w-5 h-5" />
                        <span>Download PDF</span>
                      </Button>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-500">
                      <h4 className="font-bold text-green-700 mb-2">Document Type</h4>
                      <p className="text-sm text-gray-600">Government Order</p>
                    </div>
                    
                    <div className="bg-purple-50 rounded-xl p-6 border-l-4 border-purple-500">
                      <h4 className="font-bold text-purple-700 mb-2">Reference</h4>
                      <p className="text-sm text-gray-600">GO 27 - TGANB</p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 rounded-xl p-6 border-l-4 border-yellow-500">
                  <h4 className="font-bold text-yellow-700 mb-3">Important Note</h4>
                  <p className="text-sm text-gray-700">
                    This is an official government document. Please ensure you have the necessary 
                    permissions to access and use this information in accordance with applicable laws 
                    and regulations.
                  </p>
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

export default TganbGo27;
