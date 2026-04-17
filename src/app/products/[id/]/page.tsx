import React from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { notFound } from 'next/navigation';

const productData = {
  'retro-panel-tracksuit': {
    id: '01',
    name: 'Retro Panel Tracksuit',
    description: 'The pinnacle of technical streetwear manufacturing. Featuring laser-cut paneling, bonded seams, and reinforced stress points.',
    image: '/hero-clean.png',
    tag: 'Flagship Series // 01',
    moq: '20 Units',
    gsm: '320G',
    specs: [
      { label: 'Construction', value: '4-Needle Flatlock' },
      { label: 'Fabric', value: 'Poly-Elastane Interlock' },
      { label: 'Hardware', value: 'YKK Industrial Vision' },
      { label: 'Finishing', value: 'Anti-Pill / Pre-Shrunk' }
    ]
  },
  'track-jacket-signature': {
    id: '02',
    name: 'Signature Track Jacket',
    description: 'High-collar track jacket with custom ribbing and ventilation panels. Engineered for layering and streetwear silhouettes.',
    image: '/track-jacket-clean.png',
    tag: 'Catalog // A',
    moq: '30 Units',
    gsm: '300G',
    specs: [
      { label: 'Shell', value: 'Water-Resistant Taslan' },
      { label: 'Lining', value: 'Cool-Mesh Technical' },
      { label: 'Elastic', value: 'Heavy Duty Ribbing' },
      { label: 'Draft', value: 'Drop Shoulder Boxy' }
    ]
  },
  'tapered-performance-pants': {
    id: '03',
    name: 'Tapered Performance Pants',
    description: 'Ergonomic fit with articulated knees and secure zip-lock cargo pockets for industrial-grade active use.',
    image: '/track-pants-clean.png',
    tag: 'Catalog // B',
    moq: '30 Units',
    gsm: '300G',
    specs: [
      { label: 'Fit', value: 'Tapered Taper' },
      { label: 'Knees', value: 'Articulated Paneling' },
      { label: 'Closure', value: 'Heavyweight Drawcord' },
      { label: 'Ankles', value: 'Adjustable Zip Cuffs' }
    ]
  }
};

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;
  const product = productData[id as keyof typeof productData];

  if (!product) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header / Breadcrumb */}
      <section className="px-6 lg:px-12 pt-32 pb-8 border-b border-outline-variant/15">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
           <Link href="/products" className="group flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-brand-foreground/40 hover:text-brand-primary transition-colors">
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              Back to SKU Registry
           </Link>
           <span className="text-[10px] font-bold uppercase tracking-widest text-[#e9c349]">
              Blueprint ID: {product.id}
           </span>
        </div>
      </section>

      {/* Main Product Layout */}
      <section className="px-6 lg:px-12 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Visuals */}
          <div className="lg:col-span-7 space-y-6">
             <div className="aspect-[4/5] bg-brand-muted border border-outline-variant/10 overflow-hidden relative group">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none"></div>
             </div>
             <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="aspect-square bg-brand-muted border border-outline-variant/10 overflow-hidden">
                    <img 
                      src={`https://images.unsplash.com/photo-15${58444479 + i}-c8f010530fdc?auto=format&fit=crop&q=80&w=400`} 
                      className="w-full h-full object-cover grayscale opacity-40" 
                      alt="Detail"
                    />
                  </div>
                ))}
             </div>
          </div>

          {/* Specifications */}
          <div className="lg:col-span-5 flex flex-col justify-center">
             <span className="text-brand-primary font-display font-bold uppercase tracking-[0.4em] text-[10px] mb-4">
                {product.tag}
             </span>
             <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter uppercase mb-6 leading-none">
                {product.name}
             </h1>
             <p className="text-lg text-brand-foreground/60 mb-10 leading-relaxed">
                {product.description}
             </p>

             <div className="grid grid-cols-2 gap-4 mb-10">
                {product.specs.map((spec) => (
                  <div key={spec.label} className="p-6 bg-white/5 border border-outline-variant/10">
                    <p className="text-[10px] text-brand-foreground/40 uppercase tracking-widest mb-1">{spec.label}</p>
                    <p className="font-bold text-sm uppercase tracking-tight">{spec.value}</p>
                  </div>
                ))}
             </div>

             <div className="space-y-4 pt-4 border-t border-outline-variant/15">
                <div className="flex justify-between items-end">
                   <div>
                      <p className="text-[10px] text-brand-foreground/40 uppercase tracking-widest mb-1">Stock Density</p>
                      <p className="text-xl font-display font-bold uppercase">{product.gsm} WEIGHT</p>
                   </div>
                   <div className="text-right">
                      <p className="text-[10px] text-brand-foreground/40 uppercase tracking-widest mb-1">Batch Minimum</p>
                      <p className="text-xl font-display font-bold uppercase">{product.moq} PER COLOR</p>
                   </div>
                </div>
                
                <div className="pt-6">
                  <Button href="/contact" variant="primary" className="w-full">
                     Request Production Quote <span className="material-symbols-outlined text-sm ml-2">request_quote</span>
                  </Button>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Industrial Verification Section */}
      <section className="px-6 lg:px-12 py-24 bg-[#0e0e0e] border-y border-outline-variant/15">
         <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
            <span className="material-symbols-outlined text-6xl text-brand-primary mb-8" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tighter uppercase mb-6">Machined Excellence Verified</h2>
            <p className="text-brand-foreground/60 max-w-2xl leading-relaxed text-lg mb-10">
              Each unit is cross-inspected across four needle points to ensure the structural integrity of the paneling meets industrial streetwear standards.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
               {['Dye Batch Sync', 'Shrinkage Test', 'Seam Integrity', 'Hardware Stress'].map((test) => (
                 <div key={test} className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-[#e9c349]">
                    <span className="w-1.5 h-1.5 bg-[#e9c349]"></span>
                    {test}
                 </div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
}
