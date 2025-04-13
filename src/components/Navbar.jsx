import React, { useState } from "react";
import { AlignRight, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="z-50 sticky top-0">
      <nav className="navcolor p-4 border-b-4 border-rose-500">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <Link to='/' className="text-black text-xl font-bold flex items-center justify-center gap-4 p-1">
            <img src="/turbanman.png" alt="Turban Man" className="h-15" />
            <h1 className="text-2xl">RoyalTrails</h1>
          </Link>
          <button
            className="text-black md:hidden flex items-center"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <AlignRight className="w-6 h-6" />}
          </button>

          <div className={`md:flex flex-col md:flex-row items-center justify-between gap-4 w-full md:w-auto ${isMenuOpen ? 'flex' : 'hidden'}`}>
            <ul className="flex flex-col md:flex-row text-lg space-y-4 md:space-y-0 md:space-x-4 w-full md:w-auto mt-4 md:mt-0">
              <li>
                <Link to="/" 
                  className="text-black hover:text-gray-600 block py-2 md:py-0"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" 
                  className="text-black hover:text-gray-600 block py-2 md:py-0"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" 
                  className="text-black hover:text-gray-600 block py-2 md:py-0"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
            <Link 
              to='/ai' 
              className="text-white bg-rose-500 rounded-full font-bold flex items-center justify-center py-2 px-4 hover:bg-red-600 transition duration-300 border-2 border-black my-4 md:my-0"
              onClick={() => setIsMenuOpen(false)}
            >
              AI Planner
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;