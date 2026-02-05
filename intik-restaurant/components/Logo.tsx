import React from 'react';
import { motion } from 'framer-motion';

export const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <motion.div
        className="relative w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center overflow-hidden border-2 border-white"
        whileHover={{ rotate: 10, scale: 1.1 }}
      >
        {/* Abstract Bird with Sunglasses representation since we don't have the asset */}
        <span className="text-xl font-black text-white z-10">I</span>
        <motion.div 
          className="absolute w-full h-1/2 bg-black top-0 opacity-20"
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
      <span className="font-heading font-bold text-2xl tracking-widest text-white uppercase">
        INTIK
      </span>
    </div>
  );
};