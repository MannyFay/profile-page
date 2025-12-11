import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route('about', 'routes/about.tsx'),
  route('skills', 'routes/skills.tsx'),
  route('projects', 'routes/projects.tsx'),
  route('documents', 'routes/documents.tsx'),
  route('contact', 'routes/contact.tsx'),
  route('site-notice', 'routes/site-notice.tsx'),
] satisfies RouteConfig;
