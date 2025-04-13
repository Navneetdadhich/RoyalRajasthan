import React from 'react';
import { Link } from 'react-router-dom';
// import { Button } from '../components/ui/button';
import { ChevronRight } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-100 to-pink-100">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <img 
          src="/rajmap.png" 
          alt="Rajasthan Map" 
          className="w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-300/60 to-amber-500/40 flex items-center justify-center">
          <div className="text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-yellow-700 mb-6 drop-shadow-md">
              Discover Royal Rajasthan
            </h1>
            <p className="text-xl md:text-2xl text-yellow-600 max-w-2xl mx-auto font-light">
              Preserving the rich heritage and vibrant culture of India's Land of Kings
            </p>
            <Link to="/contact" className="mt-8 inline-block">
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
                Start Your Journey
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 px-4 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <img 
              src="/turbanman.png" 
              alt="Rajasthani Man with Turban" 
              className="rounded-2xl  w-full object-cover hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-amber-800 mb-8 border-b-2 border-amber-400 pb-2 inline-block">Our Story</h2>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Founded in the heart of Jaipur, RoyalTrails was born from a deep passion for sharing the majestic beauty and cultural wealth of this historic region.
            </p>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              For over a decade, we've been connecting travelers with authentic experiences that showcase Rajasthan's royal heritage, from the golden deserts of Jaisalmer to the blue streets of Jodhpur.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our team of local experts ensures every journey with us is imbued with the true spirit of Rajasthan - its colors, flavors, and timeless traditions.
            </p>
          </div>
        </div>
      </section>

      {/* Cultural Values */}
      <section className="py-24 bg-gradient-to-r from-amber-200 to-amber-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-amber-800 text-center border-b-2 border-amber-400 pb-4 max-w-xs mx-auto">Our Cultural Values</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-rose-200 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-6">🏰</div>
              <h3 className="text-2xl font-bold mb-4 text-amber-800">Preservation</h3>
              <p className="text-gray-600 leading-relaxed">We actively support the conservation of Rajasthan's historic forts, palaces, and cultural traditions.</p>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-rose-200 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-6">🤝</div>
              <h3 className="text-2xl font-bold mb-4 text-amber-800">Community</h3>
              <p className="text-gray-600 leading-relaxed">We partner with local artisans and communities to sustain traditional crafts and livelihoods.</p>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-rose-200 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-6">🎨</div>
              <h3 className="text-2xl font-bold mb-4 text-amber-800">Authenticity</h3>
              <p className="text-gray-600 leading-relaxed">Every experience we offer is deeply rooted in genuine Rajasthani culture and heritage.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-amber-800 mb-16 text-center border-b-2 border-amber-400 pb-4 max-w-xs mx-auto">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="group">
            <div className="relative overflow-hidden rounded-full w-56 h-56 mx-auto mb-6">
              <img 
                src="/jaipur/tej.jpg" 
                alt="Navneet Dadhich" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-600/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-amber-800">Navneet Dadhich</h3>
              <p className="text-rose-600 font-medium">Founder & CTO</p>
              <p className="text-gray-600 mt-4 leading-relaxed">Descendant of Rajput nobility with encyclopedic knowledge of Rajasthan's history</p>
            </div>
          </div>
          
          <div className="group">
            <div className="relative overflow-hidden rounded-full w-56 h-56 mx-auto mb-6">
              <img 
                src="/jodhpur/umm.jpg" 
                alt="Nishita" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-600/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-amber-800">Nishita</h3>
              <p className="text-rose-600 font-medium">Cofounder & CEO</p>
              <p className="text-gray-600 mt-4 leading-relaxed">Expert in creating immersive cultural experiences and folk art interactions</p>
            </div>
          </div>
          
          <div className="group">
            <div className="relative overflow-hidden rounded-full w-56 h-56 mx-auto mb-6">
              <img 
                src="/piraj/dance.jpg" 
                alt="Aditya Goenka" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-600/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-amber-800">Aditya Goenka</h3>
              <p className="text-rose-600 font-medium">Cofounder & Operational Manager</p>
              <p className="text-gray-600 mt-4 leading-relaxed">Master of traditional Rajasthani cuisine and royal dining traditions</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-rose-200 to-rose-400 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-5xl font-bold mb-8 drop-shadow-sm">Ready to Experience Royal Rajasthan?</h2>
          <p className="text-xl mb-10 font-light max-w-2xl mx-auto">
            Let us craft your perfect journey through the Land of Kings
          </p>
          <Link to="/contact">
            <button className="bg-white hover:bg-gray-100 text-amber-800 font-bold py-3 px-10 text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl fleqx items-center justify-center">
              Contact Us 
            </button>
          </Link>
        </div>
      </section>
      </div>
  );
};

export default About;