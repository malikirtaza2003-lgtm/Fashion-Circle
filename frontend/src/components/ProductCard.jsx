import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { QuickViewModal } from './QuickViewModal';
import { Tag } from 'lucide-react';

export const ProductCard = ({ product, index }) => {
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  const discountedUSD = product.isNew ? (product.priceUSD * 0.8) : product.priceUSD;
  const discountedPKR = product.isNew ? (product.pricePKR * 0.8) : product.pricePKR;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
        className="group cursor-pointer"
        onClick={() => setIsQuickViewOpen(true)}
      >
        <div className="relative overflow-hidden aspect-[3/4] bg-brand-light mb-4 rounded-sm">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="bg-white text-black px-8 py-3 text-sm font-medium shadow-lg hover:bg-black hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300">
              Select Custom View
            </span>
          </div>
          {product.isNew && (
            <div className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-bold px-3 py-1.5 tracking-wider uppercase flex items-center gap-1 shadow-lg rounded-sm">
              <Tag size={10} /> 20% OFF
            </div>
          )}
        </div>

        <div className="text-center px-1">
          <h4 className="font-serif text-[13px] sm:text-lg text-white mb-1 group-hover:text-brand-highlight transition-colors truncate">{product.name}</h4>
          {product.isNew ? (
            <div className="space-y-0.5">
              <div className="flex justify-center items-center space-x-2 text-[9px] sm:text-xs">
                <span className="text-gray-500 line-through">${product.priceUSD}</span>
                <span className="text-gray-600">|</span>
                <span className="text-gray-500 line-through">Rs {product.pricePKR.toLocaleString()}</span>
              </div>
              <div className="flex justify-center items-center space-x-2 text-[10px] sm:text-sm">
                <span className="font-semibold text-brand-highlight">${discountedUSD.toFixed(0)}</span>
                <span className="text-gray-500">|</span>
                <span className="text-green-400 font-medium">Rs {discountedPKR.toLocaleString()}</span>
              </div>
            </div>
          ) : (
            <div className="flex justify-center items-center space-x-2 text-[10px] sm:text-sm">
              <span className="font-medium text-brand-highlight">${product.priceUSD}</span>
              <span className="text-gray-500">|</span>
              <span className="text-gray-400">Rs {product.pricePKR.toLocaleString()}</span>
            </div>
          )}
        </div>
      </motion.div>

      <QuickViewModal 
        isOpen={isQuickViewOpen} 
        onClose={() => setIsQuickViewOpen(false)} 
        product={product} 
      />
    </>
  );
};
