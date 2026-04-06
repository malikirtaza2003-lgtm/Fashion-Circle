import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CartProvider } from './context/CartContext';
import { CartSidebar } from './components/CartSidebar';
import { CheckoutModal } from './components/CheckoutModal';

import Home from './pages/Home';
import Men from './pages/Men';
import Women from './pages/Women';
import Kids from './pages/Kids';
import Summer from './pages/Summer';
import Winter from './pages/Winter';
import About from './pages/About';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <CartProvider>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-transparent">
        <Navbar />
        <CartSidebar />
        <CheckoutModal />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/men" element={<Men />} />
            <Route path="/women" element={<Women />} />
            <Route path="/kids" element={<Kids />} />
            <Route path="/summer" element={<Summer />} />
            <Route path="/winter" element={<Winter />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
