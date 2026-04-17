import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0e0e0e] border-t border-outline-variant/15 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand & Note */}
          <div className="flex flex-col gap-2 items-center md:items-start text-center md:text-left">
            <div className="text-sm font-display font-bold uppercase tracking-tighter">
              <span className="text-[#e9c349]">RayoRise</span>
              <span className="text-brand-foreground/40 ml-2">Manufacturing Systems</span>
            </div>
            <p className="text-[10px] text-brand-foreground/40 uppercase tracking-widest">
              ISO 9001 Certified Facility // Specialist 90s Apparel
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {[
              { name: 'Products', href: '/products' },
              { name: 'Technical Specs', href: '/process' },
              { name: 'Compliance', href: '#' },
              { name: 'Privacy', href: '#' },
            ].map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-foreground/60 hover:text-[#b8c3ff] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-[10px] text-brand-foreground/30 uppercase tracking-tighter">
            © {currentYear} RayoRise Industrial. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
