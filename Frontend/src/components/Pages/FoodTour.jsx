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
            <span className="text-darkblue font-light">AWT's Special </span> Food Walking Tour
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
            "Taste 14-16 iconic Amritsari dishes from legendary street food stalls and hidden gems",
            "Sample a curated mix of vegetarian and non-vegetarian delights, sweets, snacks, and beverages",
            "Walk through bustling bazaars, historic lanes, and vibrant food alleys with a passionate local guide",
            "Discover the stories, traditions, and culinary secrets behind Amritsar’s most beloved foods",
            "Enjoy exclusive tastings at places only locals know, skipping tourist traps"
        ];
        return (
            <Card className="p-6 mb-12 border-t-4 border-lightblue shadow-lg">
                <h2 className="text-3xl font-bold mb-6">Amritsar Food Walking Tour Overview</h2>
                <p className="mb-6 text-gray-700">
                    Embark on a mouthwatering journey through Amritsar’s legendary food scene. Guided by a local food expert, you’ll explore the city’s vibrant streets and hidden corners, tasting 14-16 authentic dishes from iconic eateries and family-run shops. From sizzling snacks to decadent sweets, experience the true flavors of Amritsar like a local.
                </p>
                <ul className="list-disc ml-6 space-y-2 text-gray-700">
                    {highlights.map((point, idx) => <li key={idx}>{point}</li>)}
                </ul>
                <div className="mt-6 text-gray-700">
                    <p>
                        <strong>Duration:</strong> 3-4 hours <br />
                        <strong>Languages Offered:</strong> English, Hindi, Punjabi <br />
                        <strong>Best Time to Visit:</strong> Evening for the freshest street food and lively atmosphere <br />
                        <strong>Dress Code:</strong> Comfortable walking shoes and attire; come hungry!
                    </p>
                    <p className="mt-4">
                        Your guide will share fascinating stories, introduce you to local vendors, and ensure you discover the best-kept culinary secrets of Amritsar. Perfect for foodies and culture lovers alike!
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
                <li>Guided walking tour with a passionate local food expert</li>
                <li>14-16 tastings of authentic Amritsari dishes (vegetarian & non-vegetarian)</li>
                <li>Visits to legendary street food stalls, hidden gems, and family-run eateries</li>
                <li>All food and beverage tastings as per the curated itinerary</li>
                <li>Stories, history, and cultural insights about Amritsar’s food traditions</li>
                <li>Bottled water for each guest</li>
                <li>Assistance with dietary preferences (where possible)</li>
                <li>Small group experience for personalized attention</li>
            </ul>
            <h3 className="font-semibold text-red-700 mt-6 mb-2 flex items-center gap-2">
                <X className="w-5 h-5 text-red-500" />
                Not Included
            </h3>
            <ul className="list-disc ml-6 text-gray-700">
                <li>Personal purchases or extra food/drinks not part of the tour</li>
                <li>Gratuities for guide or vendors</li>
                <li>Expenses for activities not mentioned in the inclusions</li>
            </ul>
        </Card>
    );
};

const TourAdditionalInfo = () => {
    const [expanded, setExpanded] = useState(false);
    const items = [
        "Confirmation will be received at time of booking",
        "Not wheelchair accessible (some old city lanes are narrow/uneven)",
        "Vegetarian and non-vegetarian options available; please specify dietary preferences at booking",
        "Wear comfortable walking shoes and bring a water bottle",
        "Tour operates rain or shine—carry an umbrella in monsoon season",
        "Moderate walking involved; suitable for most fitness levels",
        "Children must be accompanied by an adult",
        "Please inform us of any food allergies in advance",
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
        {
            title: "Savour Amritsari Kulcha & Chole",
            duration: "30 min",
            description: "Kick off your food journey with the city’s iconic stuffed kulcha and spicy chole at a legendary local eatery.",
        },
        {
            title: "Explore Hall Bazaar & Sample Samosa/Chaat",
            duration: "25 min",
            description: "Stroll through the bustling Hall Bazaar and taste crispy samosas or tangy chaat from a popular street vendor.",
        },
        {
            title: "Try Lassi at a Heritage Dairy",
            duration: "20 min",
            description: "Refresh yourself with a glass of creamy, frothy lassi at a family-run dairy that’s been serving locals for generations.",
        },
        {
            title: "Sweet Tooth Stop: Jalebi & Pinni",
            duration: "20 min",
            description: "Indulge in piping hot jalebis and traditional Punjabi pinni at a beloved sweet shop.",
        },
        {
            title: "Hidden Lane Tastings: Papdi, Matthi, & More",
            duration: "25 min",
            description: "Venture into narrow lanes to discover lesser-known snacks like papdi, matthi, and spicy pickles.",
        },
        {
            title: "Surprise Last Stop!",
            duration: "20 min",
            description: "End your food adventure at a classic Amritsari tea stall—Giani Tea Stall or a similar local favorite. Enjoy a cup of chai and reflect on your culinary journey!",
        }
    ];
    const visible = showAll ? stops : stops.slice(0, 4);

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
            {!showAll && (
                <div className="flex justify-center mt-4 sm:mt-6">
                    <Button
                        variant="outline"
                        className="border-darkblue text-darkblue hover:bg-darkblue/10 font-semibold"
                        onClick={() => setShowAll(true)}
                    >
                        Show Full Itinerary
                    </Button>
                </div>
            )}
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