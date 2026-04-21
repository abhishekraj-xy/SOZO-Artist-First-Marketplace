import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Upload, Palette, Shirt } from 'lucide-react';
import ProductCard from '../components/ui/ProductCard';
import ArtistCard from '../components/ui/ArtistCard';
import { designs, artists } from '../data/mockData';

export default function LandingPage() {
  const trendingDesigns = designs.filter(d => d.trending).slice(0, 4);
  const featuredArtists = artists.slice(0, 3);

  return (
    <div className="flex flex-col gap-24 pb-20">
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-gray-100 dark:bg-gray-800 text-sm font-medium mb-6">
            The New Era of Print-on-Demand
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
            Create. Wear. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-900 dark:from-gray-400 dark:to-white">
              Support Independent Artists
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            Discover unique digital designs from creators around the world and apply them instantly to premium apparel.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/marketplace" className="bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2">
              Explore Designs <ArrowRight size={20} />
            </Link>
            <Link to="/dashboard" className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center justify-center gap-2">
              Upload Your Art
            </Link>
          </div>
        </motion.div>

        {/* Floating elements animation */}
        <div className="absolute top-1/2 left-10 -translate-y-1/2 w-64 h-64 bg-blue-100 dark:bg-blue-900/20 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/2 right-10 -translate-y-1/2 w-64 h-64 bg-purple-100 dark:bg-purple-900/20 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      </section>

      {/* Trending Designs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">Trending Designs</h2>
            <p className="text-gray-500 dark:text-gray-400">The most popular art this week.</p>
          </div>
          <Link to="/marketplace" className="hidden sm:flex items-center gap-1 font-semibold hover:text-gray-500 transition-colors">
            View All <ArrowRight size={16} />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingDesigns.map(design => (
            <ProductCard key={design.id} design={design} />
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 dark:bg-gray-900 py-24 border-y border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How Sozo Works</h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">From digital art to physical product in three simple steps.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Upload, title: "1. Artists Upload", desc: "Creators upload their high-quality digital artwork to the Sozo marketplace." },
              { icon: Palette, title: "2. You Customize", desc: "Choose a design and apply it to our premium blank apparel using our 3D preview." },
              { icon: Shirt, title: "3. We Print & Ship", desc: "We use high-end DTG printing to create your custom piece and ship it worldwide." }
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-white dark:bg-black rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 flex items-center justify-center mb-6">
                  <step.icon size={32} className="text-gray-800 dark:text-gray-200" />
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-500 dark:text-gray-400">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Artists */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Artists</h2>
            <p className="text-gray-500 dark:text-gray-400">Discover the creators behind the art.</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredArtists.map(artist => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>
      </section>

    </div>
  );
}
