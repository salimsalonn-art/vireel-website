import Link from 'next/link';
import { getDictionary } from '@/getDictionary';

// 1. Dynamic Metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "es");
  
  return {
    title: dict.contractorsPage.seoTitle,
    description: dict.contractorsPage.seoDesc,
  };
}

// 2. The Translated Page Component
export default async function ContractorsServicePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "es");

  return (
    <main className="pt-24 pb-16 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Back Link */}
        <Link href={`/${lang}/#services`} className="text-indigo-600 font-semibold hover:underline mb-8 inline-block">
          {dict.contractorsPage.back}
        </Link>

        {/* HERO SECTION: Light, airy style with custom background0.png */}
        <div 
          className="rounded-3xl py-20 px-8 md:py-28 md:px-16 mb-16 text-center relative overflow-hidden bg-cover bg-center shadow-sm border border-slate-100"
          style={{ backgroundImage: "url('/background0.png')" }}
        >
          {/* Subtle white overlay just in case the background image is too busy */}
          <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]"></div>
          
          {/* Text & Button Content */}
          <div className="relative z-10 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
              {dict.contractorsPage.heroTitle}
            </h1>
            <p className="text-lg md:text-xl text-slate-700 max-w-2xl mx-auto mb-10 font-medium">
              {dict.contractorsPage.heroSubtitle}
            </p>
            <Link 
              href={`/${lang}/#contact-section`} 
              className="inline-block px-10 py-4 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold rounded-xl transition-transform hover:scale-105 shadow-lg shadow-purple-500/30"
            >
              {dict.contractorsPage.ctaBtn}
            </Link>
          </div>
        </div>

        {/* FEATURES GRID: Bigger cards with custom images on top */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          
          {/* Feature 1: Websites */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <div className="w-full h-72 bg-slate-50 flex items-center justify-center p-4 border-b border-slate-100">
              <img src="/contractor-web.jpg" alt="Custom Websites" className="max-w-full max-h-full object-contain" />
            </div>
            <div className="p-8 md:p-10 flex-grow">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{dict.contractorsPage.f1Title}</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                {dict.contractorsPage.f1Text}
              </p>
            </div>
          </div>

          {/* Feature 2: Portfolio */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <div className="w-full h-72 bg-slate-50 flex items-center justify-center p-4 border-b border-slate-100">
              <img src="/contractor-portfolio.jpg" alt="Portfolio" className="max-w-full max-h-full object-contain" />
            </div>
            <div className="p-8 md:p-10 flex-grow">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{dict.contractorsPage.f2Title}</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                {dict.contractorsPage.f2Text}
              </p>
            </div>
          </div>

          {/* Feature 3: Reviews */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <div className="w-full h-72 bg-slate-50 flex items-center justify-center p-4 border-b border-slate-100">
              <img src="/contractor-reviews.jpg" alt="Customer Reviews" className="max-w-full max-h-full object-contain" />
            </div>
            <div className="p-8 md:p-10 flex-grow">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{dict.contractorsPage.f3Title}</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                {dict.contractorsPage.f3Text}
              </p>
            </div>
          </div>

          {/* Feature 4: Ads */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <div className="w-full h-72 bg-slate-50 flex items-center justify-center p-4 border-b border-slate-100">
              <img src="/contractor-ads.jpg" alt="Targeted Ads" className="max-w-full max-h-full object-contain" />
            </div>
            <div className="p-8 md:p-10 flex-grow">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{dict.contractorsPage.f4Title}</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                {dict.contractorsPage.f4Text}
              </p>
            </div>
          </div>

        </div>

        {/* Call to Action Banner (Optional - kept to reinforce the bottom of the page) */}
        <div className="text-center bg-indigo-50 border border-indigo-100 rounded-3xl p-12 shadow-sm">
          <h3 className="text-3xl font-bold text-slate-900 mb-6">{dict.contractorsPage.ctaTitle}</h3>
          <Link href={`/${lang}/#contact-section`} className="inline-block px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold rounded-xl transition-transform hover:scale-105 shadow-lg shadow-purple-500/30">
            {dict.contractorsPage.ctaBtn}
          </Link>
        </div>

      </div>
    </main>
  );
}