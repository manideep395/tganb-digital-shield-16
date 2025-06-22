
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, Shield } from 'lucide-react';

const Footer = () => {
  const handleCall = (number: string) => {
    window.location.href = `tel:${number}`;
  };

  const handleEmail = () => {
    window.location.href = 'mailto:tsnabho-hyd@tspolice.gov.in';
  };

  const handleSocialMedia = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden font-poppins">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/30 to-transparent rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-yellow-400/30 to-transparent rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-lg animate-pulse delay-500"></div>
        <div className="absolute bottom-1/4 right-1/3 w-28 h-28 bg-gradient-to-br from-green-400/20 to-transparent rounded-full blur-lg animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Logo and About */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-4 mb-6">
              <div className="relative">
                <img 
                  src="/lovable-uploads/cfe052e4-2276-4a1d-b6af-bc0ad7c3ccd4.png" 
                  alt="TG ANB Logo" 
                  className="h-16 w-16 rounded-full border-2 border-white/30 shadow-lg"
                />
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Shield className="w-3 h-3 text-blue-900" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  TG ANB
                </h3>
                <p className="text-blue-200 text-sm font-medium">Telangana Anti-Narcotics Bureau</p>
                <p className="text-blue-300 text-xs">Government of Telangana</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 text-sm">
              Dedicated to combating drug abuse through enforcement, awareness, and community empowerment. 
              Building a drug-free Telangana for a safer tomorrow.
            </p>
            
            <div className="flex space-x-3">
              <button 
                onClick={() => handleSocialMedia('https://www.facebook.com/telanganaantinarcoticsbureau/')}
                className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center hover:from-blue-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-110 shadow-lg"
              >
                <Facebook className="w-5 h-5" />
              </button>
              <button 
                onClick={() => handleSocialMedia('https://x.com/tg_anb?lang=en')}
                className="w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center hover:from-gray-600 hover:to-gray-700 transition-all duration-300 transform hover:scale-110 shadow-lg"
              >
                <Twitter className="w-5 h-5" />
              </button>
              <button 
                onClick={() => handleSocialMedia('https://www.instagram.com/telanganaantinarcoticsbureau/')}
                className="w-10 h-10 bg-gradient-to-br from-pink-600 to-pink-700 rounded-full flex items-center justify-center hover:from-pink-500 hover:to-pink-600 transition-all duration-300 transform hover:scale-110 shadow-lg"
              >
                <Instagram className="w-5 h-5" />
              </button>
              <button 
                onClick={() => handleSocialMedia('https://www.youtube.com/@TG_ANB')}
                className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center hover:from-red-500 hover:to-red-600 transition-all duration-300 transform hover:scale-110 shadow-lg"
              >
                <Youtube className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h4 className="text-xl font-bold mb-6 text-yellow-400 flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Contact Information
            </h4>
            <div className="space-y-4 text-gray-300">
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <div className="flex items-center space-x-3 group">
                  <div 
                    className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center group-hover:animate-bounce cursor-pointer"
                    onClick={() => handleCall('1908')}
                  >
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div 
                      className="font-bold text-yellow-400 text-2xl cursor-pointer hover:text-yellow-300"
                      onClick={() => handleCall('1908')}
                    >
                      1908
                    </div>
                    <div className="text-xs text-red-300">Emergency Helpline (24/7)</div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <div 
                  className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center group-hover:animate-bounce cursor-pointer"
                  onClick={() => handleCall('8712671111')}
                >
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div className="text-sm">
                  <div 
                    className="font-medium cursor-pointer hover:text-blue-300"
                    onClick={() => handleCall('8712671111')}
                  >
                    8712671111
                  </div>
                  <div className="text-xs text-blue-300">Contact Number</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <div 
                  className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center group-hover:animate-bounce cursor-pointer"
                  onClick={handleEmail}
                >
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div className="text-sm">
                  <div 
                    className="font-medium cursor-pointer hover:text-green-300"
                    onClick={handleEmail}
                  >
                    tsnabho-hyd@tspolice.gov.in
                  </div>
                  <div className="text-xs text-green-300">Official Email</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 group">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center group-hover:animate-bounce mt-1">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div className="text-sm">
                  <div className="font-medium">TG ANB Office, Lakdikapul</div>
                  <div className="text-gray-400">Hyderabad, Telangana - 500004</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600/50 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-xs mb-4 md:mb-0 text-center md:text-left">
              © 2024 Telangana Anti-Narcotics Bureau. All rights reserved. | Government of Telangana
            </div>
            <div className="flex space-x-6 text-gray-400 text-xs">
              <a href="#" className="hover:text-yellow-400 transition-colors duration-300 hover:underline">Privacy Policy</a>
              <a href="#" className="hover:text-yellow-400 transition-colors duration-300 hover:underline">Terms of Service</a>
              <a href="#" className="hover:text-yellow-400 transition-colors duration-300 hover:underline">RTI</a>
              <a href="#" className="hover:text-yellow-400 transition-colors duration-300 hover:underline">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
