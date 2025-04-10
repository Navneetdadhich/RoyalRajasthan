import React, { useState } from "react";
import { Plane, RailSymbol, Bus } from "lucide-react";

import AjmerData from "/src/data/ajmerData.js";
import Ajmerfest from "/src/data/ajmerfest.js";

const Ajmer = () => {
  const [elements, setElements] = useState(3);

  const sliceData = AjmerData.slice(0, elements);
  const handleSeeMore = () => {
    setElements(elements + 3);
  };
  return (
    <>
      <div className=" w-full flex flex-col justify-center items-center bg-green-100 ">
        <div className="">
          <img src="/ajmer/a1.jpg" alt="" className="" />
        </div>
        <div className="h-screen w-full text-center flex flex-col justify-center items-center relative overflow-hidden">
          <div className="max-w-6xl flex flex-col justify-center items-center gap-4 p-10 z-50">
            <h1 className="text-7xl mb-5">AJMER</h1>
            <p className="text-4xl">
              The Heart of Sufi Soul and Royal Heritage
            </p>
            <p className="text-2xl">
              {" "}
              Ajmer is a historic and spiritual city nestled in the heart of
              Rajasthan, known for its rich heritage, vibrant culture, and
              religious harmony. Surrounded by the Aravalli hills, the city
              holds deep significance for both Hindus and Muslims. It is best
              known for the Ajmer Sharif Dargah, the revered shrine of the Sufi
              saint Khwaja Moinuddin Chishti, which attracts millions of
              devotees from all over the world. Alongside its spiritual charm,
              Ajmer boasts serene lakes like Ana Sagar, impressive forts, Mughal
              architecture, and beautiful temples. Adding to its cultural
              allure, Ajmer is also a gateway to the holy town of Pushkar, just
              a short drive away. The city offers a perfect blend of tradition
              and tranquility, with bustling markets, peaceful gardens, and
              historical landmarks that reflect centuries of diverse influences.
              Whether you're a spiritual seeker, history lover, or cultural
              explorer, Ajmer promises a soulful and memorable experience. Its
              warm hospitality, colorful festivals, and delicious Rajasthani
              cuisine add even more charm to your journey. From sunrise prayers
              to sunset views over the lake, Ajmer leaves a lasting impression
              on every traveler.
            </p>
          </div>
          {/* <img src="/jaipur/mandal.png" alt="" className="absolute opacity-30 -bottom-40 h-80"/> */}
          <img
            src="/ajmer/mandal.png"
            alt=""
            className="absolute opacity-30 -top-40 h-80"
          />
        </div>

        <div className=" max-w-7xl text-center">
          <h1 className="text-3xl font-semibold mb-10">
            {" "}
            ATTRACTIONS & PLACES TO VISIT AND EXPLORE IN AJMER
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
          {elements < AjmerData.length && (
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
            {Ajmerfest.map((item, id) => (
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

        <div className="max-w-7xl text-center flex flex-row gap-10 bg-green-200 border-2 border-yellow-700 justify-center items-center  my-5 rounded-2xl p-10 shadow-lg">
          <img src="/ajmer/ajmermapp.png" alt="" className="h-160" />

          <div className="flex flex-col justify-center rounded-3xl gap-2 items-center p-10">
            <h1 className="text-3xl font-semibold mb-5">How to Reach Ajmer</h1>
            <hr className="bg-black w-full" />
            <div className="flex justify-center items-center gap-4 ">
              <Plane className="h-40 w-40 text-black" />
              <p>
                {" "}
                The nearest airport is Kishangarh Airport (KQH), about 30 km
                from Ajmer, with direct flights from cities like Delhi and
                Mumbai. Alternatively, Jaipur International Airport (135 km
                away) is the better-connected option.{" "}
              </p>
            </div>
            <hr className="bg-black w-full" />
            <div className="flex justify-center items-center gap-4">
              <RailSymbol className="h-40 w-40 text-black" />
              <p>
                {" "}
                Ajmer Junction is a major railway station and is well connected
                to all major cities like Delhi, Jaipur, Mumbai, Ahmedabad,
                Kolkata, and more. Several superfast and express trains such as
                Shatabdi Express, Garib Rath, Ajmer Express, etc., operate
                daily.{" "}
              </p>
            </div>
            <hr className="bg-black w-full" />
            <div className="flex justify-center items-center gap-4 ">
              <Bus className="h-40 w-40 text-black" />
              <p>
                {" "}
                Ajmer is well-connected by national highways. Regular buses
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
export default Ajmer;
