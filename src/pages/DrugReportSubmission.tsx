
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { useAdmin } from '@/contexts/AdminContext';
import { telanganaDistricts } from '@/data/districts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield, FileText, AlertTriangle, Phone, MapPin } from 'lucide-react';

const DrugReportSubmission = () => {
  const [isAnonymous, setIsAnonymous] = useState(true);
  const [reportType, setReportType] = useState('');
  const [dateUnknown, setDateUnknown] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { addDrugReport } = useAdmin();

  const [formData, setFormData] = useState({
    reporterName: '',
    reporterEmail: '',
    reporterPhone: '',
    locationIncident: '',
    incidentDateTime: '',
    detailedDescription: '',
    evidenceFile: null as File | null
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, evidenceFile: file }));
  };

  const handleMapRedirect = () => {
    const query = formData.locationIncident || 'Telangana, India';
    const mapUrl = `https://www.google.com/maps/search/${encodeURIComponent(query)}`;
    window.open(mapUrl, '_blank');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!reportType) {
      toast({
        title: "Error",
        description: "Please select a report type.",
        variant: "destructive",
      });
      return;
    }

    if (!formData.locationIncident || !formData.detailedDescription) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const reportData = {
        reportType,
        isAnonymous,
        reporterName: isAnonymous ? undefined : formData.reporterName,
        reporterEmail: isAnonymous ? undefined : formData.reporterEmail,
        reporterPhone: isAnonymous ? undefined : formData.reporterPhone,
        locationIncident: formData.locationIncident,
        incidentDateTime: dateUnknown ? undefined : formData.incidentDateTime,
        dateUnknown,
        detailedDescription: formData.detailedDescription,
        evidenceFileName: formData.evidenceFile?.name,
        status: 'pending' as const
      };

      addDrugReport(reportData);

      toast({
        title: "Success!",
        description: "Your report has been submitted successfully. Thank you for helping make our community safer.",
      });

      // Reset form
      setFormData({
        reporterName: '',
        reporterEmail: '',
        reporterPhone: '',
        locationIncident: '',
        incidentDateTime: '',
        detailedDescription: '',
        evidenceFile: null
      });
      setReportType('');
      setIsAnonymous(true);
      setDateUnknown(false);

    } catch (error) {
      console.error('Submission error:', error);
      toast({
        title: "Submission Failed",
        description: "Failed to submit report. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Header />
      
      <main className="py-6">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header Section */}
          <div className="text-center mb-6">
            <div className="flex items-center justify-center mb-4">
              <Shield className="w-8 h-8 text-blue-600 mr-3" />
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 font-poppins">
                Drug Crime Report Submission
              </h1>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Help us combat drug-related crimes in our community. Your report will be handled confidentially by our specialized team.
            </p>
          </div>

          {/* Emergency Contact */}
          <div className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl p-4 mb-6 text-center">
            <div className="flex items-center justify-center mb-2">
              <Phone className="w-6 h-6 mr-2" />
              <h3 className="text-xl font-bold">Emergency Helpline</h3>
            </div>
            <p className="text-sm mb-2">For immediate assistance, call our 24/7 helpline</p>
            <div className="text-2xl font-bold">1908</div>
          </div>

          <Card className="shadow-xl border-0">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-xl">
              <CardTitle className="flex items-center text-xl">
                <FileText className="w-6 h-6 mr-2" />
                Submit Your Report
              </CardTitle>
            </CardHeader>
            
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Report Type */}
                <div>
                  <Label className="text-base font-semibold text-gray-700 mb-3 block">
                    Type of Report <span className="text-red-500">*</span>
                  </Label>
                  <RadioGroup value={reportType} onValueChange={setReportType} className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-blue-50 transition-colors">
                      <RadioGroupItem value="drug_trafficking" id="trafficking" />
                      <Label htmlFor="trafficking" className="cursor-pointer">Drug Trafficking</Label>
                    </div>
                    <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-blue-50 transition-colors">
                      <RadioGroupItem value="drug_possession" id="possession" />
                      <Label htmlFor="possession" className="cursor-pointer">Drug Possession</Label>
                    </div>
                    <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-blue-50 transition-colors">
                      <RadioGroupItem value="drug_manufacturing" id="manufacturing" />
                      <Label htmlFor="manufacturing" className="cursor-pointer">Drug Manufacturing</Label>
                    </div>
                    <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-blue-50 transition-colors">
                      <RadioGroupItem value="suspicious_activity" id="suspicious" />
                      <Label htmlFor="suspicious" className="cursor-pointer">Suspicious Activity</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Anonymous Reporting */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-start space-x-2">
                    <Checkbox 
                      id="anonymous" 
                      checked={isAnonymous} 
                      onCheckedChange={(checked) => setIsAnonymous(checked === true)}
                      className="mt-1"
                    />
                    <div>
                      <Label htmlFor="anonymous" className="font-semibold text-gray-700 cursor-pointer">
                        Submit Anonymously
                      </Label>
                      <p className="text-sm text-gray-600 mt-1">
                        Your identity will be protected. We recommend anonymous reporting for your safety.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contact Information - Only if not anonymous */}
                {!isAnonymous && (
                  <div className="grid md:grid-cols-3 gap-4 p-4 bg-blue-50 rounded-lg">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</Label>
                      <Input
                        id="name"
                        value={formData.reporterName}
                        onChange={(e) => handleInputChange('reporterName', e.target.value)}
                        className="mt-1"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.reporterEmail}
                        onChange={(e) => handleInputChange('reporterEmail', e.target.value)}
                        className="mt-1"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</Label>
                      <Input
                        id="phone"
                        value={formData.reporterPhone}
                        onChange={(e) => handleInputChange('reporterPhone', e.target.value)}
                        className="mt-1"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>
                )}

                {/* Location */}
                <div>
                  <Label htmlFor="location" className="text-base font-semibold text-gray-700 mb-2 block">
                    Location of Incident <span className="text-red-500">*</span>
                  </Label>
                  <div className="flex gap-2">
                    <Select value={formData.locationIncident} onValueChange={(value) => handleInputChange('locationIncident', value)}>
                      <SelectTrigger className="flex-1">
                        <SelectValue placeholder="Select district where incident occurred" />
                      </SelectTrigger>
                      <SelectContent>
                        {telanganaDistricts.map((district) => (
                          <SelectItem key={district} value={district}>
                            {district}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={handleMapRedirect}
                      className="px-3"
                    >
                      <MapPin className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Date and Time */}
                <div>
                  <Label className="text-base font-semibold text-gray-700 mb-2 block">Incident Date & Time</Label>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="dateUnknown" 
                        checked={dateUnknown} 
                        onCheckedChange={(checked) => setDateUnknown(checked === true)}
                      />
                      <Label htmlFor="dateUnknown" className="text-sm text-gray-600 cursor-pointer">
                        Date/Time unknown
                      </Label>
                    </div>
                    {!dateUnknown && (
                      <Input
                        type="datetime-local"
                        value={formData.incidentDateTime}
                        onChange={(e) => handleInputChange('incidentDateTime', e.target.value)}
                        className="max-w-md"
                      />
                    )}
                  </div>
                </div>

                {/* Description */}
                <div>
                  <Label htmlFor="description" className="text-base font-semibold text-gray-700 mb-2 block">
                    Detailed Description <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="description"
                    value={formData.detailedDescription}
                    onChange={(e) => handleInputChange('detailedDescription', e.target.value)}
                    className="min-h-32"
                    placeholder="Please provide as much detail as possible about the incident, including what you observed, people involved, vehicles, etc."
                  />
                </div>

                {/* Evidence Upload */}
                <div>
                  <Label htmlFor="evidence" className="text-base font-semibold text-gray-700 mb-2 block">
                    Evidence (Optional)
                  </Label>
                  <Input
                    id="evidence"
                    type="file"
                    onChange={handleFileChange}
                    accept="image/*,video/*,.pdf,.doc,.docx"
                    className="cursor-pointer"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Accepted formats: Images, Videos, PDF, Word documents (Max 10MB)
                  </p>
                </div>

                {/* Warning */}
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <div className="flex items-start space-x-2">
                    <AlertTriangle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-orange-800">Important Notice</h4>
                      <p className="text-sm text-orange-700 mt-1">
                        Filing a false report is a criminal offense. Please ensure all information provided is accurate and truthful.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 text-lg rounded-xl"
                  >
                    {isSubmitting ? 'Submitting Report...' : 'Submit Report'}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DrugReportSubmission;
