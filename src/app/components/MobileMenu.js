import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// Navigation links
const navLinks = [
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
  { name: "Careers", path: "/careers" },
  {
    name: "Members Only",
    path: "https://dashboard.techno-communications.com/",
    isExternal: true,
  },
];

const MobileMenu = ({ isOpen, toggleMenu, currentPath }) => {
  // Animation variants
  const menuVariants = {
    open: { 
      x: 0, 
      opacity: 1, 
      transition: { 
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.1
      } 
    },
    closed: { 
      x: "100%", 
      opacity: 0, 
      transition: { 
        duration: 0.3,
        ease: "easeIn",
        staggerChildren: 0.05,
        staggerDirection: -1
      } 
    },
  };

  const itemVariants = {
    open: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.3, ease: "easeOut" } 
    },
    closed: { 
      opacity: 0, 
      y: 20, 
      transition: { duration: 0.2, ease: "easeIn" } 
    },
  };

  // Handle backdrop click
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      toggleMenu();
    }
  };

  // Handle external links
  const handleLinkClick = (link) => {
    if (link.isExternal) {
      window.open(link.path, '_blank', 'noopener,noreferrer');
    }
    toggleMenu();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0  bg-opacity-50 z-50 md:hidden"
          variants={menuVariants}
          initial="closed"
          animate="open"
          exit="closed"
          onClick={handleBackdropClick}
        >
          {/* Menu Panel */}
          <motion.div
            className="absolute top-0 right-0 h-50% w-80 max-w-[85vw] bg-white shadow-2xl overflow-y-auto"
            variants={{
              open: { x: 0, transition: { duration: 0.3, ease: "easeOut" } },
              closed: { x: "100%", transition: { duration: 0.3, ease: "easeIn" } },
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
              <button
                className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={toggleMenu}
                aria-label="Close menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col p-4 space-y-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  variants={itemVariants}
                  custom={index}
                  className="w-full"
                >
                  {link.isExternal ? (
                    <button
                      onClick={() => handleLinkClick(link)}
                      className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                        link.name === "Members Only"
                          ? "bg-yellow-500 text-white hover:bg-yellow-600 shadow-md"
                          : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                      }`}
                    >
                      <span className="flex items-center justify-between">
                        {link.name}
                        <svg
                          className="h-4 w-4 ml-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </span>
                    </button>
                  ) : (
                    <Link
                      href={link.path}
                      className={`block w-full px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                        currentPath === link.path
                          ? "bg-blue-50 text-blue-700 border-l-4 border-blue-700"
                          : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                      }`}
                      onClick={toggleMenu}
                    >
                      {link.name}
                    </Link>
                  )}
                </motion.div>
              ))}
            </nav>

            {/* Footer */}
            <div className="mt-auto p-4 border-t border-gray-200">
              <p className="text-sm text-gray-500 text-center">
                © 2025 Techno Communications LLC
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;