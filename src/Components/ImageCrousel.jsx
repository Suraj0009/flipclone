import React, { useState } from 'react';
import {  ChevronLeft, ChevronRight } from 'lucide-react';

const ImageCarousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full mt-4 h-[300px] overflow-hidden flex items-center">
      <img
        src={images[currentImageIndex].url}
        alt="carousel-image"
        className="w-full h-full object-cover transition-opacity duration-500"
      />
      <button
        className="absolute shadow-xl left-0 top-1/2 transform -translate-y-1/2 h-2/4 w-12 bg-white text-slate-500 hover:bg-opacity-75 focus:outline-none"
        onClick={goToPreviousImage}
      >
        <ChevronLeft className='w-full' size={24} />
      </button>
      <button
        className="absolute right-0 shadow-xl top-1/2 transform -translate-y-1/2 h-2/4 w-12 bg-white text-slate-500 hover:bg-opacity-75 focus:outline-none"
        onClick={goToNextImage}
      >
        <ChevronRight className='w-full' size={24} />
      </button>
    </div>
  );
};

export default ImageCarousel;