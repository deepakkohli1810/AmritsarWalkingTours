import React from 'react'
import { useNavigate } from "react-router-dom";

const card3 = () => {
    const navigate = useNavigate();
  
  return (
    <div>
             <div className="border-[1px] w-[100%] lg:w-[90%] md:w-[90%] p-1 font-fredoka rounded-3xl border-lightblue shadow-md overflow-hidden hover:shadow-gray-700 hover:shadow-lg hover:scale-[0.9] transition-all duration-200 ease-in-out">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[40vh] object-cover rounded-t-3xl"
          >
            <source src="https://res.cloudinary.com/dmgib4rwd/video/upload/q_auto,f_auto,vc_auto/ac_none/v1750484904/foodcard_qphxet.mp4" type="video/mp4" />
          </video>
          <h1 className="px-4 py-1 text-2xl font-medium tracking-tighter leading-1 text-yellow-500">
           Food Walking Tour
          </h1>
           <p className='ml-4 mb-3 text-lightblue leading-1'>Explore from just ₹999</p>

          <div className="p-4 flex justify-between items-center">
            <button className="text-darkblue text-lg">View Details</button>
            <button className="bg-darkblue px-4 py-2 rounded-3xl text-white">
              Book Now
            </button>
          </div>
        </div>
    </div>
  )
}

export default card3
