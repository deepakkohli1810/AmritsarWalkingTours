import React from "react";
import { Link } from "react-router-dom";

const tours = [
  {
    title: "One Day Excursion",
    subtitle:
      "Experience Amritsar’s iconic landmarks in a single day",
    image: "/assets/photos/photo10.png",
    places: [
      "Golden Temple",
      "Jallianwala Bagh",
      "Partition Museum",
      "Border Ceremony",
    ],
    perks: [
      "English-speaking guide",
      "AC private vehicle",
      "Lunch included",
    ],
    path: "/OneDayExcursion",
  },
  {
    title: "Two Day Excursion",
    subtitle: "Dive into culture, food, and history",
    image: "/assets/photos/photo3.png",
    places: [
      "Heritage Walk",
      "Food Tour",
      "Durgiana Temple",
      "Gobindgarh Fort",
    ],
    perks: [
      "Overnight stay (3-star)",
      "Guided city tour",
      "Breakfast included",
    ],
    path: "/TwoDayExcursion",
  },
  {
    title: "Three Day Excursion",
    subtitle: "A complete immersive journey through Punjab",
    image: "/assets/photos/photo7.png",
    places: [
      "Village Experience",
      "Local Market Shopping",
      "Museum Tour",
      "Wagah Border",
    ],
    perks: [
      "2-night stay",
      "Cultural evening",
      "All meals included",
    ],
    path: "/ThreeDayExcursion",
  },
];

const SuggestiveTours = () => {
  return (
    <section className="min-h-screen w-full px-4 sm:px-6 md:px-10 lg:px-20 xl:px-24 py-12 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-normal inline-block px-2 py-[4px] text-darkblue  ">
          Suggested Tour Packages
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Explore Amritsar and beyond with our handcrafted
          excursions designed for comfort, culture, and
          unforgettable memories.
        </p>
      </div>

      {/* Tour Cards Grid */}
      <div className="grid gap-8 sm:gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {tours.map((tour, idx) => (
          <div
            key={tour.title}
            className="group bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl hover:shadow-blue-100 transition-all duration-500 ease-out transform hover:-translate-y-3"
          >
            {/* Image & Badge */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <span className="absolute top-5 left-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-lg transform transition-transform group-hover:scale-105">
                {tour.title}
              </span>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col">
              <h2 className="text-xl font-bold text-darkblue mb-1">
                {tour.title}
              </h2>
              <p className="text-gray-500 text-sm mb-5">
                {tour.subtitle}
              </p>

              {/* Places */}
              <div className="mb-5">
                <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-2">
                  Places Visited
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tour.places.map((place) => (
                    <span
                      key={place}
                      className="bg-blue-50 text-blue-800 text-xs px-3 py-1 rounded-full font-medium border border-blue-200 group-hover:bg-blue-100 transition-colors"
                    >
                      {place}
                    </span>
                  ))}
                </div>
              </div>

              {/* Perks */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-2">
                  What’s Included
                </h3>
                <ul className="space-y-1.5">
                  {tour.perks.map((perk, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-gray-700 text-sm"
                    >
                      <svg
                        className="w-4 h-4 text-green-500 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              {tour.path ? (
                <Link
                  to={tour.path}
                  className="mt-auto bg-gradient-to-r from-darkblue to-indigo-700 text-white font-semibold py-3 px-6 rounded-full shadow-md hover:shadow-lg hover:from-indigo-700 hover:to-blue-800 transition-all duration-300 text-center transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300"
                >
                  View Full Itinerary
                </Link>
              ) : (
                <button
                  disabled
                  className="mt-auto bg-gray-300 text-gray-500 font-semibold py-3 px-6 rounded-full cursor-not-allowed opacity-60"
                >
                  Coming Soon
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Optional: Call to Action Below */}
      <div className="text-center mt-16">
        <p className="text-gray-600 mb-4">
          Can't find the perfect tour?
        </p>
        <Link
          to="/contact"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-full shadow transition-all duration-300 transform hover:scale-105"
        >
          Customize Your Tour
        </Link>
      </div>
    </section>
  );
};

export default SuggestiveTours;
