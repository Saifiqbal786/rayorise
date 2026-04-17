import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({ 
  children, 
  href, 
  variant = 'primary', 
  className = '', 
  onClick,
  type = 'button'
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all duration-200 focus:outline-hidden active:scale-95 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-brand-primary text-brand-background hover:brightness-110 rounded-xs shadow-lg",
    secondary: "bg-brand-secondary text-brand-background hover:brightness-110 rounded-xs",
    outline: "bg-transparent border border-outline-variant/30 text-brand-foreground hover:bg-white/5 rounded-xs",
    ghost: "text-brand-foreground/60 hover:text-brand-foreground hover:bg-white/5 rounded-xs"
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={combinedClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
