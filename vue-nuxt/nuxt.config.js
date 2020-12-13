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
		extend(config) {
			config.resolve.alias['$shared'] = '../../shared';
			config.output.publicPath = './_nuxt/'
		}
	}
};
