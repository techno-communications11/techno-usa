"use client"
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRouter } from 'next/navigation';

function Main() {
  const scrollRef = useRef(null);
  const router = useRouter();
  
  // Enhanced scroll animations
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start end', 'end start'],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.9, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.03]);

  // Smoother animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.15
      } 
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const handleClick = () => {
    router.push('/about');
  };

  return (
    <motion.main 
      className="container mx-auto px-6 lg:px-12 py-10 md:py-12 min-h-[90vh] flex flex-col md:flex-row items-center justify-between gap-16"
      ref={scrollRef}
      style={{ opacity }}
    >
      {/* Text Content Section */}
      <motion.div
        className="w-full md:w-1/2 space-y-8 md:pr-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={textVariants}
      >
        <motion.h1 
          className="text-5xl sm:text-4xl lg:text-4xl font-bold text-gray-900 leading-tight tracking-tight"
          variants={itemVariants}
        >
          Welcome to <br/> 
          <span className="bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
            Techno Communications LLC
          </span>
        </motion.h1>
        <motion.p style={{fontWeight:900}}   className=" text-6xl fw-bolder bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent p-2"> #1 Dealer for Metro by T-mobile</motion.p>
        <motion.p className=" text-1xl  bg-gradient-to-r from-gray-600 to-gray-600 bg-clip-text text-transparent">Techno communication LLc is leading the wireless industry 
            <br/> by focusing  and specializing in Metro by T-Mobile.
            <br/> With over 350+, stores in 15
            <br/> markets and growing.</motion.p>
        <motion.div 
         
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
         
        >
          <button 
            onClick={handleClick}
             style={{cursor: 'pointer'}}
            className="mt-8 px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:brightness-110"
          >
            Discover Our Story →
          </button>
        </motion.div>
      </motion.div>

      {/* Image Section with Enhanced Effects */}
      <motion.div 
        className="w-full md:w-1/2 flex justify-center relative"
        style={{ y, scale }}
      >
        <motion.div
          className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-20 blur-xl -z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.2 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
        <motion.img 
          src='home_metro.png' 
          alt="Metro by T-Mobile stores"
          className="w-full max-w-2xl rounded-2xl"
          initial={{ opacity: 0, x: 80, rotate: -2 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ 
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1]
          }}
          viewport={{ once: true }}
        />
      </motion.div>
    </motion.main>
  )
}

export default Main;