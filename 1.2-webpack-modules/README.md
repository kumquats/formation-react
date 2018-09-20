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
1. **Dans le dossier `src`, créer un fichier `webpack.config.js` et configurer webpack** :
	- Définissez le fichier d'entrée à `./js/app.js`
	- Configurez le fichier de sortie dans `build/app.bundle.js`, vous aurez pour cela besoin du module `path` dont vous trouverez un exemple d'utilisation dans la [documentation de webpack](https://webpack.js.org/concepts/#output)
	- Faites en sorte que les fichiers `.js` soient compilés via `babel-loader` tout en excluant le dossier `node_modules`. L'exemple se trouve dans le support mais la documentation des différents loaders de webpack est [disponible ici](https://webpack.js.org/loaders/)
2. **Créer un premier module `helloWorld.js`** dans le dossier `js` :
	- y placer une fonction **"helloWorld()"** qui affiche dans la console le message  '**Hello world !**'
	- Penser à exportez la fonction pour la rendre disponible aux autres modules
3. **Créer un fichier `app.js`** dans le dossier `js` :
    - Importer le module `helloWorld` créé précédemment
    - Appeler la méthode retournée par ce module
4. **Lancer la compilation avec webpack** grâce à la commande "build" configurée dans le `package.json`
	```bash
	npm run build
	```
5. **Créer un fichier `index.html`** dans le dossier `src`
	+ Y inclure une structure html de base
    + Inclure le fichier `./build/app.bundle.js` dans la page
	+ Tester la page `index.html` dans le navigateur et vérifier que la fonction helloWorld() affiche bien un message dans la console
6. **Configurer webpack pour générer des fichiers source-maps**
7. **Passer du mode "production" (par défaut) au mode "development"** (cf. https://webpack.js.org/concepts/mode/) et constater la différence sur le fichier `app.bundle.js`

## Pour aller plus loin
- Adapter le tp précédent (ui-framework) en utilisant les modules

