import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import State from '../../State';

const carouselItemStyle = {
  margin: '0 10px', // Adjust the margin as needed
  width: '150px', 
  height: '300px' 
};

function Carousel() {

  const [isLoadingState, setIsloadingState] = useRecoilState(State)
  const handleLoad = () => {
    setIsloadingState({
      ...isLoadingState,
      loadingState: isLoadingState.loadingState + 1
    })
   };

  useEffect(() => {
     setIsloadingState({
      ...isLoadingState,
      loadingState: isLoadingState.loadingState
     })
  }, [isLoadingState.loadingState])

  return (
    <div className='flex justify-center'>
      <div className="carousel carousel-center pb-4 pt-4 bg-base-200 gap-2">
            <div className="carousel-item">
              <img
                src="https://i.imgur.com/Q2HEKmc.png"
                className="rounded-box"
                style={carouselItemStyle}
                alt="Image 1"
                onLoad={handleLoad}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://i.imgur.com/gEGDf3R.png"
                className="rounded-box"
                style={carouselItemStyle}
                alt="Image 2"
                onLoad={handleLoad}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://i.imgur.com/bdW0F09.png"
                className="rounded-box"
                style={carouselItemStyle}
                alt="Image 3"
                onLoad={handleLoad}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://i.imgur.com/fSoQk3m.png"
                className="rounded-box"
                style={carouselItemStyle}
                alt="Image 4"
                onLoad={handleLoad}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://i.imgur.com/zY69prE.png"
                className="rounded-box"
                style={carouselItemStyle}
                alt="Image 5"
                onLoad={handleLoad}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://i.imgur.com/WXth2zr.png"
                className="rounded-box"
                style={carouselItemStyle}
                alt="Image 6"
                onLoad={handleLoad}
              />
            </div>
          </div>
    </div>
  );
}

export default Carousel;
