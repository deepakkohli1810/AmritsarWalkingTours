import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const TourCard = ({ title, price = "999", videoUrl, detailsPath, bookPath }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 0.97 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true }}
      onClick={() => detailsPath && navigate(detailsPath)}
      className="cursor-pointer border-[1px] w-full lg:w-[90%] md:w-[90%] p-1 font-fredoka rounded-3xl border-lightblue shadow-md overflow-hidden hover:shadow-gray-700 hover:shadow-lg transition-all duration-200 ease-in-out"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-[40vh] object-cover rounded-t-3xl"
      >
        <source src={videoUrl} type="video/mp4" />
      </video>

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
            (bookPath || detailsPath) && navigate(bookPath || detailsPath);
          }}
        >
          Book Now
        </motion.button>
      </div>
    </motion.div>
  );
};

export default TourCard;
