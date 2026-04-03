import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import BlogCard from '@/components/BlogCard';
import { getAllPosts } from '@/lib/blog';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'meta' });
  const url = `https://metamorfosisapp.com/${locale}/blog`;
  return {
    title: t('blogTitle'),
    description: t('blogDescription'),
    alternates: {
      canonical: url,
      languages: {
        'pt-BR': 'https://metamorfosisapp.com/pt-BR/blog',
        'es-MX': 'https://metamorfosisapp.com/es-MX/blog',
        'x-default': 'https://metamorfosisapp.com/pt-BR/blog',
      },
    },
    openGraph: {
      title: t('blogTitle'),
      description: t('blogDescription'),
      url,
      type: 'website',
      siteName: 'Metamorfosis',
      locale: locale === 'pt-BR' ? 'pt_BR' : 'es_MX',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('blogTitle'),
      description: t('blogDescription'),
      site: '@metamorfosisapp',
    },
  };
}

export default async function BlogPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'blog' });
  const posts = getAllPosts(locale);

  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: locale === 'pt-BR' ? 'Artigos sobre Saúde Emocional' : 'Artículos sobre Salud Emocional',
    url: `https://metamorfosisapp.com/${locale}/blog`,
    numberOfItems: posts.length,
    itemListElement: posts.map((post, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `https://metamorfosisapp.com/${locale}/blog/${post.slug}`,
      name: post.title,
    })),
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Metamorfosis',
        item: `https://metamorfosisapp.com/${locale}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: locale === 'pt-BR' ? 'Blog' : 'Blog',
        item: `https://metamorfosisapp.com/${locale}/blog`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Header */}
      <div className="bg-gradient-to-br from-purple-900 via-purple-700 to-violet-600 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {t('title')}
          </h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
      </div>

      {/* Posts grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {posts.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            <span className="text-5xl mb-4 block">📝</span>
            <p>Nenhum artigo encontrado.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
