import Link from 'next/link';

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-sm font-bold tracking-wide text-indigo-600 uppercase">Investment</h2>
        <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl mb-12">
          Simple, Transparent Pricing
        </h3>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Web Design Tier */}
          <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col">
            <h4 className="text-xl font-bold text-slate-900 mb-2">Web Development</h4>
            <p className="text-slate-500 mb-6 text-sm">Perfect for local businesses needing a fast, modern digital presence.</p>
            <div className="mb-6">
              {/* Price updated to $150 */}
              <span className="text-4xl font-extrabold text-slate-900">Starting at $150</span>
            </div>
            <ul className="mb-8 space-y-3 text-left text-slate-600 flex-1">
              <li className="flex items-center"><svg className="w-5 h-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Custom React Web Build</li>
              <li className="flex items-center"><svg className="w-5 h-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Mobile Responsive Design</li>
              <li className="flex items-center"><svg className="w-5 h-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> SEO Optimization</li>
            </ul>
            {/* Changed to a Next.js Link pointing to the contact section */}
            <Link href="#contact-section" className="block text-center w-full py-3 px-6 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-semibold transition-colors">
              Request a Quote
            </Link>
          </div>

          {/* App Development Tier (Highlighted) */}
          <div className="p-8 bg-indigo-600 rounded-2xl border border-indigo-500 flex flex-col text-white shadow-xl transform md:-translate-y-4">
            <div className="inline-block px-3 py-1 bg-indigo-500 text-indigo-50 text-xs font-bold rounded-full mb-4 w-max">Most Popular</div>
            <h4 className="text-xl font-bold mb-2">Mobile Apps</h4>
            <p className="text-indigo-200 mb-6 text-sm">Full cross-platform applications ready for the App Store and Google Play.</p>
            <div className="mb-6">
              <span className="text-4xl font-extrabold">Custom Quote</span>
            </div>
            <ul className="mb-8 space-y-3 text-left text-indigo-100 flex-1">
              <li className="flex items-center"><svg className="w-5 h-5 text-indigo-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> iOS and Android Native Feel</li>
              <li className="flex items-center"><svg className="w-5 h-5 text-indigo-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Custom UI & Mechanics</li>
              <li className="flex items-center"><svg className="w-5 h-5 text-indigo-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Monetization Integration</li>
            </ul>
            {/* Changed to a Next.js Link pointing to the contact section */}
            <Link href="#contact-section" className="block text-center w-full py-3 px-6 bg-white hover:bg-slate-50 text-indigo-700 rounded-xl font-bold transition-colors">
              Let's Discuss
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}