import React from 'react';
import Typewriter from 'typewriter-effect';
import "/src/App.css"


function Hero() {
  return (
    <div className="hero min-h-screen bg-white">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://i.imgur.com/mNk87pP.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
          style={{ width: '270px', height: 'auto' }} // Set the desired width and maintain the aspect ratio
        />
        <div>
          <h1 className="text-4xl my-font">
            <Typewriter
              options={{
                strings: ['WIDGET MTHEME'],
                autoStart: true,
                loop: true,
                delay: 50
              }}
            />
          </h1>

          <p className="py-6 my-font2">Widget Table ช่วยให้คุณสามารถมองเห็นตารางเรียนของคุณได้อย่างรวดเร็วและสะดวก</p>

          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
