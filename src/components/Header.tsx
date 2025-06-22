
import { useState } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
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
        { title: 'Anti-Drug Committees', href: '/anti-drug-committees' },
        { title: 'About Logo', href: '/about-logo' },
        { title: "Director's Note", href: '/directors-note' },
        { title: 'Officers Directory', href: '/officers-directory' },
        { title: 'Central Co-ordination', href: '/central-coordination' },
        { title: 'State Co-ordination', href: '/state-coordination' }
      ]
    },
    { 
      title: 'Support Centers', 
      href: '#',
      dropdown: [
        { title: 'Narcotic Police Stations', href: '/narcotic-police-stations' },
        { title: 'Regional Narcotic Police Stations', href: '/regional-narcotic-police-stations' },
        { title: 'Rehabilitation Centers', href: '/rehabilitation-centers' }
      ]
    },
    { 
      title: 'Initiatives & Awareness', 
      href: '#',
      dropdown: [
        { title: 'Mission Parivartana', href: '/mission-parivartana' },
        { title: 'Operation Sankalp', href: '/operation-sankalp' },
        { title: 'Prahari Clubs', href: '/prahari-clubs' },
        { title: 'Events & Campaigns', href: '/events-campaigns' },
        { title: 'Testing Kits & Detection Methods', href: '/testing-kits' },
        { title: 'FAQs', href: '/faqs' }
      ]
    },
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
    { title: 'Certifications', href: '/certifications' },
    { title: 'Contact', href: '/contact' }
  ];

  const handleNavigation = (href: string) => {
    if (href !== '#') {
      navigate(href);
      setIsMenuOpen(false);
      setActiveDropdown(null);
    }
  };

  return (
    <header className="bg-white shadow-lg border-b border-blue-600 sticky top-0 z-50 font-poppins">
      {/* Top Header */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-2">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/37f408d2-9357-4e1c-af91-05f171f00af2.png" 
              alt="Government of Telangana" 
              className="h-8 w-8 rounded-full border border-white/30"
            />
            <div className="h-6 w-px bg-white/30"></div>
            <img 
              src="/lovable-uploads/cfe052e4-2276-4a1d-b6af-bc0ad7c3ccd4.png" 
              alt="TG ANB Logo" 
              className="h-8 w-8 rounded-full border border-white/30"
            />
          </div>
          
          <div className="text-center flex-1">
            <h1 className="text-sm md:text-base font-bold font-poppins tracking-wide">
              TELANGANA ANTI NARCOTICS BUREAU (TGANB)
            </h1>
            <p className="text-xs text-blue-200">Government of Telangana</p>
          </div>

          <div className="flex items-center space-x-2 bg-red-600 px-3 py-1 rounded-full text-sm font-bold">
            <Phone className="w-4 h-4" />
            <span>1908</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-gradient-to-r from-blue-50 via-white to-blue-50 py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center lg:justify-between">
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden absolute left-4"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>

            <div className="hidden lg:flex space-x-2 justify-center w-full">
              {menuItems.map((item, index) => (
                <div key={index} className="relative group">
                  <button 
                    className={`text-xs font-medium transition-all duration-200 py-2 px-3 rounded whitespace-nowrap flex items-center gap-1 ${
                      item.href === '/' 
                        ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600 font-bold' 
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                    onClick={() => handleNavigation(item.href)}
                    onMouseEnter={() => item.dropdown && setActiveDropdown(item.title)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.title}
                    {item.dropdown && <ChevronDown className="w-3 h-3" />}
                  </button>
                  
                  {item.dropdown && activeDropdown === item.title && (
                    <div 
                      className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg border min-w-48 z-50"
                      onMouseEnter={() => setActiveDropdown(item.title)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {item.dropdown.map((dropdownItem, dropdownIndex) => (
                        <button
                          key={dropdownIndex}
                          className="w-full text-left py-2 px-4 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 first:rounded-t-lg last:rounded-b-lg"
                          onClick={() => handleNavigation(dropdownItem.href)}
                        >
                          {dropdownItem.title}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
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
                        className="w-full text-left py-2 px-8 text-sm text-gray-600 hover:bg-blue-50"
                        onClick={() => handleNavigation(dropdownItem.href)}
                      >
                        {dropdownItem.title}
                      </button>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
