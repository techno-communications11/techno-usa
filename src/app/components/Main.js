"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRouter } from "next/navigation";

function Main() {
  const scrollRef = useRef(null);
  const router = useRouter();

  // Scroll animations
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.95, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.02]);

  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const handleClick = () => {
    router.push("/about");
  };

  return (
    <motion.main
      className="container mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-10 lg:py-16 min-h-[80vh] flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-16"
      ref={scrollRef}
      style={{ opacity }}
    >
      {/* Text Content Section */}
      <motion.div
        className="w-full lg:w-1/2 space-y-3 sm:space-y-4 lg:space-y-6 lg:pr-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={textVariants}
      >
        <motion.p
          className="text-lg sm:text-xl md:text-2xl lg:text-7xl font-semibold text-gray-900 whitespace-nowrap overflow-hidden text-ellipsis"
          variants={itemVariants}
        >
          Welcome to
        </motion.p>
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight whitespace-nowrap overflow-hidden text-ellipsis"
          variants={itemVariants}
        >
          <span className="bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
            Techno Communications LLC
          </span>
        </motion.h1>
        <motion.p
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent whitespace-nowrap overflow-hidden text-ellipsis"
          variants={itemVariants}
        >
          #1 Dealer for Metro by T-Mobile
        </motion.p>
        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-600"
          variants={itemVariants}
        >
          Techno Communications proudly operates the largest network of Metro by
          T-Mobile stores across the USA.
        </motion.p>
        <motion.div
          className="mt-6"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          variants={itemVariants}
        >
          <button
            onClick={handleClick}
            style={{ cursor: "pointer" }}
            className="px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-base sm:text-lg font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:brightness-110"
            aria-label="Learn more about Techno Communications"
          >
            Discover Our Story →
          </button>
        </motion.div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="w-full lg:w-1/2 flex justify-center relative mt-8 lg:mt-0"
        style={{ y, scale }}
      >
        <motion.div
          className="absolute - inset-3 sm:-inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-15 blur-lg -z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.15 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />
        <motion.img
          src="/home_metro.png"
          alt="Metro by T-Mobile stores"
          className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-2xl rounded-2xl object-cover"
          initial={{ opacity: 0, x: 60, rotate: -1 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          viewport={{ once: true }}
        />
      </motion.div>
    </motion.main>
  );
}

export default Main;