
import React, { useState } from 'react';
import { Search, Bell, User, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = ['Home', 'Movies', 'TV Shows', 'Sports', 'Premium'];

  return (
    <nav className="relative z-20 bg-black/90 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                StreamFlix
              </h1>
            </div>
            
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-6">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors story-link"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="text-gray-300 hover:text-white transition-colors">
              <Search size={20} />
            </button>
            <button className="text-gray-300 hover:text-white transition-colors">
              <Bell size={20} />
            </button>
            <button className="text-gray-300 hover:text-white transition-colors">
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
                <a
                  key={item}
                  href="#"
                  className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
