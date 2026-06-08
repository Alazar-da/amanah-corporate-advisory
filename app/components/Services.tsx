'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FiBriefcase, FiCreditCard, FiUsers, FiAward,
  FiChevronRight
} from 'react-icons/fi'
import {FaGavel, FaTrademark} from 'react-icons/fa'

const Services = () => {
  const [activeService, setActiveService] = useState(0)

  const services = [
    { 
      icon: <FiBriefcase />, 
      title: 'Business Setup', 
      description: 'Complete company formation solutions tailored to your business needs across Mainland, Free Zone, and Offshore jurisdictions.',
      features: ['Mainland Companies', 'Free Zone Setup', 'Offshore Companies', 'Local Sponsorship']
    },
    { 
      icon: <FiCreditCard />, 
      title: 'Banking Solutions', 
      description: 'Strategic banking partnerships to ensure seamless financial operations and account setup for your business.',
      features: ['Personal Accounts', 'Corporate Accounts', 'Offshore Banking', 'Merchant Services']
    },
    { 
      icon: <FiUsers />, 
      title: 'Visa & Residency', 
      description: 'Comprehensive visa processing and residency solutions for entrepreneurs, investors, and families.',
      features: ['Golden Visa', 'Investor Visa', 'Family Sponsorship', 'Employment Visas']
    },
    { 
      icon: <FaGavel />, 
      title: 'Legal Services', 
      description: 'Expert legal guidance to ensure full regulatory compliance and documentation accuracy.',
      features: ['Document Attestation', 'Legal Notarization', 'Compliance', 'Contract Drafting']
    },
    { 
      icon: <FaTrademark />, 
      title: 'IP Services', 
      description: 'Protect your intellectual property and brand assets across multiple jurisdictions.',
      features: ['Trademark Registration', 'Patent Filing', 'Brand Protection', 'IP Portfolio Management']
    },
    { 
      icon: <FiAward />, 
      title: 'Corporate Advisory', 
      description: 'Strategic advisory services for business growth, market entry, and corporate structuring.',
      features: ['Strategic Planning', 'Mergers & Acquisitions', 'Market Entry', 'Risk Assessment']
    },
  ]

  return (
    <section id="services" className="py-24 bg-navy text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <span className="text-roseGold-500 font-semibold tracking-wider uppercase text-sm">Expertise</span>
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-gold mt-3">
            What We Do
          </h2>
          <div className="w-16 h-px bg-roseGold-500 mx-auto mt-6"></div>
        </motion.div>

        {/* Horizontal Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-1 mb-12">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => setActiveService(index)}
              className={`px-6 py-3 text-base font-medium transition-all duration-300 relative ${
                activeService === index 
                  ? 'text-roseGold-500' 
                  : 'text-white hover:text-gold'
              }`}
            >
              {service.title}
              {activeService === index && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-roseGold-500"
                  initial={false}
                  transition={{ duration: 0.3 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl mx-auto relative"
          >
            <div className="absolute inset-0 opacity-5">
  <svg className="absolute top-0 left-0 w-full h-full" preserveAspectRatio="none">
    <path d="M0,100 Q100,0 200,100 T400,100 T600,100 T800,100" stroke="#B76E79" strokeWidth="2" fill="none"/>
    <path d="M0,200 Q150,100 300,200 T600,200 T900,200" stroke="#B76E79" strokeWidth="2" fill="none"/>
    <path d="M0,300 Q200,200 400,300 T800,300" stroke="#B76E79" strokeWidth="2" fill="none"/>
  </svg>
</div>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Left Column - Icon and Description */}
              <div>
                <div className="text-roseGold-500 text-6xl mb-6">
                  {services[activeService].icon}
                </div>
                <h3 className="text-3xl font-heading font-bold text-gold mb-4">
                  {services[activeService].title}
                </h3>
                <p className="text-white text-base md:text-lg leading-relaxed mb-6">
                  {services[activeService].description}
                </p>
                <button className="text-roseGold-500 font-semibold inline-flex items-center gap-2 group">
                  Learn More 
                  <FiChevronRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Right Column - Features List */}
              <div className="bg-roseGold-500/10 rounded-lg p-8">
                <h4 className="text-xl font-heading font-semibold text-gold mb-6">
                  Key Services
                </h4>
                <ul className="space-y-4">
                  {services[activeService].features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-white">
                      <span className="text-roseGold-500 mt-1">•</span>
                      <span className="text-white">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Services