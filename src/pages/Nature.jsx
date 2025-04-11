import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Nature = () => {
  const [activeTab, setActiveTab] = useState('wildlife');
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  const tabs = [
    { id: 'wildlife', label: 'Wildlife Sanctuaries' },
    { id: 'lakes', label: 'Lakes & Waterfalls' },
    { id: 'gardens', label: 'Gardens & Parks' },
    { id: 'hills', label: 'Hills & Mountains' }
  ];
  
  const natureSpots = {
    wildlife: [
      {
        id: 1,
        name: 'Ranthambore National Park',
        image: 'https://images.unsplash.com/photo-1661769584051-6a445b814e27?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmFudGhhbWJvcmV8ZW58MHwwfDB8fHwy',
        description: 'Famous for its tiger population and ancient ruins, this national park offers the perfect setting for wildlife photography.',
        location: 'Near Sawai Madhopur',
        animals: ['Tigers', 'Leopards', 'Sloth Bears', 'Deer']
      },
      {
        id: 2,
        name: 'Sariska Tiger Reserve',
        image: 'https://images.unsplash.com/photo-1730728004078-852b722a6e67?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'A haven for Bengal Tigers and various species of wildlife, surrounded by the Aravalli mountains.',
        location: 'Alwar District',
        animals: ['Tigers', 'Leopards', 'Hyenas', 'Wild Dogs']
      },
      {
        id: 3,
        name: 'Keoladeo National Park',
        image: 'https://images.unsplash.com/photo-1680701717066-23b0c528d818?q=80&w=2019&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'A UNESCO World Heritage Site and paradise for bird watchers with over 230 species of birds.',
        location: 'Bharatpur',
        animals: ['Migratory Birds', 'Pythons', 'Mongoose', 'Deer']
      }
    ],
    lakes: [
      {
        id: 4,
        name: 'Lake Pichola',
        image: 'https://images.unsplash.com/photo-1655999970996-e557e1ffe5f9?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'An artificial freshwater lake with islands housing palaces, creating a romantic setting in Udaipur.',
        location: 'Udaipur',
        activities: ['Boat Rides', 'Palace Visits', 'Sunset Views']
      },
      {
        id: 5,
        name: 'Nakki Lake',
        image: 'https://live.staticflickr.com/4031/4351156371_48e43421db_b.jpg',
        description: 'A sacred lake surrounded by mountains, believed to have been carved by gods using their nails.',
        location: 'Mount Abu',
        activities: ['Boating', 'Trekking', 'Picnics']
      },
      {
        id: 6,
        name: 'Siliserh Lake',
        image: 'https://visitplacesindia.com/wp-content/uploads/2024/12/siliserh-lake-palace.jpg',
        description: 'A peaceful lake surrounded by hills, with a palace-turned-hotel offering panoramic views.',
        location: 'Alwar',
        activities: ['Boating', 'Fishing', 'Bird Watching']
      }
    ],
    gardens: [
      {
        id: 7,
        name: 'Sisodia Rani Garden',
        image: 'https://content-tourist.rajasthan.gov.in/uploads/sisodiya_rani_garden_jaipur_2_df51766c17.jpg',
        description: 'A multi-tiered garden with fountains, murals, and pavilions, built by a king for his queen.',
        location: 'Near Jaipur',
        features: ['Fountains', 'Paintings', 'Pavilions']
      },
      {
        id: 8,
        name: 'Gulab Bagh',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/68/46/57/garden.jpg?w=700&h=-1&s=1',
        description: 'The largest garden in Udaipur with a library, zoo, and various plant species including roses.',
        location: 'Udaipur',
        features: ['Rose Garden', 'Zoo', 'Library']
      },
      {
        id: 9,
        name: 'Saheliyon Ki Bari',
        image: 'https://s7ap1.scene7.com/is/image/incredibleindia/saheliyon-ki-bari-udaipur-attr-hero-2?qlt=82&ts=1727352844339',
        description: 'A beautiful garden with fountains, kiosks, marble elephants, and a lotus pool.',
        location: 'Udaipur',
        features: ['Fountains', 'Lotus Pool', 'Marble Work']
      }
    ],
    hills: [
      {
        id: 10,
        name: 'Mount Abu',
        image: 'https://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/city/explore/Toad%20Rock%20View%20Point.jpg',
        description: 'The only hill station in Rajasthan, offering respite from the desert heat with its cool climate.',
        location: 'Sirohi District',
        attractions: ['Dilwara Temples', 'Nakki Lake', 'Sunset Point']
      },
      {
        id: 11,
        name: 'Gurushikhar',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Arbuda_Mountains.JPG/1200px-Arbuda_Mountains.JPG',
        description: 'The highest peak in the Aravalli Range offering panoramic views of the surrounding landscape.',
        location: 'Mount Abu',
        attractions: ['Dattatreya Temple', 'Observatory', 'Trekking Trails']
      },
      {
        id: 12,
        name: 'Kumbhalgarh Forest',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/ac/0c/32/the-kumbha-bagh.jpg?w=900&h=500&s=1',
        description: 'Rich biodiversity surrounds the massive Kumbhalgarh fort, with hiking trails through dense forests.',
        location: 'Near Udaipur',
        attractions: ['Kumbhalgarh Fort', 'Wildlife Sanctuary', 'Nature Trails']
      }
    ]
  };
  
  const activeSpots = natureSpots[activeTab] || [];

  return (
    <div className="min-h-screen bg-emerald-50">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30 z-10"></div>
        <video 
          className="w-full h-full object-cover"
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="https://videos.pexels.com/video-files/19296729/19296729-hd_1920_1080_25fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white px-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -20 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-center"
          >
            Nature's Paradise <br />in the Desert State
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl max-w-2xl text-center mb-10"
          >
            Discover the surprising natural beauty of Rajasthan beyond its deserts
          </motion.p>
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full text-lg font-medium transition-all duration-300"
          >
            Explore Nature Trails
          </motion.button>
        </div>
        <div className="absolute bottom-10 left-0 right-0 flex justify-center z-20">
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* Natural Wonders Introduction */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-emerald-800">Rajasthan: Where Nature Defies Expectations</h2>
            <p className="text-gray-700 mb-6">
              Beyond the golden sands and majestic palaces, Rajasthan harbors a surprising array of natural wonders. From lush forests teeming with wildlife to serene lakes reflecting ancient architectures, the state offers nature lovers unexpected treasures at every turn.
            </p>
            <p className="text-gray-700 mb-8">
              The diverse landscapes include the dense forests of Ranthambore where tigers roam free, the cool hills of Mount Abu offering respite from desert heat, and the magical oasis of Udaipur with its interconnected lakes. Each natural attraction tells a unique story of adaptation and resilience.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-medium">3 National Parks</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-medium">10+ Wildlife Sanctuaries</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-medium">Hundreds of Bird Species</span>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 grid grid-cols-2 gap-4"
          >
            <div className="col-span-1 row-span-2 overflow-hidden rounded-xl">
              <img 
                src="https://images.unsplash.com/photo-1615880484746-a134be9a6ecf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Tiger in Ranthambore" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="col-span-1 overflow-hidden rounded-xl">
              <img 
                src="https://images.unsplash.com/photo-1591694118466-dba7f69c408c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Birds in Bharatpur" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="col-span-1 overflow-hidden rounded-xl">
              <img 
                src="https://images.unsplash.com/photo-1597085097507-9549c0b3049b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Rajasthan Landscape" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Nature Spots Section */}
      <section className="py-16 bg-emerald-800/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold mb-4 text-emerald-800">Explore Natural Wonders</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Discover the diverse natural attractions that showcase Rajasthan's ecological heritage and breathtaking landscapes.</p>
          </div>

          <div className="flex overflow-x-auto scrollbar-hide mb-10 pb-2">
            <div className="flex space-x-2 mx-auto">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  className={`px-5 py-2 rounded-full whitespace-nowrap transition-all duration-300 ${
                    activeTab === tab.id 
                      ? 'bg-emerald-700 text-white' 
                      : 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeSpots.map(spot => (
              <motion.div
                key={spot.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                layout
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={spot.image} 
                    alt={spot.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-emerald-800">{spot.name}</h3>
                  <p className="text-gray-600 mb-4">{spot.description}</p>
                  
                  <div className="flex items-center gap-2 mb-4 text-sm text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span>{spot.location}</span>
                  </div>
                  
                  {spot.animals && (
                    <div className="mb-4">
                      <p className="text-xs text-emerald-600 font-medium mb-2">WILDLIFE:</p>
                      <div className="flex flex-wrap gap-2">
                        {spot.animals.map((animal, idx) => (
                          <span 
                            key={idx} 
                            className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs"
                          >
                            {animal}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {spot.activities && (
                    <div className="mb-4">
                      <p className="text-xs text-emerald-600 font-medium mb-2">ACTIVITIES:</p>
                      <div className="flex flex-wrap gap-2">
                        {spot.activities.map((activity, idx) => (
                          <span 
                            key={idx} 
                            className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs"
                          >
                            {activity}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {spot.features && (
                    <div className="mb-4">
                      <p className="text-xs text-emerald-600 font-medium mb-2">FEATURES:</p>
                      <div className="flex flex-wrap gap-2">
                        {spot.features.map((feature, idx) => (
                          <span 
                            key={idx} 
                            className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {spot.attractions && (
                    <div className="mb-4">
                      <p className="text-xs text-emerald-600 font-medium mb-2">ATTRACTIONS:</p>
                      <div className="flex flex-wrap gap-2">
                        {spot.attractions.map((attraction, idx) => (
                          <span 
                            key={idx} 
                            className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs"
                          >
                            {attraction}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="mt-2">
                   
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nature Conservation Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-emerald-800 rounded-xl overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/2">
                <div className="h-96 lg:h-full">
                  <iframe 
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/I1Vt8oPCZiE?si=g6TfnIk9HTW3pbaE" 
                    title="Conservation Efforts in Rajasthan" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Conservation Efforts</h2>
                <p className="text-emerald-100 mb-6">
                  Rajasthan has been making significant strides in nature conservation, protecting its diverse ecosystems from the threats of urbanization, climate change, and human encroachment.
                </p>
                <p className="text-emerald-100 mb-8">
                  From Project Tiger initiatives in Ranthambore to water conservation projects in the desert regions, local communities and government agencies are working together to preserve the state's natural heritage for future generations.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-300" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-emerald-100">Tiger population in Ranthambore has increased by 30% in the last decade through dedicated conservation efforts.</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-300" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-emerald-100">Traditional water conservation methods like stepwells and johads are being revitalized to address water scarcity.</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-300" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-emerald-100">Community-based eco-tourism initiatives are creating sustainable livelihoods while protecting natural resources.</p>
                  </div>
                </div>
                
               
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eco-Tourism Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-emerald-800">Sustainable Eco-Tourism</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">Experience Rajasthan's natural wonders responsibly with these eco-friendly tours and activities that support conservation and local communities.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Tour 1 */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="h-60 overflow-hidden relative">
              <img 
                src="https://natureexplorers.in/wp-content/uploads/2023/11/responsible_tiger_tourism-Hero-Image.jpg" 
                alt="Tiger Safari" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute top-0 right-0 bg-emerald-600 text-white px-3 py-1 rounded-bl-lg font-medium">
                Best Between July-Nov
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-emerald-800">Responsible Tiger Safari</h3>
              <p className="text-gray-600 mb-4">Experience the thrill of spotting tigers in their natural habitat with our eco-conscious safari tours that prioritize animal welfare.</p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-emerald-700 font-medium">Ranthambore</span>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-gray-600 ml-1">4.9 (128)</span>
                </div>
              </div>
              
            </div>
          </motion.div>
          
          {/* Tour 2 */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="h-60 overflow-hidden">
              <img 
                src="https://s3.us-east-2.amazonaws.com/wanderingjane/gallery/1701951378bs1.png.png" 
                alt="Birdwatching Tour" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-emerald-800">Bharatpur Bird Sanctuary Tour</h3>
              <p className="text-gray-600 mb-4">Guided birdwatching tours at Keoladeo National Park with expert naturalists to spot migratory and resident birds.</p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-emerald-700 font-medium">Bharatpur</span>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-gray-600 ml-1">4.8 (96)</span>
                </div>
              </div>
             
            </div>
          </motion.div>
          
          {/* Tour 3 */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="h-60 overflow-hidden relative">
              <img 
                src="https://risingadventures.com/wp-content/uploads/2020/10/camping.jpg" 
                alt="Trekking" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute top-0 right-0 bg-emerald-600 text-white px-3 py-1 rounded-bl-lg font-medium">
                Family-friendly
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-emerald-800">Mount Abu Wilderness Trek</h3>
              <p className="text-gray-600 mb-4">Guided hiking adventures through the Aravalli forests with local naturalists sharing insights on flora and fauna.</p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-emerald-700 font-medium">Mount Abu</span>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-gray-600 ml-1">4.7 (86)</span>
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
            src="https://images.unsplash.com/photo-1552251520-5ece2c803b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Rajasthan Nature" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-emerald-700/60"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 text-center">Reconnect with Nature in Rajasthan</h2>
          <p className="text-emerald-100 text-lg md:text-xl max-w-2xl text-center mb-10">
            Plan your nature retreat amid the enchanting landscapes of the desert state and discover a different side of Rajasthan
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full text-lg font-medium transition-all duration-300 border-white border-2">
              Plan Your Nature Trip
            </button>
           
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nature;