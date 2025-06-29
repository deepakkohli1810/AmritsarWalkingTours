import React from 'react';
import { ImLocation2 } from "react-icons/im";
import { IoPerson } from "react-icons/io5";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { FaCamera } from "react-icons/fa";
import { GiHearts } from "react-icons/gi";
import { RiStarSFill } from "react-icons/ri";
import { FaCheckCircle } from "react-icons/fa";

const offerCards = [
  { icon: <ImLocation2 />, title: 'Local Expertise', text: 'Born and raised in Amritsar, we know every hidden gem and authentic experience the city offers.' },
  { icon: <AiFillSafetyCertificate />, title: 'Safe & Secure', text: 'Customized itineraries tailored to your interests, whether spiritual, cultural, or culinary.' },
  { icon: <FaCamera />, title: 'Perfect Picture', text: 'Over 500+ happy travelers have rated us 5 stars for our exceptional service and experiences.' },
  { icon: <GiHearts />, title: 'Personalized Tours', text: 'Tailored tours that connect deeply with your interests and values.' },
  { icon: <RiStarSFill />, title: 'Highly Rated', text: 'Consistently rated 5 stars for unforgettable local experiences.' },
  { icon: <FaCheckCircle />, title: 'Trusted Services', text: 'We build trust with honesty, attention to detail, and genuine care.' },
];

const stats = [
  { count: '500+', label: 'Happy Travelers' },
  { count: '5 Star', label: 'Our Ratings' },
  { count: '10+', label: 'Years Experience' },
  { count: '20+', label: 'Tour Routes' },
];

const WhyUs = () => {
  return (
    <div className="min-h-screen w-full px-4 md:px-20 lg:px-40 py-10 font-DMSans bg-white">
      {/* Section Title */}
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold text-darkblue drop-shadow-sm">
        Why choose us for your Amritsar’s Trip?
      </h1>

      {/* Intro Paragraph */}
      <p className="mt-6 md:mt-10 text-base md:text-lg font-light text-gray-700 text-justify max-w-3xl mx-auto">
        At the heart of every journey we craft is passion, dedication, and people’s trust. With over 1 lakh happy subscribers and a growing community of explorers, we’re not just another tour company — we’re a movement built on hard work, authenticity, and unforgettable experiences. From hidden local gems to iconic landmarks, we curate tours that feel personal, immersive, and hassle-free. Our reputation is driven by real stories, real smiles, and the recognition we’ve earned from travelers like you. Whether you're looking for adventure, culture, or relaxation, we’re here to guide you every step of the way — because you deserve a journey as unique as you are.
      </p>

      {/* Image and Text Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-14 items-center">
        <div className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-8">
          <img
            src="/public/assets/photos/deepakji.jpg"
            className="w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] rounded-full object-cover border-4 border-darkblue shadow-md"
            alt="Founder Deepak"
          />
          <h1 className="mt-4 text-2xl font-bold text-darkblue">Amritsar Walking Tours</h1>
          <p className="text-sm font-light text-gray-600">Founder: Deepak (Youtuber)</p>

          {/* Watch Video Button */}
          <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
            <h2 className="text-lg font-semibold text-gray-700">Watch our latest video</h2>
            <a href="https://www.youtube.com/@Amritsarwalkingtours" target="_blank" rel="noopener noreferrer">
              <button className="bg-red-500 text-white px-5 py-2 rounded-full text-sm font-semibold shadow hover:scale-105 transition">
                Watch Now
              </button>
            </a>
          </div>

          {/* Subscriber Stats */}
          <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
            <a href="https://www.youtube.com/@Amritsarwalkingtours" target="_blank" rel="noopener noreferrer">
              <button className="bg-red-500 text-white px-5 py-2 text-sm rounded-full font-semibold shadow hover:scale-105 transition">
                Subscribers
              </button>
            </a>
            <div className="text-center sm:text-left leading-snug font-medium text-gray-800">
              <p>173k Subscribers</p>
              <p>357 Videos</p>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-darkblue tracking-tight mb-4">
            “We know more than Amritsar!”
          </h1>
          <p className="mt-4 text-base md:text-lg font-light text-gray-700 text-justify">
            Since 2014, I’ve been dedicated to showcasing the beauty of Punjab through my work with Punjab Tourism. In 2019, I started my YouTube channel, Amritsar Walking Tours, to capture the essence of cities through immersive street videos. Thanks to the overwhelming love and support from you all, I’ve continued exploring different parts of Punjab — reconnecting with my roots, culture, religion, and the incredible people who make this land so special. One of the most enjoyable parts of this journey has been tasting the diverse, flavorful foods of each region. Now, I’ve launched my own tour company, and I truly hope to have your continued support on this new chapter.
          </p>
        </div>
      </div>

      {/* What We Offer */}
      <h1 className="mt-20 text-center text-3xl sm:text-4xl font-extralight text-darkblue">
        What we offer to our guests
      </h1>

      {/* Offer Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {offerCards.map((item, i) => (
          <div
            key={i}
            className="bg-white text-darkblue px-8 py-8 rounded-2xl shadow-xl hover:scale-105 transition"
          >
            <div className="flex items-center justify-center gap-3 text-3xl mb-4">
              <span className="bg-darkblue bg-opacity-10 rounded-full p-3">{item.icon}</span>
              <h2 className="text-xl font-bold">{item.title}</h2>
            </div>
            <p className="text-center font-light text-base">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Statistics */}
      <div className="max-w-6xl mx-auto mt-16 px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white rounded-xl shadow-md py-8 hover:bg-gray-100 transition">
              <h1 className="text-4xl font-extrabold text-darkblue drop-shadow">{stat.count}</h1>
              <p className="text-gray-700 mt-2 text-lg font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
