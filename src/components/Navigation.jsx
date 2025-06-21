
import React, { useState } from 'react';
import { Bell, User, Menu, X } from 'lucide-react';
import SearchBar from './SearchBar';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('Home');
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);

  const navItems = ['Home', 'Movies', 'TV Shows', 'Sports', 'Premium'];

  const handleNavClick = (item) => {
    setActiveNav(item);
    setIsMobileMenuOpen(false);
    console.log(`Navigated to: ${item}`);
  };

  const handleSearch = (searchTerm) => {
    console.log('Search term:', searchTerm);
    // Here you would typically filter content or make API calls
  };

  const handleNotifications = () => {
    console.log('Notifications clicked');
    alert('🔔 No new notifications');
  };

  const handleProfile = () => {
    console.log('Profile clicked');
    alert('👤 Profile menu opened');
  };

  const toggleMobileSearch = () => {
    setIsSearchExpanded(!isSearchExpanded);
  };

  return (
    <nav className="relative z-20 bg-gradient-to-r from-black via-gray-900 to-black backdrop-blur-md border-b border-gray-800/50">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-8">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent cursor-pointer hover:scale-105 transition-transform duration-200">
                StreamFlix
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-6">
                {navItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => handleNavClick(item)}
                    className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                      activeNav === item 
                        ? 'text-white bg-gradient-to-r from-red-500/20 to-pink-500/20 shadow-lg' 
                        : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                    }`}
                  >
                    {item}
                    {activeNav === item && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-red-500 to-pink-500 rounded-full"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Search Bar */}
            <SearchBar 
              onSearch={handleSearch}
              isExpanded={isSearchExpanded}
              onToggle={toggleMobileSearch}
            />
            
            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <button 
                onClick={handleNotifications}
                className="relative p-2 rounded-full hover:bg-gray-800/50 transition-all duration-200 text-gray-300 hover:text-white group"
              >
                <Bell size={20} />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              </button>
              
              <button 
                onClick={handleProfile}
                className="relative p-2 rounded-full hover:bg-gray-800/50 transition-all duration-200 text-gray-300 hover:text-white group"
              >
                <User size={20} />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              </button>
            </div>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-gray-300 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-800/50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-sm rounded-lg mt-2 border border-gray-800/50">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className={`block w-full text-left px-4 py-3 text-base font-medium transition-all duration-200 rounded-lg ${
                    activeNav === item 
                      ? 'text-white bg-gradient-to-r from-red-500/30 to-pink-500/30 shadow-lg' 
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
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
