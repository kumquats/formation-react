# TP Mise en place d'un projet webpack

## Objectifs

L'objectif de ce TP est de mettre en place la base d'un projet utilisant le gestionnaire de modules [Webpack](https://webpack.js.org/). Ces fichiers serviront de base pour tous les TPs suivants !

## Préparatifs
- Créer un sous-dossier pour le TP dans votre arborescence web : par exemple `c:\wamp\www\1.2-modules-webpack`
- Dans ce dossier, reproduire l'arborescence suivante :
	```
	src/
	  ├─ js/
	  └─ build/
	```
- Dans le dossier `src` initialiser le projet npm à l'aide de la commande :
	```bash
	npm init
	```
- Installer les paquets NPM suivants avec l'option --save-dev:
    + [@babel/core](https://www.npmjs.com/package/@babel/core)
    + [@babel/cli](https://www.npmjs.com/package/@babel/cli)
    + [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env)
    + [babel-loader](https://www.npmjs.com/package/babel-loader)
    + [webpack](https://www.npmjs.com/package/webpack)
    + [webpack-cli](https://www.npmjs.com/package/webpack-cli)
- configurer Babel à l'aide d'un fichier `.babelrc` comme vu dans le précédent TP
- ajouter un script dans le fichier `package.json` qui permettra de lancer plus facilement webpack :
	```json
	"scripts": {
		"build": "webpack"
	},
	```


## Instructions
1. **Créer un fichier `src/webpack.config.js` et configurer webpack :**
	```js
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
		}
	}
	```
2. **Créer un premier module `js/helloWorld.js` :**
	- y placer une fonction **"helloWorld()"** qui affiche dans la console le message  '**Hello world !**'
	- Penser à exportez la fonction pour la rendre disponible aux autres modules
3. **Créer un fichier `js/app.js` :**
    - Importer le module `helloWorld` créé précédemment
    - Appeler la méthode retournée par ce module
4. **Lancer la compilation avec webpack** grâce à la commande `"build"` configurée dans le `package.json` :
	```bash
	npm run build
	```
1. **Créer un fichier `src/index.html` :**
	- Y inclure une structure html de base
    - Charger le fichier `./build/app.bundle.js` dans la page
	- Tester la page `index.html` dans le navigateur (*en `http://` et pas en `file://`*) et vérifier que la fonction `helloWorld()` affiche bien un message dans la console

## Pour aller plus loin
1. **Configurer webpack pour générer des fichiers source-maps** à l'aide de la clé de configuration "devtool" (cf. documentation : https://webpack.js.org/configuration/devtool/)
2. **Passer du mode "production" (appliqué par défaut) au mode "development"** (cf. https://webpack.js.org/concepts/mode/) et constater la différence sur le fichier `app.bundle.js`
3. **Adapter le tp précédent (ui-framework) en utilisant les modules**