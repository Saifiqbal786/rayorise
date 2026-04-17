import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden px-6 lg:px-12">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-background via-brand-background/80 to-transparent z-10"></div>
          <img 
            src="/hero-clean.png" 
            alt="Premium 90s Tracksuit" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-20 max-w-4xl pt-20">
          <span className="inline-block bg-brand-secondary/10 text-brand-secondary border border-brand-secondary/20 px-4 py-1.5 text-[10px] font-bold tracking-[0.3em] uppercase mb-8 rounded-xs">
            Industrial Precision Manufacturing
          </span>
          <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] tracking-tighter mb-8 uppercase text-balance">
            Custom 90s <br/>
            <span className="text-brand-primary">Tracksuits</span>
          </h1>
          <p className="text-xl text-brand-foreground/60 mb-12 max-w-2xl leading-relaxed">
            Dedicated manufacturing partner for UK streetwear brands. Engineered for the culture. Delivered with industrial reliability.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12 max-w-3xl border-t border-outline-variant/20 pt-10">
            <div>
              <p className="text-[#e9c349] font-display font-bold text-2xl">Low MOQ</p>
              <p className="text-[10px] uppercase tracking-widest text-brand-foreground/40 mt-1">Market Entry Ready</p>
            </div>
            <div>
              <p className="text-[#e9c349] font-display font-bold text-2xl">7-10 Days</p>
              <p className="text-[10px] uppercase tracking-widest text-brand-foreground/40 mt-1">Rapid Sampling</p>
            </div>
            <div>
              <p className="text-[#e9c349] font-display font-bold text-2xl">Full Panel</p>
              <p className="text-[10px] uppercase tracking-widest text-brand-foreground/40 mt-1">Customization</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-6">
            <Button variant="primary" href="/contact" className="gap-3">
              Request Sample <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Button>
            <Button variant="outline" href="/products">
              View Collection
            </Button>
          </div>
        </div>
      </section>

      {/* Production Specs Section */}
      <section className="py-32 px-6 lg:px-12 bg-[#0e0e0e]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
               <div className="aspect-video bg-brand-muted overflow-hidden border border-outline-variant/10 rounded-xs">
                  <img 
                    src="/production-clean.png" 
                    alt="Precision Manufacturing" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
               </div>
               <div className="absolute -bottom-6 -right-6 bg-brand-background border-l-4 border-brand-secondary p-8 hidden md:block">
                  <span className="text-3xl font-display font-bold text-brand-secondary block">0.01mm</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-brand-foreground/40">Stitching Precision</span>
               </div>
            </div>
            
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tighter uppercase leading-tight">
                Machined Precision:<br/>
                <span className="text-brand-primary text-3xl">The Retro Panel Suit</span>
              </h2>
              <p className="text-brand-foreground/60 leading-relaxed text-lg">
                Our flagship silhouette utilizes heavy-weight crinkle nylon with reinforced flat-lock stitching. Every panel is CAD-cut for sub-millimeter accuracy, ensuring your brand's vision is translated perfectly from blueprint to garment.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-6 p-6 bg-white/5 border border-outline-variant/10">
                   <span className="material-symbols-outlined text-[#e9c349] text-3xl">verified</span>
                   <div>
                      <p className="text-xs font-bold uppercase tracking-widest">ISO 9001 Certified Stitching</p>
                      <p className="text-[11px] text-brand-foreground/40 mt-1">Reinforced seams for high-performance streetwear endurance.</p>
                   </div>
                </div>
                <div className="flex items-center gap-6 p-6 bg-white/5 border border-outline-variant/10">
                   <span className="material-symbols-outlined text-[#e9c349] text-3xl">palette</span>
                   <div>
                      <p className="text-xs font-bold uppercase tracking-widest">Dye-Matching Guaranteed</p>
                      <p className="text-[11px] text-brand-foreground/40 mt-1">Pantone-perfect color replication across all nylon batches.</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Pipeline */}
      <section className="py-32 px-6 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter uppercase">The Assembly Pipeline</h2>
            <div className="w-24 h-1 bg-brand-primary mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { id: '01', title: 'Design Brief', text: 'Submit your tech-packs or rough sketches for production analysis.' },
              { id: '02', title: 'Sample Dev', text: '7-10 day turnaround for high-fidelity physical samples.' },
              { id: '03', title: 'Quality Sync', text: 'Review fit and finish. Finalize bulk quantities and hardware.' },
              { id: '04', title: 'Mass Logic', text: 'Industrial manufacturing kicks off with multi-stage QC.' }
            ].map((step) => (
              <div key={step.id} className="group bg-white/5 p-8 border border-outline-variant/10 relative hover:border-brand-primary transition-all">
                <span className="text-5xl font-display font-bold text-brand-foreground/5 absolute top-4 right-4 group-hover:text-brand-primary/10">{step.id}</span>
                <h4 className="text-lg font-bold uppercase tracking-widest mb-4">{step.title}</h4>
                <p className="text-sm text-brand-foreground/60 leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 lg:px-12 bg-white flex flex-col items-center text-center">
        <h2 className="text-brand-background text-5xl md:text-7xl font-display font-black tracking-tighter uppercase mb-6">Start Your Order</h2>
        <p className="text-brand-background/60 text-xl max-w-2xl mb-12">
          Join the roster of UK streetwear brands scaling with RayoRise precision. No hidden fees, just industrial grade output.
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <Button href="/contact" className="!bg-[#131313] !text-[#e5e2e1] gap-3">
             Launch Project <span className="material-symbols-outlined">rocket_launch</span>
          </Button>
          <Button href="https://wa.me/923295049923" className="!bg-[#25D366] !text-white gap-3 border-none shadow-xl">
             WhatsApp Agent <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
          </Button>
        </div>
      </section>
    </div>
  );
}
