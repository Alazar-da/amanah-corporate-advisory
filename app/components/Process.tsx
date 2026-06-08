'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FiMessageCircle, FiBriefcase, FiFileText, FiUsers, FiCreditCard, FiLifeBuoy } from 'react-icons/fi'

const Process = () => {
  const steps = [
    { icon: <FiMessageCircle />, title: 'Free Consultation', description: 'Discuss your business goals and requirements with our experts' },
    { icon: <FiBriefcase />, title: 'Business Structure Selection', description: 'Choose optimal jurisdiction and legal structure for your needs' },
    { icon: <FiFileText />, title: 'Licensing & Registration', description: 'Complete documentation and obtain all necessary licenses' },
    { icon: <FiUsers />, title: 'Visa Processing', description: 'Process all necessary visas and permits for you and your team' },
    { icon: <FiCreditCard />, title: 'Banking Setup', description: 'Open corporate and personal bank accounts seamlessly' },
    { icon: <FiLifeBuoy />, title: 'Ongoing Support', description: 'Continuous advisory and compliance support for your business' },
  ]

  return (
    <section className="py-24 bg-navy text-white">

      <div className="container-custom relative">
        <div className="absolute inset-0 opacity-5">
  <div className="absolute top-0 left-0 w-72 h-72 bg-roseGold-500 rounded-full filter blur-3xl"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-roseGold-500 rounded-full filter blur-3xl"></div>
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-roseGold-500 rounded-full filter blur-2xl"></div>
</div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <span className="text-roseGold-500 font-semibold tracking-wider uppercase text-sm">Simple Process</span>
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-gold mt-3">
            How We Work
          </h2>
          <div className="w-16 h-px bg-roseGold-500 mx-auto mt-6"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative flex gap-6 pb-12 last:pb-0"
            >
              {/* Vertical Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-7 top-14 bottom-0 w-px bg-gray-200"></div>
              )}
              
              {/* Step Number */}
              <div className="flex-shrink-0 w-14 h-14 rounded-full border-2 border-roseGold-500 flex items-center justify-center bg-white z-10">
                <span className="text-roseGold-500 font-bold text-xl">{index + 1}</span>
              </div>
              
              {/* Content */}
              <div>
                <div className="text-roseGold-500 text-2xl mb-2">{step.icon}</div>
                <h3 className="text-xl font-heading font-bold text-gold mb-2">{step.title}</h3>
                <p className=" leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process