import React from 'react';
import Card1 from './cards/card1';
import Card2 from './cards/card2';
import Card3 from './cards/card3';
import Card4 from './cards/card4';
import Card5 from './cards/card5';
import { Car } from 'lucide-react';
const Page3 = () => {
  return (
    <div className="min-h-screen w-full px-4 py-10 bg-white dark:bg-gray-900 dark:text-white">
      {/* Heading */}
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl ml-4 sm:text-5xl md:text-6xl font-bold tracking-tighter text-darkblue">
          Our Curated Tours
        </h1>
        <p className="ml-5 text-xl text-lightblue">
          Experience our city with us.
        </p>
      </div>

      {/* Tour Cards */}
      <div className="max-w-7xl  mx-auto mt-4 lg:mt-10 md:mt-10 grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 sm:px-10">
    
     <Card1 />
     <Card2 />  
      <Card3 />
      <Card4 />
      <Card5 /> 
      </div>
    </div>
  );
};

export default Page3;
 