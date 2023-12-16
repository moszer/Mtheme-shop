import React from 'react';
import { useRecoilState } from 'recoil';
import State from '../../State';

const carouselItemStyle = {
  margin: '0 10px', // Adjust the margin as needed
  width: '150px', 
  height: '300px' 
};

function Carousel() {

  const [isLoading, setIsLoading] = useRecoilState(State)

  const handleLoad = () => {
    setIsLoading({
      ...isLoading,
      loadingState: isLoading.loadingState + 1
    });
  };

  return (
    <div className='flex justify-center'>
      <div className="carousel carousel-center rounded-box pb-4 pt-4 bg-white">
            <div className="carousel-item">
              <img
                src="https://i.imgur.com/mNk87pP.jpg"
                className="rounded-box"
                style={carouselItemStyle}
                alt="Image 1"
                onLoad={handleLoad}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://i.imgur.com/YiF23wL.jpg"
                className="rounded-box"
                style={carouselItemStyle}
                alt="Image 2"
                onLoad={handleLoad}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://i.imgur.com/S2MOdHF.jpg"
                className="rounded-box"
                style={carouselItemStyle}
                alt="Image 3"
                onLoad={handleLoad}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://i.imgur.com/NGQmxPm.jpg"
                className="rounded-box"
                style={carouselItemStyle}
                alt="Image 4"
                onLoad={handleLoad}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://i.imgur.com/jzin2Ow.jpg"
                className="rounded-box"
                style={carouselItemStyle}
                alt="Image 5"
                onLoad={handleLoad}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://i.imgur.com/JBxvLw7.jpg"
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
