// src/components/Contact.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaLinkedinIn, FaInstagram, FaFacebookF } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message. We will contact you shortly.');
    setFormData({ name: '', company: '', email: '', phone: '', service: '', message: '' });
  };

  const contactInfo = [
    { icon: <FaPhoneAlt />, text: '+971 50 447 6610', href: 'tel:+971504476610' },
    { icon: <FaEnvelope />, text: 'info@amanahadvisory.com', href: 'mailto:info@amanahadvisory.com' },
    { icon: <FaWhatsapp />, text: 'Chat on WhatsApp', href: 'https://wa.me/971504476610' },
    { icon: <FaMapMarkerAlt />, text: 'Dubai World Trade Center', href: '#' },
  ];

  const services = ['Business Setup', 'Banking Solutions', 'Visa & Residency', 'Legal Services', 'IP Services', 'Corporate Advisory'];

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-roseGold-500 font-semibold tracking-wide uppercase text-sm">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mt-2">
            Contact Us
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-heading font-bold text-navy mb-6">Let's Discuss Your Business Goals</h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center gap-4 text-mutedText hover:text-roseGold-500 transition-colors group"
                >
                  <div className="w-10 h-10 bg-roseGold-500/10 rounded-full flex items-center justify-center text-roseGold-500 group-hover:bg-roseGold-500 group-hover:text-white transition-all duration-300">
                    {info.icon}
                  </div>
                  <span className="text-lg">{info.text}</span>
                </a>
              ))}
            </div>

            <div>
              <h4 className="text-lg font-heading font-bold text-navy mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-lightGray rounded-full flex items-center justify-center text-navy hover:bg-roseGold-500 hover:text-white transition-all duration-300">
                  <FaLinkedinIn />
                </a>
                <a href="#" className="w-10 h-10 bg-lightGray rounded-full flex items-center justify-center text-navy hover:bg-roseGold-500 hover:text-white transition-all duration-300">
                  <FaInstagram />
                </a>
                <a href="#" className="w-10 h-10 bg-lightGray rounded-full flex items-center justify-center text-navy hover:bg-roseGold-500 hover:text-white transition-all duration-300">
                  <FaFacebookF />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-roseGold-500 transition-colors"
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-roseGold-500 transition-colors"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-gold transition-colors"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-gold transition-colors"
                />
              </div>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-gold transition-colors text-mutedText"
              >
                <option value="">Select Service Needed</option>
                {services.map((service, index) => (
                  <option key={index} value={service}>{service}</option>
                ))}
              </select>
              <textarea
                name="message"
                placeholder="Your Message *"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-gold transition-colors resize-none"
              ></textarea>
              <button type="submit" className="btn-primary w-full py-3 text-lg">
                Request Consultation
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;