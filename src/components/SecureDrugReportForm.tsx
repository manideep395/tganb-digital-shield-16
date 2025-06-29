
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { FileInput } from "@/components/ui/file-input"
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

  const handleFileUpload = async (file: File) => {
    try {
      setIsUploading(true);
      
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;
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
      console.error('File upload error:', error);
      alert('Failed to upload file. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setIsSubmitting(true);

      // Prepare the report data
      const reportData = {
        report_type: formData.reportType,
        is_anonymous: formData.isAnonymous,
        reporter_name: formData.isAnonymous ? null : formData.reporterName,
        reporter_email: formData.isAnonymous ? null : formData.reporterEmail,
        reporter_phone: formData.isAnonymous ? null : formData.reporterPhone,
        location_incident: formData.locationIncident,
        incident_date_time: formData.dateUnknown ? null : formData.incidentDateTime,
        date_unknown: formData.dateUnknown,
        detailed_description: formData.detailedDescription,
        evidence_file_url: formData.evidenceFileUrl,
        evidence_file_name: formData.evidenceFile?.name || null,
        evidence_file_size: formData.evidenceFile?.size || null,
        ip_address: null, // This would be set server-side in production
        user_agent: navigator.userAgent
      };

      const { error } = await supabase
        .from('drug_reports')
        .insert(reportData);

      if (error) {
        throw error;
      }

      // Generate report ID for confirmation
      const reportId = `TGANB-${Date.now().toString().slice(-6)}`;
      
      alert(`Report submitted successfully! Your report ID is: ${reportId}`);
      
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
      console.error('Report submission error:', error);
      alert('Failed to submit report. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex items-center justify-center">
      <Card className="w-full max-w-2xl shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">
            Report a Drug Incident
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="reportType" className="block text-gray-700 text-sm font-bold mb-2">
                Report Type
              </Label>
              <Select onValueChange={(value) => setFormData({ ...formData, reportType: value })}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a report type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Possession">Possession</SelectItem>
                  <SelectItem value="Trafficking">Trafficking</SelectItem>
                  <SelectItem value="Manufacturing">Manufacturing</SelectItem>
                  <SelectItem value="Distribution">Distribution</SelectItem>
                  <SelectItem value="Usage">Usage</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
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
                <span className="text-gray-700 text-sm font-medium">Report Anonymously</span>
              </Label>
            </div>

            {!formData.isAnonymous && (
              <>
                <div>
                  <Label htmlFor="reporterName" className="block text-gray-700 text-sm font-bold mb-2">
                    Your Name
                  </Label>
                  <Input
                    type="text"
                    id="reporterName"
                    placeholder="Enter your name"
                    value={formData.reporterName}
                    onChange={(e) => setFormData({ ...formData, reporterName: e.target.value })}
                    required={!formData.isAnonymous}
                    disabled={formData.isAnonymous}
                  />
                </div>

                <div>
                  <Label htmlFor="reporterEmail" className="block text-gray-700 text-sm font-bold mb-2">
                    Your Email
                  </Label>
                  <Input
                    type="email"
                    id="reporterEmail"
                    placeholder="Enter your email"
                    value={formData.reporterEmail}
                    onChange={(e) => setFormData({ ...formData, reporterEmail: e.target.value })}
                    required={!formData.isAnonymous}
                    disabled={formData.isAnonymous}
                  />
                </div>

                <div>
                  <Label htmlFor="reporterPhone" className="block text-gray-700 text-sm font-bold mb-2">
                    Your Phone Number
                  </Label>
                  <Input
                    type="tel"
                    id="reporterPhone"
                    placeholder="Enter your phone number"
                    value={formData.reporterPhone}
                    onChange={(e) => setFormData({ ...formData, reporterPhone: e.target.value })}
                    required={!formData.isAnonymous}
                    disabled={formData.isAnonymous}
                  />
                </div>
              </>
            )}

            <div>
              <Label htmlFor="locationIncident" className="block text-gray-700 text-sm font-bold mb-2">
                Location of Incident
              </Label>
              <Input
                type="text"
                id="locationIncident"
                placeholder="Enter the location of the incident"
                value={formData.locationIncident}
                onChange={(e) => setFormData({ ...formData, locationIncident: e.target.value })}
                required
              />
            </div>

            <div>
              <Label className="inline-flex items-center space-x-2">
                <Checkbox
                  id="dateUnknown"
                  checked={formData.dateUnknown}
                  onCheckedChange={(checked) => setFormData({ ...formData, dateUnknown: checked === true })}
                />
                <span className="text-gray-700 text-sm font-medium">Date and Time Unknown</span>
              </Label>
            </div>

            {!formData.dateUnknown && (
              <div>
                <Label htmlFor="incidentDateTime" className="block text-gray-700 text-sm font-bold mb-2">
                  Date and Time of Incident
                </Label>
                <Input
                  type="datetime-local"
                  id="incidentDateTime"
                  value={formData.incidentDateTime}
                  onChange={(e) => setFormData({ ...formData, incidentDateTime: e.target.value })}
                  required={!formData.dateUnknown}
                  disabled={formData.dateUnknown}
                />
              </div>
            )}

            <div>
              <Label htmlFor="detailedDescription" className="block text-gray-700 text-sm font-bold mb-2">
                Detailed Description
              </Label>
              <Textarea
                id="detailedDescription"
                placeholder="Enter a detailed description of the incident"
                rows={4}
                value={formData.detailedDescription}
                onChange={(e) => setFormData({ ...formData, detailedDescription: e.target.value })}
                required
              />
            </div>

            <div>
              <Label htmlFor="evidenceFile" className="block text-gray-700 text-sm font-bold mb-2">
                Upload Evidence (Optional)
              </Label>
              <FileInput
                id="evidenceFile"
                onChange={(e) => {
                  const file = (e.target as HTMLInputElement).files?.[0];
                  if (file) {
                    handleFileUpload(file);
                  }
                }}
                disabled={isUploading}
              />
              {formData.evidenceFile && (
                <div className="mt-2">
                  <p className="text-sm text-gray-600">
                    Uploaded File: {formData.evidenceFile.name}
                  </p>
                </div>
              )}
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting || isUploading}>
              {isSubmitting ? 'Submitting...' : 'Submit Report'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SecureDrugReportForm;
