
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle, XCircle } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

interface VerificationResult {
  isValid: boolean;
  studentName?: string;
  certificateId?: string;
}

const CertificateVerification = () => {
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [verificationResult, setVerificationResult] = useState<VerificationResult | null>(null);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const idFromUrl = searchParams.get('id');
    if (idFromUrl) {
      setSearchTerm(idFromUrl);
      // Auto-verify when coming from QR code
      setTimeout(() => {
        handleVerification(idFromUrl);
      }, 500);
    }
  }, [searchParams]);

  const validateInput = (input: string) => {
    return input.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
                .replace(/javascript:/gi, '')
                .replace(/on\w+=/gi, '');
  };

  const handleVerification = async (certificateId?: string) => {
    const searchValue = validateInput(certificateId || searchTerm);
    if (!searchValue.trim()) {
      toast({
        title: "Error",
        description: "Please enter a certificate ID or student name",
        variant: "destructive"
      });
      return;
    }

    setIsSearching(true);
    try {
      const { data, error } = await supabase
        .from('certificate_verification')
        .select('*')
        .or(`certificate_id.ilike.%${searchValue}%,student_name.ilike.%${searchValue}%`);

      if (error) throw error;

      if (data && data.length > 0) {
        setVerificationResult({
          isValid: true,
          studentName: data[0].student_name,
          certificateId: data[0].certificate_id
        });
        toast({
          title: "Certificate Verified",
          description: "The certificate is valid and authentic.",
        });
      } else {
        setVerificationResult({
          isValid: false
        });
        toast({
          title: "Certificate Not Found",
          description: "No certificate found with the provided details.",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: "Failed to verify certificate. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 font-poppins">
      <Header />
      <div className="py-8">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="dark:bg-gray-800">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center text-blue-800 dark:text-blue-300">
                Certificate Verification Center
              </CardTitle>
              <p className="text-center text-gray-600 dark:text-gray-300">
                Verify the authenticity of Anti-Drug Soldier certificates
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="searchTerm">Certificate ID or Student Name</Label>
                <Input
                  id="searchTerm"
                  placeholder="Enter certificate ID (e.g., ADS/XXXXX) or student name"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="dark:bg-gray-700 dark:text-white"
                />
              </div>

              <Button
                onClick={() => handleVerification()}
                className="w-full bg-blue-600 hover:bg-blue-700"
                disabled={isSearching}
              >
                {isSearching ? 'Verifying...' : 'Verify Certificate'}
              </Button>

              {verificationResult && (
                <Card className="mt-6 dark:bg-gray-700">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-center mb-4">
                      {verificationResult.isValid ? (
                        <CheckCircle className="w-16 h-16 text-green-500" />
                      ) : (
                        <XCircle className="w-16 h-16 text-red-500" />
                      )}
                    </div>
                    
                    <div className="text-center space-y-3">
                      <Badge 
                        variant={verificationResult.isValid ? "default" : "destructive"}
                        className="text-lg px-4 py-2"
                      >
                        {verificationResult.isValid ? "VERIFIED" : "NOT FOUND"}
                      </Badge>
                      
                      {verificationResult.isValid && (
                        <div className="space-y-2">
                          <p className="text-lg font-semibold dark:text-white">
                            Student Name: {verificationResult.studentName}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            Certificate ID: {verificationResult.certificateId}
                          </p>
                          <p className="text-sm text-green-600 font-medium">
                            This certificate is authentic and issued by TGANB
                          </p>
                        </div>
                      )}
                      
                      {!verificationResult.isValid && (
                        <p className="text-sm text-red-600">
                          Certificate not found in our database. Please check the details and try again.
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )}

              <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6">
                <p>For any queries regarding certificate verification,</p>
                <p>contact: <a href="tel:8712671111" className="text-blue-600 dark:text-blue-400">8712671111</a></p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CertificateVerification;
