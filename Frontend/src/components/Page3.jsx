import React from 'react';
import Card1 from './cards/card1';
import Card2 from './cards/card2';
import Card3 from './cards/card3';
import Card4 from './cards/card4';
import Card5 from './cards/card5';
import { Car } from 'lucide-react';
import AllCards from './cards/AllCards';
const Page3 = () => {
  return (
    <div className="min-h-screen w-full px-0 py-10 bg-white ">
      {/* Heading */}
      <div className="">
        <h1 className="text-2xl text-center sm:text-4xl md:text-4xl font-normal tracking-tighter text-darkblue">
          Our Curated Tours
        </h1>
        <p className="text-center text-xs lg:text-lg md:text-m  text-lightblue">
          Experience our city with us.
        </p>
      </div>

      {/* Tour Cards */}
      <div className="">
       <AllCards/>
      </div>
    </div>
  );
};

export default Page3;
 