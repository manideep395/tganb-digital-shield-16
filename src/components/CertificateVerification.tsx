
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, CheckCircle, XCircle, FileText, Calendar, User, School } from 'lucide-react';
import { toast } from 'sonner';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

interface CertificateData {
  id: string;
  name: string;
  institutionName: string;
  dateIssued: string;
  status: 'verified' | 'invalid';
}

const CertificateVerification = () => {
  const [certificateId, setCertificateId] = useState('');
  const [verificationResult, setVerificationResult] = useState<CertificateData | null>(null);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);
  
  const location = useLocation();

  useEffect(() => {
    // Check if certificate ID is provided in URL params
    const urlParams = new URLSearchParams(location.search);
    const idFromUrl = urlParams.get('id');
    if (idFromUrl) {
      setCertificateId(idFromUrl);
      handleVerification(idFromUrl);
    }
  }, [location]);

  const handleVerification = async (id?: string) => {
    const idToVerify = id || certificateId;
    
    if (!idToVerify.trim()) {
      toast.error('Please enter a certificate ID');
      return;
    }

    setIsVerifying(true);
    setIsNotFound(false);
    setVerificationResult(null);

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Check localStorage for certificate data
      const storedData = localStorage.getItem(`certificate_${idToVerify}`);
      
      if (storedData) {
        const certificateData: CertificateData = JSON.parse(storedData);
        setVerificationResult(certificateData);
        toast.success('Certificate verified successfully!');
      } else {
        // Mock some sample certificates for demonstration
        const mockCertificates: Record<string, CertificateData> = {
          'ADS12345SAMPLE': {
            id: 'ADS12345SAMPLE',
            name: 'John Doe',
            institutionName: 'ABC High School',
            dateIssued: '2024-01-15',
            status: 'verified'
          },
          'ADS67890DEMO': {
            id: 'ADS67890DEMO',
            name: 'Jane Smith',
            institutionName: 'XYZ College',
            dateIssued: '2024-02-20',
            status: 'verified'
          }
        };

        const mockData = mockCertificates[idToVerify];
        if (mockData) {
          setVerificationResult(mockData);
          toast.success('Certificate verified successfully!');
        } else {
          setIsNotFound(true);
          toast.error('Certificate not found. Please check the ID and try again.');
        }
      }
    } catch (error) {
      console.error('Verification error:', error);
      toast.error('Verification failed. Please try again.');
    } finally {
      setIsVerifying(false);
    }
  };

  const handleReset = () => {
    setCertificateId('');
    setVerificationResult(null);
    setIsNotFound(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 font-poppins dark:from-gray-900 dark:to-gray-800 dark:text-white">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
            <CardHeader className="text-center bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-t-lg">
              <CardTitle className="text-2xl md:text-3xl font-bold flex items-center justify-center gap-2">
                <FileText className="w-8 h-8" />
                Certificate Verification Center
              </CardTitle>
              <p className="text-blue-100 mt-2">Verify the authenticity of Anti-Drug Soldier certificates</p>
            </CardHeader>
            
            <CardContent className="p-6 md:p-8">
              <div className="space-y-6">
                {/* Search Section */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <Input
                      placeholder="Enter Certificate ID (e.g., ADS12345SAMPLE)"
                      value={certificateId}
                      onChange={(e) => setCertificateId(e.target.value.toUpperCase())}
                      className="text-lg p-3 border-2 border-gray-300 dark:border-gray-600 focus:border-blue-500"
                      onKeyPress={(e) => e.key === 'Enter' && handleVerification()}
                    />
                  </div>
                  <Button
                    onClick={() => handleVerification()}
                    disabled={isVerifying}
                    className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 px-6 py-3 text-lg font-semibold"
                  >
                    {isVerifying ? (
                      <>
                        <Search className="w-5 h-5 mr-2 animate-spin" />
                        Verifying...
                      </>
                    ) : (
                      <>
                        <Search className="w-5 h-5 mr-2" />
                        Verify
                      </>
                    )}
                  </Button>
                </div>

                {/* Verification Result */}
                {verificationResult && (
                  <Card className="border-2 border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-8 h-8 text-green-600" />
                          <div>
                            <h3 className="text-xl font-bold text-green-800 dark:text-green-400">Certificate Verified</h3>
                            <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">
                              {verificationResult.status.toUpperCase()}
                            </Badge>
                          </div>
                        </div>
                        <Button variant="outline" onClick={handleReset} className="text-sm">
                          Verify Another
                        </Button>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                        <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg border">
                          <FileText className="w-5 h-5 text-blue-600" />
                          <div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Certificate ID</p>
                            <p className="font-semibold text-gray-800 dark:text-gray-200">{verificationResult.id}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg border">
                          <User className="w-5 h-5 text-green-600" />
                          <div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Student Name</p>
                            <p className="font-semibold text-gray-800 dark:text-gray-200">{verificationResult.name}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg border">
                          <School className="w-5 h-5 text-purple-600" />
                          <div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Institution</p>
                            <p className="font-semibold text-gray-800 dark:text-gray-200">{verificationResult.institutionName}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg border">
                          <Calendar className="w-5 h-5 text-orange-600" />
                          <div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Date Issued</p>
                            <p className="font-semibold text-gray-800 dark:text-gray-200">{verificationResult.dateIssued}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                        <p className="text-sm text-blue-800 dark:text-blue-300">
                          <strong>Verification Status:</strong> This certificate has been verified as authentic and was issued by the Telangana Anti Narcotics Bureau (TGANB) under the Anti-Drug Soldier enrollment program.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Not Found Result */}
                {isNotFound && (
                  <Card className="border-2 border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20">
                    <CardContent className="p-6 text-center">
                      <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-red-800 dark:text-red-400 mb-2">Certificate Not Found</h3>
                      <p className="text-red-600 dark:text-red-300 mb-4">
                        The certificate with ID "{certificateId}" could not be found in our database.
                      </p>
                      <p className="text-sm text-red-500 dark:text-red-400">
                        Please check the certificate ID and try again. If you believe this is an error, contact TGANB support.
                      </p>
                      <Button variant="outline" onClick={handleReset} className="mt-4">
                        Try Again
                      </Button>
                    </CardContent>
                  </Card>
                )}

                {/* Instructions */}
                <Card className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">How to Verify:</h4>
                    <ul className="space-y-2 text-sm text-blue-700 dark:text-blue-300">
                      <li>• Enter the complete Certificate ID found on your Anti-Drug Soldier certificate</li>
                      <li>• Certificate IDs typically start with "ADS" followed by alphanumeric characters</li>
                      <li>• You can also scan the QR code on your certificate to auto-fill the ID</li>
                      <li>• Verification is instant and confirms the authenticity of your certificate</li>
                    </ul>
                    
                    <div className="mt-4 p-3 bg-blue-100 dark:bg-blue-800/30 rounded border border-blue-300 dark:border-blue-700">
                      <p className="text-xs text-blue-600 dark:text-blue-400">
                        <strong>Sample Certificate IDs for testing:</strong><br/>
                        ADS12345SAMPLE, ADS67890DEMO
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CertificateVerification;
