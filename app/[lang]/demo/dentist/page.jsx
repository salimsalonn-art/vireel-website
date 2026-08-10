
export default function DentistDemo() {
  return (
    <div className="pt-20 bg-slate-50 min-h-screen text-slate-900 font-sans selection:bg-sky-200 selection:text-sky-900">
      
      {/* 1. Split-Screen Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Side: Typography & CTA */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left relative z-10">
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-sky-100 text-sky-800 text-sm font-bold mb-8 border border-sky-200">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-500 animate-pulse"></span>
            Accepting New Patients
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]">
            Modern care for a <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">brighter smile.</span>
          </h1>
          <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
            Experience pain-free, compassionate dental care in a state-of-the-art clinic. We blend advanced technology with a gentle touch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="px-8 py-4 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-2xl transition-all shadow-lg shadow-sky-600/30 hover:shadow-sky-600/50 hover:-translate-y-1">
              Book Appointment
            </button>
            <button className="px-8 py-4 bg-white hover:bg-slate-100 border-2 border-slate-200 text-slate-700 font-bold rounded-2xl transition-all">
              Meet the Team
            </button>
          </div>
        </div>

        {/* Right Side: Floating Hero Image */}
        <div className="w-full lg:w-1/2 relative">
          {/* Decorative background shape */}
          <div className="absolute inset-0 bg-sky-200 rounded-[3rem] transform rotate-3 scale-105 -z-10"></div>
          <div className="absolute inset-0 bg-blue-100 rounded-[3rem] transform -rotate-2 scale-105 -z-10"></div>
          
          <img 
            src="/dentist.png" 
            alt="Dental Professional" 
            className="w-full h-auto object-cover rounded-[3rem] shadow-2xl relative z-10 border-4 border-white"
          />
        </div>
      </div>

      {/* 2. Stacked Editorial Services List */}
      <div className="max-w-5xl mx-auto px-6 py-24 space-y-12">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">Comprehensive Services</h2>
          <p className="mt-4 text-slate-500 text-lg">Everything you need under one roof.</p>
        </div>

        {/* Service Row 1 */}
        <div className="bg-white rounded-[2rem] p-6 lg:p-8 flex flex-col md:flex-row items-center gap-8 shadow-sm border border-slate-100 hover:shadow-xl transition-shadow duration-300 group">
          <div className="w-full md:w-2/5 h-64 overflow-hidden rounded-3xl">
            <img src="/dentestry.png" alt="General Dentistry" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="w-full md:w-3/5 px-4">
            <div className="w-12 h-12 bg-sky-50 text-sky-600 rounded-2xl flex items-center justify-center mb-4 text-2xl">✨</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">General Dentistry</h3>
            <p className="text-slate-600 leading-relaxed mb-6 text-lg">
              Routine cleanings, digital X-rays, and thorough exams to keep your oral health in perfect condition and catch issues early.
            </p>
            <button className="text-sky-600 font-bold hover:text-sky-700 flex items-center gap-2 group-hover:translate-x-2 transition-transform">
              Learn more <span className="text-xl">→</span>
            </button>
          </div>
        </div>

        {/* Service Row 2 */}
        <div className="bg-white rounded-[2rem] p-6 lg:p-8 flex flex-col md:flex-row items-center gap-8 shadow-sm border border-slate-100 hover:shadow-xl transition-shadow duration-300 group">
          <div className="w-full md:w-2/5 h-64 overflow-hidden rounded-3xl md:order-2">
            <img src="/cosmetic.png" alt="Cosmetic Services" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="w-full md:w-3/5 px-4 md:order-1 md:text-right">
            <div className="w-12 h-12 bg-sky-50 text-sky-600 rounded-2xl flex items-center justify-center mb-4 text-2xl md:ml-auto">💎</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Cosmetic Services</h3>
            <p className="text-slate-600 leading-relaxed mb-6 text-lg">
              Professional teeth whitening, porcelain veneers, and seamless bonding to help you achieve the flawless, confident smile you deserve.
            </p>
            <button className="text-sky-600 font-bold hover:text-sky-700 flex items-center gap-2 justify-end w-full group-hover:-translate-x-2 transition-transform">
              <span className="text-xl rotate-180">→</span> Learn more
            </button>
          </div>
        </div>

        {/* Service Row 3 */}
        <div className="bg-white rounded-[2rem] p-6 lg:p-8 flex flex-col md:flex-row items-center gap-8 shadow-sm border border-slate-100 hover:shadow-xl transition-shadow duration-300 group">
          <div className="w-full md:w-2/5 h-64 overflow-hidden rounded-3xl">
            <img src="/portal.png" alt="Patient Portal App" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="w-full md:w-3/5 px-4">
            <div className="w-12 h-12 bg-sky-50 text-sky-600 rounded-2xl flex items-center justify-center mb-4 text-2xl">📱</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Custom Patient App</h3>
            <p className="text-slate-600 leading-relaxed mb-6 text-lg">
              Manage your dental health on the go. Our clinic features a fully customized, cross-platform mobile application natively built for iOS and Android, allowing you to seamlessly book appointments and view records securely.
            </p>
            <button className="text-sky-600 font-bold hover:text-sky-700 flex items-center gap-2 group-hover:translate-x-2 transition-transform">
              Download App <span className="text-xl">→</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}