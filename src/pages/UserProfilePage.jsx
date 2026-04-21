import React from 'react';
import { Heart, Package, Settings, LogOut } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { designs } from '../data/mockData';
import ProductCard from '../components/ui/ProductCard';

export default function UserProfilePage() {
  const { wishlist } = useAppContext();

  // Find actual design objects for the wishlisted items
  const wishlistedDesigns = designs.filter(d => wishlist.includes(d.id));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-screen">
      <div className="flex flex-col md:flex-row gap-12">
        
        {/* Sidebar */}
        <div className="w-full md:w-64 flex-shrink-0">
          <div className="flex items-center gap-4 mb-8 p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800">
            <div className="w-12 h-12 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center font-bold text-xl">
              A
            </div>
            <div>
              <h2 className="font-bold">Alex Shopper</h2>
              <p className="text-sm text-gray-500">alex@example.com</p>
            </div>
          </div>

          <nav className="space-y-2">
            {[
              { id: 'orders', label: 'My Orders', icon: Package, active: false },
              { id: 'wishlist', label: 'Wishlist', icon: Heart, active: true },
              { id: 'settings', label: 'Settings', icon: Settings, active: false },
            ].map(item => (
              <button 
                key={item.id}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${
                  item.active 
                    ? 'bg-black dark:bg-white text-white dark:text-black' 
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                <item.icon size={20} />
                {item.label}
              </button>
            ))}
            
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors mt-8">
              <LogOut size={20} />
              Log Out
            </button>
          </nav>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <Heart size={28} className="text-red-500 fill-red-500" /> My Wishlist
          </h1>
          
          {wishlistedDesigns.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {wishlistedDesigns.map(design => (
                <ProductCard key={design.id} design={design} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800">
              <Heart size={48} className="mx-auto text-gray-300 dark:text-gray-700 mb-4" />
              <h2 className="text-xl font-semibold mb-2">Your wishlist is empty</h2>
              <p className="text-gray-500 max-w-md mx-auto">Save your favorite designs here so you can easily find them later and customize your apparel.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
