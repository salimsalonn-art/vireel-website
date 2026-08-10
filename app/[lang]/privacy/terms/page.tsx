import Link from 'next/link';
import { getDictionary } from '@/getDictionary';

// 1. Dynamic Metadata to translate the SEO Title and Description
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: 'en' | 'es' }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  
  return {
    title: dict.terms.seoTitle,
    description: dict.terms.seoDesc,
  };
}

// 2. The Translated Component
export default async function TermsOfServicePage({
  params,
}: {
  params: Promise<{ lang: 'en' | 'es' }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <main className="py-24 bg-white px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        
        {/* Links back to the correct language home page */}
        <Link href={`/${lang}`} className="text-indigo-600 font-semibold hover:underline mb-8 inline-block">
          {dict.terms.back}
        </Link>

        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">{dict.terms.h1}</h1>
        <p className="text-slate-500 mb-10">{dict.terms.lastUpdated}</p>
        
        <div className="prose prose-lg text-slate-600 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">{dict.terms.s1Title}</h2>
            <p>{dict.terms.s1Text}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">{dict.terms.s2Title}</h2>
            <p>{dict.terms.s2Text}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">{dict.terms.s3Title}</h2>
            <p>{dict.terms.s3Text}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">{dict.terms.s4Title}</h2>
            <p>{dict.terms.s4Text}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">{dict.terms.s5Title}</h2>
            <p>{dict.terms.s5Text}</p>
          </section>
        </div>
      </div>
    </main>
  );
}