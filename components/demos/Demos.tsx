import Link from 'next/link';

interface DemosProps {
  dict: {
    tag: string;
    title: string;
    description: string;
    gymTitle: string;
    gymDesc: string;
    restaurantTitle: string;
    restaurantDesc: string;
    sportsTitle: string;
    sportsDesc: string;
    shopTitle: string;
    shopDesc: string;
    dentistTitle: string;
    dentistDesc: string;
  };
  lang: string;
}

export default function Demos({ dict, lang }: DemosProps) {
  return (
    <section id="demos" className="py-24 bg-slate-100 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-wide text-indigo-600 uppercase">
            {dict.tag}
          </h2>
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            {dict.title}
          </h3>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            {dict.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Gym Demo */}
          <Link href={`/${lang}/demo/gym`} className="block bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="h-48 relative border-b-4 border-indigo-500 overflow-hidden">
               <img src="/gym.png" alt="Gym Facility" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
               <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold text-slate-900 mb-2">{dict.gymTitle}</h4>
              <p className="text-slate-600 text-sm">{dict.gymDesc}</p>
            </div>
          </Link>

          {/* Restaurant Demo */}
          <Link href={`/${lang}/demo/restaurant`} className="block bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="h-48 relative border-b-4 border-orange-400 overflow-hidden">
               <img src="/restaurent .png" alt="Restaurant Interior" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
               <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold text-slate-900 mb-2">{dict.restaurantTitle}</h4>
              <p className="text-slate-600 text-sm">{dict.restaurantDesc}</p>
            </div>
          </Link>

          {/* Sports Club Demo */}
          <Link href={`/${lang}/demo/sports`} className="block bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="h-48 relative border-b-4 border-emerald-500 overflow-hidden">
               <img src="/soccer.png" alt="Soccer Player" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
               <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold text-slate-900 mb-2">{dict.sportsTitle}</h4>
              <p className="text-slate-600 text-sm">{dict.sportsDesc}</p>
            </div>
          </Link>

          {/* E-Commerce Demo */}
          <Link href={`/${lang}/demo/shop`} className="block bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="h-48 relative border-b-4 border-pink-500 overflow-hidden">
               <img src="/ecommerce.png" alt="Summer Collection" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
               <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold text-slate-900 mb-2">{dict.shopTitle}</h4>
              <p className="text-slate-600 text-sm">{dict.shopDesc}</p>
            </div>
          </Link>

          {/* Dentist Demo */}
          <Link href={`/${lang}/demo/dentist`} className="block bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="h-48 relative border-b-4 border-sky-400 overflow-hidden">
               <img src="/dentist.png" alt="Dental Clinic" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
               <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold text-slate-900 mb-2">{dict.dentistTitle}</h4>
              <p className="text-slate-600 text-sm">{dict.dentistDesc}</p>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}