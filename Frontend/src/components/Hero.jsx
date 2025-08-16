// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const videos = [
    {
      src: "https://res.cloudinary.com/dmgib4rwd/video/upload/q_auto,f_auto,vc_auto/ac_none/v1750484097/goldentemplecard_ohuanw.mp4",
      alt: "Golden Temple",
    },
    {
      src: "https://res.cloudinary.com/dmgib4rwd/video/upload/q_auto,f_auto,vc_auto/ac_none/v1750484904/foodcard_qphxet.mp4",
      alt: "Food",
    },
    {
      src: "https://res.cloudinary.com/dmgib4rwd/video/upload/q_auto,f_auto,vc_auto/ac_none/v1750485273/villagecard_a3f9sm.mp4",
      alt: "Village",
    },
  ];

  return (
    <div className="relative w-full h-[76vh] md:h-[80vh] lg:h-[90vh] rounded-3xl overflow-hidden">
      {/* Background Videos */}
      <div className="w-full px-4 md:px-6 lg:px-10 mt-2 md:mt-4">
        <div className="grid grid-cols-1 md:grid-cols-3  overflow-hidden rounded-lg md:rounded-xl h-[calc(100%-1rem)]">
          {videos.map((video, index) => (
            <div
              key={index}
              className="relative w-full h-[25vh] md:h-[70vh] lg:h-[80vh]"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src={video.src} type="video/mp4" />
              </video>
            </div>
          ))}
        </div>
      </div>

      {/* Animated Text Box */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="flex flex-col items-center justify-center w-full h-full max-w-4xl">
          <div className="text-center px-2">
            {/* Main Heading */}
            <motion.h1
              className="text-5xl xs:text-5xl sm:text-8xl md:text-8xl lg:text-9xl text-yellow-500 font-bold tracking-tighter leading-none"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              AMRITSAR
            </motion.h1>

            {/* Subheading */}
            <motion.h2
              className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold text-yellow-400 tracking-wide mt-1 sm:mt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Walking Tour
            </motion.h2>

            {/* Tagline */}
            <motion.p
              className="text-sm xs:text-base sm:text-lg md:text-xl font-light mt-2 sm:mt-3 text-gray-200 max-w-2xl mx-auto px-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 1 }}
            >
              History Lives Here – Come Walk With Us
            </motion.p>
          </div>

          <motion.button
            className="bg-blue-500 hover:bg-blue-600 text-white font-light tracking-tight rounded-full px-6 py-2 sm:px-8 sm:py-3 mt-4 sm:mt-6 md:mt-8 transition-colors duration-300 text-sm sm:text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/OurTours")}
          >
            Explore Our Tours
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
