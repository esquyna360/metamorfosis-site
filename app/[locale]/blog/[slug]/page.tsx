import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPostWithContent, getPostSlugs, formatDate } from '@/lib/blog';
import AppStoreButtons from '@/components/AppStoreButtons';

interface Props {
  params: {
    locale: string;
    slug: string;
  };
}

export async function generateStaticParams({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const slugs = getPostSlugs(locale);
  return slugs.map((slug) => ({
    slug: slug.replace(/\.md$/, ''),
  }));
}

export async function generateMetadata({ params: { locale, slug } }: Props): Promise<Metadata> {
  setRequestLocale(locale);
  const post = await getPostWithContent(slug, locale);
  if (!post) return {};

  const url = `https://metamorfosisapp.com/${locale}/blog/${slug}`;

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: 'article',
      publishedTime: post.date,
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function BlogPostPage({ params: { locale, slug } }: Props) {
  setRequestLocale(locale);
  const post = await getPostWithContent(slug, locale);
  const t = await getTranslations({ locale, namespace: 'blog' });

  if (!post) {
    notFound();
  }

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: 'Metamorfosis',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Metamorfosis',
      logo: {
        '@type': 'ImageObject',
        url: 'https://metamorfosisapp.com/logo.png',
      },
    },
  };

  return (
    <div className="min-h-screen bg-white pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* Hero */}
      <div className="bg-gradient-to-br from-purple-900 via-purple-700 to-violet-600 py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <Link
            href={`/${locale}/blog`}
            className="text-purple-200 hover:text-white text-sm mb-8 inline-flex items-center gap-2 transition-colors"
          >
            {t('backToBlog')}
          </Link>

          <div className="flex flex-wrap gap-2 mb-6 mt-4">
            {post.tags.map((tag) => (
              <span key={tag} className="bg-white/20 text-white text-xs px-3 py-1 rounded-full font-medium">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex items-center gap-3 text-purple-200 text-sm">
            <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">🦋</span>
            <span>Metamorfosis</span>
            <span>·</span>
            <time dateTime={post.date}>{formatDate(post.date, locale)}</time>
          </div>
        </div>
      </div>

      {/* Article content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-xl text-gray-600 leading-relaxed mb-10 font-light border-l-4 border-purple-400 pl-6">
          {post.description}
        </p>

        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-gray-100">
          {post.tags.map((tag) => (
            <span key={tag} className="bg-purple-50 text-purple-700 text-sm px-4 py-1.5 rounded-full font-medium">
              #{tag}
            </span>
          ))}
        </div>

        {/* CTA box */}
        <div className="mt-16 bg-gradient-to-br from-purple-600 to-violet-700 rounded-3xl p-8 sm:p-10 text-center">
          <span className="text-4xl mb-4 block">🦋</span>
          <h3 className="text-2xl font-bold text-white mb-3">
            {locale === 'pt-BR' ? 'Pronto para começar sua jornada?' : '¿Listo para comenzar tu viaje?'}
          </h3>
          <p className="text-purple-100 mb-8 max-w-md mx-auto">
            {locale === 'pt-BR'
              ? 'Baixe o Metamorfosis grátis e comece a transformar seus sentimentos em autoconhecimento hoje.'
              : 'Descarga Metamorfosis gratis y empieza a transformar tus emociones en autoconocimiento hoy.'}
          </p>
          <div className="flex justify-center">
            <AppStoreButtons />
          </div>
        </div>
      </div>
    </div>
  );
}
