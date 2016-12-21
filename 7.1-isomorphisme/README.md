# TP Isomorphisme

## Objectifs

L'objectif de ce TP est d'optimiser le temps de chargement et le référencement de l'application en effectuant le prérendu des pages consultées côté serveur.

## Préparatifs

- récupérer le dossier de démarrage ou bien copier le dossier **"front/js/server"** et le fichier **"front/launch-server.js"** dans votre projet.
- Installer les packets NPM suivants avec l'option --save:
    + express
- configurer le chemin vers l'api et les uploads dans le fichier **front/js/server/config.json** 

## Instructions

- Modifier les composants **VideoList** et **Video** afin de leur faire implémenter la méthode statique **fetchData**. *Attention: dans le cas du composant **Video** deux actions différentes sont appelées ([indice](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise/all)).*
- Lancer le serveur via la commande `node launch-server.js`
- tester le site sur http://localhost:3333 (utiliser le view-source opur voir le pré-remplissage du DOM !)