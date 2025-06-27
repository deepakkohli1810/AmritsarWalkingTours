// src/pages/TourDetailsPage.jsx
import React, { useState } from "react";
import {
  Star, Share, Heart, ChevronLeft, ChevronRight, Calendar,
  Users, Clock, Check, X, ChevronDown, ChevronUp, MapPin, Info
} from "lucide-react";
import Navbar from "../Navbar";

// Reusable Button component
const Button = ({ children, className = "", variant = "default", ...props }) => {
  const base = "px-4 py-2 rounded-md text-sm font-medium transition";
  const variants = {
    default: "bg-darkblue hover:bg-lightblue text-white",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

// Reusable Card component
const Card = ({ children, className = "" }) => (
  <div className={`bg-white shadow-md rounded-2xl ${className}`}>
    {children}
  </div>
);

// Hero section with image slider
const TourHero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "/public/assets/photos/golden temple.png",
    "https://res.cloudinary.com/dmgib4rwd/video/upload/q_auto,f_auto,vc_auto/ac_none/v1750484097/goldentemplecard_ohuanw.mp4",
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=800&h=600&fit=crop"
  ];
  const thumbnails = images.map((src) => src.replace("800&h=600", "200&h=150"));

  return (
   
    <section className="mb-12">
      <h1 className="text-3xl sm:text-4xl font-medium text-yellow-600 mb-0 f tracking-normal font-fredoka ">Golden Temple Tour</h1>
      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-700 mb-6">
        <div className="flex items-center gap-1">
          {/* {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-emerald-500 text-emerald-500" />
          ))} */}
          {/* <span className="ml-1 font-medium">14,708 Reviews</span> */}
        </div>
        <span className="text-lightblue"> Walk Alongside a Storytelling Expert

 </span>
        
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="relative h-96 rounded-lg overflow-hidden">
            <img src={images[currentImage]} alt="Tour" className="w-full h-full object-cover" />
            <button onClick={() => setCurrentImage((currentImage - 1 + images.length) % images.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow">
              <ChevronLeft />
            </button>
            <button onClick={() => setCurrentImage((currentImage + 1) % images.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow">
              <ChevronRight />
            </button>
          </div>
          <div className="flex gap-2 mt-4">
            {thumbnails.map((thumb, index) => (
              <img key={index} src={thumb} onClick={() => setCurrentImage(index)}
                className={`w-20 h-16 object-cover rounded-lg cursor-pointer ${currentImage === index ? 'ring-2 ring-darkblue' : ''}`} />
            ))}
          </div>
          <span className="ml-auto mt-10 text-lightblue font-semibold">Book from our site for the discounted prices.</span>
        </div>

        <Card className="p-6 sticky top-6">
          <div className="text-2xl font-semibold">From ₹999 <span className="text-sm font-normal text-gray-600">per person</span></div>
          <div className="grid grid-cols-2 gap-3 my-4 text-sm">
            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" />Friday 27 Jun, 2025</div>
            <div className="flex items-center gap-2"><Users className="w-4 h-4" />2 Guests</div>
          </div>
          <Button className="w-full">Check Availability</Button>
          <p className="mt-4 text-darkblue text-sm">✓ Free cancellation up to 24h before experience starts</p>
        </Card>
      </div>
    </section>
  );
};

// Overview section
const TourOverview = () => {
  const highlights = [
    "Explore Bali with a guide to see some of the island's top sights",
    "Admire architecture, learn about irrigation, and see macaques",
    "Hassle-free round-trip transport",
    "Private tour = personalized service"
  ];
  return (
    <Card className="p-4 mb-12">
      <h2 className="text-3xl font-bold mb-6">Overview</h2>
      <p className="mb-6 text-gray-700">Embark on a soulful journey to the Golden Temple, the holiest shrine of Sikhism. Discover its shimmering beauty, spiritual significance, and the warmth of its people. Explore the largest community kitchen in the world, serving free meals to thousands every day, regardless of religion or background.

Stroll through sacred spaces within the complex, including:

Darbar Sahib – the main sanctum surrounded by the Amrit Sarovar (holy pool)

Akal Takht – the highest seat of Sikh authority and spiritual governance

Langar Hall – where volunteers prepare and serve hot meals with love and equality

Central Sikh Museum – preserving stories of sacrifice, courage, and Sikh heritage

Witness devotion in action, experience true humility, and leave with a sense of peace and belonging..</p>
      <ul className="space-y-2 list-disc ml-5 text-gray-700">
        {highlights.map((h, i) => <li key={i}>{h}</li>)}
      </ul>
    </Card>
  );
};

// Inclusion section
const TourInclusions = () => {
  const included = ["All Fees and Taxes", "Lunch", "Private transportation", "Hotel pickup/drop-off"];
  const excluded = ["Gratuities", "Personal expenses"];
  return (
    <Card className="p-8 mb-12">
      <h2 className="text-3xl font-bold mb-6">What's Included</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="font-semibold text-emerald-700 mb-2">Included</h3>
          <ul className="space-y-2 text-gray-700">
            {included.map((item, i) => (
              <li key={i} className="flex gap-2 items-center">
                <Check className="text-emerald-600 w-4 h-4" />{item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-red-700 mb-2">Not Included</h3>
          <ul className="space-y-2 text-gray-700">
            {excluded.map((item, i) => (
              <li key={i} className="flex gap-2 items-center">
                <X className="text-red-600 w-4 h-4" />{item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
};

// Itinerary section
const TourItinerary = () => {
  const [showAll, setShowAll] = useState(false);
  const stops = [
    { title: "Monkey Forest", duration: "1.5 hrs", admission: "Included" },
    { title: "Rice Terraces", duration: "1 hr", admission: "Included" },
    { title: "Waterfall", duration: "1 hr", admission: "Included" },
    { title: "Temple", duration: "1 hr", admission: "Included" }
  ];
  const visible = showAll ? stops : stops.slice(0, 2);
  return (
    <Card className="p-8 mb-12">
      <h2 className="text-3xl font-bold mb-6">Itinerary</h2>
      <div className="space-y-6">
        {visible.map((stop, i) => (
          <div key={i}>
            <h4 className="text-xl font-semibold">{stop.title}</h4>
            <p className="text-sm text-gray-600">⏱ {stop.duration} • 🎫 {stop.admission}</p>
          </div>
        ))}
        {!showAll && <Button variant="outline" onClick={() => setShowAll(true)}>Show More</Button>}
      </div>
    </Card>
  );
};

// Additional Info section
const TourAdditionalInfo = () => {
  const [expanded, setExpanded] = useState(false);
  const items = [
    "Confirmation will be received at time of booking",
    "Not wheelchair accessible",
    "Stroller accessible",
    "Private tour activity",
    "Moderate physical fitness required",
    "Weather dependent - alternate offered"
  ];
  const visible = expanded ? items : items.slice(0, 4);
  return (
    <Card className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Additional Info</h2>
        <button onClick={() => setExpanded(!expanded)}>
          {expanded ? <ChevronUp /> : <ChevronDown />}
        </button>
      </div>
      <ul className="space-y-3 text-gray-700">
        {visible.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <Info className="w-4 h-4 mt-1 text-blue-600" /> {item}
          </li>
        ))}
      </ul>
    </Card>
  );
};

// Full page
const TourDetailsPage = () => {
  return (
    <>
    <Navbar />
    <div className="max-w-7xl mx-auto px-4 py-10">
      
      <TourHero />
      <TourOverview />
      <TourInclusions />
      <TourItinerary />
      <TourAdditionalInfo />
    </div>
    </>
  );
};

export default TourDetailsPage;
