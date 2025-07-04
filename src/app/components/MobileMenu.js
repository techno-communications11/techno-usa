import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// Navigation links
const navLinks = [
  { name: "About", path: "/components/About" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
  {
    name: "members Only",
    path: "https://dashboard.techno-communications.com/",
  },
];

const MobileMenu = ({ isOpen, toggleMenu, currentPath }) => {
  // Animation for menu
  const menuVariants = {
    open: { x: 0, opacity: 1, transition: { duration: 0.3 } },
    closed: { x: "100%", opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-gray-700 bg-opacity-95 z-50 md:hidden shadow-lg h-80 overflow-y-auto"
          variants={menuVariants}
          initial="closed"
          animate="open"
          exit="closed"
        >
          <div className="flex  justify-end p-3">
            <button
              className="text-gray-900 focus:outline-none hover:text-blue-600 transition-colors"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0  24 24"
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
          <nav className="flex bg-gray-700 flex-col items-center space-y-6 mt-12">
            {navLinks.map((link) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  href={link.path}
                  className={`text-lg font-medium px-6 py-4 rounded-md transition-colors 
  ${
    link.name === "members Only"
      ? "bg-yellow-500 text-white"
      : currentPath === link.path
        ? "bg-gray-700 text-blue-700"
        : "text-white hover:bg-gray-100 hover:text-blue-600"
  }`}
                  onClick={toggleMenu}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
