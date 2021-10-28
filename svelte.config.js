import preprocess from 'svelte-preprocess';
import WindiCSS from 'vite-plugin-windicss';
import Icons from 'unplugin-icons/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			plugins: [
				WindiCSS(),
				Icons({
					compiler: 'svelte'
				})
			]
		}
	}
};

export default config;
