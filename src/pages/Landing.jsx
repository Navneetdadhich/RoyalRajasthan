import React, { useState, useEffect, useRef } from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import DialogBox from "../components/DialogBox";
import { Dialog, DialogPanel, DialogTitle, Button } from "@headlessui/react";
import { CityCardSkeleton, PopularItemSkeleton, ThemeCardSkeleton } from "../components/Skeleton";
import RajasthaniLoader from "../components/RajasthaniLoader";
import { motion } from "framer-motion";
import "../styles/loader.css";

const LOADING_TIMES = {
  initialLoad: 4000,    // 4 seconds for main page load
  cities: 2000,         // 2 seconds for cities section
  popular: 2500,        // 2.5 seconds for popular items
  themes: 3000          // 3 seconds for themes section
};

const Landing = () => {
  const [pageLoading, setPageLoading] = useState(true);
  const [dialogStates, setDialogStates] = useState({
    palaceOnWheels: false,
    museums: false,
    food: false,
    festivals: false,
    fairs: false,
    wildlife: false,
    culturalDance: false
  });

  const openDialog = (dialogName) => {
    setDialogStates({ ...dialogStates, [dialogName]: true });
  };

  const closeDialog = (dialogName) => {
    setDialogStates({ ...dialogStates, [dialogName]: false });
  };

  // Create reference for the scroller
  const scrollerRef = useRef(null);

  // Define popular items as an array for easier management
  const popularItems = [
    {
      id: 'palaceOnWheels',
      title: 'Palace on Wheels',
      image: '/piraj/pow.jpeg',
    },
    {
      id: 'museums',
      title: 'Museums',
      image: '/piraj/blue.jpg',
    },
    {
      id: 'food',
      title: 'Authentic Food',
      image: '/piraj/dbc.jpg',
    },
    {
      id: 'festivals',
      title: 'Festivals',
      image: '/piraj/tej.jpg',
    },
    {
      id: 'fairs',
      title: 'Fairs',
      image: '/piraj/fair.jpg',
    },
    {
      id: 'wildlife',
      title: 'Wildlife',
      image: '/piraj/safari.jpg',
    },
    {
      id: 'culturalDance',
      title: 'Cultural Dance',
      image: '/piraj/dance.jpg',
    },
    // Duplicating items to create continuous scroll effect
    {
      id: 'palaceOnWheels2',
      title: 'Palace on Wheels',
      image: '/piraj/pow.jpeg',
    },
    {
      id: 'museums2',
      title: 'Museums',
      image: '/piraj/blue.jpg',
    },
    {
      id: 'food2',
      title: 'Authentic Food',
      image: '/piraj/dbc.jpg',
    },
    {
      id: 'festivals2',
      title: 'Festivals',
      image: '/piraj/tej.jpg',
    },
  ];

  // Auto-scrolling effect
  useEffect(() => {
    const scroller = scrollerRef.current;
    let scrollInterval;
    let isPaused = false;

    if (scroller) {
      // Calculate total scroll width
      const totalWidth = scroller.scrollWidth;
      const viewWidth = scroller.offsetWidth;
      let scrollPosition = 0;
      const scrollSpeed = 1; // Pixels per frame
      
      const scroll = () => {
        if (!isPaused) {
          scrollPosition += scrollSpeed;
          
          // Reset position when reaching the end
          if (scrollPosition >= totalWidth - viewWidth) {
            scrollPosition = 0;
          }
          
          scroller.scrollLeft = scrollPosition;
        }
      };

      // Start scrolling animation
      scrollInterval = setInterval(scroll, 30);

      // Add pause on hover
      scroller.addEventListener('mouseenter', () => isPaused = true);
      scroller.addEventListener('mouseleave', () => isPaused = false);
    }

    return () => {
      if (scrollInterval) {
        clearInterval(scrollInterval);
      }
    };
  }, []);

  // Add CSS for the scrolling container with faded edges
  useEffect(() => {
    // Add a style tag to the document head
    const styleTag = document.createElement('style');
    styleTag.innerHTML = `
      .scroller-container {
        position: relative;
        width: 100%;
        overflow: hidden;
        margin-bottom: 1rem;
      }
      
      .auto-scroller {
        overflow-x: hidden;
        width: 100%;
        scroll-behavior: smooth;
      }
      
      .scroller-content {
        display: flex;
        gap: 1rem;
        padding: 1rem;
        animation: scroll 50s linear infinite;
      }
      
      @keyframes scroll {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }

      .fade-edge-left,
    .fade-edge-right {
      position: absolute;
      top: 0;
      bottom: 0;
      width: 100px;
      pointer-events: none;
      z-index: 10;
    }

    .fade-edge-left {
      left: 0;
      background: linear-gradient(to right, 
       rgb(254, 243, 199) 0%,
        rgba(254, 243, 199, 0) 100%
      );
    }

    .fade-edge-right {
      right: 0;
      background: linear-gradient(to left, 
        rgb(254, 243, 199) 0%,
        rgba(254, 243, 199, 0) 100%
      );
    }
      
      .scroll-item {
        flex: 0 0 auto;
        min-width: 300px; // Fixed width for each item
        border-radius: 1rem;
        overflow: hidden;
      }
      
      // Pause animation on hover
      .scroller-content:hover {
        animation-play-state: paused;
      }
    `;
    document.head.appendChild(styleTag);

    // Cleanup when component unmounts
    return () => {
      document.head.removeChild(styleTag);
    };
  }, []);

  // Add loading states
  const [loading, setLoading] = useState(true);
  const [popularLoading, setPopularLoading] = useState(true);
  const [themesLoading, setThemesLoading] = useState(true);

  // Simulate loading states
  useEffect(() => {
    // Simulate API calls with custom timings
    setTimeout(() => {
      setLoading(false);
    }, LOADING_TIMES.cities);

    setTimeout(() => {
      setPopularLoading(false);
    }, LOADING_TIMES.popular);

    setTimeout(() => {
      setThemesLoading(false);
    }, LOADING_TIMES.themes);

    // Main page load
    setTimeout(() => {
      setPageLoading(false);
    }, LOADING_TIMES.initialLoad);
  }, []);

  if (pageLoading) {
    return <RajasthaniLoader />;
  }

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

      {/* Popular Cities section with skeleton loading */}
      <div className="w-full h-screen max-w-7xl mt-10 py-4 flex flex-col items-center justify-center gap-10">
        <h1 className="text-6xl text-yellow-700 text-bold">Popular Cities</h1>

        {loading ? (
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
            <CityCardSkeleton /> {/* Chittorgarh */}
            <CityCardSkeleton className="col-span-3" /> {/* Jaipur */}
            <CityCardSkeleton /> {/* Jaisalmer */}
            <CityCardSkeleton className="col-span-2" /> {/* Udaipur */}
            <CityCardSkeleton /> {/* Jodhpur */}
            <CityCardSkeleton className="col-span-2" /> {/* Ajmer */}
          </div>
        ) : (
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
            <Link
              to="/chittorgarh"
              className="col-span-1 h-56 md:h-64 bg-green-200 rounded-3xl flex items-center justify-center text-xl overflow-hidden font-semibold relative group cursor-pointer"
            >
              <img
                src="pcity/chitt.jpeg"
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

            <Link
              to="/jaipur"
              className="col-span-3 h-56 md:h-64 bg-blue-200 rounded-3xl flex items-center justify-center text-xl font-semibold overflow-hidden relative group cursor-pointer"
            >
              <img
                src="pcity/hawamahal.jpg"
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
                src="pcity/jaisalmer.jpg"
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
                src="pcity/1.jpg"
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
                src="pcity/jodhpur.jpg"
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
                src="ajmer/a5.jpeg"
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
        )}
      </div>

      {/* Popular in Rajasthan section with skeleton loading */}
      <div className="w-full max-w-7xl mt-20 mb-10 py-4 flex flex-col items-center justify-center gap-10">
        <h1 className="text-6xl text-yellow-700 text-bold">Popular in Rajasthan</h1>

        <div className="scroller-container w-full">
          <div className="fade-edge-left bg-amber-100"></div>
          <div className="fade-edge-right"></div>
          
          <div ref={scrollerRef} className="auto-scroller">
            <div className="scroller-content">
              {!popularLoading && popularItems.map((item) => (
                <div
                  key={item.id}
                  className="scroll-item w-84 h-80 bg-gradient-to-b from-yellow-100/30 to-amber-200/30 
                            backdrop-blur-sm border border-yellow-400/30 rounded-3xl flex items-center 
                            justify-center text-xl overflow-hidden font-semibold relative group cursor-pointer"
                  onClick={() => {
                    const baseId = item.id.replace(/\d+$/, '');
                    openDialog(baseId);
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent 
                                flex flex-col items-center justify-end pb-8 opacity-100 transition-all duration-300">
                    <p className="text-amber-100 text-3xl font-bold mb-2">
                      {item.title}
                    </p>
                    
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full max-w-7xl mt-20 mb-10 py-4 flex flex-col items-center justify-center gap-10 z-10 border-2 border-yellow-700 rounded-3xl bg-gradient-to-b from-rose-100/30 to-pink-200/30 backdrop-blur-sm shadow-lg">

        
              <img src="/ai.png" alt=""/>
        
              <Link to="/ai" className="flex justify-center items-center text-center rajasthani-button border-0 hover:bg-rose-300 transition duration-300 rounded-full absolute z-50 cursor-pointer -top-25 -right-20">
                Plan With AI
              </Link>
      </div>


      {/* Explore by Themes section with skeleton loading */}
      <div className="w-full h-screen max-w-7xl py-4 flex flex-col items-center justify-center gap-10">
        <h1 className="text-6xl text-yellow-700 text-bold">Explore by Themes</h1>

        {themesLoading ? (
          <div className="w-full h-2/3 grid grid-cols-6 grid-rows-3 gap-4 p-2">
            <ThemeCardSkeleton className="col-span-2 row-span-1" /> {/* Desert */}
            <ThemeCardSkeleton className="col-span-2 row-span-3" /> {/* Food */}
            <ThemeCardSkeleton className="col-span-2 row-span-2" /> {/* Nature */}
            <ThemeCardSkeleton className="col-span-2 row-span-2" /> {/* Culture */}
            <ThemeCardSkeleton className="col-span-2 row-span-1" /> {/* Heritage */}
          </div>
        ) : (
          <div className="w-full h-2/3 grid grid-cols-6 grid-rows-3 gap-4 p-2">
            <Link to="/desert" className="col-span-2 row-span-1 bg-green-200 rounded-3xl flex items-center justify-center text-xl overflow-hidden font-semibold relative group cursor-pointer">
              <img
                src="/ebt/2.jpg"
                alt="Example"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60  flex items-center justify-center opacity-100 transition-opacity duration-300">
                <p className="text-amber-100 text-2xl font-semibold">Desert</p>
              </div>
            </Link>

            <Link to="/food" className="col-span-2 row-span-3 bg-blue-200 rounded-3xl flex items-center justify-center text-xl font-semibold overflow-hidden relative group cursor-pointer">
              <img
                src="/ebt/3.jpg"
                alt="Example"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60  flex items-center justify-center opacity-100 transition-opacity duration-300">
                <p className="text-amber-100 text-2xl font-semibold">Food</p>
              </div>
            </Link>

            <Link to="/nature" className="col-span-2 row-span-2 bg-purple-200 rounded-3xl flex items-center justify-center text-xl font-semibold overflow-hidden relative group cursor-pointer">
              <img
                src="/ebt/4.jpg"
                alt="Example"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60  flex items-center justify-center opacity-100 transition-opacity duration-300">
                <p className="text-amber-100 text-2xl font-semibold">Nature</p>
              </div>
            </Link>

            <Link to="/culture" className="col-span-2 row-span-2 bg-purple-200 rounded-3xl flex items-center justify-center text-xl font-semibold overflow-hidden relative group cursor-pointer">
              <img
                src="/ebt/1.jpg"
                alt="Example"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60  flex items-center justify-center opacity-100 transition-opacity duration-300">
                <p className="text-amber-100 text-2xl font-semibold">Culture</p>
              </div>
            </Link>

            <Link to="/heritage" className="col-span-2 row-span-1 bg-purple-200 rounded-3xl flex items-center justify-center text-xl font-semibold overflow-hidden relative group cursor-pointer">
              <img
                src="/ebt/5.jpg"
                alt="Example"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60  flex items-center justify-center opacity-100 transition-opacity duration-300">
                <p className="text-amber-100 text-2xl font-semibold">Heritage</p>
              </div>
            </Link>
          </div>
        )}
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

            <Link to="/ai"
              className="rajasthani-button relative font-bold text-center py-2 px-8 
  text-black bg-rose-200 border-2 border-white
  rounded-full transition-all duration-200
  hover:bg-rose-200/90 hover:shadow-sm active:scale-95 cursor-pointer"
            >
              Plan Your Trip
            </Link>
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
