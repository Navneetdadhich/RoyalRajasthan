import React from "react";
import Hero from "../components/Hero";
// import { Link } from "lucide-react";
import { Link } from "react-router";
// import TravelSlider from "../components/TravelSlider";
// import { travelSlides } from "../data/travelSlides";
// import { 1 } from "../assets/1.jpg";

const Landing = () => {
  return (
    <div className="bg-amber-100 w-full flex flex-col items-center justify-center">
      <div className="w-full max-w-7xl mx-auto ">
        <Hero />
      </div>

      {/* first grid */}
      <div className="w-full h-screen max-w-7xl mt-10 py-4 flex flex-col items-center justify-center gap-10">
        <h1 className="text-6xl text-yellow-700 text-bold">Popular Cities</h1>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {/* 1 */}
          <Link to="/chittorgarh" className="col-span-1 h-56 md:h-64 bg-green-200 rounded-3xl flex items-center justify-center text-xl overflow-hidden font-semibold relative group cursor-pointer">
            <img
              src="./public/pcity/chitt.jpeg"
              alt="Example"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60  flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-amber-100 text-xl font-semibold">
                Chittorgarh
              </p>
            </div>
          </Link>

          {/* 2 */}
          <Link to="/jaipur" className="col-span-3 h-56 md:h-64 bg-blue-200 rounded-3xl flex items-center justify-center text-xl font-semibold overflow-hidden relative group cursor-pointer">
          {/* <div className="col-span-3 h-56 md:h-64 bg-blue-200 rounded-3xl flex items-center justify-center text-xl font-semibold overflow-hidden relative group cursor-pointer"> */}
            <img
              src="./public/pcity/hawamahal.jpg"
              alt="Example"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            <div className="absolute inset-0 bg-black/60  flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-amber-100 text-xl font-semibold">Jaipur</p>
            </div>
          {/* </div> */}
              </Link>

          <Link to="/jaisalmer" className="col-span-1 sm:col-span-2 md:col-span-1 h-56 md:h-64 bg-red-200 rounded-3xl flex items-center justify-center text-xl font-semibold overflow-hidden relative group cursor-pointer">
            <img
              src="./public/pcity/jaisalmer.jpg"
              alt="Example"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60  flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-amber-100 text-xl font-semibold">Jaisalmer</p>
            </div>
          </Link>

          <Link to="/udaipur" className="col-span-2 h-56 md:h-64 bg-gray-200 rounded-3xl flex items-center justify-center text-xl font-semibold overflow-hidden relative group cursor-pointer">
            <img
              src="./public/pcity/1.jpg"
              alt="Example"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60  flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-amber-100 text-xl font-semibold">Udaipur</p>
            </div>
          </Link>

          <Link to="/jodhpur" className="col-span-1 sm:col-span-1 md:col-span-1 h-56 md:h-64 bg-purple-200 rounded-3xl flex items-center justify-center text-xl font-semibold overflow-hidden relative group cursor-pointer">
            <img
              src="./public/pcity/jodhpur.jpg"
              alt="Example"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60  flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-amber-100 text-xl font-semibold">Jodhpur</p>
            </div>
          </Link>
          <Link to="/kishangarh" className="col-span-1 sm:col-span-2 md:col-span-2 h-56 md:h-64 bg-purple-200 rounded-3xl flex items-center justify-center text-xl font-semibold overflow-hidden relative group cursor-pointer">
            <img
              src="./public/pcity/kishangarh.jpg"
              alt="Example"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60  flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-amber-100 text-xl font-semibold">Kishangarh</p>
            </div>
          </Link>
        </div>
      </div>

      {/* second grid */}

      <div className="w-full h-screen max-w-7xl mt-20 mb-10 py-4 flex flex-col items-center justify-center gap-10">
        <h1 className="text-6xl text-yellow-700 text-bold">
          Popular in Rajasthan
        </h1>

        <div className="w-full h-full grid grid-cols-8 grid-rows-4 gap-4 p-2">
          {/* 1 */}
          <div className="col-span-2 row-span-2 bg-green-200 rounded-3xl flex items-center justify-center text-xl overflow-hidden font-semibold relative group cursor-pointer">
            <img
              src="./public/piraj/pow.jpeg"
              alt="Example"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60  flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-amber-100 text-xl font-semibold">
                Palace on wheels
              </p>
            </div>
          </div>

          {/* 2 */}
          <div className="col-span-2 row-span-2 bg-blue-200 rounded-3xl flex items-center justify-center text-xl font-semibold overflow-hidden relative group cursor-pointer">
            <img
              src="./public/piraj/blue.jpg"
              alt="Example"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60  flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-amber-100 text-xl font-semibold">Museums</p>
            </div>
          </div>

          <div className="col-span-2 row-span-3 bg-red-200 rounded-3xl flex items-center justify-center text-xl font-semibold overflow-hidden relative group cursor-pointer">
            <img
              src="./public/piraj/dbc.jpg"
              alt="Example"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60  flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-amber-100 text-xl font-semibold">
                Authentic Food
              </p>
            </div>
          </div>

          <div className="col-span-2 row-span-2 bg-gray-200 rounded-3xl flex items-center justify-center text-xl font-semibold overflow-hidden relative group cursor-pointer">
            <img
              src="./public/piraj/tej.jpg"
              alt="Example"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60  flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-amber-100 text-xl font-semibold">Festivals</p>
            </div>
          </div>

          <div className="col-span-4 row-span-2 bg-purple-200 rounded-3xl flex items-center justify-center text-xl font-semibold overflow-hidden relative group cursor-pointer">
            <img
              src="./public/piraj/fair.jpg"
              alt="Example"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60  flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-amber-100 text-xl font-semibold">Fairs</p>
            </div>
          </div>

          <div className="col-span-2 row-span-2 bg-purple-200 rounded-3xl flex items-center justify-center text-xl font-semibold overflow-hidden relative group cursor-pointer">
            <img
              src="./public/piraj/safari.jpg"
              alt="Example"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60  flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-amber-100 text-xl font-semibold">Wildlife</p>
            </div>
          </div>

          <div className="col-span-2 row-span-1 bg-purple-200 rounded-3xl flex items-center justify-center text-xl font-semibold overflow-hidden relative group cursor-pointer">
            <img
              src="./public/piraj/dance.jpg"
              alt="Example"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60  flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-amber-100 text-xl font-semibold">
                Cultural Dance
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3rd grid */}

      <div className="w-full h-screen max-w-7xl py-4 flex flex-col items-center justify-center gap-10">
        <h1 className="text-6xl text-yellow-700 text-bold">
          Explore by Themes
        </h1>

        <div className="w-full h-2/3 grid grid-cols-6 grid-rows-3 gap-4 p-2">
          {/* 1 */}
          <div className="col-span-2 row-span-1 bg-green-200 rounded-3xl flex items-center justify-center text-xl overflow-hidden font-semibold relative group cursor-pointer">
            <img
              src="/ebt/2.jpg"
              alt="Example"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60  flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-amber-100 text-xl font-semibold">Desert</p>
            </div>
          </div>

          {/* 2 */}
          <div className="col-span-2 row-span-3 bg-blue-200 rounded-3xl flex items-center justify-center text-xl font-semibold overflow-hidden relative group cursor-pointer">
            <img
              src="/ebt/3.jpg"
              alt="Example"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60  flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-amber-100 text-xl font-semibold">Food</p>
            </div>
          </div>

          <div className="col-span-2 row-span-2 bg-purple-200 rounded-3xl flex items-center justify-center text-xl font-semibold overflow-hidden relative group cursor-pointer">
            <img
              src="/ebt/4.jpg"
              alt="Example"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60  flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-amber-100 text-xl font-semibold">Nature</p>
            </div>
          </div>

          <div className="col-span-2 row-span-2 bg-purple-200 rounded-3xl flex items-center justify-center text-xl font-semibold overflow-hidden relative group cursor-pointer">
            <img
              src="/ebt/1.jpg"
              alt="Example"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60  flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-amber-100 text-xl font-semibold">Culture</p>
            </div>
          </div>

          <div className="col-span-2 row-span-1 bg-purple-200 rounded-3xl flex items-center justify-center text-xl font-semibold overflow-hidden relative group cursor-pointer">
            <img
              src="/ebt/5.jpg"
              alt="Example"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60  flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-amber-100 text-xl font-semibold">Heritage</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-screen max-w-7xl mt-20 mb-10 py-4 flex flex-col items-center justify-center">
        <div className="w-full h-full grid grid-cols-3 grid-rows-2 gap-4 p-2">
          {/* 1 */}
          <div className="col-span-3 row-span-1 bg-orange-400 rounded-3xl flex flex-col gap-10 items-center justify-center text-xl overflow-hidden font-semibold relative group  shadow-lg">
            <div className="flex flex-col items-center justify-center gap-3">
              <h1 className="text-5xl font-semibold">
                Not Sure Where To Start?
              </h1>
              <p className="text-2xl">
                Use our trip planner to create a personalized Rajasthan
                itinerary in minutes.
              </p>
            </div>

            <button className="bg-amber-100 text-yellow-700 p-3 w-50 rounded-full hover:bg-amber-200 transition duration-300 shadow-xl cursor-pointer">
              Plan Your Trip
            </button>
          </div>

          {/* 2 */}
          <div className="col-span-2 row-span-1 bg-amber-300 rounded-3xl flex flex-row p-20 items-center justify-between text-xl font-semibold overflow-hidden relative group  shadow-lg">
            <div className="flex flex-col justify-center gap-2 p-5 w-100">
              <h1 className="text-4xl font-semibold">About us</h1>
              <p className="text-lg text-justify">
                Rajasthan Trails is your go-to trip planning guide to explore
                the rich heritage, culture, and beauty of Rajasthan. We help you
                discover must visit places, local experiences, and travel tips –
                all in one place, without booking hassles.
              </p>
            </div>
            <img src="/turbanman.png" alt="" className="h-80" />
          </div>

          <div className="col-span-1 row-span-1 bg-rose-500 rounded-3xl flex items-center justify-center text-xl font-semibold overflow-hidden relative group shadow-lg">
            <div className="flex flex-col items-center justify-center gap-5 p-2 w-100">
              <h1 className="text-3xl font-semibold">
                Step Into the Royal Journey
              </h1>
              <p className="text-lg text-center">
                Unlock hidden gems, handpicked experiences, and expert tips to
                explore Rajasthan like a local. Join the Rajasthan Trails
                community – your personal trip planner awaits.
              </p>

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
