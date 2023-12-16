import React, { useEffect, useState } from 'react'
import Navbar from './components/header/navbar.jsx'
import Hero from './components/hero/hero.jsx'
import Carousel from './components/carousel/carousel.jsx'
import Countdown from './components/countdown/countdown.jsx'
import Card from './components/card/card.jsx'
import Drawner from './components/drawner/drawner.jsx'
import Modal from './components/modal/modal.jsx'
import Stats from './components/stats/stats.jsx'
import Navigation from './components/navigation/Navigation.jsx'

import { useRecoilState, useRecoilValue } from 'recoil'
import State from './State.js'

import Lottie from "lottie-react";
import catLoaing from '/src/assets/Animation - 1702732952547.json'

import { BrowserView, MobileView, isBrowser, isMobile, browserName } from 'react-device-detect';

function App() {

  const [isLoading, setisLoading]= useRecoilState(State)


  useEffect(() => {
    document.getElementById('my_modal_3').showModal()
  }, [])

  useEffect(() => {
    if(isLoading.loadingState > 7){
      setisLoading({
        ...isLoading,
        loadingState: 7
      })
    }
    if(isLoading.loadingState === 7){
      document.getElementById('my_modal_3').close()
    }
  },[isLoading])

  return (
    <>
      <Navbar />

      <div>
          {<p>Current browser: {browserName}</p>}
      </div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <div className='flex justify-center'>
              <Lottie animationData={catLoaing} loop={true} className='w-30'/>
            </div>
            {<p className='flex justify-center'>loading... {isLoading.loadingState}</p>}
          </div>
      </dialog>
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
