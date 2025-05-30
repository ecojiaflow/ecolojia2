'use client';

import React from 'react';
import { Apple, Shirt, Sparkles, Home, Smartphone, Flower } from 'lucide-react';

interface CategoryFilterProps {
  selectedCategory?: string;
  onSelectCategory: (categoryId: string | undefined) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ selectedCategory, onSelectCategory }) => {
  const categories = [
    { id: 'food', name: 'Food', icon: <Apple size={20} /> },
    { id: 'fashion', name: 'Fashion', icon: <Shirt size={20} /> },
    { id: 'beauty', name: 'Beauty', icon: <Sparkles size={20} /> },
    { id: 'home', name: 'Home', icon: <Home size={20} /> },
    { id: 'electronics', name: 'Electronics', icon: <Smartphone size={20} /> },
    { id: 'garden', name: 'Garden', icon: <Flower size={20} /> },
  ];

  return (
    <div className="py-6">
      <h3 className="text-lg font-medium text-eco-text mb-4">Categories</h3>
      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => onSelectCategory(undefined)}
          className={`px-5 py-2.5 rounded-full text-sm font-medium flex items-center transition-all ${
            !selectedCategory 
              ? 'bg-eco-leaf text-white shadow-md shadow-eco-leaf/20' 
              : 'bg-white/80 text-eco-text hover:bg-eco-glow/20'
          }`}
        >
          All
        </button>
        
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onSelectCategory(category.id)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium flex items-center transition-all ${
              selectedCategory === category.id 
                ? 'bg-eco-leaf text-white shadow-md shadow-eco-leaf/20' 
                : 'bg-white/80 text-eco-text hover:bg-eco-glow/20'
            }`}
          >
            <span className="mr-2">{category.icon}</span>
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;