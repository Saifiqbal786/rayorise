import React from 'react';
import Button from '@/components/ui/Button';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative px-6 py-20 lg:py-32 overflow-hidden border-b border-outline-variant/15">
        <div className="absolute inset-0 blueprint-grid pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="inline-block px-3 py-1 bg-brand-secondary/10 border border-brand-secondary/20 text-brand-secondary text-[10px] uppercase tracking-[0.2em] font-bold mb-6">
              ISO 9001 Certified Facility
            </span>
            <h1 className="text-5xl lg:text-7xl font-display font-bold text-brand-foreground leading-none tracking-tighter mb-8 uppercase">
              About Our <br/><span className="text-brand-primary">Manufacturing</span>
            </h1>
            <p className="text-lg text-brand-foreground/60 max-w-xl leading-relaxed mb-10">
              At RayoRise, we engineer the heritage of 90s sportswear for the modern British streetwear market. Our industrial processes merge nostalgic aesthetics with high-precision panel customization and technical textile integrity.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact" variant="primary">
                Initialize Project <span className="material-symbols-outlined text-sm ml-2">arrow_forward</span>
              </Button>
              <Button href="/process" variant="outline">
                Technical Specs
              </Button>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] bg-brand-muted rounded-xs overflow-hidden relative border border-outline-variant/20 group">
              <img 
                src="/studio-clean.png" 
                alt="Precision Design Studio" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-6 right-6 bg-brand-background p-6 border-l-4 border-brand-secondary max-w-[200px]">
                <div className="text-2xl font-display font-bold text-brand-secondary tracking-tighter uppercase leading-none mb-1">99.8%</div>
                <div className="text-[10px] uppercase tracking-widest text-brand-foreground/40">On-Time Pipeline Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialization Bento */}
      <section className="px-6 py-24 bg-[#0e0e0e]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 group relative overflow-hidden bg-white/5 p-12 border border-outline-variant/10 h-[400px] flex flex-col justify-end">
              <div className="relative z-10">
                <span className="text-brand-secondary font-bold text-[10px] uppercase tracking-[0.3em] mb-4 block">Heritage Logic</span>
                <h3 className="text-4xl font-display font-bold mb-4 uppercase tracking-tighter">90s Retro Sportswear</h3>
                <p className="text-brand-foreground/60 max-w-md leading-relaxed">
                  Expert reconstruction of vintage silhouettes using high-GSM crinkle nylon, oversized fits, and authentic period-accurate finishing.
                </p>
              </div>
            </div>
            <div className="bg-white/5 p-12 border border-outline-variant/10 flex flex-col justify-between group hover:border-brand-primary transition-colors">
              <span className="material-symbols-outlined text-brand-primary text-4xl">architecture</span>
              <div>
                <h3 className="text-xl font-display font-bold mb-3 uppercase tracking-widest">Panel Customization</h3>
                <p className="text-sm text-brand-foreground/60 leading-relaxed">Complex multi-layer paneling and asymmetrical stitching designed for high-end streetwear drops.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-6 py-24 border-t border-outline-variant/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
             <h2 className="text-[10px] uppercase tracking-[0.5em] text-brand-secondary mb-4">Industrial Pillars</h2>
             <h3 className="text-4xl md:text-5xl font-display font-bold tracking-tighter uppercase">Why Brands Scale With Us</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-x-0 border border-outline-variant/20">
             {[
               { id: '01', title: 'Low MOQ', desc: 'Start your collection with as few as 20 units. We support scale-ups without massive overhead.' },
               { id: '02', title: 'Rapid Sampling', desc: 'Tech-pack to prototype in 7-10 working days. Our internal lab ensures your vision is realized at speed.' },
               { id: '03', title: 'Reliable Pipeline', desc: 'End-to-end transparency. Track your order through our digital logs with guaranteed delivery.' }
             ].map((value) => (
               <div key={value.id} className="p-12 border border-outline-variant/10 hover:bg-white/5 transition-colors group text-center md:text-left">
                  <span className="text-6xl font-display font-bold text-brand-foreground/5 group-hover:text-brand-primary/20 transition-colors mb-6 block">{value.id}</span>
                  <h4 className="text-xl font-bold uppercase tracking-tight mb-4">{value.title}</h4>
                  <p className="text-sm text-brand-foreground/60 leading-relaxed">{value.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
}
