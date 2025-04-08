import React, { useState } from "react";
import { Plane, RailSymbol, Bus } from "lucide-react";

import jaipurData from "/src/data/jaipurData.js";
import jaipurfest from "/src/data/jaipurfest.js";

const Jaipur = () => {
  const [elements, setElements] = useState(3);

  const sliceData = jaipurData.slice(0, elements);
  const handleSeeMore = () => {
    setElements(elements + 3);
  };
  return (
    <>
      <div className=" w-full flex flex-col justify-center items-center bg-orange-200 ">
        <div className="">
          <img src="/jaipur/hm.jpg" alt="" className="" />
        </div>
        <div className="h-screen w-full text-center flex flex-col justify-center items-center relative overflow-hidden">
          <div className="max-w-6xl flex flex-col justify-center items-center gap-4 p-10 z-50">
            <h1 className="text-7xl mb-5">JAIPUR</h1>
            <p className="text-4xl">The Pink City of Royal Elegance</p>
            <p className="text-2xl">
              {" "}
              Jaipur, famously known as The Pink City, is the vibrant capital of
              Rajasthan that beautifully blends royal heritage with modern
              charm. Established in 1727 by Maharaja Sawai Jai Singh II, Jaipur
              is India’s first planned city, known for its symmetrical layout
              and iconic terracotta-pink buildings. The city is a treasure trove
              of architectural wonders — from the delicate windows of Hawa Mahal
              to the hilltop grandeur of Amer Fort, and the celestial precision
              of Jantar Mantar to the regal elegance of the City Palace. Every
              monument speaks of a glorious past and offers a glimpse into the
              opulence of Rajputana history. Beyond its historical landmarks,
              Jaipur is alive with color, culture, and craft. Traditional
              bazaars bustle with artisans selling block prints, blue pottery,
              and silver jewelry, while street food stalls serve up spicy
              kachoris and sweet ghewar. The city’s spirit shines brightest
              during its festivals — be it the lively Teej, dazzling Diwali, or
              the globally renowned Jaipur Literature Festival. Whether you’re
              exploring hidden alleys, watching the sunset from Nahargarh Fort,
              or simply soaking in the city’s warm hospitality, Jaipur promises
              an experience full of wonder, tradition, and unforgettable
              memories.
            </p>
          </div>
          {/* <img src="/jaipur/mandal.png" alt="" className="absolute opacity-30 -bottom-40 h-80"/> */}
          <img
            src="/jaipur/mandal.png"
            alt=""
            className="absolute opacity-30 -top-40 h-80"
          />
        </div>

        <div className=" max-w-7xl text-center">
          <h1 className="text-3xl font-semibold mb-10">
            {" "}
            ATTRACTIONS & PLACES TO VISIT AND EXPLORE IN JAIPUR
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl lg:grid-cols-3 gap-10 ">
            {sliceData.map((item, id) => (
              <div
                className="flex flex-col justify-center items-center gap-4 rounded-2xl overflow-hidden border-orange-300 "
                key={id}
              >
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-80 object-cover rounded-2xl border-2 border-yellow-700 shadow-lg"
                />
                <p className="text-xl font-bold">{item.title}</p>
              </div>
            ))}
          </div>
          {elements < jaipurData.length && (
            <div className="flex justify-center items-center p-10">
              <button
                onClick={handleSeeMore}
                className="bg-amber-100 border-2 border-yellow-700 text-black shadow-lg w-40 h-10 hover:bg-orange-300 transition duration-200 cursor-pointer font-bold py-2 px-4 rounded-full"
              >
                See More Places
              </button>
            </div>
          )}
        </div>

        <div className="max-w-7xl text-center ">
          <h1 className="text-3xl font-semibold mb-10"> FESTIVALS & EVENT</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl lg:grid-cols-2 gap-4 ">
            {jaipurfest.map((item, id) => (
              <div
                className="flex flex-col justify-center items-center gap-4 rounded-2xl overflow-hidden border-orange-300"
                key={id}
              >
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-80 object-cover rounded-2xl border-2 border-yellow-700 shadow-lg"
                />
                <p className="text-xl font-bold mb-5">{item.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl text-center flex flex-row gap-10  justify-between items-center  my-5 rounded-2xl  p-10">
          <img src="/rajmap.png" alt="" className="h-160" />

          <div className="flex flex-col justify-center rounded-3xl gap-2 items-center p-10 bg-orange-50">
            <h1 className="text-3xl font-semibold mb-5">How to Reach Jaipur</h1>
            <hr className="bg-black w-full" />
            <div className="flex justify-center items-center gap-4 ">
              <Plane className="h-40 w-40 text-black" />
              <p class>
                {" "}
                Jaipur International Airport (JAI) is located around 13 km from
                the city center. It has regular domestic flights from cities
                like Delhi, Mumbai, Bangalore, Kolkata, and international
                connections to Dubai, Muscat, and more.{" "}
              </p>
            </div>
            <hr className="bg-black w-full" />
            <div className="flex justify-center items-center gap-4">
              <RailSymbol className="h-40 w-40 text-black" />
              <p>
                {" "}
                Jaipur Junction is a major railway station on the Indian Railways
                network. Several express and superfast trains like Shatabdi,
                Rajdhani, and Intercity connect Jaipur to Delhi, Agra, Mumbai,
                Ahmedabad, and other cities{" "}
              </p>
            </div>
            <hr className="bg-black w-full" />
            <div className="flex justify-center items-center gap-4 ">
              <Bus className="h-40 w-40 text-black" />
              <p>
                {" "}
                Jaipur is well-connected by national highways. Regular buses
                (including Volvo, deluxe, and sleeper options) run by RSRTC and
                private operators are available from nearby cities.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Jaipur;
