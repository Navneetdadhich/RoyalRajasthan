import React from 'react'
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Mail, Phone, Send } from 'lucide-react';

const Footer = () => {
  return (
    <>
    <div className="navcolor border-t-4 border-rose-500 p-4 flex justify-center items-center gap-2 z-50">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-8">
            {/* Company Info */}
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Our Company</h3>
              <p className="text-gray-600 mb-4">We provide quality services to our customers across the globe.</p>
              <div className="flex space-x-4 mt-2">
                <a href="#" className="text-gray-600 hover:text-rose-500">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-600 hover:text-rose-500">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-600 hover:text-rose-500">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-600 hover:text-rose-500">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-600 hover:text-rose-500">About Us</Link></li>
                <li><Link to="contact" className="text-gray-600 hover:text-rose-500">Contact</Link></li>
                <li><Link to="ai" className="text-red-600 hover:text-rose-500">Ai Planner</Link></li>
                
              </ul>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="text-gray-600 mt-1" size={18} />
                  <span className="text-gray-600">123 Business Ave, San Francisco, CA 94107</span>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="text-gray-600 mt-1" size={18} />
                  <span className="text-gray-600">hello@yourcompany.com</span>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="text-gray-600 mt-1" size={18} />
                  <span className="text-gray-600">+1 (555) 123-4567</span>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Newsletter</h3>
              <p className="text-gray-600 mb-4">Subscribe to our newsletter for updates.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 border border-rose-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-rose-400 flex-grow"
                />
                <button className="bg-rose-400 hover:bg-rose-500 text-white px-4 py-2 rounded-r-md transition-colors">
                  <Send size={18} />
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t-2 border-rose-500 pt-6 pb-2">
            <p className="text-center text-gray-600">© {new Date().getFullYear()} RoyalTrails. All rights reserved.</p>
          </div>
        </div>
      </div>
      </>
  )
}

export default Footer