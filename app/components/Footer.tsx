// src/components/Footer.jsx
import Image from 'next/image';
import React from 'react';
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const quickLinks = ['Home', 'About', 'Services', 'Locations', 'Team', 'Contact'];
  const services = ['Business Setup', 'Banking Solutions', 'Visa & Residency', 'Legal Services', 'IP Services'];

  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h2 className="flex gap-2 text-2xl font-heading font-bold mb-4 items-center justify-start text-gold">
                           <Image 
                src="/logo3.png" 
                alt="Amanah Corporate Advisory" 
                width={90} 
                height={45} 
                className="object-contain"
                priority
              />

              AMANAH<span className="text-roseGold-500">.</span>
            </h2>
            <p className="text-gray-400 mb-4">
              Your trusted partner for business setup and corporate advisory services in the UAE and international markets.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-roseGold-500 transition-colors">
                <FaLinkedinIn size={14} />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-roseGold-500 transition-colors">
                <FaInstagram size={14} />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-roseGold-500 transition-colors">
                <FaFacebookF size={14} />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-roseGold-500 transition-colors">
                <FaTwitter size={14} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-roseGold-500 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-roseGold-500 transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-gray-400">
              <li>Dubai World Trade Center, UAE</li>
              <li>+971 50 447 6610</li>
              <li>info@amanahadvisory.com</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
  <p>
    &copy; 2026 Amanah Corporate Advisory. All Rights Reserved. | 
    Developed by{' '}
    <a 
      href="https://www.minatechnologies.com/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-roseGold-500 hover:text-roseGold-400 transition-colors duration-300 hover:underline"
    >
      Mina Technologies
    </a>
  </p>
</div>
      </div>
    </footer>
  );
};

export default Footer;