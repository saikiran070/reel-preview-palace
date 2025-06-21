
import React from 'react';

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  const handleCategoryClick = (category) => {
    console.log('Category changed to:', category);
    onCategoryChange(category);
  };

  return (
    <div className="px-4 lg:px-6 mb-8">
      <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`whitespace-nowrap px-6 py-3 text-sm font-medium rounded-full transition-all duration-200 border ${
              activeCategory === category
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent shadow-lg transform scale-105' 
                : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border-gray-600 hover:border-gray-500'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
