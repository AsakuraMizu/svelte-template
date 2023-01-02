/// <reference types="vitest" />
import { defineConfig } from 'vite';
import { resolve } from 'path';

import unocss from '@unocss/vite';
import { svelte, vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    unocss(),
    svelte({
      preprocess: [vitePreprocess()],
      hot: !process.env.VITEST,
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  test: {
    environment: 'jsdom',
  },
});
