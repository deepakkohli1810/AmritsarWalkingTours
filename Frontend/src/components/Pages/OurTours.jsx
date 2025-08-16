import React from 'react'
import Navbar from '../Navbar'
import SuggestiveTours from '../SuggestiveTours'
import AllCards from '../cards/AllCards'
import WhyUs from '../WhyUs'
import Footer from '../Footer'    
import BottomBar from '../bottomBar'
const OurTours = () => {
  return (
    <div className='min-h-screen w-full bg-white ' >
      <Navbar/>
        <h1 className='px-10 mt-10 text-center text-darkblue text-3xl'>Our Curated Tours </h1> 
        <p className='text-center text-lightblue'>Experience our city with us.</p>
      <AllCards/>
      <SuggestiveTours/>
      <WhyUs/>
      <Footer/>
      <BottomBar/>
      
    </div>
  )
}

export default OurTours
