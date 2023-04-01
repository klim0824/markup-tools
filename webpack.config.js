const path = require('path');

module.exports = {
	mode: 'development',
	entry: {
		common: path.join(__dirname, '/src/assets/script/common.ts'),
		top: path.join(__dirname, '/src/assets/script/top.ts'),
	},
	output: {
		path: path.join(__dirname, 'dist/assets/script'),
		filename: '[name].js',
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
};
