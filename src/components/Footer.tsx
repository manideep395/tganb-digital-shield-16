
import { Phone, Mail, MapPin, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  const handleCall = (number: string) => {
    window.location.href = `tel:${number}`;
  };

  const handleWhatsApp = (number: string) => {
    window.open(`https://wa.me/${number}`, '_blank');
  };

  const handleEmail = () => {
    window.location.href = 'mailto:tsnabho-hyd@tspolice.gov.in';
  };

  const handleSocialMedia = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <footer className="bg-gradient-to-r from-green-900 via-darkslategrey-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/uploads/cfe052e4-2276-4a1d-b6af-bc0ad7c3ccd4.png" 
                alt="TGANB Logo" 
                className="h-12 w-12 rounded-full"
              />
              <div>
                <h3 className="text-lg font-bold">TGANB</h3>
                <p className="text-sm text-blue-200">Government of Telangana</p>
              </div>
            </div>
            <p className="text-sm text-blue-100 leading-relaxed">
              Telangana Anti Narcotics Bureau is dedicated to combating drug trafficking and substance abuse through enforcement, prevention, and community engagement.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold border-b border-blue-600 pb-2">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/about-tganb" className="text-blue-100 hover:text-white transition-colors">About TGANB</a></li>
              <li><a href="/vision-mission" className="text-blue-100 hover:text-white transition-colors">Vision & Mission</a></li>
              <li><a href="/officers-directory" className="text-blue-100 hover:text-white transition-colors">Officers Directory</a></li>
              <li><a href="/rehabilitation-centers" className="text-blue-100 hover:text-white transition-colors">Rehabilitation Centers</a></li>
              <li><a href="/anti-drug-soldier-enrollment" className="text-blue-100 hover:text-white transition-colors">Anti-Drug Soldier</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold border-b border-blue-600 pb-2">Contact Information</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-red-400" />
                <div>
                  <p 
                    className="text-red-300 font-bold cursor-pointer hover:text-red-200 transition-colors"
                    onClick={() => handleCall('1908')}
                  >
                    Emergency: 1908
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-4 h-4 text-green-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/>
                </svg>
                <p 
                  className="text-green-300 cursor-pointer hover:text-green-200 transition-colors"
                  onClick={() => handleWhatsApp('8712671111')}
                >
                  WhatsApp: 8712671111
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-300" />
                <p 
                  className="text-blue-100 cursor-pointer hover:text-white transition-colors break-all"
                  onClick={handleEmail}
                >
                  tsnabho-hyd@tspolice.gov.in
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-blue-300 mt-0.5" />
                <p className="text-blue-100 text-xs leading-relaxed">
                  Telangana Anti Narcotics Bureau<br />
                  Hyderabad, Telangana, India
                </p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold border-b border-blue-600 pb-2">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/mission-parivartana" className="text-blue-100 hover:text-white transition-colors">Mission Parivartana</a></li>
              <li><a href="/operation-sankalp" className="text-blue-100 hover:text-white transition-colors">Operation Sankalp</a></li>
              <li><a href="/education" className="text-blue-100 hover:text-white transition-colors">Drug Education</a></li>
              <li><a href="/certificate-verification" className="text-blue-100 hover:text-white transition-colors">Certificate Verification</a></li>
              <li><a href="/trainings" className="text-blue-100 hover:text-white transition-colors">Training Programs</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="border-t border-blue-600 mt-6 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex space-x-4">
              <button 
                onClick={() => handleSocialMedia('https://www.instagram.com/telanganaantinarcoticsbureau/')}
                className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </button>
              <button 
                onClick={() => handleSocialMedia('https://x.com/tg_anb?lang=en')}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </button>
              <button 
                onClick={() => handleSocialMedia('https://www.facebook.com/telanganaantinarcoticsbureau/')}
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </button>
              <button 
                onClick={() => handleSocialMedia('https://www.youtube.com/@TG_ANB')}
                className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </button>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-blue-200">
                © 2025 Telangana Anti Narcotics Bureau. All rights reserved.
              </p>
              <p className="text-xs text-blue-300 mt-1">
                Government of Telangana
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
