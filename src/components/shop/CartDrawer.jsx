import React from 'react';
import { X, Trash2, ShoppingBag } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { isCartOpen, setIsCartOpen, cart, removeFromCart } = useAppContext();

  if (!isCartOpen) return null;

  const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white dark:bg-gray-900 z-[70] shadow-2xl flex flex-col animate-slide-up sm:animate-none sm:translate-x-0">
        
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-100 dark:border-gray-800">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <ShoppingBag size={20} /> Your Cart ({cart.length})
          </h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-5">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-500">
              <ShoppingBag size={48} className="mb-4 opacity-20" />
              <p>Your cart is empty.</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="mt-4 text-black dark:text-white underline underline-offset-4"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <div key={item.cartId} className="flex gap-4">
                  {/* Thumbnail */}
                  <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden flex-shrink-0 relative">
                    {/* Simulated composite image - in a real app this would be a pre-rendered composite */}
                    <img src={item.mockupImage} className="w-full h-full object-cover" alt="product base" />
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                       <img src={item.designImage} className="w-full h-full object-contain drop-shadow-md" alt="design" />
                    </div>
                  </div>
                  
                  {/* Details */}
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-start">
                      <h3 className="font-semibold line-clamp-1">{item.designTitle}</h3>
                      <button 
                        onClick={() => removeFromCart(item.cartId)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <p className="text-sm text-gray-500 mb-1">{item.baseName}</p>
                    <div className="text-xs text-gray-500 flex gap-2 mb-auto">
                      <span className="flex items-center gap-1">
                        <span className="w-3 h-3 rounded-full border border-gray-300" style={{ backgroundColor: item.colorHex }}></span>
                        {item.colorName}
                      </span>
                      <span>|</span>
                      <span>Size: {item.size}</span>
                      <span>|</span>
                      <span>Qty: {item.quantity}</span>
                    </div>
                    <div className="font-bold mt-2">${(item.price * item.quantity).toFixed(2)}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="p-5 border-t border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
            <div className="flex justify-between items-center mb-4 text-lg font-bold">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-sm text-gray-500 mb-4">Shipping and taxes calculated at checkout.</p>
            <Link 
              to="/cart"
              onClick={() => setIsCartOpen(false)}
              className="w-full block text-center bg-black dark:bg-white text-white dark:text-black py-4 rounded-xl font-bold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
            >
              Checkout
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
