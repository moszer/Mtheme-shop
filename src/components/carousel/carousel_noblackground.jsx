import React, { useState, useEffect } from 'react';

function CarouselNoblackground() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Calculate the next slide index
      const nextSlide = (currentSlide + 1) % 6; // Assuming you have 6 slides

      // Update the current slide
      setCurrentSlide(nextSlide);
    }, 1000); // Slide every 5 seconds

    // Clear the interval when the component is unmounted or when the current slide changes
    return () => clearInterval(interval);
  }, [currentSlide]);

  const image = [
    "https://i.imgur.com/kJ0VOPl.png",
    "https://i.imgur.com/0MU4JO7.png",
    "https://i.imgur.com/w9MxFac.png",
    "https://i.imgur.com/aga9op2.png",
    "https://i.imgur.com/fNiLtCL.png",
    "https://i.imgur.com/PzR6blL.png"
  ];
  
  return (
    <div className="w-full carousel rounded-box">
      {Array.from({ length: 7 }, (_, index) => (
        <div key={index} className={`carousel-item w-full ${index === currentSlide ? 'block' : 'hidden'}`}>
          <img
            src={image[index % image.length]} // Use modulo to loop back to the beginning when reaching the end
            className="w-full"
            alt={`Tailwind CSS Carousel component ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
}

export default CarouselNoblackground;
