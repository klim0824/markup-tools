const path = require('path');

module.exports = {
	mode: 'development',
	entry: {
		common: './src/assets/script/common.ts',
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
	output: {
		path: path.resolve(__dirname, 'dist/assets/script'),
		filename: '[name].js',
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
};
