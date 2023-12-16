import React, { useState } from 'react'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Navbar from './components/header/navbar.jsx'
import Hero from './components/hero/hero.jsx'
import Carousel from './components/carousel/carousel.jsx'
import Countdown from './components/countdown/countdown.jsx'
import Card from './components/card/card.jsx'
import Drawner from './components/drawner/drawner.jsx'
import Modal from './components/modal/modal.jsx'
import Stats from './components/stats/stats.jsx'
import Navigation from './components/navigation/Navigation.jsx'

function App() {


  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <div className='text-3xl font-bold flex items-center justify-center bg-white'>Getting You Start</div>
      <Carousel />
      <Card />
      <Navigation />
    </>
  )
}

export default App
