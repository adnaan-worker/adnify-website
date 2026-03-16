"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { name: '功能', href: '#features' },
  { name: '统计', href: '#stats' },
  { name: '技术栈', href: '#techstack' },
  { name: '定价', href: '#pricing' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-2xl border-b border-border-subtle' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 bg-gradient-to-br from-aurora-cyan to-aurora-purple rounded-xl opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-[2px] bg-background rounded-lg" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-bold text-lg font-heading">A</span>
              </div>
            </div>
            <span className="text-white font-semibold text-lg font-heading">Adnify</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href}
                className="text-secondary hover:text-white transition-colors duration-300 text-sm font-medium relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-aurora-cyan to-aurora-purple group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="https://github.com/adnaan-worker/adnify" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-secondary hover:text-white transition-colors cursor-pointer"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            <a 
              href="https://github.com/adnaan-worker/adnify/releases" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-white text-black rounded-full font-medium text-sm hover:bg-gray-100 transition-all duration-300 cursor-pointer"
            >
              Download
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
