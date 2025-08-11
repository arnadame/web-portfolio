// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://arnadame.github.io',
  base: 'web-portfolio',

  vite: {
    plugins: [tailwindcss()],
  },
})