
import React, { useState, useEffect } from "react";
import { 
  Calendar, Users, ChevronLeft, ChevronRight, Check, X, ChevronDown, ChevronUp,
  MapPin, Clock, Star, Info, Share2, Heart, Video, ExternalLink, BookOpen, Phone, Mail
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
import { Link } from "react-router-dom";

// Reusable components for consistent UI
const Card = ({ children, className = "", variant = "default" }) => {
  const base = "rounded-2xl overflow-hidden";
  const variants = {
    default: "bg-white shadow-lg hover:shadow-xl transition-all duration-300",
    feature: "bg-gradient-to-br from-[#332D56]/5 to-[#4E6688]/5 border border-[#332D56]/10",
    accent: "bg-gradient-to-r from-[#332D56] to-[#4E6688] text-white"
  };
  
  return (
    <div className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
};

const Button = ({ children, className = "", variant = "primary", ...props }) => {
  const base = "px-5 py-3 rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    primary: "bg-[#332D56] text-white hover:bg-[#2a2546] active:bg-[#211d37] focus:ring-[#332D56]/50",
    secondary: "bg-white text-[#332D56] border border-[#332D56] hover:bg-gray-50 active:bg-gray-100 focus:ring-[#332D56]/50",
    outline: "bg-transparent border border-[#332D56] text-[#332D56] hover:bg-[#332D56]/5 active:bg-[#332D56]/10 focus:ring-[#332D56]/50",
    accent: "bg-gradient-to-r from-[#332D56] to-[#4E6688] text-white hover:from-[#2a2546] hover:to-[#425775] active:from-[#211d37] active:to-[#364861] focus:ring-[#332D56]/50"
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

const Badge = ({ children, className = "", variant = "primary" }) => {
  const base = "px-3 py-1 rounded-full text-sm font-medium";
  const variants = {
    primary: "bg-[#332D56]/10 text-[#332D56]",
    secondary: "bg-[#4E6688]/10 text-[#4E6688]",
    accent: "bg-gradient-to-r from-[#332D56] to-[#4E6688] text-white"
  };
  
  return (
    <span className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};
const highlights = [
  "Stroll through the narrow, bustling lanes of Amritsar’s historic old city",
  "Admire centuries-old havelis, temples, and architectural marvels that tell stories of the city’s past",
  "Visit hidden heritage sites often missed by regular tourists",
  "Learn about Amritsar’s rich cultural, religious, and trade history from our expert guides",
  "Experience the vibrant atmosphere of traditional bazaars selling spices, fabrics, and local crafts",
  "Witness traditional craftsmanship still practiced in its original form",
  "Immerse yourself in the sights, sounds, and aromas of authentic Amritsar",
  "Enjoy a personalized, small-group experience for deeper cultural connection",
];


const TourDetailsPage = () => {
  // Get tour type from URL parameter
  const { tourType } = useParams();
  const navigate = useNavigate();
  
  // Tour data configuration (only showing heritage-walk for brevity)
  const TOUR_CONFIG = {
    "heritage-walk": {
      id: "heritage-walk",
      name: "Amritsar Heritage Walk",
      heroImage: "/assets/HeritageWalk/photo1.png",
      images: [
        "/assets/WagahBorder/photo26.png",
        "/assets/WagahBorder/photo28.png",
        "/assets/WagahBorder/photo24.png",
        "/assets/WagahBorder/photo25.png",
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
        "Explore Amritsar's historic Walled City with a local historian guide",
        "Discover hidden architectural gems and forgotten stories of the city",
        "Visit centuries-old havelis (mansions) with intricate craftsmanship",
        "Learn about Amritsar's role in India's freedom struggle",
        "Experience the living history of the city through local interactions",
        "See the contrast between ancient traditions and modern life",
        "Visit lesser-known historical sites away from tourist crowds",
        "Understand the urban planning of the historic city layout",
      ],
      itinerary: [
        {
          title: "Meeting Point",
          duration: "10 min",
          description:
            "Begin at the historic Town Hall, where your guide introduces Amritsar's rich heritage and the walk ahead.",
          icon: "🏛️",
        },
        {
          title: "Heritage Street",
          duration: "20 min",
          description:
            "Stroll along the beautifully restored Heritage Street, learning about its architecture and recent revitalization.",
          icon: "🏘️",
        },
        {
          title: "Partition Museum",
          duration: "30 min",
          description:
            "Explore the world's first museum dedicated to the Partition of India, with personal stories and historical artifacts.",
          icon: "🖼️",
        },
        {
          title: "Guru Ka Langar",
          duration: "15 min",
          description:
            "Visit the historic community kitchen that has served free meals for centuries, learning about its significance.",
          icon: "🍛",
        },
        {
          title: "Sardar Ka Market",
          duration: "25 min",
          description:
            "Explore this historic market, one of Amritsar's oldest commercial areas with traditional shops and crafts.",
          icon: "🛍️",
        },
        {
          title: "Haveli of Maharaja Sher Singh",
          duration: "20 min",
          description:
            "Visit this beautifully restored 19th-century mansion, learning about Sikh architecture and royal history.",
          icon: "🏰",
        },
        {
          title: "Jallianwala Bagh",
          duration: "30 min",
          description:
            "Reflect at this historic site with your guide providing context about the 1919 massacre and its impact on India's freedom struggle.",
          icon: "🕊️",
        },
        {
          title: "Local Artisan Visit",
          duration: "25 min",
          description:
            "Meet a traditional craftsman and learn about heritage crafts still practiced in Amritsar today.",
          icon: "🎨",
        },
        {
          title: "Conclusion",
          duration: "10 min",
          description:
            "End at a traditional tea stall for refreshments and final reflections on Amritsar's living heritage.",
          icon: "☕",
        },
      ],
      culturalHighlights: [
        "Amritsar's urban layout reflects traditional Punjabi city planning with distinct zones for different functions",
        "The city's architecture showcases a unique blend of Mughal, Sikh, and British colonial influences",
        "Many historic buildings incorporate symbolic elements reflecting Sikh values and beliefs",
        "The Walled City's narrow lanes and interconnected neighborhoods reflect centuries-old community living patterns",
        "Amritsar's heritage sites tell the story of resilience through periods of conflict and change",
        "Traditional crafts and trades have been preserved through generations despite modernization",
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
      price: 1199,
      rating: 4.6,
      reviews: 127,
      category: "Historical Experience",
      description:
        "Step back in time with our immersive heritage walk through Amritsar's historic Walled City. Led by expert local historians, this tour reveals the layers of history that make Amritsar one of India's most culturally rich cities.",
      proTip:
        "Wear comfortable shoes as we'll be walking through historic streets with uneven surfaces. Bring a small notebook to jot down fascinating stories you'll hear along the way.",
      insiderTip:
        "The best time to experience Amritsar's heritage is early morning when the city wakes up. We've scheduled our walk to capture the transition from quiet dawn to bustling day, allowing you to see different facets of the city's rhythm.",
    },
  };
  
  const currentTour = TOUR_CONFIG[tourType] || TOUR_CONFIG["heritage-walk"];
  
  // State management
  const [currentImage, setCurrentImage] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const [guests, setGuests] = useState(1);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [showFullItinerary, setShowFullItinerary] = useState(false);
  const [showHighlights, setShowHighlights] = useState(false);
  
  // Keyboard navigation for preview modal
  useEffect(() => {
    if (!previewOpen) return;
    
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setCurrentImage((currentImage - 1 + currentTour.images.length) % currentTour.images.length);
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        setCurrentImage((currentImage + 1) % currentTour.images.length);
      }
      if (e.key === "Escape") {
        setPreviewOpen(false);
      }
    };
    
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [previewOpen, currentImage, currentTour.images.length]);
  
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
                <Badge variant="primary">
                  {currentTour.category}
                </Badge>
                <Badge variant="accent">Most Popular</Badge>
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                AWT's Special{" "}
                <span className="text-gradient bg-gradient-to-r from-[#332D56] to-[#4E6688] bg-clip-text text-transparent">
                  Heritage Walk
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
                    alt={`Heritage Walk - Image ${
                      currentImage + 1
                    }`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <div className="flex justify-between items-center">
                      <h2 className="text-xl font-bold">
                        Amritsar Heritage Walk
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
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-lg hover:bg-[#332D56]/80 transition z-10"
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
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-lg hover:bg-[#332D56]/80 transition z-10"
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
                        ? "border-[#332D56] scale-105 shadow-lg shadow-[#332D56]/20"
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
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#332D56]/20 to-transparent flex items-center justify-center">
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
                      label: "Historical Context",
                      icon: BookOpen,
                    },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`pb-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2 ${
                        activeTab === tab.id
                          ? "border-[#332D56] text-[#332D56] font-semibold"
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
                        Heritage Walking Tour Overview
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
                            Join the walk in the early
                            morning to see the old city come
                            alive, as shopkeepers open their
                            doors, the aroma of fresh chai
                            fills the air, and golden
                            sunlight bathes the
                            centuries-old havelis and
                            temples.
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
                    <Card className="p-6 border-t-4 border-[#332D56]">
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        Detailed Itinerary
                      </h2>
                      <p className="text-gray-600">
                        Experience the full historical
                        journey through Amritsar's Walled
                        City
                      </p>
                    </Card>

                    <div className="relative pl-8 mt-8 mb-8">
                      {/* Timeline connector */}
                      <div className="absolute left-3.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#332D56] to-[#4E6688]" />

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
                            <div className="absolute left-0 top-2 w-8 h-8 rounded-full bg-white border-2 border-[#332D56] flex items-center justify-center">
                              <span className="text-[#332D56] font-bold text-sm">
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

                    <Card className="p-5 mt-8 bg-gradient-to-r from-[#332D56]/5 to-[#4E6688]/5 border border-[#332D56]/10">
                      <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                        <Star className="w-5 h-5 text-[#332D56] mr-2" />
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
                            "Private guided tour with a local historian",
                            "Hotel pickup and drop-off within Amritsar city",
                            "Expert English/Hindi/Punjabi-speaking local guide",
                            "All necessary entry fees and permissions",
                            "Bottled water for each guest",
                            "Guided tour with historical context",
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

                        <div className="mt-6 p-4 bg-[#332D56]/5 rounded-lg border border-[#332D56]/10">
                          <p className="text-sm text-[#332D56] flex items-start">
                            <Info className="w-4 h-4 mt-0.5 mr-2 flex-shrink-0" />
                            Traditional tea tasting at a
                            historic tea stall is included
                            in the tour price.
                          </p>
                        </div>
                      </Card>
                    </div>

                    <Card className="p-6 mt-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <Star className="w-5 h-5 text-[#332D56] mr-2" />
                        Our Commitment to Quality
                      </h3>
                      <p className="text-gray-700 mb-4">
                        We go beyond standard tours to
                        ensure your Heritage Walk experience
                        is authentic and meaningful:
                      </p>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          "Small group sizes for personalized attention",
                          "Vehicles maintained to the highest safety standards",
                          "Guides with deep knowledge of local history",
                          "24/7 customer support before and during your tour",
                          "Flexible booking with free cancellation up to 24 hours prior",
                          "Real-time updates on timing and any schedule changes",
                        ].map((point, index) => (
                          <li
                            key={index}
                            className="flex items-start"
                          >
                            <Check className="w-5 h-5 text-[#332D56] mt-1 mr-2 flex-shrink-0" />
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
                    <Card className="p-6 border-t-4 border-[#332D56]">
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        Historical Context & Significance
                      </h2>
                      <p className="text-gray-600">
                        Understanding the deeper meaning
                        behind Amritsar's heritage
                        transforms your visit from simple
                        sightseeing to meaningful connection
                        with the past
                      </p>
                    </Card>

                    <Card className="p-6 mt-6 bg-gradient-to-r from-[#332D56]/5 to-[#4E6688]/5 border border-[#332D56]/10">
                      <div className="flex items-start gap-3">
                        <div className="bg-[#332D56]/10 p-3 rounded-lg mt-1">
                          <Star className="w-5 h-5 text-[#332D56]" />
                        </div>
                        <p className="text-gray-700">
                          <span className="font-semibold">
                            Did you know?
                          </span>{" "}
                          Amritsar's Walled City was
                          originally surrounded by a moat
                          and had 12 gates, each named after
                          the city it faced, reflecting the
                          city's historical trade routes.
                        </p>
                      </div>
                    </Card>

                    <p className="text-lg text-gray-700 mt-6 mb-6">
                      Amritsar's heritage is not merely
                      historical—it's a living narrative
                      that continues to shape the city's
                      identity. Understanding the historical
                      context transforms your visit from
                      simple sightseeing to meaningful
                      connection with the past.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <Card className="p-5">
                        <h3 className="font-bold text-lg text-gray-900 mb-4 flex items-center">
                          <BookOpen className="w-5 h-5 text-[#332D56] mr-2" />
                          Historical Context
                        </h3>
                        <ul className="space-y-3">
                          {currentTour.culturalHighlights.map(
                            (point, idx) => (
                              <li
                                key={idx}
                                className="flex items-start"
                              >
                                <div className="bg-[#332D56]/10 text-[#332D56] w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-xs font-bold mt-1">
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
                          <MapPin className="w-5 h-5 text-[#332D56] mr-2" />
                          Heritage Insights
                        </h3>
                        <div className="space-y-4">
                          <div className="p-4 bg-blue-50 rounded-lg">
                            <h4 className="font-bold text-gray-900 mb-2">
                              Founding & Evolution
                            </h4>
                            <p className="text-gray-700 text-sm">
                              Amritsar's Walled City was
                              founded in the 16th century
                              and has evolved through
                              Mughal, Sikh, and British
                              periods, each leaving distinct
                              architectural and cultural
                              imprints.
                            </p>
                          </div>

                          <div className="p-4 bg-[#332D56]/5 rounded-lg">
                            <h4 className="font-bold text-gray-900 mb-2">
                              Living Heritage
                            </h4>
                            <p className="text-gray-700 text-sm">
                              Amritsar's heritage isn't just
                              in its monuments—it's in the
                              daily lives of its residents,
                              the crafts still practiced,
                              and the traditions passed down
                              through generations.
                            </p>
                          </div>

                          <div className="p-4 bg-purple-50 rounded-lg">
                            <h4 className="font-bold text-gray-900 mb-2">
                              Evolution & Significance
                            </h4>
                            <p className="text-gray-700 text-sm">
                              What began as a fortified city
                              has evolved into a living
                              heritage site where ancient
                              traditions coexist with modern
                              life.
                            </p>
                          </div>
                        </div>
                      </Card>
                    </div>

                    <Card className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        Why Historical Context Matters
                      </h3>
                      <p className="text-gray-700 mb-4">
                        When you understand the deeper
                        significance behind each element of
                        the Heritage Walk, your experience
                        becomes transformative rather than
                        merely observational. You'll notice
                        details others miss and gain
                        insights that stay with you long
                        after you leave.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                        {[
                          {
                            title: "Deeper Understanding",
                            description:
                              "Recognize the symbolism in the architecture that conveys historical significance",
                            icon: "🔍",
                          },
                          {
                            title: "Meaningful Connection",
                            description:
                              "Connect with the experience in a way that respects its historical significance",
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
                  <Video className="w-6 h-6 text-[#332D56] mr-2" />
                  Recommended Videos
                </h2>
                <a
                  href="/videos"
                  className="text-[#332D56] font-medium hover:underline flex items-center"
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
              <Card className="overflow-hidden">
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Star className="w-5 h-5 text-[#332D56] mr-2" />
                    Why Book With Us?
                  </h3>

                  <div className="space-y-4">
                    {[
                      {
                        title: "Historical Knowledge",
                        description:
                          "Our guides are historians who provide deep context for each site",
                        icon: "📜",
                      },
                      {
                        title: "Optimal Timing",
                        description:
                          "We schedule walks to avoid peak heat and capture the city at its most vibrant",
                        icon: "⏰",
                      },
                      {
                        title: "Cultural Respect",
                        description:
                          "We help you engage with heritage sites in a way that honors their significance",
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
                      <div className="bg-[#332D56]/10 text-[#332D56] w-10 h-10 rounded-full flex items-center justify-center font-bold mr-3">
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
                  <Info className="w-5 h-5 text-[#332D56] mr-2" />
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
                        className="text-[#332D56] hover:underline"
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
                        className="text-[#332D56] hover:underline"
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
                Discover Amritsar's Living Heritage
              </h2>
              <p className="text-xl opacity-90 mb-6 max-w-xl">
                Join thousands of travelers who have
                transformed their understanding of
                Amritsar's history through our expertly
                guided tour.
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
                  Book Your Heritage Walk
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
              <div className="absolute inset-0 bg-[url('/assets/HeritageWalk/photo1.png')] bg-cover bg-center opacity-90"></div>
              <div className="absolute inset-0 bg-gradient-to-l from-[#332D56]/90 to-transparent/50"></div>
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
                      <h2 className="text-sm lg:text-xl md:text-xl font-bold mb-0">
                        Amritsar Heritage Walk
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
