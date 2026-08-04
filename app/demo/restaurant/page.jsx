export default function RestaurantDemo() {
  return (
    <div className="bg-white min-h-screen text-stone-600 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* Light & Airy Split Hero Section */}
      <div className="flex flex-col lg:flex-row min-h-[90vh]">
        
        {/* Left Side: Typography & CTA */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-10 lg:px-24 py-32 relative z-10 bg-stone-50/50">
          <p className="text-emerald-700 tracking-[0.3em] text-xs font-bold uppercase mb-6 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-emerald-700"></span>
            Botanica // Reserve
          </p>
          
          <h1 className="text-6xl md:text-8xl font-serif text-stone-900 tracking-tight mb-8 leading-[1.1]">
            Fresh. <br /> 
            Bright. <br /> 
            <span className="italic text-stone-400">Refined.</span>
          </h1>
          
          <p className="text-stone-500 text-lg max-w-md mb-12 leading-relaxed font-light">
            A sun-drenched culinary escape celebrating organic, farm-to-table dining with a vibrant, modern coastal twist.
          </p>
          
          <div className="flex gap-8 items-center">
            <button className="px-8 py-4 bg-stone-900 hover:bg-stone-800 text-white font-medium tracking-wide text-sm transition-all shadow-lg hover:shadow-xl rounded-full">
              Reserve a Table
            </button>
            {/* Changed from a <button> to an <a> tag linking to the #menu ID */}
            <a href="#menu" className="group relative text-stone-500 hover:text-stone-900 font-medium tracking-wide text-sm transition-colors cursor-pointer">
              View Menu
              <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-stone-900 transform origin-left scale-x-0 transition-transform group-hover:scale-x-100"></span>
            </a>
          </div>
        </div>

        {/* Right Side: Hero Image */}
        <div className="w-full lg:w-1/2 relative h-[50vh] lg:h-auto overflow-hidden">
          <img 
            src="/restaurent .png" 
            alt="Restaurant Interior" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" 
          />
        </div>
      </div>

      {/* Clean Feature Grid */}
      <div className="bg-white py-24">
        {/* Section Header */}
        <div className="px-10 lg:px-24 mb-16 flex items-end justify-between">
          <h2 className="text-4xl text-stone-900 font-serif tracking-tight">The Experience</h2>
          <span className="text-stone-400 font-mono text-sm hidden md:block">01 // 03</span>
        </div>

        {/* Elegant Staggered Layout */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Sourced Feature */}
          <div className="group cursor-default">
            <div className="aspect-[4/5] w-full mb-8 overflow-hidden rounded-2xl shadow-sm">
              <img src="/farm.png" alt="Sourced Ingredients" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <h3 className="text-stone-900 text-xl font-serif mb-3">Organic Harvest</h3>
            <p className="text-stone-500 font-light text-sm leading-relaxed">
              Sun-ripened ingredients procured daily from local artisan farmers, dictating the rhythm of our ever-evolving seasonal menu.
            </p>
          </div>

          {/* Liquid Feature */}
          <div className="group cursor-default md:mt-12">
            <div className="aspect-[4/5] w-full mb-8 overflow-hidden rounded-2xl shadow-sm">
              <img src="/artisa.png" alt="Artisan Cocktails" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <h3 className="text-stone-900 text-xl font-serif mb-3">Botanical Spirits</h3>
            <p className="text-stone-500 font-light text-sm leading-relaxed">
              A refreshing library of floral infusions, fresh-pressed juices, and bespoke pairings tailored to harmonize with each dish.
            </p>
          </div>

          {/* Exclusive Feature */}
          <div className="group cursor-default md:mt-24">
            <div className="aspect-[4/5] w-full mb-8 overflow-hidden rounded-2xl shadow-sm">
              <img src="/private.png" alt="Private Dining" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <h3 className="text-stone-900 text-xl font-serif mb-3">Sunlit Dining</h3>
            <p className="text-stone-500 font-light text-sm leading-relaxed">
              An airy, glass-enclosed dining space offering a warm, intimate journey through culinary innovation and vibrant presentation.
            </p>
          </div>

        </div>
      </div>

      {/* New Menu Section */}
      <div id="menu" className="bg-stone-50 py-24 px-6 lg:px-24 border-t border-stone-200">
        <div className="max-w-3xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl text-stone-900 font-serif tracking-tight mb-4">Seasonal Offerings</h2>
            <p className="text-stone-500 font-light text-lg">Thoughtfully prepared. Subject to daily harvest.</p>
          </div>

          <div className="space-y-10">
            
            {/* Menu Item 1 */}
            <div className="border-b border-stone-200/60 pb-6 group hover:border-emerald-600 transition-colors duration-300">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-serif text-stone-900 group-hover:text-emerald-700 transition-colors">Heirloom Tomato Carpaccio</h3>
                <span className="text-lg font-medium text-stone-700">$18</span>
              </div>
              <p className="text-stone-500 text-sm font-light">Whipped burrata, cold-pressed olive oil, micro basil, sea salt flake</p>
            </div>

            {/* Menu Item 2 */}
            <div className="border-b border-stone-200/60 pb-6 group hover:border-emerald-600 transition-colors duration-300">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-serif text-stone-900 group-hover:text-emerald-700 transition-colors">Wood-Fired Octopus</h3>
                <span className="text-lg font-medium text-stone-700">$24</span>
              </div>
              <p className="text-stone-500 text-sm font-light">Fingerling potatoes, smoked paprika aioli, pickled red onion, charred lemon</p>
            </div>

            {/* Menu Item 3 */}
            <div className="border-b border-stone-200/60 pb-6 group hover:border-emerald-600 transition-colors duration-300">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-serif text-stone-900 group-hover:text-emerald-700 transition-colors">Wild Caught Halibut</h3>
                <span className="text-lg font-medium text-stone-700">$42</span>
              </div>
              <p className="text-stone-500 text-sm font-light">Asparagus purée, blistered cherry tomatoes, foraged mushrooms, white wine reduction</p>
            </div>

            {/* Menu Item 4 */}
            <div className="border-b border-stone-200/60 pb-6 group hover:border-emerald-600 transition-colors duration-300">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-serif text-stone-900 group-hover:text-emerald-700 transition-colors">Truffle & Ricotta Gnocchi</h3>
                <span className="text-lg font-medium text-stone-700">$28</span>
              </div>
              <p className="text-stone-500 text-sm font-light">Hand-rolled pasta, brown butter sage, shaved black truffle, aged parmesan</p>
            </div>

            {/* Menu Item 5 */}
            <div className="border-b border-stone-200/60 pb-6 group hover:border-emerald-600 transition-colors duration-300">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-serif text-stone-900 group-hover:text-emerald-700 transition-colors">Roasted Duck Breast</h3>
                <span className="text-lg font-medium text-stone-700">$38</span>
              </div>
              <p className="text-stone-500 text-sm font-light">Sweet potato fondant, charred greens, blackberry demi-glace, pistachio crumble</p>
            </div>

            {/* Menu Item 6 */}
            <div className="border-b border-stone-200/60 pb-6 group hover:border-emerald-600 transition-colors duration-300">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-serif text-stone-900 group-hover:text-emerald-700 transition-colors">Olive Oil Cake</h3>
                <span className="text-lg font-medium text-stone-700">$14</span>
              </div>
              <p className="text-stone-500 text-sm font-light">Lemon zest, mascarpone whip, macerated local berries, edible flowers</p>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}