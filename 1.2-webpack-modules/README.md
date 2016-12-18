# TP Mise en place d'un projet webpack

## Objectifs

L'objectif de ce TP est de mettre en place la base d'un projet ES6 en utilisant le gestionnaire de module Webpack

## Préparatifs

- Créer un sous-dossier 'front' dans un dossier de votre arborescence web (*ex: c:\wamp\www\1.2-modules-webpack\front*)
- Dans le dossier 'front' initialiser un projet node en exécutant la commande `npm init` et personnaliser le package.json ainsi généré
- Installer les paquets NPM suivants avec l'option --save-dev:
    + babel-core
    + babel-loader
    + babel-preset-es2015
    + webpack
- ajouter un script dans le fichier package.json permettant de lancer plus facilement webpack :
```
"scripts": {
    "build": "webpack"
},
```


## Instructions

- A la racine du projet, créer un fichier webpack.config.js
- Définissez le fichier d'entrée à './js/app.js'
- Faites en sorte que le fichier de sortie soit situé dans './build/app.bundle.js'
- Faites en sorte que les fichiers "js" soient compilés via le **babel-loader** tout en excluant le dossier **node_modules**
- Créer et configurer le fichier .babelrc afin de gérer la syntaxe ES6
- Créer un fichier **helloWorld.js** dans un dossier **js** à la racine du projet
    + Créer une fonction **"helloWorld"** permettant d'afficher le message 'Hello world !' dans la console
    + Exportez la fonction
- Créer un fichier **app.js** dans un dossier **js** à la racine du projet
    + Importer le module 'helloWorld' créé précédemment
    + Appeler la méthode retournée par ce module
- Exécuter la commande `npm run build`
- Créer un fichier index.html avec la structure HTML de base
    + Inclure le fichier './build/app.bundle.js' dans la page
- ajouter la gestion des source-maps
- minifier et obfusquer le code généré

## Pour aller plus loin
- adapter le tp précédent (ui-framework) pour utiliser les modules

