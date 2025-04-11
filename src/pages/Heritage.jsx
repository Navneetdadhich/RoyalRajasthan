import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Heritage = () => {
  const [activeCategory, setActiveCategory] = useState('forts');
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef(null);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  const categories = [
    { id: 'forts', label: 'Forts & Palaces' },
    { id: 'temples', label: 'Temples & Spiritual Sites' },
    { id: 'havelis', label: 'Havelis & Mansions' },
    { id: 'museums', label: 'Museums & Galleries' }
  ];

  const heritageSites = {
    forts: [
      {
        id: 1,
        name: 'Amer Fort',
        image: 'https://images.unsplash.com/photo-1649922929138-2a9bb1a2ff8d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Majestic fort overlooking Maota Lake, known for its artistic Hindu style elements with intricate mirror work and elephant rides.',
        location: 'Jaipur',
        built: '16th century',
        highlight: 'Sheesh Mahal (Hall of Mirrors)',
        unesco: true
      },
      {
        id: 2,
        name: 'Mehrangarh Fort',
        image: 'https://images.unsplash.com/photo-1566873535350-a3f5d4a804b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'One of the largest forts in India, standing 400 feet above the city with imposing thick walls and spectacular views.',
        location: 'Jodhpur',
        built: '15th century',
        highlight: 'Magnificent views of the Blue City',
        unesco: false
      },
      {
        id: 3,
        name: 'City Palace',
        image: 'https://images.unsplash.com/photo-1575994532957-773da2f83eb1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2l0eSUyMHBhbGFjZXxlbnwwfDB8MHx8fDI%3D',
        description: 'A complex of courtyards, gardens, and buildings that blend Rajasthani and Mughal architectural styles.',
        location: 'Udaipur',
        built: '16th-20th centuries',
        highlight: 'Crystal Gallery and Peacock Courtyard',
        unesco: false
      }
    ],
    temples: [
      {
        id: 4,
        name: 'Ranakpur Jain Temple',
        image: 'https://images.unsplash.com/photo-1684990214842-a5b1c8761a4e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UmFuYWtwdXIlMjBKYWluJTIwVGVtcGxlfGVufDB8MHwwfHx8Mg%3D%3D',
        description: 'Intricate marble temple with 1,444 carved pillars, each with unique designs, dedicated to Adinatha.',
        location: 'Pali District',
        built: '15th century',
        highlight: '29 halls supported by uniquely carved pillars',
        religion: 'Jainism'
      },
      {
        id: 5,
        name: 'Karni Mata Temple',
        image: 'https://dwq3yv87q1b43.cloudfront.net/public/blogs/fit-in/1200x675/Blog_20240423-192132374-1713893497.jpg',
        description: 'Unique temple where rats are worshipped and protected, known as the Temple of Rats.',
        location: 'Deshnoke, near Bikaner',
        built: 'Early 20th century',
        highlight: 'Sacred rats (kabbas) that roam freely',
        religion: 'Hinduism'
      },
      {
        id: 6,
        name: 'Pushkar Brahma Temple',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/d6/b9/96/temple.jpg?w=1200&h=-1&s=1',
        description: 'One of the very few temples dedicated to Lord Brahma in the world, situated near the sacred Pushkar Lake.',
        location: 'Pushkar',
        built: '14th century',
        highlight: 'Unique temple dedicated to Lord Brahma',
        religion: 'Hinduism'
      }
    ],
    havelis: [
      {
        id: 7,
        name: 'Patwon Ki Haveli',
        image: 'https://s7ap1.scene7.com/is/image/incredibleindia/patwon-ki-haveli-jaisalmer-rajasthan-2-attr-hero?qlt=82&ts=1727352493508',
        description: 'Cluster of five havelis built by a wealthy jeweler and his sons, known for its intricate golden work and mirror decorations.',
        location: 'Jaisalmer',
        built: '19th century',
        highlight: 'Golden jharokhas (balconies) and paintings',
        owners: 'Patwa family'
      },
      {
        id: 8,
        name: 'Haveli of Salim Singh',
        image: 'https://www.trawell.in/admin/images/upload/825652531Jaisalmer_Salim_Singh_Haveli_Main.jpg',
        description: 'Distinctive haveli with a peacock-shaped roof and 38 balconies, each with unique designs.',
        location: 'Jaisalmer',
        built: '18th century',
        highlight: 'Distinctive blue cupola roof resembling a peacock',
        owners: 'Salim Singh, Prime Minister of Jaisalmer'
      },
      {
        id: 9,
        name: 'Nathmal Ki Haveli',
        image: 'https://s7ap1.scene7.com/is/image/incredibleindia/1-nathmal-ki-haveli-jaisalmer-attr-hero?qlt=82&ts=1727352752476',
        description: 'Haveli built by two architect brothers who worked on different sides, resulting in similar but not identical designs.',
        location: 'Jaisalmer',
        built: '19th century',
        highlight: 'Asymmetrical design with intricate elephant sculptures',
        owners: 'Nathmal, Prime Minister of Jaisalmer'
      }
    ],
    museums: [
      {
        id: 10,
        name: 'Albert Hall Museum',
        image: 'https://images.unsplash.com/photo-1705861144570-00ede2bc7e7f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Oldest museum in Rajasthan with a rich collection of artifacts including paintings, carpets, ivory items, and metal sculptures.',
        location: 'Jaipur',
        built: '1887',
        highlight: 'Egyptian mummy and rare ancient scriptures',
        collection: 'Art, artifacts, and historical objects'
      },
      {
        id: 11,
        name: 'Umaid Bhawan Palace Museum',
        image: 'https://images.unsplash.com/photo-1504194947363-2f14d9e0e445?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: `Part of the magnificent Umaid Bhawan Palace, showcasing the royal family's collection of antiques and memorabilia.`,
        location: 'Jodhpur',
        built: '1943',
        highlight: 'Vintage car collection and royal artifacts',
        collection: 'Royal memorabilia and vintage items'
      },
      {
        id: 12,
        name: 'City Palace Museum',
        image: 'https://map.sahapedia.org/admin/assets/images/2021033013400727799_Banner.jpg?__imr__=bannerMuseum',
        description: 'Museum within the City Palace complex displaying royal artifacts, weapons, miniature paintings, and royal costumes.',
        location: 'Udaipur',
        built: '16th century',
        highlight: 'Collection of miniature paintings and royal artifacts',
        collection: 'Royal memorabilia and art'
      }
    ]
  };
  
  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const activeSites = heritageSites[activeCategory] || [];

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1677649117932-4c8abf3e27bb?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Rajasthan Heritage" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 to-amber-800/60"></div>
        </div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -20 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-center"
          >
            Magnificent Heritage <br />of Rajasthan
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl max-w-2xl text-center mb-10"
          >
            Discover centuries of royal legacy preserved in majestic forts, ornate temples, and intricate havelis
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <button className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-full text-lg font-medium transition-all duration-300">
              Explore Heritage Sites
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

      {/* Heritage Introduction */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-amber-800">A Living Testament to Royal Legacy</h2>
            <p className="text-gray-700 mb-6">
              Rajasthan's rich heritage stands as an eloquent testimony to its glorious past. The state's architectural marvels showcase the artistic vision and engineering ingenuity of bygone eras, with each structure telling a unique story of valor, romance, and artistic brilliance.
            </p>
            <p className="text-gray-700 mb-8">
              From the imposing forts perched atop hills to intricately carved havelis and temples adorned with delicate sculptures, Rajasthan's heritage sites offer visitors a journey through time, where the grandeur of royal courts and the spiritual devotion of the people come alive in stone and mortar.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <span className="font-medium">6 UNESCO World Heritage Sites</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                  </svg>
                </div>
                <span className="font-medium">85+ Historic Forts & Palaces</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <span className="font-medium">Centuries of Architectural Marvel</span>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div 
              className="relative h-96 rounded-xl overflow-hidden cursor-pointer group"
              onClick={playVideo}
            >
              <iframe
    className="absolute w-full h-full"
    src="https://www.youtube.com/embed/9zwUZTv95cw?si=QK1uZ8jdA6HXzGTg"
    title="Rajasthani Cuisine"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
             
            </div>
          </motion.div>
        </div>
      </section>

      {/* Heritage Categories */}
      <section className="py-16 bg-amber-800/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold mb-4 text-amber-800">Explore Rajasthan's Heritage</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Discover the architectural wonders that showcase Rajasthan's royal past, spiritual devotion, and artistic excellence.</p>
          </div>

          <div className="flex overflow-x-auto scrollbar-hide mb-10 pb-2">
            <div className="flex space-x-2 mx-auto">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`px-5 py-2 rounded-full whitespace-nowrap transition-all duration-300 ${
                    activeCategory === category.id 
                      ? 'bg-amber-700 text-white' 
                      : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeSites.map(site => (
              <motion.div
                key={site.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                layout
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={site.image} 
                    alt={site.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  {site.unesco && (
                    <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 rounded-bl-lg font-medium">
                      UNESCO
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-amber-800">{site.name}</h3>
                  <p className="text-gray-600 mb-6">{site.description}</p>
                  
                  {/* Common Info */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span><span className="font-medium">Location:</span> {site.location}</span>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span><span className="font-medium">Built:</span> {site.built}</span>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                      <span><span className="font-medium">Highlight:</span> {site.highlight}</span>
                    </div>
                    
                    {/* Specific Info */}
                    {site.religion && (
                      <div className="flex items-start gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                        </svg>
                        <span><span className="font-medium">Religion:</span> {site.religion}</span>
                      </div>
                    )}
                    
                    {site.owners && (
                      <div className="flex items-start gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span><span className="font-medium">Original Owners:</span> {site.owners}</span>
                      </div>
                    )}
                    
                    {site.collection && (
                      <div className="flex items-start gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                        <span><span className="font-medium">Collection:</span> {site.collection}</span>
                      </div>
                    )}
                  </div>
                  
                 
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage Restoration Section */}
      

      {/* Heritage Experiences */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-800">Immersive Heritage Experiences</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">Go beyond sightseeing with these unique opportunities to immerse yourself in Rajasthan's rich heritage and royal legacies.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Experience 1 */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="h-60 overflow-hidden relative">
              <img 
                src="https://media.tacdn.com/media/attractions-splice-spp-674x446/07/2b/50/06.jpg" 
                alt="Night Tour" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute top-0 right-0 bg-amber-600 text-white px-3 py-1 rounded-bl-lg font-medium">
                Most Popular
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-amber-800">Night Tour of Amer Fort</h3>
              <p className="text-gray-600 mb-4">Experience the magic of Amer Fort illuminated under the stars, with stories of royal intrigue and historical events.</p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-amber-700 font-medium">Jaipur</span>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-gray-600 ml-1">4.9 (156)</span>
                </div>
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
                src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201501/royalstory_650_011615060350.jpg?VersionId=c89duS0c3XsA2ejdaBAwvfsu..EIjVHd&size=690:388" 
                alt="Royal Dinner" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-amber-800">Dine Like Royalty</h3>
              <p className="text-gray-600 mb-4">Enjoy a lavish traditional dinner in a heritage palace with live folk music and dance performances.</p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-amber-700 font-medium">Udaipur</span>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-gray-600 ml-1">4.8 (112)</span>
                </div>
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
                src="https://www.pelago.com/img/products/IN-India/full-day-private-fresco-painting-workshop-in-jaipur/a8138713-9505-47e8-9845-ff88397cfeb6_full-day-private-fresco-painting-workshop-in-jaipur-xlarge.jpg" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute top-0 right-0 bg-amber-600 text-white px-3 py-1 rounded-bl-lg font-medium">
                Family-friendly
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-amber-800">Fresco Painting Workshop</h3>
              <p className="text-gray-600 mb-4">Learn the ancient art of fresco painting from master craftsmen who have restored historical murals across Rajasthan.</p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-amber-700 font-medium">Shekhawati Region</span>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-gray-600 ml-1">4.7 (89)</span>
                </div>
              </div>
              
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1717329162563-2f93e83cc717?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Rajasthan Heritage" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 to-amber-700/60"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 text-center">Journey Through Royal Rajasthan</h2>
          <p className="text-amber-100 text-lg md:text-xl max-w-2xl text-center mb-10">
            Immerse yourself in centuries of history and architectural splendor with our curated heritage tours
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-full text-lg font-medium transition-all duration-300">
              Plan Your Heritage Tour
            </button>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Heritage;