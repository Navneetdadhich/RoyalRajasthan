import React, { useState } from 'react';
import { Calendar, DollarSign, Users, Star, Loader, MapPin, Map } from 'lucide-react';

const ItineraryForm = ({ onSubmit, loading }) => {
  const [formData, setFormData] = useState({
    budget: 50000,
    days: 5,
    hotelStars: 3,
    members: 2,
    startingCity: 'Jaipur',
    selectedCities: ['Jaipur', 'Udaipur', 'Jodhpur'] // Default selected cities
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCitySelection = (e) => {
    const { value, checked } = e.target;
    
    if (checked) {
      // Add city to selection
      setFormData({
        ...formData,
        selectedCities: [...formData.selectedCities, value]
      });
    } else {
      // Remove city from selection
      setFormData({
        ...formData,
        selectedCities: formData.selectedCities.filter(city => city !== value)
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  // List of all Rajasthan cities
  const rajasthanCities = [
    'Jaipur', 'Udaipur', 'Jodhpur', 'Jaisalmer', 'Pushkar', 
    'Bikaner', 'Ajmer', 'Mount Abu', 'Bundi', 'Chittorgarh'
  ];

  return (
    <div className="card">
      <h2 className="text-2xl font-semibold text-[#1D3557] mb-6">
        Enter Your Travel Details
      </h2>
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="flex items-center text-gray-700 font-medium">
              <DollarSign className="h-5 w-5 mr-2 text-[#E63946]" />
              Budget (₹)
            </label>
            <input
              type="number"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              min="10000"
              step="5000"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white/60"
              required
            />
            <p className="text-sm text-gray-500">
              Range : ₹10,000 - ₹200,000
            </p>
          </div>
          
          <div className="space-y-2">
            <label className="flex items-center text-gray-700 font-medium">
              <Calendar className="h-5 w-5 mr-2 text-[#E63946]" />
              Number of Days
            </label>
            <input
              type="number"
              name="days"
              value={formData.days}
              onChange={handleChange}
              min="1"
              max="30"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white/60"
              required
            />
            <p className="text-sm text-gray-500">
              Ideal: 5-10 days to explore major cities
            </p>
          </div>
          
          <div className="space-y-2">
            <label className="flex items-center text-gray-700 font-medium">
              <MapPin className="h-5 w-5 mr-2 text-[#E63946]" />
              Starting City
            </label>
            <select
              name="startingCity"
              value={formData.startingCity}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white/60 appearance-none"
              required
            >
              <option value="Jaipur">Jaipur</option>
              <option value="Jodhpur">Jodhpur</option>
              <option value="Udaipur">Udaipur</option>
              <option value="Jaisalmer">Jaisalmer</option>
              <option value="Pushkar">Pushkar</option>
              <option value="Bikaner">Bikaner</option>
              <option value="Ajmer">Ajmer</option>
              <option value="Mount Abu">Mount Abu</option>
            </select>
            <p className="text-sm text-gray-500">
              Your journey will begin from here
            </p>
          </div>
          
          <div className="space-y-2">
            <label className="flex items-center text-gray-700 font-medium">
              <Star className="h-5 w-5 mr-2 text-[#E63946]" />
              Hotel Preference (Stars)
            </label>
            <select
              name="hotelStars"
              value={formData.hotelStars}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white/60 appearance-none"
              required
            >
              <option value="2">2-Star (Budget)</option>
              <option value="3">3-Star (Standard)</option>
              <option value="4">4-Star (Premium)</option>
              <option value="5">5-Star (Luxury)</option>
            </select>
          </div>
          
          <div className="space-y-2">
            <label className="flex items-center text-gray-700 font-medium">
              <Users className="h-5 w-5 mr-2 text-[#E63946]" />
              Number of Travelers
            </label>
            <input
              type="number"
              name="members"
              value={formData.members}
              onChange={handleChange}
              min="1"
              max="20"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white/60"
              required
            />
          </div>
          
          <div className="space-y-2 md:col-span-2">
            <label className="flex items-center text-gray-700 font-medium">
              <Map className="h-5 w-5 mr-2 text-[#E63946]" />
              Select Cities to Visit
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {rajasthanCities.map(city => (
                <div key={city} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`city-${city}`}
                    name="selectedCities"
                    value={city}
                    checked={formData.selectedCities.includes(city)}
                    onChange={handleCitySelection}
                    className="h-4 w-4 text-amber-600 border-gray-300 rounded focus:ring-amber-500"
                  />
                  <label htmlFor={`city-${city}`} className="ml-2 text-sm text-gray-700">
                    {city}
                  </label>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500">
              Select at least 2 cities for a meaningful itinerary
            </p>
          </div>
        </div>
        
        <div className="mt-8 flex justify-center">
          <button 
            type="submit" 
            className="btn btn-primary flex items-center px-8 py-3 bg-amber-600 text-white rounded-full font-semibold hover:bg-amber-700 transition duration-300 cursor-pointer shadow-md"
            disabled={loading || formData.selectedCities.length < 2}
          >
            {loading ? (
              <>
                <Loader className="animate-spin h-5 w-5 mr-2" />
                Generating Itinerary...
              </>
            ) : (
              'Generate Rajasthan Itinerary'
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ItineraryForm;