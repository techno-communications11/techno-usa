import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Navigation links
const navLinks = [
 
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
  // { name: 'Locations', path: '/locations' },
 
];

const NavLinks = ({ currentPath }) => {
  // Animation for links
  const linkVariants = {
    hover: {
      scale: 1.1,
      color: '#1e40af', // Dark blue on hover
      transition: { duration: 0.3 },
    },
  };

  return (
    <nav className="hidden md:flex space-x-6">
      {navLinks.map((link) => (
        <motion.div key={link.name} variants={linkVariants} whileHover="hover">
          <Link
            href={link.path}
            className={`text-gray-900 px-3 py-2 rounded-md text-sm font-medium fw-bold ${
              currentPath === link.path
                ? 'bg-gray-200 text-pink-600'
                : 'hover:bg-gray-100'
            } transition-colors`}
          >
            {link.name}
          </Link>
        </motion.div>
      ))}
      <a href='https://dashboard.techno-communications.com/' style={{ backgroundColor: '#b7950b', padding: '4px' }} className='rounded'>Members Only</a>
    </nav>
  );
};

export default NavLinks;