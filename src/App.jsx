import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import BottomBar from './components/bottomBar'

const App = () => {
  return (
     <>
           <Navbar/>
           <BottomBar/>
           <Hero/>
           <Page3/>
           <Page2/>
     </>
  )
}

export default App
