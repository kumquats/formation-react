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
1. Créer un fichier `reducers/index.js` et y coder le reducer de l'application. Dans le state par défaut du reducer, créer une propriété qui remplacera le state de la **VideoList** (la liste des vidéos).
2. Connecter **VideoList** au store afin de récupérer le state de la liste des vidéos et modifier la fonction `render()` en conséquence.
3. Dans **VideoList**, déléguer le chargement ajax de la liste des vidéos à un action creator `fetchVideos`
4. Modifier le fichier `app.js` pour utiliser redux : créer le store et l'injecter dans les composants de l'appli.



## Pour aller plus loin
- Convertir à leur tour Video et VideoForm à Redux :
	+ Ajouter un state et des reducers pour chaque donnée actuellement dans le state de ces 2 composants, à savoir la vidéo courante de **Video**, les commentaires, le commentaire ajouté dans le formulaire, et la vidéo ajoutée par le **VideoForm**.
	+ Modifier les composants **Video** et **VideoForm** pour utiliser le state global au lieu du state local (`this.state`) et des action creators à la place de l'appel ajax.
- Modifier le store pour utiliser l'extension chrome Redux Devtools. En profiter pour externaliser le code de création du store dans un fichier `store/configureStore.js`
- Utiliser la fonction `combineReducers` pour optimiser l'organisation du reducer.
