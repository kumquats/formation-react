const path = require('path');
const webpack = require('webpack');
module.exports = {
	// Fichier d'entrée
	entry: './js/app.js',
	// Fichier de sortie
	output: {
		path: path.resolve(__dirname, '../site/web/js'),
		filename: 'app.bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/, // tous les fichiers .js
				exclude: /node_modules/, // sauf le dossier node_modules
				use: { // seront transpilés par babel
					loader: 'babel-loader',
					options: {
						cacheDirectory: true // accélère la génération des JS en cachant les transpilations
					}
				}
			}
		]
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
}