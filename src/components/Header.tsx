
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { title: 'Home', href: '#', active: true },
    {
      title: 'About',
      subItems: [
        'About TG ANB',
        'Officers & Director',
        "Director's Note",
        'Vision & Mission'
      ]
    },
    {
      title: 'Know Your NPS',
      subItems: [
        'NPS List',
        'Regional Alerts'
      ]
    },
    {
      title: 'Awareness',
      subItems: [
        'Events & Campaigns',
        'Testing Kits',
        'Posters & Videos',
        'FAQs Guide'
      ]
    },
    {
      title: 'Trainings',
      subItems: [
        'Learning Resources',
        'Certification',
        'Drug Effects',
        'Training Modules'
      ]
    },
    {
      title: 'Statistics',
      subItems: [
        'Drug Seizures',
        'Arrest Rates',
        'Rehab Referrals',
        'Youth Outreach'
      ]
    },
    {
      title: 'Achievements',
      subItems: [
        'Awards',
        'Success Stories',
        'Collaborations'
      ]
    },
    {
      title: 'Initiatives',
      subItems: [
        'Operation Clean State',
        'Campus Outreach',
        'Celebrity Campaigns',
        'Voices Against Drugs'
      ]
    },
    {
      title: 'News & Media',
      subItems: [
        'Press Releases',
        'Media Coverage',
        'Photo Gallery',
        'Video Gallery'
      ]
    },
    {
      title: 'Certifications',
      subItems: [
        'Awareness Certificate',
        'Training Certificate',
        'Soldier Certificate'
      ]
    },
    {
      title: 'Contact Us',
      subItems: [
        'Helplines',
        'Office Locations',
        'Feedback Form'
      ]
    }
  ];

  return (
    <header className="bg-white shadow-lg border-b-2 border-blue-600 sticky top-0 z-50">
      {/* Top Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-2">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
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
            <div className="text-center">
              <h1 className="text-sm md:text-base font-bold font-poppins tracking-wide">
                TELANGANA ANTI NARCOTICS BUREAU (TGANB)
              </h1>
              <p className="text-xs text-blue-200">Government of Telangana</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 bg-red-600 px-3 py-1 rounded-full text-xs font-bold">
            <Phone className="w-3 h-3" />
            <span>Emergency: 1908</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="hidden lg:flex space-x-6">
              {menuItems.map((item, index) => (
                <div key={index} className="relative group">
                  <button className={`text-sm font-medium transition-all duration-200 py-2 px-3 rounded-lg whitespace-nowrap ${
                    item.active 
                      ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}>
                    {item.title}
                  </button>
                  {item.subItems && (
                    <div className="absolute top-full left-0 mt-1 w-60 bg-white shadow-xl rounded-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <div className="p-2">
                        {item.subItems.map((subItem, subIndex) => (
                          <a
                            key={subIndex}
                            href="#"
                            className="block py-2 px-3 text-xs text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors duration-200"
                          >
                            {subItem}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-2 bg-white rounded-lg shadow-lg border max-h-96 overflow-y-auto">
              {menuItems.map((item, index) => (
                <div key={index} className="border-b last:border-b-0">
                  <button className="w-full text-left py-2 px-4 text-sm text-gray-700 hover:bg-blue-50 font-medium">
                    {item.title}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
