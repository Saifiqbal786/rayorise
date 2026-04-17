import React from 'react';
import Button from '@/components/ui/Button';

const steps = [
  {
    id: '01',
    title: 'Design Brief',
    desc: 'Submit your tech-packs or concept sketches. Our engineers analyze for production feasibility and material compatibility.',
    timeline: '24 Hours'
  },
  {
    id: '02',
    title: 'Blueprint Sync',
    desc: 'We map out the panel construction and grading. All patterns are CAD-digitized for sub-millimeter precision.',
    timeline: '48 Hours'
  },
  {
    id: '03',
    title: 'Technical Sampling',
    desc: 'Rapid-prototyping phase. We develop a 1:1 physical sample including custom hardware and fabric matching.',
    timeline: '7–10 Days'
  },
  {
    id: '04',
    title: 'Mass assembly',
    desc: 'Industrial manufacturing kicks off in our controlled facility with multi-stage inspection at every needle point.',
    timeline: 'Scale Dependent'
  }
];

export default function ProcessPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="px-6 lg:px-12 pt-32 pb-16 border-b border-outline-variant/15 relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
          <span className="inline-block bg-[#e9c349]/10 text-[#e9c349] border border-[#e9c349]/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.4em] mb-6">
            Industrial Workflow // Transparence
          </span>
          <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter uppercase mb-6 leading-none">
            Assembling <span className="text-brand-primary">Heritage</span>
          </h1>
          <p className="text-xl text-brand-foreground/60 max-w-2xl leading-relaxed">
            A high-specification pipeline designed for the pace of premium streetwear brands. From first tech-pack to final QC logout.
          </p>
        </div>
      </section>

      {/* Assembly Pipeline Cards */}
      <section className="px-6 lg:px-12 py-24 bg-[#0e0e0e]">
        <div className="max-w-7xl mx-auto space-y-4">
          {steps.map((step) => (
            <div key={step.id} className="grid grid-cols-1 md:grid-cols-12 gap-0 border border-outline-variant/10 group hover:border-brand-primary/30 transition-all">
               <div className="md:col-span-2 bg-brand-background flex items-center justify-center p-8 border-r border-outline-variant/10">
                  <span className="text-6xl font-display font-black text-brand-foreground/5 group-hover:text-brand-primary transition-colors">{step.id}</span>
               </div>
               <div className="md:col-span-7 p-12 flex flex-col justify-center">
                  <h3 className="text-2xl font-display font-bold uppercase tracking-widest mb-4 group-hover:text-brand-primary transition-colors">{step.title}</h3>
                  <p className="text-brand-foreground/60 leading-relaxed max-w-xl">{step.desc}</p>
               </div>
               <div className="md:col-span-3 bg-brand-muted/20 p-8 flex flex-col items-center justify-center text-center border-l border-outline-variant/10">
                  <span className="text-[10px] uppercase tracking-widest text-[#e9c349] mb-1">Target Timeline</span>
                  <span className="text-xl font-bold uppercase">{step.timeline}</span>
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Overview Section */}
      <section className="px-6 lg:px-12 py-24 border-t border-outline-variant/15">
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 aspect-square bg-[#131313] border border-outline-variant/10 overflow-hidden group">
               <img 
                 src="/production-clean.png" 
                 alt="Machinery Detail" 
                 className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
               />
            </div>
            <div className="lg:col-span-7 space-y-10">
               <div className="space-y-4">
                  <h2 className="text-4xl font-display font-bold tracking-tighter uppercase leading-none">Industrial Transparency</h2>
                  <p className="text-lg text-brand-foreground/60 leading-relaxed">
                    Direct access to our factory technicians throughout the sampling phase. We operate our own facility in the UK to ensure your proprietary designs remain protected.
                  </p>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { title: 'ISO Certify', desc: 'Standardized quality control at every stitch.' },
                    { title: 'GSM Mapping', desc: 'Precise fabric weight validation.' },
                    { title: 'Dye Lock', desc: 'Ensuring color consistency across batches.' },
                    { title: 'Global Logistics', desc: 'Tracked delivery to your warehouse.' }
                  ].map((feat) => (
                    <div key={feat.title} className="space-y-2 border-l-2 border-brand-primary pl-6">
                       <h4 className="text-sm font-bold uppercase tracking-widest">{feat.title}</h4>
                       <p className="text-xs text-brand-foreground/40 leading-relaxed">{feat.desc}</p>
                    </div>
                  ))}
               </div>

               <Button href="/contact" variant="primary">
                  Launch Project Pipeline <span className="material-symbols-outlined text-sm ml-2">rocket_launch</span>
               </Button>
            </div>
         </div>
      </section>
    </div>
  );
}
