
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, AlertTriangle, Upload, Send, Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import { format } from 'date-fns';

const DrugReportSubmission = () => {
  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showReporterDetails, setShowReporterDetails] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState({
    reportType: '',
    locationIncident: '',
    incidentDate: null as Date | null,
    dateUnknown: false,
    detailedDescription: '',
    isAnonymous: true,
    reporterName: '',
    reporterEmail: '',
    reporterPhone: '',
    evidenceFile: null as File | null
  });

  const reportTypes = [
    'Drug Trafficking/Distribution',
    'Drug Manufacturing/Production',
    'Drug Possession/Use',
    'Suspicious Activity',
    'Drug-Related Violence',
    'Other Drug-Related Crime'
  ];

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Check file size (10MB limit)
      if (file.size > 10 * 1024 * 1024) {
        toast.error('File size must be less than 10MB');
        return;
      }
      
      // Check file type
      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'video/mp4', 'video/webm', 'application/pdf'];
      if (!allowedTypes.includes(file.type)) {
        toast.error('File type not supported. Please upload images, videos, or PDF files.');
        return;
      }
      
      setFormData(prev => ({ ...prev, evidenceFile: file }));
      toast.success('Evidence file uploaded successfully');
    }
  };

  const validateSection = (section: number): boolean => {
    switch (section) {
      case 1:
        return formData.reportType !== '' && formData.locationIncident !== '';
      case 2:
        return formData.detailedDescription.length >= 100;
      case 3:
        if (!formData.isAnonymous) {
          return formData.reporterName !== '' && formData.reporterEmail !== '';
        }
        return true;
      default:
        return true;
    }
  };

  const nextSection = () => {
    if (validateSection(currentSection)) {
      setCurrentSection(prev => Math.min(prev + 1, 4));
    } else {
      toast.error('Please fill in all required fields before proceeding');
    }
  };

  const prevSection = () => {
    setCurrentSection(prev => Math.max(prev - 1, 1));
  };

  const submitReport = async () => {
    if (!validateSection(3)) {
      toast.error('Please complete all required fields');
      return;
    }

    setIsSubmitting(true);
    
    try {
      let evidenceFileUrl = null;
      let evidenceFileName = null;
      let evidenceFileSize = null;

      // Upload evidence file if provided
      if (formData.evidenceFile) {
        const fileExt = formData.evidenceFile.name.split('.').pop();
        const fileName = `${Date.now()}_${Math.random().toString(36).substring(7)}.${fileExt}`;
        
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('drug-report-evidence')
          .upload(fileName, formData.evidenceFile);

        if (uploadError) {
          throw uploadError;
        }

        evidenceFileUrl = uploadData.path;
        evidenceFileName = formData.evidenceFile.name;
        evidenceFileSize = formData.evidenceFile.size;
      }

      // Submit report to database
      const reportData = {
        report_type: formData.reportType,
        location_incident: formData.locationIncident,
        incident_date_time: formData.dateUnknown ? null : formData.incidentDate?.toISOString(),
        date_unknown: formData.dateUnknown,
        detailed_description: formData.detailedDescription,
        is_anonymous: formData.isAnonymous,
        reporter_name: formData.isAnonymous ? null : formData.reporterName,
        reporter_email: formData.isAnonymous ? null : formData.reporterEmail,
        reporter_phone: formData.isAnonymous ? null : formData.reporterPhone,
        evidence_file_url: evidenceFileUrl,
        evidence_file_name: evidenceFileName,
        evidence_file_size: evidenceFileSize,
        ip_address: 'hidden_for_privacy',
        user_agent: navigator.userAgent.substring(0, 255)
      };

      const { data, error } = await supabase
        .from('drug_reports')
        .insert([reportData])
        .select()
        .single();

      if (error) {
        throw error;
      }

      setCurrentSection(4);
      toast.success('Report submitted successfully! Your report ID is: ' + data.id.substring(0, 8));
      
    } catch (error) {
      console.error('Error submitting report:', error);
      toast.error('Failed to submit report. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-red-900 via-red-800 to-orange-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-red-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between p-6 bg-black/20 backdrop-blur-sm border-b border-white/10">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/')}
          className="flex items-center gap-3 text-white hover:text-red-200 transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
          <span className="text-lg font-semibold">Back to Home</span>
        </motion.button>

        <div className="flex items-center gap-3">
          <img 
            src="/lovable-uploads/cfe052e4-2276-4a1d-b6af-bc0ad7c3ccd4.png" 
            alt="TG ANB Logo" 
            className="h-12 w-12 rounded-full"
          />
          <div className="text-white">
            <h1 className="text-xl font-bold">TG ANB</h1>
            <p className="text-sm text-red-200">Secure Report Submission</p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-white">
          <Shield className="w-6 h-6 text-green-400" />
          <span className="text-sm">Encrypted & Secure</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-88px)] p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-4xl"
        >
          <Card className="bg-black/40 backdrop-blur-xl border-white/20 shadow-2xl">
            <CardContent className="p-8">
              {/* Progress Indicator */}
              <div className="flex items-center justify-between mb-8">
                {[1, 2, 3, 4].map((step) => (
                  <div key={step} className="flex items-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold border-2 ${
                      currentSection >= step ? 'bg-red-600 border-red-600' : 'bg-white/10 border-white/30'
                    }`}>
                      {step}
                    </div>
                    {step < 4 && (
                      <div className={`w-24 h-1 mx-4 ${
                        currentSection > step ? 'bg-red-600' : 'bg-white/20'
                      }`}></div>
                    )}
                  </div>
                ))}
              </div>

              {/* Section 1: Report Type & Location */}
              {currentSection === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-white mb-2">Report Details</h2>
                    <p className="text-white/70">Please provide basic information about the incident</p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-white font-semibold mb-3">Type of Report *</label>
                      <Select value={formData.reportType} onValueChange={(value) => handleInputChange('reportType', value)}>
                        <SelectTrigger className="bg-white/10 border-white/30 text-white">
                          <SelectValue placeholder="Select report type" />
                        </SelectTrigger>
                        <SelectContent>
                          {reportTypes.map((type) => (
                            <SelectItem key={type} value={type}>{type}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-white font-semibold mb-3">Location of Incident *</label>
                      <Input
                        value={formData.locationIncident}
                        onChange={(e) => handleInputChange('locationIncident', e.target.value)}
                        placeholder="Enter location details (area, landmark, address)"
                        className="bg-white/10 border-white/30 text-white placeholder:text-white/50"
                      />
                    </div>

                    <div>
                      <label className="block text-white font-semibold mb-3">Date & Time of Incident</label>
                      <div className="flex items-center gap-4">
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              disabled={formData.dateUnknown}
                              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                            >
                              {formData.incidentDate ? format(formData.incidentDate, 'PPP') : 'Select date'}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={formData.incidentDate || undefined}
                              onSelect={(date) => handleInputChange('incidentDate', date)}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        
                        <div className="flex items-center gap-2">
                          <Checkbox
                            id="dateUnknown"
                            checked={formData.dateUnknown}
                            onCheckedChange={(checked) => {
                              handleInputChange('dateUnknown', checked);
                              if (checked) handleInputChange('incidentDate', null);
                            }}
                          />
                          <label htmlFor="dateUnknown" className="text-white text-sm">Date Unknown</label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button onClick={nextSection} className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
                      Next Step
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* Section 2: Description & Evidence */}
              {currentSection === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-white mb-2">Incident Description</h2>
                    <p className="text-white/70">Provide detailed information about what you witnessed</p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-white font-semibold mb-3">
                        Detailed Description * <span className="text-sm text-white/70">(Minimum 100 characters)</span>
                      </label>
                      <Textarea
                        value={formData.detailedDescription}
                        onChange={(e) => handleInputChange('detailedDescription', e.target.value)}
                        placeholder="Please provide a detailed description of the incident, including what you saw, heard, or witnessed. Include as many relevant details as possible."
                        className="bg-white/10 border-white/30 text-white placeholder:text-white/50 min-h-32"
                        rows={8}
                      />
                      <div className="text-right text-white/60 text-sm mt-2">
                        {formData.detailedDescription.length}/100 minimum
                      </div>
                    </div>

                    <div>
                      <label className="block text-white font-semibold mb-3">
                        Evidence Upload <span className="text-sm text-white/70">(Optional)</span>
                      </label>
                      <div className="border-2 border-dashed border-white/30 rounded-lg p-6 bg-white/5">
                        <div className="text-center">
                          <Upload className="w-12 h-12 text-white/50 mx-auto mb-4" />
                          <p className="text-white mb-2">Upload photos, videos, or documents</p>
                          <p className="text-white/60 text-sm mb-4">Max 10MB • JPG, PNG, MP4, PDF supported</p>
                          <input
                            type="file"
                            onChange={handleFileUpload}
                            accept="image/*,video/*,.pdf"
                            className="hidden"
                            id="evidence-upload"
                          />
                          <label
                            htmlFor="evidence-upload"
                            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg cursor-pointer transition-colors"
                          >
                            <Upload className="w-4 h-4" />
                            Choose File
                          </label>
                          {formData.evidenceFile && (
                            <div className="mt-4 p-3 bg-green-600/20 border border-green-500/30 rounded-lg">
                              <p className="text-green-200 text-sm">
                                File uploaded: {formData.evidenceFile.name}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <Button onClick={prevSection} variant="outline" className="border-white/30 text-white hover:bg-white/10">
                      Previous
                    </Button>
                    <Button onClick={nextSection} className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
                      Next Step
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* Section 3: Reporter Information */}
              {currentSection === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-white mb-2">Reporter Information</h2>
                    <p className="text-white/70">Choose whether to submit anonymously or provide contact details</p>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-blue-600/20 border border-blue-500/30 rounded-lg p-4">
                      <div className="flex items-center gap-3">
                        <Checkbox
                          id="anonymous"
                          checked={formData.isAnonymous}
                          onCheckedChange={(checked) => {
                            handleInputChange('isAnonymous', checked);
                            if (checked) {
                              handleInputChange('reporterName', '');
                              handleInputChange('reporterEmail', '');
                              handleInputChange('reporterPhone', '');
                            }
                          }}
                        />
                        <label htmlFor="anonymous" className="text-white font-semibold">
                          Submit this report anonymously
                        </label>
                      </div>
                      <p className="text-blue-200 text-sm mt-2 ml-6">
                        Your identity will be completely protected and not shared with anyone.
                      </p>
                    </div>

                    {!formData.isAnonymous && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="space-y-4"
                      >
                        <div className="flex items-center gap-2 mb-4">
                          <button
                            onClick={() => setShowReporterDetails(!showReporterDetails)}
                            className="flex items-center gap-2 text-white hover:text-red-200 transition-colors"
                          >
                            {showReporterDetails ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                            {showReporterDetails ? 'Hide' : 'Show'} contact details
                          </button>
                        </div>

                        {showReporterDetails && (
                          <div className="space-y-4">
                            <div>
                              <label className="block text-white font-semibold mb-2">Full Name *</label>
                              <Input
                                value={formData.reporterName}
                                onChange={(e) => handleInputChange('reporterName', e.target.value)}
                                placeholder="Enter your full name"
                                className="bg-white/10 border-white/30 text-white placeholder:text-white/50"
                              />
                            </div>

                            <div>
                              <label className="block text-white font-semibold mb-2">Email Address *</label>
                              <Input
                                type="email"
                                value={formData.reporterEmail}
                                onChange={(e) => handleInputChange('reporterEmail', e.target.value)}
                                placeholder="Enter your email address"
                                className="bg-white/10 border-white/30 text-white placeholder:text-white/50"
                              />
                            </div>

                            <div>
                              <label className="block text-white font-semibold mb-2">
                                Phone Number <span className="text-sm text-white/70">(Optional)</span>
                              </label>
                              <Input
                                type="tel"
                                value={formData.reporterPhone}
                                onChange={(e) => handleInputChange('reporterPhone', e.target.value)}
                                placeholder="Enter your phone number"
                                className="bg-white/10 border-white/30 text-white placeholder:text-white/50"
                              />
                            </div>
                          </div>
                        )}
                      </motion.div>
                    )}

                    <div className="bg-yellow-600/20 border border-yellow-500/30 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-yellow-400 mt-0.5" />
                        <div>
                          <p className="text-yellow-200 font-semibold mb-1">Important Notice</p>
                          <p className="text-yellow-100 text-sm">
                            All reports are taken seriously and will be investigated by appropriate authorities. 
                            False reporting is a criminal offense. Your data is encrypted and securely stored.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <Button onClick={prevSection} variant="outline" className="border-white/30 text-white hover:bg-white/10">
                      Previous
                    </Button>
                    <Button 
                      onClick={submitReport}
                      disabled={isSubmitting}
                      className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 flex items-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Submit Report
                        </>
                      )}
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* Section 4: Confirmation */}
              {currentSection === 4 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center space-y-6"
                >
                  <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <motion.svg
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      className="w-10 h-10 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <motion.path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </motion.svg>
                  </div>

                  <h2 className="text-3xl font-bold text-white mb-4">Report Submitted Successfully</h2>
                  <p className="text-white/70 text-lg mb-6">
                    Thank you for helping make our community safer. Your report has been securely submitted to the Telangana Anti-Narcotics Bureau.
                  </p>

                  <div className="bg-green-600/20 border border-green-500/30 rounded-lg p-6 mb-6">
                    <h3 className="text-green-200 font-semibold mb-2">What happens next?</h3>
                    <ul className="text-green-100 text-sm space-y-1 text-left">
                      <li>• Your report will be reviewed by trained investigators</li>
                      <li>• Appropriate action will be taken based on the information provided</li>
                      <li>• If you provided contact details, you may be contacted for additional information</li>
                      <li>• All information is handled with strict confidentiality</li>
                    </ul>
                  </div>

                  <div className="flex gap-4 justify-center">
                    <Button 
                      onClick={() => navigate('/')}
                      className="bg-white text-red-900 hover:bg-white/90 px-8 py-3"
                    >
                      Return Home
                    </Button>
                    <Button 
                      onClick={() => window.location.reload()}
                      variant="outline"
                      className="border-white/30 text-white hover:bg-white/10 px-8 py-3"
                    >
                      Submit Another Report
                    </Button>
                  </div>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="relative z-10 bg-black/20 backdrop-blur-sm border-t border-white/10 p-4">
        <div className="text-center text-white/60 text-sm">
          <p>Telangana Anti-Narcotics Bureau • Government of Telangana • Secure & Confidential</p>
        </div>
      </div>
    </div>
  );
};

export default DrugReportSubmission;
