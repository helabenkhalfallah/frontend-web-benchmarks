// eslint-disable-next-line import/no-extraneous-dependencies
const TerserPlugin = require('terser-webpack-plugin');
// eslint-disable-next-line import/no-extraneous-dependencies
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// eslint-disable-next-line import/no-extraneous-dependencies
const HtmlWebPackPlugin = require('html-webpack-plugin');
// eslint-disable-next-line import/no-extraneous-dependencies
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
// eslint-disable-next-line import/no-extraneous-dependencies
const CompressionPlugin = require('compression-webpack-plugin');
// eslint-disable-next-line import/no-extraneous-dependencies
const WorkboxPlugin = require('workbox-webpack-plugin');
// eslint-disable-next-line import/no-extraneous-dependencies
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer-brotli');

const zlib = require('zlib');
const path = require('path');

module.exports = {
	mode: 'production',
	entry: {
		'frontend-react': './src/index.js',
	},
	output: {
		path: path.resolve(__dirname, '../dist'),
		publicPath: '/public/',
		filename: '[name].js',
		chunkFilename: 'frontend-react-[id].chunk.js',
		clean: true,
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
					MiniCssExtractPlugin.loader, //
					'style-loader',
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
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeRedundantAttributes: true,
				useShortDoctype: true,
				removeEmptyAttributes: true,
				removeStyleLinkTypeAttributes: true,
				keepClosingSlash: true,
				minifyJS: true,
				minifyCSS: true,
				minifyURLs: true,
			},
		}),
		new MiniCssExtractPlugin({
			filename: 'static/css/[name].[contenthash:8].css',
			chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
		}),
		new CssMinimizerPlugin(),
		new WorkboxPlugin.GenerateSW({
			// these options encourage the ServiceWorkers to get in there fast
			// and not allow any straggling "old" SWs to hang around
			clientsClaim: true,
			skipWaiting: true,
		}),
		new CompressionPlugin({
			filename: '[path][base].gz',
			algorithm: 'gzip',
			test: /\.js$|\.css$|\.html$/,
			threshold: 10240,
			minRatio: 0.8,
		}),
		new CompressionPlugin({
			filename: '[path][base].br',
			algorithm: 'brotliCompress',
			test: /\.(js|css|html|svg)$/,
			compressionOptions: {
				params: {
					[zlib.constants.BROTLI_PARAM_QUALITY]: 11,
				},
			},
			threshold: 10240,
			minRatio: 0.8,
		}),
		new BundleAnalyzerPlugin(),
	],
	optimization: {
		realContentHash: false,
		minimize: true,
		minimizer: [
			new TerserPlugin({
				test: /\.js(\?.*)?$/i,
			}),
		],
	},
};
