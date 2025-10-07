import adapter from 'svelte-adapter-appengine';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	runes: true,
	kit: {
		adapter: adapter(),
		alias: {
      '@view/*': './src/view/*',
    }
	}
};

export default config;
