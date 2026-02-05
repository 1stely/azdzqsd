import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const rotate = useTransform(scrollY, [0, 500], [0, 20]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-900 via-black to-black opacity-90 z-0" />
      
      {/* Animated Glow Spheres */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-600 rounded-full blur-[100px] opacity-20 z-0"
      />
      <motion.div 
        animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-600 rounded-full blur-[120px] opacity-20 z-0"
      />

      <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center justify-between">
        
        {/* Text Content */}
        <motion.div 
          style={{ y: y1 }}
          className="w-full md:w-1/2 text-center md:text-left mb-12 md:mb-0"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center md:justify-start gap-2 mb-4"
          >
            <Sparkles className="text-orange-500" />
            <span className="text-orange-500 font-bold tracking-widest uppercase text-sm">Welcome to INTIK</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading text-6xl md:text-8xl lg:text-9xl font-black text-white leading-none mb-6"
          >
            BURGERS<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
              HIT DIFFERENT
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-brand text-gray-300 text-lg md:text-xl max-w-lg mx-auto md:mx-0 mb-8 leading-relaxed"
          >
            Experience the ultimate fusion of street food soul and gourmet craftsmanship. 
            Melting cheese, juicy patties, and flavors that explode.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <a href="#menu" className="group relative px-8 py-4 bg-orange-600 text-white font-bold uppercase tracking-wider overflow-hidden rounded-full">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />
              <span className="relative z-10 group-hover:scale-105 transition-transform duration-300 block">View Menu</span>
            </a>
            <a href="#contact" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider rounded-full hover:bg-white hover:text-black transition-all duration-300">
              Order Now
            </a>
          </motion.div>
        </motion.div>

        {/* 3D Visual */}
        <motion.div 
          style={{ y: y2, rotate: rotate }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring" }}
          className="w-full md:w-1/2 relative flex justify-center items-center"
        >
           {/* Floating elements simulating 3D ingredients */}
           <motion.div
             animate={{ y: [-10, 10, -10] }}
             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
             className="relative z-10"
           >
             {/* Using a high quality cut-out burger image */}
             <img 
               src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop" 
               alt="Giant 3D Burger" 
               className="w-[300px] md:w-[500px] h-auto object-cover rounded-full shadow-[0_20px_50px_rgba(255,107,0,0.3)] border-4 border-white/5"
               style={{ clipPath: 'circle(50%)' }} // Makes it a cool circular cutout if the image isn't transparent
             />
             
             {/* Decorative floating badges */}
             <motion.div 
               animate={{ y: [10, -10, 10], rotate: [0, 5, 0] }}
               transition={{ duration: 5, repeat: Infinity, delay: 1 }}
               className="absolute -top-10 -right-4 bg-white text-black font-black p-4 rounded-full shadow-xl rotate-12 z-20"
             >
               <span className="text-xl block">100%</span>
               <span className="text-xs uppercase tracking-widest">Fresh</span>
             </motion.div>
             
             <motion.div 
               animate={{ y: [15, -15, 15] }}
               transition={{ duration: 6, repeat: Infinity, delay: 0.5 }}
               className="absolute -bottom-8 -left-4 bg-orange-600 text-white font-heading font-bold p-6 rounded-full shadow-xl -rotate-12 z-20 flex flex-col items-center justify-center w-24 h-24"
             >
               <span className="text-2xl">HOT</span>
               <span className="text-xs">Tasty</span>
             </motion.div>
           </motion.div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};