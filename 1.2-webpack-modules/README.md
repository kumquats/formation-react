# TP Mise en place d'un projet webpack

## Objectifs

L'objectif de ce TP est de mettre en place la base d'un projet utilisant le gestionnaire de modules [Webpack](https://webpack.js.org/). Ces fichiers serviront de base pour tous les TPs suivants !

## Préparatifs
- Créer un sous-dossier pour le TP dans votre arborescence web : par exemple `c:\wamp\www\1.2-modules-webpack`
- Dans ce dossier, reproduire l'arborescence suivante :
```
src/
  js/
    app.js
  build/
```
- Dans le dossier `src` initialiser le projet npm à l'aide de la commande :
```bash
npm init
```
- personnaliser le `package.json` ainsi généré (nom, auteur, ...)
- Installer les paquets NPM suivants avec l'option --save-dev:
    + babel-core
    + babel-loader
    + babel-preset-env
    + webpack
- configurer Babel à l'aide d'un fichier `.babelrc`
- ajouter un script dans le fichier `package.json` qui permettra de lancer plus facilement webpack :
```json
"scripts": {
    "build": "webpack"
},
```
```bash
npm run build
```


## Instructions
1. A la racine du projet, créer un fichier `webpack.config.js`
2. Définissez le fichier d'entrée à `js/app.js`
3. Faites en sorte que le fichier de sortie soit situé dans `build/app.bundle.js`
4. Faites en sorte que les fichiers `.js` soient compilés via `babel-loader` tout en excluant le dossier `node_modules`
6. Dans le fichier `app.js` :
- Créer une fonction **"helloWorld()"** permettant d'afficher le message '**Hello world !**' dans la console
- Exportez la fonction
7. Créer un fichier **app.js** dans un dossier **js** à la racine du projet
    + Importer le module 'helloWorld' créé précédemment
    + Appeler la méthode retournée par ce module
8. Exécuter la commande `npm run build`
9. Créer un fichier index.html avec la structure HTML de base
    + Inclure le fichier './build/app.bundle.js' dans la page
10. ajouter la gestion des source-maps
11. minifier et obfusquer le code généré

## Pour aller plus loin
- adapter le tp précédent (ui-framework) pour utiliser les modules

