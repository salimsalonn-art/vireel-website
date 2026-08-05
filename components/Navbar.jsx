"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-slate-200 z-50">
      <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo - Vireel with pink/purple text */}
        <Link href="/" className="font-extrabold text-3xl tracking-tighter hover:opacity-80 transition-opacity">
          <span className="text-pink-500">Vi</span><span className="text-purple-500">reel</span>
        </Link>

        {/* Desktop Menu - Hidden on mobile */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/#services" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">Services</Link>
          
          {/* Demos Dropdown (Desktop) */}
          <div className="relative">
            <button 
              onClick={() => setIsDemoOpen(!isDemoOpen)}
              onBlur={() => setTimeout(() => setIsDemoOpen(false), 200)}
              className="flex items-center text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors"
            >
              Demos
              <svg className={`ml-1 w-4 h-4 transition-transform duration-200 ${isDemoOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>

            {isDemoOpen && (
              <div className="absolute top-full right-0 mt-6 w-56 bg-white rounded-xl shadow-xl border border-slate-100 py-2 overflow-hidden">
                <Link href="/demo/gym" className="block px-4 py-3 text-sm font-medium text-slate-600 hover:bg-indigo-50 hover:text-indigo-700 transition-colors">🏋️ Gym & Fitness</Link>
                <Link href="/demo/restaurant" className="block px-4 py-3 text-sm font-medium text-slate-600 hover:bg-indigo-50 hover:text-indigo-700 transition-colors">🍽️ Restaurant & Cafe</Link>
                <Link href="/demo/sports" className="block px-4 py-3 text-sm font-medium text-slate-600 hover:bg-indigo-50 hover:text-indigo-700 transition-colors">⚽ Local Soccer Club</Link>
                <Link href="/demo/shop" className="block px-4 py-3 text-sm font-medium text-slate-600 hover:bg-indigo-50 hover:text-indigo-700 transition-colors">🛍️ E-Commerce Store</Link>
                <Link href="/demo/dentist" className="block px-4 py-3 text-sm font-medium text-slate-600 hover:bg-indigo-50 hover:text-indigo-700 transition-colors">🦷 Dental Clinic</Link>
              </div>
            )}
          </div>

          <Link href="/#pricing" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">Pricing</Link>
        </div>

        {/* Mobile Hamburger Icon Button */}
        <button 
          className="md:hidden p-2 text-slate-600 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {/* Swaps between a hamburger icon and an 'X' close icon based on menu state */}
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button>
        
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl flex flex-col py-4 px-6 space-y-5">
          <Link href="/#services" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-semibold text-slate-700">Services</Link>
          
          {/* Mobile Demos List */}
          <div className="flex flex-col space-y-3">
            <span className="text-lg font-semibold text-slate-700">Demos</span>
            <div className="pl-4 flex flex-col space-y-4 border-l-2 border-slate-100">
                <Link href="/demo/gym" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-slate-600">🏋️ Gym & Fitness</Link>
                <Link href="/demo/restaurant" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-slate-600">🍽️ Restaurant & Cafe</Link>
                <Link href="/demo/sports" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-slate-600">⚽ Local Soccer Club</Link>
                <Link href="/demo/shop" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-slate-600">🛍️ E-Commerce Store</Link>
                <Link href="/demo/dentist" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-slate-600">🦷 Dental Clinic</Link>
            </div>
          </div>

          <Link href="/#pricing" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-semibold text-slate-700">Pricing</Link>
        </div>
      )}
    </nav>
  );
}