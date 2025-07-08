"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function Main1() {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 80,
        damping: 12,
      },
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 80,
        damping: 12,
      },
    },
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <div className="w-full bg-gradient-to-b from-white via-blue-50/20 to-gray-50 py-8 sm:py-12 lg:py-16 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Text Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Map Image with Animation */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="relative w-full order-2 lg:order-1 mb-6 sm:mb-8"
          >
            <motion.div
              className="absolute -inset-3 sm:-inset-4 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-2xl blur-lg -z-10"
              animate={{
                opacity: [0.4, 0.6, 0.4],
                scale: [0.98, 1.01, 0.98],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <div className="relative overflow-hidden">
              <Image
                src="/imagestore.jpg"
                alt="Techno Communications Global LLC Logo"
                width={600}
                height={600}
                className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[600px] h-auto rounded-2xl object-cover mx-auto"
                priority
              />
            </div>
          </motion.div>

          {/* Text Content with Animations */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col order-1 lg:order-2"
          >
            <div className="flex flex-col space-y-4 sm:space-y-6">
                

              {/* Heading with animation */}
              <motion.h1
                variants={slideInLeft}
                transition={{ delay: 0.3 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-7xl font-bold text-gray-700 leading-tight"
              >
                We Have the Largest Network
                <br className="hidden sm:block lg:hidden" />
                <span className="block">of Stores in USA</span>
                <motion.div
                  className="h-1 w-16 sm:w-20 bg-gradient-to-r from-blue-500 to-purple-500 mt-3 sm:mt-4 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: 80 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.7 }}
                />
              </motion.h1>

              {/* Description with animation */}
              <motion.p
                variants={fadeIn}
                transition={{ delay: 0.4 }}
                className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed"
              >
                Our extensive reach ensures we’re always close to our customers—offering
                convenience and accessibility across the nation. With stores located in
                major cities and suburban areas, we’re committed to serving communities
                everywhere with reliable and friendly service.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Main1;