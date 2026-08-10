import Link from 'next/link';

interface PricingProps {
  lang: string;
  dict: {
    badge: string;
    title: string;
    web: { title: string; desc: string; price: string; f1: string; f2: string; f3: string; button: string; };
    app: { badge: string; title: string; desc: string; price: string; f1: string; f2: string; f3: string; button: string; };
  };
}

export default function Pricing({ lang, dict }: PricingProps) {
  return (
    <section id="pricing" className="py-24 bg-white px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-sm font-bold tracking-wide text-indigo-600 uppercase">{dict.badge}</h2>
        <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl mb-12">
          {dict.title}
        </h3>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Web Design Tier */}
          <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col">
            <h4 className="text-xl font-bold text-slate-900 mb-2">{dict.web.title}</h4>
            <p className="text-slate-500 mb-6 text-sm">{dict.web.desc}</p>
            <div className="mb-6">
              <span className="text-4xl font-extrabold text-slate-900">{dict.web.price}</span>
            </div>
            <ul className="mb-8 space-y-3 text-left text-slate-600 flex-1">
              <li className="flex items-center"><svg className="w-5 h-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> {dict.web.f1}</li>
              <li className="flex items-center"><svg className="w-5 h-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> {dict.web.f2}</li>
              <li className="flex items-center"><svg className="w-5 h-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> {dict.web.f3}</li>
            </ul>
            <Link href={`/${lang}/#contact-section`} className="block text-center w-full py-3 px-6 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-semibold transition-colors">
              {dict.web.button}
            </Link>
          </div>

          {/* App Development Tier (Highlighted) */}
          <div className="p-8 bg-indigo-600 rounded-2xl border border-indigo-500 flex flex-col text-white shadow-xl transform md:-translate-y-4">
            <div className="inline-block px-3 py-1 bg-indigo-500 text-indigo-50 text-xs font-bold rounded-full mb-4 w-max">{dict.app.badge}</div>
            <h4 className="text-xl font-bold mb-2">{dict.app.title}</h4>
            <p className="text-indigo-200 mb-6 text-sm">{dict.app.desc}</p>
            <div className="mb-6">
              <span className="text-4xl font-extrabold">{dict.app.price}</span>
            </div>
            <ul className="mb-8 space-y-3 text-left text-indigo-100 flex-1">
              <li className="flex items-center"><svg className="w-5 h-5 text-indigo-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> {dict.app.f1}</li>
              <li className="flex items-center"><svg className="w-5 h-5 text-indigo-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> {dict.app.f2}</li>
              <li className="flex items-center"><svg className="w-5 h-5 text-indigo-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> {dict.app.f3}</li>
            </ul>
            <Link href={`/${lang}/#contact-section`} className="block text-center w-full py-3 px-6 bg-white hover:bg-slate-50 text-indigo-700 rounded-xl font-bold transition-colors">
              {dict.app.button}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}