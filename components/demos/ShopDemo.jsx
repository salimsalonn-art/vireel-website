export default function ShopDemo() {
  return (
    <div className="pt-20 bg-white min-h-screen text-slate-900 font-sans">
      {/* Shop Hero Section */}
      <div className="relative py-32 px-6 text-center overflow-hidden flex flex-col items-center justify-center border-b border-slate-200 min-h-[60vh]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img src="/ecommerce.png" alt="Summer Collection" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-slate-900 text-white text-xs font-bold tracking-widest uppercase mb-6 shadow-md">
            New Arrival
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 drop-shadow-sm">
            The Summer <span className="text-slate-500">Collection.</span>
          </h1>
          <p className="text-lg text-slate-700 mb-10 max-w-xl mx-auto leading-relaxed font-medium">
            Minimalist design meets everyday comfort. Upgrade your essentials with our latest limited-edition drop.
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-10 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold uppercase tracking-wide rounded-full transition-colors shadow-xl">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-6xl mx-auto py-20 px-6">
        <div className="flex justify-between items-end mb-10">
          <h2 className="text-3xl font-extrabold tracking-tight">Trending Now</h2>
          <a href="#view-all" className="text-slate-600 font-bold hover:text-slate-900 transition-colors">View All &rarr;</a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {/* Product 1 */}
          <div className="group cursor-pointer">
            <div className="h-72 bg-slate-100 rounded-2xl mb-4 relative overflow-hidden flex items-center justify-center">
              <img src="/caps.png" alt="Classic Cap" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute top-3 left-3 bg-white px-2 py-1 text-xs font-bold rounded shadow-sm z-10">Bestseller</div>
            </div>
            <h3 className="font-bold text-slate-900">Classic Cap</h3>
            <p className="text-slate-500 text-sm mb-2">Cotton Twill</p>
            <p className="font-extrabold text-lg">$28.00</p>
          </div>

          {/* Product 2 */}
          <div className="group cursor-pointer">
            <div className="h-72 bg-slate-100 rounded-2xl mb-4 relative overflow-hidden flex items-center justify-center">
              <img src="/tee.png" alt="Essential Tee" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <h3 className="font-bold text-slate-900">Essential Tee</h3>
            <p className="text-slate-500 text-sm mb-2">Heavyweight</p>
            <p className="font-extrabold text-lg">$35.00</p>
          </div>

          {/* Product 3 */}
          <div className="group cursor-pointer">
            <div className="h-72 bg-slate-100 rounded-2xl mb-4 relative overflow-hidden flex items-center justify-center">
              <img src="/pack.png" alt="Daypack" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <h3 className="font-bold text-slate-900">Daypack</h3>
            <p className="text-slate-500 text-sm mb-2">Water-resistant</p>
            <p className="font-extrabold text-lg">$65.00</p>
          </div>

          {/* Product 4 */}
          <div className="group cursor-pointer">
            <div className="h-72 bg-slate-100 rounded-2xl mb-4 relative overflow-hidden flex items-center justify-center">
              <img src="/shoes.png" alt="Runner Sneakers" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute top-3 left-3 bg-red-100 text-red-700 px-2 py-1 text-xs font-bold rounded shadow-sm z-10">Low Stock</div>
            </div>
            <h3 className="font-bold text-slate-900">Runner Sneakers</h3>
            <p className="text-slate-500 text-sm mb-2">Ultra-light</p>
            <p className="font-extrabold text-lg">$95.00</p>
          </div>

        </div>
      </div>
    </div>
  );
}