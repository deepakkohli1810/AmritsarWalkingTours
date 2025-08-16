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
    "/assets/GoldenTemple/photo17.png",
    "/assets/GoldenTemple/photo13.png",
    "/assets/GoldenTemple/photo14.png",
    "/assets/GoldenTemple/photo15.png",
    "/assets/GoldenTemple/photo16.png",
    "/assets/GoldenTemple/photo18.png",
    "/assets/GoldenTemple/photo19.png",
    "/assets/GoldenTemple/photo20.png",
    "/assets/GoldenTemple/photo21.png",
    "/assets/GoldenTemple/photo22.png",
    "/assets/GoldenTemple/photo23.png",
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
    "Experience the spiritual serenity of the Harmandir Sahib (Golden Temple), the holiest site in Sikhism",
    "Witness the breathtaking sight of the Golden Temple illuminated at night, reflecting in the Amrit Sarovar",
    "Participate in the Langar (community kitchen) serving free meals to thousands of visitors daily",
    "Learn about Sikh principles of equality, service, and community through guided storytelling",
    "Observe the sacred rituals including the Palki Sahib ceremony and continuous recitation of Gurbani",
    "Discover the rich history and architectural beauty of the Golden Temple complex",
    "Experience the profound spiritual atmosphere that transcends religious boundaries",
    "Receive personalized attention from our expert guides who are deeply connected to Sikh traditions",
  ];

  // Itinerary details
  const itinerary = [
    {
      title: "Hotel Pickup",
      duration: "09:00 AM",
      description:
        "Your journey begins with a comfortable pickup from your hotel in Amritsar. Our guide will share insights about the day ahead and the significance of the Golden Temple.",
    },
    {
      title: "Introduction to Sikhism",
      duration: "15 min",
      description:
        "Learn the foundational principles of Sikhism and the historical context of the Golden Temple before your visit.",
    },
    {
      title: "Parikrama (Circumambulation)",
      duration: "20 min",
      description:
        "Walk along the marble pathway surrounding the Amrit Sarovar (Pool of Nectar) while learning about its spiritual significance.",
    },
    {
      title: "Darshan of Harmandir Sahib",
      duration: "45 min",
      description:
        "Enter the Golden Temple and experience the profound spiritual atmosphere. Witness the stunning architecture and golden facade up close.",
    },
    {
      title: "Akal Takht Visit",
      duration: "20 min",
      description:
        "Visit the Akal Takht, the highest seat of temporal authority in Sikhism, and learn about its role in Sikh governance and history.",
    },
    {
      title: "Baba Budha Sahib Beri",
      duration: "15 min",
      description:
        "Pay respects at the historic Beri tree where Baba Budha Ji, a revered Sikh figure, meditated and served the Sikh Gurus.",
    },
    {
      title: "Langar Experience",
      duration: "30 min",
      description:
        "Participate in the world's largest community kitchen, where volunteers serve free meals to all visitors regardless of background.",
    },
    {
      title: "Sikh Museum Visit",
      duration: "25 min",
      description:
        "Explore the Central Sikh Museum to learn about Sikh history, martyrs, and the evolution of the Golden Temple.",
    },
    {
      title: "Return to Hotel",
      duration: "05:00 PM",
      description:
        "Reflect on your spiritual journey as you return to your hotel, with opportunities to ask your guide additional questions.",
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
    "The Golden Temple's architecture embodies Sikh principles: the four entrances represent openness to all people regardless of caste, creed, or gender",
    "The temple sits below ground level, symbolizing humility and the need to shed ego before approaching the divine",
    "The name 'Harmandir Sahib' means 'Temple of God,' while 'Darbar Sahib' refers to the 'Sacred Court,' emphasizing its welcoming nature",
    "The Golden Temple's design reflects a synthesis of Hindu and Islamic architectural elements, representing religious harmony",
    "The Amrit Sarovar (Pool of Nectar) surrounding the temple is believed to have healing properties and spiritual significance",
    "The continuous recitation of Gurbani (Sikh scriptures) creates a unique spiritual atmosphere that has persisted for centuries",
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
                  Spiritual Journey
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                AWT's Special{" "}
                <span className="text-gradient bg-gradient-to-r from-[#332D56] to-[#4E6688] bg-clip-text text-transparent">
                  Golden Temple Tour
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
                        Harmandir Sahib
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
                        Golden Temple Tour Overview
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
                            Visit early morning to
                            experience the temple at its
                            most serene, when the golden
                            facade reflects in the Amrit
                            Sarovar as the first rays of
                            sunlight appear.
                          </p>
                        </div>
                      </div>

                      <p className="text-lg text-gray-700 mb-6">
                        Embark on a profound spiritual
                        journey to the Golden Temple
                        (Harmandir Sahib), the holiest
                        shrine in Sikhism. This tour offers
                        more than just sightseeing—it
                        provides deep cultural
                        understanding, spiritual insight,
                        and a transformative experience at
                        one of the world's most revered
                        places of worship.
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
                                Early morning or evening for
                                spiritual ceremonies
                              </div>
                            </div>
                            <div className="flex">
                              <div className="w-32 font-medium text-gray-700">
                                Dress Code:
                              </div>
                              <div>
                                Modest clothing; head
                                covering required (scarves
                                provided)
                              </div>
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
                              All visitors must cover their
                              heads and remove shoes before
                              entering the complex. We
                              provide scarves and assist
                              with shoe storage.
                            </p>
                          </div>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
                        Why This Tour Stands Out
                      </h3>
                      <p className="text-gray-700 mb-4">
                        Unlike standard sightseeing tours,
                        our Golden Temple experience
                        provides authentic access and
                        spiritual understanding that
                        transforms a simple visit into a
                        meaningful journey. Our guides
                        aren't just knowledgeable about the
                        temple's history—they are deeply
                        connected to Sikh traditions and
                        share personal stories that bring
                        the experience to life.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                        {[
                          {
                            title:
                              "Authentic Spiritual Experience",
                            description:
                              "We time your visit to witness key ceremonies and provide context that enhances your spiritual connection",
                            icon: "🙏",
                          },
                          {
                            title: "Personalized Guidance",
                            description:
                              "Small groups ensure individual attention and opportunities for meaningful dialogue",
                            icon: "👥",
                          },
                          {
                            title: "Cultural Immersion",
                            description:
                              "Experience the Langar and other traditions with proper understanding and respect",
                            icon: "🍛",
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
                          The early morning visit (around
                          4-5 AM) offers the most profound
                          spiritual experience when the
                          temple is illuminated against the
                          pre-dawn sky. Our guides time your
                          arrival perfectly to witness this
                          magical moment and the first
                          recitations of the day. Don't
                          worry about the early hour—our
                          comfortable transportation makes
                          it easy.
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
                              "Private air-conditioned transportation to and from Golden Temple",
                              "Hotel pickup and drop-off within Amritsar city",
                              "Expert English/Hindi/Punjabi-speaking local guide with deep spiritual knowledge",
                              "Head covering (scarf) for temple entry",
                              "Guided tour of the Golden Temple complex with cultural context",
                              "Langar (community kitchen) experience with explanation",
                              "Visit to the Sikh Museum for historical context",
                              "Bottled water for each guest",
                              "All entry fees and special access permissions",
                              "Flexible timing to ensure best experience of key ceremonies",
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
                              "Meals outside of Langar experience",
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
                              The Langar experience is
                              included, where you'll share a
                              simple vegetarian meal with
                              thousands of visitors as an
                              embodiment of Sikh principles.
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
                          ensure your Golden Temple
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
                            The Golden Temple's architecture
                            embodies the core Sikh
                            principles of equality and
                            openness. Its four entrances
                            welcome people from all four
                            directions and all walks of
                            life, regardless of caste,
                            creed, or gender.
                          </p>
                        </div>
                      </div>

                      <p className="text-lg text-gray-700 mb-6">
                        The Golden Temple is not merely an
                        architectural marvel—it's a living
                        embodiment of Sikh philosophy and
                        spirituality. Understanding the
                        deeper meaning behind what you see
                        transforms your visit from a simple
                        sightseeing experience to a profound
                        spiritual journey.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                          <h3 className="font-bold text-lg text-gray-900 mb-4 flex items-center">
                            <BookOpen className="w-5 h-5 text-amber-500 mr-2" />
                            Spiritual Significance
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
                            <div className="p-4 bg-blue-50 rounded-lg">
                              <h4 className="font-bold text-gray-900 mb-2">
                                Founding of Harmandir Sahib
                              </h4>
                              <p className="text-gray-700 text-sm">
                                The foundation stone was
                                laid by Sufi saint Hazrat
                                Mian Mir in 1588,
                                symbolizing religious
                                harmony. The temple was
                                completed by Guru Arjan Dev,
                                the fifth Sikh Guru, who
                                envisioned it as a place
                                open to all.
                              </p>
                            </div>

                            <div className="p-4 bg-amber-50 rounded-lg">
                              <h4 className="font-bold text-gray-900 mb-2">
                                The Amrit Sarovar
                              </h4>
                              <p className="text-gray-700 text-sm">
                                The pool surrounding the
                                temple is believed to have
                                healing properties. Its name
                                "Amrit Sarovar" means "Pool
                                of Nectar," and taking a dip
                                in its waters is considered
                                spiritually purifying.
                              </p>
                            </div>

                            <div className="p-4 bg-purple-50 rounded-lg">
                              <h4 className="font-bold text-gray-900 mb-2">
                                The Golden Transformation
                              </h4>
                              <p className="text-gray-700 text-sm">
                                The temple was covered in
                                gold foil during the reign
                                of Maharaja Ranjit Singh in
                                the early 19th century,
                                giving it the "Golden
                                Temple" name by which it's
                                widely known today.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                          Why Spiritual Context Matters
                        </h3>
                        <p className="text-gray-700 mb-4">
                          When you understand the spiritual
                          significance behind each element
                          of the Golden Temple experience,
                          your visit becomes transformative
                          rather than merely observational.
                          You'll notice details others miss
                          and gain insights that stay with
                          you long after you leave.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                          {[
                            {
                              title: "Deeper Understanding",
                              description:
                                "Recognize the symbolism in the architecture and rituals that convey Sikh philosophy",
                              icon: "🔍",
                            },
                            {
                              title:
                                "Meaningful Connection",
                              description:
                                "Connect with the spiritual atmosphere in a way that respects its sacred nature",
                              icon: "❤️",
                            },
                            {
                              title:
                                "Respectful Appreciation",
                              description:
                                "Experience the temple with appropriate cultural sensitivity and reverence",
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
            <section className="mb-10 mt-10 ">
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
                <div className="bg-gradient-to-r from-[#332D56] to-[#4E6688] p-5 ">
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
                  onClick={() => {
                    navigate("/BookNow");
                  }}
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
                        Harmandir Sahib
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
