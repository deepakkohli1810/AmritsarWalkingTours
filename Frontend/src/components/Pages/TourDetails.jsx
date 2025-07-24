// src/components/TourDetails.jsx
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  Calendar, Users, ChevronLeft, ChevronRight, Check, X, ChevronDown, ChevronUp, Info
} from "lucide-react";

// Reusable Button component
export const Button = ({ children, className = "", variant = "default", ...props }) => {
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
export const Card = ({ children, className = "" }) => (
  <div className={`bg-white shadow-md rounded-2xl ${className}`}>
    {children}
  </div>
);

// Hero Section for Any Tour
export const TourHero = ({ title, subtitle, images }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const [guests, setGuests] = useState(1);
  const [previewOpen, setPreviewOpen] = useState(false);

  useEffect(() => {
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
        <span className="text-darkblue font-light">AWT's Special </span>{title}
      </h1>
      <p className="text-lightblue mt-2">{subtitle}</p>

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
            {images.map((thumb, index) => (
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

            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-darkblue" />
              <select
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="border border-gray-300 w-full rounded px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-darkblue"
                aria-label="Select number of guests"
              >
                {[...Array(10)].map((_, i) => (
                  <option key={i} value={i + 1}>
                    {i + 1} Guest{i > 0 ? 's' : ''}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <Button className="w-full" onClick={() => alert(`Booking for ${guests} guest(s) on ${startDate.toLocaleDateString()}`)}>
            Book Now
          </Button>
          <p className="mt-4 text-darkblue text-sm">
            ✓ Free cancellation up to 24h before experience starts
          </p>
        </Card>
      </div>

      {previewOpen && (
        <div
          className="fixed inset-0 p-10 z-50 bg-black/80 flex items-center justify-center animate-fade-in"
          tabIndex={-1}
          aria-modal="true"
          role="dialog"
        >
          <button
            aria-label="Previous image"
            onClick={() => setCurrentImage((currentImage - 1 + images.length) % images.length)}
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-darkblue/70 hover:bg-darkblue/40 p-2 rounded-full shadow-md text-white transition"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <img
            src={images[currentImage]}
            alt="Preview"
            className="max-w-full max-h-full rounded-lg shadow-lg animate-fade-in"
          />

          <button
            aria-label="Next image"
            onClick={() => setCurrentImage((currentImage + 1) % images.length)}
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-darkblue/70 hover:bg-darkblue/40 p-2 rounded-full shadow-md text-white transition"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

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
