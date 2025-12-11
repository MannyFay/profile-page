/**
 * Centralized meta tag utilities for consistent SEO across all routes.
 */

export const BASE_URL = 'https://mhfay.de';
export const DEFAULT_DESCRIPTION =
  'Manuel-Hubertus Fay - Software Engineer · Command Liner · Automation Lover';
export const SITE_NAME = 'M.-H. Fay';
export const DEFAULT_IMAGE = '/images/profile.png';

interface MetaOptions {
  title: string;
  path: string;
  description?: string;
  image?: string;
}

interface LinksOptions {
  path: string;
}

/**
 * Creates meta tags for a route with consistent formatting.
 * Includes Open Graph and Twitter Card meta tags for social sharing.
 */
export function createMeta({
  title,
  path,
  description = DEFAULT_DESCRIPTION,
  image = DEFAULT_IMAGE,
}: MetaOptions) {
  const fullTitle = `${SITE_NAME} | ${title}`;
  const fullUrl = `${BASE_URL}${path}`;
  const fullImage = `${BASE_URL}${image}`;

  return [
    { title: fullTitle },
    { name: 'description', content: description },
    // Open Graph
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: SITE_NAME },
    { property: 'og:title', content: fullTitle },
    { property: 'og:description', content: description },
    { property: 'og:url', content: fullUrl },
    { property: 'og:image', content: fullImage },
    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: fullTitle },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: fullImage },
  ];
}

/**
 * Creates link tags for a route including canonical URL.
 */
export function createLinks({ path }: LinksOptions) {
  return [{ rel: 'canonical', href: `${BASE_URL}${path}` }];
}
