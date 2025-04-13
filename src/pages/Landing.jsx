import React, { useState, useEffect, useRef } from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import DialogBox from "../components/DialogBox";
import { Dialog, DialogPanel, DialogTitle, Button } from "@headlessui/react";

const Landing = () => {
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
      image: './public/piraj/pow.jpeg',
    },
    {
      id: 'museums',
      title: 'Museums',
      image: './public/piraj/blue.jpg',
    },
    {
      id: 'food',
      title: 'Authentic Food',
      image: './public/piraj/dbc.jpg',
    },
    {
      id: 'festivals',
      title: 'Festivals',
      image: './public/piraj/tej.jpg',
    },
    {
      id: 'fairs',
      title: 'Fairs',
      image: './public/piraj/fair.jpg',
    },
    {
      id: 'wildlife',
      title: 'Wildlife',
      image: './public/piraj/safari.jpg',
    },
    {
      id: 'culturalDance',
      title: 'Cultural Dance',
      image: './public/piraj/dance.jpg',
    },
    // Duplicating items to create continuous scroll effect
    {
      id: 'palaceOnWheels2',
      title: 'Palace on Wheels',
      image: './public/piraj/pow.jpeg',
    },
    {
      id: 'museums2',
      title: 'Museums',
      image: './public/piraj/blue.jpg',
    },
    {
      id: 'food2',
      title: 'Authentic Food',
      image: './public/piraj/dbc.jpg',
    },
    {
      id: 'festivals2',
      title: 'Festivals',
      image: './public/piraj/tej.jpg',
    },
  ];
  
  // Auto-scrolling effect
  useEffect(() => {
    const scroller1 = scrollerRef.current;
    let scrollInterval1;
    
    if (scroller1) {
      // Set initial scroll position for first scroller (right-to-left)
      scroller1.scrollLeft = scroller1.scrollWidth - scroller1.clientWidth;
      
      // First scroller: right to left
      scrollInterval1 = setInterval(() => {
        if (scroller1.scrollLeft <= 0) {
          // Reset to right when we reach left edge
          scroller1.scrollLeft = scroller1.scrollWidth - scroller1.clientWidth;
        } else {
          // Move right to left (decrease value)
          scroller1.scrollLeft -= 1;
        }
      }, 20);
    }
    
    // Cleanup interval when component unmounts
    return () => {
      if (scrollInterval1) clearInterval(scrollInterval1);
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
      
      .fade-edge-left,
      .fade-edge-right {
        position: absolute;
        top: 0;
        height: 100%;
        width: 100px;
        pointer-events: none;
        z-index: 2;
      }
      
      .fade-edge-left {
        left: 0;
        background: linear-gradient(to right, rgb(254 243 199), rgba(254, 243, 199, 0));
      }
      
      .fade-edge-right {
        right: 0;
        background: linear-gradient(to left, rgb(254, 243, 199), rgba(254, 243, 199, 0));
      }
      
      .auto-scroller {
        overflow-x: auto;
        scrollbar-width: none;
        -ms-overflow-style: none;
        width: 100%;
      }
      
      .auto-scroller::-webkit-scrollbar {
        display: none;
      }
      
      .scroller-content {
        display: flex;
        gap: 1rem;
        // padding: 1rem 0;
      }
      
      .scroll-item {
        flex: 0 0 auto;
        border-radius: 1rem;
        overflow: hidden;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease;
      }
      
      .scroll-item:hover {
        transform: translateY(-8px);
      }
      
      .scroll-item-alt {
        transform: scale(0.9);
      }
      
      .scroll-item-alt:hover {
        transform: translateY(-8px) scale(0.9);
      }
    `;
    document.head.appendChild(styleTag);
    
    // Cleanup when component unmounts
    return () => {
      document.head.removeChild(styleTag);
    };
  }, []);
  
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

      {/* <DialogBox /> */}

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

      {/* Popular in Rajasthan - Enhanced scrolling section */}
      <div className="w-full max-w-7xl mt-20 mb-10 py-4 flex flex-col items-center justify-center gap-10">
        <h1 className="text-6xl text-yellow-700 text-bold">
          Popular in Rajasthan
        </h1>

        <div className="scroller-container w-full">
          {/* Faded edges */}
          <div className="fade-edge-left bg-amber-100"></div>
          <div className="fade-edge-right"></div>
          
          {/* Scrolling content */}
          <div 
            ref={scrollerRef}
            className="auto-scroller"
          >
            <div className="scroller-content">
              {popularItems.map((item) => (
                <div
                  key={item.id}
                  className="scroll-item w-84 h-80 bg-gradient-to-b from-yellow-100/30 to-amber-200/30 
                           backdrop-blur-sm border border-yellow-400/30 rounded-3xl flex items-center 
                           justify-center text-xl overflow-hidden font-semibold relative group cursor-pointer"
                  onClick={() => {
                    // Extract the base ID without numbers for dialog opening
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
                    <p className="text-amber-50/90 text-sm mx-4 text-center opacity-0 group-hover:opacity-100 
                                transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                      Click to explore more
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        
      </div>
      
      {/* Keep all dialogs as they were */}
      <Dialog
        open={dialogStates.palaceOnWheels}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={() => closeDialog('palaceOnWheels')}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full md:h-[450px] max-w-[700px] rounded-xl bg-black/30 border border-yellow-300  shadow-lg p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <div className="flex flex-row justify-between items-center">

              <DialogTitle
                as="h3"
                className="text-3xl font-semibold text-yellow-400"
                >
                Place On Wheels
              </DialogTitle>
              <Button
                  className="inline-flex items-center gap-2 rounded-md  py-1.5 px-3 text-lg font-semibold text-white transition cursor-pointer focus:outline-none data-[hover]: data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700 "
                  onClick={() => closeDialog('palaceOnWheels')}
                >
                  X
                </Button>
                </div>
              <p className="mt-2 text-md text-yellow-200 text-justify">
                The Palace on Wheels is a luxury tourist train in India that
                offers a regal travel experience through the heart of
                Rajasthan and other culturally rich destinations. Launched
                in 1982, it is designed to recreate the grandeur of the
                personal carriages once used by the Maharajas of India. The
                train features beautifully decorated cabins, elegant dining
                cars, a lounge, and even a spa, blending heritage charm with
                modern comforts. Its itinerary typically includes stops at
                iconic locations such as Jaipur, Udaipur, Jodhpur, and Agra,
                giving travelers a unique glimpse into India's royal past
                while enjoying world-class hospitality on wheels. Each coach
                of the Palace on Wheels is named after former princely
                states of Rajasthan, such as Alwar, Bikaner, and Jaisalmer,
                and is tastefully adorned with local art, handicrafts, and
                traditional furnishings, giving passengers a sense of the
                region’s cultural richness. The train comprises 14 fully
                air-conditioned deluxe coaches, each equipped with modern
                amenities like Wi-Fi, attached bathrooms, and personal
                attendants, ensuring a comfortable and personalized journey.
                Dining on the Palace on Wheels is an experience in itself.
                The train houses two lavish restaurants—Maharaja and
                Maharani—that serve a mix of Rajasthani, Indian,
                Continental, and Chinese cuisines.
              </p>
              <div className="mt-4">
                
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>

      <Dialog
        open={dialogStates.museums}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={() => closeDialog('museums')}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full md:h-[350px] max-w-[700px] rounded-xl bg-black/30 border border-yellow-300 shadow-lg p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <div className="flex flex-row justify-between items-center">
                <DialogTitle as="h3" className="text-3xl font-semibold text-yellow-400">
                  Museums of Rajasthan
                </DialogTitle>
                <Button
                  className="inline-flex items-center gap-2 rounded-md py-1.5 px-3 text-lg font-semibold text-white transition cursor-pointer focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={() => closeDialog('museums')}
                >
                  X
                </Button>
              </div>
              <p className="mt-2 text-md text-yellow-200 text-justify">
                Rajasthan's museums are treasure troves preserving the state's royal heritage and vibrant history. The City Palace Museum in Jaipur houses royal garments, weapons, and manuscripts, while the Albert Hall Museum displays Indo-Saracenic architecture with collections spanning art, pottery, and ancient coins. The Mehrangarh Fort Museum in Jodhpur exhibits royal palanquins, cradles, and miniature paintings in one of India's best-preserved forts. These institutions offer visitors an immersive journey through Rajasthan's cultural legacy, from royal opulence to folk traditions.
              </p>
            </DialogPanel>
          </div>
        </div>
      </Dialog>

      <Dialog
        open={dialogStates.food}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={() => closeDialog('food')}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full md:h-[350px] max-w-[700px] rounded-xl bg-black/30 border border-yellow-300 shadow-lg p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <div className="flex flex-row justify-between items-center">
                <DialogTitle as="h3" className="text-3xl font-semibold text-yellow-400">
                  Authentic Rajasthani Cuisine
                </DialogTitle>
                <Button
                  className="inline-flex items-center gap-2 rounded-md py-1.5 px-3 text-lg font-semibold text-white transition cursor-pointer focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={() => closeDialog('food')}
                >
                  X
                </Button>
              </div>
              <p className="mt-2 text-md text-yellow-200 text-justify">
                Rajasthani cuisine is a flavorful reflection of the state's arid landscape and royal heritage. Dishes like Dal Baati Churma (lentils with baked wheat balls and sweet crumble), Gatte ki Sabzi (gram flour dumplings in spicy gravy), and Laal Maas (fiery red meat curry) showcase inventive cooking methods developed to overcome scarce water resources. The region's royal kitchens contributed elaborate preparations like Safed Maas (white meat curry) and Ker Sangri (desert beans and berries). Sweet delicacies such as Ghewar, Mawa Kachori, and various milk-based desserts complete this rich culinary tradition that has evolved over centuries.
              </p>
            </DialogPanel>
          </div>
        </div>
      </Dialog>

      <Dialog
        open={dialogStates.festivals}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={() => closeDialog('festivals')}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full md:h-[350px] max-w-[700px] rounded-xl bg-black/30 border border-yellow-300 shadow-lg p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <div className="flex flex-row justify-between items-center">
                <DialogTitle as="h3" className="text-3xl font-semibold text-yellow-400">
                  Festivals of Rajasthan
                </DialogTitle>
                <Button
                  className="inline-flex items-center gap-2 rounded-md py-1.5 px-3 text-lg font-semibold text-white transition cursor-pointer focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={() => closeDialog('festivals')}
                >
                  X
                </Button>
              </div>
              <p className="mt-2 text-md text-yellow-200 text-justify">
                Rajasthan's festivals are vibrant celebrations that showcase the state's rich cultural heritage and traditions. The Desert Festival in Jaisalmer brings the golden sands to life with camel races, folk performances, and turban-tying competitions. Pushkar's Camel Fair combines a livestock trade event with religious rituals and cultural performances, drawing visitors from around the world. Diwali is celebrated with special grandeur in Jaipur, where the entire Pink City glows with oil lamps and fireworks. Teej celebrates the monsoon season and marital felicity with processions featuring a beautifully adorned image of Goddess Parvati. Gangaur honors Lord Shiva and Goddess Parvati, with women carrying decorated images of the goddess in procession, dressed in their finest attire and jewelry.
              </p>
            </DialogPanel>
          </div>
        </div>
      </Dialog>

      <Dialog
        open={dialogStates.fairs}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={() => closeDialog('fairs')}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full md:h-[450px] max-w-[700px] rounded-xl bg-black/30 border border-yellow-300 shadow-lg p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <div className="flex flex-row justify-between items-center">
                <DialogTitle as="h3" className="text-3xl font-semibold text-yellow-400">
                  Traditional Fairs of Rajasthan
                </DialogTitle>
                <Button
                  className="inline-flex items-center gap-2 rounded-md py-1.5 px-3 text-lg font-semibold text-white transition cursor-pointer focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={() => closeDialog('fairs')}
                >
                  X
                </Button>
              </div>
              <p className="mt-2 text-md text-yellow-200 text-justify">
                Rajasthan's traditional fairs are colorful gatherings that blend commerce, culture, and celebration. The famous Pushkar Camel Fair is a 5-day extravaganza where thousands of camels, horses, and cattle are bought and sold amid folk performances, spiritual rituals at the sacred lake, and vibrant market stalls. The Nagaur Cattle Fair is one of India's largest livestock trading events, featuring bullock races and cockfights alongside the trading activities. Kota's Dussehra Mela features magnificent effigies of Ravana that are ceremoniously burned, along with traditional performances and folk art exhibitions. The Kolayat Fair in Bikaner combines a cattle fair with religious rituals at the sacred Kolayat Lake, where devotees take holy dips and float lamps on the water. These fairs offer an authentic glimpse into Rajasthan's rural life, traditions, and the colorful spirit of its people.
              </p>
            </DialogPanel>
          </div>
        </div>
      </Dialog>

      <Dialog
        open={dialogStates.wildlife}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={() => closeDialog('wildlife')}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full md:h-[450px] max-w-[700px] rounded-xl bg-black/30 border border-yellow-300 shadow-lg p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <div className="flex flex-row justify-between items-center">
                <DialogTitle as="h3" className="text-3xl font-semibold text-yellow-400">
                  Wildlife of Rajasthan
                </DialogTitle>
                <Button
                  className="inline-flex items-center gap-2 rounded-md py-1.5 px-3 text-lg font-semibold text-white transition cursor-pointer focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={() => closeDialog('wildlife')}
                >
                  X
                </Button>
              </div>
              <p className="mt-2 text-md text-yellow-200 text-justify">
                Despite its arid landscape, Rajasthan hosts diverse wildlife across its national parks and sanctuaries. Ranthambore National Park, housed within an ancient fort, is famous for its Bengal tigers that can often be spotted amidst historical ruins. Sariska Tiger Reserve offers sightings of leopards, jungle cats, and hyenas, along with the remains of medieval temples. Keoladeo National Park (formerly Bharatpur Bird Sanctuary) is a UNESCO World Heritage site and winter home to thousands of migratory birds, including the rare Siberian crane. Desert National Park showcases unique desert ecology with great Indian bustards, blackbucks, desert foxes, and numerous raptors. The state's conservation efforts have helped preserve endangered species like the Indian wolf, caracal, and gharial, making Rajasthan an important region for wildlife enthusiasts and conservation efforts in India.
              </p>
            </DialogPanel>
          </div>
        </div>
      </Dialog>

      <Dialog
        open={dialogStates.culturalDance}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={() => closeDialog('culturalDance')}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full md:h-[450px] max-w-[700px] rounded-xl bg-black/30 border border-yellow-300 shadow-lg p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <div className="flex flex-row justify-between items-center">
                <DialogTitle as="h3" className="text-3xl font-semibold text-yellow-400">
                  Cultural Dances of Rajasthan
                </DialogTitle>
                <Button
                  className="inline-flex items-center gap-2 rounded-md py-1.5 px-3 text-lg font-semibold text-white transition cursor-pointer focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={() => closeDialog('culturalDance')}
                >
                  X
                </Button>
              </div>
              <p className="mt-2 text-md text-yellow-200 text-justify">
                Rajasthan's folk dances are vibrant expressions of the state's cultural diversity and spirit. The Ghoomar, performed by women in flowing ghagras (skirts), features graceful pirouetting movements and is traditionally associated with the Bhil tribe but was later adopted by Rajput women. Kalbelia, performed by the snake charmer community, mimics serpentine movements with its fluid, swirling black costumes and energetic rhythms, earning UNESCO recognition as an Intangible Cultural Heritage. Kathputli, combining puppetry with dance, tells folkloric stories with intricately crafted marionettes. Chari dance showcases the grace of desert women as they balance brass pots with lit lamps on their heads while performing complex movements. Fire dance (Agni Nritya) originated among the Jasnathis, where performers dance on embers and hold fire in their hands, demonstrating both skill and spiritual devotion. Each dance form reflects specific communities, customs, and historical contexts, making them living museums of Rajasthan's cultural heritage.
              </p>
            </DialogPanel>
          </div>
        </div>
      </Dialog>

      {/* 3rd grid */}

      <div className="w-full h-screen max-w-7xl py-4 flex flex-col items-center justify-center gap-10">
        <h1 className="text-6xl text-yellow-700 text-bold">
          Explore by Themes
        </h1>

        <div className="w-full h-2/3 grid grid-cols-6 grid-rows-3 gap-4 p-2">
          {/* 1 */}
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

          {/* 2 */}
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

          <Link to="nature" className="col-span-2 row-span-2 bg-purple-200 rounded-3xl flex items-center justify-center text-xl font-semibold overflow-hidden relative group cursor-pointer">
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
