import React from "react";
import { ImLocation2 } from "react-icons/im";
import { IoPerson } from "react-icons/io5";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { FaCamera } from "react-icons/fa";
import { GiHearts } from "react-icons/gi";
import { RiStarSFill } from "react-icons/ri";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const offerCards = [
  {
    icon: <ImLocation2 />,
    title: "Local Expertise",
    text: "Born and raised in Amritsar, we know every hidden gem and authentic experience the city offers.",
  },
  {
    icon: <AiFillSafetyCertificate />,
    title: "Safe & Secure",
    text: "Customized itineraries tailored to your interests, whether spiritual, cultural, or culinary.",
  },
  {
    icon: <FaCamera />,
    title: "Perfect Picture",
    text: "Over 500+ happy travelers have rated us 5 stars for our exceptional service and experiences.",
  },
  {
    icon: <GiHearts />,
    title: "Personalized Tours",
    text: "Tailored tours that connect deeply with your interests and values.",
  },
  {
    icon: <RiStarSFill />,
    title: "Highly Rated",
    text: "Consistently rated 5 stars for unforgettable local experiences.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Trusted Services",
    text: "We build trust with honesty, attention to detail, and genuine care.",
  },
];

const stats = [
  { count: "500+", label: "Happy Travelers" },
  { count: "5 Star", label: "Our Ratings" },
  { count: "10+", label: "Years Experience" },
  { count: "20+", label: "Tour Routes" },
];

const WhyUs = () => {
  return (
    <div className="w-full px-4 md:px-20 lg:px-40 py-16 font-DMSans bg-gradient-to-b from-white to-blue-50 overflow-x-hidden">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-darkblue mb-4">
          Why choose{" "}
          <span className="text-golden">
            Amritsar Walking Tours
          </span>
          ?
        </h1>
        <div className="w-24 h-2 bg-yellow-500 mx-auto rounded-full"></div>
      </div>

      {/* Intro Paragraph */}
      <div className="max-w-4xl mx-auto">
        <p className="text-lg md:text-xl font-light text-gray-700 text-center leading-relaxed">
          At the heart of every journey we craft is passion,
          dedication, and people's trust. With over{" "}
          <span className="font-medium text-darkblue">
            1 lakh happy subscribers
          </span>{" "}
          and a growing community of explorers, we're not
          just another tour company — we're a movement built
          on hard work, authenticity, and unforgettable
          experiences.
        </p>
      </div>

      {/* Image and Text Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20 items-center">
        {/* Founder Card */}
        <div className="relative flex flex-col items-center bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
            <div className="relative">
              <img
                src="/public/assets/photos/deepakji.jpg"
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-white shadow-lg"
                alt="Founder Deepak"
              />
              <div className="absolute inset-0 rounded-full border-2 border-golden animate-ping opacity-20"></div>
            </div>
          </div>

          <div className="mt-14 sm:mt-16 md:mt-20 lg:mt-24 text-center">
            <h1 className="text-2xl font-bold text-darkblue">
              Amritsar Walking Tours
            </h1>
            <p className="text-sm font-light text-gray-600 mt-1">
              Founder & Guide: Deepak Sharma
            </p>
            <p className="text-sm text-golden font-medium mt-2">
              YouTube Creator | Punjab Tourism Expert
            </p>
          </div>

          {/* Stats & CTA */}
          <div className="w-full mt-8 space-y-6">
            <div className="bg-blue-50 rounded-xl p-4 text-center">
              <div className="flex justify-center space-x-6">
                <div>
                  <p className="text-2xl font-bold text-darkblue">
                    173k+
                  </p>
                  <p className="text-xs text-gray-600">
                    Subscribers
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-darkblue">
                    357+
                  </p>
                  <p className="text-xs text-gray-600">
                    Videos
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-3">
              <a
                href="https://www.youtube.com/@Amritsarwalkingtours"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <button className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl text-sm font-semibold shadow-md transition-all duration-300 transform group-hover:-translate-y-1 flex items-center justify-center space-x-2">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                  <span>Watch Channel</span>
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Founder Message */}
        <div className="relative">
          <div className="absolute -top-6 -left-6 w-16 h-16 bg-golden opacity-10 rounded-full"></div>
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-200 opacity-10 rounded-full"></div>

          <div className="relative bg-white p-8 rounded-3xl shadow-lg border-l-4 border-golden">
            <h1 className="text-3xl sm:text-4xl font-semibold text-darkblue mb-6 leading-tight">
              "We don't just show Amritsar —{" "}
              <span className="text-golden">
                we bring it to life
              </span>
              "
            </h1>
            <p className="text-gray-700 leading-relaxed">
              Since 2014, I've been dedicated to showcasing
              the beauty of Punjab through my work with
              Punjab Tourism. In 2019, I started my YouTube
              channel to capture the essence of cities
              through immersive street videos. Thanks to
              your overwhelming support, I've continued
              exploring Punjab — reconnecting with our
              roots, culture, religion, and the incredible
              people who make this land special.
            </p>
            <div className="mt-6 flex items-center">
              <span className="text-sm font-medium text-gray-600">
                -- Deepak Sharma, Founder
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* What We Offer */}
      <div className="mt-28 text-center">
        <h2 className="text-sm uppercase tracking-widest text-golden font-medium mb-3">
          Our Services
        </h2>
        <h1 className="text-3xl sm:text-4xl font-bold text-darkblue">
          Experience Amritsar Like Never Before
        </h1>
        <div className="w-16 h-1 bg-golden mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Offer Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {offerCards.map((item, i) => (
          <div
            key={i}
            className="relative bg-white text-darkblue px-8 py-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-golden overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-16 h-16 bg-blue-50 rounded-bl-full"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-4 text-3xl mb-6">
                <span className="bg-blue-100 text-golden rounded-full p-4 group-hover:bg-golden group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </span>
              </div>
              <h2 className="text-xl font-bold text-center mb-3">
                {item.title}
              </h2>
              <p className="text-gray-600 text-center leading-relaxed">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Statistics - FIXED SECTION */}
      <div className="max-w-6xl mx-auto mt-28 px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center py-12 bg-gradient-to-br from-golden/10 to-blue-100 rounded-3xl">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-sm py-8 px-4 hover:shadow-md transition-all duration-300 hover:bg-white/90"
            >
              <h1 className="text-5xl font-extrabold text-golden mb-2">
                {stat.count}
              </h1>
              <p className="text-gray-600 font-medium uppercase tracking-wider text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="mt-20 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-darkblue mb-6">
          Ready to explore Amritsar with us?
        </h2>
        <Link to="BookNow" className="inline-block">
          <button className="bg-darkblue hover:bg-darkblue/90 text-white font-medium px-8 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
            Book Your Tour Today
          </button>
        </Link>
      </div>
    </div>
  );
};

export default WhyUs;
