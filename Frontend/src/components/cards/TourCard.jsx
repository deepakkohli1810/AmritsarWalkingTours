import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const TourCard = ({
  title,
  price = "999",
  videoUrl,
  detailsPath,
  bookPath,
}) => {
  const navigate = useNavigate();
  const [isVideoReady, setIsVideoReady] = useState(false);

  const optimizedVideoUrl = videoUrl.includes("cloudinary")
    ? videoUrl.replace(
        "/upload/",
        "/upload/w_auto,h_480,c_scale,dpr_auto,q_auto:good,f_auto,so_0/"
      )
    : videoUrl;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 0.97 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      onClick={() => detailsPath && navigate(detailsPath)}
      className="cursor-pointer border-[1px] w-full lg:w-[90%] md:w-[90%] p-1 font-fredoka rounded-3xl border-lightblue shadow-md overflow-hidden hover:shadow-gray-700 hover:shadow-lg transition-all duration-200 ease-in-out"
    >
      {/* Video Container */}
      <div className="relative w-full h-[40vh] bg-gray-100 rounded-t-3xl overflow-hidden">
        {/* Optional: Show a loading indicator or blur preview */}
        {!isVideoReady && (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-gray-200 to-gray-100">
            <span className="text-gray-500 text-sm">
              Loading...
            </span>
          </div>
        )}

        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata" // ⚡ Only loads metadata initially (fast)
          onLoadedData={() => setIsVideoReady(true)} // Mark as ready
          onCanPlayThrough={() => setIsVideoReady(true)} // Fully ready to play
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isVideoReady ? "opacity-100" : "opacity-0"
          }`}
          // Optional: Add loading="lazy" if offscreen
        >
          <source
            src={optimizedVideoUrl}
            type="video/mp4"
          />
        </video>
      </div>

      {/* Content */}
      <h1 className="px-4 py-1 text-2xl font-medium tracking-tighter leading-1 text-yellow-500">
        {title}
      </h1>

      <p className="ml-4 mb-3 text-lightblue leading-1">
        Explore from just ₹{price}
      </p>

      <div className="p-4 flex justify-between items-center">
        <button
          className="text-darkblue text-lg"
          onClick={(e) => {
            e.stopPropagation();
            detailsPath && navigate(detailsPath);
          }}
        >
          View Details
        </button>
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="bg-darkblue px-4 py-2 rounded-3xl text-white"
          onClick={(e) => {
            e.stopPropagation();
            (bookPath || detailsPath) &&
              navigate("/BookNow");
          }}
        >
          Book Now
        </motion.button>
      </div>
    </motion.div>
  );
};

export default TourCard;
