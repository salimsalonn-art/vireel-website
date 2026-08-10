export default function GymDemo() {
  return (
    <div className="pt-20 bg-slate-900 min-h-screen text-white">
      {/* Gym Hero Section */}
      <div className="relative py-40 px-6 text-center overflow-hidden">
        
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img src="/gym.png" alt="Gym Facility" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70"></div>
          {/* Subtle red glow effect to keep the intensity */}
          <div className="absolute inset-0 bg-red-600/20 filter blur-3xl rounded-full w-96 h-96 mx-auto mt-20 mix-blend-overlay"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-sm font-bold tracking-widest text-red-500 uppercase mb-4">Iron Forge Fitness</h1>
          <h2 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter mb-8">
            Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Legacy</span>
          </h2>
          <p className="text-xl text-slate-200 mb-10 max-w-2xl mx-auto drop-shadow-md">
            Elite personal training, state-of-the-art equipment, and a community that pushes you to your absolute limits.
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-wide rounded-sm transition-colors shadow-lg shadow-red-900/50">
              Join Now - $49/mo
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-slate-400 hover:border-white hover:bg-white/10 font-bold uppercase tracking-wide rounded-sm transition-colors backdrop-blur-sm">
              Free Trial Pass
            </button>
          </div>
        </div>
      </div>

      {/* Quick Features */}
      <div className="bg-slate-950 py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          
          <div className="p-6 border border-slate-800 rounded-xl bg-slate-900/50 hover:bg-slate-800 transition-colors duration-300">
            <div className="h-48 w-full mb-6 overflow-hidden rounded-lg">
              <img src="/weight.png" alt="Free Weights" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Free Weights</h3>
            <p className="text-slate-400">Over 10,000 lbs of iron. Multiple squat racks and deadlift platforms.</p>
          </div>

          <div className="p-6 border border-slate-800 rounded-xl bg-slate-900/50 hover:bg-slate-800 transition-colors duration-300">
            <div className="h-48 w-full mb-6 overflow-hidden rounded-lg">
              <img src="/hiit.png" alt="HIIT & Boxing" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="text-2xl font-bold mb-2">HIIT & Boxing</h3>
            <p className="text-slate-400">Daily group classes designed to torch calories and build endurance.</p>
          </div>

          <div className="p-6 border border-slate-800 rounded-xl bg-slate-900/50 hover:bg-slate-800 transition-colors duration-300">
            <div className="h-48 w-full mb-6 overflow-hidden rounded-lg">
              <img src="/recovery.png" alt="Recovery Zone" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Recovery Zone</h3>
            <p className="text-slate-400">Cold plunges, infrared saunas, and massage therapy available 24/7.</p>
          </div>

        </div>
      </div>
    </div>
  );
}