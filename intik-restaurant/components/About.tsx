import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 border-2 border-orange-500 transform translate-x-4 translate-y-4 rounded-lg"></div>
            <img 
              src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1000&auto=format&fit=crop" 
              alt="INTIK Chef cooking" 
              className="relative z-10 w-full h-[500px] object-cover rounded-lg filter grayscale hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6 uppercase">
              Street Soul <br/>
              <span className="text-orange-500">Modern Kitchen</span>
            </h2>
            <p className="font-brand text-gray-300 text-lg mb-6 leading-relaxed">
              At INTIK, we don't just make burgers. We craft experiences. Born from a passion for bold street flavors and refined culinary techniques, we've created a menu that defies expectation.
            </p>
            <p className="font-brand text-gray-300 text-lg mb-8 leading-relaxed">
              Whether it's the crunch of our signature tenders, the melt of premium gouda, or the heat of our secret sauces, every bite is designed to hit different.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-heading text-3xl text-orange-500 font-bold mb-2">100%</h4>
                <p className="text-gray-400">Fresh Ingredients</p>
              </div>
              <div>
                <h4 className="font-heading text-3xl text-orange-500 font-bold mb-2">Premium</h4>
                <p className="text-gray-400">Halal Meat</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};