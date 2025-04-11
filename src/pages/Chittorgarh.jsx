import React, { useState } from "react";
import { Plane, RailSymbol, Bus } from "lucide-react";

import chittorgarhData from "/src/data/chittorgarhData.js";
import chittorgarhfest from "/src/data/chittorgarhfest.js";

const Jaisalmer = () => {
  const [elements, setElements] = useState(3);

  const sliceData = chittorgarhData.slice(0, elements);
  const handleSeeMore = () => {
    setElements(elements + 3);
  };
  return (
    <>
      <div className=" w-full flex flex-col justify-center items-center bg-yellow-100">
        <div className="">
          <img src="/chittor/ch1.jpg" alt="" className="" />
        </div>
        <div className="h-screen w-full text-center flex flex-col justify-center items-center relative overflow-hidden">
          <div className="max-w-6xl flex flex-col justify-center items-center gap-4 p-10 z-50">
            <h1 className="text-7xl mb-5">CHITTORGARH</h1>
            <p className="text-4xl">The Land of Courage and Glory</p>
            <p className="text-2xl">
              {" "}
              Chittorgarh, located in the southern part of Rajasthan, is one of
              the most historically significant cities in India. Once the
              capital of the Mewar Kingdom, it is renowned for its grand
              Chittorgarh Fort, which is the largest fort in India and a UNESCO
              World Heritage Site. The city echoes stories of Rajput bravery,
              sacrifice, and honor, especially those of legendary figures like
              Rani Padmini, Maharana Pratap, and Meera Bai. Its ancient palaces,
              intricately carved temples, and majestic towers like the Vijay
              Stambh (Victory Tower) stand as proud reminders of its glorious
              past. Apart from its historical importance, Chittorgarh is also a
              cultural gem of Rajasthan. The city hosts vibrant fairs and
              festivals such as the Jauhar Mela and Meera Mahotsav, celebrating
              its heritage with traditional music, dance, and rituals.
              Surrounded by scenic landscapes and wildlife sanctuaries like
              Bassi Sanctuary, Chittorgarh also appeals to nature lovers. With
              its timeless charm, valorous history, and spiritual aura,
              Chittorgarh remains a must-visit destination for anyone wanting to
              experience the royal soul of Rajasthan.
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
            ATTRACTIONS & PLACES TO VISIT AND EXPLORE IN CHITTORGARH
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
          {elements < chittorgarhData.length && (
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

        <div className="max-w-7xl text-center mt-10">
          <h1 className="text-3xl font-semibold mb-10"> FESTIVALS & EVENT</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl lg:grid-cols-2 gap-4 ">
            {chittorgarhfest.map((item, id) => (
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

        <div className="max-w-7xl text-center flex flex-row gap-10  justify-center items-center  my-5 rounded-2xl p-10  mb-10">
          <img src="/udaipur/udmap.png" alt="" className="h-160" />

          <div className="flex flex-col justify-center bg-yellow-200 border-2 border-yellow-700 rounded-3xl gap-2 items-center p-10">
            <h1 className="text-3xl font-semibold mb-5">
              How to Reach Chittorgarh
            </h1>
            <hr className="bg-black w-full" />
            <div className="flex justify-center items-center gap-4 ">
              <Plane className="h-40 w-40 text-black" />
              <p className="text-justify">
                {" "}
                Nearest Airport: Maharana Pratap Airport, Udaipur (about 90 km
                away). Udaipur is connected to major cities like Delhi, Mumbai,
                Jaipur, and more. From the airport, you can hire a taxi or take
                a bus to reach Chittorgarh in about 1.5–2 hours{" "}
              </p>
            </div>
            <hr className="bg-black w-full" />
            <div className="flex justify-center items-center gap-4">
              <RailSymbol className="h-40 w-40 text-black" />
              <p className="text-justify">
                {" "}
                Chittorgarh Railway Station is well-connected to major cities
                like Delhi, Udaipur, Jaipur, Mumbai, and Ahmedabad. Frequent
                trains such as Chetak Express, Mewar Express, and Udaipur City
                Express run regularly{" "}
              </p>
            </div>
            <hr className="bg-black w-full" />
            <div className="flex justify-center items-center gap-4 ">
              <Bus className="h-40 w-40 text-black" />
              <p className="text-justify">
                {" "}
                chittorgarh is well-connected by national highways. Regular
                buses (including Volvo, deluxe, and sleeper options) run by
                RSRTC and private operators are available from nearby cities.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Jaisalmer;
