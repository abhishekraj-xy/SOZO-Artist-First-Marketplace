import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { ShoppingBag, ArrowRight, Trash2 } from 'lucide-react';

export default function CartPage() {
  const { cart, removeFromCart } = useAppContext();

  const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = subtotal > 100 ? 0 : 5.99;
  const tax = subtotal * 0.08; // 8% dummy tax
  const total = subtotal + shipping + tax;

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 min-h-[60vh] flex flex-col items-center justify-center">
        <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-6">
          <ShoppingBag size={48} className="text-gray-400" />
        </div>
        <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
        <p className="text-gray-500 mb-8 text-center max-w-md">Looks like you haven't added any designs to your apparel yet. Explore our marketplace to find your next favorite piece.</p>
        <Link to="/marketplace" className="bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform flex items-center gap-2">
          Start Shopping <ArrowRight size={20} />
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Cart Items */}
        <div className="flex-1 space-y-6">
          {cart.map((item) => (
            <div key={item.cartId} className="flex flex-col sm:flex-row gap-6 p-6 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl shadow-sm relative">
              <div className="w-32 h-32 bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden relative flex-shrink-0">
                <img src={item.mockupImage} className="w-full h-full object-cover" alt="base" />
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <img src={item.designImage} className="w-full h-full object-contain drop-shadow-md" alt="design" />
                </div>
              </div>
              
              <div className="flex-1 flex flex-col justify-center">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{item.designTitle}</h3>
                  <p className="font-bold text-lg">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <p className="text-gray-500 mb-4">{item.baseName}</p>
                
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full border border-gray-300" style={{ backgroundColor: item.colorHex }}></span>
                    {item.colorName}
                  </div>
                  <div className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-lg">Size: {item.size}</div>
                  <div className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-lg">Qty: {item.quantity}</div>
                </div>
              </div>

              <button 
                onClick={() => removeFromCart(item.cartId)}
                className="absolute top-6 right-6 text-gray-400 hover:text-red-500 transition-colors p-2"
              >
                <Trash2 size={20} />
              </button>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-[400px]">
          <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 sticky top-24">
            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6 text-gray-600 dark:text-gray-400 border-b border-gray-200 dark:border-gray-800 pb-6">
              <div className="flex justify-between">
                <span>Subtotal ({cart.length} items)</span>
                <span className="text-black dark:text-white font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-black dark:text-white font-medium">{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Tax</span>
                <span className="text-black dark:text-white font-medium">${tax.toFixed(2)}</span>
              </div>
            </div>

            <div className="flex justify-between items-center mb-8 text-xl font-bold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <button className="w-full bg-black dark:bg-white text-white dark:text-black py-4 rounded-full font-bold text-lg hover:scale-[1.02] transition-transform flex justify-center items-center gap-2 shadow-xl shadow-black/10 dark:shadow-white/10">
              Proceed to Checkout <ArrowRight size={20} />
            </button>
            
            <p className="text-center text-xs text-gray-500 mt-4 flex items-center justify-center gap-1">
              Secure Checkout. Artists are paid directly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
