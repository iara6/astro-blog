// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
/* export default defineConfig({}); */

export default defineConfig({
  site: 'https://dazzling-test-blog.netlify.app/',
  integrations: [icon({
  }), sitemap()],
});