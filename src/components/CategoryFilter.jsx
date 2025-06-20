
import React from 'react';

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  const handleCategoryClick = (category) => {
    console.log('Category changed to:', category);
    onCategoryChange(category);
  };

  return (
    <div className="mb-8 px-4 lg:px-8">
      <div className="flex gap-2 overflow-x-auto scrollbar-hide">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`whitespace-nowrap rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 ${
              activeCategory === category
                ? 'bg-red-600 text-white scale-105 shadow-lg'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
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
