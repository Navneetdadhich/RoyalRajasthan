import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Desert = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Section */}
      <section className="relative h-screen">
        <video 
          className="w-full h-full object-cover"
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="https://videos.pexels.com/video-files/3015482/3015482-hd_1920_1080_24fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -20 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl font-bold mb-4 text-amber-100"
          >
            Rajasthan Deserts
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl max-w-2xl text-center text-amber-50"
          >
            Experience the golden sands and timeless beauty of the Thar Desert
          </motion.p>
          <Link
          to="/ai"
          >
          <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 px-8 py-3 bg-yellow-600 hover:bg-yellow-700 text-white rounded-full text-lg font-medium transition-all duration-300 cursor-pointer"
          >
            Plan Your Desert Safari
          </motion.button>
            </Link>
        </div>
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-yellow-800 text-center">Discover Desert Wonders</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Destination Card 1 */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1697464026024-046547ebd141?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Sam Sand Dunes" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-yellow-700">Sam Sand Dunes</h3>
              <p className="text-gray-600 mb-4">Experience the golden ripples of sand that extend to the horizon, offering the quintessential desert experience.</p>
              <div className="flex items-center justify-between">
                <span className="text-yellow-600 font-medium">Jaisalmer</span>
                
              </div>
            </div>
          </motion.div>

          {/* Destination Card 2 */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1670687174580-c003b4716959?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Camel Safari" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-yellow-700">Camel Safari</h3>
              <p className="text-gray-600 mb-4">Traverse the desert on the back of the ship of the desert with local guides showing you hidden gems.</p>
              <div className="flex items-center justify-between">
                <span className="text-yellow-600 font-medium">Multiple Locations</span>
                
              </div>
            </div>
          </motion.div>

          {/* Destination Card 3 */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1527419105721-af1f23c86dec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Desert Camps" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-yellow-700">Luxury Desert Camps</h3>
              <p className="text-gray-600 mb-4">Stay in luxury tents under the starry desert sky with traditional food and cultural performances.</p>
              <div className="flex items-center justify-between">
                <span className="text-yellow-600 font-medium">Khuri & Osian</span>
                
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-yellow-800/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-6 text-yellow-800"
              >
                Desert Experience Like No Other
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-gray-700 mb-8"
              >
                The Thar Desert of Rajasthan is a mesmerizing expanse of golden sands that stretches as far as the eye can see. Experience the magic of desert sunsets, the thrill of dune bashing, and the warm hospitality of desert dwellers that has made this region famous worldwide.
              </motion.p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-yellow-600 flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-medium">Thrilling Desert Safaris</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-yellow-600 flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                    </svg>
                  </div>
                  <span className="font-medium">Cultural Performances</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-yellow-600 flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-medium">Breathtaking Vistas</span>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <div className="relative h-96 rounded-xl overflow-hidden">
                <iframe 
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/8uZ4Kr1VDyA?si=2Czm8yucQg-pw0yV" 
                  title="Rajasthan Desert Experience" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1677052485841-c5bff744454c?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Desert panorama" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-900/90 to-yellow-700/60"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 text-center">Ready for an Unforgettable Desert Adventure?</h2>
          <p className="text-amber-100 text-lg md:text-xl max-w-2xl text-center mb-10">
            Plan your journey through the magical Thar desert now and experience the heart of Rajasthan
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/ai" className="px-8 py-3 bg-yellow-600 hover:bg-yellow-700 text-white rounded-full text-lg font-medium transition-all duration-300">
              Plan Desert Tour
            </Link>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Desert;