
import { Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Contact & Helplines</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Reach out to us for assistance, reporting, or general inquiries
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Emergency Helplines</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="bg-red-600 p-3 rounded-full">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">Emergency Helpline</div>
                    <div className="text-2xl font-bold text-yellow-400">1908</div>
                    <div className="text-sm text-blue-200">24/7 Available</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="bg-blue-600 p-3 rounded-full">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold">TG ANB Control Room</div>
                    <div className="text-lg font-bold text-yellow-400">040-27852726</div>
                    <div className="text-sm text-blue-200">Office Hours</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="bg-green-600 p-3 rounded-full">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold">Official Email</div>
                    <div className="text-lg text-yellow-400">info@tganb.telangana.gov.in</div>
                    <div className="text-sm text-blue-200">Response within 24 hours</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="bg-purple-600 p-3 rounded-full">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold">Headquarters</div>
                    <div className="text-sm text-blue-200">
                      TG ANB Office, Lakdikapul,<br />
                      Hyderabad, Telangana - 500004
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-6">
              <h4 className="font-bold text-lg mb-3">🚨 Anonymous Reporting</h4>
              <p className="text-sm mb-4">
                Report drug-related activities anonymously. Your identity will be completely protected.
              </p>
              <Button 
                className="bg-white text-red-600 hover:bg-gray-100 rounded-full font-bold"
              >
                Submit Anonymous Report
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input 
                  placeholder="First Name" 
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 rounded-xl"
                />
                <Input 
                  placeholder="Last Name" 
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 rounded-xl"
                />
              </div>
              <Input 
                type="email" 
                placeholder="Email Address" 
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70 rounded-xl"
              />
              <Input 
                type="tel" 
                placeholder="Phone Number" 
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70 rounded-xl"
              />
              <Input 
                placeholder="Subject" 
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70 rounded-xl"
              />
              <Textarea 
                placeholder="Your Message" 
                rows={4}
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70 rounded-xl resize-none"
              />
              <Button 
                size="lg"
                className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold rounded-xl"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
