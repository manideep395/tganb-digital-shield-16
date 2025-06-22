
import { Phone, Mail, MapPin, Building, Clock, User } from 'lucide-react';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    village: '',
    district: '',
    state: '',
    country: '',
    query: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create timestamp
      const timestamp = new Date().toISOString();
      
      // Prepare data for Google Sheets
      const submissionData = {
        timestamp,
        ...formData
      };

      // Here you would integrate with Google Sheets API
      // For now, we'll simulate the submission
      console.log('Submitting to Google Sheets:', submissionData);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitMessage('Thank you for your feedback! Your submission has been recorded successfully.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        village: '',
        district: '',
        state: '',
        country: '',
        query: ''
      });
    } catch (error) {
      setSubmitMessage('There was an error submitting your feedback. Please try again.');
    }
    
    setIsSubmitting(false);
  };

  const contactData = [
    { slNo: 1, unit: "Head Quarters", designation: "Director", contact: "8712661700" },
    { slNo: 2, unit: "", designation: "SP Admin", contact: "8712661701" },
    { slNo: 3, unit: "", designation: "SP West", contact: "8712661800" },
    { slNo: 4, unit: "", designation: "SP East & Operations", contact: "8712661900" },
    { slNo: 5, unit: "Investigation and Legal Wing (Hqrs.)", designation: "DSP", contact: "8712661758" },
    { slNo: 6, unit: "", designation: "Inspector", contact: "8712661748" },
    { slNo: 7, unit: "Technical Wing (Hqrs.)", designation: "DSP", contact: "8712661757" },
    { slNo: 8, unit: "", designation: "Inspector", contact: "8712661738" },
    { slNo: 9, unit: "Documentation & Training Wing(Hqrs.)", designation: "DSP", contact: "8712661705" },
    { slNo: 10, unit: "", designation: "Inspector", contact: "8712661736" },
    { slNo: 11, unit: "Awareness Wing (Hqrs.)", designation: "DSP", contact: "8712661710" },
    { slNo: 12, unit: "", designation: "Inspector", contact: "8712661735" },
    { slNo: 13, unit: "Administration Wing(Hqrs.)", designation: "DSP", contact: "8712661709" },
    { slNo: 14, unit: "Logistics Wing (Hqrs.)", designation: "DSP", contact: "8712661707" },
    { slNo: 15, unit: "State Task Force", designation: "DSP", contact: "8712661756" },
    { slNo: 16, unit: "", designation: "Inspector", contact: "8712661744" },
    { slNo: 17, unit: "", designation: "Inspector", contact: "8712661747" },
    { slNo: 18, unit: "Hyderabad Narcotics Police Station (HNPS)", designation: "DSP", contact: "8712661759" },
    { slNo: 19, unit: "", designation: "Inspector", contact: "8712661732" },
    { slNo: 20, unit: "", designation: "Inspector", contact: "8712661733" },
    { slNo: 21, unit: "Cyberabad Narcotics Police Station (CNPS)", designation: "DSP", contact: "8712661708" },
    { slNo: 22, unit: "", designation: "Inspector", contact: "8712661740" },
    { slNo: 23, unit: "", designation: "Inspector", contact: "8712661734" },
    { slNo: 24, unit: "Rachakonda Narcotics Police Station (RNPS)", designation: "DSP", contact: "8712661714" },
    { slNo: 25, unit: "", designation: "Inspector", contact: "8712661746" },
    { slNo: 26, unit: "", designation: "Inspector", contact: "8712661745" },
    { slNo: 27, unit: "Warangal Narcotics Police Station (WNPS)", designation: "DSP", contact: "8712661711" },
    { slNo: 28, unit: "", designation: "Inspector", contact: "8712661737" },
    { slNo: 29, unit: "", designation: "Inspector", contact: "8712661742" },
    { slNo: 30, unit: "Regional Narcotic Control Centre (RNCC) Karimnagar", designation: "DSP", contact: "8712661755" },
    { slNo: 31, unit: "", designation: "Inspector", contact: "8712661743" },
    { slNo: 32, unit: "Regional Narcotic Control Centre (RNCC) Sangareddy & Mahabubnagar", designation: "DSP", contact: "8712661706" },
    { slNo: 33, unit: "", designation: "Inspector", contact: "8712661760" },
    { slNo: 34, unit: "Regional Narcotic Control Centre (RNCC) Khammam", designation: "DSP", contact: "8712661713" },
    { slNo: 35, unit: "", designation: "Inspector", contact: "8712661760" },
    { slNo: 36, unit: "Regional Narcotic Control Centre (RNCC) Nizamabad", designation: "DSP", contact: "8712661704" },
    { slNo: 37, unit: "", designation: "Inspector", contact: "8712661741" },
    { slNo: 38, unit: "RNCC Railways", designation: "DSP", contact: "8712661712" },
    { slNo: 39, unit: "", designation: "Inspector", contact: "8712661761" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <main className="py-12">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-poppins">
              Contact <span className="text-blue-600">TGANB</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Reach out to us for assistance, reporting, or general inquiries. We're here to help 24/7.
            </p>
          </div>

          {/* Emergency Contacts */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200">
              <CardHeader>
                <CardTitle className="flex items-center text-red-700">
                  <Phone className="w-6 h-6 mr-2" />
                  Emergency Helpline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-red-600 mb-2">1908</div>
                <p className="text-red-700">24/7 Available for Drug Crime Reporting</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-700">
                  <Mail className="w-6 h-6 mr-2" />
                  Official Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-lg font-semibold text-blue-600 mb-2">info@tganb.telangana.gov.in</div>
                <p className="text-blue-700">Response within 24 hours</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center text-green-700">
                  <MapPin className="w-6 h-6 mr-2" />
                  Headquarters
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-700">
                  TG ANB Office, Lakdikapul,<br />
                  Hyderabad, Telangana - 500004
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Directory */}
          <Card className="mb-16">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Building className="w-6 h-6 mr-2" />
                Functional Units Contact Directory
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Sl. No.</TableHead>
                      <TableHead>Functional Unit</TableHead>
                      <TableHead>Designation</TableHead>
                      <TableHead>Contact No.</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {contactData.map((contact) => (
                      <TableRow key={contact.slNo}>
                        <TableCell>{contact.slNo}</TableCell>
                        <TableCell>{contact.unit}</TableCell>
                        <TableCell>{contact.designation}</TableCell>
                        <TableCell>
                          <a href={`tel:${contact.contact}`} className="text-blue-600 hover:text-blue-800">
                            {contact.contact}
                          </a>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          {/* Feedback Form */}
          <Card className="mb-16">
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="w-6 h-6 mr-2" />
                Send us your Feedback
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    name="name"
                    placeholder="Full Name *"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                />

                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    name="village"
                    placeholder="Village/City"
                    value={formData.village}
                    onChange={handleInputChange}
                  />
                  <Input
                    name="district"
                    placeholder="District"
                    value={formData.district}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    name="state"
                    placeholder="State"
                    value={formData.state}
                    onChange={handleInputChange}
                  />
                  <Input
                    name="country"
                    placeholder="Country"
                    value={formData.country}
                    onChange={handleInputChange}
                  />
                </div>

                <Textarea
                  name="query"
                  placeholder="Your Query or Suggestion *"
                  rows={4}
                  value={formData.query}
                  onChange={handleInputChange}
                  required
                />

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
                </Button>

                {submitMessage && (
                  <div className={`p-4 rounded-lg text-center ${
                    submitMessage.includes('error') 
                      ? 'bg-red-100 text-red-700' 
                      : 'bg-green-100 text-green-700'
                  }`}>
                    {submitMessage}
                  </div>
                )}
              </form>
            </CardContent>
          </Card>

          {/* Office Hours */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="w-6 h-6 mr-2" />
                Office Hours & Important Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Office Hours</h4>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed (Emergency services available)</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Anonymous Reporting</h4>
                  <p className="text-gray-600">
                    You can report drug-related activities anonymously through our helpline. 
                    Your identity will be completely protected and confidential.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
