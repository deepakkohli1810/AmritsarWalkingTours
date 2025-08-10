import React, { useState, useEffect } from "react";
import {
  Calendar,
  Users,
  ChevronLeft,
  ChevronRight,
  Check,
  X,
  ChevronDown,
  ChevronUp,
  MapPin,
  Clock,
  Star,
  Info,
  Share2,
  Heart,
  Video,
  ExternalLink,
  BookOpen,
  Phone,
  Mail,
} from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SuggestiveTours from "../SuggestiveTours";
import WhyUs from "../WhyUs";
import Footer from "../Footer";
import BottomBar from "../bottomBar";
import { motion, AnimatePresence } from "framer-motion";

// Reusable components for consistent UI
const Card = ({
  children,
  className = "",
  variant = "default",
}) => {
  const base = "rounded-2xl overflow-hidden";
  const variants = {
    default:
      "bg-white shadow-lg hover:shadow-xl transition-all duration-300",
    feature:
      "bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100",
    accent:
      "bg-gradient-to-r from-darkblue to-indigo-700 text-white",
  };

  return (
    <div
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </div>
  );
};

const Button = ({
  children,
  className = "",
  variant = "primary",
  ...props
}) => {
  const base =
    "px-5 py-3 rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    primary:
      "bg-darkblue text-white hover:bg-darkblue/90 active:bg-darkblue/80 focus:ring-darkblue/50",
    secondary:
      "bg-white text-darkblue border border-darkblue hover:bg-gray-50 active:bg-gray-100 focus:ring-darkblue/50",
    outline:
      "bg-transparent border border-darkblue text-darkblue hover:bg-darkblue/5 active:bg-darkblue/10 focus:ring-darkblue/50",
    accent:
      "bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600 active:from-amber-700 active:to-orange-700 focus:ring-amber-400/50",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const Badge = ({
  children,
  className = "",
  variant = "primary",
}) => {
  const base = "px-3 py-1 rounded-full text-sm font-medium";
  const variants = {
    primary: "bg-darkblue/10 text-darkblue",
    secondary: "bg-amber-100 text-amber-800",
    accent:
      "bg-gradient-to-r from-amber-500 to-orange-500 text-white",
  };

  return (
    <span
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

const TourDetailsPage = () => {
  // Get tour type from URL parameter
  const { tourType } = useParams();
  const navigate = useNavigate();

  // Tour data configuration (only showing food-walk for brevity)
  const TOUR_CONFIG = {
    "food-walk": {
      id: "food-walk",
      name: "Amritsari Food Walk",
      heroImage: "/assets/FoodWalk/photo1.png",
      images: [
        "/assets/WagahBorder/photo28.png",
        "/assets/WagahBorder/photo24.png",
        "/assets/WagahBorder/photo25.png",
        "/assets/WagahBorder/photo26.png",
        "/assets/WagahBorder/photo27.png",
        "/assets/WagahBorder/photo29.png",
        "/assets/WagahBorder/photo30.png",
        "/assets/WagahBorder/photo31.png",

        "/assets/WagahBorder/photo32.png",
        "/assets/WagahBorder/photo33.png",
        "/assets/WagahBorder/photo34.png",
        "/assets/WagahBorder/photo35.png",
        "/assets/WagahBorder/photo36.png",
        "/assets/WagahBorder/photo37.png",
        "/assets/WagahBorder/photo38.png",
        "/assets/WagahBorder/photo39.png",
        "/assets/WagahBorder/photo40.png",
        "/assets/WagahBorder/photo41.png",
      ],
      highlights: [
        "Taste authentic Amritsari street food at legendary local establishments",
        "Learn about the history and cultural significance of Punjabi cuisine",
        "Enjoy a curated culinary journey through Amritsar's bustling bazaars",
        "Sample iconic dishes like Amritsari Kulcha, Chole Bhature, and Lassi",
        "Discover hidden gems known only to locals and food connoisseurs",
        "Learn cooking techniques and secret recipes from local chefs",
        "Experience the vibrant atmosphere of Amritsar's food markets",
        "Enjoy a traditional tea experience at a historic tea stall",
      ],
      itinerary: [
        {
          title: "Meet at Town Hall",
          duration: "10 min",
          description:
            "Gather with your food expert guide at the historic Town Hall for an introduction to Amritsar's culinary heritage.",
          icon: "🏛️",
        },
        {
          title: "Katra Ahluwalia Bazaar",
          duration: "25 min",
          description:
            "Begin your food journey in Amritsar's oldest market, exploring spice shops and traditional sweet makers.",
          icon: "🌶️",
        },
        {
          title: "Amritsari Kulcha",
          duration: "30 min",
          description:
            "Taste the city's most famous bread at a legendary 100-year-old establishment, learning about its preparation and history.",
          icon: "🍞",
        },
        {
          title: "Chole Bhature",
          duration: "30 min",
          description:
            "Enjoy Amritsar's signature dish at a renowned eatery, with insights into how local variations differ from other regions.",
          icon: "🍛",
        },
        {
          title: "Lassi Experience",
          duration: "20 min",
          description:
            "Sample authentic Amritsari lassi at a specialty shop, learning about its cultural significance and preparation methods.",
          icon: "🥛",
        },
        {
          title: "Jalebi & Sweets",
          duration: "25 min",
          description:
            "Visit a traditional sweet shop to taste freshly made jalebis and other Punjabi desserts with historical context.",
          icon: "🍯",
        },
        {
          title: "Street Food Delights",
          duration: "30 min",
          description:
            "Explore hidden street food stalls offering local specialties like tikki, samosas, and chaat known only to locals.",
          icon: "🍢",
        },
        {
          title: "Giani Tea Stall",
          duration: "20 min",
          description:
            "End your food adventure at Amritsar's most famous tea stall, enjoying a cup of chai and reflecting on your culinary journey.",
          icon: "☕",
        },
      ],
      culturalHighlights: [
        "Amritsari cuisine reflects the city's rich history as a crossroads of trade routes and cultural influences",
        "The food culture embodies Sikh principles of community and sharing, evident in the Langar tradition",
        "Many dishes have evolved over centuries, with recipes passed down through generations",
        "Street food culture in Amritsar represents a democratic dining experience where people from all backgrounds eat together",
        "The city's location near the border has influenced its cuisine with flavors from both sides of the border",
        "Food in Amritsar is more than sustenance—it's a celebration of community and hospitality",
      ],
      videos: [
        {
          url: "https://www.youtube.com/embed/ivTsHLtNM_U",
          title:
            "Golden Temple Amritsar Full Tour & History",
          description:
            "Explore the Golden Temple, its history, and spiritual significance in this detailed walkthrough.",
        },
        {
          url: "https://www.youtube.com/embed/mVz0V9lqivw",
          title:
            "Langar at Golden Temple: World's Largest Free Kitchen",
          description:
            "Discover how the Golden Temple serves thousands daily with its incredible community kitchen.",
        },
        {
          url: "https://www.youtube.com/embed/_bKE6SGPIs8",
          title: "Palki Sahib Ceremony at Golden Temple",
          description:
            "Experience the mesmerizing Palki Sahib ceremony, a highlight of the Golden Temple visit.",
        },
      ],
      price: 799,
      rating: 4.7,
      reviews: 185,
      category: "Culinary Experience",
      description:
        "Join us on a mouthwatering journey through Amritsar's legendary food scene. This curated culinary adventure takes you beyond the tourist spots to discover authentic flavors and hidden gems known only to locals.",
      proTip:
        "Come hungry! Our food walk includes generous tastings at multiple stops, so arrive with space for a full meal experience.",
      insiderTip:
        "The best time to experience Amritsar's food culture is between 11 AM and 3 PM or 6 PM and 9 PM when local eateries are busiest and freshest. We've timed our tour to hit each location at its peak freshness and flavor.",
    },
  };

  const currentTour =
    TOUR_CONFIG[tourType] || TOUR_CONFIG["food-walk"];

  // State management
  const [currentImage, setCurrentImage] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const [guests, setGuests] = useState(1);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [showFullItinerary, setShowFullItinerary] =
    useState(false);
  const [showHighlights, setShowHighlights] =
    useState(false);

  // Keyboard navigation for preview modal
  useEffect(() => {
    if (!previewOpen) return;

    const handleKey = (e) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setCurrentImage(
          (currentImage - 1 + currentTour.images.length) %
            currentTour.images.length
        );
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        setCurrentImage(
          (currentImage + 1) % currentTour.images.length
        );
      }
      if (e.key === "Escape") {
        setPreviewOpen(false);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () =>
      window.removeEventListener("keydown", handleKey);
  }, [
    previewOpen,
    currentImage,
    currentTour.images.length,
  ]);

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-6 sm:py-8">
        {/* Breadcrumb Navigation */}
        <nav className="mb-6 hidden sm:block">
          <ol className="flex items-center text-sm text-gray-500">
            <li>
              <a href="/" className="hover:text-darkblue">
                Home
              </a>
            </li>
            <span className="mx-2">/</span>
            <li>
              <a
                href="/tours"
                className="hover:text-darkblue"
              >
                Tours
              </a>
            </li>
            <span className="mx-2">/</span>
            <li className="text-darkblue font-medium">
              {currentTour.name}
            </li>
          </ol>
        </nav>

        {/* Tour Header */}
        <header className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary">
                  {currentTour.category}
                </Badge>
                <Badge variant="accent">Most Popular</Badge>
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                AWT's Special{" "}
                <span className="text-gradient bg-gradient-to-r from-darkblue to-indigo-700 bg-clip-text text-transparent">
                  Food Walking Tour
                </span>
              </h1>

              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <Star className="text-yellow-400 fill-current w-5 h-5" />
                  <span className="ml-1 font-medium">
                    {currentTour.rating}
                  </span>
                  <span className="text-gray-500 ml-1">
                    ({currentTour.reviews} reviews)
                  </span>
                </div>
                <div className="flex items-center text-gray-500">
                  <MapPin className="w-5 h-5 mr-1" />
                  <span>Amritsar, India</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <Clock className="w-5 h-5 mr-1" />
                  <span>4-5 hours</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsFavorited(!isFavorited)}
                className={`p-2.5 rounded-full border ${
                  isFavorited
                    ? "text-red-500 bg-red-50 border-red-200"
                    : "text-gray-500 border-gray-300 hover:bg-gray-50"
                }`}
                aria-label={
                  isFavorited
                    ? "Remove from favorites"
                    : "Add to favorites"
                }
              >
                <Heart
                  className={`w-5 h-5 ${
                    isFavorited ? "fill-current" : ""
                  }`}
                />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2.5 rounded-full border border-gray-300 hover:bg-gray-50 text-gray-500"
                aria-label="Share tour"
              >
                <Share2 className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </header>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Media & Content */}
          <div className="lg:col-span-2">
            {/* Image Carousel */}
            <section className="mb-6">
              <Card className="overflow-hidden">
                <motion.div
                  key={currentImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative aspect-[16/9] cursor-pointer group"
                  onClick={() => setPreviewOpen(true)}
                >
                  <img
                    src={currentTour.images[currentImage]}
                    alt={`Food Tour - Image ${
                      currentImage + 1
                    }`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <div className="flex justify-between items-center">
                      <h2 className="text-xl font-bold">
                        Amritsari Food Walk
                      </h2>
                      <span className="bg-black/50 px-3 py-1 rounded-full text-sm">
                        {currentImage + 1} of{" "}
                        {currentTour.images.length}
                      </span>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Previous image"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImage(
                      (currentImage -
                        1 +
                        currentTour.images.length) %
                        currentTour.images.length
                    );
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-lg hover:bg-lightblue/80 transition z-10"
                >
                  <ChevronLeft className="w-5 h-5" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Next image"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImage(
                      (currentImage + 1) %
                        currentTour.images.length
                    );
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-lg hover:bg-lightblue/80 transition z-10"
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </Card>

              {/* Thumbnails */}
              <div className="flex gap-3 mt-4 overflow-x-auto pb-3 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                {currentTour.images.map((thumb, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setCurrentImage(index)}
                    className={`relative flex-shrink-0 w-24 h-16 rounded-xl overflow-hidden border-2 transition-all ${
                      currentImage === index
                        ? "border-darkblue scale-105 shadow-lg shadow-darkblue/20"
                        : "border-transparent hover:border-gray-300"
                    }`}
                  >
                    <img
                      src={thumb}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    {index === 0 && (
                      <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-transparent flex items-center justify-center">
                        <span className="text-white font-bold text-xs bg-black/30 px-2 py-1 rounded">
                          FEATURED
                        </span>
                      </div>
                    )}
                  </motion.button>
                ))}
              </div>
            </section>

            {/* Tour Tabs */}
            <div className="mb-8">
              <div className="border-b border-gray-200">
                <nav className="flex -mb-px space-x-8">
                  {[
                    {
                      id: "overview",
                      label: "Overview",
                      icon: Info,
                    },
                    {
                      id: "itinerary",
                      label: "Itinerary",
                      icon: MapPin,
                    },
                    {
                      id: "inclusions",
                      label: "Inclusions",
                      icon: Check,
                    },
                    {
                      id: "cultural",
                      label: "Culinary Context",
                      icon: BookOpen,
                    },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`pb-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2 ${
                        activeTab === tab.id
                          ? "border-darkblue text-darkblue font-semibold"
                          : "border-transparent text-gray-500 hover:text-gray-700"
                      }`}
                    >
                      <tab.icon className="w-4 h-4" />
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Tab Content */}
              <AnimatePresence mode="wait">
                {activeTab === "overview" && (
                  <motion.div
                    key="overview"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="pt-6"
                  >
                    <Card className="p-6 border-t-4 border-amber-500">
                      <div className="flex justify-between items-start">
                        <div>
                          <h2 className="text-2xl font-bold text-gray-900 mb-3">
                            Why Choose Our Food Walking
                            Tour?
                          </h2>
                          <p className="text-gray-700">
                            Join us on a mouthwatering
                            journey through Amritsar's
                            legendary food scene. This
                            curated culinary adventure takes
                            you beyond the tourist spots to
                            discover authentic flavors and
                            hidden gems known only to
                            locals.
                          </p>
                        </div>
                        <div className="bg-gradient-to-r from-amber-50 to-amber-100 p-4 rounded-xl">
                          <div className="flex items-center">
                            <Star className="text-amber-500 fill-current w-5 h-5" />
                            <span className="ml-2 font-bold text-2xl">
                              {currentTour.rating}
                            </span>
                            <span className="text-gray-600 ml-1">
                              ({currentTour.reviews})
                            </span>
                          </div>
                        </div>
                      </div>
                    </Card>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                      <Card className="p-5">
                        <h3 className="font-bold text-lg text-gray-900 mb-4 flex items-center">
                          <MapPin className="w-5 h-5 text-darkblue mr-2" />
                          Must-Try Highlights
                        </h3>
                        <ul className="space-y-3">
                          {currentTour.highlights
                            .slice(0, 4)
                            .map((point, idx) => (
                              <li
                                key={idx}
                                className="flex items-start"
                              >
                                <Check className="w-5 h-5 text-darkblue mt-1 mr-2 flex-shrink-0" />
                                <span className="text-gray-700">
                                  {point}
                                </span>
                              </li>
                            ))}
                        </ul>
                        {!showHighlights && (
                          <button
                            onClick={() =>
                              setShowHighlights(true)
                            }
                            className="mt-3 text-darkblue font-medium flex items-center hover:text-darkblue/80 transition-colors"
                          >
                            Show more{" "}
                            <ChevronDown className="w-4 h-4 ml-1" />
                          </button>
                        )}
                        {showHighlights && (
                          <div>
                            {currentTour.highlights
                              .slice(4)
                              .map((point, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start mt-3"
                                >
                                  <Check className="w-5 h-5 text-darkblue mt-1 mr-2 flex-shrink-0" />
                                  <span className="text-gray-700">
                                    {point}
                                  </span>
                                </li>
                              ))}
                            <button
                              onClick={() =>
                                setShowHighlights(false)
                              }
                              className="mt-3 text-darkblue font-medium flex items-center hover:text-darkblue/80 transition-colors"
                            >
                              Show less{" "}
                              <ChevronUp className="w-4 h-4 ml-1" />
                            </button>
                          </div>
                        )}
                      </Card>

                      <Card className="p-5">
                        <h3 className="font-bold text-lg text-gray-900 mb-4 flex items-center">
                          <Info className="w-5 h-5 text-darkblue mr-2" />
                          Tour Essentials
                        </h3>
                        <div className="space-y-3">
                          <div className="flex items-start">
                            <div className="w-32 font-medium text-gray-700">
                              Duration:
                            </div>
                            <div>4-5 hours</div>
                          </div>
                          <div className="flex items-start">
                            <div className="w-32 font-medium text-gray-700">
                              Languages:
                            </div>
                            <div>
                              English, Hindi, Punjabi
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="w-32 font-medium text-gray-700">
                              Best Time:
                            </div>
                            <div>
                              11 AM - 3 PM or 6 PM - 9 PM
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="w-32 font-medium text-gray-700">
                              Group Size:
                            </div>
                            <div>Max 12 guests</div>
                          </div>
                        </div>

                        <div className="mt-4 p-3 bg-amber-50 rounded-lg border border-amber-100">
                          <p className="text-sm text-amber-800 flex items-start">
                            <Info className="w-4 h-4 mt-0.5 mr-2 flex-shrink-0" />
                            Come hungry! Our food walk
                            includes generous tastings at
                            multiple stops.
                          </p>
                        </div>
                      </Card>
                    </div>

                    <Card className="p-6 mt-8 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-100">
                      <div className="flex items-start gap-3">
                        <div className="bg-amber-100 p-3 rounded-lg mt-1">
                          <Star className="w-5 h-5 text-amber-600" />
                        </div>
                        <p className="text-gray-700">
                          <span className="font-semibold">
                            Pro Tip:
                          </span>{" "}
                          {currentTour.proTip}
                        </p>
                      </div>
                    </Card>

                    <div className="mt-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        Why This Food Tour Stands Out
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                          {
                            title: "Local Food Expertise",
                            description:
                              "Our guides are food connoisseurs who know the best spots and secret recipes",
                            icon: "👨‍🍳",
                          },
                          {
                            title: "Personalized Guidance",
                            description:
                              "Small groups ensure individual attention and opportunities for meaningful dialogue",
                            icon: "👥",
                          },
                          {
                            title: "Culinary Immersion",
                            description:
                              "Taste authentic dishes with understanding of their cultural significance",
                            icon: "🌶️",
                          },
                        ].map((feature, index) => (
                          <Card
                            key={index}
                            className="p-4 hover:shadow-md transition-shadow"
                          >
                            <div className="text-3xl mb-2">
                              {feature.icon}
                            </div>
                            <h4 className="font-bold text-gray-900 mb-1">
                              {feature.title}
                            </h4>
                            <p className="text-gray-600 text-sm">
                              {feature.description}
                            </p>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === "itinerary" && (
                  <motion.div
                    key="itinerary"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="pt-6"
                  >
                    <Card className="p-6 border-t-4 border-amber-500">
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        Detailed Itinerary
                      </h2>
                      <p className="text-gray-600">
                        Experience the full culinary journey
                        through Amritsar's vibrant food
                        scene
                      </p>
                    </Card>

                    <div className="relative pl-8 mt-8 mb-8">
                      {/* Timeline connector */}
                      <div className="absolute left-3.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-darkblue to-amber-500" />

                      {currentTour.itinerary
                        .slice(
                          0,
                          showFullItinerary
                            ? currentTour.itinerary.length
                            : 5
                        )
                        .map((stop, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              delay: index * 0.1,
                            }}
                            className="relative mb-8 last:mb-0"
                          >
                            {/* Timeline dot */}
                            <div className="absolute left-0 top-2 w-8 h-8 rounded-full bg-white border-2 border-darkblue flex items-center justify-center">
                              <span className="text-darkblue font-bold text-sm">
                                {index + 1}
                              </span>
                            </div>

                            <Card className="ml-10 p-5 hover:shadow-md transition-shadow">
                              <div className="flex items-start justify-between">
                                <div>
                                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                                    {stop.title}
                                  </h3>
                                  <div className="text-sm text-gray-500 mb-2 flex items-center">
                                    <Clock className="w-4 h-4 mr-1" />
                                    {stop.duration}
                                  </div>
                                </div>
                                <div
                                  className="text-2xl"
                                  aria-hidden="true"
                                >
                                  {stop.icon}
                                </div>
                              </div>
                              <p className="text-gray-700">
                                {stop.description}
                              </p>
                            </Card>
                          </motion.div>
                        ))}
                    </div>

                    <div className="text-center mt-4">
                      <Button
                        variant={
                          showFullItinerary
                            ? "outline"
                            : "primary"
                        }
                        onClick={() =>
                          setShowFullItinerary(
                            !showFullItinerary
                          )
                        }
                      >
                        {showFullItinerary ? (
                          <>
                            <ChevronUp className="w-4 h-4 mr-1" />
                            Show Less
                          </>
                        ) : (
                          <>
                            <ChevronDown className="w-4 h-4 mr-1" />
                            Show Full Itinerary
                          </>
                        )}
                      </Button>
                    </div>

                    <Card className="p-5 mt-8 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-100">
                      <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                        <Star className="w-5 h-5 text-amber-500 mr-2" />
                        Insider Tip
                      </h3>
                      <p className="text-gray-700">
                        {currentTour.insiderTip}
                      </p>
                    </Card>
                  </motion.div>
                )}

                {activeTab === "inclusions" && (
                  <motion.div
                    key="inclusions"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="pt-6"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <Card className="p-5">
                        <div className="flex items-center mb-4">
                          <Check className="w-6 h-6 text-green-500 mr-2" />
                          <h3 className="text-xl font-bold text-gray-900">
                            What's Included
                          </h3>
                        </div>
                        <ul className="space-y-3">
                          {[
                            "Private air-conditioned transportation to and from tour sites",
                            "Hotel pickup and drop-off within Amritsar city",
                            "Expert English/Hindi/Punjabi-speaking local guide",
                            "All necessary entry fees and permissions",
                            "Bottled water for each guest",
                            "Guided tour with cultural context",
                            "Special access where applicable",
                            "Photo opportunities with professional guidance",
                            "Flexible timing to ensure best experience",
                          ].map((item, index) => (
                            <li
                              key={index}
                              className="flex items-start"
                            >
                              <Check className="w-5 h-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </Card>

                      <Card className="p-5">
                        <div className="flex items-center mb-4">
                          <X className="w-6 h-6 text-red-500 mr-2" />
                          <h3 className="text-xl font-bold text-gray-900">
                            Not Included
                          </h3>
                        </div>
                        <ul className="space-y-3">
                          {[
                            "Personal expenses and souvenirs",
                            "Travel insurance",
                            "Additional activities not mentioned in the itinerary",
                            "Meals outside of specified experiences",
                            "Photography fees for professional equipment",
                          ].map((item, index) => (
                            <li
                              key={index}
                              className="flex items-start"
                            >
                              <X className="w-5 h-5 text-red-500 mt-1 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>

                        <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-100">
                          <p className="text-sm text-amber-800 flex items-start">
                            <Info className="w-4 h-4 mt-0.5 mr-2 flex-shrink-0" />
                            Food tastings at multiple stops
                            are included in the tour price.
                          </p>
                        </div>
                      </Card>
                    </div>

                    <Card className="p-6 mt-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <Star className="w-5 h-5 text-amber-500 mr-2" />
                        Our Commitment to Quality
                      </h3>
                      <p className="text-gray-700 mb-4">
                        We go beyond standard tours to
                        ensure your Food Walking Tour
                        experience is authentic and
                        meaningful:
                      </p>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          "Small group sizes for personalized attention",
                          "Vehicles maintained to the highest safety standards",
                          "Guides with deep knowledge of local cuisine",
                          "24/7 customer support before and during your tour",
                          "Flexible booking with free cancellation up to 24 hours prior",
                          "Real-time updates on timing and any schedule changes",
                        ].map((point, index) => (
                          <li
                            key={index}
                            className="flex items-start"
                          >
                            <Check className="w-5 h-5 text-darkblue mt-1 mr-2 flex-shrink-0" />
                            <span className="text-gray-700">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </motion.div>
                )}

                {activeTab === "cultural" && (
                  <motion.div
                    key="cultural"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="pt-6"
                  >
                    <Card className="p-6 border-t-4 border-amber-500">
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        Culinary Context & Significance
                      </h2>
                      <p className="text-gray-600">
                        Understanding the deeper meaning
                        behind Amritsari cuisine transforms
                        your food experience from simple
                        eating to cultural immersion
                      </p>
                    </Card>

                    <Card className="p-6 mt-6 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-100">
                      <div className="flex items-start gap-3">
                        <div className="bg-amber-100 p-3 rounded-lg mt-1">
                          <Star className="w-5 h-5 text-amber-600" />
                        </div>
                        <p className="text-gray-700">
                          <span className="font-semibold">
                            Did you know?
                          </span>{" "}
                          Amritsari Kulcha has a protected
                          geographical indication (PGI)
                          status, recognizing its unique
                          preparation method and cultural
                          significance to the region.
                        </p>
                      </div>
                    </Card>

                    <p className="text-lg text-gray-700 mt-6 mb-6">
                      Amritsari cuisine is not just about
                      flavors—it's a living expression of
                      Punjab's history, cultural diversity,
                      and community spirit. Understanding
                      the culinary context transforms your
                      food experience from simple eating to
                      cultural immersion.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <Card className="p-5">
                        <h3 className="font-bold text-lg text-gray-900 mb-4 flex items-center">
                          <BookOpen className="w-5 h-5 text-amber-500 mr-2" />
                          Culinary Significance
                        </h3>
                        <ul className="space-y-3">
                          {currentTour.culturalHighlights.map(
                            (point, idx) => (
                              <li
                                key={idx}
                                className="flex items-start"
                              >
                                <div className="bg-amber-100 text-amber-800 w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-xs font-bold mt-1">
                                  {idx + 1}
                                </div>
                                <span className="text-gray-700">
                                  {point}
                                </span>
                              </li>
                            )
                          )}
                        </ul>
                      </Card>

                      <Card className="p-5">
                        <h3 className="font-bold text-lg text-gray-900 mb-4 flex items-center">
                          <MapPin className="w-5 h-5 text-darkblue mr-2" />
                          Culinary History
                        </h3>
                        <div className="space-y-4">
                          <div className="p-4 bg-blue-50 rounded-lg">
                            <h4 className="font-bold text-gray-900 mb-2">
                              Founding & Evolution
                            </h4>
                            <p className="text-gray-700 text-sm">
                              Amritsari cuisine developed
                              through centuries of cultural
                              exchange along trade routes.
                              The city's location near the
                              border has influenced its
                              flavors with elements from
                              both sides.
                            </p>
                          </div>

                          <div className="p-4 bg-amber-50 rounded-lg">
                            <h4 className="font-bold text-gray-900 mb-2">
                              The Soul of Amritsari Food
                            </h4>
                            <p className="text-gray-700 text-sm">
                              Amritsari food is
                              characterized by its bold
                              flavors and community spirit.
                              The city's food culture
                              embodies Sikh principles of
                              seva (service) and langar
                              (community kitchen), where
                              people from all backgrounds
                              eat together.
                            </p>
                          </div>

                          <div className="p-4 bg-purple-50 rounded-lg">
                            <h4 className="font-bold text-gray-900 mb-2">
                              Evolution & Significance
                            </h4>
                            <p className="text-gray-700 text-sm">
                              What began as simple street
                              food has evolved into a
                              culinary tradition with
                              protected status, reflecting
                              Amritsar's cultural identity
                              and pride.
                            </p>
                          </div>
                        </div>
                      </Card>
                    </div>

                    <Card className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        Why Culinary Context Matters
                      </h3>
                      <p className="text-gray-700 mb-4">
                        When you understand the deeper
                        significance behind each element of
                        the Food Walking Tour, your
                        experience becomes transformative
                        rather than merely observational.
                        You'll notice details others miss
                        and gain insights that stay with you
                        long after you leave.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                        {[
                          {
                            title: "Deeper Understanding",
                            description:
                              "Recognize the symbolism in the dishes that convey cultural philosophy",
                            icon: "🔍",
                          },
                          {
                            title: "Meaningful Connection",
                            description:
                              "Connect with the experience in a way that respects its cultural significance",
                            icon: "❤️",
                          },
                          {
                            title:
                              "Respectful Appreciation",
                            description:
                              "Experience the tour with appropriate cultural sensitivity and reverence",
                            icon: "🙏",
                          },
                        ].map((item, index) => (
                          <div
                            key={index}
                            className="text-center p-4 bg-gray-50 rounded-lg"
                          >
                            <div className="text-3xl mb-2">
                              {item.icon}
                            </div>
                            <h4 className="font-bold text-gray-900 mb-1">
                              {item.title}
                            </h4>
                            <p className="text-gray-600 text-sm">
                              {item.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </Card>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Suggested Videos */}
            <section className="mb-10">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                  <Video className="w-6 h-6 text-darkblue mr-2" />
                  Recommended Videos
                </h2>
                <a
                  href="/videos"
                  className="text-darkblue font-medium hover:underline flex items-center"
                >
                  View all{" "}
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {currentTour.videos.map((video, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    <div className="relative pb-[56.25%] h-0">
                      <iframe
                        className="absolute top-0 left-0 w-full h-full rounded-t-xl"
                        src={`${video.url}?modestbranding=1&rel=0`}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-gray-900 mb-1 line-clamp-2">
                        {video.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {video.description}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Booking & Info */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
              {/* Pricing Card */}
              <Card className="overflow-hidden">
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-5">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-amber-100 text-sm">
                        Starting from
                      </p>
                      <div className="flex items-baseline">
                        <span className="text-3xl font-bold text-white">
                          ₹{currentTour.price}
                        </span>
                        <span className="text-amber-100 ml-1">
                          per person
                        </span>
                      </div>
                    </div>
                    <div className="bg-white/20 px-3 py-1 rounded-full text-white text-sm">
                      Best Seller
                    </div>
                  </div>
                </div>

                <div className="p-5 space-y-5">
                  {/* Date Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Select Date
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <DatePicker
                        selected={startDate}
                        onChange={(date) =>
                          setStartDate(date)
                        }
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-darkblue/20 focus:border-darkblue outline-none transition"
                        dateFormat="EEE dd MMM, yyyy"
                        minDate={new Date()}
                        popperPlacement="bottom"
                        placeholderText="Select date"
                      />
                    </div>
                  </div>

                  {/* Guests Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Guests
                    </label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <select
                        value={guests}
                        onChange={(e) =>
                          setGuests(Number(e.target.value))
                        }
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-darkblue/20 focus:border-darkblue outline-none appearance-none bg-white transition"
                      >
                        {[
                          1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                        ].map((num) => (
                          <option key={num} value={num}>
                            {num} Guest{num > 1 ? "s" : ""}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <ChevronDown className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  {/* Price Summary */}
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between text-base">
                      <span>Base Price (x{guests})</span>
                      <span>
                        ₹
                        {(
                          currentTour.price * guests
                        ).toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between text-base mt-2">
                      <span>Service Fee</span>
                      <span>
                        ₹
                        {Math.floor(
                          currentTour.price * 0.1 * guests
                        ).toLocaleString()}
                      </span>
                    </div>
                    <div className="border-t border-gray-200 mt-3 pt-3">
                      <div className="flex justify-between font-bold text-lg">
                        <span>Total</span>
                        <span>
                          ₹
                          {(
                            currentTour.price *
                            1.1 *
                            guests
                          ).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Book Now Button */}
                  <Button
                    variant="accent"
                    className="w-full"
                    onClick={() => {
                      const bookingData = {
                        tour: currentTour.name,
                        date: startDate,
                        guests,
                        price:
                          currentTour.price * 1.1 * guests,
                      };
                      localStorage.setItem(
                        "bookingDetails",
                        JSON.stringify(bookingData)
                      );
                      navigate("/register");
                    }}
                  >
                    Book Now
                  </Button>

                  {/* Trust Indicators */}
                  <div className="space-y-2 pt-2 border-t border-gray-200">
                    <div className="flex items-center text-sm text-gray-600">
                      <Check className="w-4 h-4 text-green-500 mr-2" />
                      Free cancellation up to 24 hours
                      before
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Check className="w-4 h-4 text-green-500 mr-2" />
                      Reserve now & pay later
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Check className="w-4 h-4 text-green-500 mr-2" />
                      Secure payment
                    </div>
                  </div>
                </div>
              </Card>

              {/* Why Book With Us */}
              <Card className="overflow-hidden">
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Star className="w-5 h-5 text-amber-500 mr-2" />
                    Why Book With Us?
                  </h3>

                  <div className="space-y-4">
                    {[
                      {
                        title: "Food Connoisseur Guides",
                        description:
                          "Our guides are food experts who know the best spots and secret recipes",
                        icon: "👨‍🍳",
                      },
                      {
                        title: "Optimal Timing",
                        description:
                          "We time visits to eateries when food is freshest and flavors are best",
                        icon: "⏰",
                      },
                      {
                        title: "Cultural Respect",
                        description:
                          "We help you appreciate the food culture with respect for local traditions",
                        icon: "🙏",
                      },
                    ].map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-start"
                      >
                        <div className="text-2xl mr-3 mt-1">
                          {feature.icon}
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">
                            {feature.title}
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 pt-4 border-t border-gray-200">
                    <div className="flex items-center">
                      <div className="bg-amber-100 text-amber-800 w-10 h-10 rounded-full flex items-center justify-center font-bold mr-3">
                        {currentTour.rating}
                      </div>
                      <div>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`w-4 h-4 ${
                                star <= 4
                                  ? "text-yellow-400 fill-current"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-gray-600 text-sm">
                          Based on {currentTour.reviews}{" "}
                          verified reviews
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Need Help? */}
              <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 border border-blue-100">
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                  <Info className="w-5 h-5 text-darkblue mr-2" />
                  Need Help?
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Our travel specialists are available to
                  answer any questions you may have about
                  this tour.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <div className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-medium">
                        Call/WhatsApp Us
                      </p>
                      <a
                        href="tel:+911234567890"
                        className="text-darkblue hover:underline"
                      >
                        +91 12345 67890
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-medium">
                        Email Us
                      </p>
                      <a
                        href="mailto:info@amritsartours.com"
                        className="text-darkblue hover:underline"
                      >
                        info@amritsartours.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-medium">
                        Available
                      </p>
                      <p>Mon-Sun, 9AM-9PM IST</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <Card
          variant="accent"
          className="mt-10 rounded-3xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-10">
              <h2 className="text-3xl font-bold mb-4">
                Taste the Flavors of Amritsar
              </h2>
              <p className="text-xl opacity-90 mb-6 max-w-xl">
                Join thousands of travelers who have
                transformed their understanding of Punjabi
                cuisine through our expertly guided tour.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="secondary"
                  className="w-full"
                  onClick={() => {
                    const bookingData = {
                      tour: currentTour.name,
                      date: startDate,
                      guests,
                      price:
                        currentTour.price * 1.1 * guests,
                    };
                    localStorage.setItem(
                      "bookingDetails",
                      JSON.stringify(bookingData)
                    );
                    navigate("/register");
                  }}
                >
                  Book Your Food Adventure
                </Button>
                <Button
                  variant="outline"
                  className="w-full text-white border-white hover:bg-white/10"
                  href="/contact"
                >
                  Have Questions? Contact Us
                </Button>
              </div>
            </div>

            <div className="hidden lg:block relative">
              <div className="absolute inset-0 bg-[url('/assets/FoodWalk/photo1.png')] bg-cover bg-center opacity-90"></div>
              <div className="absolute inset-0 bg-gradient-to-l from-darkblue/80 to-transparent/50"></div>
            </div>
          </div>
        </Card>
      </div>

      {/* Image Preview Modal */}
      <AnimatePresence>
        {previewOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setPreviewOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setPreviewOpen(false)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition"
                aria-label="Close preview"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative aspect-video rounded-xl overflow-hidden">
                <img
                  src={currentTour.images[currentImage]}
                  alt="Tour preview"
                  className="w-full h-full object-contain"
                />

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                  <div className="flex justify-between items-end">
                    <div>
                      <h2 className="text-2xl font-bold mb-2">
                        Amritsari Food Walk
                      </h2>
                      <p className="text-gray-200">
                        {currentImage + 1} of{" "}
                        {currentTour.images.length}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImage(
                            (currentImage -
                              1 +
                              currentTour.images.length) %
                              currentTour.images.length
                          );
                        }}
                        aria-label="Previous image"
                        className="p-2 rounded-full bg-black/50 hover:bg-black/70"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImage(
                            (currentImage + 1) %
                              currentTour.images.length
                          );
                        }}
                        aria-label="Next image"
                        className="p-2 rounded-full bg-black/50 hover:bg-black/70"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <SuggestiveTours />
      <WhyUs />
      <BottomBar />
      <Footer />
    </>
  );
};

export default TourDetailsPage;
