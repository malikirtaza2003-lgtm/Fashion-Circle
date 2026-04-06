import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { X, CreditCard, ShieldCheck } from 'lucide-react';

export const CheckoutModal = () => {
  const { isCheckoutOpen, setIsCheckoutOpen, cartTotalUSD, cartTotalPKR } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setIsCheckoutOpen(false);
      }, 3000); 
    }, 2000);
  };

  if (!isCheckoutOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 z-[100] backdrop-blur-md flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          className="bg-brand-dark border border-white/10 w-full max-w-[420px] rounded-md shadow-2xl relative max-h-[90vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="bg-brand-light border-b border-white/5 p-4 sm:p-5 flex justify-between items-center relative">
            <h2 className="text-xl sm:text-2xl font-serif text-white tracking-wide flex items-center">
              Secure Checkout <ShieldCheck className="ml-2 text-green-400" size={20} />
            </h2>
            {!isProcessing && !isSuccess && (
               <button onClick={() => setIsCheckoutOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                  <X size={20} />
               </button>
            )}
          </div>

          <div className="p-5 sm:p-6">
            {isSuccess ? (
              <div className="text-center py-12">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring' }} className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShieldCheck size={40} className="text-green-500"/>
                </motion.div>
                <h3 className="text-2xl font-serif text-white mb-2">Payment Initialized!</h3>
                <p className="text-sm text-gray-400">Your premium order has been processed correctly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Total Summary */}
                <div className="bg-brand-light p-4 rounded-sm border border-white/5 flex justify-between items-center">
                  <span className="text-sm text-gray-400 font-medium">Sum Total</span>
                  <div className="text-right">
                    <span className="block text-xl font-bold text-white">${cartTotalUSD.toFixed(2)}</span>
                    <span className="block text-xs text-brand-highlight mt-1 uppercase tracking-wide">Rs {cartTotalPKR.toLocaleString()}</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-white font-medium mb-3 flex items-center text-sm"><CreditCard size={16} className="mr-2 text-brand-highlight"/> Card Information</h4>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-[10px] font-semibold text-gray-500 mb-1 uppercase tracking-wider">Cardholder Name</label>
                      <input required type="text" className="w-full text-sm bg-brand-dark border border-white/10 rounded-sm py-2.5 px-3 text-white focus:outline-none focus:border-brand-highlight transition-colors" placeholder="Name on card" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-semibold text-gray-500 mb-1 uppercase tracking-wider">Card Number</label>
                      <div className="relative">
                        <input required type="text" maxLength="19" className="w-full text-sm bg-brand-dark border border-white/10 rounded-sm py-2.5 px-3 text-white focus:outline-none focus:border-brand-highlight transition-colors font-mono tracking-widest" placeholder="XXXX XXXX XXXX XXXX" />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex space-x-2 pointer-events-none">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-4 opacity-70" alt="MC"/>
                          <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-4 opacity-70" alt="Visa"/>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-semibold text-gray-500 mb-1 uppercase tracking-wider">Expiry Date</label>
                        <input required type="text" maxLength="5" className="w-full text-sm bg-brand-dark border border-white/10 rounded-sm py-2.5 px-3 text-white focus:outline-none focus:border-brand-highlight transition-colors" placeholder="MM/YY" />
                      </div>
                      <div>
                        <label className="block text-[10px] font-semibold text-gray-500 mb-1 uppercase tracking-wider">CVC</label>
                        <input required type="password" maxLength="4" className="w-full text-sm bg-brand-dark border border-white/10 rounded-sm py-2.5 px-3 text-white focus:outline-none focus:border-brand-highlight transition-colors" placeholder="123" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button type="submit" disabled={isProcessing} className="w-full bg-white text-black py-4 text-sm font-bold tracking-widest uppercase hover:bg-black hover:text-white border-2 border-white transition-all duration-300 rounded-sm shadow-md">
                    {isProcessing ? 'Processing...' : `Pay $${cartTotalUSD.toFixed(2)}`}
                  </button>
                  <p className="text-[10px] text-gray-600 text-center mt-3 uppercase tracking-wider">256-bit SSL encrypted connection</p>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
