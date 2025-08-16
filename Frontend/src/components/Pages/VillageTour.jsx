// src/pages/TourDetailsPage.jsx
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
} from "lucide-react";
import Navbar from "../Navbar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SuggestiveTours from "../SuggestiveTours";
import WhyUs from "../WhyUs";
import Footer from "../Footer";
import BottomBar from "../bottomBar"; // Assuming you have this component
import { motion, AnimatePresence } from "framer-motion";
import {Link} from "react-router-dom";
const TourDetailsPage = () => {
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

  const images = [
    "/assets/VillageTour/photo (1).png",
    "/assets/VillageTour/photo (2).png",
    "/assets/VillageTour/photo (3).png",
    "/assets/VillageTour/photo (4).png",
    "/assets/VillageTour/photo (5).png",
    "/assets/VillageTour/photo (6).png",
    "/assets/VillageTour/photo (7).png",
    "/assets/VillageTour/photo (8).png",
    "/assets/VillageTour/photo (9).png",
    "/assets/VillageTour/photo (10).png",
    "/assets/VillageTour/photo (11).png",
    "/assets/VillageTour/photo (12).png",
    "/assets/VillageTour/photo (13).png",
    "/assets/VillageTour/photo (14).png",
    "/assets/VillageTour/photo (15).png",
    "/assets/VillageTour/photo (16).png",
    "/assets/VillageTour/photo (17).png",
    "/assets/VillageTour/photo (18).png",
    "/assets/VillageTour/photo (19).png",
    "/assets/VillageTour/photo (20).png",
    "/assets/VillageTour/photo (21).png",
    "/assets/VillageTour/photo (22).png",
    "/assets/VillageTour/photo (23).png",
    "/assets/VillageTour/photo (24).png",
    "/assets/VillageTour/photo (25).png",
    "/assets/VillageTour/photo (26).png",
    "/assets/VillageTour/photo (27).png",
    "/assets/VillageTour/photo (28).png",
    "/assets/VillageTour/photo (29).png",
    "/assets/VillageTour/photo (30).png",
    "/assets/VillageTour/photo (31).png",
    "/assets/VillageTour/photo (32).png",
    "/assets/VillageTour/photo (33).png",
    "/assets/VillageTour/photo (34).png",
    "/assets/VillageTour/photo (35).png",
    "/assets/VillageTour/photo (36).png",
    "/assets/VillageTour/photo (37).png",
    "/assets/VillageTour/photo (38).png",
    "/assets/VillageTour/photo (39).png",
    "/assets/VillageTour/photo (40).png",
    "/assets/VillageTour/photo (41).png",
    "/assets/VillageTour/photo (42).png",
    "/assets/VillageTour/photo (43).png",
    "/assets/VillageTour/photo (44).png",
  ];

  // Keyboard navigation for preview modal
  useEffect(() => {
    if (!previewOpen) return;
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setCurrentImage(
          (currentImage - 1 + images.length) % images.length
        );
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        setCurrentImage((currentImage + 1) % images.length);
      }
      if (e.key === "Escape") {
        setPreviewOpen(false);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () =>
      window.removeEventListener("keydown", handleKey);
  }, [previewOpen, currentImage, images.length]);

  // Tour highlights
  const highlights = [
    "Immerse yourself in authentic Punjabi village life and culture",
    "Participate in traditional farming activities and learn about rural livelihoods",
    "Enjoy hands-on experiences like tractor rides, milking cows, and making chapatis",
    "Interact with local villagers and witness folk music and dance performances",
    "Savor a home-cooked Punjabi meal prepared with fresh, organic ingredients",
    "Experience the warmth and hospitality of rural Punjab",
    "Gain insights into sustainable village practices and traditions",
    "Enjoy a peaceful escape from the hustle and bustle of city life",
  ];

  // Itinerary details
  const itinerary = [
    {
      title: "Pickup from Amritsar City",
      duration: "30 min",
      description:
        "Begin your journey with a comfortable drive from your hotel in Amritsar to a nearby authentic Punjabi village.",
      icon: "🚗",
    },
    {
      title: "Traditional Welcome & Introduction",
      duration: "20 min",
      description:
        "Receive a warm welcome from local villagers with traditional rituals and a brief introduction to village life.",
      icon: "👋",
    },
    {
      title: "Farm Walk & Crop Experience",
      duration: "40 min",
      description:
        "Stroll through lush fields, learn about seasonal crops, and try your hand at basic farming activities like sowing or harvesting (seasonal).",
      icon: "🌾",
    },
    {
      title: "Tractor Ride & Bullock Cart Experience",
      duration: "30 min",
      description:
        "Enjoy a fun tractor ride and experience a traditional bullock cart, the classic rural mode of transport.",
      icon: "🚜",
    },
    {
      title: "Hands-on Activities: Milking Cows & Cooking",
      duration: "40 min",
      description:
        "Participate in milking cows and join local women in making chapatis or other Punjabi delicacies in a rustic kitchen.",
      icon: "🐄",
    },
    {
      title: "Village Home Visit & Cultural Interaction",
      duration: "30 min",
      description:
        "Visit a village home, interact with the family, and learn about daily routines, customs, and rural traditions.",
      icon: "🏠",
    },
    {
      title: "Folk Music & Dance Performance",
      duration: "30 min",
      description:
        "Enjoy a lively performance of Punjabi folk music and dance by villagers, and join in if you wish!",
      icon: "🎭",
    },
    {
      title: "Home-cooked Punjabi Lunch",
      duration: "45 min",
      description:
        "Relish a delicious, organic meal prepared with fresh farm ingredients, served in a traditional setting.",
      icon: "🍛",
    },
    {
      title: "Leisure Time & Village Exploration",
      duration: "20 min",
      description:
        "Explore the village at your own pace, interact with locals, or simply relax in the serene rural environment.",
      icon: "🌳",
    },
    {
      title: "Return to Amritsar",
      duration: "30 min",
      description:
        "Bid farewell to your hosts and drive back to Amritsar city with wonderful memories of village life.",
      icon: "🏨",
    },
  ];

  // Video content (using the same videos as in the original file)
  const videos = [
    {
      url: "https://www.youtube.com/embed/ivTsHLtNM_U",
      title: "Golden Temple Amritsar Full Tour & History",
      description:
        "Explore the Golden Temple, its history, and spiritual significance in this detailed walkthrough.",
    },
    {
      url: "https://www.youtube.com/embed/mVz0V9lqivw",
      title:
        "Langar at Golden Temple: World’s Largest Free Kitchen",
      description:
        "Discover how the Golden Temple serves thousands daily with its incredible community kitchen.",
    },
    {
      url: "https://www.youtube.com/embed/_bKE6SGPIs8",
      title: "Palki Sahib Ceremony at Golden Temple",
      description:
        "Experience the mesmerizing Palki Sahib ceremony, a highlight of the Golden Temple visit.",
    },
    {
      url: "https://www.youtube.com/embed/52nlfLk99gU",
      title:
        "Golden Temple Visitor Guide: Tips & Etiquette",
      description:
        "Essential tips and etiquette for first-time visitors to the Golden Temple.",
    },
  ];

  // Cultural/Contextual elements (adapted for village tour)
  const culturalHighlights = [
    "Experience the genuine warmth and simplicity of Punjabi village hospitality.",
    "Learn about traditional farming methods and the importance of seasonal cycles.",
    "Understand the role of community in village life through shared meals and activities.",
    "Discover how rural traditions are passed down through generations via storytelling and folk arts.",
    "See the integration of modernity and tradition in contemporary village settings.",
    "Appreciate the sustainable practices often found in village communities.",
  ];

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-6 sm:py-8">
        {/* Tour Header */}
        <header className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Cultural Experience
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Authentic
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                AWT's Special{" "}
                <span className="text-gradient bg-gradient-to-r from-[#332D56] to-[#4E6688] bg-clip-text text-transparent">
                  Village Tour
                </span>
              </h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <Star className="text-yellow-400 fill-current w-5 h-5" />
                  <span className="ml-1 font-medium">
                    4.8
                  </span>
                  <span className="text-gray-500 ml-1">
                    (156 reviews)
                  </span>
                </div>
                <div className="flex items-center text-gray-500">
                  <MapPin className="w-5 h-5 mr-1" />
                  <span>Near Amritsar, India</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <Clock className="w-5 h-5 mr-1" />
                  <span>4-5 hours</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsFavorited(!isFavorited)}
                className={`p-2 rounded-full border ${
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
              </button>
              <button
                className="p-2 rounded-full border border-gray-300 hover:bg-gray-50 text-gray-500"
                aria-label="Share tour"
              >
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </header>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Media & Content */}
          <div className="lg:col-span-2">
            {/* Image Carousel */}
            <section className="mb-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <motion.div
                  key={currentImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative aspect-[16/9] cursor-pointer"
                  onClick={() => setPreviewOpen(true)}
                >
                  <img
                    src={images[currentImage]}
                    alt={`Village Tour - Image ${
                      currentImage + 1
                    }`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <div className="flex justify-between items-center">
                      <h2 className="text-xl font-bold">
                        Punjabi Village Life
                      </h2>
                      <span className="bg-black/50 px-2 py-1 rounded text-sm">
                        {currentImage + 1} of{" "}
                        {images.length}
                      </span>
                    </div>
                  </div>
                </motion.div>
                <button
                  aria-label="Previous image"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImage(
                      (currentImage - 1 + images.length) %
                        images.length
                    );
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-lg hover:bg-lightblue/80 transition z-10"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  aria-label="Next image"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImage(
                      (currentImage + 1) % images.length
                    );
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-lg hover:bg-lightblue/80 transition z-10"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              {/* Thumbnails */}
              <div className="flex gap-2 mt-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                {images.map((thumb, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setCurrentImage(index)}
                    className={`relative flex-shrink-0 w-20 h-14 rounded-xl overflow-hidden border-2 transition-all ${
                      currentImage === index
                        ? "border-darkblue scale-105"
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
                      <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 to-transparent flex items-center justify-center">
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
                      label: "Cultural Context",
                      icon: BookOpen,
                    },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`pb-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2 ${
                        activeTab === tab.id
                          ? "border-darkblue text-darkblue"
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
                    <div className="prose prose-lg max-w-none">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        Village Tour Overview
                      </h2>
                      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 mb-6 border border-green-100">
                        <div className="flex items-start gap-3">
                          <div className="bg-green-100 p-2 rounded-lg mt-1">
                            <Star className="w-5 h-5 text-green-600" />
                          </div>
                          <p className="text-gray-700">
                            <span className="font-semibold">
                              Pro Tip:
                            </span>{" "}
                            Wear comfortable shoes and
                            clothing suitable for walking on
                            uneven paths and participating
                            in hands-on activities.
                          </p>
                        </div>
                      </div>
                      <p className="text-lg text-gray-700 mb-6">
                        Step away from the city and discover
                        the heart of Punjab with our
                        immersive Village Tour. Experience
                        the warmth of rural hospitality,
                        explore lush farmlands, and get a
                        firsthand look at the customs and
                        traditions that define village life
                        in Amritsar.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                          <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center">
                            <MapPin className="w-5 h-5 text-darkblue mr-2" />
                            Key Highlights
                          </h3>
                          <ul className="space-y-3">
                            {highlights
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
                              className="mt-3 text-darkblue font-medium flex items-center"
                            >
                              Show more{" "}
                              <ChevronDown className="w-4 h-4 ml-1" />
                            </button>
                          )}
                          {showHighlights && (
                            <div>
                              {highlights
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
                                className="mt-3 text-darkblue font-medium flex items-center"
                              >
                                Show less{" "}
                                <ChevronUp className="w-4 h-4 ml-1" />
                              </button>
                            </div>
                          )}
                        </div>
                        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                          <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center">
                            <Info className="w-5 h-5 text-darkblue mr-2" />
                            Practical Information
                          </h3>
                          <div className="space-y-3">
                            <div className="flex">
                              <div className="w-32 font-medium text-gray-700">
                                Duration:
                              </div>
                              <div>4-5 hours</div>
                            </div>
                            <div className="flex">
                              <div className="w-32 font-medium text-gray-700">
                                Languages:
                              </div>
                              <div>
                                English, Hindi, Punjabi
                              </div>
                            </div>
                            <div className="flex">
                              <div className="w-32 font-medium text-gray-700">
                                Best Time:
                              </div>
                              <div>
                                Morning or late afternoon
                                for pleasant weather
                              </div>
                            </div>
                            <div className="flex">
                              <div className="w-32 font-medium text-gray-700">
                                Dress Code:
                              </div>
                              <div>
                                Comfortable attire suitable
                                for outdoor activities
                              </div>
                            </div>
                            <div className="flex">
                              <div className="w-32 font-medium text-gray-700">
                                Group Size:
                              </div>
                              <div>Max 10 guests</div>
                            </div>
                          </div>
                          <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-100">
                            <p className="text-sm text-green-800 flex items-start">
                              <Info className="w-4 h-4 mt-0.5 mr-2 flex-shrink-0" />
                              Our friendly guides will
                              introduce you to local
                              families, share stories of
                              village traditions, and ensure
                              you enjoy a memorable,
                              hands-on rural experience.
                            </p>
                          </div>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
                        Why This Tour Stands Out
                      </h3>
                      <p className="text-gray-700 mb-4">
                        Unlike standard sightseeing tours,
                        our Village Tour provides authentic
                        access and cultural understanding
                        that transforms a simple visit into
                        a meaningful journey. Our guides
                        aren't just knowledgeable about the
                        activities—they are deeply connected
                        to rural traditions and share
                        personal stories that bring the
                        experience to life.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                        {[
                          {
                            title:
                              "Authentic Cultural Experience",
                            description:
                              "We partner with genuine village communities to ensure you experience real, not staged, village life.",
                            icon: "🎭",
                          },
                          {
                            title: "Hands-on Activities",
                            description:
                              "Participate in daily life activities like farming, cooking, and traditional crafts for a deeper connection.",
                            icon: "🛠️",
                          },
                          {
                            title: "Personalized Guidance",
                            description:
                              "Small groups ensure individual attention and opportunities for meaningful dialogue with locals.",
                            icon: "👥",
                          },
                        ].map((feature, index) => (
                          <div
                            key={index}
                            className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition"
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
                          </div>
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
                    <div className="prose prose-lg max-w-none">
                      <h2 className="text-2xl font-bold text-gray-900 mb-6">
                        Detailed Itinerary
                      </h2>
                      <div className="relative pl-8 mb-8">
                        {/* Timeline connector */}
                        <div className="absolute left-3.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-darkblue to-green-400" />
                        {itinerary
                          .slice(
                            0,
                            showFullItinerary
                              ? itinerary.length
                              : 5
                          )
                          .map((stop, index) => (
                            <motion.div
                              key={index}
                              initial={{
                                opacity: 0,
                                x: -20,
                              }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                delay: index * 0.1,
                              }}
                              className="relative mb-8 last:mb-0"
                            >
                              {/* Timeline dot */}
                              <div className="absolute left-0 top-2 w-7 h-7 rounded-full bg-white border-2 border-darkblue flex items-center justify-center">
                                <span className="text-darkblue font-bold text-sm">
                                  {index + 1}
                                </span>
                              </div>
                              <div className="ml-10 bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition">
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
                              </div>
                            </motion.div>
                          ))}
                      </div>
                      <div className="text-center mt-4">
                        <button
                          onClick={() =>
                            setShowFullItinerary(
                              !showFullItinerary
                            )
                          }
                          className="inline-flex items-center px-4 py-2 border border-darkblue text-darkblue rounded-md hover:bg-darkblue/5 font-medium"
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
                        </button>
                      </div>
                      <div className="mt-8 p-5 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-100">
                        <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                          <Star className="w-5 h-5 text-green-500 mr-2" />
                          Insider Tip
                        </h3>
                        <p className="text-gray-700">
                          Bring a camera to capture the
                          vibrant colors, traditional
                          activities, and warm smiles of the
                          villagers. The folk music and
                          dance performance is particularly
                          photogenic and memorable!
                        </p>
                      </div>
                    </div>
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
                    <div className="prose prose-lg max-w-none">
                      <h2 className="text-2xl font-bold text-gray-900 mb-6">
                        What's Included & Excluded
                      </h2>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div>
                          <div className="flex items-center mb-4">
                            <Check className="w-6 h-6 text-green-500 mr-2" />
                            <h3 className="text-xl font-bold text-gray-900">
                              What's Included
                            </h3>
                          </div>
                          <ul className="space-y-3">
                            {[
                              "Private air-conditioned transportation to and from the village",
                              "Hotel pickup and drop-off within Amritsar city",
                              "Expert English/Hindi/Punjabi-speaking local guide",
                              "Guided tour of the village with cultural context",
                              "Participation in farming and hands-on activities",
                              "Folk music and dance performance",
                              "Home-cooked Punjabi lunch with organic ingredients",
                              "Bottled water for each guest",
                              "All entry fees and activity charges",
                              "Flexible timing to ensure the best experience",
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
                        </div>
                        <div>
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
                              "Meals or snacks outside of the included lunch",
                              "Photography fees for professional equipment",
                              "Gratuities for guides or locals (optional)",
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
                          <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-100">
                            <p className="text-sm text-green-800 flex items-start">
                              <Info className="w-4 h-4 mt-0.5 mr-2 flex-shrink-0" />
                              The home-cooked lunch is a
                              highlight of the tour,
                              featuring traditional Punjabi
                              dishes made with fresh,
                              locally sourced ingredients.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-8 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                          <Star className="w-5 h-5 text-green-500 mr-2" />
                          Our Commitment to Quality
                        </h3>
                        <p className="text-gray-700 mb-4">
                          We go beyond standard tours to
                          ensure your Village Tour
                          experience is authentic and
                          meaningful:
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {[
                            "Small group sizes (max 10 guests) for personalized attention",
                            "Vehicles maintained to the highest safety standards",
                            "Guides with deep local knowledge and connections to village communities",
                            "24/7 customer support before and during your tour",
                            "Flexible booking with free cancellation up to 24 hours prior",
                            "Respectful engagement ensuring benefit to local communities",
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
                      </div>
                    </div>
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
                    <div className="prose prose-lg max-w-none">
                      <h2 className="text-2xl font-bold text-gray-900 mb-6">
                        Cultural & Contextual Insights
                      </h2>
                      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 mb-6 border border-green-100">
                        <div className="flex items-start gap-3">
                          <div className="bg-green-100 p-2 rounded-lg mt-1">
                            <Star className="w-5 h-5 text-green-600" />
                          </div>
                          <p className="text-gray-700">
                            <span className="font-semibold">
                              Did you know?
                            </span>{" "}
                            Many Punjabi villages have a
                            strong tradition of community
                            service (Seva), similar to the
                            Langar at the Golden Temple,
                            where neighbors help each other
                            in farming and daily tasks.
                          </p>
                        </div>
                      </div>
                      <p className="text-lg text-gray-700 mb-6">
                        The Punjabi village is not just a
                        place—it's a way of life.
                        Understanding the cultural context
                        behind the activities and
                        interactions you'll experience
                        enhances your appreciation for the
                        warmth, traditions, and resilience
                        of rural communities.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                          <h3 className="font-bold text-lg text-gray-900 mb-4 flex items-center">
                            <BookOpen className="w-5 h-5 text-green-500 mr-2" />
                            Cultural Highlights
                          </h3>
                          <ul className="space-y-3">
                            {culturalHighlights.map(
                              (point, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start"
                                >
                                  <div className="bg-green-100 text-green-800 w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-xs font-bold mt-1">
                                    {idx + 1}
                                  </div>
                                  <span className="text-gray-700">
                                    {point}
                                  </span>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                          <h3 className="font-bold text-lg text-gray-900 mb-4 flex items-center">
                            <MapPin className="w-5 h-5 text-darkblue mr-2" />
                            Life in the Village
                          </h3>
                          <div className="space-y-4">
                            <div className="p-4 bg-blue-50 rounded-lg">
                              <h4 className="font-bold text-gray-900 mb-2">
                                Community and Family
                              </h4>
                              <p className="text-gray-700 text-sm">
                                Village life in Punjab is
                                deeply rooted in family
                                structures and community
                                bonds. Extended families
                                often live together, and
                                neighbors support each other
                                in daily tasks and
                                celebrations.
                              </p>
                            </div>
                            <div className="p-4 bg-green-50 rounded-lg">
                              <h4 className="font-bold text-gray-900 mb-2">
                                Agriculture and Seasons
                              </h4>
                              <p className="text-gray-700 text-sm">
                                Farming is the backbone of
                                village life. The rhythm of
                                sowing, growing, and
                                harvesting dictates the
                                annual cycle, with festivals
                                and activities closely tied
                                to the agricultural
                                calendar.
                              </p>
                            </div>
                            <div className="p-4 bg-purple-50 rounded-lg">
                              <h4 className="font-bold text-gray-900 mb-2">
                                Traditions and Festivals
                              </h4>
                              <p className="text-gray-700 text-sm">
                                Villages come alive during
                                festivals like Baisakhi,
                                Lohri, and Teej. These
                                celebrations involve
                                traditional music, dance
                                (Bhangra, Giddha), food, and
                                rituals that have been
                                passed down for generations.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                          Why Cultural Context Matters
                        </h3>
                        <p className="text-gray-700 mb-4">
                          When you understand the cultural
                          significance behind the activities
                          and interactions, your visit
                          becomes more respectful and
                          enriching. You'll gain insights
                          into a way of life that is both
                          simple and profound.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                          {[
                            {
                              title: "Deeper Appreciation",
                              description:
                                "Recognize the value and meaning behind traditional practices and hospitality.",
                              icon: "🔍",
                            },
                            {
                              title:
                                "Respectful Engagement",
                              description:
                                "Interact with villagers in a way that honors their customs and traditions.",
                              icon: "🙏",
                            },
                            {
                              title: "Lasting Memories",
                              description:
                                "Take away stories and understanding that go beyond typical tourist experiences.",
                              icon: "❤️",
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
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Pricing Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white block md:hidden rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-[#332D56] to-[#4E6688] p-5">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-amber-100 text-sm">
                      Starting from
                    </p>
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold text-white">
                        ₹1499
                      </span>
                      <span className="text-amber-100 ml-1">
                        per person
                      </span>
                    </div>
                  </div>
                  <div className="bg-white/20 px-3 py-1 rounded-full text-white text-sm">
                    Most Popular
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
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
                        (num) => (
                          <option key={num} value={num}>
                            {num} Guest{num > 1 ? "s" : ""}
                          </option>
                        )
                      )}
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
                      ₹{(1499 * guests).toLocaleString()}
                    </span>
                  </div>

                  <div className="border-t border-gray-200 mt-3 pt-3">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>
                        ₹{(1499 * guests).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Book Now Button */}

                <Link
                  to="/BookNow"
                  className="w-full bg-gradient-to-r from-[#332D56] to-[#4E6688] bg-darkblue text-white py-3.5 rounded-xl font-semibold hover:bg-darkblue/90 transition flex items-center justify-center"
                >
                  Book Now
                </Link>
                {/* Trust Indicators */}
                <div className="space-y-2 pt-2 border-t border-gray-200">
                  <div className="flex items-center text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    Free cancellation up to 24 hours before
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
            </motion.div>

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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {videos.map((video, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100"
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
                  </motion.div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Booking & Info */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
              {/* Pricing Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white hidden md:block rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
              >
                <div className="bg-gradient-to-r from-[#332D56] to-[#4E6688]  p-5 ">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-amber-100 text-sm">
                        Starting from
                      </p>
                      <div className="flex items-baseline">
                        <span className="text-3xl font-bold text-white">
                          ₹1499
                        </span>
                        <span className="text-amber-100 ml-1">
                          per person
                        </span>
                      </div>
                    </div>
                    <div className="bg-white/20 px-3 py-1 rounded-full text-white text-sm">
                      Most Popular
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
                        ₹{(1499 * guests).toLocaleString()}
                      </span>
                    </div>

                    <div className="border-t border-gray-200 mt-3 pt-3">
                      <div className="flex justify-between font-bold text-lg">
                        <span>Total</span>
                        <span>
                          ₹
                          {(1499 * guests).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Book Now Button */}

                  <Link
                    to="/BookNow"
                    className="w-full bg-gradient-to-r to-[#332D56] from-[#4E6688] text-white py-3.5 rounded-xl font-semibold hover:bg-darkblue/90 transition flex items-center justify-center"
                  >
                    Book Now
                  </Link>
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
              </motion.div>

              {/* Why Book With Us */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
              >
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Star className="w-5 h-5 text-green-500 mr-2" />
                    Why Book With Us?
                  </h3>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Authentic Experiences",
                        description:
                          "We work directly with local communities to ensure genuine interactions and benefit local people.",
                        icon: "🎭",
                      },
                      {
                        title: "Expert Local Guides",
                        description:
                          "Our guides are from the region and share deep cultural knowledge and personal stories.",
                        icon: "👨‍🏫",
                      },
                      {
                        title: "Cultural Respect",
                        description:
                          "We ensure you experience village life with proper understanding and respect for traditions.",
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
                      <div className="bg-green-100 text-green-800 w-10 h-10 rounded-full flex items-center justify-center font-bold mr-3">
                        4.8
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
                          Based on 156 verified reviews
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Need Help? */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-inner border border-blue-100 p-5"
              >
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
                      {/* <Mail className="w-4 h-4" /> */}
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
              </motion.div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-10 bg-gradient-to-r from-darkblue to-green-700 rounded-3xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-10">
              <h2 className="text-3xl font-bold text-white mb-4">
                Discover the Heart of Punjab
              </h2>
              <p className="text-xl text-blue-100 mb-6 max-w-xl">
                Join hundreds of travelers who have
                experienced the authentic warmth and culture
                of rural Punjab through our Village Tour.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {}}
                  className="px-6 py-3 bg-white text-darkblue font-semibold rounded-xl shadow-md hover:bg-gray-100 transition text-center"
                >
                  Book Your Village Adventure
                </button>
                <Link
                  to="/contact"
                  className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition text-center"
                >
                  Have Questions? Contact Us
                </Link>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-90"
                style={{
                  backgroundImage: `url('${images[1]}')`,
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-l from-darkblue to-transparent/50"></div>
            </div>
          </div>
        </motion.div>
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
                  src={images[currentImage]}
                  alt="Tour preview"
                  className="w-full h-full object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                  <div className="flex justify-between items-end">
                    <div>
                      <h2 className="text-sm lg:text-xl md:text-xl font-bold mb-0">
                        Punjabi Village Life
                      </h2>
                      <p className="text-gray-200">
                        {currentImage + 1} of{" "}
                        {images.length}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImage(
                            (currentImage -
                              1 +
                              images.length) %
                              images.length
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
                              images.length
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
