// src/pages/TourDetailsPage.jsx
import React, { useState } from "react";
import {
  Calendar, Users, ChevronLeft, ChevronRight, Check, X, ChevronDown, ChevronUp, Info
} from "lucide-react";
import Navbar from "../Navbar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { div } from "framer-motion/client";
import SuggestiveTours from "../SuggestiveTours";
import WhyUs from "../WhyUs";
import Footer from "../Footer";

// Reusable Button component
const Button = ({ children, className = "", variant = "default", ...props }) => {
  const base = "px-4 py-2 rounded-md text-sm font-medium transition";
  const variants = {
    default: "bg-darkblue hover:bg-lightblue text-white",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

// Reusable Card component
const Card = ({ children, className = "" }) => (
  <div className={`bg-white shadow-md rounded-2xl ${className}`}>
    {children}
  </div>
);

const TourHero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const [guests, setGuests] = useState(1);
  const [previewOpen, setPreviewOpen] = useState(false);

  const images = [
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

  ];
  const thumbnails = images;

// Add image hover zoom, keyboard navigation, and animated transitions for interactivity

// Keyboard navigation for preview modal
React.useEffect(() => {
    if (!previewOpen) return;
    const handleKey = (e) => {
        if (e.key === "ArrowLeft") setCurrentImage((currentImage - 1 + images.length) % images.length);
        if (e.key === "ArrowRight") setCurrentImage((currentImage + 1) % images.length);
        if (e.key === "Escape") setPreviewOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
}, [previewOpen, currentImage, images.length]);

return (
    <section className="mb-12">
        <h1 className="text-4xl font-medium text-yellow-600 font-fredoka">
            <span className="text-darkblue font-light">AWT's Package </span> Three Day Excursion 
        </h1>
        <p className="text-lightblue mt-2">Walk Alongside a Storytelling Expert</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
            <div className="lg:col-span-2">
                <div className="relative aspect-video rounded-lg overflow-hidden group">
                    <img
                        src={images[currentImage]}
                        alt="Tour"
                        className="w-full h-full object-cover cursor-pointer transition-transform duration-300 group-hover:scale-105"
                        onClick={() => setPreviewOpen(true)}
                        title="Click to preview"
                    />
                    <button
                        aria-label="Previous image"
                        onClick={() => setCurrentImage((currentImage - 1 + images.length) % images.length)}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-lightblue/80 transition"
                    >
                        <ChevronLeft />
                    </button>
                    <button
                        aria-label="Next image"
                        onClick={() => setCurrentImage((currentImage + 1) % images.length)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-lightblue/80 transition"
                    >
                        <ChevronRight />
                    </button>
                </div>
                <div className="flex gap-2 mt-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400">
                    {thumbnails.map((thumb, index) => (
                        <img
                            key={index}
                            src={thumb}
                            onClick={() => setCurrentImage(index)}
                            className={`w-20 h-16 object-cover rounded-lg cursor-pointer transition-transform duration-200 hover:scale-110 ${currentImage === index ? "ring-2 ring-darkblue scale-110" : ""}`}
                            alt={`Thumbnail ${index + 1}`}
                            title={`View image ${index + 1}`}
                        />
                    ))}
                </div>
                <p className="mt-6 text-lightblue font-semibold">
                    Book from our site for discounted prices.
                </p>
            </div>
            <Card className="p-6 sticky top-6">
                <div className="text-2xl font-semibold">
                    From ₹999 <span className="text-sm font-normal text-gray-600">per person</span>
                </div>

                <div className="grid grid-rows-2 gap-4 my-4 text-sm">
                    {/* Calendar Input */}
                    <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-darkblue" />
                        <div className="flex-1">
                            <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                className="border border-gray-300 w-full rounded px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-darkblue"
                                dateFormat="EEE dd MMM, yyyy"
                                minDate={new Date()}
                                showPopperArrow={false}
                                placeholderText="Select date"
                            />
                        </div>
                    </div>

                    {/* Guests Dropdown */}
                    <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-darkblue" />
                        <select
                            value={guests}
                            onChange={(e) => setGuests(Number(e.target.value))}
                            className="border border-gray-300 w-full rounded px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-darkblue"
                            aria-label="Select number of guests"
                        >
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                                <option key={num} value={num}>
                                    {num} Guest{num > 1 ? 's' : ''}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <Button className="w-full" onClick={() => alert(`Booking for ${guests} guest(s) on ${startDate.toLocaleDateString()}`)}>
                    Book Now
                </Button>
                <p className="mt-4 text-darkblue text-sm">✓ Free cancellation up to 24h before experience starts</p>
            </Card>
        </div>

        {previewOpen && (
            <div
                className="fixed inset-0 p-10 z-50 bg-black/80 flex items-center justify-center animate-fade-in"
                tabIndex={-1}
                aria-modal="true"
                role="dialog"
            >
                {/* Navigation Left Button */}
                <button
                    aria-label="Previous image"
                    onClick={() =>
                        setCurrentImage((currentImage - 1 + images.length) % images.length)
                    }
                    className="absolute left-6 top-1/2 -translate-y-1/2 bg-darkblue/70 hover:bg-darkblue/40 p-2 rounded-full shadow-md text-white transition"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Preview Image with fade-in animation */}
                <img
                    src={images[currentImage]}
                    alt="Preview"
                    className="max-w-full max-h-full rounded-lg shadow-lg animate-fade-in"
                />

                {/* Navigation Right Button */}
                <button
                    aria-label="Next image"
                    onClick={() => setCurrentImage((currentImage + 1) % images.length)}
                    className="absolute right-6 top-1/2 -translate-y-1/2 bg-darkblue/70 hover:bg-darkblue/40 p-2 rounded-full shadow-md text-white transition"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>

                {/* Close Button */}
                <button
                    className="absolute top-6 right-6 text-white text-3xl font-bold hover:text-yellow-400 transition"
                    onClick={() => setPreviewOpen(false)}
                    aria-label="Close preview"
                >
                    &times;
                </button>
            </div>
        )}
    </section>
);
};

    const TourOverview = () => {
        const highlights = [
            "Day 1: Explore Jallianwala Bagh and learn about its significance in India's freedom struggle",
            "Day 1: Visit the awe-inspiring Golden Temple, the spiritual heart of Amritsar",
            "Day 1: Discover the stories of India's partition at the renowned Partition Museum",
            "Day 1: Experience the patriotic Wagah Border ceremony, witnessing the vibrant flag-lowering ritual",
            "Day 2: Embark on a guided Food Walking Tour and savor authentic Amritsari flavors",
            "Day 2: Enjoy a Heritage Walk through Amritsar’s historic streets and vibrant bazaars",
            "Day 2: Visit the sacred Durgiana Mandir, known for its architectural beauty",
            "Day 2: Explore Gobindgarh Fort (ticket not included), delving into its rich history and cultural exhibits",
            "Benefit from seamless transfers, expert guidance, and personalized recommendations throughout both days"
        ];
        return (
            <Card className="p-6 mb-12 border-t-4 border-lightblue shadow-lg">
                <h2 className="text-3xl font-bold mb-6">Two Day Excursion Overview</h2>
                <p className="mb-6 text-gray-700">
                    Experience the best of Amritsar with this immersive two-day excursion. On Day 1, visit the poignant Jallianwala Bagh, the majestic Golden Temple, the insightful Partition Museum, and witness the electrifying Wagah Border ceremony. Day 2 takes you on a culinary adventure with a Food Walking Tour, a Heritage Walk through the city’s historic lanes, visits to the sacred Durgiana Mandir, and the iconic Gobindgarh Fort (entry ticket not included). Enjoy expert guidance, comfortable transfers, and a well-organized itinerary for a truly memorable Amritsar experience.
                </p>
                <ul className="list-disc ml-6 space-y-2 text-gray-700">
                    {highlights.map((point, idx) => <li key={idx}>{point}</li>)}
                </ul>
                <div className="mt-6 text-gray-700">
                    <p>
                        <strong>Duration:</strong> 2 Days (approx. 8-10 hours each day) <br />
                        <strong>Languages Offered:</strong> English, Hindi, Punjabi <br />
                        <strong>Best Time to Visit:</strong> Morning start for both days to maximize your experience <br />
                        <strong>Includes:</strong> Guided visits, transfers, and all entry arrangements (Gobindgarh Fort ticket excluded)
                    </p>
                    <p className="mt-4">
                        This excursion is perfect for travelers who want to experience Amritsar’s history, spirituality, culture, and cuisine in a comprehensive and well-curated manner.
                    </p>
                </div>
            </Card>
        );
    };

const TourInclusions = () => {
    return (
        <Card className="p-6 mb-12">
            <h2 className="text-2xl font-bold text-darkblue mb-4 flex items-center gap-2">
                <Check className="w-6 h-6 text-darkblue" />
                What's Included
            </h2>
            <ul className="list-disc ml-6 text-gray-700 mb-2">
                <li>Expert-guided tour covering Jallianwala Bagh, Partition Museum, Golden Temple, and Wagah Border (Day 1)</li>
                <li>Food Walking Tour with tasting of authentic Amritsari delicacies (Day 2)</li>
                <li>Guided Heritage Walk through Amritsar’s historic streets and vibrant bazaars (Day 2)</li>
                <li>Visit to Durgiana Mandir (Day 2)</li>
                <li>Visit to Gobindgarh Fort (entry ticket not included) (Day 2)</li>
                <li>All transfers in a comfortable, air-conditioned vehicle</li>
                <li>Assistance with entry arrangements at all major sites</li>
                <li>Insightful commentary on Amritsar’s history, culture, and significance of each site</li>
                <li>Opportunities for photo stops at iconic landmarks</li>
                <li>Personalized recommendations for further exploration in Amritsar</li>
            </ul>
            <h3 className="font-semibold text-red-700 mt-6 mb-2 flex items-center gap-2">
                <X className="w-5 h-5 text-red-500" />
                Not Included
            </h3>
            <ul className="list-disc ml-6 text-gray-700">
                <li>Meals beyond included tastings</li>
                <li>Gratuities for guide and driver</li>
                <li>Personal purchases or souvenirs</li>
                <li>Entry fees to paid attractions (if any, optional)</li>
                <li>Gobindgarh Fort entry ticket</li>
                <li>Partition Museum ticket</li>
                <li>Hotel accommodation</li>
            </ul>
        </Card>
    );
};

const TourAdditionalInfo = () => {
    const [expanded, setExpanded] = useState(false);
    const items = [
        "Confirmation will be received at time of booking",
        "Not wheelchair accessible",
        "Stroller accessible",
        "Private tour activity",
        "Moderate physical fitness required",
        "Weather dependent - alternate offered",
    ];
    const visible = expanded ? items : items.slice(0, 4);
    return (
        <Card className="p-6 border-t-4 border-darkblue">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-darkblue">Additional Info</h2>
                <button
                    onClick={() => setExpanded(!expanded)}
                    className="text-darkblue focus:outline-none"
                    aria-label={expanded ? "Show less" : "Show more"}
                >
                    {expanded ? <ChevronUp /> : <ChevronDown />}
                </button>
            </div>
            <ul className="space-y-2 text-gray-700">
                {visible.map((info, idx) => (
                    <li key={idx} className="flex gap-2 items-start">
                        <Info className="w-4 h-4 text-darkblue mt-1" />
                        {info}
                    </li>
                ))}
            </ul>
        </Card>
    );
};

const TourItinerary = () => {
    const [showAll, setShowAll] = useState(false);
    const stops = [
        // Day 2 only
        {
            title: "Day 2: Food Walking Tour",
            duration: "1 hr 30 min",
            description: "Embark on a guided food walk through Amritsar’s bustling streets. Savor authentic Amritsari delicacies and learn about the city’s culinary heritage.",
        },
        {
            title: "Day 2: Heritage Walk",
            duration: "1 hr",
            description: "Explore Amritsar’s historic lanes and vibrant bazaars on a heritage walk. Discover hidden gems, architectural marvels, and local stories.",
        },
        {
            title: "Day 2: Durgiana Mandir",
            duration: "40 min",
            description: "Visit the sacred Durgiana Mandir, known for its beautiful architecture and spiritual ambiance.",
        },
        {
            title: "Day 2: Gobindgarh Fort (Ticket Excluded)",
            duration: "1 hr",
            description: "Delve into Amritsar’s history at Gobindgarh Fort. Explore its museums, cultural exhibits, and vibrant atmosphere. (Entry ticket not included.)",
        },
        {
            title: "Day 2: Return/Drop-off",
            duration: "30 min",
            description: "Conclude your two-day excursion with a comfortable transfer back to your hotel or preferred location.",
        },
    ];
    const visible = showAll ? stops : stops.slice(0, 6);

    return (
        <Card className="p-4 sm:p-6 mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-darkblue mb-4 sm:mb-6">Itinerary</h2>
            <div className="bg-darkblue/10 rounded-2xl p-3 sm:p-4 border border-darkblue/20 shadow-sm">
                {visible.map((stop, i) => (
                    <div
                        key={i}
                        className="mb-5 last:mb-0 bg-white rounded-xl shadow-md p-4 sm:p-6 flex flex-col sm:flex-row gap-4 border border-darkblue/10"
                    >
                        <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 bg-darkblue text-white font-bold rounded-xl shadow">
                            {i + 1}
                        </div>
                        <div className="flex-1">
                            <h4 className="text-lg sm:text-xl font-semibold text-darkblue mb-1">{stop.title}</h4>
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-xs bg-darkblue/10 text-darkblue px-2 py-0.5 rounded font-medium">
                                    Duration: {stop.duration}
                                </span>
                            </div>
                            <p className="text-gray-700 text-sm sm:text-base">{stop.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
};

const videos = [
    {
        url: 'https://www.youtube.com/embed/ivTsHLtNM_U',
        title: 'Golden Temple Amritsar Full Tour & History',
        description: 'Explore the Golden Temple, its history, and spiritual significance in this detailed walkthrough.',
    },
    {
        url: 'https://www.youtube.com/embed/mVz0V9lqivw',
        title: 'Langar at Golden Temple: World’s Largest Free Kitchen',
        description: 'Discover how the Golden Temple serves thousands daily with its incredible community kitchen.',
    },
    {
        url: 'https://www.youtube.com/embed/_bKE6SGPIs8',
        title: 'Palki Sahib Ceremony at Golden Temple',
        description: 'Experience the mesmerizing Palki Sahib ceremony, a highlight of the Golden Temple visit.',
    },
    {
        url: 'https://www.youtube.com/embed/52nlfLk99gU',
        title: 'Golden Temple Visitor Guide: Tips & Etiquette',
        description: 'Essential tips and etiquette for first-time visitors to the Golden Temple.',
    },
];

const SuggestedVideo = () => {
    return (
        <section className="mb-12 mt-10">
            <Card className="p-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-darkblue mb-6">Suggested Videos</h2>
                <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2">
                    {videos.map((video, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow hover:shadow-lg transition p-3 sm:p-4 flex flex-col"
                        >
                            <div className="relative w-full aspect-video rounded-md overflow-hidden">
                                <iframe
                                    className="absolute inset-0 w-full h-full rounded-md"
                                    src={video.url}
                                    title={video.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <h4 className="mt-3 text-base sm:text-lg font-semibold text-darkblue">{video.title}</h4>
                            <p className="text-gray-600 text-sm mt-1">{video.description}</p>
                        </div>
                    ))}
                </div>
            </Card>
        </section>
    );
};



const TourDetailsPage = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-10">
        <TourHero />
        <TourOverview />
        <TourItinerary />
        <TourInclusions />
        <TourAdditionalInfo />
        <SuggestedVideo />
      </div>
        <SuggestiveTours />
        <WhyUs />
        <Footer/>
    </>
  );
};

export default TourDetailsPage;