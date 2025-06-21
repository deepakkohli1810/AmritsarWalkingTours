// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative w-[100%] md:w-full lg:w-full  h-[76vh]  lg:h-[90vh] rounded-3xl overflow-hidden ">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 p-4 lg:p-10 md:p-10 md:rounded-[70px] lg:rounded[70px] rounded-[40px] lg:w-full md:w-full  w-[100%]  h-full  object-cover lg:object-cover md:object-cover z-10"
      >
        <source src="https://res.cloudinary.com/dmgib4rwd/video/upload/q_auto,f_auto,vc_auto/ac_none/v1750262472/HeroVideo1_umghln.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0  z-10" />

      {/* Animated Text Box */}
      <motion.div
        className="relative z-20 flex flex-col items-center justify-center text-center h-full text-white px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="bg-black  bg-opacity-10 p-4 rounded-3xl w-[90%] max-w-full overflow-hidden">
  <motion.h1
    className="text-6xl leading-[60px] sm:text-8xl md:text-9xl font-bold tracking-tighter  "
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5, duration: 1 }}
  >
    Amritsar
  </motion.h1>

  <motion.h1
    className="text-3xl mt-0 sm:text-3xl md:text-5xl font-bold tracking-tighter mb-2"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5, duration: 1 }}
  >
    Walking Tours
  </motion.h1>

  <motion.p
    className="text-[17px] sm:text-base md:text-lg font-light"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1, duration: 1 }}
  >
    History Lives Here – Come Walk With us.
  </motion.p>
</div>

       <button className="bg-lightblue tracking-tight rounded-[50px] px-4 transition-colors duration-300  py-2 mt-5">
       <motion.p
            className="font-light hover:text-wyellow "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Explore Our Tours
          </motion.p>
       </button>

      </motion.div>
    </div>
  );
};

export default Hero;
