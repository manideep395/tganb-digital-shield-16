
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { title: 'Home', href: '#', active: true },
    { title: 'About', href: '#' },
    { title: 'Know NPS', href: '#' },
    { title: 'Awareness', href: '#' },
    { title: 'Trainings', href: '#' },
    { title: 'Statistics', href: '#' },
    { title: 'Achievements', href: '#' },
    { title: 'Initiatives', href: '#' },
    { title: 'News', href: '#' },
    { title: 'Certifications', href: '#' },
    { title: 'Contact', href: '#' }
  ];

  return (
    <header className="bg-white shadow-lg border-b border-blue-600 sticky top-0 z-50 font-poppins">
      {/* Top Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-1.5">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/37f408d2-9357-4e1c-af91-05f171f00af2.png" 
              alt="Government of Telangana" 
              className="h-6 w-6 rounded-full border border-white/30"
            />
            <div className="h-4 w-px bg-white/30"></div>
            <img 
              src="/lovable-uploads/cfe052e4-2276-4a1d-b6af-bc0ad7c3ccd4.png" 
              alt="TG ANB Logo" 
              className="h-6 w-6 rounded-full border border-white/30"
            />
          </div>
          
          <div className="text-center flex-1">
            <h1 className="text-xs md:text-sm font-bold font-poppins tracking-wide">
              TELANGANA ANTI NARCOTICS BUREAU (TGANB)
            </h1>
            <p className="text-xs text-blue-200">Government of Telangana</p>
          </div>

          <div className="flex items-center space-x-2 bg-red-600 px-2 py-1 rounded-full text-xs font-bold">
            <Phone className="w-3 h-3" />
            <span>1908</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white py-1">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="hidden lg:flex space-x-4 overflow-x-auto">
              {menuItems.map((item, index) => (
                <button 
                  key={index} 
                  className={`text-xs font-medium transition-all duration-200 py-1.5 px-2 rounded whitespace-nowrap ${
                    item.active 
                      ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600 font-bold' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-2 bg-white rounded-lg shadow-lg border max-h-64 overflow-y-auto">
              {menuItems.map((item, index) => (
                <button 
                  key={index} 
                  className="w-full text-left py-2 px-4 text-xs text-gray-700 hover:bg-blue-50 font-medium"
                >
                  {item.title}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
