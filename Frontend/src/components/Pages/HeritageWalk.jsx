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
            <span className="text-darkblue font-light">AWT's Special </span> Heritage Walk
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
            "Stroll through Amritsar’s historic lanes and bustling bazaars with a local expert",
            "Discover hidden gems, centuries-old havelis, and vibrant street art in the old city",
            "Visit iconic landmarks like the Golden Temple, Jallianwala Bagh, and Akhara Sangalwala",
            "Experience the city’s rich Sikh, Hindu, and colonial heritage firsthand",
            "Enjoy authentic local snacks and learn about Amritsar’s unique culture and traditions"
        ];
        return (
            <Card className="p-6 mb-12 border-t-4 border-lightblue shadow-lg">
                <h2 className="text-3xl font-bold mb-6">Amritsar Heritage Walk Overview</h2>
                <p className="mb-6 text-gray-700">
                    Step back in time as you explore the heart of Amritsar on a guided heritage walk. Wander through narrow alleys, vibrant bazaars, and historic neighborhoods that have witnessed centuries of history. This immersive experience reveals the city’s architectural marvels, spiritual sites, and the stories that shaped Amritsar’s unique identity.
                </p>
                <ul className="list-disc ml-6 space-y-2 text-gray-700">
                    {highlights.map((point, idx) => <li key={idx}>{point}</li>)}
                </ul>
                <div className="mt-6 text-gray-700">
                    <p>
                        <strong>Duration:</strong> 2-3 hours <br />
                        <strong>Languages Offered:</strong> English, Hindi, Punjabi <br />
                        <strong>Best Time to Visit:</strong> Early morning or late afternoon <br />
                        <strong>Dress Code:</strong> Comfortable walking shoes and modest attire
                    </p>
                    <p className="mt-4">
                        Led by passionate local guides, this walk is perfect for history buffs, culture lovers, and anyone eager to experience the authentic soul of Amritsar beyond the usual tourist trail.
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
                <li>Guided heritage walk with a knowledgeable local expert</li>
                <li>Visits to key historical sites and hidden gems in Amritsar’s old city</li>
                <li>Insightful commentary on history, architecture, and local culture</li>
                <li>Opportunities to interact with local artisans and shopkeepers</li>
                <li>Tasting of authentic local snacks and refreshments</li>
                <li>Photo stops at iconic landmarks and vibrant street art</li>
                <li>Assistance with navigating narrow lanes and bazaars</li>
                <li>Personalized recommendations for further exploration</li>
            </ul>
            <h3 className="font-semibold text-red-700 mt-6 mb-2 flex items-center gap-2">
                <X className="w-5 h-5 text-red-500" />
                Not Included
            </h3>
            <ul className="list-disc ml-6 text-gray-700">
                <li>Meals beyond included tastings</li>
                <li>Gratuities for guide</li>
                <li>Personal purchases or souvenirs</li>
                <li>Entry fees to paid attractions (if any, optional)</li>
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
        {
            title: "Start at Town Hall",
            duration: "10 min",
            description: "Meet your guide at the historic Town Hall, get an introduction to Amritsar’s old city and the walk ahead.",
        },
        {
            title: "Heritage Street & Partition Museum",
            duration: "20 min",
            description: "Stroll down the beautifully restored Heritage Street, passing colonial-era buildings and the Partition Museum (outside view).",
        },
        {
            title: "Jallianwala Bagh",
            duration: "30 min",
            description: "Visit the poignant site of the 1919 massacre, learn about its history, and see the memorial and bullet marks.",
        },
        {
            title: "Golden Temple (Sri Harmandir Sahib)",
            duration: "40 min",
            description: "Marvel at the Golden Temple’s stunning architecture, learn about Sikh traditions, and witness the spiritual atmosphere.",
        },
        {
            title: "Akhara Sangalwala & Havelis",
            duration: "20 min",
            description: "Explore a traditional wrestling arena and admire centuries-old havelis with intricate facades and balconies.",
        },
        {
            title: "Katra Jaimal Singh Bazaar",
            duration: "20 min",
            description: "Wander through bustling bazaars famous for phulkari embroidery, spices, and local crafts.",
        },
        {
            title: "Chowk Passian & Street Art",
            duration: "15 min",
            description: "Discover vibrant street art and murals depicting Amritsar’s culture and history.",
        },
        {
            title: "Tasting Local Snacks",
            duration: "15 min",
            description: "Enjoy authentic Amritsari snacks like kulcha, lassi, or jalebi at a local eatery (included).",
        },
        {
            title: "End at Hall Bazaar",
            duration: "10 min",
            description: "Conclude the walk at Hall Bazaar, with tips for further exploration and shopping.",
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