# TP Gestion de la navigation

## Objectifs

L'objectif de ce TP est de mettre en place un système de routing permettant de reproduire la navigation par URL que l'on retrouve dans les site web classiques mais sans rechargement de page.

## Préparatifs

- Installer les packets NPM suivants avec l'option --save:
    + react-router
    + react-router-redux
- Consulter la documentation de ["react-router"](https://github.com/reactjs/react-router/tree/master/docs) 

## Instructions
- importer le routerReducer dans le reducer de notre application
- modifier le store de notre application pour ajouter le routerMiddleware de react-router-redux comme middleware
- Créer un composant **"App"** dans le dossier **"js/containers"**
    + Ce composant représentera le layout de l'application
    + Doit effectuer le rendu de **"this.props.children"** dans une **"div"**
- Créer un fichier **"routes.js"** dans le dossier **"js"** définissant le routing de l'application
    + Créer une route principale ayant pour URL la racine du site (Utiliser la variable **"config.basePath"**) et à laquelle on assigne le composant **"App"**
    + Dans la route principale créer les routes suivante
        * une **IndexRoute** assignée à **"VideoList"**
        * une **Route** assignée à **VideoForm** avec l'URL **"/videos/new"**
        * une **Route** assignée à **Video** avec l'URL **"/videos/:id"**
    + Exportez le routing
- Dans le fichier **"app.js"**
    + Importez le fichier de routing créé précédemment
    + Au lieux d'effectuer le rendu de nos composants directement, rendre le composant **"Router"** de **"react-router"** avec les **"props"** suivantes:
        * **history** => **browserHistory**
        * **routes** => le routing importé précédemment
    NB : si votre site se trouve dans un sous-dossier et pas à la racine de votre serveur web vous devrez indiquer au Router le chemin vers la racine de votre site. Pour cela ne pas utiliser `browserHistory` de react-router mais la fonction `useRouterHistory` comme suit :
```javascript
const browserHistory = useRouterHistory(createHistory)({
  basename: config.basePath // racine du site concaténé aux URLs du Router
});
const history = syncHistoryWithStore(browserHistory, store);
```
- Créer un composant **"Menu"** dans le dossier **js/components**
    + Grâce au compostant **"Link"** de **"react-router"** créer les lien suivants:
        * Un lien vers la page d'accueil (**VideoList**)
        * Un lien vers la page de création de vidéo (**VideoForm**)
    + Afficher ce composant dans le composant **"App"** juste avant **"this.props.children"**

## Pour aller plus loin
- Modifier le composant **"VideoItem"** afin d'afficher un lien vers la page détail de la vidéo associée
- Modifier le composant **VideoForm** afin d'éffectuer une redirection vers la page détail de la vidéo lorsqu'elle a été créée

## Proposition de markup
**App**
```html
<div class="container">
    ...
</div>
```

**Menu**
```html
<div class="header clearfix">
    <nav>
        <ul class="nav nav-pills pull-right">
            <li role="presentation">
                <a href="#">Liste des vidéos</a>
            </li>
            <li role="presentation">
                <a href="#">Ajouter une vidéo</a>
            </li>
        </ul>
    </nav>
    <h3 class="text-muted">REACT - YouTube Killer</h3>
</div>
```