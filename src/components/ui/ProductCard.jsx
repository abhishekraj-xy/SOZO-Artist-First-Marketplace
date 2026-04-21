import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';
import { motion } from 'framer-motion';

export default function ProductCard({ design }) {
  const { wishlist, toggleWishlist } = useAppContext();
  const isWishlisted = wishlist.includes(design.id);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative flex flex-col bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800"
    >
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
        {design.trending && (
          <span className="bg-black text-white text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wider">
            Trending
          </span>
        )}
      </div>

      {/* Wishlist Button */}
      <button 
        onClick={(e) => {
          e.preventDefault();
          toggleWishlist(design.id);
        }}
        className="absolute top-3 right-3 z-10 p-2 bg-white/80 dark:bg-black/80 backdrop-blur-sm rounded-full shadow-sm hover:scale-110 transition-transform"
      >
        <Heart 
          size={18} 
          className={isWishlisted ? "fill-red-500 text-red-500" : "text-gray-600 dark:text-gray-300"} 
        />
      </button>

      {/* Image Container */}
      <Link to={`/product/${design.id}`} className="relative aspect-[4/5] overflow-hidden bg-gray-100 dark:bg-gray-800">
        <img 
          src={design.image} 
          alt={design.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Quick look overlay on hover */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
          <div className="w-full bg-white/90 dark:bg-black/90 backdrop-blur-md text-center py-3 rounded-xl font-medium text-sm transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            Customize & Buy
          </div>
        </div>
      </Link>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-1">
          <Link to={`/product/${design.id}`} className="font-semibold text-lg hover:underline decoration-2 underline-offset-4">
            {design.title}
          </Link>
          <span className="font-bold text-lg">${design.price.toFixed(2)}</span>
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400 mb-3 flex items-center gap-2">
          By Artist ID: {design.artistId} {/* Will replace with actual artist name if needed */}
        </div>
        <div className="mt-auto flex flex-wrap gap-1">
          {design.tags.slice(0, 3).map(tag => (
            <span key={tag} className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-md text-gray-600 dark:text-gray-300">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
