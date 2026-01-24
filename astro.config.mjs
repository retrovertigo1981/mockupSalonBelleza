// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  vite: {
      plugins: [tailwindcss({ content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"] })]
  },

  integrations: [react()]
});