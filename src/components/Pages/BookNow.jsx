import React from "react";
import Navbar from "../Navbar";
import BottomBar from "../bottomBar";
import { FaCheckCircle, FaTimes, FaInfoCircle } from "react-icons/fa";

const tourDetails = {
  goldenTemple: {
    title: "Golden Temple Tour",
    img: "/public/assets/GoldenTemple/photo18.png",
    price: "₹1500",
    includes: "Guided tour, Entry tickets, Refreshments",
    guide: "Experienced local guide fluent in English, Hindi, and Punjabi.",
  },
  jallianwalaBagh: {
    title: "Jallianwala Bagh Tour",
    img: "/public/assets/photos/photo10b.jpeg",

    price: "₹800",
    includes: "Entry tickets, Guided history walk",
    guide: "Expert guide on the history of Jallianwala Bagh.",
  },
  partitionMuseum: {
    title: "Partition Museum Tour",
    img: "/public/assets/photos/photo10a.png",
    price: "₹900",
    includes: "Museum entry, Guided tour",
    guide: "Museum guide with deep knowledge of Partition history.",
  },
  borderTour: {
    title: "Border Tour",
    img: "/public/assets/WagahBorder/photo26.png",
    price: "₹1200",
    includes: "Transport, Entry tickets, Refreshments",
    guide: "Professional guide with border history expertise.",
  },
  foodTour: {
    title: "Food Walking Tour",
    img: "/public/assets/photos/photo8.png",
    price: "₹1000",
    includes: "Street food tasting, Local guide, Water bottle",
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

const packageTours = [
  {
    key: "oneDay",
    title: "One Day Excursion",
    tours: ["goldenTemple", "jallianwalaBagh", "partitionMuseum", "borderTour"],
    price: "₹2500",
    description:
      "Golden Temple, Jallianwala Bagh, Partition Museum, Border Tour. Guide & transport included.",
  },
  {
    key: "twoDay",
    title: "Two Day Excursion",
    tours: [
      "foodTour",
      "borderTour",
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
      "goldenTemple",
      "borderTour",
      "foodTour",
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

// Removed unused getTourLink function

const BookNow = () => {
  const [selectedTours, setSelectedTours] = React.useState({});
  const [selectedPackage, setSelectedPackage] = React.useState(null);
  const [showSummary, setShowSummary] = React.useState(false);
  const [showTourModal, setShowTourModal] = React.useState(null);
  const [showVehicleModal, setShowVehicleModal] = React.useState(false);
  const [selectedVehicle, setSelectedVehicle] = React.useState("");

  // Select a package, auto-select all its tours
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

  // Select/deselect individual tour
  const handleTourSelect = (key) => {
    setSelectedPackage(null);
    setSelectedTours((prev) => {
      const updated = { ...prev, [key]: !prev[key] };
      setShowSummary(Object.values(updated).some(Boolean));
      return updated;
    });
  };

  // Remove tour from selection
  const handleRemoveTour = (key) => {
    setSelectedTours((prev) => {
      const updated = { ...prev, [key]: false };
      setShowSummary(Object.values(updated).some(Boolean));
      return updated;
    });
    if (selectedPackage) setSelectedPackage(null);
  };

  // Remove package
  const handleRemovePackage = () => {
    setSelectedPackage(null);
    setSelectedTours({});
    setShowSummary(false);
  };

  // Modal for tour details
  const openTourModal = (key) => setShowTourModal(key);
  const closeTourModal = () => setShowTourModal(null);

  // Number of persons state
  const [numPersons, setNumPersons] = React.useState(1);

  // Calculate total price
  const getTotalPrice = () => {
    if (selectedPackage) {
      const pkg = packageTours.find((p) => p.key === selectedPackage);
      return pkg
        ? `₹${parseInt(pkg.price.replace(/[^\d]/g, "")) * numPersons}`
        : "₹0";
    }
    let total = 0;
    Object.entries(selectedTours).forEach(([key, val]) => {
      if (val && tourDetails[key]) {
        total += parseInt(tourDetails[key].price.replace(/[^\d]/g, ""));
      }
    });
    return `₹${total * numPersons}`;
  };

  // List of selected tours
  const selectedTourList = Object.entries(selectedTours)
    .filter(([_, v]) => v)
    .map(([key]) => key);

  return (
    <>
      <Navbar />
      <BottomBar />
      <div className="min-h-screen w-full px-4 sm:px-8 py-6  via-white to-blue-300">
        <h1 className="text-3xl font-bold text-darkblue mb-6">
          Book Your Amritsar Adventure
        </h1>

        {/* Packages Section */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3 text-blue-700">
            Choose a Package
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packageTours.map((pkg) => (
              <div
                key={pkg.key}
                className={`rounded-xl shadow-lg border-2 p-5 flex flex-col transition-all ${
                  selectedPackage === pkg.key
                    ? "border-blue-600 bg-blue-50"
                    : "border-transparent bg-white"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-lg text-darkblue">
                    {pkg.title}
                  </span>
                  {selectedPackage === pkg.key && (
                    <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs">
                      Selected
                    </span>
                  )}
                </div>
                <div className="text-gray-700 mb-2">{pkg.description}</div>
                <div className="font-semibold text-blue-700 mb-2">
                  {pkg.price} <span className="text-xs">/person</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {pkg.tours.map((tourKey) =>
                    tourDetails[tourKey] ? (
                      <span
                        key={tourKey}
                        className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs"
                      >
                        {tourDetails[tourKey].title}
                      </span>
                    ) : (
                      <span
                        key={tourKey}
                        className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs italic"
                      >
                        {tourKey
                          .replace(/([A-Z])/g, " $1")
                          .replace(/^./, (str) => str.toUpperCase())}
                      </span>
                    )
                  )}
                </div>
                {/* Number of Persons input inside package container */}
                {selectedPackage === pkg.key && (
                  <div className="flex items-center gap-4 mb-4">
                    <label className="font-semibold text-blue-900">
                      Number of Persons:
                    </label>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() =>
                          setNumPersons((prev) => Math.max(1, prev - 1))
                        }
                        className="px-2 py-1 bg-blue-200 text-blue-900 rounded"
                      >
                        −
                      </button>
                      <input
                        type="number"
                        min={1}
                        value={numPersons}
                        onChange={(e) =>
                          setNumPersons(
                            Math.max(1, parseInt(e.target.value) || 1)
                          )
                        }
                        className="w-16 text-center px-2 py-1 border rounded text-blue-900"
                      />
                      <button
                        type="button"
                        onClick={() => setNumPersons((prev) => prev + 1)}
                        className="px-2 py-1 bg-blue-200 text-blue-900 rounded"
                      >
                        +
                      </button>
                    </div>
                  </div>
                )}

                {selectedPackage === pkg.key ? (
                  <button
                    className="mt-auto px-4 py-2 rounded-lg font-semibold bg-red-100 text-red-700 hover:bg-red-200 transition flex items-center gap-2"
                    onClick={handleRemovePackage}
                  >
                    <FaTimes /> Remove Package
                  </button>
                ) : (
                  <button
                    className="mt-auto px-4 py-2 rounded-lg font-semibold bg-blue-700 text-white hover:bg-blue-800 transition"
                    onClick={() => handlePackageSelect(pkg.key)}
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
        <section>
          <h2 className="text-xl font-semibold mb-3 text-darkblue">
            Or Build Your Own Tour
          </h2>
          <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(tourDetails).map(([key, details]) => {
              const isSelected = selectedTours[key];
              return (
                <div
                  key={key}
                  className={`rounded-xl shadow-lg border-2 p-5 flex flex-col transition-all group relative overflow-hidden cursor-pointer ${
                    isSelected
                      ? "border-blue-600 bg-gradient-to-br from-blue-50 to-blue-100"
                      : "border-transparent bg-white px-10"
                  }`}
                  style={{
                    boxShadow: isSelected
                      ? "0 4px 24px rgba(30, 64, 175, 0.15)"
                      : "0 2px 8px rgba(0,0,0,0.07)",
                    borderRadius: "1rem",
                  }}
                  onClick={() => openTourModal(key)}
                >
                  {/* Decorative Ribbon for Selected */}
                  {isSelected && (
                    <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 rounded-bl-xl font-bold text-xs shadow">
                      Selected
                    </div>
                  )}
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-lg text-darkblue">
                      {details.title}
                    </span>
                    <button
                    //   className="text-blue-600 hover:text-blue-900"
                      onClick={(e) => {
                        e.stopPropagation();
                        openTourModal(key);
                      }}
                      aria-label={`View details of ${details.title}`} 
                      className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-100 hover:bg-blue-200 transition"
                    >
                      <FaInfoCircle className="text-blue-700 text-xl" />
                    </button>
                  </div>
                  <div className="w-full flex justify-center mb-3">
                    <img
                      src={details.img}
                      alt={details.title}
                      className="object-cover  rounded-xl shadow-lg w-40 h-32 sm:w-36 sm:h-36 group-hover:scale-105 transition-transform border-4 border-blue-100"
                      style={{
                        boxShadow: "0 2px 12px rgba(30, 64, 175, 0.10)",
                      }}
                    />
                  </div>
                  <div className="font-semibold text-darkblue mb-2 text-xl flex items-center gap-2">
                    <span>{details.price}</span>
                    <span className="text-sm bg-blue-100 text-blue-700 px-2 py-0.5 rounded">
                      /person
                    </span>
                  </div>
                  <div className="mb-2 text-base text-gray-700">
                    <span className="font-bold text-blue-900">Includes:</span>{" "}
                    {details.includes}
                  </div>
                  <div className="mb-2 text-base text-gray-700">
                    <span className="font-bold text-blue-900">Guide:</span>{" "}
                    {details.guide}
                  </div>
                  {/* Number of Persons input for individual tour */}
                  {isSelected && (
                    <div className="flex items-center  gap-4 mb-2">
                      <label className="font-semibold text-blue-900">
                        Number of Persons:
                      </label>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setNumPersons((prev) => Math.max(1, prev - 1));
                          }}
                          className="px-2 py-1 bg-blue-200 text-blue-900 rounded"
                        >
                          −
                        </button>
                        <input
                          type="number"
                          min={1}
                          value={numPersons}
                          onChange={(e) => {
                            e.stopPropagation();
                            setNumPersons(Math.max(1, parseInt(e.target.value) || 1));
                          }}
                          className="w-16 text-center px-2 py-1 border rounded text-blue-900"
                        />
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setNumPersons((prev) => prev + 1);
                          }}
                          className="px-2 py-1 bg-blue-200 text-blue-900 rounded"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  )}
                  <div className="flex items-center px-4 gap-2 mb-2">
                    <input
                      type="checkbox"
                      checked={!!isSelected}
                      onChange={(e) => {
                        e.stopPropagation();
                        handleTourSelect(key);
                      }}
                      className="accent-blue-700  w-5 h-5"
                      aria-label={`Add to cart ${details.title}`}
                    />
                    <span
                      className={`text-sm font-light ${
                        isSelected
                          ? "text-blue-700 font-semibold"
                          : "text-gray-500"
                      }`}
                    >
                      {isSelected ? "Selected" : "Add to cart"}
                    </span>
                  </div>
                  {isSelected && (
                    <button
                      className="mt-2 px-3 py-2 rounded-lg font-semibold bg-red-100 text-red-600 hover:bg-red-200 transition flex items-center gap-2 shadow"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemoveTour(key);
                      }}
                    >
                      <FaTimes /> Remove
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </section>
        {showSummary && (
          <div className="fixed bottom-0 left-0 w-full bg-white border-t  border-blue-200 shadow-lg z-50">
            <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between px-6 py-4">
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <FaCheckCircle className="text-green-500 text-xl" />
                <span className="font-semibold text-blue-900">
                  {selectedPackage
                    ? `Package Selected: ${
                        packageTours.find((p) => p.key === selectedPackage)
                          ?.title
                      }`
                    : `Tours Selected: ${selectedTourList.length}`}
                </span>
                <span className="font-bold text-blue-700 ml-2">
                  Total: {getTotalPrice()}
                </span>
                <span className="ml-2 text-gray-700">
                  Persons: {numPersons}
                </span>
              </div>
              <button
                className="mt-3 sm:mt-0 px-5 py-2 rounded-lg font-semibold bg-darkblue text-white hover:bg-blue-900 transition"
                onClick={() => setShowVehicleModal(true)}
              >
                Book Now
              </button>
            </div>
          </div>
        )}

        {/* Vehicle Selection Modal */}
        {showVehicleModal && (
          <div className="fixed px-4 inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full relative">
              <button
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                onClick={() => setShowVehicleModal(false)}
                aria-label="Close"
              >
                <FaTimes />
              </button>
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                Choose Your Vehicle
              </h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setShowVehicleModal(false);
                  alert(
                    `Vehicle selected: ${selectedVehicle}\nPersons: ${numPersons}`
                  );
                }}
              >
                <div className="flex flex-col gap-4 mb-4">
                  {[
                    "Sedan",
                    "SUV",
                    "Innova",
                    "Tempo Traveller",
                    "No Vehicle Needed",
                  ].map((vehicle) => (
                    <label
                      key={vehicle}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="vehicle"
                        value={vehicle}
                        checked={selectedVehicle === vehicle}
                        onChange={() => setSelectedVehicle(vehicle)}
                        className="accent-blue-700 w-5 h-5"
                      />
                      <span className="text-blue-900">{vehicle}</span>
                    </label>
                  ))}
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 rounded-lg font-semibold bg-blue-700 text-white hover:bg-blue-800 transition"
                >
                  Confirm Vehicle
                </button>
              </form>
            </div>
          </div>
        )}
        {showTourModal && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full relative">
              <button
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                onClick={closeTourModal}
                aria-label="Close"
              >
                <FaTimes />
              </button>
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                {tourDetails[showTourModal].title}
              </h3>
              <img
                src={tourDetails[showTourModal].img}
                alt={tourDetails[showTourModal].title}
                className="object-cover rounded-lg shadow mb-3 w-full h-40"
              />
              <div className="font-semibold text-blue-700 mb-2">
                {tourDetails[showTourModal].price} /person
              </div>
              <div className="mb-2">
                <span className="font-bold">Includes:</span>{" "}
                {tourDetails[showTourModal].includes}
              </div>
              <div className="mb-2">
                <span className="font-bold">Guide:</span>{" "}
                {tourDetails[showTourModal].guide}
              </div>
              <button
                className="mt-2 px-4 py-2 rounded-lg font-semibold bg-blue-700 text-white hover:bg-blue-800 transition"
                onClick={() => {
                  handleTourSelect(showTourModal);
                  closeTourModal();
                }}
              >
                {selectedTours[showTourModal]
                  ? "Remove from Selection"
                  : "Add to Selection"}
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default BookNow;
