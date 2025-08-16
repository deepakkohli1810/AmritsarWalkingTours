import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import BottomBar from "../bottomBar";
import WhyUs from "../WhyUs";

import {

  FaTimes,
} from "react-icons/fa";
import {
  FaCarSide,
  FaShuttleVan,
  FaUserFriends,
} from "react-icons/fa";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import Footer from "../Footer";

// Packages
const packageTours = [
  {
    key: "oneDay",
    title: "One Day Excursion",
    tours: [
      "goldenTemple",
      "jallianwalaBagh",
      "borderTour",
      "partitionMuseum",
    ],
    price: "₹2500",
    description:
      "Golden Temple, Jallianwala Bagh, Border Tour, Partition Museum. Guide & transport included.",
  },
  {
    key: "twoDay",
    title: "Two Day Excursion",
    tours: [
      "foodTour",
      "heritageWalk",
      "durgianaMandir",
      "gobindgarhFort",
    ],
    price: "₹3400",
    description:
      "Food Tour, Border Tour, Heritage Walk, Durgiana Mandir, Gobindgarh Fort. Two days, all inclusive.",
  },
  {
    key: "threeDay",
    title: "Three Day Excursion",
    tours: [
      "villageTour",
      "heritageWalk",
      "shoppingLocalMarket",
      "dropTrainAirport",
    ],
    price: "₹4800",
    description:
      "All tours, shopping, and drop to train/airport for a complete Amritsar experience.",
  },
];

// Vehicles
const vehicles = [
  {
    name: "Sedan",
    icon: <FaCarSide className="text-blue-400 text-2xl" />,
    capacity: "4 persons",
    price: "₹1200",
    desc: "Comfort for small families or couples",
  },
  {
    name: "SUV",
    icon: (
      <FaUserFriends className="text-green-500 text-2xl" />
    ),
    capacity: "6–7 persons",
    price: "₹2000",
    desc: "Larger groups, extra luggage",
  },
  {
    name: "Innova",
    icon: (
      <MdAirlineSeatReclineExtra className="text-yellow-500 text-2xl" />
    ),
    capacity: "7–8 persons",
    price: "₹2500",
    desc: "Spacious and premium ride",
  },
  {
    name: "Tempo Traveller",
    icon: (
      <FaShuttleVan className="text-purple-500 text-2xl" />
    ),
    capacity: "12–16 persons",
    price: "₹4000",
    desc: "Perfect for big groups or family trips",
  },
  {
    name: "No Vehicle Needed",
    icon: (
      <FaUserFriends className="text-gray-400 text-2xl" />
    ),
    capacity: "N/A",
    price: "₹0",
    desc: "You’ll arrange your own transport",
  },
];

// Individual Tour Details
const tourDetails = {
  goldenTemple: {
    title: "Golden Temple Tour",
    img: " /assets/GoldenTemple/photo17.png",
    price: "₹1500",
    includes: "Guided tour, Entry tickets, Refreshments",
    guide:
      "Experienced local guide fluent in English, Hindi, and Punjabi.",
  },
  jallianwalaBagh: {
    title: "Jallianwala Bagh Tour",
    img: "/assets/GoldenTemple/photo14.png",
    price: "₹800",
    includes: "Entry tickets, Guided history walk",
    guide:
      "Expert guide on the history of Jallianwala Bagh.",
  },
  borderTour: {
    title: "Border Tour",
    img: "/public/assets/WagahBorder/photo26.png",
    price: "₹1200",
    includes: "Transport, Entry tickets, Refreshments",
    guide:
      "Professional guide with border history expertise.",
  },
  foodTour: {
    title: "Food Walking Tour",
    img: "/assets/FoodWalk/photo (62).png",
    price: "₹1000",
    includes:
      "Street food tasting, Local guide, Water bottle",
    guide: "Foodie guide with local culinary knowledge.",
  },
  villageTour: {
    title: "Village Tour",
    img: "/public/assets/photos/photo4.png",
    price: "₹1800",
    includes: "Transport, Village activities, Lunch",
    guide: "Local villager guide, English/Hindi spoken.",
  },
  heritageWalk: {
    title: "Heritage Walk",
    img: "/public/assets/photos/photo10.png",
    price: "₹900",
    includes: "Walking tour, Entry tickets, Guidebook",
    guide: "Historian guide, English/Hindi/Punjabi.",
  },
};

