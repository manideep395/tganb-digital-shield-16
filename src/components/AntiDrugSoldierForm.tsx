
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Upload, Download, User, School, MapPin, Phone, Mail, Calendar, Image } from 'lucide-react';
import { toast } from 'sonner';
import { generateCertificatePDF } from '@/utils/certificateGenerator';
import { districts } from '@/data/districts';
import Header from './Header';
import Footer from './Footer';

const AntiDrugSoldierForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    fatherName: '',
    motherName: '',
    dateOfBirth: '',
    gender: '',
    category: '',
    religion: '',
    nationality: 'Indian',
    state: 'Telangana',
    district: '',
    mandal: '',
    village: '',
    pincode: '',
    address: '',
    mobile: '',
    email: '',
    institutionName: '',
    institutionType: '',
    institutionDistrict: '',
    institutionAddress: '',
    className: '',
    rollNumber: '',
    academicYear: '2024-25'
  });

  const [photo, setPhoto] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        toast.error('Photo size should be less than 2MB');
        return;
      }
      
      setPhoto(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setPhotoPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
      toast.success('Photo uploaded successfully');
    }
  };

  const generateCertificateId = () => {
    const timestamp = Date.now().toString(36);
    const random = Math.random().toString(36).substr(2, 5);
    return `ADS${timestamp}${random}`.toUpperCase();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.institutionName || !formData.mobile) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsGenerating(true);
    
    try {
      const certificateId = generateCertificateId();
      await generateCertificatePDF(formData, certificateId, photoPreview);
      
      // Store certificate data for verification
      const certificateData = {
        id: certificateId,
        name: formData.name,
        institutionName: formData.institutionName,
        dateIssued: new Date().toLocaleDateString(),
        status: 'verified'
      };
      
      localStorage.setItem(`certificate_${certificateId}`, JSON.stringify(certificateData));
      
      toast.success('Certificate generated successfully!');
      
      // Reset form
      setFormData({
        name: '',
        fatherName: '',
        motherName: '',
        dateOfBirth: '',
        gender: '',
        category: '',
        religion: '',
        nationality: 'Indian',
        state: 'Telangana',
        district: '',
        mandal: '',
        village: '',
        pincode: '',
        address: '',
        mobile: '',
        email: '',
        institutionName: '',
        institutionType: '',
        institutionDistrict: '',
        institutionAddress: '',
        className: '',
        rollNumber: '',
        academicYear: '2024-25'
      });
      setPhoto(null);
      setPhotoPreview('');
      
    } catch (error) {
      console.error('Error generating certificate:', error);
      toast.error('Failed to generate certificate. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 font-poppins dark:from-gray-900 dark:to-gray-800 dark:text-white">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
            <CardHeader className="text-center bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-t-lg">
              <CardTitle className="text-2xl md:text-3xl font-bold flex items-center justify-center gap-2">
                <User className="w-8 h-8" />
                Anti-Drug Soldier Enrollment Form
              </CardTitle>
              <p className="text-blue-100 mt-2">Join the fight against narcotics - Become an Anti-Drug Soldier</p>
            </CardHeader>
            
            <CardContent className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Photo Upload Section */}
                <div className="text-center mb-8">
                  <div className="relative inline-block">
                    {photoPreview ? (
                      <img 
                        src={photoPreview} 
                        alt="Student Photo" 
                        className="w-32 h-32 rounded-full object-cover border-4 border-green-500 shadow-lg"
                      />
                    ) : (
                      <div className="w-32 h-32 rounded-full bg-gray-200 dark:bg-gray-700 border-4 border-dashed border-gray-400 flex items-center justify-center">
                        <Image className="w-12 h-12 text-gray-400" />
                      </div>
                    )}
                    <label htmlFor="photo-upload" className="absolute bottom-0 right-0 bg-green-600 rounded-full p-2 cursor-pointer hover:bg-green-700 transition-colors">
                      <Upload className="w-4 h-4 text-white" />
                    </label>
                    <input
                      id="photo-upload"
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoUpload}
                      className="hidden"
                    />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Upload your photo (Max 2MB)</p>
                </div>

                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="name" className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <User className="w-4 h-4" />
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="mt-1 border-gray-300 dark:border-gray-600"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="fatherName" className="text-gray-700 dark:text-gray-300">Father's Name</Label>
                    <Input
                      id="fatherName"
                      value={formData.fatherName}
                      onChange={(e) => handleInputChange('fatherName', e.target.value)}
                      className="mt-1 border-gray-300 dark:border-gray-600"
                    />
                  </div>

                  <div>
                    <Label htmlFor="motherName" className="text-gray-700 dark:text-gray-300">Mother's Name</Label>
                    <Input
                      id="motherName"
                      value={formData.motherName}
                      onChange={(e) => handleInputChange('motherName', e.target.value)}
                      className="mt-1 border-gray-300 dark:border-gray-600"
                    />
                  </div>

                  <div>
                    <Label htmlFor="dateOfBirth" className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <Calendar className="w-4 h-4" />
                      Date of Birth
                    </Label>
                    <Input
                      id="dateOfBirth"
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                      className="mt-1 border-gray-300 dark:border-gray-600"
                    />
                  </div>

                  <div>
                    <Label htmlFor="gender" className="text-gray-700 dark:text-gray-300">Gender</Label>
                    <Select value={formData.gender} onValueChange={(value) => handleInputChange('gender', value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select Gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="category" className="text-gray-700 dark:text-gray-300">Category</Label>
                    <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select Category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General</SelectItem>
                        <SelectItem value="obc">OBC</SelectItem>
                        <SelectItem value="sc">SC</SelectItem>
                        <SelectItem value="st">ST</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="mobile" className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <Phone className="w-4 h-4" />
                      Mobile Number *
                    </Label>
                    <Input
                      id="mobile"
                      value={formData.mobile}
                      onChange={(e) => handleInputChange('mobile', e.target.value)}
                      className="mt-1 border-gray-300 dark:border-gray-600"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <Mail className="w-4 h-4" />
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="mt-1 border-gray-300 dark:border-gray-600"
                    />
                  </div>
                </div>

                {/* Address Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="district" className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <MapPin className="w-4 h-4" />
                      District
                    </Label>
                    <Select value={formData.district} onValueChange={(value) => handleInputChange('district', value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select District" />
                      </SelectTrigger>
                      <SelectContent>
                        {districts.map((district) => (
                          <SelectItem key={district} value={district}>{district}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="mandal" className="text-gray-700 dark:text-gray-300">Mandal</Label>
                    <Input
                      id="mandal"
                      value={formData.mandal}
                      onChange={(e) => handleInputChange('mandal', e.target.value)}
                      className="mt-1 border-gray-300 dark:border-gray-600"
                    />
                  </div>

                  <div>
                    <Label htmlFor="village" className="text-gray-700 dark:text-gray-300">Village/City</Label>
                    <Input
                      id="village"
                      value={formData.village}
                      onChange={(e) => handleInputChange('village', e.target.value)}
                      className="mt-1 border-gray-300 dark:border-gray-600"
                    />
                  </div>
                </div>

                {/* Institution Information */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <School className="w-5 h-5" />
                    Institution Details
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="institutionName" className="text-gray-700 dark:text-gray-300">Institution Name *</Label>
                      <Input
                        id="institutionName"
                        value={formData.institutionName}
                        onChange={(e) => handleInputChange('institutionName', e.target.value)}
                        className="mt-1 border-gray-300 dark:border-gray-600"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="institutionType" className="text-gray-700 dark:text-gray-300">Institution Type</Label>
                      <Select value={formData.institutionType} onValueChange={(value) => handleInputChange('institutionType', value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select Type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="school">School</SelectItem>
                          <SelectItem value="college">College</SelectItem>
                          <SelectItem value="university">University</SelectItem>
                          <SelectItem value="institute">Institute</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="className" className="text-gray-700 dark:text-gray-300">Class/Course</Label>
                      <Input
                        id="className"
                        value={formData.className}
                        onChange={(e) => handleInputChange('className', e.target.value)}
                        className="mt-1 border-gray-300 dark:border-gray-600"
                      />
                    </div>

                    <div>
                      <Label htmlFor="rollNumber" className="text-gray-700 dark:text-gray-300">Roll Number</Label>
                      <Input
                        id="rollNumber"
                        value={formData.rollNumber}
                        onChange={(e) => handleInputChange('rollNumber', e.target.value)}
                        className="mt-1 border-gray-300 dark:border-gray-600"
                      />
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isGenerating}
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-bold py-3 text-lg"
                >
                  {isGenerating ? (
                    <>
                      <Download className="w-5 h-5 mr-2 animate-spin" />
                      Generating Certificate...
                    </>
                  ) : (
                    <>
                      <Download className="w-5 h-5 mr-2" />
                      Generate Certificate
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AntiDrugSoldierForm;
