import React from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className=" w-full flex flex-col items-center justify-center z-5">
      <img
        src="/Mandala.png"
        alt=""
        className="absolute opacity-30 -top-10 -left-15"
      />
      <img
        src="/Mandala.png"
        alt=""
        className="absolute opacity-30 top-140 -right-35"
      />
      <img
        src="/Mandala.png"
        alt=""
        className="absolute opacity-30 top-240 -left-50"
      />
      <img
        src="/Mandala.png"
        alt=""
        className="absolute opacity-30 top-315 -right-70 h-130"
      />
      <img
        src="/Mandala.png"
        alt=""
        className="absolute opacity-30 top-527 -left-50 h-130"
      />
      <img
        src="/Mandala.png"
        alt=""
        className="absolute opacity-30 top-680 -right-30 h-100"
      />
      <img
        src="/Mandala.png"
        alt=""
        className="absolute opacity-30 top-725 -left-4 h-80"
      />
      <img
        src="/Mandala.png"
        alt=""
        className="absolute opacity-30 top-888 right-6 h-60 "
      />
      <div className="w-full mx-auto">
        <Hero />
      </div>

      {/* first grid */}
      <div className="w-full h-screen max-w-7xl mt-10 py-4 flex flex-col items-center justify-center gap-10">
        <h1 className="text-6xl text-yellow-700 text-bold">Popular Cities</h1>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {/* 1 */}
          <Link
            to="/chittorgarh"
            className="col-span-1 h-56 md:h-64 bg-green-200 rounded-3xl flex items-center justify-center text-xl overflow-hidden font-semibold relative group cursor-pointer"
          >
            <img
              src="./public/pcity/chitt.jpeg"
              alt="Example"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60 flex flex-col gap-2 items-center justify-center opacity-100 transition-opacity duration-200 p-4 text-center">
              <p className="text-amber-100 text-2xl font-semibold">
                Chittorgarh
              </p>
              <p className="text-amber-100 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                A majestic fort echoing heroic legends.
              </p>
            </div>
          </Link>

          {/* 2 */}
          <Link
            to="/jaipur"
            className="col-span-3 h-56 md:h-64 bg-blue-200 rounded-3xl flex items-center justify-center text-xl font-semibold overflow-hidden relative group cursor-pointer"
          >
            {/* <div className="col-span-3 h-56 md:h-64 bg-blue-200 rounded-3xl flex items-center justify-center text-xl font-semibold overflow-hidden relative group cursor-pointer"> */}
            <img
              src="./public/pcity/hawamahal.jpg"
              alt="Example"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60 flex flex-col gap-2 items-center justify-center opacity-100 transition-opacity duration-200 p-4 text-center px-20">
              <p className="text-amber-100 text-2xl font-semibold">Jaipur</p>
              <p className="text-amber-100 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Royal elegance wrapped in pink hues. Jaipur is Rajasthan’s
                capital and part of India’s famous Golden Triangle tourist
                route. Known as the Pink City for its blush-colored buildings,
                it was meticulously planned in the 18th century. The city
                balances royal splendor and modern hustle with majestic
                landmarks like Hawa Mahal, Amber Fort, and City Palace.
              </p>
            </div>
          </Link>

          <Link
            to="/jaisalmer"
            className="col-span-1 sm:col-span-2 md:col-span-1 h-56 md:h-64 bg-red-200 rounded-3xl flex items-center justify-center text-xl font-semibold overflow-hidden relative group cursor-pointer"
          >
            <img
              src="./public/pcity/jaisalmer.jpg"
              alt="Example"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60 flex flex-col gap-2 items-center justify-center opacity-100 transition-opacity duration-200 p-4 text-center">
              <p className="text-amber-100 text-2xl font-semibold">Jaisalmer</p>
              <p className="text-amber-100 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Golden sands whispering ancient desert stories.
              </p>
            </div>
          </Link>

          <Link
            to="/udaipur"
            className="col-span-2 h-56 md:h-64 bg-gray-200 rounded-3xl flex items-center justify-center text-xl font-semibold overflow-hidden relative group cursor-pointer"
          >
            <img
              src="./public/pcity/1.jpg"
              alt="Example"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60 flex flex-col gap-2 items-center justify-center opacity-100 transition-opacity duration-200 p-4 text-center">
              <p className="text-amber-100 text-2xl font-semibold">Udaipur</p>
              <p className="text-amber-100 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                City of lakes, romance, and royalty. Nestled between the
                Aravalli hills, Udaipur is often referred to as the Venice of
                the East. It's dotted with serene lakes like Lake Pichola and
                Fateh Sagar.
              </p>
            </div>
          </Link>

          <Link
            to="/jodhpur"
            className="col-span-1 sm:col-span-1 md:col-span-1 h-56 md:h-64 bg-purple-200 rounded-3xl flex items-center justify-center text-xl font-semibold overflow-hidden relative group cursor-pointer"
          >
            <img
              src="./public/pcity/jodhpur.jpg"
              alt="Example"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60 flex flex-col gap-2 items-center justify-center opacity-100 transition-opacity duration-200 p-4 text-center">
              <p className="text-amber-100 text-2xl font-semibold">Jodhpur</p>
              <p className="text-amber-100 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Blue city guarding tales of valor.
              </p>
            </div>
          </Link>
          <Link
            to="/ajmer"
            className="col-span-1 sm:col-span-2 md:col-span-2 h-56 md:h-64 bg-purple-200 rounded-3xl flex items-center justify-center text-xl font-semibold overflow-hidden relative group cursor-pointer"
          >
            <img
              src="./public/ajmer/a5.jpeg"
              alt="Example"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className=" absolute inset-0 bg-black/60 flex flex-col gap-2 items-center justify-center opacity-100 transition-opacity duration-200 p-4 text-center">
              <p className="text-amber-100 text-2xl font-semibold">Ajmer</p>
              <p className="text-amber-100 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Artistic charm steeped in Sufi and royal heritage. Ajmer,
                nestled in the Aravalli hills, is a culturally vibrant city
                known for its deep-rooted traditions in art and architecture.
                From the serene Ana Sagar Lake to the intricate craftsmanship
                seen in Dargah art and Mughal-influenced designs.
              </p>
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
            <div className="absolute inset-0 bg-black/60  flex items-center justify-center opacity-100 transition-opacity duration-300">
              <p className="text-amber-100 text-2xl font-semibold">
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
            <div className="absolute inset-0 bg-black/60  flex items-center justify-center opacity-100 transition-opacity duration-300">
              <p className="text-amber-100 text-2xl font-semibold">Museums</p>
            </div>
          </div>

          <div className="col-span-2 row-span-3 bg-red-200 rounded-3xl flex items-center justify-center text-xl font-semibold overflow-hidden relative group cursor-pointer">
            <img
              src="./public/piraj/dbc.jpg"
              alt="Example"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60  flex items-center justify-center opacity-100 transition-opacity duration-300">
              <p className="text-amber-100 text-2xl font-semibold">
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
            <div className="absolute inset-0 bg-black/60  flex items-center justify-center opacity-100 transition-opacity duration-300">
              <p className="text-amber-100 text-2xl font-semibold">Festivals</p>
            </div>
          </div>

          <div className="col-span-4 row-span-2 bg-purple-200 rounded-3xl flex items-center justify-center text-xl font-semibold overflow-hidden relative group cursor-pointer">
            <img
              src="./public/piraj/fair.jpg"
              alt="Example"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60  flex items-center justify-center opacity-100 transition-opacity duration-300">
              <p className="text-amber-100 text-2xl font-semibold">Fairs</p>
            </div>
          </div>

          <div className="col-span-2 row-span-2 bg-purple-200 rounded-3xl flex items-center justify-center text-xl font-semibold overflow-hidden relative group cursor-pointer">
            <img
              src="./public/piraj/safari.jpg"
              alt="Example"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60  flex items-center justify-center opacity-100 transition-opacity duration-300">
              <p className="text-amber-100 text-2xl font-semibold">Wildlife</p>
            </div>
          </div>

          <div className="col-span-2 row-span-1 bg-purple-200 rounded-3xl flex items-center justify-center text-xl font-semibold overflow-hidden relative group cursor-pointer">
            <img
              src="./public/piraj/dance.jpg"
              alt="Example"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60  flex items-center justify-center opacity-100 transition-opacity duration-300">
              <p className="text-amber-100 text-2xl font-semibold">
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
            <div className="absolute inset-0 bg-black/60  flex items-center justify-center opacity-100 transition-opacity duration-300">
              <p className="text-amber-100 text-2xl font-semibold">Desert</p>
            </div>
          </div>

          {/* 2 */}
          <div className="col-span-2 row-span-3 bg-blue-200 rounded-3xl flex items-center justify-center text-xl font-semibold overflow-hidden relative group cursor-pointer">
            <img
              src="/ebt/3.jpg"
              alt="Example"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60  flex items-center justify-center opacity-100 transition-opacity duration-300">
              <p className="text-amber-100 text-2xl font-semibold">Food</p>
            </div>
          </div>

          <div className="col-span-2 row-span-2 bg-purple-200 rounded-3xl flex items-center justify-center text-xl font-semibold overflow-hidden relative group cursor-pointer">
            <img
              src="/ebt/4.jpg"
              alt="Example"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60  flex items-center justify-center opacity-100 transition-opacity duration-300">
              <p className="text-amber-100 text-2xl font-semibold">Nature</p>
            </div>
          </div>

          <div className="col-span-2 row-span-2 bg-purple-200 rounded-3xl flex items-center justify-center text-xl font-semibold overflow-hidden relative group cursor-pointer">
            <img
              src="/ebt/1.jpg"
              alt="Example"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60  flex items-center justify-center opacity-100 transition-opacity duration-300">
              <p className="text-amber-100 text-2xl font-semibold">Culture</p>
            </div>
          </div>

          <div className="col-span-2 row-span-1 bg-purple-200 rounded-3xl flex items-center justify-center text-xl font-semibold overflow-hidden relative group cursor-pointer">
            <img
              src="/ebt/5.jpg"
              alt="Example"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60  flex items-center justify-center opacity-100 transition-opacity duration-300">
              <p className="text-amber-100 text-2xl font-semibold">Heritage</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-screen max-w-7xl mt-20 mb-10 py-4 flex flex-col items-center justify-center">
        <div className="w-full h-full grid grid-cols-3 grid-rows-2 gap-4 p-2">
          {/* 1 */}
          <div className="col-span-3 row-span-1 bg-orange-400 rounded-3xl flex flex-col gap-10 items-center justify-center text-xl overflow-hidden font-semibold relative group  shadow-lg border-2 border-yellow-700">
            <div className="flex flex-col items-center justify-center gap-3">
              <h1 className="text-5xl font-semibold">
                Not Sure Where To Start?
              </h1>
              <p className="text-2xl">
                Use our trip planner to create a personalized Rajasthan
                itinerary in minutes.
              </p>
            </div>

            <button
              className="rajasthani-button relative font-bold text-center py-2 px-8 
  text-black bg-rose-200 border-2 border-white
  rounded-full transition-all duration-200
  hover:bg-rose-200/90 hover:shadow-sm active:scale-95 cursor-pointer"
            >
              Plan Your Trip
            </button>
          </div>

          {/* 2 */}
          <div className="col-span-2 row-span-1 bg-amber-300 rounded-3xl flex flex-row p-20 items-center justify-between text-xl font-semibold overflow-hidden relative group  shadow-lg border-2 border-yellow-700">
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

          <div className="col-span-1 row-span-1 bg-rose-500 rounded-3xl flex items-center justify-center text-xl font-semibold overflow-hidden relative group shadow-lg border-2 border-yellow-700">
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
