import Link from 'next/link';
import { getDictionary } from '@/getDictionary';

// 1. Dynamic Metadata to translate the SEO Title and Description
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "es");
  
  return {
    title: dict.privacy.seoTitle,
    description: dict.privacy.seoDesc,
  };
}

// 2. The Translated Component
export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "es");

  return (
    <main className="py-24 bg-white px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        
        <Link href={`/${lang}`} className="text-indigo-600 font-semibold hover:underline mb-8 inline-block">
          {dict.privacy.back}
        </Link>

        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">{dict.privacy.h1}</h1>
        <p className="text-slate-500 mb-10">{dict.privacy.lastUpdated}</p>
        
        <div className="prose prose-lg text-slate-600 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">{dict.privacy.s1Title}</h2>
            <p>{dict.privacy.s1Text}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">{dict.privacy.s2Title}</h2>
            <p>{dict.privacy.s2Text}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">{dict.privacy.s3Title}</h2>
            <p>{dict.privacy.s3Text}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">{dict.privacy.s4Title}</h2>
            <p>{dict.privacy.s4Text}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">{dict.privacy.s5Title}</h2>
            <p>
              {dict.privacy.s5Text} <a href={`mailto:${dict.privacy.email}`} className="text-indigo-600 hover:underline">{dict.privacy.email}</a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}