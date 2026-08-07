import Link from 'next/link';

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white px-6 border-b border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-wide text-indigo-600 uppercase">What We Do</h2>
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Expert Digital Solutions
          </h3>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            From high-performance web platforms to engaging mobile experiences and targeted marketing, we build digital products that drive results.
          </p>
        </div>

        {/* Updated to md:grid-cols-2 lg:grid-cols-4 so all 4 items fit perfectly */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* 1. Web Development Link */}
          <Link href="/services/web-development" className="block group outline-none">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
              <div className="h-48 w-full mb-6 overflow-hidden rounded-xl shadow-sm bg-white">
                <img src="/web.png" alt="Web Development" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">Web Development</h4>
              <p className="text-slate-600 leading-relaxed mb-4 grow">
                Fast, responsive, and secure web applications built with Node.js, React, and Tailwind CSS. We create custom platforms tailored directly to your business needs.
              </p>
              <span className="text-indigo-600 font-semibold text-sm flex items-center">
                Read More <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </div>
          </Link>

          {/* 2. Social Media Ads Link */}
          <Link href="/services/ads" className="block group outline-none">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
              <div className="h-48 w-full mb-6 overflow-hidden rounded-xl shadow-sm bg-white">
                <img src="/ads.png" alt="Social Media Ads" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">Social Media Ads</h4>
              <p className="text-slate-600 leading-relaxed mb-4 grow">
                Data-driven advertising campaigns across Facebook, Instagram, TikTok, and more to capture your target audience and maximize your Return on Investment.
              </p>
              <span className="text-indigo-600 font-semibold text-sm flex items-center">
                Read More <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </div>
          </Link>

          {/* 3. Mobile App Development Link */}
          <Link href="/services/mobile-app-development" className="block group outline-none">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
              <div className="h-48 w-full mb-6 overflow-hidden rounded-xl shadow-sm bg-white">
                <img src="/mobile app.png" alt="Mobile App Development" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">Mobile App Development</h4>
              <p className="text-slate-600 leading-relaxed mb-4 grow">
                We build cross-platform mobile applications using modern frameworks like React Native, delivering native performance and exceptional user experiences for iOS and Android.
              </p>
              <span className="text-indigo-600 font-semibold text-sm flex items-center">
                Read More <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </div>
          </Link>

          {/* 4. Maintenance & Support Link */}
          <Link href="/services/maintenance-and-support" className="block group outline-none">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
              <div className="h-48 w-full mb-6 overflow-hidden rounded-xl shadow-sm bg-white">
                <img src="/maintenance.png" alt="Maintenance" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">Maintenance & Support</h4>
              <p className="text-slate-600 leading-relaxed mb-4 grow">
                Continuous updates, push notification management, bug fixes, and performance monitoring to ensure your digital assets run flawlessly long after launch.
              </p>
              <span className="text-indigo-600 font-semibold text-sm flex items-center">
                Read More <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}