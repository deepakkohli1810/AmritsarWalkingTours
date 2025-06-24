import React from 'react';

const SuggestiveTours = () => {
  return (
    <div className='min-h-screen w-full px-6 sm:px-8 md:px-16 lg:px-24 mt-10'>
      <h1 className="text-2xl ml-4 sm:text-5xl md:text-4xl font-normal tracking-tighter text-darkblue">
        Suggested Packages
      </h1>

      <div className='mt-4 lg:mt-10 md:mt-10   grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {/* CARD 1 */}
        <div className='border-2 shadow-lg p-5 rounded-2xl bg-white dark:bg-gray-800'>
          <h1 className='text-center text-lg font-medium text-gray-700 dark:text-gray-200'>One Day Excursion</h1>
          <img src="/public/assets/photos/photo10.png" className='w-full rounded-xl object-cover' alt="" />
          <h1 className='text-center mt-2 text-2xl font-thin'>What's included in this package.</h1>

          <h1 className='ml-2 mt-5 text-2xl text-darkblue'>Places</h1>
          <div className='flex flex-wrap gap-4 py-3 px-2 text-lightblue text-lg'>
            <span>Golden Temple</span>
            <span>Jallianwala Bagh</span>
            <span>Partition Museum</span>
            <span>Border Tour</span>
          </div>

          <hr className='border-t border-darkblue border-opacity-55 my-3' />

          <h1 className='ml-2 mt-3 text-2xl text-darkblue'>Other Perks</h1>
          <div className='flex flex-col gap-4 sm:flex-row sm:justify-between items-start sm:items-center mt-3'>
            <div>
              <p>English speaking guide</p>
              <p>Comfortable AC car</p>
            </div>
            <button className='bg-darkblue text-white py-2 px-4 mt-2 sm:mt-0 rounded-3xl'>View Itinerary</button>
          </div>
        </div>

        {/* CARD 2 */}
        <div className='border-2 shadow-lg p-5 rounded-2xl bg-white dark:bg-gray-800'>
          <h1 className='text-center text-lg font-medium text-gray-700 dark:text-gray-200'>Two Day Excursion</h1>
          <img src="/public/assets/photos/photo3.png" className='w-full rounded-xl object-cover' alt="" />
          <h1 className='text-center mt-2 text-2xl font-thin'>What's included in this package.</h1>

          <h1 className='ml-2 mt-5 text-2xl text-darkblue'>Places</h1>
          <div className='flex flex-wrap gap-4 py-3 px-2 text-lightblue text-lg'>
            <span>Food Walking Tour</span>
            <span>Heritage Walk</span>
            <span>Durgiana Mandir</span>
            <span>Gobindgarh Fort</span>
          </div>

          <hr className='border-t border-darkblue border-opacity-55 my-3' />

          <h1 className='ml-2 mt-3 text-2xl text-darkblue'>Other Perks</h1>
          <div className='flex flex-col gap-4 sm:flex-row sm:justify-between items-start sm:items-center mt-3'>
            <div>
              <p>English speaking guide</p>
              <p>Comfortable AC car</p>
            </div>
            <button className='bg-darkblue text-white py-2 px-4 mt-2 sm:mt-0 rounded-3xl'>View Itinerary</button>
          </div>
        </div>

        {/* CARD 3 */}
        <div className='border-2 shadow-lg p-5 rounded-2xl bg-white dark:bg-gray-800'>
          <h1 className='text-center text-lg font-medium text-gray-700 dark:text-gray-200'>Three Day Excursion</h1>
          <img src="/public/assets/photos/photo7.png" className='w-full rounded-xl object-cover' alt="" />
          <h1 className='text-center mt-2 text-2xl font-thin'>What's included in this package.</h1>

          <h1 className='ml-2 mt-5 text-2xl text-darkblue'>Places</h1>
          <div className='flex flex-wrap gap-4 py-3 px-2 text-lightblue text-lg'>
            <span>Village Tour</span>
            <span>Shopping in Local Market</span>
            <span>Partition Museum</span>
            <span>Border Tour</span>
          </div>

          <hr className='border-t border-darkblue border-opacity-55 my-3' />

          <h1 className='ml-2 mt-3 text-2xl text-darkblue'>Other Perks</h1>
          <div className='flex flex-col gap-4 sm:flex-row sm:justify-between items-start sm:items-center mt-3'>
            <div>
              <p>English speaking guide</p>
              <p>Comfortable AC car</p>
            </div>
            <button className='bg-darkblue text-white py-2 px-4 mt-2 sm:mt-0 rounded-3xl'>View Itinerary</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuggestiveTours;
