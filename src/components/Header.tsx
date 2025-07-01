import { useState } from 'react';
import { Menu, X, Phone, ChevronDown, Mail, Instagram, Twitter, Facebook, Youtube, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navigate = useNavigate();

  const menuItems = [
    { title: 'Home', href: '/', active: true },
    { 
      title: 'About', 
      href: '#',
      dropdown: [
        { title: 'About TGANB', href: '/about-tganb' },
        { title: 'Vision & Mission', href: '/vision-mission' },
        { title: "Director's Note", href: '/directors-note' },
        { title: 'About Logo', href: '/about-logo' },
        { title: 'Officers Directory', href: '/officers-directory' },
        { title: 'Central Co-ordination', href: '/central-coordination' },
        { title: 'State Co-ordination', href: '/state-coordination' },
        { title: 'TGANB GO 27', href: '/tganb-go-27' },
        { title: 'TGANB Structure', href: '/tganb-structure' },
        { title: 'About T-RISING.AI', href: '/about-t-rising-ai' },
        { title: 'About Sahay AI', href: '/about-sahay-ai', gradient: 'from-green-500 to-emerald-500' },
        { title: 'About Shield AI', href: '/about-shield-ai', gradient: 'from-blue-500 to-indigo-500' },
        { title: 'About Uday AI', href: '/about-uday-ai', gradient: 'from-purple-500 to-pink-500' }
      ]
    },
    { 
      title: 'Support Centers', 
      href: '#',
      dropdown: [
        { title: 'Narcotic Police Stations', href: '/narcotic-police-stations' },
        { title: 'Regional Narcotic Control Cells', href: '/regional-narcotic-police-stations' },
        { title: 'Rehabilitation Centers', href: '/rehabilitation-centers' }
      ]
    },
    { 
      title: 'Awareness', 
      href: '#',
      dropdown: [
        { title: 'Mission Parivartana', href: '/mission-parivartana' },
        { title: 'Operation Sankalp', href: '/operation-sankalp' },
        { title: 'Prahari Clubs', href: '/prahari-clubs' },
        { title: 'Anti-Drug Committees', href: '/anti-drug-committees' },
        { title: 'Events & Campaigns', href: '/events-campaigns' },
        { title: 'Testing Kits & Detection Methods', href: '/testing-kits' },
        { title: 'Education', href: '/education' },
        { title: 'Myths & Facts', href: '/myths-facts' },
        { title: 'FAQs', href: '/faqs' },
      ]
    },
    { 
      title: 'Certifications', 
      href: '#',
      dropdown: [
        { title: 'Anti Drug Soldier Enrollment', href: '/anti-drug-soldier-enrollment' },
        { title: 'Verification Center', href: '/certificate-verification' }
      ]
    },
    { title: 'Report Drug', href: '/drug-report-submission' },
    { title: 'Trainings', href: '/trainings' },
    { title: 'Statistics', href: '/statistics' },
    { 
      title: 'News & Achievements', 
      href: '#',
      dropdown: [
        { title: 'Achievements', href: '/achievements' },
        { title: 'News', href: '/news' }
      ]
    },
    { title: 'Contacts', href: '/contact' }
  ];

  const handleNavigation = (href: string) => {
    if (href !== '#') {
      navigate(href);
      setIsMenuOpen(false);
      setActiveDropdown(null);
    }
  };

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
    <header className="bg-white shadow-lg border-b border-darkslategrey-600 sticky top-0 z-50 font-poppins">
      {/* Top Header - Reduced size */}
      <div className="bg-gradient-to-r from-green-900 via-darkslategrey-900 to-blue-900 text-white py-2 md:py-2.5">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/uploads/cfe052e4-2276-4a1d-b6af-bc0ad7c3ccd4.png" 
              alt="TG ANB Logo" 
              className="h-12 w-12 md:h-14 md:w-14 rounded-full border border-white/30"
            />
            <div className="h-6 w-px bg-white/30 hidden md:block"></div>
            <img 
              src="/uploads/37f408d2-9357-4e1c-af91-05f171f00af2.png" 
              alt="Government of Telangana" 
              className="h-12 w-12 md:h-14 md:w-14 rounded-full border border-white/30"
            />
          </div>
          
          <div className="text-center flex-1">
            <h1 className="text-lg md:text-2xl font-bold font-poppins tracking-wide">
              TELANGANA ANTI NARCOTICS BUREAU (TGANB)
            </h1>
            <p className="text-xs md:text-sm text-blue-200">Government of Telangana</p>
          </div>

          {/* Desktop Contact Info */}
          <div className="hidden md:flex flex-col items-end space-y-1.5">
            <div className="flex items-center space-x-2">
              <div 
                className="flex items-center space-x-1 bg-red-600 px-2 py-1 rounded-full text-xs font-bold cursor-pointer hover:bg-red-700 transition-colors"
                onClick={() => handleCall('1908')}
              >
                <Phone className="w-3 h-3" />
                <span>1908</span>
              </div>
              <div 
                className="flex items-center space-x-1 bg-green-600 px-2 py-1 rounded-full text-xs font-medium cursor-pointer hover:bg-green-700 transition-colors"
                onClick={() => handleWhatsApp('8712671111')}
              >
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/>
                </svg>
                <span>8712671111</span>
              </div>
            </div>
            <div 
              className="flex items-center space-x-1 text-xs text-darkslategrey-200 cursor-pointer hover:text-white transition-colors"
              onClick={handleEmail}
            >
              <Mail className="w-3 h-3" />
              <span>tsnabho-hyd@tspolice.gov.in</span>
            </div>
            
            {/* Social Media Links + Admin Login */}
            <div className="flex space-x-1.5 items-center">
              <button 
                onClick={() => handleSocialMedia('https://www.instagram.com/telanganaantinarcoticsbureau/')}
                className="w-5 h-5 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
              >
                <Instagram className="w-2.5 h-2.5" />
              </button>
              <button 
                onClick={() => handleSocialMedia('https://x.com/tg_anb?lang=en')}
                className="w-5 h-5 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors"
              >
                <Twitter className="w-2.5 h-2.5" />
              </button>
              <button 
                onClick={() => handleSocialMedia('https://www.facebook.com/telanganaantinarcoticsbureau/')}
                className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Facebook className="w-2.5 h-2.5" />
              </button>
              <button 
                onClick={() => handleSocialMedia('https://www.youtube.com/@TG_ANB')}
                className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
              >
                <Youtube className="w-2.5 h-2.5" />
              </button>
              <div className="w-px h-3 bg-white/30 mx-1"></div>
              <button 
                onClick={() => navigate('/admin/login')}
                className="flex items-center space-x-1 bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded text-xs font-medium transition-colors"
                title="Admin Login"
              >
                <Shield className="w-3 h-3" />
                <span>Admin</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation - Reduced size */}
      <nav className="bg-gradient-to-r from-blue-50 via-white to-blue-50 py-1.5">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-1 justify-center flex-1">
              {menuItems.map((item, index) => (
                <div key={index} className="relative group">
                  <button 
                    className={`text-xs font-medium transition-all duration-200 py-1.5 px-2 rounded whitespace-nowrap flex items-center gap-1 ${
                      item.href === '/' 
                        ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600 font-bold' 
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                    onClick={() => handleNavigation(item.href)}
                    onMouseEnter={() => item.dropdown && setActiveDropdown(item.title)}
                  >
                    {item.title}
                    {item.dropdown && <ChevronDown className="w-3 h-3" />}
                  </button>
                  
                  {item.dropdown && activeDropdown === item.title && (
                    <div 
                      className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg border min-w-48 z-[60] py-2"
                      onMouseEnter={() => setActiveDropdown(item.title)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {item.dropdown.map((dropdownItem, dropdownIndex) => (
                        <button
                          key={dropdownIndex}
                          className={`w-full text-left py-2 px-4 text-xs font-medium transition-colors ${
                            dropdownItem.gradient 
                              ? `text-white bg-gradient-to-r ${dropdownItem.gradient} hover:opacity-90 mx-2 rounded-md`
                              : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                          }`}
                          onClick={() => handleNavigation(dropdownItem.href)}
                        >
                          {dropdownItem.title}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* T-RISING.AI Button */}
              <button 
                onClick={() => handleNavigation('/sahay-ai-chatbot')}
                className="text-xs font-medium transition-all duration-200 py-1.5 px-2 rounded whitespace-nowrap text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 font-bold shadow-lg"
              >
                T-RISING.AI
              </button>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
              <div className="lg:hidden absolute left-4 right-4 top-full mt-2 bg-white rounded-lg shadow-lg border max-h-64 overflow-y-auto z-50">
                {menuItems.map((item, index) => (
                  <div key={index}>
                    <button 
                      className={`w-full text-left py-2 px-4 text-sm font-medium ${
                        item.href === '/' 
                          ? 'text-blue-600 bg-blue-50 font-bold' 
                          : 'text-gray-700 hover:bg-blue-50'
                      }`}
                      onClick={() => handleNavigation(item.href)}
                    >
                      {item.title}
                    </button>
                    {item.dropdown && item.dropdown.map((dropdownItem, dropdownIndex) => (
                      <button
                        key={dropdownIndex}
                        className={`w-full text-left py-2 px-8 text-sm ${
                          dropdownItem.gradient 
                            ? `text-white bg-gradient-to-r ${dropdownItem.gradient}`
                            : 'text-gray-600 hover:bg-blue-50'
                        }`}
                        onClick={() => handleNavigation(dropdownItem.href)}
                      >
                        {dropdownItem.title}
                      </button>
                    ))}
                  </div>
                ))}
                
                {/* T-RISING.AI Mobile Button */}
                <button 
                  onClick={() => { handleNavigation('/about-rising-ai'); setIsMenuOpen(false); }}
                  className="w-full text-left py-2 px-4 text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600"
                >
                  T-RISING.AI
                </button>
                
                {/* Admin Login Mobile Button */}
                <button 
                  onClick={() => { navigate('/admin/login'); setIsMenuOpen(false); }}
                  className="w-full text-left py-2 px-4 text-sm font-medium text-gray-700 hover:bg-blue-50 border-t"
                >
                  🛡️ Admin Login
                </button>
                
                {/* Mobile Contact Info with WhatsApp */}
                <div className="border-t p-4 space-y-2">
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => handleCall('1908')}
                      className="flex items-center space-x-1 bg-red-600 px-2 py-1 rounded text-white text-xs"
                    >
                      <Phone className="w-3 h-3" />
                      <span>1908</span>
                    </button>
                    <button 
                      onClick={() => handleWhatsApp('8712671111')}
                      className="flex items-center space-x-1 bg-green-600 px-2 py-1 rounded text-white text-xs"
                    >
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/>
                      </svg>
                      <span>8712671111</span>
                    </button>
                  </div>
                  <div 
                    className="flex items-center space-x-1 text-xs text-blue-600 cursor-pointer hover:text-blue-900 transition-colors"
                    onClick={handleEmail}
                  >
                    <Mail className="w-3 h-3" />
                    <span>tsnabho-hyd@tspolice.gov.in</span>
                  </div>
                  <div className="flex space-x-2">
                    <button onClick={() => handleSocialMedia('https://www.instagram.com/telanganaantinarcoticsbureau/')}>
                      <Instagram className="w-5 h-5 text-pink-600" />
                    </button>
                    <button onClick={() => handleSocialMedia('https://x.com/tg_anb?lang=en')}>
                      <Twitter className="w-5 h-5 text-gray-800" />
                    </button>
                    <button onClick={() => handleSocialMedia('https://www.facebook.com/telanganaantinarcoticsbureau/')}>
                      <Facebook className="w-5 h-5 text-blue-600" />
                    </button>
                    <button onClick={() => handleSocialMedia('https://www.youtube.com/@TG_ANB')}>
                      <Youtube className="w-5 h-5 text-red-600" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
