"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-slate-200 z-50">
      <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo - Vireel with pink/purple text, size increased to text-3xl */}
        <Link href="/" className="font-extrabold text-3xl tracking-tighter hover:opacity-80 transition-opacity">
          <span className="text-pink-500">Vi</span><span className="text-purple-500">reel</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {/* Forward slash added for cross-page routing */}
          <Link href="/#services" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">Services</Link>
          
          {/* Demos Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setIsDemoOpen(!isDemoOpen)}
              onBlur={() => setTimeout(() => setIsDemoOpen(false), 200)}
              className="flex items-center text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors"
            >
              Demos
              {/* Arrow Icon that flips when clicked */}
              <svg className={`ml-1 w-4 h-4 transition-transform duration-200 ${isDemoOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>

            {/* Dropdown Menu Items */}
            {isDemoOpen && (
              <div className="absolute top-full right-0 mt-6 w-56 bg-white rounded-xl shadow-xl border border-slate-100 py-2 overflow-hidden">
                <Link href="/demo/gym" className="block px-4 py-3 text-sm font-medium text-slate-600 hover:bg-indigo-50 hover:text-indigo-700 transition-colors">
                  🏋️ Gym & Fitness
                </Link>
                <Link href="/demo/restaurant" className="block px-4 py-3 text-sm font-medium text-slate-600 hover:bg-indigo-50 hover:text-indigo-700 transition-colors">
                  🍽️ Restaurant & Cafe
                </Link>
                <Link href="/demo/sports" className="block px-4 py-3 text-sm font-medium text-slate-600 hover:bg-indigo-50 hover:text-indigo-700 transition-colors">
                  ⚽ Local Soccer Club
                </Link>
                <Link href="/demo/shop" className="block px-4 py-3 text-sm font-medium text-slate-600 hover:bg-indigo-50 hover:text-indigo-700 transition-colors">
                  🛍️ E-Commerce Store
                </Link>
                <Link href="/demo/dentist" className="block px-4 py-3 text-sm font-medium text-slate-600 hover:bg-indigo-50 hover:text-indigo-700 transition-colors">
                  🦷 Dental Clinic
                </Link>
              </div>
            )}
          </div>

          {/* Forward slash added for cross-page routing */}
          <Link href="/#pricing" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">Pricing</Link>
        </div>

        {/* Call to Action Button */}
        {/* Forward slash added for cross-page routing */}
        <Link href="/#contact-section" className="hidden md:inline-flex px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold rounded-lg transition-colors shadow-md">
          Let's Talk
        </Link>
        
      </div>
    </nav>
  );
}