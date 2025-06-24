import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import WhyUs from './components/WhyUs'
import SuggestiveTours from './components/SuggestiveTours'

import BottomBar from './components/bottomBar'

const App = () => {
  return (
     <>
           <Navbar/>
           <BottomBar/>
           <Hero/>
           <Page3/>
           <SuggestiveTours/>
            <WhyUs/>
           
     </>
  )
}

export default App
