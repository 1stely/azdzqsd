import React from 'react';
import { MapPin, Phone, Instagram, Navigation } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-white uppercase mb-4">
            Find Us
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          
          {/* Info Card */}
          <div className="bg-black p-10 rounded-2xl border border-gray-800 flex flex-col justify-center">
             <div className="space-y-10">
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-white mb-2">Location</h3>
                    <p className="text-gray-400 font-brand">
                      Algiers, Algeria<br/>
                      (Near the Central District)
                    </p>
                    <a 
                      href="https://maps.google.com" 
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-block mt-2 text-orange-500 font-bold hover:text-white transition-colors"
                    >
                      Get Directions &rarr;
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-white mb-2">Call Us</h3>
                    <p className="text-gray-400 font-brand mb-2">
                      Ready to order? Call us now for pickup.
                    </p>
                    <a href="tel:+213555555555" className="text-xl font-bold text-white hover:text-orange-500 transition-colors block">
                      +213 555 55 55 55
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                    <Instagram size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-white mb-2">Follow INTIK</h3>
                    <p className="text-gray-400 font-brand mb-2">
                      Check our latest drops and vibes.
                    </p>
                    <a href="#" className="text-lg font-bold text-white hover:text-orange-500 transition-colors">
                      @intik_restaurant
                    </a>
                  </div>
                </div>
             </div>
          </div>

          {/* Map Embed */}
          <div className="rounded-2xl overflow-hidden border border-gray-800 h-[500px] md:h-auto relative group">
            {/* Overlay to darken map slightly until interaction */}
            <div className="absolute inset-0 bg-black/20 pointer-events-none group-hover:bg-transparent transition-colors duration-300 z-10" />
            
            {/* Placeholder for Google Map - Centered on Algiers Grande Poste as generic location */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51165.55675405029!2d3.0185!3d36.7528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb2ea75e53389%3A0x266851b279062366!2sAlgiers%2C%20Algeria!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(80%) invert(90%)' }} // Custom styled map aesthetic
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};