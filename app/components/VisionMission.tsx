// src/components/VisionMission.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaEye, FaBullseye, FaHandshake, FaArrowRight } from 'react-icons/fa';

const VisionMission = () => {
  return (
    <section className="py-24 bg-navy text-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-roseGold-500/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-navy/5 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-roseGold-500 font-semibold tracking-wider uppercase text-sm">Our Philosophy</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gold mt-3">
            Vision & Mission
          </h2>
          <div className="w-16 h-px bg-roseGold-500 mx-auto mt-6"></div>
        </motion.div>

        {/* Vision & Mission - Split Screen Layout */}
        <div className="grid lg:grid-cols-2 gap-0 mb-24">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="lg:pr-12 xl:pr-16 pb-12 lg:pb-0">
              {/* Decorative line */}
              <div className="absolute left-0 top-0 w-12 h-px bg-roseGold-500 group-hover:w-24 transition-all duration-700"></div>
              
              <div className="pt-8">
                <div className="text-roseGold-500 text-5xl mb-6 group-hover:scale-110 transition-transform duration-500 inline-block">
                  <FaEye />
                </div>
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-gold mb-6">
                  Our Vision
                </h3>
                <p className=" text-base md:text-lg leading-relaxed">
                  To become a trusted regional and international business advisory firm recognized for helping entrepreneurs, investors, and corporations establish strong foundations, unlock new opportunities, and achieve sustainable growth across global markets.
                </p>
              </div>
            </div>
            {/* Vertical divider */}
            <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent hidden lg:block"></div>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative group lg:pl-12 xl:pl-16 pt-12 lg:pt-0"
          >
            <div className="absolute left-0 top-0 w-12 h-px bg-roseGold-500 group-hover:w-24 transition-all duration-700 lg:hidden"></div>
            
            <div className="pt-8">
              <div className="text-roseGold-500 text-5xl mb-6 group-hover:scale-110 transition-transform duration-500 inline-block">
                <FaBullseye />
              </div>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-gold mb-6">
                Our Mission
              </h3>
              <p className=" text-base md:text-lg leading-relaxed">
                To provide reliable, transparent, and professional business solutions that simplify company formation, banking, residency, and corporate services while building lasting relationships founded on trust and excellence.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Trust & Foundation - Full Width Banner Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative bg-navy overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-64 h-64 border-4 border-roseGold-500 rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 border-4 border-roseGold-500 rounded-full"></div>
          </div>
          
          <div className="relative px-8 py-12 md:px-12 md:py-16 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="inline-block mb-6">
                <div className="text-roseGold-500 text-5xl md:text-6xl animate-pulse">
                  <FaHandshake />
                </div>
              </div>
              
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
                Built on Trust & Foundation
              </h3>
              
              <div className="w-12 h-px bg-roseGold-500 mx-auto mb-6"></div>
              
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                Built on integrity, confidentiality, and long-term partnerships, Amanah ensures every client receives dependable and professional guidance.
              </p>
              
              <div className="mt-8 flex flex-wrap justify-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-roseGold-500 rounded-full"></div>
                  <span className="text-gray-300 text-sm">Integrity First</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-roseGold-500 rounded-full"></div>
                  <span className="text-gray-300 text-sm">100% Confidential</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-roseGold-500 rounded-full"></div>
                  <span className="text-gray-300 text-sm">Long-term Partnerships</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative bottom line */}
          {/* <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
       */}  </motion.div>
      </div>
    </section>
  );
};

export default VisionMission;