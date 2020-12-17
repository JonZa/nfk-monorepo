const path = require('path');
export default {
	target: 'static',
	/*
	 ** Nuxt.js dev-modules
	 */
	buildModules: ['@aceforth/nuxt-optimized-images'],
	optimizedImages: {
		optimizeImages: true
	},
	/*
	 ** Build configuration
	 */
	build: {
		/*
		 ** You can extend webpack config here
		 */
		extend(config, { isDev, isClient }) {
			config.resolve.alias['$shared'] = path.join(__dirname, '../shared');
			if (isClient) config.output.publicPath = './_nuxt/';
		}
	}
};
