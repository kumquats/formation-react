# TP Redux

## Objectifs

L'objectif de ce TP est d'apprendre à structurer l'application et à gérer efficacement le state global à l'aide de Redux.

## Préparatifs
1. Repartir des fichiers du TP précédent ou du dossier demarrage fourni.
1. Installer redux, react-redux et redux-thunk avec l'option --save :
	```bash
	npm install --save redux react-redux redux-thunk
	```
1. Consulter la documentation de [Redux](http://redux.js.org/#documentation)
1. Installer l'extension chrome [Redux Devtools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)
1. Réorganiser les fichiers selon la structure suivante et modifier les imports en conséquence:
	```bash
	src/
	  └─ js/
	      ├─ app.js
	      ├─ actions/
	      ├─ components/
	      │   └─ VideoItem.js
	      ├─ containers/
	      │   ├─ Video.js
	      │   ├─ VideoForm.js
	      │   └─ VideoList.js
	      ├─ reducers/
	      └─ store/
	```

## Instructions
*Si développer une application Redux en partant de zéro est assez aisé, convertir un projet existant pour y intégrer redux n'est pas si simple : beaucoup de modifications sont à apporter au code avant de pouvoir tester le résultat. Il ne sera donc possible de tester le bon fonctionnement de vos modifications **qu'après avoir tout converti** ! <br>Alors, accrochez vous, c'est parti !*

### 1. Connecter la VideoList à Redux :

1. **Créer un fichier `reducers/index.js` et y coder le state par défaut de l'application** :
	+ Créer une constante `defaultState`
	+ lui affecter comme valeur un objet avec une propriété `videos` de valeur tableau vide (`[]`) et qui vise à remplacer le state de la `VideoList`.
	+ exporter une fonction anonyme qui prend en paramètre
		* un objet `state` avec comme valeur par défaut la constante `defaultState`  définie juste au dessus,
		* et un objet `action` qui recevra l'action dispatchée par l'action creator
	+ cette fonction retournera le state reçu en paramètre sans lui appliquer de modifications (pour l'instant !)

2. **Connecter `VideoList` au store** :
	+ supprimer le state local (`this.state`)
	+ récupérer à la place le state `videos` du store à l'aide du décorateur `connect` et de la fonction `mapStateToProps()`
	+ modifier la fonction `render()` en conséquence (disparition de `this.state`)

3. **Créer le store dans le fichier `app.js`** :
	+ créer le store de l'application à l'aide de la fonction `createStore( reducer )`
	+ Dans l'appel à la méthode `ReactDOM.render(...)` utiliser le composant `<Provider>` pour entourer le composant `VideoList`. Cela permettra au `connect()` de rendre le `state` accessible dans la `VideoList`. (ne pas oublier de passer le `store` au `Provider` !)

*A ce stade, la compilation doit fonctionner et le site s'exécuter dans le navigateur sans erreur dans la console ! Pour s'en persuader, vous pouvez modifier le state par défaut retourné par le reducer en y mettant des valeurs en dur : si tout se passe bien, elles vont s'afficher dans la `VideoList`.*<br><br>

### 2. Modifier le state grâce aux actions
*Maintenant que l'on est capable d'accéder en lecture au contenu du store, nous allons nous atteler à la **modification du store grâce aux actions et au reducer**.*

1. **Avant d'aller plus loin, nous allons configurer le store pour nous permettre d'utiliser l'extension Redux Devtools** qui nous aidera à debugger notre appli en cas de problème :
	```js
	import { createStore, compose } from 'redux';

	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	const store = createStore( reducer, composeEnhancers() );
	```
	*(Plus d'infos sur l'installation et la configuration de Redux Devtools : https://github.com/zalmoxisus/redux-devtools-extension)*<br>
	Une fois Redux Devtools configuré, ouvrir notre site dans chrome, et dans les outils de développement, afficher l'onglet "Redux". Vous pouvez constater qu'il est possible de voir les actions qui sont lancées (pour le moment une seule) et d'inspecter l'état du state global.

2. **Au lieu de mettre en dur la liste des vidéos dans le `reducer`, nous allons démarrer avec un state par défaut vide**. C'est l'action que nous allons créer qui lui enverra la liste des vidéos : Remettre un tableau vide comme state par défaut dans le `reducer`.

3. **Dans le `componentDidMount()` du composant `VideoList`, remplacer l'appel ajax par le lancement d'une action** (commenter l'appel ajax, on en aura besoin par la suite !):
	+ créer une variable nommée `action` et lui affecter un objet littéral avec deux propriétés :
		* Une propriété `type` qui vaudra la chaîne de caractères `'VIDEO_LIST_COMPLETE'`
		* Une propriété `videos` qui aura comme valeur un tableau de videos en dur (vous pouvez reprendre la liste contenue dans le fichier `videos.js` des précédents tps).
	+ envoyer l'action au store à l'aide de la méthode `this.props.dispatch` injectée par le `connect()` :
  		```js
		this.props.dispatch( action );
		```

4. **Dans le reducer (`reducers/index.js`) prendre en charge cette action** :
	+ Tester si le type de l'action reçue correspond à `'VIDEO_LIST_COMPLETE'`
	+ Retourner un nouveau state en y injectant la propriété `action.videos`

*Vous pouvez à nouveau tester l'application, cette fois la `VideoList` doit se remplir presque immédiatement après le lancement !*<br><br>


### 3. Les appels ajax et les actions asynchrones
*Maintenant que l'on est capable d'agir sur le contenu du store à l'aide d'une **action**, nous allons nous attaquer aux **action creators asynchrones** et au déclenchement d'appels ajax.*

1. **Dans un premier temps nous allons externaliser la création de notre action dans un module à part de la vue** (meilleure répartition des responsabilités). Nous allons donc coder un **"action creator"** (fonction de création d'action) :
	+ Créer un fichier `actions/index.js`
	+ Coder et exporter une fonction nommée `fetchVideos()` qui retournera le même objet que l'action actuellement dispatchée dans le `componentDidMount` de la `VideoList`
	+ Pour la propriété `type` de l'action retournée, plutôt que d'utiliser une chaîne de caractères en dur, créer et exporter une constante `VIDEO_LIST_COMPLETE` dont la valeur sera la chaîne de caractères `'VIDEO_LIST_COMPLETE'`. Utiliser cette constante dans le `type` de l'action retournée **et** dans le `reducer`.
	+ Dans le composant `VideoList`, importer la fonction `fetchVideos()` et l'employer à la place de l'action en dur jusque là utilisée dans le `componentDidMount()`
	+ Vérifier que tout fonctionne toujours (Penser à utiliser Redux Devtools !)

2. **Pour que l'action creator puisse communiquer avec les webservices et faire des dispatch asynchrone, il faut que le store soit initialisé avec le middleware `redux-thunk`** :
	```js
	import { createStore, compose, applyMiddleware } from 'redux';
	import thunk from 'redux-thunk';

	const store = createStore(
		reducer,
		composeEnhancers(
			applyMiddleware(thunk)
		)
	);
    ```
3. **Modifier l'action creator `fetchVideos()` pour lancer un appel ajax** :
	+ Au lieu de retourner directement l'action, retourner une fonction anonyme
	+ Dans cette fonction anonyme, lancer l'appel ajax avec superagent vers le webservice `api/videos`
	+ Notifier le store (à l'aide de la fonction `dispatch()`) de la réception des données une fois l'appel ajax terminé en renseignant la propriété `videos` de l'action dispatchée avec le tableau retourné par le webservice.

***Ca y est ! Vous pouvez à nouveau tester l'application, cette fois l'appel ajax doit se lancer et le résultat s'afficher dans la VideoList. Au niveau fonctionnel, rien n'a changé, mais du point de vue architecture et robustesse du code, on se sent bien mieux !*** :sweat_smile:
<br>*Noter dans Redux Devtools l'apparition de l'action et le résultat sur le state.*
<br>**Si vous avez survécu jusque là, bravo !** :beers:

## Pour aller plus loin
- Convertir à leur tour `VideoDetail` et `VideoForm` à Redux :
	+ Ajouter un state et des reducers pour chaque donnée actuellement dans le state de ces 2 composants, à savoir la vidéo courante de `VideoDetail`, les commentaires, le commentaire ajouté dans le formulaire, et la vidéo ajoutée par le `VideoForm`.
	+ Modifier les composants `VideoDetail` et `VideoForm` pour utiliser le state global au lieu du state local (`this.state`) et des action creators à la place de l'appel ajax.
- Utiliser la fonction `combineReducers` pour clarifier l'organisation du reducer.
- Externaliser le code de création du store dans un fichier `store/configureStore.js`
- Utiliser la fonction `mapDispatchToProps()` pour simplifier le lancement des action creators.