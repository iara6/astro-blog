// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
/* export default defineConfig({}); */

export default defineConfig({
  site: 'http://localhost:4322',
  integrations: [icon({
  }), sitemap()],
});