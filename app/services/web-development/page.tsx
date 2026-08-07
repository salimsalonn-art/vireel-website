import Link from 'next/link';

export const metadata = {
  title: "Custom Web Development Services | Vireel Agency",
  description: "Stop relying solely on social media. We build fast, responsive, and secure custom websites that you actually own and control.",
};

export default function WebDevelopmentPage() {
  return (
    <main className="py-24 bg-white px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        
        <Link href="/" className="text-indigo-600 font-semibold hover:underline mb-8 inline-block">
          ← Back to Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
          Why Your Business Needs a Real Website (And Why Social Media Isn't Enough)
        </h1>
        
        <div className="prose prose-lg text-slate-600">
          <p className="text-xl mb-8">
            In today's digital landscape, many businesses make the mistake of building their entire presence on social media platforms. While social media is a great marketing tool, it should never be your home base. Here is why.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">1. You Don't Own Your Social Media Profile</h2>
          <p className="mb-6">
            When you rely solely on Instagram, Facebook, or TikTok, you are building your house on rented land. Algorithms change overnight, accounts get suspended without warning, and organic reach is constantly shrinking. A custom website is a digital asset that you completely own and control. No algorithm can take it away from you.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">2. Credibility and Professionalism</h2>
          <p className="mb-6">
            Consumers expect legitimate businesses to have a dedicated website. A polished, fast-loading web platform signals trust, stability, and professionalism. It is where customers go to verify that you are a real business before they decide to spend their money.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">3. Custom Functionality Tailored to You</h2>
          <p className="mb-6">
            Social media profiles look the same for every business. A custom website allows you to build exactly what your business needs—whether that's a custom booking system, a unique e-commerce flow, or an interactive portal for your clients. We build platforms using modern tech like Node.js and React to ensure they are blazing fast and perfectly tailored to your goals.
          </p>

          <div className="mt-12 p-8 bg-indigo-50 rounded-2xl border border-indigo-100 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to build your digital home?</h3>
            <p className="mb-6">Let's create a platform that works for you 24/7.</p>
            <Link href="/#contact-section" className="inline-block px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-all duration-300">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}