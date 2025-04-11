import React from "react";
import { AlignRight } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="z-50">
      <nav className="navcolor p-4 border-b-4 border-rose-500">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <Link to='/' className="text-black text-xl font-bold flex items-center justify-center gap-4 p-1">
            <img src="/turbanman.png" alt="Turban Man" className="h-15" />
            <h1 className="text-2xl">RoyalTrails</h1>
          </Link>
          <button
            className="text-black md:hidden flex items-center"
            onClick={() => document.getElementById("menu").classList.toggle("hidden")}
          >
            <AlignRight className="w-6 h-6" />
          </button>
          <ul
            id="menu"
            className="hidden md:flex text-lg space-x-4 w-full md:w-auto mt-4 md:mt-0"
          >
            <li>
              <Link to="/" className="text-black hover:text-gray-600 block md:inline-block">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-black hover:text-gray-600 block md:inline-block">
                About
              </Link>
            </li>
           
            <li>
              <Link to="/contact" className="text-black hover:text-gray-600 block md:inline-block">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;