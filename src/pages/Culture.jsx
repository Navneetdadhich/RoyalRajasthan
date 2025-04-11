import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Culture = () => {
  const [activeTab, setActiveTab] = useState('festivals');
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const tabs = [
    { id: 'festivals', label: 'Festivals & Events' },
    { id: 'dance', label: 'Dance Forms' },
    { id: 'music', label: 'Music & Instruments' },
    { id: 'art', label: 'Arts & Crafts' }
  ];

  const culturalElements = {
    festivals: [
      {
        id: 1,
        name: 'Pushkar Camel Fair',
        image: 'https://images.unsplash.com/photo-1705924876779-d3c6818047c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'One of the largest camel fairs in the world, featuring trading, races, cultural performances, and religious rituals.',
        when: 'November (Kartik Purnima)',
        where: 'Pushkar',
        highlight: 'Camel decoration competitions and folk performances'
      },
      {
        id: 2,
        name: 'Jaipur Literature Festival',
        image: 'https://assets.telegraphindia.com/telegraph/71a335fc-10dc-4573-941c-1b14129d9f05.jpg',
        description: `The world's largest free literary festival hosting renowned authors, thinkers, and artists from across the globe.`,
        when: 'January',
        where: 'Jaipur',
        highlight: 'Interactive sessions with world-famous authors'
      },
      {
        id: 3,
        name: 'Desert Festival',
        image: 'https://static.thehosteller.com/blogimage/Camel%20polo%20match%20during%20Desert%20Festival,%20Jaisalmer-1699871003387.jpg',
        description: 'Celebration of the culture and traditions of the Thar Desert with music, dance, and camel races.',
        when: 'February',
        where: 'Jaisalmer',
        highlight: 'Turban tying contest and Mr. Desert competition'
      }
    ],
    dance: [
      {
        id: 4,
        name: 'Ghoomar',
        image: 'https://www.gosahin.com/go/p/e/1541272781_Ghoomar-Dance1.jpg',
        description: 'Traditional Rajasthani folk dance performed by women in flowing ghagras (skirts), celebrating femininity and grace.',
        origin: 'Marwar Region',
        significance: 'Originally performed to worship goddess Saraswati',
        performers: 'Women in circular formations'
      },
      {
        id: 5,
        name: 'Kalbelia',
        image: 'https://www.drishtiias.com/images/uploads/1625132223_image3.jpg',
        description: 'UNESCO-recognized dance performed by the Kalbelia tribe, known for snake-like movements and black costumes.',
        origin: 'Kalbelia Tribe',
        significance: 'Inspired by the movements of snakes',
        performers: 'Women from the nomadic Kalbelia tribe'
      },
      {
        id: 6,
        name: 'Kathputli',
        image: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/India_Mandawa_marionetas_01_ni.JPG',
        description: 'Traditional puppet dance-drama telling tales of kings, lovers, and local folklore through intricately crafted puppets.',
        origin: 'Nagaur and Jodhpur',
        significance: 'One of the oldest forms of entertainment in Rajasthan',
        performers: 'Skilled puppeteers using wooden marionettes'
      }
    ],
    music: [
      {
        id: 7,
        name: 'Maand',
        image: 'https://aathun.com/wp-content/uploads/2021/11/rs1-420x300.jpg',
        description: 'Classical vocal style of Rajasthan with roots in folk traditions, often featuring romantic themes and heroic tales.',
        instruments: ['Kamaicha', 'Sarangi', 'Dholak'],
        region: 'Jaipur and Jodhpur',
        notable: 'Traditionally performed in royal courts'
      },
      {
        id: 8,
        name: 'Langa-Manganiar Music',
        image: 'https://harmoniummusicblog.wordpress.com/wp-content/uploads/2021/06/langa.png',
        description: 'Folk music tradition from the Thar Desert performed by hereditary Muslim musicians for their Hindu patrons.',
        instruments: ['Kamaicha', 'Sindhi Sarangi', 'Algoza', 'Dholak'],
        region: 'Western Rajasthan',
        notable: 'Passed down through generations for centuries'
      },
      {
        id: 9,
        name: 'Shehnai Vadak',
        image: 'https://www.jagdishprakashandsons.com/images/100.jpg',
        description: 'Traditional wind instrument music played during auspicious occasions like weddings and religious ceremonies.',
        instruments: ['Shehnai', 'Nagara', 'Dhol'],
        region: 'Throughout Rajasthan',
        notable: 'Considered highly auspicious for ceremonies'
      }
    ],
    art: [
      {
        id: 10,
        name: 'Blue Pottery',
        image: 'https://digitalpress.fra1.cdn.digitaloceanspaces.com/erc8wid/2023/03/BLUE-POTTERY.jpg',
        description: 'Distinct turquoise blue pottery made from quartz, not clay, known for its vivid colors and Persian influences.',
        origin: 'Jaipur',
        materials: 'Quartz powder, borax, powdered glass and gum',
        products: 'Vases, plates, tiles, and decorative items'
      },
      {
        id: 11,
        name: 'Bandhani Textiles',
        image: 'https://static.toiimg.com/thumb/imgsize-23456,msid-100642852,width-600,resizemode-4/100642852.jpg',
        description: 'Ancient tie-dye technique creating intricate patterns through tiny knots tied before dyeing.',
        origin: 'Jaipur, Jodhpur, and Sikar',
        materials: 'Cotton, silk, and wool fabrics',
        products: 'Sarees, turbans, dupattas, and dress materials'
      },
      {
        id: 12,
        name: 'Miniature Paintings',
        image: 'https://m.media-amazon.com/images/I/712C0JIxcSL._AC_UF1000,1000_QL80_.jpg',
        description: 'Delicate, detailed paintings traditionally made with natural colors and fine brushes made from squirrel hair.',
        origin: 'Bundi, Kishangarh, and Jaipur',
        materials: 'Natural colors on handmade paper',
        products: 'Detailed scenes from epics, royal life, and nature'
      }
    ]
  };
  
  const activeElements = culturalElements[activeTab] || [];

  return (
    <div className="min-h-screen bg-purple-50">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1649074705058-9d1579429e37?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Rajasthan Culture" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-indigo-800/60"></div>
        </div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -20 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-center"
          >
            Vibrant Culture <br />of Rajasthan
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl max-w-2xl text-center mb-10"
          >
            Experience the rich tapestry of traditions, art forms, and celebrations that define the soul of Rajasthan
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full text-lg font-medium transition-all duration-300">
              Explore Cultural Events
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white/10 text-white rounded-full text-lg font-medium transition-all duration-300">
              Watch Cultural Performances
            </button>
          </motion.div>
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

      {/* Cultural Richness Introduction */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple-800">The Living Heritage of Rajasthan</h2>
            <p className="text-gray-700 mb-6">
              Rajasthan's cultural landscape is a vibrant mosaic of artistic traditions that have flourished under royal patronage for centuries. The state's rich cultural heritage reflects the warrior ethos, creative spirit, and religious devotion of its people.
            </p>
            <p className="text-gray-700 mb-8">
              From the colorful festivals that punctuate the calendar to the mesmerizing dance forms, soul-stirring music, and exquisite handicrafts, Rajasthan offers visitors an immersive experience into India's most vivid cultural traditions.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <span className="font-medium">UNESCO Recognized Art Forms</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="font-medium">Year-Round Festivals</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                </div>
                <span className="font-medium">Ancient Musical Traditions</span>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <div className="aspect-video rounded-xl overflow-hidden">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/w9WAvgIHJr4?si=bA8oKuxIvfd6wdaF" 
                title="Rajasthan Cultural Heritage" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cultural Elements Tabs */}
      <section className="py-16 bg-purple-800/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold mb-4 text-purple-800">Discover Rajasthani Culture</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Explore the many facets of Rajasthan's cultural heritage, from colorful festivals and graceful dance forms to soulful music and intricate arts.</p>
          </div>

          <div className="flex overflow-x-auto scrollbar-hide mb-10 pb-2">
            <div className="flex space-x-2 mx-auto">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  className={`px-5 py-2 rounded-full whitespace-nowrap transition-all duration-300 ${
                    activeTab === tab.id 
                      ? 'bg-purple-700 text-white' 
                      : 'bg-purple-100 text-purple-800 hover:bg-purple-200'
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeElements.map(element => (
              <motion.div
                key={element.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                layout
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={element.image} 
                    alt={element.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-purple-800">{element.name}</h3>
                  <p className="text-gray-600 mb-6">{element.description}</p>
                  
                  {/* Festivals Info */}
                  {element.when && (
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span><span className="font-medium">When:</span> {element.when}</span>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span><span className="font-medium">Where:</span> {element.where}</span>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <span><span className="font-medium">Highlight:</span> {element.highlight}</span>
                      </div>
                    </div>
                  )}
                  
                  {/* Dance Info */}
                  {element.origin && element.significance && (
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span><span className="font-medium">Origin:</span> {element.origin}</span>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span><span className="font-medium">Significance:</span> {element.significance}</span>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span><span className="font-medium">Performers:</span> {element.performers}</span>
                      </div>
                    </div>
                  )}
                  
                  {/* Music Info */}
                  {element.instruments && (
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                        </svg>
                        <span>
                          <span className="font-medium">Instruments:</span> {element.instruments.join(', ')}
                        </span>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span><span className="font-medium">Region:</span> {element.region}</span>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                        <span><span className="font-medium">Notable:</span> {element.notable}</span>
                      </div>
                    </div>
                  )}
                  
                  {/* Art Info */}
                  {element.materials && (
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span><span className="font-medium">Origin:</span> {element.origin}</span>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                        <span><span className="font-medium">Materials:</span> {element.materials}</span>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                        </svg>
                        <span><span className="font-medium">Products:</span> {element.products}</span>
                      </div>
                    </div>
                  )}
                  
                  
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Experiences */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-800">Immersive Cultural Experiences</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">Go beyond sightseeing with these handpicked experiences that allow you to participate in and learn about Rajasthan's living cultural traditions.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Experience 1 */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="h-60 overflow-hidden relative">
              <img 
                src="https://images.jdmagicbox.com/quickquotes/listicle/listicle_1695531322229_5gf53_847x400.jpg" 
                alt="Folk Dance Workshop" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute top-0 right-0 bg-purple-600 text-white px-3 py-1 rounded-bl-lg font-medium">
                Popular
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-purple-800">Folk Dance Workshop</h3>
              <p className="text-gray-600 mb-4">Learn the graceful movements of Ghoomar or the energetic steps of Kalbelia from master dancers in an interactive session.</p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-purple-700 font-medium">Udaipur & Jodhpur</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">2-3 hours</span>
              </div>
              
            </div>
          </motion.div>
          
          {/* Experience 2 */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="h-60 overflow-hidden">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmgkKOctz_wrfpAY9BZ6xVbw42--oVW0Ek1A&s" 
                alt="Puppetry Workshop" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-purple-800">Puppetry Workshop</h3>
              <p className="text-gray-600 mb-4">Create your own Kathputli puppet and learn the art of traditional Rajasthani puppetry storytelling from master artisans.</p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-purple-700 font-medium">Jaipur</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">4 hours</span>
              </div>
              
            </div>
          </motion.div>
          
          {/* Experience 3 */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="h-60 overflow-hidden relative">
              <img 
                src="https://www.indianexcursions.co/wp-content/uploads/2018/06/block-printing.jpg" 
                alt="Craft Workshop" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute top-0 right-0 bg-purple-600 text-white px-3 py-1 rounded-bl-lg font-medium">
                Family-friendly
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-purple-800">Block Printing Workshop</h3>
              <p className="text-gray-600 mb-4">Learn the traditional art of block printing and create your own printed textile souvenir to take home.</p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-purple-700 font-medium">Jaipur & Sanganer</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">3 hours</span>
              </div>
              {/* <button className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-lg font-medium transition-all duration-300 flex items-center justify-center">
                Book Experience
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button> */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://www.clubmahindra.com/blog/media/section_images/shuttersto-ac770cbb797ddbd.jpg" 
            alt="Rajasthan Culture" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-purple-700/70"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 text-center">Experience the Cultural Magic of Rajasthan</h2>
          <p className="text-purple-100 text-lg md:text-xl max-w-2xl text-center mb-10">
            From royal ceremonies to village celebrations, immerse yourself in the rich cultural tapestry of the Land of Kings
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full text-lg font-medium transition-all duration-300">
              Cultural Tour Packages
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white/10 text-white rounded-full text-lg font-medium transition-all duration-300">
              Festival Calendar
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Culture;