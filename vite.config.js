import { defineConfig } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';
// import viteVueUnocss, { unocss, flex, border, sketch, pseudo } from './js_sdk/a-hua-unocss';

export default defineConfig(async () => {
	const UnoCss = await import('unocss/vite').then(i => i.default)
	return {
		plugins: [
			uni(),
		],
		build: {
		    target: 'es2018'
		}
	}
});