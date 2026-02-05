import React from 'react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-gray-900 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-8 md:mb-0">
            <Logo className="mb-4" />
            <p className="text-gray-500 font-brand max-w-xs">
              Burgers that hit different. <br/>
              Street food soul, gourmet execution.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <h4 className="text-orange-500 font-bold uppercase tracking-widest mb-4">Opening Hours</h4>
            <ul className="text-gray-400 text-center md:text-right font-brand space-y-2">
              <li>Mon - Thu: 11:00 AM - 11:00 PM</li>
              <li>Fri: 2:30 PM - 12:00 AM</li>
              <li>Sat - Sun: 11:00 AM - 12:00 AM</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} INTIK Restaurant. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
             <a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-orange-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};