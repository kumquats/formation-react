const path = require('path');
module.exports = {
	entry: './js/app.js', // Fichier d'entrée
	output: { // Fichier de sortie
		path: path.resolve(__dirname, './build'),
		filename: 'app.bundle.js'
	},
	module: {
		rules: [{
			test: /\.js$/, // tous les fichiers .js ...
			exclude: /node_modules/, // ... sauf le dossier node_modules ...
			use: { // ... seront transpilés par babel
				loader: 'babel-loader'
			}
		}]
	},
	devtool: 'source-map'
}