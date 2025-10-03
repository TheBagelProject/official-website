import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Show button when page is scrolled down and calculate progress
  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    
    setScrollProgress(progress);
    setIsVisible(scrollTop > 400);
  };

  // Smooth scroll to top with custom easing
  const scrollToTop = () => {
    const scrollStep = -window.scrollY / (500 / 15);
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`hidden md:block fixed bottom-8 right-8 z-50 transition-all duration-700 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-2 scale-95 pointer-events-none'
      }`}
    >
      <button
        onClick={scrollToTop}
        className="group relative w-11 h-11 bg-white/90 dark:bg-neutral-gray/60 backdrop-blur-sm border border-gray-300/80 dark:border-warm-yellow/10 rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 ease-out"
        aria-label="Scroll to top"
      >
        {/* Progress ring */}
        <div className="absolute inset-0 rounded-full opacity-80">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
            <circle
              cx="18"
              cy="18"
              r="17"
              fill="none"
              className="stroke-gray-300/50 dark:stroke-warm-yellow/10"
              strokeWidth="0.6"
            />
            <circle
              cx="18"
              cy="18"
              r="17"
              fill="none"
              className="stroke-golden-brown/80 dark:stroke-warm-yellow/40 transition-all duration-700 ease-out"
              strokeWidth="1"
              strokeDasharray="106.8"
              strokeDashoffset={106.8 - (scrollProgress * 1.068)}
              strokeLinecap="round"
            />
          </svg>
        </div>
        
        {/* Chevron icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <ChevronUp className="h-3.5 w-3.5 text-golden-brown/90 dark:text-warm-yellow/70 group-hover:text-golden-brown dark:group-hover:text-warm-yellow/90 transition-all duration-400 ease-out transform group-hover:-translate-y-0.5 group-hover:scale-105" />
        </div>
        
        {/* Hover glow */}
        <div className="absolute inset-0 rounded-full bg-golden-brown/8 dark:bg-warm-yellow/3 opacity-0 group-hover:opacity-100 transition-all duration-600 ease-out"></div>
        
        {/* Border enhancement on hover */}
        <div className="absolute inset-0 rounded-full border border-transparent group-hover:border-golden-brown/30 dark:group-hover:border-warm-yellow/15 transition-all duration-500 ease-out"></div>
      </button>
    </div>
  );
};

export default ScrollToTop;