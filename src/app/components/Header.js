"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";

import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const currentPath = usePathname() || "/";

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Animation for header
  const headerVariants = {
    initial: { y: -100, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Animation for logo
  const logoVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.2 },
    },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <motion.header
      className="sticky top-0 z-50 bg-white/80
 backdrop-blur-md  border-b border-gray-100/50 "
      variants={headerVariants}
      initial="initial"
      animate="animate"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          variants={logoVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/logoT.webp"
              alt="Techno Communications Global LLC Logo"
              width={200} // set to actual width in pixels
              height={60} // set to actual height in pixels
              className="drop-shadow-md"
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation and Mobile Menu Button */}
        <div className="flex items-center space-x-8">
          {/* Desktop Navigation (aligned to the right) */}
          <NavLinks currentPath={currentPath} />

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-gray-900 focus:outline-none p-3 rounded-full hover:bg-gray-100/50 transition-all"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? (
              <RxCross2 size={24} />
            ) : (
              <GiHamburgerMenu size={34} />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <MobileMenu
          isOpen={isMobileMenuOpen}
          toggleMenu={toggleMobileMenu}
          currentPath={currentPath}
        />
      </div>
    </motion.header>
  );
};

export default Header;
