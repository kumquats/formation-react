# TP Redux

## Objectifs

L'objectif de ce TP est d'apprendre à structurer l'application et à gérer efficacement le state global à l'aide de Redux.

## Préparatifs

- Installer redux, react-redux et redux-thunk avec l'option --save :
```bash
npm install --save redux react-redux redux-thunk
```
- Installer redux-logger avec l'option --save-dev :
```bash
npm install --save-dev redux-logger
```
- Consulter la documentation de [Redux](http://redux.js.org/#documentation)
- Installer l'extension chrome [Redux Devtools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)
- Réorganiser les fichiers selon la structure suivante et modifier les imports en conséquence:
```bash
.
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

#### Convertir la VideoList à Redux :

1. Créer un fichier `reducers/index.js` et y coder le state par défaut de l'application :
	+ Créer une constante `defaultState`
	+ lui affecter comme valeur un objet avec une propriété `videos` qui remplacera le state de la **VideoList**.
	+ exporter une fonction anonyme qui prend en paramètre
		* un objet `state` avec comme valeur par défaut la constante `defaultState`,
		* et un objet `action` qui correspondra à l'action dispatchée par l'action creator
	+ cette fonction retournera le state reçu en paramètre sans lui appliquer de modifications (pour l'instant !)

2. Connecter **VideoList** au store :
	+ supprimer le state local (`this.state`)
	+ récupérer à la place le state `videos` du store à l'aide du décorateur `connect` et de la fonction `mapStateToProps()`
	+ modifier la fonction `render()` en conséquence (disparition de `this.state`)

3. Modifier le fichier `app.js` :
	+ créer le store de l'application à l'aide de la fonction `createStore( reducer )`
	+ Dans l'appel à la méthode `ReactDOM.render(...)` utiliser le composant `<Provider>` pour entourer le composant **VideoList**. Cela permettra de rendre le `state` accessible dans la **VideoList**. (ne pas oublier de passer le `store` au `Provider` !)

4. A ce stade, la compilation doit fonctionner et le site s'exécuter dans le navigateur sans erreur dans la console ! Pour s'en persuader, vous pouvez modifier le state par défaut retourné par le reducer en y mettant des valeurs en dur : si tout se passe bien, elles vont s'afficher dans la **VideoList**.

*Maintenant que l'on est capable d'accéder en lecture au contenu du store, nous allons nous atteler à la **modification du store**.*

5. Au lieu de mettre en dur la liste des vidéos dans le reducer, nous allons démarrer avec un state par défaut vide, et le modifier à l'aide d'un action creator qui injectera la liste des vidéos (pour le moment sans passer pas le webservice, les données seront en dur). <br>
	+ Remettre un tableau vide comme state par défaut dans le reducer
	+ Créer un action creator `fetchVideos()` dans le fichier `actions/index.js`.
	+ L'action retournée par `fetchVideos()` aura 2 propriétés :
		* Une propriété `type` qui vaudra `'VIDEO_LIST_COMPLETE'` (préférez l'utilisation d'une constante, qui aura l'avantage de pouvoir être réutilisée dans le reducer)
		* Une propriété `videos` qui aura comme valeur un tableau de videos en dur (vous pouvez reprendre la liste contenue dans le fichier `videos.js` des précédents tps).

6. Dans le `componentWillMount` du composant **VideoList**, remplacer l'appel ajax par le lancement de l'action creator `fetchVideos()`. Utiliser pour cela la fonction `mapDispatchToProps()`

7. Dans le reducer (`reducers/index.js`) prendre en charge l'action retournée par l'action creator `fetchVideos()` :
	+ Importer la constante `VIDEO_LIST_COMPLETE` de l'action creator
	+ Tester si le type de l'action reçu correspond à `VIDEO_LIST_COMPLETE`
	+ Retourner le nouveau state en y injectant la propriété `action.videos`

*Maintenant que l'on est capable d'agir sur le contenu du store à l'aide d'une **action**, nous allons nous attaquer aux **action creators asynchrones** et au déclenchement d'appels ajax.*

8. Pour que l'action creator puisse faire des dispatch asynchrone, il faut que le store soit initialisé avec le middleware `redux-thunk`

9. Modifier l'action creator `fetchVideos()` :
	+ Au lieu de retourner directement l'action, retourner une fonction anonyme
	+ Dans cette fonction anonyme, lancer l'appel ajax avec superagent vers le webservice `api/videos`
	+ Notifier le store (à l'aide de la fonction `dispatch()`) de la réception des données une fois l'appel ajax terminé en renseignant la propriété `videos` de l'action disptachée avec le tableau retourné par le webservice.


10. Vous pouvez à nouveau tester l'application, cette fois l'appel ajax doit se lancer et le résultat s'afficher dans la VideoList.

## Pour aller plus loin
- Convertir à leur tour Video et VideoForm à Redux :
	+ Ajouter un state et des reducers pour chaque donnée actuellement dans le state de ces 2 composants, à savoir la vidéo courante de **Video**, les commentaires, le commentaire ajouté dans le formulaire, et la vidéo ajoutée par le **VideoForm**.
	+ Modifier les composants **Video** et **VideoForm** pour utiliser le state global au lieu du state local (`this.state`) et des action creators à la place de l'appel ajax.
- Modifier le store pour utiliser l'extension chrome Redux Devtools. En profiter pour externaliser le code de création du store dans un fichier `store/configureStore.js`
- Utiliser la fonction `combineReducers` pour clarifier l'organisation du reducer.
