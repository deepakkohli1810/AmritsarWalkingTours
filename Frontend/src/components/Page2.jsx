import React from 'react';
import { Link } from 'react-router-dom';
const Page2 = () => {
  return (
    <div className="min-h-screen w-full py-12 px-4 sm:px-8 md:px-12 lg:px-32 bg-gradient-to-b from-white to-blue-50">
      {/* Hero Title */}
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-yellow-500 mb-4 font-fredoka tracking-tight">
          The Amritsar Story
          <span className="text-darkblue">.</span>
        </h1>
        <div className="w-24 h-1 bg-darkblue mx-auto rounded-full"></div>
      </div>

      {/* History Section */}
      <div className="flex flex-col-reverse lg:flex-row gap-12 mt-10 items-center">
        <div className="lg:w-1/2">
          <div className="relative overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300"></div>
          <h1 className="mt-8 text-3xl sm:text-4xl mb-6 font-light font-fredoka text-darkblue relative inline-block">
            <span className="relative z-10">History</span>
            <span className="absolute bottom-0 left-0 w-full h-2 bg-yellow-500/30 -z-0"></span>
          </h1>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Amritsar's history stretches back to the 16th
            century when the fourth Sikh Guru, Guru Ram Das,
            founded the city—then called Ramdaspur—around a
            sacred pool dug in 1574, purchased for just ₹700
            from the village of Tung. His successor, Guru
            Arjan Dev, completed the Harmandir Sahib (Golden
            Temple) in 1604, placing the Adi Granth within
            its sanctum and establishing Amritsar as a
            central Sikh pilgrimage site.
          </p>
        </div>
        <div className="lg:w-1/2 h-full">
          <div className="relative h-full min-h-[AUTO] rounded-xl overflow-hidden shadow-lg group">
            <img
              src="public/assets/Fancy/Amritsar-Fancy2.png"
              className="w-[100%] h-full object-cover  transition-transform duration-700"
              alt="Nihang Sikh Warrior"
            />
          </div>
        </div>
      </div>

      {/* Religion and Culture Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-24">
        {/* Religion Column */}
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-500">
          <div className="overflow-hidden rounded-lg mb-6">
            <img
              src="/public/assets/photos/golden temple.png"
              className="w-full h-auto object-cover rounded-lg hover:scale-105 transition-transform duration-500"
              alt="Golden Temple"
            />
          </div>
          <h1 className="text-3xl sm:text-4xl mb-6 font-light font-fredoka text-darkblue">
            Religion
          </h1>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Sikhism, founded in the Punjab region in the
            late 15th century by Guru Nanak Dev Ji
            (1469–1539), is a monotheistic religion
            emphasizing belief in one formless, eternal
            God—Ik Onkar. Guided by ten successive human
            Gurus, the spiritual authority was transferred
            to the Guru Granth Sahib, the central scripture
            and eternal Guru, in 1708.
          </p>
        </div>

        {/* Culture Column */}
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-500">
          <div className="overflow-hidden rounded-lg mb-6">
            <img
              src="/public/assets/photos/photo6.png"
              className="w-full h-[300px] sm:h-[400px] object-cover rounded-lg hover:scale-105 transition-transform duration-500"
              alt="Punjabi Culture"
            />
          </div>
          <h1 className="text-3xl sm:text-4xl mb-6 font-light font-fredoka text-darkblue">
            Culture
          </h1>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Punjabi culture, rooted in the "land of five
            rivers," blends vibrant language, music, dance,
            and cuisine. From Gurmukhī script and Sikh
            traditions to Bhangra, Giddhā, and rich
            storytelling, it celebrates community and
            heritage. Its flavors and warmth continue to
            inspire people locally and across the global
            Punjabi diaspora.
          </p>
        </div>
      </div>

      {/* Food Section */}
      <div className="mt-24 bg-white  p-8 rounded-2xl shadow-lg">
        <h1 className="text-center text-3xl sm:text-4xl mb-12 font-light font-fredoka text-darkblue relative">
          <span className="relative z-10">
            Of Course, Food as well
          </span>
          <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-2 bg-yellow-500/30 -z-0"></span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
              src="/assets/FoodWalk/photo (63).png"
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              alt="Amritsari Food"
            />
          </div>
          <div className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
              src="/assets/FoodWalk/photo (20).png"
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              alt="Amritsari Cuisine"
            />
          </div>
        </div>

        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
          Amritsar's street food is renowned for its bold
          flavors and hearty dishes, drawing influences
          ranging from Mughal to Central Asian culinary
          traditions. Iconic staples include Amritsari
          kulcha—a crisp, stuffed flatbread paired with
          spicy chickpeas—loved by both locals and
          travelers. Makki di roti with sarson da saag, a
          winter favorite, reflects the agrarian roots of
          the region.
        </p>
      </div>

      {/* Final CTA */}
      <div className="mt-20 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-darkblue mb-6">
          Ready to experience Amritsar's rich heritage?
        </h2>
        <Link
          to="/OurTours"
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium px-8 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 inline-block text-center"
        >
          Explore Our Tours
        </Link>
      </div>
    </div>
  );
};

export default Page2;