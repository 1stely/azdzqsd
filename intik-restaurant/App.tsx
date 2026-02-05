import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { MenuSection } from './components/MenuSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from './components/Logo';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading assets
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center"
          >
             <motion.div
               animate={{ 
                 scale: [1, 1.2, 1],
                 rotate: [0, 360],
               }}
               transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
             >
                <Logo />
             </motion.div>
             <motion.div 
               className="mt-8 w-48 h-1 bg-gray-800 rounded-full overflow-hidden"
             >
               <motion.div 
                 className="h-full bg-orange-500"
                 initial={{ width: "0%" }}
                 animate={{ width: "100%" }}
                 transition={{ duration: 2.3, ease: "easeInOut" }}
               />
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`bg-[#0a0a0a] min-h-screen text-white ${loading ? 'h-screen overflow-hidden' : ''}`}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <MenuSection />
          <Contact />
        </main>
        <Footer />
        
        {/* Sticky Mobile CTA */}
        <motion.div 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ delay: 3 }}
          className="fixed bottom-6 right-6 z-40 md:hidden"
        >
          <a 
            href="tel:+213555555555"
            className="bg-orange-600 text-white p-4 rounded-full shadow-lg shadow-orange-900/50 flex items-center justify-center animate-bounce"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          </a>
        </motion.div>
      </div>
    </>
  );
};

export default App;