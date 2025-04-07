import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-blue-50">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img 
          src="/public/rajmap.png" 
          alt="Rajasthan Map" 
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-orange-200 bg-opacity-40 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-yellow-700 mb-4 ">
              Discover Royal Rajasthan
            </h1>
            <p className="text-xl text-yellow-700 max-w-2xl mx-auto">
              Preserving the rich heritage and vibrant culture of India's Land of Kings
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="/public/turbanman.png" 
              alt="Rajasthani Man with Turban" 
              className="rounded-lg  w-full"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-blue-800 mb-6 ">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Founded in the heart of Jaipur, RoyalTrails was born from a deep passion for sharing the majestic beauty and cultural wealth of this historic region.
            </p>
            <p className="text-gray-700 mb-4">
              For over a decade, we've been connecting travelers with authentic experiences that showcase Rajasthan's royal heritage, from the golden deserts of Jaisalmer to the blue streets of Jodhpur.
            </p>
            <p className="text-gray-700">
              Our team of local experts ensures every journey with us is imbued with the true spirit of Rajasthan - its colors, flavors, and timeless traditions.
            </p>
          </div>
        </div>
      </section>

      {/* Cultural Values */}
      <section className="py-16 bg-blue-100 text-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-blue-500 text-center ">Our Cultural Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-blue-500 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🏰</div>
              <h3 className="text-xl font-bold mb-2">Preservation</h3>
              <p>We actively support the conservation of Rajasthan's historic forts, palaces, and cultural traditions.</p>
            </div>
            <div className="text-center p-6 bg-blue-500 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-2">Community</h3>
              <p>We partner with local artisans and communities to sustain traditional crafts and livelihoods.</p>
            </div>
            <div className="text-center p-6 bg-blue-500 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold mb-2">Authenticity</h3>
              <p>Every experience we offer is deeply rooted in genuine Rajasthani culture and heritage.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-800 mb-12 text-center ">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <img 
              src="/public/jaipur/tej.jpg" 
              alt="Raj Singh" 
              className="w-48 h-48 rounded-full object-cover mx-auto mb-4 border-4 border-blue-600 shadow-lg"
            />
            <h3 className="text-xl font-bold text-blue-800">Navneet Dadhich</h3>
            <p className="text-blue-600">Founder & CTO</p>
            <p className="text-gray-700 mt-2">Descendant of Rajput nobility with encyclopedic knowledge of Rajasthan's history</p>
          </div>
          <div className="text-center">
            <img 
              src="/public/jodhpur/umm.jpg" 
              alt="Priya Sharma" 
              className="w-48 h-48 rounded-full object-cover mx-auto mb-4 border-4 border-blue-600 shadow-lg"
            />
            <h3 className="text-xl font-bold text-blue-800">Nishita </h3>
            <p className="text-blue-600">Cofounder & CEO</p>
            <p className="text-gray-700 mt-2">Expert in creating immersive cultural experiences and folk art interactions</p>
          </div>
          <div className="text-center">
            <img 
              src="/public/piraj/dance.jpg" 
              alt="Vikram Rathore" 
              className="w-48 h-48 rounded-full object-cover mx-auto mb-4 border-4 border-blue-600 shadow-lg"
            />
            <h3 className="text-xl font-bold text-blue-800">Aditya Goenka</h3>
            <p className="text-blue-600">Cofounder & Operational Manager </p>
            <p className="text-gray-700 mt-2">Master of traditional Rajasthani cuisine and royal dining traditions</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-100">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-5xl font-bold text-blue-800 mb-6 ">Ready to Experience Royal Rajasthan?</h2>
          <p className="text-gray-700 mb-8 text-xl">
            Let us craft your perfect journey through the Land of Kings
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;