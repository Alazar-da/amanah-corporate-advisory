'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMapPin, FiGlobe, FiAnchor, FiChevronRight } from 'react-icons/fi'

const Locations = () => {
  const [activeRegion, setActiveRegion] = useState(0)

  const locations = {
    'UAE Mainland & Free Zones': {
      icon: <FiMapPin />,
      color: 'from-roseGold-500/20 to-roseGold-500/5',
      cities: ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Ras Al Khaimah', 'Fujairah', 'Umm Al Quwain'],
      description: 'Strategic locations across all seven emirates for optimal business setup'
    },
    'UAE Offshore Jurisdictions': {
      icon: <FiAnchor />,
      color: 'from-roseGold-500/20 to-roseGold-500/5',
      cities: ['JAFZA Offshore', 'RAK ICC', 'Ajman Offshore', 'Dubai Offshore'],
      description: 'Premium offshore solutions with 100% foreign ownership'
    },
    'International Offshore': {
      icon: <FiGlobe />,
      color: 'from-roseGold-500/20 to-roseGold-500/5',
      cities: ['Mauritius', 'Seychelles', 'Cayman Islands', 'British Virgin Islands', 'Marshall Islands'],
      description: 'Global footprint across world-class financial centers'
    }
  }

  const regions = Object.keys(locations) as Array<keyof typeof locations>
  const currentRegion = regions[activeRegion]

  return (
    <section id="locations" className="py-24 bg-gradient-to-br from-navy to-navy/95 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-roseGold-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-roseGold-500/5 rounded-full blur-3xl animate-float-slow"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-roseGold-500 font-semibold tracking-wider uppercase text-sm">Global Reach</span>
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-gold mt-3">
            Our Jurisdictions
          </h2>
          <div className="w-16 h-px bg-roseGold-500 mx-auto mt-6"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Strategic locations across UAE and international markets for optimal business setup
          </p>
        </motion.div>

        {/* Interactive Map-style Layout */}
        <div className="max-w-5xl mx-auto">
          {/* Region Selector Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {regions.map((region, index) => (
              <button
                key={index}
                onClick={() => setActiveRegion(index)}
                className={`px-6 py-3 rounded-full transition-all duration-500 text-sm md:text-base font-medium ${
                  activeRegion === index
                    ? 'bg-roseGold-500 text-white shadow-lg shadow-roseGold-500/25'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10'
                }`}
              >
                <span className="flex items-center gap-2">
                  {Object.values(locations)[index].icon}
                  {region}
                </span>
              </button>
            ))}
          </div>

          {/* Active Region Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeRegion}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/10"
            >
              <div className="grid md:grid-cols-2 gap-10">
                {/* Left Side - Info */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-roseGold-500 text-3xl">
                      {locations[currentRegion].icon}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-white">
                      {currentRegion}
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {locations[currentRegion].description}
                  </p>
                  <div className="flex items-center gap-2 text-roseGold-500 text-sm">
                    <span className="w-8 h-px bg-roseGold-500"></span>
                    <span>{locations[currentRegion].cities.length} Locations Available</span>
                  </div>
                </div>

                {/* Right Side - Cities Grid */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <FiChevronRight className="text-roseGold-500" />
                    Key Jurisdictions
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {locations[currentRegion].cities.map((city:any, idx:any) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                        className="group"
                      >
                        <div className="flex items-center gap-2 text-gray-300 group-hover:text-roseGold-500 transition-colors py-2 px-3 rounded-lg group-hover:bg-white/5">
                          <div className="w-1 h-1 rounded-full bg-roseGold-500 group-hover:scale-150 transition-transform"></div>
                          <span className="text-sm md:text-base">{city}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative Line */}
              <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-1 h-1 rounded-full bg-roseGold-500/50"></div>
                  ))}
                </div>
                <p className="text-xs text-gray-400">
                  All jurisdictions offer 100% foreign ownership
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Stats */}
     <div className="grid grid-cols-3 gap-4 mt-10">
  <div className="text-center">
    <div className="text-2xl font-bold text-roseGold-500">
      Global
    </div>
    <div className="text-xs text-gray-400">
      Business Reach
    </div>
  </div>

  <div className="text-center">
    <div className="text-2xl font-bold text-roseGold-500">
      7
    </div>
    <div className="text-xs text-gray-400">
      UAE Emirates
    </div>
  </div>

  <div className="text-center">
    <div className="text-2xl font-bold text-roseGold-500">
      Tailored
    </div>
    <div className="text-xs text-gray-400">
      Advisory Solutions
    </div>
  </div>
</div>
        </div>
      </div>
    </section>
  )
}

export default Locations