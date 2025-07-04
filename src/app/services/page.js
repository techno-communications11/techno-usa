"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaMobileAlt, FaStore, FaShieldAlt, FaHeadset } from "react-icons/fa";
import { useRouter } from 'next/navigation';

const Services = () => {
    const router=useRouter();
  const services = [
    {
      id: 1,
      icon: <FaMobileAlt className="text-4xl text-blue-600" />,
      title: "Mobile Phones & Accessories Dealers",
      description: "We offer the latest smartphones and premium accessories from top brands at competitive prices."
    },
    {
      id: 2,
      icon: <FaStore className="text-4xl text-purple-600" />,
      title: "Large Number of Stores in USA (350+)",
      description: "With over 350 locations across 15+ markets, we're never far from serving your wireless needs."
    },
    {
      id: 3,
      icon: <FaShieldAlt className="text-4xl text-blue-600" />,
      title: "Authorized Dealer of Metro by T-Mobile",
      description: "As a top authorized dealer, we provide exclusive deals and premium support for Metro by T-Mobile services."
    },
    {
      id: 4,
      icon: <FaHeadset className="text-4xl text-purple-600" />,
      title: "Premium Customer Support",
      description: "Our dedicated support team ensures you get the best service experience in the wireless industry."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
   const handleClickContact=()=>{
 router.push('/contact')
   }
  

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Our Services
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Ready to experience premium wireless service?
          </h3>
          
          <button onClick={handleClickContact}style={{cursor:'pointer'}}  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:brightness-110">
            Contact US
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;