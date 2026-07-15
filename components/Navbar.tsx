'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { href: '#', label: 'Home' },
    { href: '#', label: 'Shop' },
    { href: '#', label: 'About' },
    { href: '#', label: 'Contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold gradient-text">Little Blossoms</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-text-dark font-medium hover:text-soft-pink transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Cart Icon and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-text-dark hover:text-soft-pink transition-colors duration-300">
              <ShoppingCart size={24} />
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-soft-pink rounded-full">
                0
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-baby-blue transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-text-dark font-medium px-4 py-2 rounded-lg hover:bg-baby-blue transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
