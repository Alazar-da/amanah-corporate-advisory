'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FiBriefcase, FiGlobe, FiShield, FiUserCheck } from 'react-icons/fi'

const Hero = () => {
const stats = [
  {
    icon: <FiBriefcase />,
    title: 'UAE Business Setup',
    value: 'Expert Guidance',
  },
  {
    icon: <FiGlobe />,
    title: 'Global Expansion',
    value: 'International Solutions',
  },
  {
    icon: <FiShield />,
    title: 'Banking Solutions',
    value: 'Trusted Support',
  },
  {
    icon: <FiUserCheck />,
    title: 'Residency Services',
    value: 'Personalized Guidance',
  },
];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20"
      style={{
        backgroundImage: 'linear-gradient(rgba(11, 31, 59, 0.85), rgba(11, 31, 59, 0.9)), url("https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container-custom relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Main Heading - Smaller on mobile */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 md:mb-6 tracking-tight">
            AMANAH CORPORATE
            <br className="hidden md:block" />
            <span className=""> ADVISORY</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-3 md:mb-4 max-w-3xl mx-auto px-4 italic">
            Your Trusted Partner for Growth, Expansion, and Opportunity Across Borders
          </p>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
            Empowering entrepreneurs, investors, startups, and corporations with end-to-end business solutions across the UAE and international jurisdictions.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 md:mb-16 px-4">
            <a href="#contact" className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
              Book Free Consultation
            </a>
            <a href="#services" className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
              Start Your Business
            </a>
          </div>

          {/* Stats Grid - Responsive */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto px-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="text-roseGold-500 text-2xl sm:text-3xl mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-sm sm:text-md text-gray-200 uppercase tracking-wide">
                  {stat.title}
                </div>
                <div className="text-white text-xs sm:text-sm mt-1">
                  {stat.value}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white/70 hover:text-white transition-colors">
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  )
}

export default Hero