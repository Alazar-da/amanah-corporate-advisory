'use client'

import React from 'react'
import { motion } from 'framer-motion'

const Locations = () => {
  const locations = {
    'UAE Mainland & Free Zones': ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Ras Al Khaimah', 'Fujairah', 'Umm Al Quwain'],
    'UAE Offshore Jurisdictions': ['JAFZA Offshore', 'RAK ICC', 'Ajman Offshore', 'Dubai Offshore'],
    'International Offshore': ['Mauritius', 'Seychelles', 'Cayman Islands', 'British Virgin Islands', 'Marshall Islands']
  }

  return (
    <section id="locations" className="py-24 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-roseGold-500 font-semibold tracking-wider uppercase text-sm">Global Reach</span>
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-navy mt-3">
            Our Jurisdictions
          </h2>
          <div className="w-16 h-px bg-roseGold-500 mx-auto mt-6"></div>
        </motion.div>

<div className="flex flex-col md:flex-row md:justify-between gap-12">
  {Object.entries(locations).map(([region, cities], index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`
       md:w-auto w-fit
        ${index === 0 ? 'md:items-start' : ''}
        ${index === 1 ? 'md:items-center self-end md:self-start' : ''}
        ${index === 2 ? 'md:items-start' : ''}
      `}
    >
      <h3 className="text-2xl font-heading font-bold text-navy mb-6 pb-2 border-b border-roseGold-500 inline-block">
        {region}
      </h3>
      <ul className="space-y-3">
        {cities.map((city, idx) => (
          <li key={idx} className="text-mutedText hover:text-roseGold-500 transition-colors text-sm md:text-base">
            {city}
          </li>
        ))}
      </ul>
    </motion.div>
  ))}
</div>
      </div>
    </section>
  )
}

export default Locations