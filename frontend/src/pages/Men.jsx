import React from 'react';
import { products } from '../data';
import { ProductCard } from '../components/ProductCard';
import { SectionHeading } from '../components/SectionHeading';

const Men = () => {
  const menProducts = products.filter(p => p.category === 'Men');

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading subtitle="Menswear" title="The Men's Collection" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        {menProducts.map((p, i) => (
          <ProductCard key={p.id} product={p} index={i} />
        ))}
      </div>
    </div>
  );
};

export default Men;
