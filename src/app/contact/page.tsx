"use client";

import React, { useState } from 'react';
import Button from '@/components/ui/Button';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="px-6 lg:px-12 pt-32 pb-16 border-b border-outline-variant/15 relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
          <span className="inline-block bg-[#e9c349]/10 text-[#e9c349] border border-[#e9c349]/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.4em] mb-6">
            Inquiry Terminal // Batch Initialization
          </span>
          <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter uppercase mb-6 leading-none">
            Start Your <span className="text-brand-primary">Inquiry</span>
          </h1>
          <p className="text-xl text-brand-foreground/60 max-w-2xl leading-relaxed">
            Ready to scale your brand? Our manufacturing leads provide custom quotations and sample production schedules within 24 hours.
          </p>
        </div>
      </section>

      <section className="px-6 lg:px-12 py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Direct Channels */}
          <div className="lg:col-span-5 space-y-8">
            <h2 className="text-3xl font-display font-bold uppercase tracking-tight mb-8">Direct Channels</h2>
            
            <div className="grid grid-cols-1 gap-4">
              <a href="mailto:saifiqbal1085@gmail.com" className="group p-8 bg-white/5 border border-outline-variant/10 hover:border-brand-primary transition-all flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-[#e9c349] mb-1">Email Terminal</p>
                  <p className="text-lg font-bold">saifiqbal1085@gmail.com</p>
                </div>
                <span className="material-symbols-outlined text-brand-foreground/20 group-hover:text-brand-primary">mail</span>
              </a>

              <a href="https://wa.me/923295049923" className="group p-8 bg-white/5 border border-outline-variant/10 hover:border-brand-primary transition-all flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-[#25D366] mb-1">WhatsApp Agent</p>
                  <p className="text-lg font-bold">+92 329 5049923</p>
                </div>
                <span className="material-symbols-outlined text-brand-foreground/20 group-hover:text-[#25D366]" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
              </a>

              <div className="p-8 bg-white/5 border border-outline-variant/10 flex items-center justify-between opacity-60">
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-widest mb-1">Manufacturing HQ</p>
                  <p className="text-lg font-bold">London, UK Facility</p>
                </div>
                <span className="material-symbols-outlined">location_on</span>
              </div>
            </div>

            <div className="p-8 border-l-4 border-brand-primary bg-brand-primary/5">
               <h4 className="font-bold uppercase tracking-widest text-sm mb-2">On-Site Visits</h4>
               <p className="text-xs text-brand-foreground/40 leading-relaxed">We welcome brand owners to our London facility. Appointments required 72h in advance for safety compliance.</p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-12 border border-brand-primary bg-brand-primary/5 rounded-xs">
                <span className="material-symbols-outlined text-6xl text-brand-primary mb-6">task_alt</span>
                <h2 className="text-3xl font-display font-bold uppercase mb-4 tracking-tighter">Inquiry Logged</h2>
                <p className="text-brand-foreground/60 max-w-sm mb-8 leading-relaxed">
                  Confirmation sent. Our manufacturing leads will review your tech requirements and contact you shortly.
                </p>
                <Button variant="outline" onClick={() => setSubmitted(false)}>Reset Terminal</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 p-1 bg-brand-background">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-foreground/40">Full Name</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-white/5 border border-outline-variant/10 p-5 focus:border-brand-primary outline-none text-brand-foreground placeholder:text-brand-foreground/10 uppercase text-xs tracking-widest font-bold"
                      placeholder="Operator Name"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-foreground/40">Brand / IG</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-white/5 border border-outline-variant/10 p-5 focus:border-brand-primary outline-none text-brand-foreground placeholder:text-brand-foreground/10 uppercase text-xs tracking-widest font-bold"
                      placeholder="@yourbrand"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-foreground/40">Contact Email</label>
                    <input 
                      required
                      type="email" 
                      className="w-full bg-white/5 border border-outline-variant/10 p-5 focus:border-brand-primary outline-none text-brand-foreground placeholder:text-brand-foreground/10 uppercase text-xs tracking-widest font-bold"
                      placeholder="hq@example.com"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-foreground/40">Subject SKU</label>
                    <select className="w-full bg-white/5 border border-outline-variant/10 p-5 focus:border-brand-primary outline-none text-brand-foreground uppercase text-xs tracking-widest font-bold appearance-none">
                      <option>Retro Panel Tracksuit</option>
                      <option>Track Jackets</option>
                      <option>Track Pants</option>
                      <option>Full Catalog Inquiry</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-foreground/40">Project Brief</label>
                  <textarea 
                    rows={6}
                    className="w-full bg-white/5 border border-outline-variant/10 p-5 focus:border-brand-primary outline-none text-brand-foreground placeholder:text-brand-foreground/10 uppercase text-xs tracking-widest font-bold resize-none"
                    placeholder="Batch MOQ, specific fabric weights, or deadline requirements..."
                  />
                </div>

                <Button type="submit" variant="primary" className="w-full py-6 text-lg">
                  Submit Batch Inquiry <span className="material-symbols-outlined ml-3 uppercase">sensors</span>
                </Button>
                
                <p className="text-[9px] text-brand-foreground/20 text-center uppercase tracking-widest">
                  By submitting, you authorize RayoRise Industrial to store inquiry logs for production mapping.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
