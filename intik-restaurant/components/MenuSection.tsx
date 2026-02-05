import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Category } from '../types';
import { MENU_ITEMS } from '../constants';
import { Flame, Star } from 'lucide-react';

const categories = Object.values(Category);

export const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>(Category.BURGERS);

  const filteredItems = MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-[#0f0f0f] relative min-h-screen">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-orange-500 font-bold tracking-widest uppercase mb-2 block"
          >
            Taste the Hype
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-heading text-5xl md:text-7xl font-bold text-white uppercase"
          >
            Our Menu
          </motion.h2>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-full font-heading font-bold uppercase tracking-wider transition-all duration-300 border-2 ${
                activeCategory === cat
                  ? 'bg-orange-600 border-orange-600 text-white scale-110 shadow-[0_0_20px_rgba(255,107,0,0.5)]'
                  : 'bg-transparent border-gray-700 text-gray-400 hover:border-orange-500 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.8, rotateX: 10 }}
                animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="group relative"
              >
                {/* 3D Card Effect Container */}
                <div className="relative h-full bg-[#181818] rounded-2xl overflow-hidden border border-gray-800 transition-transform duration-500 hover:-translate-y-4 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
                  
                  {/* Highlight for Popular Items */}
                  {item.popular && (
                    <div className="absolute top-4 right-4 z-20 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                      <Flame size={12} fill="currentColor" />
                      POPULAR
                    </div>
                  )}

                  {/* Image Section (if available) */}
                  {item.image && (
                    <div className="h-64 overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-[#181818] to-transparent z-10 opacity-80" />
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div className={`p-8 ${item.image ? '-mt-12 relative z-20' : ''}`}>
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-heading text-3xl font-bold text-white uppercase group-hover:text-orange-500 transition-colors">
                        {item.name}
                      </h3>
                      <div className="text-right">
                        <span className="block font-heading text-2xl font-bold text-orange-500">
                          {typeof item.price === 'number' ? `${item.price} DA` : ''}
                        </span>
                      </div>
                    </div>

                    {/* Handle complex pricing string for Grillz */}
                    {typeof item.price === 'string' && (
                       <div className="mb-4 text-orange-400 font-bold font-heading text-sm">
                         {item.price} DA
                       </div>
                    )}

                    <p className="font-brand text-gray-400 text-sm leading-relaxed mb-6 h-12">
                      {item.description || "The perfect addition to your meal."}
                    </p>

                    <button className="w-full py-3 border border-gray-600 rounded-lg text-white font-bold uppercase hover:bg-orange-600 hover:border-orange-600 transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-[0_0_15px_rgba(255,107,0,0.4)]">
                      Add to Order
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};