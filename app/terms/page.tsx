import Link from 'next/link';

export const metadata = {
  title: "Terms of Service | Vireel Agency",
  description: "Terms and conditions for using Vireel Agency's services and website.",
};

export default function TermsOfServicePage() {
  return (
    <main className="py-24 bg-white px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        
        <Link href="/" className="text-indigo-600 font-semibold hover:underline mb-8 inline-block">
          ← Back to Home
        </Link>

        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Terms of Service</h1>
        <p className="text-slate-500 mb-10">Last Updated: August 2026</p>
        
        <div className="prose prose-lg text-slate-600 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing our website and utilizing our digital agency services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">2. Description of Services</h2>
            <p>
              Vireel Agency provides custom web development, mobile application development, digital maintenance, and social media advertising services. The specifics of any project, including timelines, deliverables, and costs, will be outlined in a separate, formal Statement of Work (SOW) or project contract provided to the client.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">3. Intellectual Property</h2>
            <p>
              Unless otherwise explicitly agreed upon in a formal contract, Vireel Agency retains the rights to the underlying code, frameworks, and reusable libraries utilized in our projects. Upon full payment for services rendered, clients are granted a license to use the final delivered product for its intended business purpose.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">4. Limitation of Liability</h2>
            <p>
              Vireel Agency shall not be held liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our services, including but not limited to loss of profits, data, or business interruptions. 
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">5. Modifications to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Your continued use of the site and our services following any changes signifies your acceptance of the new terms.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}