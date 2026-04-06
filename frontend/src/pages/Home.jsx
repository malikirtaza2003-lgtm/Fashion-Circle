import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollControls, Preload } from '@react-three/drei';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { ProductCard } from '../components/ProductCard';
import { products, collections } from '../data';
import { Scene } from '../canvas/Scene';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  const newArrivals = products.filter(p => p.isNew);
  const menProducts = products.filter(p => p.category === 'Men').slice(0, 2);
  const womenProducts = products.filter(p => p.category === 'Women').slice(0, 2);

  return (
    <div className="w-full">
      {/* Hero Section - Split Layout */}
      <section className="relative min-h-screen lg:h-screen flex flex-col lg:flex-row items-center overflow-hidden bg-brand-dark">
        {/* Background 3D Canvas (Subtle Overlay) */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
          <Canvas shadows camera={{ position: [0, 0, 10], fov: 35 }}>
            <Suspense fallback={null}>
              <Scene />
              <Preload all />
            </Suspense>
          </Canvas>
        </div>

        {/* TOP/LEFT Side: Content & 3 Buttons */}
        <div className="relative z-10 w-full lg:w-1/2 py-20 lg:py-0 flex flex-col justify-center px-6 sm:px-12 lg:px-20 order-1 lg:order-1">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block text-brand-highlight font-black tracking-[0.4em] uppercase mb-4 text-[10px] md:text-xs border-l-2 border-brand-highlight pl-4">
              Fashion Circle &mdash; Premium Clothier
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-[1.1] drop-shadow-2xl">
              Elegance <br /> <span className="text-brand-highlight/80 italic">Redefined.</span>
            </h1>
            <p className="text-gray-400 text-sm md:text-lg max-w-md mb-8 font-light leading-relaxed">
              Explore our exclusive 2026 collection for Men, Women, and Kids. Crafting a legacy of timeless luxury.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 pointer-events-auto">
              <Link to="/men" className="bg-white text-black px-8 py-3.5 text-xs font-bold tracking-[0.2em] uppercase hover:bg-brand-highlight transition-all duration-300 rounded-sm shadow-2xl flex items-center justify-center gap-2 group whitespace-nowrap">
                <span>Explore Men</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/women" className="bg-white text-black px-8 py-3.5 text-xs font-bold tracking-[0.2em] uppercase hover:bg-brand-highlight transition-all duration-300 rounded-sm shadow-2xl flex items-center justify-center gap-2 group whitespace-nowrap">
                <span>Explore Women</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/kids" className="bg-white text-black px-8 py-3.5 text-xs font-bold tracking-[0.2em] uppercase hover:bg-brand-highlight transition-all duration-300 rounded-sm shadow-2xl flex items-center justify-center gap-2 group whitespace-nowrap">
                <span>Explore Kids</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM/RIGHT Side: High-End Fashion Photography Grid (3 Categories) */}
        <div className="relative z-10 w-full lg:w-1/2 h-[35vh] sm:h-[45vh] lg:h-full flex flex-row overflow-hidden group order-2 lg:order-2">
          {/* Men Category Frame */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1 h-full relative overflow-hidden group/item cursor-pointer border-r border-white/5"
          >
            <img 
              src="https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Menswear" 
              className="w-full h-full object-cover grayscale brightness-50 group-hover/item:brightness-100 group-hover/item:scale-110 transition-all duration-1000"
            />
            <div className="absolute inset-x-0 bottom-0 py-4 bg-black/60 lg:opacity-0 group-hover/item:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white text-[10px] md:text-sm font-serif italic border-b border-white pb-0.5 tracking-wider">Mens</span>
            </div>
          </motion.div>

          {/* Women Category Frame */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex-1 h-full relative overflow-hidden group/item cursor-pointer border-r border-white/5"
          >
            <img 
              src="https://images.pexels.com/photos/3310695/pexels-photo-3310695.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Womenswear" 
              className="w-full h-full object-cover grayscale brightness-50 group-hover/item:brightness-100 group-hover/item:scale-110 transition-all duration-1000"
            />
            <div className="absolute inset-x-0 bottom-0 py-4 bg-black/60 lg:opacity-0 group-hover/item:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white text-[10px] md:text-sm font-serif italic border-b border-white pb-0.5 tracking-wider">Womens</span>
            </div>
          </motion.div>

          {/* Kids Category Frame */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex-1 h-full relative overflow-hidden group/item cursor-pointer"
          >
            <img 
              src="https://images.pexels.com/photos/1104007/pexels-photo-1104007.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Kids' Collection" 
              className="w-full h-full object-cover grayscale brightness-50 group-hover/item:brightness-100 group-hover/item:scale-110 transition-all duration-1000"
            />
            <div className="absolute inset-x-0 bottom-0 py-4 bg-black/60 lg:opacity-0 group-hover/item:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white text-[10px] md:text-sm font-serif italic border-b border-white pb-0.5 tracking-wider">Kids</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured / New Arrivals */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-brand-light/30 backdrop-blur-sm relative z-20 border-t border-white/5 shadow-2xl">
        <SectionHeading subtitle="Discover" title="New Arrivals" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {newArrivals.slice(0, 4).map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </section>

      {/* Categories Split Viewer */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-transparent relative z-20 border-t border-white/5 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="flex justify-between items-end mb-8">
              <SectionHeading subtitle="Menswear" title="Modern Gentlemen" />
              <Link to="/men" className="text-sm font-medium hover:text-brand-highlight flex items-center mb-12 text-gray-300">
                View All <ArrowRight size={14} className="ml-1" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4 lg:gap-6 w-full">
              {menProducts.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
          <div>
            <div className="flex justify-between items-end mb-8">
              <SectionHeading subtitle="Womenswear" title="Timeless Grace" />
              <Link to="/women" className="text-sm font-medium hover:text-brand-highlight flex items-center mb-12 text-gray-300">
                View All <ArrowRight size={14} className="ml-1" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4 lg:gap-6 w-full">
              {womenProducts.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Collections Segment */}
      <section className="py-24 bg-brand-dark/40 backdrop-blur-md relative z-20 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle="Lookbook" title="Seasonal Collections" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {collections.map((col, idx) => (
              <motion.div 
                key={col.id} 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group relative h-96 overflow-hidden cursor-pointer rounded-sm"
              >
                <Link to={col.link} className="block w-full h-full">
                  <img src={col.image} alt={col.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-4xl font-serif text-white tracking-wide drop-shadow-xl">{col.title}</h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-24 px-4 relative z-20 bg-transparent text-white text-center">
        <div className="max-w-3xl mx-auto">
          <SectionHeading subtitle="Our Story" title="The Fashion Circle" />
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-lg md:text-xl text-gray-400 font-light leading-relaxed mt-8"
          >
            Fashion Circle has been serving in Pakistan since 2015, delivering high-quality fashion products for Men, Women, and Kids. Our mission is to combine style, comfort, and affordability to provide you a truly premium experience.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <Link to="/about" className="inline-block mt-8 border border-white/20 text-white px-8 py-3 hover:bg-white hover:text-black hover:border-white transition-colors duration-300 font-medium tracking-wide shadow-lg">
              Read Our Story
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
