import React from "react";
import {Search} from "lucide-react"

const Navbar = () => {
  return (
    <div className="z-50">
      <nav className="navcolor p-4 border-b-4 border-rose-500">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-black text-xl font-bold flex items-center justify-center gap-4 p-1">
            <img src="/turbanman.png" alt="Turban Man" className="h-15" />
            <h1 className="text-2xl">Padharo Sa</h1>
          </div>
          <ul className="flex text-lg space-x-4">
            <li>
              <a href="#" className="text-black hover:text-gray-600">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:text-gray-600">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:text-gray-600">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:text-gray-600">
                Contact
              </a>
            </li>
          </ul>

            {/* <div className="flex items-center border border-black rounded-full bg-transparent gap-2 p-2">
            <Search className="text-black" size={20} />
          <input type="text" placeholder="Search" className="border-transparent focus:outline-none focus:ring-0"/>
            </div> */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
