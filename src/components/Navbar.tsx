'use client';

import React, { useState } from 'react';
import { Menu, X, Leaf, Search, ShoppingBag, BookOpen, Home, Info } from 'lucide-react';
import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white py-4 px-6 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Leaf className="h-8 w-8 text-eco-leaf" />
          <span className="ml-2 text-2xl font-semibold text-eco-text tracking-wider">ECOLOJIA</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="/" icon={<Home size={18} />} label="Home" isActive />
          <NavLink href="/products" icon={<ShoppingBag size={18} />} label="Products" />
          <NavLink href="/categories" icon={<Search size={18} />} label="Categories" />
          <NavLink href="/about" icon={<Info size={18} />} label="About" />
          <NavLink href="/blog" icon={<BookOpen size={18} />} label="Blog" />
          <LanguageSwitcher />
        </div>
        
        <button 
          className="md:hidden text-eco-text"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white mt-4 py-2 px-6 space-y-4">
          <MobileNavLink href="/" label="Home" isActive />
          <MobileNavLink href="/products" label="Products" />
          <MobileNavLink href="/categories" label="Categories" />
          <MobileNavLink href="/about" label="About" />
          <MobileNavLink href="/blog" label="Blog" />
          <div className="py-2">
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </nav>
  );
};

interface NavLinkProps {
  href: string;
  icon?: React.ReactNode;
  label: string;
  isActive?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, icon, label, isActive }) => {
  return (
    <Link 
      href={href}
      className={`flex items-center hover:text-eco-leaf transition-colors ${
        isActive ? 'text-eco-leaf font-medium' : 'text-eco-text'
      }`}
    >
      {icon && <span className="mr-1">{icon}</span>}
      {label}
    </Link>
  );
};

const MobileNavLink: React.FC<NavLinkProps> = ({ href, label, isActive }) => {
  return (
    <Link 
      href={href}
      className={`block py-2 ${
        isActive ? 'text-eco-leaf font-medium' : 'text-eco-text'
      }`}
    >
      {label}
    </Link>
  );
};

export default Navbar;