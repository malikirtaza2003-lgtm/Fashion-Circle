import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="pt-24 sm:pt-32 pb-24 max-w-5xl mx-auto px-6 sm:px-12 lg:px-8">
      <div className="text-center">
        <SectionHeading subtitle="About Us" title="Our Legacy of Elegance" />
      </div>
      
      <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="aspect-[4/5] bg-brand-light border border-white/5 rounded-sm overflow-hidden"
        >
          <img 
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1000&auto=format&fit=crop" 
            alt="Store Interior"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.4, delay: 0.1 }}
        >
          <p className="text-lg text-gray-400 leading-relaxed mb-6">
            Fashion Circle has been serving in Pakistan since 2015, delivering high-quality fashion products for Men, Women, and Kids.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed mb-6">
            Our mission is to combine style, comfort, and affordability. We believe that true luxury is found in the perfect balance of premium craftsmanship, timeless design, and modern sensibility. Every piece curated for our collections represents a dedication to that philosophy.
          </p>
          <div className="border-l-2 border-brand-highlight pl-6 py-2 my-8 italic text-gray-300 font-serif text-xl">
            "Elegance is the only beauty that never fades."
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
