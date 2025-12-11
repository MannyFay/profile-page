import type { Config } from '@react-router/dev/config';

export default {
  // Pre-render all routes for static hosting (GitHub Pages)
  ssr: false,
  prerender: ['/', '/about', '/skills', '/projects', '/documents', '/contact', '/site-notice'],
} satisfies Config;
