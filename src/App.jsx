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
import Sorry_warnning from '/src/assets/Warnning - 1702748099772.json'

import { browserName } from 'react-device-detect';

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


  useEffect(() => {
    const checkExternal = () => {
      if (browserName === "Line" || browserName === "Facebook" || browserName === "Instagram") {
        document.getElementById('my_modal_2').showModal()
        //close show load 
        document.getElementById('my_modal_3').close()
      }
    };

    checkExternal()
  }, []);

  const openExternal = () => {
    const WindownUrl = window.location.href
    window.open(`${WindownUrl}?openExternalBrowser=1`);
  }

  return (
    <div>
      <Navbar />

      
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <form method="dialog">
          </form>
          <div className=''>
            <Lottie animationData={Sorry_warnning} loop={true} className='w-30'/>
            <h3 className="font-bold text-lg flex justify-center">[SUPPORT] Warnning!</h3>
            <p className="py-4 flex justify-center">MTHEM ไม่ลองรับบราวเซอร์ {browserName} โปรดเปิดใน safari chrome brave หรือบราวเซอร์อื่น</p>
          </div>
          <div className='flex justify-center'>
            <button className='btn' onClick={openExternal}>เปิดบราวเซอร์อื่น</button>
          </div>
        </div>
      </dialog>

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
      <div className='text-3xl font-bold flex items-center justify-center bg-base-200'>Getting You Start</div>
      <Carousel />
      <Card />
        <Navigation />
    </div>
  )
}

export default App
