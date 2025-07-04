"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function Main1() {


  // Enhanced animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1.0], // Custom easing
      },
    },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        type: "spring",
        stiffness: 70,
      },
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        type: "spring",
        stiffness: 70,
      },
    },
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };



  return (
    <div className="w-full bg-gradient-to-b from-white via-blue-50/20 to-gray-50 py-16 md:py-12 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Text Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Map Image with Enhanced Animation */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative mb-8 w-full order-2 lg:order-1"
          >
            <motion.div
              className="absolute -inset-4  from-blue-200/30 to-purple-200/30 rounded-2xl blur-lg -z-10"
              animate={{
                opacity: [0.5, 0.8, 0.5],
                scale: [0.98, 1.01, 0.98],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <div className=" overflow-hidden relative">
              <div className="absolute inset-0  to-transparent z-10" />
              <Image
                src="/imagestore.jpg"
                alt="Techno Communications Global LLC Logo"
                width={600} // set to actual width in pixels
                height={600} // set to actual height in pixels
              />
              
            </div>
          </motion.div>

          {/* Text Content with Enhanced Animations */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col order-1 lg:order-2"
          >
            <div className="flex flex-col">
              {/* Numbers with enhanced animation and styling */}
              <div className="relative mb-8">
                <motion.div
                  className="absolute -inset-6 bg-blue-100/30 rounded-3xl blur-lg -z-10"
                  animate={{
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />

                <motion.div
                  variants={scaleUp}
                  className="text-7xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent leading-tight"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  15 Markets &
                </motion.div>

                <motion.div
                  variants={scaleUp}
                  transition={{ delay: 0.2 }}
                  className="text-7xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent leading-tight"
                  animate={{
                    backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"],
                  }}
                >
                  350+ Stores
                </motion.div>
              </div>

              {/* Heading with enhanced animation */}
              <motion.h1
                variants={slideInLeft}
                transition={{ delay: 0.3 }}
                className="text-4xl font-bold text-gray-700 leading-tight"
              >
                We Have the Largest Network
                <br className="hidden lg:block" />
                of Stores in USA
                <motion.div
                  className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mt-4 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: 80 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                />
              </motion.h1>

              {/* Description with enhanced animation */}
              <motion.p
                variants={fadeIn}
                transition={{ delay: 0.4 }}
                className="mt-6 text-lg text-gray-600 leading-relaxed"
              >
                Our extensive reach ensures we &apos; re always close to our
                customers, providing convenience and accessibility across the
                nation. With stores in major cities and suburban areas, we
                &apos;re committed to bringing our services to communities
                everywhere.
              </motion.p>

              {/* Button with enhanced hover effect */}
             
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Main1;
