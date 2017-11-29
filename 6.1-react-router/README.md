# TP Gestion de la navigation

## Objectifs

L'objectif de ce TP est de mettre en place un système de routing permettant de reproduire la navigation par URL que l'on retrouve dans les site web classiques mais sans rechargement de page.

## Préparatifs

- Installer les packets react-router (en version 3.x) et react-router-redux :
```bash
npm install --save react-router@^3.2.0
npm install --save react-router-redux
```
- Consulter la documentation de ["react-router version 3"](https://github.com/ReactTraining/react-router/tree/v3/docs)

## Instructions
1. Importer le `routerReducer` dans le reducer de notre application

2. Modifier le store pour ajouter le `routerMiddleware` de `react-router-redux` dans les middlewares du store

3. Créer un composant **"App"** dans le dossier `js/containers`
    + Ce composant représentera le layout de l'application
    + Dans la méthode `render()` de App, retourner une balise div avec à l'intérieur `this.props.children`. Les children de ce composant seront injectés par react-router sur la base du fichier de routes que nous allons définir !

4. Créer un fichier `js/routes.js` définissant le routing de l'application :
    + Créer une route principale ayant pour URL la racine du site (Utiliser la variable `config.basePath`) et lui associer le composant **"App"**
    + Dans cette route principale, créer les sous-routes suivantes :
        * une **IndexRoute** associée à **"VideoList"**
        * une **Route** associée à **VideoForm** avec l'URL **"/videos/new"**
        * une **Route** associée à **Video** avec l'URL **"/videos/:id"**
    + Ne pas oublier d'exportez le routing à l'aide de l'instruction `export default`

5. Dans le fichier `js/app.js`
    + Importer le fichier de routing créé précédemment
    + Remplacer le contenu du `<Provider>` par une instance de composant `Router`  de `react-router` avec les **"props"** suivantes:
        * **history**
        * **routes**
    NB : si votre site se trouve dans un sous-dossier et pas à la racine de votre serveur web vous devrez indiquer au Router le chemin vers la racine de votre site. Pour cela ne pas utiliser le `browserHistory` de react-router mais la fonction `useRouterHistory` comme suit :
```javascript
const browserHistory = useRouterHistory(createHistory)({
  basename: config.basePath // racine du site qui sera concaténée aux URLs du Router
});
const history = syncHistoryWithStore(browserHistory, store);
```
6. Créer un composant **"Menu"** dans le dossier **js/components**
    + Dans la méthode `render()`, retourner deux liens grâce au compostant `<Link>` de **"react-router"** :
        * Un lien vers la page d'accueil (**VideoList**)
        * Un lien vers la page de création de vidéo (**VideoForm**)
    + Afficher ce composant dans le composant **"App"** juste avant **"this.props.children"**

## Pour aller plus loin
- Modifier le composant **"VideoItem"** afin d'afficher un lien vers la page détail de la vidéo associée
- Modifier le composant **VideoForm** afin d'effectuer une redirection vers la page détail de la vidéo lorsqu'elle a été créée

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