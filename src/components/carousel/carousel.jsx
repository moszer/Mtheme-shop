import React from 'react';
const carouselItemStyle = {
  margin: '0 10px', // Adjust the margin as needed
  width: '150px', 
  height: '300px' 
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
};


function Carousel() {
  return (
    <div className='flex justify-center'>
      <div className="carousel carousel-center rounded-box pb-4 pt-4 bg-white">
            <div className="carousel-item">
              <img
                src="https://i.imgur.com/mNk87pP.jpg"
                className="rounded-box"
                style={carouselItemStyle}
                alt="Image 1"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://i.imgur.com/YiF23wL.jpg"
                className="rounded-box"
                style={carouselItemStyle}
                alt="Image 2"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://i.imgur.com/S2MOdHF.jpg"
                className="rounded-box"
                style={carouselItemStyle}
                alt="Image 3"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://i.imgur.com/NGQmxPm.jpg"
                className="rounded-box"
                style={carouselItemStyle}
                alt="Image 4"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://i.imgur.com/jzin2Ow.jpg"
                className="rounded-box"
                style={carouselItemStyle}
                alt="Image 5"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://i.imgur.com/JBxvLw7.jpg"
                className="rounded-box"
                style={carouselItemStyle}
                alt="Image 6"
              />
            </div>
          </div>
    </div>
  );
}

export default Carousel;
