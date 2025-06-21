
import React from 'react';

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  const handleCategoryClick = (category) => {
    console.log('Category changed to:', category);
    onCategoryChange(category);
  };

  return (
    <div className="mb-8 px-4 lg:px-8">
      <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`group relative whitespace-nowrap rounded-full px-6 py-3 text-sm font-bold transition-all duration-300 hover:scale-105 transform ${
              activeCategory === category
                ? 'bg-gradient-to-r from-red-600 to-pink-600 text-white scale-105 shadow-lg shadow-red-500/30' 
                : 'bg-gray-800/60 backdrop-blur-sm text-gray-300 hover:bg-gray-700/80 hover:text-white border border-gray-700/50 hover:border-gray-600'
            }`}
          >
            {category}
            {activeCategory === category && (
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-400/20 to-pink-400/20 animate-pulse"></div>
            )}
            <div className={`absolute inset-0 rounded-full transition-opacity duration-300 ${
              activeCategory === category 
                ? 'bg-gradient-to-r from-red-500/10 to-pink-500/10 opacity-100' 
                : 'bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100'
            }`}></div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
