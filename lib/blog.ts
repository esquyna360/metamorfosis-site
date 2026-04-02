import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  coverImage?: string;
  content: string;
  locale: string;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  coverImage?: string;
  locale: string;
}

const contentDirectory = path.join(process.cwd(), 'content/blog');

export function getPostSlugs(locale: string): string[] {
  const dir = path.join(contentDirectory, locale);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => f.endsWith('.md'));
}

export function getPostBySlug(slug: string, locale: string): BlogPostMeta | null {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = path.join(contentDirectory, locale, `${realSlug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data } = matter(fileContents);

  return {
    slug: realSlug,
    title: data.title ?? '',
    description: data.description ?? '',
    date: data.date ?? '',
    tags: data.tags ?? [],
    coverImage: data.coverImage,
    locale,
  };
}

export async function getPostWithContent(slug: string, locale: string): Promise<BlogPost | null> {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = path.join(contentDirectory, locale, `${realSlug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const processed = await remark().use(remarkHtml).process(content);
  const htmlContent = processed.toString();

  return {
    slug: realSlug,
    title: data.title ?? '',
    description: data.description ?? '',
    date: data.date ?? '',
    tags: data.tags ?? [],
    coverImage: data.coverImage,
    content: htmlContent,
    locale,
  };
}

export function getAllPosts(locale: string): BlogPostMeta[] {
  const slugs = getPostSlugs(locale);
  const posts = slugs
    .map((slug) => getPostBySlug(slug, locale))
    .filter((post): post is BlogPostMeta => post !== null)
    .sort((a, b) => (a.date > b.date ? -1 : 1));
  return posts;
}

export function formatDate(dateString: string, locale: string): string {
  const date = new Date(dateString);
  const localeCode = locale === 'pt-BR' ? 'pt-BR' : 'es-MX';
  return date.toLocaleDateString(localeCode, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
