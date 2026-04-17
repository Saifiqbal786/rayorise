import React from 'react';
import Link from 'next/link';

const products = [
  {
    id: 'retro-panel-tracksuit',
    name: 'Retro Panel Tracksuit',
    description: 'Our signature 90s inspired technical tracksuit. High-GSM interlock fabric with multi-panel CAD-cut precision.',
    image: '/hero-clean.png',
    tag: 'Flagship // 01',
    moq: '20 Units',
    gsm: '320G',
    leadTime: '14 Days'
  },
  {
    id: 'track-jacket-signature',
    name: 'Signature Track Jacket',
    description: 'Technical track jacket featuring laser-cut geometric paneling and reinforced bonded seams.',
    image: '/track-jacket-clean.png',
    tag: 'Catalog // A',
    moq: '30 Units',
    gsm: '300G',
    leadTime: '10 Days'
  },
  {
    id: 'tapered-performance-pants',
    name: 'Tapered Performance Pants',
    description: 'High-performance tapered track pants with industrial side-striping and ergonomic fit.',
    image: '/track-pants-clean.png',
    tag: 'Catalog // B',
    moq: '30 Units',
    gsm: '300G',
    leadTime: '10 Days'
  }
];

const ProductsPage = () => {
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="px-6 lg:px-12 pt-32 pb-16 border-b border-outline-variant/15">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <span className="inline-block bg-brand-primary/10 text-brand-primary border border-brand-primary/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.4em] mb-6">
            ISO 9001 Certified Catalog
          </span>
          <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter uppercase mb-6 leading-none">
            SKU <span className="text-brand-primary">Registry</span>
          </h1>
          <p className="text-xl text-brand-foreground/60 max-w-2xl leading-relaxed">
            Precision-engineered technical apparel for international distribution. Fabric specimens and prototypes available on request.
          </p>
        </div>
      </section>

      {/* Product List */}
      <section className="px-6 lg:px-12 py-24">
        <div className="max-w-7xl mx-auto space-y-32">
          {products.map((product, index) => (
            <div key={product.id} className={`grid grid-cols-1 lg:grid-cols-12 gap-0 border border-outline-variant/15 overflow-hidden group hover:border-brand-primary/30 transition-colors`}>
              <div className={`lg:col-span-7 relative h-[400px] lg:h-[600px] overflow-hidden ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-background/20 to-transparent"></div>
                <div className="absolute top-8 left-8">
                   <span className="bg-brand-background/80 backdrop-blur-md px-4 py-2 border border-outline-variant/20 text-xs font-bold uppercase tracking-widest text-[#e9c349]">
                      {product.tag}
                   </span>
                </div>
              </div>
              
              <div className="lg:col-span-5 bg-brand-muted/30 p-12 flex flex-col justify-center">
                <h2 className="text-4xl font-display font-bold mb-6 tracking-tight uppercase leading-none">{product.name}</h2>
                <p className="text-brand-foreground/60 mb-10 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-10">
                   <div className="bg-brand-background p-6 border-l-2 border-brand-primary">
                      <p className="text-[10px] text-brand-primary uppercase font-bold tracking-widest mb-1">Lead Time</p>
                      <p className="text-2xl font-display font-bold uppercase">{product.leadTime}</p>
                   </div>
                   <div className="bg-brand-background p-6 border-l-2 border-brand-secondary">
                      <p className="text-[10px] text-brand-secondary uppercase font-bold tracking-widest mb-1">Batch MOQ</p>
                      <p className="text-2xl font-display font-bold uppercase">{product.moq}</p>
                   </div>
                </div>

                <div className="flex flex-col gap-4">
                  <Link 
                    href={`/products/${product.id}`}
                    className="bg-brand-primary text-brand-background font-bold uppercase tracking-widest py-5 px-8 text-sm flex items-center justify-center gap-4 hover:brightness-110 transition-all rounded-xs"
                  >
                    View Specifications
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                  <Link 
                    href="/contact"
                    className="bg-transparent border border-outline-variant/30 text-brand-foreground font-bold uppercase tracking-widest py-5 px-8 text-sm text-center hover:bg-white/5 transition-all rounded-xs"
                  >
                    Request Physical Sample
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 lg:px-12 py-24 border-t border-outline-variant/15 text-center">
        <h2 className="text-4xl font-display font-bold tracking-tighter uppercase mb-8">Ready to Scale Production?</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
           <Link href="/contact" className="bg-brand-secondary text-brand-background px-12 py-5 font-bold uppercase tracking-widest text-sm rounded-xs hover:brightness-110 transition-all">
              Initialize Project Pipeline
           </Link>
           <Link href="https://wa.me/923295049923" className="bg-[#25D366] text-white px-12 py-5 font-bold uppercase tracking-widest text-sm rounded-xs hover:brightness-110 transition-all">
              Connect with Agent
           </Link>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
