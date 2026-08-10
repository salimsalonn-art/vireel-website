import Link from 'next/link';

export const metadata = {
  title: "Privacy Policy | Vireel Agency",
  description: "Learn how Vireel Agency collects, uses, and protects your data.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="py-24 bg-white px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        
        <Link href="/" className="text-indigo-600 font-semibold hover:underline mb-8 inline-block">
          ← Back to Home
        </Link>

        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Privacy Policy</h1>
        <p className="text-slate-500 mb-10">Last Updated: August 2026</p>
        
        <div className="prose prose-lg text-slate-600 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">1. Information We Collect</h2>
            <p>
              We collect information you provide directly to us when you request a quote, fill out a contact form, or communicate with us. This may include your name, email address, phone number, and details about your project or business. We also automatically collect certain basic analytics data (such as IP addresses and browser types) to improve our website experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">2. How We Use Your Information</h2>
            <p>
              We use the information we collect to provide, maintain, and improve our web development, app development, and marketing services. Specifically, we use your data to communicate with you, process transactions, deliver requested services, and send administrative messages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">3. Information Sharing</h2>
            <p>
              Vireel Agency does not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information with our business partners and trusted affiliates for the purposes outlined above.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">4. Security</h2>
            <p>
              We adopt appropriate data collection, storage, and processing practices, as well as security measures, to protect against unauthorized access, alteration, disclosure, or destruction of your personal information and data stored on our site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">5. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or the practices of this site, please contact us at: <a href="mailto:info@vireel.com" className="text-indigo-600 hover:underline">info@vireel.com</a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}