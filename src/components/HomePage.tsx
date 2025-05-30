'use client';

import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ProductCard from './ProductCard';
import CategoryFilter from './CategoryFilter';
import ProductDetail from './ProductDetail';
import { Leaf } from 'lucide-react';
import { Product } from '@/types';

export const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleCategorySelect = (categoryId: string | undefined) => {
    setSelectedCategory(categoryId);
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-eco-gradient py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <Leaf className="h-16 w-16 text-eco-leaf" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-eco-text mb-6">
            Find <span className="text-eco-leaf">eco-responsible</span> products
          </h1>
          <p className="text-lg md:text-xl text-eco-text/80 max-w-3xl mx-auto mb-12">
            Discover thousands of ethical and sustainable products for a more planet-friendly lifestyle.
          </p>
          
          <SearchBar onSearch={handleSearch} />
        </div>
      </section>
      
      {/* Products Section */}
      <section className="py-16 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CategoryFilter 
            selectedCategory={selectedCategory}
            onSelectCategory={handleCategorySelect}
          />
          
          <div className="mt-8 mb-10">
            <h2 className="text-2xl font-semibold text-eco-text">
              {searchQuery ? `Results for "${searchQuery}"` : 'Featured Products'}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {/* Product cards will be rendered here */}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-16 bg-eco-gradient/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-eco-text">Why Choose Ecolojia?</h2>
            <p className="mt-4 text-lg text-eco-text/80 max-w-3xl mx-auto">
              We help you make informed choices for a more sustainable lifestyle.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              title="Verified Products"
              description="All our products are carefully selected and verified according to strict ethical and ecological criteria."
            />
            <FeatureCard 
              title="Transparent Rating"
              description="Our rating system evaluates each product based on its environmental, social, and ethical impact."
            />
            <FeatureCard 
              title="Smart Search"
              description="Our search engine helps you quickly find sustainable alternatives to your usual products."
            />
          </div>
        </div>
      </section>
      
      {selectedProduct && (
        <ProductDetail 
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
};

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => {
  return (
    <div className="bg-white/90 backdrop-blur p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold text-eco-text mb-4">{title}</h3>
      <p className="text-eco-text/70">{description}</p>
    </div>
  );
};