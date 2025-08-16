import React from 'react';
import TourCard from './TourCard'; // Adjust the path as needed

const cardData = [
  {
    title: "Golden Temple Tour",
    videoUrl:
      "https://res.cloudinary.com/dmgib4rwd/video/upload/q_auto,f_auto,vc_auto/ac_none/v1750484097/goldentemplecard_ohuanw.mp4",
    detailsPath: "/GoldenTemple",
  },
  {
    title: "Wagah Border Tour",
    videoUrl:
      "https://res.cloudinary.com/dmgib4rwd/video/upload/q_auto,f_auto,vc_auto/ac_none/v1750484531/Border-Video_zycqku.mp4",
    detailsPath: "/BorderTour",
  },
  {
    title: "Food Walking Tour",
    videoUrl:
      "https://res.cloudinary.com/dmgib4rwd/video/upload/q_auto,f_auto,vc_auto/ac_none/v1750484904/foodcard_qphxet.mp4",
    detailsPath: "/FoodTour",
  },
  {
    title: "Local Village Tour",
    videoUrl:
      "https://res.cloudinary.com/dmgib4rwd/video/upload/q_auto,f_auto,vc_auto/ac_none/v1750485273/villagecard_a3f9sm.mp4",
    detailsPath: "/VillageTour",
  },
  {
    title: "Amritsar's Heritage Walk",
    videoUrl:
      "https://res.cloudinary.com/dmgib4rwd/video/upload/v1750491888/heritagewalkcard_-_Made_with_Clipchamp_hjgbwq.mp4",
    detailsPath: "/HeritageWalkingTour",
  },
];

const AllCards = () => {
return (
    <div className="grid gap-6 px-4 sm:px-4 md:px-16 lg:px-32 mt-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {cardData.map((card, index) => (
            <TourCard key={index} {...card} />
        ))}
    </div>
);
};

export default AllCards;
