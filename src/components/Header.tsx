
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { title: 'Home', href: '#' },
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
        'NPS (New Psychoactive Substances) List',
        'Regional NPS Alerts'
      ]
    },
    {
      title: 'Awareness',
      subItems: [
        'Events & Campaigns Organized',
        'Testing Kits & Detection Methods',
        'Posters, Videos & Pamphlets',
        'FAQs & Public Awareness Guide'
      ]
    },
    {
      title: 'Trainings',
      subItems: [
        'Learning Resources',
        'Awareness Test & Certificate Generation',
        'Types of Drugs & Their Effects',
        'Training Modules for Law Enforcement'
      ]
    },
    {
      title: 'Statistics',
      subItems: [
        'Drug Seizure Data (State/Region Wise)',
        'Arrest & Conviction Rates',
        'Rehab Referrals & Follow-up Numbers',
        'Youth Outreach Metrics'
      ]
    },
    {
      title: 'Achievements',
      subItems: [
        'Awards & Recognition',
        'Major Success Stories',
        'National & State-Level Collaborations'
      ]
    },
    {
      title: 'Initiatives',
      subItems: [
        'Operation Clean State',
        'Campus Outreach Programs',
        'Celebrity Video Campaigns',
        '"Voices Against Drugs" (Youth Awareness)'
      ]
    },
    {
      title: 'News & Media',
      subItems: [
        'Press Releases',
        'Media Coverage',
        'Gallery – Photos',
        'Gallery – Videos'
      ]
    },
    {
      title: 'Certifications',
      subItems: [
        'Awareness Certification',
        'Training Participation Certification',
        'Anti Drug Awareness Soldier Certification'
      ]
    },
    {
      title: 'Contact Us',
      subItems: [
        'Helpline Numbers',
        'TG ANB Office Locations',
        'Email & Feedback Form'
      ]
    }
  ];

  return (
    <header className="bg-white shadow-lg border-b-4 border-blue-600 sticky top-0 z-50">
      {/* Top Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-3">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <img 
              src="/lovable-uploads/37f408d2-9357-4e1c-af91-05f171f00af2.png" 
              alt="Government of Telangana" 
              className="h-12 w-12 rounded-full border-2 border-white shadow-lg"
            />
            <div className="h-8 w-px bg-white/30"></div>
            <img 
              src="/lovable-uploads/cfe052e4-2276-4a1d-b6af-bc0ad7c3ccd4.png" 
              alt="TG ANB Logo" 
              className="h-12 w-12 rounded-full border-2 border-white shadow-lg"
            />
            <div>
              <h1 className="text-xl font-bold font-poppins tracking-wide">
                TELANGANA ANTI NARCOTICS BUREAU (TGANB)
              </h1>
              <p className="text-sm text-blue-100">Government of Telangana</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 bg-red-600 px-4 py-2 rounded-full shadow-lg">
            <Phone className="w-4 h-4" />
            <span className="font-bold">Emergency: 1908</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="hidden lg:flex space-x-8">
              {menuItems.map((item, index) => (
                <div key={index} className="relative group">
                  <button className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-blue-50">
                    {item.title}
                  </button>
                  {item.subItems && (
                    <div className="absolute top-full left-0 mt-2 w-80 bg-white shadow-xl rounded-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <div className="p-4">
                        {item.subItems.map((subItem, subIndex) => (
                          <a
                            key={subIndex}
                            href="#"
                            className="block py-2 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors duration-200"
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
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 bg-white rounded-lg shadow-lg border">
              {menuItems.map((item, index) => (
                <div key={index} className="border-b last:border-b-0">
                  <button className="w-full text-left py-3 px-4 text-gray-700 hover:bg-blue-50 font-medium">
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
