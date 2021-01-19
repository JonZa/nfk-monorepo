const path = require('path');
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const nextConfig = {
	basePath: '/react',
	assetPrefix: '/react',
	webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
		config.resolve.alias['$shared'] = path.join(__dirname, '../shared');
		config.module.rules.push({
			test: /\.(pdf)$/i,
			loader: 'file-loader',
			options: {
				name: '[path][name].[ext]',
			},
		});
		return config;
	},
};

module.exports = withPlugins(
	[
		optimizedImages,
		{
			/* config for next-optimized-images */
			optimizeImagesInDev: true,
			handleImages: ['jpg'],
			responsive: {
				adapter: require('responsive-loader/sharp'),
			},
		},
	],
	nextConfig
);
