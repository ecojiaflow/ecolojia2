'use client';

import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for an eco-responsible product..."
          className="w-full py-4 px-12 border-2 border-eco-text/10 rounded-full shadow-sm 
                   focus:outline-none focus:ring-2 focus:ring-eco-leaf/30 focus:border-eco-leaf/50 
                   transition-all text-eco-text placeholder-eco-text/50 bg-white/90 backdrop-blur"
        />
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-eco-text/50" />
        <button
          type="submit"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-eco-leaf text-white px-6 py-2 
                   rounded-full hover:bg-eco-leaf/90 transition-colors"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;