// Price Lock Timer Component
const PriceLockTimer = ({
  expiryDate = Date.now() + 10 * 60 * 1000,
}) => {
  const [timeLeft, setTimeLeft] = useState(() => {
    const diff = expiryDate - Date.now();
    return diff > 0 ? Math.floor(diff / 1000) : 0;
  });

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  if (timeLeft <= 0)
    return (
      <span className="text-red-600 font-semibold">
        Price Lock Expired
      </span>
    );

  const mins = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60;
  return (
    <span className="font-medium text-black">
      {mins}:{secs.toString().padStart(2, "0")} left
    </span>
  );
};

// Main Component
const BookNow = () => {
  const [selectedTours, setSelectedTours] = useState({});
  const [selectedPackage, setSelectedPackage] =
    useState(null);
  const [showSummary, setShowSummary] = useState(false);
  const [showVehicleModal, setShowVehicleModal] =
    useState(false);
  const [selectedVehicle, setSelectedVehicle] =
    useState("");
  const [numPersons, setNumPersons] = useState(1);

  // Helper: Extract numeric value from price string
  const parsePrice = (priceStr) =>
    parseInt(priceStr.replace(/[^\d]/g, ""), 10) || 0;

  // Calculate Tour Price Only
  const getTourPriceOnly = () => {
    let total = 0;
    if (selectedPackage) {
      const pkg = packageTours.find(
        (p) => p.key === selectedPackage
      );
      total = pkg ? parsePrice(pkg.price) * numPersons : 0;
    } else {
      Object.entries(selectedTours).forEach(
        ([key, selected]) => {
          if (selected && tourDetails[key]) {
            total += parsePrice(tourDetails[key].price);
          }
        }
      );
      total *= numPersons;
    }
    return `₹${total}`;
  };

  // Get Vehicle Price Only
  const getVehiclePriceOnly = () => {
    if (!selectedVehicle) return "₹0";
    const vehicle = vehicles.find(
      (v) => v.name === selectedVehicle
    );
    return vehicle ? vehicle.price : "₹0";
  };

  // Calculate Final Total (Tour + Vehicle)
  const getTotalPrice = () => {
    const tourTotal = parsePrice(getTourPriceOnly());
    const vehicleTotal = parsePrice(getVehiclePriceOnly());
    return `₹${tourTotal + vehicleTotal}`;
  };

  // List of selected tour keys
  const selectedTourList = Object.entries(selectedTours)
    .filter(([_, selected]) => selected)
    .map(([key]) => key);

  // Handle Package Selection
  const handlePackageSelect = (pkgKey) => {
    setSelectedPackage(pkgKey);
    const pkg = packageTours.find((p) => p.key === pkgKey);
    if (pkg) {
      const updated = {};
      pkg.tours.forEach((tour) => {
        updated[tour] = true;
      });
      setSelectedTours(updated);
      setShowSummary(true);
    }
  };

  // Handle Individual Tour Selection
  const handleTourSelect = (key) => {
    setSelectedPackage(null);
    setSelectedTours((prev) => {
      const updated = { ...prev, [key]: !prev[key] };
      setShowSummary(Object.values(updated).some(Boolean));
      return updated;
    });
  };

  // Remove Tour
  const handleRemoveTour = (key) => {
    setSelectedTours((prev) => {
      const updated = { ...prev, [key]: false };
      setShowSummary(Object.values(updated).some(Boolean));
      return updated;
    });
    if (selectedPackage) setSelectedPackage(null);
  };

  // Remove Package
  const handleRemovePackage = () => {
    setSelectedPackage(null);
    setSelectedTours({});
    setShowSummary(false);
  };

  // No-op for tour modal (disabled)
  const openTourModal = () => {};
  const closeTourModal = () => {};

  return (
    <>
      <Navbar />
      <BottomBar />
      <div className="min-h-screen w-full px-4 py-6 ">
        <h1 className="text-4xl font-normal font-fredoka text-center mb-8 bg-gradient-to-r from-[#332D56] via-[#4E6688] to-[#71C0BB] bg-clip-text text-transparent drop-shadow-lg tracking-tight">
          Book Your Amritsar Adventure
        </h1>

        {/* Packages Section */}
        <section className="mb-16 px-4 sm:px-10">
          <h2 className="text-xl sm:text-xl md:text-2xl lg:text-2xl font-bold mb-6 text-center text-darkblue">
            Choose a Package Curated for You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packageTours.map((pkg) => (
              <div
                key={pkg.key}
                className={`relative rounded-2xl shadow-md border-2 p-6 flex flex-col transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg ${
                  selectedPackage === pkg.key
                    ? "border-darkblue bg-blue-50"
                    : "border-gray-200 bg-white"
                }`}
              >
                {/* Selected Badge */}
                {selectedPackage === pkg.key && (
                  <span className="absolute top-4 right-4 bg-darkblue text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Selected
                  </span>
                )}

                <div className="mb-3">
                  <h3 className="font-bold text-lg text-darkblue">
                    {pkg.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    {pkg.description}
                  </p>
                </div>

                <div className="font-bold text-lg text-lightblue mb-3">
                  {pkg.price}{" "}
                  <span className="text-xs text-gray-500">
                    / person
                  </span>
                </div>

                {/* Tour Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {pkg.tours.map((tourKey) =>
                    tourDetails[tourKey] ? (
                      <span
                        key={tourKey}
                        className="bg-blue-100 text-darkblue px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tourDetails[tourKey].title}
                      </span>
                    ) : (
                      <span
                        key={tourKey}
                        className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs italic"
                      >
                        {tourKey
                          .replace(/([A-Z])/g, " $1")
                          .replace(/^./, (str) =>
                            str.toUpperCase()
                          )}
                      </span>
                    )
                  )}
                </div>

                {/* Person Selector - Only visible when selected */}
                {selectedPackage === pkg.key && (
                  <div className="mb-5">
                    <label className="block font-semibold text-darkblue text-sm mb-2">
                      Number of Persons:
                    </label>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() =>
                          setNumPersons((prev) =>
                            Math.max(1, prev - 1)
                          )
                        }
                        className="w-8 h-8 flex items-center justify-center bg-blue-200 text-darkblue rounded-full hover:bg-blue-300 transition"
                      >
                        −
                      </button>
                      <input
                        type="number"
                        min="1"
                        value={numPersons}
                        onChange={(e) =>
                          setNumPersons(
                            Math.max(
                              1,
                              parseInt(e.target.value) || 1
                            )
                          )
                        }
                        className="w-16 text-center border border-gray-300 rounded-lg py-1 text-darkblue"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setNumPersons((prev) => prev + 1)
                        }
                        className="w-8 h-8 flex items-center justify-center bg-blue-200 text-darkblue rounded-full hover:bg-blue-300 transition"
                      >
                        +
                      </button>
                    </div>
                  </div>
                )}

                {/* Action Button */}
                {selectedPackage === pkg.key ? (
                  <button
                    className="mt-auto px-4 py-2 rounded-lg font-semibold bg-red-100 text-red-700 hover:bg-red-200 transition flex items-center justify-center gap-2"
                    onClick={handleRemovePackage}
                  >
                    <FaTimes /> Remove Package
                  </button>
                ) : (
                  <button
                    className="mt-auto px-4 py-2 rounded-lg font-semibold bg-darkblue text-white hover:bg-darkblue/90 transition"
                    onClick={() =>
                      handlePackageSelect(pkg.key)
                    }
                  >
                    Select Package
                  </button>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="my-8 border-t border-blue-200"></div>

        {/* Individual Tours Section */}
        <section className="px-4 sm:px-10 py-10 bg-white">
          <h2 className="text-xl sm:text-xl md:text-2xl lg:text-2xl font-bold mb-8 text-center text-darkblue">
            Or Build Your Own Tour
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(tourDetails).map(
              ([key, details]) => {
                const isSelected = selectedTours[key];

                return (
                  <div
                    key={key}
                    className={`rounded-2xl border-2 p-0 flex flex-col transition-all duration-300 transform hover:-translate-y-1 cursor-pointer bg-white relative overflow-hidden ${
                      isSelected
                        ? "border-darkblue shadow-xl"
                        : "border-gray-200 shadow-md hover:shadow-lg"
                    }`}
                    onClick={() => openTourModal(key)}
                  >
                    {/* Selected Badge */}
                    {isSelected && (
                      <div className="absolute top-4 right-4 bg-darkblue text-white px-3 py-1 rounded-full text-xs font-semibold z-10">
                        Selected
                      </div>
                    )}

                    {/* Image Container */}
                    <div className="w-full h-48 overflow-hidden rounded-t-2xl">
                      <img
                        src={details.img}
                        alt={details.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        onError={({ currentTarget }) => {
                          currentTarget.src =
                            "/placeholder-tour.jpg"; // Fallback image
                        }}
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      {/* Title */}
                      <h3 className="font-bold text-lg text-darkblue mb-3">
                        {details.title}
                      </h3>

                      {/* Price */}
                      <div className="font-bold text-xl text-lightblue mb-3 flex items-center gap-2">
                        <span>{details.price}</span>
                        <span className="text-xs text-gray-500 font-normal">
                          /person
                        </span>
                      </div>

                      {/* Includes */}
                      <div className="mb-2 text-sm text-gray-600">
                        <span className="font-semibold text-darkblue">
                          Includes:
                        </span>{" "}
                        {details.includes}
                      </div>

                      {/* Guide */}
                      <div className="mb-4 text-sm text-gray-600">
                        <span className="font-semibold text-darkblue">
                          Guide:
                        </span>{" "}
                        {details.guide}
                      </div>

                      {/* Spacer to push buttons to bottom */}
                      <div className="flex-grow"></div>

                      {/* Number of Persons (only if selected) */}
                      {isSelected && (
                        <div className="mb-4">
                          <label className="block font-semibold text-darkblue text-sm mb-2">
                            Number of Persons:
                          </label>
                          <div className="flex items-center gap-3">
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setNumPersons((prev) =>
                                  Math.max(1, prev - 1)
                                );
                              }}
                              className="w-8 h-8 flex items-center justify-center bg-blue-100 text-darkblue rounded-full hover:bg-blue-200 transition"
                            >
                              −
                            </button>
                            <input
                              type="number"
                              min="1"
                              value={numPersons}
                              onChange={(e) => {
                                e.stopPropagation();
                                const val = parseInt(
                                  e.target.value
                                );
                                setNumPersons(
                                  isNaN(val) || val < 1
                                    ? 1
                                    : val
                                );
                              }}
                              className="w-16 text-center border border-gray-300 rounded-lg py-1 text-darkblue focus:outline-none focus:ring-2 focus:ring-darkblue/20"
                            />
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setNumPersons(
                                  (prev) => prev + 1
                                );
                              }}
                              className="w-8 h-8 flex items-center justify-center bg-blue-100 text-darkblue rounded-full hover:bg-blue-200 transition"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      )}

                      {/* Action Button */}
                      <div className="mt-2">
                        {!isSelected ? (
                          <button
                            className="w-full px-4 py-2.5 rounded-lg font-semibold bg-darkblue text-white hover:bg-darkblue/90 transition shadow-sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleTourSelect(key);
                            }}
                          >
                            Book This Tour
                          </button>
                        ) : (
                          <button
                            className="w-full px-4 py-2.5 rounded-lg font-semibold bg-red-100 text-red-700 hover:bg-red-200 transition flex items-center justify-center gap-2"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleRemoveTour(key);
                            }}
                          >
                            <FaTimes /> Remove
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </section>

        {/* Booking Summary Bar */}
        {showSummary && (
          <div className="fixed bottom-0 pb-3 left-0 w-full lg:fixed lg:top-auto lg:right-8 lg:w-1/3 lg:bottom-10 lg:left-auto lg:rounded-2xl bg-white lg:border lg:border-gray-300 lg:shadow-xl lg:bg-white z-50">
            <div className="max-w-3xl mx-auto px-6 pt-2">
              <div className="text-2xl lg:text-3xl font-fredoka font-bold text-darkblue text-center">
                AWT
              </div>
              <div className="flex flex-col items-center mx-auto max-w-xl">
                <span className="flex text-center flex-col  bg-[#fdecea] text-red-700 font-bold px-5 py-1.5 rounded-full text-xs sm:text-xs mb-2   lg:text-xs tracking-wide shadow-sm border border-red-200">
                  LIMITED TIME ONLY
                  <div className="flex items-center gap-2 text-black">
                    Lock Your Price Now!
                    <PriceLockTimer />
                  </div>
                </span>
                <span className="text-lg lg:text-sm font-fredoka text-[#332D56] text-center leading-snug">
                  Unlock Exclusive Savings on Your{" "}
                  <span>Amritsar Adventure</span> — Book
                  Today!
                </span>
              </div>
              <div className="text-xl mt-3 lg:text-m font-fredoka text-gray-800 text-left">
                Booking Summary
              </div>
            </div>

            <div className="max-w-5xl mx-auto flex flex-wrap sm:flex-nowrap items-center justify-between px-6 py-2 pb-4 gap-6 sm:gap-8 lg:gap-12">
              <div className="flex flex-wrap items-center gap-4 flex-1 min-w-0 overflow-hidden max-w-full">
                <span
                  className="font-semibold text-sm md:text-sm text-darkblue truncate"
                  title={
                    selectedPackage
                      ? packageTours.find(
                          (p) => p.key === selectedPackage
                        )?.title
                      : `${selectedTourList.length} Tour${
                          selectedTourList.length > 1
                            ? "s"
                            : ""
                        }`
                  }
                >
                  {selectedPackage
                    ? packageTours.find(
                        (p) => p.key === selectedPackage
                      )?.title
                    : `${selectedTourList.length} Tour${
                        selectedTourList.length > 1
                          ? "s"
                          : ""
                      }`}
                </span>
                <span className="text-gray-600 text-base md:text-sm whitespace-nowrap font-medium">
                  | {numPersons} Person
                  {numPersons > 1 ? "s" : ""}
                </span>

                {selectedPackage ? (
                  <button
                    className="ml-3 flex items-center gap-1 rounded bg-red-100 px-2 py-1 text-red-700 font-semibold text-sm hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
                    onClick={handleRemovePackage}
                    title="Remove Package"
                    type="button"
                  >
                    <FaTimes /> Remove
                  </button>
                ) : (
                  selectedTourList.length > 0 && (
                    <div className="flex flex-wrap gap-2 ml-3 max-w-full overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                      {selectedTourList.map((tourKey) => (
                        <button
                          key={tourKey}
                          className="flex items-center gap-1 rounded bg-red-100 px-3 py-1 text-red-700 font-semibold text-xs md:text-sm whitespace-nowrap hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
                          onClick={() =>
                            handleRemoveTour(tourKey)
                          }
                          title={`Remove ${
                            tourDetails[tourKey]?.title ||
                            tourKey
                          }`}
                          type="button"
                        >
                          <FaTimes />{" "}
                          {tourDetails[
                            tourKey
                          ]?.title.split(" ")[0] || tourKey}
                        </button>
                      ))}
                    </div>
                  )
                )}
              </div>

              <div className="flex flex-col items-end gap-1 mt-4 sm:mt-0 text-sm md:text-base whitespace-nowrap">
                <div className="flex justify-between w-full sm:w-auto">
                  <span className="text-gray-600">
                    Tours:{" "}
                  </span>
                  <span className="font-medium text-darkblue ml-4">
                    {getTourPriceOnly()}
                  </span>
                </div>
                <div className="flex justify-between w-full sm:w-auto">
                  <span className="text-gray-600">
                    Vehicle:{" "}
                  </span>
                  <span className="font-medium text-darkblue ml-4">
                    {getVehiclePriceOnly()}
                  </span>
                </div>
                <div className="border-t border-gray-300 pt-1 w-full sm:w-auto text-right">
                  <span className="font-bold text-xl text-darkblue">
                    Total: {getTotalPrice()}
                  </span>
                </div>
              </div>
            </div>

            <div className="max-w-5xl mx-auto px-6 pt-4">
              <button
                className="w-full px-6 py-3 rounded bg-darkblue text-white font-semibold shadow-md hover:bg-lightblue focus:outline-none focus:ring-4 focus:ring-blue-400 transition text-base"
                onClick={() => setShowVehicleModal(true)}
                type="button"
              >
                Proceed
              </button>
            </div>
          </div>
        )}

        {/* Vehicle Modal */}
        {showVehicleModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 sm:p-6 md:p-8 lg:p-10 overflow-y-auto">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto overflow-hidden">
              <button
                className="absolute top-3 right-3 text-gray-500 hover:text-darkblue text-xl sm:text-2xl transition duration-150"
                onClick={() => setShowVehicleModal(false)}
                aria-label="Close"
              >
                <FaTimes />
              </button>
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-extrabold text-darkblue mb-3 sm:mb-4 md:mb-6 text-center pb-3 border-b border-gray-100 px-4 pt-6">
                Choose Your Vehicle
              </h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setShowVehicleModal(false);
                  const vehicleDetails = vehicles.find(
                    (v) => v.name === selectedVehicle
                  );
                  let bookingData = {};
                  if (selectedPackage) {
                    const pkg = packageTours.find(
                      (p) => p.key === selectedPackage
                    );
                    bookingData = {
                      selectedPackage: {
                        key: pkg.key,
                        title: pkg.title,
                        description: pkg.description,
                        price: pkg.price,
                        tours: pkg.tours.map((tourKey) => ({
                          key: tourKey,
                          ...tourDetails[tourKey],
                        })),
                      },
                    };
                  } else {
                    bookingData = {
                      selectedTours: selectedTourList.map(
                        (tourKey) => ({
                          key: tourKey,
                          ...tourDetails[tourKey],
                        })
                      ),
                    };
                  }
                  bookingData.selectedVehicle =
                    selectedVehicle;
                  bookingData.vehicleDetails = {
                    name: vehicleDetails.name,
                    price: vehicleDetails.price,
                    capacity: vehicleDetails.capacity,
                    desc: vehicleDetails.desc,
                  };
                  bookingData.numPersons = numPersons;
                  bookingData.tourPrice =
                    getTourPriceOnly();
                  bookingData.vehiclePrice =
                    getVehiclePriceOnly();
                  bookingData.totalPrice = getTotalPrice();

                  localStorage.setItem(
                    "bookingDetails",
                    JSON.stringify(bookingData)
                  );
                  window.location.href = "/register";
                }}
                className="px-4 pb-6 sm:px-6"
              >
                <div className="space-y-3 sm:space-y-4 mb-5">
                  {vehicles.map((v) => (
                    <label
                      key={v.name}
                      className={`flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl border cursor-pointer transition ${
                        selectedVehicle === v.name
                          ? "bg-blue-50 border-darkblue/80 ring-2 ring-darkblue/50"
                          : "bg-gray-50 border-transparent hover:border-blue-300"
                      }`}
                    >
                      <input
                        type="radio"
                        name="vehicle"
                        value={v.name}
                        checked={selectedVehicle === v.name}
                        onChange={() =>
                          setSelectedVehicle(v.name)
                        }
                        className="mt-1.5 sm:mt-1 accent-darkblue w-5 h-5"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-lg text-gray-700">
                            {v.icon}
                          </span>
                          <span className="font-bold text-darkblue text-sm sm:text-base md:text-lg truncate">
                            {v.name}
                          </span>
                          <span className="inline-block bg-blue-100 text-blue-700 text-xs sm:text-sm px-2 py-0.5 rounded font-semibold whitespace-nowrap">
                            {v.capacity}
                          </span>
                          <span className="text-green-600 font-bold text-xs sm:text-sm bg-green-50 px-2 py-0.5 rounded whitespace-nowrap">
                            {v.price}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-600 mt-1 line-clamp-2">
                          {v.desc}
                        </p>
                      </div>
                    </label>
                  ))}
                </div>
                <button
                  type="submit"
                  className="w-full px-5 py-3 rounded-lg font-semibold bg-darkblue text-white hover:bg-darkblue/90 active:scale-95 transition-transform duration-150 text-base sm:text-lg shadow-md"
                >
                  Confirm Vehicle
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
      <WhyUs />
      <Footer />
    </>
  );
};

export default BookNow;
