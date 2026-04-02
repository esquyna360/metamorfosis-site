import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/blog';

const baseUrl = 'https://metamorfosisapp.com';
const locales = ['pt-BR', 'es-MX'];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = locales.flatMap((locale) => [
    {
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/${locale}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]);

  const blogRoutes: MetadataRoute.Sitemap = locales.flatMap((locale) => {
    const posts = getAllPosts(locale);
    return posts.map((post) => ({
      url: `${baseUrl}/${locale}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));
  });

  return [...staticRoutes, ...blogRoutes];
}
