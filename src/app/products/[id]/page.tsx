import React from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { notFound } from 'next/navigation';

const productData = {
  'retro-panel-tracksuit': {
    name: 'Retro Panel Tracksuit',
    description: 'Engineered for UK streetwear brands who demand quality and flexibility. Fully customizable panels, logos, and premium fabric options.',
    image: '/hero-clean.png',
    tag: 'Flagship // 01',
    sku: 'RR-TS-001',
    fabrics: ['280GSM Poly-Blend', '100% Nylon Taslan', 'Heavyweight Interlock'],
    moq: '20 Units',
    leadTime: '14 Days'
  },
  'track-jacket-signature': {
    name: 'Signature Track Jacket',
    description: 'High-collar track jacket with custom ribbing and ventilation panels. Perfect for layering and streetwear silhouettes.',
    image: '/track-jacket-clean.png',
    tag: 'Catalog // A',
    sku: 'RR-TJ-004',
    fabrics: ['Poly-Cotton Blend', 'Water-Resistant Shell', 'Custom Knit Rib'],
    moq: '30 Units',
    leadTime: '10 Days'
  },
  'tapered-performance-pants': {
    name: 'Tapered Performance Pants',
    description: 'Engineered for fit. Custom side-taping and premium pocket construction. The essential streetwear bottom silhouette.',
    image: '/track-pants-clean.png',
    tag: 'Catalog // B',
    sku: 'RR-TP-007',
    fabrics: ['Ultra-Soft Fleece', 'Tech-Poly Blend', 'Cotton Twill'],
    moq: '30 Units',
    leadTime: '10 Days'
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
      {/* Blueprint Header */}
      <section className="relative px-6 py-20 lg:py-32 overflow-hidden border-b border-outline-variant/15">
        <div className="absolute inset-0 blueprint-grid pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link href="/products" className="inline-flex items-center text-xs font-bold text-brand-foreground/40 hover:text-brand-primary transition-colors gap-2 uppercase tracking-widest mb-12">
            <span className="material-symbols-outlined text-sm">arrow_back</span> Back to Registry
          </Link>

          <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* Visuals Terminal */}
            <div className="lg:col-span-7 space-y-6">
              <div className="aspect-[4/5] bg-brand-muted border border-outline-variant/20 overflow-hidden relative group">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute top-6 left-6 bg-brand-background/80 backdrop-blur-md px-4 py-2 border border-outline-variant/20 text-[10px] font-bold uppercase tracking-[0.3em]">
                  Item SKU: {product.sku}
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                 {[1, 2, 3].map((i) => (
                   <div key={i} className="aspect-square bg-white/5 border border-outline-variant/10 flex items-center justify-center overflow-hidden grayscale opacity-40 hover:opacity-100 transition-all cursor-crosshair">
                      <img src="/production-clean.png" className="w-full h-full object-cover" alt="Detail" />
                   </div>
                 ))}
              </div>
            </div>

            {/* Spec Terminal */}
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-6">
                <span className="inline-block px-3 py-1 bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-[10px] uppercase tracking-[0.4em] font-bold">
                  {product.tag}
                </span>
                <h1 className="text-5xl lg:text-7xl font-display font-bold tracking-tighter uppercase leading-none">
                  {product.name.split(' ').map((word, i) => (
                    <span key={i} className={i === 0 ? 'text-brand-foreground' : 'text-brand-primary'}>
                      {word}{' '}
                    </span>
                  ))}
                </h1>
                <p className="text-lg text-brand-foreground/60 leading-relaxed max-w-md">
                  {product.description}
                </p>
              </div>

              {/* Technical Matrix */}
              <div className="grid grid-cols-2 gap-px bg-outline-variant/10 border border-outline-variant/10">
                <div className="bg-brand-background p-8 space-y-2">
                  <span className="material-symbols-outlined text-[#e9c349]">straighten</span>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-brand-foreground/40">Sizing Logic</p>
                  <p className="font-bold text-sm">XS — 4XL // Custom</p>
                </div>
                <div className="bg-brand-background p-8 space-y-2">
                  <span className="material-symbols-outlined text-[#e9c349]">palette</span>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-brand-foreground/40">Dye Match</p>
                  <p className="font-bold text-sm">Pantone Certified</p>
                </div>
                <div className="bg-brand-background p-8 space-y-2">
                  <span className="material-symbols-outlined text-[#e9c349]">history</span>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-brand-foreground/40">Pipeline</p>
                  <p className="font-bold text-sm">{product.leadTime} Sampling</p>
                </div>
                <div className="bg-brand-background p-8 space-y-2">
                  <span className="material-symbols-outlined text-[#e9c349]">inventory_2</span>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-brand-foreground/40">Batch MOQ</p>
                  <p className="font-bold text-sm">{product.moq}</p>
                </div>
              </div>

              <div className="space-y-8 pt-4">
                <div className="space-y-4">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-foreground/40">Textile Composition</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.fabrics.map((f) => (
                      <span key={f} className="px-4 py-2 bg-white/5 border border-outline-variant/10 text-[11px] font-bold uppercase tracking-wider">{f}</span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <Button variant="primary" href="/contact" className="w-full py-6 text-lg">
                    Initialize Batch Request <span className="material-symbols-outlined ml-3 text-lg">sensors</span>
                  </Button>
                  <p className="text-[9px] text-center uppercase tracking-widest text-brand-foreground/20">
                    Proprietary Manufacturing Protection Guaranteed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Log */}
      <section className="px-6 py-24 bg-[#0e0e0e] border-b border-outline-variant/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl font-display font-bold uppercase tracking-tighter">Manufacturing Specs</h2>
              <div className="space-y-6">
                {[
                  { title: 'Stitching', desc: 'Six-thread flatlock construction for high-stress streetwear silhouettes.' },
                  { title: 'Hardware', desc: 'Industrial grade YKK eccentric zippers and custom heavy-metal aglets.' },
                  { title: 'Branding', desc: 'Precision high-density embroidery or solvent-lock screen printing.' }
                ].map((log) => (
                  <div key={log.title} className="p-6 bg-brand-background border-l-4 border-brand-primary">
                    <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-1">{log.title}</h4>
                    <p className="text-sm text-brand-foreground/60 leading-relaxed">{log.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative group">
               <div className="aspect-video border border-outline-variant/15 overflow-hidden rounded-xs grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img src="/studio-clean.png" className="w-full h-full object-cover" alt="Factory Spec" />
               </div>
               <div className="absolute -bottom-8 -left-8 bg-brand-background border border-outline-variant/20 p-8 hidden lg:block">
                  <span className="text-4xl font-display font-black text-brand-secondary block leading-none">90s</span>
                  <span className="text-[10px] uppercase tracking-widest text-brand-foreground/40">Heritage Fit Logic</span>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
