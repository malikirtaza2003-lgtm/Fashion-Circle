import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand & Text */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-serif font-bold mb-4">
              Fashion Circle<span className="text-brand-highlight">.</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Combining style, comfort, and affordability since 2015. Elevate your daily look with our exclusive, luxury collections.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/men" className="hover:text-brand-highlight transition-colors">Men's Collection</Link></li>
              <li><Link to="/women" className="hover:text-brand-highlight transition-colors">Women's Collection</Link></li>
              <li><Link to="/kids" className="hover:text-brand-highlight transition-colors">Kids' Collection</Link></li>
              <li><Link to="/about" className="hover:text-brand-highlight transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-medium mb-4">Contact Info</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-center space-x-3">
                <MapPin size={16} className="text-brand-highlight" />
                <span>Lahore, Pakistan</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={16} className="text-brand-highlight" />
                <span>03207569959</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={16} className="text-brand-highlight" />
                <span>fashioncircle@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-lg font-medium mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {/* Instagram */}
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              {/* Facebook */}
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              {/* X (Twitter) */}
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Fashion Circle. All rights reserved.</p>
          <p className="mt-4 md:mt-0 font-medium text-gray-400">Powered by Irtaza</p>
        </div>
      </div>
    </footer>
  );
};
