
import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../lib/utils"; // Assuming you have a utility function for class names

const TravelSlider = ({ slides, autoPlayInterval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef(null);

  // Function to go to the next slide
  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  }, [slides.length]);

  // Function to go to the previous slide
  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  // Function to go to a specific slide
  const goToSlide = (index) => {
    setCurrentIndex(index);
    restartAutoPlay();
  };

  // Start or restart autoplay
  const restartAutoPlay = () => {
    if (autoPlayRef.current) {
      clearTimeout(autoPlayRef.current);
    }
    
    if (isAutoPlaying) {
      autoPlayRef.current = setTimeout(goToNext, autoPlayInterval);
    }
  };

  // Toggle autoplay
  const toggleAutoPlay = () => {
    setIsAutoPlaying((prev) => !prev);
  };

  // Set up autoplay
  useEffect(() => {
    restartAutoPlay();
    
    return () => {
      if (autoPlayRef.current) {
        clearTimeout(autoPlayRef.current);
      }
    };
  }, [currentIndex, isAutoPlaying, autoPlayInterval, goToNext]);

  return (
    <div className="w-full h-[600px] relative z-50">
      {/* Slider container */}
      <div className="slider-container w-full h-full  overflow-hidden">
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000 ease-in-out",
              currentIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
            )}
            style={{
              backgroundImage: `url(${slide.backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute inset-0 backdrop-brightness-45 z-10"></div>
            
            {/* Slide content */}
            <div className={cn(
              "relative z-20 h-full flex flex-col justify-end items-center pb-24 px-6 text-center",
              currentIndex === index ? "active" : ""
            )}>
              <div className="slide-content max-w-3xl">
                <p className="text-white/80 font-medium mb-2">{slide.location}</p>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{slide.title}</h2>
                <p className="text-white/90 mb-8 max-w-2xl mx-auto">{slide.description}</p>
                <button className="slide-button bg-white text-gray-800 px-8 py-3 rounded-full font-medium hover:bg-amber-50 transition-all">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
        
        {/* Navigation arrows */}
        <div className="slider-controls absolute bottom-8 right-8 z-30 flex items-center gap-3">
          <button
            onClick={toggleAutoPlay}
            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white border border-white/30 hover:bg-white/30"
          >
            {isAutoPlaying ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="6" y="4" width="4" height="16" />
                <rect x="14" y="4" width="4" height="16" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            )}
          </button>
          <button
            onClick={goToPrev}
            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white border border-white/30 hover:bg-white/30"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={goToNext}
            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white border border-white/30 hover:bg-white/30"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Dots indicator */}
      <div className="carousel-dots absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "dot h-2 rounded-full bg-white/50 transition-all",
              currentIndex === index ? "w-8 active bg-white" : "w-2"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TravelSlider;