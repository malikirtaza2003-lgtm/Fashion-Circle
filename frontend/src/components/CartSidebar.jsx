import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { X, Trash2, Plus, Minus, Tag, ShoppingBag } from 'lucide-react';

export const CartSidebar = () => {
  const { isCartOpen, setIsCartOpen, cartItems, updateQuantity, removeFromCart, cartTotalUSD, cartTotalPKR, calculateItemPrice, toggleCheckout } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/60 z-[105] backdrop-blur-md"
          />
          
          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[500px] bg-brand-dark z-[110] shadow-2xl flex flex-col border-l border-white/10"
          >
            <div className="flex justify-between items-center p-6 border-b border-white/10 bg-brand-light">
              <h2 className="text-2xl font-serif text-white tracking-wide">Your Shopping Cart</h2>
              <button onClick={() => setIsCartOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-gray-500 font-medium">
                  <ShoppingBag size={48} className="mb-4 opacity-50" />
                  Your bag is elegantly empty.
                </div>
              ) : (
                cartItems.map(item => {
                  const finalUsd = calculateItemPrice(item, 'USD') * item.quantity;
                  const finalPkr = calculateItemPrice(item, 'PKR') * item.quantity;

                  return (
                    <div key={item.id} className="relative flex gap-5 bg-brand-light p-4 rounded-sm border border-white/5 shadow-lg">
                      {item.isNew && (
                         <div className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider shadow z-10 flex items-center">
                           <Tag size={10} className="mr-1"/> 20% OFF
                         </div>
                      )}
                      
                      <div className="w-24 h-32 shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-sm brightness-90" />
                      </div>
                      
                      <div className="flex-1 flex flex-col justify-between py-1">
                        <div>
                          <h4 className="text-white font-medium text-[15px] leading-snug">{item.name}</h4>
                          <div className="mt-1.5 space-y-1">
                            {item.isNew ? (
                              <>
                                <p className="text-gray-500 text-xs line-through block font-medium">
                                  ${(item.priceUSD * item.quantity).toFixed(2)} <span className="mx-1">|</span> Rs {(item.pricePKR * item.quantity).toLocaleString()}
                                </p>
                                <p className="text-brand-highlight text-sm font-semibold select-all">
                                  ${finalUsd.toFixed(2)} <span className="mx-1 font-normal opacity-50 text-gray-300">|</span> Rs {finalPkr.toLocaleString()}
                                </p>
                              </>
                            ) : (
                              <p className="text-gray-300 text-sm font-medium">
                                ${finalUsd.toFixed(2)} <span className="mx-1 font-normal opacity-50 text-gray-500">|</span> Rs {finalPkr.toLocaleString()}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="flex justify-between items-end mt-4">
                          <div className="flex items-center space-x-3 bg-black/50 border border-white/10 px-2 py-1 rounded w-max">
                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="text-gray-400 hover:text-white transition-colors p-1"><Minus size={14}/></button>
                            <span className="text-sm font-medium w-6 text-center text-white">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="text-gray-400 hover:text-white transition-colors p-1"><Plus size={14}/></button>
                          </div>
                          <button onClick={() => removeFromCart(item.id)} className="text-red-500/80 hover:text-red-400 transition-colors bg-white/5 p-2 rounded-full">
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="p-8 border-t border-white/10 bg-brand-light">
                <div className="flex justify-between items-end mb-6 bg-brand-dark border border-white/5 p-4 rounded-sm">
                  <span className="text-gray-400 font-medium uppercase tracking-wide text-sm mb-1">Grand Total</span>
                  <div className="text-right">
                    <span className="block text-3xl font-serif text-white">${cartTotalUSD.toFixed(2)}</span>
                    <span className="block text-sm font-medium text-brand-highlight mt-1">Rs {cartTotalPKR.toLocaleString()}</span>
                  </div>
                </div>
                <button onClick={toggleCheckout} className="w-full bg-white text-black py-4 font-bold tracking-widest uppercase hover:bg-black hover:text-white border-2 border-white transition-all duration-300 rounded-sm shadow-xl">
                  Proceed to Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
