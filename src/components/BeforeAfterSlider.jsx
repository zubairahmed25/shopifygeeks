"use client";
import React, { useState, useRef, useCallback } from 'react';

export default function BeforeAfterSlider () {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  // Sample images - replace with your own
  const beforeImage = "/logos/speed_red.jpeg";
  const afterImage =  "/logos/speed_green.jpeg";

  const handleMouseDown = useCallback((e) => {
    setIsDragging(true);
    e.preventDefault();
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const updateSliderPosition = useCallback((clientX) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return;
    updateSliderPosition(e.clientX);
  }, [isDragging, updateSliderPosition]);

  const handleClick = useCallback((e) => {
    updateSliderPosition(e.clientX);
  }, [updateSliderPosition]);

  const handleTouchStart = useCallback((e) => {
    setIsDragging(true);
    e.preventDefault();
  }, []);

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleTouchMove = useCallback((e) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    updateSliderPosition(touch.clientX);
  }, [isDragging, updateSliderPosition]);

  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd]);

  return (
    <div className="bg-[#191919] w-[99%] lg:w-[43%] mx-auto p-6 py-10">
      <h1 className="md:text-4xl sm:text-2xl text-2xl text-center mb-4 text-white font-semibold">
      The Speed Gains We Can Achieve for You
      </h1>
      
      <div 
        ref={containerRef}
        className="relative w-full h-40 sm:h-60 md:h-28 lg:h-96 overflow-hidden rounded-lg shadow-2xl cursor-pointer select-none"
        onClick={handleClick}
        style={{ userSelect: 'none' }}
      >
        {/* After Image (Background) */}
        <div className="absolute inset-0">
          <img
            src={afterImage}
            alt="After"
            className="w-full h-full object-cover"
            draggable={false}
          />
          <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-md text-sm font-semibold hidden lg:block">
            AFTER
          </div>
        </div>

        {/* Before Image (Clipped) */}
        <div 
          className="absolute inset-0 overflow-hidden"
          style={{ 
            clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
            transition: isDragging ? 'none' : 'clip-path 0.1s ease-out'
          }}
        >
          <img
            src={beforeImage}
            alt="Before"
            className="w-full h-full object-cover"
            draggable={false}
          />
          <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-md text-sm font-semibold hidden lg:block">
            BEFORE
          </div>
        </div>

        {/* Slider Handle */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize transform -translate-x-1/2"
          style={{ 
            left: `${sliderPosition}%`,
            transition: isDragging ? 'none' : 'left 0.1s ease-out'
          }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          {/* Slider Button */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg border-2 border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
            <div className="flex space-x-0.5">
              <div className="w-0.5 h-4 bg-gray-400 rounded"></div>
              <div className="w-0.5 h-4 bg-gray-400 rounded"></div>
            </div>
          </div>
        </div>


      </div>

      {/* Mobile Before/After buttons - only show on small screens */}
<div className="flex justify-center space-x-4 mt-4 lg:hidden">
  <button 
    onClick={() => setSliderPosition(100)}
    className="px-6 py-3 bg-white text-gray-800 rounded-lg shadow-md border border-gray-300 font-semibold hover:bg-gray-50 transition-colors"
  >
    Before
  </button>
  <button 
    onClick={() => setSliderPosition(0)}
    className="px-6 py-3 bg-white text-gray-800 rounded-lg shadow-md border border-gray-300 font-semibold hover:bg-gray-50 transition-colors"
  >
    After
  </button>
</div>

    </div>
  );
};




