import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, MessageCircle, Share2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-12 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand */}
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="text-2xl font-bold tracking-tighter block mb-4">
            SOZO<span className="text-gray-400">.</span>
          </Link>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            Artist-First Marketplace. Create, wear, and support independent creators around the world.
          </p>
          <div className="flex space-x-4 text-gray-400">
            <a href="#" className="hover:text-foreground transition-colors"><Camera size={20} /></a>
            <a href="#" className="hover:text-foreground transition-colors"><MessageCircle size={20} /></a>
            <a href="#" className="hover:text-foreground transition-colors"><Share2 size={20} /></a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-4">Shop</h3>
          <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
            <li><Link to="/marketplace?category=t-shirts" className="hover:text-foreground transition-colors">T-Shirts</Link></li>
            <li><Link to="/marketplace?category=hoodies" className="hover:text-foreground transition-colors">Hoodies</Link></li>
            <li><Link to="/marketplace?category=oversized" className="hover:text-foreground transition-colors">Oversized</Link></li>
            <li><Link to="/marketplace" className="hover:text-foreground transition-colors">New Arrivals</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Artists</h3>
          <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
            <li><Link to="/dashboard" className="hover:text-foreground transition-colors">Dashboard</Link></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Creator Program</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Guidelines</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Payouts</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
            <li><a href="#" className="hover:text-foreground transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Track Order</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Contact Us</a></li>
          </ul>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
        <p>© {new Date().getFullYear()} Sozo. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
