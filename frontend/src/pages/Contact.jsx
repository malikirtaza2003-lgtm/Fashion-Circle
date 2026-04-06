import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading subtitle="Get In Touch" title="Contact Us" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">
        
        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-brand-light border border-white/5 text-white p-8 sm:p-12 lg:p-16 flex flex-col justify-center shadow-2xl rounded-sm"
        >
          <h3 className="text-2xl sm:text-3xl font-serif mb-8 text-brand-highlight text-center lg:text-left">Reach Out Directly</h3>
          
          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <Mail className="text-brand-highlight mt-1" size={24} />
              <div>
                <h4 className="text-xl font-medium mb-1">Email Queries</h4>
                <p className="text-gray-400">fashioncircle@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <Phone className="text-brand-highlight mt-1" size={24} />
              <div>
                <h4 className="text-xl font-medium mb-1">Phone Support</h4>
                <p className="text-gray-400">03207569959</p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <MapPin className="text-brand-highlight mt-1" size={24} />
              <div>
                <h4 className="text-xl font-medium mb-1">Store Location</h4>
                <p className="text-gray-400">Lahore, Pakistan<br />Open Mon-Sat: 10AM - 9PM</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-col justify-center"
        >
          <h3 className="text-2xl font-serif text-white mb-6">Send us a Message</h3>
          {submitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/5 border border-brand-highlight/20 p-8 rounded-sm text-center"
            >
              <h4 className="text-2xl font-serif text-brand-highlight mb-4">Message Received</h4>
              <p className="text-gray-400">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-6 text-sm text-white underline hover:text-brand-highlight transition-colors"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">First Name</label>
                  <input required type="text" className="w-full border-b border-white/20 py-2 bg-transparent text-white focus:outline-none focus:border-brand-highlight transition-colors placeholder-white/10" placeholder="" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Last Name</label>
                  <input required type="text" className="w-full border-b border-white/20 py-2 bg-transparent text-white focus:outline-none focus:border-brand-highlight transition-colors placeholder-white/10" placeholder="" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                <input required type="email" className="w-full border-b border-white/20 py-2 bg-transparent text-white focus:outline-none focus:border-brand-highlight transition-colors placeholder-white/10" placeholder="" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea required rows="4" className="w-full border-b border-white/20 py-2 bg-transparent text-white focus:outline-none focus:border-brand-highlight transition-colors resize-none placeholder-white/10" placeholder=""></textarea>
              </div>
              <button type="submit" className="w-full bg-white text-black py-4 font-bold tracking-widest uppercase hover:bg-black hover:text-white border-2 border-white transition-all duration-300 rounded-sm shadow-xl">
                Submit Form
              </button>
            </form>
          )}
        </motion.div>

      </div>
    </div>
  );
};

export default Contact;
