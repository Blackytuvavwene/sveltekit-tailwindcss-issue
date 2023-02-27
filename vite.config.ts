import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import  WindiCSS from 'vite-plugin-windicss';

export default defineConfig({
	plugins: [
		sveltekit(),
		WindiCSS()
	],
	// css:{
	// 	postcss:{
	// 		plugins: [tailwindcss, autoprefixer],
	// 	}
	// },
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
