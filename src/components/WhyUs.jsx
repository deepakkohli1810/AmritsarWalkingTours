import React from 'react'

const whyUs = () => {
  return (
    <div className='min-h-screen w-full px-24'>
      <h1 className='text-center text-5xl tracking-normal font-DMSans text-darkblue '>Why choose us for your Amritsar’s Trip ? </h1>
      <p className='mt-10 text-lg font-light  font-DMSans text-darkblue'>
        At the heart of every journey we craft is passion, dedication, and people’s trust. With over 1 lakh happy subscribers and a growing community of explorers, we’re not just another tour company — we’re a movement built on hard work, authenticity, and unforgettable experiences. From hidden local gems to iconic landmarks, we curate tours that feel personal, immersive, and hassle-free. Our reputation is driven by real stories, real smiles, and the recognition we’ve earned from travelers like you. Whether you're looking for adventure, culture, or relaxation, we’re here to guide you every step of the way — because you deserve a journey as unique as you are.
      </p>

      <div className='flex mt-10'>
        <div className='w-full  flex flex-col items-center justify-center'>
            <img src="/public/assets/photos/deepakji.jpg"
            className='w-[200px] h-[200px] rounded-full object-cover'
            alt="" />
            <h1 className='mt-3 text-2xl font-thin'>Amritsar Walking Tours </h1>
            <h1>Founder : Deepak (Youtuber) </h1>

            <div className=' mt-7 flex  justify-center gap-10 items-center  '  >
                <h1 className='  text-xl font-semibold text-gray-700'> Watch our latest video</h1>
               <a href="https://www.youtube.com/@Amritsarwalkingtours" target="_blank" rel="noopener noreferrer">
  <button className="bg-gray-500 text-white px-3 py-2 rounded-3xl">
    Watch Now
  </button>
</a>
            </div>
             <div className=' mt-7 flex  justify-center gap-10 items-center  '  >
                  <a href="https://www.youtube.com/@Amritsarwalkingtours" target="_blank" rel="noopener noreferrer">
  <button className="bg-red-500 text-white text-lg px-5 py-2 rounded-3xl">
    Subscribers
  </button>
</a>
             <div className='leading-none font-semibold'>
                <h1>173k Subscibers</h1>
                <h1>357 videos</h1>
             </div>
             
            </div>
        </div>
        <div className='w-full mt-10'>
            <h1 className='mt-10 text-4xl font-DMSans tracking-tight text-lightblue'>“We know more than Amritsar ! “</h1>
            <p className='mt-14 text-lg font-light'>Since 2014, I’ve been dedicated to showcasing the beauty of Punjab through my work with Punjab Tourism. In 2019, I started my YouTube channel, Amritsar Walking Tours, to capture the essence of cities through immersive street videos. Thanks to the overwhelming love and support from you all, I’ve continued exploring different parts of Punjab — reconnecting with my roots, culture, religion, and the incredible people who make this land so special. One of the most enjoyable parts of this journey has been tasting the diverse, flavorful foods of each region. Now, I’ve launched my own tour company, and I truly hope to have your continued support on this new chapter</p>
        </div>
      </div>


        <h1 className='mt-20 text-4xl text-darkblue font-extralight font-DMSans text-center'> What we offers to our guests.  </h1>
    </div>
  )
}

export default whyUs
