import React from 'react';

const Page2 = () => {
  return (
    <div className="min-h-screen w-full py-8 bg-white dark:bg-gray-900 dark:text-white">
      <div className="flex flex-col lg:flex-row gap-6 lg:px-24 md:px-24 px-8">
        {/* Left Column */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-5xl sm:text-5xl lg:text-6xl font-bold tracking-tight ml-2 mt-8 text-yellow-500 z-10">
            The Amritsar Story.
          </h1>
          <img
            src="/assets/Nihang.png"
            className="w-[60%] object-cover shadow-lg mt-4 "
            alt="Nihang"
          />
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl sm:text-3xl lg:text-3xl font-fredoka font-median  tracking-tighter ml-2 mt-8 lg:mt-32 text-darkblue">
            The culture, history and religion.
          </h2>
          <img
            src="/assets/golden temple.png"
            className="w-full object-cover mt-4 shadow-lg rounded-xl"
            alt="Golden Temple"
          />
          <p className="text-base sm:text-lg lg:text-2xl p-4 sm:p-6 lg:p-10 font-light font-fredoka text-darkblue">
            Amritsar, founded in 1577 by Guru Ram Das, the fourth Sikh Guru, is a spiritual and cultural center of Sikhism. It grew around the Harmandir Sahib (Golden Temple), completed by Guru Arjan in 1604, which houses the Guru Granth Sahib. The city has witnessed pivotal events in Indian history, including the tragic Jallianwala Bagh Massacre in 1919 during British rule. Amritsar played a vital role in India's independence movement and suffered deeply during the Partition of 1947. Today, it stands as a symbol of resilience, devotion, and unity, attracting millions of pilgrims and tourists from around the world each year.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page2;
