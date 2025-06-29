import React from 'react';
import { Link } from 'react-router-dom';

const tours = [
{
  title: 'One Day Excursion',
  image: '/assets/photos/photo10.png',
  places: ['Golden Temple', 'Jallianwala Bagh', 'Partition Museum', 'Border Tour'],
  perks: ['English speaking guide', 'Comfortable AC car'],
  path: '/OneDayExcursion'
},

  {
    title: 'Two Day Excursion',
    image: '/assets/photos/photo3.png',
    places: ['Food Walking Tour', 'Heritage Walk', 'Durgiana Mandir', 'Gobindgarh Fort'],
    perks: ['English speaking guide', 'Comfortable AC car'],
  path: '/TwoDayExcursion'

  },
  {
    title: 'Three Day Excursion',
    image: '/assets/photos/photo7.png',
    places: ['Village Tour', 'Shopping in Local Market', 'Partition Museum', 'Border Tour'],
    perks: ['English speaking guide', 'Comfortable AC car'],
  },
];

const SuggestiveTours = () => {
  return (
    <div className="min-h-screen w-full px-4 sm:px-8 md:px-16 lg:px-24 py-12 bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <h1 className="text-3xl sm:text-5xl font-medium text-center text-darkblue mb-12 tracking-tight">
        Suggested Packages
      </h1>
      <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {tours.map((tour, idx) => (
          <div
            key={tour.title}
            className="relative group bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden transition-transform hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="h-56 overflow-hidden">
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-4 left-4 bg-darkblue text-white text-xs px-3 py-1 rounded-full shadow">
                {tour.title}
              </span>
            </div>
            <div className="p-6 flex flex-col h-full">
              <h2 className="text-xl font-semibold text-darkblue mb-2 text-center">
                {tour.title}
              </h2>
              <p className="text-center text-gray-500 dark:text-gray-300 mb-4 text-base">
                What's included in this package:
              </p>
              <div>
                <h3 className="text-lg font-medium text-darkblue mb-1">Places</h3>
                <ul className="flex flex-wrap gap-2 mb-4">
                  {tour.places.map((place) => (
                    <li
                      key={place}
                      className="bg-blue-100 text-darkblue px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {place}
                    </li>
                  ))}
                </ul>
                <h3 className="text-lg font-medium text-darkblue mb-1">Other Perks</h3>
                <ul className="mb-6">
                  {tour.perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-2 text-gray-700 dark:text-gray-200 text-sm">
                      <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>
              {tour.path ? (
                <Link
                  to={tour.path}
                  className="bg-darkblue text-white px-5 py-2 rounded-full font-normal shadow hover:bg-darkblue/80 transition-colors duration-200 text-center"
                >
                  View Itinerary
                </Link>
              ) : (
                <button
                  className="bg-darkblue text-white px-5 py-2 rounded-full font-normal shadow opacity-60 cursor-not-allowed"
                  disabled
                >
                  View Itinerary
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuggestiveTours;
