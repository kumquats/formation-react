# TP Redux

## Objectifs

L'objectif de ce TP est d'apprendre à structurer et à gérer éfficacement l'état de l'application à l'aide de Redux

## Préparatifs

- Installer les packets NPM suivants avec l'option --save:
    + redux
    + react-redux
    + redux-thunk
- Consulter la documentation de [Redux](http://redux.js.org/#documentation) 
- Installer l'extension chrome [Redux Devtools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)
- Réorganiser les fichiers selon la structure suivante et modifier les imports en conséquence:
```
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

- Créer le reducer dans un fichier **index.js** du dossier **reducers**. Dans le state par défaut créer une propriété pour chaque donnée actuellement dans le state des composants, à savoir la liste des vidéos de **VideoList**, la vidéo courante de **Video**, les commentaires, le commentaire ajouté dans le formulaire, et la vidéo ajoutée par la **VideoForm**.
- Modifier le fichier app.js pour utiliser redux : créer le store et l'injecter dans les composants de l'appli.
- connecter **VideoList** au store et déléguer le chargement de la liste des vidéos à un action creator `fetchVideos`
- faire de même pour Video et VideoForm. L'objectif est de débarrasser les composants de l'utilisation de leur state.

## Pour aller plus loin
- modifier le store pour utiliser l'extension chrome Redux Devtools. En profiter pour externaliser le code de création du store dans un fichier `store/configureStore.js`
- Utiliser la fonction `combineReducers` pour optimiser l'organisation du reducer.
