export default function RestaurantDemo() {
  return (
    <div className="pt-20 bg-stone-50 min-h-screen text-stone-900 font-sans">
      {/* Restaurant Hero Section */}
      <div className="relative py-40 px-6 text-center overflow-hidden flex flex-col items-center justify-center min-h-[70vh]">
        
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img src="/restaurent .png" alt="Restaurant Interior" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-stone-900/70"></div>
          {/* Subtle warm glow effect */}
          <div className="absolute inset-0 bg-amber-600/20 filter blur-3xl rounded-full w-3/4 h-3/4 mx-auto mt-10 mix-blend-overlay"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-sm font-bold tracking-[0.2em] text-amber-500 uppercase mb-6 drop-shadow-md">Lumina Bistro</h1>
          <h2 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-tight drop-shadow-lg">
            A taste of home, <br />
            <span className="italic text-amber-400">elevated.</span>
          </h2>
          <p className="text-lg md:text-xl text-stone-200 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Experience modern culinary excellence with locally sourced ingredients, wood-fired specialties, and unforgettable flavors.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold tracking-wide rounded-sm transition-colors shadow-lg">
              Book a Table
            </button>
            <button className="px-8 py-4 bg-transparent border border-stone-300 hover:border-white hover:bg-white/10 text-white font-semibold tracking-wide rounded-sm transition-colors backdrop-blur-sm">
              View Our Menu
            </button>
          </div>
        </div>
      </div>

      {/* Feature Highlights */}
      <div className="bg-white py-24 px-6 border-t border-stone-200">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center">
          
          {/* Farm to Table Feature */}
          <div className="p-6">
            <div className="h-56 w-full mb-6 overflow-hidden rounded-xl shadow-md">
              <img src="/farm.png" alt="Farm to Table" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <h3 className="text-2xl font-serif text-stone-800 mb-4">Farm to Table</h3>
            <p className="text-stone-600 leading-relaxed">
              We partner directly with local farmers to bring the freshest, seasonal ingredients straight to your plate.
            </p>
          </div>

          {/* Artisan Cocktails Feature */}
          <div className="p-6">
            <div className="h-56 w-full mb-6 overflow-hidden rounded-xl shadow-md">
              <img src="/artisa.png" alt="Artisan Cocktails" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <h3 className="text-2xl font-serif text-stone-800 mb-4">Artisan Cocktails</h3>
            <p className="text-stone-600 leading-relaxed">
              Our expert mixologists craft unique, hand-poured drinks designed to perfectly complement your meal.
            </p>
          </div>

          {/* Private Events Feature */}
          <div className="p-6">
            <div className="h-56 w-full mb-6 overflow-hidden rounded-xl shadow-md">
              <img src="/private.png" alt="Private Events" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <h3 className="text-2xl font-serif text-stone-800 mb-4">Private Events</h3>
            <p className="text-stone-600 leading-relaxed">
              Celebrate your special moments in our exclusive dining room, tailored for intimate gatherings and parties.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}