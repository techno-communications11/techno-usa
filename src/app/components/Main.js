"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

function Main() {
  const [isVisible, setIsVisible] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false);
  const mainRef = useRef(null);
  const imageRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const imageObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsImageVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (mainRef.current) observer.observe(mainRef.current);
    if (imageRef.current) imageObserver.observe(imageRef.current);

    return () => {
      observer.disconnect();
      imageObserver.disconnect();
    };
  }, []);

  const handleClick = () => {
    router.push("/about");
  };

  return (
    <>
      <main
        ref={mainRef}
        className="container mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-10 lg:py-16 min-h-[80vh] flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-16 relative overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 pointer-events-none"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Text Content Section */}
        <div className="w-full lg:w-1/2 space-y-3 sm:space-y-4 lg:space-y-6 lg:pr-8 relative z-10">
          <p
            className={`text-lg sm:text-xl md:text-2xl lg:text-7xl font-semibold text-gray-900 transform transition-all duration-700 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "0ms" }}
          >
            Welcome to
          </p>
          
          <h1
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight transform transition-all duration-700 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <span className="bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent hover:from-blue-600 hover:to-blue-400 transition-all duration-300">
              Techno Communications LLC
            </span>
          </h1>
          
          <p
            className={`text-xl sm:text-2xl md:text-3xl lg:text-6xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent transform transition-all duration-700 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            #1 Authorized Dealer for Metro by T-Mobile
          </p>
          
          <p
            className={`text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed transform transition-all duration-700 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            Techno Communications proudly operates the largest network of Metro by
            T-Mobile stores across the USA.
          </p>
          
          <div
            className={`mt-6 transform transition-all duration-700 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <button
              onClick={handleClick}
              className="group relative px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-base sm:text-lg font-semibold rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 hover:brightness-110 overflow-hidden focus:outline-none focus:ring-4 focus:ring-blue-500/50"
              aria-label="Learn more about Techno Communications"
            >
              {/* Button shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              
              {/* Button content */}
              <span className="relative flex items-center gap-2">
                Discover Our Story 
                <svg 
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
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

        {/* Image Section */}
        <div
          ref={imageRef}
          className="w-full lg:w-1/2 flex justify-center relative mt-8 lg:mt-0"
        >
          {/* Glow effect behind image */}
          <div
            className={`absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-2xl transition-all duration-1000 ease-out ${
              isImageVisible ? "opacity-20 scale-110" : "opacity-0 scale-100"
            }`}
            style={{ transform: "translateZ(0)" }}
          />
          
          {/* Main image */}
          <div
            className={`relative transform transition-all duration-1000 ease-out ${
              isImageVisible
                ? "translate-x-0 opacity-100 rotate-0"
                : "translate-x-16 opacity-0 -rotate-1"
            }`}
          >
            <div className="relative w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-2xl rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:-rotate-1">
              <Image
                src="/home_metro.png"
                alt="Metro by T-Mobile stores"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                priority
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                quality={90}
                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 70vw, 50vw"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-bounce opacity-80"></div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-purple-500 rounded-full animate-pulse opacity-60"></div>
            <div className="absolute top-1/2 -right-8 w-6 h-6 bg-pink-500 rounded-full animate-ping opacity-70"></div>
            
            {/* Decorative border */}
            <div className="absolute inset-0 rounded-2xl border-2 border-gradient-to-r from-blue-400/30 to-purple-400/30"></div>
          </div>
        </div>

        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-float-delayed opacity-50"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-pink-400 rounded-full animate-pulse opacity-70"></div>
      </main>

      {/* Global CSS for custom animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px); 
          }
          50% { 
            transform: translateY(-20px); 
          }
        }
        
        @keyframes float-delayed {
          0%, 100% { 
            transform: translateY(0px); 
          }
          50% { 
            transform: translateY(-15px); 
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 4s ease-in-out infinite;
          animation-delay: 1s;
        }

        /* Custom gradient border animation */
        @keyframes gradient-border {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
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
      `}</style>
    </>
  );
}

export default Main;