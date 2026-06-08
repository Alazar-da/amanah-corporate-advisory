'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  FiShield, FiCheckCircle, FiGlobe, FiZap, 
  FiUsers, FiLock, FiTrendingUp, FiAward 
} from 'react-icons/fi'

const WhyChooseUs = () => {
  const features = [
    { icon: <FiAward />, title: '15+ Years Excellence', description: 'Decades of proven expertise in UAE business setup and corporate advisory.' },
    { icon: <FiCheckCircle />, title: 'End-to-End Solutions', description: 'Complete business setup services from licensing to banking and beyond.' },
    { icon: <FiGlobe />, title: 'Global Network', description: 'Strategic partnerships across 30+ countries worldwide.' },
    { icon: <FiZap />, title: 'Fast Processing', description: 'Streamlined processes for quick company setup and approvals.' },
    { icon: <FiUsers />, title: 'Client-First Approach', description: 'Personalized strategies tailored to your unique business goals.' },
    { icon: <FiShield />, title: '100% Confidential', description: 'Your privacy and trust are our highest priority.' },
  ]

  return (
    <section className="py-24 bg-navy">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-roseGold-500 font-semibold tracking-wider uppercase text-sm">The Difference</span>
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-white mt-3">
            Why Choose Us
          </h2>
          <div className="w-16 h-px bg-roseGold-500 mx-auto mt-6"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex gap-6 py-8 ${index < features.length - 1 ? 'border-b border-white/10' : ''}`}
            >
              <div className="flex-shrink-0">
                <div className="text-roseGold-500 text-3xl">
                  {feature.icon}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-heading font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs