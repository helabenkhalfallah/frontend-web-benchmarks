// eslint-disable-next-line import/no-extraneous-dependencies
const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	mode: 'development',
	entry: {
		'frontend-react': './src/index.js',
	},
	output: {
		path: path.resolve(__dirname, '../dist'),
		publicPath: '/',
		filename: 'js-frontend-react-bundle.js',
		clean: true,
	},
	devServer: {
		static: {
			directory: path.resolve(__dirname, '../dist'),
			publicPath: '/',
		},
		historyApiFallback: true,
		allowedHosts: 'all',
		compress: true,
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': '*',
			'Access-Control-Allow-Headers': '*',
		},
		devMiddleware: {
			writeToDisk: true,
		},
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
					},
				],
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					'style-loader', //
					'css-loader',
					'sass-loader',
				],
			},
		],
	},
	resolve: {
		extensions: [
			'.js', //
			'.json',
			'.jsx',
			'.css',
			'.scss',
		],
		fallback: {
			util: false,
			buffer: false,
			stream: false,
		},
	},
	plugins: [
		new HtmlWebPackPlugin({
			publicPath: '.',
			inject: true,
			template: path.resolve(__dirname, '../public/index.html'),
			filename: 'index.html',
		}),
	],
};
