"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inventory', href: '/products' },
    { name: 'About', href: '/about' },
    { name: 'Pipeline', href: '/process' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-[#131313]/90 backdrop-blur-md py-4 border-outline-variant/20' 
          : 'bg-transparent py-6 border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <span className="text-xl font-display font-bold tracking-tighter uppercase">
              <span className="text-[#b8c3ff]">Rayo</span>
              <span className="text-[#e9c349]">Rise</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-10">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="text-xs font-display font-bold uppercase tracking-widest text-brand-foreground/60 hover:text-[#b8c3ff] transition-all"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <div className="flex items-center space-x-4 border-l border-outline-variant/30 pl-8 ml-4">
              <button className="material-symbols-outlined text-brand-foreground/40 hover:text-[#b8c3ff] transition-colors p-2 hover:bg-white/5 rounded-xs">notifications</button>
              <button className="material-symbols-outlined text-brand-foreground/40 hover:text-[#b8c3ff] transition-colors p-2 hover:bg-white/5 rounded-xs">settings</button>
              <Button href="/contact" variant="primary" className="py-2.5 px-6 !text-[10px]">
                Request Sample
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-brand-foreground/60 hover:text-[#b8c3ff] transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#0e0e0e] border-b border-outline-variant/20 px-6 py-10 flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-3xl font-display font-black uppercase tracking-tighter text-brand-foreground hover:text-[#b8c3ff] transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-6 border-t border-outline-variant/10">
              <Button variant="primary" className="w-full text-lg" href="/contact">
                Request Sample
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
