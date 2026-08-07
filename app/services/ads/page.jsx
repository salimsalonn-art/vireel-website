import Link from 'next/link';

export const metadata = {
  title: "Social Media Advertising Services | Vireel Agency",
  description: "Grow your brand and maximize ROI with targeted, data-driven social media ad campaigns across Facebook, Instagram, and TikTok.",
};

export default function SocialMediaAdsPage() {
  return (
    <main className="py-24 bg-white px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        
        <Link href="/" className="text-indigo-600 font-semibold hover:underline mb-8 inline-block">
          ← Back to Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
          Turn Clicks into Customers with Social Media Ads
        </h1>
        
        <div className="prose prose-lg text-slate-600">
          <p className="text-xl mb-8">
            A great website or app is only effective if people know it exists. We design, launch, and manage highly targeted social media advertising campaigns that put your brand directly in front of the people most likely to convert.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">1. Laser-Focused Audience Targeting</h2>
          <p className="mb-6">
            We don't believe in guessing. By leveraging demographic data, user interests, and behavioral retargeting, we ensure your ad budget is spent exclusively on the audiences that matter to your business, reducing wasted spend and driving higher quality leads.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">2. Compelling Creatives and Copy</h2>
          <p className="mb-6">
            Attention spans are short on social media. We craft eye-catching visuals and persuasive ad copy designed specifically for platforms like Instagram, Facebook, and TikTok. Our creatives are built to stop the scroll and encourage immediate action from your future customers.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">3. Continuous Optimization and Analytics</h2>
          <p className="mb-6">
            Launching an ad is just step one. We actively monitor your campaigns, A/B testing different variations and adjusting bids in real-time. You get clear, transparent reporting on your Return on Ad Spend (ROAS) so you always know exactly how your investment is performing.
          </p>

          <div className="mt-12 p-8 bg-indigo-50 rounded-2xl border border-indigo-100 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to scale your business?</h3>
            <p className="mb-6">Let us build an ad campaign that delivers real, measurable growth.</p>
            <Link href="/#contact-section" className="inline-block px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-all duration-300">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}