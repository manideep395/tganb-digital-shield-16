import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { telanganaDistricts } from '@/data/districts';
import { generateCertificatePDF } from '@/utils/certificateGenerator';
import Header from './Header';
import Footer from './Footer';

interface FormData {
  name: string;
  parentGuardianName: string;
  gender: string;
  mobileNumber: string;
  email: string;
  address: string;
  district: string;
  institutionName: string;
  institutionType: string;
  classCourseDesignation: string;
  photo: File | null;
  remarks: string;
}

const AntiDrugSoldierForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    parentGuardianName: '',
    gender: '',
    mobileNumber: '',
    email: '',
    address: '',
    district: '',
    institutionName: '',
    institutionType: '',
    classCourseDesignation: '',
    photo: null,
    remarks: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: keyof FormData, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        photo: file
      }));
    }
  };

  const generateCertificateId = () => {
    const timestamp = Date.now().toString(36);
    const random = Math.random().toString(36).substr(2, 5);
    return `ADS/${timestamp}${random}`.toUpperCase();
  };

  const validateInput = (input: string) => {
    return input.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
                .replace(/javascript:/gi, '')
                .replace(/on\w+=/gi, '');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      let photoUrl = '';
      
      // Upload photo if provided
      if (formData.photo) {
        const fileExt = formData.photo.name.split('.').pop();
        const fileName = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}.${fileExt}`;
        
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('soldier-photos')
          .upload(fileName, formData.photo);

        if (uploadError) {
          throw uploadError;
        }

        const { data: { publicUrl } } = supabase.storage
          .from('soldier-photos')
          .getPublicUrl(fileName);
        
        photoUrl = publicUrl;
      }

      const certificateId = generateCertificateId();

      // Insert into anti_drug_soldiers table with input validation
      const { error: insertError } = await supabase
        .from('anti_drug_soldiers')
        .insert({
          name: validateInput(formData.name),
          parent_guardian_name: validateInput(formData.parentGuardianName),
          gender: formData.gender,
          mobile_number: validateInput(formData.mobileNumber),
          email: validateInput(formData.email),
          address: validateInput(formData.address),
          district: formData.district,
          institution_name: validateInput(formData.institutionName),
          institution_type: formData.institutionType,
          class_course_designation: validateInput(formData.classCourseDesignation),
          photo_url: photoUrl,
          remarks: validateInput(formData.remarks || ''),
          certificate_id: certificateId
        });

      if (insertError) {
        throw insertError;
      }

      // Insert into certificate_verification table
      await supabase
        .from('certificate_verification')
        .insert({
          certificate_id: certificateId,
          student_name: validateInput(formData.name)
        });

      // Generate and download certificate
      generateCertificatePDF(formData, certificateId, photoUrl);

      toast({
        title: "Success!",
        description: "Anti-Drug Soldier enrollment completed successfully. Your certificate has been downloaded.",
      });

      // Reset form
      setFormData({
        name: '',
        parentGuardianName: '',
        gender: '',
        mobileNumber: '',
        email: '',
        address: '',
        district: '',
        institutionName: '',
        institutionType: '',
        classCourseDesignation: '',
        photo: null,
        remarks: ''
      });

    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: "Failed to submit enrollment. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 font-poppins">
      <Header />
      <div className="py-8">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Tiger Mascot Section */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <Card className="text-center p-6 bg-gradient-to-br from-orange-50 to-yellow-50 border-orange-200">
                  <div className="mb-4">
                    <img 
                      src="/lovable-uploads/550efe74-a996-423b-a425-8a3656a2e477.png" 
                      alt="TG ANB Tiger Mascot" 
                      className="w-full max-w-48 mx-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-orange-800 mb-2">Join the Force!</h3>
                  <p className="text-orange-700 text-sm">
                    Become an Anti-Drug Soldier and help protect our communities from the menace of drugs.
                  </p>
                  <div className="mt-4 p-3 bg-orange-100 rounded-lg">
                    <p className="text-xs text-orange-800 font-medium">
                      💪 Be Strong, Be Brave, Be Drug-Free!
                    </p>
                  </div>
                </Card>
              </div>
            </div>

            {/* Form Section */}
            <div className="lg:col-span-3">
              <Card className="dark:bg-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-center text-blue-800 dark:text-blue-300">
                    Anti-Drug Soldier Enrollment
                  </CardTitle>
                  <p className="text-center text-gray-600 dark:text-gray-300">
                    Join the movement against drug abuse and become an Anti-Drug Soldier
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          required
                          className="dark:bg-gray-700 dark:text-white"
                        />
                      </div>
                      <div>
                        <Label htmlFor="parentGuardianName">Parent/Guardian Name *</Label>
                        <Input
                          id="parentGuardianName"
                          value={formData.parentGuardianName}
                          onChange={(e) => handleInputChange('parentGuardianName', e.target.value)}
                          required
                          className="dark:bg-gray-700 dark:text-white"
                        />
                      </div>
                      <div>
                        <Label htmlFor="gender">Gender *</Label>
                        <Select value={formData.gender} onValueChange={(value) => handleInputChange('gender', value)}>
                          <SelectTrigger className="dark:bg-gray-700 dark:text-white">
                            <SelectValue placeholder="Select Gender" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Male">Male</SelectItem>
                            <SelectItem value="Female">Female</SelectItem>
                            <SelectItem value="Others">Others</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="mobileNumber">Mobile Number *</Label>
                        <Input
                          id="mobileNumber"
                          type="tel"
                          value={formData.mobileNumber}
                          onChange={(e) => handleInputChange('mobileNumber', e.target.value)}
                          required
                          className="dark:bg-gray-700 dark:text-white"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email ID *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                          className="dark:bg-gray-700 dark:text-white"
                        />
                      </div>
                      <div>
                        <Label htmlFor="district">District *</Label>
                        <Select value={formData.district} onValueChange={(value) => handleInputChange('district', value)}>
                          <SelectTrigger className="dark:bg-gray-700 dark:text-white">
                            <SelectValue placeholder="Select District" />
                          </SelectTrigger>
                          <SelectContent>
                            {telanganaDistricts.map((district) => (
                              <SelectItem key={district} value={district}>
                                {district}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="address">Address *</Label>
                      <Textarea
                        id="address"
                        value={formData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        required
                        className="dark:bg-gray-700 dark:text-white"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="institutionName">School/College/Office Name *</Label>
                        <Input
                          id="institutionName"
                          value={formData.institutionName}
                          onChange={(e) => handleInputChange('institutionName', e.target.value)}
                          required
                          className="dark:bg-gray-700 dark:text-white"
                        />
                      </div>
                      <div>
                        <Label htmlFor="institutionType">Institution Type *</Label>
                        <Select value={formData.institutionType} onValueChange={(value) => handleInputChange('institutionType', value)}>
                          <SelectTrigger className="dark:bg-gray-700 dark:text-white">
                            <SelectValue placeholder="Select Type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="School">School</SelectItem>
                            <SelectItem value="College">College</SelectItem>
                            <SelectItem value="Office">Office</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {formData.institutionType && (
                      <div>
                        <Label htmlFor="classCourseDesignation">
                          {formData.institutionType === 'School' ? 'Class' : 
                           formData.institutionType === 'College' ? 'Course & Year' : 'Designation'} *
                        </Label>
                        <Input
                          id="classCourseDesignation"
                          value={formData.classCourseDesignation}
                          onChange={(e) => handleInputChange('classCourseDesignation', e.target.value)}
                          required
                          className="dark:bg-gray-700 dark:text-white"
                        />
                      </div>
                    )}

                    <div>
                      <Label htmlFor="photo">Upload Photo</Label>
                      <Input
                        id="photo"
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="dark:bg-gray-700 dark:text-white"
                      />
                    </div>

                    <div>
                      <Label htmlFor="remarks">Remarks</Label>
                      <Textarea
                        id="remarks"
                        value={formData.remarks}
                        onChange={(e) => handleInputChange('remarks', e.target.value)}
                        placeholder="Any additional comments or remarks..."
                        className="dark:bg-gray-700 dark:text-white"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Processing...' : 'Submit Enrollment'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AntiDrugSoldierForm;
