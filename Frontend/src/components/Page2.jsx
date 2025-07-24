import React from 'react';

const Page2 = () => {
  return (
    <div className="min-h-screen w-full py-8 px-4 sm:px-8 md:px-12 lg:px-24 bg-white">
      <h1 className="text-center text-4xl sm:text-5xl lg:text-7xl mt-5 font-medium font-fredoka tracking-tight text-yellow-500">
        The Amritsar Story<span className="text-darkblue">.</span>
      </h1>

      {/* History Section */}
      <div className="flex flex-col-reverse lg:flex-row gap-10 mt-10">
        <div className="lg:w-1/2">
          <img
            src="/public/assets/photos/photo10.png"
            className="object-cover rounded-lg w-full"
            alt=""
          />
          <h1 className="mt-6 text-3xl sm:text-4xl mb-4 font-medium font-fredoka text-darkblue">
            History
          </h1>
          <p className="text-base sm:text-lg text-lightblue leading-8">
            Amritsar’s history stretches back to the 16th century when the fourth Sikh Guru, Guru Ram Das, founded the city—then called Ramdaspur—around a sacred pool dug in 1574, purchased for just ₹700 from the village of Tung. His successor, Guru Arjan Dev, completed the Harmandir Sahib (Golden Temple) in 1604, placing the Adi Granth within its sanctum and establishing Amritsar as a central Sikh pilgrimage site. Under Maharaja Ranjit Singh in the early 19th century, the temple was rebuilt in marble and gilded in gold, cementing its architectural and spiritual grandeur. The city endured trials: Afghan invasions in the mid-1700s demolished much of it, and the British annexed Punjab in 1849. In 1919, the Jallianwala Bagh massacre, where British troops killed hundreds of unarmed civilians, became a defining event in India’s independence struggle. Today, Amritsar remains a vibrant hub of Sikh culture, spirituality, and heritage, drawing pilgrims and visitors from around the world.
          </p>
        </div>
        <div className="lg:w-1/2">
          <img
            src="/public/assets/photos/Nihang.png"
            className="object-cover rounded-xl w-full h-full"
            alt=""
          />
        </div>
      </div>

      {/* Religion and Culture Section */}
      <div className="flex flex-col lg:flex-row gap-10 mt-16">
        <div className="lg:w-1/2">
          <img src="/public/assets/photos/golden temple.png" className="w-full rounded-lg" alt="" />
          <h1 className="mt-6 text-3xl sm:text-4xl mb-4 font-medium font-fredoka text-darkblue">
            Religion
          </h1>
          <p className="text-base sm:text-lg text-lightblue leading-8">
            Sikhism, founded in the Punjab region in the late 15th century by Guru Nanak Dev Ji (1469–1539), is a monotheistic religion emphasizing belief in one formless, eternal God—Ik Onkar. Guided by ten successive human Gurus, the spiritual authority was transferred to the Guru Granth Sahib, the central scripture and eternal Guru, in 1708. Sikh doctrine highlights Naam Japna (meditation on God’s name), Kirat Karō (honest living), and Vaṇḍ Chakkō (sharing with others)—collectively known as the three pillars of Sikhism. Core values include equality, regardless of gender or caste, selfless service (seva), and justice for all. Following Guru Gobind Singh’s initiation of the Khalsa in 1699, baptized Sikhs adopt the “Five Ks” as visible expressions of faith. Today, with 25–30 million adherents worldwide, Sikhism continues to inspire through its principles of compassion, integrity, and spiritual devotion.
          </p>
        </div>
        <div className="lg:w-1/2">
          <img
            src="/public/assets/photos/photo6.png"
            className="object-cover w-full h-[60vh] sm:h-[80vh] rounded-lg"
            alt=""
          />
          <h1 className="mt-6 text-3xl sm:text-4xl mb-4 font-medium font-fredoka text-darkblue">
            Culture
          </h1>
          <p className="text-base sm:text-lg text-lightblue leading-8">
            Punjabi culture, rooted in the “land of five rivers,” blends vibrant language, music, dance, and cuisine. From Gurmukhī script and Sikh traditions to Bhangra, Giddhā, and rich storytelling, it celebrates community and heritage. Its flavors and warmth continue to inspire people locally and across the global Punjabi diaspora.
          </p>
        </div>
      </div>

      {/* Food Section */}
      <div className="mt-20">
        <h1 className="text-center text-3xl sm:text-4xl mb-10 font-medium font-fredoka text-darkblue">
          Of Course, Food as well.
        </h1>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2">
            <img
              src="/public/assets/photos/photo7.png"
              className="w-full rounded-lg"
              alt=""
            />
          </div>
          <div className="w-full md:w-1/2">
            <img
              src="/public/assets/photos/photo8.png"
              className="w-full h-[30vh] sm:h-[48vh] object-cover rounded-lg"
              alt=""
            />
          </div>
        </div>

        <p className="text-base sm:text-lg text-lightblue leading-8 mt-6">
          Amritsar’s street food is renowned for its bold flavors and hearty dishes, drawing influences ranging from Mughal to Central Asian culinary traditions. Iconic staples include Amritsari kulcha—a crisp, stuffed flatbread paired with spicy chickpeas—loved by both locals and travelers. Makki di roti with sarson da saag, a winter favorite, reflects the agrarian roots of the region. For seafood lovers, Amritsari fish—boneless pieces battered in chickpea flour and deep-fried—is a must-try street snack. Classic Punjabi delights like chole bhature, paneer tikka, and tandoori chicken also star in the city’s food lanes. Drink-wise, nothing beats the famous Amritsari lassi—a thick, creamy yogurt-based beverage that’s been called "the most beloved summer drink in Punjab." And for desserts, sweet treats like jalebi, gulab jamun, and pinni frequently top off the culinary experience. From heritage dhabas like Kesar Da Dhaba, serving buttery dal makhani, to bustling galis (lanes) offering chaaps and local specialties, Amritsar remains a true food capital—where every meal tells a story of tradition, culture, and community.
        </p>
      </div>
    </div>
  );
};

export default Page2;
