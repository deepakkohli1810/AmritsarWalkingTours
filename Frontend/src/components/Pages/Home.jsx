import React from 'react'
import Navbar from '../Navbar'
import Hero from '../Hero'
import Page2 from '../Page2'
import Page3 from '../Page3'
import WhyUs from '../WhyUs'
import SuggestiveTours from '../SuggestiveTours'

import BottomBar from '../bottomBar'
import Footer from '../Footer'


const Home = () => {
  return (
    <div>
       <>
           <Navbar/>
           <BottomBar/>
           <Hero/>
           <Page3/>
           <SuggestiveTours/>
            <WhyUs/>
            <Footer/>
           
     </>
    </div>
  )
}

export default Home
