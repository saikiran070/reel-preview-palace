
import React, { useState } from 'react';
import { Search, Bell, User, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('Home');

  const navItems = ['Home', 'Movies', 'TV Shows', 'Sports', 'Premium'];

  const handleNavClick = (item) => {
    setActiveNav(item);
    setIsMobileMenuOpen(false);
    console.log(`Navigated to: ${item}`);
  };

  const handleSearch = () => {
    console.log('Search clicked');
    alert('Search functionality activated!');
  };

  const handleNotifications = () => {
    console.log('Notifications clicked');
    alert('No new notifications');
  };

  const handleProfile = () => {
    console.log('Profile clicked');
    alert('Profile menu opened');
  };

  return (
    <nav className="relative z-20 bg-black/90 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent cursor-pointer">
                StreamFlix
              </h1>
            </div>
            
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-6">
                {navItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => handleNavClick(item)}
                    className={`px-3 py-2 text-sm font-medium transition-colors story-link ${
                      activeNav === item 
                        ? 'text-white' 
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={handleSearch}
              className="text-gray-300 hover:text-white transition-colors p-2 rounded-full hover:bg-gray-800"
            >
              <Search size={20} />
            </button>
            <button 
              onClick={handleNotifications}
              className="text-gray-300 hover:text-white transition-colors p-2 rounded-full hover:bg-gray-800"
            >
              <Bell size={20} />
            </button>
            <button 
              onClick={handleProfile}
              className="text-gray-300 hover:text-white transition-colors p-2 rounded-full hover:bg-gray-800"
            >
              <User size={20} />
            </button>
            
            <button 
              className="md:hidden text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 rounded-lg mt-2">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors ${
                    activeNav === item 
                      ? 'text-white bg-gray-800' 
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
