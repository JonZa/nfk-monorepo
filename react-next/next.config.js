const path = require('path');
module.exports = {
	basePath: '/react',
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
