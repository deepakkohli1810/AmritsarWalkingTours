import React from "react";
import { Link } from "react-router-dom";
import { Home, Binoculars, Contact, Image } from "lucide-react";

const BottomBar = () => {
  return (
    <div className="fixed bottom-2 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-white/60 backdrop-blur-md rounded-2xl shadow-lg flex justify-between items-center px-2 py-2 sm:hidden z-50 border border-gray-200">
      <Link to="/" className="flex flex-col items-center text-darkbluex hover:text-lightblue transition">
        <Home size={19} strokeWidth={1} />
        <span className="text-xs mt-1">Home</span>
      </Link>
      <Link to="/OurTours" className="flex flex-col items-center text-darkbluex hover:text-lightblue transition">
        <Binoculars size={19} strokeWidth={1} />
        <span className="text-xs mt-1">Tours</span>
      </Link>
      <Link to="/AboutUs" className="-mt-8">
  <div className="flex flex-col items-center justify-center bg-white text-darkblue rounded-full w-14 h-14 shadow-lg border-2 font-fredoka border-darkblue">
    <span className="text-lg font-bold tracking-wide">AWT</span>
  </div>
</Link>
      <Link to="/gallery" className="flex flex-col items-center text-darkbluex hover:text-lightblue transition">
        <Image size={19} strokeWidth={1} />
        <span className="text-xs mt-1">Gallery</span>
      </Link>
      <Link to="/contact" className="flex flex-col items-center text-darkbluex hover:text-lightblue transition">
        <Contact size={19} strokeWidth={1} />
        <span className="text-xs mt-1">Contact</span>
      </Link>
    </div>
  );
};

export default BottomBar;
