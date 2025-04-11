import React, { useState } from "react";
import { Plane, RailSymbol, Bus } from "lucide-react";

import udaipurData from "/src/data/udaipurData.js";
import udaipurfest from "/src/data/udaipurfest.js";

const Udaipur = () => {
  const [elements, setElements] = useState(3);

  const sliceData = udaipurData.slice(0, elements);
  const handleSeeMore = () => {
    setElements(elements + 3);
  };
  return (
    <>
      <div className=" w-full flex flex-col justify-center items-center bg-yellow-50">
        <div className="">
          <img src="/udaipur/main.jpg" alt="" className="" />
        </div>
        <div className="h-screen w-full text-center flex flex-col justify-center items-center relative overflow-hidden">
          <div className="max-w-6xl flex flex-col justify-center items-center gap-4 p-10 z-50">
            <h1 className="text-7xl mb-5">UDAIPUR</h1>
            <p className="text-4xl">The City of Lakes</p>
            <p className="text-2xl">
              {" "}
              Often referred to as the "City of Lakes," Udaipur is one of the
              most enchanting destinations in India, known for its tranquil
              waters, romantic ambiance, and regal charm. Located in southern
              Rajasthan, Udaipur is surrounded by the Aravalli hills and boasts
              several stunning lakes, including Lake Pichola, Fateh Sagar, and
              Udai Sagar. The city is famed for its spectacular palaces and
              intricate architecture—most notably the Lake Palace, seemingly
              floating on Lake Pichola, and the City Palace, a sprawling complex
              that beautifully blends Rajasthani and Mughal design. With vibrant
              bazaars, cultural performances, and peaceful boat rides, Udaipur
              offers a magical experience that feels like stepping into a royal
              era. Historically, Udaipur was founded in 1559 by Maharana Udai
              Singh II, the ruler of the Mewar kingdom. After the threat of
              Mughal invasion in Chittorgarh, he moved his capital to the lush
              Girwa Valley and established Udaipur. The city became a stronghold
              of Rajput resistance against Mughal rule, known for the valor and
              independence of its rulers. Today, its legacy is reflected in the
              grand palaces, museums, and traditions that keep the Rajputana
              spirit alive, making it a must-visit for history lovers and
              cultural explorers alike
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
            ATTRACTIONS & PLACES TO VISIT AND EXPLORE IN UDAIPUR
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
          {elements < udaipurData.length && (
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
            {udaipurfest.map((item, id) => (
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

          <div className="flex flex-col justify-center rounded-3xl gap-2 items-center p-10 bg-amber-100 border-2 border-yellow-700 shadow-lg">
            <h1 className="text-3xl font-semibold mb-5">
              How to Reach Udaipur
            </h1>
            <hr className="bg-black w-full" />
            <div className="flex justify-center items-center gap-4 ">
              <Plane className="h-40 w-40 text-black" />
              <p>
                {" "}
                Maharana Pratap Airport (UDR) is located about 22 km from the
                city center. It has regular domestic flights from cities like
                Delhi, Mumbai, Bangalore, Jaipur, and international connections
                to Dubai, Muscat, and more.{" "}
              </p>
            </div>
            <hr className="bg-black w-full" />
            <div className="flex justify-center items-center gap-4">
              <RailSymbol className="h-40 w-40 text-black" />
              <p>
                {" "}
                Udaipur Junction is a major railway station on the Indian
                Railways network. Several express and superfast trains like
                Mewar Express, Udaipur Express, and Intercity connect Udaipur to
                Delhi, Agra, Mumbai, Ahmedabad, and other cities.{" "}
              </p>
            </div>
            <hr className="bg-black w-full" />
            <div className="flex justify-center items-center gap-4 ">
              <Bus className="h-40 w-40 text-black" />
              <p>
                {" "}
                Udaipur is well-connected by national highways. Regular buses
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

export default Udaipur;
