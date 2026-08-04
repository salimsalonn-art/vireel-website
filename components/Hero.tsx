import Link from 'next/link';

export default function Hero() {
  return (
    <section 
      className="relative py-32 overflow-hidden bg-cover bg-center bg-no-repeat"
      // In Next.js, images in the public folder are referenced starting with '/'
      style={{ backgroundImage: "url('/background.png')" }} 
    >
      {/* A light overlay to keep your dark text readable */}
      <div className="absolute inset-0 bg-white/80"></div>

      {/* Abstract Background Graphics (Glowing Orbs) */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-40 right-1/4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
       
      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-6 text-center z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
          We build fast, affordable <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
            websites and mobile apps.
          </span>
        </h1>
        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
          Get more customers with a digital presence that actually works. We specialize in cross-platform solutions that drive real results.
        </p>
        <Link href="#contact-section" className="inline-block px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:-translate-y-1">
          Get a Free Quote
        </Link>
      </div>
    </section>
  );
}