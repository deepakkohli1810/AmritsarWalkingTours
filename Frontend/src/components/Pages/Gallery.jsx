import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import BottomBar from "./bottomBar";
import Footer from "./Footer";
import {
  FaRegImages,
  FaRegGem,
  FaMapMarkedAlt,
  FaUtensils,
  FaBorderAll,
  FaTimes,
} from "react-icons/fa";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] =
    useState("all");

  const categories = [
    { id: "all", name: "All", icon: FaRegImages },
    {
      id: "religious",
      name: "Sacred Sites",
      icon: FaRegGem,
    },
    {
      id: "historical",
      name: "History",
      icon: FaMapMarkedAlt,
    },
    { id: "food", name: "Food Walk", icon: FaUtensils },
    { id: "border", name: "Wagah", icon: FaBorderAll },
  ];

  const galleryItems = [
    {
      id: 1,
      title: "Golden Temple at Dawn",
      description:
        "The sacred Harmandir Sahib glistening in the morning light",
      category: "religious",
      img: "https://placehold.co/600x400/332D56/white?text=Golden+Temple",
      location: "Amritsar",
    },
    {
      id: 2,
      title: "Jallianwala Bagh Memorial",
      description:
        "The historic garden commemorating a pivotal moment in India's freedom struggle",
      category: "historical",
      img: "https://placehold.co/600x400/332D56/white?text=Jallianwala+Bagh",
      location: "Amritsar",
    },
    {
      id: 3,
      title: "Langar at Golden Temple",
      description:
        "The world's largest community kitchen serving free meals to all visitors",
      category: "religious",
      img: "https://placehold.co/600x400/332D56/white?text=Langar",
      location: "Amritsar",
    },
    {
      id: 4,
      title: "Traditional Amritsari Street Food",
      description:
        "Authentic Amritsari kulcha and lassi at a local eatery",
      category: "food",
      img: "https://placehold.co/600x400/332D56/white?text=Amritsari+Food",
      location: "Walled City",
    },
    {
      id: 5,
      title: "Wagah Border Ceremony",
      description:
        "The famous Beating Retreat ceremony at the India-Pakistan border",
      category: "border",
      img: "https://placehold.co/600x400/332D56/white?text=Wagah+Border",
      location: "Wagah",
    },
    {
      id: 6,
      title: "Heritage Walk in Walled City",
      description:
        "Exploring the narrow lanes and historic architecture of Old Amritsar",
      category: "historical",
      img: "https://placehold.co/600x400/332D56/white?text=Walled+City",
      location: "Amritsar",
    },
    {
      id: 7,
      title: "Golden Temple Reflection",
      description:
        "The stunning reflection of Harmandir Sahib in the Amrit Sarovar",
      category: "religious",
      img: "https://placehold.co/600x400/332D56/white?text=Temple+Reflection",
      location: "Amritsar",
    },
    {
      id: 8,
      title: "Amritsari Chole Bhature",
      description:
        "Iconic Amritsari street food experience",
      category: "food",
      img: "https://placehold.co/600x400/332D56/white?text=Chole+Bhature",
      location: "Walled City",
    },
  ];

  // Filter items based on active category
  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeCategory
        );

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Amritsar Through Our Lens
            </h1>
            <p className="text-xl text-gray-600">
              Discover the spiritual, historical, and
              culinary treasures of Amritsar through these
              captivating images from our tours.
            </p>
          </motion.div>

          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="mb-10"
          >
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() =>
                      setActiveCategory(category.id)
                    }
                    className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                      activeCategory === category.id
                        ? "bg-darkblue text-white shadow-lg shadow-darkblue/20"
                        : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    <Icon className="text-lg" />
                    {category.name}
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 group relative"
              >
                <div
                  className="relative aspect-[4/3] cursor-pointer"
                  onClick={() => setSelectedImage(item)}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-200 text-sm">
                      {item.location}
                    </p>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 bg-darkblue/90 text-white px-3 py-1 rounded-full text-sm">
                    {
                      categories.find(
                        (c) => c.id === item.category
                      )?.name
                    }
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex items-center text-gray-500 text-sm">
                    <FaMapMarkedAlt className="mr-1.5" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16 bg-white rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="text-5xl mb-4">📸</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                No images in this category
              </h3>
              <p className="text-gray-600 max-w-md mx-auto">
                We're working on adding more images to this
                category. Please check back later or explore
                other categories.
              </p>
              <button
                onClick={() => setActiveCategory("all")}
                className="mt-4 px-5 py-2 bg-darkblue text-white rounded-lg font-medium hover:bg-darkblue/90 transition"
              >
                View All Images
              </button>
            </motion.div>
          )}

          {/* Lightbox */}
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <div
                className="relative max-w-4xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute -top-12 right-0 text-white hover:text-gray-300 transition"
                  onClick={() => setSelectedImage(null)}
                >
                  <FaTimes className="text-2xl" />
                </button>

                <div className="relative aspect-[16/9]">
                  <img
                    src={selectedImage.img}
                    alt={selectedImage.title}
                    className="w-full h-full object-contain rounded-xl"
                  />

                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                    <h2 className="text-2xl font-bold mb-2">
                      {selectedImage.title}
                    </h2>
                    <p className="text-gray-200 mb-3">
                      {selectedImage.description}
                    </p>
                    <div className="flex items-center">
                      <FaMapMarkedAlt className="mr-2" />
                      <span>{selectedImage.location}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 text-center text-white/70">
                  Click anywhere outside the image to close
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="container mx-auto px-4 py-12"
        >
          <div className="bg-gradient-to-r from-darkblue to-purple-700 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Ready to Experience Amritsar?
                </h2>
                <p className="text-lg text-white/90 mb-6 max-w-xl">
                  Join us on a journey through the spiritual
                  heart of Punjab. Our expert guides will
                  show you the authentic Amritsar that only
                  locals know.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="/BookNow"
                    className="px-6 py-3 bg-white text-darkblue font-semibold rounded-xl shadow-md hover:bg-gray-100 transition text-center"
                  >
                    Book Your Tour
                  </a>
                  <a
                    href="/contact"
                    className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition text-center"
                  >
                    Contact Us
                  </a>
                </div>
              </div>

              <div className="hidden lg:block relative">
                <div className="absolute inset-0 bg-[url('https://placehold.co/800x600/332D56/white?text=Golden+Temple')] bg-cover bg-center opacity-90"></div>
                <div className="absolute inset-0 bg-gradient-to-l from-darkblue to-transparent/50"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <BottomBar />
      <Footer />
    </>
  );
};

export default Gallery;
