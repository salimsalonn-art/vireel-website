import Link from 'next/link';

export const metadata = {
  title: "Website & App Maintenance Services | Vireel Agency",
  description: "Keep your digital platforms fast, secure, and bug-free with our dedicated maintenance, troubleshooting, and support services.",
};

export default function MaintenancePage() {
  return (
    <main className="py-24 bg-white px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        
        <Link href="/" className="text-indigo-600 font-semibold hover:underline mb-8 inline-block">
          ← Back to Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
          Protect Your Investment with Expert Maintenance & Support
        </h1>
        
        <div className="prose prose-lg text-slate-600">
          <p className="text-xl mb-8">
            Launching your website or app is just the beginning. The digital world constantly changes—browsers update, new devices are released, and security threats evolve. Without proper maintenance, digital assets quickly degrade.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">1. Proactive Troubleshooting and Bug Fixes</h2>
          <p className="mb-6">
            Downtime costs you money and damages your reputation. Our support ensures that server configurations, network routing, and software bugs are handled rapidly. We monitor your systems to catch and resolve diagnostic issues before your customers even notice a problem.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">2. Security and Compliance Updates</h2>
          <p className="mb-6">
            Cyber threats are constantly advancing. We keep your frameworks, dependencies, and plugins fully updated to patch vulnerabilities. A secure platform protects your business data and ensures your customers feel safe trusting you with their information.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">3. Performance Optimization</h2>
          <p className="mb-6">
            As your business grows and you add more content, your platforms can slow down. We continuously optimize code, compress assets, and refine database queries so your app and website remain blazingly fast, providing the best possible user experience year after year.
          </p>

          <div className="mt-12 p-8 bg-indigo-50 rounded-2xl border border-indigo-100 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Don't let your tech fall behind.</h3>
            <p className="mb-6">Partner with us to keep your digital presence flawless.</p>
            <Link href="/#contact-section" className="inline-block px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-all duration-300">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}