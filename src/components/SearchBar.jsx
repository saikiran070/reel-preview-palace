
import React, { useState } from 'react';
import { Search, X } from 'lucide-react';

const SearchBar = ({ onSearch, isExpanded, onToggle }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm);
      console.log('Searching for:', searchTerm);
    }
  };

  const handleClear = () => {
    setSearchTerm('');
    onSearch('');
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="relative flex items-center w-full">
      {/* Desktop Search Bar */}
      <div className="hidden md:flex relative w-full">
        <form onSubmit={handleSubmit} className="relative w-full">
          <div className={`flex items-center transition-all duration-300 w-full ${
            isFocused ? 'transform scale-105' : ''
          }`}>
            <div className="relative w-full">
              <Search 
                size={18} 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300 pointer-events-none z-10" 
              />
              <input
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder="Search movies, shows..."
                className={`w-full pl-10 pr-10 py-2.5 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-300 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-gray-700 ${
                  isFocused ? 'shadow-lg shadow-blue-500/20' : ''
                }`}
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={handleClear}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-300 hover:text-white transition-colors z-10"
                >
                  <X size={16} />
                </button>
              )}
            </div>
          </div>
        </form>
      </div>

      {/* Mobile Search Toggle */}
      <button
        onClick={onToggle}
        className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors text-white hover:text-blue-300"
      >
        {isExpanded ? <X size={20} /> : <Search size={20} />}
      </button>

      {/* Mobile Expanded Search */}
      {isExpanded && (
        <div className="md:hidden absolute top-full right-0 left-0 mt-2 px-4">
          <form onSubmit={handleSubmit}>
            <div className="relative">
              <Search 
                size={18} 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300 pointer-events-none" 
              />
              <input
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                placeholder="Search movies, shows..."
                className="w-full pl-10 pr-10 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                autoFocus
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={handleClear}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-300 hover:text-white transition-colors"
                >
                  <X size={16} />
                </button>
              )}
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
