import Link from 'next/link';

interface ServicesProps {
  lang: string;
  dict: {
    badge: string;
    title: string;
    subtitle: string;
    readMore: string;
    web: { title: string; desc: string; };
    ads: { title: string; desc: string; };
    mobile: { title: string; desc: string; };
    maint: { title: string; desc: string; };
  };
}

export default function Services({ lang, dict }: ServicesProps) {
  return (
    <section id="services" className="py-24 bg-white px-6 border-b border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-wide text-indigo-600 uppercase">{dict.badge}</h2>
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            {dict.title}
          </h3>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            {dict.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* 1. Web Development Link */}
          <Link href={`/${lang}/services/web-development`} className="block group outline-none">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
              <div className="h-48 w-full mb-6 overflow-hidden rounded-xl shadow-sm bg-white">
                <img src="/web.png" alt="Web Development" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">{dict.web.title}</h4>
              <p className="text-slate-600 leading-relaxed mb-4 grow">
                {dict.web.desc}
              </p>
              <span className="text-indigo-600 font-semibold text-sm flex items-center">
                {dict.readMore} <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </div>
          </Link>

          {/* 2. Social Media Ads Link */}
          <Link href={`/${lang}/services/ads`} className="block group outline-none">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
              <div className="h-48 w-full mb-6 overflow-hidden rounded-xl shadow-sm bg-white">
                <img src="/ads.png" alt="Social Media Ads" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">{dict.ads.title}</h4>
              <p className="text-slate-600 leading-relaxed mb-4 grow">
                {dict.ads.desc}
              </p>
              <span className="text-indigo-600 font-semibold text-sm flex items-center">
                {dict.readMore} <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </div>
          </Link>

          {/* 3. Mobile App Development Link */}
          <Link href={`/${lang}/services/mobile-app-development`} className="block group outline-none">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
              <div className="h-48 w-full mb-6 overflow-hidden rounded-xl shadow-sm bg-white">
                <img src="/mobile app.png" alt="Mobile App Development" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">{dict.mobile.title}</h4>
              <p className="text-slate-600 leading-relaxed mb-4 grow">
                {dict.mobile.desc}
              </p>
              <span className="text-indigo-600 font-semibold text-sm flex items-center">
                {dict.readMore} <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </div>
          </Link>

          {/* 4. Maintenance & Support Link */}
          <Link href={`/${lang}/services/maintenance-and-support`} className="block group outline-none">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
              <div className="h-48 w-full mb-6 overflow-hidden rounded-xl shadow-sm bg-white">
                <img src="/maintenance.png" alt="Maintenance" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">{dict.maint.title}</h4>
              <p className="text-slate-600 leading-relaxed mb-4 grow">
                {dict.maint.desc}
              </p>
              <span className="text-indigo-600 font-semibold text-sm flex items-center">
                {dict.readMore} <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}