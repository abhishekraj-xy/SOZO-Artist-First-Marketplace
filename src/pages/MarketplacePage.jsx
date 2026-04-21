import React, { useState } from 'react';
import { Filter, Search, SlidersHorizontal } from 'lucide-react';
import ProductCard from '../components/ui/ProductCard';
import { designs } from '../data/mockData';

export default function MarketplacePage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Abstract', 'Cyberpunk', 'Watercolor', 'Minimal'];

  const filteredDesigns = designs.filter(design => {
    const matchesCategory = activeCategory === 'All' || design.category === activeCategory;
    const matchesSearch = design.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          design.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-screen flex flex-col md:flex-row gap-8">
      
      {/* Sidebar Filters (Desktop) */}
      <div className="hidden md:block w-64 flex-shrink-0">
        <div className="sticky top-24">
          <h2 className="font-bold text-lg mb-6 flex items-center gap-2">
            <Filter size={20} /> Filters
          </h2>
          
          <div className="mb-8">
            <h3 className="font-semibold mb-4 text-gray-500">Categories</h3>
            <ul className="space-y-3">
              {categories.map(cat => (
                <li key={cat}>
                  <button 
                    onClick={() => setActiveCategory(cat)}
                    className={`text-sm ${activeCategory === cat ? 'font-bold text-black dark:text-white' : 'text-gray-500 hover:text-black dark:hover:text-white transition-colors'}`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-gray-500">Sort By</h3>
            <select className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white">
              <option>Trending</option>
              <option>Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        
        {/* Header & Mobile Filters */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
          <div className="relative w-full sm:w-96 group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-black dark:group-focus-within:text-white transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="Search designs, tags, or artists..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-full py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-shadow"
            />
          </div>
          
          <button className="md:hidden flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full font-medium w-full sm:w-auto justify-center">
            <SlidersHorizontal size={18} /> Filters
          </button>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDesigns.length > 0 ? (
            filteredDesigns.map(design => (
              <ProductCard key={design.id} design={design} />
            ))
          ) : (
            <div className="col-span-full py-20 text-center text-gray-500">
              No designs found matching your criteria.
            </div>
          )}
        </div>
      </div>
      
    </div>
  );
}
