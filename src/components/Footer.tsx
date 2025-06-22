
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white relative overflow-hidden font-poppins">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/30 to-transparent rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-yellow-400/30 to-transparent rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-lg animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-6">
          {/* Logo and About */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-4 mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full blur-md animate-pulse"></div>
                <Shield className="w-12 h-12 text-yellow-400 relative z-10" />
              </div>
              <div>
                <h3 className="text-xl font-bold">TG ANB</h3>
                <p className="text-gray-300 text-sm">Telangana Anti-Narcotics Bureau</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4 text-sm">
              Dedicated to combating drug abuse through enforcement, awareness, and community empowerment. 
              Building a drug-free Telangana for a better tomorrow.
            </p>
            
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-all duration-300 transform hover:scale-110">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-all duration-300 transform hover:scale-110">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-all duration-300 transform hover:scale-110">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-all duration-300 transform hover:scale-110">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-3 text-yellow-400">Quick Links</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-yellow-400 transition-colors transform hover:translate-x-1 inline-block">About TG ANB</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors transform hover:translate-x-1 inline-block">Director's Message</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors transform hover:translate-x-1 inline-block">Our Initiatives</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors transform hover:translate-x-1 inline-block">Awareness Programs</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors transform hover:translate-x-1 inline-block">Statistics</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors transform hover:translate-x-1 inline-block">Certifications</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-3 text-yellow-400">Contact</h4>
            <div className="space-y-3 text-gray-300 text-sm">
              <div className="flex items-center space-x-3 group">
                <Phone className="w-4 h-4 text-red-400 group-hover:animate-bounce" />
                <div>
                  <div className="font-bold text-yellow-400 text-lg">1908</div>
                  <div className="text-xs">Emergency Helpline</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 group">
                <Mail className="w-4 h-4 text-blue-400 group-hover:animate-bounce" />
                <div className="text-sm">info@tganb.telangana.gov.in</div>
              </div>
              <div className="flex items-start space-x-3 group">
                <MapPin className="w-4 h-4 text-green-400 mt-1 group-hover:animate-bounce" />
                <div className="text-sm">
                  TG ANB Office, Lakdikapul,<br />
                  Hyderabad, Telangana - 500004
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-xs mb-4 md:mb-0">
              © 2024 Telangana Anti-Narcotics Bureau. All rights reserved. | Government of Telangana
            </div>
            <div className="flex space-x-4 text-gray-400 text-xs">
              <a href="#" className="hover:text-yellow-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-yellow-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-yellow-400 transition-colors">RTI</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
