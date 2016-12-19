# TP Création d'un Youtube Like

## Objectifs

L'objectif de ce TP est de mettre en place les bases d'une application similaire à Youtube.

## Préparatifs
- récupérer le contenu du dossier 'demarrage' du TP et placer les fichiers dans un dossier de votre arborescence web (*ex: c:\wamp\www\3.1-react-youtube-bootstrap\\*) (*vous pouvez également repartir des fichiers de votre tp précédent, dans ce cas ne récupérez que le dossier `demarrage/back` et placez le à côté du dossier `front`*)
- dans le dossier 'back' coller le dossier 'vendor' (fourni par le formateur)
- Executez le script SQL `back/schema.sql` (dans phpmyadmin ou en ligne de commande mysql) afin de mettre en place la base de données
- dans le dossier 'front' renommer le projet dans le `package.json` en 'react_youtube'
- dans le dossier 'front' lancer la commande `npm install`
- dans le dossier 'front' installer les packets NPM suivants avec l'option --save:
    + react
    + react-dom
- Installer les paquets NPM suivants avec l'option --save-dev:
    + babel-preset-react
- Ajouter le preset **'react'** dans le fichier .babelrc
- Modifier le fichier **'front/webpack.config.js'** afin que le fichier de sortie soit écrit dans le dossier **'back/web'**
- Supprimer les fichiers **'front/js/helloWorld.js'**, **'front/index.html'** et le dossier **"front/build"**

## Instructions
- modifier le fichier **"front/js/app.js"** pour initialiser une application React contenant un composant unique **Video**
- Créer le composant **"Video"** dans le dossier **front/js**. Ce composant :
    + dispose par défaut d'un state **"video"** de la forme `{id: Integer, title: String, description: String, file: String }`
    + doit afficher le titre & la description de la vidéo
    + doit afficher une balise video ayant pour source la propriété **"file"** du state **"video"**
- tester l'application sur `http://<votre-url-projet>/back/web`
- Créer un composant **"VideoList"** et modifier l'application pour afficher ce composant à la place de **"Video"**. Ce composant :
    + affiche une liste de vidéos qui se trouve dans son state **"videos"**
    + chaque vidéo de la liste est représentée par son titre et une vignette (en manque d'inspiration ? Jetez un oeil à http://lorempixel.com/)


## Pour aller plus loin
Quelques optimisations :
- Dans le composant **"Video"** le champ description devient facultatif, ne pas l'afficher s'il n'y en a pas dans le state.
- Toutes les 2 secondes, la vidéo affichée dans le composant **"Video"** doit changer pour afficher la vidéo suivante de la VideoList (externaliser la liste des vidéos dans un fichier js distinct **"videos.js"** et importé dans chaque composant) 
- Dans le composant **"Video"** ne pas re-rendre la vidéo si la vidéo n'a pas changé lors du changement aléatoire.
- toutes les X secondes, ajouter une nouvelle vidéo en haut de la **"VideoList"**
- à l'apparition de chaque nouvelle vidéo, l'afficher de manière animée avec une transition CSS cf. https://facebook.github.io/react/docs/animation.html
- utiliser les styles de bootstrap pour skinner les 2 composants 

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
                        alt="cat" src='http://lorempixel.com/120/70/cats?r=0.1267489'
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
