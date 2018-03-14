# TP Isomorphisme

## Objectifs

L'objectif de ce TP est d'optimiser le temps de chargement et le référencement de l'application en effectuant le prérendu des pages consultées côté serveur.

## Préparatifs

- récupérer le dossier de démarrage ou bien copier le dossier **"src/js/server"** et le fichier **"src/launch-server.js"** dans votre projet.
- Installer les packets NPM suivants avec l'option --save:
    + express
- configurer le chemin vers l'api et les uploads dans le fichier **src/js/server/config.json**

## Instructions
1. Initialiser le store redux avec le state pré-calculé côté serveur :
	+ Dans `app.js` passer le state pré-calculé à la fonction configureStore() :
	```js
	const store = configureStore( browserHistory, window.__PRELOADED_STATE__ || {} );
	```
	+ Dans la fonction `configureStore`, ajouter ce paramètre `preloadedState` à la fois dans la déclaration de la fonction mais aussi dans l'appel à `createStore()`
2. Modifier les actions creators aynchrones de l'application pour qu'ils retournent la request qu'ils utilisent, par exemple:
	```javascript
	export function fetchVideo( videoId ) {
		return ( dispatch, getState ) => {
			return request
				.get(...)
	```
3. Modifier les composants **VideoList** et **Video** afin de leur faire implémenter la méthode statique **fetchData**. *Attention: dans le cas du composant **Video** deux actions différentes sont appelées ([indice](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise/all)).*
4. Builder le js de l'application
5. Lancer le serveur via la commande `node launch-server.js`
6. Tester le site sur http://localhost:3333 :
	+ utiliser le view-source pour voir le pré-remplissage du DOM,
	+ et constater dans les redux devtools qu'il n'y a pas de différence de state lorsque le js côté front reprend la main (et donc pas de nouveau render inutile) !