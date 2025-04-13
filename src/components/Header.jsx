import React from 'react';
import { MapPin, Sun, Compass } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-[#1D3557] text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <Compass className="h-8 w-8 text-[#E63946] mr-2" />
          <h1 className="text-xl font-bold">Rajasthan Explorer</h1>
        </div>
        
        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <MapPin className="h-5 w-5 text-[#A8DADC] mr-1" />
            <span className="text-sm">Rajasthan, India</span>
          </div>
          <div className="flex items-center">
            <Sun className="h-5 w-5 text-[#A8DADC] mr-1" />
            <span className="text-sm">Rich Cultural Heritage</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;