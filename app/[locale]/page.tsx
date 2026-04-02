import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import BlogCard from '@/components/BlogCard';
import AppStoreButtons from '@/components/AppStoreButtons';
import { getAllPosts } from '@/lib/blog';
import Link from 'next/link';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'meta' });
  const url = `https://metamorfosisapp.com/${locale}`;
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: url,
      languages: {
        'pt-BR': 'https://metamorfosisapp.com/pt-BR',
        'es-MX': 'https://metamorfosisapp.com/es-MX',
        'x-default': 'https://metamorfosisapp.com/pt-BR',
      },
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url,
      type: 'website',
      siteName: 'Metamorfosis',
      locale: locale === 'pt-BR' ? 'pt_BR' : 'es_MX',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      site: '@metamorfosisapp',
    },
  };
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MobileApplication',
  name: 'Metamorfosis',
  operatingSystem: 'iOS, Android',
  applicationCategory: 'HealthApplication',
  description: 'Diário emocional com inteligência artificial para autoconhecimento e bem-estar mental.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'BRL',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '2400',
  },
};

export default async function HomePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);
  const blogT = await getTranslations({ locale, namespace: 'blog' });
  const ctaT = await getTranslations({ locale, namespace: 'cta' });
  const recentPosts = getAllPosts(locale).slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />

      {/* Blog preview */}
      {recentPosts.length > 0 && (
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {blogT('title')}
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                {blogT('subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {recentPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>

            <div className="text-center">
              <Link
                href={`/${locale}/blog`}
                className="inline-flex items-center gap-2 border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-3 rounded-full font-semibold transition-all"
              >
                {blogT('viewAll')}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-purple-900 via-purple-700 to-violet-600 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl opacity-20" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-400 rounded-full filter blur-3xl opacity-15" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {ctaT('title')}
          </h2>
          <p className="text-xl text-purple-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            {ctaT('subtitle')}
          </p>
          <div className="flex flex-col items-center gap-4">
            <AppStoreButtons />
            <p className="text-purple-200 text-sm">{ctaT('noCard')}</p>
          </div>
        </div>
      </section>
    </>
  );
}
