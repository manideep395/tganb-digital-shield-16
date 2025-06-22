import { useState } from 'react';
import { Menu, X, Phone, ChevronDown, Mail, Instagram, Twitter, Facebook, Youtube, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isRisingAIOpen, setIsRisingAIOpen] = useState(false);
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

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
        { title: 'State Co-ordination', href: '/state-coordination' },
        { title: 'TGANB GO 27', href: '/tganb-go-27' },
        { title: 'TGANB Structure', href: '/tganb-structure' },
        { title: 'About T-RISING.AI', href: '/about-rising-ai' },
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
        { title: 'Regional Narcotic Police Stations', href: '/regional-narcotic-police-stations' },
        { title: 'Rehabilitation Centers', href: '/rehabilitation-centers' }
      ]
    },
    { 
      title: 'Initiatives', 
      href: '#',
      dropdown: [
        { title: 'Mission Parivartana', href: '/mission-parivartana' },
        { title: 'Operation Sankalp', href: '/operation-sankalp' },
        { title: 'Prahari Clubs', href: '/prahari-clubs' }
      ]
    },
    { 
      title: 'Awareness', 
      href: '#',
      dropdown: [
        { title: 'Events & Campaigns', href: '/events-campaigns' },
        { title: 'Testing Kits & Detection Methods', href: '/testing-kits' },
        { title: 'Education', href: '/education' },
        { title: 'Myths & Facts', href: '/myths-facts' },
        { title: 'FAQs', href: '/faqs' }
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
    { title: 'Contact', href: '/contact' }
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

  const handleEmail = () => {
    window.location.href = 'mailto:tsnabho-hyd@tspolice.gov.in';
  };

  const handleSocialMedia = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-lg border-b border-blue-600 dark:border-blue-400 sticky top-0 z-50 font-poppins transition-colors">
      {/* Top Header - Compact */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-2 md:py-3">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/37f408d2-9357-4e1c-af91-05f171f00af2.png" 
              alt="Government of Telangana" 
              className="h-12 w-12 md:h-16 md:w-16 rounded-full border border-white/30"
            />
            <div className="h-6 w-px bg-white/30 hidden md:block"></div>
            <img 
              src="/lovable-uploads/cfe052e4-2276-4a1d-b6af-bc0ad7c3ccd4.png" 
              alt="TG ANB Logo" 
              className="h-12 w-12 md:h-16 md:w-16 rounded-full border border-white/30"
            />
          </div>
          
          <div className="text-center flex-1">
            <h1 className="text-lg md:text-2xl font-bold font-poppins tracking-wide">
              TELANGANA ANTI NARCOTICS BUREAU (TGANB)
            </h1>
            <p className="text-sm md:text-base text-blue-200 hidden md:block">Government of Telangana</p>
          </div>

          {/* Desktop Contact Info */}
          <div className="hidden md:flex flex-col items-end space-y-1">
            <div className="flex items-center space-x-2">
              <div 
                className="flex items-center space-x-1 bg-red-600 px-2 py-1 rounded-full text-xs font-bold cursor-pointer hover:bg-red-700 transition-colors"
                onClick={() => handleCall('1908')}
              >
                <Phone className="w-3 h-3" />
                <span>1908</span>
              </div>
              <div 
                className="flex items-center space-x-1 bg-blue-600 px-2 py-1 rounded-full text-xs font-medium cursor-pointer hover:bg-blue-700 transition-colors"
                onClick={() => handleCall('8712671111')}
              >
                <Phone className="w-2 h-2" />
                <span>8712671111</span>
              </div>
            </div>
            <div 
              className="flex items-center space-x-1 text-xs text-blue-200 cursor-pointer hover:text-white transition-colors"
              onClick={handleEmail}
            >
              <Mail className="w-2 h-2" />
              <span>tsnabho-hyd@tspolice.gov.in</span>
            </div>
            
            {/* Social Media Links */}
            <div className="flex space-x-1">
              <button 
                onClick={() => handleSocialMedia('https://www.instagram.com/telanganaantinarcoticsbureau/')}
                className="w-5 h-5 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
              >
                <Instagram className="w-2 h-2" />
              </button>
              <button 
                onClick={() => handleSocialMedia('https://x.com/tg_anb?lang=en')}
                className="w-5 h-5 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors"
              >
                <Twitter className="w-2 h-2" />
              </button>
              <button 
                onClick={() => handleSocialMedia('https://www.facebook.com/telanganaantinarcoticsbureau/')}
                className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Facebook className="w-2 h-2" />
              </button>
              <button 
                onClick={() => handleSocialMedia('https://www.youtube.com/@TG_ANB')}
                className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
              >
                <Youtube className="w-2 h-2" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation - Compact */}
      <nav className="bg-gradient-to-r from-blue-50 via-white to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 py-2">
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
                    className={`text-xs font-medium transition-all duration-200 py-2 px-2 rounded whitespace-nowrap flex items-center gap-1 ${
                      item.href === '/' 
                        ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600 font-bold dark:text-blue-400 dark:bg-blue-900' 
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-800'
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
                      className="absolute top-full left-0 mt-1 bg-white dark:bg-gray-800 rounded-lg shadow-lg border dark:border-gray-700 min-w-48 z-50"
                      onMouseEnter={() => setActiveDropdown(item.title)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {item.dropdown.map((dropdownItem, dropdownIndex) => (
                        <button
                          key={dropdownIndex}
                          className={`w-full text-left py-2 px-4 text-sm font-medium first:rounded-t-lg last:rounded-b-lg ${
                            dropdownItem.gradient 
                              ? `text-white bg-gradient-to-r ${dropdownItem.gradient} hover:opacity-90`
                              : 'text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400'
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
              
              {/* T-RISING.AI Dialog Button */}
              <Dialog open={isRisingAIOpen} onOpenChange={setIsRisingAIOpen}>
                <DialogTrigger asChild>
                  <button className="text-xs font-medium transition-all duration-200 py-2 px-2 rounded whitespace-nowrap text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 font-bold shadow-lg">
                    T-RISING.AI
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-7xl max-h-[95vh] overflow-y-auto bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
                  <DialogHeader className="text-center pb-6">
                    <DialogTitle className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent mb-4">
                      T-RISING.AI
                    </DialogTitle>
                    <p className="text-xl text-gray-600 font-medium">
                      Telangana's Revolutionary Intelligence System for Integrated Narcotics Governance using AI
                    </p>
                  </DialogHeader>
                  
                  <div className="space-y-12">
                    <div className="text-center bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
                      <h2 className="text-3xl font-bold text-gray-800 mb-6">
                        Comprehensive AI Ecosystem for Drug Prevention & Recovery
                      </h2>
                      <p className="text-lg text-gray-600 max-w-5xl mx-auto leading-relaxed">
                        Three specialized AI models working together to create a complete support system - 
                        from prevention and risk assessment to recovery planning and emotional support.
                      </p>
                    </div>
                    
                    <div className="grid lg:grid-cols-3 gap-8">
                      <motion.div 
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="group relative"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                        <div className="relative h-full p-8 rounded-3xl bg-white shadow-xl border border-green-200">
                          <div className="text-center">
                            <div className="text-6xl mb-6">🤝</div>
                            <h3 className="text-3xl font-bold text-green-700 mb-4">Sahay AI</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                              Your compassionate AI counselor providing 24/7 multilingual support, crisis intervention, 
                              and guidance for addiction recovery. Available in English, Telugu, and Hindi.
                            </p>
                            <div className="grid grid-cols-2 gap-3 text-sm text-gray-500 mb-8">
                              <div className="bg-green-50 p-3 rounded-lg">
                                <div className="font-semibold">✓ Crisis Support</div>
                              </div>
                              <div className="bg-green-50 p-3 rounded-lg">
                                <div className="font-semibold">✓ 24/7 Available</div>
                              </div>
                              <div className="bg-green-50 p-3 rounded-lg">
                                <div className="font-semibold">✓ Multilingual</div>
                              </div>
                              <div className="bg-green-50 p-3 rounded-lg">
                                <div className="font-semibold">✓ Anonymous</div>
                              </div>
                            </div>
                            <Button 
                              onClick={() => { handleNavigation('/sahay-ai-chat'); setIsRisingAIOpen(false); }}
                              className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-4 rounded-2xl shadow-lg transform hover:scale-105 transition-all"
                            >
                              💬 Chat Now
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="group relative"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                        <div className="relative h-full p-8 rounded-3xl bg-white shadow-xl border border-blue-200">
                          <div className="text-center">
                            <div className="text-6xl mb-6">🛡️</div>
                            <h3 className="text-3xl font-bold text-blue-700 mb-4">Shield AI</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                              Advanced risk assessment using behavioral analysis to identify vulnerability factors 
                              and provide personalized prevention strategies before problems begin.
                            </p>
                            <div className="grid grid-cols-2 gap-3 text-sm text-gray-500 mb-8">
                              <div className="bg-blue-50 p-3 rounded-lg">
                                <div className="font-semibold">✓ Risk Analysis</div>
                              </div>
                              <div className="bg-blue-50 p-3 rounded-lg">
                                <div className="font-semibold">✓ Prevention Tips</div>
                              </div>
                              <div className="bg-blue-50 p-3 rounded-lg">
                                <div className="font-semibold">✓ Early Detection</div>
                              </div>
                              <div className="bg-blue-50 p-3 rounded-lg">
                                <div className="font-semibold">✓ PDF Reports</div>
                              </div>
                            </div>
                            <Button 
                              onClick={() => { handleNavigation('/shield-ai-assessment'); setIsRisingAIOpen(false); }}
                              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 rounded-2xl shadow-lg transform hover:scale-105 transition-all"
                            >
                              🔍 Take Assessment
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="group relative"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                        <div className="relative h-full p-8 rounded-3xl bg-white shadow-xl border border-purple-200">
                          <div className="text-center">
                            <div className="text-6xl mb-6">🌅</div>
                            <h3 className="text-3xl font-bold text-purple-700 mb-4">Uday AI</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                              Personalized recovery planner creating dynamic daily schedules, motivation plans, 
                              and progress tracking for individuals in their recovery journey.
                            </p>
                            <div className="grid grid-cols-2 gap-3 text-sm text-gray-500 mb-8">
                              <div className="bg-purple-50 p-3 rounded-lg">
                                <div className="font-semibold">✓ Daily Planning</div>
                              </div>
                              <div className="bg-purple-50 p-3 rounded-lg">
                                <div className="font-semibold">✓ Progress Track</div>
                              </div>
                              <div className="bg-purple-50 p-3 rounded-lg">
                                <div className="font-semibold">✓ Motivation</div>
                              </div>
                              <div className="bg-purple-50 p-3 rounded-lg">
                                <div className="font-semibold">✓ Recovery Plans</div>
                              </div>
                            </div>
                            <Button 
                              onClick={() => { handleNavigation('/uday-ai-planner'); setIsRisingAIOpen(false); }}
                              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 rounded-2xl shadow-lg transform hover:scale-105 transition-all"
                            >
                              🌅 Start Recovery
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-20"></div>
                      <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-3xl p-10 text-center shadow-2xl">
                        <div className="flex justify-center mb-6">
                          <img 
                            src="/lovable-uploads/3cc3a66f-c1e9-4a3e-ae78-665c190d4eb4.png" 
                            alt="TGANB Logo" 
                            className="h-16 w-16 rounded-full border-2 border-white/30"
                          />
                        </div>
                        <h3 className="text-3xl font-bold mb-4">Powered by Telangana Anti-Narcotics Bureau</h3>
                        <p className="text-xl opacity-90 max-w-4xl mx-auto">
                          Together, these AI tools create a comprehensive ecosystem for drug prevention, support, and recovery - 
                          making Telangana a pioneer in AI-driven public safety and citizen welfare.
                        </p>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="ml-2"
            >
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </Button>

            {/* Mobile menu */}
            {isMenuOpen && (
              <div className="lg:hidden absolute left-4 right-4 top-full mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border dark:border-gray-700 max-h-64 overflow-y-auto z-50">
                {menuItems.map((item, index) => (
                  <div key={index}>
                    <button 
                      className={`w-full text-left py-2 px-4 text-sm font-medium ${
                        item.href === '/' 
                          ? 'text-blue-600 bg-blue-50 font-bold dark:text-blue-400 dark:bg-blue-900' 
                          : 'text-gray-700 hover:bg-blue-50 dark:text-gray-300 dark:hover:bg-gray-700'
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
                            : 'text-gray-600 hover:bg-blue-50 dark:text-gray-400 dark:hover:bg-gray-700'
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
                  onClick={() => setIsRisingAIOpen(true)}
                  className="w-full text-left py-2 px-4 text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600"
                >
                  T-RISING.AI
                </button>
                
                {/* Mobile Contact Info */}
                <div className="border-t dark:border-gray-700 p-4 space-y-2">
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => handleCall('1908')}
                      className="flex items-center space-x-1 bg-red-600 px-2 py-1 rounded text-white text-xs"
                    >
                      <Phone className="w-3 h-3" />
                      <span>1908</span>
                    </button>
                    <button 
                      onClick={() => handleCall('8712671111')}
                      className="flex items-center space-x-1 bg-blue-600 px-2 py-1 rounded text-white text-xs"
                    >
                      <Phone className="w-3 h-3" />
                      <span>8712671111</span>
                    </button>
                  </div>
                  <button 
                    onClick={handleEmail}
                    className="flex items-center space-x-1 text-xs text-blue-600 dark:text-blue-400"
                  >
                    <Mail className="w-3 h-3" />
                    <span>tsnabho-hyd@tspolice.gov.in</span>
                  </button>
                  <div className="flex space-x-2">
                    <button onClick={() => handleSocialMedia('https://www.instagram.com/telanganaantinarcoticsbureau/')}>
                      <Instagram className="w-5 h-5 text-pink-600" />
                    </button>
                    <button onClick={() => handleSocialMedia('https://x.com/tg_anb?lang=en')}>
                      <Twitter className="w-5 h-5 text-gray-800 dark:text-gray-400" />
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
