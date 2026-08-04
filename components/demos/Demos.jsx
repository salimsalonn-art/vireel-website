import Link from 'next/link';

export default function Demos() {
  return (
    <section id="demos" className="py-24 bg-slate-100 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-wide text-indigo-600 uppercase">Industry Templates</h2>
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            See What We Can Build For You
          </h3>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Explore our high-converting layouts designed specifically for your business niche.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Gym Demo */}
          <Link href="/demo/gym" className="block bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="h-48 relative border-b-4 border-indigo-500 overflow-hidden">
               <img src="/gym.png" alt="Gym Facility" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
               <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold text-slate-900 mb-2">Gym & Fitness</h4>
              <p className="text-slate-600 text-sm">High-energy landing pages with class schedules, trainer bios, and integrated membership sign-ups.</p>
            </div>
          </Link>

          {/* Restaurant Demo */}
          <Link href="/demo/restaurant" className="block bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="h-48 relative border-b-4 border-orange-400 overflow-hidden">
               {/* Note: Kept the exact file name from your import, including the space */}
               <img src="/restaurent .png" alt="Restaurant Interior" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
               <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold text-slate-900 mb-2">Restaurant & Cafe</h4>
              <p className="text-slate-600 text-sm">Mouth-watering digital menus, easy table reservations, and seamless online ordering systems.</p>
            </div>
          </Link>

          {/* Sports Club Demo */}
          <Link href="/demo/sports" className="block bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="h-48 relative border-b-4 border-emerald-500 overflow-hidden">
               <img src="/soccer.png" alt="Soccer Player" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
               <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold text-slate-900 mb-2">Local Soccer Club</h4>
              <p className="text-slate-600 text-sm">Perfect for local soccer academies. Showcase tournament schedules, youth rosters, or even integrate a digital sticker album portal for players.</p>
            </div>
          </Link>

          {/* E-Commerce Demo */}
          <Link href="/demo/shop" className="block bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="h-48 relative border-b-4 border-pink-500 overflow-hidden">
               <img src="/ecommerce.png" alt="Summer Collection" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
               <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold text-slate-900 mb-2">E-Commerce Store</h4>
              <p className="text-slate-600 text-sm">Sleek product galleries, secure checkouts, and seamless links to funnel traffic directly to your storefront.</p>
            </div>
          </Link>

          {/* Dentist Demo */}
          <Link href="/demo/dentist" className="block bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="h-48 relative border-b-4 border-sky-400 overflow-hidden">
               <img src="/dentist.png" alt="Dental Clinic" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
               <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold text-slate-900 mb-2">Dental Clinic</h4>
              <p className="text-slate-600 text-sm">Trust-building, professional designs featuring patient portals, service lists, and easy online appointment booking.</p>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}