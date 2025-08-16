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
  Mails,
  Utensils,
  Landmark,
  Shield,
} from "lucide-react";
import Navbar from "../Navbar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SuggestiveTours from "../SuggestiveTours";
import WhyUs from "../WhyUs";
import Footer from "../Footer";
import BottomBar from "../bottomBar";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// Reusable Button component
const Button = ({
  children,
  className = "",
  variant = "default",
  ...props
}) => {
  const base =
    "px-4 py-2 rounded-md text-sm font-medium transition";
  const variants = {
    default: "bg-darkblue hover:bg-lightblue text-white",
    outline:
      "border border-gray-300 text-gray-700 hover:bg-gray-100",
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

// Reusable Card component
const Card = ({ children, className = "" }) => (
  <div
    className={`bg-white shadow-md rounded-2xl ${className}`}
  >
    {children}
  </div>
);

const TourDetailsPage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const navigate = useNavigate();
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
    "Day 1: Explore Jallianwala Bagh and learn about its significance in India's freedom struggle",
    "Day 1: Visit the awe-inspiring Golden Temple, the spiritual heart of Amritsar",
    "Day 1: Discover the stories of India's partition at the renowned Partition Museum",
    "Day 1: Experience the patriotic Wagah Border ceremony, witnessing the vibrant flag-lowering ritual",
    "Day 2: Embark on a guided Food Walking Tour and savor authentic Amritsari flavors",
    "Day 2: Enjoy a Heritage Walk through Amritsar's historic streets and vibrant bazaars",
    "Day 2: Visit the sacred Durgiana Mandir, known for its architectural beauty",
    "Day 2: Explore Gobindgarh Fort (ticket not included), delving into its rich history and cultural exhibits",
    "Day 3: Experience rural Punjab with a village tour, including a tractor ride and traditional meal",
    "Day 3: Visit the historic Ram Bagh and learn about the royal legacy of Maharaja Ranjit Singh",
    "Benefit from seamless transfers, expert guidance, and personalized recommendations throughout all three days",
  ];

  // Itinerary details
  const itinerary = [
    // Day 1
    {
      title: "Day 1: Hotel Pickup & Introduction",
      duration: "15 min",
      description:
        "Begin your journey with a convenient pickup from your hotel. Meet your expert guide and get a brief overview of Amritsar's rich history and the day's itinerary.",
    },
    {
      title: "Day 1: Jallianwala Bagh",
      duration: "45 min",
      description:
        "Visit the historic Jallianwala Bagh, the site of the tragic 1919 massacre. Explore the memorial, see the preserved bullet marks, and learn about its significance in India's freedom movement.",
    },
    {
      title: "Day 1: Partition Museum",
      duration: "45 min",
      description:
        "Discover the moving stories of India's partition at the renowned Partition Museum. View exhibits, personal accounts, and artifacts that bring this pivotal chapter of history to life.",
    },
    {
      title: "Day 1: Golden Temple (Sri Harmandir Sahib)",
      duration: "1 hr 15 min",
      description:
        "Experience the spiritual heart of Amritsar at the Golden Temple. Marvel at its stunning architecture, participate in the serene atmosphere, and witness the community kitchen (Langar) in action.",
    },
    {
      title: "Day 1: Heritage Street & Local Bazaars",
      duration: "40 min",
      description:
        "Stroll along Heritage Street, lined with colonial-era buildings, vibrant shops, and local eateries. Enjoy some time for shopping and tasting authentic Amritsari snacks.",
    },
    {
      title: "Day 1: Lunch Break (Optional)",
      duration: "1 hr",
      description:
        "Take a break for lunch at a recommended local restaurant or enjoy the Langar at the Golden Temple (meal not included unless specified).",
    },
    {
      title: "Day 1: Transfer to Wagah Border",
      duration: "45 min",
      description:
        "Travel in a comfortable, air-conditioned vehicle to the Wagah Border, located on the India-Pakistan frontier.",
    },
    {
      title: "Day 1: Wagah Border Ceremony",
      duration: "1 hr 30 min",
      description:
        "Witness the electrifying Beating Retreat ceremony at the Wagah Border. Experience the patriotic fervor as soldiers from both nations perform the elaborate flag-lowering ritual.",
    },
    {
      title: "Day 1: Return to Hotel",
      duration: "30 min",
      description:
        "Relax as you are transferred back to your hotel, concluding your memorable full-day excursion in Amritsar.",
    },
    // Day 2
    {
      title: "Day 2: Hotel Pickup",
      duration: "15 min",
      description:
        "Start your second day with a comfortable pickup from your hotel. Your guide will share insights about today's culinary and heritage journey.",
    },
    {
      title: "Day 2: Food Walking Tour",
      duration: "1 hr 30 min",
      description:
        "Embark on a guided food walk through Amritsar's bustling streets. Savor authentic Amritsari delicacies and learn about the city's culinary heritage.",
    },
    {
      title: "Day 2: Heritage Walk",
      duration: "1 hr",
      description:
        "Explore Amritsar's historic lanes and vibrant bazaars on a heritage walk. Discover hidden gems, architectural marvels, and local stories.",
    },
    {
      title: "Day 2: Durgiana Mandir",
      duration: "40 min",
      description:
        "Visit the sacred Durgiana Mandir, known for its beautiful architecture and spiritual ambiance.",
    },
    {
      title: "Day 2: Gobindgarh Fort (Ticket Excluded)",
      duration: "1 hr",
      description:
        "Delve into Amritsar's history at Gobindgarh Fort. Explore its museums, cultural exhibits, and vibrant atmosphere. (Entry ticket not included.)",
    },
    {
      title: "Day 2: Return/Drop-off",
      duration: "30 min",
      description:
        "Conclude your second day with a comfortable transfer back to your hotel or preferred location.",
    },
    // Day 3
    {
      title: "Day 3: Hotel Pickup",
      duration: "15 min",
      description:
        "Begin your final day with a pickup from your hotel. Your guide will introduce you to the rural side of Punjab.",
    },
    {
      title: "Day 3: Village Tour with Tractor Ride",
      duration: "2 hrs",
      description:
        "Experience rural Punjab life with a guided village tour. Enjoy a traditional tractor ride through farmlands and learn about local agricultural practices.",
    },
    {
      title: "Day 3: Traditional Punjabi Meal",
      duration: "1 hr",
      description:
        "Savor a traditional Punjabi meal prepared by a local family. Experience authentic flavors and learn about rural culinary traditions.",
    },
    {
      title: "Day 3: Ram Bagh Visit",
      duration: "1 hr",
      description:
        "Visit the historic Ram Bagh, the former summer residence of Maharaja Ranjit Singh. Learn about the royal legacy and architectural significance of this beautiful garden.",
    },
    {
      title: "Day 3: Return to Hotel",
      duration: "30 min",
      description:
        "Conclude your three-day excursion with a comfortable transfer back to your hotel, filled with unforgettable memories.",
    },
  ];

  // Video content
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
    {
      url: "https://www.youtube.com/embed/52nlfLk99gU",
      title:
        "Golden Temple Visitor Guide: Tips & Etiquette",
      description:
        "Essential tips and etiquette for first-time visitors to the Golden Temple.",
    },
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
                <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                  3-Day Tour
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Comprehensive Experience
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                AWT's Package{" "}
                <span className="text-gradient bg-gradient-to-r from-[#332D56] to-[#4E6688] bg-clip-text text-transparent">
                  Three Day Excursion
                </span>
              </h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <Star className="text-yellow-400 fill-current w-5 h-5" />
                  <span className="ml-1 font-medium">
                    4.9
                  </span>
                  <span className="text-gray-500 ml-1">
                    (245 reviews)
                  </span>
                </div>
                <div className="flex items-center text-gray-500">
                  <MapPin className="w-5 h-5 mr-1" />
                  <span>Amritsar & Surrounds, India</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <Clock className="w-5 h-5 mr-1" />
                  <span>3 Days (8-10 hrs each)</span>
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
                    alt={`Three Day Excursion - Image ${
                      currentImage + 1
                    }`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <div className="flex justify-between items-center">
                      <h2 className="text-xl font-bold">
                        Three Day Excursion
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
                <nav className="flex -mb-px space-x-6 overflow-x-auto scrollbar-hide sm:space-x-8">
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
                        Three Day Excursion Overview
                      </h2>
                      <div className="bg-gradient-to-r from-amber-50 to-blue-50 rounded-xl p-6 mb-6 border border-amber-100">
                        <div className="flex items-start gap-3">
                          <div className="bg-amber-100 p-2 rounded-lg mt-1">
                            <Star className="w-5 h-5 text-amber-600" />
                          </div>
                          <p className="text-gray-700">
                            <span className="font-semibold">
                              Pro Tip:
                            </span>{" "}
                            Start all three days early in
                            the morning to make the most of
                            your experience and avoid crowds
                            at popular attractions.
                          </p>
                        </div>
                      </div>
                      <p className="text-lg text-gray-700 mb-6">
                        Experience the ultimate Amritsar
                        adventure with our comprehensive
                        three-day excursion. On Day 1,
                        immerse yourself in the city's
                        history with visits to Jallianwala
                        Bagh, the Golden Temple, Partition
                        Museum, and the electrifying Wagah
                        Border ceremony. Day 2 takes you on
                        a culinary journey through
                        Amritsar's famous food scene,
                        heritage walks, and visits to
                        Durgiana Mandir and Gobindgarh Fort.
                        On Day 3, venture into rural Punjab
                        for an authentic village experience
                        including a tractor ride,
                        traditional meal, and a visit to the
                        historic Ram Bagh. Enjoy expert
                        guidance, comfortable transfers, and
                        a well-organized itinerary for an
                        unforgettable Amritsar experience.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                          <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center">
                            <MapPin className="w-5 h-5 text-darkblue mr-2" />
                            Key Highlights
                          </h3>
                          <ul className="space-y-3">
                            {highlights
                              .slice(0, 5)
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
                                .slice(5)
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
                              <div>
                                3 Days (8-10 hours each)
                              </div>
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
                                Morning start for all days
                              </div>
                            </div>
                            <div className="flex">
                              <div className="w-32 font-medium text-gray-700">
                                Group Size:
                              </div>
                              <div>Max 10 guests</div>
                            </div>
                          </div>
                        </div>
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
                        <div className="absolute left-3.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-darkblue to-amber-400" />
                        {itinerary
                          .slice(
                            0,
                            showFullItinerary
                              ? itinerary.length
                              : 10
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
                              "Expert-guided tour covering Jallianwala Bagh, Partition Museum, Golden Temple, and Wagah Border (Day 1)",
                              "Food Walking Tour with tasting of authentic Amritsari delicacies (Day 2)",
                              "Guided Heritage Walk through Amritsar's historic streets and vibrant bazaars (Day 2)",
                              "Visit to Durgiana Mandir (Day 2)",
                              "Visit to Gobindgarh Fort (entry ticket not included) (Day 2)",
                              "Rural Punjab village tour with tractor ride (Day 3)",
                              "Traditional Punjabi meal with a local family (Day 3)",
                              "Visit to Ram Bagh (Day 3)",
                              "All transfers in a comfortable, air-conditioned vehicle",
                              "Assistance with entry arrangements at all major sites",
                              "Insightful commentary on Amritsar's history, culture, and significance of each site",
                              "Opportunities for photo stops at iconic landmarks",
                              "Personalized recommendations for further exploration in Amritsar",
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
                              "Meals beyond included tastings",
                              "Gratuities for guide and driver",
                              "Personal purchases or souvenirs",
                              "Entry fees to paid attractions (if any, optional)",
                              "Gobindgarh Fort entry ticket",
                              "Partition Museum ticket",
                              "Hotel accommodation",
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
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Pricing Card - Mobile */}
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
                        ₹2999
                      </span>
                      <span className="text-amber-100 ml-1">
                        per person
                      </span>
                    </div>
                  </div>
                  <div className="bg-white/20 px-3 py-1 rounded-full text-white text-sm">
                    Comprehensive
                  </div>
                </div>
              </div>
              <div className="p-5 space-y-5">
                {/* Date Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Start Date
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
                      ₹{(2999 * guests).toLocaleString()}
                    </span>
                  </div>
                  <div className="border-t border-gray-200 mt-3 pt-3">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>
                        ₹{(2999 * guests).toLocaleString()}
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
            <section className="mb-10 mt-10">
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
              {/* Pricing Card - Desktop */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white hidden md:block rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
              >
                <div className="bg-gradient-to-r from-[#332D56] to-[#4E6688] p-5">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-amber-100 text-sm">
                        Starting from
                      </p>
                      <div className="flex items-baseline">
                        <span className="text-3xl font-bold text-white">
                          ₹2999
                        </span>
                        <span className="text-amber-100 ml-1">
                          per person
                        </span>
                      </div>
                    </div>
                    <div className="bg-white/20 px-3 py-1 rounded-full text-white text-sm">
                      Comprehensive
                    </div>
                  </div>
                </div>
                <div className="p-5 space-y-5">
                  {/* Date Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Select Start Date
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
                        ₹{(2999 * guests).toLocaleString()}
                      </span>
                    </div>
                    <div className="border-t border-gray-200 mt-3 pt-3">
                      <div className="flex justify-between font-bold text-lg">
                        <span>Total</span>
                        <span>
                          ₹
                          {(2999 * guests).toLocaleString()}
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
                    <Star className="w-5 h-5 text-amber-500 mr-2" />
                    Why Book With Us?
                  </h3>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Expert Guides",
                        description:
                          "Our knowledgeable guides provide deep insights into Amritsar's history and culture",
                        icon: "🧭",
                      },
                      {
                        title: "Comfortable Transfers",
                        description:
                          "Travel in air-conditioned vehicles for a stress-free experience",
                        icon: "🚗",
                      },
                      {
                        title: "Comprehensive Experience",
                        description:
                          "Explore history, spirituality, culture, cuisine, and rural life in one package",
                        icon: "📅",
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
                        4.9
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
                          Based on 245 verified reviews
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
                        +91 95923 42444
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                      <Mails className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-medium">
                        Email Us
                      </p>
                      <a
                        href="mailto:info@amritsartours.com"
                        className="text-darkblue hover:underline"
                      >
                        info@amritsarwalkingtours.com
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
          className="mt-10 bg-gradient-to-r from-darkblue to-indigo-700 rounded-3xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-10">
              <h2 className="text-3xl font-bold text-white mb-4">
                Experience the Best of Amritsar in Three
                Days
              </h2>
              <p className="text-xl text-blue-100 mb-6 max-w-xl">
                Join thousands of travelers who have
                discovered the rich history, culture,
                flavors, and rural life of Amritsar through
                our comprehensive three-day tour.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    navigate("/BookNow");
                  }}
                  className="px-6 py-3 bg-white text-darkblue font-semibold rounded-xl shadow-md hover:bg-gray-100 transition text-center"
                >
                  Book Your Tour
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
              <div className="absolute inset-0 bg-[url('/assets/WagahBorder/photo28.png')] bg-cover bg-center opacity-90"></div>
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
                        Three Day Excursion
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
