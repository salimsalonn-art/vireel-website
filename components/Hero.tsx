import Link from 'next/link';

interface HeroProps {
  lang: string;
  dict: {
    titleStart: string;
    titleHighlight: string;
    subtitle: string;
    button: string;
  };
}

export default function Hero({ lang, dict }: HeroProps) {
  return (
    <section 
      className="relative py-32 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/background.png')" }} 
    >
      <div className="absolute inset-0 bg-white/80"></div>

      <div className="absolute top-0 left-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-40 right-1/4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
       
      <div className="relative max-w-5xl mx-auto px-6 text-center z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
          {dict.titleStart} <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
            {dict.titleHighlight}
          </span>
        </h1>
        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
          {dict.subtitle}
        </p>
        <Link href={`/${lang}/#contact-section`} className="inline-block px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:-translate-y-1">
          {dict.button}
        </Link>
      </div>
    </section>
  );
}