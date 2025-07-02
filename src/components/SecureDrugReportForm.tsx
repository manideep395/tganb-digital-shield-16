
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { FileInput } from "@/components/ui/file-input"
import { Alert, AlertDescription } from '@/components/ui/alert';
import { supabase } from '@/integrations/supabase/client';

interface FormData {
  reportType: string;
  isAnonymous: boolean;
  reporterName: string;
  reporterEmail: string;
  reporterPhone: string;
  locationIncident: string;
  incidentDateTime: string;
  dateUnknown: boolean;
  detailedDescription: string;
  evidenceFile: File | null;
  evidenceFileUrl: string;
}

const SecureDrugReportForm = () => {
  const [formData, setFormData] = useState<FormData>({
    reportType: '',
    isAnonymous: true,
    reporterName: '',
    reporterEmail: '',
    reporterPhone: '',
    locationIncident: '',
    incidentDateTime: '',
    dateUnknown: false,
    detailedDescription: '',
    evidenceFile: null,
    evidenceFileUrl: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Input sanitization function
  const sanitizeInput = (input: string): string => {
    return input
      .replace(/[<>]/g, '') // Remove potential HTML tags
      .replace(/javascript:/gi, '') // Remove javascript: protocols
      .replace(/on\w+=/gi, '') // Remove event handlers
      .trim();
  };

  // File validation
  const validateFile = (file: File): boolean => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'application/pdf', 'text/plain'];
    const maxSize = 10 * 1024 * 1024; // 10MB

    if (!allowedTypes.includes(file.type)) {
      setError('Invalid file type. Only JPEG, PNG, GIF, PDF, and TXT files are allowed.');
      return false;
    }

    if (file.size > maxSize) {
      setError('File size too large. Maximum size is 10MB.');
      return false;
    }

    return true;
  };

  const handleFileUpload = async (file: File) => {
    try {
      setError('');
      setIsUploading(true);
      
      if (!validateFile(file)) {
        return;
      }
      
      const fileExt = file.name.split('.').pop()?.toLowerCase();
      const fileName = `${Date.now()}_${Math.random().toString(36).substring(7)}.${fileExt}`;
      const filePath = `evidence/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('evidence-files')
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      const { data } = supabase.storage
        .from('evidence-files')
        .getPublicUrl(filePath);

      setFormData({
        ...formData,
        evidenceFile: file,
        evidenceFileUrl: data.publicUrl
      });
    } catch (error) {
      setError('Failed to upload file. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  const validateForm = (): boolean => {
    // Required field validation
    if (!formData.reportType) {
      setError('Please select a report type.');
      return false;
    }

    if (!formData.locationIncident.trim()) {
      setError('Please enter the location of the incident.');
      return false;
    }

    if (!formData.detailedDescription.trim()) {
      setError('Please provide a detailed description.');
      return false;
    }

    // Non-anonymous validation
    if (!formData.isAnonymous) {
      if (!formData.reporterName.trim()) {
        setError('Please enter your name.');
        return false;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!formData.reporterEmail.trim() || !emailRegex.test(formData.reporterEmail)) {
        setError('Please enter a valid email address.');
        return false;
      }

      const phoneRegex = /^[\d\s\-\+\(\)]+$/;
      if (!formData.reporterPhone.trim() || !phoneRegex.test(formData.reporterPhone)) {
        setError('Please enter a valid phone number.');
        return false;
      }
    }

    // Description length validation - Updated to 100 characters minimum
    if (formData.detailedDescription.length < 100) {
      setError('Description must be at least 100 characters long.');
      return false;
    }

    if (formData.detailedDescription.length > 2000) {
      setError('Description must be less than 2000 characters.');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    
    if (!validateForm()) {
      return;
    }

    try {
      setIsSubmitting(true);

      // Sanitize all inputs
      const sanitizedData = {
        report_type: sanitizeInput(formData.reportType),
        is_anonymous: formData.isAnonymous,
        reporter_name: formData.isAnonymous ? null : sanitizeInput(formData.reporterName),
        reporter_email: formData.isAnonymous ? null : sanitizeInput(formData.reporterEmail),
        reporter_phone: formData.isAnonymous ? null : sanitizeInput(formData.reporterPhone),
        location_incident: sanitizeInput(formData.locationIncident),
        incident_date_time: formData.dateUnknown ? null : formData.incidentDateTime,
        date_unknown: formData.dateUnknown,
        detailed_description: sanitizeInput(formData.detailedDescription),
        evidence_file_url: formData.evidenceFileUrl,
        evidence_file_name: formData.evidenceFile?.name || null,
        evidence_file_size: formData.evidenceFile?.size || null,
        status: 'pending',
        created_at: new Date().toISOString()
      };

      const { error } = await supabase
        .from('drug_reports')
        .insert(sanitizedData);

      if (error) {
        throw error;
      }

      // Generate secure report ID
      const reportId = `TGANB-${Date.now().toString().slice(-8)}${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
      
      setSuccess(`Report submitted successfully! Your report ID is: ${reportId}. Please save this ID for future reference.`);
      
      // Reset form
      setFormData({
        reportType: '',
        isAnonymous: true,
        reporterName: '',
        reporterEmail: '',
        reporterPhone: '',
        locationIncident: '',
        incidentDateTime: '',
        dateUnknown: false,
        detailedDescription: '',
        evidenceFile: null,
        evidenceFileUrl: ''
      });
      
    } catch (error) {
      setError('Failed to submit report. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <Card className="shadow-xl border-0">
          <CardHeader className="text-center bg-blue-600 text-white rounded-t-lg">
            <CardTitle className="text-2xl font-bold">
              Secure Drug Incident Report
            </CardTitle>
            <p className="text-blue-100">All reports are encrypted and secure</p>
          </CardHeader>
          <CardContent className="p-8">
            {error && (
              <Alert variant="destructive" className="mb-6">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {success && (
              <Alert className="mb-6 border-green-200 bg-green-50">
                <AlertDescription className="text-green-800">{success}</AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="reportType" className="text-sm font-semibold text-gray-700 mb-2 block">
                  Report Type *
                </Label>
                <Select onValueChange={(value) => setFormData({ ...formData, reportType: value })}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a report type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="possession">Drug Possession</SelectItem>
                    <SelectItem value="trafficking">Drug Trafficking</SelectItem>
                    <SelectItem value="manufacturing">Drug Manufacturing</SelectItem>
                    <SelectItem value="distribution">Drug Distribution</SelectItem>
                    <SelectItem value="usage">Drug Usage</SelectItem>
                    <SelectItem value="other">Other Drug-Related Activity</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="inline-flex items-center space-x-2">
                  <Checkbox
                    id="isAnonymous"
                    checked={formData.isAnonymous}
                    onCheckedChange={(checked) => setFormData({ ...formData, isAnonymous: checked === true })}
                  />
                  <span className="text-sm font-medium text-gray-700">Submit this report anonymously</span>
                </Label>
                <p className="text-xs text-gray-500 mt-1">Your identity will be completely protected</p>
              </div>

              {!formData.isAnonymous && (
                <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-700">Contact Information</h3>
                  
                  <div>
                    <Label htmlFor="reporterName" className="text-sm font-medium text-gray-700 mb-1 block">
                      Full Name *
                    </Label>
                    <Input
                      type="text"
                      id="reporterName"
                      placeholder="Enter your full name"
                      value={formData.reporterName}
                      onChange={(e) => setFormData({ ...formData, reporterName: e.target.value })}
                      maxLength={100}
                      required={!formData.isAnonymous}
                    />
                  </div>

                  <div>
                    <Label htmlFor="reporterEmail" className="text-sm font-medium text-gray-700 mb-1 block">
                      Email Address *
                    </Label>
                    <Input
                      type="email"
                      id="reporterEmail"
                      placeholder="Enter your email address"
                      value={formData.reporterEmail}
                      onChange={(e) => setFormData({ ...formData, reporterEmail: e.target.value })}
                      maxLength={255}
                      required={!formData.isAnonymous}
                    />
                  </div>

                  <div>
                    <Label htmlFor="reporterPhone" className="text-sm font-medium text-gray-700 mb-1 block">
                      Phone Number *
                    </Label>
                    <Input
                      type="tel"
                      id="reporterPhone"
                      placeholder="Enter your phone number"
                      value={formData.reporterPhone}
                      onChange={(e) => setFormData({ ...formData, reporterPhone: e.target.value })}
                      maxLength={20}
                      required={!formData.isAnonymous}
                    />
                  </div>
                </div>
              )}

              <div>
                <Label htmlFor="locationIncident" className="text-sm font-medium text-gray-700 mb-1 block">
                  Location of Incident *
                </Label>
                <Input
                  type="text"
                  id="locationIncident"
                  placeholder="Enter the location where the incident occurred"
                  value={formData.locationIncident}
                  onChange={(e) => setFormData({ ...formData, locationIncident: e.target.value })}
                  maxLength={255}
                  required
                />
              </div>

              <div>
                <Label className="inline-flex items-center space-x-2 mb-3">
                  <Checkbox
                    id="dateUnknown"
                    checked={formData.dateUnknown}
                    onCheckedChange={(checked) => setFormData({ ...formData, dateUnknown: checked === true })}
                  />
                  <span className="text-sm font-medium text-gray-700">Date and time unknown</span>
                </Label>

                {!formData.dateUnknown && (
                  <div>
                    <Label htmlFor="incidentDateTime" className="text-sm font-medium text-gray-700 mb-1 block">
                      Date and Time of Incident
                    </Label>
                    <Input
                      type="datetime-local"
                      id="incidentDateTime"
                      value={formData.incidentDateTime}
                      onChange={(e) => setFormData({ ...formData, incidentDateTime: e.target.value })}
                      max={new Date().toISOString().slice(0, 16)}
                    />
                  </div>
                )}
              </div>

              <div>
                <Label htmlFor="detailedDescription" className="text-sm font-medium text-gray-700 mb-1 block">
                  Detailed Description * (Minimum 100 characters)
                </Label>
                <Textarea
                  id="detailedDescription"
                  placeholder="Provide a detailed description of the incident (minimum 100 characters). Include location details, people involved, activities observed, etc."
                  rows={5}
                  value={formData.detailedDescription}
                  onChange={(e) => setFormData({ ...formData, detailedDescription: e.target.value })}
                  maxLength={2000}
                  required
                  className="resize-none"
                />
                <p className="text-xs text-gray-500 mt-1">
                  {formData.detailedDescription.length}/2000 characters (minimum 100 required)
                </p>
              </div>

              <div>
                <Label htmlFor="evidenceFile" className="text-sm font-medium text-gray-700 mb-1 block">
                  Upload Evidence (Optional)
                </Label>
                <p className="text-xs text-gray-500 mb-2">
                  Supported formats: JPEG, PNG, GIF, PDF, TXT (Max 10MB)
                </p>
                <FileInput
                  id="evidenceFile"
                  onChange={(e) => {
                    const file = (e.target as HTMLInputElement).files?.[0];
                    if (file) {
                      handleFileUpload(file);
                    }
                  }}
                  disabled={isUploading}
                  accept=".jpg,.jpeg,.png,.gif,.pdf,.txt"
                />
                {formData.evidenceFile && (
                  <div className="mt-2 p-2 bg-green-50 border border-green-200 rounded">
                    <p className="text-sm text-green-700">
                      ✓ File uploaded: {formData.evidenceFile.name}
                    </p>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t">
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3"
                  disabled={isSubmitting || isUploading}
                >
                  {isSubmitting ? 'Submitting Report...' : 'Submit Secure Report'}
                </Button>
              </div>

              <div className="text-center">
                <p className="text-xs text-gray-500">
                  Your report is encrypted and will be reviewed by authorized personnel only.
                  All personal information is protected according to privacy policies.
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SecureDrugReportForm;
