import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import WhyUs from './components/WhyUs'
import SuggestiveTours from './components/SuggestiveTours'
import ScrollToTop from './components/ScrollToTop'
import BottomBar from './components/bottomBar'
import Footer from './components/Footer'
import TourDetailsPage from './components/TourDetailsPage'
import Home from './components/Pages/Home'
import GoldenTemple from './components/Pages/GoldenTemple'
const App = () => {
  return (
     <>
     <ScrollToTop />
        <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/GoldenTemple" element={<GoldenTemple/>} />
    </Routes>
     </>
  )
}

export default App
