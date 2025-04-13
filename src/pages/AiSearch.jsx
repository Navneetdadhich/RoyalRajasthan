import React, { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import ItineraryForm from '../components/ItineraryForm';
import ItineraryResult from '../components/ItineraryResult';
// import Header from '../components/Header';


function AiSearch() {
  const [loading, setLoading] = useState(false);
  const [itinerary, setItinerary] = useState(null);
  const [error, setError] = useState(null);

  const generateItinerary = async (formData) => {
    setLoading(true);
    setError(null);
    
    try {
      // Initialize the Gemini AI
      const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY || 'YOUR_API_KEY');
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
      
      // Construct the prompt
      const prompt = `
        Create a detailed ${formData.days}-day travel itinerary for ${formData.members} travelers visiting Rajasthan, India.
        
        Budget: ${formData.budget} INR
        Hotel Preference: ${formData.hotelStars} stars
        Starting City: ${formData.startingCity}
        Cities to cover: ${formData.selectedCities.join(', ')}
        
        The itinerary should include:
        1. Day-by-day schedule with morning, afternoon and evening activities
        2. Recommended hotels within the budget (${formData.hotelStars} stars)
        3. Estimated costs for activities, hotels, and meals
        4. Transportation options between cities
        5. Must-visit tourist attractions in each city
        6. Local food recommendations
        7. Cultural experiences unique to Rajasthan
        
        Format the response in well-organized sections with emoji icons for better readability.
      `;
      
      // Generate the response from Gemini AI
      const result = await model.generateContent(prompt);
      const response = result.response;
      const text = response.text();
      
      // Parse and structure the response
      setItinerary({
        plan: text,
        details: formData
      });
    } catch (err) {
      console.error('Error generating itinerary:', err);
      setError('Failed to generate itinerary. Please check your inputs and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* <Header /> */}
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1D3557] text-center mb-8">
            Plan Your Rajasthan Adventure
          </h1>
          
          {!itinerary ? (
            <ItineraryForm onSubmit={generateItinerary} loading={loading} />
          ) : (
            <ItineraryResult 
              itinerary={itinerary} 
              onReset={() => setItinerary(null)} 
            />
          )}
          
          {error && (
            <div className="mt-4 p-4 bg-red-100 border-l-4 border-red-500 text-red-700">
              {error}
            </div>
          )}
        </section>
      </main>
      
      {/* <Footer /> */}
    </div>
  );
}

export default AiSearch;