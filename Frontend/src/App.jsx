import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import WhyUs from "./components/WhyUs";
import SuggestiveTours from "./components/SuggestiveTours";
import ScrollToTop from "./components/ScrollToTop";
import BottomBar from "./components/bottomBar";
import Footer from "./components/Footer";
import Home from "./components/Pages/Home";
import GoldenTemple from "./components/Pages/GoldenTemple";
import BorderTour from "./components/Pages/WagahBorder";

import VillageTour from "./components/Pages/VillageTour";
import OneDayExcursion from "./components/Pages/OneDayExcursion";
import TwoDayExcursion from "./components/Pages/TwoDayExcursion";
import ThreeDayExcursion from "./components/Pages/ThreeDayExcurison";
import BookNow from "./components/Pages/BookNow";
import OurTours from "./components/Pages/OurTours";
import AllCards from "./components/cards/AllCards";
import AboutUs from "./components/AboutUs";
import Register from "./components/Register";
import Contact from "./components/Pages/ContactUs";
import TourDetailsPage from "./components/Pages/TourDetailsPage";
import FoodWalkingTour from "./components/Pages/FoodWalkingTour";
import Gallery from "./components/Pages/Gallery";
import HeritageWalkingTour from "./components/Pages/HeritageWalkingTour";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/GoldenTemple"
          element={<GoldenTemple />}
        />
        <Route
          path="/BorderTour"
          element={<BorderTour />}
        />
    
        '
        <Route
          path="/FoodTour"
          element={<FoodWalkingTour />}
        />
        <Route
          path="/VillageTour"
          element={<VillageTour />}
        />
        
        <Route path="/Gallery" element={<Gallery />} />
        <Route
          path="/OneDayExcursion"
          element={<OneDayExcursion />}
        />
        <Route
          path="/TwoDayExcursion"
          element={<TwoDayExcursion />}
        />
        <Route
          path="/ThreeDayExcursion"
          element={<ThreeDayExcursion />}
        />
        <Route path="/BookNow" element={<BookNow />} />
        <Route path="/OurTours" element={<OurTours />} />
        <Route path="/AllCards" element={<AllCards />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/HeritageWalkingTour" element={<HeritageWalkingTour/>} />
        <Route
          path="/TourDetailsPage"
          element={<TourDetailsPage />}
        />
      </Routes>
    </>
  );
};

export default App;
