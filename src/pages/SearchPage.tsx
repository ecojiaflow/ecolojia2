import React from 'react';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import ProductCard from '../components/ProductCard';

const SearchPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Search Products</h1>
        
        <div className="mb-8">
          <SearchBar />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <aside className="lg:col-span-3">
            <CategoryFilter />
          </aside>

          <main className="lg:col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Product cards will be dynamically rendered here */}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;