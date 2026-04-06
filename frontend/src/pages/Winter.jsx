import React from 'react';
import { products } from '../data';
import { ProductCard } from '../components/ProductCard';
import { SectionHeading } from '../components/SectionHeading';

const Winter = () => {
  const winterProducts = products.filter(p => p.category === 'Winter');

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading subtitle="Winter 2026" title="The Winter Collection" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {winterProducts.map((p, i) => (
          <ProductCard key={p.id} product={p} index={i} />
        ))}
      </div>
    </div>
  );
};

export default Winter;
