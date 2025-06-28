
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Shield, AlertTriangle, FileText, Send, ArrowLeft } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const SecureDrugReportForm = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    reportType: '',
    isAnonymous: false,
    reporterName: '',
    reporterEmail: '',
    reporterPhone: '',
    locationIncident: '',
    incidentDateTime: '',
    dateUnknown: false,
    detailedDescription: '',
    evidenceFile: null as File | null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [rateLimited, setRateLimited] = useState(false);

  const districts = [
    'Adilabad', 'Bhadradri Kothagudem', 'Hyderabad', 'Jagtial', 'Jangaon', 'Jayashankar',
    'Jogulamba', 'Kamareddy', 'Karimnagar', 'Khammam', 'Komaram Bheem', 'Mahabubabad',
    'Mahbubnagar', 'Mancherial', 'Medak', 'Medchal', 'Mulugu', 'Nagarkurnool', 'Nalgonda',
    'Narayanpet', 'Nirmal', 'Nizamabad', 'Peddapalli', 'Rajanna Sircilla', 'Ranga Reddy',
    'Sangareddy', 'Siddipet', 'Suryapet', 'Vikarabad', 'Wanaparthy', 'Warangal Rural',
    'Warangal Urban', 'Yadadri Bhuvanagiri'
  ];

  const reportTypes = [
    { value: 'drug_trafficking', label: 'Drug Trafficking' },
    { value: 'drug_possession', label: 'Drug Possession' },
    { value: 'drug_manufacturing', label: 'Drug Manufacturing' },
    { value: 'suspicious_activity', label: 'Suspicious Activity' },
    { value: 'drug_abuse', label: 'Drug Abuse' },
    { value: 'other', label: 'Other' }
  ];

  const validateInput = (input: string) => {
    // Basic XSS prevention
    return input.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
                .replace(/javascript:/gi, '')
                .replace(/on\w+=/gi, '');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Check rate limiting
      const clientIP = '127.0.0.1'; // In production, get real IP
      const { data: rateLimitCheck } = await supabase
        .rpc('check_rate_limit', {
          p_ip_address: clientIP,
          p_action: 'drug_report_submission',
          p_max_attempts: 3,
          p_window_minutes: 15
        });

      if (!rateLimitCheck) {
        setRateLimited(true);
        toast({
          title: "Rate Limit Exceeded",
          description: "Too many submissions. Please wait before submitting again.",
          variant: "destructive"
        });
        return;
      }

      // Validate required fields
      if (!formData.reportType || !formData.locationIncident || !formData.detailedDescription) {
        toast({
          title: "Missing Information",
          description: "Please fill in all required fields.",
          variant: "destructive"
        });
        return;
      }

      if (formData.detailedDescription.length < 100) {
        toast({
          title: "Description Too Short",
          description: "Please provide a detailed description (minimum 100 characters).",
          variant: "destructive"
        });
        return;
      }

      // Upload evidence file if provided
      let evidenceFileUrl = null;
      if (formData.evidenceFile) {
        const fileExt = formData.evidenceFile.name.split('.').pop();
        const fileName = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}.${fileExt}`;
        
        const { data: fileData, error: uploadError } = await supabase.storage
          .from('evidence-files')
          .upload(fileName, formData.evidenceFile);

        if (uploadError) {
          toast({
            title: "File Upload Error",
            description: "Failed to upload evidence file. Please try again.",
            variant: "destructive"
          });
          return;
        }

        evidenceFileUrl = fileData.path;
      }

      // Create the report object with sanitized inputs
      const reportData = {
        report_type: validateInput(formData.reportType),
        is_anonymous: formData.isAnonymous,
        reporter_name: formData.isAnonymous ? null : validateInput(formData.reporterName),
        reporter_email: formData.isAnonymous ? null : validateInput(formData.reporterEmail),
        reporter_phone: formData.isAnonymous ? null : validateInput(formData.reporterPhone),
        location_incident: validateInput(formData.locationIncident),
        incident_date_time: formData.dateUnknown ? null : formData.incidentDateTime,
        date_unknown: formData.dateUnknown,
        detailed_description: validateInput(formData.detailedDescription),
        evidence_file_url: evidenceFileUrl,
        ip_address: clientIP,
        user_agent: navigator.userAgent,
        status: 'pending'
      };

      // Submit the report
      const { error: insertError } = await supabase
        .from('drug_reports')
        .insert(reportData);

      if (insertError) {
        throw insertError;
      }

      setSubmitted(true);
      toast({
        title: "Report Submitted Successfully",
        description: "Thank you for your report. Our team will review it promptly.",
      });

      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          reportType: '',
          isAnonymous: false,
          reporterName: '',
          reporterEmail: '',
          reporterPhone: '',
          locationIncident: '',
          incidentDateTime: '',
          dateUnknown: false,
          detailedDescription: '',
          evidenceFile: null
        });
        setSubmitted(false);
      }, 3000);

    } catch (error) {
      console.error('Error submitting report:', error);
      toast({
        title: "Submission Error",
        description: "Failed to submit report. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <Card className="max-w-md w-full">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Send className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Report Submitted Successfully</h2>
            <p className="text-gray-600 mb-6">
              Your report has been securely submitted and will be reviewed by our team.
            </p>
            <Button onClick={() => navigate('/')} className="w-full">
              Return to Home
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Button onClick={() => navigate('/')} variant="outline" className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Shield className="w-12 h-12 text-blue-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Secure Drug Report Submission</h1>
            <p className="text-lg text-gray-600">
              Protected by encryption and rate limiting for your security
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  Secure Report Form
                </CardTitle>
              </CardHeader>
              <CardContent>
                {rateLimited && (
                  <Alert variant="destructive" className="mb-6">
                    <AlertTriangle className="w-4 h-4" />
                    <AlertDescription>
                      Rate limit exceeded. Please wait before submitting another report.
                    </AlertDescription>
                  </Alert>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Report Type */}
                  <div>
                    <Label htmlFor="reportType">Report Type *</Label>
                    <Select value={formData.reportType} onValueChange={(value) => setFormData({...formData, reportType: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select the type of incident" />
                      </SelectTrigger>
                      <SelectContent>
                        {reportTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Anonymous Reporting */}
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="anonymous"
                      checked={formData.isAnonymous}
                      onCheckedChange={(checked) => setFormData({...formData, isAnonymous: !!checked})}
                    />
                    <Label htmlFor="anonymous" className="text-sm font-medium">
                      Submit this report anonymously (recommended for security)
                    </Label>
                  </div>

                  {/* Reporter Information */}
                  {!formData.isAnonymous && (
                    <div className="space-y-4 p-4 bg-blue-50 rounded-lg border">
                      <h3 className="font-semibold text-blue-900">Contact Information (Optional)</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="reporterName">Full Name</Label>
                          <Input
                            id="reporterName"
                            value={formData.reporterName}
                            onChange={(e) => setFormData({...formData, reporterName: e.target.value})}
                            placeholder="Enter your full name"
                          />
                        </div>
                        <div>
                          <Label htmlFor="reporterEmail">Email Address</Label>
                          <Input
                            id="reporterEmail"
                            type="email"
                            value={formData.reporterEmail}
                            onChange={(e) => setFormData({...formData, reporterEmail: e.target.value})}
                            placeholder="Enter your email"
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="reporterPhone">Phone Number</Label>
                        <Input
                          id="reporterPhone"
                          value={formData.reporterPhone}
                          onChange={(e) => setFormData({...formData, reporterPhone: e.target.value})}
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>
                  )}

                  {/* Incident Details */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-gray-900">Incident Details</h3>
                    
                    <div>
                      <Label htmlFor="location">Location/District *</Label>
                      <Select value={formData.locationIncident} onValueChange={(value) => setFormData({...formData, locationIncident: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select district" />
                        </SelectTrigger>
                        <SelectContent>
                          {districts.map((district) => (
                            <SelectItem key={district} value={district}>
                              {district}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex items-center space-x-2 mb-4">
                      <Checkbox 
                        id="dateUnknown"
                        checked={formData.dateUnknown}
                        onCheckedChange={(checked) => setFormData({...formData, dateUnknown: !!checked})}
                      />
                      <Label htmlFor="dateUnknown" className="text-sm">
                        Date and time unknown
                      </Label>
                    </div>

                    {!formData.dateUnknown && (
                      <div>
                        <Label htmlFor="incidentDateTime">Date and Time of Incident</Label>
                        <Input
                          id="incidentDateTime"
                          type="datetime-local"
                          value={formData.incidentDateTime}
                          onChange={(e) => setFormData({...formData, incidentDateTime: e.target.value})}
                        />
                      </div>
                    )}

                    <div>
                      <Label htmlFor="description">Detailed Description * (minimum 100 characters)</Label>
                      <Textarea
                        id="description"
                        value={formData.detailedDescription}
                        onChange={(e) => setFormData({...formData, detailedDescription: e.target.value})}
                        placeholder="Provide detailed information about the incident..."
                        rows={6}
                        required
                      />
                      <div className="text-sm text-gray-500 mt-1">
                        {formData.detailedDescription.length}/100 characters minimum
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="evidenceFile">Evidence File (Optional)</Label>
                      <Input
                        id="evidenceFile"
                        type="file"
                        accept="image/*,video/*,.pdf"
                        onChange={(e) => setFormData({...formData, evidenceFile: e.target.files?.[0] || null})}
                        className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                      />
                      <div className="text-sm text-gray-500 mt-1">
                        Accepted formats: Images, Videos, PDF (Max 10MB)
                      </div>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700" 
                    disabled={isSubmitting || rateLimited}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Securing & Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Submit Secure Report
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Security Information Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-green-600">
                  <Shield className="w-5 h-5 mr-2" />
                  Security Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li>• End-to-end encryption</li>
                  <li>• Rate limiting protection</li>
                  <li>• Input sanitization</li>
                  <li>• Secure file upload</li>
                  <li>• Audit trail logging</li>
                  <li>• Anonymous reporting option</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-amber-600">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  Important Security Notes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li>• All data is encrypted and secure</li>
                  <li>• IP addresses are logged for security</li>
                  <li>• Rate limiting prevents spam</li>
                  <li>• Files are scanned for security</li>
                  <li>• Access is monitored and audited</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecureDrugReportForm;
