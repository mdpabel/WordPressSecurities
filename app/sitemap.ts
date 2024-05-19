import { getProducts } from '@/swell/product';
import { PostType, getPosts } from '@/wordpress/posts';

const siteUrl = process.env.SITE_URL || 'https://www.nextgenwordpress.com';

type SitemapType = Array<{
  url: string;
  lastModified?: string | Date;
  changeFrequency?:
    | 'always'
    | 'hourly'
    | 'daily'
    | 'weekly'
    | 'monthly'
    | 'yearly'
    | 'never';
  priority?: number;
}>;

const unAuthenticatedPages = [
  '',
  'emergency',
  'faq',
  'pricing',
  'privacy',
  'privacy',
  'terms',
];

export default async function sitemap() {
  const staticPages: SitemapType = unAuthenticatedPages.map((p) => ({
    url: siteUrl + '/' + p,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 1,
  }));

  const solutions = await getProducts();

  const dynamicPages: SitemapType = solutions.map((solution) => ({
    url: siteUrl + '/solutions/' + solution.slug,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 1,
  }));

  const blogs: PostType[] = await getPosts();

  const posts: SitemapType = blogs.map((blog) => ({
    url: siteUrl + '/guides/' + blog.slug,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.5,
  }));

  return [...staticPages, ...dynamicPages, ...posts];
}
