// src/components/Gallery.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import Navbar from "../Navbar";
import BottomBar from "../bottomBar";
import Footer from "../Footer";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");

  // Categories
  const categories = [
    { id: "all", name: "All" },
    { id: "religious", name: "Sacred Sites" },
    { id: "historical", name: "History" },
    { id: "food", name: "Food Walk" },
    { id: "border", name: "Wagah" },
  ];

  // Gallery Images
const galleryItems = [
  {
    id: 1,
    title: "Golden Temple at Dawn",
    category: "religious",
    img: "/assets/GoldenTemple/photo18.png",
  },
  {
    id: 2,
    title: "Devotion at Golden Temple",
    category: "religious",
    img: "/assets/GoldenTemple/photo19.png",
  },
  {
    id: 3,
    title: "Jallianwala Bagh",
    category: "historical",
    img: "/assets/GoldenTemple/photo14.png",
  },
  {
    id: 4,
    title: "Langar at Golden Temple",
    category: "religious",
    img: "/assets/GoldenTemple/photo21.png",
  },
  {
    id: 5,
    title: "Amritsari Street Food",
    category: "food",
    img: "/assets/FoodWalk/photo (63).png",
  },
  {
    id: 6,
    title: "Wagah Border Ceremony",
    category: "border",
    img: "/assets/WagahBorder/photo39.png",
  },
  {
    id: 7,
    title: "Our BSF Force",
    category: "border",
    img: "/assets/WagahBorder/photo26.png",
  },
  {
    id: 8,
    title: "Local Village Life",
    category: "historical",
    img: "/assets/VillageTour/photo (15).png",
  },
  {
    id: 9,
    title: "Temple Reflection",
    category: "religious",
    img: "/assets/GoldenTemple/photo18.png",
  },
  {
    id: 10,
    title: "Kulche Chole",
    category: "food",
    img: "/assets/FoodWalk/photo (4).png",
  },
];


  // Filter images
  const filteredItems = activeCategory === "all"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hover: { scale: 1.05, boxShadow: "0px 6px 15px rgba(0,0,0,0.1)" },
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="py-12 text-center max-w-3xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl md:text-4xl font-bold text-gray-800"
          >
            Amritsar Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-gray-600 mt-3"
          >
            A glimpse into the soul of Punjab through our walking tours.
          </motion.p>
        </section>

        {/* Category Filters */}
        <section className="mb-8 px-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                variants={buttonVariants}
                whileHover="hover"
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 capitalize
                  ${activeCategory === cat.id
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
                  }`}
              >
                {cat.name}
              </motion.button>
            ))}
          </motion.div>
        </section>

        {/* Gallery Grid */}
        <section className="px-4 pb-12">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedImage(item)}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="text-base font-medium text-gray-800">{item.title}</h3>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="col-span-full text-center py-10 text-gray-500"
              >
                <p>No images in this category.</p>
                <button
                  onClick={() => setActiveCategory("all")}
                  className="mt-2 text-blue-600 hover:underline text-sm"
                >
                  View all images
                </button>
              </motion.div>
            )}
          </motion.div>
        </section>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative max-w-2xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.button
                  whileHover={{ scale: 1.2, rotate: 90 }}
                  className="absolute -top-12 right-0 text-white hover:text-yellow-300 transition"
                  onClick={() => setSelectedImage(null)}
                >
                  <FaTimes size={28} />
                </motion.button>

                <motion.img
                  src={selectedImage.img}
                  alt={selectedImage.title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
                />

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-white text-center mt-4 text-sm"
                >
                  {selectedImage.title}
                </motion.p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call to Action */}
        <section className="px-4 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="max-w-4xl mx-auto text-center bg-blue-600 text-white rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-3">Love what you see?</h2>
            <p className="mb-6 opacity-90">Join our walking tour and experience Amritsar in person.</p>
            <motion.a
              href="/BookNow"
              whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(0,0,0,0.2)" }}
              className="inline-block bg-white text-blue-600 font-semibold px-6 py-2 rounded-full transition-all"
            >
              Book a Tour
            </motion.a>
          </motion.div>
        </section>
      </div>

      <BottomBar />
      <Footer />
    </>
  );
};

export default Gallery;