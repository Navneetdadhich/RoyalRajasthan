import React, { useState } from "react";
import { Plane, RailSymbol, Bus } from "lucide-react";

import jaisalmerData from "/src/data/jaisalmerData.js";
import jaisalmerfest from "/src/data/jaisalmerfest.js";

const Jaisalmer = () => {
  const [elements, setElements] = useState(3);

  const sliceData = jaisalmerData.slice(0, elements);
  const handleSeeMore = () => {
    setElements(elements + 3);
  };
  return (
    <>
      <div className=" w-full flex flex-col justify-center items-center bg-yellow-50">
        <div className="">
          <img src="/jaisalmer/1.jpg" alt="" className="" />
        </div>
        <div className="h-screen w-full text-center flex flex-col justify-center items-center relative overflow-hidden">
          <div className="max-w-6xl flex flex-col justify-center items-center gap-4 p-10 z-50">
            <h1 className="text-7xl mb-5">JAISALMER</h1>
            <p className="text-4xl"> The Golden Mirage of the Thar Desert</p>
            <p className="text-2xl">
              {" "}
              Jaisalmer, known as the "Golden City" of India, was founded in
              1156 AD by Rawal Jaisal, a Rajput ruler of the Bhati clan. Located
              in the heart of the Thar Desert, the city was established on
              Trikuta Hill for its strategic advantage. The majestic Jaisalmer
              Fort, built with golden-yellow sandstone, became the centerpiece
              of the city and remains one of the largest fully preserved forts
              in the world. During medieval times, Jaisalmer thrived as a key
              stop on ancient trade routes connecting India with Central Asia
              and the Middle East. The city prospered from taxing caravans
              carrying silk, spices, and opium, but also faced several
              invasions, most notably by Alauddin Khilji in the 13th century and
              later by Mughal emperors. Despite these challenges, Jaisalmer
              flourished between the 16th and 18th centuries, with wealthy
              merchants building stunning havelis like Patwon Ki Haveli and
              Salim Singh Ki Haveli, known for their intricate architecture.
              However, the city's importance declined during British rule as
              maritime trade gained prominence. After India gained independence
              in 1947, Jaisalmer merged with the Indian Union in 1949. Its
              strategic border location brought it into focus during the
              Indo-Pak wars of 1965 and 1971. Today, Jaisalmer is a popular
              tourist destination, celebrated for its rich cultural heritage,
              desert landscapes, traditional music, and golden-hued architecture
              that glows beautifully under the desert sun.
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
            ATTRACTIONS & PLACES TO VISIT AND EXPLORE IN JAISALMER
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
          {elements < jaisalmerData.length && (
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
            {jaisalmerfest.map((item, id) => (
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

        <div className="max-w-7xl text-center flex flex-row gap-10  justify-center items-center  my-5 rounded-2xl p-10 mb-10">
          <img src="/jaisalmer/jaimap.png" alt="" className="h-160" />

          <div className="flex flex-col justify-center rounded-3xl bg-amber-100 border-2 border-yellow-700 gap-2 shadow-md items-center p-10">
            <h1 className="text-3xl font-semibold mb-5">
              How to Reach Jaisalmer
            </h1>
            <hr className="bg-black w-full" />
            <div className="flex justify-center items-center gap-4 ">
              <Plane className="h-40 w-40 text-black" />
              <p>
                {" "}
                Jaisalmer Airport (JSA) – only 12 km from the city center and
                operates limited domestic flights mostly from Delhi, Jaipur, and
                Jodhpur, especially during the tourist season (October to
                March).{" "}
              </p>
            </div>
            <hr className="bg-black w-full" />
            <div className="flex justify-center items-center gap-4">
              <RailSymbol className="h-40 w-40 text-black" />
              <p>
                {" "}
                Jaisalmer is well-connected by rail to major cities. From Delhi
                – Overnight trains like the Delhi Jaisalmer Express. From
                Jodhpur, Jaipur, Udaipur, and Agra – regular trains available.
                Jaisalmer Railway Station is about 2 km from the city center.{" "}
              </p>
            </div>
            <hr className="bg-black w-full" />
            <div className="flex justify-center items-center gap-4 ">
              <Bus className="h-40 w-40 text-black" />
              <p>
                {" "}
                Jaisalmer is well-connected by national highways. Regular buses
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

export default Jaisalmer;
