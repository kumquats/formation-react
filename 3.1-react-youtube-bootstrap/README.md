# TP Création d'un Youtube Like

## Objectifs

L'objectif de ce TP est de mettre en place les bases d'une application similaire à Youtube.

## Préparatifs
- Récupérer le contenu du dossier 'demarrage' du TP et placer les fichiers dans un dossier de votre arborescence web (*ex: c:\wamp\www\3.1-react-youtube-bootstrap\\*) (*vous pouvez également repartir des fichiers de votre tp précédent, dans ce cas ne récupérez que le dossier `demarrage/site` et placez le à côté du dossier `src`*)
- Dans le dossier 'site' coller le dossier 'vendor' (fourni par le formateur)
- Exécutez le script SQL `site/schema.sql` (dans phpmyadmin ou en ligne de commande mysql) afin de mettre en place la base de données
- Dans le dossier 'src' lancer la commande `npm install` pour récupérer les dépendances du projet (babel, webpack)
- Installer les paquets NPM suivants avec l'option `--save-dev` :
    + babel-preset-react
- Installer les packets NPM suivants avec l'option `--save` :
    + react
    + react-dom
- Ajouter le preset **'react'** dans le fichier `.babelrc`
- Modifier le fichier `src/webpack.config.js` afin que le fichier de sortie soit écrit dans le dossier `site/web/js` et désactiver (commenter) la minification du JS pour gagner en rapidité de build :
```js
output: {
	path: path.resolve(__dirname, '../site/web/js'),
	filename: 'app.bundle.js'
},
```
- ajouter au `package.json` un script permettant de lancer un "watch" (mécanisme qui tourne en tâche de fond et qui recompile automatiquement dès qu'une modification sur un fichier survient) :
```js
"scripts": {
	"build": "webpack",
	"watch": "webpack -d --watch"
},
```
- Supprimer les fichiers devenus inutiles :
	+ `src/js/helloWorld.js`
	+ `src/index.html`
	+ et le dossier `src/build`

## Instructions
1. modifier le fichier **"src/js/app.js"** pour initialiser une application React contenant un composant unique **Video**
2. Créer le composant **"Video"** dans le dossier **src/js**. Ce composant :
    + dispose d'un state **"video"** de la forme :
	```js
	{
		id: Integer,
		title: String,
		description: String,
		file: String
	}
	```
    + doit afficher le titre & la description de la vidéo contenue dans son state (cf. [Proposition de DOM](#proposition-de-dom))
    + doit afficher une balise video dont la source correspond à la propriété **"file"** du state **"video"**

3. Tester l'application sur `http://<votre-url-projet>/site/web`



## Pour aller plus loin
Créer un composant **"VideoList"** :
- Modifier le fichier `app.js` pour afficher ce composant à la place du composant **Video**
- Ajouter un state avec une propriété **"videos"** qui contient une liste d'objets video (même format que le state `video` du composant **Video**)
- Afficher la liste des vidéos qui se trouvent dans son state
- Chaque vidéo de la liste est représentée par son titre et une vignette (en manque d'inspiration ? Jetez un oeil à http://lorempixel.com/)

Quelques optimisations pour le composant **Video** :
- Dans le composant **"Video"** le champ description devient facultatif, ne pas l'afficher s'il n'y en a pas dans le state.
- Toutes les 2 secondes, la vidéo affichée dans le composant **"Video"** doit changer pour afficher la vidéo suivante de la VideoList (externaliser la liste des vidéos dans un fichier js distinct **"videos.js"** et importé dans chaque composant)
- Dans le composant **"Video"** ne pas re-rendre la vidéo si la vidéo n'a pas changé lors du changement aléatoire.

Pour la **VideoList** :
- Toutes les X secondes, ajouter une nouvelle vidéo en haut de la **"VideoList"**

## Proposition de DOM

**Video**
```html
<div class="row marketing">
    <div class="col-sm-12 col-md-12">
        <div class="thumbnail">
            <div class="caption">
                <video
                    style="width:100%; background-color:black"
                    height="300"
                    controls
                    src=""
                >
                </video>
                <h3></h3>
                <p></p>
            </div>
        </div>
    </div>
</div>
```


**VideoList**
```html
<div class="row marketing">
    <div class="col-lg-12">
        <ul class="media-list">
            <li class="media">
                <div class="media-left">
                    <img class="media-object"
                        alt="cat" src='http://lorempixel.com/120/70/cats/?r=0.1267489'
                        width="120"
                        height="70" />
                </div>
                <div class="media-body">
                    <h4 class="media-heading"></h4>
                    <p></p>
                </div>
            </li>
        </ul>
    </div>
</div>
```
