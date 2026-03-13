// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
/* export default defineConfig({}); */

export default defineConfig({
  site: 'https://iara6.github.io/astro-blog/',
  integrations: [icon({
  }), sitemap()],
});