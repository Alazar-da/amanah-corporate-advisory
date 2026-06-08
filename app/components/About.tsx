// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const [readMore, setReadMore] = React.useState(false);

    const handleReadMore = () => {
      setReadMore(!readMore);
    }
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-roseGold-500 rounded-tl-2xl"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-roseGold-500 rounded-br-2xl"></div>
            <img
              src="/about1.jpg"
              alt="Corporate Meeting"
              className="rounded-2xl shadow-2xl w-full object-cover h-[500px]"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">
              <span className="text-roseGold-500 font-semibold tracking-wide uppercase text-sm">About Us</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mt-2">
                Strategic Partners in Business Growth
              </h2>
            </div>
            <p className="text-mutedText leading-relaxed mb-6 text-sm">
              Amanah Corporate Advisory is a strategic business setup and corporate advisory firm supporting clients in establishing and expanding businesses across the UAE and international markets. We provide tailored solutions designed to simplify complex regulatory processes and accelerate business growth.
            </p>
            {!readMore &&
            <button onClick={handleReadMore} className="text-roseGold-500 font-medium hover:text-roseGold-600 mb-6 text-sm italic">
              Read More
            </button>
}
{ readMore &&
            <p className="text-mutedText leading-relaxed mb-8 text-sm">
              With deep expertise in local regulations and international best practices, we bridge the gap between vision and execution, ensuring your business journey is seamless, compliant, and successful.
            </p>
}
            {readMore &&
            <button onClick={handleReadMore} className="text-roseGold-500 font-medium hover:text-roseGold-600 mb-6 text-sm italic">
             Show Less
            </button>
}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <div className="text-3xl font-bold text-roseGold-500">500+</div>
                <div className="text-darkText font-medium">Businesses Established</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-roseGold-500">30+</div>
                <div className="text-darkText font-medium">Countries Served</div>
              </div>
            </div>
            <button className="btn-secondary">Learn More About Us</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;