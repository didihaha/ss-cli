const merge = require('webpack-merge'),
	webpack = require('webpack'),
	devConfig = require('../config/dev'),
	base = require('./webpack.base')

const dev = {
	mode: 'development',
	devtool: 'inline-source-map',
	output: {
		publicPath: '/',
		filename: '[name].js',
		chunkFilename: '[name].chunk.js',
		sourceMapFilename: '[file].map'
	},
	module: {
		rules: [
			{
				test: /\.(css|less)$/,
				use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
                exclude: /node_modules/
			}
		]
	},
	devServer: {
		historyApiFallback: true,
		host: 'localhost',
		port: 8000,
		hot: true,
		open: true,
		inline: true,
		compress: true,
		progress: true,
		// watchContentBase: true
	},
	optimization: {
		namedModules: true
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.DefinePlugin(devConfig)
	]
}

module.exports = merge(base, dev)