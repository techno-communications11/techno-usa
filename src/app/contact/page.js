"use client"
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import {  Building, Users, PhoneIncoming, Briefcase, Clock, Globe } from "lucide-react";

const Toast = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => onClose(), 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`fixed top-4 right-4 z-50 max-w-sm p-4 rounded-lg shadow-xl text-white flex items-center gap-2 ${
        type === "success"
          ? "bg-gradient-to-r from-green-500 to-green-600"
          : "bg-gradient-to-r from-red-500 to-red-600"
      }`}
    >
      <span className="text-sm font-medium">{message}</span>
      <button
        onClick={onClose}
        className="ml-2 text-white hover:text-gray-200 focus:outline-none"
      >
        ✕
      </button>
    </motion.div>
  );
};

const Page = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [toast, setToast] = useState({ message: "", type: "", visible: false });

  // const contactMethods = [
  //   {
  //     icon: <FaMapMarkerAlt className="text-2xl text-blue-600" />,
  //     title: "Our Headquarters",
  //     info: "6464 Savoy Dr, Suite 215, Houston, TX 77036",
  //     link: "https://goo.gl/maps/6m2abb9adf339d56",
  //   },
  //   {
  //     icon: <FaPhone className="text-2xl text-purple-600" />,
  //     title: "Phone Number",
  //     info: "+1(713) 640-5426",
  //     link: "tel:+17136405426",
  //   },
  //   {
  //     icon: <FaEnvelope className="text-2xl text-blue-600" />,
  //     title: "Email Address",
  //     info: "info@techno-communications.com",
  //     link: "mailto:info@techno-communications.com",
  //   },
    
  // ];

  const subBranches = [
    {
      name: "Head Office",
      location: "Houston, Texas",
      bgColor: "bg-[#E0F2FE]",
      hoverColor: "hover:bg-[#38BDF8]",
      textColor: "text-[#1E3A8A]",
      icon: <Building className="text-3xl mb-3" />,
      details: "Main operations center",
    },
    {
      name: "Regional Office",
      location: "Dallas, Texas",
      bgColor: "bg-[#DBEAFE]",
      hoverColor: "hover:bg-[#60A5FA]",
      textColor: "text-[#1D4ED8]",
      icon: <Building className="text-3xl mb-3" />,
      details: "Regional support hub",
    },
    {
      name: "HR Services",
      location: "Hyderabad, India",
      bgColor: "bg-[#F3E8FF]",
      hoverColor: "hover:bg-[#A78BFA]",
      textColor: "text-[#6B21A8]",
      icon: <Users className="text-3xl mb-3" />,
      details: "Human resources center",
    },
    {
      name: "BPO Services",
      location: "Karachi, Pakistan",
      bgColor: "bg-[#D1FAE5]",
      hoverColor: "hover:bg-[#34D399]",
      textColor: "text-[#065F46]",
      icon: <PhoneIncoming className="text-3xl mb-3" />,
      details: "Business process outsourcing",
    },
    {
      name: "Recruitment Services",
      location: "Dubai, UAE",
      bgColor: "bg-[#FEF3C7]",
      hoverColor: "hover:bg-[#FBBF24]",
      textColor: "text-[#92400E]",
      icon: <Briefcase className="text-3xl mb-3" />,
      details: "Talent acquisition center",
    },
  ];

  const showToast = (message, type) =>
    setToast({ message, type, visible: true });
  const closeToast = () => setToast({ ...toast, visible: false });

  const validateForm = () => {
    const { name, email, subject, message } = data;
    
    if (!name.trim()) {
      setError("Name is required.");
      showToast("Please enter your name.", "error");
      return false;
    }
    
    if (!email.trim()) {
      setError("Email is required.");
      showToast("Please enter your email.", "error");
      return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      showToast("Please enter a valid email address.", "error");
      return false;
    }
    
    if (!subject.trim()) {
      setError("Subject is required.");
      showToast("Please enter a subject.", "error");
      return false;
    }
    
    if (!message.trim()) {
      setError("Message is required.");
      showToast("Please enter your message.", "error");
      return false;
    }
    
    if (message.length < 10) {
      setError("Message must be at least 10 characters long.");
      showToast("Please provide a more detailed message.", "error");
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Failed to send message.");

      setSuccess(true);
      setData({ name: "", email: "", subject: "", message: "" });
      showToast(
        "Your message has been sent successfully! We'll get back to you soon.",
        "success"
      );
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
      showToast(
        err.message || "Something went wrong. Please try again.",
        "error"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field, value) => {
    setData({ ...data, [field]: value });
    if (error) setError(null); // Clear error when user starts typing
  };

  return (
    <div className="bg-gray-50 min-h-screen py-5 px-4 sm:px-6 lg:px-8">
      {toast.visible && (
        <Toast message={toast.message} type={toast.type} onClose={closeToast} />
      )}
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center items-center gap-3 mb-4">
            <Globe className="text-4xl text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900 font-serif">
              Contact Us
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get in touch with our team for any inquiries or visit one of our
            locations worldwide
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Global Offices Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3 font-serif">
              Our Global Offices
            </h2>
            <p className="text-gray-600 mb-6">
              We are here to serve you across multiple continents
            </p>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 px-4 sm:px-6 lg:px-8">
            {subBranches.map((branch, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className={`rounded-xl p-6 text-center shadow-md border transition-all duration-300 ${branch.bgColor} ${branch.hoverColor} ${branch.textColor} hover:shadow-lg cursor-pointer`}
              >
                <div className="flex justify-center items-center">{branch.icon}</div>
                <h3 className="text-xl font-bold tracking-tight mb-2">{branch.name}</h3>
                <p className="text-base font-medium opacity-90 mb-2">{branch.location}</p>
                <p className="text-sm opacity-75">{branch.details}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Headquarters Section
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3 font-serif">
            Our Headquarters
          </h2>
          <p className="text-gray-600 mb-6">
            Visit us at our main office in Houston, Texas
          </p>f
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div> */}
        
        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-xl h-full min-h-[400px] border border-gray-200"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4411.685153293091!2d-95.50411327223605!3d29.715041330098032!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c24eaf700001%3A0x6d2abb9adf339d56!2s6464%20Savoy%20Dr%20Suite%20215%2C%20Houston%2C%20TX%2077036!5e1!3m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="min-h-[400px]"
              title="Techno Communications Office Location"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100"
              >
                <div className="mt-1 flex-shrink-0">{method.icon}</div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {method.title}
                  </h3>
                  {method.link ? (
                    <a
                      href={method.link}
                      className="text-gray-600 hover:text-blue-600 transition-colors text-base"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {method.info}
                    </a>
                  ) : (
                    <p className="text-gray-600 text-base">{method.info}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div> */}

        {/* Contact Form Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3 font-serif">
            Send Us a Message
          </h2>
          <p className="text-gray-600 mb-6">
            We would love to hear from you. Send us a message and we will respond as soon as possible.
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="bg-gradient-to-br from-blue-700 to-purple-700 p-12 text-white">
              <h3 className="text-2xl font-bold mb-4 font-serif">
                Get in Touch
              </h3>
              <p className="mb-8 text-blue-100">
                Have questions about our services or locations? Our team
                typically responds within 24 hours.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FaPhone className="text-blue-300 flex-shrink-0" />
                  <span className="text-blue-100">+1(713) 640-5426</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-blue-300 flex-shrink-0" />
                  <span className="text-blue-100">
                    info@techno-communications.com
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="text-blue-300 flex-shrink-0" />
                  <span className="text-blue-100">
                    Mon-Fri: 10:00 AM - 7:00 PM CST
                  </span>
                </div>
              </div>
            </div>
            
            <div className="p-12">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-gray-700 mb-2 font-medium"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={data.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="John Doe"
                      disabled={isSubmitting}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-700 mb-2 font-medium"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={data.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="john@example.com"
                      disabled={isSubmitting}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-gray-700 mb-2 font-medium"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={data.subject}
                    onChange={(e) => handleInputChange("subject", e.target.value)}
                    className="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="How can we help?"
                    disabled={isSubmitting}
                    required
                  />
                </div>
                
                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 mb-2 font-medium"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={data.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    rows="5"
                    className="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Your message here... (minimum 10 characters)"
                    disabled={isSubmitting}
                    required
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    {data.message.length}/10 characters minimum
                  </p>
                </div>
                
                {error && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-600 text-sm font-medium">{error}</p>
                  </div>
                )}
                
                {success && (
                  <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-600 text-sm font-medium">
                      Message sent successfully! We will get back to you soon.
                    </p>
                  </div>
                )}
                
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold shadow-md hover:shadow-lg transition-all hover:brightness-105 disabled:opacity-70 disabled:cursor-not-allowed w-full sm:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Page;