
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
            className={`whitespace-nowrap px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
              activeCategory === category
                ? 'bg-blue-600 text-white' 
                : 'bg-slate-800 text-gray-300 hover:bg-slate-700 hover:text-white'
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
