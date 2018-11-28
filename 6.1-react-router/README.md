# TP Gestion de la navigation

## Objectifs

L'objectif de ce TP est de mettre en place un système de routing permettant de reproduire la navigation par URL que l'on retrouve dans les site web classiques mais sans rechargement de page.

## Préparatifs

- Installer les paquets react-router, react-router-dom et connected-react-router (pour la connexion à Redux) :
```bash
npm install --save react-router react-router-dom connected-react-router
```
- Consulter la documentation de ["react-router"](https://github.com/ReactTraining/react-router/)

## Instructions
1. **Créer un composant `Layout` dans le dossier `js/containers`** (cf. [Proposition de Markup](#proposition-de-markup)) : dans la méthode `render()` utiliser les composants `<Switch>` et `<Route>` de react-router pour configurer le routing de l'application :
	- une **Route** d'URL **"/"** associée à `VideoList`
	- une **Route** d'URL **"/videos/new"** associée à `VideoForm`
	- une **Route** d'URL **"/videos/:id"** associée à `VideoDetail`
	- ne pas oublier l'utilisation du décorateur `withRouter()` dans l'export de la classe !

2. **Dans le fichier `js/app.js`**
    + Créer un objet `browserHistory` à l'aide de la fonction `createBrowserHistory()` de la librairie `history` (installée avec react-router) et lui passer l'url de base du site (via la variable `config.basePath`)
    + Dans le `render()`, à l'intérieur du composant `<Provider>`, rendre un composant `<ConnectedRouter>` (importé de `connected-react-router`).
    + Remplacer le contenu du `<Provider>` par une instance de composant `ConnectedRouter` de `connected-react-router`. Lui passer :
		* le `browserHistory` (prop "history")
		* et le composant `Layout` (comme composant enfant).
    + Le store a aussi besoin du `browserHistory`, on va donc le passer en paramètre de la fonction `configureStore`

3. **Adapter le reducer de manière à gérer le state de react-router** en faisant en sorte de ne plus retourner directement le résultat du **combineReducers** mais une fonction qui reçoit un **history** en paramètre et **retourne le résultat du combineReducers**. Ajouter également le sous-reducer **connectRouter** en l'associant à la propriété **router** du state et en lui passant l'history reçu en paramètre.

4. **Modifier le store pour le rendre capable de gérer le state de react-router** En envoyant l'history, reçu en paramètre, au reducer. Ajouter également le `routerMiddleware` de `connected-react-router` dans les middlewares du store.

5. **Modifier le composant `VideoItem` pour permettre à l'utilisateur, lorsqu'il clique sur un VideoItem, d'afficher la page détail de la vidéo associée** grâce au compostant `<Link>` de `react-router-dom`

## Pour aller plus loin
- **Créer un composant `Menu` dans le dossier `js/components`** (cf. [Proposition de Markup](#proposition-de-markup))
    + Dans la méthode `render()`, retourner deux liens grâce au compostant `<Link>` de **"react-router"** :
        * Un lien vers la page d'accueil (**VideoList**)
        * Un lien vers la page de création de vidéo (**VideoForm**)
    + Afficher ce composant dans le composant `Layout` juste avant le `<Switch>`
- **Modifier le composant **VideoForm** afin d'effectuer une redirection vers la page détail de la vidéo lorsqu'elle a été créée à l'aide de l'action creator `push`**

## Proposition de markup
**Layout :**
```html
<div class="container">
    ...
</div>
```

**Menu :**
```html
<header>
	<nav class="navbar navbar-inverse navbar-fixed-top">
		<div class="container">
			<div class="navbar-header">
				<a href="#" class="navbar-brand">
					<i class="glyphicon glyphicon-film" style="margin-right:10px"></i>
					Reactube
				</a>
			</div>
			<ul class="nav navbar-nav navbar-right">
				<li>
					<a href="#">Liste des vidéos</a>
				</li>
				<li>
					<a href="#">Ajouter une vidéo</a>
				</li>
			</ul>
		</div>
	</nav>
</header>
```