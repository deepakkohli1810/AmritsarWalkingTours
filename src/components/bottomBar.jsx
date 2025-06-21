import React from "react";
import { Home, Search, User  , Binoculars ,Contact , Image} from "lucide-react"; // Optional: Replace with your own icons

const BottomBar = () => {
  return (
    <div className="fixed bottom-0 pb-4 sm:pb-0 w-full bg-gray-200 shadow-md p-2 py- flex justify-around items-center sm:hidden z-50">
      <button className=" text-lightblue  flex items-center justify-center flex-col  hover:text-darkblue  ">
        <Home    size={20} />
        <p className=" ">Home</p>
      </button>
        <button className=" text-lightblue  flex items-center justify-center flex-col  hover:text-darkblue ">
        <Binoculars size={20} />
        <p className=" ">Tours</p>
      </button>
         <button className=" text-lightblue flex items-center justify-center flex-col  hover:text-darkblue  ">
      
        <p className=" text-2xl font-fredoka font-semibold ">AWT </p>
      </button>
         <button className=" text-lightblue flex items-center justify-center flex-col  hover:text-darkblue  ">
        <Image size={20} />
        <p className=" ">Gallery 
        </p>
      </button>
       <button className=" text-lightblue flex items-center justify-center flex-col  hover:text-darkblue  ">
        <Contact size={20} />
        <p className=" ">Contact</p>
      </button>
      
   
    </div>
  );
};

export default BottomBar;
