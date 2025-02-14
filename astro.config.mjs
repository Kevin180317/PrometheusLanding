// @ts-nocheck
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';


import sitemap from "@astrojs/sitemap";


import robotsTxt from "astro-robots-txt";


// https://astro.build/config
export default defineConfig({
  site: 'https://prometheustij.com/',
  integrations: [tailwind(), react(), sitemap(), robotsTxt()],
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
  },
   
  experimental: {
    svg: true
  }
});