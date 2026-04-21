import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export default function ArtistCard({ artist }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-100 dark:border-gray-800"
    >
      <div className="h-32 w-full overflow-hidden relative">
        <img src={artist.banner} alt="banner" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>
      
      <div className="px-6 pb-6 relative">
        <div className="flex justify-between items-end -mt-10 mb-4">
          <img 
            src={artist.avatar} 
            alt={artist.name} 
            className="w-20 h-20 rounded-full border-4 border-white dark:border-gray-900 object-cover bg-white"
          />
          <button className="bg-black dark:bg-white text-white dark:text-black px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
            Follow
          </button>
        </div>
        
        <div>
          <h3 className="text-lg font-bold flex items-center gap-1">
            {artist.name}
            {artist.verified && <CheckCircle size={16} className="text-blue-500 fill-blue-500/20" />}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{artist.username}</p>
          <p className="text-sm mb-4 line-clamp-2">{artist.bio}</p>
          
          <div className="flex gap-4 text-sm">
            <div><span className="font-bold">{artist.followers}</span> <span className="text-gray-500">Followers</span></div>
            <div><span className="font-bold">{artist.sales}</span> <span className="text-gray-500">Sales</span></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
