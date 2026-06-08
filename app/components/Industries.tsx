'use client'

import React from 'react'
import { motion } from 'framer-motion'

const Industries = () => {
  const industries = [
    'Trading', 'E-Commerce', 'Real Estate', 'Consultancy', 
    'Technology', 'Logistics', 'Healthcare', 'Hospitality', 
    'Manufacturing', 'Import / Export', 'Education', 'Media',
    'Construction', 'Retail', 'Finance', 'Energy'
  ]

  return (
    <section id="industries" className="py-24 bg-lightGray">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-roseGold-500 font-semibold tracking-wider uppercase text-sm">Sector Expertise</span>
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-navy mt-3">
            Industries We Serve
          </h2>
          <div className="w-16 h-px bg-roseGold-500 mx-auto mt-6"></div>
          <p className="text-mutedText max-w-2xl mx-auto mt-6">
            Specialized expertise across diverse business sectors
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {industries.map((industry, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.02 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="px-6 py-2 text-navy hover:text-roseGold-500 transition-colors cursor-pointer"
            >
              {industry}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Industries