import React from 'react';
import "/src/App.css"
import { useRecoilState } from 'recoil';
import State from '../../State';

import BackGround from '/src/assets/BackGround.json'
import Lottie from "lottie-react";

function Hero() {
  const [isLoading, setIsLoading] = useRecoilState(State)
  const handleLoad = () => {
    setIsLoading({
      ...isLoading,
      loadingState: isLoading.loadingState + 1
    });
  };

  return (
    <div className="hero min-h-screen bg-base-200 relative overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          zIndex: 0,
        }}
      >
        <Lottie animationData={BackGround} loop={true}/>
      </div>

      <div className="hero-content flex-col lg:flex-row relative">
        <img
          src="https://iili.io/JRksD22.md.png"
          className="max-w-sm rounded-lg shadow-2xl rounded-3xl"
          style={{ width: '270px', height: 'auto' }} // Set the desired width and maintain the aspect ratio
          onLoad={handleLoad}
        />
        <div>
          <h1 className="text-4xl my-font">
          WIDGET MTHEME
          </h1>

          <p className="py-6 my-font2">Widget Table ช่วยให้คุณสามารถมองเห็นตารางเรียนของคุณได้อย่างรวดเร็วและสะดวก</p>

          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
