// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Services', 'Locations', 'Industries', 'Team', 'Contact'];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? 'bg-white shadow-lg py-1' : 'bg-transparent py-5'
        }`}
      >
        <div className="container-custom flex justify-between items-center">
      <div className="flex items-center">
<img
  src={isScrolled ? "/logoDark1.jpg" : "/logo3.jpg"}
  alt="Amanah Corporate Advisory"
  width={90}
  height={45}
  className="object-contain"
/>
</div>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className={`font-medium transition-all duration-300 hover:text-roseGold-500 ${
                  isScrolled ? 'text-navy hover:text-roseGold-500' : 'text-white hover:text-roseGold-500'
                }`}
              >
                {link}
              </a>
            ))}
            <a href="#contact" className="btn-primary">Book Consultation</a>
          </div>

          <button onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden text-2xl">
            {isScrolled ? <FiMenu className="text-navy" /> : <FiMenu className="text-white" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black z-50 lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed right-0 top-0 h-full w-80 bg-white shadow-2xl z-50 lg:hidden"
            >
              <div className="p-6">
                <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-4 right-4 text-2xl text-roseGold-500 hover:text-roseGold-700 transition-colors">
                  <FiX />
                </button>
                <div className="mt-12 flex flex-col space-y-6">
                  {navLinks.map((link) => (
                    <a
                      key={link}
                      href={`#${link.toLowerCase()}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-darkText font-medium text-lg hover:text-roseGold-500 transition-colors"
                    >
                      {link}
                    </a>
                  ))}
                  <a href="#contact"  onClick={() => setIsMobileMenuOpen(false)} className="btn-primary w-full text-center">Book Consultation</a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;