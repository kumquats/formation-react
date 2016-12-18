const webpack = require('webpack');
module.exports = {
	entry: './js/app.js',
	output: {
		path: '../back/web',
		filename: 'app.bundle.js'
	},
	module: {
		loaders: [{
			test: /\.js?$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		}]
	},
	devtool: 'source-map',
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
			},
			output: {
				comments: false,
			},
		}),
	]
};