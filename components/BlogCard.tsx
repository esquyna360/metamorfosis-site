import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { BlogPostMeta, formatDate } from '@/lib/blog';

interface BlogCardProps {
  post: BlogPostMeta;
}

export default function BlogCard({ post }: BlogCardProps) {
  const locale = useLocale();
  const t = useTranslations('blog');

  const tagColors = [
    'bg-purple-100 text-purple-700',
    'bg-violet-100 text-violet-700',
    'bg-indigo-100 text-indigo-700',
    'bg-pink-100 text-pink-700',
  ];

  return (
    <article className="group bg-white rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
      {/* Card header gradient */}
      <div className="h-40 bg-gradient-to-br from-purple-600 via-violet-600 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-7xl opacity-20">
          📖
        </div>
        <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
          {post.tags.slice(0, 2).map((tag, i) => (
            <span
              key={tag}
              className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="p-6">
        <time className="text-purple-600 text-xs font-semibold uppercase tracking-wide">
          {formatDate(post.date, locale)}
        </time>

        <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3 leading-snug group-hover:text-purple-700 transition-colors">
          {post.title}
        </h3>

        <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
          {post.description}
        </p>

        <Link
          href={`/${locale}/blog/${post.slug}`}
          className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 font-semibold text-sm transition-colors"
        >
          {t('readMore')}
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
