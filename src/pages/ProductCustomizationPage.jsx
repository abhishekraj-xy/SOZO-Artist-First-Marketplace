import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingBag, Heart, ShieldCheck, Truck } from 'lucide-react';
import { designs, baseProducts } from '../data/mockData';
import { useAppContext } from '../context/AppContext';
import MockupPreviewPanel from '../components/shop/MockupPreviewPanel';

export default function ProductCustomizationPage() {
  const { designId } = useParams();
  const navigate = useNavigate();
  const { addToCart, wishlist, toggleWishlist } = useAppContext();

  const design = designs.find(d => d.id === designId);
  
  // State for customization
  const [activeBaseIndex, setActiveBaseIndex] = useState(0);
  const [activeColorIndex, setActiveColorIndex] = useState(0);
  const [activeSize, setActiveSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  // If design not found, go back
  useEffect(() => {
    if (!design) {
      navigate('/marketplace');
    }
  }, [design, navigate]);

  if (!design) return null;

  const activeBase = baseProducts[activeBaseIndex];
  const activeColor = activeBase.colors[activeColorIndex];
  const isWishlisted = wishlist.includes(design.id);

  // Calculate total price (Design Price + Base Price)
  const totalPrice = design.price + activeBase.basePrice;

  // Handle Base Change (reset color and size)
  const handleBaseChange = (index) => {
    setActiveBaseIndex(index);
    setActiveColorIndex(0);
    setActiveSize('');
  };

  const handleAddToCart = () => {
    if (!activeSize) {
      alert("Please select a size first.");
      return;
    }
    
    addToCart({
      designId: design.id,
      designTitle: design.title,
      designImage: design.image,
      baseId: activeBase.id,
      baseName: activeBase.name,
      colorName: activeColor.name,
      colorHex: activeColor.hex,
      size: activeSize,
      quantity: quantity,
      price: totalPrice,
      mockupImage: activeBase.mockupImages[activeColor.hex]
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-screen">
      
      {/* Back button */}
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-500 hover:text-black dark:hover:text-white transition-colors mb-8"
      >
        <ArrowLeft size={20} /> Back to marketplace
      </button>

      <div className="flex flex-col lg:flex-row gap-12">
        
        {/* Left Column: Preview */}
        <div className="flex-1 lg:max-w-[60%]">
          <div className="sticky top-24">
            <MockupPreviewPanel 
              baseProduct={activeBase} 
              activeColor={activeColor} 
              designImage={design.image} 
            />
            
            <div className="mt-8 flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800">
              <img src={design.image} alt={design.title} className="w-16 h-16 object-cover rounded-xl border border-gray-200 dark:border-gray-700" />
              <div>
                <h4 className="font-semibold">{design.title}</h4>
                <p className="text-sm text-gray-500">Original design by Artist ID: {design.artistId}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Controls */}
        <div className="flex-1">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-2">{design.title}</h1>
          <div className="text-2xl font-semibold mb-6 flex items-center gap-4">
            ${totalPrice.toFixed(2)}
            <span className="text-sm font-normal text-gray-500 px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">
              Base ${activeBase.basePrice.toFixed(2)} + Design ${design.price.toFixed(2)}
            </span>
          </div>

          <hr className="border-gray-200 dark:border-gray-800 my-8" />

          {/* Clothing Base Selector */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-lg">1. Choose Apparel</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {baseProducts.map((base, idx) => (
                <button
                  key={base.id}
                  onClick={() => handleBaseChange(idx)}
                  className={`p-4 rounded-xl border-2 text-left transition-all ${
                    activeBaseIndex === idx 
                      ? 'border-black dark:border-white bg-gray-50 dark:bg-gray-800' 
                      : 'border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700'
                  }`}
                >
                  <h4 className="font-semibold text-sm mb-1">{base.name}</h4>
                  <p className="text-xs text-gray-500">+${base.basePrice.toFixed(2)}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Color Selector */}
          <div className="mb-8">
            <h3 className="font-bold text-lg mb-4">2. Select Color: <span className="font-normal text-gray-500">{activeColor.name}</span></h3>
            <div className="flex flex-wrap gap-3">
              {activeBase.colors.map((color, idx) => (
                <button
                  key={color.hex}
                  onClick={() => setActiveColorIndex(idx)}
                  className={`w-12 h-12 rounded-full border-2 transition-transform ${
                    activeColorIndex === idx 
                      ? 'scale-110 border-black dark:border-white shadow-md' 
                      : 'border-transparent hover:scale-105 shadow-sm'
                  }`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
              ))}
            </div>
          </div>

          {/* Size Selector */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-lg">3. Select Size</h3>
              <button className="text-sm text-gray-500 underline underline-offset-4">Size Guide</button>
            </div>
            <div className="flex flex-wrap gap-3">
              {activeBase.sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setActiveSize(size)}
                  className={`w-14 h-14 rounded-xl border-2 flex items-center justify-center font-semibold transition-all ${
                    activeSize === size
                      ? 'border-black bg-black text-white dark:bg-white dark:text-black dark:border-white'
                      : 'border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity & Actions */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center border-2 border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden h-14">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 hover:bg-gray-100 dark:hover:bg-gray-800 h-full font-bold"
              >-</button>
              <span className="w-12 text-center font-semibold">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 hover:bg-gray-100 dark:hover:bg-gray-800 h-full font-bold"
              >+</button>
            </div>

            <button 
              onClick={handleAddToCart}
              className="flex-1 bg-black dark:bg-white text-white dark:text-black h-14 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors shadow-lg shadow-black/10 dark:shadow-white/10"
            >
              <ShoppingBag size={20} /> Add to Cart
            </button>

            <button 
              onClick={() => toggleWishlist(design.id)}
              className={`h-14 w-14 flex items-center justify-center rounded-xl border-2 transition-colors ${
                isWishlisted 
                  ? 'border-red-500 bg-red-50 dark:bg-red-500/10' 
                  : 'border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800'
              }`}
            >
              <Heart size={24} className={isWishlisted ? "fill-red-500 text-red-500" : "text-gray-400"} />
            </button>
          </div>

          {/* Perks */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-xl">
              <ShieldCheck size={24} />
              <span className="font-medium text-sm">Artist gets paid instantly</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl">
              <Truck size={24} />
              <span className="font-medium text-sm">Ships within 48 hours</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
