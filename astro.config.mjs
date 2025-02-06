// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import icon from 'astro-icon';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site:"https://curso-avanzado-astro-manu.vercel.app",
  integrations: [tailwind(), icon({
    include: {
      lucide: ["*"]
    }
  }), sitemap()]
});