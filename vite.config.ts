import { defineConfig } from 'vite';

import unocss from 'unocss/vite';
import { extractorSvelte } from '@unocss/core';
import {
  presetUno,
  presetAttributify,
  presetIcons,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';

import { svelte } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    unocss({
      extractors: [extractorSvelte],
      presets: [presetUno({ dark: 'media' }), presetAttributify(), presetIcons()],
      transformers: [transformerDirectives(), transformerVariantGroup()],
    }),
    svelte({
      preprocess: [sveltePreprocess()],
    }),
  ],
});
