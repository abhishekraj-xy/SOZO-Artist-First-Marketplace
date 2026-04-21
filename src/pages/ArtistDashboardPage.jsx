import React, { useState } from 'react';
import { Upload, DollarSign, Image as ImageIcon, TrendingUp, Edit3 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ArtistDashboardPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { label: 'Total Earnings', value: '$4,250.00', icon: DollarSign, trend: '+12%' },
    { label: 'Total Sales', value: '342', icon: TrendingUp, trend: '+5%' },
    { label: 'Active Designs', value: '18', icon: ImageIcon, trend: '0%' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-screen">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Artist Dashboard</h1>
          <p className="text-gray-500">Welcome back, Elena. Here's what's happening with your art.</p>
        </div>
        <button className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:scale-105 transition-transform">
          <Upload size={20} /> Upload New Design
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 dark:border-gray-800 mb-8 overflow-x-auto">
        {['overview', 'designs', 'analytics', 'settings'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`capitalize px-6 py-3 font-medium whitespace-nowrap transition-colors ${
              activeTab === tab 
                ? 'border-b-2 border-black dark:border-white text-black dark:text-white' 
                : 'text-gray-500 hover:text-black dark:hover:text-white'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Overview Content */}
      {activeTab === 'overview' && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map(stat => (
              <div key={stat.label} className="bg-white dark:bg-gray-900 p-6 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-xl">
                    <stat.icon size={24} className="text-gray-700 dark:text-gray-300" />
                  </div>
                  <span className={`text-sm font-semibold ${stat.trend.startsWith('+') ? 'text-green-500' : 'text-gray-500'}`}>
                    {stat.trend}
                  </span>
                </div>
                <p className="text-gray-500 text-sm mb-1">{stat.label}</p>
                <h3 className="text-3xl font-bold">{stat.value}</h3>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Recent Sales Chart Placeholder */}
            <div className="lg:col-span-2 bg-white dark:bg-gray-900 p-6 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm">
              <h3 className="text-lg font-bold mb-6">Recent Sales (Mock Chart)</h3>
              <div className="h-64 flex items-end justify-between gap-2 pb-4 border-b border-gray-200 dark:border-gray-800">
                {/* Mock Bars */}
                {[40, 70, 45, 90, 65, 85, 100].map((height, i) => (
                  <div key={i} className="w-full bg-gray-100 dark:bg-gray-800 rounded-t-md relative group">
                    <div 
                      className="absolute bottom-0 w-full bg-black dark:bg-white rounded-t-md transition-all duration-1000 ease-out group-hover:opacity-80" 
                      style={{ height: `${height}%` }}
                    ></div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-4 text-xs text-gray-400">
                <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
              </div>
            </div>

            {/* Profile Edit Panel */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold">Profile Info</h3>
                <button className="text-gray-400 hover:text-black dark:hover:text-white"><Edit3 size={18} /></button>
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                <img src="https://i.pravatar.cc/150?u=a1" alt="avatar" className="w-16 h-16 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold">Elena K.</h4>
                  <p className="text-sm text-gray-500">@elenak_art</p>
                </div>
              </div>

              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-gray-500 mb-1">Bio</p>
                  <p>Minimalist illustrator focused on geometry and nature.</p>
                </div>
                <div>
                  <p className="text-gray-500 mb-1">Payout Method</p>
                  <p className="flex items-center gap-2">PayPal (e***@gmail.com) <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Active</span></p>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      )}

      {/* Other tabs placeholders */}
      {activeTab !== 'overview' && (
        <div className="py-20 text-center text-gray-500 border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-3xl">
          {activeTab} feature coming soon.
        </div>
      )}

    </div>
  );
}
