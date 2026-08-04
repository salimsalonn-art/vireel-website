import Link from 'next/link';

export const metadata = {
  title: "Custom Mobile App Development | DevAgency",
  description: "Reach your customers anywhere with high-performance, cross-platform mobile applications for iOS and Android.",
};

export default function MobileAppDevelopmentPage() {
  return (
    <main className="py-24 bg-white px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        
        <Link href="/" className="text-indigo-600 font-semibold hover:underline mb-8 inline-block">
          ← Back to Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
          Turn Your Audience Into Loyal Customers With a Custom Mobile App
        </h1>
        
        <div className="prose prose-lg text-slate-600">
          <p className="text-xl mb-8">
            A website tells people what you do, but a mobile app integrates your business directly into their daily lives. If you want unmatched engagement and retention, you need to be on their home screen.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">1. Direct Communication via Push Notifications</h2>
          <p className="mb-6">
            Email open rates are dropping, and social media posts get buried by algorithms. A mobile app gives you the power of push notifications—allowing you to send updates, promotions, and news directly to your users' lock screens with incredible open rates.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">2. Unbeatable Performance and User Experience</h2>
          <p className="mb-6">
            Mobile web browsers can feel clunky. We build cross-platform applications that offer lightning-fast, native performance. From interactive features to smooth transitions, an app provides a premium experience that keeps users coming back. 
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">3. Navigating the App Store Ecosystem</h2>
          <p className="mb-6">
            Building the app is only half the battle. Getting approved by Apple and Google requires strict adherence to design, intellectual property, and technical guidelines. We manage the entire deployment process, ensuring your application meets all storefront requirements and reaches your users without frustrating delays.
          </p>

          <div className="mt-12 p-8 bg-indigo-50 rounded-2xl border border-indigo-100 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to launch on iOS and Android?</h3>
            <p className="mb-6">Let's build an app your customers will love using.</p>
            <Link href="/#contact-section" className="inline-block px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-all duration-300">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}