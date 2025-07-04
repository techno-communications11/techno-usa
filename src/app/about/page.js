"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function page() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full bg-white"
    >
      {/* Header Section */}
      <div className="w-full px-4 sm:px-6 lg:px-16 py-12">
        {/* Image Left, Text Right Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center gap-5">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative w-full h-80 lg:h-[400px]"
          >
            <Image
              src="/about.webp"
              alt="Techno Communications"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-xl"
              priority
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6 text-gray-700 text-lg leading-relaxed"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-600 tracking-tight">
              Our Story
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mt-2">
              Techno Communications LLC
            </h2>

            <p>
              Techno Communications LLC is a Texas-based, results-oriented
              company with a passion for excellence in sales and execution.
              Ranked in the{" "}
              <span className="font-semibold text-blue-600">TOP 10</span> as the
              largest Metro by T-Mobile authorized dealer, we have demonstrated
              our ability to pivot and execute with precision.
            </p>
            <p>
              Our journey began with a single store when Metro launched in 2013
              in Houston. Through strategic planning and continuous development,
              we now operate as the largest Metro by T-Mobile authorized dealer
              in <span className="font-semibold text-blue-600">15 markets</span>
              , with{" "}
              <span className="font-semibold text-blue-600">
                350+ directly owned and operated stores
              </span>
              .
            </p>
            <p>
              Our unique sales culture, combined with an unwavering commitment
              to quality, sets us apart. We stand by always doing things the
              right way, guided by our core values of{" "}
              <span className="font-semibold text-purple-600">integrity</span>,{" "}
              <span className="font-semibold text-purple-600">
                transparency
              </span>
              , and{" "}
              <span className="font-semibold text-purple-600">
                customer commitment
              </span>
              .
            </p>
            <p>
              We are dedicated to achieving continuous results, conquering new
              markets, and maintaining our position in the top 10 as the largest
              dealer.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
