/// <reference types="vitest" />
import { defineConfig } from 'vite';
import { resolve } from 'path';

import unocss from '@unocss/vite';
import { extractorSvelte } from '@unocss/core';
import presetUno from '@unocss/preset-uno';
import presetAttributify from '@unocss/preset-attributify';
import presetIcons from '@unocss/preset-icons';
import transformerDirectives from '@unocss/transformer-directives';
import transformerVariantGroup from '@unocss/transformer-variant-group';

import { svelte, vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    unocss({
      extractors: [extractorSvelte],
      presets: [presetUno({ dark: 'media' }), presetAttributify(), presetIcons()],
      transformers: [transformerDirectives(), transformerVariantGroup()],
    }),
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
