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
  Mail, // Corrected from 'Mails' if it was a typo
} from "lucide-react";
import {
  useParams,
  useNavigate,
  Link,
} from "react-router-dom"; // Added Link
import Navbar from "../Navbar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SuggestiveTours from "../SuggestiveTours";
import WhyUs from "../WhyUs";
import Footer from "../Footer";
import BottomBar from "../bottomBar";
import { motion, AnimatePresence } from "framer-motion";

// --- Reusable UI Components (Extracted and slightly modified from snippets) ---
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
      "bg-gradient-to-br from-[#332D56]/5 to-[#4E6688]/5 border border-[#332D56]/10",
    accent:
      "bg-gradient-to-r from-[#332D56] to-[#4E6688] text-white",
    tip: "p-5 bg-gradient-to-r from-amber-50 to-blue-50 rounded-xl border border-amber-100", // Tip Card Style
    info: "bg-white p-5 rounded-xl border border-gray-100 shadow-sm", // Info Card Style
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

// --- Tour Data Configuration ---
// This holds the specific data for each tour.
const TOUR_CONFIG = {
  // --- Golden Temple Tour Data (from Pasted_Text_1754832146023.txt and inferred commonalities) ---
  "golden-temple": {
    id: "golden-temple",
    name: "Golden Temple Tour",
    category: "Spiritual Journey", // Inferred or placeholder
    location: "Amritsar, Punjab, India", // Placeholder
    duration: "Half Day (4-5 hours)", // Placeholder
    languages: "English, Hindi, Punjabi", // Placeholder
    heroImage: "/assets/GoldenTemple/photo1.png", // Placeholder
    images: [
      "/assets/GoldenTemple/photo17.png",
      "/assets/GoldenTemple/photo13.png",
      "/assets/GoldenTemple/photo14.png",
      "/assets/GoldenTemple/photo15.png",
      "/assets/GoldenTemple/photo16.png",
      // Add more images as needed from the snippet
    ],
    price: 899, // Placeholder
    rating: 4.8, // Placeholder
    reviews: 124, // Placeholder
    description:
      "Embark on a profound spiritual journey at the heart of Sikhism. The Golden Temple, or Harmandir Sahib, is not just an architectural marvel but a symbol of equality, peace, and devotion. This guided tour offers an immersive experience, allowing you to witness the daily rituals, understand the philosophy, and participate in the community spirit that defines this sacred place.", // Placeholder
    proTip:
      "Arrive early in the morning (around 4:30 AM) to witness the serene 'Parkash' ceremony when the Guru Granth Sahib is brought out and the temple is beautifully illuminated. The peaceful atmosphere before the crowds arrive is truly magical.", // Placeholder
    insiderTip:
      "The best time to experience the Golden Temple is during the early morning or late evening ceremonies. The 'Sukh Asan' (reposing of the Guru Granth Sahib) in the evening is particularly moving, with the temple beautifully lit and the surrounding area filled with devotees.", // Placeholder
    highlights: [
      "Visit the iconic Golden Temple (Harmandir Sahib)",
      "Experience the sacred Amrit Sarovar (Holy Pool)",
      "Witness the mesmerizing evening Palki Sahib ceremony",
      "Learn about Sikh history and philosophy from a local guide",
      "Participate in the community kitchen (Langar) service",
      "Explore the surrounding temples and markets",
    ],
    itinerary: [
      {
        title: "Golden Temple Complex",
        duration: "2 hours",
        description:
          "Explore the main shrine, Akal Takht, and the Central Sikh Museum.",
        icon: "🕌",
      },
      {
        title: "Amrit Sarovar",
        duration: "30 min",
        description:
          "Walk around the sacred pool and enjoy the peaceful atmosphere.",
        icon: "💧",
      },
      {
        title: "Guru Ka Langar",
        duration: "45 min",
        description:
          "Participate in the world's largest free kitchen and share a meal.",
        icon: "🍛",
      },
      {
        title: "Evening Ceremony (if applicable)",
        duration: "1 hour",
        description:
          "Witness the Palki Sahib procession and the closing of the temple doors.",
        icon: "🕯️",
      },
      // Add more stops if needed
    ],
    inclusions: [
      "Private air-conditioned transportation to and from tour sites",
      "Hotel pickup and drop-off within Amritsar city",
      "Expert English/Hindi/Punjabi-speaking local guide",
      "All necessary entry fees and permissions",
      "Bottled water for each guest",
      "Guided tour with cultural context",
      "Special access where applicable",
      "Photo opportunities with professional guidance",
      "Flexible timing to ensure best experience",
    ],
    exclusions: [
      "Meals or snacks (though Langar is included)",
      "Gratuities for your guide and driver",
      "Personal expenses and souvenirs",
      "Travel insurance",
      "Additional activities not mentioned in the itinerary",
    ],
    culturalContext: {
      title: "The Golden Temple: A Spiritual Beacon",
      description:
        "Harmandir Sahib, the Golden Temple, stands as the holiest shrine in Sikhism. Built in the center of Amrit Sarovar (Pool of Nectar), it symbolizes equality and openness, with entrances from all four directions. The temple's golden dome and marble structure reflect the spiritual wealth and purity Sikhs aspire to. The practice of Langar (community kitchen) embodies the Sikh principles of equality, service (Seva), and sharing.",
    },
    whyChoose: [
      "Spiritual Expertise: Guides trained in Sikh theology and history.",
      "Seamless Logistics: We handle transportation, timing, and permits.",
      "Small Group Guarantee: Personalized attention in groups under 12.",
      "Respectful Approach: Prioritizing cultural sensitivity and sanctity.",
    ],
    standoutFeatures: [
      {
        title: "Exclusive Access",
        description:
          "Gain insights into less-crowded morning or evening rituals.",
        icon: "🌅",
      },
      {
        title: "Deep Cultural Dive",
        description:
          "Understand the philosophy behind Sikh practices and symbols.",
        icon: "📖",
      },
      {
        title: "Community Participation",
        description:
          "Meaningful involvement in Langar (community kitchen).",
        icon: "🤝",
      },
    ],
    videos: [
      // Add video data if available
      {
        url: "https://www.youtube.com/embed/ivTsHLtNM_U", // Placeholder
        title: "Golden Temple Amritsar Full Tour & History",
        description:
          "A comprehensive video tour of the Golden Temple complex.",
      },
    ],
  },
  // --- Wagah Border Tour Data (from Pasted_Text_1754832153695.txt and inferred commonalities) ---
  "wagah-border": {
    id: "wagah-border",
    name: "Wagah Border Tour",
    category: "Cultural Experience", // From snippet
    location: "Wagah Border, Amritsar, Punjab, India", // Placeholder
    duration: "Half Day (3-4 hours)", // Placeholder
    languages: "English, Hindi", // Placeholder
    heroImage: "/assets/WagahBorder/photo1.png", // Placeholder
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
    price: 799, // Placeholder
    rating: 4.7, // Placeholder
    reviews: 98, // Placeholder
    description:
      "Witness the world-famous 'Beating Retreat' ceremony at the India-Pakistan Wagah Border. This highly choreographed spectacle of military precision and patriotic fervor is a unique blend of pageantry and politics. Our guided tour ensures you get the best seats and understand the historical context and significance of this daily ritual.", // Placeholder
    proTip:
      "Arrive at least 1.5 hours before the ceremony starts, especially on weekends and holidays, as crowds can be massive. The gates typically close 30 minutes before the event begins. Bringing a hat and sunscreen is recommended, as the seating area can get quite hot.", // Placeholder
    insiderTip:
      "The energy is highest just before the gates close. The ceremonial lowering of the flags ('Retreat') is followed by the dramatic 'Beating of the Retreat' and the closing of the gates. The entire experience, from the march past to the final shutter, lasts about 45 minutes to an hour.", // Placeholder
    highlights: [
      "Experience the iconic Wagah Border 'Beating Retreat' ceremony",
      "Witness the elaborate military drill and flag lowering ritual",
      "Feel the patriotic fervor of crowds from both India and Pakistan",
      "Learn about the history of the border and the partition",
      "Get prime seating for the best view of the spectacle",
      "Understand the cultural and political significance of the event",
    ],
    itinerary: [
      {
        title: "Departure from Amritsar City",
        duration: "30-45 min",
        description:
          "Depart from your hotel or a central location in Amritsar. Traffic conditions may vary.",
        icon: "🚗",
      },
      {
        title: "Arrival and Security Check",
        duration: "30-45 min",
        description:
          "Arrive at the Wagah Border complex. Go through mandatory security checks and bag screening.",
        icon: "🛡️",
      },
      {
        title: "Seating and Briefing",
        duration: "30 min",
        description:
          "Find your reserved seats in the designated gallery. Receive a brief overview of the ceremony.",
        icon: "🪑",
      },
      {
        title: "Flag Lowering Ceremony (Retreat)",
        duration: "30-45 min",
        description:
          "Witness the synchronized march of Border Security Force (BSF) and Pakistan Rangers. Observe the flag lowering ritual.",
        icon: "🇮🇳🇵🇰",
      },
      {
        title: "Beating of the Retreat",
        duration: "15-20 min",
        description:
          "Experience the climactic 'Beating of the Retreat' performance by military bands.",
        icon: "🥁",
      },
      {
        title: "Gate Closure & Return",
        duration: "15 min",
        description:
          "Watch the gates close, marking the end of the day. Board the vehicle for return to Amritsar.",
        icon: "🌇",
      },
    ],
    inclusions: [
      "Round-trip transportation from central Amritsar locations",
      "Expert English/Hindi-speaking guide familiar with the ceremony",
      "Reserved seating in the visitor gallery (VIP or Standard)",
      "All necessary permits and entry fees",
      "Bottled water during the tour",
      "Guided commentary on the history and significance",
      "Assistance with security checks and navigation",
      "Flexible timing based on daily schedule",
    ],
    exclusions: [
      "Meals or snacks",
      "Gratuities for your guide and driver",
      "Personal expenses and souvenirs",
      "Travel insurance",
      "Additional activities not mentioned in the itinerary",
      "Entry fees for personal cameras (if applicable)",
    ],
    culturalContext: {
      title: "Wagah Border: A Symbol of Division and Unity",
      description:
        "The Wagah Border checkpoint is the only road border crossing between India and Pakistan. The daily 'Beating Retreat' ceremony, initiated in 1959, is a military drill that showcases the rivalry and, paradoxically, the shared military heritage of the two nations. It's a powerful display of nationalism, discipline, and a unique tourist attraction that draws thousands.",
    },
    whyChoose: [
      "Prime Seating Guarantee: Skip the long lines and crowds.",
      "Expert Commentary: Understand the nuances of the ceremony.",
      "Stress-Free Logistics: We handle traffic and timing.",
      "Comfortable Transportation: Air-conditioned vehicles for the journey.",
    ],
    standoutFeatures: [
      {
        title: "Prime Viewing",
        description:
          "Guaranteed good seats for the best spectacle view.",
        icon: "👀",
      },
      {
        title: "Cultural Insight",
        description:
          "Learn the history and significance beyond the performance.",
        icon: "📚",
      },
      {
        title: "Hassle-Free Experience",
        description:
          "No need to navigate crowds or logistics yourself.",
        icon: "😌",
      },
    ],
    videos: [
      // Add video data if available
      {
        url: "https://www.youtube.com/embed/exampleWagahVideo", // Placeholder
        title: "Wagah Border Ceremony Highlights",
        description:
          "Experience the energy of the Wagah Border spectacle.",
      },
    ],
  },
  // Add configurations for other tours (heritage-walk, food-walk, village-tour) here if desired
};

