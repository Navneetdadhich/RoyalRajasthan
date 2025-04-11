import React, { useState } from "react";
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

      {/* second grid */}

      <div className="w-full h-screen max-w-7xl mt-20 mb-10 py-4 flex flex-col items-center justify-center gap-10">
        <h1 className="text-6xl text-yellow-700 text-bold">
          Popular in Rajasthan
        </h1>

        <div className="w-full h-full grid grid-cols-8 grid-rows-4 gap-4 p-2">
          {/* 1 - Palace on Wheels */}
          <div
            className="col-span-2 row-span-2 bg-green-200 rounded-3xl flex items-center justify-center text-xl overflow-hidden font-semibold relative group cursor-pointer"
            onClick={() => openDialog('palaceOnWheels')}
          >
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

          {/* 2 - Museums */}
          <div 
            className="col-span-2 row-span-2 bg-blue-200 rounded-3xl flex items-center justify-center text-xl font-semibold overflow-hidden relative group cursor-pointer"
            onClick={() => openDialog('museums')}
          >
            <img
              src="./public/piraj/blue.jpg"
              alt="Example"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60  flex items-center justify-center opacity-100 transition-opacity duration-300">
              <p className="text-amber-100 text-2xl font-semibold">Museums</p>
            </div>
          </div>

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

          {/* 3 - Authentic Food */}
          <div 
            className="col-span-2 row-span-3 bg-red-200 rounded-3xl flex items-center justify-center text-xl font-semibold overflow-hidden relative group cursor-pointer"
            onClick={() => openDialog('food')}
          >
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

          {/* 4 - Festivals */}
          <div 
            className="col-span-2 row-span-2 bg-gray-200 rounded-3xl flex items-center justify-center text-xl font-semibold overflow-hidden relative group cursor-pointer"
            onClick={() => openDialog('festivals')}
          >
            <img
              src="./public/piraj/tej.jpg"
              alt="Example"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-100 transition-opacity duration-300">
              <p className="text-amber-100 text-2xl font-semibold">Festivals</p>
            </div>
          </div>

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

          {/* 5 - Fairs */}
          <div 
            className="col-span-4 row-span-2 bg-purple-200 rounded-3xl flex items-center justify-center text-xl font-semibold overflow-hidden relative group cursor-pointer"
            onClick={() => openDialog('fairs')}
          >
            <img
              src="./public/piraj/fair.jpg"
              alt="Example"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-100 transition-opacity duration-300">
              <p className="text-amber-100 text-2xl font-semibold">Fairs</p>
            </div>
          </div>

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

          {/* 6 - Wildlife */}
          <div 
            className="col-span-2 row-span-2 bg-purple-200 rounded-3xl flex items-center justify-center text-xl font-semibold overflow-hidden relative group cursor-pointer"
            onClick={() => openDialog('wildlife')}
          >
            <img
              src="./public/piraj/safari.jpg"
              alt="Example"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-100 transition-opacity duration-300">
              <p className="text-amber-100 text-2xl font-semibold">Wildlife</p>
            </div>
          </div>

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

          {/* 7 - Cultural Dance */}
          <div 
            className="col-span-2 row-span-1 bg-purple-200 rounded-3xl flex items-center justify-center text-xl font-semibold overflow-hidden relative group cursor-pointer"
            onClick={() => openDialog('culturalDance')}
          >
            <img
              src="./public/piraj/dance.jpg"
              alt="Example"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-100 transition-opacity duration-300">
              <p className="text-amber-100 text-2xl font-semibold">
                Cultural Dance
              </p>
            </div>
          </div>

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
