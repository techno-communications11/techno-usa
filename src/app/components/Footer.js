"use client"
import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

function Footer() {
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
  };

  const linkVariants = {
    hover: {
      scale: 1.05,
      color: "#ffffff",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Description */}
          <div className="md:col-span-2">
            <motion.img 
              src="logoT.webp" 
              height={250} 
              width={250}
              alt="Techno Communications Logo"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <p className='text-gray-400 mt-3'>
              Techno Communications LLC is a Texas-based, results-oriented
              company with a passion for excellence in sales and execution.
              Ranked in the{" "}
              <span className="font-semibold text-blue-600">TOP 10</span> as the
              largest Metro by T-Mobile authorized dealer.
            </p>
            <motion.button 
              className="text-blue-400 hover:text-blue-300 font-medium mt-2"
              onClick={() => handleNavigation('/about')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Read More...
            </motion.button>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <motion.li whileHover={{ x: 5 }}>
                <motion.a
                  onClick={() => handleNavigation('/about')}
                  className="cursor-pointer"
                  variants={linkVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  About Us
                </motion.a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <motion.a
                  onClick={() => handleNavigation('/services')}
                  className="cursor-pointer"
                  variants={linkVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Services
                </motion.a>
              </motion.li>
              {/* <motion.li whileHover={{ x: 5 }}>
                <motion.a
                  onClick={() => handleNavigation('/locations')}
                  className="cursor-pointer"
                  variants={linkVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Locations
                </motion.a>
              </motion.li> */}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <motion.li whileHover={{ x: 5 }}>
                <motion.a
                  onClick={() => handleNavigation('/privacy-policy')}
                  className="cursor-pointer"
                  variants={linkVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Privacy Policy
                </motion.a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <motion.a
                  onClick={() => handleNavigation('/contact')}
                  className="cursor-pointer"
                  variants={linkVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Contact Us
                </motion.a>
              </motion.li>
              
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Address */}
          <div className="mb-4 md:mb-0 text-gray-400 text-sm">
            <p>© 2010 6464 Savoy Dr Suite 215</p>
            <p>info@techno-communications.com</p>
            <p>Phone: +1(346) 487-7627</p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <motion.a 
              href="https://facebook.com" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, color: "#3b5998" }}
              className="text-gray-400"
            >
              <FaFacebook size={20} />
            </motion.a>
            <motion.a 
              href="https://twitter.com" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, color: "#1DA1F2" }}
              className="text-gray-400"
            >
              <FaTwitter size={20} />
            </motion.a>
            <motion.a 
              href="https://linkedin.com" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, color: "#0077B5" }}
              className="text-gray-400"
            >
              <FaLinkedin size={20} />
            </motion.a>
            <motion.a 
              href="https://instagram.com" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, color: "#E1306C" }}
              className="text-gray-400"
            >
              <FaInstagram size={20} />
            </motion.a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-gray-500 text-sm">
          <p>Copyright © {new Date().getFullYear()} Techno Communications LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;