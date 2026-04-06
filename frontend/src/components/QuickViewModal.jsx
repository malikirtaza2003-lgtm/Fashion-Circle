import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { X, ShoppingBag, Tag } from 'lucide-react';

export const QuickViewModal = ({ product, isOpen, onClose }) => {
  const { addToCart } = useCart();

  if (!product) return null;

  const discountedUSD = product.isNew ? (product.priceUSD * 0.8) : product.priceUSD;
  const discountedPKR = product.isNew ? (product.pricePKR * 0.8) : product.pricePKR;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 z-[90] backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-brand-dark w-full max-w-4xl rounded-lg overflow-hidden flex flex-col md:flex-row shadow-2xl relative border border-white/10 max-h-[90vh] overflow-y-auto md:overflow-visible"
            >
              <button 
                onClick={onClose} 
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-brand-highlight transition-colors z-10"
              >
                <X size={20} />
              </button>

              {/* Image Section */}
              <div className="w-full md:w-1/2 h-64 md:h-[500px] relative">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                {product.isNew && (
                  <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1.5 tracking-wider uppercase flex items-center gap-1 shadow-lg rounded-sm">
                    <Tag size={12} /> 20% OFF
                  </div>
                )}
              </div>

              {/* Info Section */}
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <span className="text-brand-highlight text-sm tracking-widest uppercase mb-2 block">{product.category}</span>
                <h3 className="text-3xl font-serif text-white mb-4">{product.name}</h3>
                
                {product.isNew ? (
                  <div className="mb-6 space-y-1">
                    <div className="flex items-center space-x-3">
                      <span className="text-lg text-gray-500 line-through">${product.priceUSD}</span>
                      <span className="text-gray-600">|</span>
                      <span className="text-gray-500 line-through">Rs {product.pricePKR.toLocaleString()}</span>
                    </div>
                    <div className="flex items-end space-x-4">
                      <span className="text-2xl font-semibold text-brand-highlight">${discountedUSD.toFixed(0)}</span>
                      <span className="text-green-400 text-lg pb-0.5">| Rs {discountedPKR.toLocaleString()}</span>
                    </div>
                    <span className="inline-block text-xs text-green-400 bg-green-400/10 border border-green-400/20 px-2 py-0.5 rounded mt-1 font-medium">You save ${(product.priceUSD * 0.2).toFixed(0)} / Rs {(product.pricePKR * 0.2).toLocaleString()}</span>
                  </div>
                ) : (
                  <div className="flex items-end space-x-4 mb-6">
                    <span className="text-2xl font-medium text-white">${product.priceUSD}</span>
                    <span className="text-gray-400 text-lg pb-0.5">| Rs {product.pricePKR.toLocaleString()}</span>
                  </div>
                )}

                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  Experience true luxury with this highly sought-after piece from our exclusive {product.category} collection. Designed for absolute comfort without compromising on elite aesthetic quality.
                </p>

                <button 
                  onClick={() => {
                    addToCart(product);
                    setTimeout(onClose, 100);
                  }}
                  className="w-full flex items-center justify-center bg-white text-black space-x-2 py-4 font-bold tracking-wide hover:bg-black hover:text-white border border-white transition-all duration-300 rounded-sm"
                >
                  <ShoppingBag size={20} />
                  <span>{product.isNew ? `Add to Cart — $${discountedUSD.toFixed(0)}` : 'Add to Cart'}</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
