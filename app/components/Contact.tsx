// src/components/Contact.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaLinkedinIn, FaInstagram, FaFacebookF } from 'react-icons/fa';
import { toast  } from 'react-hot-toast';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  }); 
 const [isLoading, setIsLoading] = useState(false);
const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsLoading(true)


  const response = await fetch('https://amanah-corporate-advisory.vercel.app/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  const result = await response.json();

  if (result.success) {
    toast.success('Thank you for your message. We will contact you shortly.');
    setIsLoading(false);
    setIsSuccess(true);


    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    });
  } else {
    setIsLoading(false)
    toast.error('Failed to send message.');
  }
};

  const contactInfo = [
    { icon: <FaPhoneAlt />, text: '+971 50 432 1450', href: 'tel:+971 50 432 1450' },
    { icon: <FaEnvelope />, text: 'info@amanahadvisory.com', href: 'mailto:info@amanahadvisory.com' },
    { icon: <FaWhatsapp />, text: 'Chat on WhatsApp', href: 'https://wa.me/+971504321450' },
    { icon: <FaMapMarkerAlt />, text: 'Dubai World Trade Center', href: '#' },
  ];

  const services = ['Business Setup', 'Banking Solutions', 'Visa & Residency', 'Legal Services', 'IP Services', 'Corporate Advisory'];

  return (
    <section id="contact" className="section-padding bg-navy text-white relative">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-32 h-32">
          <div className="absolute top-0 left-0 w-16 h-0.5 bg-roseGold-500"></div>
          <div className="absolute top-0 left-0 w-0.5 h-16 bg-roseGold-500"></div>
        </div>
        <div className="absolute top-0 right-0 w-32 h-32">
          <div className="absolute top-0 right-0 w-16 h-0.5 bg-roseGold-500"></div>
          <div className="absolute top-0 right-0 w-0.5 h-16 bg-roseGold-500"></div>
        </div>
        <div className="absolute bottom-0 left-0 w-32 h-32">
          <div className="absolute bottom-0 left-0 w-16 h-0.5 bg-roseGold-500"></div>
          <div className="absolute bottom-0 left-0 w-0.5 h-16 bg-roseGold-500"></div>
        </div>
        <div className="absolute bottom-0 right-0 w-32 h-32">
          <div className="absolute bottom-0 right-0 w-16 h-0.5 bg-roseGold-500"></div>
          <div className="absolute bottom-0 right-0 w-0.5 h-16 bg-roseGold-500"></div>
        </div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-roseGold-500 font-semibold tracking-wide uppercase text-sm">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mt-2">
            Contact Us
          </h2>
          <div className="w-16 h-px bg-roseGold-500 mx-auto mt-4"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-heading font-bold text-white mb-6">Let's Discuss Your Business Goals</h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center gap-4 text-gray-300 hover:text-roseGold-500 transition-colors group"
                >
                  <div className="w-10 h-10 bg-roseGold-500/10 rounded-full flex items-center justify-center text-roseGold-500 group-hover:bg-roseGold-500 group-hover:text-white transition-all duration-300">
                    {info.icon}
                  </div>
                  <span className="text-lg">{info.text}</span>
                </a>
              ))}
            </div>

            <div>
              <h4 className="text-lg font-heading font-bold text-white mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-roseGold-500 hover:bg-roseGold-500 hover:text-white transition-all duration-300">
                  <FaLinkedinIn />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-roseGold-500 hover:bg-roseGold-500 hover:text-white transition-all duration-300">
                  <FaInstagram />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-roseGold-500 hover:bg-roseGold-500 hover:text-white transition-all duration-300">
                  <FaFacebookF />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
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
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-roseGold-500 transition-colors text-white placeholder:text-gray-400"
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-roseGold-500 transition-colors text-white placeholder:text-gray-400"
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
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-roseGold-500 transition-colors text-white placeholder:text-gray-400"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-roseGold-500 transition-colors text-white placeholder:text-gray-400"
                />
              </div>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-roseGold-500 transition-colors text-white placeholder:text-gray-400"
              >
                <option value="" className="text-darkText">Select Service Needed</option>
                {services.map((service, index) => (
                  <option key={index} value={service} className="text-darkText">{service}</option>
                ))}
              </select>
              <textarea
                name="message"
                placeholder="Your Message *"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-roseGold-500 transition-colors text-white placeholder:text-gray-400 resize-none"
              ></textarea>
            <button 
  type="submit" 
  className={`btn-primary w-full py-3 text-lg flex items-center justify-center gap-3 transition-all duration-300 ${
    isSuccess ? 'bg-green-500 hover:bg-green-600' : ''
  }`}
  disabled={isLoading || isSuccess}
>
  {isLoading ? (
    <>
      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      Sending...
    </>
  ) : isSuccess ? (
    <>
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
      </svg>
      Message Sent!
    </>
  ) : (
    'Request Consultation'
  )}
</button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;