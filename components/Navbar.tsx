"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';

interface NavbarProps {
  dict: {
    services: string;
    demos: string;
    pricing: string;
  }
}

export default function Navbar({ dict }: NavbarProps) {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const params = useParams();
  const lang = (params?.lang as string) || "en";
  const pathname = usePathname();

  useEffect(() => {
    setIsDemoOpen(false);
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const switchLang = (newLang: string) => {
    if (!pathname) return `/${newLang}`;
    const segments = pathname.split('/');
    segments[1] = newLang; 
    return segments.join('/');
  };

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-slate-200 z-50">
      <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
        
        <Link 
          href={`/${lang}`} 
          onClick={() => {
            setIsDemoOpen(false); 
            setIsMobileMenuOpen(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="relative z-[10000] font-extrabold text-3xl tracking-tighter hover:opacity-80 transition-opacity"
        >
          <span className="text-pink-500">Vi</span><span className="text-purple-500">reel</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8 relative z-[10000]">
          
          <Link href={`/${lang}/#services`} className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">
            {dict.services}
          </Link>
          
          <div className="relative">
            <button 
              onClick={() => setIsDemoOpen(!isDemoOpen)}
              className="flex items-center text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors"
            >
              {dict.demos}
              <svg className={`ml-1 w-4 h-4 transition-transform duration-200 ${isDemoOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>

            {isDemoOpen && (
              <div 
                className="fixed inset-0 z-[9998]" 
                onClick={() => setIsDemoOpen(false)}
              ></div>
            )}

            {isDemoOpen && (
              <div className="absolute top-full right-0 mt-6 w-56 bg-white rounded-xl shadow-xl border border-slate-100 py-2 overflow-hidden z-[9999]">
                <Link href={`/${lang}/demo/gym`} className="block px-4 py-3 text-sm font-medium text-slate-600 hover:bg-indigo-50 hover:text-indigo-700 transition-colors relative z-[10000]">🏋️ Gym & Fitness</Link>
                <Link href={`/${lang}/demo/restaurant`} className="block px-4 py-3 text-sm font-medium text-slate-600 hover:bg-indigo-50 hover:text-indigo-700 transition-colors relative z-[10000]">🍽️ Restaurant & Cafe</Link>
                <Link href={`/${lang}/demo/sports`} className="block px-4 py-3 text-sm font-medium text-slate-600 hover:bg-indigo-50 hover:text-indigo-700 transition-colors relative z-[10000]">⚽ Local Soccer Club</Link>
                <Link href={`/${lang}/demo/shop`} className="block px-4 py-3 text-sm font-medium text-slate-600 hover:bg-indigo-50 hover:text-indigo-700 transition-colors relative z-[10000]">🛍️ E-Commerce Store</Link>
                <Link href={`/${lang}/demo/dentist`} className="block px-4 py-3 text-sm font-medium text-slate-600 hover:bg-indigo-50 hover:text-indigo-700 transition-colors relative z-[10000]">🦷 Dental Clinic</Link>
              </div>
            )}
          </div>

          <Link href={`/${lang}/#pricing`} className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">
            {dict.pricing}
          </Link>
          
          {/* THE NEW DESKTOP FLAGS (Fixes Windows Letter Bug) */}
          <div className="flex items-center space-x-4 pl-6 border-l border-slate-200">
            <Link 
              href={switchLang('en')} 
              className={`transition-all duration-200 ${lang === 'en' ? 'opacity-100 hover:scale-110 shadow-sm' : 'opacity-40 hover:opacity-100 grayscale hover:grayscale-0'}`} 
              title="English"
            >
              <img src="https://flagcdn.com/w40/us.png" alt="English" className="w-6 rounded-sm" />
            </Link>
            <Link 
              href={switchLang('es')} 
              className={`transition-all duration-200 ${lang === 'es' ? 'opacity-100 hover:scale-110 shadow-sm' : 'opacity-40 hover:opacity-100 grayscale hover:grayscale-0'}`} 
              title="Español"
            >
              <img src="https://flagcdn.com/w40/es.png" alt="Español" className="w-6 rounded-sm" />
            </Link>
          </div>
        </div>

        <button 
          className="md:hidden p-2 text-slate-600 focus:outline-none relative z-[10000]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button>
        
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl flex flex-col py-4 px-6 space-y-5 z-[9999]">
          <Link href={`/${lang}/#services`} className="text-lg font-semibold text-slate-700">{dict.services}</Link>
          
          <div className="flex flex-col space-y-3">
            <span className="text-lg font-semibold text-slate-700">{dict.demos}</span>
            <div className="pl-4 flex flex-col space-y-4 border-l-2 border-slate-100">
                <Link href={`/${lang}/demo/gym`} className="text-base font-medium text-slate-600">🏋️ Gym & Fitness</Link>
                <Link href={`/${lang}/demo/restaurant`} className="text-base font-medium text-slate-600">🍽️ Restaurant & Cafe</Link>
                <Link href={`/${lang}/demo/sports`} className="text-base font-medium text-slate-600">⚽ Local Soccer Club</Link>
                <Link href={`/${lang}/demo/shop`} className="text-base font-medium text-slate-600">🛍️ E-Commerce Store</Link>
                <Link href={`/${lang}/demo/dentist`} className="text-base font-medium text-slate-600">🦷 Dental Clinic</Link>
            </div>
          </div>

          <Link href={`/${lang}/#pricing`} className="text-lg font-semibold text-slate-700">{dict.pricing}</Link>
          
          {/* THE NEW MOBILE FLAGS (Fixes Windows Letter Bug) */}
          <div className="flex items-center space-x-6 pt-4 border-t border-slate-100 mt-2">
            <Link 
              href={switchLang('en')} 
              className={`flex items-center text-lg font-semibold transition-opacity ${lang === 'en' ? 'opacity-100 text-slate-800' : 'opacity-40 text-slate-500 grayscale'}`}
            >
              <img src="https://flagcdn.com/w40/us.png" alt="English" className="w-6 rounded-sm mr-2" />
              English
            </Link>
            <Link 
              href={switchLang('es')} 
              className={`flex items-center text-lg font-semibold transition-opacity ${lang === 'es' ? 'opacity-100 text-slate-800' : 'opacity-40 text-slate-500 grayscale'}`}
            >
              <img src="https://flagcdn.com/w40/es.png" alt="Español" className="w-6 rounded-sm mr-2" />
              Español
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}