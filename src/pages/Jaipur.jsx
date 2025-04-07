import React from "react";

const Jaipur = () => {
  return (
    <>
     <div className=" w-full flex flex-col justify-center items-center bg-orange-200 ">
      <div className="">
        <img src="/jaipur/hm.jpg" alt="" className="" />
      </div>
      <div className="h-screen w-full text-center flex flex-col justify-center items-center relative overflow-hidden">
        <div className="max-w-6xl flex flex-col justify-center items-center gap-4 p-10 z-50">
          <h1 className="text-7xl ">JAIPUR</h1>
          <p className="text-4xl">The Pink City of Royal Elegance</p>
          <p className="text-2xl">
            {" "}
            Jaipur, famously known as The Pink City, is the vibrant capital of
            Rajasthan that beautifully blends royal heritage with modern charm.
            Established in 1727 by Maharaja Sawai Jai Singh II, Jaipur is
            India’s first planned city, known for its symmetrical layout and
            iconic terracotta-pink buildings. The city is a treasure trove of
            architectural wonders — from the delicate windows of Hawa Mahal to
            the hilltop grandeur of Amer Fort, and the celestial precision of
            Jantar Mantar to the regal elegance of the City Palace. Every
            monument speaks of a glorious past and offers a glimpse into the
            opulence of Rajputana history. Beyond its historical landmarks,
            Jaipur is alive with color, culture, and craft. Traditional bazaars
            bustle with artisans selling block prints, blue pottery, and silver
            jewelry, while street food stalls serve up spicy kachoris and sweet
            ghewar. The city’s spirit shines brightest during its festivals — be
            it the lively Teej, dazzling Diwali, or the globally renowned Jaipur
            Literature Festival. Whether you’re exploring hidden alleys,
            watching the sunset from Nahargarh Fort, or simply soaking in the
            city’s warm hospitality, Jaipur promises an experience full of
            wonder, tradition, and unforgettable memories.
          </p>
        </div>
          {/* <img src="/jaipur/mandal.png" alt="" className="absolute opacity-30 -bottom-40 h-80"/> */}
          <img src="/jaipur/mandal.png" alt="" className="absolute opacity-30 -top-40 h-80"/>
      </div>

      <div className=" h-screen w-full text-center ">
          <h1 className="text-2xl"> ATTRACTIONS & PLACES TO VISIT AND EXPLORE IN  JAIPUR</h1>
      </div>
    </div> 
    </>
  );
};

export default Jaipur;
