'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaLinkedinIn, FaTwitter, FaEnvelope } from 'react-icons/fa'

const Team = () => {
  const teamMembers = [
    /* {
      name: 'Sophia Abdella',
      role: 'Founder & Senior Business Advisor',
      description: 'Strategic advisor specializing in business setup, corporate structuring, and international expansion with over 15 years of experience in UAE markets.',
      image: '/Sophia.jpg',
      expertise: ['Business Strategy', 'Corporate Law', 'International Expansion'],
    }, */
    {
      name: 'Hindiya Khelil',
      role: 'Marketing Specialist',
      description: 'Focused on brand development, client engagement, and business growth strategies for market penetration and brand excellence.',
      image: '/Hindiya.jpg',
      expertise: ['Brand Strategy', 'Digital Marketing', 'Client Relations'],
    },
    {
      name: 'Imran Hayredin',
      role: 'Chief Technology Officer',
      description: 'Leading digital systems, automation, and technology-driven business solutions for operational excellence.',
      image: '/Imran.jpg',
      expertise: ['Digital Transformation', 'AI Solutions', 'System Architecture'],
    },
  ]

  return (
    <section id="team" className="py-24 bg-navy text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-roseGold-500 font-semibold tracking-wider uppercase text-sm">Leadership</span>
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-gold mt-3">
            Meet the Minds
          </h2>
          <div className="w-16 h-px bg-roseGold-500 mx-auto mt-6"></div>
        </motion.div>

        {/* Full-width horizontal layout */}
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 mb-24 last:mb-0 items-center border-b border-gray-100 pb-24 last:border-0 relative`}
          >
            <div className="absolute inset-0 opacity-5">
  <div className="absolute top-10 left-10 w-2 h-2 rounded-full bg-roseGold-500"></div>
  <div className="absolute top-10 right-20 w-3 h-3 rounded-full bg-roseGold-500"></div>
  <div className="absolute bottom-20 left-1/4 w-2 h-2 rounded-full bg-roseGold-500"></div>
  <div className="absolute bottom-32 right-32 w-4 h-4 rounded-full bg-roseGold-500"></div>
  <div className="absolute top-1/3 right-1/3 w-2 h-2 rounded-full bg-roseGold-500"></div>
  <div className="absolute bottom-1/2 left-1/2 w-3 h-3 rounded-full bg-roseGold-500"></div>
  <div className="absolute top-2/3 left-10 w-2 h-2 rounded-full bg-roseGold-500"></div>
  <div className="absolute top-20 right-1/2 w-1 h-1 rounded-full bg-roseGold-500"></div>
  <div className="absolute bottom-10 left-10 w-2 h-2 rounded-full bg-roseGold-500"></div>
  <div className="absolute top-1/2 right-10 w-3 h-3 rounded-full bg-roseGold-500"></div>
</div>
            {/* Image Section - Full bleed style */}
            <div className="lg:w-1/2 relative">
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[500px] object-cover lg:object-contain grayscale-0 transition-all duration-700"
                  loading="lazy"
                />
                {/* Overlay line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-roseGold-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
              </div>
            </div>

            {/* Content Section - Editorial style */}
            <div className="lg:w-1/2 space-y-6 w-full items-center">
              <div>
                <h3 className="text-4xl font-heading font-bold text-gold mb-2">
                  {member.name}
                </h3>
                <p className="text-roseGold-500 text-base md:text-lg font-semibold ">
                  {member.role}
                </p>
              </div>
              
              <div className="w-12 h-px bg-roseGold-500"></div>
              
              <p className="text-white text-sm md:text-base leading-relaxed md:w-96">
                {member.description}
              </p>
              
              {/* Expertise as inline badges */}
              <div className="flex flex-wrap gap-3 pt-4">
                {member.expertise.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="text-sm text-gold border-b border-roseGold-500"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              {/* Social links as simple icons */}
              <div className="flex gap-4 pt-6">
                <a href="#" className="text-gold hover:text-roseGold-500 transition-colors">
                  <FaLinkedinIn size={18} />
                </a>
                <a href="#" className="text-gold hover:text-roseGold-500 transition-colors">
                  <FaTwitter size={18} />
                </a>
                <a href="#" className="text-gold hover:text-roseGold-500 transition-colors">
                  <FaEnvelope size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Team