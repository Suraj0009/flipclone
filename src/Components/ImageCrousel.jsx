import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageCarousel = ({ images, autoPlayInterval = 5000 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(goToNextImage, autoPlayInterval);
    return () => clearInterval(intervalId);
  }, [currentImageIndex]); // Restart interval when currentImageIndex changes

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handleIndicatorClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="relative w-full mt-4 h-[300px] sm:h-[400px] overflow-hidden flex items-center">
      <img
        src={images[currentImageIndex].url}
        alt="carousel-image"
        className="w-full h-full object-cover transition-opacity duration-500"
      />
      <button
        className="absolute shadow-xl left-0 top-1/2 transform -translate-y-1/2 h-2/4 w-12 bg-white text-slate-500 hover:bg-opacity-75 focus:outline-none"
        onClick={goToPreviousImage}
      >
        <ChevronLeft className="w-full" size={24} />
      </button>
      <button
        className="absolute right-0 shadow-xl top-1/2 transform -translate-y-1/2 h-2/4 w-12 bg-white text-slate-500 hover:bg-opacity-75 focus:outline-none"
        onClick={goToNextImage}
      >
        <ChevronRight className="w-full" size={24} />
      </button>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 mx-1 rounded-full ${
              index === currentImageIndex ? 'bg-white' : 'bg-gray-400'
            } cursor-pointer`}
            onClick={() => handleIndicatorClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
