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

const FoodWalkingTour = () => {
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
    "/assets/FoodWalk/photo (63).png",
    "/assets/FoodWalk/photo (1).png",
    "/assets/FoodWalk/photo (2).png",
    "/assets/FoodWalk/photo (3).png",
    "/assets/FoodWalk/photo (4).png",
    "/assets/FoodWalk/photo (5).png",
    "/assets/FoodWalk/photo (6).png",
    "/assets/FoodWalk/photo (7).png",
    "/assets/FoodWalk/photo (8).png",
    "/assets/FoodWalk/photo (9).png",
    "/assets/FoodWalk/photo (10).png",
    "/assets/FoodWalk/photo (11).png",
    "/assets/FoodWalk/photo (12).png",
    "/assets/FoodWalk/photo (13).png",
    "/assets/FoodWalk/photo (14).png",
    "/assets/FoodWalk/photo (15).png",
    "/assets/FoodWalk/photo (16).png",
    "/assets/FoodWalk/photo (17).png",
    "/assets/FoodWalk/photo (18).png",
    "/assets/FoodWalk/photo (19).png",
    "/assets/FoodWalk/photo (20).png",
    "/assets/FoodWalk/photo (21).png",
    "/assets/FoodWalk/photo (22).png",
    "/assets/FoodWalk/photo (23).png",
    "/assets/FoodWalk/photo (24).png",
    "/assets/FoodWalk/photo (25).png",
    "/assets/FoodWalk/photo (26).png",
    "/assets/FoodWalk/photo (27).png",
    "/assets/FoodWalk/photo (28).png",
    "/assets/FoodWalk/photo (29).png",
    "/assets/FoodWalk/photo (30).png",
    "/assets/FoodWalk/photo (31).png",
    "/assets/FoodWalk/photo (32).png",
    "/assets/FoodWalk/photo (33).png",
    "/assets/FoodWalk/photo (34).png",
    "/assets/FoodWalk/photo (35).png",
    "/assets/FoodWalk/photo (36).png",
    "/assets/FoodWalk/photo (37).png",
    "/assets/FoodWalk/photo (38).png",
    "/assets/FoodWalk/photo (39).png",
    "/assets/FoodWalk/photo (40).png",
    "/assets/FoodWalk/photo (41).png",
    "/assets/FoodWalk/photo (42).png",
    "/assets/FoodWalk/photo (43).png",
    "/assets/FoodWalk/photo (44).png",
    "/assets/FoodWalk/photo (45).png",
    "/assets/FoodWalk/photo (46).png",
    "/assets/FoodWalk/photo (47).png",
    "/assets/FoodWalk/photo (48).png",
    "/assets/FoodWalk/photo (49).png",
    "/assets/FoodWalk/photo (50).png",
    "/assets/FoodWalk/photo (51).png",
    "/assets/FoodWalk/photo (52).png",
    "/assets/FoodWalk/photo (53).png",
    "/assets/FoodWalk/photo (54).png",
    "/assets/FoodWalk/photo (55).png",
    "/assets/FoodWalk/photo (56).png",
    "/assets/FoodWalk/photo (57).png",
    "/assets/FoodWalk/photo (58).png",
    "/assets/FoodWalk/photo (59).png",
    "/assets/FoodWalk/photo (60).png",
    "/assets/FoodWalk/photo (61).png",
    "/assets/FoodWalk/photo (62).png",
    "/assets/FoodWalk/photo (64).png",
    "/assets/FoodWalk/photo (65).png",
    "/assets/FoodWalk/photo (66).png",
    "/assets/FoodWalk/photo (67).png",
    "/assets/FoodWalk/photo (68).png",
    "/assets/FoodWalk/photo (69).png",
    "/assets/FoodWalk/photo (70).png",
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

  // Tour highlights with cultural context
  const highlights = [
    "Savor the authentic flavors of Amritsar through a curated journey of its most iconic street foods",
  "Watch skilled vendors prepare traditional dishes right before your eyes in bustling bazaars",
  "Indulge in melt-in-your-mouth Amritsari Kulcha served with spicy chole and tangy chutneys",
  "Sip on creamy, frothy lassi from legendary shops that have perfected the recipe over generations",
  "Explore hidden culinary gems known only to locals, each with its own story and heritage",
  "Learn about the cultural significance and history behind each dish from our expert food guides",
  "Experience the warm hospitality of Amritsari food vendors, many of whom carry forward decades-old family recipes",
  "Immerse yourself in the vibrant sights, sounds, and aromas of Amritsar’s bustling food streets",
  "End the tour on a sweet note with traditional Punjabi desserts like phirni or jalebi",
  ];

  // Itinerary details
  const itinerary = [
    {
      title: "Welcome & Culinary Briefing",
      duration: "15 min",
      description:
        "Meet your guide, get an introduction to Amritsari cuisine, and receive your tasting map.",
      icon: "👋",
    },
    {
      title: "Kulcha Landmark",
      duration: "45 min",
      description:
        "Visit a renowned spot for Amritsari Kulcha, learn its preparation secrets, and enjoy a tasting.",
      icon: "🍞",
    },
    {
      title: "Chhole Bhature Stop",
      duration: "1 hour",
      description:
        "Indulge in the iconic Chhole Bhature combo, understanding the balance of spicy chickpeas and fluffy fried bread.",
      icon: "🍛",
    },
    {
      title: "Local Sweet Shop",
      duration: "30 min",
      description:
        "Savor traditional Punjabi sweets like Jalebi or Gajar ka Halwa, learning about their festive significance.",
      icon: "🍬",
    },
    {
      title: "Lassi Tasting",
      duration: "30 min",
      description:
        "Cool down with the famous Amritsari Lassi, discovering its creamy texture and variations.",
      icon: "🥤",
    },
    {
      title: "Street Food Exploration",
      duration: "1 hour",
      description:
        "Wander through food alleys, trying smaller local snacks and experiencing the vibrant street food culture.",
      icon: "🍢",
    },
    {
      title: "Wrap-up & Recommendations",
      duration: "15 min",
      description:
        "Concluding remarks, Q&A, and sharing of a personalized list of food recommendations.",
      icon: "📝",
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
  ];

  // Cultural elements
  const culturalHighlights = [
    "Savor the authentic flavors of Amritsar through a curated journey of its most iconic street foods",
    "Watch skilled vendors prepare traditional dishes right before your eyes in bustling bazaars",
    "Indulge in melt-in-your-mouth Amritsari Kulcha served with spicy chole and tangy chutneys",
    "Sip on creamy, frothy lassi from legendary shops that have perfected the recipe over generations",
    "Explore hidden culinary gems known only to locals, each with its own story and heritage",
    "Learn about the cultural significance and history behind each dish from our expert food guides",
    "Experience the warm hospitality of Amritsari food vendors, many of whom carry forward decades-old family recipes",
    "Immerse yourself in the vibrant sights, sounds, and aromas of Amritsar’s bustling food streets",
    "End the tour on a sweet note with traditional Punjabi desserts like phirni or jalebi",
  ];

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-6 sm:py-8">
        {/* Breadcrumb Navigation */}

        {/* Tour Header */}
        <header className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                  Culinary Journey
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                AWT's Special{" "}
                <span className="text-gradient bg-gradient-to-r from-[#332D56] to-[#4E6688] bg-clip-text text-transparent">
                  Food Walking Tour 
                </span>
              </h1>

              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <Star className="text-yellow-400 fill-current w-5 h-5" />
                  <span className="ml-1 font-medium">
                    4.9
                  </span>
                  <span className="text-gray-500 ml-1">
                    (218 reviews)
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
                    alt={`Golden Temple Tour - Image ${
                      currentImage + 1
                    }`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />

                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <div className="flex justify-between items-center">
                      <h2 className="text-xl font-bold">
                        Food Walking Tour
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
                <nav className="flex -mb-px space-x-6 overflow-x-auto scrollbar-hide sm:space-x-8 ">
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
                      label: "Spiritual Context",
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
                        Food Walking Tour Overview
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
                            "Come hungry! Our food walk
                            includes generous tastings at
                            multiple stops, so arrive with
                            space for a full meal
                            experience.",
                          </p>
                        </div>
                      </div>

                      <p className="text-lg text-gray-700 mb-6">
                        "Join us on a mouthwatering journey
                        through Amritsar's legendary food
                        scene. This curated culinary
                        adventure takes you beyond the
                        tourist spots to discover authentic
                        flavors and hidden gems known only
                        to locals."
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
                                Early morning for best
                                experience of food stalls
                                and less crowd.
                              </div>
                            </div>
                            <div className="flex">
                              <div className="w-32 font-medium text-gray-700">
                                Dress Code:
                              </div>
                              <div>Modest clothing;</div>
                            </div>
                            <div className="flex">
                              <div className="w-32 font-medium text-gray-700">
                                Group Size:
                              </div>
                              <div>Max 10 guests</div>
                            </div>
                          </div>

                          <div className="mt-4 p-3 bg-amber-50 rounded-lg border border-amber-100">
                            <p className="text-sm text-amber-800 flex items-start">
                              <Info className="w-4 h-4 mt-0.5 mr-2 flex-shrink-0" />
                              All participants should be
                              prepared for walking through
                              busy streets and markets.
                              Comfortable footwear is
                              recommended, and we maintain
                              hygiene by choosing trusted,
                              clean vendors. Drinking water
                              and hand sanitizers are
                              provided throughout the tour.
                            </p>
                          </div>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
                        Why This Tour Stands Out
                      </h3>
                      <p className="text-gray-700 mb-4">
                        "Unlike standard food tours, our
                        Amritsari Food Walk provides
                        authentic flavors and culinary
                        understanding that transforms a
                        simple meal into a meaningful
                        gastronomic journey. Our guides
                        aren't just knowledgeable about the
                        local cuisine—they are deeply
                        connected to the cultural heritage
                        of Amritsar's food scene and share
                        personal stories that bring the
                        flavors to life."
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
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
                        <div className="absolute left-3.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-darkblue to-amber-400" />

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

                      <div className="mt-8 p-5 bg-gradient-to-r from-amber-50 to-blue-50 rounded-xl border border-amber-100">
                        <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                          <Star className="w-5 h-5 text-amber-500 mr-2" />
                          Insider Tip
                        </h3>
                        <p className="text-gray-700">
                          "The best time to experience
                          Amritsar's food culture is between
                          11 AM and 3 PM or 6 PM and 9 PM
                          when local eateries are busiest
                          and freshest. We've timed our tour
                          to hit each location at its peak
                          freshness and flavor."
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
                              "Expert English/Hindi-speaking local food guide",
                              "6-8 curated food tastings",
                              "Bottled water throughout the tour",
                              "Informative commentary on food history and culture",
                              "Personalized list of food recommendations",
                              "Insights into local culinary techniques",
                              ,
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
                              "Meals or snacks (though we'll stop at a recommended local eatery)",
                              "Gratuities for your guide and driver",
                              "Personal expenses and souvenirs",
                              "Travel insurance",
                              "Additional activities not mentioned in the itinerary",
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
                              "The tour includes multiple
                              local food tastings, where
                              you'll sample authentic
                              Amritsari street food and
                              dishes at renowned eateries,
                              experiencing the rich flavors
                              and culinary traditions of the
                              region."
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-8 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                          <Star className="w-5 h-5 text-amber-500 mr-2" />
                          Our Commitment to Quality
                        </h3>
                        <p className="text-gray-700 mb-4">
                          We go beyond standard tours to
                          ensure your food walking tour
                          experience is authentic and
                          meaningful:
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {[
                            "Small group sizes (max 10 guests) for personalized attention",
                            "Vehicles maintained to the highest safety standards",
                            "Guides with deep spiritual understanding and personal connection to Sikh traditions",
                            "24/7 customer support before and during your tour",
                            "Flexible booking with free cancellation up to 24 hours prior",
                            "Real-time updates on ceremony timing and any schedule changes",
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
                        Spiritual & Cultural Context
                      </h2>

                      <div className="bg-gradient-to-r from-amber-50 to-blue-50 rounded-xl p-6 mb-6 border border-amber-100">
                        <div className="flex items-start gap-3">
                          <div className="bg-amber-100 p-2 rounded-lg mt-1">
                            <Star className="w-5 h-5 text-amber-600" />
                          </div>
                          <p className="text-gray-700">
                            <span className="font-semibold">
                              Did you know?
                            </span>{" "}
                            "Amritsar's street food culture
                            embodies the spirit of community
                            and inclusivity. The city's food
                            joints and eateries welcome
                            people from all walks of life,
                            serving traditional dishes that
                            bring together people from
                            different backgrounds and
                            cultures, regardless of their
                            social status or background."
                          </p>
                        </div>
                      </div>

                      <p className="text-lg text-gray-700 mb-6">
                        Understanding the cultural and
                        spiritual significance behind
                        Amritsari cuisine transforms a meal
                        into a meaningful experience. You'll
                        discover how food is not just
                        sustenance but a reflection of the
                        city's history, religious practices,
                        and community spirit.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                          <h3 className="font-bold text-lg text-gray-900 mb-4 flex items-center">
                            <BookOpen className="w-5 h-5 text-amber-500 mr-2" />
                            Culinary Significance
                          </h3>
                          <ul className="space-y-3">
                            {culturalHighlights.map(
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
                        </div>

                        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                          <h3 className="font-bold text-lg text-gray-900 mb-4 flex items-center">
                            <MapPin className="w-5 h-5 text-darkblue mr-2" />
                            Historical Context
                          </h3>
                          <div className="space-y-4">
                            <div className="p-4 bg-amber-50 rounded-lg">
                              <h4 className="font-bold text-gray-900 mb-2">
                                Origins of Amritsari Kulcha
                              </h4>
                              <p className="text-gray-700 text-sm">
                                The famous Amritsari Kulcha
                                is said to have originated
                                in the bustling lanes around
                                the Golden Temple. Its
                                unique preparation method
                                and distinct taste have made
                                it a symbol of the city's
                                culinary identity.
                              </p>
                            </div>

                            <div className="p-4 bg-blue-50 rounded-lg">
                              <h4 className="font-bold text-gray-900 mb-2">
                                The Legacy of Jalebi Wala
                              </h4>
                              <p className="text-gray-700 text-sm">
                                The iconic Jalebi Wala near
                                the Golden Temple has been
                                serving crispy jalebis for
                                generations. This sweet
                                treat, paired with thick
                                lassi, became synonymous
                                with the Amritsar
                                experience.
                              </p>
                            </div>
                            <div className="p-4 bg-green-50 rounded-lg">
                              <h4 className="font-bold text-gray-900 mb-2">
                                The Legacy of Gian di Lassi
                              </h4>
                              <p className="text-gray-700 text-sm">
                                Gian di Lassi, located near
                                the Golden Temple, is
                                legendary for its thick,
                                creamy, and perfectly spiced
                                lassi. This refreshing drink
                                has been a cornerstone of
                                the Amritsari food
                                experience for decades,
                                often paired with the city's
                                famous jalebis or enjoyed on
                                its own as a cooling
                                respite.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                          Why Culinary Context Matters
                        </h3>
                        <p className="text-gray-700 mb-4">
                          When you understand the stories
                          and traditions behind each dish,
                          your culinary journey becomes
                          transformative rather than merely
                          observational. You'll appreciate
                          the subtle techniques, recognize
                          the significance of ingredients,
                          and gain insights that stay with
                          you long after you leave.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                          {[
                            {
                              title: "Deeper Appreciation",
                              description:
                                "Recognize the history and effort behind each recipe and ingredient",
                              icon: "🔍",
                            },
                            {
                              title: "Cultural Connection",
                              description:
                                "Connect with the local community through shared food traditions",
                              icon: "🤝",
                            },
                            {
                              title: "Authentic Experience",
                              description:
                                "Move beyond taste to understand the cultural significance of each bite",
                              icon: "🍽️",
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
                  className="w-full bg-gradient-to-r from-[#332D56] to-[#4E6688] text-white py-3.5 rounded-xl font-semibold hover:bg-darkblue/90 transition flex items-center justify-center"
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
              {/* Pricing Card */}
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
                    className="w-full bg-gradient-to-r from-[#332D56] to-[#4E6688]  text-white py-3.5 rounded-xl font-semibold hover:bg-darkblue/90 transition flex items-center justify-center"
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
                        title: "Spiritual Expertise",
                        description:
                          "Our guides are not just knowledgeable—they're deeply connected to Sikh traditions and share personal spiritual insights",
                        icon: "☸️",
                      },
                      {
                        title: "Optimal Timing",
                        description:
                          "We schedule visits to witness key ceremonies and experience the temple at its most serene",
                        icon: "⏰",
                      },
                      {
                        title: "Cultural Respect",
                        description:
                          "We ensure you experience the temple with proper understanding and reverence for its sacred nature",
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
                          Based on 218 verified reviews
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
                Experience the Spiritual Heart of Punjab
              </h2>
              <p className="text-xl text-blue-100 mb-6 max-w-xl">
                Join thousands of travelers who have
                transformed their understanding of
                spirituality through our Golden Temple tour.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {}}
                  className="px-6 py-3 bg-white text-darkblue font-semibold rounded-xl shadow-md hover:bg-gray-100 transition text-center"
                >
                  Book Your Spiritual Journey
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
              <div className="absolute inset-0 bg-[url('/assets/GoldenTemple/photo1.png')] bg-cover bg-center opacity-90"></div>
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
                       Food Walking Tour
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

export default FoodWalkingTour;
