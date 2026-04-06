import React from 'react';
import { motion } from 'framer-motion';

export const SectionHeading = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        className="text-brand-highlight text-sm font-semibold tracking-[0.2em] uppercase mb-3"
      >
        {subtitle}
      </motion.p>
      <motion.h2
        className="text-2xl md:text-4xl font-serif text-white"
      >
        {title}
      </motion.h2>
    </div>
  );
};
