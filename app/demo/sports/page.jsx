export default function SportsDemo() {
  return (
    <div className="pt-20 bg-slate-950 min-h-screen text-slate-50 font-sans overflow-hidden">
      
      {/* 1. Split-Screen Hero Section */}
      <div className="flex flex-col lg:flex-row min-h-[80vh] items-center">
        {/* Left Side: Text Content */}
        <div className="w-full lg:w-1/2 px-8 lg:px-16 py-16 flex flex-col justify-center relative z-10">
          <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-emerald-500/30 transform rotate-12">
            <span className="text-3xl -rotate-12">⚽</span>
          </div>
          <h1 className="text-sm font-black tracking-[0.3em] text-emerald-500 uppercase mb-4">Metro City FC</h1>
          <h2 className="text-5xl lg:text-7xl font-black uppercase italic tracking-tighter mb-6 leading-[0.9]">
            Train <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-500">Hard.</span><br />
            Play <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Harder.</span>
          </h2>
          <p className="text-lg text-slate-400 mb-10 max-w-md leading-relaxed">
            The premier youth soccer academy. Developing champions on and off the pitch through elite coaching, intense competition, and community passion.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black uppercase tracking-widest rounded-none skew-x-[-10deg] transition-colors shadow-[4px_4px_0px_white]">
              <span className="block skew-x-[10deg]">Join Academy</span>
            </button>
          </div>
        </div>

        {/* Right Side: Hero Image */}
        <div className="w-full lg:w-1/2 h-[50vh] lg:h-[80vh] relative">
          <div className="absolute inset-0 bg-emerald-500 mix-blend-multiply z-10 opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10 lg:hidden"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-slate-950 z-10 hidden lg:block"></div>
          <img src="/soccer.png" alt="Soccer Player" className="w-full h-full object-cover object-center" />
        </div>
      </div>

      {/* 2. Zig-Zag Feature Layout */}
      <div className="py-24 px-6 lg:px-16 max-w-7xl mx-auto space-y-32">
        
        {/* Feature 1: Image Left, Text Right */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2 relative group">
            <div className="absolute -inset-4 bg-emerald-500/20 rounded-3xl transform -rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
            <img src="/tournemnets.png" alt="Elite Tournaments" className="relative rounded-2xl w-full h-auto shadow-2xl object-cover aspect-video" />
          </div>
          <div className="w-full lg:w-1/2">
            <h3 className="text-4xl font-black uppercase italic mb-4 text-white">Elite Tournaments</h3>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              Compete at the highest level. Track live scores, upcoming brackets, and travel itineraries for our competitive youth and senior squads in real-time.
            </p>
            <a href="#roster" className="text-emerald-400 font-bold uppercase tracking-wider hover:text-emerald-300 flex items-center gap-2">
              View Schedules <span className="text-xl">→</span>
            </a>
          </div>
        </div>

        {/* Feature 2: Text Left, Image Right (Digital App Integration) */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2 relative group">
            <div className="absolute -inset-4 bg-cyan-500/20 rounded-3xl transform rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
            <img src="/digital.png" alt="Digital Player Portal" className="relative rounded-2xl w-full h-auto shadow-2xl object-cover aspect-video" />
          </div>
          <div className="w-full lg:w-1/2 lg:text-right">
            <h3 className="text-4xl font-black uppercase italic mb-4 text-white">Interactive Player App</h3>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              Stay connected off the pitch. Log in to our custom mobile app to view match stats, test your knowledge with the football trivia game, and collect exclusive digital season stickers featuring your teammates.
            </p>
            <a href="#portal" className="text-cyan-400 font-bold uppercase tracking-wider hover:text-cyan-300 flex items-center lg:justify-end gap-2">
              <span className="text-xl rotate-180 lg:rotate-0 hidden lg:inline-block">←</span> Download App <span className="text-xl lg:hidden">→</span>
            </a>
          </div>
        </div>

        {/* Feature 3: Image Left, Text Right */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2 relative group">
            <div className="absolute -inset-4 bg-emerald-500/20 rounded-3xl transform -rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
            <img src="/facility.png" alt="Facility Booking" className="relative rounded-2xl w-full h-auto shadow-2xl object-cover aspect-video" />
          </div>
          <div className="w-full lg:w-1/2">
            <h3 className="text-4xl font-black uppercase italic mb-4 text-white">Facility Booking</h3>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              Reserve practice pitches and indoor training facilities directly through our streamlined online booking system. Perfect for extra touches and private coaching.
            </p>
            <a href="#booking" className="text-emerald-400 font-bold uppercase tracking-wider hover:text-emerald-300 flex items-center gap-2">
              Book a Pitch <span className="text-xl">→</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}