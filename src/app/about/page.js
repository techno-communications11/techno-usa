"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Page() {
  // Simplified animation variants
  const fadeIn = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5, // Reduced duration for faster animations
        ease: "easeOut",
      },
    },
  };

  const textFadeIn = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }} // Faster page transition
      className="w-full bg-white"
    >
      {/* Header Section */}
      <div className="w-full px-4 sm:px-6 lg:px-16 py-8 sm:py-10 lg:py-12">
        {/* Image Left, Text Right Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Image */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }} // Trigger earlier for smoother experience
            className="relative w-full aspect-[4/3] lg:aspect-[16/9] max-h-[400px]" // Fixed aspect ratio
          >
            <Image
              src="/about.webp"
              alt="Techno Communications storefront"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-xl"
              sizes="(max-width: 1024px) 100vw, 50vw" // Optimize image fetching
              priority
              quality={75} // Balance quality and performance
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            variants={textFadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-4 sm:space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-600 tracking-tight">
              Our Story
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradientto-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Techno Communications LLC
            </h2>
         <p>
  Techno Communications LLC is a leading franchise partner in the
  wireless industry, proudly specializing in Metro by T-Mobile. With
  a growing number of stores across the USA, we are committed to
  delivering exceptional customer service and reliable connectivity.
</p>
<p>
  Our journey began with a single store when Metro launched in 2013 in
  Houston. Through strategic planning and continuous development, we
  have grown to become the largest authorized dealer for Metro by T-Mobile.
</p>
<p>
  Our unique sales culture, combined with an unwavering commitment to
  quality, sets us apart. We are driven by a philosophy of doing
  things the right way—guided by our core values of{" "}
  <span className="font-semibold text-purple-600">integrity</span>,{" "}
  <span className="font-semibold text-purple-600">transparency</span>, and{" "}
  <span className="font-semibold text-purple-600">
    customer commitment
  </span>.
</p>
<p>
  We are focused on achieving consistent results, expanding into new
  markets, and maintaining our position among the top  dealers
  nationwide.
</p>

          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}