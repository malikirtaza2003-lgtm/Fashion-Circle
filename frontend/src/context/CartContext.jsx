import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(prev => 
      prev.map(item => item.id === id ? { ...item, quantity: newQuantity } : item)
    );
  };

  const toggleCart = () => setIsCartOpen(!isCartOpen);
  const toggleCheckout = () => {
    setIsCartOpen(false); // Close cart when opening checkout
    setIsCheckoutOpen(true);
  };

  const calculateItemPrice = (item, currency = 'USD') => {
    const basePrice = currency === 'USD' ? item.priceUSD : item.pricePKR;
    const discountMultiplier = item.isNew ? 0.8 : 1; // 20% Discount for new arrivals
    return basePrice * discountMultiplier;
  };

  const cartTotalUSD = cartItems.reduce((acc, item) => acc + (calculateItemPrice(item, 'USD') * item.quantity), 0);
  const cartTotalPKR = cartItems.reduce((acc, item) => acc + (calculateItemPrice(item, 'PKR') * item.quantity), 0);
  const totalItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider value={{
      cartItems, addToCart, removeFromCart, updateQuantity,
      isCartOpen, toggleCart, setIsCartOpen,
      isCheckoutOpen, setIsCheckoutOpen, toggleCheckout,
      cartTotalUSD, cartTotalPKR, totalItemsCount,
      calculateItemPrice
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
