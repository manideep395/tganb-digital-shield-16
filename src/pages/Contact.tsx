
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Contact = () => {
  const { toast } = useToast();
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

  const functionalUnits = [
    { sl: 1, unit: "Head Quarters", designation: "Director", contact: "8712661700" },
    { sl: 2, unit: "Head Quarters", designation: "SP Admin", contact: "8712661701" },
    { sl: 3, unit: "Head Quarters", designation: "SP West", contact: "8712661800" },
    { sl: 4, unit: "Head Quarters", designation: "SP East & Operations", contact: "8712661900" },
    { sl: 5, unit: "Investigation and Legal Wing (Hqrs.)", designation: "DSP", contact: "8712661758" },
    { sl: 6, unit: "Investigation and Legal Wing (Hqrs.)", designation: "Inspector", contact: "8712661748" },
    { sl: 7, unit: "Technical Wing (Hqrs.)", designation: "DSP", contact: "8712661757" },
    { sl: 8, unit: "Technical Wing (Hqrs.)", designation: "Inspector", contact: "8712661738" },
    { sl: 9, unit: "Documentation & Training Wing(Hqrs.)", designation: "DSP", contact: "8712661705" },
    { sl: 10, unit: "Documentation & Training Wing(Hqrs.)", designation: "Inspector", contact: "8712661736" },
    { sl: 11, unit: "Awareness Wing (Hqrs.)", designation: "DSP", contact: "8712661710" },
    { sl: 12, unit: "Awareness Wing (Hqrs.)", designation: "Inspector", contact: "8712661735" },
    { sl: 13, unit: "Administration Wing(Hqrs.)", designation: "DSP", contact: "8712661709" },
    { sl: 14, unit: "Logistics Wing (Hqrs.)", designation: "DSP", contact: "8712661707" },
    { sl: 15, unit: "State Task Force", designation: "DSP", contact: "8712661756" },
    { sl: 16, unit: "State Task Force", designation: "Inspector", contact: "8712661744" },
    { sl: 17, unit: "State Task Force", designation: "Inspector", contact: "8712661747" },
    { sl: 18, unit: "Hyderabad Narcotics Police Station (HNPS)", designation: "DSP", contact: "8712661759" },
    { sl: 19, unit: "Hyderabad Narcotics Police Station (HNPS)", designation: "Inspector", contact: "8712661732" },
    { sl: 20, unit: "Hyderabad Narcotics Police Station (HNPS)", designation: "Inspector", contact: "8712661733" },
    { sl: 21, unit: "Cyberabad Narcotics Police Station (CNPS)", designation: "DSP", contact: "8712661708" },
    { sl: 22, unit: "Cyberabad Narcotics Police Station (CNPS)", designation: "Inspector", contact: "8712661740" },
    { sl: 23, unit: "Cyberabad Narcotics Police Station (CNPS)", designation: "Inspector", contact: "8712661734" },
    { sl: 24, unit: "Rachakonda Narcotics Police Station (RNPS)", designation: "DSP", contact: "8712661714" },
    { sl: 25, unit: "Rachakonda Narcotics Police Station (RNPS)", designation: "Inspector", contact: "8712661746" },
    { sl: 26, unit: "Rachakonda Narcotics Police Station (RNPS)", designation: "Inspector", contact: "8712661745" },
    { sl: 27, unit: "Warangal Narcotics Police Station (WNPS)", designation: "DSP", contact: "8712661711" },
    { sl: 28, unit: "Warangal Narcotics Police Station (WNPS)", designation: "Inspector", contact: "8712661737" },
    { sl: 29, unit: "Warangal Narcotics Police Station (WNPS)", designation: "Inspector", contact: "8712661742" },
    { sl: 30, unit: "Regional Narcotic Control Centre (RNCC) Karimnagar", designation: "DSP", contact: "8712661755" },
    { sl: 31, unit: "Regional Narcotic Control Centre (RNCC) Karimnagar", designation: "Inspector", contact: "8712661743" },
    { sl: 32, unit: "Regional Narcotic Control Centre (RNCC) Sangareddy & Mahabubnagar", designation: "DSP", contact: "8712661706" },
    { sl: 33, unit: "Regional Narcotic Control Centre (RNCC) Sangareddy & Mahabubnagar", designation: "Inspector", contact: "8712661760" },
    { sl: 34, unit: "Regional Narcotic Control Centre (RNCC) Khammam", designation: "DSP", contact: "8712661713" },
    { sl: 35, unit: "Regional Narcotic Control Centre (RNCC) Khammam", designation: "Inspector", contact: "8712661760" },
    { sl: 36, unit: "Regional Narcotic Control Centre (RNCC) Nizamabad", designation: "DSP", contact: "8712661704" },
    { sl: 37, unit: "Regional Narcotic Control Centre (RNCC) Nizamabad", designation: "Inspector", contact: "8712661741" },
    { sl: 38, unit: "RNCC Railways", designation: "DSP", contact: "8712661712" },
    { sl: 39, unit: "RNCC Railways", designation: "Inspector", contact: "8712661761" }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Feedback Submitted Successfully!",
      description: "Thank you for your feedback. We will get back to you soon.",
    });

    // Reset form
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
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white font-poppins">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get in touch with Telangana Anti-Narcotics Bureau. We're here to help and address your concerns.
          </p>
        </div>

        {/* Emergency Contact */}
        <div className="mb-8">
          <Card className="bg-gradient-to-r from-red-500 to-red-600 text-white">
            <CardContent className="p-6 text-center">
              <Phone className="w-8 h-8 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Emergency Helpline</h3>
              <div className="text-4xl font-bold mb-2">1908</div>
              <p className="text-red-100">Available 24/7 for drug-related emergencies</p>
            </CardContent>
          </Card>
        </div>

        {/* Office Information */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-600" />
                Office Address
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                Telangana Anti-Narcotics Bureau<br />
                Lakdikapul, Hyderabad<br />
                Telangana - 500004<br />
                India
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-600" />
                Office Hours
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-gray-600">
                <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</p>
                <p><strong>Saturday:</strong> 9:00 AM - 1:00 PM</p>
                <p><strong>Sunday:</strong> Closed</p>
                <p><strong>Emergency:</strong> 24/7 via helpline</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Functional Units Contact Details */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Functional Units & Contact Details</CardTitle>
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
                  {functionalUnits.map((unit) => (
                    <TableRow key={unit.sl}>
                      <TableCell>{unit.sl}</TableCell>
                      <TableCell>{unit.unit}</TableCell>
                      <TableCell>{unit.designation}</TableCell>
                      <TableCell>
                        <a href={`tel:${unit.contact}`} className="text-blue-600 hover:underline">
                          {unit.contact}
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
        <Card>
          <CardHeader>
            <CardTitle>Send us your Feedback</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email ID *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Village/City *
                  </label>
                  <Input
                    type="text"
                    name="village"
                    value={formData.village}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your village or city"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    District *
                  </label>
                  <Input
                    type="text"
                    name="district"
                    value={formData.district}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your district"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    State *
                  </label>
                  <Input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your state"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Country *
                </label>
                <Input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your country"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Query/Suggestion *
                </label>
                <Textarea
                  name="query"
                  value={formData.query}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  placeholder="Please describe your query, suggestion, or feedback in detail..."
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                Submit Feedback
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
