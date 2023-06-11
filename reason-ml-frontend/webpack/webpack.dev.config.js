// eslint-disable-next-line import/no-extraneous-dependencies
const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	context: __dirname,
	mode: 'development',
	devtool: 'eval',
	entry: {
		'frontend-reason': path.resolve(__dirname, '../src/Index.bs.js'),
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, '../dist'),
		publicPath: '/',
		clean: true,
	},
	devServer: {
		static: {
			directory: path.resolve(__dirname, '../dist'),
			publicPath: '/',
		},
		historyApiFallback: true,
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
					},
				],
			},
			{
				test: /\.css$/i,
				exclude: /node_modules\/(?!react-virtualized|slick-).*/,
				use: [
					'style-loader', //
					'css-loader',
				],
			},
			{
				test: /\.scss$/i,
				exclude: /node_modules\/(?!react-virtualized|slick-).*/,
				use: [
					'style-loader', //
					'css-loader',
					'sass-loader',
				],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
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