const TourDetailsPage = () => {
  const { tourId } = useParams(); // Get tourId from URL (e.g., /tour/golden-temple)
  const navigate = useNavigate();

  // Select the current tour based on the URL parameter, defaulting to Golden Temple if not found
  const currentTour =
    TOUR_CONFIG[tourId] || TOUR_CONFIG["golden-temple"];

  // --- State Management ---
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

  // --- Keyboard Navigation for Preview Modal ---
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

  // --- Handle Booking (Placeholder) ---
  const handleBooking = () => {
    const bookingData = {
      tour: currentTour.name,
      date: startDate,
      guests,
      price: Math.round(currentTour.price * 1.1 * guests), // Example: price + 10% service fee
    };
    localStorage.setItem(
      "bookingDetails",
      JSON.stringify(bookingData)
    );
    // Example: Navigate to a registration/checkout page
    // window.location.href = "/register";
    navigate("/register"); // Using useNavigate hook
    console.log("Booking initiated:", bookingData);
  };

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-6 sm:py-8">
        {/* Breadcrumb Navigation */}
        <nav className="mb-6 hidden sm:block">
          <ol className="flex items-center text-sm text-gray-500">
            <li>
              <Link to="/" className="hover:text-darkblue">
                Home
              </Link>
            </li>
            <span className="mx-2">/</span>
            <li>
              <Link
                to="/tours"
                className="hover:text-darkblue"
              >
                Tours
              </Link>
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
                  {currentTour.name}
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
                  <span>{currentTour.location}</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#332D56] to-[#4E6688] p-5 rounded-xl text-white w-full sm:w-auto">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[#332D56]/90 text-sm">
                    Starting from
                  </p>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-white">
                      ₹{currentTour.price}
                    </span>
                    <span className="text-[#332D56]/90 ml-1">
                      per person
                    </span>
                  </div>
                </div>
                <div className="bg-white/20 px-3 py-1 rounded-full text-white text-sm">
                  Best Seller
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Image Gallery */}
        <section className="mb-12">
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
                alt={`${currentTour.name} - Image ${
                  currentImage + 1
                }`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold">
                    {currentTour.name}
                  </h2>
                  <span className="bg-black/50 px-3 py-1 rounded-full text-sm">
                    {currentImage + 1} of{" "}
                    {currentTour.images.length}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Thumbnails */}
            <div className="flex gap-3 mt-4 overflow-x-auto pb-3 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
              {currentTour.images.map((thumb, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setCurrentImage(index)}
                  className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    index === currentImage
                      ? "border-[#332D56]"
                      : "border-transparent"
                  }`}
                  aria-label={`View image ${index + 1}`}
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
          </Card>
        </section>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            {/* Overview Card */}
            <Card className="p-5">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {currentTour.name} Overview
              </h2>
              <p className="text-gray-700 mb-4">
                {currentTour.description}
              </p>

              {/* Pro Tip Card */}
              <Card variant="tip" className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                  <Star className="w-5 h-5 text-amber-500 mr-2" />
                  Pro Tip
                </h3>
                <p className="text-gray-700">
                  {currentTour.proTip}
                </p>
              </Card>

              {/* Highlights */}
              <Card variant="info" className="mb-6">
                <h3 className="font-bold text-lg text-gray-900 mb-4 flex items-center">
                  <MapPin className="w-5 h-5 text-[#332D56] mr-2" />
                  Key Highlights
                </h3>
                <ul className="space-y-3">
                  {currentTour.highlights
                    .slice(
                      0,
                      showHighlights ? undefined : 4
                    )
                    .map((point, idx) => (
                      <li
                        key={idx}
                        className="flex items-start"
                      >
                        <Check className="w-5 h-5 text-[#332D56] mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">
                          {point}
                        </span>
                      </li>
                    ))}
                </ul>
                {!showHighlights &&
                  currentTour.highlights.length > 4 && (
                    <button
                      onClick={() =>
                        setShowHighlights(true)
                      }
                      className="mt-3 text-[#332D56] font-medium flex items-center hover:text-[#2a2546] transition-colors"
                    >
                      Show more{" "}
                      <ChevronDown className="w-4 h-4 ml-1" />
                    </button>
                  )}
                {showHighlights && (
                  <button
                    onClick={() => setShowHighlights(false)}
                    className="mt-3 text-[#332D56] font-medium flex items-center hover:text-[#2a2546] transition-colors"
                  >
                    Show less{" "}
                    <ChevronUp className="w-4 h-4 ml-1" />
                  </button>
                )}
              </Card>

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
                        label:
                          currentTour.id === "heritage-walk"
                            ? "Historical Context"
                            : currentTour.id === "food-walk"
                            ? "Culinary Context"
                            : currentTour.id ===
                              "wagah-border"
                            ? "Cultural Context" // Or "Ceremony Details"
                            : "Spiritual Context", // Default
                        icon: BookOpen,
                      },
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`py-3 px-1 border-b-2 font-medium text-sm flex items-center ${
                          activeTab === tab.id
                            ? "border-[#332D56] text-[#332D56]"
                            : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                        }`}
                      >
                        <tab.icon className="w-4 h-4 mr-2" />
                        {tab.label}
                      </button>
                    ))}
                  </nav>
                </div>

                <div className="py-6">
                  {activeTab === "overview" && (
                    <div>
                      <h3 className="text-xl font-semibold mb-3">
                        Tour Description
                      </h3>
                      <p className="text-gray-700 mb-4">
                        {currentTour.description}
                      </p>
                      {/* Tour Essentials Card (Example) */}
                      <Card variant="info" className="mt-6">
                        <h3 className="font-bold text-lg text-gray-900 mb-4 flex items-center">
                          <Info className="w-5 h-5 text-[#332D56] mr-2" />
                          Tour Essentials
                        </h3>
                        <div className="space-y-3">
                          <div className="flex items-start">
                            <div className="w-32 font-medium text-gray-700">
                              Duration:
                            </div>
                            <div>
                              {currentTour.duration}
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="w-32 font-medium text-gray-700">
                              Languages:
                            </div>
                            <div>
                              {currentTour.languages}
                            </div>
                          </div>
                          {/* Add other essentials if needed */}
                        </div>
                      </Card>
                    </div>
                  )}

                  {activeTab === "itinerary" && (
                    <div>
                      <h3 className="text-xl font-semibold mb-4">
                        Detailed Itinerary
                      </h3>
                      <div className="relative pl-8">
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
                              <div className="absolute left-[-10px] top-1 w-5 h-5 rounded-full bg-[#332D56] border-4 border-white shadow-sm flex items-center justify-center">
                                <span className="text-white text-xs font-bold">
                                  {index + 1}
                                </span>
                              </div>
                              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                <div className="flex items-start gap-3">
                                  <span className="text-2xl">
                                    {stop.icon}
                                  </span>
                                  <div>
                                    <h4 className="font-semibold text-gray-900">
                                      {stop.title}
                                    </h4>
                                    <div className="flex items-center text-sm text-gray-500 mt-1">
                                      <Clock className="w-4 h-4 mr-1" />
                                      {stop.duration}
                                    </div>
                                    <p className="text-gray-700 mt-2">
                                      {stop.description}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                      </div>
                      {currentTour.itinerary.length > 5 &&
                        !showFullItinerary && (
                          <button
                            onClick={() =>
                              setShowFullItinerary(true)
                            }
                            className="mt-4 text-[#332D56] font-medium flex items-center hover:text-[#2a2546] transition-colors"
                          >
                            Show Full Itinerary{" "}
                            <ChevronDown className="w-4 h-4 ml-1" />
                          </button>
                        )}
                      {showFullItinerary && (
                        <button
                          onClick={() =>
                            setShowFullItinerary(false)
                          }
                          className="mt-4 text-[#332D56] font-medium flex items-center hover:text-[#2a2546] transition-colors"
                        >
                          Show Less{" "}
                          <ChevronUp className="w-4 h-4 ml-1" />
                        </button>
                      )}
                    </div>
                  )}

                  {activeTab === "inclusions" && (
                    <div>
                      <h3 className="text-xl font-semibold mb-4">
                        What's Included
                      </h3>
                      <ul className="space-y-3 mb-6">
                        {currentTour.inclusions.map(
                          (item, index) => (
                            <li
                              key={index}
                              className="flex items-start"
                            >
                              <Check className="w-5 h-5 text-[#332D56] mt-1 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">
                                {item}
                              </span>
                            </li>
                          )
                        )}
                      </ul>
                      <h3 className="text-xl font-semibold mb-4">
                        What's Not Included
                      </h3>
                      <ul className="space-y-3">
                        {currentTour.exclusions.map(
                          (item, index) => (
                            <li
                              key={index}
                              className="flex items-start"
                            >
                              <X className="w-5 h-5 text-red-500 mt-1 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">
                                {item}
                              </span>
                            </li>
                          )
                        )}
                      </ul>
                      {/* Pro Tip Card (repeated here as in snippet) */}
                      <Card variant="tip" className="mt-6">
                        <p className="text-sm text-amber-800 flex items-start">
                          <Info className="w-4 h-4 mt-0.5 mr-2 flex-shrink-0" />
                          {currentTour.proTip}
                        </p>
                      </Card>
                    </div>
                  )}

                  {activeTab === "cultural" && (
                    <div>
                      <h3 className="text-xl font-semibold mb-4">
                        {currentTour.culturalContext
                          ?.title || "Cultural Context"}
                      </h3>
                      <p className="text-gray-700 mb-6">
                        {currentTour.culturalContext
                          ?.description ||
                          "Learn about the rich cultural background of this tour."}
                      </p>

                      {/* Why This Tour Stands Out */}
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        Why This Tour Stands Out
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        {currentTour.standoutFeatures.map(
                          (feature, index) => (
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
                          )
                        )}
                      </div>

                      {/* Insider Tip Card */}
                      <Card variant="tip">
                        <div className="flex items-center">
                          <div className="bg-amber-100 p-2 rounded-lg mr-3">
                            <Star className="w-5 h-5 text-amber-600" />
                          </div>
                          <p className="text-sm text-amber-800">
                            <span className="font-semibold">
                              Insider Tip:
                            </span>{" "}
                            {currentTour.insiderTip}
                          </p>
                        </div>
                      </Card>
                    </div>
                  )}
                </div>
              </div>
            </Card>

            {/* Why Choose Us Section */}
            <motion.div
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
                      Why Choose Our {currentTour.name}?
                    </h2>
                    <p className="text-gray-700">
                      {currentTour.description}
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-amber-50 to-blue-50 rounded-xl p-5 border border-amber-100">
                    <div className="flex items-center">
                      <div className="bg-amber-100 p-2 rounded-lg mr-3">
                        <Star className="w-5 h-5 text-amber-600" />
                      </div>
                      <p className="text-sm text-amber-800">
                        <span className="font-semibold">
                          Insider Tip:
                        </span>{" "}
                        {currentTour.insiderTip}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  {currentTour.whyChoose.map(
                    (point, index) => (
                      <div
                        key={index}
                        className="flex items-start"
                      >
                        <Check className="w-5 h-5 text-[#332D56] mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">
                          {point}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Booking Card Column */}
          <div className="lg:col-span-1">
            {/* Booking Card */}
            <Card className="sticky top-6 p-5 border border-gray-200 shadow-lg">
              <div className="bg-gradient-to-r from-[#332D56] to-[#4E6688] p-5 rounded-t-xl -m-5 mb-5">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-[#332D56]/90 text-sm">
                      Starting from
                    </p>
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold text-white">
                        ₹{currentTour.price}
                      </span>
                      <span className="text-[#332D56]/90 ml-1">
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
                      minDate={new Date()}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#332D56] focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Guest Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Guests
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select
                      value={guests}
                      onChange={(e) =>
                        setGuests(parseInt(e.target.value))
                      }
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#332D56] focus:border-transparent appearance-none"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
                        (num) => (
                          <option key={num} value={num}>
                            {num} Guest{num > 1 ? "s" : ""}
                          </option>
                        )
                      )}
                    </select>
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="bg-gray-50 p-4 rounded-xl">
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
                    <span>Service Fee (10%)</span>
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
                  onClick={handleBooking}
                >
                  Book Your Journey
                </Button>

                {/* Share & Favorite */}
                <div className="flex justify-center gap-4">
                  <button className="flex items-center gap-2 text-gray-600 hover:text-[#332D56] transition">
                    <Share2 className="w-5 h-5" /> Share
                  </button>
                  <button
                    onClick={() =>
                      setIsFavorited(!isFavorited)
                    }
                    className={`flex items-center gap-2 transition ${
                      isFavorited
                        ? "text-red-500 hover:text-red-600"
                        : "text-gray-600 hover:text-red-500"
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
                    />{" "}
                    Favorite
                  </button>
                </div>
              </div>
            </Card>

            {/* Rating Summary Card */}
            <Card className="p-5 mt-6">
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
                          star <=
                          Math.floor(currentTour.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm">
                    Based on {currentTour.reviews} verified
                    reviews
                  </p>
                </div>
              </div>
            </Card>

            {/* Need Help? Card */}
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 border border-blue-100 mt-6">
              <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center">
                <Phone className="w-5 h-5 text-[#332D56] mr-2" />
                Need Help Booking?
              </h3>
              <p className="text-gray-700 mb-4">
                Our travel experts are available 24/7 to
                assist you.
              </p>
              <div className="space-y-2">
                <a
                  href="tel:+911234567890"
                  className="flex items-center text-[#332D56] hover:text-[#2a2546] transition"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  +91 12345 67890
                </a>
                <a
                  href="mailto:info@awtspecialtours.com"
                  className="flex items-center text-[#332D56] hover:text-[#2a2546] transition"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  info@awtspecialtours.com
                </a>
              </div>
            </Card>
          </div>
        </div>

        {/* Videos Section */}
        {currentTour.videos &&
          currentTour.videos.length > 0 && (
            <section className="mb-12">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Tour Videos
                </h2>
                <a
                  href="/videos"
                  className="text-[#332D56] font-medium hover:underline flex items-center"
                >
                  View all{" "}
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {video.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {video.description}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          )}
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
                        {currentTour.name}
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

      {/* Suggestive Tours, Why Us, Bottom Bar, Footer */}
      <SuggestiveTours />
      <WhyUs />
      <BottomBar />
      <Footer />
    </>
  );
};

export default TourDetailsPage;
