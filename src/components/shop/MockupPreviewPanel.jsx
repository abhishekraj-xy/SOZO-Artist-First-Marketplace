import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Maximize2, Move, RotateCw } from 'lucide-react';

export default function MockupPreviewPanel({ baseProduct, activeColor, designImage }) {
  const mockupUrl = baseProduct.mockupImages[activeColor.hex];
  
  // UI controls state
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);

  return (
    <div className="relative w-full aspect-[3/4] md:aspect-square bg-gray-100 dark:bg-gray-800 rounded-3xl overflow-hidden shadow-inner flex items-center justify-center border border-gray-200 dark:border-gray-700">
      
      {/* Base Garment Image */}
      <img 
        src={mockupUrl} 
        alt="Mockup" 
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
      />

      {/* Overlay color multiplier to help blend on different colors if it was a real transparent mockup, 
          but our dummy data has actual pre-colored photos. We just overlay the design. */}
          
      {/* Design Placement Area (The printable zone) */}
      <div className="relative w-[40%] h-[50%] flex items-center justify-center border-2 border-dashed border-white/20 hover:border-white/50 transition-colors z-10">
        
        {/* Draggable Design */}
        <motion.div
          drag
          dragConstraints={{ left: -50, right: 50, top: -100, bottom: 100 }}
          style={{ scale, rotate: rotation }}
          className="relative cursor-move"
        >
          <img 
            src={designImage} 
            alt="Design" 
            className="w-full h-full object-contain drop-shadow-2xl mix-blend-multiply dark:mix-blend-normal"
            draggable="false"
          />
        </motion.div>
      </div>

      {/* Mockup Controls */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 glass px-4 py-2 rounded-full flex gap-4 items-center shadow-lg z-20">
        <button 
          onClick={() => setScale(prev => Math.max(0.5, prev - 0.1))}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full text-xs font-bold"
        >
          -
        </button>
        <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full" title="Zoom">
          <Maximize2 size={16} />
        </button>
        <button 
          onClick={() => setScale(prev => Math.min(2, prev + 0.1))}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full text-xs font-bold"
        >
          +
        </button>
        <div className="w-px h-4 bg-gray-300 dark:bg-gray-700"></div>
        <button 
          onClick={() => setRotation(prev => prev + 15)}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full" title="Rotate"
        >
          <RotateCw size={16} />
        </button>
        <button className="p-2 text-black dark:text-white cursor-default" title="Drag">
          <Move size={16} />
        </button>
      </div>
    </div>
  );
}
