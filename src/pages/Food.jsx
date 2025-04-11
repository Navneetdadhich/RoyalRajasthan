import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const Food = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const videoRef = useRef(null);
  
  const categories = ['all', 'curries', 'breads', 'desserts', 'street food'];
  
  const foodItems = [
    {
      id: 1,
      name: 'Dal Baati Churma',
      image: 'https://kannanskitchen.com/wp-content/uploads/2021/07/DSC_8173-5.jpg',
      description: `Rajasthan's signature dish consisting of baked wheat balls, lentil curry and a sweet crumbled mixture.`,
      category: 'curries',
      location: 'Throughout Rajasthan'
    },
    {
      id: 2,
      name: 'Laal Maas',
      image: 'https://i0.wp.com/swatisani.net/kitchen/wp-content/uploads/2015/11/IMG_9546.jpg?fit=943%2C629&ssl=1',
      description: 'Fiery red meat curry prepared with hot spices and Mathania red chilies.',
      category: 'curries',
      location: 'Jodhpur, Udaipur'
    },
    {
      id: 3,
      name: 'Pyaaz Kachori',
      image: 'https://www.samosasingh.com/wp-content/uploads/2024/02/allopyazkachori.jpg',
      description: 'Deep-fried pastry filled with spicy onion mixture, served with tangy chutneys.',
      category: 'street food',
      location: 'Jaipur, Jodhpur'
    },
    {
      id: 4,
      name: 'Malai Ghevar',
      image: 'https://5.imimg.com/data5/ANDROID/Default/2022/7/RC/NN/VK/116899114/1657958920831-jpg-1000x1000.jpg',
      description: 'Disc-shaped sweet cake made with flour and soaked in sugar syrup, often garnished with nuts.',
      category: 'desserts',
      location: 'Jaipur'
    },
    {
      id: 5,
      name: 'Bajre ki Roti',
      image: 'https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Hina_Gujral/Bajri_Ki_Roti_Recipe.jpg',
      description: 'Millet flatbread traditionally cooked over open flame, served with ghee.',
      category: 'breads',
      location: 'Rural Rajasthan'
    },
    {
      id: 6,
      name: 'Mawa Kachori',
      image: 'https://www.cookclickndevour.com/wp-content/uploads/2017/03/mawa-kachori-recipe-c.jpg',
      description: 'Sweet kachori filled with mawa (khoya) and dry fruits, dipped in sugar syrup.',
      category: 'desserts',
      location: 'Jodhpur'
    }
  ];
  
  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const filteredItems = activeCategory === 'all' 
    ? foodItems 
    : foodItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1680359873864-43e89bf248ac?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Rajasthani Food Spread" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 to-amber-900/60"></div>
        </div>
        
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4 md:px-8">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-4 text-amber-100 text-center"
          >
            Flavors of Rajasthan
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl max-w-2xl text-center text-amber-50"
          >
            A culinary journey through royal kitchens and street corners
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 flex gap-4"
          >
            <button className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-full text-lg font-medium transition-all duration-300">
              Popular Dishes
            </button>
           
          </motion.div>
        </div>
      </section>

      {/* Culinary Story Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6 text-amber-800"
            >
              The Royal Heritage of Rajasthani Cuisine
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-700 mb-8"
            >
              Rajasthan's culinary heritage is as rich and diverse as its culture. From the royal kitchens to rural hearths, the cuisine has evolved over centuries, adapting to the harsh desert climate and scarcity of water. 
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-gray-700 mb-8"
            >
              The dishes are characterized by their intense flavors, use of local spices, and cooking techniques that preserve food for longer durations. Each region of Rajasthan has contributed its unique flavors to this magnificent cuisine.
            </motion.p>
            <div className="flex gap-4">
             
              <button className="px-6 py-2 bg-amber-100 hover:bg-amber-200 text-amber-800 rounded-full text-md font-medium flex items-center gap-2 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                </svg>
                Popular Recipes
              </button>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div 
              className="relative h-80 md:h-96 rounded-xl overflow-hidden cursor-pointer group"
              onClick={playVideo}
            >
              <iframe
                className="absolute w-full h-full"
                src="https://www.youtube.com/embed/wn33VizzTDQ?si=rixhurzFCq52V5ia"
                title="Rajasthani Cuisine"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Food Gallery Section */}
      <section className="py-16 bg-amber-100/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-amber-800">Iconic Rajasthani Dishes</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">Explore the vibrant palette of flavors that make Rajasthani cuisine one of India's most beloved culinary traditions.</p>
          </div>
          
          <div className="flex items-center justify-center gap-3 mb-12 flex-wrap">
            {categories.map(category => (
              <button 
                key={category}
                className={`px-5 py-2 rounded-full text-sm md:text-base font-medium capitalize transition-all duration-300 ${
                  activeCategory === category 
                  ? 'bg-amber-700 text-white' 
                  : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map(item => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                layout
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 capitalize mb-3">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-semibold mb-2 text-amber-800">{item.name}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-amber-700 font-medium flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {item.location}
                    </span>
                    
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No items found in this category. Please check back soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Food Experiences */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-amber-800 text-center">Food Experiences</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div 
              className="relative h-80 md:h-96 rounded-xl overflow-hidden cursor-pointer group"
              onClick={playVideo}
            >
              <iframe
                className="absolute w-full h-full"
                src="https://www.youtube.com/embed/wn33VizzTDQ?si=rixhurzFCq52V5ia"
                title="Rajasthani Cuisine"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
        <div 
              className="relative h-80 md:h-96 rounded-xl overflow-hidden cursor-pointer group"
              onClick={playVideo}
            >
              <iframe
                className="absolute w-full h-full"
                src="https://www.youtube.com/embed/vCWX4JC7Jeg?si=uBKXXe85gWlAu7FD"
                title="Rajasthani Cuisine"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          
          
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-amber-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-100">Get Culinary Updates from Rajasthan</h2>
          <p className="text-amber-200 max-w-2xl mb-8">Subscribe to our newsletter and receive recipes, food festival updates, and culinary travel opportunities.</p>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xl">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow px-6 py-3 rounded-full border-2 border-amber-600 focus:outline-none focus:border-amber-400"
            />
            <button className="px-6 py-3 bg-amber-600 hover:bg-amber-500 text-white rounded-full text-md font-medium transition-all duration-300 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Food;