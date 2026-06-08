'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaQuoteLeft, FaStar } from 'react-icons/fa'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: 'Ahmed Al Mansouri',
      company: 'Al Mansouri Trading Group',
      review: 'Amanah Corporate Advisory provided exceptional guidance throughout our company setup. Their expertise in UAE regulations and banking solutions saved us months of effort.',
      rating: 5,
    },
    {
      name: 'Elena Petrova',
      company: 'EuroTech Solutions',
      review: 'The team at Amanah is professional, responsive, and truly cares about their clients. They helped us establish our presence in Dubai Free Zone seamlessly.',
      rating: 5,
    },
    {
      name: 'David Chen',
      company: 'Dragon Capital Partners',
      review: 'Outstanding service from start to finish. They handled everything from licensing to visa processing with utmost professionalism.',
      rating: 5,
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  return (
    <section className="py-24 bg-navy relative">
      {/* Large quote mark background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <FaQuoteLeft className="text-[30rem] text-white" />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="flex justify-center gap-1 mb-8">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <FaStar key={i} className="text-roseGold-500 text-2xl" />
                ))}
              </div>
              
              <p className="text-white text-2xl md:text-3xl leading-relaxed mb-8 font-light">
                "{testimonials[currentIndex].review}"
              </p>
              
              <div className="w-12 h-px bg-roseGold-500 mx-auto mb-6"></div>
              
              <h4 className="text-white text-xl font-heading font-bold">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-roseGold-500">
                {testimonials[currentIndex].company}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Simple dots navigation */}
          <div className="flex justify-center gap-2 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-px transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-8 bg-roseGold-500' 
                    : 'w-4 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials