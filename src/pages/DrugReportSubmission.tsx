import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Shield, AlertTriangle, FileText, Send, ArrowLeft } from 'lucide-react';
import { useAdmin } from '../contexts/AdminContext';

const DrugReportSubmission = () => {
  const navigate = useNavigate();
  const { addDrugReport } = useAdmin();
  
  const [formData, setFormData] = useState({
    reportType: '',
    isAnonymous: false,
    reporterName: '',
    reporterEmail: '',
    reporterPhone: '',
    locationIncident: '',
    incidentDateTime: '',
    dateUnknown: false,
    detailedDescription: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create the report object
      const reportData = {
        reportType: formData.reportType,
        isAnonymous: formData.isAnonymous,
        reporterName: formData.isAnonymous ? undefined : formData.reporterName,
        reporterEmail: formData.isAnonymous ? undefined : formData.reporterEmail,
        reporterPhone: formData.isAnonymous ? undefined : formData.reporterPhone,
        locationIncident: formData.locationIncident,
        incidentDateTime: formData.dateUnknown ? undefined : formData.incidentDateTime,
        dateUnknown: formData.dateUnknown,
        detailedDescription: formData.detailedDescription,
        status: 'pending' as const
      };

      // Add the report using admin context
      addDrugReport(reportData);
      
      setSubmitted(true);
      console.log('Drug report submitted successfully:', reportData);
      
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
          detailedDescription: ''
        });
        setSubmitted(false);
      }, 3000);

    } catch (error) {
      console.error('Error submitting report:', error);
      alert('Error submitting report. Please try again.');
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
              Thank you for your report. Our team will review it and take appropriate action.
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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Drug Report Submission</h1>
            <p className="text-lg text-gray-600">
              Help us combat drug-related activities by reporting incidents anonymously or with your details
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  Report Details
                </CardTitle>
              </CardHeader>
              <CardContent>
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
                      Submit this report anonymously
                    </Label>
                  </div>

                  {/* Reporter Information */}
                  {!formData.isAnonymous && (
                    <div className="space-y-4 p-4 bg-blue-50 rounded-lg">
                      <h3 className="font-semibold text-blue-900">Reporter Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="reporterName">Full Name *</Label>
                          <Input
                            id="reporterName"
                            value={formData.reporterName}
                            onChange={(e) => setFormData({...formData, reporterName: e.target.value})}
                            placeholder="Enter your full name"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="reporterEmail">Email Address *</Label>
                          <Input
                            id="reporterEmail"
                            type="email"
                            value={formData.reporterEmail}
                            onChange={(e) => setFormData({...formData, reporterEmail: e.target.value})}
                            placeholder="Enter your email"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="reporterPhone">Phone Number *</Label>
                        <Input
                          id="reporterPhone"
                          value={formData.reporterPhone}
                          onChange={(e) => setFormData({...formData, reporterPhone: e.target.value})}
                          placeholder="Enter your phone number"
                          required
                        />
                      </div>
                    </div>
                  )}

                  {/* Incident Details */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-gray-900">Incident Details</h3>
                    
                    <div>
                      <Label htmlFor="location">Location/District of Incident *</Label>
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
                        Date and time of incident is unknown
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
                      <Label htmlFor="description">Detailed Description *</Label>
                      <Textarea
                        id="description"
                        value={formData.detailedDescription}
                        onChange={(e) => setFormData({...formData, detailedDescription: e.target.value})}
                        placeholder="Provide detailed information about the incident, including location details, people involved, activities observed, etc."
                        rows={6}
                        required
                      />
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Submitting Report...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Submit Report
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Information Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-green-600">
                  <Shield className="w-5 h-5 mr-2" />
                  Your Security
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li>• All reports are handled confidentially</li>
                  <li>• Anonymous reports are fully protected</li>
                  <li>• Your identity is never shared without consent</li>
                  <li>• Reports are reviewed by authorized personnel only</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-amber-600">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  Important Notes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li>• Provide as much detail as possible</li>
                  <li>• Include specific locations and times</li>
                  <li>• Do not approach suspected individuals</li>
                  <li>• For emergencies, call 100 immediately</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <p><strong>Emergency:</strong> 100</p>
                  <p><strong>Anti-Narcotics:</strong> 040-27852508</p>
                  <p><strong>Email:</strong> contact@tganb.gov.in</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrugReportSubmission;
