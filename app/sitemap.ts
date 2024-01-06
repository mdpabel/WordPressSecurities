import { getProducts } from '@/swell/product';

const siteUrl = process.env.SITE_URL || 'https://www.wordpresssecurities.com/';

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

  return [...staticPages, ...dynamicPages];
}
