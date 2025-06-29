
import React, { useState } from 'react';
import { Bell, User, Menu, X } from 'lucide-react';
import SearchBar from './SearchBar';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('Home');
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);

  const navItems = ['Home', 'Movies', 'TV Shows', 'Sports', 'Kids'];

  const handleNavClick = (item) => {
    setActiveNav(item);
    setIsMobileMenuOpen(false);
    console.log(`Navigated to: ${item}`);
  };

  const handleSearch = (searchTerm) => {
    console.log('Search term:', searchTerm);
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
    <nav className="sticky top-0 z-50 bg-gray-900/98 backdrop-blur-lg border-b border-gray-700/50">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-8">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-white cursor-pointer hover:text-blue-400 transition-colors">
                StreamMax
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="flex items-center space-x-1">
                {navItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => handleNavClick(item)}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                      activeNav === item 
                        ? 'text-white bg-blue-600 shadow-lg' 
                        : 'text-white hover:text-blue-300 hover:bg-gray-800'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section - Centered Search */}
          <div className="flex items-center gap-4">
            {/* Search Bar - Centered */}
            <div className="flex-1 max-w-md">
              <SearchBar 
                onSearch={handleSearch}
                isExpanded={isSearchExpanded}
                onToggle={toggleMobileSearch}
              />
            </div>
            
            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <button 
                onClick={handleNotifications}
                className="relative p-2 rounded-lg hover:bg-gray-800 transition-colors text-white hover:text-blue-300"
              >
                <Bell size={20} />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>
              
              <button 
                onClick={handleProfile}
                className="p-2 rounded-lg hover:bg-gray-800 transition-colors text-white hover:text-blue-300"
              >
                <User size={20} />
              </button>
            </div>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden text-white hover:text-blue-300 transition-colors p-2 rounded-lg hover:bg-gray-800"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className={`block w-full text-left px-3 py-2 text-base font-medium rounded-lg transition-colors ${
                    activeNav === item 
                      ? 'text-white bg-blue-600' 
                      : 'text-white hover:text-blue-300 hover:bg-gray-800'
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
