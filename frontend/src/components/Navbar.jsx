import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Men', path: '/men' },
  { name: 'Women', path: '/women' },
  { name: 'Kids', path: '/kids' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { totalItemsCount, toggleCart } = useCart();

  return (
    <nav className="sticky top-0 w-full z-50 py-5 bg-brand-dark border-b border-white/5 shadow-2xl">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center">
          
          {/* Logo (Typography) */}
          <Link to="/" className="shrink-0 flex items-center">
            <span className="font-serif font-bold text-2xl md:text-3xl tracking-wide text-white">
              Fashion Circle<span className="text-brand-highlight">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm tracking-wider uppercase transition-colors hover:text-brand-highlight ${isActive ? 'text-brand-highlight font-semibold' : 'text-gray-300'}`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Cart Icon Desktop */}
          <div className="hidden md:flex items-center">
            <button onClick={toggleCart} className="relative text-white hover:text-brand-highlight transition-colors flex items-center group">
              <div className="relative">
                <ShoppingBag size={24} />
                <AnimatePresence mode="wait">
                  {totalItemsCount > 0 && (
                    <motion.span
                      key={totalItemsCount}
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1.1, opacity: 1 }}
                      exit={{ scale: 0.5, opacity: 0 }}
                      className="absolute -top-3 -right-3 bg-red-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-lg border-2 border-brand-dark"
                    >
                      {totalItemsCount}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
              <span className="ml-4 text-xs font-bold tracking-widest uppercase group-hover:text-brand-highlight transition-colors">Cart</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-6">
            <button onClick={toggleCart} className="relative text-white hover:text-brand-highlight">
              <div className="relative">
                <ShoppingBag size={26} />
                <AnimatePresence mode="wait">
                  {totalItemsCount > 0 && (
                    <motion.span
                      key={totalItemsCount}
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1.1, opacity: 1 }}
                      exit={{ scale: 0.5, opacity: 0 }}
                      className="absolute -top-3 -right-3 bg-red-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-lg border-2 border-brand-dark"
                    >
                      {totalItemsCount}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </button>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="text-white hover:text-brand-highlight"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-black/95 flex flex-col pt-20 px-8 backdrop-blur-xl"
          >
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-6 right-8 text-gray-400 hover:text-white"
            >
              <X size={32} />
            </button>
            <div className="flex flex-col space-y-8 mt-12">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-3xl font-serif tracking-wide text-white hover:text-brand-highlight transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
