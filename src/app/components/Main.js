"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

function Main() {
  const [isVisible, setIsVisible] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const mainRef = useRef(null);
  const imageRef = useRef(null);
  const router = useRouter();

  // Enhanced mobile detection and resize handling
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: isMobile ? 0.1 : 0.3 }
    );

    const imageObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsImageVisible(true);
        }
      },
      { threshold: isMobile ? 0.05 : 0.2 }
    );

    if (mainRef.current) observer.observe(mainRef.current);
    if (imageRef.current) imageObserver.observe(imageRef.current);

    return () => {
      observer.disconnect();
      imageObserver.disconnect();
    };
  }, [isMobile]);

  const handleClick = () => {
    router.push("/about");
  };

  return (
    <>
      <main
        ref={mainRef}
        className="w-full bg-white pt-0 pb-0 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 flex flex-col lg:flex-row items-start justify-start lg:items-center lg:justify-between gap-4 sm:gap-6 md:gap-8 lg:gap-10 relative overflow-hidden"
      >
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/10 via-transparent to-purple-50/10 pointer-events-none"></div>
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-32 sm:w-48 md:w-64 lg:w-72 h-32 sm:h-48 md:h-64 lg:h-72 bg-blue-400/8 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-40 sm:w-64 md:w-80 lg:w-96 h-40 sm:h-64 md:h-80 lg:h-96 bg-purple-400/8 rounded-full blur-2xl sm:blur-3xl animate-pulse delay-1000"></div>

        {/* Text Content Section */}
        <div className="w-full lg:w-1/2 max-w-2xl lg:max-w-3xl mx-auto lg:mx-0 space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-6 relative z-10 text-center lg:text-left min-w-[250px] sm:min-w-[300px]">
          <div className="space-y-2 sm:space-y-3 md:space-y-4">
            <p
              className={`text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-black leading-tight transform transition-all duration-700 ease-out ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: "0ms" }}
            >
              Welcome to
            </p>
            
            <h1
              className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 tracking-tight leading-tight transform transition-all duration-700 ease-out ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              <span className="bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent hover:from-blue-600 hover:to-blue-400 transition-all duration-300">
                Techno Communications LLC
              </span>
            </h1>
            
            <p
              className={`text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight transform transition-all duration-700 ease-out ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              #1 Authorized Dealer for <span className="no-break">Metro by T-Mobile</span>
            </p>
          </div>
          
          <p
            className={`text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto lg:mx-0 transform transition-all duration-700 ease-out no-hyphens ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            Techno Communications proudly operates the largest network of Metro by <span className="no-break">T-Mobile</span> stores across the USA.
          </p>
          
          <div
            className={`pt-2 sm:pt-3 md:pt-4 transform transition-all duration-700 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <button
              onClick={handleClick}
              className="group relative w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-5 md:px-12 md:py-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-base sm:text-lg md:text-xl font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 hover:brightness-110 overflow-hidden focus:outline-none focus:ring-4 focus:ring-blue-500/50 min-h-[56px]"
              aria-label="Learn more about Techno Communications"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <span className="relative flex items-center justify-center gap-3">
                <span>Discover Our Story</span>
                <svg 
                  className="w-5 h-5 sm:w-6 sm:h-6 transform group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* Enhanced Image Section */}
        <div
          ref={imageRef}
          className="w-full lg:w-1/2 max-w-lg lg:max-w-xl flex justify-center relative mt-4 lg:mt-0"
        >
          <div
            className={`absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur-xl sm:blur-2xl transition-all duration-1000 ease-out ${
              isImageVisible ? "opacity-20 scale-110" : "opacity-0 scale-100"
            }`}
            style={{ transform: "translateZ(0)" }}
          />
          <div
            className={`relative w-full transform transition-all duration-1000 ease-out ${
              isImageVisible
                ? "translate-y-0 opacity-100 scale-100"
                : "translate-y-4 opacity-0 scale-95"
            }`}
          >
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:-rotate-1">
              <Image
                src="/home_metro.png"
                alt="Metro by T-Mobile stores operated by Techno Communications"
                fill
                className="object-cover"
                priority
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                quality={90}
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 50vw, 45vw"
              />
            </div>
            <div className="absolute -top-3 -right-3 w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 rounded-full animate-bounce opacity-80"></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 sm:w-10 sm:h-10 bg-purple-500 rounded-full animate-pulse opacity-60"></div>
            <div className="absolute top-1/2 -right-5 w-5 h-5 sm:w-6 sm:h-6 bg-pink-500 rounded-full animate-ping opacity-70"></div>
          </div>
        </div>

        {/* Responsive floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-float-delayed opacity-50"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-pink-400 rounded-full animate-pulse opacity-70"></div>
      </main>

      {/* Enhanced Global CSS with mobile-first responsive design */}
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }
        
        html, body {
          margin: 0;
          padding: 0;
          height: auto;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        @keyframes float {
          0%, 100% { 
            transform: translateY(0px); 
          }
          50% { 
            transform: translateY(-8px); 
          }
        }
        
        @keyframes float-delayed {
          0%, 100% { 
            transform: translateY(0px); 
          }
          50% { 
            transform: translateY(-6px); 
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 4s ease-in-out infinite;
          animation-delay: 1s;
        }

        /* Mobile-first responsive adjustments */
        @media (max-width: 640px) {
          html {
            font-size: 14px;
          }
          
          main {
            padding-top: 0 !important;
            padding-bottom: 0 !important;
          }
          
          .container {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }
        }

        @media (min-width: 641px) and (max-width: 768px) {
          html {
            font-size: 15px;
          }
        }

        @media (min-width: 769px) {
          html {
            font-size: 16px;
          }

          .max-w-3xl {
            max-width: 48rem; /* 768px */
          }

          .lg:max-w-none {
            min-width: 0;
          }
        }

        /* Prevent text splitting for Metro by T-Mobile and other text */
        .no-break {
          white-space: nowrap !important;
          hyphens: none !important;
          -webkit-hyphens: none !important;
          -ms-hyphens: none !important;
          word-break: keep-all !important;
          overflow-wrap: anywhere !important;
        }

        .no-hyphens {
          hyphens: none !important;
          -webkit-hyphens: none !important;
          -ms-hyphens: none !important;
          word-break: normal;
          overflow-wrap: normal;
        }

        /* Ensure text fits on smaller screens */
        @media (max-width: 360px) {
          .text-base {
            font-size: 0.85rem; /* Reduced from 0.9rem */
          }
          .text-lg {
            font-size: 0.95rem; /* Reduced from 1rem */
          }
          .text-xl {
            font-size: 0.95rem; /* Reduced from 1rem */
          }
          .text-2xl {
            font-size: 1.1rem; /* Reduced from 1.2rem */
          }
          .text-3xl {
            font-size: 1.3rem; /* Reduced from 1.4rem */
          }
          .text-4xl {
            font-size: 1.5rem; /* Reduced from 1.6rem */
          }
        }

        /* Adjust for very wide screens */
        @media (min-width: 1280px) {
          .text-4xl {
            font-size: 2.5rem;
          }
          .text-5xl {
            font-size: 3rem;
          }
        }

        /* Smooth scrolling for the whole page */
        html {
          scroll-behavior: smooth;
        }

        /* Enhanced focus styles for accessibility */
        button:focus-visible,
        a:focus-visible {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
        }

        /* Reduce motion for users who prefer it */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }

        /* Improve touch targets on mobile */
        @media (max-width: 768px) {
          button {
            min-height: 56px;
            min-width: 56px;
          }
          
          input, select, textarea {
            font-size: 16px;
          }
        }

        /* High contrast mode support */
        @media (prefers-contrast: high) {
          .bg-gradient-to-r {
            background: #1f2937 !important;
          }
          
          .text-gray-600 {
            color: #000 !important;
          }
        }

        /* Ensure white background always */
        main {
          background-color: white !important;
        }

        /* Prevent horizontal scroll on mobile */
        body {
          overflow-x: hidden;
        }

        /* Better text rendering on mobile */
        @media (max-width: 767px) {
          h1, h2, h3, p {
            text-rendering: optimizeLegibility;
            word-wrap: break-word;
            hyphens: none !important; /* Override auto hyphenation */
            -webkit-hyphens: none !important;
            -ms-hyphens: none !important;
          }
          .no-break {
            hyphens: none !important;
            -webkit-hyphens: none !important;
            -ms-hyphens: none !important;
          }
        }
      `}</style>
    </>
  );
}

export default Main;